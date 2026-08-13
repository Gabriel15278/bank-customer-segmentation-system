import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>404 - Página no encontrada</h2>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}