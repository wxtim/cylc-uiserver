(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"c-dashboard mt-4",attrs:{fluid:"","grid-list":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[n("p",{staticClass:"display-1"},[t._v("Workflows")]),n("v-data-table",{attrs:{headers:t.workflowsHeader,items:t.workflowsTable,loading:t.isLoading,"hide-default-footer":"","hide-default-header":"",id:"dashboard-workflows"},scopedSlots:t._u([{key:"item.count",fn:function(e){var l=e.item;return[n("v-skeleton-loader",{attrs:{loading:t.isLoading,"max-width":50,type:"table-cell",tile:""}},[n("span",{staticClass:"headline font-weight-light"},[t._v(t._s(l.count))])])]}},{key:"item.text",fn:function(e){var l=e.item;return[n("span",{staticClass:"title font-weight-light"},[t._v(t._s(l.text))])]}}])},[n("v-progress-linear",{attrs:{slot:"progress",color:"grey",indeterminate:""},slot:"progress"})],1)],1),n("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[n("p",{staticClass:"display-1"},[t._v("Events")]),n("v-data-table",{attrs:{headers:t.eventsHeader,items:t.events,"hide-default-footer":"","hide-default-header":""},scopedSlots:t._u([{key:"item.id",fn:function(e){var l=e.item;return[n("span",{staticClass:"title font-weight-light"},[t._v(t._s(l.id))])]}},{key:"item.text",fn:function(e){var l=e.item;return[n("span",{staticClass:"title font-weight-light"},[t._v(t._s(l.text))])]}},{key:"no-data",fn:function(){return[n("td",{staticClass:"title"},[t._v("No events")])]},proxy:!0}])})],1)],1),n("v-divider"),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[n("v-list",{attrs:{"three-line":""}},[n("v-list-item",{attrs:{to:"/workflow-table","data-cy":"workflow-table-link"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.table))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Workflows Table ")]),n("v-list-item-subtitle",[t._v(" View name, host, port, etc. of your workflows ")])],1)],1),n("v-list-item",{attrs:{to:"/user-profile","data-cy":"user-settings-link"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.settings))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Settings ")]),n("v-list-item-subtitle",[t._v(" View your Hub permissions, and alter user preferences ")])],1)],1),n("v-tooltip",{attrs:{disabled:t.multiUserMode,bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("div",t._g({},l),[n("v-list-item",{attrs:{id:"cylc-hub-button",disabled:!t.multiUserMode,href:t.hubUrl}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.hub))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Cylc Hub ")]),n("v-list-item-subtitle",[t._v(" Visit the Hub to manage your running UI Servers ")])],1)],1)],1)]}}])},[n("span",[t._v("You are not running Cylc UI via Cylc Hub.")])])],1)],1),n("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[n("v-list",{attrs:{"three-line":""}},[n("v-list-item",{attrs:{to:"/guide","data-cy":"quickstart-link"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.quickstart))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Cylc UI Quickstart ")]),n("v-list-item-subtitle",[t._v(" Learn how to use the Cylc UI ")])],1)],1),n("v-list-item",{attrs:{href:"https://cylc.github.io/cylc-doc/stable/html/workflow-design-guide/index.html",target:"_blank"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.workflow))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Workflow Design Guide ")]),n("v-list-item-subtitle",[t._v(" How to make complex Cylc workflows and Rose suites simpler and easier to maintain ")])],1)],1),n("v-list-item",{attrs:{href:"https://cylc.github.io/cylc-doc/stable/html/index.html",target:"_blank"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.documentation))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Documentation ")]),n("v-list-item-subtitle",[t._v(" The complete Cylc documentation ")])],1)],1)],1)],1)],1)],1)},i=[],s=(n("13d5"),n("2f62")),a=n("94ed"),o=n("1b62"),r=n("ebc4"),c=n("5982"),u=n("700d"),m=n("e2db"),d=n("020d"),v=n("0306");function f(){var t="/home/runner/work/cylc-ui/cylc-ui/src/views/Dashboard.vue",e="4fe20e63b3f170e2976504565ece34f18cf3de0a",n=new Function("return this")(),l="__coverage__",i={path:"/home/runner/work/cylc-ui/cylc-ui/src/views/Dashboard.vue",statementMap:{0:{start:{line:187,column:4},end:{line:189,column:5}},1:{start:{line:192,column:4},end:{line:235,column:5}},2:{start:{line:242,column:6},end:{line:242,column:38}},3:{start:{line:245,column:20},end:{line:250,column:14}},4:{start:{line:246,column:25},end:{line:246,column:45}},5:{start:{line:248,column:10},end:{line:248,column:44}},6:{start:{line:249,column:10},end:{line:249,column:20}},7:{start:{line:251,column:6},end:{line:258,column:10}},8:{start:{line:252,column:31},end:{line:252,column:91}},9:{start:{line:254,column:10},end:{line:257,column:11}},10:{start:{line:261,column:6},end:{line:261,column:45}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:186,column:2},end:{line:186,column:3}},loc:{start:{line:186,column:14},end:{line:190,column:3}},line:186},1:{name:"(anonymous_1)",decl:{start:{line:191,column:2},end:{line:191,column:3}},loc:{start:{line:191,column:10},end:{line:236,column:3}},line:191},2:{name:"(anonymous_2)",decl:{start:{line:241,column:4},end:{line:241,column:5}},loc:{start:{line:241,column:17},end:{line:243,column:5}},line:241},3:{name:"(anonymous_3)",decl:{start:{line:244,column:4},end:{line:244,column:5}},loc:{start:{line:244,column:22},end:{line:259,column:5}},line:244},4:{name:"(anonymous_4)",decl:{start:{line:246,column:13},end:{line:246,column:14}},loc:{start:{line:246,column:25},end:{line:246,column:45}},line:246},5:{name:"(anonymous_5)",decl:{start:{line:247,column:16},end:{line:247,column:17}},loc:{start:{line:247,column:32},end:{line:250,column:9}},line:247},6:{name:"(anonymous_6)",decl:{start:{line:252,column:14},end:{line:252,column:15}},loc:{start:{line:252,column:31},end:{line:252,column:91}},line:252},7:{name:"(anonymous_7)",decl:{start:{line:253,column:13},end:{line:253,column:14}},loc:{start:{line:253,column:22},end:{line:258,column:9}},line:253},8:{name:"(anonymous_8)",decl:{start:{line:260,column:4},end:{line:260,column:5}},loc:{start:{line:260,column:21},end:{line:262,column:5}},line:260}},branchMap:{0:{loc:{start:{line:248,column:24},end:{line:248,column:39}},type:"binary-expr",locations:[{start:{line:248,column:24},end:{line:248,column:34}},{start:{line:248,column:38},end:{line:248,column:39}}],line:248},1:{loc:{start:{line:256,column:19},end:{line:256,column:41}},type:"binary-expr",locations:[{start:{line:256,column:19},end:{line:256,column:36}},{start:{line:256,column:40},end:{line:256,column:41}}],line:256}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4fe20e63b3f170e2976504565ece34f18cf3de0a"},s=n[l]||(n[l]={});s[t]&&s[t].hash===e||(s[t]=i);var a=s[t];return f=function(){return a},a}f();var h={name:"Dashboard",mixins:[o["a"],c["a"],r["a"]],metaInfo(){return f().f[0]++,f().s[0]++,{title:this.getPageTitle("App.dashboard")}},data(){return f().f[1]++,f().s[1]++,{query:new d["a"](v["a"],{},"root",[],!0,!0),workflowsHeader:[{text:"Count",sortable:!1,value:"count"},{text:"Text",sortable:!1,value:"text"}],eventsHeader:[{text:"ID",sortable:!1,value:"id"},{text:"Event",sortable:!1,value:"text"}],events:[],svgPaths:{table:a["Y"],settings:a["l"],hub:a["B"],quickstart:a["d"],workflow:a["f"],documentation:a["e"]},hubUrl:Object(u["a"])("/hub/home",!1,!0)}},computed:{...Object(s["e"])("user",["user"]),...Object(s["e"])("workflows",["cylcTree"]),...Object(s["c"])("workflows",["getNodes"]),workflows(){return f().f[2]++,f().s[2]++,this.getNodes("workflow")},workflowsTable(){f().f[3]++;const t=(f().s[3]++,Object.values(this.workflows).map(t=>(f().f[4]++,f().s[4]++,t.node.status)).reduce((t,e)=>(f().f[5]++,f().s[5]++,t[e]=(f().b[0][0]++,(t[e]||(f().b[0][1]++,0))+1),f().s[6]++,t),{}));return f().s[7]++,m["a"].enumValues.sort((t,e)=>(f().f[6]++,f().s[8]++,m["b"].get(t)-m["b"].get(e))).map(e=>(f().f[7]++,f().s[9]++,{text:e.name.charAt(0).toUpperCase()+e.name.slice(1),count:(f().b[1][0]++,t[e.name]||(f().b[1][1]++,0))}))},multiUserMode(){return f().f[8]++,f().s[10]++,"single user"!==this.user.mode}}},b=h,g=n("2877"),w=n("6544"),_=n.n(w),y=n("a523"),p=n("8fea"),k=n("ce7e"),x=n("0e8f"),C=n("132d"),V=n("a722"),S=n("8860"),z=n("da13"),I=n("8270"),L=n("5d23"),T=n("8e36"),U=n("3129"),H=n("3a2f"),P=Object(g["a"])(b,l,i,!1,null,null,null);e["default"]=P.exports;_()(P,{VContainer:y["a"],VDataTable:p["a"],VDivider:k["a"],VFlex:x["a"],VIcon:C["a"],VLayout:V["a"],VList:S["a"],VListItem:z["a"],VListItemAvatar:I["a"],VListItemContent:L["b"],VListItemSubtitle:L["c"],VListItemTitle:L["d"],VProgressLinear:T["a"],VSkeletonLoader:U["a"],VTooltip:H["a"]})}}]);