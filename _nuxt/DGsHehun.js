import{d as Y,u as L,r as j,a as ee,b as W,c as b,o as te,_ as ne,e as oe,f as T,g as q,n as ie,F as ae,h as w,i as se,j as K,k as U,w as z,T as B,t as re,l as J,m as de,p as le,q as pe,s as ue,v as O,x as H,y as ce,z as F}from"./DqZjykSq.js";import{q as fe,u as we}from"./CiD3stC1.js";import"./B-CbOjZn.js";const ve={nuxt:{}},me=Y(ve);function Z(){const i=L();return i._appConfig||(i._appConfig=j(me)),i._appConfig}const ye={key:0},ge={key:0},he={id:"__preview_loader"},_e=ee({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(i){const s=i,t=["__nuxt_preview","__preview_enabled"],u=L(),h=W(),c=b(!0),k=b(!1),e=b(!1),o=b("");let n;const a=async()=>{J("previewToken").value="",window.sessionStorage.removeItem("previewToken"),window.sessionStorage.removeItem("previewAPI"),await h.replace({query:{preview:void 0}}),window.location.reload()},m=async f=>{const r=await s.syncPreview(f);if(e.value!==!0){if(!r){setTimeout(()=>m(f),1e3);return}J("previewToken").value&&(e.value=!0,await h.replace({query:{}}),u.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&n.disconnect())}};return te(async()=>{n=(await ne(()=>import("./CF3NOiUn.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let r;n.on("connect",()=>{r=setTimeout(()=>{e.value||(r=setTimeout(()=>{o.value="Preview sync timed out",e.value=!1},3e4),n.emit("draft:requestSync"))},3e4)});const x=()=>{r&&(clearTimeout(r),r=null)};n.on("draft:sync",async P=>{if(x(),!P){try{n.once("draft:ready",()=>{n.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(S){switch(x(),S.response.status){case 404:o.value="Preview draft not found",e.value=!1;break;default:o.value="An error occurred while syncing preview",e.value=!1}}return}m(P)}),n.on("draft:unauthorized",()=>{x(),o.value="Unauthorized preview",e.value=!1}),n.on("disconnect",()=>{x()}),document.body.classList.add(...t),n.on("draft:update",P=>{k.value=!0,s.syncPreview(P),k.value=!1})}),oe(()=>{document.body.classList.remove(...t)}),(f,r)=>(T(),q("div",null,[c.value?(T(),q("div",{key:0,id:"__nuxt_preview",class:ie({__preview_ready:e.value,__preview_refreshing:k.value})},[e.value?(T(),q(ae,{key:0},[r[0]||(r[0]=w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),r[1]||(r[1]=w("span",null,[w("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),se(": Preview enabled")],-1)),w("button",{onClick:a}," Close ")],64)):K("",!0)],2)):K("",!0),U(B,{name:"preview-loading"},{default:z(()=>[c.value&&!e.value&&!o.value?(T(),q("div",ye,[r[4]||(r[4]=w("div",{id:"__preview_background"},null,-1)),w("div",{id:"__preview_loader"},[r[2]||(r[2]=w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),r[3]||(r[3]=w("p",null,"Initializing the preview...",-1)),w("button",{onClick:a}," Cancel ")])])):K("",!0)]),_:1}),U(B,{name:"preview-loading"},{default:z(()=>[o.value?(T(),q("div",ge,[r[5]||(r[5]=w("div",{id:"__preview_background"},null,-1)),w("div",he,[w("p",null,re(o.value),1),w("button",{onClick:a}," Exit preview ")])])):K("",!0)]),_:1})]))}}),Ce=de(_e,[["__scopeId","data-v-169d1674"]]),ke=(i=[],s,t)=>{const u=[...s||[]],h=[...t||[]],c=JSON.parse(JSON.stringify(i));for(const e of u)if(e.new)c.push({path:e.path,parsed:e.parsed});else if(e.oldPath)if(h.splice(h.findIndex(n=>n.path===e.oldPath),1),u.find(n=>n.path===e.oldPath))c.push({path:e.path,parsed:e.parsed});else{const n=c.find(a=>a.path===e.oldPath);n&&(n.path=e.path,e.parsed?n.parsed=e.parsed:e.pathMeta&&["_file","_path","_id","_locale"].forEach(a=>{n.parsed[a]=e.pathMeta[a]}))}else{const o=c.find(n=>n.path===e.path);o?Object.assign(o,{path:e.path,parsed:e.parsed}):c.push({path:e.path,parsed:e.parsed})}for(const e of h)c.splice(c.findIndex(o=>o.path===e.path),1);const k=new Intl.Collator(void 0,{numeric:!0});return c.sort((e,o)=>k.compare(e.path,o.path)),c},C={appConfig:"app.config.ts",appConfigV4:"app/app.config.ts",nuxtConfig:"nuxt.config.ts"},Ie=le((i,s,t)=>{if(Array.isArray(i[s])&&Array.isArray(t))return i[s]=t,!0}),xe=i=>{let s;return t=>(s||(s=i()),s)};function G(i,s){for(const t in i){const u=s[t];t in s||delete i[t],u!==null&&typeof u=="object"&&G(i[t],s[t])}}function Q(i,s){for(const t in s){const u=s[t];u!==null&&typeof u=="object"?Array.isArray(u)&&Array.isArray(i[t])?i[t]=u:(i[t]=i[t]||{},Q(i[t],u)):i[t]=u}}const Pe=()=>{const i=L(),s={},t=pe("studio-client-db",()=>null);t.value||(i.hook("content:storage",o=>{t.value=o}),fe("/non-existing-path").findOne());const u=async o=>{var m,f,r;const n=window.sessionStorage.getItem("previewToken");if(!o)return null;o=o.replace(/\/$/,"");let a=await((m=t.value)==null?void 0:m.getItem(`${n}:${o}`));return a||(a=await((f=t.value)==null?void 0:f.getItem(`cached:${o}`))),a||(a=a=await((r=t.value)==null?void 0:r.getItem(o))),a||(a=s[o||"/"]),a};return{storage:t,findContentItem:u,updateContentItem:(o,n)=>{var a;t.value&&(s[n.parsed._path]=n.parsed,t.value.setItem(`${o}:${(a=n.parsed)==null?void 0:a._id}`,JSON.stringify(n.parsed)))},removeContentItem:async(o,n)=>{var m;const a=await u(n);if(await((m=t.value)==null?void 0:m.removeItem(`${o}:${n}`)),a){delete s[a._path];const f=await u(a._id);f&&(s[f._path]=f)}},removeAllContentItems:async o=>{const n=await t.value.getKeys(`${o}:`);await Promise.all(n.map(a=>t.value.removeItem(a)))},setPreviewMetaItems:async(o,n)=>{const a=new Set(n.map(m=>m.parsed._id.split(":").shift()));await t.value.setItem(`${o}$`,JSON.stringify({ignoreSources:Array.from(a)}))}}},Ae=xe(()=>JSON.parse(JSON.stringify(Z())));let V=[];const be=()=>{const i=L(),{storage:s,findContentItem:t,updateContentItem:u,removeContentItem:h,removeAllContentItems:c,setPreviewMetaItems:k}=Pe(),{studio:e,content:o}=ue().public,n=window.sessionStorage.getItem("previewAPI")||(e==null?void 0:e.apiURL),a=Ae(),m=async p=>{const d=window.sessionStorage.getItem("previewToken");c(d),k(d,p),await Promise.all(p.map(v=>{u(d,v)}))},f=p=>{const d=H(i,Z);d!=null&&d.ui&&(d.ui.icons={...d.ui.icons,dynamic:!0}),Q(d,Ie(p,a)),p||G(d,a)},r=async p=>{if(V=p.files=p.files||V||[],!s.value)return!1;V=[];const d=ke(p.files,p.additions,p.deletions),v=d.filter(I=>![C.appConfig,C.appConfigV4,C.nuxtConfig].includes(I.path));await m(v);const y=d.find(I=>[C.appConfig,C.appConfigV4].includes(I.path));return f(y==null?void 0:y.parsed),S(),!0},x=async()=>{const p=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:n,method:"POST",params:{token:p}})},P=()=>{const p=window.sessionStorage.getItem("previewToken"),d=document.createElement("div");d.id="__nuxt_preview_wrapper",document.body.appendChild(d),ce(Ce,{previewToken:p,apiURL:n,syncPreview:r,requestPreviewSyncAPI:x}).mount(d)},S=async()=>{if(o!=null&&o.documentDriven){const{pages:p}=H(i,we),d=await Promise.all(Object.keys(p.value).map(async v=>{var y;return await t(((y=p.value[v])==null?void 0:y._id)??v)}));p.value=d.reduce((v,y,I)=>(y&&(v[Object.keys(p.value)[I]]=y),v),{})}await i.hooks.callHookParallel("app:data:refresh")};return{mountPreviewUI:P,initiateIframeCommunication:X};function X(){if(!window.parent||window.self===window.parent)return;const p=W(),d=O(),v=b(""),y=l=>({path:l.path,query:F(l.query),params:F(l.params),fullPath:l.fullPath,meta:F(l.meta)});window.addEventListener("keydown",l=>{(l.metaKey||l.ctrlKey||l.altKey||l.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:l.key,metaKey:l.metaKey,ctrlKey:l.ctrlKey,shiftKey:l.shiftKey,altKey:l.altKey}},"*")}),window.addEventListener("message",async l=>{var D;if(!["https://nuxt.studio","https://new.nuxt.studio","https://new.dev.nuxt.studio","https://dev.nuxt.studio","http://localhost:3000",...((D=e==null?void 0:e.iframeMessagingAllowedOrigins)==null?void 0:D.split(",").map(g=>g.trim()))||[]].includes(l.origin))return;const{type:N,payload:M={}}=l.data||{};switch(N){case"nuxt-studio:editor:file-selected":{const g=await t(M.path);g&&(g._partial||!String(M.path).endsWith(".md")||g._path!==O().path&&(v.value=g._path,p.push(g._path)));break}case"nuxt-studio:editor:media-changed":case"nuxt-studio:editor:file-changed":{const g=window.sessionStorage.getItem("previewToken"),{additions:$=[],deletions:A=[]}=M;for(const R of $)await u(g,R);for(const R of A)await h(g,R.path);S();break}case"nuxt-studio:config:file-changed":{const{additions:g=[],deletions:$=[]}=M,A=g.find(E=>[C.appConfig,C.appConfigV4].includes(E.path));A&&f(A==null?void 0:A.parsed),$.find(E=>[C.appConfig,C.appConfigV4].includes(E.path))&&f(void 0)}}}),i.hook("page:finish",()=>{I(),i.payload.prerenderedAt&&S()}),i.hook("content:document-driven:finish",({route:l,page:_})=>{l.meta.studio_page_contentId=_==null?void 0:_._id}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:y(O())},"*"),setTimeout(()=>{I()},100)});function I(){const l=Array.from(window.document.querySelectorAll("[data-content-id]")).map(N=>N.getAttribute("data-content-id")),_=Array.from(new Set([d.meta.studio_page_contentId,...l])).filter(Boolean);if(v.value===_[0]){v.value="";return}window.openContentInStudioEditor(_,{navigate:!0,pageContentId:d.meta.studio_page_contentId})}window.openContentInStudioEditor=(l,_={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...y(d),contentIds:l,..._}},"*")}}};export{be as useStudio};
