(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page"],{"1a3b":function(e,t,n){},2048:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const i={id:"comments"};function a(e,t,n,a,l,o){const s=Object(c["N"])("Breadcrumbs"),r=Object(c["N"])("Comment"),b=Object(c["N"])("PageContainer");return Object(c["F"])(),Object(c["i"])("div",null,[Object(c["m"])(s,{current:e.pageTitle},null,8,["current"]),Object(c["m"])(b,{post:e.pageData,title:e.pageTitle},{default:Object(c["X"])(()=>[Object(c["j"])("div",i,[Object(c["m"])(r,{title:e.pageData.title,body:e.pageData.text,uid:e.pageData.uid},null,8,["title","body","uid"])])]),_:1},8,["post","title"])])}var l=n("ced1"),o=n("d8ac"),s=n("47e2"),r=n("6605"),b=n("8578"),u=n("f2fb"),d=n("5350"),p=n("b6c6"),g=n("4ea3"),j=Object(c["n"])({name:"Page",components:{PageContainer:d["a"],Breadcrumbs:p["a"],Comment:g["a"]},setup(){const e=Object(l["a"])(),t=Object(b["a"])(),n=Object(u["a"])(),i=Object(c["K"])(new o["a"]),a=Object(r["c"])(),{t:d}=Object(s["b"])(),p=Object(c["K"])(),g=()=>{e.fetchArticle(String(a.params.slug)).then(e=>{i.value=e,p.value=i.value.title,j(t.locale)})},j=e=>{const c="cn"===e?"cn":"en",i=t.themeConfig.menu.menus[String(a.params.slug)];p.value=i.i18n&&i.i18n[c]||i.name,n.setTitle(p.value)};return Object(c["W"])(()=>t.locale,e=>{e&&j(e)}),Object(c["z"])(g),{pageTitle:Object(c["e"])(()=>p.value),pageData:i,t:d}}}),O=n("6b0d"),m=n.n(O);const h=m()(j,[["render",a]]);t["default"]=h},"4ea3":function(e,t,n){"use strict";var c=n("7a23");const i={class:"bg-ob-deep-800 p-4 mt-8 lg:px-14 lg:py-10 rounded-2xl shadow-xl mb-8 lg:mb-0"},a=Object(c["j"])("div",{id:"gitalk-container"},null,-1),l=Object(c["j"])("div",{id:"vcomments"},null,-1);function o(e,t,n,o,s,r){const b=Object(c["N"])("SubTitle");return Object(c["F"])(),Object(c["i"])("div",i,[Object(c["m"])(b,{title:"titles.comment"},null,8,["title"]),a,l])}var s=n("8578"),r=n("d5a6"),b=n("41ba"),u=Object(c["n"])({name:"ObComment",props:{title:{type:String,default:""},body:{type:String,default:""},uid:{type:String,default:""}},components:{SubTitle:r["a"]},setup(e){const t=Object(c["S"])(e).title,n=Object(c["S"])(e).body,i=Object(c["S"])(e).uid,a=Object(s["a"])(),l=Object(b["a"])(),o=(e,t,n)=>{const c=e&&""!==e?e:"",i=t&&""!==t?`${window.location.href} \n ${t}`:window.location.href,o="pathname"===a.themeConfig.plugins.gitalk.id?window.location.pathname:n;if(l.setCache({title:e,body:t,uid:n}),a.configReady)if(a.themeConfig.plugins.gitalk.enable){const e=""===a.themeConfig.plugins.gitalk.proxy?"https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token":a.themeConfig.plugins.gitalk.proxy,t=new Gitalk({clientID:a.themeConfig.plugins.gitalk.clientID,clientSecret:a.themeConfig.plugins.gitalk.clientSecret,repo:a.themeConfig.plugins.gitalk.repo,owner:a.themeConfig.plugins.gitalk.owner,admin:a.themeConfig.plugins.gitalk.admin,id:o,language:a.themeConfig.plugins.gitalk.language,distractionFreeMode:!0,title:c,body:i,proxy:e});t.render("gitalk-container")}else a.themeConfig.plugins.valine.enable&&new Valine({el:"#vcomments",appId:a.themeConfig.plugins.valine.app_id,appKey:a.themeConfig.plugins.valine.app_key,avatar:a.themeConfig.plugins.valine.avatar,placeholder:a.themeConfig.plugins.valine.placeholder,visitor:a.themeConfig.plugins.valine.visitor,lang:a.themeConfig.plugins.valine.lang,meta:a.themeConfig.plugins.valine.meta,requiredFields:a.themeConfig.plugins.valine.requiredFields,avatarForce:a.themeConfig.plugins.valine.avatarForce,path:window.location.pathname})};Object(c["W"])(()=>a.configReady,(e,t)=>{if(!t&&e){const e=l.cachePost;o(e.title,e.body,e.uid)}}),Object(c["C"])(()=>{o(t.value,n.value,i.value)})}}),d=(n("7db3"),n("6b0d")),p=n.n(d);const g=p()(u,[["render",o]]);t["a"]=g},5350:function(e,t,n){"use strict";var c=n("7a23");const i=e=>(Object(c["I"])("data-v-6d5e68b2"),e=e(),Object(c["G"])(),e),a={class:"flex flex-col"},l={class:"post-header"},o={key:0,class:"post-title text-white uppercase"},s={class:"main-grid"},r={class:"relative"},b=["innerHTML"],u={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},d=i(()=>Object(c["j"])("br",null,null,-1)),p=i(()=>Object(c["j"])("br",null,null,-1)),g=i(()=>Object(c["j"])("br",null,null,-1)),j={class:"col-span-1"};function O(e,t,n,i,O,m){const h=Object(c["N"])("ob-skeleton"),f=Object(c["N"])("Profile"),v=Object(c["N"])("Toc"),w=Object(c["N"])("Sidebar"),y=Object(c["O"])("scroll-spy");return Object(c["F"])(),Object(c["i"])("div",a,[Object(c["j"])("div",l,[e.post.title?(Object(c["F"])(),Object(c["i"])("h1",o,Object(c["R"])(e.pageTitle),1)):(Object(c["F"])(),Object(c["g"])(h,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"}))]),Object(c["j"])("div",s,[Object(c["j"])("div",r,[e.post.content?Object(c["Y"])((Object(c["F"])(),Object(c["i"])("div",{key:0,class:"post-html",innerHTML:e.post.content},null,8,b)),[[y,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(Object(c["F"])(),Object(c["i"])("div",u,[Object(c["m"])(h,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),d,Object(c["m"])(h,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),p,g,Object(c["m"])(h,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),Object(c["M"])(e.$slots,"default",{},void 0,!0)]),Object(c["j"])("div",j,[Object(c["m"])(w,null,{default:Object(c["X"])(()=>[Object(c["m"])(f,{author:"blog-author"}),Object(c["m"])(v,{toc:e.post.toc},null,8,["toc"])]),_:1})])])])}var m=n("47e2"),h=n("2a1d"),f=n("5701"),v=Object(c["n"])({name:"ObPageContainer",components:{Sidebar:h["d"],Toc:h["f"],Profile:h["b"]},props:{post:{type:Object,default:()=>({})},title:{type:String,default:""}},setup(e){const t=Object(f["a"])(),{t:n}=Object(m["b"])(),i=Object(c["S"])(e).post,a=Object(c["S"])(e).title;return Object(c["W"])(()=>i.value.covers,e=>{console.log(e),e&&t.setHeaderImage(e)}),Object(c["C"])(()=>{t.setHeaderImage(i.value.covers)}),Object(c["D"])(()=>{t.resetHeaderImage()}),{pageTitle:Object(c["e"])(()=>""!==a.value?a.value:i.value.title),t:n}}}),w=(n("8625"),n("6b0d")),y=n.n(w);const C=y()(v,[["render",O],["__scopeId","data-v-6d5e68b2"]]);t["a"]=C},"76f0":function(e,t,n){"use strict";n("b1d6")},"7db3":function(e,t,n){"use strict";n("1a3b")},8625:function(e,t,n){"use strict";n("9d2c")},"9d2c":function(e,t,n){},b1d6:function(e,t,n){},b6c6:function(e,t,n){"use strict";var c=n("7a23");const i={class:"breadcrumbs flex flex-row gap-6 text-white"};function a(e,t,n,a,l,o){return Object(c["F"])(),Object(c["i"])("ul",i,[Object(c["j"])("li",null,Object(c["R"])(e.t("menu.home")),1),Object(c["j"])("li",null,Object(c["R"])(e.current),1)])}var l=n("47e2"),o=Object(c["n"])({name:"Breadcrumb",props:{current:String},setup(){const{t:e}=Object(l["b"])();return{t:e}}}),s=(n("76f0"),n("6b0d")),r=n.n(s);const b=r()(o,[["render",a],["__scopeId","data-v-4170130a"]]);t["a"]=b},ced1:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n("77ba"),i=n("79f6"),a=n("d8ac");const l=Object(c["b"])({id:"articleStore",state:()=>({}),getters:{},actions:{async fetchArticle(e){const{data:t}=await Object(i["f"])(e);return new Promise(e=>setTimeout(()=>{e(new a["a"](t))},200))}}})},d8ac:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n("749c");c["e"];class i{constructor(e){if(this.title="",this.uid="",this.date={month:"",day:0,year:0},this.updated="",this.comments=!1,this.path="",this.covers=null,this.excerpt=null,this.content="",this.count_time={},this.toc="",e)for(const t of Object.keys(this))if(Object.prototype.hasOwnProperty.call(e,t)){if("date"===t){const n=new Date(e[t]),c=`settings.months[${n.getMonth()}]`;e[t]=Object.create({month:c,day:n.getUTCDate(),year:n.getUTCFullYear()})}Object.assign(this,{[t]:e[t]})}}}}}]);