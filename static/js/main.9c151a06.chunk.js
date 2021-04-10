(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={contact:"ContactList_contact__1L32D",btn:"ContactList_btn__396FG"}},42:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(13),s=n.n(o),i=n(29),u=n(9),b=n(15),l=n(6),j=n(24),d=n.n(j),m=n(8),h=n(25),O=n.n(h),f=n(11),p=n(3),x=n(48),C=Object(l.b)("contacts/add",(function(t){return{payload:{id:Object(x.a)(),name:t.name,number:t.number}}})),v=Object(l.b)("contacts/delete"),_=Object(l.b)("contacts/filterContacts"),g=Object(l.c)([],(c={},Object(f.a)(c,C,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(f.a)(c,v,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),y=Object(l.c)("",Object(f.a)({},_,(function(t,e){return e.payload}))),N=Object(p.c)({items:g,filter:y}),k={key:"contacts",storage:O.a,blacklist:["filter"]},w=[].concat(Object(b.a)(Object(l.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),[d.a]),A=Object(l.a)({reducer:{contacts:Object(m.g)(k,N)},middleware:w,devTools:!1}),F={store:A,persistor:Object(m.h)(A)},S=n(26),D=(n(42),n(27)),L=n(28),V=n(31),q=n(30),J=n(7),T=n.n(J),z=n(1),B=function(t){Object(V.a)(n,t);var e=Object(q.a)(n);function n(){var t;Object(D.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(f.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(L.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(z.jsxs)("form",{className:T.a.form,onSubmit:this.handleSubmit,children:[Object(z.jsxs)("label",{className:T.a.label,children:["Name",Object(z.jsx)("input",{className:T.a.input,type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(z.jsxs)("label",{className:T.a.label,children:["Number",Object(z.jsx)("input",{className:T.a.input,type:"text",name:"number",value:n,onChange:this.handleChange})]}),Object(z.jsx)("button",{className:T.a.btnAdd,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),E=Object(u.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(C(e))}}}))(B),G=n(20),I=n.n(G),M=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},P=Object(u.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{contacts:M(n,c)}}),(function(t){return{onDeleteContact:function(e){return t(v(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(z.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(z.jsxs)("li",{className:I.a.contact,children:[Object(z.jsxs)("p",{children:[c,": "]}),Object(z.jsx)("p",{children:a}),Object(z.jsx)("button",{className:I.a.btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),Q=Object(u.b)((function(t){return{filterValue:t.contacts.filter}}),(function(t){return{onChangeFilter:function(e){return t(_(e.target.value))}}}))((function(t){var e=t.filterValue,n=t.onChangeFilter;return Object(z.jsxs)("label",{className:T.a.label,children:["Find contacts by name",Object(z.jsx)("input",{className:T.a.input,type:"text",value:e,onChange:n})]})})),H=(n(44),function(){return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)("h1",{children:" Phonebook task #5"}),Object(z.jsx)(E,{}),Object(z.jsx)("h2",{children:"Contacts"}),Object(z.jsx)(Q,{}),Object(z.jsx)(P,{})]})});s.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(u.a,{store:F.store,children:Object(z.jsx)(S.a,{persistor:F.persistor,children:Object(z.jsx)(i.a,{children:Object(z.jsx)(H,{})})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__3-VN3",input:"ContactForm_input__214al",btnAdd:"ContactForm_btnAdd__3ATqC",label:"ContactForm_label__QqumO"}}},[[46,1,2]]]);
//# sourceMappingURL=main.9c151a06.chunk.js.map