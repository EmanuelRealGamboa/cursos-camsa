# Script para abrir el puerto 5173 en el firewall de Windows
# Ejecuta como administrador: PowerShell -ExecutionPolicy Bypass -File scripts/fix-firewall.ps1

Write-Host "🔧 Configurando firewall para permitir puerto 5173..." -ForegroundColor Yellow

# Verificar si la regla ya existe
$existingRule = Get-NetFirewallRule -DisplayName "Vite Dev Server Port 5173" -ErrorAction SilentlyContinue

if ($existingRule) {
    Write-Host "✅ La regla del firewall ya existe" -ForegroundColor Green
    Remove-NetFirewallRule -DisplayName "Vite Dev Server Port 5173" -ErrorAction SilentlyContinue
}

# Crear nueva regla
New-NetFirewallRule -DisplayName "Vite Dev Server Port 5173" `
    -Direction Inbound `
    -LocalPort 5173 `
    -Protocol TCP `
    -Action Allow `
    -Profile Any

if ($?) {
    Write-Host "✅ Firewall configurado correctamente!" -ForegroundColor Green
    Write-Host "El puerto 5173 ahora está abierto para conexiones entrantes" -ForegroundColor Cyan
} else {
    Write-Host "❌ Error al configurar el firewall" -ForegroundColor Red
    Write-Host "Asegúrate de ejecutar como administrador" -ForegroundColor Yellow
}
