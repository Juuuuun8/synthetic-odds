'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle, Share2, Copy, Check } from 'lucide-react';

export default function Home() {
  const [odds, setOdds] = useState(['', '']);
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calculateCompositeOdds = () => {
    const validOdds = odds
      .map(o => parseFloat(o))
      .filter(o => !isNaN(o) && o > 0);

    if (validOdds.length === 0) return 0;

    const inverseSum = validOdds.reduce((sum, odd) => sum + 1 / odd, 0);
    return 1 / inverseSum;
  };

  const compositeOdds = calculateCompositeOdds();
  const isTrigami = compositeOdds < 1.0 && compositeOdds > 0;

  const handleOddsChange = (index: number, value: string) => {
    const newOdds = [...odds];
    newOdds[index] = value;
    setOdds(newOdds);
  };

  const handleRemove = (index: number) => {
    setOdds(odds.filter((_, i) => i !== index));
  };

  const handleAddRow = () => {
    setOdds([...odds, '']);
  };

  const generateShareUrl = () => {
    const oddsParam = odds.filter(o => o.trim()).join(',');
    const baseUrl = isClient ? window.location.origin : '';
    return `${baseUrl}?odds=${encodeURIComponent(oddsParam)}`;
  };

  const handleCopyShare = async () => {
    await navigator.clipboard.writeText(generateShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '最速合成オッズ計算機',
          text: `合成オッズ: ${compositeOdds.toFixed(2)}`,
          url: generateShareUrl(),
        });
      } catch (err) {
        console.log('共有がキャンセルされました');
      }
    }
  };

  return (
    <div className="py-4 md:py-6 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-serif font-extrabold mb-6 text-center text-white tracking-tight">
          最速合成オッズ計算機
        </h1>

        <div className="relative mb-6">
          <div className="absolute inset-0 bg-black/6 rounded-2xl"></div>
          <div className="relative bg-slate-800/60 rounded-2xl p-6 md:p-10 border border-slate-700/20 shadow-lg">
            <p className="text-center text-xs font-bold text-slate-400 mb-3 tracking-widest">COMPOSITE ODDS</p>
            <p className="text-center text-5xl md:text-7xl font-black text-indigo-300">
              {compositeOdds > 0 ? compositeOdds.toFixed(2) : '---'}
            </p>
            <div className="mt-4 h-1 w-32 mx-auto bg-indigo-500 rounded-full"></div>
          </div>
        </div>

        {isTrigami && (
          <div className="mb-6">
            <div className="flex items-center gap-3 bg-red-900/30 backdrop-blur rounded-xl p-4 shadow-lg border border-red-500/30">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 font-bold text-base">⚠ 警告：トリガミです！</p>
            </div>
          </div>
        )}

        <div className="space-y-2 mb-6">
          {odds.map((odd, index) => (
            <div key={index} className="flex gap-3">
              <Input
                type="number"
                placeholder={`オッズ ${index + 1}`}
                value={odd}
                onChange={(e) => handleOddsChange(index, e.target.value)}
                step="0.01"
                min="0"
                className="bg-slate-800/50 backdrop-blur border border-slate-600 text-white placeholder-slate-500 text-base md:text-lg font-semibold focus:border-indigo-400 focus:ring-indigo-400/50 focus:ring-1 transition-all duration-200"
              />
              {odds.length > 2 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemove(index)}
                  className="px-4 border border-slate-600 text-slate-400 hover:bg-red-900/30 hover:text-red-300 hover:border-red-500/50 font-bold transition-all"
                >
                  ×
                </Button>
              )}
            </div>
          ))}
        </div>

        <Button
          onClick={handleAddRow}
          className="w-full py-3 md:py-4 text-sm md:text-base font-bold bg-indigo-600/80 hover:bg-indigo-500 text-white shadow-lg transition-all duration-200 border border-indigo-500/50 mb-3"
        >
          ＋ 行を追加
        </Button>

        {/* 共有ボタン */}
        <div className="flex flex-col md:flex-row gap-2">
          <Button
            onClick={handleCopyShare}
            className="flex-1 py-3 md:py-4 text-xs md:text-sm font-black bg-gradient-to-b from-blue-400 to-blue-600 text-white hover:from-blue-300 hover:to-blue-500 shadow-2xl transition-all duration-200 border-2 border-blue-700"
          >
            {copied ? <Check className="mr-1 w-3 h-3 md:w-4 md:h-4" /> : <Copy className="mr-1 w-3 h-3 md:w-4 md:h-4" />}
            <span className="hidden sm:inline">{copied ? 'コピー済み' : 'リンクをコピー'}</span>
            <span className="sm:hidden">{copied ? '済' : 'コピー'}</span>
          </Button>
          {isClient && typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
            <Button
              onClick={handleShareNative}
              className="flex-1 py-3 md:py-4 text-xs md:text-sm font-black bg-gradient-to-b from-green-400 to-green-600 text-white hover:from-green-300 hover:to-green-500 shadow-2xl transition-all duration-200 border-2 border-green-700"
            >
              <Share2 className="mr-1 w-3 h-3 md:w-4 md:h-4" />
              共有
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}