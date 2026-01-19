# 🚀 Solución Rápida: No puedo acceder desde el móvil

## ⚡ Pasos Inmediatos

### 1. Abre el Firewall (IMPORTANTE)

**Opción A: Script automático (Más fácil)**
```powershell
# Abre PowerShell como Administrador (Win + X → Terminal Admin)
cd C:\cursos-camsa
PowerShell -ExecutionPolicy Bypass -File scripts/fix-firewall.ps1
```

**Opción B: Manual**
1. Presiona `Win + R`, escribe `wf.msc` y Enter
2. Click en "Reglas de entrada" → "Nueva regla"
3. Selecciona "Puerto" → TCP → Puerto `5173`
4. Permite la conexión → Aplica a todos los perfiles
5. Nombre: "Vite Dev Server"

### 2. Genera el QR con la IP correcta

Tu IP de WiFi es: **`192.168.1.189`**

```bash
node -e "require('qrcode-terminal').generate('http://192.168.1.189:5173', {small: true})"
```

### 3. Prueba desde el móvil

- Escanea el QR
- O abre manualmente: `http://192.168.1.189:5173`

---

## 🔍 Si aún no funciona

### Verifica que el servidor esté corriendo:

```bash
npm run dev
```

Debe mostrar:
```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.189:5173/
```

### Ejecuta el diagnóstico:

```bash
npm run diagnose
```

---

## 🌐 Alternativa: Túnel Público (Sin firewall)

Si el firewall sigue dando problemas:

```bash
# Terminal 1
npm run dev

# Terminal 2  
npm run tunnel
# Copia la URL (ej: https://abc123.loca.lt)
# Genera QR de esa URL
```

---

## ✅ Checklist

- [ ] Firewall configurado (puerto 5173 abierto)
- [ ] Servidor corriendo (`npm run dev`)
- [ ] Móvil en la misma red WiFi (192.168.1.x)
- [ ] Usando la IP correcta: `192.168.1.189`
- [ ] Probado desde el navegador de la PC primero
