import React from 'react';
import { StateProvider } from './State';
import MapComponent from './components/Map';
import Sidebar from './components/Sidebar'
import {LOAD_DATA,CLEAN_DATA,UPDATE_DATA} from './actions'


const App = () => {
  const initialState = {
    geoData: [],
    geoDataFiltered:[]
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case LOAD_DATA:
        return {
          ...state,
          geoData: action.newGeoData,
          geoDataFiltered: action.newGeoData
        };
      case CLEAN_DATA:
        return {
          ...state,
          geoData: [],
          geoDataFiltered:[]
        };
      case UPDATE_DATA:
        return {
          ...state,
          geoDataFiltered: action.newGeoData
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
