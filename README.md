# PALE WAVES SET THE SKY

ブラウザで遊べるバレーボールゲームです。

## GitHub Pages での公開

1. このフォルダの中身（index.html / game.js / tut-01.webp〜tut-27.webp / README.md）を、すべてリポジトリのいちばん上に置きます。フォルダは使っていないので、スマホからでも「ファイルを全部選んでアップロード」で置けます。
2. リポジトリの Settings → Pages を開きます。
3. Source を「Deploy from a branch」、Branch を main と / (root) にして Save します。
4. 数分たつと https://<ユーザー名>.github.io/<リポジトリ名>/ で遊べます。

- index.html と game.js と tut-NN.webp は必ず同じ場所に置いてください。tut-NN.webp はチュートリアルのカード画像で、無いとカードだけ表示されません（ゲーム自体は動きます）。
- オンライン対戦は専用のルームサーバー（Cloudflare Workers）につながるので、別途サーバーを用意する必要はありません。
