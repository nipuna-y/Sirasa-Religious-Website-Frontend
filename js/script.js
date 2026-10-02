const places=[
 {t:'t1',b:'Buddhism',loc:'Sagama',region:'Kandy District',n:'Sagama Rajamaha Viharaya',s:'සගම රජමහා විහාරය',d:'Located in Bootawatta village in the Pathahewaheta Divisional Secretariat Division of Kandy...',founded:'Anuradhapura era',town:'Thalathuoya',
  full:['Sagama Rajamaha Viharaya is located in Bootawatta village in the Pathahewaheta Divisional Secretariat Division of Kandy District. To reach the temple, travel from Kandy towards Thalathuoya and then proceed approximately 14 km along the Bawlana Road. This is also the first location mentioned in the Buddhist historical text known as the "Nam Potha." Historical records state that the construction of Sagama Rajamaha Viharaya began during the reign of King Devanampiya Tissa and was further developed during the Gampola Kingdom period.',
  'The temple also features an image house adorned with Kandyan-era paintings and sculptures, as well as a stone enclosure built around the ancient Bodhi tree. The image house, bell-shaped stupa, Uposatha house, and old residential quarters are among the archaeologically significant structures found at the temple.',
  'According to legend, during the Anuradhapura period, a sapling of the sacred Jaya Sri Maha Bodhi was taken to Ruhuna. An inscription on a rock near Sagama Temple records that, during the reign of King Bhuvanekabahu V, two ministerial brothers, Alakeshvara and Deva Mantri, donated forty amunas of paddy land in Hapuhale village to Senkadagala Natha Deity and Rukwasi Deity. The Aluth Sahal Mangallaya (New Rice Festival) is also held here, using rice collected from six neighbouring villages.']},
 {t:'t2',b:'Buddhism',loc:'Seruwila',region:'Trincomalee District',n:'Mangala Rajamaha Viharaya – Seruwila',s:'මංගල රාජමහා විහාරය - සේරුවිල',d:'This historic temple is located in the Seruwila Grama Niladhari division, within the Seruwila Divisional Secretariat are...',founded:'—',town:'—'},
 {t:'t3',b:'Buddhism',loc:'Rathnapura Pelmadulla · Embilipitiya',region:'Rathnapura District',n:'Sri Sankapala Rajamaha Viharaya Kolambageara',s:'ශ්‍රී සංඛපාල රාජ මහා විහාරය',d:'The sacred site of the Sri Sankhapala Raja Maha Viharaya is located in the Sankhapala Grama Niladhari Division of the Em...',founded:'—',town:'—'},
 {t:'t4',b:'Buddhism',loc:'Raigam · Kalutara District',region:'Kalutara District',n:'Olaboduwa Raja Maha Viharaya',s:'ඓතිහාසික බලබෝඩුව රාජ මහා විහාරය',d:'King Kirthi Sri Nissankamalla, who reigned from 1187 to 1196 AD, was a great leader who explored the whole island during...',founded:'1187–1196 AD era',town:'—'},
 {t:'t1',b:'Buddhism',loc:'Dambadeniya',region:'Kurunegala District',n:'Dambadeniya Vijayasundarama Temple',s:'දඹදෙණිය ශ්‍රී විජයසුන්දරරාම රාජ මහා විහාරය',d:'Dambadeniya Viharaya (Dambadeniya Sri Vijayasundararama Raja Maha Viharaya). Dambadeniya Sri Vijayasundararama Raja Maha...',founded:'—',town:'—'}
];

const sourceDescriptions = window.SIRASA_ARTICLE_DETAILS.en;

