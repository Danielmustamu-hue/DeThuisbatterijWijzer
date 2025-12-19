
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import DailyCycleChart from './components/DailyCycleChart';
import BrandComparisonTable from './components/BrandComparisonTable';
import { CalculationResult, BlogPost, AppTab } from './types';
import { RECOMMENDED_PRODUCTS, FAQS, BLOG_POSTS, TARGET_GROUPS, TOP_5_BRANDS } from './constants';

const App: React.FC = () => {
  const [result, setResult] = useState<(CalculationResult & { postalCode: string }) | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const navigateTo = (tab: AppTab, anchor?: string) => {
    setActiveTab(tab);
    setSelectedBlog(null);
    
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
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-3xl font-black mt-16 mb-8 text-gray-900 border-l-8 border-[#48BB78] pl-8 uppercase tracking-tighter leading-none italic">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-2xl font-bold mt-10 mb-6 text-gray-800 italic">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('* ')) {
        return <li key={i} className="ml-8 mb-3 text-gray-600 list-disc font-medium text-lg leading-relaxed">{line.replace('* ', '')}</li>;
      }
      
      // Technical Table Component Placeholder
      if (line.includes('[ComparisonTable]')) {
        return <BrandComparisonTable key={i} />;
      }

      // Affiliate Placeholder Handling
      if (line.includes('[Halt:')) {
        return (
          <div key={i} className="my-8 p-6 bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl text-center">
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Advertentie / Affiliate Ruimte</p>
            <p className="text-sm italic text-gray-500 mt-2">Hier wordt binnenkort een relevante aanbieding getoond.</p>
          </div>
        );
      }

      // Conversion CTA Handling
      if (line.startsWith('[') && (line.includes('Vergelijk') || line.includes('Bespaar'))) {
        return (
          <div key={i} className="my-14 p-12 bg-gradient-to-br from-[#48BB78]/10 to-transparent border-2 border-dashed border-[#48BB78]/40 rounded-[3.5rem] text-center shadow-inner">
            <p className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.3em] mb-6">Actie Vereist</p>
            <h4 className="text-xl font-bold mb-8 text-gray-800">{line.replace('[', '').replace(']', '')}</h4>
            <button onClick={() => navigateTo('home', 'calculator-anchor')} className="bg-[#48BB78] text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:shadow-2xl hover:bg-black transition-all transform hover:scale-105 active:scale-95">
              Start Gratis Offerte-check &rarr;
            </button>
          </div>
        );
      }
      
      if (line.includes('Rendementscalculator')) {
          const parts = line.split('Rendementscalculator');
          return (
              <p key={i} className="mb-8 text-gray-600 leading-relaxed text-xl font-normal">
                  {parts[0]}
                  <button onClick={() => navigateTo('home', 'calculator-anchor')} className="text-[#48BB78] font-black underline decoration-4 underline-offset-4 hover:text-black transition-colors">Rendementscalculator</button>
                  {parts[1]}
              </p>
          );
      }

      if (line.trim().length === 0) return <div key={i} className="h-6" />;
      return <p key={i} className="mb-8 text-gray-600 leading-relaxed text-xl font-normal" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') }}></p>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] selection:bg-[#48BB78]/30 selection:text-black">
      <Header onNavigate={navigateTo} activeTab={activeTab === 'legal' ? 'home' : activeTab as any} hasResult={!!result} />

      <main className="flex-grow">
        {activeTab === 'home' ? (
          <>
            {/* HERO SECTION */}
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

            {/* TOP 5 BRANDS SECTION */}
            <section id="merken" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.5em] mb-4 block">Onafhankelijke Test 2025</span>
                        <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-6 italic underline decoration-8 decoration-[#48BB78]/20 text-center uppercase">De Top 5 Thuisbatterijen</h2>
                        <p className="text-gray-400 italic text-lg text-center mx-auto max-w-2xl font-medium">"Getest op rendement, garantie en software-integratie voor de Nederlandse markt."</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {TOP_5_BRANDS.map((brand, idx) => (
                            <div key={idx} className="bg-[#F7FAFC] p-8 rounded-[3rem] border-2 border-transparent hover:border-[#48BB78]/20 transition-all hover:shadow-2xl text-center group">
                                <div className="text-[#48BB78] font-black text-4xl mb-4 italic">#{idx+1}</div>
                                <h3 className="text-xl font-black mb-2 text-gray-900 tracking-tight leading-none uppercase">{brand.name}</h3>
                                <p className="text-[10px] font-black text-gray-400 mb-6 uppercase tracking-widest">{brand.bestFor}</p>
                                <div className="flex flex-col items-center gap-2 border-t border-gray-100 pt-6">
                                    <span className="text-3xl font-black text-[#1A202C]">{brand.score}<span className="text-sm text-gray-400">/10</span></span>
                                    <span className="text-[9px] font-black uppercase text-gray-500 tracking-widest">Garantie: {brand.warranty}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CHART SECTION */}
            <section id="advies" className="py-32 bg-[#F7FAFC]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.5em] mb-6 block">De Techniek</span>
                            <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-8 leading-none italic uppercase">De Dagelijkse Energiecyclus</h2>
                            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                                Een slimme accu slaat je middag-overschot op om de dure avondpiek van 18:00 tot 22:00 volledig op te vangen. 
                                Met onbalanssturing verkoop je stroom terug als de netprijs het hoogst is.
                            </p>
                            <DailyCycleChart />
                        </div>
                        <div className="space-y-8">
                            {TARGET_GROUPS.map((tg, i) => (
                                <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 group hover:border-[#48BB78]/30 transition-all">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#48BB78] transition-colors italic uppercase tracking-tighter">{tg.group}</h3>
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

            {/* CALCULATOR RESULTS */}
            {result && (
              <section id="results-section" className="py-32 bg-white scroll-mt-24 border-y border-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                  <h2 className="text-5xl font-black text-center mb-20 text-gray-900 tracking-tighter italic uppercase underline decoration-8 decoration-[#48BB78]/20">Uw Persoonlijk Rendement</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">
                        <div className="bg-[#1A202C] rounded-[4rem] p-16 text-white shadow-3xl border-b-[16px] border-[#48BB78]">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
                                <div>
                                    <p className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.3em] mb-6">Ideale Opslag</p>
                                    <p className="text-7xl font-black tracking-tighter">{result.idealSize} <span className="text-2xl text-gray-600 font-bold uppercase tracking-widest">kWh</span></p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.3em] mb-6">Terugverdientijd</p>
                                    <p className="text-7xl font-black tracking-tighter">{result.paybackTime} <span className="text-2xl text-gray-600 font-bold uppercase tracking-widest">jr</span></p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.3em] mb-6">Jaarlijkse Besparing</p>
                                    <p className="text-7xl font-black tracking-tighter text-[#48BB78]">€{result.annualSavings}</p>
                                </div>
                            </div>
                            <div className="mt-20 pt-16 border-t border-white/5 italic text-gray-400 text-xl leading-relaxed font-medium">
                                "{result.aiAdvice}"
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-[4rem] p-12 border-8 border-[#ED8936] shadow-3xl sticky top-28">
                          <h2 className="text-3xl font-black mb-8 italic tracking-tighter leading-none text-gray-900 uppercase">Verzilver Winst ⚡️</h2>
                          <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">Ontvang binnen 24 uur 3 vrijblijvende prijsopgaven van erkende installateurs.</p>
                          {leadSubmitted ? (
                            <div className="text-center py-16 bg-[#48BB78]/5 rounded-[3rem] border-2 border-[#48BB78]/20">
                              <p className="font-black text-[#48BB78] uppercase tracking-widest text-sm text-center">Verzonden!</p>
                            </div>
                          ) : (
                            <form onSubmit={(e) => {e.preventDefault(); setLeadSubmitted(true);}} className="space-y-6">
                              <input type="text" placeholder="Postcode" className="w-full p-6 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#ED8936] outline-none font-bold text-lg" required />
                              <input type="email" placeholder="E-mail" className="w-full p-6 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#ED8936] outline-none font-bold text-lg" required />
                              <button className="w-full bg-[#ED8936] text-white font-black py-8 rounded-[2.5rem] uppercase tracking-widest text-xs shadow-2xl transform hover:scale-[1.03] active:scale-95 transition-all">
                                Vergelijk 3 installateurs &rarr;
                              </button>
                            </form>
                          )}
                        </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* KENNISBANK PREVIEW */}
            <section className="py-32 bg-[#1A202C] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl font-black tracking-tighter mb-6 leading-none text-center italic uppercase">Kennisbank: Masterclass 2025</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto italic text-lg opacity-80 text-center font-medium">"Onze diepgaande gidsen die u alles leren over rendement, techniek en wetgeving."</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {BLOG_POSTS.map((post) => (
                            <div key={post.id} className="group cursor-pointer bg-white/5 p-4 rounded-[3rem] hover:bg-white/10 transition-all border border-white/5" onClick={() => openBlog(post.slug)}>
                                <div className="aspect-[16/10] rounded-[2.2rem] overflow-hidden mb-8 shadow-2xl">
                                    <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt={post.title} />
                                </div>
                                <div className="px-4 pb-4">
                                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#48BB78] transition-colors leading-tight italic uppercase tracking-tighter">{post.title}</h3>
                                  <p className="text-sm text-gray-400 mb-8 line-clamp-3 italic opacity-70">"{post.excerpt}"</p>
                                  <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block">Lees Volledig Rapport &rarr;</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section id="faq" className="py-40 bg-white scroll-mt-20">
              <div className="max-w-5xl mx-auto px-4 text-center">
                <div className="mb-24">
                  <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.6em] mb-6 block text-center">Ondersteuning</span>
                  <h2 className="text-6xl font-black text-gray-900 tracking-tighter italic text-center uppercase">Veelgestelde Vragen</h2>
                </div>
                <div className="space-y-10 text-left">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="bg-[#F7FAFC] rounded-[3.5rem] p-12 border-2 border-transparent hover:border-gray-100 transition-all group shadow-sm hover:shadow-xl">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                        <h3 className="text-2xl font-black text-gray-900 pr-12 leading-tight tracking-tight italic group-hover:text-[#48BB78] transition-colors uppercase">{faq.q}</h3>
                        {faq.blogSlug && (
                          <button onClick={() => openBlog(faq.blogSlug!)} className="shrink-0 bg-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border-2 border-gray-100 hover:bg-[#48BB78] hover:text-white transition-all shadow-sm">Leesgids &rarr;</button>
                        )}
                      </div>
                      <p className="text-gray-500 text-xl italic font-medium leading-relaxed opacity-80">"{faq.a}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          /* KENNISBANK PAGE */
          <section className="py-32 bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-4">
              {selectedBlog ? (
                <article className="animate-in">
                  <button onClick={() => setSelectedBlog(null)} className="text-[11px] font-black uppercase tracking-[0.4em] text-[#48BB78] mb-16 flex items-center hover:-translate-x-3 transition-transform italic underline decoration-4 underline-offset-8">
                    &larr; Terug naar de Gidsen
                  </button>
                  <div className="flex items-center gap-6 mb-12">
                      <span className="bg-[#48BB78]/10 text-[#48BB78] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] italic">{selectedBlog.readingTime} leesdiepte</span>
                      <span className="text-gray-300 text-[10px] font-black uppercase tracking-[0.3em] italic">Masterclass Energie 2025</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-black mb-16 leading-[0.9] text-gray-900 tracking-tighter uppercase italic">{selectedBlog.title}</h1>
                  <div className="mb-20">
                    <img src={selectedBlog.imageUrl} alt={selectedBlog.title} className="w-full h-[600px] object-cover rounded-[5rem] shadow-4xl grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
                  <div className="prose prose-2xl max-w-none text-gray-700 font-medium">
                    {renderBlogContent(selectedBlog.content)}
                  </div>
                  
                  <div className="mt-32 p-20 bg-[#1A202C] rounded-[5rem] text-center text-white border-b-[20px] border-[#ED8936] shadow-4xl relative overflow-hidden">
                      <h3 className="text-5xl font-black mb-10 tracking-tighter italic uppercase">Stuur uw energierekening bij.</h3>
                      <p className="text-gray-400 mb-14 max-w-2xl mx-auto italic text-2xl font-medium opacity-80">"Ontvang gratis 3 offertes van regionale specialisten en start met besparen op installatiekosten."</p>
                      <button onClick={() => navigateTo('home', 'calculator-anchor')} className="bg-[#48BB78] text-white px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-4xl">Start Offerte-check &rarr;</button>
                  </div>
                </article>
              ) : (
                <>
                  <div className="mb-32">
                    <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.6em] mb-6 block text-center italic">Kennisbank</span>
                    <h1 className="text-6xl md:text-8xl font-black mb-10 text-gray-900 tracking-tighter leading-none text-center uppercase italic">Expert <br />Leesgidsen</h1>
                    <p className="text-gray-400 text-3xl italic max-w-3xl leading-relaxed font-medium text-center mx-auto opacity-70">"Alles wat u moet weten over de thuisbatterij in Nederland (Editie 2025)."</p>
                  </div>
                  <div className="grid grid-cols-1 gap-24">
                    {BLOG_POSTS.map(post => (
                      <div key={post.id} className="group cursor-pointer flex flex-col md:flex-row gap-16 items-center border-b-2 border-gray-50 pb-24 transition-all hover:translate-y-[-8px]" onClick={() => openBlog(post.slug)}>
                        <div className="md:w-[500px] h-[350px] rounded-[4rem] overflow-hidden shrink-0 shadow-2xl relative">
                          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h2 className="text-4xl font-black mb-8 group-hover:text-[#48BB78] transition-colors leading-[1.1] tracking-tighter text-gray-900 italic uppercase underline decoration-4 underline-offset-8 decoration-transparent group-hover:decoration-[#48BB78]/20">{post.title}</h2>
                          <p className="text-gray-400 mb-10 text-xl leading-relaxed italic font-medium line-clamp-3">"{post.excerpt}"</p>
                          <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.4em] group-hover:translate-x-4 transition-transform inline-block text-center md:text-left">Lees Volledig Rapport &rarr;</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
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
