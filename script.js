class LinearRegression {
    constructor(learningRate = 0.01, iterations = 1000) {
        this.learningRate = learningRate;
        this.iterations = iterations;
        this.m = 0; // Slope
        this.b = 0; // Y-intercept
    }

    train(features, labels) {
        const n = features.length;
        for (let i = 0; i < this.iterations; i++) {
            let guess = 0;
            for (let j = 0; j < n; j++) {
                guess += this.m * features[j] + this.b;
            }
            const error = guess - labels.reduce((a, b) => a + b, 0) / n;
            this.m -= (2 / n) * this.learningRate * features.reduce((a, b) => a + b, 0) * error;
            this.b -= (2 / n) * this.learningRate * error;
        }
    }

    predict(feature) {
        return this.m * feature + this.b;
    }
}

// Example usage:
const features = [1500, 2000, 2500, 3000]; // Square footage
const labels = [100000, 150000, 200000, 250000]; // Corresponding house prices

const regression = new LinearRegression();
regression.train(features, labels);

const testFeature = 1800; // Square footage of a new house
const predictedPrice = regression.predict(testFeature);
console.log("Predicted price:", predictedPrice);
