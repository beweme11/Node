import React, { Component } from 'react';
import './txtupload.css';

class TextSentimentAnalysis extends Component {
  state = {
    textToCheck: '',
    prediction: null,
    error: null
  };

  handleTextChange = (event) => {
    this.setState({ textToCheck: event.target.value });
  };

  handleCheckSentiment = async () => {
    const { textToCheck } = this.state;
    try {
      const response = await fetch('http://localhost:8000/analyze_text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textToCheck }),
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ prediction: data.result[0], error: null });
      } else {
        throw new Error('Server responded with error ' + response.status);
      }
    } catch (error) {
      this.setState({ error: error.message, prediction: null });
    }
  };

  render() {
    const { textToCheck, prediction, error } = this.state;

    return (
      <div className="sentiment-analysis-container">
        <h1>Text Sentiment Analysis</h1>
        <textarea
          className="input-text"
          rows="4"
          cols="50"
          value={textToCheck}
          onChange={this.handleTextChange}
          placeholder="Enter text to analyze sentiment"
        ></textarea>
        <br />
        <button className="check-button" onClick={this.handleCheckSentiment}>Analyze Sentiment</button>
        <br />
        {error && <p className="error">Error: {error}</p>}
        {prediction && (
          <div className="prediction-result">
            <h2>Sentiment Prediction:</h2>
            <p><strong>Emotion:</strong> {prediction.label}</p>
            <p><strong>Score:</strong> {Math.round(prediction.score * 100)}%</p>
          </div>
        )}
      </div>
    );
  }
}

export default TextSentimentAnalysis;
