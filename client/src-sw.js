import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

// Precache and route the assets specified in the __WB_MANIFEST variable
precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, // Cache pages for 30 days
    }),
  ],
});

// Warm the page cache with specific URLs
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(pageCache.cacheName).then((cache) => {
      return cache.addAll(['/index.html', '/']);
    })
  );
});

// Route requests for navigation to the page cache
registerRoute(
  ({ request }) => request.mode === 'navigate',
  ({ event }) => pageCache.handle({ event })
);


// Cache CSS and JS files using a StaleWhileRevalidate strategy
registerRoute(
  /\.(?:css|js)$/,
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache assets for 30 days
      }),
    ],
  })
);

// For more advanced asset caching strategies, you can refer to the Workbox documentation:
// - Strategies: https://developers.google.com/web/tools/workbox/modules/workbox-strategies
// - Precaching: https://developers.google.com/web/tools/workbox/modules/workbox-precaching

