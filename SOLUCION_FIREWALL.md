# 🔥 Solución: No puedo acceder desde el móvil

## Problema detectado
El servidor está funcionando correctamente, pero el **firewall de Windows** probablemente está bloqueando las conexiones.

## ✅ Solución Rápida

### Opción 1: Script Automático (Recomendado)

1. **Abre PowerShell como Administrador:**
   - Presiona `Win + X`
   - Selecciona "Windows PowerShell (Administrador)" o "Terminal (Administrador)"

2. **Navega a la carpeta del proyecto:**
   ```powershell
   cd C:\cursos-camsa
   ```

3. **Ejecuta el script:**
   ```powershell
   PowerShell -ExecutionPolicy Bypass -File scripts/fix-firewall.ps1
   ```

4. **Verifica que funcionó:**
   - Deberías ver: "✅ Firewall configurado correctamente!"

### Opción 2: Manual (Si el script no funciona)

1. **Abre el Firewall de Windows:**
   - Presiona `Win + R`
   - Escribe: `wf.msc` y presiona Enter

2. **Crea una nueva regla:**
   - Click en "Reglas de entrada" (Inbound Rules) a la izquierda
   - Click en "Nueva regla..." (New Rule...) a la derecha

3. **Configura la regla:**
   - Tipo: **Puerto** → Siguiente
   - Protocolo: **TCP**
   - Puertos específicos: **5173** → Siguiente
   - Acción: **Permitir la conexión** → Siguiente
   - Perfiles: Marca todos (Dominio, Privada, Pública) → Siguiente
   - Nombre: **Vite Dev Server Port 5173** → Finalizar

### Opción 3: Comando Directo (PowerShell como Admin)

```powershell
New-NetFirewallRule -DisplayName "Vite Dev Server Port 5173" -Direction Inbound -LocalPort 5173 -Protocol TCP -Action Allow
```

---

## 🔍 Verificar que funciona

1. **Ejecuta el diagnóstico:**
   ```bash
   npm run diagnose
   ```

2. **Genera el QR con la IP correcta:**
   ```bash
   node -e "require('qrcode-terminal').generate('http://192.168.1.189:5173', {small: true})"
   ```

3. **Prueba desde el móvil:**
   - Escanea el QR
   - O abre manualmente: `http://192.168.1.189:5173`

---

## ⚠️ Si aún no funciona

### Verifica:

1. **¿Están en la misma red WiFi?**
   - Tu PC: `192.168.1.189`
   - Tu móvil debe estar en `192.168.1.x`

2. **¿El servidor está corriendo?**
   ```bash
   npm run dev
   ```
   Debe mostrar: `Local: http://localhost:5173/` y `Network: http://192.168.1.189:5173/`

3. **Prueba desde el navegador de la PC:**
   - Abre: `http://192.168.1.189:5173`
   - Si funciona en la PC pero no en el móvil, es el firewall

4. **Verifica el firewall:**
   ```powershell
   # Como administrador
   Get-NetFirewallRule -DisplayName "*5173*"
   ```

### Alternativa: Usar túnel público

Si el firewall sigue dando problemas, usa un túnel público:

```bash
# Terminal 1
npm run dev

# Terminal 2
npm run tunnel
# Copia la URL que aparece (ej: https://abc123.loca.lt)
# Genera QR de esa URL
```

---

## 📱 Tu IP de WiFi

**IP actual:** `192.168.1.189`

Usa esta IP para generar el QR:
```bash
node -e "require('qrcode-terminal').generate('http://192.168.1.189:5173', {small: true})"
```
