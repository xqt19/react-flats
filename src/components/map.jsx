import GoogleMapReact from 'google-map-react';
import React from 'react'

const AnyReactComponent = ({ text }) => <div style={{
    color: 'white',
    background: 'red',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 1.289520,
      lng: 103.850868
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '1000px', width: '1000px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <AnyReactComponent lat={1.289520} lng={103.850868} text="SG50"/>

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
