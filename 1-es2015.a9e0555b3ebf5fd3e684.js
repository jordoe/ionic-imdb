(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{nPnQ:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s("HDdC"),r=s("cp0P"),n=s("8Y7J"),a=s("IheW"),l=s("TSSN");let o=(()=>{class t{constructor(t,e){this.https=t,this.translate=e,this.savedFilms=[],this.seenFilms=[],this.favoriteFilms=[],this.key="?api_key=bf0c6f557b4f024d829885a7e35e552d",this.currentLang=this.initLanguageStorage(),this.currentLangArr="&language="+this.currentLang,this.translate.setDefaultLang(this.currentLang)}getDefaultFilm(){return this.https.get("https://api.themoviedb.org/3/movie/27205"+this.key+this.currentLangArr)}getFilmDetails(t){return this.https.get("https://api.themoviedb.org/3/movie/"+t+this.key+this.currentLangArr)}getFilmCredits(t){return this.https.get("https://api.themoviedb.org/3/movie/"+t+"/credits"+this.key+this.currentLangArr)}getSimilarFilms(t){return this.https.get("https://api.themoviedb.org/3/movie/"+t+"/similar"+this.key+this.currentLangArr)}getFilmImages(t){return this.https.get("https://api.themoviedb.org/3/movie/"+t+"/images"+this.key+this.currentLangArr)}getActorDetails(t){return this.https.get("https://api.themoviedb.org/3/person/"+t+this.key+this.currentLangArr)}getActorImages(t){return this.https.get("https://api.themoviedb.org/3/person/"+t+"/images"+this.key+this.currentLangArr)}getActorFilms(t){return this.https.get("https://api.themoviedb.org/3/person/"+t+"/movie_credits"+this.key+this.currentLangArr)}getRandomFilm(t=null,e=null,s=null,r=null,n=null,a=null,l=null,o=null){const h=null===t?"":"&primary_release_date.gte="+t+"-01-01",c=null===e?"":"&primary_release_date.lte="+e+"-12-01",u=null===s?"":"&vote_average.gte="+s,g=null===r?"":"&vote_average.lte="+r,m=null!==s&&parseInt(s.toString())>=6?"&vote_count.gte=50":"",d=null===n?"":"&certification.gte="+n,p=null===a?"":"&certification.lte="+a,v="NC-17"===a;let f="&with_genres=";null===l?f="":l.forEach((t,e)=>{f+=t,e!=l.length-1&&(f+=",")});const F="https://api.themoviedb.org/3/discover/movie"+this.key+f+h+c+m+u+g+"&certification_country=US"+d+p+"&include_adult="+v+(null===o?"":"&with_original_language="+o);return new i.a(t=>{this.https.get(F).subscribe(e=>{const s=Math.floor(Math.random()*e.total_pages)+1;this.https.get(F+"&page="+s).subscribe(e=>{if(0===e.results.length)t.next(null);else{const s=Math.floor(Math.random()*e.results.length)+1-1;this.https.get("https://api.themoviedb.org/3/movie/"+e.results[s].id+this.key+this.currentLangArr).subscribe(e=>{t.next(e)})}})})})}getFilmsResults(t=null,e=null,s=null,r=null,n=!1,a=null){const l=null===t?"":"&page="+t,o=null===e?"":"&primary_release_date.gte="+e+"-01-01",h=null===s?"":"&primary_release_date.lte="+s+"-12-01",c="&include_adult="+n;let u="&with_genres=";null===r?u="":r.forEach((t,e)=>{u+=t,e!=r.length-1&&(u+=",")});const g="https://api.themoviedb.org/3/discover/movie"+this.key+l+u+o+h+c+(null===a?"":"&sort_by="+a)+this.currentLangArr;return new i.a(t=>{this.https.get(g).subscribe(e=>{t.next(e)})})}searchFilms(t){const e="https://api.themoviedb.org/3/search/movie"+this.key+"&query="+t;return new i.a(t=>{this.https.get(e).subscribe(e=>{t.next(e)})})}getGenresList(){return this.https.get("https://api.themoviedb.org/3/genre/movie/list"+this.key+this.currentLangArr)}initSeenStatesStorage(){null==window.localStorage.savedFilms?window:this.savedFilms=JSON.parse(window.localStorage.savedFilms),null==window.localStorage.seenFilms?window:this.seenFilms=JSON.parse(window.localStorage.seenFilms),null==window.localStorage.favoriteFilms?window:this.favoriteFilms=JSON.parse(window.localStorage.favoriteFilms)}updateSeenStateStorage(){window.localStorage.savedFilms=JSON.stringify(this.savedFilms),window.localStorage.seenFilms=JSON.stringify(this.seenFilms),window.localStorage.favoriteFilms=JSON.stringify(this.favoriteFilms)}checkSeenState(t){return new i.a(e=>{let s;s=this.savedFilms.includes(t)?1:this.seenFilms.includes(t)?2:this.favoriteFilms.includes(t)?3:0,e.next(s)})}setState(t,e){switch(t){case 0:this.savedFilms=this.savedFilms.filter(t=>t!==e),this.seenFilms=this.seenFilms.filter(t=>t!==e),this.favoriteFilms=this.favoriteFilms.filter(t=>t!==e);break;case 1:this.savedFilms.push(e),this.seenFilms=this.seenFilms.filter(t=>t!==e),this.favoriteFilms=this.favoriteFilms.filter(t=>t!==e);break;case 2:this.savedFilms=this.savedFilms.filter(t=>t!==e),this.seenFilms.push(e),this.favoriteFilms=this.favoriteFilms.filter(t=>t!==e);break;case 3:this.savedFilms=this.savedFilms.filter(t=>t!==e),this.seenFilms=this.seenFilms.filter(t=>t!==e),this.favoriteFilms.push(e)}console.log(this.seenFilms),this.updateSeenStateStorage()}getSavedFilmsLists(t){let e;switch(t){case 0:e=this.savedFilms;break;case 1:e=this.seenFilms;break;case 2:e=this.favoriteFilms}return new i.a(t=>{if(e.length>0){let s=[],i=[];for(const t of e)i.push(this.getFilmDetails(t));Object(r.a)(i).subscribe(e=>{for(const[t,i]of e.entries())s.push(i);t.next(s)})}else t.next([])})}initLanguageStorage(){return void 0===window.localStorage.lang&&(window.localStorage.lang="es-ES"),window.localStorage.lang}getLanguage(){switch(this.currentLang){case"en-US":return 0;case"es-ES":return 1}}setLanguage(t){window.localStorage.lang=t,this.currentLang=t,this.currentLangArr="&language="+this.currentLang}}return t.ngInjectableDef=n.Ob({factory:function(){return new t(n.Pb(a.c),n.Pb(l.k))},token:t,providedIn:"root"}),t})()},s7LF:function(t,e,s){"use strict";s.d(e,"c",(function(){return l})),s.d(e,"d",(function(){return n})),s.d(e,"b",(function(){return r})),s.d(e,"a",(function(){return o}));var i=s("8Y7J");s("cUpR"),s("cp0P"),s("Cfvw"),s("lJxs");const r=new i.o("NgValueAccessor");let n=(()=>class{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}})();const a=new i.o("NgFormSelectorWarning");let l=(()=>class{})(),o=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:a,useValue:e.warnOnDeprecatedNgFormSelector}]}}}return t})()}}]);