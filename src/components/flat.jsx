import React from 'react'

class Flat extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: `${this.props.name}`,
      price: `${this.props.price}` + ` ${this.props.priceCurrency}`,
      imageUrl: `${this.props.imageUrl}`
    }
  }

  render(){
    let styles = {backgroundImage: `url(${this.state.imageUrl})`}
    return(
      <div className="card" style={styles}>
        <h5>{this.state.imageUrl}</h5>
        <div className="card-category">{this.state.price}</div>
        <div className="card-description">
          <h2>{this.state.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat
