
import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const OnbalansSimulator: React.FC = () => {
  const [capacity, setCapacity] = useState(10);
  const [dailyProfit, setDailyProfit] = useState(0);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const generatePrices = () => {
    // Simuleer een typische 2025 dag: lage prijzen middag (zon), hoge prijzen avond
    return Array.from({ length: 24 }, (_, i) => {
      const base = 0.15;
      const solarDip = i >= 11 && i <= 15 ? -0.25 : 0; // Negatieve prijzen bij veel zon
      const eveningPeak = i >= 18 && i <= 21 ? 0.35 : 0;
      const noise = (Math.random() - 0.5) * 0.1;
      return Math.round((base + solarDip + eveningPeak + noise) * 100) / 100;
    });
  };

  useEffect(() => {
    const prices = generatePrices();
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    // Winstberekening: (Max - Min) * Capaciteit * Efficiency (90%)
    const profit = Math.max(0, (maxPrice - minPrice) * capacity * 0.9);
    setDailyProfit(Math.round(profit * 100) / 100);

    if (chartRef.current) {
      if (chartInstance.current) chartInstance.current.destroy();

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
            datasets: [{
              label: 'EPEX Prijs (€/kWh)',
              data: prices,
              backgroundColor: prices.map(p => p < 0 ? '#48BB78' : '#1A202C'),
              borderRadius: 8,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => `Prijs: €${context.parsed.y.toFixed(2)}`
                }
              }
            },
            scales: {
              y: { 
                grid: { color: '#EDF2F7' },
                ticks: { callback: (val) => `€${val}` }
              },
              x: { grid: { display: false } }
            }
          }
        });
      }
    }
  }, [capacity]);

  return (
    <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20" />
        </svg>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h3 className="text-3xl font-black text-gray-900 tracking-tighter italic uppercase">Onbalans Simulator</h3>
          <p className="text-gray-500 font-medium">Wat levert handelen op uurprijzen jou vandaag op?</p>
        </div>
        <div className="bg-[#48BB78] text-white px-8 py-4 rounded-3xl text-center shadow-lg transform hover:scale-105 transition-all">
          <p className="text-[10px] font-black uppercase tracking-widest mb-1">Potentiële Dagwinst</p>
          <p className="text-4xl font-black">€{dailyProfit.toFixed(2)}</p>
        </div>
      </div>

      <div className="h-64 mb-10">
        <canvas ref={chartRef}></canvas>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Gewenste Batterijgrootte: <span className="text-[#48BB78]">{capacity} kWh</span></label>
        </div>
        <input 
          type="range" 
          min="5" 
          max="30" 
          step="5"
          value={capacity} 
          onChange={(e) => setCapacity(parseInt(e.target.value))}
          className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#48BB78]"
        />
        <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase">
          <span>5 kWh</span>
          <span>15 kWh</span>
          <span>30 kWh</span>
        </div>
      </div>

      <div className="mt-10 p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
        <p className="text-sm text-gray-600 leading-relaxed italic">
          <strong className="text-gray-900">Expert tip:</strong> Bij negatieve prijzen (groene balken) betaalt het net jou om de accu te vullen. Met een 10 kWh accu verdien je in dit scenario €{dailyProfit} per dag, puur door de onbalans te helpen herstellen.
        </p>
      </div>
    </div>
  );
};

export default OnbalansSimulator;
