import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
    return (
        <div className="py-4 md:py-6 px-4">
                <div className="max-w-3xl mx-auto bg-slate-800/60 rounded-2xl p-6 md:p-10 border border-slate-700/20 shadow-lg text-slate-200">
                    {/* タイトル */}
                    <h1 className="text-2xl md:text-4xl font-serif font-extrabold mb-6 text-center text-white tracking-tight">
                        プライバシーポリシー
                    </h1>

                    {/* コンテンツ */}
                    <div className="space-y-6 leading-relaxed">
                        {/* 個人情報の取得 */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-3">
                                個人情報の取得
                            </h2>
                            <p className="text-base bg-slate-700/40 border-l-4 border-slate-600 p-4 rounded text-slate-200">
                                <span className="font-semibold text-slate-100">安心：</span>
                                本アプリは、ユーザーの入力データ（金額や枚数など）をブラウザ内でのみ処理します。入力データがサーバーに送信・保存されることは一切ありません。
                            </p>
                        </section>

                        {/* アクセス解析 */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-3">
                                アクセス解析
                            </h2>
                            <p className="text-slate-300 text-base">
                                サービスの改善のため、匿名のアクセス解析（Vercel
                                Analytics等）を利用する場合があります。
                            </p>
                        </section>

                        {/* お問い合わせ */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-3">
                                お問い合わせ
                            </h2>
                            <p className="text-slate-300 text-base">
                                ご質問やご懸念がある場合は、
                                <a
                                    href="https://katasuke-web.com/form/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-300 hover:text-white font-semibold underline"
                                >
                                    当ブログのお問い合わせフォーム
                                </a>
                                よりご連絡ください。
                            </p>
                        </section>
                    </div>

                    {/* トップページに戻るリンク */}
                    <div className="mt-8 pt-6 border-t border-slate-700/20">
                        <button className="inline-flex items-center gap-2">
                            {/* 保守的に Button コンポーネントを使わず、見た目だけ揃える */}
                        </button>
                        <div className="mt-2">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-indigo-300 hover:text-white font-semibold transition-colors"
                            >
                                <ArrowLeft size={20} />
                                トップページに戻る
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PrivacyPage;