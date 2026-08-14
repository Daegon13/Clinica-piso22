# Clínica Piso 22 — propuesta conceptual privada

Micrositio estático y no oficial creado para presentar una posible experiencia digital premium de Clínica Piso 22. No implementa reservas, formularios, almacenamiento de datos ni analytics.

## Demo comercial

- **Propósito:** mostrar al cliente la dirección visual, el recorrido de contenidos y un flujo conceptual hacia la consulta.
- **Carácter:** propuesta comercial privada; no es el sitio oficial de Clínica Piso 22.
- **Indexación:** debe permanecer bloqueada mediante metadatos, `robots.txt` y cabeceras del hosting. `noindex` nunca debe retirarse automáticamente.
- **Assets:** las fotografías son conceptuales y no representan pacientes ni integrantes reales del equipo.
- **Datos pendientes:** profesionales, credenciales, servicios, reputación, horarios y contacto requieren validación de la clínica.

### Ejecutar localmente

Desde esta carpeta:

```bash
python3 -m http.server 8080
```

Abrir `http://localhost:8080`. En producción, usar la protección por contraseña o control de acceso nativo del proveedor de hosting; no implementar autenticación artesanal.

### Sustitución de contenido validado

El contenido está centralizado en `index.html`:

- **Contacto y WhatsApp:** buscar `data-demo-action`; sustituir el diálogo conceptual sólo cuando exista un canal oficial confirmado.
- **Equipo:** sección `#equipo`; reemplazar placeholders únicamente con nombres, cargos, credenciales y fotografías autorizadas.
- **Reseñas:** sección con `aria-labelledby="resenas-title"`; integrar únicamente reseñas verificadas y autorizadas.
- **Horarios:** bloque `<dl>` dentro de `#ubicacion`; reemplazar “pendiente de confirmar” tras validación.
- **Reputación:** validar “Más de 280 opiniones de pacientes” antes de publicar.

## Privacidad / no indexación

La demo incluye varias capas de protección:

- metadatos `robots` y `googlebot` con `noindex,nofollow`;
- `robots.txt` con `Disallow: /`;
- `_headers` y `netlify.toml` con `X-Robots-Tag`;
- `.htaccess` para servidores Apache.

> `noindex` desalienta la indexación, pero no vuelve privada una URL. Activar la protección de acceso nativa del hosting para presentaciones confidenciales.

## Checklist antes de una publicación oficial

- [ ] Validar profesionales
- [ ] Validar credenciales
- [ ] Integrar fotografías oficiales autorizadas
- [ ] Validar servicios y contenido médico
- [ ] Validar reputación y el dato de opiniones
- [ ] Validar dirección y horarios
- [ ] Validar el canal de contacto
- [ ] Conectar WhatsApp oficial
- [ ] Integrar reseñas reales verificadas
- [ ] Sustituir placeholders de equipo
- [ ] Sustituir el aviso y el modal de demo
- [ ] Retirar `noindex` únicamente tras aprobación expresa del cliente
