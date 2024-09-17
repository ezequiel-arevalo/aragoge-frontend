import '@/styled-components/Heart.css'; // Importa los estilos

const Heart = ({ isFavorite, toggleFavorite }) => {
  return (
    <div className="heart-container" onClick={toggleFavorite}>
      <div className={`heart ${isFavorite ? 'heart-active' : ''}`}></div>
    </div>
  );
};

export default Heart;
