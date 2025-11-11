import { useState, useEffect } from 'react';
import NavBar from './Navbar';

function NavBarContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => {
        console.log('Categorías recibidas:', data);
        // La API devuelve un array de strings, necesitamos convertirlo a objetos
        const categoriesFormatted = data.map(cat => ({
          slug: cat,
          name: cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')
        }));
        setCategories(categoriesFormatted);
      })
  }, []);

  return (
    <NavBar categories={categories} />
  );
}

export default NavBarContainer;