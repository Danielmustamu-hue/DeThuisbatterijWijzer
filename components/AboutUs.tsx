
import React from 'react';

interface AboutUsProps {
  onCtaClick: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-white min-h-screen animate-in">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.5em] mb-4 block italic">Onze Missie</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase italic leading-[0.9] mb-8">
            Orde in de chaos <br />
            <span className="text-[#48BB78]">van energie-opslag</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto italic leading-relaxed">
            Wij zijn De Thuisbatterij Wijzer. Een onafhankelijk team van energie-experts en dataspecialisten met één doel: u helpen navigeren door de snel veranderende Nederlandse energiemarkt.
          </p>
        </div>

        {/* Waarom wij bestaan */}
        <div className="prose prose-xl max-w-none text-gray-600 font-medium leading-relaxed mb-32">
          <h2 className="text-3xl font-black italic uppercase text-gray-900 tracking-tight border-l-8 border-[#48BB78] pl-6 mb-8">
            Waarom wij bestaan
          </h2>
          <p className="mb-6">
            De markt voor thuisbatterijen in Nederland bevindt zich op een kritiek punt. Met de afbouw van de salderingsregeling in het vooruitzicht en de directe invoer van <strong>terugleverkosten</strong> door vrijwel alle energieleveranciers, is een thuisaccu niet langer een luxe-item voor de 'tech-liefhebber', maar een noodzakelijke tool voor elk huishouden met zonnepanelen.
          </p>
          <p>
            Echter, de technische en financiële complexiteit is enorm. De Thuisbatterij Wijzer is opgericht om deze chaos te vertalen naar begrijpelijke data en onafhankelijk advies. Wij combineren diepgaande technische kennis met realtime marktanalyse van 2025.
          </p>
        </div>

        {/* Kernwaarden Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: "Onafhankelijkheid", 
              icon: "M9 12l2 2 4-4", 
              desc: "Wij verkopen zelf geen hardware. Ons advies is puur gebaseerd op wat het beste rendement oplevert voor uw specifieke situatie." 
            },
            { 
              title: "Deskundigheid", 
              icon: "M13 10V3L4 14h7v7l9-11h-7z", 
              desc: "Onze rekenmodellen worden dagelijks geüpdatet met de nieuwste EPEX-stroomprijzen en wijzigende nettarieven." 
            },
            { 
              title: "Transparantie", 
              icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", 
              desc: "Wij zijn eerlijk over hoe we ons platform financieren. Geen verborgen agenda's, maar heldere communicatie over partners." 
            }
          ].map((val, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border-b-8 border-[#48BB78] hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-[#48BB78] text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={val.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-black italic uppercase text-gray-900 mb-4 tracking-tight leading-none">{val.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed italic">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Verdienmodel Sectie */}
        <div className="bg-[#1A202C] text-white p-16 rounded-[4rem] border-r-[16px] border-[#ED8936] shadow-4xl overflow-hidden relative mb-24">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-[#ED8936]/20 text-[#ED8936] text-[10px] font-black uppercase tracking-widest mb-6 italic">
              Transparantie in 2025
            </div>
            <h2 className="text-3xl md:text-4xl font-black italic uppercase mb-8 tracking-tighter leading-none">
              Hoe wij dit platform <br />gratis houden
            </h2>
            <div className="space-y-6 text-gray-400 font-medium text-lg italic">
              <p>
                De Thuisbatterij Wijzer is voor consumenten 100% gratis te gebruiken. Om de kwaliteit van onze tools en gidsen te waarborgen, maken we gebruik van een transparant model:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#ED8936] mr-3 font-black">01.</span>
                  <span><strong>Lead-vergoedingen:</strong> Wanneer u via onze tool een offerte-aanvraag indient bij een gecertificeerde partner, ontvangen wij een kleine vergoeding voor de match.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ED8936] mr-3 font-black">02.</span>
                  <span><strong>Affiliate marketing:</strong> Wij kunnen een commissie ontvangen als u via een link op onze site een product (zoals een P1-meter) aanschaft. Dit kost u nooit iets extra.</span>
                </li>
              </ul>
              <p className="pt-8 border-t border-white/10 text-sm italic">
                Deze inkomsten stellen ons in staat om onafhankelijk te blijven van specifieke batterij-fabrikanten en altijd het meest eerlijke advies te geven.
              </p>
            </div>
          </div>
          {/* Decorative radial gradient */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ED8936] opacity-10 rounded-full blur-[100px]"></div>
        </div>

        {/* CTA Footer */}
        <div className="text-center">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-8 italic">Klaar om te besparen?</p>
          <button 
            onClick={onCtaClick}
            className="bg-[#48BB78] text-white px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-[#1A202C] transition-all transform hover:scale-105 shadow-4xl"
          >
            Start uw eigen rendements-analyse &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
