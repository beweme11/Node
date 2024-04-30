import React, { Component } from 'react';
import './txtupload.css';

class ToxicityChecker extends Component {
  state = {
    textToCheck: '',
    predictions: [],
    error: null
  };

  handleTextChange = (event) => {
    this.setState({ textToCheck: event.target.value });
  };

  handleCheckToxicity = async () => {
    const { textToCheck } = this.state;
    try {
      const response = await fetch('http://localhost:3030/toxicity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textToCheck }),
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ predictions: data.predictions, error: null });
      } else {
        throw new Error('Server responded with error ' + response.status);
      }
    } catch (error) {
      this.setState({ error: error.message, predictions: [] });
    }
  };

  render() {
    const { textToCheck, predictions, error } = this.state;

    return (
      <div className="toxicity-checker-container">
        <h1>Toxicity Checker</h1>
        <textarea
          className="input-text"
          rows="4"
          cols="50"
          value={textToCheck}
          onChange={this.handleTextChange}
          placeholder="Enter text to check for toxicity"
        ></textarea>
        <br />
        <button className="check-button" onClick={this.handleCheckToxicity}>Check Toxicity</button>
        <br />
        {error && <p className="error">Error: {error}</p>}
        {predictions.length > 0 && (
          <div>
            <h2>Toxicity Predictions:</h2>
            <ul>
              {predictions.map((prediction, index) => (
                <li key={index}>
                  <strong>{prediction.label}</strong>:
                  <ul>
                    {prediction.results.map((result, resultIndex) => (
                      <li key={resultIndex}>
                        {Object.entries(result.probabilities).map(([key, value]) => (
                          <div key={key}>
                            
                            <strong>{key}:</strong> {Math.round(value * 100)}%
                          </div>
                        ))}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default ToxicityChecker;
