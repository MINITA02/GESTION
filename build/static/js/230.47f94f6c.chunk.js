"use strict";(self.webpackChunkgestion_documental=self.webpackChunkgestion_documental||[]).push([[230],{2230:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});var n=o(5043),r=o(3721),a=(o(4616),o(579));const i=()=>{const[e,t]=(0,n.useState)(null),[o,i]=(0,n.useState)(null),[s,c]=(0,n.useState)(null),[l,d]=(0,n.useState)([]),[m,u]=(0,n.useState)(""),[h,p]=(0,n.useState)({});(0,n.useEffect)((()=>{const e=JSON.parse(sessionStorage.getItem("usuarioActual")||"{}");e&&(t(e.rol),i(e.departamento),c(e.nombre));const o=JSON.parse(localStorage.getItem("informes")||"[]");d(o)}),[]);const f=l.filter((e=>e.titulo.toLowerCase().includes(m.toLowerCase())&&e.departamento===o));return"visualizar"!==e&&"editar"!==e?(0,a.jsx)("p",{children:"No tiene el rol necesario para ver los documentos."}):(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{children:"Gesti\xf3n de Informes"}),(0,a.jsx)("input",{type:"text",id:"searchInput",placeholder:"Buscar por t\xedtulo...",value:m,onChange:e=>{u(e.target.value)}}),(0,a.jsx)("div",{id:"informesContainer",children:f.map((e=>(0,a.jsxs)("div",{className:"informe",children:[(0,a.jsx)("h2",{children:e.titulo}),(0,a.jsx)("p",{children:e.informe}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Fecha:"})," ",e.fecha]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Departamento:"})," ",e.departamento]}),(0,a.jsx)("button",{onClick:()=>(e=>{const t=new r.uE,o=l.find((t=>t.id===e));o&&(t.setFontSize(12),t.text("T\xedtulo: ".concat(o.titulo),10,10),t.text("Informe: ".concat(o.informe),10,20),t.text("Fecha: ".concat(o.fecha),10,30),t.text("Departamento: ".concat(o.departamento),10,40),t.save("informe_".concat(o.id,".pdf")))})(e.id),children:"Imprimir Informe"}),(0,a.jsx)("button",{onClick:()=>(e=>{const t=l.find((t=>t.id===e));if(t){const o=prompt("Nuevo t\xedtulo:",t.titulo),n=prompt("Nuevo informe:",t.informe),r=prompt("Nueva fecha:",t.fecha),a=prompt("Nuevo departamento:",t.departamento);if(o&&n&&r&&a){const i={...t,titulo:o,informe:n,fecha:r,departamento:a},s=l.map((t=>t.id===e?i:t));d(s),localStorage.setItem("informes",JSON.stringify(s))}}})(e.id),children:"Editar"}),(0,a.jsx)("button",{onClick:()=>(e=>{const t=l.filter((t=>t.id!==e));d(t),localStorage.setItem("informes",JSON.stringify(t))})(e.id),children:"Borrar"}),(0,a.jsxs)("div",{className:"comentarios",children:[(0,a.jsx)("h3",{children:"Comentarios"}),e.comentarios&&e.comentarios.length>0?(0,a.jsx)("ul",{children:e.comentarios.map(((e,t)=>(0,a.jsxs)("li",{children:[(0,a.jsxs)("strong",{children:[e.usuario,":"]})," ",e.comentario]},t)))}):(0,a.jsx)("p",{children:"No hay comentarios."}),(0,a.jsx)("textarea",{className:"comentarioLabel",placeholder:"Agregar un comentario...",value:h[e.id]||"",onChange:t=>{return o=e.id,n=t.target.value,void p({...h,[o]:n});var o,n}}),(0,a.jsx)("button",{className:"comentarioBoton",onClick:()=>(e=>{const t=h[e];if(t){const o=l.map((o=>{if(o.id===e){const e=[...o.comentarios||[],{usuario:s,comentario:t}];return{...o,comentarios:e}}return o}));d(o),localStorage.setItem("informes",JSON.stringify(o)),p({...h,[e]:""})}})(e.id),children:"Enviar Comentario"})]})]},e.id)))})]})}},4616:()=>{}}]);
//# sourceMappingURL=230.47f94f6c.chunk.js.map