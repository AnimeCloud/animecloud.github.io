// Dom7
var $ = Dom7;

// Theme
var tdevice = 'auto';
if (document.location.search.indexOf('device=') >= 0) {
  fdevice = document.location.search.split('device=')[1].split('&')[0];
  if (fdevice === 'ios' || fdevice === 'md') {
    tdevice = fdevice;
  }
}
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
if (document.location.search.indexOf('appid=') >= 0) {
  appinst = document.location.search.split('appid=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: tdevice, //Theme
  data: function () {
    return {
      user: {
        firstName: 'Warkov',
        lastName: 'ITDNC',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  panel: {
    swipe: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  el: 'body class="theme-dark"',
});