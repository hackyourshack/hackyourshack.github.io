if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.f6cf46f8a92772a0d217.js",revision:"e7b40f13ab134f55ce5909d435d4022a"},{url:"/_next/static/chunks/framework.881494467e3efcabd27d.js",revision:"58d54287cc9b0a984ce2f24cfd364e7f"},{url:"/_next/static/chunks/main-8b7b5e4bf886da371f57.js",revision:"a34ce3d20c89f8f91e94854dd6ce3347"},{url:"/_next/static/chunks/pages/_app-dc2e2f03ae4dfe8b02b6.js",revision:"306b0d6d282a1f7d1d5f2791c49bb62a"},{url:"/_next/static/chunks/pages/_error-d8f21d779e9463d1a83e.js",revision:"7415267fefdc066bec4a5f14dfed9b65"},{url:"/_next/static/chunks/pages/community-d16ba2fa62d5d640a8c8.js",revision:"603a075bf8ef5956dad485c4efcfcb4f"},{url:"/_next/static/chunks/pages/hack-storage-dcdc9c644197c0d674ed.js",revision:"910115e5ae956306486516354ed1027d"},{url:"/_next/static/chunks/pages/handbook-947877a9639196d79075.js",revision:"8588ba6885734e5aba76e6fef8fcfdc6"},{url:"/_next/static/chunks/pages/index-5e3e6090432c3f31a151.js",revision:"855e3d098f0a9a45431c118b40c1d904"},{url:"/_next/static/chunks/pages/magazine-8b72fc6c8675948989c6.js",revision:"9c4e2e55d15d5394f7b184a1d4c3023f"},{url:"/_next/static/chunks/pages/sign-in-ba4c49ce3babaced0eb1.js",revision:"8adefec5f7729046aed6af4d88c09eb5"},{url:"/_next/static/chunks/polyfills-4beebf4ac9054f0bf4e6.js",revision:"c8b961cfccce0518d96d73f45e46210d"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/e92e0bd84427c5c5b357.css",revision:"4f4d9c78971f08109b9d697119785dbb"},{url:"/_next/static/jGUxn9tx6wxQIpwg2wh0q/_buildManifest.js",revision:"754fc28b5e49a4b93f870ba201e79783"},{url:"/_next/static/jGUxn9tx6wxQIpwg2wh0q/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/icons/android-chrome-192x192.png",revision:"69bf6d613aa6d25137116bae2d08eb11"},{url:"/icons/apple-touch-icon.png",revision:"c6d20404023388d65424cc91140f3174"},{url:"/icons/close.svg",revision:"970bbd4f080b45cca2c171f07bcdf7e8"},{url:"/icons/favicon.ico",revision:"6652795df3afdffa6bdc6b144800530a"},{url:"/icons/icon-512x512.png",revision:"345f0a75e809ca5811870db8b5eed069"},{url:"/icons/logo.svg",revision:"20dc154a6483dae06f2b46f8dbfb9ee1"},{url:"/icons/search.svg",revision:"23e69a105b6ccf0bf23fcfa809490c93"},{url:"/images/christin-hume-k2Kcwkandwg-unsplash.jpg",revision:"01e80730656b87e2eb5866d90d806726"},{url:"/images/esteban-castle-FULkoZ989E4-unsplash.jpg",revision:"557834a601c75cafcdd612222b24b4d3"},{url:"/images/james-lewis-C1ubQXTU6-w-unsplash.jpg",revision:"b80fb39255a68de8be5369e6dedece59"},{url:"/images/slim-emcee-jzdOX0XkXr8-unsplash.jpg",revision:"112f28246e65f694e55af9386d1edfef"},{url:"/manifest.json",revision:"0dd06a079d4576edc362979cfdb62dd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
