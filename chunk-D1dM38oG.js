import{C as G,Jn as x}from"./chunk-DMecIsi5.js";import{y as Fr}from"./main-56DZYK6F.js";var h=class m{db=x(Fr);async generarLinkWhatsAppSeguimientoAsync(a){let e=await this.db.pedidos.get(a);if(!e)return``;let i=await this.db.detallesPedido.where(`pedidoId`).equals(a).toArray(),n=await Promise.all(i.map(async d=>{let u=await this.db.productos.get(d.productoId);return{nombre:u?u.nombre:`tu pedido`,cantidad:d.cantidad}})),o=e.clienteId?await this.db.clientes.get(e.clienteId):null,l=o?.nombre?o.nombre.split(` `)[0]:``,r=this.construirMensaje(l,n),t=e.telefono?e.telefono.replace(/\D/g,``):``;t.length===10&&(t=`52${t}`);return`${`https://wa.me/${t}`}?${new URLSearchParams({text:r}).toString()}`}async generarLinkWhatsAppReactivacionAsync(a,e){let i=a.nombre?a.nombre.split(` `)[0]:``,n=i?`Hola ${i} \u{1F44B}`:`Hola 👋`,o=``;if(e){let t=await Promise.all(e.detalles.map(async c=>{let d=await this.db.productos.get(c.productoId);return`${c.cantidad>1?c.cantidad+`x `:``}${d?.nombre??`tu pedido`}`}));o=`

La \xFAltima vez te preparamos ${t.length>1?t.slice(0,-1).join(`, `)+` y `+t[t.length-1]:t[0]??`tu pedido`} y todav\xEDa nos acordamos de ti.`}let l=`${n}, \xBFc\xF3mo amaneciste? \u{1F31E}

Ya pas\xF3 un buen tiempo desde tu \xFAltimo pedido${o}

\xBFTe se antoja algo? Cu\xE9ntanos y te lo dejamos listo para hoy. La cocina siempre est\xE1 caliente para ti \u{1F43E}\u{1F373}`,r=this.normalizarTelefono(a.telefono);return r?`https://wa.me/${r}?${new URLSearchParams({text:l}).toString()}`:``}async generarLinkWhatsAppOpinionAsync(a,e,i){let n=this.normalizarTelefono(a.telefono);if(!n)return``;let o=a.nombre?a.nombre.split(` `)[0]:``,t=`${o?`Hola ${o} \u{1F44B}`:`Hola 👋`}, gracias por siempre confiar en *Mishi y Masha* \u{1F43E}

${i>=3?`Como es uno de tus favoritos, nos encantaría saber qué te parece.`:`¿Qué te pareció?`}

\xBFQu\xE9 tal te sali\xF3 nuestro *${e.nombre}*? \u{1F37D}\uFE0F

Nos sirve much\xEDsimo saberlo: si te gust\xF3 lo tenemos m\xE1s seguido, y si algo estuvo fuera de punto lo corregimos para la pr\xF3xima. Sea cual sea tu respuesta, \xA1nos ayuda!

Puedes contestarme por aqu\xED mismo. \u{1F64C}`;return`https://wa.me/${n}?${new URLSearchParams({text:t}).toString()}`}normalizarTelefono(a){let e=a?a.replace(/\D/g,``):``;return e.length===10&&(e=`52${e}`),e}construirMensaje(a,e){let i=a?`\xA1Hola ${a}! \u{1F44B}`:`¡Hola! 👋`,n=e.map(s=>`${s.cantidad>1?s.cantidad+`x `:``}${s.nombre}`),o=``;n.length===1?o=n[0]:n.length>1?o=n.slice(0,-1).join(`, `)+` y `+n.slice(-1):o=`tu pedido`;let l=e.some(s=>s.nombre.toLowerCase().includes(`empanada`)),r=e.some(s=>s.nombre.toLowerCase().includes(`chilaquil`)),t=``;return l?t=` ¿Qué tal estuvieron las empanadas y lo crocante de la masa? 😋`:r&&(t=` ¿Qué tal estuvo la sazón de tus chilaquiles? 😋`),`${i} Te escribimos de *Mishi y Masha* \u{1F43E}.

Quer\xEDamos saber si disfrutaste tu pedido de *${o}*.${t}

\xBFQu\xE9 te pareci\xF3 nuestro servicio o hay algo en lo que podamos mejorar? \xA1Tus comentarios nos ayudan much\xEDsimo a mantener la mejor saz\xF3n casera! \u{1F496}`}static ɵfac=function(e){return new(e||m)};static ɵprov=G({token:m,factory:m.ɵfac,providedIn:`root`})};export{h as t};