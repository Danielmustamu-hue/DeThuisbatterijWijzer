
import React, { useState } from 'react';

const TechnicalQuiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Heeft u een slimme meter (SMR 4.0 of hoger)?",
      desc: "Nodig voor realtime communicatie met de accu.",
      points: 25
    },
    {
      q: "Is uw woning voorzien van een 3-fase aansluiting?",
      desc: "Vereist voor krachtige omvormers en snel laden.",
      points: 25
    },
    {
      q: "Is er in uw meterkast ruimte voor een extra vrije groep?",
      desc: "Een thuisaccu vereist altijd een eigen beveiligde groep.",
      points: 25
    },
    {
      q: "Maakt u al gebruik van een P1-meter (zoals HomeWizard)?",
      desc: "Cruciaal voor het meten van uw werkelijke overschot.",
      points: 25
    }
  ];

  const handleAnswer = (val: boolean) => {
    if (val) setScore(prev => prev + questions[step].points);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const getAdvice = () => {
    if (score === 100) return "U bent 100% klaar! Start direct met het vergelijken van offertes.";
    if (score >= 50) return "U bent op de goede weg, maar er zijn aanpassingen nodig in de meterkast.";
    return "Uw installatie heeft serieuze upgrades nodig voordat een accu rendabel is.";
  };

  if (showResult) {
    return (
      <div className="bg-[#1A202C] text-white rounded-[3rem] p-12 shadow-2xl text-center border-b-[12px] border-[#48BB78] animate-in">
        <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">Check-up Resultaat</h3>
        <div className="relative inline-block mb-8">
            <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-800" />
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" 
                    className="text-[#48BB78] transition-all duration-1000"
                    strokeDasharray={364.4}
                    strokeDashoffset={364.4 - (364.4 * score / 100)}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-black">{score}%</span>
            </div>
        </div>
        <p className="text-xl font-bold mb-8 italic">"{getAdvice()}"</p>
        <button 
            onClick={() => {setStep(0); setScore(0); setShowResult(false);}}
            className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
        >
            Opnieuw testen
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100 min-h-[400px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.4em]">Technische Check-up</span>
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Vraag {step + 1}/4</span>
        </div>
        <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none mb-4 italic uppercase">{questions[step].q}</h3>
        <p className="text-gray-500 text-sm font-medium italic">"{questions[step].desc}"</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-10">
        <button 
            onClick={() => handleAnswer(true)}
            className="bg-gray-50 hover:bg-[#48BB78] hover:text-white p-8 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all border-2 border-transparent hover:border-[#48BB78]"
        >
            Ja
        </button>
        <button 
            onClick={() => handleAnswer(false)}
            className="bg-gray-50 hover:bg-gray-900 hover:text-white p-8 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all border-2 border-transparent hover:border-black"
        >
            Nee / Weet niet
        </button>
      </div>
    </div>
  );
};

export default TechnicalQuiz;
