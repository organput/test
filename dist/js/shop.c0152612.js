"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[883],{9174:function(t,e,c){c.d(e,{K:function(){return o}});var a=c(6278),n=c(953),s=c(641);const o=t=>{const e=(0,a.Pj)(),{cartList:c}=(0,n.QW)(e.state),o=(t,c,a,n)=>{e.commit("changeCartItemInfo",{id:t,itemId:c,productInfo:a,num:n})},i=(0,s.EW)((()=>{const e=c.value[t]?.productList;return e})),r=(0,s.EW)((()=>{const e=c.value[t]?.shopName;return e})),l=(0,s.EW)((()=>{const e=c.value[t]?.productList;let a=0,n=0;if(e)for(const t in e)a+=e[t].count,e[t].check&&(n+=e[t].count*e[t].price);return n=n.toFixed(2),{total:a,price:n}}));return{cartList:c,changeCartItemInfo:o,products:i,shopName:r,calculations:l}}},8023:function(t,e,c){c.d(e,{A:function(){return u}});var a=c(641),n=c(33);const s={class:"docker"},o=["innerHTML"],i={class:"docker__title"};function r(t,e,c,r,l,d){const _=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",s,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.dockerList,((t,e)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,n.C4)({docker__item:!0,"docker__item--active":e===c.dockerIndex}),key:t.icon},[(0,a.bF)(_,{to:t.to},{default:(0,a.k6)((()=>[(0,a.Lk)("div",{class:"iconfont",innerHTML:t.icon},null,8,o),(0,a.Lk)("div",i,(0,n.v_)(t.text),1)])),_:2},1032,["to"])],2)))),128))])}var l={name:"DockerPage",props:["dockerIndex"],setup(){const t=[{icon:"&#xe62f;",text:"取快递",to:{name:"Home"}},{icon:"&#xe635;",text:"我的",to:{name:"OrderList"}}];return{dockerList:t}}},d=c(6262);const _=(0,d.A)(l,[["render",r],["__scopeId","data-v-a361b130"]]);var u=_},7548:function(t,e,c){c.d(e,{A:function(){return p}});var a=c(641),n=c(33);const s={class:"shop"},o=["src"],i={class:"shop__content__title"},r={class:"shop__content__tags"},l={class:"shop__content__highlight"};function d(t,e,c,d,_,u){return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("img",{class:"shop__img",src:c.item.imgUrl},null,8,o),(0,a.Lk)("div",{class:(0,n.C4)(["shop__content",{shop__content:!0,"shop__content--bordered":!c.hiddenBorder}])},[(0,a.Lk)("div",i,(0,n.v_)(c.item.title),1),(0,a.Lk)("div",r,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(c.item.tags,((t,e)=>((0,a.uX)(),(0,a.CE)("span",{class:"shop__content__tag",key:e},(0,n.v_)(t),1)))),128))]),(0,a.Lk)("p",l,(0,n.v_)(c.item.highlight),1)],2)])}var _={name:"ShopView",props:["item","hiddenBorder"]},u=c(6262);const k=(0,u.A)(_,[["render",d],["__scopeId","data-v-0f043c76"]]);var p=k},2470:function(t,e,c){c.r(e),c.d(e,{default:function(){return I}});var a=c(641),n=c(33);const s=t=>((0,a.Qi)("data-v-736f9abb"),t=t(),(0,a.jt)(),t),o={class:"wrapper"},i=s((()=>(0,a.Lk)("div",{class:"title"},"我的地址",-1))),r={class:"create"},l=s((()=>(0,a.Lk)("span",{class:"create__text"},"创建一个新地址",-1))),d={class:"orders"},_={class:"order__title"},u=["onClick"],k={class:"order__content"},p={class:"order__content__price"},h={class:"order__content__btns"};function C(t,e,c,s,C,m){const v=(0,a.g2)("router-link"),L=(0,a.g2)("DockerPage");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",o,[i,(0,a.Lk)("div",r,[(0,a.bF)(v,{to:{name:"create"}},{default:(0,a.k6)((()=>[l])),_:1})]),(0,a.Lk)("div",d,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.addressList,((t,c)=>((0,a.uX)(),(0,a.CE)("div",{class:"order",key:c},[(0,a.Lk)("div",_,[(0,a.eW)((0,n.v_)(t.name)+"-"+(0,n.v_)(t.phone)+" ",1),(0,a.Lk)("span",{class:(0,n.C4)(s.index===c?"order__status--active":"order__status"),onClick:()=>s.handleChange(c)},(0,n.v_)(s.index===c?"默认地址":"设为默认"),11,u)]),(0,a.Lk)("div",k,[(0,a.Lk)("div",p,(0,n.v_)(t.address),1),(0,a.Lk)("div",h,[(0,a.Lk)("span",{class:"order__content__del iconfont",onClick:e[0]||(e[0]=()=>s.handleDel(s.index))},"")])])])))),128))])]),(0,a.bF)(L,{dockerIndex:1})],64)}var m=c(953),v=c(6278),L=c(8023),g={name:"OrderList",components:{DockerPage:L.A},setup(){const t=(0,v.Pj)(),{addressList:e,index:c}=(0,m.QW)(t.state),a=e=>{t.commit("handleChange",{index:e})},n=e=>{t.commit("handleDel",{index:e})};return console.log(c.value),{addressList:e,handleChange:a,index:c,handleDel:n}}},f=c(6262);const b=(0,f.A)(g,[["render",C],["__scopeId","data-v-736f9abb"]]);var I=b},1185:function(t,e,c){c.r(e),c.d(e,{default:function(){return ft}});var a=c(641);const n=t=>((0,a.Qi)("data-v-32095b2c"),t=t(),(0,a.jt)(),t),s={class:"wrapper"},o={class:"search"},i=n((()=>(0,a.Lk)("div",{class:"search__content"},[(0,a.Lk)("span",{class:"search__content__icon iconfont"},""),(0,a.Lk)("input",{class:"search__content__input",placeholder:"请输入商品名称"})],-1))),r={class:"shop-view"};function l(t,e,c,n,l,d){const _=(0,a.g2)("ShopView"),u=(0,a.g2)("ContentPage"),k=(0,a.g2)("CartPage");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("div",o,[(0,a.Lk)("div",{class:"search__back iconfont",onClick:e[0]||(e[0]=(...t)=>n.handleBackClick&&n.handleBackClick(...t))},""),i]),(0,a.Lk)("div",r,[n.item.imgUrl?((0,a.uX)(),(0,a.Wv)(_,{key:0,item:n.item,hiddenBorder:!0},null,8,["item"])):(0,a.Q3)("",!0)]),(0,a.bF)(u,{shopName:n.item.title},null,8,["shopName"]),(0,a.bF)(k,{shopName:n.item.title},null,8,["shopName"])])}c(4114);var d=c(953),_=c(5220),u=c(1663),k=c(7548),p=c(33);const h=t=>((0,a.Qi)("data-v-2c3eac14"),t=t(),(0,a.jt)(),t),C={class:"content"},m={class:"category"},v=["onClick"],L={class:"product"},g=["src"],f={class:"product__item__detail"},b={class:"product__item__title"},I={class:"product__item__sales"},E={class:"product__item__price"},w=h((()=>(0,a.Lk)("span",{class:"product__item__yen"},"¥",-1))),P={class:"product__item__origin"},X={class:"product__number"},y=["onClick"],x=["onClick"];function W(t,e,c,n,s,o){return(0,a.uX)(),(0,a.CE)("div",C,[(0,a.Lk)("div",m,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.categories,(t=>((0,a.uX)(),(0,a.CE)("div",{class:(0,p.C4)({category__item:!0,"category__item--active":n.currentTab===t.tab}),key:t.id,onClick:()=>n.handleTabClick(t.tab)},(0,p.v_)(t.name),11,v)))),128))]),(0,a.Lk)("div",L,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.list,(t=>((0,a.uX)(),(0,a.CE)("div",{class:"product__item",key:t.id},[(0,a.Lk)("img",{class:"product__item__img",src:t.imgUrl},null,8,g),(0,a.Lk)("div",f,[(0,a.Lk)("h4",b,(0,p.v_)(t.name),1),(0,a.Lk)("p",I,"月售"+(0,p.v_)(t.sales)+"件",1),(0,a.Lk)("p",E,[w,(0,a.eW)((0,p.v_)(t.price)+" ",1),(0,a.Lk)("span",P,"¥"+(0,p.v_)(t.oldPrice),1)])]),(0,a.Lk)("div",X,[(0,a.Lk)("span",{class:"product__number__minus iconfont",onClick:()=>{n.changeCartItem(n.id,t.id,t,-1,c.shopName)}},"",8,y),(0,a.eW)(" "+(0,p.v_)(n.getProductCartCount(n.id,t.id))+" ",1),(0,a.Lk)("span",{class:"product__number__plus iconfont",onClick:()=>{n.changeCartItem(n.id,t.id,t,1,c.shopName)}},"",8,x)])])))),128))])])}var F=c(6278),K=c(9174);const T=[{id:1,name:"全部商品",tab:"all"},{id:2,name:"秒杀",tab:"seckill"},{id:3,name:"新鲜水果",tab:"fruit"}],Q=()=>{const t=(0,d.KR)(T[0].tab),e=e=>{t.value=e};return{currentTab:t,handleTabClick:e}},N=(t,e)=>{const c=(0,d.Kh)({list:[]}),n=async()=>{const a=await(0,u.J)(`/api/shop/${e}`,{tab:t.value});0===a?.errorno&&a?.data?.length&&(c.list=a.data)};(0,a.nT)((()=>{n()}));const{list:s}=(0,d.QW)(c);return{list:s}},j=()=>{const t=(0,F.Pj)(),{cartList:e,changeCartItemInfo:c}=(0,K.K)(),a=(e,c)=>{t.commit("changeShopName",{id:e,shopName:c})},n=(t,e,n,s,o)=>{c(t,e,n,s),a(t,o)},s=(t,c)=>e.value?.[t]?.productList?.[c]?.count||0;return{changeCartItem:n,cartList:e,getProductCartCount:s}};var A={name:"ContentPage",props:["shopName"],setup(){const t=(0,_.lq)(),e=t.params.id,{currentTab:c,handleTabClick:a}=Q(),{list:n}=N(c,e),{changeCartItem:s,cartList:o,getProductCartCount:i}=j();return{getProductCartCount:i,changeCartItem:s,categories:T,currentTab:c,handleTabClick:a,list:n,cartList:o,id:e}}},B=c(6262);const D=(0,B.A)(A,[["render",W],["__scopeId","data-v-2c3eac14"]]);var H=D;const M=t=>((0,a.Qi)("data-v-5aedba3d"),t=t(),(0,a.jt)(),t),S={class:"cart"},U={key:0,class:"product"},q={class:"product__header"},V=["innerHTML"],$={class:"product__header__clear"},J={key:0,class:"product__null"},O={key:0,class:"product__item"},R=["innerHTML","onClick"],z=["src"],G={class:"product__item__detail"},Y={class:"product__item__title"},Z={class:"product__item__price"},tt=M((()=>(0,a.Lk)("span",{class:"product__item__yen"},"¥",-1))),et={class:"product__item__origin"},ct={class:"product__number"},at=["onClick"],nt=["onClick"],st={class:"check"},ot={class:"check__icon"},it={class:"check__icon__tag"},rt={class:"check__info"},lt={class:"check__info__price"},dt={class:"check__btn"};function _t(t,e,c,n,s,o){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[n.showCart?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"mask",onClick:e[0]||(e[0]=(...t)=>n.showCartClick&&n.showCartClick(...t))})):(0,a.Q3)("",!0),(0,a.Lk)("div",S,[n.showCart?((0,a.uX)(),(0,a.CE)("div",U,[(0,a.Lk)("div",q,[(0,a.Lk)("div",{class:"product__header__all",onClick:e[1]||(e[1]=()=>n.setCartCheck(n.id,n.totalCheck))},[(0,a.Lk)("span",{class:"product__header__icon iconfont",innerHTML:n.totalCheck?"":""},null,8,V),(0,a.eW)(" 全选 ")]),(0,a.Lk)("div",$,[(0,a.Lk)("span",{onClick:e[2]||(e[2]=()=>n.cleanCartProducts(n.id))},"清空购物车")])]),0===n.calculations.total?((0,a.uX)(),(0,a.CE)("div",J,"还没有添加商品")):(0,a.Q3)("",!0),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.products,(t=>((0,a.uX)(),(0,a.CE)(a.FK,{key:t.id},[t.count>0?((0,a.uX)(),(0,a.CE)("div",O,[(0,a.Lk)("div",{class:"product__item__check iconfont",innerHTML:t.check?"":"",onClick:()=>n.checkehandleClick(n.id,t.id)},null,8,R),(0,a.Lk)("img",{class:"product__item__img",src:t.imgUrl},null,8,z),(0,a.Lk)("div",G,[(0,a.Lk)("h4",Y,(0,p.v_)(t.name),1),(0,a.Lk)("p",Z,[tt,(0,a.eW)((0,p.v_)(t.price)+" ",1),(0,a.Lk)("span",et,"¥"+(0,p.v_)(t.oldPrice),1)])]),(0,a.Lk)("div",ct,[(0,a.Lk)("span",{class:"product__number__minus iconfont",onClick:()=>{n.changeCartItemInfo(n.id,t.id,t,-1)}},"",8,at),(0,a.eW)(" "+(0,p.v_)(t.count||0)+" ",1),(0,a.Lk)("span",{class:"product__number__plus iconfont",onClick:()=>{n.changeCartItemInfo(n.id,t.id,t,1)}},"",8,nt)])])):(0,a.Q3)("",!0)],64)))),128))])):(0,a.Q3)("",!0),(0,a.Lk)("div",st,[(0,a.Lk)("div",ot,[(0,a.Lk)("img",{src:"http://www.dell-lee.com/imgs/vue3/basket.png",class:"check__icon__img",onClick:e[3]||(e[3]=(...t)=>n.showCartClick&&n.showCartClick(...t))}),(0,a.Lk)("div",it,(0,p.v_)(n.calculations.total),1)]),(0,a.Lk)("div",rt,[(0,a.eW)(" 总计: "),(0,a.Lk)("span",lt,"¥"+(0,p.v_)(n.calculations.price),1)]),(0,a.Lk)("div",dt,[(0,a.bF)(i,{to:{path:`/order/${n.id}`}},{default:(0,a.k6)((()=>[(0,a.eW)(" 去结算 ")])),_:1},8,["to"])])])])],64)}const ut=()=>{const t=(0,_.lq)(),e=(0,F.Pj)(),c=t.params.id,{cartList:n,changeCartItemInfo:s,products:o,calculations:i}=(0,K.K)(c),r=(t,c)=>{e.commit("checkehandleClick",{id:t,itemId:c})},l=t=>{e.commit("cleanCartProducts",{id:t})},d=(t,c)=>{e.commit("setCartCheck",{id:t,totalCheck:c})},u=(0,a.EW)((()=>{const t=n.value[c]?.productList;if(t){for(const e in t)if(!t[e].check)return!1;return!0}return!1}));return{products:o,totalCheck:u,setCartCheck:d,calculations:i,cleanCartProducts:l,id:c,changeCartItemInfo:s,checkehandleClick:r}},kt=()=>{const t=(0,d.KR)(!1),e=()=>{t.value=!t.value};return{showCart:t,showCartClick:e}};var pt={name:"CartPage",props:["shopName"],setup(){const{showCart:t,showCartClick:e}=kt(),{totalCheck:c,setCartCheck:a,calculations:n,cleanCartProducts:s,products:o,id:i,changeCartItemInfo:r,checkehandleClick:l}=ut();return{showCartClick:e,showCart:t,setCartCheck:a,totalCheck:c,cleanCartProducts:s,calculations:n,products:o,changeCartItemInfo:r,id:i,checkehandleClick:l}}};const ht=(0,B.A)(pt,[["render",_t],["__scopeId","data-v-5aedba3d"]]);var Ct=ht;const mt=()=>{const t=(0,_.lq)(),e=t.params.id,c=(0,d.Kh)({item:{}}),a=async()=>{const t=await(0,u.J)(`/api/shop/${e}`);t&&(c.item=t)},{item:n}=(0,d.QW)(c);return{item:n,getItemData:a}},vt=()=>{const t=(0,_.rd)(),e=()=>{t.push({name:"Home"})};return{handleBackClick:e}};var Lt={name:"ShopPage",components:{ShopView:k.A,ContentPage:H,CartPage:Ct},setup(){const{item:t,getItemData:e}=mt(),{handleBackClick:c}=vt();return e(),{item:t,handleBackClick:c}}};const gt=(0,B.A)(Lt,[["render",l],["__scopeId","data-v-32095b2c"]]);var ft=gt}}]);
//# sourceMappingURL=shop.c0152612.js.map