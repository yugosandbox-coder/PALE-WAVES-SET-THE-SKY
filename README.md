# PALE WAVES SET THE SKY

ブラウザで遊べるバレーボールゲームです。

## GitHub Pages での公開

1. このフォルダの中身（index.html / game.js / bgm-home3.mp3 / bgm-match-enter.mp3 / bgm-match-put.mp3 / bgm-match-triiiple.mp3 / tut-NN.webp / tut-info.js / manifest.json / sw.js / icon-*.png / README.md）を、すべてリポジトリのいちばん上に置きます。フォルダは使っていないので、スマホからでも「ファイルを全部選んでアップロード」で置けます。
2. リポジトリの Settings → Pages を開きます。
3. Source を「Deploy from a branch」、Branch を main と / (root) にして Save します。
4. 数分たつと https://<ユーザー名>.github.io/<リポジトリ名>/ で遊べます。

- bgm-home3.mp3（試合以外の曲）と bgm-match-enter.mp3・bgm-match-put.mp3・bgm-match-triiiple.mp3（試合中の3曲。ランダムな順番で流れます）も index.html と同じ場所に置いてください。古い bgm-match.mp3 は使わなくなったので、リポジトリに残っていれば消して構いません。無くてもゲームは動きますが、音楽だけ鳴りません。
- index.html と game.js と tut-NN.webp と tut-info.js は必ず同じ場所に置いてください。tut-NN.webp はチュートリアルのカード画像で、無いとカードだけ表示されません（ゲーム自体は動きます）。tut-info.js はカードをタップしたときの説明で、無いと説明だけ出ません。
- manifest.json・sw.js・icon-*.png は「ホーム画面に追加」で全画面アプリとして起動するためのものです（iPhoneはこの方法で全画面、Android・PCは「全画面」ボタンでも可）。
- オンライン対戦は専用のルームサーバー（Cloudflare Workers）につながるので、別途サーバーを用意する必要はありません。
