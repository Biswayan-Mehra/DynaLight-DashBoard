import React, { useEffect } from 'react';
import Plotly from 'plotly.js';

function StockChart() {
  useEffect(() => {
    // Fetch the CSV data
    fetch("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv")
      .then(response => response.text())
      .then(csvData => {
        // Parse the CSV data
        const rows = csvData.split('\n').map(row => row.split(','));

        // Extract Date, AAPL.High, and AAPL.Low data
        const dates = rows.slice(1).map(row => row[0]);
        const highPrices = rows.slice(1).map(row => parseFloat(row[1]));
        const lowPrices = rows.slice(1).map(row => parseFloat(row[2]));

        // Create Plotly traces
        const trace1 = {
          type: "scatter",
          mode: "lines",
          x: dates,
          y: highPrices,
          line: { color: '#1f77b4', width: 2 }, // Dark blue with increased width
          name: 'High Energy' // Add a legend label
        };

        const trace2 = {
          type: "scatter",
          mode: "lines",
          x: dates,
          y: lowPrices,
          line: { color: '#ff7f0e', width: 2 }, // Dark orange with increased width
          name: 'Low Energy' // Add a legend label
        };

        const data = [trace1, trace2];

        // Customize layout
        const layout = {
          title: 'Energy Consumption',
          xaxis: {
            title: 'Time Line', // Add X-axis label
            tickfont: { color: 'white' } // Change tick label color
          },
          yaxis: {
            title: 'Energy',
            tickfont: { color: 'white' } // Change tick label color
          },
          paper_bgcolor: '#1c2229', // White background color
          plot_bgcolor: '#242730',  // Light gray plot background color
          font: {
            color: 'white' // Black text color
          },
          legend: {
            font: { color: 'white' }, // Change legend text color
            x: 0.8, // Adjust legend position
            y: 1.1
          },
          hovermode: 'closest', // Show data on hover
        };

        // Create the plot
        Plotly.newPlot('myDiv', data, layout);
      });
  }, []);

  return (
    <div id="myDiv"></div>
  );
}

export default StockChart;
