(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{U3nS:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),o=t("oBZk"),r=t("gIcY"),c=t("ZZ/e"),s=t("ZYCi"),a=t("Ip0R"),b=t("nPnQ"),p=function(){function l(l,n){this.filmsService=l,this.pickerCtrl=n,this.searchType=1,this.currentPage=1,this.noResults=!1}return l.prototype.ngOnInit=function(){var l=this;this.filmsService.getFilmsResults().subscribe((function(n){l.results=n.results}))},l.prototype.getFilmPoster=function(l){return"https://image.tmdb.org/t/p/original"+this.results[l].poster_path},l.prototype.inputChange=function(l){var n=this;null===l.detail||""===l.detail.target.value?this.filmsService.getFilmsResults().subscribe((function(l){n.results=l.results,n.noResults=!1})):this.filmsService.searchFilms(l.detail.target.value).subscribe((function(l){n.results=l.results.filter((function(l){return null!==l.poster_path})),n.noResults=0===l.total_results}))},l}(),d=e.rb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--overflow:hidden}.container[_ngcontent-%COMP%]{position:relative;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;padding:2rem 2rem 0;background:-webkit-gradient(linear,left bottom,left top,from(black),color-stop(75%,#252629));background:linear-gradient(0deg,#000 0,#252629 75%)}.bottom[_ngcontent-%COMP%]{position:absolute;bottom:0;z-index:2;height:14%;width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;padding:0 4rem;-webkit-filter:drop-shadow(6px 6px 12px rgba(87, 87, 87, .4));filter:drop-shadow(6px 6px 12px rgba(87, 87, 87, .4))}.bottom-gradient[_ngcontent-%COMP%]{pointer-events:none;position:absolute;height:150%;width:100%;left:0;bottom:-.2rem;background:-webkit-gradient(linear,left bottom,left top,color-stop(20%,#080809),to(rgba(32,32,35,0)));background:linear-gradient(0deg,#080809 20%,rgba(32,32,35,0) 100%)}.search-type-selector[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;bottom:0;-webkit-box-flex:1;flex-grow:1;display:-webkit-box;display:flex;padding:2.8rem 2rem}.search-type[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:100%;width:50%;background-color:#4e4f54}.search-type[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff}.search-type__sortby[_ngcontent-%COMP%]{border-radius:.6rem 0 0 .6rem}.search-type__search[_ngcontent-%COMP%]{border-radius:0 .6rem .6rem 0}.search-type--selected[_ngcontent-%COMP%]{background-color:#f5cd5e}.search-type--selected[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#17181a}.results[_ngcontent-%COMP%]{position:relative;width:100%;height:84%}.films-container[_ngcontent-%COMP%]{width:100%;height:100%;padding-bottom:10rem;overflow-y:auto;display:-webkit-box;display:flex;flex-wrap:wrap;justify-content:space-around}.film[_ngcontent-%COMP%]{width:31%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:.5rem 0}.top[_ngcontent-%COMP%]{width:100%;height:16%}.search-tab[_ngcontent-%COMP%], .sortby-tab[_ngcontent-%COMP%]{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.zeroResults[_ngcontent-%COMP%]{position:absolute;width:100%;text-align:center;top:0}"]],data:{}});function g(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,2,"div",[["class","sortby-tab"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sort By Tab"]))],null,null)}function h(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,4,"div",[["class","search-tab"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,3,"ion-searchbar",[["placeholder","Search Films"]],null,[[null,"ionInput"],[null,"ionClear"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Eb(l,4)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Eb(l,4)._handleInputEvent(t.target)&&u),"ionInput"===n&&(u=!1!==i.inputChange(t)&&u),"ionClear"===n&&(u=!1!==i.inputChange(t)&&u),u}),o.D,o.l)),e.Gb(5120,null,r.b,(function(l){return[l]}),[c.Kb]),e.sb(3,49152,null,0,c.ib,[e.h,e.k,e.z],{placeholder:[0,"placeholder"]},null),e.sb(4,16384,null,0,c.Kb,[e.k],null,null)],(function(l,n){l(n,3,0,"Search Films")}),null)}function f(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,4,"div",[["class","zeroResults"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,3,"ion-text",[["color","medium"]],null,null,null,o.H,o.p)),e.sb(2,49152,null,0,c.vb,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(3,0,null,0,1,"h5",[["class","ion-no-margin"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Nothing has been found..."]))],(function(l,n){l(n,2,0,"medium")}),null)}function m(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,4,"div",[["class","film"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,3,"img",[["class","film__image"]],[[8,"src",4]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Eb(l,2).onClick()&&u),"click"===n&&(u=!1!==e.Eb(l,4).onClick(t)&&u),u}),null,null)),e.sb(2,16384,null,0,s.n,[s.m,s.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Fb(3,2),e.sb(4,737280,null,0,c.Jb,[a.g,c.Fb,e.k,s.m,[2,s.n]],null,null)],(function(l,n){var t=l(n,3,0,"/details-film",n.context.$implicit.id);l(n,2,0,t),l(n,4,0)}),(function(l,n){l(n,1,0,n.component.getFilmPoster(n.context.index))}))}function k(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,26,"ion-content",[],null,null,null,o.w,o.e)),e.sb(1,49152,null,0,c.s,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,24,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.tb(3,0,null,null,12,"div",[["class","bottom"]],null,null,null,null,null)),(l()(),e.tb(4,0,null,null,0,"div",[["class","bottom-gradient"]],null,null,null,null,null)),(l()(),e.tb(5,0,null,null,10,"div",[["class","search-type-selector"]],null,null,null,null,null)),(l()(),e.tb(6,0,null,null,4,"div",[["class","search-type search-type__sortby"]],[[2,"search-type--selected",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==(l.component.searchType=0)&&e),e}),null,null)),(l()(),e.tb(7,0,null,null,3,"ion-text",[["color","dark"]],null,null,null,o.H,o.p)),e.sb(8,49152,null,0,c.vb,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(9,0,null,0,1,"h5",[["class","ion-no-margin"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Sort By"])),(l()(),e.tb(11,0,null,null,4,"div",[["class","search-type search-type__search"],["color","tertiary"]],[[2,"search-type--selected",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==(l.component.searchType=1)&&e),e}),null,null)),(l()(),e.tb(12,0,null,null,3,"ion-text",[["color","light"]],null,null,null,o.H,o.p)),e.sb(13,49152,null,0,c.vb,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.tb(14,0,null,0,1,"h5",[["class","ion-no-margin"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Search"])),(l()(),e.tb(16,0,null,null,4,"div",[["class","top"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,g)),e.sb(18,16384,null,0,a.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,h)),e.sb(20,16384,null,0,a.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.tb(21,0,null,null,5,"div",[["class","results"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,f)),e.sb(23,16384,null,0,a.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.tb(24,0,null,null,2,"div",[["class","films-container"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,m)),e.sb(26,278528,null,0,a.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,8,0,"dark"),l(n,13,0,"light"),l(n,18,0,0===t.searchType),l(n,20,0,1===t.searchType),l(n,23,0,t.noResults),l(n,26,0,t.results)}),(function(l,n){var t=n.component;l(n,6,0,0===t.searchType),l(n,11,0,1===t.searchType)}))}function y(l){return e.Kb(0,[(l()(),e.ib(16777216,null,null,1,null,k)),e.sb(1,16384,null,0,a.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,void 0!==n.component.results)}),null)}function x(l){return e.Kb(0,[(l()(),e.tb(0,0,null,null,1,"app-search",[],null,null,null,y,d)),e.sb(1,114688,null,0,p,[b.a,c.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var C=e.pb("app-search",p,x,{},{},[]),w=function(){return function(){}}();t.d(n,"SearchPageModuleNgFactory",(function(){return v}));var v=e.qb(u,[],(function(l){return e.Bb([e.Cb(512,e.j,e.bb,[[8,[i.a,C]],[3,e.j],e.x]),e.Cb(4608,a.k,a.j,[e.u,[2,a.q]]),e.Cb(4608,r.d,r.d,[]),e.Cb(4608,c.a,c.a,[e.z,e.g]),e.Cb(4608,c.Eb,c.Eb,[c.a,e.j,e.q]),e.Cb(4608,c.Ib,c.Ib,[c.a,e.j,e.q]),e.Cb(1073742336,a.b,a.b,[]),e.Cb(1073742336,r.c,r.c,[]),e.Cb(1073742336,r.a,r.a,[]),e.Cb(1073742336,c.Cb,c.Cb,[]),e.Cb(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),e.Cb(1073742336,w,w,[]),e.Cb(1073742336,u,u,[]),e.Cb(1024,s.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);