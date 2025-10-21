const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '50px',
      textAlign: 'center',
      minHeight: '80vh'
    }}>
      <h2 style={{ color: '#0066cc', fontSize: '32px' }}>
        {greeting}
      </h2>
      <p style={{ color: '#666', fontSize: '18px', marginTop: '20px' }}>
        Próximamente nuestro catálogo de productos
      </p>
    </div>
  );
};

export default ItemListContainer;