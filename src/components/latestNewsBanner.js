import React from 'react'; // Import styling untuk banner

const LatestNewsBanner = () => {
  return (
    <div className="latest-news-banner">
      <div className="banner-content">
        <h2>Latest News</h2>
        <p>Stay updated with the most recent stories from around the world.</p>
        <a href="/news" className="banner-link">Explore Now</a>
      </div>
    </div>
  );
};

export default LatestNewsBanner;
