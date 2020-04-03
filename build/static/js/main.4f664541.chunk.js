(this["webpackJsonpchat-ui"]=this["webpackJsonpchat-ui"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),o=n.n(s),i=(n(14),n(1)),c=n(2),l=n(3),u=n(4),p=n(8),v=new(function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).ws=void 0,e.inbox=null,e.ws=new WebSocket("wss://raja.aut.bme.hu/chat/"),e.ws.addEventListener("open",(function(){})),e.ws.addEventListener("message",(function(t){var n,a=JSON.parse(t.data);switch(a.type){case"error":alert(a.message);break;case"login":e.inbox=a.inbox,e.dispatch("login");break;case"message":var r=a.channelId;null===(n=e.inbox.conversations.find((function(e){return e.channelId===r})))||void 0===n||n.lastMessages.push(a.message),e.dispatch("message",r,a.message);break;case"conversationAdded":e.inbox.conversations.push(a.conversation),e.dispatch("conversation",a.conversation.channelId)}})),e}return Object(c.a)(n,[{key:"sendPacket",value:function(e){this.ws.send(JSON.stringify(e))}}]),n}(function(){function e(){Object(i.a)(this,e),this.listeners=[]}return Object(c.a)(e,[{key:"addEventListener",value:function(e,t,n){this.listeners.push({type:e,listener:t,obj:n})}},{key:"removeEventListener",value:function(e,t){this.listeners.splice(this.listeners.findIndex((function(n){return n.type===e&&n.listener===t})),1)}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r,s=Object(p.a)(this.listeners.filter((function(t){return t.type===e})));try{for(s.s();!(r=s.n()).done;){var o,i=r.value;(o=i.listener).call.apply(o,[i.obj].concat(n))}}catch(c){s.e(c)}finally{s.f()}}},{key:"removeAllEventListener",value:function(e){if(!e)throw new Error("Must specify object");this.listeners=this.listeners.filter((function(t){return t.obj!==e}))}}]),e}())),d=(n(6),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={value:e.props.value,focus:!1},e}return Object(c.a)(n,[{key:"render",value:function(){var e,t=this,n={};return this.props.autofocus&&(n.autoFocus=!0),this.props.onEnter&&(n.onKeyDown=function(e){13===e.keyCode&&t.props.onEnter()}),r.a.createElement("div",{className:"text-input"},r.a.createElement("input",Object.assign({},n,{type:null!==(e=this.props.type)&&void 0!==e?e:"text",value:this.state.value,onChange:function(e){var n,a;t.setState({value:e.target.value}),null===(n=(a=t.props).onChange)||void 0===n||n.call(a,e.target.value)},onBlur:function(){return t.setState({focus:!1})},onFocus:function(){return t.setState({focus:!0})}})),r.a.createElement("div",{className:"focus-indicator"}),r.a.createElement("label",{className:this.state.value||this.state.focus?"subsided":""},this.props.placeholder))}}]),n}(a.Component)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",displayName:"",register:!1},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login"},r.a.createElement("img",{src:"logo512.png",width:"256"}),this.state.register&&r.a.createElement(d,{type:"text",placeholder:"Display Name (Agent Smith)",value:this.state.displayName,onChange:function(t){return e.setState({displayName:t})},onEnter:function(){return e.onClick()}}),r.a.createElement(d,{type:"email",placeholder:"Email (someone@example.com)",value:this.state.email,onChange:function(t){return e.setState({email:t})},onEnter:function(){return e.onClick()},autofocus:!0}),r.a.createElement(d,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t})},onEnter:function(){return e.onClick()}}),r.a.createElement("button",{type:"button",onClick:function(){return e.onClick()}},this.state.register?"Register":"Login"),r.a.createElement("p",null,this.state.register?"Switch back to ":"Have no account yet? Go and ",r.a.createElement("a",{href:"",onClick:function(t){t.preventDefault(),e.setState({register:!e.state.register})}},this.state.register?"Login":"Register")),r.a.createElement("a",{href:"https://www.google.hu/search?q=privacy"},"Privacy Policy"))}},{key:"onClick",value:function(){"JNH1DH"==this.state.email&&this.setState({displayName:"Kov\xe1cs L\xe1szl\xf3"}),this.state.register?v.sendPacket({type:"register",email:this.state.email,password:this.state.password,displayName:this.state.displayName,staySignedIn:!1}):v.sendPacket({type:"login",email:this.state.email,password:this.state.password,staySignedIn:!1})}}]),n}(r.a.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).textInput=r.a.createRef(),e}return Object(c.a)(n,[{key:"onClick",value:function(){var e,t,n,a,r;(null===(e=(t=this.props).onClick)||void 0===e?void 0:e.call(t,null!==(n=null===(a=this.textInput.current)||void 0===a?void 0:a.state.value)&&void 0!==n?n:""))&&(null===(r=this.textInput.current)||void 0===r||r.setState({value:""}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-input-and-button"},r.a.createElement(d,Object.assign({},this.props,{ref:this.textInput,onEnter:function(){return e.onClick()}})),r.a.createElement("button",{type:"button",onClick:function(){return e.onClick()}},this.props.buttonContent))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.conversation.lastMessages.length>0?this.props.conversation.lastMessages[this.props.conversation.lastMessages.length-1]:null;return r.a.createElement("div",{className:"conversation-card"+(this.props.selected?" selected":""),onClick:function(){return e.props.onSelect()}},r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"channel-name"},this.props.conversation.name),r.a.createElement("span",{className:"time"},t&&new Date(t.timeStamp).toLocaleDateString())),r.a.createElement("span",{className:"last-message"},null===t||void 0===t?void 0:t.content))}},{key:"componentDidMount",value:function(){var e=this;v.addEventListener("message",(function(t,n){t===e.props.conversation.channelId&&e.forceUpdate()}),this)}},{key:"componentWillUnmount",value:function(){v.removeAllEventListener(this)}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"left-pane"},r.a.createElement("p",{className:"my-tag"},"My tag: ",this.props.inbox.user.tag),r.a.createElement(m,{type:"text",placeholder:"Add user by Tag (Name#123)",buttonContent:"Inv",onClick:function(t){return e.sendContactRequest(t)}}),r.a.createElement("div",{className:"conversations"},this.props.inbox.conversations.map((function(t){return r.a.createElement(f,{key:t.channelId,conversation:t,selected:t===e.props.selectedConversation,onSelect:function(){return e.props.onSelect(t)}})}))))}},{key:"sendContactRequest",value:function(e){return v.sendPacket({type:"contactRequest",email:e,firstMessage:"Hello"}),!0}},{key:"componentDidMount",value:function(){var e=this;v.addEventListener("conversation",(function(t){return e.forceUpdate()}),this)}},{key:"componentWillUnmount",value:function(){v.removeAllEventListener(this)}}]),n}(a.Component),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"message-card"+(this.props.own?" own":"")},r.a.createElement("div",{className:"bubble"},r.a.createElement("span",{className:"text"},this.props.message.content),r.a.createElement("span",{className:"time"},new Date(this.props.message.timeStamp).toLocaleTimeString())))}}]),n}(a.PureComponent),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.addEventListener("message",(function(t,n){var a;t===(null===(a=e.props.conversation)||void 0===a?void 0:a.channelId)&&e.forceUpdate()}),this)}},{key:"componentWillUnmount",value:function(){v.removeAllEventListener(this)}},{key:"onSend",value:function(e){return e="J: "+e,v.sendPacket({type:"message",channelId:this.props.conversation.channelId,referenceTo:0,contentType:0,content:e}),!0}},{key:"render",value:function(){var e,t,n=this;return r.a.createElement("div",{className:"right-pane column"},this.props.conversation&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"conversation-header row"},r.a.createElement("button",{type:"button",className:"only-narrow",onClick:function(){return n.props.onBack()}},"Back"),r.a.createElement("p",null,null===(e=this.props.conversation)||void 0===e?void 0:e.name)),r.a.createElement("div",{className:"messages"},null===(t=this.props.conversation)||void 0===t?void 0:t.lastMessages.map((function(e){var t;return r.a.createElement(y,{key:e.id,message:e,own:e.senderId===(null===(t=v.inbox)||void 0===t?void 0:t.user.id)})}))),r.a.createElement("div",{className:"send-message row"},r.a.createElement(m,{type:"text",placeholder:"Type something awesome here...",buttonContent:"Send",onClick:function(e){return n.onSend(e)}}))))}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedConversation:void 0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t="main row "+(this.state.selectedConversation?"right":"left");return r.a.createElement("div",{className:t},r.a.createElement(g,{inbox:v.inbox,selectedConversation:this.state.selectedConversation,onSelect:function(t){return e.setState({selectedConversation:t})}}),r.a.createElement(b,{conversation:this.state.selectedConversation,onBack:function(){return e.setState({selectedConversation:void 0})}}))}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={register:!0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return v.addEventListener("login",(function(){return e.setState({register:!1})}),this),r.a.createElement("div",{className:"app"},this.state.register?r.a.createElement(h,null):r.a.createElement(E,null))}}]),n}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()},6:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4f664541.chunk.js.map