// PALE WAVES — a minimal service worker so the page can be installed as an app ("Add to Home Screen"); nothing is cached: every load is the live page
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { if (e.request.method === 'GET' && e.request.url.startsWith(self.location.origin)) e.respondWith(fetch(e.request)); });
