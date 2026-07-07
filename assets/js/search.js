
(function(){
  function qs(n){return new URLSearchParams(window.location.search).get(n)||''}
  function norm(s){return (s||'').toLowerCase().replace(/[^a-z0-9$ ]+/g,' ').replace(/\s+/g,' ').trim()}
  function esc(s){return (s||'').replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function highlight(text, terms){let out=esc(text||''); terms.filter(Boolean).slice(0,6).forEach(function(t){let re=new RegExp('('+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig'); out=out.replace(re,'<mark>$1</mark>')}); return out}
  function run(){
    var mount=document.getElementById('search-results'); if(!mount) return;
    var input=document.getElementById('search-page-input'); var q=qs('q'); if(input) input.value=q;
    var data=window.LW_SEARCH_INDEX||[];
    var terms=norm(q).split(' ').filter(Boolean);
    if(!terms.length){ mount.innerHTML='<div class="search-empty">Type a search above, or try one of the popular searches below.</div>'; return; }
    var scored=data.map(function(it){
      var hay=norm([it.title,it.description,it.section,it.url].join(' ')); var score=0;
      terms.forEach(function(t){ if(hay.includes(t)) score+=2; if(norm(it.title).includes(t)) score+=5; if(norm(it.url).includes(t)) score+=3; });
      return {it:it,score:score};
    }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,30);
    if(!scored.length){ mount.innerHTML='<div class="search-empty">No results found. Try broader terms like “Ferrari”, “Rolex”, “mortgage”, “chauffeur”, “credit cards”, or “yacht”.</div>'; return; }
    mount.innerHTML=scored.map(function(x){var it=x.it; return '<a class="search-result" href="'+esc(it.url)+'"><div class="search-meta">'+esc(it.section||'guide')+'</div><h2>'+highlight(it.title,terms)+'</h2><p>'+highlight(it.description,terms)+'</p></a>';}).join('');
  }
  document.addEventListener('DOMContentLoaded',run);
})();
