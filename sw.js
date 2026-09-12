self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('fetch', () => {}); // пустой обработчик — достаточно чтобы браузер считал сайт "устанавливаемым"
