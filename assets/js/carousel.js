/**
 * Carousel/Slider Component
 * Handles image/video carousels with touch support
 */

class Carousel {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.track = this.container.querySelector('.carousel-track');
    this.prevBtn = options.prevBtn || this.container.parentElement.querySelector('.carousel-btn:first-child');
    this.nextBtn = options.nextBtn || this.container.parentElement.querySelector('.carousel-btn:last-child');
    
    this.currentIndex = 0;
    this.itemsPerView = options.itemsPerView || 3;
    this.autoplay = options.autoplay || false;
    this.autoplayInterval = options.autoplayInterval || 5000;
    this.gap = options.gap || 16;
    
    this.touchStartX = 0;
    this.touchEndX = 0;
    
    this.init();
  }
  
  init() {
    if (!this.track) return;
    
    // Button event listeners
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }
    
    // Touch events for mobile swipe
    this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
    this.track.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
    
    // Keyboard navigation
    this.container.addEventListener('keydown', (e) => this.handleKeydown(e));
    
    // Autoplay
    if (this.autoplay) {
      this.startAutoplay();
    }
    
    // Responsive adjustments
    this.updateItemsPerView();
    window.addEventListener('resize', () => this.updateItemsPerView());
    
    // Initial update
    this.updateCarousel();
  }
  
  updateItemsPerView() {
    const width = window.innerWidth;
    
    if (width < 768) {
      this.itemsPerView = 1;
    } else if (width < 1024) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 3;
    }
    
    this.updateCarousel();
  }
  
  prev() {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
    this.updateCarousel();
    this.resetAutoplay();
  }
  
  next() {
    const maxIndex = Math.max(0, this.track.children.length - this.itemsPerView);
    this.currentIndex = Math.min(maxIndex, this.currentIndex + 1);
    this.updateCarousel();
    this.resetAutoplay();
  }
  
  goTo(index) {
    const maxIndex = Math.max(0, this.track.children.length - this.itemsPerView);
    this.currentIndex = Math.min(Math.max(0, index), maxIndex);
    this.updateCarousel();
    this.resetAutoplay();
  }
  
  updateCarousel() {
    if (!this.track || this.track.children.length === 0) return;
    
    const firstItem = this.track.children[0];
    const itemWidth = firstItem.offsetWidth;
    const offset = -(this.currentIndex * (itemWidth + this.gap));
    
    this.track.style.transform = `translateX(${offset}px)`;
    
    // Update button states
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
      this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
    }
    
    if (this.nextBtn) {
      const maxIndex = Math.max(0, this.track.children.length - this.itemsPerView);
      this.nextBtn.disabled = this.currentIndex >= maxIndex;
      this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
    }
  }
  
  handleTouchStart(e) {
    this.touchStartX = e.changedTouches[0].screenX;
  }
  
  handleTouchEnd(e) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
  }
  
  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - go next
        this.next();
      } else {
        // Swiped right - go prev
        this.prev();
      }
    }
  }
  
  handleKeydown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.next();
    }
  }
  
  startAutoplay() {
    this.autoplayTimer = setInterval(() => {
      const maxIndex = Math.max(0, this.track.children.length - this.itemsPerView);
      
      if (this.currentIndex >= maxIndex) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      
      this.updateCarousel();
    }, this.autoplayInterval);
  }
  
  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }
  
  resetAutoplay() {
    if (this.autoplay) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }
  
  destroy() {
    this.stopAutoplay();
    // Remove event listeners if needed
  }
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Carousel;
}
