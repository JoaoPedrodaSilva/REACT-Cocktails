import React, {useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className='search-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search your favorite cocktail</label>
        <input
          type="text"
          id='name'
          ref={searchValue}
          onChange={searchCocktail}
        />
      </form>
    </section>
  )
}

export default SearchForm