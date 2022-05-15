import React from 'react'
import Cocktail from './Cocktail.js'
import Loading from './Loading.js'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext()

  if(loading) {
    return <Loading />
  }

  if(cocktails.length < 1) {
    return <h2 className='cocktail-list-title'>No cocktails matched your search criteria</h2>
  }

  return (
    <section className='cocktail-list-section'>
      <div className='cocktail-list'>
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />
        })}
      </div>
    </section>
  )
}

export default CocktailList