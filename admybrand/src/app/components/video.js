'use client';

import React from 'react';

const VideoFrame = () => {
  return (
    <>
      {/* Hidden SVG with edge-to-edge concave clipPath */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: 0, height: 0, position: 'absolute' }}>
        <defs>
          <clipPath id="concaveClip" clipPathUnits="objectBoundingBox">
            <path d="
              M0,0 
              C0.0,0.00 0.5,0.15 1,0 
              L1,1 
              C1,1 0.5,0.85 0,1 
              Z" />
          </clipPath>
        </defs>
      </svg>

      <div style={styles.videoSection}>
        {/* Full-bleed curved video frame */}
        <div style={styles.videoFrame}>
          {/* Embedded YouTube video */}
          <div style={styles.iframeWrapper}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AXTXrUno2ug?si=qafbupRG1fw50D6z"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={styles.iframe}
            ></iframe>
          </div>

          {/* Play Button (still layered over video if needed) */}
          
        </div>

        {/* Watch More Button */}
        <button style={styles.watchMoreButton}>Watch More</button>
      </div>
    </>
  );
};

const styles = {
  videoSection: {
    backgroundColor: 'black',
    padding: '60px 0',
    position: 'relative',
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    marginLeft: '-23px',
    marginTop: '-35px',
  },
  videoFrame: {
    width: '100vw',
    height: '600px',
    backgroundColor: '#d3d3d3',
    clipPath: 'url(#concaveClip)',
    WebkitClipPath: 'url(#concaveClip)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: '-50px',
  },
  iframeWrapper: {
    width: '100vw',
    height: '600px',
    overflow: 'hidden',
    boxShadow: '0 4px 25px rgba(0, 0, 0, 0.4)',
    
  },
  iframe: {
    width: '102%',
    height: '100%',
    border: 'none',
  },
  
  watchMoreButton: {
    backgroundColor: 'transparent',
    border: '3px solid #00f0ff',
    color: '#00f0ff',
    padding: '12px 30px',
    fontSize: '16px',
    borderRadius: '25px',
    cursor: 'pointer',
    margin: 'auto',
    display: 'block',
    boxShadow: '0 0 15px #00f0ff',
    transition: 'all 0.3s ease',
    marginTop: '10px',
  }
};

export default VideoFrame;
