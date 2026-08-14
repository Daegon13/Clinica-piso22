# Clínica Piso 22 — demo comercial privada

Micrositio estático, no oficial, pensado para presentar una reconstrucción digital premium de Clínica Piso 22.

## Privacidad / no indexación

La demo incluye varias capas de protección contra indexación:

- `<meta name="robots" content="noindex,nofollow,...">`
- `<meta name="googlebot" ...>`
- `robots.txt` con `Disallow: /`
- `_headers` y `netlify.toml` con `X-Robots-Tag`
- `.htaccess` para servidores Apache

> Importante: si se publica en una URL accesible, la mejor práctica adicional es proteger el entorno con contraseña o autenticación HTTP. `noindex` evita indexación, pero no vuelve privada una URL por sí sola.

## Contenido pendiente de validar

Antes de usarla como sitio público deben reemplazarse o confirmarse:

- Número de WhatsApp (`59800000000` es placeholder)
- Horarios
- Canal de contacto
- Nombres, fotografías, especialidades y credenciales del equipo
- Reseñas verificadas
- El dato de “más de 280 opiniones”
- Detalle médico de tratamientos, indicaciones y disponibilidad
- Fotografías institucionales autorizadas

Las imágenes incluidas son ilustraciones SVG originales creadas para esta demo; no representan pacientes ni profesionales reales de la clínica.

## Cómo abrir

Abrir `index.html` en un navegador. Para probarlo con un servidor local:

```bash
python -m http.server 8080
```

y visitar `http://localhost:8080`.
