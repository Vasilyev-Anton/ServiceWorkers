// src/service-worker.js
/* global workbox */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

if (workbox) {
// Установка Service Worker
  workbox.precaching.precacheAndRoute([
    // { url: 'http://localhost:3000/css/style.css', revision: '1' },
    { url: 'http://localhost:3000/poster.jpg', revision: '1' },
  ]);
} else {
  // eslint-disable-next-line no-console
  console.warn('Workbox could not be loaded. Check the URL and try again.');
}
// Стратегия для запросов к API
workbox.routing.registerRoute(
  '/api/news',
  new workbox.strategies.NetworkFirst(),
);
