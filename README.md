# desayunos-piloto

Build desplegado de `desayunos-web` apuntando al **proyecto piloto** de Supabase
(`wjbxqdfiuhzinixbvuus`), no al proyecto en vivo.

Este repositorio contiene **solo el build compilado, sin código fuente**. Nació
del fork privado `desayunos-saas` como paso §5 de su `docs/pilot.md`: el piloto
necesita una URL pública propia para poder correr allí el smoke pass (§6) sin
tocar el despliegue del sitio en vivo.

La única credencial incrustada es la *anon key* del proyecto piloto, que es
pública por diseño: viaja en todo cliente web, incluido el sitio en vivo. No hay
datos de nadie acá; todo lo que se crea contra este proyecto es material de
prueba y se puede borrar sin ceremonia.

Como GitHub Pages no reescribe rutas, `404.html` manda cualquier profundidad a
la raíz y el usuario navega dentro de la app. No se toca `index.html` después
del build: `ngsw.json` guarda su hash, y editarlo deja al service worker
re-descargando el shell sin fin.
