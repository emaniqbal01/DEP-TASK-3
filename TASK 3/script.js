import { lazyLoad } from './lazy-load.js';

ga('send', 'pageview', {
    'page': '/path/to/page',
    'title': 'Page Title',
    'loadTime': 1000, // in milliseconds
});


const lazyLoadImages = document.querySelectorAll('.lazy-load');

lazyLoadImages.forEach((image) => {
  lazyLoad(image);
});

