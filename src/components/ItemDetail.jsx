import React from 'react'

const ItemDetail = ({ item }) => {
  if (!item) {
    return <div style={{ padding: '20px' }}>Cargando...</div>
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <img 
        src={item.thumbnail} 
        alt={item.title} 
        style={{ width: '250px', marginBottom: '15px' }} 
      />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p style={{ fontSize: '20px', margin: '10px 0' }}>${item.price}</p>
      <p>Stock: {item.stock}</p>
      <button style={{ padding: '8px 16px', marginTop: '10px', cursor: 'pointer' }}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemDetail