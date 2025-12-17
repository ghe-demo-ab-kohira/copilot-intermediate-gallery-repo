'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (resolvedTheme === '明るい') {
      setTheme('暗い');
    } else {
      setTheme('明るい');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      aria-label="テーマを切り替え"
      title={`${resolvedTheme === '明るい' ? '暗い' : '明るい'}モードに切り替え`}
    >
      {resolvedTheme === '明るい' ? (
        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
      ) : (
        <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  );
}
