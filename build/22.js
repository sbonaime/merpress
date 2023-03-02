"use strict";(self.webpackChunkmerpress=self.webpackChunkmerpress||[]).push([[22],{8022:function(e,n,r){r.d(n,{bK:function(){return te}});var t=r(2819),o=r(6003);class i{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,n=e._prev;if(n!==e)return a(n),n}enqueue(e){var n=this._sentinel;e._prev&&e._next&&a(e),e._next=n._next,n._next._prev=e,n._next=e,e._prev=n}toString(){for(var e=[],n=this._sentinel,r=n._prev;r!==n;)e.push(JSON.stringify(r,s)),r=r._prev;return"["+e.join(", ")+"]"}}function a(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function s(e,n){if("_next"!==e&&"_prev"!==e)return n}var u=t.constant(1);function d(e,n,r,o,i){var a=i?[]:void 0;return t.forEach(e.inEdges(o.v),(function(t){var o=e.edge(t),s=e.node(t.v);i&&a.push({v:t.v,w:t.w}),s.out-=o,h(n,r,s)})),t.forEach(e.outEdges(o.v),(function(t){var o=e.edge(t),i=t.w,a=e.node(i);a.in-=o,h(n,r,a)})),e.removeNode(o.v),a}function h(e,n,r){r.out?r.in?e[r.out-r.in+n].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}function c(e){var n="greedy"===e.graph().acyclicer?function(e,n){if(e.nodeCount()<=1)return[];var r=function(e,n){var r=new o.k,a=0,s=0;t.forEach(e.nodes(),(function(e){r.setNode(e,{v:e,in:0,out:0})})),t.forEach(e.edges(),(function(e){var t=r.edge(e.v,e.w)||0,o=n(e),i=t+o;r.setEdge(e.v,e.w,i),s=Math.max(s,r.node(e.v).out+=o),a=Math.max(a,r.node(e.w).in+=o)}));var u=t.range(s+a+3).map((function(){return new i})),d=a+1;return t.forEach(r.nodes(),(function(e){h(u,d,r.node(e))})),{graph:r,buckets:u,zeroIdx:d}}(e,n||u),a=function(e,n,r){for(var t,o=[],i=n[n.length-1],a=n[0];e.nodeCount();){for(;t=a.dequeue();)d(e,n,r,t);for(;t=i.dequeue();)d(e,n,r,t);if(e.nodeCount())for(var s=n.length-2;s>0;--s)if(t=n[s].dequeue()){o=o.concat(d(e,n,r,t,!0));break}}return o}(r.graph,r.buckets,r.zeroIdx);return t.flatten(t.map(a,(function(n){return e.outEdges(n.v,n.w)})))}(e,function(e){return function(n){return e.edge(n).weight}}(e)):function(e){var n=[],r={},o={};return t.forEach(e.nodes(),(function i(a){t.has(o,a)||(o[a]=!0,r[a]=!0,t.forEach(e.outEdges(a),(function(e){t.has(r,e.w)?n.push(e):i(e.w)})),delete r[a])})),n}(e);t.forEach(n,(function(n){var r=e.edge(n);e.removeEdge(n),r.forwardName=n.name,r.reversed=!0,e.setEdge(n.w,n.v,r,t.uniqueId("rev"))}))}function f(e,n,r,o){var i;do{i=t.uniqueId(o)}while(e.hasNode(i));return r.dummy=n,e.setNode(i,r),i}function g(e){var n=new o.k({multigraph:e.isMultigraph()}).setGraph(e.graph());return t.forEach(e.nodes(),(function(r){e.children(r).length||n.setNode(r,e.node(r))})),t.forEach(e.edges(),(function(r){n.setEdge(r,e.edge(r))})),n}function v(e,n){var r,t,o=e.x,i=e.y,a=n.x-o,s=n.y-i,u=e.width/2,d=e.height/2;if(!a&&!s)throw new Error("Not possible to find intersection inside of the rectangle");return Math.abs(s)*u>Math.abs(a)*d?(s<0&&(d=-d),r=d*a/s,t=d):(a<0&&(u=-u),r=u,t=u*s/a),{x:o+r,y:i+t}}function l(e){var n=t.map(t.range(m(e)+1),(function(){return[]}));return t.forEach(e.nodes(),(function(r){var o=e.node(r),i=o.rank;t.isUndefined(i)||(n[i][o.order]=r)})),n}function p(e,n,r,t){var o={width:0,height:0};return arguments.length>=4&&(o.rank=r,o.order=t),f(e,"border",o,n)}function m(e){return t.max(t.map(e.nodes(),(function(n){var r=e.node(n).rank;if(!t.isUndefined(r))return r})))}function E(e,n){var r=t.now();try{return n()}finally{console.log(e+" time: "+(t.now()-r)+"ms")}}function w(e,n){return n()}function b(e,n,r,t,o,i){var a={width:0,height:0,rank:i,borderType:n},s=o[n][i-1],u=f(e,"border",a,r);o[n][i]=u,e.setParent(u,t),s&&e.setEdge(s,u,{weight:1})}function _(e){t.forEach(e.nodes(),(function(n){y(e.node(n))})),t.forEach(e.edges(),(function(n){y(e.edge(n))}))}function y(e){var n=e.width;e.width=e.height,e.height=n}function k(e){e.y=-e.y}function x(e){var n=e.x;e.x=e.y,e.y=n}function N(e){var n={};t.forEach(e.sources(),(function r(o){var i=e.node(o);if(t.has(n,o))return i.rank;n[o]=!0;var a=t.min(t.map(e.outEdges(o),(function(n){return r(n.w)-e.edge(n).minlen})));return a!==Number.POSITIVE_INFINITY&&null!=a||(a=0),i.rank=a}))}function C(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function I(e){var n,r,t=new o.k({directed:!1}),i=e.nodes()[0],a=e.nodeCount();for(t.setNode(i,{});L(t,e)<a;)n=M(t,e),r=t.hasNode(n.v)?C(e,n):-C(e,n),R(t,e,r);return t}function L(e,n){return t.forEach(e.nodes(),(function r(o){t.forEach(n.nodeEdges(o),(function(t){var i=t.v,a=o===i?t.w:i;e.hasNode(a)||C(n,t)||(e.setNode(a,{}),e.setEdge(o,a,{}),r(a))}))})),e.nodeCount()}function M(e,n){return t.minBy(n.edges(),(function(r){if(e.hasNode(r.v)!==e.hasNode(r.w))return C(n,r)}))}function R(e,n,r){t.forEach(e.nodes(),(function(e){n.node(e).rank+=r}))}function T(e,n,r){t.isArray(n)||(n=[n]);var o=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],a={};return t.each(n,(function(n){if(!e.hasNode(n))throw new Error("Graph does not have node: "+n);P(e,n,"post"===r,a,o,i)})),i}function P(e,n,r,o,i,a){t.has(o,n)||(o[n]=!0,r||a.push(n),t.each(i(n),(function(n){P(e,n,r,o,i,a)})),r&&a.push(n))}function F(e){e=function(e){var n=(new o.k).setGraph(e.graph());return t.forEach(e.nodes(),(function(r){n.setNode(r,e.node(r))})),t.forEach(e.edges(),(function(r){var t=n.edge(r.v,r.w)||{weight:0,minlen:1},o=e.edge(r);n.setEdge(r.v,r.w,{weight:t.weight+o.weight,minlen:Math.max(t.minlen,o.minlen)})})),n}(e),N(e);var n,r=I(e);for(B(r),O(r,e);n=j(r);)V(r,e,n,U(r,e,n))}function O(e,n){var r=function(e,n){return T(e,n,"post")}(e,e.nodes());r=r.slice(0,r.length-1),t.forEach(r,(function(r){!function(e,n,r){var t=e.node(r).parent;e.edge(r,t).cutvalue=D(e,n,r)}(e,n,r)}))}function D(e,n,r){var o=e.node(r).parent,i=!0,a=n.edge(r,o),s=0;return a||(i=!1,a=n.edge(o,r)),s=a.weight,t.forEach(n.nodeEdges(r),(function(t){var a,u,d=t.v===r,h=d?t.w:t.v;if(h!==o){var c=d===i,f=n.edge(t).weight;if(s+=c?f:-f,a=r,u=h,e.hasEdge(a,u)){var g=e.edge(r,h).cutvalue;s+=c?-g:g}}})),s}function B(e,n){arguments.length<2&&(n=e.nodes()[0]),S(e,{},1,n)}function S(e,n,r,o,i){var a=r,s=e.node(o);return n[o]=!0,t.forEach(e.neighbors(o),(function(i){t.has(n,i)||(r=S(e,n,r,i,o))})),s.low=a,s.lim=r++,i?s.parent=i:delete s.parent,r}function j(e){return t.find(e.edges(),(function(n){return e.edge(n).cutvalue<0}))}function U(e,n,r){var o=r.v,i=r.w;n.hasEdge(o,i)||(o=r.w,i=r.v);var a=e.node(o),s=e.node(i),u=a,d=!1;a.lim>s.lim&&(u=s,d=!0);var h=t.filter(n.edges(),(function(n){return d===G(0,e.node(n.v),u)&&d!==G(0,e.node(n.w),u)}));return t.minBy(h,(function(e){return C(n,e)}))}function V(e,n,r,o){var i=r.v,a=r.w;e.removeEdge(i,a),e.setEdge(o.v,o.w,{}),B(e),O(e,n),function(e,n){var r=t.find(e.nodes(),(function(e){return!n.node(e).parent})),o=function(e,n){return T(e,n,"pre")}(e,r);o=o.slice(1),t.forEach(o,(function(r){var t=e.node(r).parent,o=n.edge(r,t),i=!1;o||(o=n.edge(t,r),i=!0),n.node(r).rank=n.node(t).rank+(i?o.minlen:-o.minlen)}))}(e,n)}function G(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}function q(e){switch(e.graph().ranker){case"network-simplex":default:!function(e){F(e)}(e);break;case"tight-tree":!function(e){N(e),I(e)}(e);break;case"longest-path":Y(e)}}t.constant(1),t.constant(1),new Error,r(7896),F.initLowLimValues=B,F.initCutValues=O,F.calcCutValue=D,F.leaveEdge=j,F.enterEdge=U,F.exchangeEdges=V;var Y=N;function z(e){var n=f(e,"root",{},"_root"),r=function(e){var n={};function r(o,i){var a=e.children(o);a&&a.length&&t.forEach(a,(function(e){r(e,i+1)})),n[o]=i}return t.forEach(e.children(),(function(e){r(e,1)})),n}(e),o=t.max(t.values(r))-1,i=2*o+1;e.graph().nestingRoot=n,t.forEach(e.edges(),(function(n){e.edge(n).minlen*=i}));var a=function(e){return t.reduce(e.edges(),(function(n,r){return n+e.edge(r).weight}),0)}(e)+1;t.forEach(e.children(),(function(t){A(e,n,i,a,o,r,t)})),e.graph().nodeRankFactor=i}function A(e,n,r,o,i,a,s){var u=e.children(s);if(u.length){var d=p(e,"_bt"),h=p(e,"_bb"),c=e.node(s);e.setParent(d,s),c.borderTop=d,e.setParent(h,s),c.borderBottom=h,t.forEach(u,(function(t){A(e,n,r,o,i,a,t);var u=e.node(t),c=u.borderTop?u.borderTop:t,f=u.borderBottom?u.borderBottom:t,g=u.borderTop?o:2*o,v=c!==f?1:i-a[s]+1;e.setEdge(d,c,{weight:g,minlen:v,nestingEdge:!0}),e.setEdge(f,h,{weight:g,minlen:v,nestingEdge:!0})})),e.parent(s)||e.setEdge(n,d,{weight:0,minlen:i+a[s]})}else s!==n&&e.setEdge(n,s,{weight:0,minlen:r})}function J(e,n){for(var r=0,t=1;t<n.length;++t)r+=K(e,n[t-1],n[t]);return r}function K(e,n,r){for(var o=t.zipObject(r,t.map(r,(function(e,n){return n}))),i=t.flatten(t.map(n,(function(n){return t.sortBy(t.map(e.outEdges(n),(function(n){return{pos:o[n.w],weight:e.edge(n).weight}})),"pos")}))),a=1;a<r.length;)a<<=1;var s=2*a-1;a-=1;var u=t.map(new Array(s),(function(){return 0})),d=0;return t.forEach(i.forEach((function(e){var n=e.pos+a;u[n]+=e.weight;for(var r=0;n>0;)n%2&&(r+=u[n+1]),u[n=n-1>>1]+=e.weight;d+=e.weight*r}))),d}function H(e,n){var r,o=function(e,n){var r={lhs:[],rhs:[]};return t.forEach(e,(function(e){var n;n=e,t.has(n,"barycenter")?r.lhs.push(e):r.rhs.push(e)})),r}(e),i=o.lhs,a=t.sortBy(o.rhs,(function(e){return-e.i})),s=[],u=0,d=0,h=0;i.sort((r=!!n,function(e,n){return e.barycenter<n.barycenter?-1:e.barycenter>n.barycenter?1:r?n.i-e.i:e.i-n.i})),h=Q(s,a,h),t.forEach(i,(function(e){h+=e.vs.length,s.push(e.vs),u+=e.barycenter*e.weight,d+=e.weight,h=Q(s,a,h)}));var c={vs:t.flatten(s)};return d&&(c.barycenter=u/d,c.weight=d),c}function Q(e,n,r){for(var o;n.length&&(o=t.last(n)).i<=r;)n.pop(),e.push(o.vs),r++;return r}function W(e,n,r,o){var i=e.children(n),a=e.node(n),s=a?a.borderLeft:void 0,u=a?a.borderRight:void 0,d={};s&&(i=t.filter(i,(function(e){return e!==s&&e!==u})));var h=function(e,n){return t.map(n,(function(n){var r=e.inEdges(n);if(r.length){var o=t.reduce(r,(function(n,r){var t=e.edge(r),o=e.node(r.v);return{sum:n.sum+t.weight*o.order,weight:n.weight+t.weight}}),{sum:0,weight:0});return{v:n,barycenter:o.sum/o.weight,weight:o.weight}}return{v:n}}))}(e,i);t.forEach(h,(function(n){if(e.children(n.v).length){var i=W(e,n.v,r,o);d[n.v]=i,t.has(i,"barycenter")&&(a=n,s=i,t.isUndefined(a.barycenter)?(a.barycenter=s.barycenter,a.weight=s.weight):(a.barycenter=(a.barycenter*a.weight+s.barycenter*s.weight)/(a.weight+s.weight),a.weight+=s.weight))}var a,s}));var c=function(e,n){var r={};return t.forEach(e,(function(e,n){var o=r[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:n};t.isUndefined(e.barycenter)||(o.barycenter=e.barycenter,o.weight=e.weight)})),t.forEach(n.edges(),(function(e){var n=r[e.v],o=r[e.w];t.isUndefined(n)||t.isUndefined(o)||(o.indegree++,n.out.push(r[e.w]))})),function(e){var n=[];function r(e){return function(n){var r,o,i,a;n.merged||(t.isUndefined(n.barycenter)||t.isUndefined(e.barycenter)||n.barycenter>=e.barycenter)&&(o=n,i=0,a=0,(r=e).weight&&(i+=r.barycenter*r.weight,a+=r.weight),o.weight&&(i+=o.barycenter*o.weight,a+=o.weight),r.vs=o.vs.concat(r.vs),r.barycenter=i/a,r.weight=a,r.i=Math.min(o.i,r.i),o.merged=!0)}}function o(n){return function(r){r.in.push(n),0==--r.indegree&&e.push(r)}}for(;e.length;){var i=e.pop();n.push(i),t.forEach(i.in.reverse(),r(i)),t.forEach(i.out,o(i))}return t.map(t.filter(n,(function(e){return!e.merged})),(function(e){return t.pick(e,["vs","i","barycenter","weight"])}))}(t.filter(r,(function(e){return!e.indegree})))}(h,r);!function(e,n){t.forEach(e,(function(e){e.vs=t.flatten(e.vs.map((function(e){return n[e]?n[e].vs:e})))}))}(c,d);var f=H(c,o);if(s&&(f.vs=t.flatten([s,f.vs,u]),e.predecessors(s).length)){var g=e.node(e.predecessors(s)[0]),v=e.node(e.predecessors(u)[0]);t.has(f,"barycenter")||(f.barycenter=0,f.weight=0),f.barycenter=(f.barycenter*f.weight+g.order+v.order)/(f.weight+2),f.weight+=2}return f}function X(e,n,r){return t.map(n,(function(n){return function(e,n,r){var i=function(e){for(var n;e.hasNode(n=t.uniqueId("_root")););return n}(e),a=new o.k({compound:!0}).setGraph({root:i}).setDefaultNodeLabel((function(n){return e.node(n)}));return t.forEach(e.nodes(),(function(o){var s=e.node(o),u=e.parent(o);(s.rank===n||s.minRank<=n&&n<=s.maxRank)&&(a.setNode(o),a.setParent(o,u||i),t.forEach(e[r](o),(function(n){var r=n.v===o?n.w:n.v,i=a.edge(r,o),s=t.isUndefined(i)?0:i.weight;a.setEdge(r,o,{weight:e.edge(n).weight+s})})),t.has(s,"minRank")&&a.setNode(o,{borderLeft:s.borderLeft[n],borderRight:s.borderRight[n]}))})),a}(e,n,r)}))}function Z(e,n){var r=new o.k;t.forEach(e,(function(e){var o=e.graph().root,i=W(e,o,r,n);t.forEach(i.vs,(function(n,r){e.node(n).order=r})),function(e,n,r){var o,i={};t.forEach(r,(function(r){for(var t,a,s=e.parent(r);s;){if((t=e.parent(s))?(a=i[t],i[t]=s):(a=o,o=s),a&&a!==s)return void n.setEdge(a,s);s=t}}))}(e,r,i.vs)}))}function $(e,n){t.forEach(n,(function(n){t.forEach(n,(function(n,r){e.node(n).order=r}))}))}function ee(e,n,r){if(n>r){var t=n;n=r,r=t}var o=e[n];o||(e[n]=o={}),o[r]=!0}function ne(e,n,r){if(n>r){var o=n;n=r,r=o}return t.has(e[n],r)}function re(e){var n,r=l(e),i=t.merge(function(e,n){var r={};return t.reduce(n,(function(n,o){var i=0,a=0,s=n.length,u=t.last(o);return t.forEach(o,(function(n,d){var h=function(e,n){if(e.node(n).dummy)return t.find(e.predecessors(n),(function(n){return e.node(n).dummy}))}(e,n),c=h?e.node(h).order:s;(h||n===u)&&(t.forEach(o.slice(a,d+1),(function(n){t.forEach(e.predecessors(n),(function(t){var o=e.node(t),a=o.order;!(a<i||c<a)||o.dummy&&e.node(n).dummy||ee(r,t,n)}))})),a=d+1,i=c)})),o})),r}(e,r),function(e,n){var r={};function o(n,o,i,a,s){var u;t.forEach(t.range(o,i),(function(o){u=n[o],e.node(u).dummy&&t.forEach(e.predecessors(u),(function(n){var t=e.node(n);t.dummy&&(t.order<a||t.order>s)&&ee(r,n,u)}))}))}return t.reduce(n,(function(n,r){var i,a=-1,s=0;return t.forEach(r,(function(t,u){if("border"===e.node(t).dummy){var d=e.predecessors(t);d.length&&(i=e.node(d[0]).order,o(r,s,u,a,i),s=u,a=i)}o(r,s,r.length,i,n.length)})),r})),r}(e,r)),a={};t.forEach(["u","d"],(function(s){n="u"===s?r:t.values(r).reverse(),t.forEach(["l","r"],(function(r){"r"===r&&(n=t.map(n,(function(e){return t.values(e).reverse()})));var u=("u"===s?e.predecessors:e.successors).bind(e),d=function(e,n,r,o){var i={},a={},s={};return t.forEach(n,(function(e){t.forEach(e,(function(e,n){i[e]=e,a[e]=e,s[e]=n}))})),t.forEach(n,(function(e){var n=-1;t.forEach(e,(function(e){var u=o(e);if(u.length){u=t.sortBy(u,(function(e){return s[e]}));for(var d=(u.length-1)/2,h=Math.floor(d),c=Math.ceil(d);h<=c;++h){var f=u[h];a[e]===e&&n<s[f]&&!ne(r,e,f)&&(a[f]=e,a[e]=i[e]=i[f],n=s[f])}}}))})),{root:i,align:a}}(0,n,i,u),h=function(e,n,r,i,a){var s={},u=function(e,n,r,i){var a=new o.k,s=e.graph(),u=function(e,n,r){return function(o,i,a){var s,u=o.node(i),d=o.node(a),h=0;if(h+=u.width/2,t.has(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":s=-u.width/2;break;case"r":s=u.width/2}if(s&&(h+=r?s:-s),s=0,h+=(u.dummy?n:e)/2,h+=(d.dummy?n:e)/2,h+=d.width/2,t.has(d,"labelpos"))switch(d.labelpos.toLowerCase()){case"l":s=d.width/2;break;case"r":s=-d.width/2}return s&&(h+=r?s:-s),s=0,h}}(s.nodesep,s.edgesep,i);return t.forEach(n,(function(n){var o;t.forEach(n,(function(n){var t=r[n];if(a.setNode(t),o){var i=r[o],s=a.edge(i,t);a.setEdge(i,t,Math.max(u(e,n,o),s||0))}o=n}))})),a}(e,n,r,a),d=a?"borderLeft":"borderRight";function h(e,n){for(var r=u.nodes(),t=r.pop(),o={};t;)o[t]?e(t):(o[t]=!0,r.push(t),r=r.concat(n(t))),t=r.pop()}return h((function(e){s[e]=u.inEdges(e).reduce((function(e,n){return Math.max(e,s[n.v]+u.edge(n))}),0)}),u.predecessors.bind(u)),h((function(n){var r=u.outEdges(n).reduce((function(e,n){return Math.min(e,s[n.w]-u.edge(n))}),Number.POSITIVE_INFINITY),t=e.node(n);r!==Number.POSITIVE_INFINITY&&t.borderType!==d&&(s[n]=Math.max(s[n],r))}),u.successors.bind(u)),t.forEach(i,(function(e){s[e]=s[r[e]]})),s}(e,n,d.root,d.align,"r"===r);"r"===r&&(h=t.mapValues(h,(function(e){return-e}))),a[s+r]=h}))}));var s=function(e,n){return t.minBy(t.values(n),(function(n){var r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;return t.forIn(n,(function(n,t){var i=function(e,n){return e.node(n).width}(e,t)/2;r=Math.max(n+i,r),o=Math.min(n-i,o)})),r-o}))}(e,a);return function(e,n){var r=t.values(n),o=t.min(r),i=t.max(r);t.forEach(["u","d"],(function(r){t.forEach(["l","r"],(function(a){var s,u=r+a,d=e[u];if(d!==n){var h=t.values(d);(s="l"===a?o-t.min(h):i-t.max(h))&&(e[u]=t.mapValues(d,(function(e){return e+s})))}}))}))}(a,s),function(e,n){return t.mapValues(e.ul,(function(r,o){if(n)return e[n.toLowerCase()][o];var i=t.sortBy(t.map(e,o));return(i[1]+i[2])/2}))}(a,e.graph().align)}function te(e,n){var r=n&&n.debugTiming?E:w;r("layout",(function(){var n=r("  buildLayoutGraph",(function(){return function(e){var n=new o.k({multigraph:!0,compound:!0}),r=ge(e.graph());return n.setGraph(t.merge({},ie,fe(r,oe),t.pick(r,ae))),t.forEach(e.nodes(),(function(r){var o=ge(e.node(r));n.setNode(r,t.defaults(fe(o,se),ue)),n.setParent(r,e.parent(r))})),t.forEach(e.edges(),(function(r){var o=ge(e.edge(r));n.setEdge(r,t.merge({},he,fe(o,de),t.pick(o,ce)))})),n}(e)}));r("  runLayout",(function(){!function(e,n){n("    makeSpaceForEdgeLabels",(function(){!function(e){var n=e.graph();n.ranksep/=2,t.forEach(e.edges(),(function(r){var t=e.edge(r);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===n.rankdir||"BT"===n.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset)}))}(e)})),n("    removeSelfEdges",(function(){!function(e){t.forEach(e.edges(),(function(n){if(n.v===n.w){var r=e.node(n.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}}))}(e)})),n("    acyclic",(function(){c(e)})),n("    nestingGraph.run",(function(){z(e)})),n("    rank",(function(){q(g(e))})),n("    injectEdgeLabelProxies",(function(){!function(e){t.forEach(e.edges(),(function(n){var r=e.edge(n);if(r.width&&r.height){var t=e.node(n.v),o={rank:(e.node(n.w).rank-t.rank)/2+t.rank,e:n};f(e,"edge-proxy",o,"_ep")}}))}(e)})),n("    removeEmptyRanks",(function(){!function(e){var n=t.min(t.map(e.nodes(),(function(n){return e.node(n).rank}))),r=[];t.forEach(e.nodes(),(function(t){var o=e.node(t).rank-n;r[o]||(r[o]=[]),r[o].push(t)}));var o=0,i=e.graph().nodeRankFactor;t.forEach(r,(function(n,r){t.isUndefined(n)&&r%i!=0?--o:o&&t.forEach(n,(function(n){e.node(n).rank+=o}))}))}(e)})),n("    nestingGraph.cleanup",(function(){!function(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,t.forEach(e.edges(),(function(n){e.edge(n).nestingEdge&&e.removeEdge(n)}))}(e)})),n("    normalizeRanks",(function(){!function(e){var n=t.min(t.map(e.nodes(),(function(n){return e.node(n).rank})));t.forEach(e.nodes(),(function(r){var o=e.node(r);t.has(o,"rank")&&(o.rank-=n)}))}(e)})),n("    assignRankMinMax",(function(){!function(e){var n=0;t.forEach(e.nodes(),(function(r){var o=e.node(r);o.borderTop&&(o.minRank=e.node(o.borderTop).rank,o.maxRank=e.node(o.borderBottom).rank,n=t.max(n,o.maxRank))})),e.graph().maxRank=n}(e)})),n("    removeEdgeLabelProxies",(function(){!function(e){t.forEach(e.nodes(),(function(n){var r=e.node(n);"edge-proxy"===r.dummy&&(e.edge(r.e).labelRank=r.rank,e.removeNode(n))}))}(e)})),n("    normalize.run",(function(){!function(e){e.graph().dummyChains=[],t.forEach(e.edges(),(function(n){!function(e,n){var r,t,o,i=n.v,a=e.node(i).rank,s=n.w,u=e.node(s).rank,d=n.name,h=e.edge(n),c=h.labelRank;if(u!==a+1){for(e.removeEdge(n),o=0,++a;a<u;++o,++a)h.points=[],r=f(e,"edge",t={width:0,height:0,edgeLabel:h,edgeObj:n,rank:a},"_d"),a===c&&(t.width=h.width,t.height=h.height,t.dummy="edge-label",t.labelpos=h.labelpos),e.setEdge(i,r,{weight:h.weight},d),0===o&&e.graph().dummyChains.push(r),i=r;e.setEdge(i,s,{weight:h.weight},d)}}(e,n)}))}(e)})),n("    parentDummyChains",(function(){!function(e){var n=function(e){var n={},r=0;return t.forEach(e.children(),(function o(i){var a=r;t.forEach(e.children(i),o),n[i]={low:a,lim:r++}})),n}(e);t.forEach(e.graph().dummyChains,(function(r){for(var t=e.node(r),o=t.edgeObj,i=function(e,n,r,t){var o,i,a=[],s=[],u=Math.min(n[r].low,n[t].low),d=Math.max(n[r].lim,n[t].lim);o=r;do{o=e.parent(o),a.push(o)}while(o&&(n[o].low>u||d>n[o].lim));for(i=o,o=t;(o=e.parent(o))!==i;)s.push(o);return{path:a.concat(s.reverse()),lca:i}}(e,n,o.v,o.w),a=i.path,s=i.lca,u=0,d=a[u],h=!0;r!==o.w;){if(t=e.node(r),h){for(;(d=a[u])!==s&&e.node(d).maxRank<t.rank;)u++;d===s&&(h=!1)}if(!h){for(;u<a.length-1&&e.node(d=a[u+1]).minRank<=t.rank;)u++;d=a[u]}e.setParent(r,d),r=e.successors(r)[0]}}))}(e)})),n("    addBorderSegments",(function(){!function(e){t.forEach(e.children(),(function n(r){var o=e.children(r),i=e.node(r);if(o.length&&t.forEach(o,n),t.has(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var a=i.minRank,s=i.maxRank+1;a<s;++a)b(e,"borderLeft","_bl",r,i,a),b(e,"borderRight","_br",r,i,a)}}))}(e)})),n("    order",(function(){!function(e){var n=m(e),r=X(e,t.range(1,n+1),"inEdges"),o=X(e,t.range(n-1,-1,-1),"outEdges"),i=function(e){var n={},r=t.filter(e.nodes(),(function(n){return!e.children(n).length})),o=t.max(t.map(r,(function(n){return e.node(n).rank}))),i=t.map(t.range(o+1),(function(){return[]})),a=t.sortBy(r,(function(n){return e.node(n).rank}));return t.forEach(a,(function r(o){if(!t.has(n,o)){n[o]=!0;var a=e.node(o);i[a.rank].push(o),t.forEach(e.successors(o),r)}})),i}(e);$(e,i);for(var a,s=Number.POSITIVE_INFINITY,u=0,d=0;d<4;++u,++d){Z(u%2?r:o,u%4>=2);var h=J(e,i=l(e));h<s&&(d=0,a=t.cloneDeep(i),s=h)}$(e,a)}(e)})),n("    insertSelfEdges",(function(){!function(e){var n=l(e);t.forEach(n,(function(n){var r=0;t.forEach(n,(function(n,o){var i=e.node(n);i.order=o+r,t.forEach(i.selfEdges,(function(n){f(e,"selfedge",{width:n.label.width,height:n.label.height,rank:i.rank,order:o+ ++r,e:n.e,label:n.label},"_se")})),delete i.selfEdges}))}))}(e)})),n("    adjustCoordinateSystem",(function(){!function(e){var n=e.graph().rankdir.toLowerCase();"lr"!==n&&"rl"!==n||_(e)}(e)})),n("    position",(function(){!function(e){(function(e){var n=l(e),r=e.graph().ranksep,o=0;t.forEach(n,(function(n){var i=t.max(t.map(n,(function(n){return e.node(n).height})));t.forEach(n,(function(n){e.node(n).y=o+i/2})),o+=i+r}))})(e=g(e)),t.forEach(re(e),(function(n,r){e.node(r).x=n}))}(e)})),n("    positionSelfEdges",(function(){!function(e){t.forEach(e.nodes(),(function(n){var r=e.node(n);if("selfedge"===r.dummy){var t=e.node(r.e.v),o=t.x+t.width/2,i=t.y,a=r.x-o,s=t.height/2;e.setEdge(r.e,r.label),e.removeNode(n),r.label.points=[{x:o+2*a/3,y:i-s},{x:o+5*a/6,y:i-s},{x:o+a,y:i},{x:o+5*a/6,y:i+s},{x:o+2*a/3,y:i+s}],r.label.x=r.x,r.label.y=r.y}}))}(e)})),n("    removeBorderNodes",(function(){!function(e){t.forEach(e.nodes(),(function(n){if(e.children(n).length){var r=e.node(n),o=e.node(r.borderTop),i=e.node(r.borderBottom),a=e.node(t.last(r.borderLeft)),s=e.node(t.last(r.borderRight));r.width=Math.abs(s.x-a.x),r.height=Math.abs(i.y-o.y),r.x=a.x+r.width/2,r.y=o.y+r.height/2}})),t.forEach(e.nodes(),(function(n){"border"===e.node(n).dummy&&e.removeNode(n)}))}(e)})),n("    normalize.undo",(function(){!function(e){t.forEach(e.graph().dummyChains,(function(n){var r,t=e.node(n),o=t.edgeLabel;for(e.setEdge(t.edgeObj,o);t.dummy;)r=e.successors(n)[0],e.removeNode(n),o.points.push({x:t.x,y:t.y}),"edge-label"===t.dummy&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),n=r,t=e.node(n)}))}(e)})),n("    fixupEdgeLabelCoords",(function(){!function(e){t.forEach(e.edges(),(function(n){var r=e.edge(n);if(t.has(r,"x"))switch("l"!==r.labelpos&&"r"!==r.labelpos||(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset}}))}(e)})),n("    undoCoordinateSystem",(function(){!function(e){var n=e.graph().rankdir.toLowerCase();"bt"!==n&&"rl"!==n||function(e){t.forEach(e.nodes(),(function(n){k(e.node(n))})),t.forEach(e.edges(),(function(n){var r=e.edge(n);t.forEach(r.points,k),t.has(r,"y")&&k(r)}))}(e),"lr"!==n&&"rl"!==n||(function(e){t.forEach(e.nodes(),(function(n){x(e.node(n))})),t.forEach(e.edges(),(function(n){var r=e.edge(n);t.forEach(r.points,x),t.has(r,"x")&&x(r)}))}(e),_(e))}(e)})),n("    translateGraph",(function(){!function(e){var n=Number.POSITIVE_INFINITY,r=0,o=Number.POSITIVE_INFINITY,i=0,a=e.graph(),s=a.marginx||0,u=a.marginy||0;function d(e){var t=e.x,a=e.y,s=e.width,u=e.height;n=Math.min(n,t-s/2),r=Math.max(r,t+s/2),o=Math.min(o,a-u/2),i=Math.max(i,a+u/2)}t.forEach(e.nodes(),(function(n){d(e.node(n))})),t.forEach(e.edges(),(function(n){var r=e.edge(n);t.has(r,"x")&&d(r)})),n-=s,o-=u,t.forEach(e.nodes(),(function(r){var t=e.node(r);t.x-=n,t.y-=o})),t.forEach(e.edges(),(function(r){var i=e.edge(r);t.forEach(i.points,(function(e){e.x-=n,e.y-=o})),t.has(i,"x")&&(i.x-=n),t.has(i,"y")&&(i.y-=o)})),a.width=r-n+s,a.height=i-o+u}(e)})),n("    assignNodeIntersects",(function(){!function(e){t.forEach(e.edges(),(function(n){var r,t,o=e.edge(n),i=e.node(n.v),a=e.node(n.w);o.points?(r=o.points[0],t=o.points[o.points.length-1]):(o.points=[],r=a,t=i),o.points.unshift(v(i,r)),o.points.push(v(a,t))}))}(e)})),n("    reversePoints",(function(){!function(e){t.forEach(e.edges(),(function(n){var r=e.edge(n);r.reversed&&r.points.reverse()}))}(e)})),n("    acyclic.undo",(function(){!function(e){t.forEach(e.edges(),(function(n){var r=e.edge(n);if(r.reversed){e.removeEdge(n);var t=r.forwardName;delete r.reversed,delete r.forwardName,e.setEdge(n.w,n.v,r,t)}}))}(e)}))}(n,r)})),r("  updateInputGraph",(function(){!function(e,n){t.forEach(e.nodes(),(function(r){var t=e.node(r),o=n.node(r);t&&(t.x=o.x,t.y=o.y,n.children(r).length&&(t.width=o.width,t.height=o.height))})),t.forEach(e.edges(),(function(r){var o=e.edge(r),i=n.edge(r);o.points=i.points,t.has(i,"x")&&(o.x=i.x,o.y=i.y)})),e.graph().width=n.graph().width,e.graph().height=n.graph().height}(e,n)}))}))}var oe=["nodesep","edgesep","ranksep","marginx","marginy"],ie={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},ae=["acyclicer","ranker","rankdir","align"],se=["width","height"],ue={width:0,height:0},de=["minlen","weight","width","height","labeloffset"],he={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},ce=["labelpos"];function fe(e,n){return t.mapValues(t.pick(e,n),Number)}function ge(e){var n={};return t.forEach(e,(function(e,r){n[r.toLowerCase()]=e})),n}},7896:function(e,n,r){r.d(n,{k:function(){return s}});var t=r(2819),o="\0",i="\0",a="";class s{constructor(e={}){this._isDirected=!t.has(e,"directed")||e.directed,this._isMultigraph=!!t.has(e,"multigraph")&&e.multigraph,this._isCompound=!!t.has(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=t.constant(void 0),this._defaultEdgeLabelFn=t.constant(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[i]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return t.isFunction(e)||(e=t.constant(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return t.keys(this._nodes)}sources(){var e=this;return t.filter(this.nodes(),(function(n){return t.isEmpty(e._in[n])}))}sinks(){var e=this;return t.filter(this.nodes(),(function(n){return t.isEmpty(e._out[n])}))}setNodes(e,n){var r=arguments,o=this;return t.each(e,(function(e){r.length>1?o.setNode(e,n):o.setNode(e)})),this}setNode(e,n){return t.has(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=n),this):(this._nodes[e]=arguments.length>1?n:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=i,this._children[e]={},this._children[i][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return t.has(this._nodes,e)}removeNode(e){var n=this;if(t.has(this._nodes,e)){var r=function(e){n.removeEdge(n._edgeObjs[e])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],t.each(this.children(e),(function(e){n.setParent(e)})),delete this._children[e]),t.each(t.keys(this._in[e]),r),delete this._in[e],delete this._preds[e],t.each(t.keys(this._out[e]),r),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,n){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(t.isUndefined(n))n=i;else{for(var r=n+="";!t.isUndefined(r);r=this.parent(r))if(r===e)throw new Error("Setting "+n+" as parent of "+e+" would create a cycle");this.setNode(n)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=n,this._children[n][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var n=this._parent[e];if(n!==i)return n}}children(e){if(t.isUndefined(e)&&(e=i),this._isCompound){var n=this._children[e];if(n)return t.keys(n)}else{if(e===i)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var n=this._preds[e];if(n)return t.keys(n)}successors(e){var n=this._sucs[e];if(n)return t.keys(n)}neighbors(e){var n=this.predecessors(e);if(n)return t.union(n,this.successors(e))}isLeaf(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){var n=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});n.setGraph(this.graph());var r=this;t.each(this._nodes,(function(r,t){e(t)&&n.setNode(t,r)})),t.each(this._edgeObjs,(function(e){n.hasNode(e.v)&&n.hasNode(e.w)&&n.setEdge(e,r.edge(e))}));var o={};function i(e){var t=r.parent(e);return void 0===t||n.hasNode(t)?(o[e]=t,t):t in o?o[t]:i(t)}return this._isCompound&&t.each(n.nodes(),(function(e){n.setParent(e,i(e))})),n}setDefaultEdgeLabel(e){return t.isFunction(e)||(e=t.constant(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return t.values(this._edgeObjs)}setPath(e,n){var r=this,o=arguments;return t.reduce(e,(function(e,t){return o.length>1?r.setEdge(e,t,n):r.setEdge(e,t),t})),this}setEdge(){var e,n,r,o,i=!1,a=arguments[0];"object"==typeof a&&null!==a&&"v"in a?(e=a.v,n=a.w,r=a.name,2===arguments.length&&(o=arguments[1],i=!0)):(e=a,n=arguments[1],r=arguments[3],arguments.length>2&&(o=arguments[2],i=!0)),e=""+e,n=""+n,t.isUndefined(r)||(r=""+r);var s=h(this._isDirected,e,n,r);if(t.has(this._edgeLabels,s))return i&&(this._edgeLabels[s]=o),this;if(!t.isUndefined(r)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(n),this._edgeLabels[s]=i?o:this._defaultEdgeLabelFn(e,n,r);var d=function(e,n,r,t){var o=""+n,i=""+r;if(!e&&o>i){var a=o;o=i,i=a}var s={v:o,w:i};return t&&(s.name=t),s}(this._isDirected,e,n,r);return e=d.v,n=d.w,Object.freeze(d),this._edgeObjs[s]=d,u(this._preds[n],e),u(this._sucs[e],n),this._in[n][s]=d,this._out[e][s]=d,this._edgeCount++,this}edge(e,n,r){var t=1===arguments.length?c(this._isDirected,arguments[0]):h(this._isDirected,e,n,r);return this._edgeLabels[t]}hasEdge(e,n,r){var o=1===arguments.length?c(this._isDirected,arguments[0]):h(this._isDirected,e,n,r);return t.has(this._edgeLabels,o)}removeEdge(e,n,r){var t=1===arguments.length?c(this._isDirected,arguments[0]):h(this._isDirected,e,n,r),o=this._edgeObjs[t];return o&&(e=o.v,n=o.w,delete this._edgeLabels[t],delete this._edgeObjs[t],d(this._preds[n],e),d(this._sucs[e],n),delete this._in[n][t],delete this._out[e][t],this._edgeCount--),this}inEdges(e,n){var r=this._in[e];if(r){var o=t.values(r);return n?t.filter(o,(function(e){return e.v===n})):o}}outEdges(e,n){var r=this._out[e];if(r){var o=t.values(r);return n?t.filter(o,(function(e){return e.w===n})):o}}nodeEdges(e,n){var r=this.inEdges(e,n);if(r)return r.concat(this.outEdges(e,n))}}function u(e,n){e[n]?e[n]++:e[n]=1}function d(e,n){--e[n]||delete e[n]}function h(e,n,r,i){var s=""+n,u=""+r;if(!e&&s>u){var d=s;s=u,u=d}return s+a+u+a+(t.isUndefined(i)?o:i)}function c(e,n){return h(e,n.v,n.w,n.name)}s.prototype._nodeCount=0,s.prototype._edgeCount=0},6003:function(e,n,r){r.d(n,{k:function(){return t.k}});var t=r(7896)}}]);