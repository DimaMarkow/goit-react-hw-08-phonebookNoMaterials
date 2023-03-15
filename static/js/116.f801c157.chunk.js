"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[116],{116:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a=t(434),r=t(791),s=t(634),o="phonebook_wrapper__MfQ3k",c="phonebook_buttonWrapper__rgE61",i="phonebook_title__wIGm2",l="phonebook_btn__hf3rN",u="phonebook_btnDel__frk2j",m="phonebook_contact__ZuVSL",d="phonebook_text__S15cN",h=t(942),p=t(413),f=t(439),b=function(e){return e.contacts.items},x=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},v=function(e){return e.contacts.isLoading},j=function(e){return e.contacts.error},_=t(329),N={name:"",number:""},k=function(){var e=(0,r.useState)(N),n=(0,f.Z)(e,2),t=n[0],o=n[1],u=(0,a.I0)(),m=(0,a.v9)(b),x=function(e){var n=e.target,t=n.name,a=n.value;o((function(e){return(0,p.Z)((0,p.Z)({},e),{},(0,h.Z)({},t,a))}))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h2",{className:i,children:"Phonebook"}),(0,_.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault();var n=t;console.log(n);var a=n.name.toLowerCase();if(m.some((function(e){return e.name.toLowerCase()===a}))){var r=n.name+" is already in contacts.";alert(r)}else u((0,s.uK)((0,p.Z)({},n))),o(N)},children:[(0,_.jsxs)("label",{className:d,children:["Name",(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t.name,onChange:x})]}),(0,_.jsxs)("label",{className:d,children:["Number",(0,_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:t.number,onChange:x})]}),(0,_.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})]})},g=function(){var e=(0,a.v9)(x),n=(0,a.I0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h2",{className:i,children:"Contacts"}),(0,_.jsx)("ul",{className:c,children:e.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,_.jsxs)("li",{className:m,children:[(0,_.jsxs)("p",{className:d,children:[a," ",r]}),(0,_.jsx)("button",{type:"button",className:u,onClick:function(){return e=t,void n((0,s.GK)(e));var e},children:"Delete"})]},t)}))})]})},C=t(653),y=function(e){return e.filter},w=function(){var e=(0,a.I0)(),n=(0,a.v9)(y);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("form",{className:c,children:(0,_.jsxs)("label",{className:d,children:["Find a contact by name",(0,_.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:function(n){e((0,C.T)(n.currentTarget.value))}})]})})})},Z=t(691);function A(){return(0,_.jsx)(Z.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"48",visible:!0})}var z=function(){var e=(0,a.I0)(),n=(0,a.v9)(v),t=(0,a.v9)(j);(0,r.useEffect)((function(){e((0,s.yF)())}),[e]);var c=(0,a.v9)(x),i=Boolean(c.length);return(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)(k,{}),(0,_.jsx)(w,{}),n&&!t&&(0,_.jsx)(A,{}),i&&(0,_.jsx)(g,{}),!i&&!n&&(0,_.jsx)("p",{children:"No contacts in the list"})]})};function F(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(z,{})})}}}]);
//# sourceMappingURL=116.f801c157.chunk.js.map