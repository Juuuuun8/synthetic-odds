'use client';

import Link from 'next/link';


const TermsPage = () => {
    return (
        <div className="py-4 md:py-6 px-4">
            <div className="max-w-4xl mx-auto">
                {/* ヘッダー */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl md:text-4xl font-serif font-extrabold mb-2 text-white tracking-tight">利用規約</h1>
                    <p className="text-slate-400">最終更新日：2026年</p>
                </div>

                {/* 本文 */}
                <article className="bg-slate-900/90 rounded-2xl p-8 md:p-10 border border-slate-700/30 shadow-lg text-slate-100 text-base space-y-6">
                    {/* 第1条：アプリケーションについて */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-100 mb-4">第1条 アプリケーションについて</h2>
                        <p className="text-slate-100 leading-relaxed">
                            本利用規約は、最速合成オッズ計算機（以下「本アプリ」）の利用に関する条件を定めるものです。本アプリは日本円の枚数から合計金額を計算するアプリケーションです。
                        </p>
                    </section>

                    {/* 第2条：運営者 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-3">第2条 運営者</h2>
                        <p className="text-slate-100 leading-relaxed">
                            本アプリは「かたすけ」により運営・管理されています。
                        </p>
                    </section>

                    {/* 第3条：免責事項 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-3">第3条 免責事項</h2>
                        <div className="bg-slate-800/60 border-l-4 border-slate-600/60 p-4 mb-4 rounded">
                            <p className="text-slate-100 leading-relaxed font-medium">
                                本アプリの計算結果の正確性については万全を期していますが、その内容を保証するものではありません。本アプリの利用により生じた損害について、運営者は一切の責任を負いません。
                            </p>
                        </div>
                        <p className="text-slate-100 leading-relaxed">
                            ユーザーは自身の責任において本アプリを利用するものとします。
                        </p>
                    </section>

                    {/* 第4条：禁止事項 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-3">第4条 禁止事項</h2>
                        <p className="text-slate-100 leading-relaxed mb-3">
                            ユーザーは、本アプリの利用に際し、以下の行為を行ってはいけません：
                        </p>
                        <ul className="list-disc list-inside space-y-3 text-slate-100 ml-6">
                            <li>本アプリのサーバーへの不正アクセスまたは攻撃</li>
                            <li>本アプリのリバースエンジニアリング、逆コンパイル、分解</li>
                            <li>本アプリの知的財産権の侵害</li>
                            <li>本アプリを利用した違法行為</li>
                            <li>その他本アプリの正常な運営を阻害する行為</li>
                        </ul>
                    </section>

                    {/* 第5条：準拠法 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-100 mb-4">第5条 準拠法</h2>
                        <p className="text-slate-100 leading-relaxed">
                            本利用規約の解釈および適用は、日本法に準拠します。本アプリの利用に関する紛争については、日本の裁判所が管轄権を有するものとします。
                        </p>
                    </section>

                    {/* 第6条：利用規約の変更 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-100 mb-4">第6条 利用規約の変更</h2>
                        <p className="text-slate-100 leading-relaxed">
                            運営者は、ユーザーに通知することなく、本利用規約を変更する権利を有します。変更後の規約は、アプリ内に掲載された時点で有効となります。
                        </p>
                    </section>
                </article>

                {/* フッター：トップページへ戻るボタン */}
                <div className="mt-6 flex justify-center">
                    <Link
                        href="/"
                        className="text-indigo-300 hover:text-white transition-colors font-medium"
                    >
                        ← トップページに戻る
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;