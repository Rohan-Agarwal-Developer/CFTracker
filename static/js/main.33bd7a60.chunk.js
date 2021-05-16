(this.webpackJsonpcf=this.webpackJsonpcf||[]).push([[0],{23:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),s=t(33),o=t.n(s),i=(t(23),t(3)),l=t(14),c=t.n(l),u=t(10),d=t(18),b=t(11),m=t(8),h=function(e){var n=e.problemChar;console.log("In function Character wise");var t=n[0].length<3?["rgb(2, 2, 140)"]:["rgb(2, 2, 140)","rgb(0, 105, 11)"];return Object(r.jsx)(a.Fragment,{children:n&&n.length>1&&Object(r.jsx)("div",{className:"character-graph",children:Object(r.jsx)(m.a,{width:"100%",height:"355px",chartType:"ColumnChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:n,options:{title:"Problem Level",chartArea:{width:"75%"},chart:{title:"Difficulty wise problems",subtitle:"The bars show to total no. of problems solved as per difficulty"},colors:t,legend:{position:"top"},bar:{groupWidth:"55%"}},rootProps:{"data-testid":"2"}})})})},j=function(e){var n=e.problemDifficulty;console.log("In function Difficulty wise");var t=n[0].length<3?["rgb(2, 2, 140)"]:["rgb(2, 2, 140)","rgb(0, 105, 11)"];n[0].length;return console.log(n),Object(r.jsx)(a.Fragment,{children:n&&n.length>1&&Object(r.jsx)("div",{className:"difficulty-chart",children:Object(r.jsx)(m.a,{width:"100%",height:"355px",chartType:"ColumnChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:n,options:{title:"Problems Difficulty",chartArea:{width:"75%"},chart:{title:"Difficulty wise problems",subtitle:"The bars show to total no. of problems solved as per difficulty"},colors:t,legend:{position:"top"},bar:{groupWidth:"75%"}},rootProps:{"data-testid":"2"}})})})},p=function(e){var n=e.problemTags,t=e.handle;console.log("In function Tag wise",t);var s=[["Tags","Solved problems",{role:"style"}]];return Object.keys(n).map((function(e,t){return s.push([e,n[e],"#b87333"])})),Object(r.jsx)(a.Fragment,{children:s.length>1&&Object(r.jsx)("div",{className:"tag-graph",children:Object(r.jsx)(m.a,{width:"100%",height:"400px",chartType:"PieChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:s,options:{title:"Problem Tags of ".concat(t),pieSliceText:"none",pieHole:.5},rootProps:{"data-testid":"1"}})})})},g={OK:{term:"Accepted",color:"#207d1a"},TIME_LIMIT_EXCEEDED:{term:"TLE",color:"#eb540e"},MEMORY_LIMIT_EXCEEDED:{term:"MLE",color:"#2c4a94"},IDLENESS_LIMIT_EXCEEDED:{term:"IDLE",color:"#0c827c"},RUNTIME_ERROR:{term:"Runtime error",color:"#d6660b"},COMPILATION_ERROR:{term:"Compilation Error",color:"#d2e038"},WRONG_ANSWER:{term:"Wrong Answer",color:"#d90b0b"}};var f=function(e){var n=[["Tags","Solved problems"]],t=[];return Object.keys(e.problemVerdicts).map((function(r,a){return r in g&&(n.push([g[r].term,e.problemVerdicts[r]]),t.push({color:g[r].color})),null})),Object(r.jsx)(a.Fragment,{children:n.length>1&&Object(r.jsx)("div",{className:"verdict-graph",children:Object(r.jsx)(m.a,{width:"100%",height:"400px",chartType:"PieChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:n,options:{legend:"none",title:"Problem Verdicts of ".concat(e.handle),is3D:!0,slices:t},rootProps:{"data-testid":"1"}})})})};var v=function(e){var n=e.userRatings;console.log("In function Rating graph");var t=n.slice(-100),s=[["x","Rating",{type:"string",role:"style"}]],o=function(e){for(var n=0,t=0,r=0;r<e.length;r++)t<e[r].newRating&&(t=e[r].newRating,n=r);return[t,n]}(t),l=Object(i.a)(o,2)[1],c=0;t.forEach((function(e){c===l?s.push([e.contestId.toString(),e.newRating,"point { size: 4; fill-color: #0a0a0a; }"]):s.push([e.contestId.toString(),e.newRating,null]),c+=1}));var u="Contest rating in last "+t.length+" contests";return Object(r.jsx)(a.Fragment,{children:s.length>1?Object(r.jsx)("div",{className:"rating-graph",children:Object(r.jsx)(m.a,{width:"100%",height:"300px",chartType:"LineChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:s,options:{title:u,pointSize:4,pointShape:"circle",colors:["rgb(2, 2, 140)"],legend:{position:"none"}},rootProps:{"data-testid":"1"}})}):Object(r.jsx)("div",{className:"upper-margin lower-margin",children:"No Contest given by this user"})})};var O=function(e){var n=e.contests,t=e.uniqueCorrectSubmission,a=e.allSubmissions;if(console.log("In function userdata"),!n)return Object(r.jsx)("p",{children:"No Contests!!"});var s=a.length,o=t.length,l=function(e){for(var n=0,t=0,r=0,a={},s=0;s<e.length;s++)e[s].problem.name in a?(a[e[s].problem.name].tried++,"OK"===e[s].verdict&&a[e[s].problem.name].solved++):(a[e[s].problem.name]={tried:1,solved:0},"OK"===e[s].verdict&&a[e[s].problem.name].solved++);return Object.keys(a).forEach((function(e){n++,0!==a[e].solved&&r++,a[e].solved===a[e].tried&&t++})),[n,r,t]}(a),c=Object(i.a)(l,3),u=c[0],d=c[1],b=c[2],m=o?(s/o).toFixed(2):0,h=n.length,j=function(e){for(var n=0,t=0,r=2e8,a=0;a<e.length;a++)0!==a&&(e[a].newRating-e[a].oldRating>n&&(n=e[a].newRating-e[a].oldRating),-e[a].newRating+e[a].oldRating>t&&(t=-e[a].newRating+e[a].oldRating),r>e[a].rank&&(r=e[a].rank));return 2e8===r&&(r="None",t="None",n="None"),[n,t,r]}(n),p=Object(i.a)(j,3),g=p[0],f=p[1],v=p[2],O={borderRight:"none"};return Object(r.jsxs)("div",{className:"user-data",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Tried: ",u]})}),Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Solved: ",d]})}),Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Avg submissions: ",m]})}),Object(r.jsx)("div",{className:"col-lg-3",style:O,children:Object(r.jsxs)("p",{children:["At 1st submission: ",b]})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Total Contests: ",h]})}),Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Max Up: ",g]})}),Object(r.jsx)("div",{className:"col-lg-3",children:Object(r.jsxs)("p",{children:["Max Down: ",f]})}),Object(r.jsx)("div",{className:"col-lg-3",style:O,children:Object(r.jsxs)("p",{children:["Best Rank: ",v]})})]})]})};function x(e){var n=new Date(1e3*e);return[n.getFullYear(),n.getMonth(),n.getDate()]}var S=function(e){var n=e.allSubmissions;console.log("In function Heatmap");var t=[[{type:"date",id:"Date"},{type:"number",id:"Won/Loss"}]],s=[];t.push.apply(t,Object(b.a)(function(e){for(var n={},t=0;t<e.length;t++){var r=x(e[t].creationTimeSeconds),a=Object(i.a)(r,3),s=a[0],o=a[1],l=a[2],c=new Date(s,o,l).toString();c in n?n[c]+=1:n[c]=1}return Object.keys(n).map((function(e){return[new Date(e),n[e]]}))}(n)));for(var o=1;o<t.length;o++)-1===s.indexOf(t[o][0].getFullYear())&&s.push(t[o][0].getFullYear());var l=30+150*s.length;return Object(r.jsx)(a.Fragment,{children:t.length>1&&Object(r.jsx)("div",{className:"heatmap",children:Object(r.jsx)(m.a,{width:"100%",height:l,chartType:"Calendar",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:t,options:{title:"Submission Heatmap",colorAxis:{minValue:0,maxValue:"#032052",colors:["#ffffff","#0027ff","#00127d"]}},rootProps:{"data-testid":"1"}})})})},N=t(15),R=t.n(N);function C(e){var n=Object.keys(e).map((function(n){return[n,e[n]]})),t={};return n.sort((function(e,n){return n[1]-e[1]})),n.forEach((function(e){t[e[0]]=e[1]})),t}function L(e,n){return e[0]-n[0]}function E(e,n){return e[0].charCodeAt(0)-n[0].charCodeAt(0)}function y(e){var n=[],t=[];return e.forEach((function(e){"OK"===e.verdict&&-1===t.indexOf(e.problem.name)&&(n.push(e),t.push(e.problem.name))})),n}function w(e){var n=[];return e.forEach((function(e){if(e.problem.index){for(var t=!1,r=0;r<n.length;r+=1)n[r][0]===e.problem.index[0]&&(n[r][1]+=1,t=!0);t||n.push([e.problem.index[0],1])}})),[["Level","Solved"]].concat(Object(b.a)(n.sort(E)))}function T(e){var n=[];return e.forEach((function(e){if(e.problem.rating){for(var t=!1,r=0;r<n.length;r+=1)n[r][0]===e.problem.rating&&(n[r][1]+=1,t=!0);t||n.push([e.problem.rating,1])}})),[["Level","Solved"]].concat(Object(b.a)(n.sort(L)))}function D(e){var n={};return e.forEach((function(e){e.problem.tags.forEach((function(e){e in n?n[e]+=1:n[e]=1}))})),C(n)}function I(e){var n={};return e.forEach((function(e){e.verdict in n?n[e.verdict]+=1:n[e.verdict]=1})),n}function k(e){var n={};return e.forEach((function(e){e.programmingLanguage in n?n[e.programmingLanguage]+=1:n[e.programmingLanguage]=1})),C(n)}var A=function(e){var n=e.handle;console.log("In function Handle ",n);var t=Object(a.useState)({errorSub:null,errorRating:null,isLoadedSubmission:!1,isLoadedRating:!1,allSubmissions:null,uniqueCorrectSubmissions:null,totalSubmissions:0,problemChar:null,problemDifficulty:null,problemTags:null,problemVerdicts:null,problemLanguages:null,userRatings:null}),s=Object(i.a)(t,2),o=s[0],l=s[1];Object(a.useEffect)((function(){var e="https://codeforces.com/api/user.status?handle="+n+"&from=1&count=10000",t="https://codeforces.com/api/user.rating?handle="+n;l({errorSub:null,errorRating:null,isLoadedSubmission:!1,isLoadedRating:!1,allSubmissions:null,uniqueCorrectSubmissions:null,totalSubmissions:0,problemChar:null,problemDifficulty:null,problemTags:null,problemVerdicts:null,problemLanguages:null,userRatings:null}),function(){var n=Object(d.a)(c.a.mark((function n(){var r,a,s,i,d,b;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r={"Content-Type":"application/json"},n.next=4,R.a.get(e,r);case 4:return a=n.sent,s=a.data.result,i=y(s),n.next=9,R.a.get(t,r);case 9:d=n.sent,b=d.data.result,l((function(e){return Object(u.a)(Object(u.a)({},e),{},{errorSub:null,errorRating:null,isLoadedSubmission:!0,isLoadedRating:!0,totalSubmissions:s.length,allSubmissions:s,uniqueCorrectSubmissions:i,problemChar:w(i),problemDifficulty:T(i),problemTags:D(i),problemVerdicts:I(s),problemLanguages:k(s),userRatings:b})})),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),console.log("Not found"),l(Object(u.a)(Object(u.a)({},o),{},{errorSub:!0,errorRating:!0}));case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}()()}),[n]);var b=o.errorSub,m=o.errorRating,g=o.isLoadedSubmission,x=o.isLoadedRating,N=o.allSubmissions,C=o.uniqueCorrectSubmissions,L=o.totalSubmissions,E=o.problemChar,A=o.problemDifficulty,F=o.problemTags,V=o.problemVerdicts,P=o.userRatings;return b||m?Object(r.jsx)("div",{className:"upper-margin",children:"Error: Not Found"}):g&&x?Object(r.jsx)(a.Fragment,{children:L>0?Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)("div",{className:"upper-margin",children:["CF Performance of ",n]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{contests:P,allSubmissions:N,uniqueCorrectSubmission:C}),Object(r.jsx)(v,{totalSubmissions:L,userRatings:P}),Object(r.jsx)(h,{totalSubmissions:L,problemChar:E}),Object(r.jsx)(j,{totalSubmissions:L,problemDifficulty:A}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-5 col-12",children:Object(r.jsx)(f,{handle:n,problemVerdicts:V})}),Object(r.jsx)("div",{className:"col-lg-7 col-12",children:Object(r.jsx)(p,{handle:n,problemTags:F})})]}),Object(r.jsx)(S,{allSubmissions:N})]})]}):Object(r.jsxs)("div",{className:"upper-margin",children:["No problems solved by ",n," yet."]})}):Object(r.jsx)("div",{className:"upper-margin",children:"Loading..."})},F=function(){console.log("In handle Input");var e=Object(a.useState)(""),n=Object(i.a)(e,2),t=n[0],s=n[1],o=Object(a.useState)({handle:"",isSubmitted:!1}),l=Object(i.a)(o,2),c=l[0],u=l[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{className:"form-inline",children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control",name:"handle",placeholder:"handle",value:t,onChange:function(e){return function(e){s(e.target.value)}(e)}})}),Object(r.jsx)("button",{type:"submit",className:"btn btn-dark",onClick:function(e){e.preventDefault(),u({handle:t,isSubmitted:!0},console.log("Submitted"))},children:"Submit"})]}),c.isSubmitted&&Object(r.jsx)(A,{handle:c.handle}),!c.isSubmitted&&Object(r.jsx)("div",{className:"upper-margin",children:"Enter your handle to visualize"})]})},V=t(35),P=t(2);var q=function(){return Object(r.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"/",children:"Track CF Performance"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"navbar-links collapse navbar-collapse",id:"collapsibleNavbar",children:Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"/",children:"HOME"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"/compare",children:"COMPARE"})})]})})]})};function M(e){var n=Object.keys(e).map((function(n){return[n,e[n]]})),t={};return n.sort((function(e,n){return n[1]-e[1]})),n.forEach((function(e){t[e[0]]=e[1]})),t}function B(e,n){return e[0]-n[0]}function _(e,n){return e[0].charCodeAt(0)-n[0].charCodeAt(0)}function H(e){var n=[],t=[];return e.forEach((function(e){"OK"===e.verdict&&-1===t.indexOf(e.problem.name)&&(n.push(e),t.push(e.problem.name))})),n}function W(e,n,t,r){var a=[];return e.forEach((function(e){if(e.problem.index){for(var n=!1,t=0;t<a.length;t+=1)a[t][0]===e.problem.index[0]&&(a[t][1]+=1,n=!0);n||a.push([e.problem.index[0],1,0])}})),n.forEach((function(e){if(e.problem.index){for(var n=!1,t=0;t<a.length;t+=1)a[t][0]===e.problem.index[0]&&(a[t][2]+=1,n=!0);n||a.push([e.problem.index[0],0,1])}})),[["Level","".concat(t),"".concat(r)]].concat(Object(b.a)(a.sort(_)))}function K(e,n,t,r){var a=[];return e.forEach((function(e){if(e.problem.rating){for(var n=!1,t=0;t<a.length;t+=1)a[t][0]===e.problem.rating&&(a[t][1]+=1,n=!0);n||a.push([e.problem.rating,1,0])}})),n.forEach((function(e){if(e.problem.rating){for(var n=!1,t=0;t<a.length;t+=1)a[t][0]===e.problem.rating&&(a[t][2]+=1,n=!0);n||a.push([e.problem.rating,0,1])}})),[["Level","".concat(t),"".concat(r)]].concat(Object(b.a)(a.sort(B)))}function Y(e){var n={};return e.forEach((function(e){e.problem.tags.forEach((function(e){e in n?n[e]+=1:n[e]=1}))})),M(n)}function z(e){var n={};return e.forEach((function(e){e.verdict in n?n[e.verdict]+=1:n[e.verdict]=1})),n}function X(e){var n={};return e.forEach((function(e){e.programmingLanguage in n?n[e.programmingLanguage]+=1:n[e.programmingLanguage]=1})),M(n)}var J=function(e){var n=e.handleA,t=e.handleB;console.log("In function Handle ",n,t);var s=Object(a.useState)({errorSub:null,errorRating:null,isLoadedSubmission:!1,isLoadedRating:!1,allSubmissions:null,uniqueCorrectSubmissions:null,totalSubmissions:0,problemTags:null,problemVerdicts:null,problemLanguages:null,userRatings:null}),o=Object(i.a)(s,2),l=o[0],b=o[1],m=Object(a.useState)({errorSub:null,errorRating:null,isLoadedSubmission:!1,isLoadedRating:!1,allSubmissions:null,uniqueCorrectSubmissions:null,totalSubmissions:0,problemTags:null,problemVerdicts:null,problemLanguages:null,userRatings:null}),g=Object(i.a)(m,2),v=g[0],O=g[1];return Object(a.useEffect)((function(){b({errorSub:null,errorRating:null,isLoadedSubmission:!1,isLoadedRating:!1,allSubmissions:null,uniqueCorrectSubmissions:null,totalSubmissions:0,problemTags:null,problemVerdicts:null,problemLanguages:null,userRatings:null}),O({errorSub:null,errorRating:null,isLoadedSubmission:!1,isLoadedRating:!1,allSubmissions:null,uniqueCorrectSubmissions:null,totalSubmissions:0,problemTags:null,problemVerdicts:null,problemLanguages:null,userRatings:null});var e=function(){var e=Object(d.a)(c.a.mark((function e(n,t,r){var a,s,o,i,l,d,b,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://codeforces.com/api/user.status?handle="+n+"&from=1&count=10000",s="https://codeforces.com/api/user.rating?handle="+n,o={"Content-Type":"application/json"},e.next=6,R.a.get(a,o);case 6:return i=e.sent,l=i.data.result,d=H(l),e.next=11,R.a.get(s,o);case 11:b=e.sent,m=b.data.result,r((function(e){return Object(u.a)(Object(u.a)({},e),{},{errorSub:null,errorRating:null,isLoadedSubmission:!0,isLoadedRating:!0,totalSubmissions:l.length,allSubmissions:l,uniqueCorrectSubmissions:d,problemTags:Y(d),problemVerdicts:z(l),problemLanguages:X(l),userRatings:m})})),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log("Not found"),r((function(e){return Object(u.a)(Object(u.a)({},e),{},{errorSub:!0,errorRating:!0})}));case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(n,t,r){return e.apply(this,arguments)}}();b(e(n,l,b)),O(e(t,v,O))}),[n,t]),console.log(l,v),l.errorSub||l.errorRating||v.errorSub||v.errorRating?Object(r.jsx)("div",{className:"upper-margin",children:"Error: Not Found"}):l.isLoadedSubmission&&l.isLoadedRating&&v.isLoadedSubmission&&v.isLoadedRating?Object(r.jsx)(a.Fragment,{children:Object(r.jsx)("div",{className:"compare",children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-6 col-12",children:Object(r.jsx)(f,{handle:n,problemVerdicts:l.problemVerdicts})}),Object(r.jsx)("div",{className:"col-lg-6 col-12",children:Object(r.jsx)(f,{handle:t,problemVerdicts:v.problemVerdicts})})]}),Object(r.jsx)(h,{problemChar:W(l.uniqueCorrectSubmissions,v.uniqueCorrectSubmissions,n,t)}),Object(r.jsxs)("div",{className:"row upper-margin",children:[Object(r.jsx)("div",{className:"col-lg-6 col-12",children:Object(r.jsx)(p,{handle:n,problemTags:l.problemTags})}),Object(r.jsx)("div",{className:"col-lg-6 col-12",children:Object(r.jsx)(p,{handle:t,problemTags:v.problemTags})})]}),Object(r.jsx)(j,{problemDifficulty:K(l.uniqueCorrectSubmissions,v.uniqueCorrectSubmissions,n,t)})]})})}):Object(r.jsx)("div",{className:"upper-margin",children:"Loading..."})},U=function(){console.log("In handle Input");var e=Object(a.useState)(""),n=Object(i.a)(e,2),t=n[0],s=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),c=l[0],u=l[1],d=Object(a.useState)({handleA:"",handleB:"",isSubmitted:!1}),b=Object(i.a)(d,2),m=b[0],h=b[1],j=function(e){e.preventDefault(),h({handleA:t,handleB:c,isSubmitted:!0},console.log("Submitted"))};return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)("div",{className:"row top-input-row",children:[Object(r.jsxs)("span",{className:"col-lg-6 col-12 top-row",children:[Object(r.jsx)("input",{type:"text",className:"form-control",name:"handleA",placeholder:"handleA",value:t,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("button",{type:"submit",className:"btn btn-dark",onClick:j,children:"Submit"})]}),Object(r.jsxs)("div",{className:"col-lg-6 col-12 top-row",children:[Object(r.jsx)("input",{type:"text",className:"form-control",name:"handleB",placeholder:"handleB",value:c,onChange:function(e){return u(e.target.value)}}),Object(r.jsx)("button",{type:"submit",className:"btn btn-dark",onClick:j,children:"Submit"})]})]}),m.isSubmitted&&Object(r.jsx)(J,{handleA:m.handleA,handleB:m.handleB}),!m.isSubmitted&&Object(r.jsx)("div",{className:"upper-margin",children:"Enter the handles you want to compare"})]})};var G=function(){return console.log("In function App"),Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)(V.a,{children:Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(q,{}),Object(r.jsxs)(P.c,{children:[Object(r.jsx)(P.a,{exact:!0,path:"/",component:F}),Object(r.jsx)(P.a,{exact:!0,path:"/compare",component:U})]})]})})})};o.a.render(Object(r.jsx)(G,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.33bd7a60.chunk.js.map