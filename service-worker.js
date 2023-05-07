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
    "revision": "68375fda64b3d6f314efcf15a3f83357"
  },
  {
    "url": "assets/css/0.styles.b676c36c.css",
    "revision": "6ecbba6cf927652495e87c3983122561"
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
    "url": "assets/js/10.4e07c7dd.js",
    "revision": "920520396a1783a96f28b8dd6c59d901"
  },
  {
    "url": "assets/js/11.1e1a55c8.js",
    "revision": "ae46039e8a34ab6abd0bf0748775628e"
  },
  {
    "url": "assets/js/12.79409a78.js",
    "revision": "1da80492878a7cf8453cbf5b51e079c4"
  },
  {
    "url": "assets/js/2.1577ffcd.js",
    "revision": "6d8adc27ac5fbe4024340cc1d39bf063"
  },
  {
    "url": "assets/js/3.76f26f90.js",
    "revision": "e5eadf78c84eddea7d2238895f36bc89"
  },
  {
    "url": "assets/js/4.07081b61.js",
    "revision": "0c20d82bbc7883276e5c5b04f6355676"
  },
  {
    "url": "assets/js/5.a508c2f5.js",
    "revision": "9fedfcc3e257d0305e0dd21c0b6ef885"
  },
  {
    "url": "assets/js/6.033225c8.js",
    "revision": "d2aec301ab13805bf112b6e18f0a5a2b"
  },
  {
    "url": "assets/js/7.da1c9733.js",
    "revision": "72ce87507ece1aea3b0545287ce5a2d5"
  },
  {
    "url": "assets/js/8.dc50e486.js",
    "revision": "51eca61178125ff44d9b4b74903e8d2a"
  },
  {
    "url": "assets/js/9.c4632efa.js",
    "revision": "6e3e60c18df5de5cd798494d70ea61f8"
  },
  {
    "url": "assets/js/app.0ea10e73.js",
    "revision": "9a12f19a002382d2d8ea22a4fb8d6f7a"
  },
  {
    "url": "en-US/docs/index.html",
    "revision": "24e77c9878b2fb055c94916254e52a97"
  },
  {
    "url": "en-US/index.html",
    "revision": "427f618f1e612b00198df3c22f1e1174"
  },
  {
    "url": "index.html",
    "revision": "b87c9140f47a61e067e72b413bdac27d"
  },
  {
    "url": "zh-Hans/docs/index.html",
    "revision": "a70fa35dbd39431836df8eef464ec4d8"
  },
  {
    "url": "zh-Hans/index.html",
    "revision": "76a5ad4ac764c019e5ba4f7aaaa1b5fd"
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