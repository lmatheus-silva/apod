self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('meu-cache-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/script.js'
            ]);
        }).then(() => {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) return response;

            const promise = fetch(event.request).then((response) => {
                if (response.status !== 200) return response;

                const cachedResponse = response.clone();
                caches.open('meu-cache-v1').then((cache) => {
                    cache.put(event.request, cachedResponse);
                });
                return response;
            });

            return promise;
        })
    );
});
