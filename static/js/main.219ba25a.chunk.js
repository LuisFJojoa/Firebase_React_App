(this.webpackJsonpfirebase_auth_storage=this.webpackJsonpfirebase_auth_storage||[]).push([[0],{48:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),r=c(29),s=c.n(r),o=c(17),i=c(8),l=c(3),u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Home Page (Currently there is no info here). Please go to the product window to create a new product"})})},d=c(11),j=c(31),p=(c(40),c(41),{apiKey:"AIzaSyA5kfpbPySeR1mCt5zGibom_uz32XDDS2Q",authDomain:"react-auth-storage.firebaseapp.com",projectId:"react-auth-storage",storageBucket:"react-auth-storage.appspot.com",messagingSenderId:"484658456170",appId:"1:484658456170:web:d6b46070cbed4146758c13",measurementId:"G-PYSZLV7GGN"}),b=j.a.initializeApp(p),m=b.auth(),h=b.firestore(),O=m,f=function(){var e=Object(i.g)(),t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),u=o[0],j=o[1],p=Object(n.useState)(null),b=Object(d.a)(p,2),m=b[0],h=b[1];return Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsx)("div",{className:"col"}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O.createUserWithEmailAndPassword(a,u).then((function(t){e.push("/home")})).catch((function(e){"auth/invalid-email"==e.code&&h("Wrong Format email"),"auth/weak-password"==e.code&&h("Wrong Password, It must have 6 chars")}))},className:"form-group",children:[Object(l.jsx)("input",{onChange:function(e){r(e.target.value)},className:"form-control",placeholder:"Type your email",type:"email"}),Object(l.jsx)("input",{onChange:function(e){j(e.target.value)},className:"form-control mt-4",placeholder:"Type your password",type:"password"}),Object(l.jsx)("input",{className:"btn btn-dark btn-block mt-4",value:"Register user",type:"submit"})]}),Object(l.jsx)("button",{className:"btn btn-success btn-block",onClick:function(){O.signInWithEmailAndPassword(a,u).then((function(t){e.push("/home")})).catch((function(e){console.log(e),"auth/user-not-found"==e.code&&h("Wrong user email, try again."),"auth/wrong-password"==e.code&&h("Wrong Password, try again.")}))},children:"Login"}),null!=m?Object(l.jsx)("div",{className:"alert alert-danger mt-3 d-flex justify-content-center",children:m}):Object(l.jsx)("span",{})]}),Object(l.jsx)("div",{className:"col"})]})},x=function(){var e=Object(i.g)(),t=Object(n.useState)(null),c=Object(d.a)(t,2),a=c[0],r=c[1];Object(n.useEffect)((function(){O.onAuthStateChanged((function(e){e&&r(e.email)}))}),[]);return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(l.jsx)("ul",{className:"navbar-nav mr-auto",children:a?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/home",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{className:"nav-link",to:"/product",children:"Product"})})]}):Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})})}),a?Object(l.jsx)("button",{onClick:function(){O.signOut(),r(null),e.push("/login")},className:"btn btn-danger",children:"Logout"}):Object(l.jsx)("span",{})]})})},v=c(15),g=c.n(v),y=c(32),N=c(19),w=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(d.a)(r,2),o=s[0],i=s[1],u=Object(n.useState)([]),j=Object(d.a)(u,2),p=j[0],b=j[1],m=Object(n.useState)(null),O=Object(d.a)(m,2),f=O[0],x=O[1],v=Object(n.useState)(!1),w=Object(d.a)(v,2),k=w[0],S=w[1],C=Object(n.useState)("Create Product"),P=Object(d.a)(C,2),I=P[0],D=P[1],A=Object(n.useState)(""),F=Object(d.a)(A,2),W=F[0],E=F[1],_=function(){var e=Object(N.a)(g.a.mark((function e(){var t,c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("products").get();case 2:t=e.sent,c=t.docs,n=c.map((function(e){return Object(y.a)({id:e.id},e.data())})),b(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_()}),[]);var z=function(){var e=Object(N.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c.trim()||x("Field product name is empty, please type"),o.trim()||x("Field product price is empty, please type."),n={name:c,price:o},e.prev=4,e.next=7,h.collection("products").add(n);case 7:e.sent,_(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:U();case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(N.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.collection("products").doc(t).delete();case 3:_(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(N.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c.trim()||x("Field product name is empty, please type"),o.trim()||x("Field product price is empty, please type."),n={name:c,price:o},e.prev=4,e.next=7,h.collection("products").doc(W).set(n);case 7:S(!1),D("Create product"),_(),E(""),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(4);case 15:U();case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(N.a)(g.a.mark((function e(t){var c,n,r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.collection("products").doc(t).get();case 3:c=e.sent,console.log(c.data()),n=c.data(),n.id,r=n.name,s=n.price,E(t),i(s),a(r),S(!0),D("Update product"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){a(""),i("")};return Object(l.jsxs)("div",{className:"row mt-3",children:[Object(l.jsx)("div",{className:"col"}),Object(l.jsxs)("div",{className:"col-4",children:[Object(l.jsx)("h2",{children:"Create a new product"}),Object(l.jsxs)("form",{onSubmit:k?L:z,className:"form-group",children:[Object(l.jsx)("input",{value:c,onChange:function(e){a(e.target.value)},className:"form-control mt-4",placeholder:"Type product name",type:"text"}),Object(l.jsx)("input",{value:o,onChange:function(e){i(e.target.value)},className:"form-control mt-4",placeholder:"Type product price $",type:"text"}),Object(l.jsx)("input",{className:"btn btn-dark btn-block mt-4",value:"".concat(I),type:"submit"})]}),null!=f?Object(l.jsx)("div",{className:"alert alert-danger mt-3 d-flex justify-content-center",children:f}):Object(l.jsx)("span",{})]}),Object(l.jsxs)("div",{className:"col-4",children:[Object(l.jsx)("h2",{children:"Product's list"}),Object(l.jsx)("ul",{className:"list-group",children:0!==p.length?p.map((function(e){return Object(l.jsxs)("li",{className:"list-group-item",children:[e.name," -- $",e.price,Object(l.jsx)("button",{onClick:function(){G(e.id)},className:"btn btn-danger float-right",children:"Delete"}),Object(l.jsx)("button",{onClick:function(){T(e.id)},className:"btn btn-info float-right mr-1",children:"Update"})]},e.id)})):Object(l.jsx)("span",{className:"",children:"Currently there is not products at list"})})]}),Object(l.jsx)("div",{className:"col"})]})};var k=function(){return Object(l.jsx)("div",{className:"Container",children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/home",component:u}),Object(l.jsx)(i.b,{path:"/product",component:w}),Object(l.jsx)(i.b,{path:"/login",component:f}),Object(l.jsx)(i.a,{from:"/",to:"/login"})]})]})})};c(47);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.219ba25a.chunk.js.map