
import React from 'react';

interface HeaderProps {
  onNavigate: (tab: 'home' | 'kennisbank', anchor?: string) => void;
  activeTab: 'home' | 'kennisbank';
  hasResult: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeTab, hasResult }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="w-10 h-10 bg-[#48BB78] rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold text-[#1A202C] tracking-tight">
            De Thuisbatterij Wijzer
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
          <button 
            onClick={() => onNavigate('home')} 
            className={`transition-colors hover:text-[#48BB78] ${activeTab === 'home' ? 'text-[#48BB78]' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('kennisbank')} 
            className={`transition-colors hover:text-[#48BB78] ${activeTab === 'kennisbank' ? 'text-[#48BB78]' : ''}`}
          >
            Kennisbank
          </button>
          <button 
            onClick={() => onNavigate('home', 'merken')} 
            className="transition-colors hover:text-[#48BB78]"
          >
            Top 5 Merken
          </button>
          <button 
            onClick={() => onNavigate('home', hasResult ? 'results-section' : 'calculator-anchor')} 
            className={`px-5 py-2.5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-sm flex items-center space-x-2 ${
              hasResult 
              ? 'bg-[#ED8936] text-white' 
              : 'bg-[#48BB78]/10 text-[#48BB78] hover:bg-[#48BB78] hover:text-white'
            }`}
          >
            <span>{hasResult ? 'Mijn Rapport' : 'Bereken Besparing'}</span>
            {!hasResult && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </button>
        </nav>

        <div className="md:hidden">
            <button className="text-gray-900 p-2" onClick={() => onNavigate('home', 'calculator-anchor')}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
