(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Fmu7:function(l,n,t){"use strict";t.r(n);var i=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),e=t("oBZk"),r=t("ZZ/e"),c=t("ZYCi"),a=t("Ip0R"),s=t("nPnQ"),b=function(){function l(l,n){this.route=l,this.filmsService=n,this.titleSticky=!1}return l.prototype.ngOnInit=function(){var l=this;this.route.paramMap.subscribe((function(n){l.filmId=n.get("id"),l.filmsService.getFilmDetails(l.filmId).subscribe((function(n){l.film=n,l.filmGenres=n.genres.map((function(l){return l.name})),l.backdropUrl=null!==l.film.backdrop_path?"https://image.tmdb.org/t/p/original"+l.film.backdrop_path:null})),l.filmsService.getFilmCredits(l.filmId).subscribe((function(n){l.cast=n.cast,n.crew.forEach((function(n){"Directing"===n.department&&"Director"===n.job&&(l.director=n)}))})),l.filmsService.getSimilarFilms(l.filmId).subscribe((function(n){l.similarFilms=n.results}))}))},l.prototype.getActorImageUrl=function(l){return"https://image.tmdb.org/t/p/original"+this.cast[l].profile_path},l.prototype.hasActorImage=function(l){return null!==this.cast[l].profile_path},l.prototype.getSimilarFilmPoster=function(l){return"https://image.tmdb.org/t/p/original"+this.similarFilms[l].poster_path},l}(),m=i.rb({encapsulation:0,styles:[[".all-container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;background:-webkit-gradient(linear,left bottom,left top,from(black),color-stop(75%,#252629));background:linear-gradient(0deg,#000 0,#252629 75%)}.backdrop-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:0}.backdrop-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;-webkit-transform:translateY(-98%);transform:translateY(-98%);background:#202023;background:-webkit-gradient(linear,left bottom,left top,color-stop(20%,#252629),to(rgba(32,32,35,0)));background:linear-gradient(0deg,#252629 20%,rgba(32,32,35,0) 100%);height:2%;width:100%}.details-container[_ngcontent-%COMP%]{position:relative;padding:0 2rem;-webkit-box-flex:1;flex-grow:1;z-index:1;background:-webkit-gradient(linear,left bottom,left top,from(black),color-stop(96%,#252629));background:linear-gradient(0deg,#000 0,#252629 96%)}.back[_ngcontent-%COMP%]{height:100%}.back__icon[_ngcontent-%COMP%]{height:100%;width:2rem}.title[_ngcontent-%COMP%]{margin:0}.title-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding-top:.5rem;padding-bottom:1rem;margin:0 -2rem;padding-left:2rem;position:-webkit-sticky;position:sticky;top:0;background-color:#252629}.title-container--sticky-shadow[_ngcontent-%COMP%]{box-shadow:0 3rem 2.2rem -1.4rem rgba(0,0,0,.75)}.subtitle[_ngcontent-%COMP%]{font-size:1.2rem;margin:.2rem 0}.subtitle--big[_ngcontent-%COMP%]{font-size:1.6rem;margin:0}.subtitle-margin[_ngcontent-%COMP%]{margin:0 0 0 .6rem}.text-line[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.directors-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;margin:.5rem 0}.cast-container[_ngcontent-%COMP%]{width:100%;height:16rem;padding:1rem 0}.cast[_ngcontent-%COMP%]{height:100%;width:100%;display:-webkit-box;overflow-x:auto}.actor[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:0 1rem}.actor__image[_ngcontent-%COMP%]{height:70%;margin:.2rem}.actor__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto}.actor__image--null[_ngcontent-%COMP%]{height:70%;width:100%;margin:.2rem}.similar-films-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;flex-wrap:wrap;justify-content:space-around}.similar-film[_ngcontent-%COMP%]{height:20rem;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:1rem}.similar-film__image[_ngcontent-%COMP%]{height:100%}"]],data:{}});function g(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,2,"div",[["class","backdrop-container"]],null,null,null,null,null)),(l()(),i.tb(1,0,null,null,1,"ion-img",[],null,null,null,e.z,e.i)),i.sb(2,49152,null,0,r.B,[i.h,i.k,i.z],{src:[0,"src"]},null)],(function(l,n){l(n,2,0,n.component.backdropUrl)}),null)}function d(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Jb(1,null,[""," min."]))],null,(function(l,n){l(n,1,0,n.component.film.runtime)}))}function f(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,3,"img",[["class","actor__image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==i.Eb(l,1).onClick()&&u),"click"===n&&(u=!1!==i.Eb(l,3).onClick(t)&&u),u}),null,null)),i.sb(1,16384,null,0,c.n,[c.m,c.a,[8,null],i.D,i.k],{routerLink:[0,"routerLink"]},null),i.Fb(2,2),i.sb(3,737280,null,0,r.Jb,[a.g,r.Fb,i.k,c.m,[2,c.n]],null,null)],(function(l,n){var t=l(n,2,0,"/details-actor",n.parent.context.$implicit.id);l(n,1,0,t),l(n,3,0)}),(function(l,n){l(n,0,0,n.component.getActorImageUrl(n.parent.context.index))}))}function p(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,1,"ion-icon",[["class","actor__image--null"],["color","light"],["name","person"]],null,null,null,e.y,e.h)),i.sb(1,49152,null,0,r.A,[i.h,i.k,i.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"light","person")}),null)}function k(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,12,"div",[["class","actor"]],null,null,null,null,null)),(l()(),i.ib(16777216,null,null,1,null,f)),i.sb(2,16384,null,0,a.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.ib(16777216,null,null,1,null,p)),i.sb(4,16384,null,0,a.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.tb(5,0,null,null,3,"ion-text",[["class","text-line"],["color","dark"]],null,null,null,e.F,e.o)),i.sb(6,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(7,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Jb(8,null,["",""])),(l()(),i.tb(9,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,e.F,e.o)),i.sb(10,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(11,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Jb(12,null,["",""]))],(function(l,n){var t=n.component;l(n,2,0,t.hasActorImage(n.context.index)),l(n,4,0,!t.hasActorImage(n.context.index)),l(n,6,0,"dark"),l(n,10,0,"medium")}),(function(l,n){l(n,8,0,n.context.$implicit.character),l(n,12,0,n.context.$implicit.name)}))}function h(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,4,"div",[["class","similar-film"]],null,null,null,null,null)),(l()(),i.tb(1,0,null,null,3,"img",[["class","similar-film__image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==i.Eb(l,2).onClick()&&u),"click"===n&&(u=!1!==i.Eb(l,4).onClick(t)&&u),u}),null,null)),i.sb(2,16384,null,0,c.n,[c.m,c.a,[8,null],i.D,i.k],{routerLink:[0,"routerLink"]},null),i.Fb(3,2),i.sb(4,737280,null,0,r.Jb,[a.g,r.Fb,i.k,c.m,[2,c.n]],null,null)],(function(l,n){var t=l(n,3,0,"/details-film",n.context.$implicit.id);l(n,2,0,t),l(n,4,0)}),(function(l,n){l(n,1,0,n.component.getSimilarFilmPoster(n.context.index))}))}function x(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,55,"ion-content",[],null,null,null,e.v,e.e)),i.sb(1,49152,null,0,r.s,[i.h,i.k,i.z],null,null),(l()(),i.tb(2,0,null,0,53,"div",[["class","all-container"]],null,null,null,null,null)),(l()(),i.ib(16777216,null,null,1,null,g)),i.sb(4,16384,null,0,a.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.tb(5,0,null,null,50,"div",[["class","details-container"]],null,null,null,null,null)),(l()(),i.tb(6,0,null,null,0,"div",[["class","backdrop-gradient"]],null,null,null,null,null)),(l()(),i.tb(7,0,null,null,4,"div",[["class","title-container"],["id","title"]],[[2,"title-container--sticky-shadow",null]],null,null,null,null)),(l()(),i.tb(8,0,null,null,3,"ion-text",[["color","primary"]],null,null,null,e.F,e.o)),i.sb(9,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(10,0,null,0,1,"h2",[["class","title"]],null,null,null,null,null)),(l()(),i.Jb(11,null,["",""])),(l()(),i.tb(12,0,null,null,12,"div",[["class","details-header"]],null,null,null,null,null)),(l()(),i.tb(13,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,e.F,e.o)),i.sb(14,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.ib(16777216,null,0,1,null,d)),i.sb(16,16384,null,0,a.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.tb(17,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,e.F,e.o)),i.sb(18,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(19,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Jb(20,null,["",""])),(l()(),i.tb(21,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,e.F,e.o)),i.sb(22,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(23,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Jb(24,null,["",""])),(l()(),i.tb(25,0,null,null,3,"div",[["class","description-container"]],null,null,null,null,null)),(l()(),i.tb(26,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),i.tb(27,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),i.Jb(28,null,["",""])),(l()(),i.tb(29,0,null,null,11,"div",[["class","directors-container"]],null,null,null,null,null)),(l()(),i.tb(30,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,e.F,e.o)),i.sb(31,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(32,0,null,0,1,"h4",[["class","subtitle--big"]],null,null,null,null,null)),(l()(),i.Jb(-1,null,["Director/s:"])),(l()(),i.tb(34,0,null,null,6,"ion-text",[["class","text-line"],["color","dark"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==i.Eb(l,36).onClick()&&u),"click"===n&&(u=!1!==i.Eb(l,38).onClick(t)&&u),u}),e.F,e.o)),i.sb(35,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),i.sb(36,16384,null,0,c.n,[c.m,c.a,[8,null],i.D,i.k],{routerLink:[0,"routerLink"]},null),i.Fb(37,2),i.sb(38,737280,null,0,r.Jb,[a.g,r.Fb,i.k,c.m,[2,c.n]],null,null),(l()(),i.tb(39,0,null,0,1,"h4",[["class","subtitle subtitle-margin"]],null,null,null,null,null)),(l()(),i.Jb(40,null,["",""])),(l()(),i.tb(41,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,e.F,e.o)),i.sb(42,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(43,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Jb(-1,null,["Cast:"])),(l()(),i.tb(45,0,null,null,3,"div",[["class","cast-container"]],null,null,null,null,null)),(l()(),i.tb(46,0,null,null,2,"div",[["class","cast"]],null,null,null,null,null)),(l()(),i.ib(16777216,null,null,1,null,k)),i.sb(48,278528,null,0,a.h,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(l()(),i.tb(49,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,e.F,e.o)),i.sb(50,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(51,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Jb(-1,null,["Similar Films:"])),(l()(),i.tb(53,0,null,null,2,"div",[["class","similar-films-container"]],null,null,null,null,null)),(l()(),i.ib(16777216,null,null,1,null,h)),i.sb(55,278528,null,0,a.h,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,4,0,null!==t.backdropUrl),l(n,9,0,"primary"),l(n,14,0,"secondary"),l(n,16,0,""!==t.film.runtime),l(n,18,0,"medium"),l(n,22,0,"medium"),l(n,31,0,"secondary"),l(n,35,0,"dark");var i=l(n,37,0,"/details-director",t.director.id);l(n,36,0,i),l(n,38,0),l(n,42,0,"secondary"),l(n,48,0,t.cast),l(n,50,0,"secondary"),l(n,55,0,t.similarFilms)}),(function(l,n){var t=n.component;l(n,7,0,t.titleSticky),l(n,11,0,t.film.original_title),l(n,20,0,t.filmGenres.join(", ")),l(n,24,0,t.film.release_date.split("-")[0]),l(n,28,0,t.film.overview),l(n,40,0,t.director.name)}))}function v(l){return i.Kb(0,[(l()(),i.ib(16777216,null,null,1,null,x)),i.sb(1,16384,null,0,a.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,1,0,void 0!==t.film&&void 0!==t.cast)}),null)}function w(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,1,"app-details-film",[],null,null,null,v,m)),i.sb(1,114688,null,0,b,[c.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=i.pb("app-details-film",b,w,{},{},[]),_=t("gIcY"),y=function(){return function(){}}();t.d(n,"DetailsFilmPageModuleNgFactory",(function(){return O}));var O=i.qb(u,[],(function(l){return i.Bb([i.Cb(512,i.j,i.bb,[[8,[o.a,C]],[3,i.j],i.x]),i.Cb(4608,a.k,a.j,[i.u,[2,a.q]]),i.Cb(4608,_.d,_.d,[]),i.Cb(4608,r.a,r.a,[i.z,i.g]),i.Cb(4608,r.Eb,r.Eb,[r.a,i.j,i.q]),i.Cb(4608,r.Ib,r.Ib,[r.a,i.j,i.q]),i.Cb(1073742336,a.b,a.b,[]),i.Cb(1073742336,_.c,_.c,[]),i.Cb(1073742336,_.a,_.a,[]),i.Cb(1073742336,r.Cb,r.Cb,[]),i.Cb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),i.Cb(1073742336,y,y,[]),i.Cb(1073742336,u,u,[]),i.Cb(1024,c.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);