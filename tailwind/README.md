# Tailwind compilado

El sitio ya no usa `cdn.tailwindcss.com` (no es apto para producción: compila en el navegador).
Después de agregar o cambiar clases de Tailwind en el HTML, regenerar desde la raíz del sitio:

```
npx tailwindcss@3 -c tailwind/home.config.js -i tailwind/input.css -o tailwind.css --minify
npx tailwindcss@3 -c tailwind/deportistas.config.js -i tailwind/input.css -o glorias-del-deporte/tailwind.css --minify
```
