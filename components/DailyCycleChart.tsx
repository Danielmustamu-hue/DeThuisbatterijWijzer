
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const DailyCycleChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Gradient voor batterij
    const batteryGradient = ctx.createLinearGradient(0, 0, 0, 400);
    batteryGradient.addColorStop(0, 'rgba(66, 153, 225, 0.4)');
    batteryGradient.addColorStop(1, 'rgba(66, 153, 225, 0)');

    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    
    // Zonne-energie (vloeiende curve)
    const solarData = labels.map((_, i) => {
      const x = i - 13;
      return Math.max(0, 6 * Math.exp(-(x * x) / 12));
    });

    // Energieverbruik (realistische pieken)
    const usageData = [0.8, 0.7, 0.6, 0.6, 0.7, 1.2, 2.5, 3.8, 2.4, 1.5, 1.2, 1.1, 1.4, 1.2, 1.3, 1.5, 2.2, 4.5, 4.8, 4.2, 3.5, 2.4, 1.5, 1.0];

    // Batterij status (vlak dat het gat vult)
    const batteryData = labels.map((_, i) => {
      if (i >= 10 && i <= 16) return solarData[i] - 1.2; // Laden van overschot
      if (i >= 17 && i <= 22) return usageData[i] - 0.8; // Ontladen tijdens piek
      return 0;
    });

    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Zon (Opwek)',
            data: solarData,
            borderColor: '#F6AD55',
            backgroundColor: 'transparent',
            tension: 0.4,
            borderWidth: 4,
            pointRadius: 0,
            hoverPointRadius: 6,
          },
          {
            label: 'Huis (Verbruik)',
            data: usageData,
            borderColor: '#E53E3E',
            backgroundColor: 'transparent',
            tension: 0.4,
            borderWidth: 4,
            pointRadius: 0,
            hoverPointRadius: 6,
          },
          {
            label: 'Batterij Effect',
            data: batteryData,
            borderColor: '#4299E1',
            backgroundColor: batteryGradient,
            fill: true,
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              font: { size: 11, weight: '600', family: 'Inter' },
              color: '#718096'
            }
          },
          tooltip: {
            backgroundColor: '#1A202C',
            padding: 12,
            titleFont: { size: 14, weight: 'bold' },
            bodyFont: { size: 13 },
            cornerRadius: 12,
            displayColors: true
          }
        },
        scales: {
          y: {
            display: false,
            beginAtZero: true
          },
          x: {
            grid: { display: false },
            ticks: {
              color: '#A0AEC0',
              font: { size: 10, weight: 'bold' },
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 6
            }
          }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="w-full h-64 md:h-80 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DailyCycleChart;
