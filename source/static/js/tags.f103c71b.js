(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tags"],{"76f0":function(e,t,c){"use strict";c("b1d6")},"8ea7":function(e,t,c){"use strict";c.r(t);var s=c("7a23");const n={class:"flex flex-col"},a={class:"post-header"},b={class:"post-title text-white uppercase"},r={class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block"},l={key:2,class:"flex flex-row justify-center items-center"};function j(e,t,c,j,u,o){const O=Object(s["N"])("Breadcrumbs"),i=Object(s["N"])("TagItem"),g=Object(s["N"])("ob-skeleton"),d=Object(s["N"])("svg-icon"),m=Object(s["N"])("TagList");return Object(s["F"])(),Object(s["i"])("div",n,[Object(s["j"])("div",a,[Object(s["m"])(O,{current:e.t("menu.tags")},null,8,["current"]),Object(s["j"])("h1",b,Object(s["R"])(e.t("menu.tags")),1)]),Object(s["j"])("div",r,[Object(s["m"])(m,null,{default:Object(s["X"])(()=>[e.tags&&e.tags.length>0?(Object(s["F"])(!0),Object(s["i"])(s["a"],{key:0},Object(s["L"])(e.tags,e=>(Object(s["F"])(),Object(s["g"])(i,{key:e.slug,name:e.name,slug:e.slug,count:e.count,size:"xl"},null,8,["name","slug","count"]))),128)):e.tags?(Object(s["F"])(),Object(s["g"])(g,{key:1,tag:"li",count:10,height:"20px",width:"3rem"})):(Object(s["F"])(),Object(s["i"])("div",l,[Object(s["m"])(d,{class:"stroke-ob-bright mr-2","icon-class":"warning"}),Object(s["l"])(" "+Object(s["R"])(e.t("settings.empty-tag")),1)]))]),_:1})])])}var u=c("b6c6"),o=c("47e2"),O=c("6141"),i=c("a899"),g=c("5701"),d=Object(s["n"])({name:"Tag",components:{Breadcrumbs:u["a"],TagList:i["b"],TagItem:i["a"]},setup(){const e=Object(g["a"])(),{t:t}=Object(o["b"])(),n=Object(O["a"])(),a=async()=>{n.fetchAllTags(),e.setHeaderImage(""+c("87d4"))};return Object(s["z"])(a),Object(s["D"])(()=>{e.resetHeaderImage()}),{tags:Object(s["e"])(()=>n.isLoaded&&0===n.tags.length?null:n.tags),t:t}}}),m=c("6b0d"),p=c.n(m);const f=p()(d,[["render",j]]);t["default"]=f},b1d6:function(e,t,c){},b6c6:function(e,t,c){"use strict";var s=c("7a23");const n={class:"breadcrumbs flex flex-row gap-6 text-white"};function a(e,t,c,a,b,r){return Object(s["F"])(),Object(s["i"])("ul",n,[Object(s["j"])("li",null,Object(s["R"])(e.t("menu.home")),1),Object(s["j"])("li",null,Object(s["R"])(e.current),1)])}var b=c("47e2"),r=Object(s["n"])({name:"Breadcrumb",props:{current:String},setup(){const{t:e}=Object(b["b"])();return{t:e}}}),l=(c("76f0"),c("6b0d")),j=c.n(l);const u=j()(r,[["render",a],["__scopeId","data-v-4170130a"]]);t["a"]=u}}]);