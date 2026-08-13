export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#e0e0e0',
      padding: '3rem 0 2rem',
      borderTop: '1px solid #333333',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '2rem'
        }}>
          {/* Brand */}
          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: '#c3a961',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '1rem'
            }}>
              Bank Analysis
            </h4>
            <p style={{
              margin: 0,
              color: '#999999',
              fontSize: '0.9rem',
              lineHeight: '1.7'
            }}>
              Plataforma de segmentación de clientes bancarios basada en análisis RFM y machine learning.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: '#c3a961',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '1rem'
            }}>
              Servicios
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/" style={{ color: '#999999', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Inicio
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/predictor" style={{ color: '#999999', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Clasificador RFM
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/segments" style={{ color: '#999999', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Segmentos
                </a>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: '#c3a961',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '1rem'
            }}>
              Tecnología
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '0.9rem',
              color: '#999999',
              lineHeight: '1.8'
            }}>
              <li>• React + Vite</li>
              <li>• FastAPI</li>
              <li>• scikit-learn</li>
              <li>• SQL Server</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: '1px solid #333333',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            margin: 0,
            color: '#666666',
            fontSize: '0.85rem'
          }}>
            © {currentYear} Bank Analysis. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
