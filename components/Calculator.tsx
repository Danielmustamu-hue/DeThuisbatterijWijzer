
import React, { useState } from 'react';
import { CalculationInput, CalculationResult } from '../types';
import { getAIAdvice } from '../services/geminiService';

interface CalculatorProps {
  onResult: (result: CalculationResult & { postalCode: string }) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onResult }) => {
  const [input, setInput] = useState<CalculationInput>({ consumption: 4000, panels: 10 });
  const [postalCode, setPostalCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const kWp = input.panels * 0.4;
    const idealSize = Math.max(2, Math.round(kWp * 1.2 * 10) / 10);
    const annualSavings = Math.round(idealSize * 82); 
    const paybackTime = Math.round((idealSize * 850) / annualSavings * 10) / 10;

    const aiAdvice = await getAIAdvice(input.consumption, input.panels, idealSize);

    setTimeout(() => {
      onResult({
        idealSize,
        paybackTime,
        annualSavings,
        aiAdvice,
        postalCode
      });
      setLoading(false);

      setTimeout(() => {
        const resultsElement = document.getElementById('results-section');
        if (resultsElement) {
          const yOffset = -100;
          const y = resultsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }, 800);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 max-w-xl w-full relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2V22M2 12H22M12 2L15 5M12 2L9 5M12 22L15 19M12 22L9 19" />
        </svg>
      </div>

      <h3 className="text-2xl font-black mb-8 text-gray-900 tracking-tight italic">Rendementsanalyse 2025 ⚡️</h3>
      
      <form onSubmit={handleCalculate} className="space-y-6">
        <div className="space-y-5">
            <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                    Regio (Postcode)
                </label>
                <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-[#48BB78]/10 focus:border-[#48BB78] outline-none transition-all uppercase font-bold text-gray-700"
                    placeholder="1234 AB"
                    maxLength={7}
                    required
                />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                        Jaarverbruik (kWh)
                    </label>
                    <input
                        type="number"
                        value={input.consumption}
                        onChange={(e) => setInput({ ...input, consumption: parseInt(e.target.value) || 0 })}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-[#48BB78]/10 focus:border-[#48BB78] outline-none transition-all font-bold text-gray-700"
                        required
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                        Zonnepanelen (stuks)
                    </label>
                    <input
                        type="number"
                        value={input.panels}
                        onChange={(e) => setInput({ ...input, panels: parseInt(e.target.value) || 0 })}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-[#48BB78]/10 focus:border-[#48BB78] outline-none transition-all font-bold text-gray-700"
                        required
                    />
                </div>
            </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1A202C] hover:bg-black text-white font-black py-5 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl disabled:opacity-50 flex items-center justify-center space-x-3 text-lg"
        >
          {loading ? (
             <div className="flex items-center space-x-3">
               <svg className="animate-spin h-5 w-5 text-[#48BB78]" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
               <span className="text-sm uppercase tracking-widest">Systeemanalyse...</span>
             </div>
          ) : (
            <>
                <span>Ontdek mijn Rendement &rarr;</span>
            </>
          )}
        </button>
      </form>
      
      <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between text-[9px] text-gray-400 font-bold uppercase tracking-widest">
          <span className="flex items-center"><svg className="w-3 h-3 mr-1 text-[#48BB78]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg> 100% Onafhankelijk</span>
          <span className="flex items-center"><svg className="w-3 h-3 mr-1 text-[#48BB78]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg> Gecertificeerde Partners</span>
      </div>
    </div>
  );
};

export default Calculator;