let currentLang = 'en';
const placeTranslations = {
  0: {
    si:{n:'සගම රජමහා විහාරය',d:'මහනුවර දිස්ත්‍රික්කයේ පාතහේවාහැට ප්‍රාදේශීය ලේකම් කොට්ඨාසයේ බූටාවත්ත ගම්මානයේ පිහිටා ඇත.',loc:'සගම',region:'මහනුවර දිස්ත්‍රික්කය',b:'බුද්ධාගම',founded:'අනුරාධපුර යුගය',town:'තලාතුඔය',full:[
      'සගම රජමහා විහාරය මහනුවර දිස්ත්‍රික්කයේ පාතහේවාහැට ප්‍රාදේශීය ලේකම් කොට්ඨාසයේ බූටාවත්ත ගම්මානයේ පිහිටා ඇත. විහාරස්ථානයට ළඟා වීමට මහනුවර සිට තලාතුඔය දෙසට ගමන් කර බාවලන මාර්ගය ඔස්සේ කිලෝමීටර් 14ක් පමණ ඉදිරියට යා යුතුය. බෞද්ධ ඓතිහාසික ග්‍රන්ථයක් වන “නාම පොතේ” මුලින්ම සඳහන් වන ස්ථානය මෙයයි. දේවානම්පියතිස්ස රජුගේ සමයේ විහාරස්ථානයේ ඉදිකිරීම් ආරම්භ වී ගම්පොළ රාජධානි සමයේ තවදුරටත් සංවර්ධනය වූ බව ඓතිහාසික වාර්තා සඳහන් කරයි.',
      'මහනුවර යුගයේ සිතුවම් හා මූර්තිවලින් අලංකාර කළ පිළිමගෙයක්ද, පුරාණ බෝධීන් වහන්සේ වටා ඉදිකළ ගල් ප්‍රාකාරයක්ද විහාරස්ථානයේ දක්නට ලැබේ. පිළිමගෙය, ඝණ්ඨාකාර චෛත්‍යය, උපෝසථාගාරය සහ පැරණි සංඝාවාසය පුරාවිද්‍යාත්මක වටිනාකමක් ඇති ගොඩනැගිලි අතර වේ.',
      'අනුරාධපුර යුගයේදී ශ්‍රී මහා බෝධියේ අංකුරයක් රුහුණට ගෙන යන අතරතුර තාවකාලිකව තැබූ ස්ථානයේ එය මුල් බැසගත් බව ජනප්‍රවාදයේ සඳහන් වේ. පස්වන බුවනෙකබාහු රජුගේ සමයේ අලකේශ්වර සහ දේවමන්ත්‍රී යන අමාත්‍ය සහෝදරයන් දෙදෙනා හපුහළේ ගමේ කුඹුරු ඉඩම් සෙන්කඩගල නාථ සහ රුක්වාසි දෙවියන්ට පූජා කළ බව සගම විහාරය අසල ගල් ලිපියක සඳහන් වේ. ගොඩමුන්න, බූටාවත්ත, නුගලියද්ද, කපුලියද්ද, හපුහළේ සහ මහමඩගම යන ගම්මාන හයෙන් රැස් කරන වී භාවිතයෙන් අලුත් සහල් මංගල්‍යයද මෙහි පැවැත්වේ.'
    ]},
    ta:{n:'சகம ரஜமஹா விகாரை',d:'கண்டி மாவட்டத்தின் பாதஹேவாஹெட்ட பிரதேச செயலாளர் பிரிவிலுள்ள பூட்டாவத்த கிராமத்தில் அமைந்துள்ளது.',loc:'சகம',region:'கண்டி மாவட்டம்',b:'பௌத்தம்',founded:'அனுராதபுரக் காலம்',town:'தலத்துஓய',full:[
      'சகம ரஜமஹா விகாரை கண்டி மாவட்டத்தின் பாதஹேவாஹெட்ட பிரதேச செயலாளர் பிரிவிலுள்ள பூட்டாவத்த கிராமத்தில் அமைந்துள்ளது. விகாரையை அடைய கண்டியிலிருந்து தலத்துஓய நோக்கிப் பயணித்து, பாவலன வீதியில் சுமார் 14 கிலோமீட்டர் செல்ல வேண்டும். “நாம் பொத்த” எனப்படும் பௌத்த வரலாற்று நூலில் முதலில் குறிப்பிடப்படும் இடமும் இதுவாகும். தேவானம்பிய திஸ்ஸ மன்னரின் ஆட்சிக் காலத்தில் கட்டுமானம் தொடங்கி, கம்பளை இராச்சியக் காலத்தில் மேலும் மேம்படுத்தப்பட்டதாக வரலாற்றுப் பதிவுகள் கூறுகின்றன.',
      'கண்டியக் கால ஓவியங்கள் மற்றும் சிற்பங்களால் அலங்கரிக்கப்பட்ட சிலை மண்டபமும், பழமையான போதி மரத்தைச் சுற்றியுள்ள கல் மதிலும் இங்கு உள்ளன. சிலை மண்டபம், மணி வடிவ தூபி, உபோசத மண்டபம் மற்றும் பழைய துறவியர் குடியிருப்புகள் தொல்லியல் முக்கியத்துவம் வாய்ந்த கட்டிடங்களாகும்.',
      'அனுராதபுரக் காலத்தில் புனித ஜய ஸ்ரீ மகா போதியின் ஒரு தளிர் உருகுணைக்கு எடுத்துச் செல்லப்பட்டபோது தற்காலிகமாக வைக்கப்பட்ட இடத்தில் வேரூன்றியதாக ஒரு மரபுக் கதை கூறுகிறது. ஐந்தாம் புவனேகபாகு மன்னரின் ஆட்சியில் அலக்கேஸ்வரர் மற்றும் தேவ மந்திரி என்ற இரு அமைச்சர்கள் ஹபுஹலே கிராமத்தின் நெல் வயல்களை செங்கடகல நாத மற்றும் ருக்வாசி தெய்வங்களுக்கு வழங்கியதாக சகம ஆலயத்திற்கு அருகிலுள்ள கல்வெட்டு பதிவு செய்கிறது. கோடமுன்ன, பூட்டாவத்த, நுகலியத்த, கபுலியத்த, ஹபுஹலே மற்றும் மஹமடகம ஆகிய ஆறு கிராமங்களிலிருந்து சேகரிக்கப்படும் நெல்லைக் கொண்டு அலுத் சஹல் மங்கள்யா விழாவும் இங்கு நடத்தப்படுகிறது.'
    ]}
  },
  1:{si:{n:'මංගල රාජමහා විහාරය – සේරුවිල',d:'සේරුවිල ප්‍රාදේශීය ලේකම් කොට්ඨාසයේ සේරුවිල ග්‍රාම නිලධාරී වසමේ පිහිටි ඓතිහාසික විහාරස්ථානයකි.',loc:'සේරුවිල',region:'ත්‍රිකුණාමලය දිස්ත්‍රික්කය',b:'බුද්ධාගම',founded:'—',town:'—'},ta:{n:'மங்கள ரஜமஹா விகாரை – சேருவில',d:'திருகோணமலை மாவட்டத்தின் சேருவில பிரதேச செயலாளர் பிரிவிலுள்ள சேருவில கிராம அலுவலர் பிரிவில் அமைந்துள்ள வரலாற்றுச் சிறப்புமிக்க ஆலயம்.',loc:'சேருவில',region:'திருகோணமலை மாவட்டம்',b:'பௌத்தம்',founded:'—',town:'—'}},
  2:{si:{n:'ශ්‍රී සංඛපාල රාජමහා විහාරය කොළඹගේආර',d:'ශ්‍රී සංඛපාල රජමහා විහාරය ඇඹිලිපිටිය ප්‍රදේශයේ සංඛපාල ග්‍රාම නිලධාරී වසමේ පිහිටි පූජනීය ස්ථානයකි.',loc:'රත්නපුර · පැල්මඩුල්ල · ඇඹිලිපිටිය',region:'රත්නපුර දිස්ත්‍රික්කය',b:'බුද්ධාගම',founded:'—',town:'—'},ta:{n:'ஸ்ரீ சங்கபால ரஜமஹா விகாரை கொலம்பகேஆர',d:'ஸ்ரீ சங்கபால ரஜமஹா விகாரை எம்பிலிபிட்டியிலுள்ள சங்கபால கிராம அலுவலர் பிரிவில் அமைந்துள்ள புனிதத் தலமாகும்.',loc:'இரத்தினபுரி · பெல்மடுல்ல · எம்பிலிபிட்டிய',region:'இரத்தினபுரி மாவட்டம்',b:'பௌத்தம்',founded:'—',town:'—'}},
  3:{si:{n:'ඓතිහාසික ඔලබොඩුව රජමහා විහාරය',d:'ක්‍රි.ව. 1187–1196 කාලයේ රජ කළ කීර්ති ශ්‍රී නිශ්ශංකමල්ල රජුගේ යුගය හා සම්බන්ධ ඓතිහාසික විහාරස්ථානයකි.',loc:'රයිගම · කළුතර දිස්ත්‍රික්කය',region:'කළුතර දිස්ත්‍රික්කය',b:'බුද්ධාගම',founded:'ක්‍රි.ව. 1187–1196 යුගය',town:'—'},ta:{n:'வரலாற்றுச் சிறப்புமிக்க ஒலபொடுவ ரஜமஹா விகாரை',d:'கி.பி. 1187–1196 காலத்தில் ஆட்சி செய்த கீர்த்தி ஸ்ரீ நிஸ்ஸங்கமல்ல மன்னரின் காலத்துடன் தொடர்புடைய வரலாற்று விகாரையாகும்.',loc:'ரைகம · களுத்துறை மாவட்டம்',region:'களுத்துறை மாவட்டம்',b:'பௌத்தம்',founded:'கி.பி. 1187–1196 காலம்',town:'—'}},
  4:{si:{n:'දඹදෙණිය විජයසුන්දරාරාම විහාරය',d:'දඹදෙණිය ශ්‍රී විජයසුන්දරාරාම රජමහා විහාරය ලෙසද හැඳින්වෙන ඓතිහාසික විහාරස්ථානයකි.',loc:'දඹදෙණිය',region:'කුරුණෑගල දිස්ත්‍රික්කය',b:'බුද්ධාගම',founded:'—',town:'—'},ta:{n:'தம்பதெனிய விஜயசுந்தராராம விகாரை',d:'தம்பதெனிய ஸ்ரீ விஜயசுந்தராராம ரஜமஹா விகாரை என்றும் அழைக்கப்படும் வரலாற்றுச் சிறப்புமிக்க விகாரையாகும்.',loc:'தம்பதெனிய',region:'குருநாகல் மாவட்டம்',b:'பௌத்தம்',founded:'—',town:'—'}}
};
const placeDetailTranslations = {si: window.SIRASA_ARTICLE_DETAILS.si, ta: window.SIRASA_ARTICLE_DETAILS.ta};

// Return the selected place with its current-language fields merged in.
function localizedPlace(p){const i=places.indexOf(p);const tr=placeTranslations[i]?.[currentLang];return tr?{...p,...tr}:p;}
// Resolve a shared interface label, falling back to English if a translation is missing.
function ui(key){return (uiText[currentLang]||uiText.en)[key]||uiText.en[key]||key;}
const uiText=Object.fromEntries(['si','en','ta'].map(lang=>[lang,window.SIRASA_CONTENT?.[lang]?.ui||{}]));

