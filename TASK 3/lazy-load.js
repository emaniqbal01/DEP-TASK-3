
export function lazyLoad(image) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        image.classList.add('loaded');
      }
    }, {
      rootMargin: '50px',
    });
  
    observer.observe(image);
  }