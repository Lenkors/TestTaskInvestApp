"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[135],{8501:(t,e,n)=>{n.d(e,{b:()=>i});var a=n(5684),c=n(8045),i=(0,a.Q_)({id:"client",state:function(){return{clients:[],currentPage:1,clientPaginationData:!1}},actions:{getAllClients:function(t){var e=this;return this.currentPage=t.current_page,new Promise((function(n,a){(0,c.K)({method:c.X.getClients.method,url:c.X.getClients.url,params:t}).then((function(t){var a;null!==(a=t.data)&&void 0!==a&&a.data?(n(t.data.data),e.clients=t.data.data,e.clientPaginationData=t.data):t.data.length?(n(t.data),e.clients=t.data,e.clientPaginationData=!1):n([])})).catch((function(t){return a(t)}))}))},createClient:function(t){var e=this;return new Promise((function(n,a){(0,c.K)({method:c.X.createClient.method,url:c.X.createClient.url,data:t}).then((function(t){e.getAllClients({current_page:e.currentPage}).then((function(){n(t)}))})).catch((function(t){return a(t)}))}))},buyStock:function(t){return new Promise((function(e,n){(0,c.K)({method:c.X.buyStock.method,url:c.X.buyStock.url,data:t}).then((function(t){e(t)})).catch((function(t){return n(t)}))}))},getStockByClient:function(t){return new Promise((function(e,n){(0,c.K)({method:c.X.getClientDataById.method,url:c.X.getClientDataById.url,params:t}).then((function(t){e(t.data)})).catch((function(t){return n(t)}))}))}}})},8072:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(3645),c=n.n(a)()((function(t){return t[1]}));c.push([t.id,".user_stock__header{align-items:center;display:flex;justify-content:space-between}.user_stock__total{display:flex;flex-direction:column;justify-content:flex-end}.user_stock__total-elem{grid-column-gap:.3em;display:grid;grid-template-columns:17fr 1fr;padding:0 1em;text-align:end}.user_stock__total-elem .title{font-weight:700}.user_stock__total-elem .negative{color:#df1818}.user_stock__total-elem .positive{color:#39c227}",""]);const i=c},9668:(t,e,n)=>{n.r(e),n.d(e,{default:()=>N});var a=n(8222),c={class:"user_stock wrapper container mx-auto"},i={class:"user_stock__header"},r={class:"head__title"},l={class:"user_stock__list wrapper"},u={class:"user_stock__total"},o={class:"user_stock__total-elem"},s=(0,a._)("span",{class:"title"},"Total: ",-1),d=(0,a.Uk)(),p={class:"user_stock__total-elem"},_=(0,a._)("span",{class:"title"},"Invested: ",-1),v=(0,a.Uk)(),f={class:"user_stock__total-elem"},m=(0,a._)("span",{class:"title"},"Performance: ",-1),h=(0,a.Uk)(),g={class:"user_stock__total-elem"},k=(0,a._)("span",{class:"title"},"Cash balance: ",-1),C=(0,a.Uk)();var P=n(8501),w=n(2119),y=n(6121);const S={name:"userStocks",setup:function(){var t=(0,y.iH)(["#","Company","Volume","Purchase price","Current price","Gain/Loss"]),e=(0,P.b)(),n=(0,y.iH)([]),a=(0,y.iH)(),c=(0,w.yj)(),i=(0,y.iH)([]),r=function(){return new Promise((function(t){e.getStockByClient({client_id:c.params.id}).then((function(e){a.value=e,t(!0)}))}))};(0,y.YP)((function(){return a.value}),(function(){a.value||r().then((function(){a.value.stocks.map((function(t){var e=i.value.length?i.value.find((function(e){return t.id===e.id&&t.pivot.purchase_price==e.purchasePrice})):void 0;e?e.count+=1:i.value.push({id:t.id,price:parseInt(t.price),name:t.name,purchasePrice:parseInt(t.pivot.purchase_price),count:1})})),l()}))}),{immediate:!0});var l=function(){n.value=i.value.map((function(t,e){return{id:e+1,company:t.name,volume:t.count,purchase_price:t.purchasePrice,current_price:t.price,gain_loss:t.count*t.price-t.count*t.purchasePrice}}))},u=(0,y.Fl)((function(){var t,e=0,n=0;return null!==(t=i.value)&&void 0!==t&&t.length?(i.value.map((function(t){e+=t.count*t.price,n+=t.count*t.purchasePrice})),e-n):0})),o=(0,y.Fl)((function(){var t,e=0;return null!==(t=i.value)&&void 0!==t&&t.length&&i.value.map((function(t){e+=t.count*t.purchasePrice})),e})),s=(0,y.Fl)((function(){var t;if(null!==(t=i.value)&&void 0!==t&&t.length){var e=o.value/100;return(u.value/e).toFixed(2)}return 0})),d=(0,y.Fl)((function(){return function(t){var e=Math.sign(t);return-1==e?"negative":0==e||-0==e||NaN==e?"neutral":"positive"}}));return{headerTitles:t,totalProfitCalculation:u,userStocksList:n,requestClientData:r,clientData:a,investedCalculation:o,performanceCalculation:s,stockList:i,checkNumSign:d}}};var b=n(3379),D=n.n(b),X=n(8072),x={insert:"head",singleton:!1};D()(X.Z,x);X.Z.locals;const N=(0,n(3744).Z)(S,[["render",function(t,e,n,P,w,y){var S,b,D,X=(0,a.up)("app-table");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",i,[(0,a._)("h2",r,(0,a.zw)((null===(S=P.clientData)||void 0===S?void 0:S.name)||"User")+" stock List",1)]),(0,a._)("div",l,[(0,a.Wm)(X,{params:{headers:P.headerTitles,isAction:!1,type:"user-stock",cellData:P.userStocksList}},null,8,["params"]),(0,a._)("div",u,[(0,a._)("div",o,[s,d,(0,a._)("span",{class:(0,a.C_)("".concat(P.checkNumSign(P.totalProfitCalculation)))},(0,a.zw)(" € ".concat(P.totalProfitCalculation)),3)]),(0,a._)("div",p,[_,v,(0,a._)("span",{class:(0,a.C_)("".concat(P.checkNumSign(P.investedCalculation)))},(0,a.zw)(" € ".concat(P.investedCalculation)),3)]),(0,a._)("div",f,[m,h,(0,a._)("span",{class:(0,a.C_)("".concat(P.checkNumSign(P.performanceCalculation)))},(0,a.zw)(P.performanceCalculation)+" %",3)]),(0,a._)("div",g,[k,C,(0,a._)("span",{class:(0,a.C_)("".concat(P.checkNumSign((null===(b=P.clientData)||void 0===b?void 0:b.balance)||0)))},"€ "+(0,a.zw)((null===(D=P.clientData)||void 0===D?void 0:D.balance)||0),3)])])])])}]])}}]);