// Build one place card; its data index is used by the click handler in renderList().
function card(p,i){const q=localizedPlace(p);return `<div class="glass card reveal" data-idx="${i}">
  <div class="thumb ${p.t}" ${p.cmsGallery?.[0]?`style="background-image:url('${p.cmsGallery[0]}')"`:""}></div>
  <div class="cbody"><div class="loc">📍 ${q.loc}</div><h3>${q.n}</h3>
  ${p.s?`<div class="sinh">${p.s}</div>`:''}<p>${q.d}</p><div class="more">${ui('discover').toUpperCase()} →</div></div></div>`;}

// Filter and render the searchable places list, then re-enable reveal animations.
function renderList(filter,term){
  filter=filter||'all';term=term||'';
  const grid=document.getElementById('listGrid');
  const items=places.filter((p)=>(filter==='all'||p.b.toLowerCase()===filter)&&
    (p.n.toLowerCase().includes(term)||p.loc.toLowerCase().includes(term)||(placeTranslations[places.indexOf(p)]?.[currentLang]?.n||'').toLowerCase().includes(term)||(placeTranslations[places.indexOf(p)]?.[currentLang]?.loc||'').toLowerCase().includes(term)));
  grid.innerHTML=items.length?items.map(p=>card(p,places.indexOf(p))).join(''):
    `<div class="empty-msg">${ui('empty')}</div>`;
  document.querySelectorAll('#listGrid .card[data-idx]').forEach(c=>{
    c.addEventListener('click',()=>showDetail(+c.dataset.idx));
  });
  observeReveals();
}

let currentView='home';
// Populate the place detail view and optionally update the shareable URL.
function showDetail(idx, updateUrl=true, preserveScroll=false){
  const p=places[idx], q=localizedPlace(p);
  if(!p) return;
  if(updateUrl){
    const slug=encodeURIComponent(p.n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''));
    history.pushState({page:'detail',place:idx,from:currentView},'',`#place/${idx+1}-${slug}`);
  }
  document.getElementById('detailBreadcrumb').textContent=q.b.toUpperCase()+' · '+q.loc.split(' ')[0].toUpperCase()+' · '+(currentLang==='si'?'ශ්‍රී ලංකාව':currentLang==='ta'?'இலங்கை':'SRI LANKA');
  document.getElementById('detailTitle').textContent=q.n; document.getElementById('detailTitle').dataset.placeName=p.n;
  const sinhEl=document.getElementById('detailSinh');
  if(p.s){sinhEl.textContent=p.s;sinhEl.style.display='block';}else{sinhEl.style.display='none';}
  const translatedParas=currentLang==='en'?null:placeDetailTranslations[currentLang]?.[idx];
  const paras=(currentLang==='en'?sourceDescriptions[idx]:(translatedParas||q.full||sourceDescriptions[idx]))||[q.d+' '+ui('noHistory')];
  document.getElementById('detailParas').innerHTML=paras.map(t=>'<p>'+t+'</p>').join('');
  document.getElementById('detailDistrict').textContent=q.region;
  document.getElementById('detailFounded').textContent=q.founded;
  document.getElementById('detailReligion').textContent=q.b;
  document.getElementById('detailTown').textContent=q.town;
  const saveBtn=document.getElementById('saveBtn'); saveBtn.classList.remove('saved'); saveBtn.textContent=ui('save');
  window.setDetailGalleryPlace?.(idx);
  goToPage('detail',preserveScroll);
}

const galleryViewAll=document.getElementById('galleryViewAll');
if(galleryViewAll) galleryViewAll.addEventListener('click',()=>window.openPlaceGallery?.());
const galleryPageBack=document.getElementById('galleryPageBack');
if(galleryPageBack) galleryPageBack.addEventListener('click',()=>goToPage('detail'));

const detailBackBtn=document.getElementById('detailBackBtn');
if(detailBackBtn) detailBackBtn.addEventListener('click',()=>{
  const from=history.state?.from;
  if(from==='home'||from==='listing'){ history.back(); }
  else { goToPage('listing'); }
});

