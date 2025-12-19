
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
import { RECOMMENDED_PRODUCTS, FAQS, BLOG_POSTS, TARGET_GROUPS, TOP_5_BRANDS, LEGAL_PAGES } from './constants';

const App: React.FC = () => {
  const [result, setResult] = useState<(CalculationResult & { postalCode: string }) | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
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
          <div key={blockIdx} className="my-16 overflow-x-auto rounded-[3rem] border border-gray-100 shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-[#1A202C] text-white">
                <tr>
                  {headerCells.map((cell, i) => (
                    <th key={i} className="p-8 text-[10px] font-black uppercase tracking-widest">{cell.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rows.slice(1).map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    {row.split('|').filter(c => c.trim()).map((cell, j) => (
                      <td key={j} className={`p-8 text-lg font-medium ${j === 0 ? 'font-black italic uppercase text-gray-900 border-r border-gray-50' : 'text-gray-600'}`}>
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
        if (!line.trim() && i > 0) return <div key={`${blockIdx}-${i}`} className="h-6" />;
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('## ')) return <h2 key={`${blockIdx}-${i}`} className="text-3xl font-black mt-16 mb-8 text-gray-900 border-l-8 border-[#48BB78] pl-8 uppercase tracking-tighter leading-none italic">{trimmedLine.replace('## ', '')}</h2>;
        if (trimmedLine.startsWith('### ')) return <h3 key={`${blockIdx}-${i}`} className="text-2xl font-bold mt-10 mb-6 text-gray-800 italic">{trimmedLine.replace('### ', '')}</h3>;
        if (trimmedLine.startsWith('* ')) return <li key={`${blockIdx}-${i}`} className="ml-8 mb-3 text-gray-600 list-disc font-medium text-lg leading-relaxed">{trimmedLine.replace('* ', '')}</li>;
        if (line.includes('[Halt:')) return <div key={`${blockIdx}-${i}`} className="my-8 p-6 bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl text-center"><p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Advertentie / Affiliate Ruimte</p><p className="text-sm italic text-gray-500 mt-2">Hier wordt binnenkort een relevante aanbieding getoond.</p></div>;
        if (line.includes('Rendementscalculator')) {
          const parts = line.split('Rendementscalculator');
          return <p key={`${blockIdx}-${i}`} className="mb-8 text-gray-600 leading-relaxed text-xl font-normal">{parts[0]}<button onClick={() => navigateTo('home', 'calculator-anchor')} className="text-[#48BB78] font-black underline decoration-4 underline-offset-4 hover:text-black transition-colors">Rendementscalculator</button>{parts.length > 1 ? parts.slice(1).join('Rendementscalculator') : ''}</p>;
        }
        if (!trimmedLine) return null;
        return <p key={`${blockIdx}-${i}`} className="mb-8 text-gray-600 leading-relaxed text-xl font-normal" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') }}></p>;
      });
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] selection:bg-[#48BB78]/30 selection:text-black">
      <Header onNavigate={navigateTo} activeTab={activeTab as any} hasResult={!!result} />

      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <section id="hero" className="relative pt-24 pb-32 overflow-hidden bg-[#F7FAFC]">
              <div className="max-w-7xl mx-auto px-4 relative z-10 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="flex-1">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-[#48BB78] text-[10px] font-black mb-10 uppercase tracking-[0.2em]">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-[#48BB78] mr-3 animate-pulse"></span>
                      Update: Energiemarkt 2025 Live
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A202C] leading-[0.9] mb-10 tracking-tighter">
                      Verzilver Je Zonnestroom <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48BB78] to-[#38a169]">& Stop Terugleverkosten</span>
                    </h1>
                    <p className="text-2xl text-gray-500 mb-12 max-w-2xl leading-relaxed font-medium">
                      Ontdek hoe een thuisbatterij i.c.m. een dynamisch contract tot €950 per jaar bespaart. Bereken direct je rendement.
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                      <button onClick={() => navigateTo('home', 'calculator-anchor')} className="bg-[#1A202C] text-white px-12 py-6 rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-2xl hover:translate-y-[-2px]">Start Systeem Analyse</button>
                      <button onClick={() => navigateTo('home', 'merken')} className="bg-white border-4 border-gray-100 text-gray-600 px-12 py-6 rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:border-[#48BB78] transition-all">Bekijk Top 5 Accu's</button>
                    </div>
                  </div>
                  <div id="calculator-anchor" className="flex-1 w-full flex justify-center">
                    <Calculator onResult={setResult} />
                  </div>
                </div>
              </div>
            </section>

            <section id="merken" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.5em] mb-4 block">Onafhankelijke Test 2025</span>
                        <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-6 italic underline decoration-8 decoration-[#48BB78]/20 text-center uppercase">De Top 5 Thuisbatterijen</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {TOP_5_BRANDS.map((brand, idx) => (
                            <div key={idx} className="bg-[#F7FAFC] p-8 rounded-[3rem] border-2 border-transparent hover:border-[#48BB78]/20 transition-all hover:shadow-2xl text-center group">
                                <div className="text-[#48BB78] font-black text-4xl mb-4 italic">#{idx+1}</div>
                                <h3 className="text-xl font-black mb-2 text-gray-900 tracking-tight leading-none uppercase">{brand.name}</h3>
                                <div className="flex flex-col items-center gap-2 border-t border-gray-100 pt-6">
                                    <span className="text-3xl font-black text-[#1A202C]">{brand.score}<span className="text-sm text-gray-400">/10</span></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                  <OnbalansSimulator />
                  <TechnicalQuiz />
                </div>
              </div>
            </section>

            <section id="advies" className="py-32 bg-[#F7FAFC]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.5em] mb-6 block">De Techniek</span>
                            <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-8 leading-none italic uppercase">De Dagelijkse Energiecyclus</h2>
                            <DailyCycleChart />
                        </div>
                        <div className="space-y-8">
                            {TARGET_GROUPS.map((tg, i) => (
                                <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 group hover:border-[#48BB78]/30 transition-all">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-black text-gray-900 italic uppercase tracking-tighter">{tg.group}</h3>
                                        <span className="bg-[#48BB78]/10 text-[#48BB78] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{tg.tax}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-10">
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Advies Capaciteit</p>
                                            <p className="text-xl font-bold text-gray-900">{tg.capacity}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Terugverdientijd</p>
                                            <p className="text-xl font-bold text-[#48BB78]">{tg.payback}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {result && (
              <section id="results-section" className="py-32 bg-white scroll-mt-24 border-y border-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                  <h2 className="text-5xl font-black text-center mb-20 text-gray-900 tracking-tighter italic uppercase underline decoration-8 decoration-[#48BB78]/20">Uw Persoonlijk Rendement</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">
                        <div className="bg-[#1A202C] rounded-[4rem] p-16 text-white shadow-3xl border-b-[16px] border-[#48BB78]">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
                                <div><p className="text-[11px] font-black text-[#48BB78] uppercase mb-6">Ideale Opslag</p><p className="text-7xl font-black">{result.idealSize} kWh</p></div>
                                <div><p className="text-[11px] font-black text-[#48BB78] uppercase mb-6">Terugverdientijd</p><p className="text-7xl font-black">{result.paybackTime} jr</p></div>
                                <div><p className="text-[11px] font-black text-[#48BB78] uppercase mb-6">Besparing</p><p className="text-7xl font-black text-[#48BB78]">€{result.annualSavings}</p></div>
                            </div>
                            <div className="mt-20 pt-16 border-t border-white/5 italic text-gray-400 text-xl leading-relaxed font-medium">"{result.aiAdvice}"</div>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-[4rem] p-12 border-8 border-[#ED8936] shadow-3xl sticky top-28">
                          <h2 className="text-3xl font-black mb-8 italic text-gray-900 uppercase">Verzilver Winst ⚡️</h2>
                          {leadSubmitted ? (
                            <div className="text-center py-16 bg-[#48BB78]/5 rounded-[3rem] border-2 border-[#48BB78]/20"><p className="font-black text-[#48BB78] uppercase">Verzonden!</p></div>
                          ) : (
                            <form onSubmit={(e) => {e.preventDefault(); setLeadSubmitted(true);}} className="space-y-6">
                              <input type="text" placeholder="Postcode" className="w-full p-6 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#ED8936] outline-none font-bold text-lg" required />
                              <input type="email" placeholder="E-mail" className="w-full p-6 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#ED8936] outline-none font-bold text-lg" required />
                              <button className="w-full bg-[#ED8936] text-white font-black py-8 rounded-[2.5rem] uppercase tracking-widest text-xs shadow-2xl transform hover:scale-[1.03] active:scale-95 transition-all">Vergelijk 3 installateurs &rarr;</button>
                            </form>
                          )}
                        </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <section className="py-32 bg-[#1A202C] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl font-black tracking-tighter mb-6 italic uppercase">Kennisbank: Masterclass 2025</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {BLOG_POSTS.map((post) => (
                            <div key={post.id} className="group cursor-pointer bg-white/5 p-4 rounded-[3rem] hover:bg-white/10 transition-all" onClick={() => openBlog(post.slug)}>
                                <div className="aspect-[16/10] rounded-[2.2rem] overflow-hidden mb-8 shadow-2xl">
                                    <img src={post.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0" alt={post.title} />
                                </div>
                                <div className="px-4 pb-4">
                                  <h3 className="text-2xl font-bold mb-4 italic uppercase">{post.title}</h3>
                                  <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-widest">Lees Meer &rarr;</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection onCtaClick={() => navigateTo('home', 'calculator-anchor')} />
          </>
        )}

        {activeTab === 'kennisbank' && (
          <section className="py-32 bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-4">
              {selectedBlog ? (
                <article className="animate-in">
                  <button onClick={() => setSelectedBlog(null)} className="text-[11px] font-black uppercase tracking-[0.4em] text-[#48BB78] mb-16 flex items-center hover:-translate-x-3 transition-transform italic underline decoration-4 underline-offset-8">&larr; Terug naar de Gidsen</button>
                  <h1 className="text-5xl md:text-8xl font-black mb-16 leading-[0.9] text-gray-900 tracking-tighter uppercase italic">{selectedBlog.title}</h1>
                  <div className="mb-20"><img src={selectedBlog.imageUrl} alt={selectedBlog.title} className="w-full h-[600px] object-cover rounded-[5rem] grayscale" /></div>
                  <div className="prose prose-2xl max-w-none text-gray-700 font-medium">{renderBlogContent(selectedBlog.content)}</div>
                  <div className="mt-32 p-20 bg-[#1A202C] rounded-[5rem] text-center text-white border-b-[20px] border-[#ED8936] shadow-4xl relative overflow-hidden">
                      <h3 className="text-5xl font-black mb-10 tracking-tighter italic uppercase">Stuur uw energierekening bij.</h3>
                      <button onClick={() => navigateTo('home', 'calculator-anchor')} className="bg-[#48BB78] text-white px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-4xl">Start Offerte-check &rarr;</button>
                  </div>
                </article>
              ) : (
                <>
                  <div className="mb-32"><h1 className="text-6xl md:text-8xl font-black mb-10 text-gray-900 tracking-tighter text-center uppercase italic">Expert <br />Leesgidsen</h1></div>
                  <div className="grid grid-cols-1 gap-24">
                    {BLOG_POSTS.map(post => (
                      <div key={post.id} className="group cursor-pointer flex flex-col md:flex-row gap-16 items-center border-b-2 border-gray-50 pb-24" onClick={() => openBlog(post.slug)}>
                        <div className="md:w-[500px] h-[350px] rounded-[4rem] overflow-hidden shrink-0 shadow-2xl"><img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0" /></div>
                        <div className="flex-1 text-center md:text-left">
                          <h2 className="text-4xl font-black mb-8 group-hover:text-[#48BB78] italic uppercase">{post.title}</h2>
                          <span className="text-[10px] font-black text-[#48BB78] uppercase">Lees Meer &rarr;</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {activeTab === 'over-ons' && (
          <AboutUs onCtaClick={() => navigateTo('home', 'calculator-anchor')} />
        )}

        {activeTab === 'legal' && activeLegal && (
          <section className="py-32 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 animate-in">
              <h1 className="text-6xl font-black mb-16 text-gray-900 tracking-tighter italic uppercase leading-none underline decoration-8 decoration-[#48BB78]/20">
                {LEGAL_PAGES[activeLegal].title}
              </h1>
              <div 
                className="prose prose-xl max-w-none text-gray-600 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: LEGAL_PAGES[activeLegal].content }}
              />
              <div className="mt-24 pt-12 border-t border-gray-100 flex flex-wrap gap-6">
                {Object.keys(LEGAL_PAGES).map(key => (
                  <button 
                    key={key}
                    onClick={() => navigateTo('legal', key)}
                    className={`text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-full transition-all ${activeLegal === key ? 'bg-[#1A202C] text-white' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                  >
                    {LEGAL_PAGES[key].title}
                  </button>
                ))}
              </div>
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
