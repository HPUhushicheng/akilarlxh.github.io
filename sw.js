const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Akilar"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"19d82f0e56583ba7770acd62b6c7bfeb",url:"./404.html"},{revision:"baf580ef815ebcfa840e8428a29dd2ca",url:"./index.html"},{revision:"85304b243a5242438536b89fec38661e",url:"./js/main.js"},{revision:"a76d681b30b013501c42ff6c1e3f1f12",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.googleAnalytics.initialize();