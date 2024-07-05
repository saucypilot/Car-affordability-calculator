import React from 'react';

function Background() {
    return (
      <div style={{
        background: `url('/image.jpg') no-repeat center center fixed`,
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        zIndex: -1,
        filter: 'blur(2px)',
        opacity: 0.5,
        backgroundSize: 'cover',
      }}>
      </div>
    );
  }

export default Background;
