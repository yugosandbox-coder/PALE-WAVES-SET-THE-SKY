/* チュートリアルカードをおすと、かんたんな説明を画面に重ねて出す。
   game.js には手を入れない。index.html で game.js のあとに読みこむだけ。 */
(()=>{
const T={
"01":["移動","左下のキーをゆびでたおすと、たおしたほうへ走ります。ゆびをはなすと止まります。"],
"02":["視点","画面をスワイプすると、見るむきが回ります。ボタンやキーの上ではスワイプできません。移動キーの上の文字が、いまのむきです。"],
"03":["ジャンプ","JUMPボタンでジャンプします。ボタンをおしつづけると、ためてから高くとびます。高くとぶほど、スパイクがはやくなります。"],
"04":["DASH","DASHボタンをおすと、はやく走れます。DASHをすばやく2回おすと、前にとびこみます（DIVE）。"],
"05":["HOLD / PUT","HOLDボタンで、そばにいる味方を持ち上げます。持ったあとはボタンがPUTにかわり、おすと味方をおろします。"],
"06":["サーブ","HITボタンでサーブを打ちます。キーを上にたおすとスパイクサーブ（はやい）、下にたおすとフローター（ふわっとしたサーブ）です。"],
"07":["サーブの色","ボールの色は、サーブのはやさです。紺と水色はおそいサーブなので、ほかの色で相手のコートに入れましょう。高くからうつほど、はやい色になります。"],
"08":["HIGH","セッターは、ライトよりの ネットぞいから トスを あげます。HIGHは、レフトで まつ うつ人へ、たかく あげるトスです。"],
"09":["BACK","BACKは、ネットにそって、レフトの はんたい（ライトがわ）へ あげるトスです。"],
"10":["QUICK","QUICKは、ネットから はなれた ちかくへ、ひくく はやく あげるトスです。すぐ うてます。"],
"11":["DUMP","DUMPは、トスを あげずに、セッターが じぶんで ボールを ネットの むこうへ おしこみます。"],
"12":["STRAIGHT","レフトから うちます。STRAIGHTは、ひだりの ライン（コートのよこの線）に そって まっすぐ うつコースです。"],
"13":["CROSS","レフトから うちます。CROSSは、コートを ななめに よこぎって、おくの ライトがわへ うつコースです。"],
"14":["CROSS","レフトから うちます。CROSSは、ななめに うつコースです。あさく うつことも できます。"],
"17":["TIP","レフトから うちます。HITを おすだけだと、やわらかい TIPに なります。ネットの すぐ むこうへ おとせます。"],
"18":["レシーブ（ふつう）","ボールの下に入ってHITをおすと、スローになります。\nキーで LEFT か RIGHT をえらぶと、セッターのいるネットのそばへ、ねらって高くあがります。\nキーを下にたおすと BAD…（うまくあがらない）になります。"],
"19":["DIVE と 体当たり","DIVE：DASHをすばやく2回おすと、とびこんでボールをうけます。とおいボールにもとどきます。\n体当たり（BODY!!）：ボタンをおさなくても、ボールが体にあたると、自動であがります。\nどちらも、ねらえません。ボールは、あたった場所から、まっすぐ上にあがります。ふつうのレシーブのように、セッターのそばへは飛びません。"],
"20":["スパイクレシーブ（ふつう）","相手のスパイクも、ボールの下に入ってHITをおします。はやいボールほど、早めに下へ入りましょう。\nキーで LEFT か RIGHT をえらぶと、セッターのそばへ、ねらって高くあがります。\nキーを下にたおすと BAD…（うまくあがらない）になります。"],
"21":["DIVE と 体当たり（スパイク）","はやいスパイクにとどかないときは、DASHをすばやく2回おして、とびこんでうけます（DIVE）。\nボタンをおさなくても、ボールが体にあたれば、自動であがります（体当たり）。\nどちらも、ねらえません。あたった場所から、まっすぐ上にあがります。"],
"22":["ブロックの判定","① コース：ブロックのえらんだコースが、打つ人のコースと同じなら、② へ。ちがうとき：\n・打つ人が NATURAL：ブロックをすりぬけます。\n・ブロックが NATURAL をえらんだ：1だんかいおそくなって、とおります。\n・STRAIGHT と CROSS のちがい：TOUCH。2だんかいおそくなって、ブロックがわのコートのおくへ飛びます。\n\n② 高さ（打点）：\n・ブロックの手のほうが高い：SHUT OUT!!　打つ人のコートへ、同じはやさで打ち返します。\n・同じ高さ：はんぶんはんぶん（SHUT OUT か ONE TOUCH）。\n・打つ人のほうが高い：ONE TOUCH　ふわっとあがります。ブロックのタッチは、回数に入りません。\n\n※ 紺（いちばんおそい）スパイクは、コースがちがっても、ブロックできます。\n※ 地上のブロックは、小ジャンプのスパイクまで。大ジャンプは、白い円の中で空中にいると、とめられます。"],
"23":["SPIKE TOSS（出す）","レフトで うつとき、キーを ぐるっと まわすと SPIKE TOSSです。ボールが ネットにそって ライトへ とびます。"],
"24":["SPIKE TOSS（打つ）","ライトから SPIKE TOSSで とんできた ボールを、レフトで ジャンプして うちこみます。"],
"25":["TOWER TOSS（飛ぶ）","味方に持ち上げて投げてもらい、空を飛んでいるあいだにスパイクを打ちます。飛んでいるあいだに打つと、いつもより1つはやい色になります。"],
"26":["TOWER TOSS（打たせる）","HOLDで味方を持ち上げて、なげて、スパイクを打たせます。ふたりで1つのプレーです。"],
"27":["NATURAL","レフトから うちます。NATURALは、コートの まんなかへ むけて うつコースです。"],
"28":["FULL SCREEN","FULL SCREENボタンをおすと、画面いっぱいになります。もう一度おすと、もとにもどります。"]
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
// ゲームの操作（スワイプなど）が説明の上でも反応しないようにする
for(const n of["pointerdown","touchstart","touchmove","mousedown"])box.addEventListener(n,e=>e.stopPropagation(),{passive:true});
})();
