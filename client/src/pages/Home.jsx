import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section style={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        padding: '8rem 0',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            letterSpacing: '-1px'
          }}>
            Bank Analysis
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#c3a961',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Segmentación inteligente de clientes bancarios
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#e0e0e0',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.8'
          }}>
            Utiliza análisis RFM y machine learning para clasificar tus clientes en segmentos bancarios. 
            Toma decisiones estratégicas basadas en datos precisos y en tiempo real.
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              to="/predictor"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.5rem',
                backgroundColor: '#c3a961',
                color: '#1a1a1a',
                textDecoration: 'none',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.9rem',
                border: '2px solid #c3a961',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b39458';
                e.currentTarget.style.borderColor = '#b39458';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#c3a961';
                e.currentTarget.style.borderColor = '#c3a961';
              }}
            >
              Clasificar Clientes
            </Link>
            <Link
              to="/segments"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.5rem',
                backgroundColor: 'transparent',
                color: '#c3a961',
                textDecoration: 'none',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.9rem',
                border: '2px solid #c3a961',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c3a961';
                e.currentTarget.style.color = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#c3a961';
              }}
            >
              Ver Segmentos
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '5rem 0'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '1.8rem',
              marginBottom: '3rem',
              position: 'relative',
              paddingBottom: '1.5rem'
            }}>
              Acerca de
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50px',
                height: '2px',
                backgroundColor: '#c3a961'
              }}></div>
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: '#666666',
              lineHeight: '1.9',
              marginBottom: '1.5rem'
            }}>
              Bank Analysis es una plataforma de segmentación de clientes bancarios construida con tecnologías modernas de machine learning. 
              Nuestro sistema utiliza análisis RFM (Recencia, Frecuencia, Monetario) para clasificar clientes automáticamente.
            </p>

            <p style={{
              fontSize: '1.05rem',
              color: '#666666',
              lineHeight: '1.9'
            }}>
              Con más de 884,000 clientes analizados y 6 segmentos diferenciados, proporcionamos insights valiosos para optimizar tu estrategia comercial, 
              mejorar la retención de clientes y maximizar el valor de vida del cliente.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{
        backgroundColor: '#f7f7f7',
        padding: '5rem 0'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '1.8rem',
            marginBottom: '3rem',
            position: 'relative',
            paddingBottom: '1.5rem'
          }}>
            Nuestros Servicios
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50px',
              height: '2px',
              backgroundColor: '#c3a961'
            }}></div>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Service 1 */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              border: '1px solid #e0e0e0',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={{
                textTransform: 'uppercase',
                fontSize: '1.2rem',
                marginBottom: '1rem',
                letterSpacing: '1px'
              }}>
                Clasificación RFM
              </h3>
              <p style={{
                color: '#666666',
                lineHeight: '1.8'
              }}>
                Análisis en tiempo real de Recencia, Frecuencia y Volumen Monetario para identificar el perfil de cada cliente.
              </p>
            </div>

            {/* Service 2 */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              border: '1px solid #e0e0e0',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={{
                textTransform: 'uppercase',
                fontSize: '1.2rem',
                marginBottom: '1rem',
                letterSpacing: '1px'
              }}>
                Segmentación Automática
              </h3>
              <p style={{
                color: '#666666',
                lineHeight: '1.8'
              }}>
                Algoritmo K-Means que clasifica automáticamente clientes en 6 segmentos bancarios diferenciados y homogéneos.
              </p>
            </div>

            {/* Service 3 */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              border: '1px solid #e0e0e0',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={{
                textTransform: 'uppercase',
                fontSize: '1.2rem',
                marginBottom: '1rem',
                letterSpacing: '1px'
              }}>
                Estrategias Comerciales
              </h3>
              <p style={{
                color: '#666666',
                lineHeight: '1.8'
              }}>
                Recomendaciones personalizadas para cada segmento, optimizando retención y valor de vida del cliente.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              to="/segments"
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
              Ver Todos los Segmentos →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}