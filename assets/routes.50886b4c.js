import{r as h,o as g,c as k,a as e,w as m,v as x,u as l,t as d,p as w,d as S,b as _}from"./vendor.06fd7fa7.js";import{_ as C,r as u,f as p,a as N,m as f}from"./index.188de08d.js";const n=a=>(w("data-v-4429ce38"),a=a(),S(),a),B={style:{"text-align":"center"}},O=n(()=>e("label",{for:"showBrief"},"showBrief",-1)),b=n(()=>e("button",{style:{float:"right","margin-right":"40px"},onclick:"location.href = '/';"},"Home",-1)),J={style:{display:"flex"}},R={style:{width:"33%"}},I=_(" Modules "),$=n(()=>e("span",{class:"tips"},"Click to Copy",-1)),V=[I,$],D={style:{width:"33%"}},M=_(" Routes "),T=n(()=>e("span",{class:"tips"},"Click to Copy",-1)),E=[M,T],F={style:{width:"33%"}},H=_(" Flat Routes "),U=n(()=>e("span",{class:"tips"},"Click to Copy",-1)),j=[H,U],q={setup(a){console.log("vroutes %o, froutes %o, routes %o",u,p,N.getRoutes());const s=h(!0),v=(o,t)=>!o.length||o.includes(".ts")?t:"...",y=[{ktype:"string",kval:"name"},{ktype:"string",kval:"meta"}],r=(o,t)=>y.find(i=>i.ktype===typeof o&&i.kval===o)?void 0:typeof t=="function"?t.toString():t,c=o=>{var t;return(t=navigator.clipboard)==null?void 0:t.writeText(o)};return(o,t)=>(g(),k("div",null,[e("div",B,[O,m(e("input",{type:"checkbox",id:"showBrief","onUpdate:modelValue":t[0]||(t[0]=i=>s.value=i)},null,512),[[x,s.value]]),b]),e("div",J,[e("div",R,[e("div",{class:"copy",onClick:t[1]||(t[1]=i=>c(JSON.stringify(l(f),s.value?v:null,2)))},V),e("pre",null,d(JSON.stringify(l(f),s.value?v:null,2)),1)]),e("div",D,[e("div",{class:"copy",onClick:t[2]||(t[2]=i=>c(JSON.stringify(l(u),s.value?r:null,2)))},E),e("pre",null,d(JSON.stringify(l(u),s.value?r:null,2)),1)]),e("div",F,[e("div",{class:"copy",onClick:t[3]||(t[3]=i=>c(JSON.stringify(l(p),s.value?r:null,2)))},j),e("pre",null,d(JSON.stringify(l(p),s.value?r:null,2)),1)])])]))}};var G=C(q,[["__scopeId","data-v-4429ce38"]]);export{G as default};
