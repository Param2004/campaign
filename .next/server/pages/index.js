"use strict";(()=>{var e={};e.id=405,e.ids=[405,660],e.modules={8037:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>g,getServerSideProps:()=>S,getStaticPaths:()=>x,getStaticProps:()=>m,reportWebVitals:()=>P,routeModule:()=>w,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>v});var s=r(7093),i=r(5244),n=r(1323),o=r(1777),l=r.n(o),p=r(5863),u=r.n(p),c=r(350),d=e([c]);c=(d.then?(await d)():d)[0];let g=(0,n.l)(c,"default"),m=(0,n.l)(c,"getStaticProps"),x=(0,n.l)(c,"getStaticPaths"),S=(0,n.l)(c,"getServerSideProps"),h=(0,n.l)(c,"config"),P=(0,n.l)(c,"reportWebVitals"),v=(0,n.l)(c,"unstable_getStaticProps"),b=(0,n.l)(c,"unstable_getStaticPaths"),f=(0,n.l)(c,"unstable_getStaticParams"),j=(0,n.l)(c,"unstable_getServerProps"),_=(0,n.l)(c,"unstable_getServerSideProps"),w=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:u(),Document:l()},userland:c});a()}catch(e){a(e)}})},350:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>c,getServerSideProps:()=>u});var s=r(997);r(6689);var i=r(1786),n=r(1831),o=r(7740),l=r(7131),p=e([i]);async function u(){return{props:{campaigns:await i.e.methods.getDeployedCampaigns().call()}}}function c({campaigns:e}){return s.jsx(o.Z,{children:(0,s.jsxs)("div",{children:[s.jsx("h3",{children:"Open Campaigns"}),s.jsx(l.Link,{route:"/campaigns/new",children:s.jsx(n.Button,{style:{width:"100%"},floated:"right",content:"Create Campaign",icon:"add circle",primary:!0})}),(()=>{let t=e.map(e=>({header:e,description:s.jsx(l.Link,{route:`/campaigns/${e}`,children:"view campaign"}),fluid:!0}));return s.jsx(n.Card.Group,{items:t})})()]})})}i=(p.then?(await p)():p)[0],a()}catch(e){a(e)}})},662:e=>{e.exports=require("next-routes")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1831:e=>{e.exports=require("semantic-ui-react")},4325:e=>{e.exports=import("web3")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[777,295],()=>r(8037));module.exports=a})();