// Central page router: toggle the requested view, sync navigation, and manage scroll.
function goToPage(page,preserveScroll=false){
  currentView=page;
  if(page!=='detail' && location.hash.startsWith('#place/')) history.pushState({page},'',location.pathname+location.search);
  document.querySelectorAll('#navlinks button, #mobileMenu button').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  ['home','listing','detail','gallery'].forEach(p=>{
    const el=document.getElementById('page-'+p);
    const show=p===page;
    el.classList.toggle('hidden',!show);
    if(show){el.classList.remove('pageview');void el.offsetWidth;el.classList.add('pageview');}
  });
  document.getElementById('mobileMenu').classList.remove('open');
  if(!preserveScroll) window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('#navlinks button, #mobileMenu button').forEach(btn=>{
  btn.addEventListener('click',()=>goToPage(btn.dataset.page));
});

// Deep-link support: each place detail can be opened, refreshed, and shared by URL.
function restorePlaceFromUrl(){
  const match=location.hash.match(/^#place\/(\d+)/);
  if(match){const idx=Number(match[1])-1;if(idx>=0&&idx<places.length)showDetail(idx,false);}
}
window.addEventListener('popstate',()=>{
  if(location.hash.startsWith('#place/')) restorePlaceFromUrl();
  else goToPage('home');
});
window.addEventListener('hashchange',restorePlaceFromUrl);

document.getElementById('heroExploreBtn').addEventListener('click',scrollToExploreSection);
document.getElementById('heroViewAllBtn').addEventListener('click',()=>goToPage('listing'));
document.getElementById('bentoViewAllBtn').addEventListener('click',()=>goToPage('listing'));

/* Sacred places homepage carousel + category filters */
(function initPlacesCarousel(){
  const track=document.getElementById('placesTrack');
  const prev=document.getElementById('placesPrev');
  const next=document.getElementById('placesNext');
  const progress=document.getElementById('placesProgress');
  const filters=[...document.querySelectorAll('#homeFilters .pill')];
  if(!track||!prev||!next) return;
  let activeFilter='all', items=[...places], position=0, timer=null;
  let dragging=false, dragStartX=0, dragStartTranslate=0, dragDelta=0, dragged=false, suppressClick=false;
  const autoplay=5000;

  function filtered(){
    return activeFilter==='all'?places:places.filter(p=>p.b.toLowerCase()===activeFilter);
  }
  function cardMarkup(p,i){
    return `<article class="place-slide glass" data-idx="${places.indexOf(p)}" role="link" tabindex="0" aria-label="${ui('explorePlace')}: ${localizedPlace(p).n}">
      <div class="place-image ${p.t}" ${p.cmsGallery?.[0]?`style="background-image:url('${p.cmsGallery[0]}')"`:""}></div>
      <div class="place-overlay"></div>
      <div class="place-content">
        <div class="loc">${localizedPlace(p).b.toUpperCase()} · ${localizedPlace(p).loc.toUpperCase()}</div>
        <h3>${localizedPlace(p).n}</h3>
        ${p.s?`<div class="sinh">${p.s}</div>`:''}
        <p>${localizedPlace(p).d}</p>
        <button class="place-link" type="button">${ui('explorePlace')} <span>→</span></button>
      </div>
    </article>`;
  }
  function render(){
    items=filtered();
    track.innerHTML=items.map(cardMarkup).join('');
    position=0;
    update();
  }
  // Handle activation at the viewport in capture phase. Pointer capture during
  // dragging can retarget clicks away from the track, so the viewport is the
  // reliable common ancestor for both card-body and button clicks.
  const viewport=document.querySelector('.places-viewport');
  viewport.addEventListener('click',e=>{
    if(suppressClick) { e.preventDefault(); e.stopImmediatePropagation(); suppressClick=false; return; }
    const slide=e.target.closest('.place-slide');
    if(!slide || !viewport.contains(slide)) return;
    const idx=Number(slide.dataset.idx);
    if(!Number.isInteger(idx) || !places[idx]) return;
    e.preventDefault();
    e.stopPropagation();
    showDetail(idx);
  },true);
  track.addEventListener('keydown',e=>{
    if(e.key!=='Enter' && e.key!==' ') return;
    const slide=e.target.closest('.place-slide');
    if(!slide || e.target.closest('button')) return;
    e.preventDefault();
    showDetail(Number(slide.dataset.idx));
  });
  function visibleCount(){ return window.innerWidth<=680?1:window.innerWidth<=1000?2:3; }
  function maxPosition(){ return Math.max(0,items.length-visibleCount()); }
  function baseTranslate(){
    const count=visibleCount();
    const gap=18;
    return -(position * ((100 / count)) + ((position * gap) * 100 / Math.max(1,track.parentElement.clientWidth)));
  }
  function applyTranslate(extraPx=0){
    const count=visibleCount();
    const gap=18;
    track.style.transform=`translate3d(calc(-${position} * (100% / ${count}) - ${position*gap}px + ${extraPx}px),0,0)`;
  }
  function update(){
    const count=visibleCount();
    const gap=18;
    const width=`calc((100% - ${(count-1)*gap}px) / ${count})`;
    [...track.children].forEach(c=>c.style.flex=`0 0 ${width}`);
    position=Math.min(position,maxPosition());
    applyTranslate();
    prev.disabled=position<=0; next.disabled=position>=maxPosition();
    if(progress){
      progress.innerHTML=items.map((_,i)=>`<span class="${i===position?'active':''}"></span>`).join('');
    }
  }
  function move(delta){
    position=Math.max(0,Math.min(maxPosition(),position+delta));
    update(); restart();
  }
  function restart(){
    clearInterval(timer);
    if(items.length>visibleCount()) timer=setInterval(()=>{
      position=position>=maxPosition()?0:position+1; update();
    },autoplay);
  }
  prev.addEventListener('click',()=>move(-1));
  next.addEventListener('click',()=>move(1));

  // Drag / swipe support for the sacred-place carousel.
  // Works with mouse, touch and pen, then snaps to the nearest card.
  viewport.style.cursor='grab';
  viewport.addEventListener('pointerdown',e=>{
    if(e.button!==undefined && e.button!==0) return;
    dragging=true; dragged=false; dragStartX=e.clientX; dragDelta=0;
    clearInterval(timer);
    viewport.style.cursor='grabbing';
    const transform=window.getComputedStyle(track).transform;
    dragStartTranslate=(transform && transform!=='none') ? new DOMMatrix(transform).m41 : 0;
    track.style.transition='none';
  });
  viewport.addEventListener('pointermove',e=>{
    if(!dragging) return;
    dragDelta=e.clientX-dragStartX;
    if(Math.abs(dragDelta)>6) dragged=true;
    if(dragged){
      e.preventDefault();
      track.style.transform=`translate3d(${dragStartTranslate+dragDelta}px,0,0)`;
    }
  },{passive:false});
  function finishDrag(e){
    if(!dragging) return;
    dragging=false;
    viewport.style.cursor='grab';
    track.style.transition='transform .65s cubic-bezier(.16,1,.3,1)';
    const threshold=Math.max(55,viewport.clientWidth*0.08);
    if(Math.abs(dragDelta)>=threshold){
      position += dragDelta<0 ? 1 : -1;
    }
    position=Math.max(0,Math.min(maxPosition(),position));
    update();
    if(dragged){
      suppressClick=true;
      setTimeout(()=>suppressClick=false,80);
    }
    restart();
  }
  viewport.addEventListener('pointerup',finishDrag);
  viewport.addEventListener('pointercancel',finishDrag);
  viewport.addEventListener('pointerleave',e=>{ if(dragging && e.buttons===0) finishDrag(e); });
  viewport.addEventListener('click',e=>{
    if(suppressClick){ e.preventDefault(); e.stopPropagation(); suppressClick=false; }
  },true);
  filters.forEach(f=>f.addEventListener('click',()=>{
    filters.forEach(x=>x.classList.remove('active'));
    f.classList.add('active');
    activeFilter=f.dataset.homeFilter;
    render(); restart();
  }));
  window.addEventListener('resize',update);
  window.refreshHomePlaces=()=>{render();restart();};
  render(); restart();
})();
document.getElementById('navSearchBtn').addEventListener('click',()=>{goToPage('listing');
  setTimeout(()=>document.getElementById('searchInput').focus(),350);});
document.getElementById('navMenuBtn').addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('open'));

// Apply the active religion filter and the visitor's current search term.
function doSearch(){
  const term=document.getElementById('searchInput').value.trim().toLowerCase();
  const active=document.querySelector('#filterPills .pill.active').dataset.filter;
  renderList(active,term);
}
document.getElementById('searchBtn').addEventListener('click',doSearch);
document.getElementById('searchInput').addEventListener('keyup',doSearch);
document.querySelectorAll('#filterPills .pill').forEach(p=>{
  p.addEventListener('click',()=>{
    document.querySelectorAll('#filterPills .pill').forEach(x=>x.classList.remove('active'));
    p.classList.add('active');doSearch();
  });
});

document.getElementById('saveBtn').addEventListener('click',function(){
  this.classList.toggle('saved');
  this.textContent=this.classList.contains('saved')?ui('saved'):ui('save');
  showToast(this.classList.contains('saved')?ui('saveAdd'):ui('saveRemove'));
});
document.getElementById('directionsBtn').addEventListener('click',function(){
  const title=document.getElementById('detailTitle').textContent;
  window.open('https://www.google.com/maps/search/'+encodeURIComponent(title+' Sri Lanka'),'_blank');
});
document.getElementById('fbShareBtn').addEventListener('click',()=>{
  window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'_blank');
});
document.getElementById('copyLinkBtn').addEventListener('click',function(){
  if(navigator.clipboard){navigator.clipboard.writeText(location.href).catch(()=>{});}
  showToast(ui('copied'));
});

let toastTimer;
// Show a short, accessible status message for save/share actions.
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}
// Observe off-screen reveal elements and animate each one only once.
function observeReveals(){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.15});
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
}
renderList();
observeReveals();

