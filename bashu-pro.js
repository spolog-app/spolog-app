(function(){
var SHOES=[
{id:"gelhoop",brand:"ASICS",name:"GELHOOP V17",price:"11,000〜16,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[2,3],width:["normal","wide"],priority:["light","fit"],player:"",tags:["部活定番","軽量","3ウィズ展開"],desc:"中高生の部活で圧倒的シェアを誇る定番。V17で軽量性とクッション性が更に向上。NARROW/STANDARD/EXTRA WIDEの3ウィズ展開で日本人の足型に最適化。",sizing:"+0cm〜+0.5cm（実寸通り〜やや大きめ）",sizeCm:[22,29],image:"PRODUCT_IMAGE_gelhoop"},
{id:"gelburst",brand:"ASICS",name:"GELBURST 28",price:"13,000〜18,000円",level:["beginner","intermediate"],style:["all","power"],budget:[2,3],width:["normal","wide"],priority:["cushion","fit"],player:"",tags:["安定感","クッション◎","オールラウンド"],desc:"GELHOOPに並ぶASICSの主力モデル。GELクッションでハードな練習にも対応。スピードと安定性を両立した即戦力モデル。",sizing:"+0cm〜+0.5cm",sizeCm:[23,29],image:"PRODUCT_IMAGE_gelburst"},
{id:"nova",brand:"ASICS",name:"NOVA SURGE 3",price:"13,000〜19,500円",level:["intermediate","advanced"],style:["power","all"],budget:[3],width:["normal","wide"],priority:["cushion","durable"],player:"watanabe",tags:["渡邊雄太愛用","クッション最強","リバウンド向け"],desc:"【渡邊雄太着用モデル】FF BLAST PLUS搭載の高反発クッション。千葉ジェッツの渡邊雄太など日本人トップ選手も愛用。リバウンドなど高さが求められるプレーヤー向け、厚めのソールで高いジャンプを実現。",sizing:"+0cm〜+0.5cm",sizeCm:[24,30],image:"PRODUCT_IMAGE_nova"},
{id:"curry-pro",brand:"UNDER ARMOUR",name:"Curry 13",price:"19,000〜23,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["narrow","normal"],priority:["light","grip","player"],player:"curry",tags:["カリー愛用","UA最終モデル","HOVR+"],desc:"【UA最終Curryモデル】HOVR+クッションとUA Flowアウトソールの集大成。2025年11月にカリーがUAから独立し、本作が両者最後の作品。",sizing:"+0.5cm〜+1.0cm",sizeCm:[24,30],image:"PRODUCT_IMAGE_curry-pro"},
{id:"lebron-pro",brand:"NIKE",name:"LeBron 23",price:"28,000〜32,000円",level:["advanced"],style:["power","all"],budget:[3],width:["normal"],priority:["cushion","player","design"],player:"lebron",tags:["レブロン愛用","23年目記念","フラッグシップ"],desc:"NBA入り23年目を記念した第23作。レブロンの最終メインシグネチャーになる可能性大。Crown Containment Systemで王の地位を象徴するデザイン。",sizing:"+0.5cm〜+1.0cm",sizeCm:[25,32],image:"PRODUCT_IMAGE_lebron-pro"},
{id:"kd",brand:"NIKE",name:"KD18",price:"20,000〜24,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["narrow","normal"],priority:["light","fit","player"],player:"kd",tags:["KD愛用","フィット感最強","万能"],desc:"ケビン・デュラント最新シグネチャー。ミッドフットケージで足のロックダウン性◎。Cushlon 3.0＋Air Zoomで爆発的な動きをサポート。",sizing:"+0.5cm〜+1.0cm",sizeCm:[25,31],amzHtml:'<a href="//af.moshimo.com/af/c/click?a_id=2438530&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB0GPD3R7KZ" rel="nofollow"><img src="https://images-fe.ssl-images-amazon.com/images/I/41PmxG9xA6L._SL500_.jpg" alt=""><br>[ナイキ] KD18 GI EP スタジアムグリーン/ブラック IU3109-300 26.0cm</a>'},
{id:"luka",brand:"Jordan",name:"Luka 4",price:"17,000〜20,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["normal"],priority:["player","design","grip"],player:"luka",tags:["ドンチッチ愛用","レイカーズ","IsoPlate"],desc:"ルカ・ドンチッチ第4作。アップグレードIsoPlateシステムで横方向の安定性を強化。Cushlon 3.0＋Air Zoomで万能対応。",sizing:"+0.5cm",sizeCm:[24,31],image:"PRODUCT_IMAGE_luka"},
{id:"sabrina",brand:"NIKE",name:"Sabrina 3",price:"18,000〜21,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["narrow","normal"],priority:["light","player","design"],player:"sabrina",tags:["サブリナ愛用","NBA使用率No.1級","男女兼用"],desc:"WNBAスター、サブリナ・イオネスクの第3作。前作Sabrina 2はKobe 6 Protroに次ぐNBA使用率第2位。ミッドフットケーブルシステムで足のロックダウン性◎。",sizing:"+0.5cm",sizeCm:[22,28],image:"PRODUCT_IMAGE_sabrina"},
{id:"harden",brand:"adidas",name:"Harden Vol.10",price:"22,000〜25,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["normal"],priority:["player","grip","fit"],player:"harden",tags:["ハーデン愛用","10作目記念","ステップバック向け"],desc:"ジェームズ・ハーデン第10作（10年目記念）。フォアフット・ヒール専用ラジアルパッド搭載。スピードと安定性のバランスに優れる。",sizing:"+0.5cm",sizeCm:[25,31],image:"PRODUCT_IMAGE_harden"},
{id:"crazyfly",brand:"adidas",name:"Dame X",price:"12,000〜14,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[2,3],width:["normal"],priority:["player","light","design"],player:"dame",tags:["リラード愛用","$90破格","コスパ最強"],desc:"【$90の破格】デイミアン・リラード第10作。adidas Basketballシグネチャー史上最も手頃。Lightstrikeミッドソール、ストレッチウーブンアッパー採用。",sizing:"+0.5cm",sizeCm:[24,30],image:"PRODUCT_IMAGE_crazyfly"},
{id:"wade",brand:"Li-Ning",name:"Way of Wade 12",price:"25,000〜30,000円",level:["intermediate","advanced"],style:["all","power"],budget:[3],width:["normal"],priority:["player","design","durable"],player:"wade",tags:["ウェイド愛用","Li-Ning Boom","通好み"],desc:"D・ウェイド第12作（リーニン社）。Boom／カーボンファイバープレート／GCU搭載。中国ブランド製でNBA選手も愛用する性能派。",sizing:"+0cm〜+0.5cm",sizeCm:[25,31],image:"PRODUCT_IMAGE_wade"},
{id:"cons-togashi",brand:"CONVERSE",name:"CONS UNAVERAGE MID",price:"17,000〜22,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["normal"],priority:["light","fit","player"],player:"togashi",tags:["富樫勇樹シグネチャー","日本人初の真シグネチャー","俊敏ドライブ"],desc:"【日本人プレーヤー初の真のシグネチャーモデル】千葉ジェッツ・富樫勇樹のCONVERSE専用設計バッシュ。軽さ・反発・安定感のバランスに優れ、俊敏なドライブをサポート。",sizing:"+0.5cm",sizeCm:[24,30],image:"PRODUCT_IMAGE_cons-togashi"},
{id:"unpre-ars",brand:"ASICS",name:"UNPRE ARS LOW 2",price:"17,000〜20,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[2,3],width:["normal"],priority:["light","fit"],player:"kawamura",tags:["河村勇輝・渡邊雄太愛用","LOWカット","横安定性"],desc:"河村勇輝・渡邊雄太など複数の日本人トップ選手が着用するLOWカットモデル。サイドウォール構造で横ブレを抑え、素早い切り返しをサポート。スペシャルエディション「ベニカケソラ」も人気。",sizing:"+0cm〜+0.5cm",sizeCm:[24,30],image:"PRODUCT_IMAGE_unpre-ars"}
];

var PLAYER_LABELS={
curry:"ステフィン・カリー",lebron:"レブロン・ジェームズ",kd:"ケビン・デュラント",
luka:"ルカ・ドンチッチ",sabrina:"サブリナ・イオネスク",harden:"ジェームズ・ハーデン",
dame:"デイミアン・リラード",wade:"ドウェイン・ウェイド",
kawamura:"河村勇輝",watanabe:"渡邊雄太",togashi:"富樫勇樹",
none:"特になし"
};

var RELATED=[
{id:"socks",icon:"🧦",name:"バスケットソックス",price:"1,500〜3,000円"},
{id:"insole",icon:"👣",name:"高機能インソール",price:"2,000〜5,000円"},
{id:"ball",icon:"🏀",name:"バスケットボール",price:"2,000〜6,000円"},
{id:"bag",icon:"🎒",name:"バスケバッグ",price:"3,000〜8,000円"}
];

var BRANDS_SIZE=[
{brand:"ASICS",logo:"🇯🇵",diff:0,note:"日本メーカー。実寸通りでOK。幅広モデルあり。"},
{brand:"MIZUNO",logo:"🇯🇵",diff:0,note:"日本メーカー。実寸通り。やや幅広。"},
{brand:"adidas",logo:"🇩🇪",diff:0.5,note:"やや細め。+0.5cm推奨。"},
{brand:"NIKE / Jordan",logo:"🇺🇸",diff:0.5,note:"細め・小さめ。+0.5〜1.0cm推奨。"},
{brand:"UNDER ARMOUR",logo:"🇺🇸",diff:0.5,note:"やや細め。+0.5cm推奨。"},
{brand:"Li-Ning",logo:"🇨🇳",diff:0.5,note:"やや細め。+0.5cm推奨。"}
];

var tab="diag";
var dState={level:"",pos:"",priority:"",player:"",budget:"",width:""};
var szVal="";
var szWidth="normal";

function render(){
  renderTabs();
  if(tab==="diag")renderDiag();
  else renderSize();
}

function renderTabs(){
  var h='<button class="bsh-tab'+(tab==="diag"?" active":"")+'" data-t="diag">🔥 バッシュ診断</button>';
  h+='<button class="bsh-tab'+(tab==="size"?" active":"")+'" data-t="size">📏 サイズ計算</button>';
  document.getElementById("bsh-tabs").innerHTML=h;
  document.querySelectorAll(".bsh-tab").forEach(function(b){b.onclick=function(){tab=this.getAttribute("data-t");render();window.scrollTo({top:0,behavior:"smooth"})}});
}

function optBtn(group,val,label,sel){
  return'<button class="bsh-opt'+(sel?" sel":"")+'" data-g="'+group+'" data-v="'+val+'">'+label+'</button>';
}



function renderDiag(){
  var el=document.getElementById("bsh-body");
  if(dState._result){renderDiagResult();return}
  var h='<div class="bsh-sec-label">6つの質問で勝負の1足を診断</div>';

  h+='<div class="bsh-q"><div class="bsh-q-title"><span class="num">1</span>プレーレベルは？</div>';
  h+='<div class="bsh-q-sub">あなたのバスケ歴や活動環境に合わせます</div>';
  h+='<div class="bsh-opts">';
  h+=optBtn("level","beginner","🌱 ビギナー（1年未満）",dState.level==="beginner");
  h+=optBtn("level","intermediate","🏀 部活・クラブで活動中",dState.level==="intermediate");
  h+=optBtn("level","advanced","⭐ 本格派（全国レベル・社会人上級）",dState.level==="advanced");
  h+='</div></div>';

  h+='<div class="bsh-q"><div class="bsh-q-title"><span class="num">2</span>ポジション / プレースタイルは？</div>';
  h+='<div class="bsh-q-sub">コート上での役割を選んでください</div>';
  h+='<div class="bsh-opts">';
  h+=optBtn("pos","speed","⚡ PG/SG（スピード・シューター）",dState.pos==="speed");
  h+=optBtn("pos","all","🎯 SF（オールラウンダー）",dState.pos==="all");
  h+=optBtn("pos","power","💪 PF/C（インサイド・リバウンド）",dState.pos==="power");
  h+='</div></div>';

  h+='<div class="bsh-q"><div class="bsh-q-title"><span class="num">3</span>バッシュに最も求めるものは？</div>';
  h+='<div class="bsh-q-sub">一番重視するポイントを1つ選んでください</div>';
  h+='<div class="bsh-opts">';
  h+=optBtn("priority","light","🪶 軽さ・スピード",dState.priority==="light");
  h+=optBtn("priority","cushion","🛡️ クッション性（着地の衝撃吸収）",dState.priority==="cushion");
  h+=optBtn("priority","grip","🔥 グリップ力（キュッと止まる）",dState.priority==="grip");
  h+=optBtn("priority","fit","✋ フィット感（足と一体化）",dState.priority==="fit");
  h+=optBtn("priority","design","✨ デザイン・存在感",dState.priority==="design");
  h+=optBtn("priority","player","👑 憧れの選手モデル",dState.priority==="player");
  h+='</div></div>';

  h+='<div class="bsh-q"><div class="bsh-q-title"><span class="num">4</span>憧れのNBA/WNBA選手は？</div>';
  h+='<div class="bsh-q-sub">選んだ選手のシグネチャーモデルを優先表示します</div>';
  h+='<div class="bsh-opts">';
  h+=optBtn("player","curry","🏹 ステフィン・カリー",dState.player==="curry");
  h+=optBtn("player","lebron","👑 レブロン・ジェームズ",dState.player==="lebron");
  h+=optBtn("player","kd","🦒 ケビン・デュラント",dState.player==="kd");
  h+=optBtn("player","luka","🎭 ルカ・ドンチッチ",dState.player==="luka");
  h+=optBtn("player","sabrina","⚡ サブリナ・イオネスク",dState.player==="sabrina");
  h+=optBtn("player","harden","🧔 ジェームズ・ハーデン",dState.player==="harden");
  h+=optBtn("player","dame","⏰ デイミアン・リラード",dState.player==="dame");
  h+=optBtn("player","kawamura","🇯🇵 河村勇輝",dState.player==="kawamura");
  h+=optBtn("player","watanabe","🇯🇵 渡邊雄太",dState.player==="watanabe");
  h+=optBtn("player","togashi","🇯🇵 富樫勇樹",dState.player==="togashi");
  h+=optBtn("player","none","🤷 特になし・選手モデルにこだわらない",dState.player==="none");
  h+='</div></div>';

  h+='<div class="bsh-q"><div class="bsh-q-title"><span class="num">5</span>ご予算は？</div>';
  h+='<div class="bsh-q-sub">価格帯で候補を絞り込みます</div>';
  h+='<div class="bsh-opts">';
  h+=optBtn("budget","2","10,000〜15,000円（標準）",dState.budget==="2");
  h+=optBtn("budget","3","15,000〜22,000円（本格派）",dState.budget==="3");
  h+=optBtn("budget","4","22,000円〜（妥協なし）",dState.budget==="4");
  h+='</div></div>';

  h+='<div class="bsh-q"><div class="bsh-q-title"><span class="num">6</span>足の幅は？</div>';
  h+='<div class="bsh-q-sub">普段の靴の感覚を参考に</div>';
  h+='<div class="bsh-opts">';
  h+=optBtn("width","narrow","細め 🦶",dState.width==="narrow");
  h+=optBtn("width","normal","普通 👣",dState.width==="normal");
  h+=optBtn("width","wide","幅広 👉",dState.width==="wide");
  h+=optBtn("width","idk","❓ わからない",dState.width==="idk");
  h+='</div></div>';

  var ready=dState.level&&dState.pos&&dState.priority&&dState.player&&dState.budget&&dState.width;
  h+='<button class="bsh-go" id="bsh-go"'+(ready?'':' disabled')+'>あなたの勝負の1足を見る →</button>';
  h+='<div class="bsh-note">※ 表示される価格は参考値です。販売サイトで最新価格をご確認ください。</div>';

  el.innerHTML=h;
  document.querySelectorAll(".bsh-opt").forEach(function(b){
    b.onclick=function(){dState[this.getAttribute("data-g")]=this.getAttribute("data-v");render()};
  });
  var go=document.getElementById("bsh-go");
  if(go&&ready)go.onclick=function(){dState._result=true;render();window.scrollTo({top:0,behavior:"smooth"})};
}

function scoreShoe(s){
  var sc=0;
  if(s.level.indexOf(dState.level)>=0)sc+=3;
  if(s.style.indexOf(dState.pos)>=0)sc+=3;
  if(s.style.indexOf("all")>=0&&dState.pos!=="all")sc+=1;
  if(s.priority&&s.priority.indexOf(dState.priority)>=0)sc+=3;
  if(dState.player!=="none"&&s.player===dState.player)sc+=5;
  if(dState.player!=="none"&&dState.priority==="player"&&s.player===dState.player)sc+=3;
  var b=parseInt(dState.budget);
  if(s.budget.indexOf(b)>=0)sc+=3;
  if(b===4&&s.budget.indexOf(3)>=0)sc+=2;
  if(dState.width&&dState.width!=="idk"){
    if(s.width.indexOf(dState.width)>=0)sc+=3;
    else sc-=2;
  }
  return sc;
}

function decodeHtmlEntities(str){
  if(!str) return str;
  return str.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'");
}
function normalizeUrl(url){
  if(!url) return null;
  url=decodeHtmlEntities(url);
  if(url.indexOf("//")===0) url="https:"+url;
  return url;
}
function parseLinkHtml(html){
  if(!html||typeof html!=="string") return null;
  var hrefMatch=html.match(/href="([^"]+)"/);
  var imgMatch=html.match(/<img\s+src="(https:\/\/[^"]+\.(?:jpg|jpeg|png|gif|webp))/i);
  return{
    clickUrl:hrefMatch?normalizeUrl(hrefMatch[1]):null,
    imageUrl:imgMatch?imgMatch[1].replace(/_SL\d+_/,"_SL500_"):null
  };
}
function resolveShoeAssets(s){
  var amzParsed=s.amzHtml?parseLinkHtml(s.amzHtml):null;
  var rktnParsed=s.rktnHtml?parseLinkHtml(s.rktnHtml):null;
  return{
    image:(amzParsed&&amzParsed.imageUrl)||s.image||("PRODUCT_IMAGE_"+s.id),
    amzUrl:(amzParsed&&amzParsed.clickUrl)||s.amzUrl||("AFFILIATE_AMAZON_"+s.id),
    rktnUrl:(rktnParsed&&rktnParsed.clickUrl)||s.rktnUrl||("AFFILIATE_RAKUTEN_"+s.id)
  };
}

function hasRealImage(url){
  return url && url.indexOf("PRODUCT_IMAGE_")!==0;
}

function shoeCard(s,rank){
  var assets=resolveShoeAssets(s);

  var imageOk=hasRealImage(assets.image);
  var topClass=rank===0?" top":"";
  var noImageClass=!imageOk?" no-image":"";
  var h='<div class="bsh-result-card'+topClass+noImageClass+'">';
  if(rank===0)h+='<div class="bsh-rc-badge">🏆 BEST MATCH</div>';
  if(imageOk){
    h+='<div class="bsh-rc-image"><img src="'+assets.image+'" alt="'+s.name+'" loading="lazy"></div>';
  }
  var ranks=["g","s","br"];
  var rankLabels=["1","2","3"];
  h+='<div class="bsh-rc-head"><div class="bsh-rc-rank '+ranks[rank]+'">'+rankLabels[rank]+'</div>';
  h+='<div class="bsh-rc-info"><div class="bsh-rc-brand">'+s.brand+'</div><div class="bsh-rc-name">'+s.name+'</div></div>';
  h+='<div class="bsh-rc-price">'+s.price+'</div></div>';
  h+='<div class="bsh-rc-body">';
  if(s.player&&PLAYER_LABELS[s.player]){
    h+='<div class="bsh-player"><span class="bsh-player-ico">👑</span><span class="bsh-player-text"><strong>'+PLAYER_LABELS[s.player]+'</strong> シグネチャーモデル</span></div>';
  }
  h+='<div class="bsh-rc-tags">';
  s.tags.forEach(function(t,i){h+='<span class="bsh-rc-tag'+(rank===0&&i===0?" hot":"")+'">'+t+'</span>'});
  h+='</div>';
  h+='<div class="bsh-rc-desc">'+s.desc+'</div>';
  h+='<div class="bsh-rc-size">📏 サイズの目安：<strong>'+s.sizing+'</strong></div>';
  h+='<div class="bsh-rc-links">';
  h+='<a class="bsh-rc-link amz" href="'+assets.amzUrl+'" target="_blank" rel="nofollow noopener">Amazonで見る</a>';
  h+='<a class="bsh-rc-link rktn" href="'+assets.rktnUrl+'" target="_blank" rel="nofollow noopener">楽天市場で見る</a>';
  h+='</div></div></div>';
  return h;
}

function relatedSection(){
  var h='<div class="bsh-related">';
  h+='<div class="bsh-related-title">🛒 一緒に揃えたいバスケ用品</div>';
  h+='<div class="bsh-related-sub">バッシュと同時に揃えるとスムーズに練習スタートできます</div>';
  h+='<div class="bsh-related-grid">';
  RELATED.forEach(function(r){
    h+='<a class="bsh-related-item" href="'+(r.amzHtml?(parseLinkHtml(r.amzHtml).clickUrl||('AFFILIATE_AMAZON_'+r.id)):(r.amzUrl||('AFFILIATE_AMAZON_'+r.id)))+'" target="_blank" rel="nofollow noopener">';
    h+='<div class="bsh-related-icon">'+r.icon+'</div>';
    h+='<div class="bsh-related-name">'+r.name+'</div>';
    h+='<div class="bsh-related-price">'+r.price+'</div>';
    h+='</a>';
  });
  h+='</div></div>';
  return h;
}

function renderDiagResult(){
  var scored=SHOES.map(function(s){return{shoe:s,score:scoreShoe(s)}}).sort(function(a,b){return b.score-a.score});
  var top=scored.slice(0,3);
  var el=document.getElementById("bsh-body");
  var h='<div class="bsh-sec-label">YOUR BEST MATCH</div>';
  top.forEach(function(item,i){h+=shoeCard(item.shoe,i)});
  h+=relatedSection();
  h+='<a class="bsh-article-cta" href="ARTICLE_COMPARE_PRO">';
  h+='<div class="bsh-article-cta-label">📘 2026年最新版</div>';
  h+='<div class="bsh-article-cta-text">バッシュおすすめ17選</div>';
  h+='<div class="bsh-article-cta-arrow">ミニバス・中学生・高校生・社会人におすすめモデルを紹介 →</div>';
  h+='</a>';
  h+='<button class="bsh-retry" id="bsh-retry">← 条件を変えてもう一度</button>';
  h+='<div class="bsh-note">※ 購入リンクをクリックすると当サイトに紹介料が入る場合があります（価格に変動はありません）。<br>※ サイズは目安です。購入前の試着を強くおすすめします。</div>';
  el.innerHTML=h;
  document.getElementById("bsh-retry").onclick=function(){dState={level:"",pos:"",priority:"",player:"",budget:"",width:""};render();window.scrollTo({top:0,behavior:"smooth"})};
}

function popularShoeCard(s,rank){
  var label="";
  if(rank===0)label="🏆 ";
  return'<a class="bsh-popular-card" href="'+assets.amzUrl+'" target="_blank" rel="nofollow noopener">'+
    '<div class="bsh-popular-rank'+(rank===0?" top":"")+'">'+(rank+1)+'</div>'+
    '<div class="bsh-popular-info">'+
    '<div class="bsh-popular-brand">'+s.brand+'</div>'+
    '<div class="bsh-popular-name">'+label+s.name+'</div>'+
    '<div class="bsh-popular-meta">'+s.tags.slice(0,2).join("・")+'</div>'+
    '</div>'+
    '<div class="bsh-popular-price">'+s.price+'</div>'+
    '</a>';
}

function renderSize(){
  var el=document.getElementById("bsh-body");
  var h='<div class="bsh-sec-label">FOOT MEASUREMENT</div>';
  h+='<div style="margin-bottom:18px">';
  h+='<div class="bsh-q-title" style="font-size:14px;font-weight:900;margin-bottom:10px"><span class="num">1</span>足の実寸（足長）を入力</div>';
  h+='<div class="bsh-sz-input-row"><input class="bsh-sz-input" id="bsh-sz-val" type="number" step="0.5" min="20" max="32" placeholder="26.5" value="'+szVal+'" inputmode="decimal"><span class="bsh-sz-unit">cm</span></div>';
  h+='<div class="bsh-sz-hint">💡 かかとから最も長い指先までの長さ。紙の上に足を置いてペンで印をつけて測れます。</div>';
  h+='</div>';
  h+='<div class="bsh-q" style="margin-bottom:14px"><div class="bsh-q-title" style="font-size:14px;font-weight:900;margin-bottom:10px"><span class="num">2</span>足幅</div>';
  h+='<div class="bsh-width-opts">';
  h+=optBtn("szw","narrow","細め",szWidth==="narrow");
  h+=optBtn("szw","normal","普通",szWidth==="normal");
  h+=optBtn("szw","wide","幅広",szWidth==="wide");
  h+='</div></div>';
  h+='<div id="bsh-sz-results"></div>';
  el.innerHTML=h;
  var inp=document.getElementById("bsh-sz-val");
  if(inp){inp.oninput=function(){szVal=this.value;updateSizeResults()}}
  document.querySelectorAll('[data-g="szw"]').forEach(function(b){
    b.onclick=function(){
      szWidth=this.getAttribute("data-v");
      document.querySelectorAll('[data-g="szw"]').forEach(function(btn){
        if(btn.getAttribute("data-v")===szWidth)btn.classList.add("sel");
        else btn.classList.remove("sel");
      });
      updateSizeResults();
    };
  });
  updateSizeResults();
}

function updateSizeResults(){
  var resultsEl=document.getElementById("bsh-sz-results");
  if(!resultsEl)return;
  var foot=parseFloat(szVal);
  var h="";
  if(foot>=20&&foot<=32){
    h+='<table class="bsh-sz-table"><thead><tr><th>ブランド</th><th>推奨サイズ</th><th>メモ</th></tr></thead><tbody>';
    BRANDS_SIZE.forEach(function(b){
      var rec=foot+b.diff;
      if(szWidth==="wide"&&b.diff>0)rec+=0.5;
      var recStr=rec.toFixed(1)+"cm";
      var warnClass=(szWidth==="wide"&&b.diff>0)?" rec":"";
      var noteStr=b.note;
      if(szWidth==="wide"&&b.diff>0)noteStr="⚠️ 幅広は+1.0cm推奨。";
      h+='<tr><td>'+b.logo+' '+b.brand+'</td><td class="'+warnClass+'">'+recStr+'</td><td class="note-cell">'+noteStr+'</td></tr>';
    });
    h+='</tbody></table>';
    h+='<div class="bsh-sz-tip"><div class="bsh-sz-tip-title">📝 プレーヤーのサイズ選びのコツ</div><div class="bsh-sz-tip-text">';
    h+='プレー中のアジリティを最大化するには、<strong>かかとがしっかりフィットしつつ、つま先に約0.5〜1cmの余裕</strong>があるのが理想。厚めの練習用ソックスを履いて試着するとズレが少ないサイズ選びができます。';
    h+='</div></div>';
    var matching=SHOES.filter(function(s){return foot>=s.sizeCm[0]&&foot<=s.sizeCm[1]})
      
      .slice(0,3);
    if(matching.length>0){
      h+='<div class="bsh-sec-label sub">🔥 このサイズで履けるバッシュ</div>';
      h+='<div style="font-size:11px;color:#64748b;margin-bottom:12px">あなたの足サイズに合うモデルを表示しています</div>';
      matching.forEach(function(s,i){h+=popularShoeCard(s,i)});
      h+='<a class="bsh-article-cta" href="ARTICLE_SIZE_GUIDE_PRO">';
      h+='<div class="bsh-article-cta-label">プレーヤー向けサイズ選び</div>';
      h+='<div class="bsh-article-cta-text">📘 パフォーマンスを引き出すサイズ選び完全ガイド</div>';
      h+='<div class="bsh-article-cta-arrow">ブランド別の細かいフィット感のコツ →</div>';
      h+='</a>';
    }
  }
  h+='<div class="bsh-note" style="margin-top:14px">※ 同じブランドでもモデルによってサイズ感は異なります。購入前の試着を強くおすすめします。</div>';
  resultsEl.innerHTML=h;
}

render();
})();
