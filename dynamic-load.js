function loadFile(path, type) {
  if (type == 'js') {
    var fileref = document.createElement('script');
    fileref.setAttribute('type', 'text/javascript');
    fileref.setAttribute('src', path);
  } else if (type == 'css') {
    var fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', path);
  }
  document.getElementsByTagName('head')[0].appendChild(fileref);
}
