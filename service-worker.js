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
    "revision": "e7b85e6477d492ec0f6813d51d3e89e0"
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
    "url": "assets/image/logo.png",
    "revision": "361ea0c3f34a7648474e3b46ceb740cb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8da79ea6.js",
    "revision": "21a7ec18ddf753964995352e5eff3fe9"
  },
  {
    "url": "assets/js/11.fc414718.js",
    "revision": "64fba7fc46a08d64a3eaacc475872add"
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
    "url": "assets/js/app.9fdd7235.js",
    "revision": "be89e2d198be25f85ee9c18d51094689"
  },
  {
    "url": "en-US/docs/index.html",
    "revision": "cbf0071cdafa3c097eb6b94d2d237cff"
  },
  {
    "url": "en-US/index.html",
    "revision": "6a975b9b486b29f93ba01ac40a8d3fb7"
  },
  {
    "url": "index.html",
    "revision": "b87c9140f47a61e067e72b413bdac27d"
  },
  {
    "url": "zh-Hans/docs/index.html",
    "revision": "49b66cec8b4176b07eaf24d6a7288aa6"
  },
  {
    "url": "zh-Hans/index.html",
    "revision": "638f0f6fa5735b47e5cda27f81631df3"
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
