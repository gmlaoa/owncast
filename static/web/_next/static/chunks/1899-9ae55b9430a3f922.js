"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1899],{1899:function(e,t,n){n.d(t,{me:function(){return $},FI:function(){return D},Q:function(){return F},L4:function(){return L},nk:function(){return k},w4:function(){return w},j$:function(){return Z},uy:function(){return T},ZA:function(){return U},g1:function(){return I},g8:function(){return V},ap:function(){return H},di:function(){return j},fE:function(){return m},pT:function(){return Y},hz:function(){return M},YW:function(){return B},We:function(){return P},RI:function(){return b},pH:function(){return W},Gt:function(){return G}});var r=n(47568),a=n(828),o=n(29815),i=n(70655),c=n(67294),s=n(4480),u=n(23917);var l=n(51438),f=function(){function e(){(0,l.Z)(this,e)}return e.getConfig=function(){return(0,r.Z)((function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch("/api/config")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))()},e}(),d=n(58827),E=function(){function e(){(0,l.Z)(this,e)}return e.getChatHistory=function(e){return(0,r.Z)((function(){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,d.$l)("".concat("/api/chat","?accessToken=").concat(e))];case 1:return[2,t.sent()]}}))}))()},e.registerUser=function(e){return(0,r.Z)((function(){var t;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:e})},[4,(0,d.$l)("/api/chat/register",t)];case 1:return[2,n.sent()]}}))}))()},e}(),h=n(11622),g=function(){function e(t,n){(0,l.Z)(this,e),this.accessToken=t,this.path=n,this.createAndConnect()}var t=e.prototype;return t.createAndConnect=function(){var e=new URL(window.location.toString());e.protocol="https:"===window.location.protocol?"wss:":"ws:",e.pathname="/ws",e.port="3000"===window.location.port?"8080":window.location.port,e.searchParams.append("accessToken",this.accessToken),console.debug("connecting to ",e.toString());var t=new WebSocket(e.toString());t.onopen=this.onOpen.bind(this),t.onerror=this.onError.bind(this),t.onmessage=this.onMessage.bind(this),this.websocket=t},t.onOpen=function(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer)},t.onError=function(e){var t;console.error(e),t="Socket error: ".concat(e),console.error("Chat has been disconnected and is likely not working for you. It's possible you were removed from chat. If this is a server configuration issue, visit troubleshooting steps to resolve. https://owncast.online/docs/troubleshooting/#chat-is-disabled: ".concat(t)),this.websocket.close()},t.onMessage=function(e){for(var t,n=e.data.split("\n"),r=0;r<n.length;r++){try{t=JSON.parse(n[r]),this.handleMessage&&this.handleMessage(t)}catch(a){return void console.error(a,a.data)}if(!t.type)return void console.error("No type provided",t);if(t.type===h.C.PING)return void this.sendPong()}},t.isConnected=function(){var e,t;return(null===(e=this.websocket)||void 0===e?void 0:e.readyState)===(null===(t=this.websocket)||void 0===t?void 0:t.OPEN)},t.send=function(e){e.type&&h.C[e.type]||console.warn('Outbound message: Unknown socket message type: "'.concat(e.type,'" sent.'));var t=JSON.stringify(e);this.websocket.send(t)},t.sendPong=function(){var e={type:h.C.PONG};this.send(e)},e}();var v=n(26042),p=n(4723);var y;!function(e){e.Loading="LOADING",e.Loaded="LOADED",e.Online="ONLINE",e.Offline="OFFLINE",e.NeedsRegister="NEEDS_REGISTER",e.Fail="FAIL"}(y||(y={}));var S=(0,p.C)({id:"appState",initial:"loading",predictableActionArguments:!0,states:{loading:{meta:(0,v.Z)({},{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!0}),on:{NEEDS_REGISTER:{target:"loading"},LOADED:{target:"ready"},FAIL:{target:"serverFailure"}}},ready:{initial:"offline",states:{online:{meta:(0,v.Z)({},{chatAvailable:!0,chatLoading:!1,videoAvailable:!0,appLoading:!1}),on:{OFFLINE:{target:"goodbye"}}},offline:{meta:(0,v.Z)({},{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!1}),on:{ONLINE:{target:"online"}}},goodbye:{on:{ONLINE:{target:"online"}},meta:(0,v.Z)({},{chatAvailable:!0,chatLoading:!1,videoAvailable:!1,appLoading:!1}),after:{3e5:{target:"offline"}}}}},serverFailure:{type:"final"},userfailure:{type:"final"}}}),N=n(73682);var O=function(e,t,n,r,a,o){var i=e.user,c=i.id,s=i.displayName,u=i.displayColor,l=i.scopes,f=i.authenticated;t(s),n(u),r(c),a(null===l||void 0===l?void 0:l.includes("MODERATOR")),o(f)},_=function(){function e(){(0,l.Z)(this,e)}return e.getStatus=function(){return(0,r.Z)((function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch("/api/status")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))()},e}();var A,R=function(e,t,n){n((0,o.Z)(t).concat([e]))},C="accessToken",b=(0,s.cn)({key:"serverStatusState",default:{online:!1,viewerCount:0,serverTime:new Date}}),I=(0,s.cn)({key:"clientConfigState",default:{name:"",summary:"",offlineMessage:"",logo:"",tags:[],version:"",nsfw:!1,extraPageContent:"",socialHandles:[],chatDisabled:!1,externalActions:[],customStyles:"",maxSocketPayloadSize:0,federation:{enabled:!1,account:"",followerCount:0},notifications:{browser:{enabled:!1,publicKey:""}},authentication:{indieAuthEnabled:!1}}}),w=(0,s.cn)({key:"chatDisplayName",default:null}),k=(0,s.cn)({key:"chatDisplayColor",default:null}),T=(0,s.cn)({key:"chatUserIdAtom",default:null}),m=(0,s.cn)({key:"isModeratorAtom",default:!1}),D=(0,s.cn)({key:"accessTokenAtom",default:null}),Z=(0,s.cn)({key:"chatMessages",default:[]}),L=(0,s.cn)({key:"chatAuthenticatedAtom",default:!1}),G=(0,s.cn)({key:"websocketServiceAtom",default:null}),F=(0,s.cn)({key:"appState",default:{chatAvailable:!1,chatLoading:!0,videoAvailable:!1,appLoading:!0}}),M=(0,s.cn)({key:"isMobileAtom",default:void 0}),U=(0,s.cn)({key:"chatVisibilityToggleAtom",default:!0}),P=(0,s.cn)({key:"isVideoPlayingAtom",default:!1}),H=(0,s.cn)({key:"fatalErrorStateAtom",default:null}),V=(0,s.cn)({key:"clockSkewAtom",default:0}),J=(0,s.cn)({key:"removedMessageIds",default:[]}),Y=(0,s.nZ)({key:"isChatVisibleSelector",get:function(e){var t=e.get,n=t(F),r=t(U);return t(D)&&n.chatAvailable&&r}}),j=(0,s.nZ)({key:"isChatAvailableSelector",get:function(e){var t=e.get,n=t(F);return t(D)&&n.chatAvailable}}),B=(0,s.nZ)({key:"isOnlineSelector",get:function(e){var t=e.get,n=t(F),r=t(P);return n.videoAvailable||r}}),W=(0,s.nZ)({key:"visibleChatMessagesSelector",get:function(e){var t=e.get,n=t(Z),r=t(J);return n.filter((function(e){return!r.includes(e.id)}))}});var $=function(){var e,t=(0,a.Z)((0,u.e)(S),3),n=t[0],l=t[1],d=t[2],v=(0,s.Zl)(w),p=(0,s.Zl)(k),M=(0,s.Zl)(T),U=(0,s.Zl)(L),P=(0,s.Zl)(m),Y=(0,a.Z)((0,s.FV)(I),2),j=Y[0],B=Y[1],W=(0,s.Zl)(b),$=(0,s.Zl)(V),Q=(0,a.Z)((0,s.FV)(Z),2),X=Q[0],q=Q[1],x=(0,a.Z)((0,s.FV)(D),2),K=x[0],z=x[1],ee=(0,s.Zl)(F),te=(0,s.Zl)(H),ne=(0,s.Zl)(G),re=(0,a.Z)((0,s.FV)(J),2),ae=re[0],oe=re[1],ie=(0,c.useState)(!1),ce=ie[0],se=ie[1],ue=(0,c.useState)(!1),le=ue[0],fe=ue[1],de=function(e,t){te({title:e,message:t})},Ee=function(e){l({type:e})},he=function(){var e=(0,r.Z)((function(){var e,t;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,f.getConfig()];case 1:return e=n.sent(),B(e),te(null),fe(!0),[3,3];case 2:return t=n.sent(),de("Unable to reach Owncast server","Owncast cannot launch. Please make sure the Owncast server is running."),console.error("ClientConfigService -> getConfig() ERROR: \n".concat(t)),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=(0,r.Z)((function(){var e,t,n,r;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,_.getStatus()];case 1:return e=a.sent(),W(e),se(!0),t=e.serverTime,n=new Date(t).getTime()-Date.now(),$(n),e.online?Ee(y.Online):e.online||Ee(y.Offline),te(null),[3,3];case 2:return r=a.sent(),Ee(y.Fail),de("Unable to reach Owncast server","Owncast cannot launch. Please make sure the Owncast server is running."),console.error("serverStatusState -> getStatus() ERROR: \n".concat(r)),[3,3];case 3:return[2,null]}}))}));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=(0,r.Z)((function(e){var t,n,r,a,o,c;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:if(t=(0,N.$o)(C))return z(t),[2];i.label=1;case 1:return i.trys.push([1,3,,4]),Ee(y.NeedsRegister),[4,E.registerUser(e)];case 2:return n=i.sent(),console.log("ChatService -> registerUser() response: \n".concat(n)),r=n.accessToken,a=n.displayName,o=n.displayColor,r?(console.log("setting access token",r),z(r),(0,N.qQ)(C,r),v(a),p(o),[3,4]):[2];case 3:return c=i.sent(),Ee(y.Fail),console.error("ChatService -> registerUser() ERROR: \n".concat(c)),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),pe=function(e){switch(e.type){case h.C.ERROR_NEEDS_REGISTRATION:(0,N.qQ)(C,""),z(""),ve();break;case h.C.CONNECTED_USER_INFO:O(e,v,p,M,P,U),q((function(t){return(0,o.Z)(t).concat([e])}));break;case h.C.CHAT:q((function(t){return(0,o.Z)(t).concat([e])}));break;case h.C.NAME_CHANGE:R(e,X,q);break;case h.C.USER_JOINED:case h.C.SYSTEM:q((function(t){return(0,o.Z)(t).concat([e])}));break;case h.C.VISIBILITY_UPDATE:!function(e){var t=e.ids;if(e.visible){var n=ae.filter((function(e){return!t.includes(e)}));oe(n)}else{var r=(0,o.Z)(ae).concat((0,o.Z)(t));oe(r)}}(e);break;default:console.error("Unknown socket message type: ",e.type)}},ye=function(){var e=(0,r.Z)((function(){var e,t;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,E.getChatHistory(K)];case 1:return e=n.sent(),q((function(t){return(0,o.Z)(t).concat((0,o.Z)(e))})),[3,3];case 2:return t=n.sent(),console.error("ChatService -> getChatHistory() ERROR: \n".concat(t)),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),Se=function(){var t=(0,r.Z)((function(){return(0,i.__generator)(this,(function(t){try{(e=new g(K,"/ws")).handleMessage=pe,ne(e)}catch(n){console.error("ChatService -> startChat() ERROR: \n".concat(n))}return[2]}))}));return function(){return t.apply(this,arguments)}}();return(0,c.useEffect)((function(){try{if(window.configHydration){var e=JSON.parse(window.configHydration);B(e)}}catch(n){}try{if(window.statusHydration){var t=JSON.parse(window.statusHydration);W(t)}}catch(r){}}),[]),(0,c.useEffect)((function(){ce&&le&&Ee(y.Loaded)}),[ce,le]),(0,c.useEffect)((function(){!j.chatDisabled&&K&&le&&Se()}),[le,K]),(0,c.useEffect)((function(){he(),ve(),ge(),clearInterval(A),A=setInterval((function(){ge()}),5e3)}),[n]),(0,c.useEffect)((function(){K&&ye()}),[K]),(0,c.useEffect)((function(){d.onTransition((function(e){if(e.changed){var t,n=(t=e.meta,Object.keys(t).reduce((function(e,n){var r=t[n];return Object.assign(e,r),e}),{}));ee(n)}}))})),null}},11622:function(e,t,n){var r;n.d(t,{C:function(){return r}}),function(e){e.CHAT="CHAT",e.PING="PING",e.NAME_CHANGE="NAME_CHANGE",e.COLOR_CHANGE="COLOR_CHANGE",e.PONG="PONG",e.SYSTEM="SYSTEM",e.USER_JOINED="USER_JOINED",e.CHAT_ACTION="CHAT_ACTION",e.FEDIVERSE_ENGAGEMENT_FOLLOW="FEDIVERSE_ENGAGEMENT_FOLLOW",e.FEDIVERSE_ENGAGEMENT_LIKE="FEDIVERSE_ENGAGEMENT_LIKE",e.FEDIVERSE_ENGAGEMENT_REPOST="FEDIVERSE_ENGAGEMENT_REPOST",e.CONNECTED_USER_INFO="CONNECTED_USER_INFO",e.ERROR_USER_DISABLED="ERROR_USER_DISABLED",e.ERROR_NEEDS_REGISTRATION="ERROR_NEEDS_REGISTRATION",e.ERROR_MAX_CONNECTIONS_EXCEEDED="ERROR_MAX_CONNECTIONS_EXCEEDED",e.VISIBILITY_UPDATE="VISIBILITY-UPDATE"}(r||(r={}))},73682:function(e,t,n){n.d(t,{$o:function(){return a},dA:function(){return r},qQ:function(){return o}});var r={username:"username",hasDisplayedNotificationModal:"HAS_DISPLAYED_NOTIFICATION_MODAL",userVisitCount:"USER_VISIT_COUNT"};function a(e){try{return localStorage.getItem(e)}catch(t){}return null}function o(e,t){try{return""!==t&&null!==t?localStorage.setItem(e,t):localStorage.removeItem(e),!0}catch(n){}return!1}}}]);