/* Homepage hero carousel */
// Initialize the landing-page image carousel and its controls.
(async function initHeroCarousel(){
  const carousel=document.getElementById('heroCarousel');
  if(!carousel) return;

  // Read numbered local images in order. Add slide-05.jpg, slide-06.jpg, etc.
  // The first missing number ends discovery, so no manifest or code edit is needed.
  const localSlides=[];
  for(let n=1;n<=30;n++){
    const filename=`assets/main-slider/slide-${String(n).padStart(2,'0')}.jpg`;
    const exists=await new Promise(resolve=>{
      const probe=new Image();
      probe.onload=()=>resolve(true);
      probe.onerror=()=>resolve(false);
      probe.src=filename;
    });
    if(!exists) break;
    localSlides.push(filename);
  }

  let existingSlides=[...carousel.querySelectorAll('.hero-slide')];
  const track=carousel.querySelector('.hero-track');
  const dotsHost=carousel.querySelector('#heroDots');
  // Keep existing slide markup and metadata, but let local files supply the images.
  localSlides.forEach((src,i)=>{
    if(i<existingSlides.length){
      const photo=existingSlides[i].querySelector('.hero-photo');
      if(photo) photo.style.backgroundImage=`url("${src}")`;
    }else if(track && existingSlides.length){
      const clone=existingSlides[0].cloneNode(true);
      clone.classList.remove('is-active');
      clone.dataset.index=String(i);
      const photo=clone.querySelector('.hero-photo');
      if(photo) photo.style.backgroundImage=`url("${src}")`;
      clone.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
      track.appendChild(clone);
      existingSlides.push(clone);
    }
  });
  // Rebuild pagination to match the actual number of available local images.
  if(dotsHost && localSlides.length){
    dotsHost.innerHTML='';
    localSlides.forEach((_,i)=>{
      const dot=document.createElement('button');
      dot.className='hero-dot'+(i===0?' active':'');
      dot.dataset.slide=String(i);
      dot.setAttribute('aria-label',`Go to slide ${i+1}`);
      dot.innerHTML='<span></span>';
      dotsHost.appendChild(dot);
    });
  }
  const counterTotal=carousel.querySelector('.hero-counter span');
  if(counterTotal && localSlides.length) counterTotal.textContent=`/ ${String(localSlides.length).padStart(2,'0')}`;
  const slides=[...carousel.querySelectorAll('.hero-slide')];
  const dots=[...carousel.querySelectorAll('.hero-dot')];
  const current=document.getElementById('heroCurrent');
  const prev=document.getElementById('heroPrev');
  const next=document.getElementById('heroNext');
  let index=0, timer=null, startX=0, moved=false;
  const duration=5000;
  if(!slides.length) return;

  function goTo(nextIndex, userAction=false){
    index=(nextIndex+slides.length)%slides.length;
    slides.forEach((slide,i)=>slide.classList.toggle('is-active',i===index));
    dots.forEach((dot,i)=>{
      dot.classList.toggle('active',i===index);
      dot.setAttribute('aria-current',i===index?'true':'false');
    });
    if(current) current.textContent=String(index+1).padStart(2,'0');
    resetTimer();
    if(userAction) carousel.focus({preventScroll:true});
  }
  function resetTimer(){
    clearTimeout(timer);
    timer=setTimeout(()=>goTo(index+1),duration);
  }
  prev?.addEventListener('click',()=>goTo(index-1,true));
  next?.addEventListener('click',()=>goTo(index+1,true));
  dots.forEach(dot=>dot.addEventListener('click',()=>goTo(+dot.dataset.slide,true)));
  carousel.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft') goTo(index-1,true);
    if(e.key==='ArrowRight') goTo(index+1,true);
  });
  // Keep autoplay running even while the pointer is over the carousel.
  carousel.addEventListener('mouseenter',resetTimer);
  carousel.addEventListener('focusin',resetTimer);
  carousel.addEventListener('pointerdown',e=>{startX=e.clientX;moved=false;clearTimeout(timer);});
  carousel.addEventListener('pointermove',e=>{if(Math.abs(e.clientX-startX)>12)moved=true;});
  carousel.addEventListener('pointerup',e=>{
    const dx=e.clientX-startX;
    if(Math.abs(dx)>55) goTo(index+(dx<0?1:-1),true);
    else resetTimer();
  });

  // Keep all hero CTAs consistent after slide markup is rendered.
  carousel.querySelectorAll('[id^="heroExploreBtn"]').forEach(btn=>btn.addEventListener('click',scrollToExploreSection));
  carousel.querySelectorAll('[id^="heroViewAllBtn"]').forEach(btn=>btn.addEventListener('click',()=>goToPage('listing')));
  goTo(0);
})();

