(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(15),c=a.n(n),l=(a(25),a(2)),o=a(3),m=a(5),i=a(4),u=a(6),d=a(8),h=a.n(d),p=a(16),f=a(17),g=a(18),D=a.n(g),E=function(e){var t=e.songData,a=t.releaseDate.slice(0,4),s=t.releaseDate.slice(5,7),n=t.releaseDate.slice(8,10),c="".concat(s,"-").concat(n,"-").concat(a);return r.a.createElement("div",{className:"col-lg-2 col-sm-4 col-md-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top pl-4 pr-4 pt-2",src:t.artworkUrl100,alt:"Song cover",height:"100px"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"text-sm-left card-title font-weight-bold","data-placement":"bottom",title:t.collectionName},t.collectionName),r.a.createElement("p",{className:"text-sm-left card-text"},c))))},N=function(e){var t=e.songs,a=e.resultsReady;return r.a.createElement("div",null,a&&(t.length?r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},t.map(function(e,t){return r.a.createElement(E,{songData:e,key:t})}))):"No results found"))},b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:"",startDate:"",endDate:"",error:"",fetchingData:!1},a.onTextChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.onSearchButtonClick=Object(p.a)(h.a.mark(function e(){var t,s,r,n,c,l,o,m;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({fetchingData:!0}),t=a.formatSearchFields(a.state),s=t.formatedSearchText,r=t.formatedStartDate,n=t.formatedEndDate,c="https://cors-anywhere.herokuapp.com/"+"https://itunes.apple.com/search?term=".concat(s,"&limit=200"),e.prev=3,e.next=6,D.a.get(c);case 6:l=e.sent,o=l.data,m=o.results.filter(function(e){var t=new Date(e.releaseDate);return t>=r&&t<=n}),a.setState({fetchingData:!1},function(){a.props.setResults(m,!0)}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),a.setState({error:e.t0.toString(),fetchingData:!1});case 15:case"end":return e.stop()}},e,this,[[3,12]])})),a.onClearButtonClick=function(){a.setState({searchText:"",startDate:"",endDate:""}),a.props.setResults([],!1)},a.formatSearchFields=function(e){var t,a,s=e.searchText,r=e.startDate,n=e.endDate,c=s.replace(/\s+/g,"+"),l=/\d{2}-\d{2}-\d{4}/;if(r&&l.test(r)){var o=Number(r.slice(0,2))-1,m=Number(r.slice(3,5)),i=Number(r.slice(6,10));t=new Date(i,o,m)}else t=new Date(1900,0,1);if(n&&l.test(n)){var u=Number(n.slice(0,2))-1,d=Number(n.slice(3,5)),h=Number(n.slice(6,10));a=new Date(h,u,d)}else a=Date.now();return{formatedSearchText:c,formatedStartDate:t,formatedEndDate:a}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group column"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"form-group column col-sm-6"},r.a.createElement("label",{htmlFor:"searchText"},"Artist Name:",this.state.searchText?/[^A-Za-z0-9\s]/.test(this.state.searchText)?r.a.createElement("span",{className:"text-danger"}," ","only alpha numeric characters and spaces allowed"):"":r.a.createElement("span",{className:"text-danger"}," required")),r.a.createElement("input",{className:"mr-1 col-sm-8 form-control",required:!0,pattern:"[A-Za-z0-9\\s]+",type:"text",placeholder:"Search songs by artist name",name:"searchText",onChange:this.onTextChange,value:this.state.searchText})),r.a.createElement("div",{className:"form-group column col-sm-6"},r.a.createElement("label",{htmlFor:"startDate"},"Release Date:",this.state.startDate&&!/\d{2}-\d{2}-\d{4}/.test(this.state.startDate)||this.state.endDate&&!/\d{2}-\d{2}-\d{4}/.test(this.state.endDate)?r.a.createElement("span",{className:"text-danger"}," MM-DD-YYYY"):""),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"mr-4 col-sm-1"},"from"),r.a.createElement("input",{className:"mr-1 col-sm-3 form-control",type:"text",placeholder:"MM-DD-YYYY",name:"startDate",onChange:this.onTextChange,value:this.state.startDate}),r.a.createElement("label",{className:"mr-2 col-sm-1"},"to"),r.a.createElement("input",{className:"mr-1 col-sm-3 form-control",type:"text",placeholder:"MM-DD-YYYY",name:"endDate",onChange:this.onTextChange,value:this.state.endDate})))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("button",{className:"col-sm-1 mx-2 btn btn-primary",disabled:!this.state.searchText,onClick:this.onSearchButtonClick},"Search"),r.a.createElement("button",{className:"col-sm-1 mx-2 btn btn-primary",disabled:!this.state.searchText&&!this.state.startDate&&!this.state.endDate&&!this.props.resultsReady,onClick:this.onClearButtonClick},"Clear"))),this.state.fetchingData?r.a.createElement("p",{className:"lead text-center"},"loading... "):this.state.error&&r.a.createElement("p",{className:"text-danger"},this.state.error)||r.a.createElement(N,{songs:this.props.results,resultsReady:this.props.resultsReady}))}}]),t}(s.Component),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={results:[],resultsReady:!1},a.setResults=function(e,t){a.setState({results:e,resultsReady:t})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header clearfix mt-5"},r.a.createElement("h3",{className:"text-muted"},"Itunes Song Search")),r.a.createElement("div",{className:"jumbotron"},r.a.createElement(b,{results:this.state.results,setResults:this.setResults,resultsReady:this.state.resultsReady})))}}]),t}(s.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f28223c7.chunk.js.map