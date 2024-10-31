import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import KeplerGl from "kepler.gl";
import keplerGlReducer from "kepler.gl/reducers";
import { addDataToMap } from "kepler.gl/actions";
import useSWR from "swr";
import myImage from "./dashboard.png";
import myImage0 from "./home.png";
import myImage2 from "./new-email.png";
import myImage3 from "./mechanical-gears-.png";
import myImage4 from "./infographic.png";
import "./Styles.css";

const apiToken = process.env.REACT_APP_API_TOKEN;

// Constants
const DATA_URL =
  "https://raw.githubusercontent.com/Biswayan-Mehra/Custom-DataSets/refs/heads/main/DynaLight%20Datasets/Karunya_Lights.json";

// Combine reducers
const reducers = combineReducers({
  keplerGl: keplerGlReducer,
});

// Create Redux store
const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const { data, error } = useSWR(DATA_URL, fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Provider store={store}>
      <div className="App">
        <Map data={data} />
        <DraggablePanel />
      </div>
    </Provider>
  );
}

function DraggablePanel() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const maxPositionX = windowWidth - 298;
  const maxPositionY = windowHeight - 323;

  return (
    <Draggable
      bounds={{
        left: -maxPositionX,
        top: -maxPositionY,
        right: 50,
        bottom: 50,
      }}
      class="font-roboto"
    >
      <div className="draggable-panel">
        <div className="head">
          <div className="panels-item">
            <img src={myImage} alt="" />
            Control Panel
          </div>
        </div>
        <div className="panels-button">
          <Link to="/" className="panels-item">
            <img src={myImage0} alt="" />
            DashBoard
          </Link>
        </div>
        <div className="panels-button">
          <Link to="/" className="panels-item">
            <img src={myImage4} alt="" />
            Stats
          </Link>
        </div>
        <div className="panels-button">
          <Link to="/" className="panels-item">
            <img src={myImage2} alt="" />
            Notifications
          </Link>
        </div>
        <div className="panels-button">
          <Link to="/" className="panels-item">
            <img src={myImage3} alt="" />
            Settings
          </Link>
        </div>
      </div>
    </Draggable>
  );
}

function Map({ data }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "Lights",
              id: "lights",
            },
            data,
          },
          option: {
            centerMap: true,
            readOnly: false,
          },
          config: {},
        })
      );
    }
  }, [data, dispatch]);

  return (
    <div className="map-container">
      <KeplerGl
        mapboxApiAccessToken={apiToken}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}

export default App;
