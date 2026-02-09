
import React, { useState, useMemo } from 'react';
import { DollarSign, Percent, Calendar, ShieldCheck } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const PaymentCalculator: React.FC = () => {
  const [price, setPrice] = useState(185000);
  const [downPayment, setDownPayment] = useState(18500);
  const [interestRate, setInterestRate] = useState(6.5);
  const [term, setTerm] = useState(30);

  const monthlyPayment = useMemo(() => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = term * 12;
    
    if (monthlyRate === 0) return principal / numberOfPayments;
    
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    );
  }, [price, downPayment, interestRate, term]);

  const chartData = [
    { name: 'Principal & Interest', value: monthlyPayment, color: '#dc2626' },
    { name: 'Est. Taxes & Ins.', value: monthlyPayment * 0.25, color: '#3f3f46' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black tracking-widest uppercase mb-6 rounded">
            Financial Transparency
          </div>
          <h2 className="font-oswald text-5xl md:text-6xl font-black uppercase text-white tracking-tighter mb-8">
            INSTANT <span className="text-red-600 italic">BUDGET</span> CALCULATOR
          </h2>
          <p className="text-white/50 text-lg mb-12">
            No hidden fees. No guesswork. Calculate your estimated monthly lifestyle investment with our industrial-grade calculator.
          </p>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-black uppercase tracking-widest text-white/40">
                <span>Home Price</span>
                <span className="text-white">${price.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="100000" max="500000" step="1000" value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-red-600 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-xs font-black uppercase tracking-widest text-white/40">
                <span>Down Payment</span>
                <span className="text-white">${downPayment.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="0" max={price * 0.5} step="1000" value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full accent-red-600 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Interest Rate (%)</label>
                <div className="relative">
                  <Percent size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                  <input 
                    type="number" value={interestRate} step="0.1"
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded p-3 pl-10 text-white font-bold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Loan Term (Years)</label>
                <div className="relative">
                  <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                  <select 
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded p-3 pl-10 text-white font-bold appearance-none"
                  >
                    <option value={15} className="bg-zinc-900">15 Years</option>
                    <option value={20} className="bg-zinc-900">20 Years</option>
                    <option value={30} className="bg-zinc-900">30 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card p-12 rounded-2xl relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center rounded-xl shadow-lg shadow-red-600/20">
                <DollarSign size={32} className="text-white" />
              </div>
              <div>
                <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Estimated Investment</div>
                <div className="text-5xl font-black text-white font-oswald italic">
                  ${Math.round(monthlyPayment).toLocaleString()}
                  <span className="text-sm font-bold text-white/40 not-italic ml-2 uppercase">/Month</span>
                </div>
              </div>
            </div>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                  <span className="text-sm font-semibold text-white/70">Principal & Interest</span>
                </div>
                <span className="text-white font-black">${Math.round(monthlyPayment).toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-zinc-700 rounded-full" />
                  <span className="text-sm font-semibold text-white/70">Taxes & Insurance (Est.)</span>
                </div>
                <span className="text-white font-black">${Math.round(monthlyPayment * 0.25).toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full mt-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all rounded">
              GET PRE-APPROVED NOW
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-white/40">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Safe & Secure Financing Partner</span>
            </div>
          </div>

          {/* Decorative background element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PaymentCalculator;
