(this.webpackJsonpcf=this.webpackJsonpcf||[]).push([[0],{53:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(1),c=n.n(a),o=n(27),s=n.n(o),i=(n(53),n(39)),l=n(40),d=n(45),b=n(43),u=n(3),h=(n(12),n(4)),j=n(13),g=n.n(j);var f=function(e){console.log("In function Character wise");var t=[["Level","Solved"]];Object.keys(e.problemChar).map((function(n){t.push([n,e.problemChar[n]])}));var n=Math.max(Math.floor((t.length-28)*(700/15)+1500),g()(".character-graph").width());return Object(r.jsx)("div",{className:"character-graph",children:Object(r.jsx)(h.a,{width:n,height:"275px",chartType:"ColumnChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:t,options:{title:"Problem Level",chartArea:{width:"80%"},chart:{title:"Difficulty wise problems",subtitle:"The bars show to total no. of problems solved as per difficulty"},colors:["rgb(2, 2, 140)"],legend:{position:"none"},bar:{groupWidth:"55%"}},rootProps:{"data-testid":"2"}})})};var p=function(e){console.log("In function Difficulty wise");var t=[["Level","Solved"]];Object.keys(e.problemDifficulty).map((function(n){t.push([n,e.problemDifficulty[n]])}));var n=Math.max(Math.floor((t.length-28)*(700/15)+1500),g()(".difficulty-chart").width());return Object(r.jsx)("div",{className:"difficulty-chart",children:Object(r.jsx)(h.a,{width:n,height:"275px",chartType:"ColumnChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:t,options:{title:"Problems Difficulty",chartArea:{width:"80%"},chart:{title:"Difficulty wise problems",subtitle:"The bars show to total no. of problems solved as per difficulty"},colors:["rgb(2, 2, 140)"],legend:{position:"none"},bar:{groupWidth:"55%"}},rootProps:{"data-testid":"2"}})})};var m=function(e){console.log("In function Tag wise");var t=[["Tags","Solved problems",{role:"style"}]];return Object.keys(e.problemTags).map((function(n,r){t.push([n,e.problemTags[n],"#b87333"])})),Object(r.jsx)("div",{className:"tag-graph",children:Object(r.jsx)(h.a,{width:"100%",height:"400px",chartType:"PieChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:t,options:{title:"Problem Tags",pieSliceText:"none",pieHole:.5},rootProps:{"data-testid":"1"}})})};var O={OK:{term:"Accepted",color:"#207d1a"},TIME_LIMIT_EXCEEDED:{term:"TLE",color:"#eb540e"},MEMORY_LIMIT_EXCEEDED:{term:"MLE",color:"#2c4a94"},IDLENESS_LIMIT_EXCEEDED:{term:"IDLE",color:"#0c827c"},RUNTIME_ERROR:{term:"Runtime error",color:"#d6660b"},COMPILATION_ERROR:{term:"Compilation Error",color:"#d2e038"},WRONG_ANSWER:{term:"Wrong Answer",color:"#d90b0b"}};var v=function(e){var t=[["Tags","Solved problems"]],n=[];return Object.keys(e.problemVerdicts).map((function(r,a){r in O&&(t.push([O[r].term,e.problemVerdicts[r]]),n.push({color:O[r].color}))})),Object(r.jsx)("div",{className:"verdict-graph",children:Object(r.jsx)(h.a,{width:"100%",height:"400px",chartType:"PieChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:t,options:{legend:"none",title:"Problem Verdicts",is3D:!0,slices:n},rootProps:{"data-testid":"1"}})})};var x=function(e){console.log("In function Rating graph");var t=e.userRatings.slice(-100),n=[["x","Rating",{type:"string",role:"style"}]],a=function(e){for(var t=0,n=0,r=0;r<e.length;r++)n<e[r].newRating&&(n=e[r].newRating,t=r);return[n,t]}(t),c=Object(u.a)(a,2),o=(c[0],c[1]),s=0;t.forEach((function(e){s===o?n.push([e.contestId.toString(),e.newRating,"point { size: 4; fill-color: #0a0a0a; }"]):n.push([e.contestId.toString(),e.newRating,null]),s+=1}));var i="Contest rating in last "+t.length+" contests";return Object(r.jsx)("div",{className:"rating-graph",children:Object(r.jsx)(h.a,{width:"100%",height:"300px",chartType:"LineChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:n,options:{title:i,pointSize:4,pointShape:"circle",colors:["rgb(2, 2, 140)"],legend:{position:"none"}},rootProps:{"data-testid":"1"}})})};var S=function(e){if(console.log("In function userdata"),0===e.contests)return Object(r.jsx)("p",{children:"No Contests!!"});var t=e.allSubmissions,n=e.uniqueCorrectSubmission,a=t.length,c=n.length,o=function(e){for(var t=0,n=0,r=0,a={},c=0;c<e.length;c++)e[c].problem.name in a?(a[e[c].problem.name].tried++,"OK"===e[c].verdict&&a[e[c].problem.name].solved++):(a[e[c].problem.name]={tried:1,solved:0},"OK"===e[c].verdict&&a[e[c].problem.name].solved++);return Object.keys(a).forEach((function(e){t++,0!==a[e].solved&&r++,a[e].solved===a[e].tried&&n++})),[t,r,n]}(t),s=Object(u.a)(o,3),i=s[0],l=s[1],d=s[2],b=(a/c).toFixed(2),h=e.contests,j=h.length,g=function(e){for(var t=0,n=0,r=2e8,a=0;a<e.length;a++)0!==a&&(e[a].newRating-e[a].oldRating>t&&(t=e[a].newRating-e[a].oldRating),-e[a].newRating+e[a].oldRating>n&&(n=-e[a].newRating+e[a].oldRating),r>e[a].rank&&(r=e[a].rank));return[t,n,r]}(h),f=Object(u.a)(g,3),p=f[0],m=f[1],O=f[2],v={borderRight:"none"};return Object(r.jsxs)("div",{className:"user-data",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Tried: ",i]})}),Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Solved: ",l]})}),Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Avg submissions: ",b]})}),Object(r.jsx)("div",{className:"col-lg-3",style:v,children:Object(r.jsxs)("p",{children:["At 1st submission: ",d]})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Total Contests: ",j]})}),Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Max Up: ",p]})}),Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Max Down: ",m]})}),Object(r.jsx)("div",{className:"col-lg-3",style:v,children:Object(r.jsxs)("p",{children:["Best Rank: ",O]})})]})]})},E=n(44);function y(e){var t=new Date(1e3*e);return[t.getFullYear(),t.getMonth(),t.getDate()]}var w=function(e){console.log("In function Heatmap");var t=[[{type:"date",id:"Date"},{type:"number",id:"Won/Loss"}]],n=[];t.push.apply(t,Object(E.a)(function(e){for(var t={},n=0;n<e.length;n++){var r=y(e[n].creationTimeSeconds),a=Object(u.a)(r,3),c=a[0],o=a[1],s=a[2],i=new Date(c,o,s).toString();i in t?t[i]+=1:t[i]=1}return Object.keys(t).map((function(e){return[new Date(e),t[e]]}))}(e.data)));for(var a=1;a<t.length;a++)-1===n.indexOf(t[a][0].getFullYear())&&n.push(t[a][0].getFullYear());var c=30+150*n.length;return console.log(n),Object(r.jsx)("div",{className:"heatmap",children:Object(r.jsx)(h.a,{width:"100%",height:c,chartType:"Calendar",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:t,options:{title:"Submission Heatmap",colorAxis:{minValue:0,maxValue:"#032052",colors:["#ffffff","#0027ff","#00127d"]}},rootProps:{"data-testid":"1"}})})};function C(e){var t=Object.keys(e).map((function(t){return[t,e[t]]})),n={};return t.sort((function(e,t){return t[1]-e[1]})),t.forEach((function(e){n[e[0]]=e[1]})),n}var R=function(e){console.log("In function Handle");var t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(null),i=Object(u.a)(s,2),l=i[0],d=i[1],b=Object(a.useState)(!1),h=Object(u.a)(b,2),j=h[0],g=h[1],O=Object(a.useState)(!1),E=Object(u.a)(O,2),y=E[0],R=E[1],I=Object(a.useState)([]),N=Object(u.a)(I,2),T=N[0],L=N[1],k=Object(a.useState)([]),D=Object(u.a)(k,2),M=D[0],P=D[1],_=Object(a.useState)(0),A=Object(u.a)(_,2),F=A[0],H=A[1],V=Object(a.useState)({}),W=Object(u.a)(V,2),B=W[0],K=W[1],Y=Object(a.useState)({}),U=Object(u.a)(Y,2),X=U[0],q=U[1],z=Object(a.useState)({}),J=Object(u.a)(z,2),G=J[0],Q=J[1],Z=Object(a.useState)({}),$=Object(u.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)({}),re=Object(u.a)(ne,2),ae=(re[0],re[1]),ce=Object(a.useState)({}),oe=Object(u.a)(ce,2),se=oe[0],ie=oe[1];return Object(a.useEffect)((function(){var t=e.handle,n="https://codeforces.com/api/user.status?handle="+t+"&from=1&count=10000",r="https://codeforces.com/api/user.rating?handle="+t;console.log("In function Handlle data use effect"),g(!1),R(!1),d(null),o(null),fetch(n).then((function(e){if(e.ok)return e.json();console.log("In error of submission"),o("something went wrong"),g(!0)})).then((function(e){if(e){console.log("fetching problem URL");var t=e.result;L(t);var n=function(e){var t=[],n=[];return e.forEach((function(e){"OK"===e.verdict&&-1===n.indexOf(e.problem.name)&&(t.push(e),n.push(e.problem.name))})),t}(t);P(n),K(function(e){var t={};return e.forEach((function(e){e.problem.index[0]in t?t[e.problem.index[0]]+=1:t[e.problem.index[0]]=1})),function(e){var t=[];for(var n in e)t[t.length]=n;t.sort();for(var r={},a=0;a<t.length;a++)r[t[a]]=e[t[a]];return r}(t)}(n)),H(t.length),q(function(e){var t={};return e.forEach((function(e){e.problem.rating&&(e.problem.rating in t?t[e.problem.rating]+=1:t[e.problem.rating]=1)})),t}(n)),Q(function(e){var t={};return e.forEach((function(e){e.problem.tags.forEach((function(e){e in t?t[e]+=1:t[e]=1}))})),C(t)}(n)),te(function(e){var t={};return e.forEach((function(e){e.verdict in t?t[e.verdict]+=1:t[e.verdict]=1})),t}(t)),ae(function(e){var t={};return e.forEach((function(e){e.programmingLanguage in t?t[e.programmingLanguage]+=1:t[e.programmingLanguage]=1})),C(t)}(t)),g(!0)}})),fetch(r).then((function(e){if(e.ok)return e.json();console.log("In error of Rating"),d("something went wrong"),R(!0)})).then((function(e){e&&(ie(e.result),R(!0))}))}),[e.handle]),c||l?Object(r.jsx)("div",{children:"Error: Not Found"}):j&&y?Object(r.jsxs)("div",{children:[Object(r.jsx)(S,{contests:se,allSubmissions:T,uniqueCorrectSubmission:M}),Object(r.jsx)(x,{totalSubmissions:F,userRatings:se}),Object(r.jsx)(f,{totalSubmissions:F,problemChar:B}),Object(r.jsx)(p,{totalSubmissions:F,problemDifficulty:X}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-5",children:Object(r.jsx)(v,{totalSubmissions:F,problemVerdicts:ee})}),Object(r.jsx)("div",{className:"col-lg-7",children:Object(r.jsx)(m,{totalSubmissions:F,problemTags:G})})]}),Object(r.jsx)(w,{data:T})]}):Object(r.jsx)("div",{children:"Loading..."})};var I=function(){return Object(r.jsxs)("nav",{class:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(r.jsx)("a",{class:"navbar-brand",href:"#",children:"Track CF Performance"}),Object(r.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(r.jsx)("span",{class:"navbar-toggler-icon"})}),Object(r.jsx)("div",{class:"navbar-links collapse navbar-collapse",id:"collapsibleNavbar",children:Object(r.jsxs)("ul",{class:"navbar-nav",children:[Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)("a",{class:"nav-link",href:"#",children:"HOME"})}),Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)("a",{class:"nav-link",href:"#",children:"COMPARE"})}),Object(r.jsx)("li",{class:"nav-item",children:Object(r.jsx)("a",{class:"nav-link",href:"#",children:"PROBLEMS"})})]})})]})},N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).mySubmitHandler=function(e){e.preventDefault(),r.setState({username:document.getElementById("inputhandle").value,is_submitted:!0}),console.log("In function submit handler")},r.state={username:"",is_submitted:!1},console.log("In function Input constructor"),r}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{class:"form-inline",children:[Object(r.jsx)("div",{class:"form-group",children:Object(r.jsx)("input",{type:"text",class:"form-control",id:"inputhandle",placeholder:"Handle"})}),Object(r.jsx)("button",{type:"submit",class:"btn btn-dark",onClick:this.mySubmitHandler,children:"Submit"})]}),this.state.is_submitted&&Object(r.jsx)(R,{handle:this.state.username})]})}}]),n}(c.a.Component);var T=function(){return console.log("In function App"),Object(r.jsxs)("div",{className:"heading",children:[Object(r.jsx)(I,{}),Object(r.jsx)(N,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),L()}},[[77,1,2]]]);
//# sourceMappingURL=main.fe5c976c.chunk.js.map