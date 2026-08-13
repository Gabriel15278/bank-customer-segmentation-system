import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#1e293b', color: '#fff', display: 'flex', gap: '1rem' }}>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#fff', textDecoration: 'none' })}>
        Inicio
      </NavLink>
      <NavLink to="/predictor" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#fff', textDecoration: 'none' })}>
        Clasificador RFM
      </NavLink>
      <NavLink to="/segments" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : '#fff', textDecoration: 'none' })}>
        Segmentos
      </NavLink>
    </nav>
  );
}