"use strict";(self.webpackChunkgestion_documental=self.webpackChunkgestion_documental||[]).push([[532],{532:(e,a,r)=>{r.r(a),r.d(a,{default:()=>i});var t=r(5043),n=(r(3150),r(579));const i=()=>{const[e,a]=(0,t.useState)([]),[r,i]=(0,t.useState)(""),[o,s]=(0,t.useState)(""),[l,u]=(0,t.useState)(""),[c,d]=(0,t.useState)(""),[h,p]=(0,t.useState)(""),[v,m]=(0,t.useState)(""),[x,g]=(0,t.useState)(""),[j,f]=(0,t.useState)(""),[C,S]=(0,t.useState)("");(0,t.useEffect)((()=>{var e;const r=JSON.parse(null!==(e=localStorage.getItem("usuarios"))&&void 0!==e?e:"[]");a(r)}),[]);return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"btn-container",children:(0,n.jsx)("button",{onClick:()=>window.location.href="/loginAdmin",children:"Cerrar sesi\xf3n"})}),(0,n.jsx)("div",{className:"btn-container",children:(0,n.jsx)("button",{onClick:()=>window.location.href="/administrar-Usuarios",children:"Editar usuarios"})}),(0,n.jsx)("h1",{className:"h1",children:"Gesti\xf3n de Informes y Usuarios"}),(0,n.jsxs)("div",{className:"section",children:[(0,n.jsx)("h2",{children:"Administraci\xf3n de Usuarios"}),(0,n.jsxs)("form",{onSubmit:t=>{if(t.preventDefault(),!(r&&o&&l&&c&&h&&v&&j&&C&&x||(alert("Por favor, complete todos los campos obligatorios."),0)))return;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)&&(alert("Por favor, ingrese un correo electr\xf3nico v\xe1lido."),1))return;if(j.length<4&&(alert("La contrase\xf1a debe tener al menos ".concat(4," caracteres.")),1))return;if(j!==C)return void alert("Las contrase\xf1as no coinciden.");const n=[...e,{username:r,nombre:o,apellido:l,correo:c,celular:h,rol:v,departamento:x,contrasena:j}];a(n),localStorage.setItem("usuarios",JSON.stringify(n)),i(""),s(""),u(""),d(""),p(""),m(""),g(""),f(""),S("")},id:"usuarioForm",children:[(0,n.jsx)("input",{type:"text",value:r,onChange:e=>i(e.target.value),placeholder:"Nombre de usuario",required:!0}),(0,n.jsx)("input",{type:"text",value:o,onChange:e=>s(e.target.value),placeholder:"Nombre",required:!0}),(0,n.jsx)("input",{type:"text",value:l,onChange:e=>u(e.target.value),placeholder:"Apellido",required:!0}),(0,n.jsx)("input",{type:"email",value:c,onChange:e=>d(e.target.value),placeholder:"Correo electr\xf3nico",required:!0}),(0,n.jsx)("input",{type:"tel",value:h,onChange:e=>p(e.target.value),placeholder:"N\xfamero de celular",required:!0}),(0,n.jsxs)("select",{value:x,onChange:e=>g(e.target.value),required:!0,children:[(0,n.jsx)("option",{value:"",children:"Seleccione un departamento"}),(0,n.jsx)("option",{value:"informatica",children:"Inform\xe1tica"}),(0,n.jsx)("option",{value:"administracion",children:"Administraci\xf3n"}),(0,n.jsx)("option",{value:"contabilidad",children:"Contabilidad"}),(0,n.jsx)("option",{value:"medicina",children:"Medicina"}),(0,n.jsx)("option",{value:"educacion",children:"educacion"}),(0,n.jsx)("option",{value:"derecho",children:"derecho"})]}),(0,n.jsxs)("select",{value:v,onChange:e=>m(e.target.value),required:!0,children:[(0,n.jsx)("option",{value:"",children:"Seleccione un rol"}),(0,n.jsx)("option",{value:"visualizar",children:"Solo Visualizar"}),(0,n.jsx)("option",{value:"editar",children:"Editar"}),(0,n.jsx)("option",{value:"ninguno",children:"Ninguno"})]}),(0,n.jsx)("input",{type:"password",value:j,onChange:e=>f(e.target.value),placeholder:"Contrase\xf1a",required:!0}),(0,n.jsx)("input",{type:"password",value:C,onChange:e=>S(e.target.value),placeholder:"Verificar Contrase\xf1a",required:!0}),(0,n.jsx)("button",{type:"submit",children:"Crear Usuario"})]})]})]})}},3150:()=>{}}]);
//# sourceMappingURL=532.c4eae7c0.chunk.js.map