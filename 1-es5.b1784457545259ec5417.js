(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{gIcY:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return l})),i("mrSG");var n=i("CcnG"),r=(i("ZYjt"),i("VNr4"),i("0/uQ"),i("67Y/"),new n.p("NgValueAccessor")),s=function(){function t(){this._accessors=[]}return t.prototype.add=function(t,e){this._accessors.push([t,e])},t.prototype.remove=function(t){for(var e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)},t.prototype.select=function(t){var e=this;this._accessors.forEach((function(i){e._isSameGroup(i,t)&&i[1]!==t&&i[1].fireUncheck(t.value)}))},t.prototype._isSameGroup=function(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name},t}(),o=new n.p("NgFormSelectorWarning"),a=function(){return function(){}}(),l=function(){function t(){}var e;return e=t,t.withConfig=function(t){return{ngModule:e,providers:[{provide:o,useValue:t.warnOnDeprecatedNgFormSelector}]}},t}()},nPnQ:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("6blF"),r=i("VNr4"),s=i("CcnG"),o=i("t/Na"),a=i("A7o+"),l=function(){function t(t,e){this.https=t,this.translate=e,this.savedFilms=[],this.seenFilms=[],this.favoriteFilms=[],this.key="?api_key=bf0c6f557b4f024d829885a7e35e552d",this.currentLang=this.initLanguageStorage(),this.currentLangArr="&language="+this.currentLang,this.translate.setDefaultLang(this.currentLang)}return t.prototype.getDefaultFilm=function(){return this.https.get("https://api.themoviedb.org/3/movie/27205"+this.key+this.currentLangArr)},t.prototype.getFilmDetails=function(t){return this.https.get("https://api.themoviedb.org/3/movie/"+t+this.key+this.currentLangArr)},t.prototype.getFilmCredits=function(t){return this.https.get("https://api.themoviedb.org/3/movie/"+t+"/credits"+this.key+this.currentLangArr)},t.prototype.getSimilarFilms=function(t){return this.https.get("https://api.themoviedb.org/3/movie/"+t+"/similar"+this.key+this.currentLangArr)},t.prototype.getFilmImages=function(t){return this.https.get("https://api.themoviedb.org/3/movie/"+t+"/images"+this.key+this.currentLangArr)},t.prototype.getActorDetails=function(t){return this.https.get("https://api.themoviedb.org/3/person/"+t+this.key+this.currentLangArr)},t.prototype.getActorImages=function(t){return this.https.get("https://api.themoviedb.org/3/person/"+t+"/images"+this.key+this.currentLangArr)},t.prototype.getActorFilms=function(t){return this.https.get("https://api.themoviedb.org/3/person/"+t+"/movie_credits"+this.key+this.currentLangArr)},t.prototype.getRandomFilm=function(t,e,i,r,s,o,a,l){var u=this;void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=null),void 0===r&&(r=null),void 0===s&&(s=null),void 0===o&&(o=null),void 0===a&&(a=null),void 0===l&&(l=null);var c=null===t?"":"&primary_release_date.gte="+t+"-01-01",h=null===e?"":"&primary_release_date.lte="+e+"-12-01",g=null===i?"":"&vote_average.gte="+i,p=null===r?"":"&vote_average.lte="+r,f=null!==i&&parseInt(i.toString())>=6?"&vote_count.gte=50":"",m=null===s?"":"&certification.gte="+s,v=null===o?"":"&certification.lte="+o,d="NC-17"===o,F="&with_genres=";null===a?F="":a.forEach((function(t,e){F+=t,e!=a.length-1&&(F+=",")}));var w="https://api.themoviedb.org/3/discover/movie"+this.key+F+c+h+f+g+p+"&certification_country=US"+m+v+"&include_adult="+d+(null===l?"":"&with_original_language="+l);return new n.a((function(t){u.https.get(w).subscribe((function(e){var i=Math.floor(Math.random()*e.total_pages)+1;u.https.get(w+"&page="+i).subscribe((function(e){if(0===e.results.length)t.next(null);else{var i=Math.floor(Math.random()*e.results.length)+1-1;u.https.get("https://api.themoviedb.org/3/movie/"+e.results[i].id+u.key+u.currentLangArr).subscribe((function(e){t.next(e)}))}}))}))}))},t.prototype.getFilmsResults=function(t,e,i,r,s,o){var a=this;void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=null),void 0===r&&(r=null),void 0===s&&(s=!1),void 0===o&&(o=null);var l=null===t?"":"&page="+t,u=null===e?"":"&primary_release_date.gte="+e+"-01-01",c=null===i?"":"&primary_release_date.lte="+i+"-12-01",h="&include_adult="+s,g="&with_genres=";null===r?g="":r.forEach((function(t,e){g+=t,e!=r.length-1&&(g+=",")}));var p="https://api.themoviedb.org/3/discover/movie"+this.key+l+g+u+c+h+(null===o?"":"&sort_by="+o)+this.currentLangArr;return new n.a((function(t){a.https.get(p).subscribe((function(e){t.next(e)}))}))},t.prototype.searchFilms=function(t){var e=this,i="https://api.themoviedb.org/3/search/movie"+this.key+"&query="+t;return new n.a((function(t){e.https.get(i).subscribe((function(e){t.next(e)}))}))},t.prototype.getGenresList=function(){return this.https.get("https://api.themoviedb.org/3/genre/movie/list"+this.key+this.currentLangArr)},t.prototype.initSeenStatesStorage=function(){null==window.localStorage.savedFilms?window:this.savedFilms=JSON.parse(window.localStorage.savedFilms),null==window.localStorage.seenFilms?window:this.seenFilms=JSON.parse(window.localStorage.seenFilms),null==window.localStorage.favoriteFilms?window:this.favoriteFilms=JSON.parse(window.localStorage.favoriteFilms)},t.prototype.updateSeenStateStorage=function(){window.localStorage.savedFilms=JSON.stringify(this.savedFilms),window.localStorage.seenFilms=JSON.stringify(this.seenFilms),window.localStorage.favoriteFilms=JSON.stringify(this.favoriteFilms)},t.prototype.checkSeenState=function(t){var e=this;return new n.a((function(i){var n;n=e.savedFilms.includes(t)?1:e.seenFilms.includes(t)?2:e.favoriteFilms.includes(t)?3:0,i.next(n)}))},t.prototype.setState=function(t,e){switch(t){case 0:this.savedFilms=this.savedFilms.filter((function(t){return t!==e})),this.seenFilms=this.seenFilms.filter((function(t){return t!==e})),this.favoriteFilms=this.favoriteFilms.filter((function(t){return t!==e}));break;case 1:this.savedFilms.push(e),this.seenFilms=this.seenFilms.filter((function(t){return t!==e})),this.favoriteFilms=this.favoriteFilms.filter((function(t){return t!==e}));break;case 2:this.savedFilms=this.savedFilms.filter((function(t){return t!==e})),this.seenFilms.push(e),this.favoriteFilms=this.favoriteFilms.filter((function(t){return t!==e}));break;case 3:this.savedFilms=this.savedFilms.filter((function(t){return t!==e})),this.seenFilms=this.seenFilms.filter((function(t){return t!==e})),this.favoriteFilms.push(e)}console.log(this.seenFilms),this.updateSeenStateStorage()},t.prototype.getSavedFilmsLists=function(t){var e,i=this;switch(t){case 0:e=this.savedFilms;break;case 1:e=this.seenFilms;break;case 2:e=this.favoriteFilms}return new n.a((function(t){if(e.length>0){for(var n=[],s=[],o=0,a=e;o<a.length;o++)s.push(i.getFilmDetails(a[o]));Object(r.a)(s).subscribe((function(e){for(var i=0,r=e.entries();i<r.length;i++)n.push(r[i][1]);t.next(n)}))}else t.next([])}))},t.prototype.initLanguageStorage=function(){return void 0===window.localStorage.lang&&(window.localStorage.lang="es-ES"),window.localStorage.lang},t.prototype.getLanguage=function(){switch(this.currentLang){case"en-US":return 0;case"es-ES":return 1}},t.prototype.setLanguage=function(t){window.localStorage.lang=t,this.currentLang=t,this.currentLangArr="&language="+this.currentLang},t.ngInjectableDef=s.Qb({factory:function(){return new t(s.Rb(o.c),s.Rb(a.k))},token:t,providedIn:"root"}),t}()}}]);