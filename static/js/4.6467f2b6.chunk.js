(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{102:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(103),u=a.n(l);t.a=function(e){var t=null,a=[u.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(u.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:u.a.Select,value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=i.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:u.a.Input},i.a.createElement("label",{className:u.a.Label},e.label),t)}},103:function(e,t,a){e.exports={Input:"Input_Input__235-a",Label:"Input_Label__2117w",InputElement:"Input_InputElement__3zvTA",Invalid:"Input_Invalid__1U69o"}},108:function(e,t,a){e.exports={Auth:"Auth_Auth__3Iqhc",ContactDate:"Auth_ContactDate__2Rsrq"}},109:function(e,t,a){"use strict";a.r(t);var n=a(25),i=a(4),l=a(5),u=a(7),r=a(6),o=a(8),c=a(0),s=a.n(c),d=a(15),p=a(44),h=a(102),m=a(36),g=a(108),v=a.n(g),f=a(16),b=a(20),I=a(3),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"email (enter dummy data)"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password (enter dummy data)"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},a.inputChangedHandler=function(e,t){var i=Object(I.b)(a.state.controls,Object(n.a)({},t,Object(I.b)(a.state.controls[t],{value:e.target.value,valid:Object(I.a)(e.target.value,a.state.controls[t].validation),touched:!0})));a.setState({controls:i})},a.submitHandler=function(e){e.preventDefault(),a.props.onAuth(a.state.controls.email.value,a.state.controls.password.value,a.state.isSignup)},a.switchAuthModeHandler=function(){a.setState(function(e){return{isSignup:!e.isSignup}})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map(function(t){return s.a.createElement(h.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})});this.props.loading&&(n=s.a.createElement(p.a,null));var i=null;this.props.error&&(i=s.a.createElement("p",null,this.props.error.message.replace(/_/g," ")));var l=null;return this.props.isAuthenticated&&(l=s.a.createElement(b.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:v.a.Auth},l,i,s.a.createElement("form",{onSubmit:this.submitHandler},n,s.a.createElement(m.a,{btnType:"Success"},this.state.isSignup?"SIGN UP":"SIGN IN")),s.a.createElement(m.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGN IN":"SIGN UP"))}}]),t}(c.Component);t.default=Object(d.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,a,n){return e(f.b(t,a,n))},onSetAuthRedirectPath:function(){return e(f.j("/"))}}})(E)}}]);
//# sourceMappingURL=4.6467f2b6.chunk.js.map