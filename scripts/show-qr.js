import qrcode from 'qrcode-terminal';
import { networkInterfaces } from 'node:os';

// Función para obtener la IP local
function getLocalIP() {
  const nets = networkInterfaces();
  const results = {};

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  // Priorizar WiFi/Ethernet (diferentes nombres según el sistema)
  // Buscar interfaces que contengan "Wi-Fi", "WLAN", "Wireless" en el nombre
  const wifiNames = Object.keys(results).filter(name => 
    name.toLowerCase().includes('wi-fi') || 
    name.toLowerCase().includes('wlan') || 
    name.toLowerCase().includes('wireless') ||
    name.toLowerCase().includes('wireless lan')
  );
  
  if (wifiNames.length > 0) {
    // Priorizar la primera IP de WiFi encontrada
    for (const wifiName of wifiNames) {
      if (results[wifiName]?.[0]) {
        return results[wifiName][0];
      }
    }
  }

  // Si no encuentra WiFi, buscar Ethernet
  const ethernetNames = Object.keys(results).filter(name => 
    name.toLowerCase().includes('ethernet') && 
    !name.toLowerCase().includes('virtual') &&
    !name.toLowerCase().includes('vethernet')
  );
  
  if (ethernetNames.length > 0) {
    for (const ethName of ethernetNames) {
      if (results[ethName]?.[0]) {
        return results[ethName][0];
      }
    }
  }

  // Si no encuentra WiFi/Ethernet, buscar IPs que empiecen con 192.168.x (excluyendo 192.168.56 que es VirtualBox)
  const allIPs = Object.values(results).flat();
  const localIP = allIPs.find(ip => 
    (ip.startsWith('192.168.') && !ip.startsWith('192.168.56.')) || 
    ip.startsWith('10.')
  );
  
  return localIP || allIPs[0] || 'localhost';
}

const port = process.env.PORT || 5173;
const ip = getLocalIP();
const url = `http://${ip}:${port}`;

console.log('\n📱 Escanea este código QR con tu móvil:\n');
console.log(`🔗 URL: ${url}\n`);

// Mostrar todas las IPs disponibles para referencia
const nets = networkInterfaces();
const wifiIPs = [];
for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      if (name.includes('Wi-Fi') || name.includes('WLAN') || name.includes('Wireless')) {
        wifiIPs.push({ name, ip: net.address });
      }
    }
  }
}

if (wifiIPs.length > 0) {
  console.log('📡 IPs de WiFi detectadas:');
  wifiIPs.forEach(({ name, ip: wifiIp }) => {
    console.log(`   ${name}: ${wifiIp}`);
    if (wifiIp !== ip) {
      console.log(`   → URL alternativa: http://${wifiIp}:${port}`);
    }
  });
  console.log('');
}

qrcode.generate(url, { small: true }, (qr) => {
  console.log(qr);
  console.log('\n💡 Asegúrate de que tu móvil esté en la misma red WiFi');
  console.log('⚠️  Si no funciona, verifica el firewall de Windows');
  console.log('   Ejecuta: npm run diagnose\n');
});
