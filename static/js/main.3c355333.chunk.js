(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);n(25);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),l=n(4),i=n(1),u=n(14),s=n(15),m=n(16),p=n(22),d=n(17),b=n(23),f=n(21),h=n(18),v=n.n(h),x=n(19),y=n.n(x),E=n(20),g=new(n.n(E).a)({locale:["ru","en-US"]});g.disableRule("common/punctuation/hellip");var w={table:"table table-striped table-bordered"},C=Object.keys(w).map(function(e){return{regex:new RegExp("<".concat(e,"(.*)>"),"g"),replace:"<".concat(e,' class="').concat(w[e],'" $1>'),type:"output"}}),k=new y.a.Converter({customizedHeaderId:!0,disableForced4SpacesIndentedSublists:!0,extensions:[].concat(Object(f.a)(C),[function(){return{regex:/<a href="#(.+)">/g,replace:function(e,t){return'<a href="#'.concat(t,'" id="').concat(t,'">')},type:"output"}},function(){return{regex:/<p>(###[\w\-]+)<\/p>/g,replace:function(e,t){return t},type:"output"}}]),ghCompatibleHeaderId:!0,headerLevelStart:3,requireSpaceBeforeHeadingText:!0,tables:!0}),O=function(e){var t=k.makeHtml(e),n=g.execute(t);return v.a.html(n,{indent_size:2})},j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).textarea=r.a.createRef(),n.onConvertBtnClick=function(){var e=n.textarea.current.value,t=O(e);n.props.onConvertBtnClick(t)},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.onConvertBtnClick()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"text-center mb-3 mt-3"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0438\u0437 md \u0432 html."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{className:"text-center"},"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 md"),r.a.createElement("button",{className:"btn btn-primary mb-2",onClick:this.onConvertBtnClick},"\u0421\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("textarea",{className:"form-control",rows:20,ref:this.textarea,defaultValue:"# \u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h4",{className:"text-center"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),r.a.createElement("button",{className:"btn btn-primary float-right mb-2"},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("textarea",{rows:20,className:"form-control",value:this.props.html,readOnly:!0})))))}}]),t}(a.Component),N=Object(l.b)(function(e){return{html:e.html}},function(e){return{onConvertBtnClick:function(t){e({type:"HTML_MARKUP",payload:t})}}})(j),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",t=arguments.length>1?arguments[1]:void 0;return"HTML_MARKUP"===t.type?t.payload:e},H=Object(i.combineReducers)({html:B}),R=Object(i.createStore)(H,Object(u.composeWithDevTools)());o.a.render(r.a.createElement(l.a,{store:R},r.a.createElement(N,null)),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.3c355333.chunk.js.map