import React from 'react'
import Loading from '../components/Loading'
import {useParams, Link} from 'react-router-dom'

const CocktailDetails = () => {
  const {id} = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail () {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.json()
        if(data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ]
          const newCocktail = {name, image, info, category, glass, instructions, ingredients}
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])

  if(loading) {
    return <Loading />
  }

  if(!cocktail) {
    return <h2>No cocktail to display!</h2>
  }

  const {name, image, category, info, glass, ingredients} = cocktail

  return (
    <section className='cocktail-details'>      
      <h2 className='details-title'>{name}</h2>
      <div className='details-container'>
        <img src={image} alt={name} />
        <div className='details-info-container'>
          <p> <span>name:</span>{name}</p>
          <p> <span>category:</span>{category}</p>
          <p> <span>info:</span>{info}</p>
          <p> <span>glass:</span>{glass}</p>
          <p>
            <span> Ingredients:</span>
            {ingredients.map((cocktail, index) => {
              return cocktail ? <p className='ingredient' key={index}>{cocktail}</p> : null
            })}
          </p>
        </div>
      </div>
      <Link to='/' className='button'>
        Back Home
      </Link>
    </section>
  )
}

export default CocktailDetails