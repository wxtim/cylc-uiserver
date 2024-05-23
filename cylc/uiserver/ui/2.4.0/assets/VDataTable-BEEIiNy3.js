import{e0 as ft,aM as O,au as vt,da as D,dR as M,db as gt,dc as Te,e1 as Ve,de as mt,dh as bt,e2 as ht,di as De,dj as _e,e3 as yt,dk as L,dI as R,e4 as Y,e5 as pt,dl as Be,e6 as xt,a$ as Pt,e7 as ue,e8 as St,q as k,e9 as U,b7 as V,du as G,I as c,bT as E,am as C,ea as be,an as he,bt as Ce,aG as H,aa as j,eb as Fe,bs as Ae,ec as le,bQ as kt,ed as wt,ee as N,n as It,ef as Tt,eg as Le,eh as ne,ei as J,ej as Q,ek as Vt,el as Dt,dm as _t,em as Bt,F as W,dN as oe,bR as Ct,H as ye,bC as pe,b3 as Ft,en as re,eo as At,ep as X,eq as Lt,er as $t,cc as Ot}from"./index-C2AHI-HK.js";function xe(e,l,a){return Object.keys(e).filter(t=>ft(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}function Et(){const e=O([]);vt(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const Nt=D({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:M,default:"$first"},prevIcon:{type:M,default:"$prev"},nextIcon:{type:M,default:"$next"},lastIcon:{type:M,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...gt(),...Te(),...Ve(),...mt(),...bt(),...ht(),...De({tag:"nav"}),..._e(),...yt({variant:"text"})},"VPagination"),Pe=L()({name:"VPagination",props:Nt(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=R(e,"modelValue"),{t:r,n:o}=Y(),{isRtl:u}=pt(),{themeClasses:s}=Be(e),{width:d}=xt(),f=Pt(-1);ue(void 0,{scoped:!0});const{resizeRef:v}=St(p=>{if(!p.length)return;const{target:S,contentRect:w}=p[0],T=S.querySelector(".v-pagination__list > *");if(!T)return;const B=w.width,$=T.offsetWidth+parseFloat(getComputedStyle(T).marginRight)*2;f.value=m(B,$)}),i=k(()=>parseInt(e.length,10)),g=k(()=>parseInt(e.start,10)),h=k(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):f.value>=0?f.value:m(d.value,58));function m(p,S){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((p-S*w)/S).toFixed(2)))}const b=k(()=>{if(i.value<=0||isNaN(i.value)||i.value>Number.MAX_SAFE_INTEGER)return[];if(h.value<=0)return[];if(h.value===1)return[n.value];if(i.value<=h.value)return U(i.value,g.value);const p=h.value%2===0,S=p?h.value/2:Math.floor(h.value/2),w=p?S:S+1,T=i.value-S;if(w-n.value>=0)return[...U(Math.max(1,h.value-1),g.value),e.ellipsis,i.value];if(n.value-T>=(p?1:0)){const B=h.value-1,$=i.value-B+g.value;return[g.value,e.ellipsis,...U(B,$)]}else{const B=Math.max(1,h.value-3),$=B===1?n.value:n.value-Math.ceil(B/2)+g.value;return[g.value,e.ellipsis,...U(B,$),e.ellipsis,i.value]}});function x(p,S,w){p.preventDefault(),n.value=S,w&&t(w,S)}const{refs:P,updateRef:I}=Et();ue({VPaginationBtn:{color:V(e,"color"),border:V(e,"border"),density:V(e,"density"),size:V(e,"size"),variant:V(e,"variant"),rounded:V(e,"rounded"),elevation:V(e,"elevation")}});const y=k(()=>b.value.map((p,S)=>{const w=T=>I(T,S);if(typeof p=="string")return{isActive:!1,key:`ellipsis-${S}`,page:p,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const T=p===n.value;return{isActive:T,key:p,page:o(p),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:T?e.activeColor:e.color,"aria-current":T,"aria-label":r(T?e.currentPageAriaLabel:e.pageAriaLabel,p),onClick:B=>x(B,p)}}}})),_=k(()=>{const p=!!e.disabled||n.value<=g.value,S=!!e.disabled||n.value>=g.value+i.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:w=>x(w,g.value,"first"),disabled:p,"aria-label":r(e.firstAriaLabel),"aria-disabled":p}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:w=>x(w,n.value-1,"prev"),disabled:p,"aria-label":r(e.previousAriaLabel),"aria-disabled":p},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:w=>x(w,n.value+1,"next"),disabled:S,"aria-label":r(e.nextAriaLabel),"aria-disabled":S},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:w=>x(w,g.value+i.value-1,"last"),disabled:S,"aria-label":r(e.lastAriaLabel),"aria-disabled":S}:void 0}});function A(){var S;const p=n.value-g.value;(S=P.value[p])==null||S.$el.focus()}function z(p){p.key===be.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,he(A)):p.key===be.right&&!e.disabled&&n.value<g.value+i.value-1&&(n.value=n.value+1,he(A))}return G(()=>c(e.tag,{ref:v,class:["v-pagination",s.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:z,"data-test":"v-pagination-root"},{default:()=>[c("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&c("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(_.value.first):c(E,C({_as:"VPaginationBtn"},_.value.first),null)]),c("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(_.value.prev):c(E,C({_as:"VPaginationBtn"},_.value.prev),null)]),y.value.map((p,S)=>c("li",{key:p.key,class:["v-pagination__item",{"v-pagination__item--is-active":p.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(p):c(E,C({_as:"VPaginationBtn"},p.props),{default:()=>[p.page]})])),c("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(_.value.next):c(E,C({_as:"VPaginationBtn"},_.value.next),null)]),e.showFirstLastPage&&c("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(_.value.last):c(E,C({_as:"VPaginationBtn"},_.value.last),null)])])]})),{}}}),Rt=D({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),$e=Symbol.for("vuetify:data-table-pagination");function Gt(e){const l=R(e,"page",void 0,t=>+(t??1)),a=R(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function Mt(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=k(()=>a.value===-1?0:a.value*(l.value-1)),r=k(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),o=k(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));Ce(()=>{l.value>o.value&&(l.value=o.value)});function u(i){a.value=i,l.value=1}function s(){l.value=le(l.value+1,1,o.value)}function d(){l.value=le(l.value-1,1,o.value)}function f(i){l.value=le(i,1,o.value)}const v={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:o,itemsLength:t,nextPage:s,prevPage:d,setPage:f,setItemsPerPage:u};return H($e,v),v}function Ht(){const e=j($e);if(!e)throw new Error("Missing pagination!");return e}function jt(e){const l=Fe("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,o=k(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return Ae(o,u=>{l.emit("update:currentItems",u)}),{paginatedItems:o}}const Oe=D({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Se=L()({name:"VDataTableFooter",props:Oe(),setup(e,l){let{slots:a}=l;const{t}=Y(),{page:n,pageCount:r,startIndex:o,stopIndex:u,itemsLength:s,itemsPerPage:d,setItemsPerPage:f}=Ht(),v=k(()=>e.itemsPerPageOptions.map(i=>typeof i=="number"?{value:i,title:i===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(i)}:{...i,title:t(i.title)}));return G(()=>{var g;const i=Pe.filterProps(e);return c("div",{class:"v-data-table-footer"},[(g=a.prepend)==null?void 0:g.call(a),c("div",{class:"v-data-table-footer__items-per-page"},[c("span",null,[t(e.itemsPerPageText)]),c(kt,{items:v.value,modelValue:d.value,"onUpdate:modelValue":h=>f(Number(h)),density:"compact",variant:"outlined","hide-details":!0},null)]),c("div",{class:"v-data-table-footer__info"},[c("div",null,[t(e.pageText,s.value?o.value+1:0,u.value,s.value)])]),c("div",{class:"v-data-table-footer__pagination"},[c(Pe,C({modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},i),null)])])}),{}}}),ie=wt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return c(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:N(e.height),width:N(e.width),left:N(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),zt=D({headers:Array},"DataTable-header"),Ee=Symbol.for("vuetify:data-table-headers"),Ne={title:"",sortable:!1},qt={...Ne,width:48};function Kt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function se(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)se(a,l);return l}function Re(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&Re(a.children,l);return l}function Wt(e){if(e.key){if(e.key==="data-table-group")return Ne;if(["data-table-expand","data-table-select"].includes(e.key))return qt}}function de(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>de(a,l+1))):l}function Ut(e){let l=!1;function a(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(o&&(r.fixed=!0),r.fixed)if(r.children)for(let u=r.children.length-1;u>=0;u--)a(r.children[u],!0);else l?isNaN(+r.width)&&Tt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let u=r.children.length-1;u>=0;u--)a(r.children[u]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return o;if(r.children){r.fixedOffset=o;for(const u of r.children)o=t(u,o)}else r.fixed&&(r.fixedOffset=o,o+=parseFloat(r.width||"0")||0);return o}let n=0;for(const r of e)n=t(r,n)}function Qt(e,l){const a=[];let t=0;const n=Kt(e);for(;n.size()>0;){let o=n.count();const u=[];let s=1;for(;o>0;){const{element:d,priority:f}=n.dequeue(),v=l-t-de(d);if(u.push({...d,rowspan:v??1,colspan:d.children?se(d).length:1}),d.children)for(const i of d.children){const g=f%1+s/Math.pow(10,t+2);n.enqueue(i,t+v+g)}s+=1,o-=1}t+=1,a.push(u)}return{columns:e.map(o=>se(o)).flat(),headers:a}}function Ge(e){const l=[];for(const a of e){const t={...Wt(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,o={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?Ge(t.children):void 0};l.push(o)}return l}function Xt(e,l){const a=O([]),t=O([]),n=O({}),r=O({}),o=O({});Ce(()=>{var m,b,x;const d=(e.headers||Object.keys(e.items[0]??{}).map(P=>({key:P,title:It(P)}))).slice(),f=Re(d);(m=l==null?void 0:l.groupBy)!=null&&m.value.length&&!f.has("data-table-group")&&d.unshift({key:"data-table-group",title:"Group"}),(b=l==null?void 0:l.showSelect)!=null&&b.value&&!f.has("data-table-select")&&d.unshift({key:"data-table-select"}),(x=l==null?void 0:l.showExpand)!=null&&x.value&&!f.has("data-table-expand")&&d.push({key:"data-table-expand"});const v=Ge(d);Ut(v);const i=Math.max(...v.map(P=>de(P)))+1,g=Qt(v,i);a.value=g.headers,t.value=g.columns;const h=g.headers.flat(1);for(const P of h)P.key&&(P.sortable&&(P.sort&&(n.value[P.key]=P.sort),P.sortRaw&&(r.value[P.key]=P.sortRaw)),P.filter&&(o.value[P.key]=P.filter))});const u={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:o};return H(Ee,u),u}function Z(){const e=j(Ee);if(!e)throw new Error("Missing headers!");return e}const Jt={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Me={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Me.select({items:a,value:l,selected:t})}},He={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return He.select({items:a,value:l,selected:t})}},Yt=D({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Le}},"DataTable-select"),je=Symbol.for("vuetify:data-table-selection");function Zt(e,l){let{allItems:a,currentPage:t}=l;const n=R(e,"modelValue",e.modelValue,b=>new Set(ne(b).map(x=>{var P;return((P=a.value.find(I=>e.valueComparator(x,I.value)))==null?void 0:P.value)??x})),b=>[...b.values()]),r=k(()=>a.value.filter(b=>b.selectable)),o=k(()=>t.value.filter(b=>b.selectable)),u=k(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Jt;case"all":return He;case"page":default:return Me}});function s(b){return ne(b).every(x=>n.value.has(x.value))}function d(b){return ne(b).some(x=>n.value.has(x.value))}function f(b,x){const P=u.value.select({items:b,value:x,selected:new Set(n.value)});n.value=P}function v(b){f([b],!s([b]))}function i(b){const x=u.value.selectAll({value:b,allItems:r.value,currentPage:o.value,selected:new Set(n.value)});n.value=x}const g=k(()=>n.value.size>0),h=k(()=>{const b=u.value.allSelected({allItems:r.value,currentPage:o.value});return!!b.length&&s(b)}),m={toggleSelect:v,select:f,selectAll:i,isSelected:s,isSomeSelected:d,someSelected:g,allSelected:h,showSelectAll:u.value.showSelectAll};return H(je,m),m}function ee(){const e=j(je);if(!e)throw new Error("Missing selection!");return e}const ea=D({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),ze=Symbol.for("vuetify:data-table-sort");function ta(e){const l=R(e,"sortBy"),a=V(e,"mustSort"),t=V(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function aa(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=s=>{if(s.key==null)return;let d=l.value.map(v=>({...v}))??[];const f=d.find(v=>v.key===s.key);f?f.order==="desc"?a.value?f.order="asc":d=d.filter(v=>v.key!==s.key):f.order="desc":t.value?d=[...d,{key:s.key,order:"asc"}]:d=[{key:s.key,order:"asc"}],l.value=d,n&&(n.value=1)};function o(s){return!!l.value.find(d=>d.key===s.key)}const u={sortBy:l,toggleSort:r,isSorted:o};return H(ze,u),u}function la(){const e=j(ze);if(!e)throw new Error("Missing sort!");return e}function na(e,l,a,t,n){const r=Y();return{sortedItems:k(()=>a.value.length?ra(l.value,a.value,r.current.value,{...e.customKeySort,...t==null?void 0:t.value},n==null?void 0:n.value):l.value)}}function ra(e,l,a,t,n){const r=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((o,u)=>{for(let s=0;s<l.length;s++){const d=l[s].key,f=l[s].order??"asc";if(f===!1)continue;let v=J(o.raw,d),i=J(u.raw,d),g=o.raw,h=u.raw;if(f==="desc"&&([v,i]=[i,v],[g,h]=[h,g]),n!=null&&n[d]){const m=n[d](g,h);if(!m)continue;return m}if(t!=null&&t[d]){const m=t[d](v,i);if(!m)continue;return m}if(v instanceof Date&&i instanceof Date)return v.getTime()-i.getTime();if([v,i]=[v,i].map(m=>m!=null?m.toString().toLocaleLowerCase():m),v!==i)return Q(v)&&Q(i)?0:Q(v)?-1:Q(i)?1:!isNaN(v)&&!isNaN(i)?Number(v)-Number(i):r.compare(v,i)}return 0})}const qe=D({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:M,default:"$sortAsc"},sortDescIcon:{type:M,default:"$sortDesc"},headerProps:{type:Object},...Vt()},"VDataTableHeaders"),ke=L()({name:"VDataTableHeaders",props:qe(),setup(e,l){let{slots:a}=l;const{toggleSort:t,sortBy:n,isSorted:r}=la(),{someSelected:o,allSelected:u,selectAll:s,showSelectAll:d}=ee(),{columns:f,headers:v}=Z(),{loaderClasses:i}=Dt(e);function g(I,y){if(!(!e.sticky&&!I.fixed))return{position:"sticky",left:I.fixed?N(I.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${y})`:void 0}}function h(I){const y=n.value.find(_=>_.key===I.key);return y?y.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:m,backgroundColorStyles:b}=_t(e,"color"),x=k(()=>({headers:v.value,columns:f.value,toggleSort:t,isSorted:r,sortBy:n.value,someSelected:o.value,allSelected:u.value,selectAll:s,getSortIcon:h})),P=I=>{let{column:y,x:_,y:A}=I;const z=y.key==="data-table-select"||y.key==="data-table-expand",p=C(e.headerProps??{},y.headerProps??{});return c(ie,C({tag:"th",align:y.align,class:["v-data-table__th",{"v-data-table__th--sortable":y.sortable,"v-data-table__th--sorted":r(y),"v-data-table__th--fixed":y.fixed,"v-data-table__th--sticky":e.sticky},i.value],style:{width:N(y.width),minWidth:N(y.minWidth),...g(y,A)},colspan:y.colspan,rowspan:y.rowspan,onClick:y.sortable?()=>t(y):void 0,fixed:y.fixed,lastFixed:y.lastFixed,noPadding:z},p),{default:()=>{var T;const S=`header.${y.key}`,w={column:y,selectAll:s,isSorted:r,toggleSort:t,sortBy:n.value,someSelected:o.value,allSelected:u.value,getSortIcon:h};return a[S]?a[S](w):y.key==="data-table-select"?((T=a["header.data-table-select"])==null?void 0:T.call(a,w))??(d&&c(oe,{modelValue:u.value,indeterminate:o.value&&!u.value,"onUpdate:modelValue":s},null)):c("div",{class:"v-data-table-header__content"},[c("span",null,[y.title]),y.sortable&&c(Ct,{key:"icon",class:"v-data-table-header__sort-icon",icon:h(y)},null),e.multiSort&&r(y)&&c("div",{key:"badge",class:["v-data-table-header__sort-badge",...m.value],style:b.value},[n.value.findIndex(B=>B.key===y.key)+1])])}})};G(()=>c(W,null,[a.headers?a.headers(x.value):v.value.map((I,y)=>c("tr",null,[I.map((_,A)=>c(P,{column:_,x:A,y},null))])),e.loading&&c("tr",{class:"v-data-table-progress"},[c("th",{colspan:f.value.length},[c(Bt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),ua=D({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Ke=Symbol.for("vuetify:data-table-group");function sa(e){return{groupBy:R(e,"groupBy")}}function oa(e){const{groupBy:l,sortBy:a}=e,t=O(new Set),n=k(()=>l.value.map(d=>({...d,order:d.order??!1})).concat(a.value));function r(d){return t.value.has(d.id)}function o(d){const f=new Set(t.value);r(d)?f.delete(d.id):f.add(d.id),t.value=f}function u(d){function f(v){const i=[];for(const g of v.items)"type"in g&&g.type==="group"?i.push(...f(g)):i.push(g);return i}return f({type:"group",items:d,id:"dummy",key:"dummy",value:"dummy",depth:0})}const s={sortByWithGroups:n,toggleGroup:o,opened:t,groupBy:l,extractRows:u,isGroupOpen:r};return H(Ke,s),s}function We(){const e=j(Ke);if(!e)throw new Error("Missing group!");return e}function ia(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=J(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function Ue(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=ia(e,l[0]),r=[],o=l.slice(1);return n.forEach((u,s)=>{const d=l[0],f=`${t}_${d}_${s}`;r.push({depth:a,id:f,key:d,value:s,items:o.length?Ue(u,o,a+1,f):u,type:"group"})}),r}function Qe(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...Qe(t.items,l))):a.push(t);return a}function da(e,l,a){return{flatItems:k(()=>{if(!l.value.length)return e.value;const n=Ue(e.value,l.value.map(r=>r.key));return Qe(n,a.value)})}}const ca=D({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),fa=L()({name:"VDataTableGroupHeaderRow",props:ca(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=We(),{isSelected:o,isSomeSelected:u,select:s}=ee(),{columns:d}=Z(),f=k(()=>r([e.item]));return()=>c("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[d.value.map(v=>{var i,g;if(v.key==="data-table-group"){const h=t(e.item)?"$expand":"$next",m=()=>n(e.item);return((i=a["data-table-group"])==null?void 0:i.call(a,{item:e.item,count:f.value.length,props:{icon:h,onClick:m}}))??c(ie,{class:"v-data-table-group-header-row__column"},{default:()=>[c(E,{size:"small",variant:"text",icon:h,onClick:m},null),c("span",null,[e.item.value]),c("span",null,[ye("("),f.value.length,ye(")")])]})}if(v.key==="data-table-select"){const h=o(f.value),m=u(f.value)&&!h,b=x=>s(f.value,x);return((g=a["data-table-select"])==null?void 0:g.call(a,{props:{modelValue:h,indeterminate:m,"onUpdate:modelValue":b}}))??c("td",null,[c(oe,{modelValue:h,indeterminate:m,"onUpdate:modelValue":b},null)])}return c("td",null,null)})])}}),va=D({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Xe=Symbol.for("vuetify:datatable:expanded");function ga(e){const l=V(e,"expandOnClick"),a=R(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function t(u,s){const d=new Set(a.value);s?d.add(u.value):d.delete(u.value),a.value=d}function n(u){return a.value.has(u.value)}function r(u){t(u,!n(u))}const o={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return H(Xe,o),o}function Je(){const e=j(Xe);if(!e)throw new Error("foo");return e}const ma=D({index:Number,item:Object,cellProps:[Object,Function],onClick:re(),onContextmenu:re(),onDblclick:re()},"VDataTableRow"),ba=L()({name:"VDataTableRow",props:ma(),setup(e,l){let{slots:a}=l;const{isSelected:t,toggleSelect:n}=ee(),{isExpanded:r,toggleExpand:o}=Je(),{columns:u}=Z();G(()=>c("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&u.value.map((s,d)=>{const f=e.item,v=`item.${s.key}`,i={index:e.index,item:f.raw,internalItem:f,value:J(f.columns,s.key),column:s,isSelected:t,toggleSelect:n,isExpanded:r,toggleExpand:o},g=typeof e.cellProps=="function"?e.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value,column:s}):e.cellProps,h=typeof s.cellProps=="function"?s.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value}):s.cellProps;return c(ie,C({align:s.align,fixed:s.fixed,fixedOffset:s.fixedOffset,lastFixed:s.lastFixed,noPadding:s.key==="data-table-select"||s.key==="data-table-expand",width:s.width},g,h),{default:()=>{var m,b;return a[v]?a[v](i):s.key==="data-table-select"?((m=a["item.data-table-select"])==null?void 0:m.call(a,i))??c(oe,{disabled:!f.selectable,modelValue:t([f]),onClick:pe(()=>n(f),["stop"])},null):s.key==="data-table-expand"?((b=a["item.data-table-expand"])==null?void 0:b.call(a,i))??c(E,{icon:r(f)?"$collapse":"$expand",size:"small",variant:"text",onClick:pe(()=>o(f),["stop"])},null):Ft(i.value)}})})]))}}),Ye=D({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),we=L()({name:"VDataTableRows",inheritAttrs:!1,props:Ye(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=Z(),{expandOnClick:r,toggleExpand:o,isExpanded:u}=Je(),{isSelected:s,toggleSelect:d}=ee(),{toggleGroup:f,isGroupOpen:v}=We(),{t:i}=Y();return G(()=>{var g,h;return e.loading&&(!e.items.length||t.loading)?c("tr",{class:"v-data-table-rows-loading",key:"loading"},[c("td",{colspan:n.value.length},[((g=t.loading)==null?void 0:g.call(t))??i(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?c("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[c("td",{colspan:n.value.length},[((h=t["no-data"])==null?void 0:h.call(t))??i(e.noDataText)])]):c(W,null,[e.items.map((m,b)=>{var I;if(m.type==="group"){const y={index:b,item:m,columns:n.value,isExpanded:u,toggleExpand:o,isSelected:s,toggleSelect:d,toggleGroup:f,isGroupOpen:v};return t["group-header"]?t["group-header"](y):c(fa,C({key:`group-header_${m.id}`,item:m},xe(a,":group-header",()=>y)),t)}const x={index:b,item:m.raw,internalItem:m,columns:n.value,isExpanded:u,toggleExpand:o,isSelected:s,toggleSelect:d},P={...x,props:C({key:`item_${m.key??m.index}`,onClick:r.value?()=>{o(m)}:void 0,index:b,item:m,cellProps:e.cellProps},xe(a,":row",()=>x),typeof e.rowProps=="function"?e.rowProps({item:x.item,index:x.index,internalItem:x.internalItem}):e.rowProps)};return c(W,{key:P.props.key},[t.item?t.item(P):c(ba,P.props,t),u(m)&&((I=t["expanded-row"])==null?void 0:I.call(t,x))])})])}),{}}}),Ze=D({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Te(),...Ve(),...De(),..._e()},"VTable"),Ie=L()({name:"VTable",props:Ze(),setup(e,l){let{slots:a,emit:t}=l;const{themeClasses:n}=Be(e),{densityClasses:r}=At(e);return G(()=>c(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var o,u,s;return[(o=a.top)==null?void 0:o.call(a),a.default?c("div",{class:"v-table__wrapper",style:{height:N(e.height)}},[c("table",null,[a.default()])]):(u=a.wrapper)==null?void 0:u.call(a),(s=a.bottom)==null?void 0:s.call(a)]}})),{}}}),ha=D({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function ya(e,l,a,t){const n=e.returnObject?l:X(l,e.itemValue),r=X(l,e.itemSelectable,!0),o=t.reduce((u,s)=>(s.key!=null&&(u[s.key]=X(l,s.value)),u),{});return{type:"item",key:e.returnObject?X(l,e.itemValue):n,index:a,value:n,selectable:r,columns:o,raw:l}}function pa(e,l,a){return l.map((t,n)=>ya(e,t,n,a))}function xa(e,l){return{items:k(()=>pa(e,e.items,l.value))}}function Pa(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const o=Fe("VDataTable"),u=k(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let s=null;Ae(u,()=>{Le(s,u.value)||((s==null?void 0:s.search)!==u.value.search&&(l.value=1),o.emit("update:options",u.value),s=u.value)},{deep:!0,immediate:!0})}const Sa=D({...Ye(),width:[String,Number],search:String,...va(),...ua(),...zt(),...ha(),...Yt(),...ea(),...qe(),...Ze()},"DataTable"),ka=D({...Rt(),...Sa(),...Lt(),...Oe()},"VDataTable"),Ia=L()({name:"VDataTable",props:ka(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=sa(e),{sortBy:r,multiSort:o,mustSort:u}=ta(e),{page:s,itemsPerPage:d}=Gt(e),{columns:f,headers:v,sortFunctions:i,sortRawFunctions:g,filterFunctions:h}=Xt(e,{groupBy:n,showSelect:V(e,"showSelect"),showExpand:V(e,"showExpand")}),{items:m}=xa(e,f),b=V(e,"search"),{filteredItems:x}=$t(e,m,b,{transform:q=>q.columns,customKeyFilter:h}),{toggleSort:P}=aa({sortBy:r,multiSort:o,mustSort:u,page:s}),{sortByWithGroups:I,opened:y,extractRows:_,isGroupOpen:A,toggleGroup:z}=oa({groupBy:n,sortBy:r}),{sortedItems:p}=na(e,x,I,i,g),{flatItems:S}=da(p,n,y),w=k(()=>S.value.length),{startIndex:T,stopIndex:B,pageCount:$,setItemsPerPage:et}=Mt({page:s,itemsPerPage:d,itemsLength:w}),{paginatedItems:te}=jt({items:S,startIndex:T,stopIndex:B,itemsPerPage:d}),ae=k(()=>_(te.value)),{isSelected:tt,select:at,selectAll:lt,toggleSelect:nt,someSelected:rt,allSelected:ut}=Zt(e,{allItems:m,currentPage:ae}),{isExpanded:st,toggleExpand:ot}=ga(e);Pa({page:s,itemsPerPage:d,sortBy:r,groupBy:n,search:b}),ue({VDataTableRows:{hideNoData:V(e,"hideNoData"),noDataText:V(e,"noDataText"),loading:V(e,"loading"),loadingText:V(e,"loadingText")}});const F=k(()=>({page:s.value,itemsPerPage:d.value,sortBy:r.value,pageCount:$.value,toggleSort:P,setItemsPerPage:et,someSelected:rt.value,allSelected:ut.value,isSelected:tt,select:at,selectAll:lt,toggleSelect:nt,isExpanded:st,toggleExpand:ot,isGroupOpen:A,toggleGroup:z,items:ae.value.map(q=>q.raw),internalItems:ae.value,groupedItems:te.value,columns:f.value,headers:v.value}));return G(()=>{const q=Se.filterProps(e),it=ke.filterProps(e),dt=we.filterProps(e),ct=Ie.filterProps(e);return c(Ie,C({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},ct),{top:()=>{var K;return(K=t.top)==null?void 0:K.call(t,F.value)},default:()=>{var K,ce,fe,ve,ge,me;return t.default?t.default(F.value):c(W,null,[(K=t.colgroup)==null?void 0:K.call(t,F.value),c("thead",null,[c(ke,it,t)]),(ce=t.thead)==null?void 0:ce.call(t,F.value),c("tbody",null,[(fe=t["body.prepend"])==null?void 0:fe.call(t,F.value),t.body?t.body(F.value):c(we,C(a,dt,{items:te.value}),t),(ve=t["body.append"])==null?void 0:ve.call(t,F.value)]),(ge=t.tbody)==null?void 0:ge.call(t,F.value),(me=t.tfoot)==null?void 0:me.call(t,F.value)])},bottom:()=>t.bottom?t.bottom(F.value):c(W,null,[c(Ot,null,null),c(Se,q,{prepend:t["footer.prepend"]})])})}),{}}});export{Ia as V,Se as a,Pe as b};