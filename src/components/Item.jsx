import React from 'react'
import { Link } from 'react-router'

const ItemList = ({ items }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Productos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {items.map(item => (
          <Link 
            to={`/item/${item.id}`} 
            key={item.id} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', cursor: 'pointer', transition: 'transform 0.2s' }} 
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#006cc' }}>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ItemList