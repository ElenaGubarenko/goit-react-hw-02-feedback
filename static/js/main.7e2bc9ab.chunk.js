(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(t,e,n){t.exports={ButtonsForFeedback:"ButtonsForFeedback_ButtonsForFeedback__20_cq"}},12:function(t,e,n){t.exports={SectionTitle:"SectionTitle_SectionTitle__Wq2ba"}},19:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(9),s=n.n(r),i=(n(17),n(10)),o=n(2),u=n(3),d=n(5),b=n(4),j=n(6),l=n.n(j),h=n(8),p=n.n(h),O=n(0),f=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Statistics"}),Object(O.jsx)("ul",{className:p.a.Statistics,children:this.props.stateDataForRender.map((function(t){return Object(O.jsxs)("li",{children:[t[0],": ",t[1]]},t)}))}),Object(O.jsxs)("ul",{className:p.a.Statistics,children:[Object(O.jsxs)("li",{children:["total: ",this.props.countTotalFeedback]}),Object(O.jsxs)("li",{children:["positive feedback:"," ",this.props.state.good>0?this.props.countPositiveFeedbackPercentage:0,"%"]})]})]})}}]),n}(c.Component),k=n(11),v=n.n(k),F=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(O.jsx)("ul",{className:v.a.ButtonsForFeedback,children:this.props.props.map((function(e){return Object(O.jsx)("button",{name:e,onClick:t.props.addFeedbackCount,children:e},l()())}))})}}]),n}(c.Component),x=n(12),g=n.n(x),m=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:g.a.SectionTitle,children:[Object(O.jsx)("h1",{children:"Please, leave feedback"}),Object(O.jsx)("div",{children:this.props.children})]})}}]),n}(c.Component),S=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){var e=t.state.good/t.countTotalFeedback()*100;return Math.round(e)},t.addFeedbackCount=function(e){var n=e.target.name,c=function(e){n===e&&t.setState((function(t){return Object(i.a)({},e,t[e]+1)}))};for(var a in t.state)c(a);t.countPositiveFeedbackPercentage()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.feedbackCategories,e=this.state,n=Object.entries(e);return Object(O.jsx)("div",{children:Object(O.jsxs)(m,{children:[Object(O.jsx)(F,{props:t,addFeedbackCount:this.addFeedbackCount},l()()),this.state.good>0||this.state.neutral>0||this.state.bad>0?Object(O.jsx)(f,{stateDataForRender:n,countTotalFeedback:this.countTotalFeedback(),countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage(),state:this.state},l()()):Object(O.jsx)("p",{children:"No feedback given"})]})})}}]),n}(c.Component);var C=function(){return Object(O.jsx)(S,{feedbackCategories:["good","neutral","bad"]})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={Statistics:"Statistics_Statistics__3mu0e"}}},[[19,1,2]]]);
//# sourceMappingURL=main.7e2bc9ab.chunk.js.map