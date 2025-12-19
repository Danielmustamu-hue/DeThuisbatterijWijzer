
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const faqs: FAQItem[] = [
    {
      question: "Hoe rendabel is een thuisbatterij zolang de salderingsregeling nog bestaat?",
      answer: "Hoewel salderen momenteel nog voordelig is, maken de nieuwe 'terugleverkosten' van energieleveranciers een accu nu al rendabel. Door uw eigen opgewekte stroom direct op te slaan, voorkomt u deze boetes. In combinatie met een dynamisch contract (handelen op uurprijzen) kunt u bovendien verdienen door de accu te vullen bij negatieve stroomprijzen. De gemiddelde terugverdientijd in 2025 ligt tussen de 6 en 8 jaar."
    },
    {
      question: "Wat is de levensduur van een moderne LFP-batterij?",
      answer: "De meeste systemen die wij aanraden maken gebruik van Lithium-IJzerfosfaat (LFP). Deze technologie is superieur omdat hij tot wel 10.000 laadcycli meegaat. Bij dagelijks gebruik betekent dit een levensduur van 15 tot 20 jaar, waarbij de accu na die periode vaak nog steeds 80% van zijn oorspronkelijke capaciteit behoudt."
    },
    {
      question: "Zijn thuisbatterijen veilig voor gebruik binnenshuis?",
      answer: "Ja, mits geïnstalleerd door een gecertificeerd specialist. Moderne LFP-accu's zijn chemisch stabiel en niet ontvlambaar bij oververhitting (geen thermal runaway). Voor uw opstalverzekering en garantie is het echter cruciaal dat de installatie voldoet aan de NEN-normen en in een goed geventileerde ruimte wordt geplaatst."
    },
    {
      question: "Kan ik met een thuisaccu volledig 'off-grid' gaan in Nederland?",
      answer: "Volledig onafhankelijk zijn van het stroomnet is in de Nederlandse winter een uitdaging vanwege het gebrek aan zonlicht. De meeste gebruikers kiezen voor een 'hybride' oplossing: u blijft verbonden met het net voor noodgevallen, maar gebruikt uw accu om 80% tot 90% van uw eigen verbruik te dekken. Veel systemen bieden wel een 'back-up' functie bij stroomuitval."
    },
    {
      question: "Welke aanpassingen zijn er nodig in mijn meterkast?",
      answer: "U heeft een vrije groep nodig in de groepenkast. Daarnaast is een slimme meter (SMR 4.0 of hoger) essentieel voor de communicatie. Bij grotere accu's (vanaf 10 kWh) adviseren wij een 3-fase aansluiting, zodat de batterij snel genoeg kan laden en ontladen om uw volledige huishoudelijke verbruik op te vangen."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.5em] mb-4 block italic">Veelgestelde Vragen</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase italic leading-none">
            Alles wat u moet weten <br />
            <span className="text-[#48BB78]">over opslag in 2025</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-gray-50 rounded-[2rem] border border-transparent open:border-[#48BB78]/30 open:bg-white open:shadow-xl transition-all duration-300"
            >
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none outline-none">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4 italic uppercase tracking-tight">
                  {faq.question}
                </h3>
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center group-open:rotate-180 group-open:border-[#48BB78] group-open:text-[#48BB78] transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-8 pb-8">
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#1A202C] rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl border-b-[12px] border-[#ED8936]">
          <div className="relative z-10">
            <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tighter">Niet gevonden wat u zocht?</h3>
            <p className="text-gray-400 mb-8 font-medium italic">
              Onze experts staan klaar om uw specifieke situatie te analyseren en u van persoonlijk advies te voorzien.
            </p>
            <button 
              onClick={onCtaClick}
              className="bg-[#ED8936] hover:bg-white hover:text-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all transform hover:scale-105"
            >
              Stel uw vraag via een offerte-check &rarr;
            </button>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
