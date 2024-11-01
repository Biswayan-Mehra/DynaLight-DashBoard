# DynaLight-DashBoard

DynaLight is an interactive dashboard application designed for managing and visualizing data related to urban lighting systems. Leveraging React, Kepler.gl, Plotly, and Redux, DynaLight provides a dynamic interface to analyze and monitor city lights and infrastructure with intuitive visualizations and controls.

## Features

- **Dynamic Map Interface**: Interactive maps powered by Kepler.gl for real-time data visualization.
- **Draggable Panels**: Customizable, draggable control panels for easy access to different dashboard views.
- **Responsive Navigation**: Side and top navigation bars to switch seamlessly between dashboard components.
- **Data Visualization**: Charts and graphs using Plotly and react-google-charts to display stats and analytics.
- **Cluster and Sector Analysis**: Filterable views to focus on specific cities, zones, sectors, or clusters.

## Tech Stack

- **React**: Core framework for the frontend.
- **Kepler.gl**: For advanced geospatial visualizations.
- **Redux**: State management, with middleware support from `react-palm`.
- **Plotly.js & react-plotly.js**: Data visualization libraries for complex charting.
- **Styled Components**: For modular and reusable component styling.
- **SWR**: For efficient data fetching and caching.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Biswayan-Mehra/DynaLight-DashBoard.git
   cd DynaLight-DashBoard
   ```

2. **Install Dependencies**:
   Make sure Node.js and npm are installed, then run:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory with your API token for Mapbox:

   ```plaintext
   REACT_APP_API_TOKEN=your_mapbox_token
   ```

4. **Run the Application**:
   ```bash
   set NODE_OPTIONS=--openssl-legacy-provider
   npm start
   ```
   The app should be available at `http://localhost:3000`.

## DashBoard Shots:

![DashBoard Image](https://raw.githubusercontent.com/Biswayan-Mehra/DynaLight-DashBoard/refs/heads/main/Images/DashBoard.png)

![MapBoard Image](https://raw.githubusercontent.com/Biswayan-Mehra/DynaLight-DashBoard/refs/heads/main/Images/KeplarGL.png)
