self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("screen-time").then(cache =>
      cache.addAll(["./", "./index.html"])
    )
  );
});
