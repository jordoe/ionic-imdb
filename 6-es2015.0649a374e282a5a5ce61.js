(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Fmu7:function(l,n,i){"use strict";i.r(n);var t=i("8Y7J");class u{}var e=i("pMnS"),o=i("oBZk"),r=i("ZZ/e"),c=i("iInd"),a=i("SVse"),b=i("nPnQ");class s{constructor(l,n){this.route=l,this.filmsService=n,this.titleSticky=!1}ngOnInit(){this.route.paramMap.subscribe(l=>{this.filmId=l.get("id"),this.filmsService.getFilmDetails(this.filmId).subscribe(l=>{this.film=l,this.filmGenres=l.genres.map(l=>l.name),this.backdropUrl=null!==this.film.backdrop_path?"https://image.tmdb.org/t/p/original"+this.film.backdrop_path:null}),this.filmsService.getFilmCredits(this.filmId).subscribe(l=>{this.cast=l.cast,l.crew.forEach(l=>{"Directing"===l.department&&"Director"===l.job&&(this.director=l)})}),this.filmsService.getSimilarFilms(this.filmId).subscribe(l=>{this.similarFilms=l.results})})}getActorImageUrl(l){return"https://image.tmdb.org/t/p/original"+this.cast[l].profile_path}hasActorImage(l){return null!==this.cast[l].profile_path}getSimilarFilmPoster(l){return"https://image.tmdb.org/t/p/original"+this.similarFilms[l].poster_path}}var m=t.pb({encapsulation:0,styles:[[".all-container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;background:-webkit-gradient(linear,left bottom,left top,from(black),color-stop(75%,#252629));background:linear-gradient(0deg,#000 0,#252629 75%)}.backdrop-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:0}.backdrop-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;-webkit-transform:translateY(-98%);transform:translateY(-98%);background:#202023;background:-webkit-gradient(linear,left bottom,left top,color-stop(20%,#252629),to(rgba(32,32,35,0)));background:linear-gradient(0deg,#252629 20%,rgba(32,32,35,0) 100%);height:2%;width:100%}.details-container[_ngcontent-%COMP%]{position:relative;padding:0 2rem;-webkit-box-flex:1;flex-grow:1;z-index:1;background:-webkit-gradient(linear,left bottom,left top,from(black),color-stop(96%,#252629));background:linear-gradient(0deg,#000 0,#252629 96%)}.back[_ngcontent-%COMP%]{height:100%}.back__icon[_ngcontent-%COMP%]{height:100%;width:2rem}.title[_ngcontent-%COMP%]{margin:0}.title-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding-top:.5rem;padding-bottom:1rem;margin:0 -2rem;padding-left:2rem;position:-webkit-sticky;position:sticky;top:0;background-color:#252629}.title-container--sticky-shadow[_ngcontent-%COMP%]{box-shadow:0 3rem 2.2rem -1.4rem rgba(0,0,0,.75)}.subtitle[_ngcontent-%COMP%]{font-size:1.2rem;margin:.2rem 0}.subtitle--big[_ngcontent-%COMP%]{font-size:1.6rem;margin:0}.subtitle-margin[_ngcontent-%COMP%]{margin:0 0 0 .6rem}.text-line[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.directors-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;margin:.5rem 0}.cast-container[_ngcontent-%COMP%]{width:100%;height:16rem;padding:1rem 0}.cast[_ngcontent-%COMP%]{height:100%;width:100%;display:-webkit-box;overflow-x:auto}.actor[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:0 1rem}.actor__image[_ngcontent-%COMP%]{height:70%;margin:.2rem}.actor__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto}.actor__image--null[_ngcontent-%COMP%]{height:70%;width:100%;margin:.2rem}.similar-films-container[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;flex-wrap:wrap;justify-content:space-around}.similar-film[_ngcontent-%COMP%]{width:46%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:.5rem 0}"]],data:{}});function g(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","backdrop-container"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"ion-img",[],null,null,null,o.z,o.i)),t.qb(2,49152,null,0,r.B,[t.h,t.k,t.x],{src:[0,"src"]},null)],(function(l,n){l(n,2,0,n.component.backdropUrl)}),null)}function d(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),t.Hb(1,null,[""," min."]))],null,(function(l,n){l(n,1,0,n.component.film.runtime)}))}function p(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,3,"img",[["class","actor__image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,i){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,1).onClick()&&u),"click"===n&&(u=!1!==t.Cb(l,3).onClick(i)&&u),u}),null,null)),t.qb(1,16384,null,0,c.n,[c.m,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Db(2,2),t.qb(3,737280,null,0,r.Jb,[a.g,r.Fb,t.k,c.m,[2,c.n]],null,null)],(function(l,n){var i=l(n,2,0,"/details-actor",n.parent.context.$implicit.id);l(n,1,0,i),l(n,3,0)}),(function(l,n){l(n,0,0,n.component.getActorImageUrl(n.parent.context.index))}))}function k(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"ion-icon",[["class","actor__image--null"],["color","light"],["name","person"]],null,null,null,o.y,o.h)),t.qb(1,49152,null,0,r.A,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"light","person")}),null)}function f(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,12,"div",[["class","actor"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,p)),t.qb(2,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,k)),t.qb(4,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(5,0,null,null,3,"ion-text",[["class","text-line"],["color","dark"]],null,null,null,o.F,o.o)),t.qb(6,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(7,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),t.Hb(8,null,["",""])),(l()(),t.rb(9,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,o.F,o.o)),t.qb(10,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(11,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),t.Hb(12,null,["",""]))],(function(l,n){var i=n.component;l(n,2,0,i.hasActorImage(n.context.index)),l(n,4,0,!i.hasActorImage(n.context.index)),l(n,6,0,"dark"),l(n,10,0,"medium")}),(function(l,n){l(n,8,0,n.context.$implicit.character),l(n,12,0,n.context.$implicit.name)}))}function h(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,4,"div",[["class","similar-film"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,3,"img",[["class","similar-film__image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,i){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,2).onClick()&&u),"click"===n&&(u=!1!==t.Cb(l,4).onClick(i)&&u),u}),null,null)),t.qb(2,16384,null,0,c.n,[c.m,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Db(3,2),t.qb(4,737280,null,0,r.Jb,[a.g,r.Fb,t.k,c.m,[2,c.n]],null,null)],(function(l,n){var i=l(n,3,0,"/details-film",n.context.$implicit.id);l(n,2,0,i),l(n,4,0)}),(function(l,n){l(n,1,0,n.component.getSimilarFilmPoster(n.context.index))}))}function x(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,55,"ion-content",[],null,null,null,o.v,o.e)),t.qb(1,49152,null,0,r.s,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,53,"div",[["class","all-container"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,g)),t.qb(4,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(5,0,null,null,50,"div",[["class","details-container"]],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,0,"div",[["class","backdrop-gradient"]],null,null,null,null,null)),(l()(),t.rb(7,0,null,null,4,"div",[["class","title-container"],["id","title"]],[[2,"title-container--sticky-shadow",null]],null,null,null,null)),(l()(),t.rb(8,0,null,null,3,"ion-text",[["color","primary"]],null,null,null,o.F,o.o)),t.qb(9,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(10,0,null,0,1,"h2",[["class","title"]],null,null,null,null,null)),(l()(),t.Hb(11,null,["",""])),(l()(),t.rb(12,0,null,null,12,"div",[["class","details-header"]],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,o.F,o.o)),t.qb(14,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.gb(16777216,null,0,1,null,d)),t.qb(16,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(17,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,o.F,o.o)),t.qb(18,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(19,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),t.Hb(20,null,["",""])),(l()(),t.rb(21,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,o.F,o.o)),t.qb(22,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(23,0,null,0,1,"h5",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),t.Hb(24,null,["",""])),(l()(),t.rb(25,0,null,null,3,"div",[["class","description-container"]],null,null,null,null,null)),(l()(),t.rb(26,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.rb(27,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),t.Hb(28,null,["",""])),(l()(),t.rb(29,0,null,null,11,"div",[["class","directors-container"]],null,null,null,null,null)),(l()(),t.rb(30,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,o.F,o.o)),t.qb(31,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(32,0,null,0,1,"h4",[["class","subtitle--big"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Director/s:"])),(l()(),t.rb(34,0,null,null,6,"ion-text",[["class","text-line"],["color","dark"]],null,[[null,"click"]],(function(l,n,i){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,36).onClick()&&u),"click"===n&&(u=!1!==t.Cb(l,38).onClick(i)&&u),u}),o.F,o.o)),t.qb(35,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),t.qb(36,16384,null,0,c.n,[c.m,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Db(37,2),t.qb(38,737280,null,0,r.Jb,[a.g,r.Fb,t.k,c.m,[2,c.n]],null,null),(l()(),t.rb(39,0,null,0,1,"h4",[["class","subtitle subtitle-margin"]],null,null,null,null,null)),(l()(),t.Hb(40,null,["",""])),(l()(),t.rb(41,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,o.F,o.o)),t.qb(42,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(43,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Cast:"])),(l()(),t.rb(45,0,null,null,3,"div",[["class","cast-container"]],null,null,null,null,null)),(l()(),t.rb(46,0,null,null,2,"div",[["class","cast"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,f)),t.qb(48,278528,null,0,a.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(49,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,o.F,o.o)),t.qb(50,49152,null,0,r.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(51,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Similar Films:"])),(l()(),t.rb(53,0,null,null,2,"div",[["class","similar-films-container"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,h)),t.qb(55,278528,null,0,a.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var i=n.component;l(n,4,0,null!==i.backdropUrl),l(n,9,0,"primary"),l(n,14,0,"secondary"),l(n,16,0,""!==i.film.runtime),l(n,18,0,"medium"),l(n,22,0,"medium"),l(n,31,0,"secondary"),l(n,35,0,"dark");var t=l(n,37,0,"/details-director",i.director.id);l(n,36,0,t),l(n,38,0),l(n,42,0,"secondary"),l(n,48,0,i.cast),l(n,50,0,"secondary"),l(n,55,0,i.similarFilms)}),(function(l,n){var i=n.component;l(n,7,0,i.titleSticky),l(n,11,0,i.film.original_title),l(n,20,0,i.filmGenres.join(", ")),l(n,24,0,i.film.release_date.split("-")[0]),l(n,28,0,i.film.overview),l(n,40,0,i.director.name)}))}function v(l){return t.Ib(0,[(l()(),t.gb(16777216,null,null,1,null,x)),t.qb(1,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var i=n.component;l(n,1,0,void 0!==i.film&&void 0!==i.cast)}),null)}function w(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"app-details-film",[],null,null,null,v,m)),t.qb(1,114688,null,0,s,[c.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var _=t.nb("app-details-film",s,w,{},{},[]),y=i("s7LF");class C{}i.d(n,"DetailsFilmPageModuleNgFactory",(function(){return M}));var M=t.ob(u,[],(function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[e.a,_]],[3,t.j],t.v]),t.Ab(4608,a.k,a.j,[t.s,[2,a.q]]),t.Ab(4608,y.d,y.d,[]),t.Ab(4608,r.a,r.a,[t.x,t.g]),t.Ab(4608,r.Eb,r.Eb,[r.a,t.j,t.p]),t.Ab(4608,r.Ib,r.Ib,[r.a,t.j,t.p]),t.Ab(1073742336,a.b,a.b,[]),t.Ab(1073742336,y.c,y.c,[]),t.Ab(1073742336,y.a,y.a,[]),t.Ab(1073742336,r.Cb,r.Cb,[]),t.Ab(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Ab(1073742336,C,C,[]),t.Ab(1073742336,u,u,[]),t.Ab(1024,c.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);