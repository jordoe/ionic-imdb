(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RCPt:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class i{}var o=t("pMnS"),e=t("iInd"),r=t("ZZ/e"),a=t("SVse"),c=t("oBZk"),s=t("nPnQ");class b{constructor(l,n){this.route=l,this.filmsService=n}ngOnInit(){this.route.paramMap.subscribe(l=>{this.actorId=l.get("id"),this.filmsService.getActorDetails(this.actorId).subscribe(l=>{this.actor=l}),this.filmsService.getActorImages(this.actorId).subscribe(l=>{this.actorImages=l.profiles}),this.filmsService.getActorFilms(this.actorId).subscribe(l=>{this.actorFilms=l.cast,console.log(this.actorFilms)})})}getActorMainImageUrl(){return"https://image.tmdb.org/t/p/original"+this.actor.profile_path}getActorImageUrl(l){return"https://image.tmdb.org/t/p/original"+this.actorImages[l].file_path}getActorAge(){return(new Date).getFullYear()-parseInt(this.actor.birthday.split("-")[0])}getFilmPoster(l){return"https://image.tmdb.org/t/p/original"+this.actorFilms[l].poster_path}hasFilmPoster(l){return null!==this.actorFilms[l].poster_path}}var g=u.pb({encapsulation:0,styles:[[".all-container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.details-container[_ngcontent-%COMP%]{position:relative;padding:0 2rem;-webkit-box-flex:1;flex-grow:1;z-index:1;background:-webkit-gradient(linear,left bottom,left top,from(black),to(#252629));background:linear-gradient(0deg,#000 0,#252629 100%)}.top-details-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;height:18rem;width:100%;padding:2rem 0}.top-detail-image[_ngcontent-%COMP%]{width:34%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.top-detail-data[_ngcontent-%COMP%]{width:66%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:0 1rem}.main-image[_ngcontent-%COMP%]{height:100%;-webkit-filter:drop-shadow(6px 6px 8px #000);filter:drop-shadow(6px 6px 8px #000)}.actor-name[_ngcontent-%COMP%]{font-size:20px}.subtitle[_ngcontent-%COMP%]{font-size:1.2rem;margin-top:.5rem}.subtitle--big[_ngcontent-%COMP%]{font-size:1.6rem;margin-top:.5rem}.subtitle-margin[_ngcontent-%COMP%]{margin:0 0 0 .6rem}.popularity-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.biography-container[_ngcontent-%COMP%]{position:relative}.biography[_ngcontent-%COMP%]{height:8rem;overflow-y:auto;margin:1rem 0}.biography__text[_ngcontent-%COMP%]{font-size:1.2rem;margin:0}.photos-container[_ngcontent-%COMP%]{width:100%;height:16rem;padding:1rem 0;display:-webkit-box;overflow-x:auto}.image-container[_ngcontent-%COMP%]{height:100%;margin:auto 1rem}.actor-image[_ngcontent-%COMP%]{height:100%}.actor-films-container[_ngcontent-%COMP%]{width:100%;padding:1rem 0;display:-webkit-box;display:flex;flex-wrap:wrap;justify-content:space-around}.actor-film[_ngcontent-%COMP%]{height:22rem;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:.5rem}.actor-film__image[_ngcontent-%COMP%]{height:100%}"]],data:{}});function m(l){return u.Ib(0,[(l()(),u.rb(0,0,null,null,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),u.Hb(1,null,[""," - ",""]))],null,(function(l,n){var t=n.component;l(n,1,0,t.actor.birthday.split("-")[0],t.actor.deathday.split("-")[0])}))}function d(l){return u.Ib(0,[(l()(),u.rb(0,0,null,null,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),u.Hb(1,null,[""," years"]))],null,(function(l,n){l(n,1,0,n.component.getActorAge())}))}function p(l){return u.Ib(0,[(l()(),u.rb(0,0,null,null,1,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),u.rb(1,0,null,null,0,"img",[["class","actor-image"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,1,0,n.component.getActorImageUrl(n.context.index))}))}function h(l){return u.Ib(0,[(l()(),u.rb(0,0,null,null,3,"img",[["class","actor-film__image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==u.Cb(l,1).onClick()&&i),"click"===n&&(i=!1!==u.Cb(l,3).onClick(t)&&i),i}),null,null)),u.qb(1,16384,null,0,e.n,[e.m,e.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Db(2,2),u.qb(3,737280,null,0,r.Jb,[a.g,r.Fb,u.k,e.m,[2,e.n]],null,null)],(function(l,n){var t=l(n,2,0,"/details-film",n.parent.context.$implicit.id);l(n,1,0,t),l(n,3,0)}),(function(l,n){l(n,0,0,n.component.getFilmPoster(n.parent.context.index))}))}function f(l){return u.Ib(0,[(l()(),u.rb(0,0,null,null,2,"div",[["class","actor-film"]],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,h)),u.qb(2,16384,null,0,a.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.component.hasFilmPoster(n.context.index))}),null)}function x(l){return u.Ib(0,[(l()(),u.rb(0,0,null,null,46,"ion-content",[],null,null,null,c.v,c.e)),u.qb(1,49152,null,0,r.s,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,44,"div",[["class","all-container"]],null,null,null,null,null)),(l()(),u.rb(3,0,null,null,43,"div",[["class","details-container"]],null,null,null,null,null)),(l()(),u.rb(4,0,null,null,22,"div",[["class","top-details-container"]],null,null,null,null,null)),(l()(),u.rb(5,0,null,null,1,"div",[["class","top-detail-image"]],null,null,null,null,null)),(l()(),u.rb(6,0,null,null,0,"img",[["class","main-image"]],[[8,"src",4]],null,null,null,null)),(l()(),u.rb(7,0,null,null,19,"div",[["class","top-detail-data"]],null,null,null,null,null)),(l()(),u.rb(8,0,null,null,3,"ion-text",[["color","primary"]],null,null,null,c.F,c.o)),u.qb(9,49152,null,0,r.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(10,0,null,0,1,"h2",[["class","ion-no-margin actor-name"]],null,null,null,null,null)),(l()(),u.Hb(11,null,["",""])),(l()(),u.rb(12,0,null,null,5,"ion-text",[["class","text-line"],["color","dark"]],null,null,null,c.F,c.o)),u.qb(13,49152,null,0,r.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.gb(16777216,null,0,1,null,m)),u.qb(15,16384,null,0,a.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,d)),u.qb(17,16384,null,0,a.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(18,0,null,null,3,"ion-text",[["class","text-line"],["color","medium"]],null,null,null,c.F,c.o)),u.qb(19,49152,null,0,r.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(20,0,null,0,1,"h4",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),u.Hb(21,null,["",""])),(l()(),u.rb(22,0,null,null,4,"div",[["class","popularity-container"]],null,null,null,null,null)),(l()(),u.rb(23,0,null,null,3,"ion-text",[["class","text-line"],["color","medium"]],null,null,null,c.F,c.o)),u.qb(24,49152,null,0,r.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(25,0,null,0,1,"h4",[["class","ion-no-margin subtitle"]],null,null,null,null,null)),(l()(),u.Hb(26,null,["Popularity: ",""])),(l()(),u.rb(27,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u.rb(28,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,c.F,c.o)),u.qb(29,49152,null,0,r.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(30,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),u.Hb(-1,null,["Biography: "])),(l()(),u.rb(32,0,null,null,3,"div",[["class","biography-container"]],null,null,null,null,null)),(l()(),u.rb(33,0,null,null,2,"div",[["class","biography"]],null,null,null,null,null)),(l()(),u.rb(34,0,null,null,1,"p",[["class","biography__text"]],null,null,null,null,null)),(l()(),u.Hb(35,null,["",""])),(l()(),u.rb(36,0,null,null,2,"div",[["class","photos-container"]],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,p)),u.qb(38,278528,null,0,a.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.rb(39,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u.rb(40,0,null,null,3,"ion-text",[["class","text-line"],["color","secondary"]],null,null,null,c.F,c.o)),u.qb(41,49152,null,0,r.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.rb(42,0,null,0,1,"h4",[["class","ion-no-margin subtitle--big"]],null,null,null,null,null)),(l()(),u.Hb(-1,null,["Appears In: "])),(l()(),u.rb(44,0,null,null,2,"div",[["class","actor-films-container"]],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,f)),u.qb(46,278528,null,0,a.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,9,0,"primary"),l(n,13,0,"dark"),l(n,15,0,null!==t.actor.deathday),l(n,17,0,null===t.actor.deathday),l(n,19,0,"medium"),l(n,24,0,"medium"),l(n,29,0,"secondary"),l(n,38,0,t.actorImages),l(n,41,0,"secondary"),l(n,46,0,t.actorFilms)}),(function(l,n){var t=n.component;l(n,6,0,t.getActorMainImageUrl()),l(n,11,0,t.actor.name),l(n,21,0,t.actor.place_of_birth),l(n,26,0,t.actor.popularity),l(n,35,0,t.actor.biography)}))}function k(l){return u.Ib(0,[(l()(),u.gb(16777216,null,null,1,null,x)),u.qb(1,16384,null,0,a.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,1,0,void 0!==t.actor&&void 0!==t.actorImages&&void 0!==t.actorFilms)}),null)}function v(l){return u.Ib(0,[(l()(),u.rb(0,0,null,null,1,"app-details-actor",[],null,null,null,k,g)),u.qb(1,114688,null,0,b,[e.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var y=u.nb("app-details-actor",b,v,{},{},[]),w=t("s7LF");class I{}t.d(n,"DetailsActorPageModuleNgFactory",(function(){return _}));var _=u.ob(i,[],(function(l){return u.zb([u.Ab(512,u.j,u.Z,[[8,[o.a,y]],[3,u.j],u.v]),u.Ab(4608,a.k,a.j,[u.s,[2,a.q]]),u.Ab(4608,w.d,w.d,[]),u.Ab(4608,r.a,r.a,[u.x,u.g]),u.Ab(4608,r.Eb,r.Eb,[r.a,u.j,u.p]),u.Ab(4608,r.Ib,r.Ib,[r.a,u.j,u.p]),u.Ab(1073742336,a.b,a.b,[]),u.Ab(1073742336,w.c,w.c,[]),u.Ab(1073742336,w.a,w.a,[]),u.Ab(1073742336,r.Cb,r.Cb,[]),u.Ab(1073742336,e.o,e.o,[[2,e.t],[2,e.m]]),u.Ab(1073742336,I,I,[]),u.Ab(1073742336,i,i,[]),u.Ab(1024,e.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);