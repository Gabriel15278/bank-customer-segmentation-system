import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      backgroundColor: '#f7f7f7',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{
          fontSize: '4rem',
          margin: '0 0 1rem 0',
          color: '#c3a961',
          fontWeight: '700',
          letterSpacing: '-2px'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '1.8rem',
          margin: '0 0 1rem 0',
          color: '#1a1a1a',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Página no encontrada
        </h2>
        <p style={{
          fontSize: '1.05rem',
          color: '#666666',
          marginBottom: '2rem',
          maxWidth: '500px',
          lineHeight: '1.8'
        }}>
          Lo sentimos, la página que buscas no existe o ha sido movida. Por favor, regresa al inicio.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: '0.9rem',
            border: '2px solid #1a1a1a',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c3a961';
            e.currentTarget.style.borderColor = '#c3a961';
            e.currentTarget.style.color = '#1a1a1a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1a1a1a';
            e.currentTarget.style.borderColor = '#1a1a1a';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}