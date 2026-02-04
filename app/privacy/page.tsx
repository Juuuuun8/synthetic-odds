import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
                {/* タイトル */}
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    プライバシーポリシー
                </h1>

                {/* コンテンツ */}
                <div className="space-y-8 text-gray-700 leading-relaxed">
                    {/* 個人情報の取得 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            個人情報の取得
                        </h2>
                        <p className="text-lg bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                            <span className="font-semibold text-blue-700">安心：</span>
                            本アプリは、ユーザーの入力データ（金額や枚数など）をブラウザ内でのみ処理します。入力データがサーバーに送信・保存されることは一切ありません。
                        </p>
                    </section>

                    {/* アクセス解析 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            アクセス解析
                        </h2>
                        <p className="text-base">
                            サービスの改善のため、匿名のアクセス解析（Vercel
                            Analytics等）を利用する場合があります。
                        </p>
                    </section>

                    {/* お問い合わせ */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            お問い合わせ
                        </h2>
                        <p className="text-base">
                            ご質問やご懸念がある場合は、
                            <a
                                href="https://katasuke-web.com/form/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 font-semibold underline"
                            >
                                当ブログのお問い合わせフォーム
                            </a>
                            よりご連絡ください。
                        </p>
                    </section>
                </div>

                {/* トップページに戻るリンク */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                        <ArrowLeft size={20} />
                        トップページに戻る
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;