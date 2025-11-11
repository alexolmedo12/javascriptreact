import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemList from './Item'

function ItemListContainer() {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const urlCategories = `https://dummyjson.com/products/category/${categoryId}`
    const urlBase = 'https://dummyjson.com/products'

    fetch(categoryId ? urlCategories : urlBase)
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, [categoryId])

  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer