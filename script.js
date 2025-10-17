function updateTime() {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  timeEl.textContent = Date.now();
}

updateTime(); // initial render
setInterval(updateTime, 1000); // optional continuous update
