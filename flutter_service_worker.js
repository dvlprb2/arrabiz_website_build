'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2d3a0cd9b8e03073c57f72373ff87555",
"index.html": "286c3613433e31c86fe4e32983005f7c",
"/": "286c3613433e31c86fe4e32983005f7c",
"main.dart.js": "2d77691ed361d6972babb8cadb055fc8",
"favicon.png": "19507cad975376af15b9e7f3cad129bc",
"icons/Icon-192.png": "9a598fc0fd4d52ae307ee75ef42ae214",
"icons/Icon-512.png": "7a1c83c6440083b967c2ebfefc380d27",
"manifest.json": "3771d678033634b8766d65a827dc77ef",
".git/config": "25cb91791e4f3c6cfb6970e4193f3d10",
".git/objects/51/9af60ab19d120f19e1b3aa150fc15ec907c4fd": "fe9e3888a8465ea4b8b37fbc3085b012",
".git/objects/67/9e840178e1a07e4877482facb6761ba00314b9": "940e226dfdfbce433c25743887ac1961",
".git/objects/b2/9b7b0104716c9f05f3a71cc3b5113857db31e0": "55eeb15f805d0843387204c6dd20d810",
".git/objects/d9/a232c772d577b9042358369707f333ce8794a8": "b17ba83f3bb57ab173f713a286367ddd",
".git/objects/d6/25671aa333dd50ee90143a4d6531d93ae26850": "ba028bc2ee2577999c002ece5f958059",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c7/85262429efeb4c0d9fef4142482da3fe6dc7c7": "4f89109dd2356cef39c8da9f30bbcdce",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fb/b49560eea3cca29f2c54bd8319e9e5c80897bc": "c38af8befae05b64a10321e6fea5f255",
".git/objects/c6/d2b21ba9fb3e44ae4f1ad2eb810be8f5abf8a5": "9db558934a57266ec29cb451b0f5fbd1",
".git/objects/8f/1fbfd93f3a4fa16e718beea63c2555f465d76c": "d89ffeda962361507010359157b65d74",
".git/objects/21/cf67aabd809dc045626fbecfdc586024f2c22e": "185786200c228e3f194b1f48841d1ba4",
".git/objects/4d/87e5f5cc16a0d7b87730c6c175c711344b8aea": "742dc93392873a44f212d33bba673762",
".git/objects/86/d619d5c2d7e39dcfd0ef8aaf8d9c576a8f4b20": "eee8c571491bc1683da23383ff6b8dab",
".git/objects/38/9f95a32c519faabb0528b3b1273c7db4fbd322": "9e88154a334bf70c03e5af48d8f2bd67",
".git/objects/9a/f39b754b065450944eda803083c718631ffe2a": "430f08ac36e2edded30ca42acfe27500",
".git/objects/36/c7f409dca2c83fd8bbbcee31c193e2c3307c04": "58151d66a1dfd411d0491ed40f85bee9",
".git/objects/09/e305ae2913273a81b4de696c6cd8e3c0b98c40": "6c471e8c6c98e2b3e7895b31b20a2b51",
".git/objects/0f/238bf0581b4658c20d9f0bcbcffebea013e710": "ed3db42ccfdb92d8adebc3b4daff07ff",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/a0af24f3876b8997e1756e1b4da49998641f0d": "cd76f447a2ef15fb4d1641c28f3bf1eb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e7/3d828c10ccba91bd15bf520d107f2d4b1958c3": "68d79bb22fbffdfd757763f1893a507c",
".git/objects/ce/ecb91f5f17987d7d69cce973d20f6f6511b2b8": "15645365258b2e05a2bc055d44715bc3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/36d6da8fa359cb69795fc90d5786f64b7ec61b": "667819da7fd348ae1b8b262d4e33d7cf",
".git/objects/48/390b22d05bb9d8ffe42fc61e1427d4d2ff83bd": "ff6f83c5815b7c375afebea7b6ae5303",
".git/objects/4a/f03795e9d4ee25a0b835192dde9216bdb389fa": "36943b098dbf812225e3c113f05c2393",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd577011afd207b9d2af0654994d5d2b",
".git/logs/refs/heads/master": "bd577011afd207b9d2af0654994d5d2b",
".git/logs/refs/remotes/origin/master": "efeef78726e1757e5f4a6ec5367a3794",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "f892617a1bb35628febb3661355857c2",
".git/refs/remotes/origin/master": "f892617a1bb35628febb3661355857c2",
".git/index": "6432bbee4e671fd1160c737afaa78a88",
".git/COMMIT_EDITMSG": "c89843e689fb11c8a606d579ec06670b",
"assets/AssetManifest.json": "59d024bce61b6387845f5850af13af6c",
"assets/NOTICES": "923e10109ef83d94a94534ceff9c906e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/github.svg": "ddc250127189a3b4ee4802e6c2493757",
"assets/assets/mockup.png": "600e265f0eb45b8552cb69d87eb2c681",
"assets/assets/reports.png": "5e794fbec2a884194217e0fa7a135eaf",
"assets/assets/instagram.svg": "5b23a837268b09d0efa9e307023c1dae",
"assets/assets/backup.png": "b16d7eeb24662b107213629b4ca9903d",
"assets/assets/invoice.png": "e7817b37ead8d8de1f33bd5cc221f357",
"assets/assets/logo.png": "64e09e1d0c521520ac0fdb46edaeb9cc",
"assets/assets/waves.svg": "cd99d9e4775c82e16b21b172a41fd528"
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
