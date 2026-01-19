import { networkInterfaces } from 'node:os';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

console.log('🔍 Diagnóstico de conexión móvil\n');

// 1. Obtener todas las IPs
console.log('📡 Interfaces de red disponibles:');
const nets = networkInterfaces();
const allIPs = [];

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      console.log(`  ${name.padEnd(20)} → ${net.address}`);
      allIPs.push({ name, ip: net.address });
    }
  }
}

// 2. Verificar puerto
console.log('\n🔌 Verificando puerto 5173...');
try {
  const { stdout } = await execAsync('netstat -an | findstr :5173');
  if (stdout.includes('LISTENING')) {
    console.log('  ✅ Puerto 5173 está escuchando');
    if (stdout.includes('0.0.0.0:5173') || stdout.includes('[::]:5173')) {
      console.log('  ✅ Servidor escuchando en todas las interfaces');
    } else {
      console.log('  ⚠️  Servidor puede no estar escuchando en todas las interfaces');
      console.log('     Asegúrate de usar: npm run dev (que incluye --host)');
    }
  } else {
    console.log('  ❌ Puerto 5173 NO está escuchando');
    console.log('     Ejecuta: npm run dev');
  }
} catch (error) {
  console.log('  ⚠️  No se pudo verificar el puerto');
}

// 3. Verificar firewall
console.log('\n🛡️  Verificando firewall...');
try {
  const { stdout } = await execAsync('netsh advfirewall firewall show rule name="Vite Dev Server Port 5173"');
  if (stdout.includes('Vite Dev Server Port 5173')) {
    console.log('  ✅ Regla de firewall encontrada');
  } else {
    console.log('  ⚠️  No se encontró regla de firewall');
    console.log('     Ejecuta como administrador:');
    console.log('     PowerShell -ExecutionPolicy Bypass -File scripts/fix-firewall.ps1');
  }
} catch (error) {
  console.log('  ⚠️  No se pudo verificar el firewall');
  console.log('     Puede que necesites configurarlo manualmente');
}

// 4. Recomendaciones
console.log('\n💡 Recomendaciones:');
console.log('  1. Asegúrate de que tu móvil esté en la misma red WiFi');
console.log('  2. Usa la IP de "Wi-Fi" o "WLAN" (no VirtualBox ni otras)');
console.log('  3. Prueba estas URLs en tu móvil:');

const wifiIPs = allIPs.filter(ip => 
  ip.name.includes('Wi-Fi') || 
  ip.name.includes('WLAN') || 
  ip.name.includes('Wireless') ||
  (ip.ip.startsWith('192.168.') && !ip.ip.includes('56'))
);

if (wifiIPs.length > 0) {
  wifiIPs.forEach(({ ip }) => {
    console.log(`     → http://${ip}:5173`);
  });
} else {
  // Mostrar IPs que parecen ser de red local
  const localIPs = allIPs.filter(ip => 
    ip.ip.startsWith('192.168.') || 
    ip.ip.startsWith('10.')
  );
  localIPs.forEach(({ name, ip }) => {
    console.log(`     → http://${ip}:5173 (${name})`);
  });
}

console.log('\n📱 Para generar QR de una IP específica:');
console.log('   node -e "require(\'qrcode-terminal\').generate(\'http://TU_IP:5173\', {small: true})"');
