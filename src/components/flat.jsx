import React from 'react'

class Flat extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg'
    let styles = {backgroundImage: `url(${url})`}
    return(
      <div className="card" style={styles}>
        <div className="card-category">150 EUR</div>
        <div className="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat
