"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[1],[,function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var o,t,i,s,c,a,d,l,p,x,h,m,g=r(885),u=r(731),v=r(739),b=r(791),f=r(479),j=r(168),Z=r(921),w=Z.Z.div(o||(o=(0,j.Z)(["\n  padding: 40px;\n"]))),k=(0,Z.Z)(u.rU)(t||(t=(0,j.Z)(["\n  display: inline-block;\n  padding: 3px 10px;\n  margin-bottom: 10px;\n  border: 1px solid #a8a8ee;\n  border-radius: 10px;\n  color: #000000;\n  text-decoration: none;\n  :hover,\n  :focus {\n    color: #ffffff;\n    background-color: #a8a8ee;\n  }\n"]))),P=Z.Z.ul(i||(i=(0,j.Z)(["\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #ccc8c8;\n  a {\n    display: block;\n    margin-bottom: 10px;\n  }\n"]))),_=Z.Z.span(s||(s=(0,j.Z)(["\n  margin-right: 16px;\n"]))),U=Z.Z.h2(c||(c=(0,j.Z)(["\n  margin: 12px 16px;\n"]))),y=r(789),S=y.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  gap: 16px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #ccc8c8;\n"]))),C=y.ZP.img(d||(d=(0,j.Z)(["\n  border: 2px solid #fff;\n  border-radius: 14px;\n  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);\n"]))),G=y.ZP.h1(l||(l=(0,j.Z)(["\n  margin-bottom: 15px;\n"]))),O=y.ZP.p(p||(p=(0,j.Z)(["\n  margin-bottom: 15px;\n"]))),z=y.ZP.h2(x||(x=(0,j.Z)(["\n  margin-bottom: 15px;\n"]))),A=y.ZP.p(h||(h=(0,j.Z)(["\n  margin-bottom: 15px;\n"]))),E=y.ZP.h3(m||(m=(0,j.Z)(["\n  margin-bottom: 15px;\n"]))),H=r(184),I=function(n){var e=n.poster,r=n.title,o=n.score,t=n.overview,i=n.genres;return(0,H.jsxs)(S,{children:[(0,H.jsx)("div",{children:(0,H.jsx)(C,{src:e,alt:r,width:"240",height:"320"})}),(0,H.jsxs)("div",{children:[(0,H.jsx)(G,{children:r}),(0,H.jsxs)(O,{children:["User Score: ",o,"%"]}),(0,H.jsx)(z,{children:"Overview"}),(0,H.jsx)(A,{children:t}),(0,H.jsx)(E,{children:"Genres"}),(0,H.jsx)("p",{children:i})]})]})},L=function(){var n,e,r=(0,b.useState)({}),o=(0,g.Z)(r,2),t=o[0],i=o[1],s=(0,v.UO)().id,c=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,b.useEffect)((function(){var n="".concat("https://api.themoviedb.org/3/","movie/").concat(s,"?api_key=").concat("9ee5d4a207d60b7c3d8d62795d8824d4","&language=en-US");fetch(n).then((function(n){return n.json()})).then((function(n){i({poster:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),title:n.title,score:Number.parseInt(10*n.vote_average),overview:n.overview,genres:n.genres.reduce((function(n,e){return n+(e.name+" ")}),"").trim()})})).catch((function(n){return console.log(n)}))}),[s]),(0,H.jsx)("main",{children:(0,H.jsxs)(w,{children:[(0,H.jsxs)(k,{to:c,children:[(0,H.jsx)(_,{children:(0,H.jsx)(f.V5i,{size:12})}),"Go back"]}),(0,H.jsx)(I,{poster:t.poster,title:t.title,score:t.score,overview:t.overview,genres:t.genres}),(0,H.jsx)(U,{children:"Additional information"}),(0,H.jsxs)(P,{children:[(0,H.jsx)("li",{children:(0,H.jsx)(u.rU,{to:"cast",state:{from:c},children:"Cast"})}),(0,H.jsx)("li",{children:(0,H.jsx)(u.rU,{to:"reviews",state:{from:c},children:"Reviews"})})]}),(0,H.jsx)(b.Suspense,{fallback:(0,H.jsx)("div",{children:"Loading page..."}),children:(0,H.jsx)(v.j3,{})})]})})}}]]);
//# sourceMappingURL=1.31397682.chunk.js.map