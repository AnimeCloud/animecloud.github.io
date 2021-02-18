var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'AniCloud',
  // App id
  id: 'anicloud.ml',
  // Enable swipe panel
  //panel: {
  //  swipe: true,
  //},
  //Theme
  theme: 'ios',
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/download/',
      url: 'download.html',
    },
  ],
  // ... other parameters
});