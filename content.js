if (!document.body.hasAttribute('data-dark-mode')) {
    document.body.setAttribute('data-dark-mode', 'true');
    document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
    document.querySelectorAll('img, video').forEach(el => el.style.filter = "invert(1) hue-rotate(180deg)");
  } else {
    document.body.removeAttribute('data-dark-mode');
    document.documentElement.style.filter = "";
    document.querySelectorAll('img, video').forEach(el => el.style.filter = "");
  }