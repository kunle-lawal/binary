(this.webpackJsonpbinary=this.webpackJsonpbinary||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),i=n(2),s=n(3),l=n(5),u=n(4),m=n(6),p=(n(20),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={true:!1},n.toggleBinary=function(e){n.setState({true:!n.state.true}),n.props.onChange(e,!n.state.true)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"square",id:this.props.index,style:{backgroundColor:this.state.true?"black":"white"},onClick:this.toggleBinary})}}]),t}(a.Component)),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={binary:[]},n.changeBinary=function(e,t){var a=n.state.binary;a[Number(e.target.id)]=t?1:0,n.setState({binary:a})},n.copyText=function(){var e=document.getElementById("myInput");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),console.log(e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("Hello");for(var e=[],t=0;t<100;t++)e.push(0);this.setState({binary:e})}},{key:"render",value:function(){for(var e=[],t=0;t<100;t++)e.push(c.a.createElement(p,{key:t,index:t,onChange:this.changeBinary}));return c.a.createElement("div",{className:"main_page"},c.a.createElement("div",{className:"squares"},e),c.a.createElement("input",{type:"text",value:this.state.binary.join(""),id:"myInput",class:"input"}),c.a.createElement("div",{className:"binary"},c.a.createElement("i",{class:"fas fa-copy",onClick:this.copyText,title:"copy"}),this.state.binary.map((function(e,t){return c.a.createElement("p",{key:t,style:{}},e)}))))}}]),t}(a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"main_container"},c.a.createElement(y,null)))}}]),t}(a.Component);n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(27);o.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fd2782fd.chunk.js.map