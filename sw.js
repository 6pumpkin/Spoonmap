const CACHE_NAME = 'spoonmap-v14';
const STATIC_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './logo.png',
    './LOGO2.png',
    './icon-192.png',
    './icon-512.png',
    './apple-touch-icon.png',
    './favicon.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only handle GET requests and skip external APIs (Firebase, Kakao, OAuth, etc.)
    if (event.request.method !== 'GET') return;
    if (
        url.hostname.includes('firebase') ||
        url.hostname.includes('googleapis.com') ||
        url.hostname.includes('kakao.com') ||
        url.hostname.includes('kakaocdn.net') ||
        url.hostname.includes('dicebear.com')
    ) {
        return;
    }

    // Network-first strategy for app files: bypass HTTP disk cache on mobile to guarantee latest updates, with offline fallback
    event.respondWith(
        fetch(event.request, { cache: 'no-cache' })
            .then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});
