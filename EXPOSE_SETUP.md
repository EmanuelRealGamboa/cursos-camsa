# 🚀 Generar Código QR para Probar en Móvil

## Método 1: QR con IP Local (Misma WiFi)

### Uso Rápido:

**Terminal 1:**
```bash
npm run dev
```

**Terminal 2:**
```bash
npm run qr
```

Verás algo como:
```
📱 Escanea este código QR con tu móvil:

🔗 URL: http://192.168.100.12:5173

████████████████████████████████
████████████████████████████████
████ ▄▄▄▄▄ █▀█ █▄█▀█ ▄▄▄▄▄ ████
████ █   █ █▀▀▀█ █▀█ █   █ ████
████ █▄▄▄█ █▀ █▀▀█ █▄▄▄█ ████
...
```

### Ventajas:
- ✅ Automático - detecta tu IP
- ✅ No necesitas instalar nada extra
- ✅ Muy rápido
- ⚠️ Requiere misma WiFi

---

## Método 2: Túnel Público (Desde cualquier lugar)

### Uso:

**Terminal 1:**
```bash
npm run dev
```

**Terminal 2:**
```bash
npm run tunnel
```

Verás algo como:
```
your url is: https://abc123.loca.lt
```

Luego genera el QR de esa URL:
```bash
node -e "require('qrcode-terminal').generate('https://abc123.loca.lt', {small: true})"
```

### Ventajas:
- ✅ Funciona desde cualquier lugar
- ✅ No necesitas estar en la misma WiFi
- ✅ HTTPS automático

---

## Método 3: ngrok (Alternativa)

Si prefieres ngrok:

```bash
# Instala ngrok
npm install -g ngrok

# Terminal 1
npm run dev

# Terminal 2
ngrok http 5173

# Luego genera QR de la URL que ngrok te da
node -e "require('qrcode-terminal').generate('TU_URL_NGROK', {small: true})"
```

---

## Scripts Disponibles

- `npm run dev` - Inicia servidor con acceso de red
- `npm run qr` - Genera QR de tu IP local
- `npm run tunnel` - Crea túnel público (localtunnel)
- `npm run dev:qr` - Todo en uno (experimental)
