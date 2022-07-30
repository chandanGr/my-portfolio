var self = this;
const staticCacheName = 'site-static-v1.5';
const dynamicCacheName = 'site-dynamic-v1.5';
const assets = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Concert%20One',
    '/my-portfolio/static/media/linkedin.f249b38224ca41a0b909.png',
    '/my-portfolio/static/media/github.a855c3975c028d8069f5.png',
    '/my-portfolio/static/media/medium.3338d2e6e2496e72be4b.png',
    '/my-portfolio/static/media/charts.b9d789a632ba3091d9c5.png',
    '/my-portfolio/static/media/category-page.a2742c748aa6dee1c941.png',
    '/my-portfolio/static/media/website.411b1c090a33cc178bd0.png',
    '/my-portfolio/static/media/zest-dashboard.533403a7907cf2b7bd1a.png'
];

// install event
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then((keys) => {
            console.log(keys);
            return Promise.all(keys.filter((key) => key !== staticCacheName && key !== dynamicCacheName).map((key) => caches.delete(key)));
        })
    );
});

// fetch event
self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches
            .match(evt.request)
            .then((cacheRes) => {
                return (
                    cacheRes ||
                    fetch(evt.request).then((fetchRes) => {
                        return caches.open(dynamicCacheName).then((cache) => {
                            cache.put(evt.request.url, fetchRes.clone());
                            return fetchRes;
                        });
                    })
                );
            })
            .catch((err) => {
                return {
                    error: err,
                    showPwaPage: true
                };
            })
    );
});
