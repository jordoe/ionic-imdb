(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{reJj:function(l,n,t){"use strict";t.r(n);var i=t("CcnG"),u=function(){return function(){}}(),e=t("pMnS"),o=t("ZYCi"),r=t("ZZ/e"),c=t("Ip0R"),a=t("oBZk"),s=t("nPnQ"),b=function(){function l(l,n){this.route=l,this.filmsService=n}return l.prototype.ngOnInit=function(){var l=this;this.route.paramMap.subscribe((function(n){l.directorId=n.get("id"),l.filmsService.getActorDetails(l.directorId).subscribe((function(n){l.director=n})),l.filmsService.getActorImages(l.directorId).subscribe((function(n){l.directorImages=n.profiles})),l.filmsService.getActorFilms(l.directorId).subscribe((function(n){l.directorFilms=n.crew,l.directorFilms=l.directorFilms.filter((function(l){return"Directing"===l.department&&"Director"===l.job})).filter((function(l){return null!==l.poster_path})),console.log(l.directorFilms)}))}))},l.prototype.getActorMainImageUrl=function(){return"https://image.tmdb.org/t/p/original"+this.director.profile_path},l.prototype.getActorImageUrl=function(l){return"https://image.tmdb.org/t/p/original"+this.directorImages[l].file_path},l.prototype.getActorAge=function(){return(new Date).getFullYear()-parseInt(this.director.birthday.split("-")[0])},l.prototype.getFilmPoster=function(l){return"https://image.tmdb.org/t/p/original"+this.directorFilms[l].poster_path},l.prototype.hasFilmPoster=function(l){return null!==this.directorFilms[l].poster_path},l}(),d=i.rb({encapsulation:0,styles:[[".all-container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.details-container[_ngcontent-%COMP%]{position:relative;padding:0 2rem;-webkit-box-flex:1;flex-grow:1;z-index:1;background:-webkit-gradient(linear,left bottom,left top,from(black),to(#252629));background:linear-gradient(0deg,#000 0,#252629 100%)}.top-details-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;height:18rem;width:100%;padding:2rem 0}.top-detail-image[_ngcontent-%COMP%]{width:34%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.top-detail-data[_ngcontent-%COMP%]{width:66%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:0 1rem}.main-image[_ngcontent-%COMP%]{height:100%;-webkit-filter:drop-shadow(6px 6px 8px #000);filter:drop-shadow(6px 6px 8px #000)}.director-name[_ngcontent-%COMP%]{font-size:20px}.subtitle[_ngcontent-%COMP%]{font-size:1.2rem;margin-top:.5rem}.subtitle--big[_ngcontent-%COMP%]{font-size:1.6rem;margin-top:.5rem}.subtitle-margin[_ngcontent-%COMP%]{margin:0 0 0 .6rem}.popularity-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.biography-container[_ngcontent-%COMP%]{position:relative}.biography[_ngcontent-%COMP%]{height:8rem;overflow-y:auto;margin:1rem 0}.biography__text[_ngcontent-%COMP%]{font-size:1.2rem;margin:0}.photos-container[_ngcontent-%COMP%]{width:100%;height:16rem;padding:1rem 0;display:-webkit-box;overflow-x:auto}.image-container[_ngcontent-%COMP%]{height:100%;margin:auto 1rem}.director-image[_ngcontent-%COMP%]{height:100%}.director-films-container[_ngcontent-%COMP%]{width:100%;padding:1rem 0;display:-webkit-box;display:flex;flex-wrap:wrap;justify-content:space-around}.director-film[_ngcontent-%COMP%]{height:22rem;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:.5rem}.director-film__image[_ngcontent-%COMP%]{height:100%}"]],data:{}});function g(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Jb(1,null,[""," - ",""]))],null,(function(l,n){var t=n.component;l(n,1,0,t.director.birthday.split("-")[0],t.director.deathday.split("-")[0])}))}function p(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Jb(1,null,[""," years"]))],null,(function(l,n){l(n,1,0,n.component.getActorAge())}))}function m(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,1,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),i.tb(1,0,null,null,0,"img",[["class","director-image"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,1,0,n.component.getActorImageUrl(n.context.index))}))}function f(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,3,"img",[["class","director-film__image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==i.Eb(l,1).onClick()&&u),"click"===n&&(u=!1!==i.Eb(l,3).onClick(t)&&u),u}),null,null)),i.sb(1,16384,null,0,o.n,[o.m,o.a,[8,null],i.D,i.k],{routerLink:[0,"routerLink"]},null),i.Fb(2,2),i.sb(3,737280,null,0,r.Jb,[c.g,r.Fb,i.k,o.m,[2,o.n]],null,null)],(function(l,n){var t=l(n,2,0,"/details-film",n.parent.context.$implicit.id);l(n,1,0,t),l(n,3,0)}),(function(l,n){l(n,0,0,n.component.getFilmPoster(n.parent.context.index))}))}function h(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,2,"div",[["class","director-film"]],null,null,null,null,null)),(l()(),i.ib(16777216,null,null,1,null,f)),i.sb(2,16384,null,0,c.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.component.hasFilmPoster(n.context.index))}),null)}function x(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,46,"ion-content",[],null,null,null,a.w,a.e)),i.sb(1,49152,null,0,r.s,[i.h,i.k,i.z],null,null),(l()(),i.tb(2,0,null,0,44,"div",[["class","all-container"]],null,null,null,null,null)),(l()(),i.tb(3,0,null,null,43,"div",[["class","details-container"]],null,null,null,null,null)),(l()(),i.tb(4,0,null,null,22,"div",[["class","top-details-container"]],null,null,null,null,null)),(l()(),i.tb(5,0,null,null,1,"div",[["class","top-detail-image"]],null,null,null,null,null)),(l()(),i.tb(6,0,null,null,0,"img",[["class","main-image"]],[[8,"src",4]],null,null,null,null)),(l()(),i.tb(7,0,null,null,19,"div",[["class","top-detail-data"]],null,null,null,null,null)),(l()(),i.tb(8,0,null,null,3,"ion-text",[["color","primary"]],null,null,null,a.H,a.p)),i.sb(9,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(10,0,null,0,1,"h2",[["class","ion-no-margin director-name"]],null,null,null,null,null)),(l()(),i.Jb(11,null,["",""])),(l()(),i.tb(12,0,null,null,5,"ion-text",[["class","text-line"],["color","dark"]],null,null,null,a.H,a.p)),i.sb(13,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.ib(16777216,null,0,1,null,g)),i.sb(15,16384,null,0,c.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.ib(16777216,null,0,1,null,p)),i.sb(17,16384,null,0,c.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.tb(18,0,null,null,3,"ion-text",[["class","text-line"],["color","medium"]],null,null,null,a.H,a.p)),i.sb(19,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(20,0,null,0,1,"h4",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Jb(21,null,["",""])),(l()(),i.tb(22,0,null,null,4,"div",[["class","popularity-container"]],null,null,null,null,null)),(l()(),i.tb(23,0,null,null,3,"ion-text",[["class","text-line"],["color","medium"]],null,null,null,a.H,a.p)),i.sb(24,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(25,0,null,0,1,"h4",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),i.Jb(26,null,["Popularity: ",""])),(l()(),i.tb(27,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),i.tb(28,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,a.H,a.p)),i.sb(29,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(30,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Jb(-1,null,["Biography: "])),(l()(),i.tb(32,0,null,null,3,"div",[["class","biography-container"]],null,null,null,null,null)),(l()(),i.tb(33,0,null,null,2,"div",[["class","biography"]],null,null,null,null,null)),(l()(),i.tb(34,0,null,null,1,"p",[["class","biography__text"]],null,null,null,null,null)),(l()(),i.Jb(35,null,["",""])),(l()(),i.tb(36,0,null,null,2,"div",[["class","photos-container"]],null,null,null,null,null)),(l()(),i.ib(16777216,null,null,1,null,m)),i.sb(38,278528,null,0,c.h,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(l()(),i.tb(39,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),i.tb(40,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,a.H,a.p)),i.sb(41,49152,null,0,r.vb,[i.h,i.k,i.z],{color:[0,"color"]},null),(l()(),i.tb(42,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),i.Jb(-1,null,["Films: "])),(l()(),i.tb(44,0,null,null,2,"div",[["class","director-films-container"]],null,null,null,null,null)),(l()(),i.ib(16777216,null,null,1,null,h)),i.sb(46,278528,null,0,c.h,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,9,0,"primary"),l(n,13,0,"dark"),l(n,15,0,null!==t.director.deathday),l(n,17,0,null===t.director.deathday),l(n,19,0,"medium"),l(n,24,0,"medium"),l(n,29,0,"secondary"),l(n,38,0,t.directorImages),l(n,41,0,"secondary"),l(n,46,0,t.directorFilms)}),(function(l,n){var t=n.component;l(n,6,0,t.getActorMainImageUrl()),l(n,11,0,t.director.name),l(n,21,0,t.director.place_of_birth),l(n,26,0,t.director.popularity),l(n,35,0,t.director.biography)}))}function y(l){return i.Kb(0,[(l()(),i.ib(16777216,null,null,1,null,x)),i.sb(1,16384,null,0,c.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,1,0,void 0!==t.director&&void 0!==t.directorImages&&void 0!==t.directorFilms)}),null)}function k(l){return i.Kb(0,[(l()(),i.tb(0,0,null,null,1,"app-details-director",[],null,null,null,y,d)),i.sb(1,114688,null,0,b,[o.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var v=i.pb("app-details-director",b,k,{},{},[]),w=t("gIcY"),C=function(){return function(){}}();t.d(n,"DetailsDirectorPageModuleNgFactory",(function(){return _}));var _=i.qb(u,[],(function(l){return i.Bb([i.Cb(512,i.j,i.bb,[[8,[e.a,v]],[3,i.j],i.x]),i.Cb(4608,c.k,c.j,[i.u,[2,c.q]]),i.Cb(4608,w.d,w.d,[]),i.Cb(4608,r.a,r.a,[i.z,i.g]),i.Cb(4608,r.Eb,r.Eb,[r.a,i.j,i.q]),i.Cb(4608,r.Ib,r.Ib,[r.a,i.j,i.q]),i.Cb(1073742336,c.b,c.b,[]),i.Cb(1073742336,w.c,w.c,[]),i.Cb(1073742336,w.a,w.a,[]),i.Cb(1073742336,r.Cb,r.Cb,[]),i.Cb(1073742336,o.o,o.o,[[2,o.t],[2,o.m]]),i.Cb(1073742336,C,C,[]),i.Cb(1073742336,u,u,[]),i.Cb(1024,o.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);