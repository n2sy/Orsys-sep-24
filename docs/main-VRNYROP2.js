import{$ as Ie,A as M,B as y,C as s,D as ne,E as b,F as ie,G as oe,H as re,I as ae,J as Me,K as $,L as ke,M as we,N as O,O as A,P as Pe,Q as se,S as Y,T as Te,U as Ee,V as Oe,W as Ae,X as le,Y as ce,Z as I,_ as N,a as ee,aa as Fe,b as _e,ba as F,c as te,ca as K,d as G,da as D,e as u,ea as R,f as be,fa as De,g as Se,ga as J,h as xe,ha as me,i as v,ia as V,j as h,ja as B,k as H,ka as pe,l as W,la as Le,m as l,ma as Ne,n as g,na as Re,o as k,oa as Ve,p as m,pa as Be,q as ye,qa as de,r as w,ra as ue,s as P,sa as je,t as T,ta as ze,u as E,ua as Ue,v as r,va as Ge,w as o,wa as He,x as c,xa as We,y as x,z as d}from"./chunk-W4DABSLK.js";var j=(()=>{let e=class e{constructor(i){this.http=i,this.link="http://localhost:3000/auth"}seConnecter(i){return this.http.post(`${this.link}/login`,i)}Inscription(i){return this.http.post(`${this.link}/register`,i)}estConnecte(){return!!localStorage.getItem("access_token")}seDeconnecter(){localStorage.removeItem("access_token")}};e.\u0275fac=function(t){return new(t||e)(te(Y))},e.\u0275prov=ee({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Ce=()=>({exact:!0});function _t(n,e){n&1&&(r(0,"li",1)(1,"a",7),s(2,"Add CV"),o()()),n&2&&(l(),m("routerLinkActiveOptions",$(1,Ce)))}function bt(n,e){n&1&&(r(0,"li",1)(1,"a",8),s(2,"Login"),o()())}function St(n,e){if(n&1){let p=x();r(0,"li",1)(1,"a",9),d("click",function(){v(p);let t=M();return h(t.authSer.seDeconnecter())}),s(2,"Logout"),o()()}}var Je=(()=>{let e=class e{constructor(i){this.authSer=i}};e.\u0275fac=function(t){return new(t||e)(g(j))},e.\u0275cmp=u({type:e,selectors:[["app-navbar"]],decls:19,vars:6,consts:[[1,"nav","nav-tabs"],[1,"nav-item"],["aria-current","page","routerLink","/","routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions"],["routerLink","cv","routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions"],["routerLink","accounts","routerLinkActive","active",1,"nav-link"],["routerLink","ms-word","routerLinkActive","active",1,"nav-link"],["routerLink","servers","routerLinkActive","active",1,"nav-link"],["routerLink","cv/add","routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions"],["routerLink","login","routerLinkActive","active",1,"nav-link"],[1,"nav-link",3,"click"]],template:function(t,a){t&1&&(r(0,"ul",0)(1,"li",1)(2,"a",2),s(3,"Accueil"),o()(),r(4,"li",1)(5,"a",3),s(6,"CV"),o()(),k(7,_t,3,2,"li",1),r(8,"li",1)(9,"a",4),s(10,"Accounts"),o()(),r(11,"li",1)(12,"a",5),s(13,"Ms-word"),o()(),r(14,"li",1)(15,"a",6),s(16,"Servers"),o()(),k(17,bt,3,0,"li",1)(18,St,3,0,"li",1),o()),t&2&&(l(2),m("routerLinkActiveOptions",$(4,Ce)),l(3),m("routerLinkActiveOptions",$(5,Ce)),l(2),w(a.authSer.estConnecte()?7:-1),l(10),w(a.authSer.estConnecte()?18:17))},dependencies:[N,Ie]});let n=e;return n})();var qe=(()=>{let e=class e{constructor(){this.title="Orsys-Sep-24"}traitementDuApp(i){alert(i)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container"]],template:function(t,a){t&1&&(r(0,"div",0),c(1,"app-navbar")(2,"router-outlet"),o())},dependencies:[ce,Je]});let n=e;return n})();var U=class{getAllRecrues(){return this.tabRecrues}addRecrue(e){this.tabRecrues.indexOf(e)==-1?this.tabRecrues.push(e):alert("Ce candidat a d\xE9j\xE0 \xE9t\xE9 recrut\xE9 !")}constructor(){this.tabRecrues=[]}};var q=class{constructor(e,p,i,t,a,f){this._id=e,this.prenom=p,this.nom=i,this.age=t,this.profession=a,this.avatar=f}};var L=(()=>{let e=class e{constructor(i){this.http=i,this.link="http://localhost:3000/cv/candidats",this.listeCandidats=[new q(1,"bart","simpson",25,"ing\xE9nieur","bart.jpeg"),new q(2,"homer","simpson",57,"directeur"),new q(3,"lisa","simpson",21,"designer","lisa.png")]}getAllCandidats(){return this.listeCandidats}getAllCandidatsAPI(){return this.http.get(this.link)}getCandidatById(i){return this.listeCandidats.find(t=>t._id==i)}getCandidatByIdAPI(i){return this.http.get(`${this.link}/${i}`)}addCandidatAPI(i){return this.http.post(`${this.link}`,i)}uploadAvatar(i){return this.http.post("http://localhost:3000/images/upload",i)}addCandidat(i){i.id=this.listeCandidats[this.listeCandidats.length-1]._id+1,this.listeCandidats.push(i)}updateCandidat(i){let t=this.listeCandidats.findIndex(a=>a._id==i.id);this.listeCandidats[t]=i}updateCandidatAPI(i){return this.http.put(`${this.link}/${i._id}`,i)}deleteCandidat(i){let t=this.listeCandidats.findIndex(a=>a._id==i.id);this.listeCandidats.splice(t,1)}deleteCandidatAPI(i){return this.http.delete(`${this.link}/${i}`)}showInfos(){console.log("Je suis un service !!!!!!")}};e.\u0275fac=function(t){return new(t||e)(te(Y))},e.\u0275prov=ee({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Ze=(()=>{let e=class e{constructor(){this.bg="white",this.cl="black"}mouseenter(){this.bg="grey",this.cl="white"}mouseleave(){this.bg="pink",this.cl="black"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=Se({type:e,selectors:[["li","appCustomDir",""]],hostVars:4,hostBindings:function(t,a){t&1&&d("mouseenter",function(){return a.mouseenter()})("mouseleave",function(){return a.mouseleave()}),t&2&&ye("background-color",a.bg)("color",a.cl)}});let n=e;return n})();var Z=(()=>{let e=class e{transform(i){return i||"avatar.jpg"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=xe({name:"noAvatar",type:e,pure:!0});let n=e;return n})();var fe=(()=>{let e=class e{constructor(){this.eventToListe=new H}sendCandidateToListe(){this.eventToListe.emit(this.unCandidat)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-item"]],inputs:{unCandidat:"unCandidat"},outputs:{eventToListe:"eventToListe"},decls:4,vars:5,consts:[["appCustomDir","",1,"list-group-item",3,"click"],[3,"src"]],template:function(t,a){t&1&&(r(0,"li",0),d("click",function(){return a.sendCandidateToListe()}),c(1,"img",1),O(2,"noAvatar"),s(3),o()),t&2&&(l(),m("src",A(2,3,a.unCandidat.avatar),W),l(2),ie(" ",a.unCandidat.prenom," ",a.unCandidat.nom,`
`))},dependencies:[Ze,Z],styles:["img[_ngcontent-%COMP%]{width:50px;height:50px}"]});let n=e;return n})();function wt(n,e){if(n&1){let p=x();r(0,"app-item",2),d("eventToListe",function(t){v(p);let a=M();return h(a.sendCandidateToCv(t))}),o()}if(n&2){let p=e.$implicit;m("unCandidat",p)}}var Qe=(()=>{let e=class e{constructor(i){this.candSer=i,this.allCandidats=[],this.eventToCv=new H}ngOnInit(){this.candSer.getAllCandidatsAPI().subscribe({next:i=>{this.allCandidats=i},error:i=>{console.log("Erreur avec GET"),alert("API inaccessible. Donn\xE9es fictives !"),this.allCandidats=this.candSer.getAllCandidats()}})}sendCandidateToCv(i){this.eventToCv.emit(i)}};e.\u0275fac=function(t){return new(t||e)(g(L))},e.\u0275cmp=u({type:e,selectors:[["app-liste"]],outputs:{eventToCv:"eventToCv"},decls:3,vars:0,consts:[[1,"list-group"],[3,"unCandidat"],[3,"eventToListe","unCandidat"]],template:function(t,a){t&1&&(r(0,"ol",0),T(1,wt,1,1,"app-item",1,P),o()),t&2&&(l(),E(a.allCandidats))},dependencies:[fe]});let n=e;return n})();var Tt=n=>[n],Xe=(()=>{let e=class e{constructor(){this.recrueService=G(U)}addNewRecrue(){this.recrueService.addRecrue(this.targetCandidate)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-details"]],inputs:{targetCandidate:"targetCandidate"},decls:52,vars:10,consts:[[1,"card-container"],[1,"card"],[1,"front"],[1,"cover"],["src","rotating_card_thumb2.png"],[1,"user"],[1,"img-circle",3,"src"],[1,"content"],[1,"main"],[1,"name"],[1,"profession"],[1,"text-center"],[1,"footer"],[1,"rating"],[1,"fa","fa-mail-forward"],[1,"back"],[1,"header"],[1,"motto"],[1,"stats-container"],[1,"stats"],[1,"social-links","text-center"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-info",3,"routerLink"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),c(4,"img",4),o(),r(5,"div",5),c(6,"img",6),O(7,"noAvatar"),o(),r(8,"div",7)(9,"div",8)(10,"h3",9),s(11),o(),r(12,"p",10),s(13),o(),r(14,"p",11),s(15),o()(),r(16,"div",12)(17,"div",13),c(18,"i",14),s(19," Auto Rotation "),o()()()(),r(20,"div",15)(21,"div",16)(22,"h5",17),s(23,'"To be or not to be, this is my awesome motto!"'),o()(),r(24,"div",7)(25,"div",8)(26,"h4",11),s(27,"Job Description"),o(),r(28,"p",11),s(29," Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others... "),o(),r(30,"div",18)(31,"div",19)(32,"h4"),s(33,"235"),o(),r(34,"p"),s(35,"Followers"),o()(),r(36,"div",19)(37,"h4"),s(38,"114"),o(),r(39,"p"),s(40,"Following"),o()(),r(41,"div",19)(42,"h4"),s(43,"35"),o(),r(44,"p"),s(45,"Projects"),o()()()()(),r(46,"div",12)(47,"div",20)(48,"button",21),d("click",function(){return a.addNewRecrue()}),s(49," Recruter "),o(),r(50,"a",22),s(51," Details "),o()()()()()()),t&2&&(l(6),m("src",A(7,6,a.targetCandidate.avatar),W),l(5),ie(" ",a.targetCandidate.prenom," ",a.targetCandidate.nom," "),l(2),b("",a.targetCandidate.age," ans"),l(2),b(" ",a.targetCandidate.profession," "),l(35),m("routerLink",ke(8,Tt,a.targetCandidate._id)))},dependencies:[N,Z],styles:["body[_ngcontent-%COMP%]{margin-top:60px;font-size:14px;font-family:helvetica nueue,Arial,Verdana,sans-serif;background-color:#e5e9ed}.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active{outline:0!important}.card-container[_ngcontent-%COMP%]{-webkit-perspective:800px;-moz-perspective:800px;-o-perspective:800px;perspective:800px;margin-bottom:30px}.card-container[_ngcontent-%COMP%]:not(.manual-flip):hover   .card[_ngcontent-%COMP%], .card-container.hover.manual-flip[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg)}.card-container.static[_ngcontent-%COMP%]:hover   .card[_ngcontent-%COMP%], .card-container.static.hover[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{-webkit-transform:none;-moz-transform:none;-o-transform:none;transform:none}.card[_ngcontent-%COMP%]{-webkit-transition:-webkit-transform .5s;-moz-transition:-moz-transform .5s;-o-transition:-o-transform .5s;transition:transform .5s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0;background-color:#fff;box-shadow:0 1px 3px #00000024}.front[_ngcontent-%COMP%]{z-index:2}.back[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg);z-index:3}.back[_ngcontent-%COMP%]   .btn-simple[_ngcontent-%COMP%]{position:absolute;left:0;bottom:4px}.card[_ngcontent-%COMP%]{background:none repeat scroll 0 0 #fff;border-radius:4px;color:#444}.card-container[_ngcontent-%COMP%], .front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{width:100%;height:420px;border-radius:4px}.card[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{height:105px;overflow:hidden;border-radius:4px 4px 0 0}.card[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{border-radius:50%;display:block;height:120px;margin:-55px auto 0;overflow:hidden;width:120px}.card[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:none repeat scroll 0 0 #fff;border:4px solid #fff;width:100%}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;padding:10px 20px 20px}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{min-height:160px}.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{height:215px}.card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:22px;line-height:28px;margin:10px 0 0;text-align:center;text-transform:capitalize}.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:5px 0;font-weight:400;line-height:20px}.card[_ngcontent-%COMP%]   .profession[_ngcontent-%COMP%]{color:#999;text-align:center;margin-bottom:20px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{border-top:1px solid #eee;color:#999;margin:30px 0 0;padding:10px 0 0;text-align:center}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{font-size:18px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 7px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-simple[_ngcontent-%COMP%]{margin-top:-6px}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:15px 20px;height:90px}.card[_ngcontent-%COMP%]   .motto[_ngcontent-%COMP%]{border-bottom:1px solid #eee;color:#999;font-size:14px;font-weight:400;padding-bottom:10px;text-align:center}.card[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%]{width:100%;margin-top:50px}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:block;float:left;width:33.333333%;text-align:center}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]:first-child{border-right:1px solid #eee}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]:last-child{border-left:1px solid #eee}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:300;margin-bottom:5px}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#777}.title[_ngcontent-%COMP%]{color:#506a85;text-align:center;font-weight:300;font-size:44px;margin-bottom:90px;line-height:90%}.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:17px;color:#999;text-transform:uppercase;margin:0}.space-30[_ngcontent-%COMP%]{height:30px;display:block}.space-50[_ngcontent-%COMP%]{height:50px;display:block}.space-200[_ngcontent-%COMP%]{height:200px;display:block}.white-board[_ngcontent-%COMP%]{background-color:#fff;min-height:200px;padding:60px 60px 20px}.ct-heart[_ngcontent-%COMP%]{color:#f74933}pre.prettyprint[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #999;margin-top:20px;padding:20px;text-align:left}.atv[_ngcontent-%COMP%], .str[_ngcontent-%COMP%]{color:#05ae0e}.tag[_ngcontent-%COMP%], .pln[_ngcontent-%COMP%], .kwd[_ngcontent-%COMP%]{color:#3472f7}.atn[_ngcontent-%COMP%]{color:#2c93ff}.pln[_ngcontent-%COMP%]{color:#333}.com[_ngcontent-%COMP%]{color:#999}.btn-simple[_ngcontent-%COMP%]{opacity:.8;color:#666;background-color:transparent}.btn-simple[_ngcontent-%COMP%]:hover, .btn-simple[_ngcontent-%COMP%]:focus{background-color:transparent;box-shadow:none;opacity:1}.btn-simple[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px}.navbar-brand-logo[_ngcontent-%COMP%]{padding:0}.navbar-brand-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border:1px solid #333;border-radius:50%;float:left;overflow:hidden;width:60px}.navbar[_ngcontent-%COMP%]   .navbar-brand-logo[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#fff;float:left;font-size:18px;font-weight:400;line-height:20px;margin-left:10px;margin-top:10px;width:60px}.navbar-default[_ngcontent-%COMP%]   .navbar-brand-logo[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#555}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{-ms-backface-visibility:visible;backface-visibility:visible}.back[_ngcontent-%COMP%]{visibility:hidden;-ms-transition:all .2s cubic-bezier(.92,.01,.83,.67)}.front[_ngcontent-%COMP%]{z-index:4}.card-container[_ngcontent-%COMP%]:not(.manual-flip):hover   .back[_ngcontent-%COMP%], .card-container.manual-flip.hover[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{z-index:5;visibility:visible}}"]});let n=e;return n})();function Ot(n,e){if(n&1&&c(0,"app-item",1),n&2){let p=e.$implicit;m("unCandidat",p)}}function At(n,e){if(n&1&&(r(0,"div")(1,"h4"),s(2,"Liste des recrues"),o(),r(3,"ol",0),T(4,Ot,1,1,"app-item",1,P),o()()),n&2){let p=M();l(4),E(p.tabRecrues)}}var et=(()=>{let e=class e{constructor(i){this.candService=i,this.tabRecrues=[]}ngOnInit(){this.tabRecrues=this.candService.getAllRecrues()}};e.\u0275fac=function(t){return new(t||e)(g(U))},e.\u0275cmp=u({type:e,selectors:[["app-recruter"]],decls:1,vars:1,consts:[[1,"list-group"],[3,"unCandidat"]],template:function(t,a){t&1&&k(0,At,6,0,"div"),t&2&&w(a.tabRecrues.length?0:-1)},dependencies:[fe]});let n=e;return n})();function Ft(n,e){if(n&1&&c(0,"app-details",4),n&2){let p=M();m("targetCandidate",p.selectedCandidate)}}function Dt(n,e){n&1&&(r(0,"h4"),s(1,"Veuillez s\xE9lectionner un candidat..."),o())}var tt=(()=>{let e=class e{constructor(i){this.candService=i,this.tabCandidats=[]}ngOnInit(){this.tabCandidats=this.candService.getAllCandidats()}getClickedCandidate(i){this.selectedCandidate=i}};e.\u0275fac=function(t){return new(t||e)(g(L))},e.\u0275cmp=u({type:e,selectors:[["app-cv"]],features:[Me([U])],decls:8,vars:1,consts:[[1,"row"],[1,"col-5"],[3,"eventToCv"],[1,"col-7"],[3,"targetCandidate"]],template:function(t,a){t&1&&(c(0,"router-outlet"),r(1,"div",0)(2,"div",1)(3,"app-liste",2),d("eventToCv",function(S){return a.getClickedCandidate(S)}),o()(),r(4,"div",3),k(5,Ft,1,1,"app-details",4)(6,Dt,2,0,"h4"),o()(),c(7,"app-recruter")),t&2&&(l(5),w(a.selectedCandidate?5:6))},dependencies:[ce,Qe,Xe,et]});let n=e;return n})();function Lt(n,e){if(n&1&&(r(0,"option",4),s(1),o()),n&2){let p=e.$implicit;m("value",p),l(),ne(p)}}var nt=(()=>{let e=class e{constructor(){this.allStatus=["","active","inactive","unknown"],this.eventToHome=new H}onAddAccount(i,t){console.log(i,t),this.eventToHome.emit({nom:i,statut:t})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-add-account"]],outputs:{eventToHome:"eventToHome"},decls:12,vars:0,consts:[["inpName",""],["selectStatut",""],["type","text",1,"form-control"],[1,"form-control"],[3,"value"],[1,"btn","btn-primary",3,"click"]],template:function(t,a){if(t&1){let f=x();r(0,"label"),s(1,"Account Name"),o(),c(2,"input",2,0),r(4,"label"),s(5,"Account Status"),o(),r(6,"select",3,1),T(8,Lt,2,2,"option",4,P),o(),r(10,"button",5),d("click",function(){v(f);let _=y(3),ge=y(7);return h(a.onAddAccount(_.value,ge.value))}),s(11,` Add Account
`),o()}t&2&&(l(8),E(a.allStatus))},dependencies:[de,ue]});let n=e;return n})();var it=(()=>{let e=class e{changeStatus(i){this.account.statut=i}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-item-account"]],inputs:{account:"account"},decls:12,vars:5,consts:[[1,"bordure"],[1,"btn","btn-success",3,"click","disabled"],[1,"btn","btn-danger",3,"click","disabled"],[1,"btn","btn-info",3,"click","disabled"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"h3"),s(2),o(),c(3,"hr"),r(4,"p"),s(5),o(),r(6,"button",1),d("click",function(){return a.changeStatus("active")}),s(7," Set to 'active' "),o(),r(8,"button",2),d("click",function(){return a.changeStatus("inactive")}),s(9," Set to 'inactive' "),o(),r(10,"button",3),d("click",function(){return a.changeStatus("unknown")}),s(11," Set to 'unknown' "),o()()),t&2&&(l(2),ne(a.account.nom),l(3),b("This account is ",a.account.statut,""),l(),m("disabled",a.account.statut=="active"),l(2),m("disabled",a.account.statut=="inactive"),l(2),m("disabled",a.account.statut=="unknown"))},styles:[".bordure[_ngcontent-%COMP%]{border:1px solid grey;margin:10px;padding:10px}"]});let n=e;return n})();function Vt(n,e){if(n&1&&c(0,"app-item-account",1),n&2){let p=e.$implicit;m("account",p)}}var ot=(()=>{let e=class e{constructor(){this.tabAccounts=[{nom:"Marie Account",statut:"active"},{nom:"Matthieu Account",statut:"inactive"}]}addAccount(i){this.tabAccounts.push(i)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-home-account"]],decls:3,vars:0,consts:[[3,"eventToHome"],[3,"account"]],template:function(t,a){t&1&&(r(0,"app-add-account",0),d("eventToHome",function(S){return a.addAccount(S)}),o(),T(1,Vt,1,1,"app-item-account",1,P)),t&2&&(l(),E(a.tabAccounts))},dependencies:[nt,it]});let n=e;return n})();var Bt=(n,e,p,i)=>({backgroundColor:n,color:e,fontSize:p,fontFamily:i});function jt(n,e){if(n&1&&(r(0,"option",5),s(1),o()),n&2){let p=e.$implicit;m("value",p),l(),b("",p,"\xA0")}}var at=(()=>{let e=class e{constructor(){this.listFonts=["","Arial","Phosphate","Garamond"]}changeSize(i){let t=prompt("Veuillez saisir une unit\xE9");this.txtSize=`${i}${t}`}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-ms-word"]],decls:17,vars:9,consts:[["sz",""],[3,"ngStyle"],["type","text",1,"form-control",3,"ngModelChange","ngModel"],["type","number",1,"form-control",3,"change"],[1,"form-control",3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,a){if(t&1){let f=x();r(0,"p",1),s(1,` Exercice de NgStyle
`),o(),r(2,"label"),s(3,"Background Color"),o(),r(4,"input",2),ae("ngModelChange",function(_){return v(f),re(a.bgColor,_)||(a.bgColor=_),h(_)}),o(),r(5,"label"),s(6,"Text Color"),o(),r(7,"input",2),ae("ngModelChange",function(_){return v(f),re(a.txtColor,_)||(a.txtColor=_),h(_)}),o(),r(8,"label"),s(9,"Text Size"),o(),r(10,"input",3,0),d("change",function(){v(f);let _=y(11);return h(a.changeSize(_.value))}),o(),r(12,"label"),s(13,"Text Font"),o(),r(14,"select",4),ae("ngModelChange",function(_){return v(f),re(a.txtFont,_)||(a.txtFont=_),h(_)}),T(15,jt,2,2,"option",5,P),o()}t&2&&(m("ngStyle",we(4,Bt,a.bgColor,a.txtColor,a.txtSize,a.txtFont)),l(4),oe("ngModel",a.bgColor),l(3),oe("ngModel",a.txtColor),l(7),oe("ngModel",a.txtFont),l(),E(a.listFonts))},dependencies:[Pe,de,ue,F,Be,D,V]});let n=e;return n})();var Gt=()=>["servers"],st=(()=>{let e=class e{constructor(i,t){this.router=i,this.http=t}ngOnInit(){this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)}})}goToCv(){this.router.navigateByUrl("cv")}goToServers(){this.router.navigate(["servers"])}};e.\u0275fac=function(t){return new(t||e)(g(I),g(Y))},e.\u0275cmp=u({type:e,selectors:[["app-accueil"]],decls:18,vars:2,consts:[["routerLink","cv",1,"btn","btn-primary"],[1,"btn","btn-warning",3,"routerLink"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-info",3,"click"]],template:function(t,a){t&1&&(r(0,"h3"),s(1,"Bienvenue chez Orsys pour cette formation en Angular"),o(),r(2,"strong"),s(3,"Navigation c\xF4t\xE9 HTML"),o(),c(4,"br"),r(5,"button",0),s(6,"Go To CV"),o(),r(7,"button",1),s(8,` Go To Servers
`),o(),c(9,"br")(10,"hr"),r(11,"strong"),s(12,"Navigation c\xF4t\xE9 TS"),o(),c(13,"br"),r(14,"button",2),d("click",function(){return a.goToCv()}),s(15,"Go To CV"),o(),r(16,"button",3),d("click",function(){return a.goToServers()}),s(17,"Go To Servers"),o()),t&2&&(l(7),m("routerLink",$(1,Gt)))},dependencies:[N]});let n=e;return n})();var lt=(()=>{let e=class e{constructor(i,t,a){this.actRoute=i,this.candSer=t,this.router=a}ngOnInit(){this.actRoute.paramMap.subscribe({next:i=>{this.candSer.getCandidatByIdAPI(i.get("id")).subscribe({next:t=>{this.candidateToShow=t},error:t=>{console.log("Erreur avec Get By"),this.router.navigateByUrl("/not-found")}})}})}onDelete(){confirm("Etes-vous s\xFBr de vouloir supprimer ce candidat ?")&&this.candSer.deleteCandidatAPI(this.candidateToShow._id).subscribe({next:i=>{alert(i.message),this.router.navigateByUrl("/cv")},error:i=>{console.log("Erreur avec DELETE")}})}};e.\u0275fac=function(t){return new(t||e)(g(le),g(L),g(I))},e.\u0275cmp=u({type:e,selectors:[["app-infos"]],decls:44,vars:8,consts:[[1,"d-flex","justify-content-center"],[1,"col-lg-8","push-lg-4"],[1,"tab-content","p-b-3"],["id","profile",1,"tab-pane","active"],["width","150px","height","150px","alt","",1,"rounded-circle","align-content-center",3,"src"],[1,"row"],[1,"col-md-12"],[1,"m-t-2"],[1,"fa","fa-clock-o","ion-clock","pull-xs-right"],[1,"table","table-hover","table-striped"],[1,"btn","btn-danger",3,"click"],["routerLink","edit",1,"btn","btn-primary"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",0),c(5,"img",4),O(6,"noAvatar"),o(),r(7,"div",5)(8,"div",6)(9,"h4",7),c(10,"span",8),s(11," Informations "),o(),r(12,"table",9)(13,"tbody")(14,"tr")(15,"td")(16,"strong"),s(17,"Pr\xE9nom"),o(),s(18),o()(),r(19,"tr")(20,"td")(21,"strong"),s(22,"Nom"),o(),s(23),o()(),r(24,"tr")(25,"td")(26,"strong"),s(27,"Age"),o(),s(28),o()(),r(29,"tr")(30,"td")(31,"strong"),s(32,"Profession"),o(),s(33),o()(),r(34,"tr")(35,"td")(36,"strong"),s(37,"Avatar"),o(),s(38),o()()()(),r(39,"div",0)(40,"button",10),d("click",function(){return a.onDelete()}),s(41," Delete "),o(),r(42,"button",11),s(43,"Update"),o()()()()()()()()),t&2&&(l(5),m("src",A(6,6,a.candidateToShow==null?null:a.candidateToShow.avatar),W),l(13),b(" ",a.candidateToShow==null?null:a.candidateToShow.prenom,""),l(5),b(" ",a.candidateToShow==null?null:a.candidateToShow.nom,""),l(5),b(" ",a.candidateToShow==null?null:a.candidateToShow.age,""),l(5),b(" ",a.candidateToShow==null?null:a.candidateToShow.profession," "),l(5),b(" ",a.candidateToShow==null?null:a.candidateToShow.avatar,""))},dependencies:[N,Z]});let n=e;return n})();var ct=(()=>{let e=class e{constructor(i,t){this.candSer=i,this.router=t}onSubmit(i,t){let a=new FormData;a.append("avatar",t.target[4].files[0]),this.candSer.uploadAvatar(a).subscribe({next:f=>{i.avatar=f.fileName,this.candSer.addCandidatAPI(i).subscribe({next:S=>{alert(S.message),this.router.navigateByUrl("/cv")},error:S=>{console.log("Probleme avec le POST")}})}})}};e.\u0275fac=function(t){return new(t||e)(g(L),g(I))},e.\u0275cmp=u({type:e,selectors:[["app-add"]],decls:20,vars:0,consts:[["f","ngForm"],[3,"ngSubmit"],["for",""],["ngModel","","name","prenom","type","text",1,"form-control"],["ngModel","","name","nom","type","text",1,"form-control"],["ngModel","","name","age","type","number",1,"form-control"],["ngModel","","name","profession","type","text",1,"form-control"],["name","avatar","type","file",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(t,a){if(t&1){let f=x();r(0,"form",1,0),d("ngSubmit",function(_){v(f);let ge=y(1);return h(a.onSubmit(ge.value,_))}),r(2,"label",2),s(3,"Pr\xE9nom"),o(),c(4,"input",3),r(5,"label",2),s(6,"Nom"),o(),c(7,"input",4),r(8,"label",2),s(9,"Age"),o(),c(10,"input",5),r(11,"label",2),s(12,"Profession"),o(),c(13,"input",6),r(14,"label",2),s(15,"Avatar"),o(),c(16,"input",7)(17,"br"),r(18,"button",8),s(19,"Ajouter"),o()()}},dependencies:[B,F,pe,D,R,V,J]});let n=e;return n})();var mt=(()=>{let e=class e{constructor(i,t,a){this.actRoute=i,this.candSer=t,this.router=a}ngOnInit(){this.actRoute.paramMap.subscribe({next:i=>{this.candSer.getCandidatByIdAPI(i.get("id")).subscribe({next:t=>{this.candidateToUpdate=t},error:t=>{console.log(t)}})}})}onSubmit(i){i._id=this.candidateToUpdate._id,this.candSer.updateCandidatAPI(i).subscribe({next:t=>{alert(t.message),this.router.navigateByUrl("/cv")},error:t=>{console.log("Probleme avec PUT")}})}};e.\u0275fac=function(t){return new(t||e)(g(le),g(L),g(I))},e.\u0275cmp=u({type:e,selectors:[["app-update"]],decls:20,vars:5,consts:[["f","ngForm"],[3,"ngSubmit"],["for",""],["name","prenom","type","text",1,"form-control",3,"ngModel"],["ngModel","","name","nom","type","text",1,"form-control",3,"ngModel"],["ngModel","","name","age","type","number",1,"form-control",3,"ngModel"],["ngModel","","name","profession","type","text",1,"form-control",3,"ngModel"],["ngModel","","name","avatar","type","text",1,"form-control",3,"ngModel"],["type","submit",1,"btn","btn-primary"]],template:function(t,a){if(t&1){let f=x();r(0,"form",1,0),d("ngSubmit",function(){v(f);let _=y(1);return h(a.onSubmit(_.value))}),r(2,"label",2),s(3,"Pr\xE9nom"),o(),c(4,"input",3),r(5,"label",2),s(6,"Nom"),o(),c(7,"input",4),r(8,"label",2),s(9,"Age"),o(),c(10,"input",5),r(11,"label",2),s(12,"Profession"),o(),c(13,"input",6),r(14,"label",2),s(15,"Avatar"),o(),c(16,"input",7)(17,"br"),r(18,"button",8),s(19,"Ajouter"),o()()}t&2&&(l(4),m("ngModel",a.candidateToUpdate==null?null:a.candidateToUpdate.prenom),l(3),m("ngModel",a.candidateToUpdate==null?null:a.candidateToUpdate.nom),l(3),m("ngModel",a.candidateToUpdate==null?null:a.candidateToUpdate.age),l(3),m("ngModel",a.candidateToUpdate==null?null:a.candidateToUpdate.profession),l(3),m("ngModel",a.candidateToUpdate==null?null:a.candidateToUpdate.avatar))},dependencies:[B,F,pe,D,R,V,J]});let n=e;return n})();var pt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-not-found"]],decls:3,vars:0,consts:[["src","https://img.freepik.com/vecteurs-libre/erreur-404-illustration-concept-paysage_114360-7898.jpg","alt",""]],template:function(t,a){t&1&&(r(0,"h4"),s(1,"Le chemin demand\xE9 n'existe pas..."),o(),c(2,"img",0))}});let n=e;return n})();function Ht(n,e){n&1&&(r(0,"div",2),s(1,"Login et/ou mot de passe invalide(s)"),o())}function Wt(n,e){n&1&&(r(0,"div",2),s(1,"Veuillez saisir une adresse mail"),o())}function $t(n,e){if(n&1){let p=x();r(0,"button",8),d("click",function(){v(p);let t=M(),a=y(2);return h(t.onLogin(a))}),s(1," Se connecter "),o(),r(2,"button",9),d("click",function(){v(p);let t=M();return h(t.toggleShowRegister())}),s(3," Switch to Register "),o()}if(n&2){M();let p=y(2);m("disabled",p.invalid)}}function Yt(n,e){if(n&1){let p=x();r(0,"button",10),d("click",function(){v(p);let t=M(),a=y(2);return h(t.onRegister(a))}),s(1," S'inscrire "),o(),r(2,"button",11),d("click",function(){v(p);let t=M();return h(t.toggleShowRegister())}),s(3," Switch to Login "),o()}}var dt=(()=>{let e=class e{constructor(i,t){this.authSer=i,this.router=t,this.listeCompetences=["","java","php","python"],this.myComment="Rien \xE0 signaler...",this.defaultComptence="php",this.showError=!1,this.showRegister=!1}onLogin(i){this.authSer.seConnecter(i.value).subscribe({next:t=>{alert(t.message),localStorage.setItem("access_token",t.token),this.router.navigateByUrl("/cv")},error:t=>{console.log(t),this.showError=!0,i.reset()}})}onRegister(i){this.authSer.Inscription(i.value).subscribe({next:t=>{alert(t.message),this.toggleShowRegister(),i.reset()},error:t=>{console.log(t)}})}toggleShowRegister(){this.showRegister=!this.showRegister}onReset(i){i.reset()}modifierForm(i){i.form.patchValue({login:"",password:"",erreurs:"Matthieu"})}};e.\u0275fac=function(t){return new(t||e)(g(j),g(I))},e.\u0275cmp=u({type:e,selectors:[["app-login"]],decls:18,vars:6,consts:[["f","ngForm"],["inpLogin","ngModel"],[1,"alert","alert-danger"],["for",""],["ngModel","","type","text","name","email","required","","email","",1,"form-control"],["ngModel","","name","password","type","text","required","","minlength","4",1,"form-control"],[1,"row"],[1,"col-6","offset-4"],["type","submit",1,"btn","btn-primary",3,"click","disabled"],["type","button",1,"btn","btn-warning",3,"click"],["type","submit",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-dark",3,"click"]],template:function(t,a){if(t&1&&(k(0,Ht,2,0,"div",2),r(1,"form",null,0)(3,"label",3),s(4,"Login"),o(),c(5,"input",4,1),k(7,Wt,2,0,"div",2),r(8,"label",3),s(9,"Mot de passe"),o(),c(10,"input",5),r(11,"div",6)(12,"div",7),k(13,$t,4,1)(14,Yt,4,0),o()(),r(15,"pre"),s(16),O(17,"json"),o()()),t&2){let f=y(2),S=y(6);w(a.showError?0:-1),l(7),w(S.invalid&&S.touched?7:-1),l(6),w(a.showRegister?14:13),l(3),b("    ",A(17,4,f.value),`
  `)}},dependencies:[B,F,D,R,je,Ue,ze,V,J,se],styles:[".ng-invalid.ng-dirty[_ngcontent-%COMP%]{border-color:red}.ng-valid.ng-dirty[_ngcontent-%COMP%]{border-color:green}"]});let n=e;return n})();function Jt(n,e){n&1&&(r(0,"div",4),s(1,"Veuillez saisir une addresse mail valide"),o())}function qt(n,e){if(n&1&&(r(0,"div",7),c(1,"input",9),o()),n&2){let p=e.$implicit;l(),m("formControl",p)}}var ut=(()=>{let e=class e{ngOnInit(){this.signUpForm=new De({username:new me("nidhal",K.required),addrMail:new me("",[K.email,K.required]),skills:new Ge([])})}get formSkills(){return this.signUpForm.get("skills")}addSkill(){let i=new me("",K.required);this.formSkills.push(i)}onSubmit(){console.log(this.signUpForm.value)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-react-form"]],decls:20,vars:5,consts:[[3,"ngSubmit","formGroup"],["for",""],["type","text","formControlName","username",1,"form-control"],["type","text","formControlName","addrMail",1,"form-control"],[1,"alert","alert-danger"],["formArrayName","skills"],[3,"click"],[1,"form-group"],["type","submit",1,"btn","btn-primary"],["type","text",1,"form-control",3,"formControl"]],template:function(t,a){t&1&&(r(0,"form",0),d("ngSubmit",function(){return a.onSubmit()}),r(1,"label",1),s(2,"Nom d'utilisateur"),o(),c(3,"input",2),r(4,"label",1),s(5,"Addresse mail"),o(),c(6,"input",3),k(7,Jt,2,0,"div",4),r(8,"div",5)(9,"label"),s(10,"Skills"),o(),r(11,"button",6),d("click",function(){return a.addSkill()}),s(12,"+"),o(),T(13,qt,2,1,"div",7,P),o(),r(15,"pre"),s(16),O(17,"json"),o(),r(18,"button",8),s(19,"Submit"),o()()),t&2&&(m("formGroup",a.signUpForm),l(7),w(a.signUpForm.get("addrMail").invalid&&a.signUpForm.get("addrMail").dirty?7:-1),l(6),E(a.formSkills.controls),l(3),b("  ",A(17,3,a.signUpForm.value),`
`))},dependencies:[B,F,D,R,Le,Ne,Ve,Re,se]});let n=e;return n})();var he=(n,e)=>G(j).estConnecte();var ft=(n,e)=>!G(j).estConnecte();var gt=(n,e,p,i)=>!!localStorage.getItem("access_token");var Zt=[{path:"",component:st},{path:"cv",children:[{path:"",component:tt},{path:"add",component:ct,canActivate:[he]},{path:":id",children:[{path:"",component:lt},{path:"edit",component:mt,canActivate:[he]}]}]},{path:"accounts",component:ot},{path:"ms-word",component:at},{path:"react-form",component:ut},{path:"login",component:dt,canActivate:[ft],canDeactivate:[gt]},{path:"servers",loadChildren:()=>import("./chunk-3BCYLT4M.js").then(n=>n.SubModule)},{path:"not-found",component:pt},{path:"**",redirectTo:"not-found"}],Ct=Fe.forRoot(Zt);var vt=(n,e)=>{if(n.method=="GET")return e(n);let p=localStorage.getItem("access_token");if(p){console.log(n);let i=n.clone({setHeaders:{Authorization:`bearer ${p}`}});return console.log(i),e(i)}return e(n)};var ht=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=be({type:e,bootstrap:[qe]}),e.\u0275inj=_e({providers:[Te(Ee([vt]))],imports:[Ae,He,We,Ct]});let n=e;return n})();Oe().bootstrapModule(ht,{ngZoneEventCoalescing:!0}).catch(n=>console.error(n));
