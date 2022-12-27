import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GiftsApp = () => {
  const [categories, setcategories] = useState(['One punch'])

  const addCategory = newCategory => {
    if (categories.includes(newCategory)) return //Validamos que la categoria no este repetida
    setcategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Buscador de Gifts</h1>
      <AddCategory onNewCategory={ addCategory } />
      { categories.map(category => <GifGrid key={ category } category={ category } />) }
    </>
  )
}

