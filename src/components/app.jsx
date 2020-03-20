import React from 'react';
import Flat from './flat'
import FlatList from './flatlist'
import SimpleMap from './map'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    )
  }
}

export default App;
