import React from 'react';
import './home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to our Model Inference Website!</h1>
        <p>
          Harness the power of machine learning to perform sentiment analysis on text and images.
          Our website offers model inference capabilities to provide insights and predictions in real-time.
        </p>
        <p>
          Whether you're analyzing sentiment in online comments, in images, or exploring other AI applications,
          our platform empowers you to make informed decisions with ease.
        </p>
        <p>
          With state-of-the-art models and a user-friendly interface, dive into the world of artificial intelligence and unlock endless possibilities for your business or project.
        </p>
<div style = {{ border: '2px solid #000' , paddingtop : "50px"}}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Text sentiment analysis</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Our Text sentiment analysis advanced machine learning models to analyze text
        for sentiment. Simply input the text you want to analyze.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Whether you're moderating user-generated content, analyzing comments, or monitoring
        social media conversations, our Text Toxicity Checker can help you maintain a safe
        and respectful online environment.
      </p>
      <a href="/toxicity" style={{ border: '1px solid #000', backgroundColor: '#fff', padding: '10px 20px', textDecoration: 'none', color: '#000' }}>Try it out!</a>
      </div>

      <div style = {{ border: '2px solid #000'}}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Image Senitment Analysis</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
      Our Image Sentiment Tool instantly analyzes your uploaded pictures, offering insights into the emotions of the person.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
      "When you upload an image to our platform, our system  sends it to our server for processing. Our server uses  machine learning algorithms to analyze the image and extract valuable insights."
      </p>
      <a href="/classify" style={{ border: '1px solid #000', backgroundColor: '#fff', padding: '10px 20px', textDecoration: 'none', color: '#000' }}>Try it out!</a>
      </div>
      </div>
    </div>

  );
};

export default Home;
