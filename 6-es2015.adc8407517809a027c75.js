(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Fmu7:function(l,n,t){"use strict";t.r(n);var i=t("8Y7J");class u{}var e=t("pMnS"),o=t("oBZk"),r=t("ZZ/e"),c=t("iInd"),a=t("SVse"),s=t("nPnQ");class b{constructor(l,n){this.route=l,this.filmsService=n,this.seenState=0,this.titleSticky=!1}ngOnInit(){this.route.paramMap.subscribe(l=>{this.filmId=l.get("id"),this.filmsService.checkSeenState(this.filmId).subscribe(l=>{this.seenState=l}),this.filmsService.getFilmDetails(this.filmId).subscribe(l=>{this.film=l,this.filmGenres=l.genres.map(l=>l.name),this.backdropUrl=null!==this.film.backdrop_path?"https://image.tmdb.org/t/p/original"+this.film.backdrop_path:null}),this.filmsService.getFilmCredits(this.filmId).subscribe(l=>{this.cast=l.cast,l.crew.forEach(l=>{"Directing"===l.department&&"Director"===l.job&&(this.director=l)})}),this.filmsService.getSimilarFilms(this.filmId).subscribe(l=>{this.similarFilms=l.results.filter(l=>null!==l.poster_path)})})}setFilmState(l){this.filmsService.setState(l,this.filmId),this.seenState=l}getActorImageUrl(l){return"https://image.tmdb.org/t/p/w185"+this.cast[l].profile_path}hasActorImage(l){return null!==this.cast[l].profile_path}getSimilarFilmPoster(l){return"https://image.tmdb.org/t/p/w342"+this.similarFilms[l].poster_path}}var m=i.pb({encapsulation:0,styles:[[".all-container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;background:-webkit-gradient(linear,left bottom,left top,from(black),color-stop(75%,#252629));background:linear-gradient(0deg,#000 0,#252629 75%)}.backdrop-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:0}.backdrop-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;-webkit-transform:translateY(-98%);transform:translateY(-98%);background:#202023;background:-webkit-gradient(linear,left bottom,left top,color-stop(20%,#252629),to(rgba(32,32,35,0)));background:linear-gradient(0deg,#252629 20%,rgba(32,32,35,0) 100%);height:2%;width:100%}.details-container[_ngcontent-%COMP%]{position:relative;padding:0 2rem;-webkit-box-flex:1;flex-grow:1;z-index:1;background:-webkit-gradient(linear,left bottom,left top,from(black),color-stop(96%,#252629));background:linear-gradient(0deg,#000 0,#252629 96%)}.back[_ngcontent-%COMP%]{height:100%}.back__icon[_ngcontent-%COMP%]{height:100%;width:2rem}.favorite-container[_ngcontent-%COMP%]{position:absolute;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;right:2rem;bottom:0;height:100%;width:5rem;padding:0}.favorite-icon[_ngcontent-%COMP%]{height:74%;width:74%}.title[_ngcontent-%COMP%]{margin:0}.title-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding-top:.5rem;padding-bottom:1rem;margin:0 -2rem;padding-left:2rem;position:-webkit-sticky;position:sticky;top:0;background-color:#252629}.title-container--sticky-shadow[_ngcontent-%COMP%]{box-shadow:0 3rem 2.2rem -1.4rem rgba(0,0,0,.75)}.subtitle[_ngcontent-%COMP%]{font-size:1.2rem;margin:.2rem 0}.subtitle--big[_ngcontent-%COMP%]{font-size:1.6rem;margin:0}.subtitle-margin[_ngcontent-%COMP%]{margin:0 0 0 .6rem}.text-line[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.directors-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;margin:.5rem 0}.cast-container[_ngcontent-%COMP%]{width:100%;height:16rem;padding:1rem 0}.cast[_ngcontent-%COMP%]{height:100%;width:100%;display:-webkit-box;overflow-x:auto}.actor[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:0 1rem}.actor__image[_ngcontent-%COMP%]{height:70%;margin:.2rem}.actor__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto}.actor__image--null[_ngcontent-%COMP%]{height:70%;width:100%;margin:.2rem}.similar-films-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;flex-wrap:wrap;justify-content:space-around}.similar-film[_ngcontent-%COMP%]{width:46%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:.5rem 0}"]],data:{}});function g(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,2,"div",[["class","backdrop-container"]],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,1,"ion-img",[],null,null,null,o.A,o.i)),i.qb(2,49152,null,0,r.B,[i.h,i.k,i.x],{src:[0,"src"]},null)],(function(l,n){l(n,2,0,n.component.backdropUrl)}),null)}function d(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,1,"ion-icon",[["class","favorite-icon"],["color","light"],["name","bookmark"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.setFilmState(1)&&i),i}),o.z,o.h)),i.qb(1,49152,null,0,r.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"light","bookmark")}),null)}function f(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,1,"ion-icon",[["class","favorite-icon"],["color","primary"],["name","bookmark"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.setFilmState(2)&&i),i}),o.z,o.h)),i.qb(1,49152,null,0,r.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"primary","bookmark")}),null)}function p(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,1,"ion-icon",[["class","favorite-icon"],["color","primary"],["name","eye"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.setFilmState(0)&&i),i}),o.z,o.h)),i.qb(1,49152,null,0,r.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"primary","eye")}),null)}function k(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Hb(1,null,[""," min."]))],null,(function(l,n){l(n,1,0,n.component.film.runtime)}))}function h(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,3,"img",[["class","actor__image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==i.Cb(l,1).onClick()&&u),"click"===n&&(u=!1!==i.Cb(l,3).onClick(t)&&u),u}),null,null)),i.qb(1,16384,null,0,c.n,[c.m,c.a,[8,null],i.B,i.k],{routerLink:[0,"routerLink"]},null),i.Db(2,2),i.qb(3,737280,null,0,r.Jb,[a.g,r.Fb,i.k,c.m,[2,c.n]],null,null)],(function(l,n){var t=l(n,2,0,"/details-actor",n.parent.context.$implicit.id);l(n,1,0,t),l(n,3,0)}),(function(l,n){l(n,0,0,n.component.getActorImageUrl(n.parent.context.index))}))}function x(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,1,"ion-icon",[["class","actor__image--null"],["color","light"],["name","person"]],null,null,null,o.z,o.h)),i.qb(1,49152,null,0,r.A,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"light","person")}),null)}function v(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,12,"div",[["class","actor"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,h)),i.qb(2,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,null,1,null,x)),i.qb(4,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.rb(5,0,null,null,3,"ion-text",[["class","text-line"],["color","dark"]],null,null,null,o.H,o.p)),i.qb(6,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(7,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Hb(8,null,["",""])),(l()(),i.rb(9,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,o.H,o.p)),i.qb(10,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(11,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Hb(12,null,["",""]))],(function(l,n){var t=n.component;l(n,2,0,t.hasActorImage(n.context.index)),l(n,4,0,!t.hasActorImage(n.context.index)),l(n,6,0,"dark"),l(n,10,0,"medium")}),(function(l,n){l(n,8,0,n.context.$implicit.character),l(n,12,0,n.context.$implicit.name)}))}function w(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,o.H,o.p)),i.qb(1,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(2,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Hb(-1,null,["Similar Films:"]))],(function(l,n){l(n,1,0,"secondary")}),null)}function I(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,4,"div",[["class","similar-film"]],null,null,null,null,null)),(l()(),i.rb(1,0,null,null,3,"img",[["class","similar-film__image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==i.Cb(l,2).onClick()&&u),"click"===n&&(u=!1!==i.Cb(l,4).onClick(t)&&u),u}),null,null)),i.qb(2,16384,null,0,c.n,[c.m,c.a,[8,null],i.B,i.k],{routerLink:[0,"routerLink"]},null),i.Db(3,2),i.qb(4,737280,null,0,r.Jb,[a.g,r.Fb,i.k,c.m,[2,c.n]],null,null)],(function(l,n){var t=l(n,3,0,"/details-film",n.context.$implicit.id);l(n,2,0,t),l(n,4,0)}),(function(l,n){l(n,1,0,n.component.getSimilarFilmPoster(n.context.index))}))}function y(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,2,"div",[["class","similar-films-container"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,I)),i.qb(2,278528,null,0,a.h,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.similarFilms)}),null)}function _(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,59,"ion-content",[],null,null,null,o.w,o.e)),i.qb(1,49152,null,0,r.s,[i.h,i.k,i.x],null,null),(l()(),i.rb(2,0,null,0,57,"div",[["class","all-container"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,g)),i.qb(4,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.rb(5,0,null,null,54,"div",[["class","details-container"]],null,null,null,null,null)),(l()(),i.rb(6,0,null,null,0,"div",[["class","backdrop-gradient"]],null,null,null,null,null)),(l()(),i.rb(7,0,null,null,11,"div",[["class","title-container"],["id","title"]],[[2,"title-container--sticky-shadow",null]],null,null,null,null)),(l()(),i.rb(8,0,null,null,3,"ion-text",[["color","primary"]],null,null,null,o.H,o.p)),i.qb(9,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(10,0,null,0,1,"h2",[["class","title"]],null,null,null,null,null)),(l()(),i.Hb(11,null,["",""])),(l()(),i.rb(12,0,null,null,6,"div",[["class","favorite-container"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,d)),i.qb(14,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,null,1,null,f)),i.qb(16,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,null,1,null,p)),i.qb(18,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.rb(19,0,null,null,12,"div",[["class","details-header"]],null,null,null,null,null)),(l()(),i.rb(20,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,o.H,o.p)),i.qb(21,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.gb(16777216,null,0,1,null,k)),i.qb(23,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.rb(24,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,o.H,o.p)),i.qb(25,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(26,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Hb(27,null,["",""])),(l()(),i.rb(28,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,o.H,o.p)),i.qb(29,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(30,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Hb(31,null,["",""])),(l()(),i.rb(32,0,null,null,3,"div",[["class","description-container"]],null,null,null,null,null)),(l()(),i.rb(33,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),i.rb(34,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),i.Hb(35,null,["",""])),(l()(),i.rb(36,0,null,null,11,"div",[["class","directors-container"]],null,null,null,null,null)),(l()(),i.rb(37,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,o.H,o.p)),i.qb(38,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(39,0,null,0,1,"h4",[["class","subtitle--big"]],null,null,null,null,null)),(l()(),i.Hb(-1,null,["Director/s:"])),(l()(),i.rb(41,0,null,null,6,"ion-text",[["class","text-line"],["color","dark"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==i.Cb(l,43).onClick()&&u),"click"===n&&(u=!1!==i.Cb(l,45).onClick(t)&&u),u}),o.H,o.p)),i.qb(42,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),i.qb(43,16384,null,0,c.n,[c.m,c.a,[8,null],i.B,i.k],{routerLink:[0,"routerLink"]},null),i.Db(44,2),i.qb(45,737280,null,0,r.Jb,[a.g,r.Fb,i.k,c.m,[2,c.n]],null,null),(l()(),i.rb(46,0,null,0,1,"h4",[["class","subtitle subtitle-margin"]],null,null,null,null,null)),(l()(),i.Hb(47,null,["",""])),(l()(),i.rb(48,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,o.H,o.p)),i.qb(49,49152,null,0,r.vb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.rb(50,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Hb(-1,null,["Cast:"])),(l()(),i.rb(52,0,null,null,3,"div",[["class","cast-container"]],null,null,null,null,null)),(l()(),i.rb(53,0,null,null,2,"div",[["class","cast"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,v)),i.qb(55,278528,null,0,a.h,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(l()(),i.gb(16777216,null,null,1,null,w)),i.qb(57,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,null,1,null,y)),i.qb(59,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,4,0,null!==t.backdropUrl),l(n,9,0,"primary"),l(n,14,0,0===t.seenState),l(n,16,0,1===t.seenState),l(n,18,0,2===t.seenState),l(n,21,0,"secondary"),l(n,23,0,""!==t.film.runtime),l(n,25,0,"medium"),l(n,29,0,"medium"),l(n,38,0,"secondary"),l(n,42,0,"dark");var i=l(n,44,0,"/details-director",t.director.id);l(n,43,0,i),l(n,45,0),l(n,49,0,"secondary"),l(n,55,0,t.cast),l(n,57,0,0!==t.similarFilms.length),l(n,59,0,0!==t.similarFilms.length)}),(function(l,n){var t=n.component;l(n,7,0,t.titleSticky),l(n,11,0,t.film.original_title),l(n,27,0,t.filmGenres.join(", ")),l(n,31,0,t.film.release_date.split("-")[0]),l(n,35,0,t.film.overview),l(n,47,0,t.director.name)}))}function C(l){return i.Ib(0,[(l()(),i.gb(16777216,null,null,1,null,_)),i.qb(1,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,1,0,void 0!==t.film&&void 0!==t.cast)}),null)}function M(l){return i.Ib(0,[(l()(),i.rb(0,0,null,null,1,"app-details-film",[],null,null,null,C,m)),i.qb(1,114688,null,0,b,[c.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var q=i.nb("app-details-film",b,M,{},{},[]),O=t("s7LF");class P{}t.d(n,"DetailsFilmPageModuleNgFactory",(function(){return S}));var S=i.ob(u,[],(function(l){return i.zb([i.Ab(512,i.j,i.Z,[[8,[e.a,q]],[3,i.j],i.v]),i.Ab(4608,a.k,a.j,[i.s,[2,a.q]]),i.Ab(4608,O.d,O.d,[]),i.Ab(4608,r.a,r.a,[i.x,i.g]),i.Ab(4608,r.Eb,r.Eb,[r.a,i.j,i.p]),i.Ab(4608,r.Ib,r.Ib,[r.a,i.j,i.p]),i.Ab(1073742336,a.b,a.b,[]),i.Ab(1073742336,O.c,O.c,[]),i.Ab(1073742336,O.a,O.a,[]),i.Ab(1073742336,r.Cb,r.Cb,[]),i.Ab(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),i.Ab(1073742336,P,P,[]),i.Ab(1073742336,u,u,[]),i.Ab(1024,c.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);