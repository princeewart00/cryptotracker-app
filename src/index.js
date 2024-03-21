// cryptoTracker.js

const fetch = require('node-fetch');

class CryptoTracker {
  constructor() {
    this.apiUrl = 'https://api.coingecko.com/api/v3';
  }

  async getPrice(symbol) {
    try {
      const response = await fetch(`${this.apiUrl}/simple/price?ids=${symbol}&vs_currencies=usd`);
      const data = await response.json();
      return data[symbol.toLowerCase()].usd;
    } catch (error) {
      console.error('Error fetching cryptocurrency price:', error);
      throw new Error('Failed to fetch cryptocurrency price');
    }
  }

  async getMarketData(symbol) {
    try {
      const response = await fetch(`${this.apiUrl}/coins/${symbol}`);
      const data = await response.json();
      return {
        name: data.name,
        symbol: data.symbol,
        currentPrice: data.market_data.current_price.usd,
        marketCap: data.market_data.market_cap.usd,
        totalVolume: data.market_data.total_volume.usd,
        circulatingSupply: data.market_data.circulating_supply,
        totalSupply: data.market_data.total_supply,
      };
    } catch (error) {
      console.error('Error fetching cryptocurrency market data:', error);
      throw new Error('Failed to fetch cryptocurrency market data');
    }
  }

  async getHistoricalData(symbol, days) {
    try {
      const response = await fetch(`${this.apiUrl}/coins/${symbol}/market_chart?vs_currency=usd&days=${days}`);
      const data = await response.json();
      return data.prices;
    } catch (error) {
      console.error('Error fetching cryptocurrency historical data:', error);
      throw new Error('Failed to fetch cryptocurrency historical data');
    }
  }

  async getCoinList() {
    try {
      const response = await fetch(`${this.apiUrl}/coins/list`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching cryptocurrency list:', error);
      throw new Error('Failed to fetch cryptocurrency list');
    }
  }
}

module.exports = CryptoTracker;
