// Service worker de la app de choferes de True Waste.
// No guarda nada en caché: todo pasa directo a internet. Solo permite instalar la app.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
