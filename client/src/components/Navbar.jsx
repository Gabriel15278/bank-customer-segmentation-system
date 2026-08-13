import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e0e0e0',
      padding: '1.5rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '1.3rem',
          fontWeight: '700',
          color: '#1a1a1a',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Bank Analysis
        </div>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#c3a961' : '#1a1a1a',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              borderBottom: isActive ? '2px solid #c3a961' : '2px solid transparent',
              paddingBottom: '0.5rem'
            })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/predictor"
            style={({ isActive }) => ({
              color: isActive ? '#c3a961' : '#1a1a1a',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              borderBottom: isActive ? '2px solid #c3a961' : '2px solid transparent',
              paddingBottom: '0.5rem'
            })}
          >
            Clasificador
          </NavLink>
          <NavLink
            to="/segments"
            style={({ isActive }) => ({
              color: isActive ? '#c3a961' : '#1a1a1a',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              borderBottom: isActive ? '2px solid #c3a961' : '2px solid transparent',
              paddingBottom: '0.5rem'
            })}
          >
            Segmentos
          </NavLink>
        </nav>
      </div>
    </nav>
  );
}