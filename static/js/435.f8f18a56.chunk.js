"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[435],{687:function(e,r,n){n.d(r,{E3:function(){return o},Mc:function(){return p},_k:function(){return i}});var t=n(861),a=n(757),c=n.n(a),s=n(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=new URLSearchParams({api_key:"9cc860df4c5a2dfba823744e561a2dde",language:"en-US"}),i=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("trending/movie/day",{params:u});case 2:return r=e.sent,e.next=5,r.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("search/movie?query=".concat(r),{params:u});case 2:return n=e.sent,e.next=5,n.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(r),{params:u});case 2:return n=e.sent,e.next=5,n.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},435:function(e,r,n){n.r(r),n.d(r,{default:function(){return l}});var t=n(861),a=n(439),c=n(757),s=n.n(c),u=n(687),i=n(791),o=n(689),p=n(87),d=n(184),f=function(){var e,r,n=(0,i.useState)([]),c=(0,a.Z)(n,2),f=c[0],l=c[1],h=(0,o.TH)(),v=(0,o.UO)().movieId,x=(0,i.useRef)(null!==(e=null===(r=h.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Mc)(v);case 3:r=e.sent,l(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("ERROR!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);var m=f.original_title,w=f.vote_average,j=f.overview,k=f.genres,g=f.poster_path;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{children:(0,d.jsx)(p.rU,{to:x.current,children:"Back"})}),(0,d.jsx)("img",{width:"400px",src:g?"https://image.tmdb.org/t/p/w500".concat(g):"https://placehold.co/400x600?text=Not+Found",alt:m}),(0,d.jsxs)("p",{children:["User Score: ",w]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:j}),(0,d.jsx)("h2",{children:"Genres"}),k&&k.map((function(e){return(0,d.jsx)("p",{children:e.name},e.id)})),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]})]})},l=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{}),(0,d.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=435.f8f18a56.chunk.js.map