
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import DailyCycleChart from './components/DailyCycleChart';
import BrandComparisonTable from './components/BrandComparisonTable';
import OnbalansSimulator from './components/OnbalansSimulator';
import TechnicalQuiz from './components/TechnicalQuiz';
import FAQSection from './components/FAQSection';
import AboutUs from './components/AboutUs';
import { CalculationResult, BlogPost, AppTab } from './types';
// Fixed error on line 14: Removed TARGET_GROUPS as it is not exported from constants.ts and is unused in this file.
import { BLOG_POSTS, TOP_5_BRANDS, LEGAL_PAGES } from './constants';

const App: React.FC = () => {
  const [result, setResult] = useState<(CalculationResult & { postalCode: string }) | null>(null);
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [activeLegal, setActiveLegal] = useState<string | null>(null);

  const navigateTo = (tab: AppTab, anchor?: string) => {
    setActiveTab(tab);
    setSelectedBlog(null);
    setActiveLegal(tab === 'legal' ? anchor || 'privacy' : null);
    
    if (tab === 'home' && anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openBlog = (slug: string) => {
    const blog = BLOG_POSTS.find(b => b.slug === slug);
    if (blog) {
      setSelectedBlog(blog);
      setActiveTab('kennisbank');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderBlogContent = (content: string) => {
    if (!content) return null;
    const blocks = content.split(/(\[ComparisonTable\]|(?:\n|^)(?:\|.*\|(?:\n|$|(?=$)))+)/);

    return blocks.map((block, blockIdx) => {
      if (!block || !block.trim()) return null;
      if (block === '[ComparisonTable]') return <BrandComparisonTable key={blockIdx} />;

      const trimmedBlock = block.trim();
      if (trimmedBlock.startsWith('|')) {
        const rows = trimmedBlock.split('\n').filter(r => r.trim() && !r.includes('| :---'));
        if (rows.length === 0) return null;
        const headerCells = rows[0].split('|').filter(c => c.trim());

        return (
          <div key={blockIdx} className="my-16 overflow-x-auto rounded-[3.5rem] border border-gray-100 shadow-2xl bg-white p-2">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-[#1A202C] text-white">
                <tr>
                  {headerCells.map((cell, i) => (
                    <th key={i} className="p-10 text-[11px] font-black uppercase tracking-[0.2em]">{cell.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rows.slice(1).map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    {row.split('|').filter(c => c.trim()).map((cell, j) => (
                      <td key={j} className={`p-10 text-xl font-medium ${j === 0 ? 'font-black italic uppercase text-gray-900 border-r border-gray-50' : 'text-gray-600'}`}>
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      return block.split('\n').map((line, i) => {
        if (!line.trim() && i > 0) return <div key={`${blockIdx}-${i}`} className="h-8" />;
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('## ')) return <h2 key={`${blockIdx}-${i}`} className="text-5xl font-black mt-24 mb-12 text-gray-900 border-l-[16px] border-[#48BB78] pl-12 uppercase tracking-tighter leading-none italic">{trimmedLine.replace('## ', '')}</h2>;
        if (trimmedLine.startsWith('### ')) return <h3 key={`${blockIdx}-${i}`} className="text-3xl font-bold mt-16 mb-8 text-gray-800 italic underline decoration-[6px] decoration-[#48BB78]/30 underline-offset-8">{trimmedLine.replace('### ', '')}</h3>;
        if (trimmedLine.startsWith('* ')) return <li key={`${blockIdx}-${i}`} className="ml-16 mb-5 text-gray-600 list-disc font-medium text-2xl leading-relaxed">{trimmedLine.replace('* ', '')}</li>;
        if (!trimmedLine) return null;
        return <p key={`${blockIdx}-${i}`} className="mb-12 text-gray-600 leading-relaxed text-2xl font-normal text-justify" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') }}></p>;
      });
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] selection:bg-[#48BB78]/30 selection:text-black">
      <Header onNavigate={navigateTo} activeTab={activeTab} hasResult={!!result} />

      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-in">
            {/* Hero Section */}
            <section id="hero" className="relative pt-24 pb-32 overflow-hidden bg-[#F7FAFC]">
              <div className="max-w-7xl mx-auto px-4 relative z-10 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                  <div className="flex-1">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-md border border-gray-100 text-[#48BB78] text-[12px] font-black mb-12 uppercase tracking-[0.3em]">
                      <span className="flex h-3 w-3 rounded-full bg-[#48BB78] mr-4 animate-pulse"></span>
                      Technologie Update: Maart 2025
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#1A202C] leading-[0.85] mb-12 tracking-tighter">
                      Stop de <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48BB78] to-[#38a169]">Terugleverboete</span>
                    </h1>
                    <p className="text-3xl text-gray-400 mb-16 max-w-2xl leading-relaxed font-medium italic">
                      Wij berekenen exact hoeveel kWh opslag u nodig heeft om uw energierekening in 2025 te neutraliseren.
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                      <button onClick={() => navigateTo('home', 'calculator-anchor')} className="bg-[#1A202C] text-white px-16 py-8 rounded-[3rem] font-black uppercase tracking-widest text-sm hover:bg-black transition-all shadow-4xl hover:translate-y-[-4px]">Start Analyse</button>
                      <button onClick={() => navigateTo('home', 'experts')} className="bg-white border-4 border-gray-100 text-gray-600 px-16 py-8 rounded-[3rem] font-black uppercase tracking-widest text-sm hover:border-[#48BB78] transition-all">Gidsen 2025</button>
                    </div>
                  </div>
                  <div id="calculator-anchor" className="flex-1 w-full flex justify-center scale-110 origin-center">
                    <Calculator onResult={setResult} />
                  </div>
                </div>
              </div>
            </section>

            {/* Top 5 Brands */}
            <section id="merken" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-6xl font-black text-gray-900 tracking-tighter mb-8 italic underline decoration-[12px] decoration-[#48BB78]/20 text-center uppercase">Top 5 Thuisbatterijen</h2>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Gebaseerd op rendement, garantie en AI-sturing</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {TOP_5_BRANDS.map((brand, idx) => (
                            <div key={idx} className="bg-[#F7FAFC] p-10 rounded-[4rem] border-2 border-transparent hover:border-[#48BB78]/30 transition-all hover:shadow-4xl text-center group">
                                <div className="text-[#48BB78] font-black text-5xl mb-6 italic opacity-50 group-hover:opacity-100 transition-opacity">#{idx+1}</div>
                                <h3 className="text-2xl font-black mb-4 text-gray-900 tracking-tight leading-none uppercase italic">{brand.name}</h3>
                                <div className="flex flex-col items-center gap-4 border-t border-gray-100 pt-8 font-black text-2xl text-gray-900 italic">
                                  {brand.score} <span className="text-xs text-gray-400 not-italic uppercase tracking-widest">Score</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Section - DE WIDGETS ZIJN HIER */}
            <section className="py-40 bg-gray-900">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch mb-20">
                  <div className="transform hover:scale-[1.02] transition-transform">
                    <OnbalansSimulator />
                  </div>
                  <div className="transform hover:scale-[1.02] transition-transform">
                    <TechnicalQuiz />
                  </div>
                </div>
                
                {/* De Dagelijkse Cyclus Widget */}
                <div className="bg-white/5 p-12 rounded-[5rem] border border-white/10 mt-20">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                    <div className="lg:col-span-1 text-white">
                      <h3 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">De Dagelijkse Cyclus</h3>
                      <p className="text-gray-400 text-xl font-medium italic leading-relaxed mb-8">
                        Visualiseer hoe uw batterij de "Solar Peak" van de middag verschuift naar de "Evening Piek" van uw huishouden.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center text-[#F6AD55] font-black uppercase text-xs tracking-widest"><span className="w-4 h-1 bg-[#F6AD55] mr-3"></span> Zon Opwek</li>
                        <li className="flex items-center text-[#E53E3E] font-black uppercase text-xs tracking-widest"><span className="w-4 h-1 bg-[#E53E3E] mr-3"></span> Huis Verbruik</li>
                        <li className="flex items-center text-[#4299E1] font-black uppercase text-xs tracking-widest"><span className="w-4 h-1 bg-[#4299E1] mr-3"></span> Batterij Opslag</li>
                      </ul>
                    </div>
                    <div className="lg:col-span-2">
                      <DailyCycleChart />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Knowledge Base Teaser (Grid van 6 op home) */}
            <section id="experts" className="py-40 bg-[#1A202C] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                          <span className="text-[12px] font-black text-[#48BB78] uppercase tracking-[0.5em] mb-6 block italic">Kennisbank 2025</span>
                          <h2 className="text-7xl font-black tracking-tighter italic uppercase leading-none">Masterclasses</h2>
                        </div>
                        <button onClick={() => navigateTo('kennisbank')} className="bg-[#48BB78] text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">Alle 7 Gidsen &rarr;</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {BLOG_POSTS.slice(0, 6).map((post) => (
                            <div key={post.id} className="group cursor-pointer bg-white/5 p-6 rounded-[4rem] hover:bg-white/10 transition-all border border-transparent hover:border-[#48BB78]/30" onClick={() => openBlog(post.slug)}>
                                <div className="aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 shadow-4xl">
                                    <img src={post.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt={post.title} />
                                </div>
                                <div className="px-6 pb-6">
                                  <h3 className="text-3xl font-bold mb-6 italic uppercase leading-none tracking-tighter group-hover:text-[#48BB78] transition-colors">{post.title}</h3>
                                  <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-widest flex items-center">
                                    Expert Analyse <span className="ml-3 group-hover:translate-x-3 transition-transform">&rarr;</span>
                                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection onCtaClick={() => navigateTo('home', 'calculator-anchor')} />
          </div>
        )}

        {activeTab === 'kennisbank' && (
          <section className="py-40 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              {selectedBlog ? (
                <article className="animate-in max-w-6xl mx-auto">
                  <button onClick={() => setSelectedBlog(null)} className="text-[12px] font-black uppercase tracking-[0.4em] text-[#48BB78] mb-20 flex items-center hover:-translate-x-4 transition-transform italic underline decoration-[6px] underline-offset-8">&larr; Terug naar het Archief</button>
                  <h1 className="text-6xl md:text-9xl font-black mb-20 leading-[0.85] text-gray-900 tracking-tighter uppercase italic">{selectedBlog.title}</h1>
                  <div className="mb-32"><img src={selectedBlog.imageUrl} alt={selectedBlog.title} className="w-full h-[700px] object-cover rounded-[6rem] grayscale shadow-4xl" /></div>
                  <div className="prose prose-2xl max-w-none text-gray-700 font-medium">{renderBlogContent(selectedBlog.content)}</div>
                </article>
              ) : (
                <div className="animate-in">
                  <div className="mb-40 text-center">
                    <span className="text-[14px] font-black text-[#48BB78] uppercase tracking-[0.6em] mb-8 block italic">Onafhankelijke Masterclasses</span>
                    <h1 className="text-7xl md:text-9xl font-black mb-12 text-gray-900 tracking-tighter uppercase italic">Het Dossier</h1>
                    <p className="text-2xl text-gray-400 font-medium italic max-w-3xl mx-auto">7 Diepgaande analyses over de toekomst van uw energiehuishouding.</p>
                  </div>
                  {/* Grid dat ALLE 7 gidsen toont */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {BLOG_POSTS.map(post => (
                      <div key={post.id} className="group cursor-pointer bg-gray-50 p-10 rounded-[5rem] hover:bg-white hover:shadow-4xl transition-all border-2 border-transparent hover:border-[#48BB78]/20" onClick={() => openBlog(post.slug)}>
                        <div className="aspect-[16/10] rounded-[3.5rem] overflow-hidden mb-12 shadow-2xl">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                        </div>
                        <div className="px-6 flex flex-col h-full">
                          <h2 className="text-4xl font-black mb-8 group-hover:text-[#48BB78] italic uppercase leading-[1] tracking-tighter transition-colors">{post.title}</h2>
                          <p className="text-gray-500 mb-10 font-medium italic text-xl line-clamp-4 leading-relaxed">{post.excerpt}</p>
                          <div className="mt-auto pt-10 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-widest">Masterclass &rarr;</span>
                              <span className="text-[10px] font-black text-gray-300 uppercase italic tracking-widest">{post.readingTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {activeTab === 'over-ons' && <AboutUs onCtaClick={() => navigateTo('home', 'calculator-anchor')} />}
        
        {activeTab === 'legal' && activeLegal && (
          <section className="py-40 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 animate-in">
              <h1 className="text-7xl font-black mb-24 text-gray-900 tracking-tighter italic uppercase leading-none underline decoration-[16px] decoration-[#48BB78]/20">
                {LEGAL_PAGES[activeLegal].title}
              </h1>
              <div 
                className="prose prose-2xl max-w-none text-gray-600 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: LEGAL_PAGES[activeLegal].content }}
              />
            </div>
          </section>
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <FloatingCTA onClick={() => navigateTo('home', 'calculator-anchor')} />
    </div>
  );
};

export default App;
