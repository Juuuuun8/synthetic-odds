かたすけさん、お待たせしました。
これまでの議論をすべて集約した、**「かたすけ専用 Next.js 爆速開発テンプレート 取扱説明書（完全版）」**を作成しました。

次回からは、このマニュアルを上から順になぞるだけで、**思考停止で環境構築を完了**し、一番楽しい「開発」に全リソースを注げます。

この内容を `README.md` としてテンプレートリポジトリのルートに置いておくのもおすすめです。

---

# 🚀 かたすけ専用 Next.js 爆速開発テンプレート 取扱説明書

## 📦 含まれている技術スタック

* **Framework:** Next.js (App Router) + TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** Shadcn UI (Button, Input, Card, Sheet, Dialog, Sonner etc.)
* **SEO:** Sitemap, Robots, Manifest 自動生成対応
* **Pages:** 利用規約, プライバシーポリシー, 共通フッター

---

## Step 1: プロジェクトの立ち上げ (所要時間: 1分)

### 1. GitHubからリポジトリを作成

1. GitHubの `next-starter` リポジトリを開く。
2. 緑色の **[Use this template]** ボタン → **[Create a new repository]** をクリック。
3. **Repository name** に新アプリ名を入力（例: `tax-simulator`）。
4. **Create repository** をクリック。

### 2. ローカル環境の準備

ターミナルを開き、以下のコマンドを順に実行する。

```bash
# 1. クローン（ダウンロード）
git clone https://github.com/katasuke/tax-simulator.git

# 2. フォルダ移動
cd tax-simulator

# 3. 依存関係のインストール（⚠️ 絶対に忘れないこと！）
npm install

```

---

## Step 2: 必須項目の書き換え (所要時間: 3分)

VS Codeの「全ファイル検索 (Ctrl+Shift+F)」を使い、以下のキーワードで検索・置換すると漏れがない。

### 🔍 検索キーワード: `App Name` または `アプリ名`

以下のファイルの「仮のアプリ名」を正式名称（例: `税金シミュレーター`）に書き換える。

1. **`app/layout.tsx`** (metadata)
* `title.template`: `"%s | 税金シミュレーター"`
* `title.default`: `"税金シミュレーター"`


2. **`app/manifest.ts`**
* `name`: `"税金シミュレーター"`
* `short_name`: `"税金計算"` (スマホホーム画面用)


3. **`components/Footer.tsx`**
* コピーライト部分: `© 2026 税金シミュレーター All rights reserved.`


4. **`app/terms/page.tsx` (利用規約)**
* 本文中の「当アプリ」を「税金シミュレーター」に置換。
* **制定日**を公開予定日または本日に更新。


5. **`app/privacy/page.tsx` (プライバシーポリシー)**
* 同様にアプリ名と制定日を更新。



### 🔍 検索キーワード: `example.com`

以下のファイルのURLを本番予定のURL（例: `https://tax.katasuke-web.com`）に書き換える。

1. **`app/sitemap.ts`**
* `baseUrl` 変数の中身。


2. **`app/robots.ts`**
* `sitemap` のURL。



### 🛠️ その他の設定ファイル

1. **`package.json`**
* `"name": "next-starter"` → `"tax-simulator"`
* `"description"` も適宜書き換える。


2. **`app/layout.tsx`**
* `description`: アプリの説明文を記述（Google検索のスニペット用）。



---

## Step 3: アセットの差し替え (所要時間: 1分)

1. **アプリアイコン (`public/icon.png`)**
* 新しいアプリ用のアイコン画像を用意し、`public` フォルダ内の `icon.png` を上書きする。
* ※PWA設定 (`manifest.ts`) がこのファイルを参照しているため、ファイル名は変えないのが無難。



---

## Step 4: 開発スタート！ (ここからが本番)

```bash
npm run dev

```

### 👨‍💻 最初の開発フロー

1. **`app/page.tsx` を開く**
* 仮のコンテンツ（"New App Template"等）を削除。


2. **UIから作る (Shadcn)**
* 必要な部品をインポートして並べる。
* 例: `import { Button } from "@/components/ui/button";`


3. **ロジックを組む**
* `useState` で入力値を受け取る。
* 計算ロジックやAPI通信を書く。



---

## 💡 困ったときの Tips

* **新しいShadcn部品が欲しいとき:**
* 公式サイトを見て、`npx shadcn@latest add [部品名]` を実行。
* （例: `npx shadcn@latest add select`）


* **Google Search Consoleに登録するとき:**
* `app/layout.tsx` の `metadata.verification.google` に確認コードをコピペする。


* **フッターのリンクを増やしたいとき:**
* `components/Footer.tsx` を直接編集する。



---

以上です。
この手順書があれば、**「環境構築の苦しみ」は過去のもの**です。
さあ、新しいアプリ開発を楽しみましょう！
