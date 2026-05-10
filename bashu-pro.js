(function(){
var SHOES=[
{id:"gelhoop",brand:"ASICS",name:"GELHOOP V16",price:"11,000〜14,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[2,3],width:["normal","wide"],priority:["light","fit"],player:"",tags:["部活定番","軽量","日本製"],desc:"中高生の部活で圧倒的シェアを誇る定番。軽さとフィット感のバランスが秀逸で、ポジションを選ばない万能型。日本人の足型に最適化。",sizing:"+0cm〜+0.5cm（実寸通り〜やや大きめ）",rating:4.8,reviews:2145,sizeCm:[22,29],image:"PRODUCT_IMAGE_gelhoop"},
{id:"gelburst",brand:"ASICS",name:"GELBURST 28",price:"10,000〜13,000円",level:["beginner","intermediate"],style:["all","power"],budget:[2,3],width:["normal","wide"],priority:["cushion","fit"],player:"",tags:["安定感","クッション◎","オールラウンド"],desc:"GELHOOPに並ぶASICSの主力モデル。GELHOOPより安定感・クッション重視の設計で、初心者〜中級者に特に支持されている。",sizing:"+0cm〜+0.5cm",rating:4.7,reviews:1820,sizeCm:[23,29],image:"PRODUCT_IMAGE_gelburst"},
{id:"nova",brand:"ASICS",name:"NOVA SURGE 3",price:"14,000〜18,000円",level:["intermediate","advanced"],style:["power","all"],budget:[3],width:["normal","wide"],priority:["cushion","durable"],player:"",tags:["クッション最強","パワープレー","安定感"],desc:"ASICSの最高峰クッション搭載。ゴール下のパワープレーやリバウンドを多くこなすビッグマン向け。重さはあるが安定感は抜群。",sizing:"+0cm〜+0.5cm",rating:4.6,reviews:543,sizeCm:[24,30],image:"PRODUCT_IMAGE_nova"},
{id:"curry",brand:"UNDER ARMOUR",name:"Curry 12",price:"16,000〜22,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["narrow","normal"],priority:["light","grip","player"],player:"curry",tags:["カリー愛用","グリップ最強","シグネチャー"],desc:"NBA屈指のシューター、ステフィン・カリーの最新シグネチャーモデル。圧倒的グリップ力と軽量性で、瞬発的なドライブやシュートを支える。",sizing:"+0.5cm〜+1.0cm",rating:4.7,reviews:892,sizeCm:[24,30],image:"PRODUCT_IMAGE_curry"},
{id:"lebron",brand:"NIKE",name:"LeBron 22",price:"20,000〜28,000円",level:["advanced"],style:["power","all"],budget:[3],width:["normal"],priority:["cushion","player","design"],player:"lebron",tags:["レブロン愛用","衝撃吸収","フラッグシップ"],desc:"NBAの王様レブロン・ジェームズの最新モデル。Nike最高峰のクッションテクノロジー搭載。パワフルなプレースタイルを完全サポート。",sizing:"+0.5cm〜+1.0cm",rating:4.5,reviews:387,sizeCm:[25,32],image:"PRODUCT_IMAGE_lebron"},
{id:"kd",brand:"NIKE",name:"KD17",price:"17,000〜22,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["narrow","normal"],priority:["light","fit","player"],player:"kd",tags:["KD愛用","フィット感最強","万能"],desc:"ケビン・デュラントのシグネチャー。身長があっても機敏に動けるKDのプレースタイルに合わせ、軽量性と安定感を両立。",sizing:"+0.5cm〜+1.0cm",rating:4.6,reviews:456,sizeCm:[25,31],image:"PRODUCT_IMAGE_kd"},
{id:"luka",brand:"Jordan",name:"Luka 3",price:"18,000〜24,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["normal"],priority:["player","design","grip"],player:"luka",tags:["ドンチッチ愛用","トリッキー","デザイン◎"],desc:"スーパースター ルカ・ドンチッチのシグネチャー。変幻自在なプレーに対応するトラクションとサポート性能を両立。存在感あるデザイン。",sizing:"+0.5cm",rating:4.5,reviews:312,sizeCm:[24,31],image:"PRODUCT_IMAGE_luka"},
{id:"sabrina",brand:"NIKE",name:"Sabrina 2",price:"15,000〜19,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["narrow","normal"],priority:["light","player","design"],player:"sabrina",tags:["サブリナ愛用","軽量","女性人気◎"],desc:"WNBAスター、サブリナ・イオネスクのシグネチャー。男女問わず使える軽量モデルとして人気急上昇中。カラバリ豊富。",sizing:"+0.5cm",rating:4.6,reviews:478,sizeCm:[22,28],image:"PRODUCT_IMAGE_sabrina"},
{id:"harden",brand:"adidas",name:"Harden Vol.9",price:"16,000〜20,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["normal"],priority:["player","grip","fit"],player:"harden",tags:["ハーデン愛用","ステップバック","adidas主力"],desc:"ジェームズ・ハーデンのシグネチャー。ステップバック3Pに最適化されたトラクションとフィット感。1対1の駆け引きを制したい選手に。",sizing:"+0.5cm",rating:4.4,reviews:289,sizeCm:[25,31],image:"PRODUCT_IMAGE_harden"},
{id:"crazyfly",brand:"adidas",name:"Dame Certified",price:"14,000〜18,000円",level:["intermediate","advanced"],style:["speed","all"],budget:[3],width:["normal"],priority:["player","light","design"],player:"dame",tags:["リラード愛用","軽量","クラッチタイム"],desc:"デイミアン・リラード監修モデル。クラッチでの爆発的なスピードを支える軽量設計と反発性。ガード向けの決定版。",sizing:"+0.5cm",rating:4.5,reviews:334,sizeCm:[24,30],image:"PRODUCT_IMAGE_crazyfly"},
{id:"wade",brand:"Li-Ning",name:"Way of Wade",price:"12,000〜18,000円",level:["intermediate","advanced"],style:["all","power"],budget:[3],width:["normal"],priority:["player","design","durable"],player:"wade",tags:["ウェイド愛用","Li-Ning","通好み"],desc:"D・ウェイドのシグネチャー。中国ブランドLi-Ningの看板モデルで、コスパと性能のバランスが優秀。他と被りたくない通好みの一足。",sizing:"+0cm〜+0.5cm",rating:4.5,reviews:156,sizeCm:[25,31],image:"PRODUCT_IMAGE_wade"}
];

var PLAYER_LABELS={
  curry:"ステフィン・カリー",lebron:"レブロン・ジェームズ",kd:"ケビン・デュラント",
  luka:"ルカ・ドンチッチ",sabrina:"サブリナ・イオネスク",harden:"ジェームズ・ハーデン",
  dame:"デイミアン・リラード",wade:"ドウェイン・ウェイド"
};

var RELATED=[
{id:"socks-pro",icon:"🧦",name:"パフォーマンスソックス",price:"2,000〜4,000円"},
{id:"insole-pro",icon:"👣",name:"プロ仕様インソール",price:"3,000〜8,000円"},
{id:"ankle",icon:"🦿",name:"アンクルサポーター",price:"2,000〜5,000円"},
{id:"ball-pro",icon:"🏀",name:"ゲームボール",price:"4,000〜9,000円"}
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

function starsHTML(rating,reviews){
  var full=Math.floor(rating);
  var half=rating-full>=0.3?1:0;
  var s="";
  for(var i=0;i<full;i++)s+="★";
  if(half)s+="☆";
  for(var i=full+half;i<5;i++)s+="☆";
  return'<div class="bsh-rc-stars"><span class="stars">'+s+'</span><span class="score">'+rating.toFixed(1)+'</span><span class="count">('+reviews.toLocaleString()+'件のレビュー)</span></div>';
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

function hasRealImage(url){
  return url && url.indexOf("PRODUCT_IMAGE_")!==0;
}

function shoeCard(s,rank){
  var imageOk=hasRealImage(s.image);
  var topClass=rank===0?" top":"";
  var noImageClass=!imageOk?" no-image":"";
  var h='<div class="bsh-result-card'+topClass+noImageClass+'">';
  if(rank===0)h+='<div class="bsh-rc-badge">🏆 BEST MATCH</div>';
  if(imageOk){
    h+='<div class="bsh-rc-image"><img src="'+s.image+'" alt="'+s.name+'" loading="lazy"></div>';
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
  h+=starsHTML(s.rating,s.reviews);
  h+='<div class="bsh-rc-tags">';
  s.tags.forEach(function(t,i){h+='<span class="bsh-rc-tag'+(rank===0&&i===0?" hot":"")+'">'+t+'</span>'});
  h+='</div>';
  h+='<div class="bsh-rc-desc">'+s.desc+'</div>';
  h+='<div class="bsh-rc-size">📏 サイズの目安：<strong>'+s.sizing+'</strong></div>';
  h+='<div class="bsh-rc-links">';
  h+='<a class="bsh-rc-link amz" href="AFFILIATE_AMAZON_'+s.id+'" target="_blank" rel="nofollow noopener">Amazonで見る</a>';
  h+='<a class="bsh-rc-link rktn" href="AFFILIATE_RAKUTEN_'+s.id+'" target="_blank" rel="nofollow noopener">楽天市場で見る</a>';
  h+='</div></div></div>';
  return h;
}

function relatedSection(){
  var h='<div class="bsh-related">';
  h+='<div class="bsh-related-title">🛒 プレーヤー必携ギア</div>';
  h+='<div class="bsh-related-sub">バッシュと一緒に揃えてパフォーマンスをさらに引き上げる</div>';
  h+='<div class="bsh-related-grid">';
  RELATED.forEach(function(r){
    h+='<a class="bsh-related-item" href="AFFILIATE_AMAZON_'+r.id+'" target="_blank" rel="nofollow noopener">';
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
  h+='<div class="bsh-article-cta-label">もっと深く知りたい方へ</div>';
  h+='<div class="bsh-article-cta-text">📘 NBA選手モデル徹底比較ガイド</div>';
  h+='<div class="bsh-article-cta-arrow">全シグネチャーモデルの詳細・歴代の名作も →</div>';
  h+='</a>';
  h+='<button class="bsh-retry" id="bsh-retry">← 条件を変えてもう一度</button>';
  h+='<div class="bsh-note">※ 購入リンクをクリックすると当サイトに紹介料が入る場合があります（価格に変動はありません）。<br>※ サイズは目安です。購入前の試着を強くおすすめします。</div>';
  el.innerHTML=h;
  document.getElementById("bsh-retry").onclick=function(){dState={level:"",pos:"",priority:"",player:"",budget:"",width:""};render();window.scrollTo({top:0,behavior:"smooth"})};
}

function popularShoeCard(s,rank){
  var label="";
  if(rank===0)label="🏆 ";
  return'<a class="bsh-popular-card" href="AFFILIATE_AMAZON_'+s.id+'" target="_blank" rel="nofollow noopener">'+
    '<div class="bsh-popular-rank'+(rank===0?" top":"")+'">'+(rank+1)+'</div>'+
    '<div class="bsh-popular-info">'+
    '<div class="bsh-popular-brand">'+s.brand+'</div>'+
    '<div class="bsh-popular-name">'+label+s.name+'</div>'+
    '<div class="bsh-popular-meta">★'+s.rating.toFixed(1)+' ('+s.reviews.toLocaleString()+'件) / '+s.tags.slice(0,2).join("・")+'</div>'+
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
      .sort(function(a,b){return(b.reviews*b.rating)-(a.reviews*a.rating)})
      .slice(0,3);
    if(matching.length>0){
      h+='<div class="bsh-sec-label sub">🔥 このサイズで人気のバッシュ TOP3</div>';
      h+='<div style="font-size:11px;color:#64748b;margin-bottom:12px">あなたの足サイズに合うモデルをレビュー数の多い順で表示しています</div>';
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
