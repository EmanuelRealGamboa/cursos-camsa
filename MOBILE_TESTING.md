# 📱 Cómo probar LOGEVITY en tu móvil

## ⭐ Opción 1: Código QR Automático (Más Fácil - Recomendado)

### Ventajas:
- ✅ Genera un código QR automáticamente en la terminal
- ✅ Detecta tu IP local automáticamente
- ✅ Muy fácil de usar
- ✅ No necesitas instalar nada extra

### Pasos:

1. **Inicia el servidor con QR:**
   ```bash
   npm run dev
   ```

2. **En otra terminal, genera el QR:**
   ```bash
   npm run qr
   ```

3. **Escanea el código QR:**
   - Verás un código QR en la terminal
   - Abre la cámara de tu móvil y escanéalo
   - O copia la URL que aparece (ej: `http://192.168.100.12:5173`)

4. **¡Listo!** Tu app se abrirá en el móvil

### Nota:
- Requiere que tu móvil esté en la misma red WiFi
- El QR se genera con tu IP local automáticamente

---

## 🌐 Opción 1B: Túnel Público con QR (Desde cualquier lugar)

Si quieres probarlo desde cualquier lugar (no necesitas estar en la misma WiFi):

1. **Inicia el servidor:**
   ```bash
   npm run dev
   ```

2. **En otra terminal, crea el túnel:**
   ```bash
   npm run tunnel
   ```

3. **Copia la URL que aparece** (ej: `https://abc123.loca.lt`)

4. **Genera un QR de esa URL:**
   ```bash
   # Opción A: Usa un generador online
   # Ve a: https://www.qr-code-generator.com/
   # Pega la URL y descarga el QR
   
   # Opción B: Usa qrcode-terminal manualmente
   node -e "require('qrcode-terminal').generate('TU_URL_AQUI', {small: true})"
   ```

### Ventajas del túnel:
- ✅ Funciona desde cualquier lugar
- ✅ No necesitas estar en la misma WiFi
- ✅ URL pública con HTTPS

---

## Opción 2: Red Local (Más Rápido - Misma WiFi)

### Requisitos:
- Tu computadora y móvil deben estar en la **misma red WiFi**

### Pasos:

1. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Busca tu IP local:**
   - Windows: Ya tienes estas IPs:
     - `192.168.100.12` (probablemente tu WiFi)
     - `192.168.56.1` (VirtualBox/Hyper-V)
     - `172.28.16.1` (otra red)
   
   - Para verificar cuál es tu WiFi, ejecuta:
     ```bash
     ipconfig
     ```
     Busca la IP de "Adaptador de LAN inalámbrica Wi-Fi"

3. **Abre en tu móvil:**
   - Conecta tu móvil a la misma red WiFi
   - Abre el navegador en tu móvil
   - Ve a: `http://192.168.100.12:5173`
   - (Reemplaza `192.168.100.12` con tu IP real si es diferente)

4. **Si no funciona:**
   - Verifica que el firewall de Windows permita conexiones en el puerto 5173
   - Asegúrate de que ambos dispositivos estén en la misma red WiFi

---

## Opción 3: ngrok (Acceso desde cualquier lugar)

### Requisitos:
- Cuenta gratuita en [ngrok.com](https://ngrok.com)

### Pasos:

1. **Instala ngrok:**
   ```bash
   # Opción A: Con npm (global)
   npm install -g ngrok
   
   # Opción B: Descarga desde https://ngrok.com/download
   ```

2. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **En otra terminal, inicia ngrok:**
   ```bash
   ngrok http 5173
   ```

4. **Copia la URL que ngrok te da:**
   - Verás algo como: `https://abc123.ngrok.io`
   - Esta URL funciona desde cualquier lugar (no necesitas estar en la misma WiFi)

5. **Abre esa URL en tu móvil**

---

## Opción 4: Usar la IP directamente en el comando

Si quieres que Vite muestre automáticamente la IP en la consola:

```bash
npm run dev -- --host
```

Esto mostrará todas las URLs disponibles, incluyendo la IP local.

---

## 🔧 Solución de problemas

### El móvil no puede conectarse:
1. **Verifica el firewall:**
   - Windows Defender puede estar bloqueando el puerto
   - Ve a: Configuración > Firewall > Permitir una app
   - O ejecuta en PowerShell (como administrador):
     ```powershell
     New-NetFirewallRule -DisplayName "Vite Dev Server" -Direction Inbound -LocalPort 5173 -Protocol TCP -Action Allow
     ```

2. **Verifica la IP:**
   - Asegúrate de usar la IP correcta de tu WiFi
   - No uses `localhost` o `127.0.0.1` desde el móvil

3. **Verifica la red:**
   - Ambos dispositivos deben estar en la misma red
   - Algunas redes públicas bloquean la comunicación entre dispositivos

### El servidor no inicia:
- Verifica que el puerto 5173 no esté ocupado
- Cambia el puerto en `vite.config.js` si es necesario

---

## 📝 Notas importantes

- **Solo funciona mientras el servidor esté corriendo**
- **Los cambios se reflejan en tiempo real** (Hot Module Replacement)
- **Para producción**, necesitarás hacer `npm run build` y desplegar

---

## 🚀 Despliegue rápido (Alternativa)

Si quieres probarlo sin tener tu computadora encendida:

1. **Netlify Drop:**
   - Ve a [drop.netlify.com](https://drop.netlify.com)
   - Arrastra la carpeta `dist` después de hacer `npm run build`

2. **Vercel:**
   - Instala Vercel CLI: `npm i -g vercel`
   - Ejecuta: `vercel` en la carpeta del proyecto

3. **GitHub Pages:**
   - Haz build: `npm run build`
   - Sube la carpeta `dist` a GitHub Pages
