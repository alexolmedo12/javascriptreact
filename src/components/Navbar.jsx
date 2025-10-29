import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#0066cc',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 0,
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div>
        <h1 style={{ color: 'white', margin: 0, fontSize: '24px' }}>MiTienda</h1>
      </div>
      
      <div style={{ display: 'flex', gap: '30px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Productos</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a>
      </div>
      
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;