import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto', maxWidth: '1200px' }}>
        <a  href = "/" style={{ fontSize: '24px' , color : "#fff" }}>InferSite
        </a>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ display: 'inline-block', marginRight: '20px' }}><a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Home</a></li>
          <li style={{ display: 'inline-block', marginRight: '20px' }}><a href="/toxicity" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Toxicity</a></li>
          <li style={{ display: 'inline-block', marginRight: '20px' }}><a href="/classify" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Classify</a></li>
          <li style={{ display: 'inline-block' }}><a href="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
