import React from 'react'
import Flat from './flat'
import flats from '../../assets/data/flats.js'

class FlatList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        {flats.map(flat=> {return <Flat 
        price={flat.price} 
        priceCurrency={flat.priceCurrency} 
        name={flat.name}
        imageUrl={flat.imageUrl}
        key={flat.name} />})}
      </div>   
    )


    // return(
    //   <Flat 
    //   price = '150'
    //   priceCurrency = 'EUR'
    //   name = "Charm at the Steps of the Sacre Coeur/Montmartre"
    //   imageUrl='https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg'/>
    // )
  }
}

export default FlatList
