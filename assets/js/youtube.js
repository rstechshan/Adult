/**
 * YouTube Data API Integration Module
 * Handles fetching and displaying YouTube channel data
 */

const YouTubeAPI = {
  apiKey: '',
  channelId: '',
  
  /**
   * Initialize the YouTube API module
   */
  init(apiKey, channelId) {
    this.apiKey = apiKey;
    this.channelId = channelId;
  },
  
  /**
   * Fetch channel statistics
   */
  async getChannelStats() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${this.channelId}&key=${this.apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.items && data.items[0]) {
        return {
          subscriberCount: data.items[0].statistics.subscriberCount,
          viewCount: data.items[0].statistics.viewCount,
          videoCount: data.items[0].statistics.videoCount,
          title: data.items[0].snippet.title,
          thumbnail: data.items[0].snippet.thumbnails.default.url
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching channel stats:', error);
      return null;
    }
  },
  
  /**
   * Fetch latest uploads
   */
  async getLatestUploads(maxResults = 6) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelId}&order=date&maxResults=${maxResults}&type=video&key=${this.apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error('Error fetching latest uploads:', error);
      return [];
    }
  },
  
  /**
   * Fetch channel playlists
   */
  async getPlaylists(maxResults = 6) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${this.channelId}&maxResults=${maxResults}&key=${this.apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error('Error fetching playlists:', error);
      return [];
    }
  },
  
  /**
   * Format large numbers (e.g., 1500000 -> 1.5M)
   */
  formatNumber(num) {
    const n = parseInt(num);
    if (n >= 1000000) {
      return (n / 1000000).toFixed(1) + 'M';
    } else if (n >= 1000) {
      return (n / 1000).toFixed(1) + 'K';
    }
    return n.toString();
  },
  
  /**
   * Animate counter from start to end value
   */
  animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = Math.ceil(range / (duration / 16));
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      element.textContent = this.formatNumber(current);
    }, 16);
  },
  
  /**
   * Display video thumbnails in carousel
   */
  displayVideos(videos, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    videos.forEach(video => {
      const videoId = video.id.videoId || video.id;
      const item = document.createElement('div');
      item.className = 'carousel-item';
      
      item.innerHTML = `
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener">
          <img src="${video.snippet.thumbnails.medium.url}" 
               alt="${video.snippet.title}" 
               loading="lazy"/>
          <div class="carousel-overlay">
            <h4 style="font-size: 0.875rem; font-weight: 600; margin: 0;">
              ${video.snippet.title}
            </h4>
          </div>
        </a>
      `;
      
      container.appendChild(item);
    });
  },
  
  /**
   * Display playlists
   */
  displayPlaylists(playlists, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    playlists.forEach(playlist => {
      const card = document.createElement('div');
      card.className = 'blog-card glass';
      
      card.innerHTML = `
        <img class="blog-card-image" 
             src="${playlist.snippet.thumbnails.medium.url}" 
             alt="${playlist.snippet.title}"
             loading="lazy"/>
        <div class="blog-card-content">
          <h3 class="blog-card-title">${playlist.snippet.title}</h3>
          <p class="blog-card-excerpt">${playlist.snippet.description.substring(0, 100)}...</p>
          <a href="https://www.youtube.com/playlist?list=${playlist.id}" 
             target="_blank" 
             rel="noopener"
             class="btn-primary"
             style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.875rem;">
            View Playlist
          </a>
        </div>
      `;
      
      container.appendChild(card);
    });
  }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = YouTubeAPI;
}
