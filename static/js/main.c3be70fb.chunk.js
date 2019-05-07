(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"k",function(){return c}),n.d(t,"l",function(){return u}),n.d(t,"j",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"o",function(){return E});var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",E="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(23),a=function(e,t){return Object(r.a)({},e,t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,,,function(e,t,n){"use strict";var r=n(1),a=n(19),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://myburger-7f009.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(23),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth=".concat(t),e).then(function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(function(e){return{type:r.j,error:e}}(e))})}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json".concat(o)).then(function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){var t;n((t=e,{type:r.g,error:t}))})}},p=n(34),m=n.n(p),h=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout(function(){t(f())},1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD9VeaFv_qFkxamhxoseVSpLhXbiNFAD6I";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD9VeaFv_qFkxamhxoseVSpLhXbiNFAD6I"),m.a.post(i,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(h(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))}).catch(function(e){var t;console.log(e),a((t=e.response.data.error,{type:r.b,error:t}))})}},E=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("ExpirationDate"));n<=new Date&&e(f());var r=localStorage.getItem("userId");e(h(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}else e(f())}};n.d(t,"a",function(){return o}),n.d(t,"i",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return f}),n.d(t,"j",function(){return E}),n.d(t,"c",function(){return _})},,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2Wcll",BreadTop:"BurgerIngredient_BreadTop__IrUfS",Seeds1:"BurgerIngredient_Seeds1__u0xt7",Seeds2:"BurgerIngredient_Seeds2__k9fHX",Meat:"BurgerIngredient_Meat__zQYq9",Cheese:"BurgerIngredient_Cheese__1saRx",Salad:"BurgerIngredient_Salad__16ZVQ",Bacon:"BurgerIngredient_Bacon__1eXLn"}},function(e,t,n){"use strict";var r=n(34),a=n.n(r).a.create({baseURL:"https://myburger-7f009.firebaseio.com/"});t.a=a},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__KaDNe",Open:"SideDrawer_Open__Dt8cm",Closed:"SideDrawer_Closed__tyYAY",Logo:"SideDrawer_Logo__3JlX4"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2y2jz",Label:"BuildControl_Label__1HrRa",Less:"BuildControl_Less__1TbOf",More:"BuildControl_More__2Qk4S"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(61),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(63),d=n.n(s),p=n(9),m=n(32),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(m.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=h},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2Fr7J",Logo:"Toolbar_Logo__3cRBO",DesktopOnly:"Toolbar_DesktopOnly__1aK5C"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(43),i=n.n(o);t.a=function(e){return a.a.createElement("button",{className:[i.a.Button,i.a[e.btnType]].join(" "),disabled:e.disabled,onClick:e.clicked},e.children)}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__27zcj",active:"NavigationItem_active__2Med-"}},,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__Qkg2P",OrderButton:"BuildControls_OrderButton__3CS2P",enable:"BuildControls_enable__1VaxX"}},function(e,t,n){e.exports={Button:"Button_Button__PvM0J",Success:"Button_Success__2yM7g",Danger:"Button_Danger__1yERf"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(64),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(33),d=n(9);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,function(e,t,n){"use strict";var r=n(66),a=n(0),o=n.n(a),i=n(62),c=n.n(i),u=n(4),l=n(5),s=n(7),d=n(6),p=n(8),m=n(18),h=n.n(m),f=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:h.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:h.a.BreadTop},o.a.createElement("div",{className:h.a.Seeds1}),o.a.createElement("div",{className:h.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:h.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:h.a.Cheese});break;case"bacon":e=o.a.createElement("div",{className:h.a.Bacon});break;case"salad":e=o.a.createElement("div",{className:h.a.Salad});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(f,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(f,{type:"bread-top"}),t,o.a.createElement(f,{type:"bread-bottom"}))}},,function(e,t,n){e.exports={Content:"Layout_Content__2KkEd"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__3cNJr"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2g2_X"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2Y5Jg"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__fjueb"}},function(e,t,n){e.exports={Burger:"Burger_Burger__29vSq"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1PsuU"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__39-nS",load3:"Spinner_load3__1Wg_c"}},,,function(e,t,n){e.exports=n(101)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(29),i=n.n(o),c=n(22),u=n(15),l=n(21),s=(n(76),n(4)),d=n(5),p=n(7),m=n(6),h=n(8),f=n(20),g=n(9),b=n(55),E=n.n(b),_=n(35),v=n.n(_),O=n(56),y=n.n(O),j=n(57),k=n.n(j),S=function(e){return a.a.createElement("div",{className:k.a.Logo},a.a.createElement("img",{src:y.a,alt:"MyBurger"}))},C=n(58),I=n.n(C),w=n(40),N=n.n(w),B=function(e){return a.a.createElement("li",{className:N.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:N.a.active},e.children))},D=function(e){return a.a.createElement("ul",{className:I.a.NavigationItems},a.a.createElement(B,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(B,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(B,{link:"/Logout"},"Logout"):a.a.createElement(B,{link:"/Auth"},"Sign up / Login"))},T=n(60),A=n.n(T),R=function(e){return a.a.createElement("div",{className:A.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},L=function(e){return a.a.createElement("header",{className:v.a.Toolbar},a.a.createElement(R,{clicked:e.DrawerToggleClicked}),a.a.createElement("div",{className:v.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",{className:v.a.DesktopOnly},a.a.createElement(D,{isAuthenticated:e.isAuth})))},x=n(24),P=n.n(x),H=n(32),U=function(e){var t=[P.a.SideDrawer,P.a.Closed];return e.open&&(t=[P.a.SideDrawer,P.a.Open]),a.a.createElement(g.a,null,a.a.createElement(H.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:P.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",null,a.a.createElement(D,{isAuthenticated:e.isAuth}))))},M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!n.state.showSideDrawer}})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement(g.a,null,a.a.createElement(L,{isAuth:this.props.isAuthenticated,DrawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(U,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:E.a.Content},this.props.children))}}]),t}(r.Component),F=Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(M),z=n(23),q=n(53),G=n(42),X=n.n(G),V=n(28),J=n.n(V),W=function(e){return a.a.createElement("div",{className:J.a.BuildControl},a.a.createElement("div",{className:J.a.Label},e.label),a.a.createElement("button",{className:J.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:J.a.More,onClick:e.added},"More"))},Y=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"},{label:"Cheese",type:"cheese"}],$=function(e){return a.a.createElement("div",{className:X.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,"$",e.price.toFixed(2))),Y.map(function(t){return a.a.createElement(W,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("div",null,a.a.createElement("button",{className:X.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER")))},Q=n(33),K=n(36),Z=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.props.ingredients[t])});return a.a.createElement(g.a,null,a.a.createElement("h3",null,"Your order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2)," ")),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(K.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(K.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),ee=n(44),te=n(45),ne=n(16),re=n(19),ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(z.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients cannot be loaded"):a.a.createElement(ee.a,null);return this.props.ings&&(r=a.a.createElement(g.a,null,a.a.createElement(q.a,{ingredients:this.props.ings}),a.a.createElement($,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.price,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),n=a.a.createElement(Z,{price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,ingredients:this.props.ings})),a.a.createElement(g.a,null,a.a.createElement(Q.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),oe=Object(u.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(ne.a(t))},onIngredientRemoved:function(t){return e(ne.i(t))},onInitIngredients:function(){return e(ne.e())},onInitPurchase:function(){return e(ne.h())},onSetAuthRedirectPath:function(t){return e(ne.j(t))}}})(Object(te.a)(ae,re.a)),ie=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(f.a,{to:"/"})}}]),t}(r.Component),ce=Object(u.b)(null,function(e){return{onLogout:function(){return e(ne.f())}}})(ie),ue=function(e){return function(t){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(h.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},le=ue(function(){return n.e(3).then(n.bind(null,110))}),se=ue(function(){return n.e(5).then(n.bind(null,111))}),de=ue(function(){return n.e(4).then(n.bind(null,109))}),pe=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/Auth",component:de}),a.a.createElement(f.b,{path:"/",exact:!0,component:oe}),a.a.createElement(f.b,{component:oe}),a.a.createElement(f.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/Auth",component:de}),a.a.createElement(f.b,{path:"/Checkout",component:le}),a.a.createElement(f.b,{path:"/Orders",component:se}),a.a.createElement(f.b,{path:"/Logout",component:ce}),a.a.createElement(f.b,{path:"/",exact:!0,component:oe}),a.a.createElement(f.b,{component:oe}))),a.a.createElement("div",null,a.a.createElement(F,null,e))}}]),t}(r.Component),me=Object(f.f)(Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(ne.c())}}})(pe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(25),fe=n(1),ge=n(3),be={ingredients:null,totalPrice:4,error:!1,building:!1},Ee={salad:.5,cheese:.4,meat:1.3,bacon:.7},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.a:return function(e,t){var n=Object(he.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ge.b)(e.ingredients,n),totalPrice:e.totalPrice+Ee[t.ingredientName],building:!0};return Object(ge.b)(e,r)}(e,t);case fe.n:return function(e,t){var n=Object(he.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ge.b)(e.ingredients,n),totalPrice:e.totalPrice-Ee[t.ingredientName],building:!0};return Object(ge.b)(e,r)}(e,t);case fe.p:return function(e,t){return Object(ge.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})}(e,t);case fe.f:return function(e,t){return Object(ge.b)(e,{error:!0})}(e);default:return e}},ve=n(65),Oe={orders:[],loading:!1,purchaseed:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.m:return function(e,t){return Object(ge.b)(e,{purchased:!1})}(e);case fe.k:return function(e,t){return Object(ge.b)(e,{loading:!0})}(e);case fe.l:return function(e,t){var n=Object(ge.b)(t.orderData,{id:t.orderId});return Object(ge.b)(e,{loading:!1,orders:e.orders.concat(n),purchased:!0})}(e,t);case fe.j:return function(e,t){return Object(ge.b)(e,{loading:!1})}(e);case fe.h:return function(e,t){return Object(ge.b)(e,{loading:!0})}(e);case fe.i:return function(e,t){return Object(ge.b)(e,{orders:t.orders,loading:!1})}(e,t);case fe.g:return function(e,t){return Object(ge.b)(e,{loading:!1})}(e);default:return e}},je={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.d:return function(e,t){return Object(ge.b)(e,{error:null,loading:!0})}(e);case fe.e:return function(e,t){return Object(ge.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case fe.b:return function(e,t){return Object(ge.b)(e,{error:t.error,loading:!1})}(e,t);case fe.c:return function(e,t){return Object(ge.b)(e,{token:null,userId:null})}(e);case fe.o:return function(e,t){return Object(ge.b)(e,{authRedirectPath:t.path})}(e,t);default:return e}},Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Ce=Object(l.c)({burgerBuilder:_e,order:ye,auth:ke}),Ie=Object(l.e)(Ce,Se(Object(l.a)(ve.a))),we=a.a.createElement(u.a,{store:Ie},a.a.createElement(c.a,null,a.a.createElement(me,null)));i.a.render(we,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[67,1,2]]]);
//# sourceMappingURL=main.c3be70fb.chunk.js.map