/* Complete three-language interface: English, Sinhala and Tamil. */
/* Complete translations for shared site chrome and the religion explorer. */
const SIRASA_EXTRA_TEXT={
 en:{regionEyebrow:'EXPLORE BY RELIGION',regionTitle:'Different Paths',regionTitleStrong:'One Humanity',regionDescription:'Discover sacred places from different religions and experience the shared heritage of Sri Lanka.',regionCta:'Explore by Religion',regionSub:'Explore sacred places',galleryBack:'← Back to place',galleryEyebrow:'SIRASA RELIGIOUS · PHOTO COLLECTION',gallerySubtitle:'Explore the photo collection of this sacred place.',galleryToolbar:'PHOTO GALLERY',photoCount:'PHOTOS',detailBack:'Back',galleryViewAll:'View all',ariaRegion:'Explore sacred places by religion'},
 si:{regionEyebrow:'ආගම අනුව සොයා බලන්න',regionTitle:'විවිධ මාර්ග',regionTitleStrong:'එකම මනුෂ්‍යත්වයක්',regionDescription:'විවිධ ආගම්වල පූජනීය ස්ථාන සොයා ශ්‍රී ලංකාවේ පොදු උරුමය අත්විඳින්න.',regionCta:'ආගම අනුව සොයන්න',regionSub:'පූජනීය ස්ථාන සොයා බලන්න',galleryBack:'← ස්ථානය වෙත ආපසු',galleryEyebrow:'සිරස ආගමික · ඡායාරූප එකතුව',gallerySubtitle:'මෙම පූජනීය ස්ථානයේ ඡායාරූප එකතුව බලන්න.',galleryToolbar:'ඡායාරූප ගැලරිය',photoCount:'ඡායාරූප',detailBack:'ආපසු',galleryViewAll:'සියල්ල බලන්න',ariaRegion:'ආගම අනුව පූජනීය ස්ථාන සොයන්න'},
 ta:{regionEyebrow:'மதத்தின் அடிப்படையில் ஆராயுங்கள்',regionTitle:'வெவ்வேறு பாதைகள்',regionTitleStrong:'ஒரே மனிதநேயம்',regionDescription:'பல்வேறு மதங்களின் புனிதத் தலங்களை அறிந்து இலங்கையின் பகிரப்பட்ட பாரம்பரியத்தை அனுபவியுங்கள்.',regionCta:'மதத்தின் அடிப்படையில் ஆராய்க',regionSub:'புனிதத் தலங்களை ஆராயுங்கள்',galleryBack:'← தலத்திற்குத் திரும்பு',galleryEyebrow:'சிரசா மதம் · புகைப்படத் தொகுப்பு',gallerySubtitle:'இந்த புனிதத் தலத்தின் புகைப்படத் தொகுப்பைப் பாருங்கள்.',galleryToolbar:'புகைப்படத் தொகுப்பு',photoCount:'புகைப்படங்கள்',detailBack:'திரும்பு',galleryViewAll:'அனைத்தையும் காண்க',ariaRegion:'மதத்தின் அடிப்படையில் புனிதத் தலங்களை ஆராயுங்கள்'}
};
// Apply translations in place without reloading or losing the visitor's scroll position.
(function initLanguageSwitcher(){
 const buttons=[...document.querySelectorAll('#languageSwitcher .language-btn')];
 function setText(sel,val){const el=document.querySelector(sel);if(el)el.textContent=val;}
 function apply(lang){
  const savedScrollX=window.scrollX, savedScrollY=window.scrollY;
  currentLang=['si','en','ta'].includes(lang)?lang:'en';
  document.documentElement.lang=currentLang; const L=uiText[currentLang]||uiText.en; const T=window.SIRASA_CONTENT?.[currentLang]?.carousel; const H=window.SIRASA_HERO_COPY?.[currentLang];
  if(!T || !H) return;
  const X=SIRASA_EXTRA_TEXT[currentLang]||SIRASA_EXTRA_TEXT.en;
  const R=window.SIRASA_CONTENT?.[currentLang]?.regionExplore||window.SIRASA_CONTENT?.en?.regionExplore;
  document.documentElement.lang=currentLang;
  if(window.updatePersistentHeroLanguage)window.updatePersistentHeroLanguage(currentLang); if(window.updateRotatingHeroLanguage)window.updateRotatingHeroLanguage(currentLang); document.title=currentLang==='si'?'සිරස ආගමික — පූජනීය ස්ථාන':currentLang==='ta'?'சிரசா மதம் — புனித இடங்கள்':'Sirasa Religious — Sacred Places'; buttons.forEach(b=>b.classList.toggle('active',b.dataset.language===currentLang));
  document.querySelectorAll('#navlinks button,#mobileMenu button').forEach((b,i)=>b.textContent=i%2===0?T.navHome:T.navPlaces);
  document.querySelectorAll('[data-page="home"]').forEach(b=>b.textContent=L.home);
  document.querySelectorAll('[data-page="listing"]').forEach(b=>b.textContent=L.places);
   const heroPoints=H.fixedHero.points||[];
  const points=document.querySelectorAll('#heroFixedCopy .hero-title-points > span');heroPoints.forEach((v,i)=>{if(points[i])points[i].textContent=v;});
  document.querySelector('#heroFixedCopy .hero-title-points')?.setAttribute('aria-label',H.fixedHero.pointsLabel||'');
  const region=document.getElementById('regionExplore');
  if(region){
    const eyebrow=region.querySelector('.region-eyebrow');if(eyebrow){const mark=eyebrow.querySelector('span');eyebrow.textContent=R.eyebrow+' ';if(mark)eyebrow.prepend(mark);}
    const title=document.getElementById('regionExploreTitle');
    if(title){
      title.innerHTML=currentLang==='si'
        ? `<span class="region-title-si-line">${R.title}</span><span class="region-title-si-line region-title-si-strong">${R.titleStrong}</span>`
        : currentLang==='ta'
          ? `<span class="region-title-ta-line">${R.title}</span><span class="region-title-ta-line region-title-ta-strong">${R.titleStrong}</span>`
          : `${R.title}<br><strong>${R.titleStrong}</strong>`;
    }
    const desc=region.querySelector('.region-intro p');if(desc)desc.textContent=R.description;
    const cta=document.getElementById('regionExploreBtn');if(cta){const label=cta.querySelector('span:not(.region-cta-icon)');if(label)label.textContent=R.cta;}
    region.querySelectorAll('.region-card').forEach(card=>{
      const key=card.dataset.region;
      const cardTitle=card.querySelector('.region-card-title');if(cardTitle)cardTitle.textContent=R.cardTitles[key]||cardTitle.textContent;
      const sub=card.querySelector('.region-card-sub');if(sub)sub.textContent=R.cardSub;
      card.setAttribute('aria-label',`${R.cardTitles[key]||key} · ${R.cardSub}`);
    });
    region.querySelector('.region-cards')?.setAttribute('aria-label',R.ariaLabel);
  }
  const backLabel=document.getElementById('detailBackLabel');if(backLabel)backLabel.textContent=X.detailBack;
  const galleryBack=document.getElementById('galleryPageBack');if(galleryBack)galleryBack.textContent=X.galleryBack;
  const galleryEyebrow=document.querySelector('.gallery-page-eyebrow');if(galleryEyebrow)galleryEyebrow.textContent=X.galleryEyebrow;
  const gallerySubtitle=document.getElementById('galleryPageSubtitle');if(gallerySubtitle)gallerySubtitle.textContent=X.gallerySubtitle;
  const galleryToolbar=document.querySelector('.gallery-page-toolbar span:last-child');if(galleryToolbar)galleryToolbar.textContent=X.galleryToolbar;
  const galleryAll=document.getElementById('galleryViewAll');if(galleryAll){const label=galleryAll.childNodes[0];if(label&&label.nodeType===3)label.textContent=X.galleryViewAll+' ';}
  document.querySelectorAll('.hero-arrow.hero-prev').forEach(b=>b.setAttribute('aria-label',currentLang==='si'?'පෙර ස්ලයිඩය':currentLang==='ta'?'முந்தைய ஸ்லைடு':'Previous slide'));
  document.querySelectorAll('.hero-arrow.hero-next').forEach(b=>b.setAttribute('aria-label',currentLang==='si'?'ඊළඟ ස්ලයිඩය':currentLang==='ta'?'அடுத்த ஸ்லைடு':'Next slide'));
  document.querySelectorAll('.hero-slide').forEach((slide,i)=>{const c=H.slides[i];if(!c)return;const tag=slide.querySelector('.tag'),title=slide.querySelector('h1'),para=slide.querySelector('.hero-content p'),solid=slide.querySelector('.btn-solid'),ghost=slide.querySelector('.btn-ghost'),meta=slide.querySelector('.hero-meta');if(tag)tag.textContent=c.tag;if(title)title.innerHTML=c.titleLine1+'<br><em>'+c.titleLine2+'</em>';if(para)para.textContent=c.description;if(solid)solid.textContent=c.explore||L.explore;if(ghost)ghost.textContent=c.viewAll||L.viewAll;if(meta)meta.innerHTML='<span>'+c.place+'</span><span>·</span><span>'+c.region+'</span>';});
  setText('.sacred-head .eyebrow',T.sectionEyebrow);setText('.sacred-head h2',T.sectionTitle);setText('.sacred-head p',T.sectionDescription);
  document.querySelectorAll('#homeFilters .pill').forEach((b,i)=>b.textContent=[L.all,L.buddhism,L.hinduism,L.islam,L.christianity][i]);
  setText('#bentoViewAllBtn',L.viewAll+' →');
  setText('#page-listing .banner h1',L.listingTitle);setText('#page-listing .banner p',L.listingSub);
  const input=document.getElementById('searchInput');if(input)input.placeholder=L.search;setText('#searchBtn',L.searchBtn);
  document.querySelectorAll('#filterPills .pill').forEach((b,i)=>b.textContent=[L.all,L.buddhism,L.hinduism,L.islam,L.christianity][i]);
  setText('.gallery-title',L.gallery);const side=document.querySelectorAll('.side-card h4');if(side[0])side[0].textContent=L.visitor;if(side[1])side[1].textContent=L.share;
  const labels=document.querySelectorAll('.info-row');['district','founded','religion','town'].forEach((k,i)=>{const label=labels[i]?.querySelector('span:first-child');if(label)label.textContent=L[k];});
  setText('#saveBtn',L.save);setText('#directionsBtn',L.directions);setText('#fbShareBtn','Facebook');setText('#copyLinkBtn',L.copy);
  document.querySelectorAll('footer').forEach(f=>{const last=f.lastChild;if(last)last.textContent='\n'+L.footer;});
  renderList(document.querySelector('#filterPills .pill.active')?.dataset.filter||'all',input?.value.trim().toLowerCase()||'');
  if(window.refreshHomePlaces)window.refreshHomePlaces();
  if(!document.getElementById('page-detail').classList.contains('hidden')){const idx=places.findIndex(p=>p.n===document.getElementById('detailTitle').dataset.placeName);if(idx>=0)showDetail(idx,false,true);}
  localStorage.setItem('sirasaLanguage',currentLang);
  // Language changes update content in place; keep the visitor at the same viewport position.
  window.scrollTo(savedScrollX,savedScrollY);
  requestAnimationFrame(()=>window.scrollTo(savedScrollX,savedScrollY));
 }
 buttons.forEach(b=>b.addEventListener('click',e=>{e.preventDefault();apply(b.dataset.language);}));
 window.setSirasaLanguage=apply;
 apply('en'); // Always start in English on a fresh page load.
})();

