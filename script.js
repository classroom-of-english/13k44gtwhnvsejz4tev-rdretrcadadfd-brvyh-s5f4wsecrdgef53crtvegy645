let history = [];
let current = 0;

document.addEventListener("DOMContentLoaded", function() {
  const goButton = document.getElementById('go');
  const urlInput = document.getElementById('url');
  const iframe = document.getElementById('iframe');
  const backButton = document.getElementById('back-button');
  const forwardButton = document.getElementById('forward-button');
  const bookmarkButton = document.getElementById('bookmark-button');
  const bookmarkUl = document.getElementById('bookmark-ul');

  goButton.addEventListener('click', function() {
    const url = urlInput.value;
    if (history.length > 0) {
      history = [];
      current = 0;
    }
    history.push(url);
    iframe.src = url;
  });

  backButton.addEventListener('click', function() {
    if (current > 0) {
      current--;
      iframe.src = history[current];
    }
  });

  forwardButton.addEventListener('click', function() {
    if (current < history.length - 1) {
      current++;
      iframe.src = history[current];
    }
  });

  bookmarkButton.addEventListener('click', function() {
    const title = prompt('请输入书签标题:');
    if (title) {
      const li = document.createElement('li');
      li.textContent = title;
      bookmarkUl.appendChild(li);
      li.addEventListener('click', function() {
        iframe.src = history[history.length - 1];
      });
    }
  });

  iframe.addEventListener('load', function() {
    document.title = iframe.title;
  });
});
