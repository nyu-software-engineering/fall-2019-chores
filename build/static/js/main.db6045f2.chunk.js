(this["webpackJsonpfall-2019-chores"]=this["webpackJsonpfall-2019-chores"]||[]).push([[0],{103:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),c=a(42),i=a(29),s=(a(102),a(103),a(6)),m=a(7),u=a(10),d=a(8),p=a(9),h=a(86),b=a.n(h),f=a(37),E=a(157),g=a(156),y=a(149),v=a(34),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-globe"}),l.a.createElement("b",{className:"caret"}),l.a.createElement("span",{className:"notification"},"5"));return l.a.createElement("div",{className:"container-fluid nav navbar-nav"},l.a.createElement(g.a,{fill:"true"},l.a.createElement(g.a.Link,{eventKey:1,href:"#"},l.a.createElement("i",{className:"fa fa-dashboard"})),l.a.createElement(y.a,{title:e,id:"basic-nav-dropdown"},l.a.createElement(v.a.Item,{eventKey:2.1},"Notification 1"),l.a.createElement(v.a.Item,{eventKey:2.2},"Notification 2"),l.a.createElement(v.a.Item,{eventKey:2.3},"Notification 3"),l.a.createElement(v.a.Item,{eventKey:2.4},"Notification 4")),l.a.createElement(g.a.Link,{eventKey:3,href:"#"},l.a.createElement("i",{className:"fa fa-search"}))),l.a.createElement(g.a,{className:"pull-right"},l.a.createElement(g.a.Link,{eventKey:1,href:"#"},"Account"),l.a.createElement(g.a.Link,{eventKey:3,href:"#"},"Log out")))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).mobileSidebarToggle=a.mobileSidebarToggle.bind(Object(f.a)(a)),a.state={sidebarExists:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"mobileSidebarToggle",value:function(e){!1===this.state.sidebarExists&&this.setState({sidebarExists:!0}),e.preventDefault(),document.documentElement.classList.toggle("nav-open");var t=document.createElement("div");t.id="bodyClick",t.onclick=function(){this.parentElement.removeChild(this),document.documentElement.classList.toggle("nav-open")},document.body.appendChild(t)}},{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(E.a.Toggle,{onClick:this.mobileSidebarToggle}),l.a.createElement(E.a.Collapse,null,l.a.createElement(k,null)))}}]),t}(n.Component),C=a(150),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement(C.a,{fluid:!0},l.a.createElement("nav",{className:"pull-left"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Our Team")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Support")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Careers")))),l.a.createElement("p",{className:"copyright pull-right"},"\xa9 ",(new Date).getFullYear()," ",l.a.createElement("a",{href:"http://www.creative-tim.com?ref=lbr-footer"},"HouseKeeper Inc."))))}}]),t}(n.Component),O=a(91),w=a.n(O),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={width:window.innerWidth},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"updateDimensions",value:function(){this.setState({width:window.innerWidth})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"sidebar",className:"sidebar"},l.a.createElement("div",{className:"logo"},l.a.createElement("a",{className:"simple-text logo-mini"},l.a.createElement("div",{className:"logo-img"},l.a.createElement("img",{src:w.a,alt:"logo_image"}))),l.a.createElement("a",{className:"simple-text logo-normal"},"HouseKeeper")),l.a.createElement("div",{className:"sidebar-wrapper"},l.a.createElement("ul",{className:"nav"},this.state.width<=991?l.a.createElement(k,null):null,this.props.routes.map((function(t,a){return t.redirect?null:l.a.createElement("li",{className:t.upgrade?"active active-pro":e.activeRoute(t.layout+t.path),key:a},l.a.createElement(c.b,{to:t.layout+t.path,className:"nav-link",activeClassName:"active"},l.a.createElement("i",{className:t.icon}),l.a.createElement("p",null,t.name)))})))))}}]),t}(n.Component),S=a(33),T=a(151),F=a(94),D=a(93),W=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"card"+(this.props.plain?" card-plain":"")},l.a.createElement("div",{className:"header"+(this.props.hCenter?" text-center":"")},l.a.createElement("h4",{className:"title"},this.props.title),l.a.createElement("p",{className:"category"},this.props.category)),l.a.createElement("div",{className:"content"+(this.props.ctAllIcons?" all-icons":"")+(this.props.ctTableFullWidth?" table-full-width":"")+(this.props.ctTableResponsive?" table-responsive":"")+(this.props.ctTableUpgrade?" table-upgrade":"")},this.props.content,l.a.createElement("div",{className:"footer"},this.props.legend,null!=this.props.stats?l.a.createElement("hr",null):"",l.a.createElement("div",{className:"stats"},l.a.createElement("i",{className:this.props.statsIcon})," ",this.props.stats))))}}]),t}(n.Component),M=W,L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"card card-stats"},l.a.createElement("div",{className:"content"},l.a.createElement(T.a,null,l.a.createElement(F.a,{xs:6},l.a.createElement("div",{className:"icon-big text-center icon-warning"},this.props.bigIcon)),l.a.createElement(F.a,{xs:10},l.a.createElement("div",{className:"numbers"},l.a.createElement("p",null,this.props.statsText),this.props.statsValue)))))}}]),t}(n.Component),B=a(95),A=a(152),I=a(159),R=a(40),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={is_checked:!!e.isChecked},a.handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(){this.setState({is_checked:!this.state.is_checked})}},{key:"render",value:function(){var e=this.props,t=(e.isChecked,e.number),a=e.label,n=e.inline,r=Object(R.a)(e,["isChecked","number","label","inline"]),o=void 0!==n?"checkbox checkbox-inline":"checkbox";return l.a.createElement("div",{className:o},l.a.createElement("input",Object.assign({id:t,type:"checkbox",onChange:this.handleClick,checked:this.state.is_checked},r)),l.a.createElement("label",{htmlFor:t},a))}}]),t}(n.Component),H=a(90),V=a(3),K=a.n(V),P=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fill,a=e.simple,n=e.pullRight,r=e.round,o=e.block,c=Object(R.a)(e,["fill","simple","pullRight","round","block"]),i=K()({"btn-fill":t,"btn-simple":a,"pull-right":n,"btn-block":o,"btn-round":r});return l.a.createElement(H.a,Object.assign({className:i},c))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleCheckbox=function(e){var t=e.target;console.log(e.target),a.setState(Object(B.a)({},t.name,t.checked))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e,t=l.a.createElement(A.a,{id:"edit_tooltip"},"Edit Chore"),a=l.a.createElement(A.a,{id:"remove_tooltip"},"Remove"),n=['Empty all garbages"',"Sweep kitchen floor","Clean toilet","Change hallway lightbulbs","Scrub glass pan"],r=[],o=0;o<n.length;o++)e="checkbox"+o,r.push(l.a.createElement("tr",{key:o},l.a.createElement("td",null,l.a.createElement(z,{number:e,isChecked:1===o||2===o})),l.a.createElement("td",null,n[o]),l.a.createElement("td",{className:"td-actions text-right"},l.a.createElement(I.a,{placement:"top",overlay:t},l.a.createElement(P,{variant:"info",simple:!0,type:"button"},l.a.createElement("i",{className:"fa fa-edit"}))),l.a.createElement(I.a,{placement:"top",overlay:a},l.a.createElement(P,{variant:"danger",simple:!0,type:"button"},l.a.createElement("i",{className:"fa fa-times"}))))));return l.a.createElement("tbody",null,r)}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={date:new Date},a.onChange=function(e){return a.setState({date:e})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement(C.a,{fluid:!0},l.a.createElement(T.a,null,l.a.createElement(F.a,{lg:3,sm:6},l.a.createElement(L,{statsText:"Open Chores",statsValue:"5"})),l.a.createElement(F.a,{lg:3,sm:6},l.a.createElement(L,{statsText:"Completed Chores",statsValue:"12"})),l.a.createElement(F.a,{lg:3,sm:6},l.a.createElement(L,{statsText:"Total Households",statsValue:"3"})),l.a.createElement(F.a,{lg:3,sm:6},l.a.createElement(L,{statsText:"Next Due Date",statsValue:"11/7/19"}))),l.a.createElement(T.a,null,l.a.createElement(F.a,{md:7},l.a.createElement(W,{title:"Calendar",content:l.a.createElement("div",{className:"react-calendar"},l.a.createElement(D.Calendar,{calendarType:"US",defaultDate:new Date,defaultView:"month",onChange:this.onChange,style:{width:"100%"},value:this.state.date}))})),l.a.createElement(F.a,{md:5},l.a.createElement(W,{title:"Chores",content:l.a.createElement("div",{className:"table-full-width"},l.a.createElement("table",{className:"table"},l.a.createElement(_,null)))})))))}}]),t}(n.Component),$=a(153),Y=a(154),q=a(160);function G(e){var t=e.label,a=Object(R.a)(e,["label"]);return l.a.createElement($.a,null,l.a.createElement(Y.a,null,t),l.a.createElement(q.a,a))}var J=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.ncols.length;t++)e.push(l.a.createElement("div",{key:t,className:this.props.ncols[t]},l.a.createElement(G,this.props.properties[t])));return l.a.createElement(T.a,null,e)}}]),t}(n.Component),Z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"card card-user"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:this.props.bgImage,alt:"..."})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"author"},l.a.createElement("a",{href:"#pablo"},l.a.createElement("img",{className:"avatar border-gray",src:this.props.avatar,alt:"..."}),l.a.createElement("h4",{className:"title"},this.props.name,l.a.createElement("br",null),l.a.createElement("small",null,this.props.userName)))),l.a.createElement("p",{className:"description text-center"},this.props.description)),l.a.createElement("hr",null),l.a.createElement("div",{className:"text-center"},this.props.socials))}}]),t}(n.Component),Q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement(C.a,{fluid:!0},l.a.createElement(T.a,null,l.a.createElement(F.a,{md:8},l.a.createElement(W,{title:"Edit Profile",content:l.a.createElement("form",null,l.a.createElement(J,{ncols:["col-md-5","col-md-3","col-md-4"],properties:[{label:"Company (disabled)",type:"text",bsClass:"form-control",placeholder:"Company",defaultValue:"Creative Code Inc.",disabled:!0},{label:"Username",type:"text",bsClass:"form-control",placeholder:"Username",defaultValue:"michael23"},{label:"Email address",type:"email",bsClass:"form-control",placeholder:"Email"}]}),l.a.createElement(J,{ncols:["col-md-6","col-md-6"],properties:[{label:"First name",type:"text",bsClass:"form-control",placeholder:"First name",defaultValue:"Mike"},{label:"Last name",type:"text",bsClass:"form-control",placeholder:"Last name",defaultValue:"Andrew"}]}),l.a.createElement(J,{ncols:["col-md-12"],properties:[{label:"Adress",type:"text",bsClass:"form-control",placeholder:"Home Adress",defaultValue:"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"}]}),l.a.createElement(J,{ncols:["col-md-4","col-md-4","col-md-4"],properties:[{label:"City",type:"text",bsClass:"form-control",placeholder:"City",defaultValue:"Mike"},{label:"Country",type:"text",bsClass:"form-control",placeholder:"Country",defaultValue:"Andrew"},{label:"Postal Code",type:"number",bsClass:"form-control",placeholder:"ZIP Code"}]}),l.a.createElement(T.a,null,l.a.createElement(F.a,{md:12},l.a.createElement($.a,{controlId:"formControlsTextarea"},l.a.createElement(Y.a,null,"About Me"),l.a.createElement(q.a,{rows:"5",componentClass:"textarea",bsClass:"form-control",placeholder:"Here can be your description",defaultValue:"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."})))),l.a.createElement(P,{pullRight:!0,fill:!0,type:"submit"},"Update Profile"),l.a.createElement("div",{className:"clearfix"}))})),l.a.createElement(F.a,{md:4},l.a.createElement(Z,{bgImage:"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400",name:"Mike Andrew",userName:"michael24",description:l.a.createElement("span",null,'"Lamborghini Mercy',l.a.createElement("br",null),"Your chick she so thirsty",l.a.createElement("br",null),"I'm in that two seat Lambo\""),socials:l.a.createElement("div",null,l.a.createElement(P,{simple:!0},l.a.createElement("i",{className:"fa fa-facebook-square"})),l.a.createElement(P,{simple:!0},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement(P,{simple:!0},l.a.createElement("i",{className:"fa fa-google-plus-square"})))})))))}}]),t}(n.Component),X=a(155),ee=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement(C.a,{fluid:!0},l.a.createElement(T.a,null,l.a.createElement(F.a,{md:12},l.a.createElement(M,{title:"Striped Table with Hover",category:"Here is a subtitle for this table",ctTableFullWidth:!0,ctTableResponsive:!0,content:l.a.createElement(X.a,{striped:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,S.thArray.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement("tbody",null,S.tdArray.map((function(e,t){return l.a.createElement("tr",{key:t},e.map((function(e,t){return l.a.createElement("td",{key:t},e)})))}))))})),l.a.createElement(F.a,{md:12},l.a.createElement(M,{plain:!0,title:"Striped Table with Hover",category:"Here is a subtitle for this table",ctTableFullWidth:!0,ctTableResponsive:!0,content:l.a.createElement(X.a,{hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,S.thArray.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement("tbody",null,S.tdArray.map((function(e,t){return l.a.createElement("tr",{key:t},e.map((function(e,t){return l.a.createElement("td",{key:t},e)})))}))))})))))}}]),t}(n.Component),te=a(158),ae=[{path:"/dashboard",name:"Home",component:U,layout:"/admin"},{path:"/user",name:"My Houses",component:Q,layout:"/admin"},{path:"/table",name:"My Chores",component:ee,layout:"/admin"},{path:"/notifications",name:"Notifications",component:function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content"},l.a.createElement(C.a,{fluid:!0},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"header"},l.a.createElement("h4",{className:"title"},"Notifications"),l.a.createElement("p",{className:"category"},"Handcrafted by"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/igorprado"},"Igor Prado"),". Please checkout the"," ",l.a.createElement("a",{href:"http://igorprado.com/react-notification-system/",rel:"noopener noreferrer",target:"_blank"},"full documentation."))),l.a.createElement("div",{className:"content"},l.a.createElement(T.a,null,l.a.createElement(F.a,{md:6},l.a.createElement("h5",null,"Notifications Style"),l.a.createElement(te.a,null," ",l.a.createElement("span",null,"This is a plain notification")),l.a.createElement(te.a,null," ",l.a.createElement("button",{type:"button","aria-hidden":"true",className:"close"},"\u2715"),l.a.createElement("span",null,"This is a notification with close button.")),l.a.createElement(te.a,{className:"alert-with-icon"},l.a.createElement("button",{type:"button","aria-hidden":"true",className:"close"},"\u2715"),l.a.createElement("span",{"data-notify":"icon",className:"pe-7s-bell"}),l.a.createElement("span",{"data-notify":"message"},"This is a notification with close button and icon.")),l.a.createElement(te.a,{className:"alert-with-icon"},l.a.createElement("button",{type:"button","aria-hidden":"true",className:"close"},"\u2715"),l.a.createElement("span",{"data-notify":"icon",className:"pe-7s-bell"}),l.a.createElement("span",{"data-notify":"message"},"This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."))),l.a.createElement(F.a,{md:6},l.a.createElement("h5",null,"Notification states"),l.a.createElement(te.a,null," ",l.a.createElement("button",{type:"button","aria-hidden":"true",className:"close"},"\u2715"),l.a.createElement("span",null,l.a.createElement("b",null," Info - ")," This is a regular notification made with"," ")),l.a.createElement(te.a,null,l.a.createElement("button",{type:"button","aria-hidden":"true",className:"close"},"\u2715"),l.a.createElement("span",null,l.a.createElement("b",null," Success - ")," This is a regular notification made with")),l.a.createElement(te.a,null,l.a.createElement("button",{type:"button","aria-hidden":"true",className:"close"},"\u2715"),l.a.createElement("span",null,l.a.createElement("b",null," Warning - ")," This is a regular notification made with")),l.a.createElement(te.a,null,l.a.createElement("button",{type:"button","aria-hidden":"true",className:"close"},"\u2715"),l.a.createElement("span",null,l.a.createElement("b",null," Danger - ")," This is a regular notification made with"," ")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"places-buttons"},l.a.createElement(T.a,null,l.a.createElement(F.a,{md:6,mdOffset:3,className:"text-center"},l.a.createElement("h5",null,"Notifications Places",l.a.createElement("p",{className:"category"},"Click to view notifications")))),l.a.createElement(T.a,null,l.a.createElement(F.a,{md:2,mdOffset:3},l.a.createElement(P,{block:!0,onClick:function(){return e.props.handleClick("tl")}},"Top Left")),l.a.createElement(F.a,{md:2},l.a.createElement(P,{block:!0,onClick:function(){return e.props.handleClick("tc")}},"Top Center")),l.a.createElement(F.a,{md:2},l.a.createElement(P,{block:!0,onClick:function(){return e.props.handleClick("tr")}},"Top Right"))),l.a.createElement(T.a,null,l.a.createElement(F.a,{md:2,mdOffset:3},l.a.createElement(P,{block:!0,onClick:function(){return e.props.handleClick("bl")}},"Bottom Left")),l.a.createElement(F.a,{md:2},l.a.createElement(P,{block:!0,onClick:function(){return e.props.handleClick("bc")}},"Bottom Center")),l.a.createElement(F.a,{md:2},l.a.createElement(P,{block:!0,onClick:function(){return e.props.handleClick("br")}},"Bottom Right"))))))))}}]),t}(n.Component),layout:"/admin"}],ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleNotificationClick=function(e){var t;switch(Math.floor(4*Math.random()+1)){case 1:t="success";break;case 2:t="warning";break;case 3:t="error";break;case 4:t="info"}a.state._notificationSystem.addNotification({title:l.a.createElement("span",{"data-notify":"icon",className:"pe-7s-gift"}),message:l.a.createElement("div",null,"Welcome back! Let's get to cleaning."),level:t,position:e,autoDismiss:15})},a.getRoutes=function(e){return e.map((function(e,t){return"/admin"===e.layout?l.a.createElement(i.b,{path:e.layout+e.path,render:function(t){return l.a.createElement(e.component,Object.assign({},t,{handleClick:a.handleNotificationClick}))},key:t}):null}))},a.getBrandText=function(e){for(var t=0;t<ae.length;t++)if(-1!==a.props.location.pathname.indexOf(ae[t].layout+ae[t].path))return ae[t].name;return"Brand"},a.handleFixedClick=function(){"dropdown"===a.state.fixedClasses?a.setState({fixedClasses:"dropdown show-dropdown open"}):a.setState({fixedClasses:"dropdown"})},a.state={_notificationSystem:null,fixedClasses:"dropdown show-dropdown open"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({_notificationSystem:this.refs.notificationSystem});var e,t=this.refs.notificationSystem;switch(Math.floor(4*Math.random()+1)){case 1:e="success";break;case 2:e="warning";break;case 3:e="error";break;case 4:e="info"}t.addNotification({title:l.a.createElement("span",{"data-notify":"icon",className:"pe-7s-gift"}),message:l.a.createElement("div",null,"Welcome to ",l.a.createElement("b",null,"Light Bootstrap Dashboard")," - a beautiful freebie for every web developer."),level:e,position:"tr",autoDismiss:15})}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&document.documentElement.classList.toggle("nav-open"),"PUSH"===e.history.action&&(document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement(b.a,{ref:"notificationSystem",style:S.style}),l.a.createElement(j,Object.assign({},this.props,{routes:ae})),l.a.createElement("div",{id:"main-panel",className:"main-panel",ref:"mainPanel"},l.a.createElement(x,this.props),l.a.createElement(i.d,null,this.getRoutes(ae)),l.a.createElement(N,null)))}}]),t}(n.Component);o.a.render(l.a.createElement(c.a,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/admin",render:function(e){return l.a.createElement(ne,e)}}),l.a.createElement(i.a,{from:"/",to:"/home"}))),document.getElementById("base"))},33:function(e,t){var a=window.screen.width>768?1*window.screen.width/3:window.screen.width,n={Wrapper:{},Containers:{DefaultStyle:{position:"fixed",width:a,padding:"10px 10px 10px 20px",zIndex:9998,WebkitBoxSizing:"",MozBoxSizing:"",boxSizing:"",height:"auto",display:"inline-block",border:"0",fontSize:"14px",WebkitFontSmoothing:"antialiased",fontFamily:'"Roboto","Helvetica Neue",Arial,sans-serif',fontWeight:"400",color:"#FFFFFF"},tl:{top:"0px",bottom:"auto",left:"0px",right:"auto"},tr:{top:"0px",bottom:"auto",left:"auto",right:"0px"},tc:{top:"0px",bottom:"auto",margin:"0 auto",left:"50%",marginLeft:-a/2},bl:{top:"auto",bottom:"0px",left:"0px",right:"auto"},br:{top:"auto",bottom:"0px",left:"auto",right:"0px"},bc:{top:"auto",bottom:"0px",margin:"0 auto",left:"50%",marginLeft:-a/2}},NotificationItem:{DefaultStyle:{position:"relative",width:"100%",cursor:"pointer",borderRadius:"4px",fontSize:"14px",margin:"10px 0 0",padding:"10px",display:"block",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",opacity:0,transition:"all 0.5s ease-in-out",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)",willChange:"transform, opacity",isHidden:{opacity:0},isVisible:{opacity:1}},success:{borderTop:0,backgroundColor:"#a1e82c",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#fc727a",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffbc67",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,backgroundColor:"#63d8f1",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{fontSize:"30px",margin:"0",padding:0,fontWeight:"bold",color:"#FFFFFF",display:"block",left:"15px",position:"absolute",top:"50%",marginTop:"-15px"}},MessageWrapper:{DefaultStyle:{marginLeft:"55px",marginRight:"30px",padding:"0 12px 0 0",color:"#FFFFFF",maxWidthwidth:"89%"}},Dismiss:{DefaultStyle:{fontFamily:"inherit",fontSize:"12px",color:"#000",float:"right",position:"absolute",right:"10px",top:"50%",marginTop:"-13px",backgroundColor:"#FFFFFF",display:"block",borderRadius:"50%",opacity:".4",lineHeight:"11px",width:"25px",height:"25px",outline:"0 !important",textAlign:"center",padding:"6px 3px 3px 3px",fontWeight:"300",marginLeft:"65px"},success:{},error:{},warning:{},info:{}},Action:{DefaultStyle:{background:"#ffffff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#a1e82c",color:"#ffffff"},error:{backgroundColor:"#fc727a",color:"#ffffff"},warning:{backgroundColor:"#ffbc67",color:"#ffffff"},info:{backgroundColor:"#63d8f1",color:"#ffffff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}};e.exports={style:n,thArray:["ID","Name","Salary","Country","City"],tdArray:[["1","Dakota Rice","$36,738","Niger","Oud-Turnhout"],["2","Minerva Hooper","$23,789","Cura\xe7ao","Sinaai-Waas"],["3","Sage Rodriguez","$56,142","Netherlands","Baileux"],["4","Philip Chaney","$38,735","Korea, South","Overland Park"],["5","Doris Greene","$63,542","Malawi","Feldkirchen in K\xe4rnten"],["6","Mason Porter","$78,615","Chile","Gloucester"]]}},91:function(e,t,a){e.exports=a.p+"static/media/logo.c59efc97.png"},97:function(e,t,a){e.exports=a(146)}},[[97,1,2]]]);
//# sourceMappingURL=main.db6045f2.chunk.js.map