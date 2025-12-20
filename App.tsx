
import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { GoogleGenAI } from "@google/genai";
import { BLOG_POSTS, TOP_5_BRANDS, LEGAL_PAGES, TECHNICAL_SPECS, ADVICE_STEPS } from './constants';
import { CalculationResult, BlogPost, AppTab } from './types';

Chart.register(...registerables);

// --- AI SERVICE ---
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getAIAdvice = async (consumption: number, panels: number, resultSize: number): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        Je bent een onafhankelijke Nederlandse Analytisch Energie Consultant voor 2025.
        Geef een professioneel en objectief advies gebaseerd op de volgende data:
        - Jaarverbruik: ${consumption} kWh
        - Aantal zonnepanelen: ${panels}
        - Geadviseerde opslagcapaciteit: ${resultSize} kWh
        
        STRIKTE PSYCHOLOGISCHE INSTRUCTIE (HET DREMPEL-EFFECT):
        1. Begin met een bevestiging van het potentieel (bijv. "Deze configuratie is rendabel").
        2. SCHAKEL OVER NAAR DE DREMPEL: Waarschuw de gebruiker expliciet dat de installatie technisch complex is.
        3. Benadruk dat brandveiligheid, garantie en verzekeringsvoorwaarden direct afhankelijk zijn van een gecertificeerde installatie (geen doe-het-zelf).
        4. Leg uit dat een dynamisch energiecontract essentieel is om deze specifieke capaciteit optimaal te benutten (handelen op uurprijzen).
        5. Eindig met het advies om minimaal 3 offertes te vergelijken om installatiekwaliteit en prijs te waarborgen via erkende aanbieders.
        6. Wees zakelijk, autoritair en behulpzaam. Maximaal 100 woorden.
      `,
      config: { temperature: 0.2 },
    });
    return response.text || "Consultancy analyse momenteel niet beschikbaar.";
  } catch (error) {
    return `Uw configuratie biedt een uitstekend besparingspotentieel. Voor brandveiligheid en behoud van garantie is installatie door een gecertificeerd specialist vereist. Vergelijk 3 offertes bij erkende partners.`;
  }
};

// --- SUB-COMPONENTS ---

const DailyCycleChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;
    const batteryGradient = ctx.createLinearGradient(0, 0, 0, 400);
    batteryGradient.addColorStop(0, 'rgba(66, 153, 225, 0.4)');
    batteryGradient.addColorStop(1, 'rgba(66, 153, 225, 0)');
    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    const solarData = labels.map((_, i) => {
      const x = i - 13;
      return Math.max(0, 6 * Math.exp(-(x * x) / 12));
    });
    const usageData = [0.8, 0.7, 0.6, 0.6, 0.7, 1.2, 2.5, 3.8, 2.4, 1.5, 1.2, 1.1, 1.4, 1.2, 1.3, 1.5, 2.2, 4.5, 4.8, 4.2, 3.5, 2.4, 1.5, 1.0];
    const batteryData = labels.map((_, i) => {
      if (i >= 10 && i <= 16) return solarData[i] - 1.2;
      if (i >= 17 && i <= 22) return usageData[i] - 0.8;
      return 0;
    });
    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [
          { label: 'Zon (Opwek)', data: solarData, borderColor: '#F6AD55', backgroundColor: 'transparent', tension: 0.4, borderWidth: 4, pointRadius: 0 },
          { label: 'Huis (Verbruik)', data: usageData, borderColor: '#E53E3E', backgroundColor: 'transparent', tension: 0.4, borderWidth: 4, pointRadius: 0 },
          { label: 'Batterij Effect', data: batteryData, borderColor: '#4299E1', backgroundColor: batteryGradient, fill: true, tension: 0.4, borderWidth: 0, pointRadius: 0 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, font: { size: 10, weight: '600' } } } },
        scales: { y: { display: false }, x: { grid: { display: false }, ticks: { maxTicksLimit: 6 } } }
      }
    });
    return () => chart.destroy();
  }, []);
  return <div className="w-full h-64 md:h-80 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-inner"><canvas ref={chartRef}></canvas></div>;
};

const OnbalansSimulator: React.FC = () => {
  const [capacity, setCapacity] = useState(10);
  const [dailyProfit, setDailyProfit] = useState(0);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const prices = Array.from({ length: 24 }, (_, i) => {
      const base = 0.15;
      const solarDip = i >= 11 && i <= 15 ? -0.25 : 0;
      const eveningPeak = i >= 18 && i <= 21 ? 0.35 : 0;
      return Math.round((base + solarDip + eveningPeak + (Math.random() - 0.5) * 0.1) * 100) / 100;
    });
    const profit = Math.max(0, (Math.max(...prices) - Math.min(...prices)) * capacity * 0.9);
    setDailyProfit(profit);

    if (chartRef.current) {
      if (chartInstance.current) chartInstance.current.destroy();
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
            datasets: [{ data: prices, backgroundColor: prices.map(p => p < 0 ? '#48BB78' : '#1A202C'), borderRadius: 8 }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { ticks: { callback: (v) => `€${v}` } }, x: { grid: { display: false } } }
          }
        });
      }
    }
  }, [capacity]);

  return (
    <div className="bg-white rounded-[3rem] p-8 shadow-2xl border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-black uppercase italic tracking-tighter">Onbalans Simulator</h3>
        <div className="bg-[#48BB78] text-white px-6 py-3 rounded-2xl text-center">
          <p className="text-[10px] font-black uppercase tracking-widest">Dagwinst</p>
          <p className="text-2xl font-black">€{dailyProfit.toFixed(2)}</p>
        </div>
      </div>
      <div className="h-48 mb-8"><canvas ref={chartRef}></canvas></div>
      <input type="range" min="5" max="30" step="5" value={capacity} onChange={(e) => setCapacity(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#48BB78]" />
      <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase mt-4"><span>5 kWh</span><span>{capacity} kWh</span><span>30 kWh</span></div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [result, setResult] = useState<(CalculationResult & { postalCode: string }) | null>(null);
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [activeLegal, setActiveLegal] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [calcInput, setCalcInput] = useState({ consumption: 4000, panels: 10, postalCode: '' });

  const navigateTo = (tab: AppTab, anchor?: string) => {
    setActiveTab(tab);
    setSelectedBlog(null);
    setActiveLegal(tab === 'legal' ? anchor || 'privacy' : null);
    if (tab === 'home' && anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const kWp = calcInput.panels * 0.4;
    const idealSize = Math.max(2, Math.round(kWp * 1.2 * 10) / 10);
    const aiAdvice = await getAIAdvice(calcInput.consumption, calcInput.panels, idealSize);
    
    setResult({
      idealSize,
      paybackTime: Math.round((idealSize * 850) / (idealSize * 82) * 10) / 10,
      annualSavings: Math.round(idealSize * 82),
      aiAdvice,
      postalCode: calcInput.postalCode
    });
    setLoading(false);
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const renderBlogContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('## ')) return <h2 key={i} className="text-4xl font-black mt-16 mb-8 text-gray-900 border-l-[12px] border-[#48BB78] pl-8 uppercase italic">{trimmed.replace('## ', '')}</h2>;
      if (trimmed.startsWith('### ')) return <h3 key={i} className="text-2xl font-bold mt-10 mb-6 text-gray-800 italic underline decoration-4 decoration-[#48BB78]/30">{trimmed.replace('### ', '')}</h3>;
      if (trimmed.startsWith('* ')) return <li key={i} className="ml-12 mb-4 text-gray-600 list-disc font-medium text-xl leading-relaxed">{trimmed.replace('* ', '')}</li>;
      if (!trimmed) return <div key={i} className="h-4" />;
      return <p key={i} className="mb-8 text-gray-600 leading-relaxed text-xl font-normal text-justify" dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] font-['Inter']">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="w-10 h-10 bg-[#48BB78] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-xl font-black text-gray-900 uppercase tracking-tighter italic">Thuisbatterij Wijzer</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-[11px] font-black text-gray-400 uppercase tracking-widest">
            <button onClick={() => navigateTo('home')} className={activeTab === 'home' ? 'text-[#48BB78]' : ''}>Home</button>
            <button onClick={() => navigateTo('kennisbank')} className={activeTab === 'kennisbank' ? 'text-[#48BB78]' : ''}>Kennisbank</button>
            <button onClick={() => navigateTo('over-ons')} className={activeTab === 'over-ons' ? 'text-[#48BB78]' : ''}>Over Ons</button>
            <button onClick={() => navigateTo('home', 'calculator')} className="bg-[#48BB78] text-white px-6 py-3 rounded-full hover:bg-black transition-all">Bereken Besparing</button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-in">
            {/* HERO */}
            <section className="relative pt-20 pb-32 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-block px-4 py-2 rounded-full bg-[#48BB78]/10 text-[#48BB78] text-[10px] font-black uppercase tracking-widest mb-8 italic">Update: Energiemarkt Maart 2025</div>
                  <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.85] mb-8 tracking-tighter uppercase italic">
                    Stop De <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48BB78] to-[#38a169]">Terugleverboete</span>
                  </h1>
                  <p className="text-2xl text-gray-400 mb-12 max-w-xl italic font-medium leading-relaxed">Verzilver uw zonnestroom en neutraliseer uw energierekening met AI-gestuurde opslag.</p>
                  <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                    <button onClick={() => navigateTo('home', 'calculator')} className="bg-gray-900 text-white px-12 py-6 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-2xl">Start Analyse</button>
                    <button onClick={() => navigateTo('home', 'experts')} className="bg-white border-2 border-gray-100 text-gray-500 px-12 py-6 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:border-[#48BB78] transition-all">Lees Gidsen</button>
                  </div>
                </div>
                <div id="calculator" className="flex justify-center">
                  <div className="bg-white p-10 rounded-[4rem] shadow-4xl border border-gray-50 max-w-md w-full relative">
                    <h3 className="text-2xl font-black mb-8 italic uppercase tracking-tighter">Rendement Check</h3>
                    <form onSubmit={handleCalculate} className="space-y-6">
                      <input type="text" placeholder="Postcode (1234 AB)" value={calcInput.postalCode} onChange={e => setCalcInput({...calcInput, postalCode: e.target.value.toUpperCase()})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none font-bold" required />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2"><label className="text-[9px] font-black uppercase text-gray-400">Verbruik (kWh)</label><input type="number" value={calcInput.consumption} onChange={e => setCalcInput({...calcInput, consumption: parseInt(e.target.value)})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none font-bold" /></div>
                        <div className="space-y-2"><label className="text-[9px] font-black uppercase text-gray-400">Panelen (stuks)</label><input type="number" value={calcInput.panels} onChange={e => setCalcInput({...calcInput, panels: parseInt(e.target.value)})} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none font-bold" /></div>
                      </div>
                      <button type="submit" disabled={loading} className="w-full bg-[#48BB78] text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl flex justify-center items-center">
                        {loading ? 'Analyseert...' : 'Bereken Mijn Rapport'}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* RESULTS SECTION */}
            {result && (
              <section id="results-section" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-50 p-10 rounded-[3rem] text-center border-b-[10px] border-[#48BB78]">
                      <p className="text-[10px] font-black uppercase text-gray-400 mb-2">Ideale Opslag</p>
                      <p className="text-5xl font-black text-gray-900">{result.idealSize} <span className="text-xl">kWh</span></p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-[3rem] text-center border-b-[10px] border-[#ED8936]">
                      <p className="text-[10px] font-black uppercase text-gray-400 mb-2">Besparing / Jaar</p>
                      <p className="text-5xl font-black text-gray-900">€{result.annualSavings}</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-[3rem] text-center border-b-[10px] border-blue-500">
                      <p className="text-[10px] font-black uppercase text-gray-400 mb-2">Terugverdientijd</p>
                      <p className="text-5xl font-black text-gray-900">{result.paybackTime} <span className="text-xl">Jaar</span></p>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-white p-12 rounded-[4rem] relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-3xl font-black mb-8 italic uppercase border-l-8 border-[#48BB78] pl-8">AI Expert Analyse</h3>
                      <p className="text-xl text-gray-300 font-medium italic leading-relaxed">{result.aiAdvice}</p>
                    </div>
                    <div className="absolute top-0 right-0 p-12 opacity-5"><svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/></svg></div>
                  </div>
                </div>
              </section>
            )}

            {/* INTERACTIVE WIDGETS */}
            <section className="py-32 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                <OnbalansSimulator />
                <div className="bg-gray-900 rounded-[3rem] p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-6">De Dagelijkse Cyclus</h3>
                    <p className="text-gray-400 text-lg italic mb-8">Visualiseer hoe uw batterij de "Solar Peak" van de middag verschuift naar uw avondgebruik.</p>
                  </div>
                  <DailyCycleChart />
                </div>
              </div>
            </section>

            {/* KNOWLEDGE BASE TEASER */}
            <section id="experts" className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-16">
                  <h2 className="text-5xl font-black italic uppercase tracking-tighter">Masterclasses <span className="text-[#48BB78]">2025</span></h2>
                  <button onClick={() => navigateTo('kennisbank')} className="text-[10px] font-black uppercase tracking-widest text-[#48BB78] underline underline-offset-8">Bekijk alles &rarr;</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {BLOG_POSTS.slice(0, 3).map(post => (
                    <div key={post.id} className="group cursor-pointer" onClick={() => { setSelectedBlog(post); setActiveTab('kennisbank'); window.scrollTo(0,0); }}>
                      <div className="aspect-[16/10] rounded-[3rem] overflow-hidden mb-6 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                        <img src={post.imageUrl} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" alt={post.title} />
                      </div>
                      <h3 className="text-2xl font-black italic uppercase mb-3 leading-tight group-hover:text-[#48BB78] transition-colors">{post.title}</h3>
                      <p className="text-gray-400 text-sm italic font-medium line-clamp-2">{post.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'kennisbank' && (
          <section className="py-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              {selectedBlog ? (
                <article className="animate-in max-w-5xl mx-auto">
                  <button onClick={() => setSelectedBlog(null)} className="text-[10px] font-black uppercase tracking-widest text-[#48BB78] mb-12 flex items-center">&larr; Terug naar archief</button>
                  <h1 className="text-6xl md:text-8xl font-black mb-12 italic uppercase leading-none tracking-tighter">{selectedBlog.title}</h1>
                  <div className="aspect-video rounded-[4rem] overflow-hidden mb-20 shadow-4xl"><img src={selectedBlog.imageUrl} className="w-full h-full object-cover grayscale" /></div>
                  <div className="prose prose-2xl max-w-none">{renderBlogContent(selectedBlog.content)}</div>
                </article>
              ) : (
                <div className="animate-in">
                  <h1 className="text-7xl font-black mb-20 italic uppercase tracking-tighter text-center">Het Kennis <span className="text-[#48BB78]">Archief</span></h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {BLOG_POSTS.map(post => (
                      <div key={post.id} className="group cursor-pointer bg-gray-50 p-8 rounded-[4rem] hover:bg-white hover:shadow-4xl transition-all" onClick={() => setSelectedBlog(post)}>
                        <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700">
                          <img src={post.imageUrl} className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-2xl font-black mb-4 italic uppercase leading-none group-hover:text-[#48BB78]">{post.title}</h2>
                        <p className="text-gray-400 text-sm italic font-medium mb-6 line-clamp-3">{post.excerpt}</p>
                        <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-widest">Lees Meer &rarr;</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {activeTab === 'over-ons' && (
          <section className="py-20 bg-white min-h-screen animate-in">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-widest mb-4 block italic">Onze Missie</span>
              <h1 className="text-6xl md:text-8xl font-black mb-12 italic uppercase leading-[0.85] tracking-tighter">Orde In De <br /><span className="text-[#48BB78]">Energiechaos</span></h1>
              <div className="prose prose-2xl text-gray-500 italic font-medium leading-relaxed text-left space-y-8">
                <p>Wij zijn een onafhankelijk team van dataspecialisten die de Nederlandse energiemarkt van 2025 analyseren. Ons doel is simpel: huishoudens helpen navigeren door de complexe wereld van terugleverkosten en dynamische contracten.</p>
                <p>Wij verkopen zelf geen batterijen. Ons verdienmodel is transparant: wij ontvangen een vergoeding van gecertificeerde partners wanneer u via ons platform een offerte aanvraagt of overstapt. Dit stelt ons in staat onze tools gratis en onafhankelijk te houden.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'legal' && activeLegal && (
          <section className="py-20 bg-white min-h-screen animate-in">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-6xl font-black mb-12 italic uppercase tracking-tighter underline decoration-8 decoration-[#48BB78]/20">{LEGAL_PAGES[activeLegal].title}</h1>
              <div className="prose prose-xl max-w-none text-gray-600 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: LEGAL_PAGES[activeLegal].content }} />
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-6">Thuisbatterij Wijzer</h4>
            <p className="text-gray-400 text-lg font-medium italic leading-relaxed max-w-md">Onafhankelijk adviesplatform voor de transitie naar slimme energie-opslag. Realtime data, AI-gestuurd advies.</p>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-widest text-[#48BB78] mb-6">Navigatie</h5>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-500">
              <li><button onClick={() => navigateTo('home')} className="hover:text-white transition">Home</button></li>
              <li><button onClick={() => navigateTo('kennisbank')} className="hover:text-white transition">Kennisbank</button></li>
              <li><button onClick={() => navigateTo('over-ons')} className="hover:text-white transition">Over Ons</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-widest text-[#ED8936] mb-6">Juridisch</h5>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-500">
              <li><button onClick={() => navigateTo('legal', 'privacy')} className="hover:text-white transition">Privacy</button></li>
              <li><button onClick={() => navigateTo('legal', 'cookies')} className="hover:text-white transition">Cookies</button></li>
              <li><button onClick={() => navigateTo('legal', 'voorwaarden')} className="hover:text-white transition">Voorwaarden</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-10 text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 flex flex-col md:flex-row justify-between items-center text-center">
          <p>© 2025 Thuisbatterij Wijzer - Gecertificeerd Onafhankelijk</p>
          <p className="mt-4 md:mt-0 italic">Berekeningen zijn indicatief - Raadpleeg altijd een expert</p>
        </div>
      </footer>
    </div>
  );
}
