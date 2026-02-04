import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-background">
      <div className="container flex flex-col items-center justify-center gap-6">
        
        {/* 1. 制作者情報 */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            {/* リンクを外して、名前だけ太字・濃い色にしました */}
            Created by <span className="font-bold text-foreground">かたすけ</span>
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://katasuke-web.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <a
              href="https://x.com/katasukeee08" // ※必要ならIDを入れてください
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              X (旧Twitter)
            </a>
          </div>
        </div>

        {/* 2. 法的リンク・お問い合わせ */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/terms" className="hover:text-foreground transition-colors">
            利用規約
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            お問い合わせ
          </Link>
        </div>

        {/* 3. コピーライト */}
        <div className="w-full max-w-md border-t pt-8 mt-2">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} App Name. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}