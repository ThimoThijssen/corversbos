// Netwerk eerst, cache als terugval: zo werkt de app ook zonder bereik in het bos
const C='corversbos-v4';
const CORE=['./','index.html','manifest.json','icon-180.png','icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.hostname==='api.open-meteo.com')return; // weer alleen live
  e.respondWith(fetch(e.request).then(r=>{
    if(r.ok||r.type==='opaque'){const x=r.clone();caches.open(C).then(c=>c.put(e.request,x))}
    return r;
  }).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||(e.request.mode==='navigate'?caches.match('index.html'):Response.error()))));
});
