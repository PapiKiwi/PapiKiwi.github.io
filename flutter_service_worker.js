'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "267820111f1297151729a6b5c852238c",
"index.html": "248c78e9d614ca1cb1f07ed31657fd15",
"/": "248c78e9d614ca1cb1f07ed31657fd15",
"main.dart.js": "8ae6f9654812cd5c8173d19d40325ce4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a964400c8c512951e772ad8ad70fc5a3",
"assets/AssetManifest.json": "7c0812b72781427cf4216a60fff88403",
"assets/NOTICES": "fae312debf6a4a5af513986dcdf975de",
"assets/img/home/wifi.png": "f29aec897feca3c46a5bd5c50a18f882",
"assets/img/home/3x/bg_class_card.png": "ee1754bfb4adebcdb7d09a56aed0a6c9",
"assets/img/home/book.png": "accbd0a0c343a0c648861459c9e266c5",
"assets/img/home/lock.png": "b1f4926af02ffe8b12a06b8b2f7198ab",
"assets/img/home/doc.png": "d27a33b57d61d506198e23fbb3666775",
"assets/img/home/bg_class_card.png": "ff76de15ab763b3509eeef48270f0ee8",
"assets/img/home/search.png": "d9cfb821b25b5f3d3486e3e37b3d5f37",
"assets/img/home/2x/bg_class_card.png": "6988076700ce0f69730b18b2971a9349",
"assets/img/file/3x/ico_file_ppt.png": "cee903069324c1637ba4e0b464cca264",
"assets/img/file/3x/ico_file_pdf.png": "bfd5dcad2085c3202dcdbd1b2a3cba7c",
"assets/img/file/3x/ico_file_xls.png": "2c6ec459e32686c062667b998f74c4c5",
"assets/img/file/3x/ico_file_img.png": "e9ce5994328f247ba5349ead4fd68a3b",
"assets/img/file/3x/ico_file_txt.png": "fa61765f6e74712256451d9c1b487853",
"assets/img/file/3x/ico_file_others.png": "66722de12a8aa22f1765f4514e638c9f",
"assets/img/file/3x/ico_file_doc.png": "594f99cc1cebbebf02c9d79aceec2a40",
"assets/img/file/3x/ico_file_zip.png": "909e78986ae9f8e0ddc43840f72287d7",
"assets/img/file/ico_file_ppt.png": "4b350e879fa08b4a25227fee025233a8",
"assets/img/file/ico_file_pdf.png": "572e16ee29a0a56aa4ed7d95fbeb090e",
"assets/img/file/ico_file_xls.png": "034e23dfd770bc4b23bbab1704bdce24",
"assets/img/file/ico_file_img.png": "5d4630f271fb0e36d5bb503d6657c96c",
"assets/img/file/ico_file_txt.png": "9399c81af99cdb6e36794893541391c1",
"assets/img/file/ico_file_others.png": "ad06fea5903ad89d80f8c9287578f2bd",
"assets/img/file/ico_file_doc.png": "bac347987f5b29ae263e444784eb8ae0",
"assets/img/file/ico_file_zip.png": "977016bfa687ef53cba044641c74a023",
"assets/img/file/2x/ico_file_ppt.png": "a3fb96676ed7d087920c6119cdeb3f8f",
"assets/img/file/2x/ico_file_pdf.png": "9ac93b37b016e0ed9da62337541cf97f",
"assets/img/file/2x/ico_file_xls.png": "a6d749e1cee1f3058b5ed9b9356b3cf4",
"assets/img/file/2x/ico_file_img.png": "2f36671f49f6a0922aee058cccc8e675",
"assets/img/file/2x/ico_file_txt.png": "8f1d92ebccbd16e2cea1b1f3d13ea2bb",
"assets/img/file/2x/ico_file_others.png": "a7e399bde06e91d6581f1a55c1528657",
"assets/img/file/2x/ico_file_doc.png": "5ab3e09de7cef646cce2367266a9a8d5",
"assets/img/file/2x/ico_file_zip.png": "f58d1cc026712a76fd862fcc0270e863",
"assets/img/common/nav_close.png": "d05f4e0b98e5737eb440278fac10b4e4",
"assets/img/common/3x/nav_close.png": "1273872031dfc221c0ee047b1adefa60",
"assets/img/common/3x/img_lose.png": "edb265584b17d9d62d9aa474c78d5474",
"assets/img/common/3x/pop_close_btn.png": "fcd573413c8ac17dd4bb2eef8917e80d",
"assets/img/common/3x/status_empty.png": "93c39009860d52730c2ba92303b291c5",
"assets/img/common/3x/checkbox_s.png": "78516f1a2f3ea0d0155af6f94f6d66bc",
"assets/img/common/3x/back_btn.png": "a23f8664e5b9e45d1ad9e47b66c09689",
"assets/img/common/3x/btn_cancel.png": "7182702231209a1ab54c6f71110b965e",
"assets/img/common/3x/logo.png": "547dc5d92d97b8a836c92cfb3b94e161",
"assets/img/common/3x/web_mask.png": "477f757f978b5a88dc7f4e466525f412",
"assets/img/common/3x/custom_service.png": "818fe1913d077446c853402d45664d18",
"assets/img/common/3x/checkbox_n.png": "be361bfbf88bd4413445ab5dbc236f23",
"assets/img/common/3x/loading.png": "2fa7c12bf44b70977c48196eb47b4b60",
"assets/img/common/3x/status_error.png": "81c7c46eec6731c74132c3a9e7d15733",
"assets/img/common/3x/tab_me.png": "ab3a2309fb37552fee7d83bc99d06114",
"assets/img/common/3x/pwd_close.png": "f2b1626013ee4b47d0d79c0e4d798bf6",
"assets/img/common/3x/pwd_open.png": "7ab96902e8e26fdb8073f98738956f97",
"assets/img/common/img_lose.png": "59e4cd219c22126f8aac3cc812221bfa",
"assets/img/common/pop_close_btn.png": "4f2de9ffe81e0c543da3eeb9823efdf0",
"assets/img/common/status_empty.png": "784cc47e286ac8553d8ae3ba97addee8",
"assets/img/common/checkbox_s.png": "6385701f956c9fb844ffb89ca1d21d04",
"assets/img/common/back_btn.png": "98ebffe97f7aa9d2146c896608b480b0",
"assets/img/common/btn_cancel.png": "c66ddce24de06a9166d229dd0f887cae",
"assets/img/common/logo.png": "ad973ae6bdfb8e4de7643f2846454b8f",
"assets/img/common/web_mask.png": "ea996ae0a4d7179b8ba20887b82bf6bb",
"assets/img/common/custom_service.png": "a9849ab86cfb0922a1b4d678094738ac",
"assets/img/common/checkbox_n.png": "a54650e5f44528e185e25776d39b1fed",
"assets/img/common/2x/nav_close.png": "b34731171c2719ada2754704469f5376",
"assets/img/common/2x/img_lose.png": "7fa1d0a5f8ae20a9aff0a407b6c8f20b",
"assets/img/common/2x/pop_close_btn.png": "abb90440ea18b9797e7c14bca78993e7",
"assets/img/common/2x/status_empty.png": "fc4c32ef54eccb3737e0d683b61110bd",
"assets/img/common/2x/checkbox_s.png": "d5402b9d6d1e512251047e7c8b668a9e",
"assets/img/common/2x/back_btn.png": "c5d16c86e296b1f0b0540d0a3fa79c84",
"assets/img/common/2x/btn_cancel.png": "1508f855822d0cef0ac63685c8d2ab69",
"assets/img/common/2x/logo.png": "883683618a491404305874fb3c82e5ce",
"assets/img/common/2x/web_mask.png": "2861cad89aa5c231954627572ac0b3f1",
"assets/img/common/2x/custom_service.png": "687164140ddd6bf9cb195295ebc8e8a7",
"assets/img/common/2x/checkbox_n.png": "be361bfbf88bd4413445ab5dbc236f23",
"assets/img/common/2x/loading.png": "48734e660fdfde9f2a4630b8cf91ecb9",
"assets/img/common/2x/status_error.png": "60c4da62f64de6e94569bd2c03192751",
"assets/img/common/2x/tab_me.png": "3129e160085bfc85415a088332736ed6",
"assets/img/common/2x/pwd_close.png": "aa5ea991e8951f3389724dd7b41b8407",
"assets/img/common/2x/pwd_open.png": "00db097144ab505bb31593e6ac3b51b5",
"assets/img/common/loading.png": "01a0d7f149d4788c91203f35fc042872",
"assets/img/common/status_error.png": "cdd6e21d43a5e8e3dd15e5206318cfca",
"assets/img/common/tab_me.png": "35646e9aad644dd452e6add0e4c8614e",
"assets/img/common/pwd_close.png": "5f67653d53950fee510a7b2a1c8b8b3d",
"assets/img/common/pwd_open.png": "2bc93488ceab00877f18986921ea7608",
"assets/img/me/3x/ico_lock.png": "1e80dfc27b42f20a1d005e855476e441",
"assets/img/me/3x/ico_phone.png": "89c8b6d59ea6ce30c6f8b11e91263b32",
"assets/img/me/ico_lock.png": "2299c41d97992c5736eaece5796ac805",
"assets/img/me/ico_phone.png": "b648c4351e35ecb8b05876010b695595",
"assets/img/me/2x/ico_lock.png": "c975f569f1d18a86f1ddd142c1d158bf",
"assets/img/me/2x/ico_phone.png": "399277fda32cf3a7a27d2aa075ea77aa",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
