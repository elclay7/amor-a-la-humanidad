# amor-a-la-humanidad

Una web simple con un mensaje de amor para toda la humanidad. HTML/CSS/JS puro served por nginx.

## Deploy

Stack Docker `amor` en el homelab (192.168.1.7), gestionado por Portainer:
- Push a `main` → GitHub Actions (workflow "Deploy web") rsync `html/` a `/storage/webservices/amor/html/` y dispara el webhook de Portainer para recrear el stack.
- Acceso: `web.lo.xcloud.cl` (LAN, Pi-hole) y `web.xcloud.cl` (público vía NPM + Cloudflare).

Cambios: editar `html/`, commit a `main` (prefijo `<hermes-agent>` si lo hace el agente) y push.
