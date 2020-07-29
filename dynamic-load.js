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





function create() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = 'VINAY';
    // document.body.appendChild(btn);
    btn.addEventListener('click', () => console.log('hello'));
    btn.onclick = () => console.log('hello');
}



window.addEventListener('beforeunload', e => {
  e.preventDefault();
  console.log('Hello vinay');
  $.get('http://localhost:3000/vinay');
  e.returnValue = 'do you want to close ??'
});


https://openvidu.discourse.group/t/how-to-convert-the-audio-to-text/728