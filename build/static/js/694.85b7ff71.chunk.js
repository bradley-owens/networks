"use strict";(self.webpackChunknetworks=self.webpackChunknetworks||[]).push([[694],{6608:function(e,n,r){r.d(n,{Z:function(){return _}});var i=r(885),t=r(2791),a=r(9434),c=r(1523),s=r(5937),o=r(851),l="MemberCard_container__yGQ9f",d="MemberCard_info__cD8Iq",u="MemberCard_buttons__q8uXV",h="MemberCard_button__fpt8f",f="MemberCard_unfollow__wxfl7",m=r(184),_=function(e){var n=(0,t.useContext)(o.Z),r=(0,a.I0)(),_=(0,a.v9)((function(e){return e.authentication.loggedInUser})),x=(0,t.useState)(),g=(0,i.Z)(x,2),w=g[0],j=g[1],k=n.checkUser.find((function(e){return e.id.id===_.id.id})).connections;return(0,t.useEffect)((function(){void 0===k?j(!1):Object.entries(k.following).map((function(n){n[1].email===e.email&&j(!0)}))}),[k]),(0,m.jsxs)("div",{className:l,children:[(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("h2",{children:e.name}),(0,m.jsx)("h3",{children:e.email}),(0,m.jsxs)("h4",{children:[" Code: ",e.language]})]}),(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)(c.rU,{to:"/".concat(e.id),className:h,children:"View"}),!w&&(0,m.jsx)("button",{className:h,onClick:function(){var i=n.checkUser.find((function(n){if(n.id.id===e.id)return n}));r(s._.follow({clickedUser:i,loggedInUser:_})),n.fetchData()},children:"Follow"}),w&&(0,m.jsx)("button",{className:f,onClick:function(){var i=n.checkUser.find((function(n){if(n.id.id===e.id)return n}));r(s._.unfollow({clickedUser:i,loggedInUser:_})),n.fetchData()},children:"Unfollow"})]})]})}},8538:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var i=r(2791),t=r(9434),a=r.p+"static/media/arrow.be295ecd850e7d2c75af.png",c="Header_home-header__TBH6l",s="Header_arrow__gAF2D",o="Header_home-modal__qyDK2",l="Header_welcome__L9Mzs",d="Header_tip__vK6oN",u=r(184),h=function(){var e=(0,t.v9)((function(e){return e.authentication.loggedInUser.info.name}));return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)("img",{className:s,src:a}),(0,u.jsxs)("div",{className:c,children:[(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("h2",{className:l,children:"Hi ".concat(e,"!")}),(0,u.jsx)("p",{children:"Welcome to NetWORKS! The casual fling of linkedIN. Follow other developers and connect to grow the network you need to grow!"})]}),(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("h2",{className:d,children:" Tip"}),(0,u.jsx)("p",{children:"Finish setting up your account to display throughout networks."})]})]})]})},f=r(851),m=r(6608),_="TheNetwork_network-container__UknRa",x="TheNetwork_title__2b8DD",g="TheNetwork_network-grid__XxO+w",w=function(){var e=(0,i.useContext)(f.Z);return(0,u.jsxs)("div",{className:_,children:[(0,u.jsx)("h1",{className:x,children:"The Network"}),(0,u.jsx)("div",{className:g,children:e.checkUser.map((function(e){return(0,u.jsx)(m.Z,{id:e.id.id,name:e.info.name,email:e.info.email,language:e.info.language},Math.random())}))})]})},j=function(){(0,t.v9)((function(e){return e.authentication.loggedInUser}));return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(h,{}),(0,u.jsx)(w,{})]})}}}]);
//# sourceMappingURL=694.85b7ff71.chunk.js.map