// Restore a shared place URL after the language interface has initialized.
if(location.hash.startsWith('#place/')) restorePlaceFromUrl();

/* Per-place, manually managed image galleries.
   Add files under assets/places/<place-folder>/ and list each filename below. */
// Create each place's image carousel and the full PHOTO COLLECTION grid from the paths below.
(function initDetailGallery(){
  const root=document.getElementById('detailGallery');
  if(!root) return;
  const track=root.querySelector('.gallery-track');
  const dots=root.querySelector('.gallery-dots');
  const prev=root.querySelector('.gallery-prev');
  const next=root.querySelector('.gallery-next');
  const galleryImages=[
    ['assets/places/sagama/image-01.jpg', 'assets/places/sagama/image-02.jpg', 'assets/places/sagama/image-03.jpg', 'assets/places/sagama/image-04.jpg', 'assets/places/sagama/image-05.jpg', 'assets/places/sagama/image-06.jpg'],
    ['assets/places/seruwila/image-01.jpg', 'assets/places/seruwila/image-02.jpg', 'assets/places/seruwila/image-03.jpg', 'assets/places/seruwila/image-04.jpg', 'assets/places/seruwila/image-05.jpg', 'assets/places/seruwila/image-06.jpg'],
    ['assets/places/sankapala/image-01.jpg', 'assets/places/sankapala/image-02.jpg', 'assets/places/sankapala/image-03.jpg', 'assets/places/sankapala/image-04.jpg', 'assets/places/sankapala/image-05.jpg', 'assets/places/sankapala/image-06.jpg'],
    ['assets/places/olaboduwa/image-01.jpg', 'assets/places/olaboduwa/image-02.jpg', 'assets/places/olaboduwa/image-03.jpg', 'assets/places/olaboduwa/image-04.jpg', 'assets/places/olaboduwa/image-05.jpg', 'assets/places/olaboduwa/image-06.jpg'],
    ['assets/places/dambadeniya/image-01.jpg', 'assets/places/dambadeniya/image-02.jpg', 'assets/places/dambadeniya/image-03.jpg', 'assets/places/dambadeniya/image-04.jpg', 'assets/places/dambadeniya/image-05.jpg', 'assets/places/dambadeniya/image-06.jpg']
  ];
  let active=0, slides=[], currentPlace=0;
  function go(i){
    if(!slides.length)return;
    active=(i+slides.length)%slides.length;
    const perView=window.matchMedia('(min-width: 681px)').matches?3:1;
    const slide=slides[0];
    const gap=parseFloat(getComputedStyle(track).gap)||0;
    const step=slide ? slide.getBoundingClientRect().width+gap : 0;
    const maxOffset=Math.max(0,slides.length-perView);
    const visualIndex=Math.min(active,maxOffset);
    track.style.transform=`translateX(-${visualIndex*step}px)`;
    [...dots.children].forEach((d,j)=>{
      d.classList.toggle('active',j===active);
      d.setAttribute('aria-current',j===active?'true':'false');
    });
  }
  function setPlace(idx){
    currentPlace=idx;
    const paths=galleryImages[idx]||galleryImages[0];
    window.detailPhotoPaths=paths;
    window.photoCollectionTitle=localizedPlace(places[idx]).n;
    // Use this place's first gallery photo as the detail-page hero image.
    const heroImage=document.querySelector('#page-detail .dh-bg');
    if(heroImage && paths[0]){
      heroImage.style.backgroundImage=`url("${paths[0]}")`;
      heroImage.setAttribute('data-place-image', paths[0]);
    }
    track.innerHTML='';dots.innerHTML='';
    paths.forEach((path,i)=>{
      const slide=document.createElement('div');
      slide.className='g gallery-slide';
      const img=document.createElement('img');
      img.src=path;img.alt=`Place gallery image ${i+1}`;img.loading=i===0?'eager':'lazy';
      slide.appendChild(img);track.appendChild(slide);
      const dot=document.createElement('button');
      dot.type='button';dot.className='gallery-dot';
      dot.setAttribute('aria-label',`Show image ${i+1}`);
      dot.addEventListener('click',()=>go(i));dots.appendChild(dot);
    });
    slides=[...track.children];
    root.hidden=slides.length===0;
    go(0);
  }
  prev.addEventListener('click',()=>go(active-1));
  next.addEventListener('click',()=>go(active+1));
  let startX=null;
  track.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;},{passive:true});
  track.addEventListener('touchend',e=>{
    if(startX===null)return;
    const delta=e.changedTouches[0].clientX-startX;
    if(Math.abs(delta)>45)go(active+(delta<0?1:-1));
    startX=null;
  },{passive:true});
  window.setDetailGalleryPlace=setPlace;
  window.openPlaceGallery=()=>{
    const p=places[currentPlace], q=localizedPlace(p), paths=galleryImages[currentPlace]||[];
    window.photoCollectionPaths=paths;
    window.photoCollectionTitle=q.n;
    document.getElementById('galleryPageTitle').textContent=q.n;
    document.getElementById('galleryPageSubtitle').textContent=(SIRASA_EXTRA_TEXT[currentLang]||SIRASA_EXTRA_TEXT.en).gallerySubtitle;
    document.getElementById('galleryImageCount').textContent=`${paths.length} ${(SIRASA_EXTRA_TEXT[currentLang]||SIRASA_EXTRA_TEXT.en).photoCount}`;
    const grid=document.getElementById('galleryAllImages'); grid.innerHTML='';
    paths.forEach((path,i)=>{
      const card=document.createElement('figure');card.className='gallery-all-card';
      const img=document.createElement('img');img.src=path;img.alt=`${q.n} gallery image ${i+1}`;img.loading='lazy';
      const cap=document.createElement('figcaption');cap.textContent=`${q.n} · ${String(i+1).padStart(2,'0')}`;
      card.append(img,cap);
      card.style.setProperty('--gallery-item-index',i);
      grid.appendChild(card);
    });
    goToPage('gallery');
    grid.classList.remove('gallery-motion-ready');
    void grid.offsetWidth;
    grid.classList.add('gallery-motion-ready');
  };
  setPlace(0);
})();



