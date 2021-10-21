(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(26),c=n.n(i),s=n(27),r=n(13),o=n(16),l=n(17),d=n.n(l),u=n(28),m=0,j=1,p=2,b=3,h=4,x={requestState:b,timelineData:[]},f=Object(o.b)({name:"education",initialState:x,reducers:{requestPending:function(e){e.requestState=m},requestSuccess:function(e){e.requestState=j},requestError:function(e){e.requestState=p},setTimelineData:function(e,t){e.timelineData=t.payload}}}),v=f.actions,O=v.requestPending,g=v.requestSuccess,_=v.requestError,k=v.setTimelineData,N=f.reducer,w={requestState:b,skillsData:function(){try{var e=localStorage.getItem("Skills");if(e)return JSON.parse(e)}catch(t){console.log(t)}return null}()||[]},S=Object(o.b)({name:"skills",initialState:w,reducers:{requestPending:function(e){e.requestState=m},requestSuccess:function(e){e.requestState=j},requestError:function(e){e.requestState=p},requestStored:function(e){e.requestState=h},setSkillsData:function(e,t){e.skillsData=t.payload}}}),y=S.actions,q=y.requestPending,C=y.requestSuccess,I=y.requestError,E=y.requestStored,A=y.setSkillsData,D=S.reducer,L=Object(o.a)({reducer:{education:N,skills:D}});L.subscribe((function(){var e=L.getState();localStorage.setItem("Skills",JSON.stringify(e.skills.skillsData))}));var F=L,J=n(5),P=(n(70),n(0));var M=function(e){var t=e.styles,n=e.avatar,a=e.name,i=e.title,c=e.description,s="panel"===t,r=s?"photobox__container photobox__container--panel":"photobox__container",o=s?"photobox__img photobox__img--panel":"photobox__img",l=s?"photobox__name photobox__name--panel":"photobox__name";return Object(P.jsxs)("div",{className:r,children:[Object(P.jsx)("img",{className:o,src:n,alt:"programmer"}),Object(P.jsx)("h1",{className:l,children:a}),i&&Object(P.jsx)("h2",{className:"photobox__title",children:i}),c&&Object(P.jsx)("p",{className:"photobox__text",children:c})]})},T=n(11);n(75);var U=function(e){var t=e.icon,n=e.text,a=e.classes,i=e.onClickHandler;return Object(P.jsxs)("button",{type:"button",className:"button ".concat(a),onClick:i,children:[Object(P.jsx)("i",{children:Object(P.jsx)(T.a,{icon:t,className:"fa-fw"})}),Object(P.jsx)("span",{children:n})]})};var H=function(e){var t=e.icon,n=e.text,a=e.classes,i=e.page,c=Object(J.g)();return Object(P.jsx)(U,{icon:t,text:n,classes:a,onClickHandler:function(){return c.push("/".concat(i))}})},R=n.p+"static/media/natalia_milovanova_photo.650bd571.png";n(79);var G=function(){return Object(P.jsxs)("div",{className:"c-home",children:[Object(P.jsxs)("div",{className:"l-home",children:[Object(P.jsx)("div",{className:"c-home__photobox",children:Object(P.jsx)(M,{name:"Natalia Milovanova",title:"Front-end web developer",description:"I build interactive apps that run across platforms & devices.",avatar:R})}),Object(P.jsx)(H,{text:"Know more",page:"inner"})]}),Object(P.jsx)("div",{className:"c-home__overlay"})]})},V=n(6);n(80);var z=function(){return Object(P.jsx)("i",{className:"loader","data-testid":"icon",children:Object(P.jsx)(T.a,{icon:V.j,className:"fa-2x"})})};n(81);var B=function(){return Object(P.jsx)("p",{className:"error",children:"Something went wrong; please review your server connection!"})};n(82);var W=function(e){var t=e.title,n=e.content,a=e.component,i=e.id,c=e.showLoader,s=e.showError,r=e.showComponent;return Object(P.jsxs)("div",{id:i,className:"box__container",children:[Object(P.jsx)("h3",{className:"box__title",children:t}),n&&Object(P.jsx)("p",{className:"box__content",children:n}),c&&Object(P.jsx)(z,{}),s&&Object(P.jsx)(B,{}),a&&r&&Object(P.jsx)("div",{children:a})]})};n(83);var K=function(e){var t=e.date,n=e.title,a=e.text;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{className:"timelineItem__date",children:t}),Object(P.jsxs)("div",{className:"timelineItem__event",children:[Object(P.jsx)("h4",{className:"timelineItem__title",children:n}),Object(P.jsx)("p",{className:"timelineItem__text",children:a})]})]})};n(84);var Y=function(e){var t=e.data;return Object(P.jsx)("ul",{className:"timeline__list",children:t.map((function(e,t){return Object(P.jsx)("li",{children:Object(P.jsx)(K,{title:e.title,text:e.text,date:e.date})},t)}))})};n(85);var Z=function(e){var t=e.company,n=e.date,a=e.job,i=e.description;return Object(P.jsxs)("div",{className:"expertiseItem__container",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{className:"expertiseItem__company",children:t}),Object(P.jsx)("span",{className:"expertiseItem__date",children:n})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{className:"expertiseItem__company",children:a}),Object(P.jsx)("p",{className:"expertiseItem__description",children:i})]})]})};var Q=function(e){var t=e.data;return Object(P.jsx)("div",{className:"expertise__container",children:t.map((function(e,t){return Object(P.jsx)(Z,{date:e.date,company:e.info.company,job:e.info.job,description:e.info.description},t)}))})},X=n(29),$=n(48),ee=n.n($);n(92);var te=function(e){var t=e.filter,n=e.image,a=e.title,i=e.text,c=e.url;return Object(P.jsxs)("div",{className:"portfolioItem__container filter-item ".concat(t),children:[Object(P.jsx)("div",{className:"portfolioItem__image",children:Object(P.jsx)("img",{src:n,alt:"project"})}),Object(P.jsxs)("div",{className:"portfolioItem__info",children:[Object(P.jsx)("h4",{className:"portfolioItem__title",children:a}),Object(P.jsx)("p",{className:"portfolioItem__text",children:i}),Object(P.jsx)("a",{className:"portfolioItem__link",href:c,target:"_blank",rel:"noreferrer",children:"View resource"})]})]})},ne=[{title:"Foinni",text:"Website for graphic design agency",url:"https://hameleonka.github.io/Foinni/",image:"/images/portfolio-foinni.jpeg",filter:"html_css_js"},{title:"Project JWood",text:"Photography website",url:"https://hameleonka.github.io/JWood/",image:"/images/portfolio-jwood.jpeg",filter:"html_css_js"},{title:"Lookshop",text:"Online shop for brand clothes",url:"https://hameleonka.github.io/Lookshop/",image:"/images/portfolio-lookshop.jpeg",filter:"html_css_js"},{title:"Velox",text:"Web design agency",url:"https://hameleonka.github.io/Velox/",image:"/images/portfolio-velox.jpeg",filter:"html_css_js"},{title:"Glacy",text:"Ice cream shop",url:"https://hameleonka.github.io/133915-gllacy/index.html",image:"/images/portfolio-glacy.jpeg",filter:"html_css_js"},{title:"Expense Tracker",text:"Expense Tracker app",url:"https://hameleonka.github.io/expense-tracker/",image:"/images/portfolio-expense_tracker.png",filter:"reactjs"}],ae=[{date:"",info:{company:"2018-current",job:"Stay-at-Home-Parent",description:"Finished rigorious 6 months web-development program, learned new programming skills on Udemy, while being a primary caregiver to a child"}},{date:"2017-2018",info:{company:"Mozilla",job:"OUTREACHY program intern",description:"Refactored Firefox Add-ons linter test suite from promise based code to async/await based code"}},{date:"2017",info:{company:"Code For Social Good",job:"Volunteer front-end web developer",description:"Collaborated on the development of an Angular 2 web application of a global volunteering platform that provides nonprofit organizations with free technical resources"}},{date:"2014-2015",info:{company:"GasProject Engineering ",job:"Lead engineer",description:'Designed and provided all technical documentation for building  JSC "GAZPROM" security systems (e.g., perimeter and building security, fire alarm and firefighting, closed-circuit television (CCTV) and access control systems)'}},{date:"2009-2014",info:{company:"RusGas Engineering",job:"Lead engineer",description:"Presented documentation to clients and interacted with multiple contractors. Developed technical decisions and verified technical documentation. Managed a multi-level team of engineers, including prioritizing tasks and measuring performance. Designed and provided all technical documentation for building  security systems (e.g., perimeter and building security, fire alarm and firefighting, closed-circuit television (CCTV) and access control systems) for facilities of oil/gas complex."}}],ie=[{feedback:" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",reporter:{photoUrl:"./user.jpg",name:"John Doe",citeUrl:"https://www.citeexample.com"}},{feedback:" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",reporter:{photoUrl:"./user.jpg",name:"John Doe",citeUrl:"https://www.citeexample.com"}}],ce=[{date:2021,title:"EPAM UpSkill",text:"Online Front end development program"},{date:2018,title:"CS50",text:"CS50 Introduction to Computer Science course"},{date:2017,title:"Free Code Camp",text:"Front end development certification"},{date:2016,title:"HTML academy",text:"HTML, CSS & JavaScript course"},{date:2007,title:"Ufa State Aviation Technical University",text:"Master's Degree in Engineering, Information and measuring equipment and technology"}],se=[{name:"HTML",range:100},{name:"CSS",range:90},{name:"JavaScript",range:80},{name:"ReactJS",range:70}];n(93);var re=function(){var e=Object(a.useState)("*"),t=Object(X.a)(e,2),n=t[0],i=t[1],c=Object(a.useRef)();Object(a.useEffect)((function(){return c.current=new ee.a(".filter-container",{itemSelector:".filter-item",layoutMode:"fitRows"}),function(){return c.current.destroy()}}),[]);var s=function(e,t){c.current.arrange({filter:"".concat("*"!==t?".":"").concat(t)}),i(t)};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("ul",{className:"portfolioList__keys",children:[Object(P.jsx)("li",{onClick:function(e){return s(0,"*")},className:"*"===n?"active":"not-active",children:"All /"}),Object(P.jsx)("li",{onClick:function(e){return s(0,"html_css_js")},className:"html_css_js"===n?"active":"not-active",children:"HTML & CSS /"}),Object(P.jsx)("li",{onClick:function(e){return s(0,"reactjs")},className:"reactjs"===n?"active":"not-active",children:"ReactJS"})]}),Object(P.jsx)("div",{className:"filter-container",children:ne.map((function(e,t){return Object(P.jsx)(te,{title:e.title,text:e.text,url:e.url,image:e.image,filter:e.filter},t)}))})]})},oe=n(49);n(94);var le=function(){return Object(P.jsxs)("address",{className:"address__container",children:[Object(P.jsxs)("a",{href:"tel:+9292382891",className:"address__contact",children:[Object(P.jsx)(T.a,{icon:V.h,className:"address__icon fa-lg fa-fw"}),"929 238 2891"]}),Object(P.jsxs)("a",{href:"mailto:nmilovanova@gmail.com",className:"address__contact",children:[Object(P.jsx)(T.a,{icon:V.c,className:"address__icon fa-lg fa-fw"})," ","nmilovanova@gmail.com"]}),Object(P.jsxs)("a",{href:"https://linkedin.com/in/natalia-milovanova-79b715122",className:"address__contact",children:[Object(P.jsx)(T.a,{icon:oe.a,className:"address__icon fa-lg fa-fw"}),Object(P.jsxs)("div",{className:"address__contact-details",children:[Object(P.jsx)("span",{children:"LinkedIn"}),Object(P.jsx)("span",{className:"address__link",children:"linkedin.com/natalia-milovanova"})]})]})]})};n(95);var de=function(e){var t=e.feedback,n=e.name,a=e.citeUrl;return Object(P.jsxs)("div",{className:"feedbackItem__container",children:[Object(P.jsx)("p",{className:"feedbackItem__feedback",children:t}),Object(P.jsxs)("div",{className:"feedbackItem__reporter-container",children:[Object(P.jsx)("img",{src:"/images/feedback_img.png",alt:"person who wrote a feedback"}),Object(P.jsxs)("span",{className:"feedbackItem__reporter-name",children:[n,","," ",Object(P.jsx)("a",{href:a,children:a})]})]})]})};var ue=function(e){var t=e.data;return Object(P.jsx)("div",{children:t.map((function(e,t){return Object(P.jsx)(de,{feedback:e.feedback,name:e.reporter.name,citeUrl:e.reporter.citeUrl},t)}))})};n(96);var me=function(e){var t=e.icon,n=e.text,a=e.link;return Object(P.jsxs)("a",{href:"#".concat(a),className:"navigation__link",children:[Object(P.jsx)("i",{children:Object(P.jsx)(T.a,{icon:t,className:"fa-fw"})}),Object(P.jsx)("span",{children:n})]})};n(97);var je=function(){var e=[{icon:V.k,text:"About me",link:"about_me"},{icon:V.e,text:"Education",link:"education"},{icon:V.g,text:"Experience",link:"experience"},{icon:V.d,text:"Skills",link:"skills"},{icon:V.i,text:"Portfolio",link:"portfolio"},{icon:V.f,text:"Contacts",link:"contacts"},{icon:V.b,text:"Feedbacks",link:"feedbacks"}];return Object(P.jsx)("nav",{className:"navigation__container",children:Object(P.jsx)("ul",{children:e.map((function(e,t){return Object(P.jsx)("li",{className:"navigation__item",children:Object(P.jsx)(me,{icon:e.icon,text:e.text,link:e.link})},t)}))})})},pe=n.p+"static/media/menu_icon.13c12266.svg";n(98);var be=function(){var e=Object(a.useState)(!0),t=Object(X.a)(e,2),n=t[0],i=t[1],c={marginLeft:n?"0":"calc(-1 * var(--aside-width))"};return Object(P.jsxs)("div",{className:"panel__container",style:c,children:[Object(P.jsx)(M,{name:"Natalia Milovanova",title:"",description:"",avatar:R,styles:"panel"}),Object(P.jsx)(je,{}),Object(P.jsx)(H,{classes:"panel__btn",icon:V.a,text:"Go back",page:"home"}),Object(P.jsx)("img",{className:"panel__menu-icon",src:pe,alt:"menu icon",onClick:function(){return i((function(e){return!e}))}})]})};n(99);var he=function(){return Object(P.jsxs)("div",{className:"rangeAxis",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"rangeAxis__mark"}),Object(P.jsx)("div",{className:"rangeAxis__mark"}),Object(P.jsx)("div",{className:"rangeAxis__mark"}),Object(P.jsx)("div",{className:"rangeAxis__mark"})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("span",{className:"rangeAxis__level",children:"Beginner"}),Object(P.jsx)("span",{className:"rangeAxis__level",children:"Proficient"}),Object(P.jsx)("span",{className:"rangeAxis__level",children:"Expert"}),Object(P.jsx)("span",{className:"rangeAxis__level",children:" Master"})]})]})};n(100);var xe=function(e){var t=e.data;return Object(P.jsxs)("div",{className:"skills__wrapper",children:[Object(P.jsx)("ul",{className:"skills__chart",children:t.map((function(e,t){return Object(P.jsx)("li",{className:"skills__chart-item",style:{width:"".concat(e.range,"%")},children:Object(P.jsx)("span",{className:"skills__chart-name",children:e.name})},t)}))}),Object(P.jsx)(he,{})]})},fe=(n(101),n.p+"static/media/up_btn.e70b567d.svg");var ve=function(){var e=Object(r.c)((function(e){return e.education.timelineData})),t=Object(r.c)((function(e){return e.education.requestState})),n=Object(r.c)((function(e){return e.skills.skillsData})),i=Object(r.c)((function(e){return e.skills.requestState})),c=Object(r.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(u.a)(d.a.mark((function e(t){var n,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O()),e.prev=1,e.next=4,fetch("/api/educations");case 4:if((a=e.sent).ok){e.next=8;break}throw i="An error has occured: ".concat(a.status),new Error(i);case 8:return e.next=10,a.json();case 10:n=e.sent,t(g()),t(k(n)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),t(_()),t(k([]));case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}()),c(function(){var e=Object(u.a)(d.a.mark((function e(t,n){var a,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n().skills.skillsData.length){e.next=21;break}return t(q()),e.prev=3,e.next=6,fetch("/api/skills");case 6:if((i=e.sent).ok){e.next=10;break}throw c="An error has occured: ".concat(i.status),new Error(c);case 10:return e.next=12,i.json();case 12:a=e.sent,t(C()),t(A(a)),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),t(I()),t(A([]));case 21:t(E());case 22:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t,n){return e.apply(this,arguments)}}())}),[]),Object(P.jsxs)("div",{className:"c-inner",children:[Object(P.jsx)("aside",{children:Object(P.jsx)(be,{})}),Object(P.jsxs)("main",{children:[Object(P.jsx)(W,{id:"about_me",title:"About me",content:"Hello, I'm Natalia. A freelance Front-End developer based in Boston. I specialize in creating interactive experiences and functional interfaces."}),Object(P.jsx)(W,{id:"education",title:"Education",component:Object(P.jsx)(Y,{data:e}),showLoader:t===m,showError:t===p,showComponent:t===j}),Object(P.jsx)(W,{id:"experience",title:"Experience",component:Object(P.jsx)(Q,{data:ae}),showComponent:!0}),Object(P.jsx)(W,{id:"skills",title:"Skills",component:Object(P.jsx)(xe,{data:n}),showLoader:i===m,showError:i===p,showComponent:i===j||i===h}),Object(P.jsx)(W,{id:"portfolio",title:"Portfolio",component:Object(P.jsx)(re,{}),showComponent:!0}),Object(P.jsx)(W,{id:"contacts",title:"Contacts",component:Object(P.jsx)(le,{}),showComponent:!0}),Object(P.jsx)(W,{id:"feedbacks",title:"Feedbacks",component:Object(P.jsx)(ue,{data:ie}),showComponent:!0})]}),Object(P.jsx)("a",{href:"#about_me",className:"c-inner__up-btn",children:Object(P.jsx)("img",{src:fe,alt:"go to the top"})})]})};var Oe=function(){var e=Object(J.h)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),Object(P.jsx)("div",{className:"c-app",children:Object(P.jsxs)(J.d,{children:[Object(P.jsx)(J.b,{exact:!0,path:"/",children:Object(P.jsx)(J.a,{to:"/home"})}),Object(P.jsx)(J.b,{path:"/home",children:Object(P.jsx)(G,{})}),Object(P.jsx)(J.b,{path:"/inner",children:Object(P.jsx)(ve,{})})]})})},ge=n(59);(function(){Object(ge.a)({routes:function(){this.namespace="api",this.timing=1e3,this.get("/educations",(function(){return ce})),this.get("/skills",(function(){return se})),this.post("/skills",(function(e,t){var n=JSON.parse(t.requestBody);return n.id=4,{skill:n}}))}})})(),c.a.render(Object(P.jsx)(s.a,{children:Object(P.jsx)(r.a,{store:F,children:Object(P.jsx)(Oe,{})})}),document.getElementById("root"))},70:function(e,t,n){},75:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.78c978b4.chunk.js.map