(this.webpackJsonpbinary=this.webpackJsonpbinary||[]).push([[0],{27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=a(8),s=a(9),l=a(11),u=a(10),h=a(12),m=a(24),p=a(7),b=(a(32),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={true:!1},a.toggleBinary=function(e){a.setState({true:!a.state.true}),a.props.onChange(e,!a.state.true)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"square",id:this.props.index,style:{backgroundColor:this.state.true?"black":"white"},onClick:this.toggleBinary})}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={binary:[]},a.changeBinary=function(e,t){var n=a.state.binary;n[Number(e.target.id)]=t?1:0,a.setState({binary:n})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("Hello");for(var e=[],t=0;t<100;t++)e.push(0);this.setState({binary:e})}},{key:"render",value:function(){for(var e=[],t=0;t<100;t++)e.push(r.a.createElement(b,{key:t,index:t,onChange:this.changeBinary}));return r.a.createElement("div",{className:"main_page"},r.a.createElement("div",{className:"squares"},e),r.a.createElement("div",{className:"binary"},this.state.binary.map((function(e,t){return r.a.createElement("p",{key:t,style:{}},e)}))))}}]),t}(n.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main_container"},r.a.createElement(m.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:y})))))}}]),t}(n.Component);a(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);o.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6f1253c2.chunk.js.map