/* Full-screen photo viewer for both the detail carousel and PHOTO COLLECTION page. */
// Shared fullscreen viewer for photos opened from either gallery surface.
(function initPhotoLightbox(){
  const modal=document.getElementById('photoLightbox');
  if(!modal)return;
  const image=document.getElementById('photoLightboxImage');
  const caption=document.getElementById('photoLightboxCaption');
  const count=document.getElementById('photoLightboxCount');
  const closeBtn=document.getElementById('photoLightboxClose');
  const prevBtn=document.getElementById('photoLightboxPrev');
  const nextBtn=document.getElementById('photoLightboxNext');
  let paths=[],index=0,title='Photo collection',lastFocus=null,touchX=null;
  function render(){
    if(!paths.length)return;
    index=(index+paths.length)%paths.length;
    image.classList.remove('photo-changing');
    void image.offsetWidth;
    image.src=paths[index];image.alt=`${title} photo ${index+1}`;
    image.classList.add('photo-changing');
    caption.textContent=`${title} · ${String(index+1).padStart(2,'0')}`;
    count.textContent=`${index+1} / ${paths.length}`;
    const multiple=paths.length>1;
    prevBtn.hidden=!multiple;nextBtn.hidden=!multiple;
  }
  window.openPhotoLightbox=(items,start=0,placeTitle='Photo collection')=>{
    if(!Array.isArray(items)||!items.length)return;
    paths=items;index=start;title=placeTitle;lastFocus=document.activeElement;
    render();modal.classList.add('open');modal.setAttribute('aria-hidden','false');
    document.body.classList.add('photo-lightbox-open');
    closeBtn.focus();
  };
  function close(){
    modal.classList.remove('open');modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('photo-lightbox-open');image.removeAttribute('src');
    if(lastFocus&&typeof lastFocus.focus==='function')lastFocus.focus();
  }
  closeBtn.addEventListener('click',close);
  prevBtn.addEventListener('click',()=>{index--;render();});
  nextBtn.addEventListener('click',()=>{index++;render();});
  modal.addEventListener('click',e=>{if(e.target===modal)close();});
  document.addEventListener('keydown',e=>{
    if(!modal.classList.contains('open'))return;
    if(e.key==='Escape'){e.preventDefault();close();}
    else if(e.key==='ArrowLeft'){e.preventDefault();index--;render();}
    else if(e.key==='ArrowRight'){e.preventDefault();index++;render();}
  });
  modal.addEventListener('touchstart',e=>{touchX=e.touches[0]?.clientX??null;},{passive:true});
  modal.addEventListener('touchend',e=>{
    if(touchX===null)return;
    const dx=e.changedTouches[0].clientX-touchX;
    if(Math.abs(dx)>45){index+=dx<0?1:-1;render();}
    touchX=null;
  },{passive:true});
  document.getElementById('galleryAllImages')?.addEventListener('click',e=>{
    const img=e.target.closest('img');if(!img)return;
    const cards=[...document.querySelectorAll('#galleryAllImages img')];
    const i=cards.indexOf(img);
    window.openPhotoLightbox(window.photoCollectionPaths||cards.map(x=>x.src),i,window.photoCollectionTitle||document.getElementById('galleryPageTitle')?.textContent||'Photo collection');
  });
  document.getElementById('detailGallery')?.addEventListener('click',e=>{
    const img=e.target.closest('img');if(!img)return;
    const slide=img.closest('.gallery-slide');
    const slides=[...document.querySelectorAll('#detailGallery .gallery-slide')];
    const i=slides.indexOf(slide);
    window.openPhotoLightbox(window.detailPhotoPaths||slides.map(s=>s.querySelector('img')?.src).filter(Boolean),i,window.photoCollectionTitle||'Photo collection');
  });
})();

/* Hero Explore Places buttons scroll to the second homepage section. */
function scrollToExploreSection(){
  const target=document.getElementById('regionExplore');
  if(!target)return;
  target.scrollIntoView({behavior:'smooth',block:'start'});
}

/* Explore-by-religion actions: route each card to the matching places filter. */
// Connect the religion explorer cards to the matching place filters.
(function initRegionExplore(){
  const root=document.getElementById('regionExplore');
  if(!root)return;
  const mainCta=document.getElementById('regionExploreBtn');
  mainCta?.addEventListener('click',()=>{
    const target=document.getElementById('sacredPlaces')||document.querySelector('.sacred-section');
    target?.scrollIntoView({behavior:'smooth',block:'start'});
  });
  root.querySelectorAll('[data-region]').forEach(card=>{
    card.addEventListener('click',()=>{
      const religion=card.dataset.region;
      const homeFilter=document.querySelector(`#homeFilters [data-home-filter="${religion}"]`);
      const listFilter=document.querySelector(`#filterPills [data-filter="${religion}"]`);
      if(homeFilter){
        homeFilter.click();
        document.querySelector('.sacred-section')?.scrollIntoView({behavior:'smooth',block:'start'});
      }else if(listFilter){
        goToPage('listing');
        listFilter.click();
        window.scrollTo({top:0,behavior:'smooth'});
      }
    });
  });
})();


/* Stable landing hero copy, CTAs, and optional local main-slider images. */
// Set up the fixed hero CTAs, localized copy, and optional local background images.
(function initPersistentHero(){
  const carousel=document.getElementById('heroCarousel');
  if(!carousel)return;
  const explore=document.getElementById('heroFixedExploreBtn');
  const viewAll=document.getElementById('heroFixedViewAllBtn');
  explore?.addEventListener('click',scrollToExploreSection);
  viewAll?.addEventListener('click',()=>goToPage('listing'));
  window.updatePersistentHeroLanguage=function(lang){
    const copy=window.SIRASA_HERO_COPY?.[lang]?.fixedHero||window.SIRASA_HERO_COPY?.en?.fixedHero;
    if(!copy)return;
    const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value;};
    set('heroFixedEyebrow',copy.eyebrow);set('heroFixedTitle',copy.title);
    set('heroFixedDescription',copy.description);set('heroFixedExploreBtn',copy.explore);set('heroFixedViewAllBtn',copy.view);
  };
  window.updatePersistentHeroLanguage(document.documentElement.lang||'en');
  // Add images named slide-01.jpg ... slide-04.jpg to assets/main-slider/.
  // Existing remote images remain as fallback when a local file is not present.
  carousel.querySelectorAll('.hero-photo[data-local-image]').forEach(photo=>{
    const path=photo.dataset.localImage;
    const probe=new Image();
    probe.onload=()=>{photo.style.backgroundImage=`url("${path}")`;};
    probe.onerror=()=>{};
    probe.src=path;
  });
})();

/* Rotate the fixed hero headline through localized editorial messages. */
(()=>{
 const title=document.getElementById('heroFixedTitle');
 const desc=document.getElementById('heroFixedDescription');
 if(!title||!desc)return;
   const getMessages=(language)=>window.SIRASA_HERO_COPY?.[language]?.rotatingMessages||window.SIRASA_HERO_COPY?.en?.rotatingMessages||[];
 let lang=document.documentElement.lang||'en';
 // Use the manually maintained language files. The old code referenced
 // an undefined messagesByLanguage variable, stopping the animation.
 const getSafeMessages=(language)=>{
  const list=getMessages(language);
  return Array.isArray(list)&&list.length?list:getMessages('en');
 };
 let messages=getSafeMessages(lang);
 let index=0;
 const show=(m)=>{
  if(!m)return;
  title.innerHTML='<span class="title-line title-line-one">'+m.a+'</span><span class="title-line title-line-two"><span class="accent">'+m.b+'</span></span>';
  title.classList.remove('hero-line-progress','hero-message-in','hero-message-out');
  desc.classList.remove('hero-message-out');
  void title.offsetWidth;
  title.classList.add('hero-line-progress','hero-message-in');
  desc.textContent=m.d||'';
 };
 window.updateRotatingHeroLanguage=function(nextLang){
  lang=['en','si','ta'].includes(nextLang)?nextLang:'en';
  messages=getSafeMessages(lang);
  index=0;
  show(messages[index]);
 };
 window.updateRotatingHeroLanguage(lang);
 setInterval(()=>{
  title.classList.remove('hero-message-in');title.classList.add('hero-message-out');desc.classList.add('hero-message-out');
  setTimeout(()=>{index=(index+1)%messages.length;show(messages[index]);},180);
 },5400);
})();
