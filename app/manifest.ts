import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '最速合成オッズ計算機',
    short_name: 'オッズ計算機',
    description: '競馬や競輪などの複数のオッズから、合成オッズを計算するアプリケーションです。',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.png', // ※publicフォルダにアイコン画像を置くのを忘れずに！
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}