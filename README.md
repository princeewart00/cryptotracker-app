# Cryptocurrency Tracker

A simple JavaScript package to track cryptocurrency prices, market data, and historical data.

## Installation

```bash
npm install crypto-tracker
```

## Usage

```javascript
const CryptoTracker = require('crypto-tracker');

const tracker = new CryptoTracker();

// Get current price of Bitcoin
tracker.getPrice('bitcoin')
  .then(price => console.log('Current price of Bitcoin:', price))
  .catch(error => console.error('Error:', error));

// Get market data for Ethereum
tracker.getMarketData('ethereum')
  .then(data => console.log('Market data for Ethereum:', data))
  .catch(error => console.error('Error:', error));

// Get historical data for Litecoin for the last 7 days
tracker.getHistoricalData('litecoin', 7)
  .then(data => console.log('Historical data for Litecoin (last 7 days):', data))
  .catch(error => console.error('Error:', error));

// Get list of available cryptocurrencies
tracker.getCoinList()
  .then(list => console.log('List of available cryptocurrencies:', list))
  .catch(error => console.error('Error:', error));
```

## Methods

- `getPrice(symbol)`: Get the current price of a cryptocurrency.
- `getMarketData(symbol)`: Get market data for a cryptocurrency.
- `getHistoricalData(symbol, days)`: Get historical price data for a cryptocurrency for the specified number of days.
- `getCoinList()`: Get a list of available cryptocurrencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
