(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{102:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103),o=a.n(l);t.a=function(e){var t=null,a=[o.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(o.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:o.a.Select,value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:o.a.Input},r.a.createElement("label",{className:o.a.Label},e.label),t)}},103:function(e,t,a){e.exports={Input:"Input_Input__235-a",Label:"Input_Label__2117w",InputElement:"Input_InputElement__3zvTA",Invalid:"Input_Invalid__1U69o"}},104:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3QpgA"}},105:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__3wWma",ContactDate:"ContactData_ContactDate__3hzyB"}},110:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),l=a(7),o=a(6),i=a(8),c=a(0),u=a.n(c),d=a(53),s=a(36),p=a(104),m=a.n(p),h=function(e){return u.a.createElement("div",{className:m.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes excellent!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(d.a,{ingredients:e.ingredients})),u.a.createElement(s.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),u.a.createElement(s.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},v=a(20),g=a(25),f=a(105),C=a.n(f),b=a(19),y=a(44),E=a(102),k=a(15),O=a(45),j=a(16),I=a(3),_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={orderData:t,ingredients:a.props.ings,price:a.props.price,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=Object(I.b)(a.state.orderForm[t],{value:e.target.value,valid:Object(I.a)(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=Object(I.b)(a.state.orderForm,Object(g.a)({},t,n)),l=!0;for(var o in r)l=r[o].valid&&l;a.setState({orderForm:r,formIsValid:l})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return u.a.createElement(E.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})}),u.a.createElement(s.a,{btnType:"Success",clicked:this.orderHandler,disabled:!this.state.formIsValid},"Order"));return this.props.loading&&(n=u.a.createElement(y.a,null)),u.a.createElement("div",{className:C.a.ContactData},u.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(c.Component),T=Object(k.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,a){return e(j.g(t,a))}}})(Object(O.a)(_,b.a)),w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).checkoutCancellenedHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(v.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(v.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(h,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancellenedHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(v.b,{path:this.props.match.path+"/contact-data",component:T}))}return e}}]),t}(c.Component);t.default=Object(k.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(w)}}]);
//# sourceMappingURL=3.adbf6607.chunk.js.map