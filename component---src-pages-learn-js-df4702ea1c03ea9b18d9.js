(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{244:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(236),s=n(247),l=n(249),o=n(260),c=n.n(o),u=function(){return i.a.createElement("section",{id:"docs-window",className:c.a.learnContainer},i.a.createElement("section",{className:c.a.learnWelcome},i.a.createElement("h2",{className:c.a.subHeading},"WELCOME TO"),i.a.createElement("h1",{className:c.a.mainHeading},"KITURA ",i.a.createElement("span",{className:c.a.blueText},"DOCS")),i.a.createElement("p",{className:c.a.headingText},"These are the official docs and tutorials for the Kitura framework.")),i.a.createElement("article",{className:c.a.usingDocs},i.a.createElement("h3",null,"Using these docs"),i.a.createElement("h4",null,"Guides"),i.a.createElement("p",null,"The guides take you through building a Kitura server, explaining all the main features of the framework. Following the guides from start to finish will provide you with the skills you need to create your own Kitura server!"),i.a.createElement("h4",null,"Tutorials"),i.a.createElement("p",null,"Build a complete app using a step-by-step tutorial. Each tutorial showcases different features of Kitura including databases, OpenAPI and deployment to Docker/Kubernetes."),i.a.createElement("h4",null,"Reference"),i.a.createElement("p",null,"Comprehensive API reference for Kitura packages."),i.a.createElement("p",null)),i.a.createElement("article",{className:c.a.tutorialSection},i.a.createElement("h3",null,"Kitura ",i.a.createElement("span",{className:c.a.blueText},"Tutorials")),i.a.createElement("section",{className:c.a.tutorials},i.a.createElement("article",{className:c.a.tutorial},i.a.createElement("a",{href:"https://github.com/IBM/ToDoBackend"},i.a.createElement("h4",null,"ToDo Backend Tutorial"),i.a.createElement("p",null,"Learn about server-side Swift, REST APIs, OpenAPI, Docker and Kubernetes whilst creating a ToDo list backend."))),i.a.createElement("article",{className:c.a.tutorial},i.a.createElement("a",{href:"https://www.raywenderlich.com/1030830-the-openapi-spec-and-kitura-getting-started"},i.a.createElement("h4",null,"The OpenAPI Spec and Kitura: Getting Started"),i.a.createElement("p",null,"Start using the OpenAPI spec with the Swagger API and Kitura to generate an SDK for your iOS app."))),i.a.createElement("article",{className:c.a.tutorial},i.a.createElement("a",{href:"https://www.raywenderlich.com/1032630-kitura-stencil-tutorial-how-to-make-websites-with-swift"},i.a.createElement("h4",null,"Kitura Stencil Tutorial: How to make Websites with Swift"),i.a.createElement("p",null,"Find out about templating, then use the Stencil template engine alongside Swift to create a website for the Emoji Journal project."))),i.a.createElement("article",{className:c.a.tutorial},i.a.createElement("a",{href:"https://github.com/IBM/Kitura-SOS-Workshop"},i.a.createElement("h4",null,"Kitura SOS Workshop"),i.a.createElement("p",null,"Develop a cloud native SOS Kitura application using WebSockets."))))))};n.d(t,"docsQuery",(function(){return p}));t.default=function(e){var t=e.data,n=e.location;return i.a.createElement(r.a,null,i.a.createElement("section",{style:{display:"flex"}},i.a.createElement(s.a,{activeList:n.state,data:t.docsList}),i.a.createElement(u,null),i.a.createElement(l.a,null)))};var p="190059616"},245:function(e,t,n){"use strict";n(246)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},246:function(e,t,n){var a=n(1),i=n(12),r=n(45),s=/"/g,l=function(e,t,n,a){var i=String(r(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},247:function(e,t,n){"use strict";n(245);var a=n(0),i=n.n(a),r=n(8),s=n(251),l=n.n(s),o=n(248),c=n.n(o);t.a=function(e){var t=Object(a.useState)((function(){if(void 0===e.activeList||null===e.activeList){for(var t=e.data.nodes.length,n=[],a=0;a<t;a++)n.push(!1);return n}return e.activeList})),n=t[0],s=t[1];function o(e){var t=n;t[e]=!t[e],s(t)}var u=e.data.nodes.map((function(e,t){var a;if(void 0===e.items)a=i.a.createElement("article",{className:l.a.sidebarSection},i.a.createElement("h2",{className:l.a.activeLink},e.title));else{var s={color:"#0096F4"};a="API"==e.title?i.a.createElement("div",{className:l.a.refSection},i.a.createElement("hr",{className:l.a.hr}),i.a.createElement("h2",{className:l.a.refHeading},"Reference"),i.a.createElement("article",{className:l.a.sidebarSection},i.a.createElement(c.a,{open:n[t],trigger:i.a.createElement("h2",{className:l.a.sidebarParentItem,onClick:function(){return o(t)}},e.title)},i.a.createElement("section",{className:l.a.nestedSidebarSection},e.items.map((function(e){return i.a.createElement("p",{className:l.a.nestedSidebarItem},i.a.createElement(r.Link,{activeStyle:s,state:n,className:l.a.sidebarLink,to:e.link},e.title))})))))):i.a.createElement("article",{className:l.a.sidebarSection},i.a.createElement(c.a,{open:n[t],trigger:i.a.createElement("h2",{className:l.a.sidebarParentItem,onClick:function(){return o(t)}},e.title)},i.a.createElement("section",{className:l.a.nestedSidebarSection},e.items.map((function(e){return i.a.createElement("p",{className:l.a.nestedSidebarItem},i.a.createElement(r.Link,{activeStyle:s,state:n,className:l.a.sidebarLink,to:e.link},e.title))})))))}return a}));return i.a.createElement("aside",{id:"sidebar",className:l.a.sidebar},i.a.createElement("h2",{className:l.a.guidesHeading},"Guides"),u)}},248:function(e,t,n){"use strict";n(85),n(68),n(117),n(54),n(2),Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),r=l(i),s=l(n(53));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.timeout=void 0,n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),n.setInnerRef=n.setInnerRef.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.scrollHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.scrollHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){this.props.triggerDisabled||(e.preventDefault(),this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?r.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?r.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(){this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen())}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",a=this.props.triggerDisabled?"is-disabled":"",i=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,s=this.props.contentContainerTagName,l=this.props.triggerTagName,o=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,c=this.props.classParentString+"__trigger "+n+" "+a+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),u=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),p=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,h=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return r.default.createElement(s,{className:u.trim()},r.default.createElement(l,{className:c.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;" "!==n&&"Enter"!==n||e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},i),this.renderNonClickableTriggerElement(),r.default.createElement("div",{className:p.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef},r.default.createElement("div",{className:h.trim()},o)))}}]),t}(i.Component);o.propTypes={transitionTime:s.default.number,transitionCloseTime:s.default.number,triggerTagName:s.default.string,easing:s.default.string,open:s.default.bool,classParentString:s.default.string,openedClassName:s.default.string,triggerStyle:s.default.object,triggerClassName:s.default.string,triggerOpenedClassName:s.default.string,contentOuterClassName:s.default.string,contentInnerClassName:s.default.string,accordionPosition:s.default.oneOfType([s.default.string,s.default.number]),handleTriggerClick:s.default.func,onOpen:s.default.func,onClose:s.default.func,onOpening:s.default.func,onClosing:s.default.func,trigger:s.default.oneOfType([s.default.string,s.default.element]),triggerWhenOpen:s.default.oneOfType([s.default.string,s.default.element]),triggerDisabled:s.default.bool,lazyRender:s.default.bool,overflowWhenOpen:s.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:s.default.oneOfType([s.default.element,s.default.func]),tabIndex:s.default.number,contentContainerTagName:s.default.string},o.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=o},249:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(252),s=n.n(r);t.a=function(){var e=Object(a.useState)(!0),t=e[0],n=e[1];return i.a.createElement("section",{onClick:function(){return function(){n(!t);var e,a,i,r,s=document.querySelector("#sidebar"),l=document.querySelector("#docs-window"),o={fill:"forwards",duration:500,iterations:1};t?(s.animate([{transform:"translateX(0)"},{transform:"translateX(calc(-50vw))"}],o),l.animate([(e={transform:"translateX(0)"},e.transform="width: 50%",e),(a={transform:"translateX(calc(-50vw))"},a.transform="width: 100%",a)],o)):(s.animate([{transform:"translateX(calc(-50vw))"},{transform:"translateX(0)"}],o),l.animate([(i={transform:"translateX(calc(-50vw))"},i.transform="width: 100%",i),(r={transform:"translateX(0)"},r.transform="width: 50%",r)],o))}()},className:s.a.burgerIcon},i.a.createElement("div",{className:s.a.line}),i.a.createElement("div",{className:s.a.line}),i.a.createElement("div",{className:s.a.line}))}}}]);
//# sourceMappingURL=component---src-pages-learn-js-df4702ea1c03ea9b18d9.js.map