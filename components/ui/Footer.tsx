import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 bg-transparent border-t border-slate-800/30">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center justify-center gap-3">
        
        {/* 1. 制作者情報 */}
        <div className="text-center space-y-2">
          <p className="text-sm text-slate-400">
            {/* リンクを外して、名前だけ太字・濃い色にしました */}
            Created by <span className="font-bold text-white">かたすけ</span>
          </p>
          <div className="flex justify-center gap-4 text-sm text-slate-400">
            <a
              href="https://katasuke-web.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="https://x.com/katasukeee08"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              X (旧Twitter)
            </a>
          </div>
        </div>

        {/* 2. 法的リンク・お問い合わせ */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <Link href="/terms" className="hover:text-white transition-colors">
            利用規約
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            プライバシーポリシー
          </Link>
          <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
            お問い合わせ
          </a>
        </div>

        {/* 3. コピーライト */}
        <div className="w-full max-w-md border-t border-slate-700 pt-3 mt-1">
          <p className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} 最速合成オッズ計算機 All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}