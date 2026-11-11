/* チュートリアルカードをおすと、かんたんなせつめいをがめんにかさねてだす。
   game.js にはてをいれない。index.html で game.js のあとによみこむだけ。 */
(()=>{
const T={
"01":["いどう","ひだりした の キー を ゆび で たおすと、たおした ほう へ はしります。ゆび を はなすと とまります。"],
"02":["してん","がめん を スワイプ すると、みる むき が まわります。ボタン や キー の うえ では スワイプ できません。いどうキー の うえ の もじ が、いま の むき です。"],
"03":["ジャンプ","JUMPボタン で ジャンプ します。ボタン を おしつづけると、ためてから たかく とびます。たかく とぶ ほど、スパイク が はやく なります。"],
"04":["DASH","DASHボタン を おすと、はやく はしれます。DASH を すばやく 2かい おすと、まえ に とびこみます（DIVE）。"],
"05":["HOLD / PUT","HOLDボタン で、そば に いる みかた を もちあげます。もった あと は ボタン が PUT に かわり、おすと みかた を おろします。"],
"06":["サーブ","HITボタン で サーブ を うちます。キー を うえ に たおすと スパイクサーブ（はやい）、した に たおすと フローター（ふわっと した サーブ）です。"],
"07":["サーブ の いろ","ボール の お の いろ は、サーブ の はやさ です。くらい みどり と くらい あお は おそい サーブ なので、ほか の いろ で あいて の コート に いれましょう。たかく から うつ ほど、ピンク に ちかい はやい いろ に なります。"],
"08":["HIGH","セッター は、ライトより の ネットぞい から トス を あげます。HIGH は、レフト で まつ うつ ひと へ、たかく あげる トス です。"],
"09":["BACK","BACK は、ネット に そって、レフト の はんたい（ライトがわ）へ あげる トス です。"],
"10":["QUICK","QUICK は、ネット から はなれた ちかく へ、ひくく はやく あげる トス です。すぐ うてます。"],
"11":["DUMP","DUMP は、トス を あげずに、セッター が じぶん で ボール を ネット の むこう へ おしこみます。"],
"12":["STRAIGHT","レフト から うちます。STRAIGHT は、ひだり の ライン（コート の よこ の せん）に そって まっすぐ うつ コース です。"],
"13":["CROSS","レフト から うちます。CROSS は、コート を ななめ に よこぎって、おく の ライトがわ へ うつ コース です。"],
"14":["CROSS","レフト から うちます。CROSS は、ななめ に うつ コース です。あさく うつ ことも できます。"],
"17":["TIP","レフト から うちます。HIT を おす だけだと、やわらかい TIP に なります。ネット の すぐ むこう へ おとせます。"],
"18":["レシーブ（ふつう）","ボール の した に はいって HIT を おすと、スロー に なります。\nキー で LEFT か RIGHT を えらぶと、セッター の いる ネット の そば へ、ねらって たかく あがります。\nキー を した に たおすと BAD…（うまく あがらない）に なります。"],
"19":["DIVE と たいあたり","DIVE：DASH を すばやく 2かい おすと、とびこんで ボール を うけます。とおい ボール にも とどきます。\nたいあたり（BODY!!）：ボタン を おさなくても、ボール が からだ に あたると、じどう で あがります。\nどちらも、ねらえません。ボール は、あたった ばしょ から、まっすぐ うえ に あがります。ふつう の レシーブ の ように、セッター の そば へは とびません。"],
"20":["スパイクレシーブ（ふつう）","あいて の スパイク も、ボール の した に はいって HIT を おします。はやい ボール ほど、はやめ に した へ はいりましょう。\nキー で LEFT か RIGHT を えらぶと、セッター の そば へ、ねらって たかく あがります。\nキー を した に たおすと BAD…（うまく あがらない）に なります。"],
"21":["DIVE と たいあたり（スパイク）","はやい スパイク に とどかない ときは、DASH を すばやく 2かい おして、とびこんで うけます（DIVE）。\nボタン を おさなくても、ボール が からだ に あたれば、じどう で あがります（たいあたり）。\nどちらも、ねらえません。あたった ばしょ から、まっすぐ うえ に あがります。"],
"22":["ブロック の はんてい","(1) コース：ブロック の えらんだ コース が、うつ ひと の コース と おなじ なら、(2) へ。ちがう とき：\n・うつ ひと が NATURAL：ブロック を すりぬけます。\n・ブロック が NATURAL を えらんだ：1だんかい おそく なって、とおります。\n・STRAIGHT と CROSS の ちがい：TOUCH。2だんかい おそく なって、ブロックがわ の コート の おく へ とびます。\n\n(2) たかさ（だてん）：\n・ブロック の て の ほう が たかい：SHUT OUT!!　うつ ひと の コート へ、おなじ はやさ で うちかえします。\n・おなじ たかさ：はんぶん はんぶん（SHUT OUT か ONE TOUCH）。\n・うつ ひと の ほう が たかい：ONE TOUCH　ふわっと あがります。ブロック の タッチ は、かいすう に はいりません。\n\n* こん（いちばん おそい）スパイク は、コース が ちがっても、ブロック できます。\n* ブロック は、しろい えん の なか で くうちゅう に いる とき だけ。じぶん で ジャンプ します。\n* だてん が ブロック の とどく はんい（あし の さき から ひと ひとりぶん した〜のばした て の さき から ひと ひとりぶん うえ）から はずれると、ブロック に なりません。\n* した（NO BLOCK）は、TIP だけ を とめます。"],
"23":["SPIKE TOSS（だす）","レフト で うつ とき、キー を ぐるっと まわすと SPIKE TOSS です。ボール が ネット に そって ライト へ とびます。"],
"24":["SPIKE TOSS（うつ）","ライト から SPIKE TOSS で とんで きた ボール を、レフト で ジャンプ して うちこみます。"],
"25":["TOWER TOSS（とぶ）","みかた に もちあげて なげて もらい、そら を とんでいる あいだ に スパイク を うちます。とんでいる あいだ に うつと、いつも より 1つ はやい いろ に なります。"],
"26":["TOWER TOSS（うたせる）","HOLD で みかた を もちあげて、なげて、スパイク を うたせます。ふたり で 1つ の プレー です。"],
"27":["NATURAL","レフト から うちます。NATURAL は、コート の まんなか へ むけて うつ コース です。"],
"28":["FULL SCREEN","FULL SCREENボタン を おすと、がめん いっぱい に なります。もういちど おすと、もと に もどります。"],
"29":["トス への ブロック（DUMP を とめる）","あいて の セッター が ボール を もっている あいだ（スロー）に、セッター の まえ の しろい えん の なか で ジャンプ すると「BLOCK!!」に なります。\nセッター が ボール を はなすと、キー が でます。うえ＝BLOCK、さゆう＝BOOM BLOCK、した＝CANCEL です。\nDUMP（セッター が じぶん で おしこむ）の ときは、キー を うえ（BLOCK）に たおすと、SHUT OUT!! で とめられます。\n* ボール が、とどく たかさ（あし の さき から ひと ひとりぶん した〜のばした て の さき から ひと ひとりぶん うえ）に ないと、とめられません。\n* トス が あがった ときは、うえ（BLOCK）では とまりません。そのまま おります。"],
"30":["BOOM BLOCK（トス の ほう へ）","セッター が トス を あげたら、キー を、トス が とんだ ほう（ひだり か みぎ）に たおして、はなします。\n「BOOM BLOCK!!」に なり、くうちゅう に いる まま、ネット に そって よこ へ すべります。うつ ひと の まえ の えん まで すべると、そのまま、ふつう の ブロック に つながります。\nトス と ぎゃく の ほう へ たおすと「BAD…」です。\n* すべる のは すこし の あいだ だけ です。コート の はし に あたるか、じかん が すぎると、おります。"],
"31":["CANCEL（した）","ブロック を やめたい ときは、キー を した（CANCEL）に たおして、はなします。すぐ に した に おりて、つぎ の うごき（レシーブ など）に うつれます。\nなにも えらばない ときも、じかん が すぎると、おります。"]
};
const css=document.createElement("style");
css.textContent=`#tutCard{pointer-events:auto!important;cursor:pointer}
#tutCards img{cursor:pointer}
#tutInfo{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;padding:12px;background:rgba(3,14,30,.62);-webkit-tap-highlight-color:transparent}
#tutInfo[hidden]{display:none}
#tutInfo .ti{width:min(92vw,560px);max-height:92vh;display:flex;flex-direction:column;gap:6px;border-radius:16px;background:rgba(12,26,58,.96);border:1px solid rgba(255,216,176,.42);box-shadow:0 12px 40px rgba(0,0,0,.5);padding:12px;color:#f3f7ff;font-family:var(--f-body,sans-serif)}
#tutInfo img{display:block;width:100%;aspect-ratio:8/5;border-radius:10px;background:#03293b;flex:none}
#tutInfo .tx{overflow:auto;flex:1 1 auto;min-height:0;-webkit-overflow-scrolling:touch}
#tutInfo b{display:block;margin:6px 2px 4px;font-size:17px;color:#ffb469}
#tutInfo p{margin:0 2px 8px;font-size:15px;line-height:1.6;white-space:pre-line}
#tutInfo button{display:block;margin:0 auto;flex:none;min-width:140px;padding:10px 18px;border-radius:12px;border:0;background:#ffb469;color:#2a1600;font:900 15px var(--f-body,sans-serif);cursor:pointer}
@media(orientation:landscape) and (max-height:480px){#tutInfo .ti{display:grid;grid-template-columns:48% 1fr;grid-template-rows:minmax(0,1fr) auto;gap:6px 12px;width:min(94vw,760px)}#tutInfo img{grid-row:1/3;align-self:start}#tutInfo .tx{grid-column:2;grid-row:1}#tutInfo button{grid-column:2;grid-row:2}}`;
document.head.appendChild(css);
const box=document.createElement("div");box.id="tutInfo";box.hidden=true;
box.innerHTML='<div class="ti" role="dialog" aria-modal="true"><img alt=""><div class="tx"><b></b><p></p></div><button type="button">とじる</button></div>';
document.body.appendChild(box);
const im=box.querySelector("img"),tt=box.querySelector("b"),pp=box.querySelector("p");
const close=()=>{box.hidden=true};
const open=src=>{const m=/tut-(\d+)\.webp/.exec(src||"");if(!m)return;const d=T[m[1]];if(!d)return;
  im.src=src;tt.textContent=d[0];pp.textContent=d[1];box.hidden=false;box.querySelector("button").focus({preventScroll:true})};
box.addEventListener("click",e=>{if(e.target===box||e.target.tagName==="BUTTON")close()});
addEventListener("keydown",e=>{if(e.key==="Escape"&&!box.hidden)close()});
document.addEventListener("click",e=>{const t=e.target;
  if(t&&t.matches&&(t.matches("#tutCard")||t.matches("#tutCards img"))){e.stopPropagation();open(t.getAttribute("src"))}},true);
// ゲームのそうさ（スワイプなど）がせつめいのうえでもはんのうしないようにする
for(const n of["pointerdown","touchstart","touchmove","mousedown"])box.addEventListener(n,e=>e.stopPropagation(),{passive:true});
})();
//n
