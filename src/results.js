import React from 'react';

const Results = ({ predictions }) => {
    return (
        <div>
            <h2>Classification Results</h2>
            {predictions.map((prediction, index) => (
                <div key={index}>
                    <p>{prediction.className}: {Math.round(prediction.probability * 100)}%</p>
                </div>
            ))}
        </div>
    );
};

export default Results;
