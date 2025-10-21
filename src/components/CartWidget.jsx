const CartWidget = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ fontSize: '24px' }}>🛒</span>
      <span style={{
        position: 'absolute',
        top: '-5px',
        right: '-10px',
        backgroundColor: 'white',
        color: '#0066cc',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        1
      </span>
    </div>
  );
};

export default CartWidget;