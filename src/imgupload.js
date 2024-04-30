import React, { useState } from 'react';
import './imgupload.css'; // Import CSS file for styling

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('http://localhost:3030/classify', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setPredictions(data.predictions);

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
    <div className="image-upload-container">
      <h1 className="title">Image Classifier</h1>
      <input type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} />
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Selected" className="preview-image" />
        </div>
      )}
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {predictions.length > 0 && (
        <div className="classification-results">
          <h2>Classification Results:</h2>
          {predictions.map((result, index) => (
            <p key={index} className="result">{result.className}: {Math.round(result.probability * 100)}%</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
