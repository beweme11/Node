import React, { useState } from 'react';
import './imgupload.css'; // Import CSS file for styling

const FacialSentimentAnalyzer = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:8000/classify_image', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setResult(data);

          // Display image preview
          const reader = new FileReader();
          reader.onload = (e) => {
            setImagePreview(e.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          throw new Error('Server responded with error ' + response.status);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="facial-sentiment-analyzer-container">
      <h1 className="title">Facial Sentiment Analyzer</h1>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Selected" className="preview-image" />
        </div>
      )}
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {result && (
        <div className="classification-results">
          <h2>Analysis Results:</h2>
          <p><strong>Predicted Class:</strong> {result.class_label}</p>
          {/* <p><strong>Confidence:</strong> {result.logits.max()}%</p> */}
        </div>
      )}
    </div>
  );
};

export default FacialSentimentAnalyzer;
