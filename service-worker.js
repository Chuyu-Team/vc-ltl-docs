/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8b085b1142a5403e000949754be2f2fa"
  },
  {
    "url": "assets/css/0.styles.d7499c4e.css",
    "revision": "18dfb4ad268a19504fcf568766bf6272"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "9dcaa8f0f8fe8b0142f2efbe64747eaa"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "a2b0eea0480136992202eb6e920ab639"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "e6639be41ff35c0bfee9d7ea60f621a4"
  },
  {
    "url": "assets/icons/mstile.png",
    "revision": "f63aec5945f8f82eadeb6c1bf2779ed3"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "365616d6a706f1e56b45f43d2905a575"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1a4c3729.js",
    "revision": "67ae08a6024235285855d73c98035a48"
  },
  {
    "url": "assets/js/11.85e1d28e.js",
    "revision": "2e3c4f4f0e543108305d1e984dbfce3b"
  },
  {
    "url": "assets/js/12.9b3b1152.js",
    "revision": "1527531e1f8b11e689e600981a2907b1"
  },
  {
    "url": "assets/js/2.cfc9c4dc.js",
    "revision": "7b9bcafb09611242d6423831ff0acd47"
  },
  {
    "url": "assets/js/3.bde928c0.js",
    "revision": "53aef1488f213ad35c36b05b2a2dc881"
  },
  {
    "url": "assets/js/4.e5170176.js",
    "revision": "cf10059897f67615c28e2277099f9325"
  },
  {
    "url": "assets/js/5.4217a75f.js",
    "revision": "f972ce7eba6dd3b22b3b7869a1d21f1d"
  },
  {
    "url": "assets/js/6.ebdbda2c.js",
    "revision": "b2d9c06af9ac357fae1dd9630c15ec52"
  },
  {
    "url": "assets/js/7.cf7d411e.js",
    "revision": "8f4580e51f09d468cd45c35e6c754497"
  },
  {
    "url": "assets/js/8.4d486983.js",
    "revision": "7201fbc5cd877913f967163f92e7f278"
  },
  {
    "url": "assets/js/9.ca0163f4.js",
    "revision": "7ba9c1716ff3f798b43e725e98e94730"
  },
  {
    "url": "assets/js/app.6b4797a5.js",
    "revision": "63a76e60d858ecc457649671896db1d2"
  },
  {
    "url": "en-US/docs/index.html",
    "revision": "ed344a29b3a089b9be134018ac6d6b9f"
  },
  {
    "url": "en-US/index.html",
    "revision": "f23924e7eeaa7fc0c53f6bd159ceec9f"
  },
  {
    "url": "index.html",
    "revision": "b87c9140f47a61e067e72b413bdac27d"
  },
  {
    "url": "zh-Hans/docs/index.html",
    "revision": "2169ee0ac10f8c19609478325ec29f41"
  },
  {
    "url": "zh-Hans/index.html",
    "revision": "bfdd939a611209ade0ef0eaeec8dd922"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
