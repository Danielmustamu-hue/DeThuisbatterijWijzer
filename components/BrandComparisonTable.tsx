
import React from 'react';
import { TECHNICAL_SPECS } from '../constants';

const BrandComparisonTable: React.FC = () => {
  return (
    <div className="my-16 overflow-hidden rounded-[3rem] border border-gray-100 bg-white shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#1A202C] text-white">
              <th className="p-8 text-[10px] font-black uppercase tracking-widest sticky left-0 bg-[#1A202C] z-10">Kenmerk</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">Tesla <br/><span className="text-[#48BB78]">PW3</span></th>
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">AlphaESS <br/><span className="text-gray-400">Smile</span></th>
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">Victron <br/><span className="text-gray-400">Multi</span></th>
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">Sessy <br/><span className="text-gray-400">NL</span></th>
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">Huawei <br/><span className="text-gray-400">Luna</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {TECHNICAL_SPECS.map((spec, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                <td className="p-8 font-black text-gray-900 text-sm tracking-tight sticky left-0 bg-white z-10 border-r border-gray-50 italic uppercase">
                  {spec.label}
                </td>
                <td className="p-8 text-center font-bold text-gray-700 text-sm bg-[#48BB78]/5 group-hover:bg-[#48BB78]/10 transition-colors">
                  {spec.tesla}
                </td>
                <td className="p-8 text-center text-gray-500 text-sm font-medium">
                  {spec.alpha}
                </td>
                <td className="p-8 text-center text-gray-500 text-sm font-medium italic">
                  {spec.victron}
                </td>
                <td className="p-8 text-center text-gray-500 text-sm font-medium">
                  {spec.sessy}
                </td>
                <td className="p-8 text-center text-gray-500 text-sm font-medium">
                  {spec.huawei}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#F7FAFC] p-8 text-center border-t border-gray-50">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0">Scroll horizontaal voor alle merken &rarr;</p>
      </div>
    </div>
  );
};

export default BrandComparisonTable;
