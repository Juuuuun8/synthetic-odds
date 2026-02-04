'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';


const TermsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* ヘッダー */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">利用規約</h1>
                    <p className="text-gray-600">最終更新日：2024年</p>
                </div>

                {/* 本文 */}
                <article className="bg-white rounded-lg shadow-sm p-8 space-y-8">
                    {/* 第1条：アプリケーションについて */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">第1条 アプリケーションについて</h2>
                        <p className="text-gray-700 leading-relaxed">
                            本利用規約は、Money Counter（以下「本アプリ」）の利用に関する条件を定めるものです。本アプリは日本円の枚数から合計金額を計算するアプリケーションです。
                        </p>
                    </section>

                    {/* 第2条：運営者 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">第2条 運営者</h2>
                        <p className="text-gray-700 leading-relaxed">
                            本アプリは「かたすけ」により運営・管理されています。
                        </p>
                    </section>

                    {/* 第3条：免責事項 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">第3条 免責事項</h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                            <p className="text-gray-800 leading-relaxed font-medium">
                                本アプリの計算結果の正確性については万全を期していますが、その内容を保証するものではありません。本アプリの利用により生じた損害について、運営者は一切の責任を負いません。
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            ユーザーは自身の責任において本アプリを利用するものとします。
                        </p>
                    </section>

                    {/* 第4条：禁止事項 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">第4条 禁止事項</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            ユーザーは、本アプリの利用に際し、以下の行為を行ってはいけません：
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                            <li>本アプリのサーバーへの不正アクセスまたは攻撃</li>
                            <li>本アプリのリバースエンジニアリング、逆コンパイル、分解</li>
                            <li>本アプリの知的財産権の侵害</li>
                            <li>本アプリを利用した違法行為</li>
                            <li>その他本アプリの正常な運営を阻害する行為</li>
                        </ul>
                    </section>

                    {/* 第5条：準拠法 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">第5条 準拠法</h2>
                        <p className="text-gray-700 leading-relaxed">
                            本利用規約の解釈および適用は、日本法に準拠します。本アプリの利用に関する紛争については、日本の裁判所が管轄権を有するものとします。
                        </p>
                    </section>

                    {/* 第6条：利用規約の変更 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">第6条 利用規約の変更</h2>
                        <p className="text-gray-700 leading-relaxed">
                            運営者は、ユーザーに通知することなく、本利用規約を変更する権利を有します。変更後の規約は、アプリ内に掲載された時点で有効となります。
                        </p>
                    </section>
                </article>

                {/* フッター：トップページへ戻るボタン */}
                <div className="mt-8 flex justify-center">
                    <Link href="/">
                        <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
                            ← トップページに戻る
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;