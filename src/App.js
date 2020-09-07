import React from 'react';
import { StateProvider } from './State';
import MapComponent from './components/Map';
import Sidebar from './components/Sidebar'


const App = () => {
  const initialState = {
    geoData: []
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'loadData':
        return {
          ...state,
          geoData: action.newGeoData
        };
      case 'cleanData':
        return {
          ...state,
          geoData: []
        };
      default:
        return state;
    }
  };
  return (
    <div className={'page-container'}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Sidebar/>
        <MapComponent />
      </StateProvider>
    </div>
  );
}

export default App;
