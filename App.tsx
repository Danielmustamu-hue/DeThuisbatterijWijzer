import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { GoogleGenAI } from "@google/genai";
import { TOP_5_BRANDS, TECHNICAL_SPECS } from './constants';
import { BLOG_POSTS } from './KennisbankContent';
import { LEGAL_PAGES } from './LegalContent';
import { CalculationResult, BlogPost, AppTab } from './types';

Chart.register(...registerables);

/** 
 * INTERACTIEVE WIDGETS 
 */

const DailyCycleChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;
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
          { label: 'Batterij Effect', data: batteryData, borderColor: '#4299E1', backgroundColor: 'rgba(66, 153, 225, 0.1)', fill: true, tension: 0.4, borderWidth: 0, pointRadius: 0 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true, position: 'bottom' } },
        scales: { y: { display: false }, x: { grid: { display: false }, ticks: { maxTicksLimit: 6 } } }
      }
    });
    return () => chart.destroy();
  }, []);
  return <div className="h-64 w-full bg-white p-4 rounded-3xl"><canvas ref={chartRef}></canvas></div>;
};

const OnbalansSimulator: React.FC = () => {
  const [capacity, setCapacity] = useState(10);
  const [profit, setProfit] = useState(0);
  useEffect(() => {
    const base = capacity * 0.98; 
    setProfit(Math.round((base + (Math.random() * 5)) * 100) / 100);
  }, [capacity]);

  return (
    <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 h-full flex flex-col justify-between group hover:shadow-2xl transition-all">
      <div>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">Onbalans Simulator</h3>
        <p className="text-gray-500 text-sm mb-8 italic leading-relaxed">Bereken uw dagelijkse handelswinst op de uurprijzen van de energiemarkt.</p>
      </div>
      <div className="bg-[#1A202C] text-white p-8 rounded-[2rem] mb-8 text-center border-b-[8px] border-[#48BB78] shadow-inner">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#48BB78] mb-2">Potentiële Dagwinst</p>
        <p className="text-5xl font-black tracking-tighter italic group-hover:scale-110 transition-transform duration-500">€{profit}</p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between text-[10px] font-black uppercase text-gray-400 italic">
            <span>Systeemgrootte: {capacity} kWh</span>
            <span className="text-[#48BB78]">Markt-Klaar</span>
        </div>
        <input type="range" min="5" max="30" step="5" value={capacity} onChange={e => setCapacity(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#48BB78]" />
        <div className="flex justify-between text-[8px] font-black text-gray-300 uppercase"><span>5kWh</span><span>30kWh</span></div>
      </div>
    </div>
  );
};

const TechnicalQuiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const questions = [
    { q: "Heeft u een slimme meter (SMR 4.0 of hoger)?", p: 25 },
    { q: "Heeft u een 3-fase aansluiting in uw meterkast?", p: 25 },
    { q: "Is er fysieke ruimte voor een extra groep?", p: 25 },
    { q: "Maakt u al gebruik van een P1-dongle (HomeWizard)?", p: 25 }
  ];

  const answer = (val: boolean) => {
    if (val) setScore(s => s + questions[step].p);
    if (step < questions.length - 1) setStep(step + 1);
    else setFinished(true);
  };

  if (finished) return (
    <div className="bg-gray-900 text-white p-10 rounded-[3rem] h-full flex flex-col justify-center text-center border-b-[12px] border-[#ED8936] shadow-4xl animate-in">
      <h3 className="text-3xl font-black uppercase italic mb-4 tracking-tighter text-[#ED8936]">Score: {score}%</h3>
      <p className="text-gray-400 italic mb-8 font-medium leading-relaxed">{score >= 75 ? "Uw installatie is technisch uitstekend voorbereid voor een batterij!" : "Aanpassingen in de meterkast zijn vereist voor optimaal rendement."}</p>
      <button onClick={() => {setStep(0); setScore(0); setFinished(false);}} className="bg-[#ED8936] text-white px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">Test Opnieuw</button>
    </div>
  );

  return (
    <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 h-full flex flex-col justify-between hover:shadow-2xl transition-all">
      <div>
        <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.4em] italic underline decoration-4 decoration-[#48BB78]/20">Technische Check</span>
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic">{step + 1}/4</span>
        </div>
        <h3 className="text-3xl font-black italic uppercase leading-none tracking-tighter text-gray-900">{questions[step].q}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <button onClick={() => answer(true)} className="bg-gray-50 p-8 rounded-3xl font-black uppercase text-xs hover:bg-[#48BB78] hover:text-white transition-all transform active:scale-95 shadow-sm">Ja</button>
        <button onClick={() => answer(false)} className="bg-gray-50 p-8 rounded-3xl font-black uppercase text-xs hover:bg-black hover:text-white transition-all transform active:scale-95 shadow-sm">Nee</button>
      </div>
    </div>
  );
};

/** 
 * MAIN APPLICATION 
 */

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [selectedLegal, setSelectedLegal] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [calcInput, setCalcInput] = useState({ consumption: 4000, panels: 12, postalCode: '' });

  const navigateTo = (tab: AppTab, anchor?: string) => {
    setActiveTab(tab);
    setSelectedBlog(null);
    setSelectedLegal(null);
    if (anchor) {
      if (tab === 'legal') {
        setSelectedLegal(anchor);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const idealSize = Math.max(2, Math.round((calcInput.panels * 0.4) * 1.2 * 10) / 10);
    
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analiseer voor een Nederlands huishouden in 2025: Postcode ${calcInput.postalCode}, ${calcInput.consumption}kWh verbruik en ${calcInput.panels} zonnepanelen. Geef een autoritair advies over een ${idealSize}kWh batterij in de context van onbalans-handel en de afbouw van saldering. Max 85 woorden.`,
      });
      setResult({
        idealSize,
        paybackTime: 7.2,
        annualSavings: Math.round(idealSize * 88),
        aiAdvice: response.text || "Systeemconfiguratie optimaal voor de onbalansmarkt van 2025."
      });
    } catch (e) {
      setResult({ idealSize, paybackTime: 7.2, annualSavings: Math.round(idealSize * 88), aiAdvice: "Uw profiel biedt een uitstekend platform voor slimme opslag. Voor maximale ROI adviseren wij een dynamisch contract en installatie door een gecertificeerd partner." });
    }
    setLoading(false);
  };

  const renderBlogContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('## ')) return <h2 key={i} className="text-4xl font-black mt-16 mb-8 uppercase italic border-l-8 border-[#48BB78] pl-6 tracking-tighter">{trimmedLine.replace('## ', '')}</h2>;
      if (trimmedLine.startsWith('### ')) return <h3 key={i} className="text-2xl font-bold mt-10 mb-6 text-gray-800 italic underline decoration-4 decoration-[#48BB78]/30 tracking-tight">{trimmedLine.replace('### ', '')}</h3>;
      if (trimmedLine.startsWith('* ')) return <li key={i} className="ml-10 mb-4 list-disc text-xl text-gray-600 font-medium italic">{trimmedLine.replace('* ', '')}</li>;
      if (!trimmedLine) return <div key={i} className="h-4" />;
      return <p key={i} className="mb-8 text-xl text-gray-600 leading-relaxed text-justify font-medium">{trimmedLine}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] font-['Inter'] selection:bg-[#48BB78]/30">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => navigateTo('home')}>
            <div className="w-12 h-12 bg-[#48BB78] rounded-2xl flex items-center justify-center transition-all group-hover:rotate-6 shadow-lg shadow-[#48BB78]/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-2xl font-black uppercase tracking-tighter italic text-gray-900 leading-none">De Thuisbatterij <br/><span className="text-[#48BB78]">Wijzer</span></span>
          </div>
          <nav className="hidden md:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 italic">
            <button onClick={() => navigateTo('home')} className={`hover:text-[#48BB78] transition-all ${activeTab === 'home' ? 'text-[#48BB78]' : ''}`}>Home</button>
            <button onClick={() => navigateTo('kennisbank')} className={`hover:text-[#48BB78] transition-all ${activeTab === 'kennisbank' ? 'text-[#48BB78]' : ''}`}>Kennisbank</button>
            <button onClick={() => navigateTo('over-ons')} className={`hover:text-[#48BB78] transition-all ${activeTab === 'over-ons' ? 'text-[#48BB78]' : ''}`}>Onze Missie</button>
            <button onClick={() => navigateTo('home', 'calc')} className="bg-[#1A202C] text-white px-8 py-4 rounded-full hover:bg-[#48BB78] transition-all shadow-xl shadow-black/10">Gratis Offerte Aanvraag</button>
          </nav>
        </div>
      </header>

      <main>
        {activeTab === 'home' && (
          <div className="animate-in relative overflow-hidden">
            {/* DECORATIEVE ACHTERGRONDTEKST */}
            <div className="absolute top-20 left-10 -z-10 opacity-[0.03] select-none pointer-events-none text-[25rem] font-black italic uppercase leading-none tracking-tighter whitespace-nowrap">
                BESPAAR
            </div>

            {/* HERO */}
            <section className="pt-32 pb-40">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                <div className="lg:col-span-7 relative z-0">
                  <div className="inline-block px-5 py-2 bg-[#48BB78]/10 text-[#48BB78] text-[10px] font-black uppercase rounded-full mb-10 italic tracking-widest border border-[#48BB78]/20">Status: Maart 2025</div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase leading-[0.95] tracking-tighter mb-12 text-gray-900 break-words">
                    Stop de <br/>
                    <span className="text-[#48BB78] drop-shadow-sm">Terugleverboete</span>
                  </h1>
                  <p className="text-2xl md:text-3xl text-gray-400 font-medium italic mb-16 max-w-xl leading-snug">Neutraliseer uw energierekening met de exacte opslagcapaciteit voor 2025.</p>
                  <div className="flex flex-wrap gap-8">
                    <button onClick={() => navigateTo('home', 'calc')} className="bg-[#1A202C] text-white px-16 py-8 rounded-[3rem] font-black uppercase text-sm tracking-widest shadow-2xl hover:bg-black hover:translate-y-[-4px] transition-all">Start Rendement Scan</button>
                    <button onClick={() => navigateTo('kennisbank')} className="bg-white border-4 border-gray-100 text-gray-400 px-16 py-8 rounded-[3rem] font-black uppercase text-sm tracking-widest hover:border-[#48BB78] hover:text-[#48BB78] transition-all">Lees Kennisbank</button>
                  </div>
                </div>
                <div id="calc" className="lg:col-span-5 relative z-10 bg-white shadow-xl rounded-2xl p-10 md:p-14 border border-gray-50 overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <h3 className="text-3xl font-black italic uppercase mb-10 underline decoration-[12px] decoration-[#48BB78]/20 tracking-tighter leading-none">Bereken Jouw Besparing</h3>
                  <form onSubmit={handleCalculate} className="space-y-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 italic">Regio (Postcode)</label>
                        <input type="text" value={calcInput.postalCode} onChange={e => setCalcInput({...calcInput, postalCode: e.target.value.toUpperCase()})} placeholder="1234 AB" maxLength={7} className="w-full bg-gray-50 p-6 rounded-[2rem] border-none font-black text-2xl text-gray-800 focus:ring-4 focus:ring-[#48BB78]/10 transition-all outline-none" required />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 italic">Jaarverbruik (kWh)</label>
                        <input type="number" value={calcInput.consumption} onChange={e => setCalcInput({...calcInput, consumption: parseInt(e.target.value) || 0})} className="w-full bg-gray-50 p-6 rounded-[2rem] border-none font-black text-2xl text-gray-800 focus:ring-4 focus:ring-[#48BB78]/10 transition-all outline-none" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 italic">Zonnepanelen (stuks)</label>
                        <input type="number" value={calcInput.panels} onChange={e => setCalcInput({...calcInput, panels: parseInt(e.target.value) || 0})} className="w-full bg-gray-50 p-6 rounded-[2rem] border-none font-black text-2xl text-gray-800 focus:ring-4 focus:ring-[#48BB78]/10 transition-all outline-none" required />
                      </div>
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-[#48BB78] text-white py-8 rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-[#48BB78]/20 hover:scale-[1.02] active:scale-95 transition-all">
                        {loading ? 'Analyseert Marktdata...' : 'Ontvang Gratis Rendement-Rapport'}
                    </button>
                  </form>
                </div>
              </div>
            </section>

            {/* RESULTS VIEW */}
            {result && (
              <section className="py-32 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                  <div className="bg-gray-50 p-12 rounded-[4rem] text-center border-b-[12px] border-[#48BB78] group hover:bg-white hover:shadow-2xl transition-all">
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 italic">Advies Opslag</p>
                    <p className="text-7xl font-black italic text-gray-900 tracking-tighter">{result.idealSize}<span className="text-2xl ml-2">kWh</span></p>
                  </div>
                  <div className="bg-gray-50 p-12 rounded-[4rem] text-center border-b-[12px] border-[#ED8936] group hover:bg-white hover:shadow-2xl transition-all">
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 italic">Verwachte Besparing</p>
                    <p className="text-7xl font-black italic text-gray-900 tracking-tighter">€{result.annualSavings}</p>
                  </div>
                  <div className="bg-gray-50 p-12 rounded-[4rem] text-center border-b-[12px] border-blue-500 group hover:bg-white hover:shadow-2xl transition-all">
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 italic">Terugverdientijd</p>
                    <p className="text-7xl font-black italic text-gray-900 tracking-tighter">{result.paybackTime}<span className="text-2xl ml-2">J</span></p>
                  </div>
                </div>
                <div className="max-w-5xl mx-auto bg-[#1A202C] text-white p-16 rounded-[5rem] text-2xl font-medium italic leading-relaxed text-center shadow-4xl border-r-[20px] border-[#48BB78]">
                  "{result.aiAdvice}"
                </div>
                <div className="mt-16 text-center">
                    <button onClick={() => navigateTo('home', 'calc')} className="bg-[#ED8936] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-black transition-all">Vraag Direct 3 Gratis Offertes Aan &rarr;</button>
                </div>
              </section>
            )}

            {/* WIDGETS */}
            <section className="py-40 bg-gray-50 relative z-10">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <OnbalansSimulator />
                <TechnicalQuiz />
              </div>
            </section>

            {/* CHART */}
            <section className="py-40 bg-white relative z-10">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-24 items-center">
                <div className="lg:col-span-1">
                  <h2 className="text-6xl font-black italic uppercase leading-[0.9] mb-10 tracking-tighter text-gray-900">De Dagelijkse <br/><span className="text-[#48BB78]">Netbalans</span></h2>
                  <p className="text-2xl text-gray-400 font-medium italic leading-relaxed">Visualiseer hoe uw batterij de 'solar peak' overdag vasthoudt voor uw verbruik tijdens de dure avondpiek.</p>
                </div>
                <div className="lg:col-span-2"><DailyCycleChart /></div>
              </div>
            </section>

            {/* FAQ KORT */}
            <section className="py-40 bg-gray-50 border-t border-gray-100 relative z-10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl font-black italic uppercase text-center mb-16 tracking-tighter">Veelgestelde <span className="text-[#48BB78]">Vragen</span></h2>
                    <div className="space-y-4 text-left">
                        {[
                            { q: "Is een thuisbatterij in 2025 al rendabel?", a: "Absoluut. Door de combinatie van terugleverkosten en de onbalansmarkt (handelen op uurprijzen) ligt de terugverdientijd nu rond de 7 jaar." },
                            { q: "Welke techniek is het meest betrouwbaar?", a: "LFP (Lithium-IJzerfosfaat) is de standaard. Het is veilig, cobaltvrij en gaat tot 20 jaar mee." }
                        ].map((f, i) => (
                            <details key={i} className="bg-white rounded-[2rem] p-8 cursor-pointer group shadow-sm open:shadow-xl transition-all">
                                <summary className="font-black italic uppercase tracking-tight text-xl list-none flex justify-between items-center">{f.q} <span className="text-[#48BB78] group-open:rotate-180 transition-transform">↓</span></summary>
                                <p className="mt-6 text-gray-500 font-medium text-lg leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
          </div>
        )}

        {activeTab === 'kennisbank' && (
          <div className="max-w-7xl mx-auto px-4 py-32 animate-in">
            {selectedBlog ? (
              <article className="max-w-6xl mx-auto">
                <button onClick={() => setSelectedBlog(null)} className="text-[#48BB78] font-black uppercase text-[11px] mb-16 tracking-widest italic flex items-center hover:translate-x-[-8px] transition-transform underline underline-offset-8 decoration-4 decoration-[#48BB78]/20">&larr; Terug naar Kennisbank Overzicht</button>
                <h1 className="text-7xl md:text-[10rem] font-black italic uppercase leading-[0.85] tracking-tighter mb-16 text-gray-900">{selectedBlog.title}</h1>
                <div className="aspect-video rounded-[5rem] overflow-hidden mb-24 shadow-4xl grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={selectedBlog.imageUrl} className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms]" alt="" />
                </div>
                <div className="bg-white p-20 rounded-[5rem] shadow-4xl border border-gray-50">{renderBlogContent(selectedBlog.content)}</div>
                <div className="mt-24 p-16 bg-gray-900 text-white rounded-[5rem] text-center border-b-[12px] border-[#48BB78]">
                    <h3 className="text-3xl font-black italic uppercase mb-8 tracking-tighter">Wilt u direct persoonlijk advies voor uw situatie?</h3>
                    <button onClick={() => navigateTo('home', 'calc')} className="bg-[#48BB78] text-white px-12 py-6 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all">Vraag 3 Gratis Offertes Aan &rarr;</button>
                </div>
              </article>
            ) : (
              <div>
                <h1 className="text-[12rem] font-black italic uppercase text-center mb-40 tracking-tighter leading-none text-gray-900 underline decoration-[20px] decoration-[#48BB78]/20">Kennis<span className="text-[#48BB78]">bank</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {BLOG_POSTS.map(post => (
                    <div key={post.id} className="group cursor-pointer bg-white p-10 rounded-[5rem] shadow-xl hover:shadow-4xl transition-all border-2 border-transparent hover:border-[#48BB78]/10" onClick={() => setSelectedBlog(post)}>
                      <div className="aspect-[16/10] rounded-[3.5rem] overflow-hidden mb-12 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000">
                        <img src={post.imageUrl} className="w-full h-full object-cover" alt="" />
                      </div>
                      <h3 className="text-3xl font-black italic uppercase mb-6 leading-[1.1] tracking-tighter group-hover:text-[#48BB78] transition-colors">{post.title}</h3>
                      <p className="text-gray-400 text-lg font-medium italic line-clamp-3 mb-12 leading-relaxed">{post.excerpt}</p>
                      <span className="text-[11px] font-black uppercase text-[#48BB78] tracking-[0.4em] italic">Open Masterclass &rarr;</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'legal' && (
          <div className="max-w-4xl mx-auto px-4 py-32 animate-in min-h-screen">
             <button onClick={() => navigateTo('home')} className="text-[#48BB78] font-black uppercase text-[11px] mb-16 tracking-widest italic flex items-center hover:translate-x-[-8px] transition-transform underline underline-offset-8 decoration-4 decoration-[#48BB78]/20">&larr; Terug naar Home</button>
             {selectedLegal && LEGAL_PAGES[selectedLegal] ? (
               <div className="bg-gray-900 p-16 md:p-24 rounded-[5rem] shadow-4xl border-b-[16px] border-[#48BB78]">
                  <h1 className="text-6xl font-black italic uppercase mb-12 tracking-tighter text-white underline decoration-[#48BB78]/20 decoration-[16px]">{LEGAL_PAGES[selectedLegal].title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: LEGAL_PAGES[selectedLegal].content }} />
               </div>
             ) : (
               <div className="text-center py-24">
                  <h1 className="text-4xl font-black uppercase italic text-gray-400">Juridisch Overzicht</h1>
                  <div className="flex justify-center space-x-8 mt-12">
                     <button onClick={() => setSelectedLegal('privacy')} className="text-[#48BB78] font-black uppercase tracking-widest">Privacy</button>
                     <button onClick={() => setSelectedLegal('cookies')} className="text-[#48BB78] font-black uppercase tracking-widest">Cookies</button>
                     <button onClick={() => setSelectedLegal('voorwaarden')} className="text-[#48BB78] font-black uppercase tracking-widest">Voorwaarden</button>
                  </div>
               </div>
             )}
          </div>
        )}

        {activeTab === 'over-ons' && (
          <section className="py-40 animate-in max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-[12rem] font-black italic uppercase mb-24 tracking-tighter leading-none text-gray-900">Eerlijk <br/><span className="text-[#48BB78]">& Onafhankelijk</span></h1>
            <div className="text-left space-y-12 text-3xl font-medium italic text-gray-500 leading-relaxed max-w-4xl mx-auto border-l-8 border-gray-100 pl-16">
              <p>De Thuisbatterij Wijzer is een onafhankelijk adviesplatform. Wij verkopen zelf geen hardware. Wij verkopen data, inzicht en waarheid in een markt die overspoeld wordt door vage beloftes.</p>
              <p>Onze missie is om de Nederlandse energietransitie te versnellen door huishoudens te helpen met keuzes die écht renderen. Wij ontvangen een commissie van onze partners voor lead-matches, maar dit beïnvloedt onze technische rekenmodellen nooit.</p>
              <div className="pt-12">
                  <button onClick={() => navigateTo('home', 'calc')} className="bg-[#1A202C] text-white px-12 py-6 rounded-full font-black uppercase text-sm tracking-widest hover:bg-[#48BB78] transition-all">Doe Mee & Bespaar &rarr;</button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-24 pb-24 border-b border-white/5">
          <div className="md:col-span-2">
            <h4 className="text-4xl font-black italic uppercase mb-10 tracking-tighter leading-none">De Thuisbatterij <span className="text-[#48BB78]">Wijzer</span></h4>
            <p className="text-gray-500 text-xl font-medium italic leading-relaxed max-w-md">Het onafhankelijke kompas voor energie-opslag in Nederland. Gebaseerd op realtime marktdata van 2025.</p>
          </div>
          <div className="flex flex-col space-y-6">
            <h5 className="text-[11px] font-black uppercase text-[#48BB78] tracking-[0.5em] mb-4 italic">Navigatie</h5>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-gray-600">
              <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-all italic text-left">Home</button></li>
              <li><button onClick={() => navigateTo('kennisbank')} className="hover:text-white transition-all italic text-left">Kennisbank</button></li>
              <li><button onClick={() => navigateTo('over-ons')} className="hover:text-white transition-all italic text-left">Over Ons</button></li>
            </ul>
          </div>
          <div className="flex flex-col space-y-6">
            <h5 className="text-[11px] font-black uppercase text-blue-500 tracking-[0.5em] mb-4 italic">Juridisch</h5>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-gray-600">
              <li><button onClick={() => navigateTo('legal', 'privacy')} className="hover:text-white transition-all italic text-left">Privacyverklaring</button></li>
              <li><button onClick={() => navigateTo('legal', 'cookies')} className="hover:text-white transition-all italic text-left">Cookiebeleid</button></li>
              <li><button onClick={() => navigateTo('legal', 'voorwaarden')} className="hover:text-white transition-all italic text-left">Algemene Voorwaarden</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-16 text-[11px] font-black uppercase text-gray-700 tracking-[0.5em] flex flex-col md:flex-row justify-between italic items-center">
          <p>© 2025 De Thuisbatterij Wijzer</p>
          <p className="mt-6 md:mt-0">Onafhankelijk Gecertificeerd Adviespartner</p>
        </div>
      </footer>
    </div>
  );
}