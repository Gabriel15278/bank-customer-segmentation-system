import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faLandmark,
  faPiggyBank,
  faShieldHeart,
  faUsers,
  faWallet
} from '@fortawesome/free-solid-svg-icons';
import { SEGMENT_METRICS } from '../utils/segmentData';

const SEGMENT_ICONS = {
  0: faUsers,
  1: faLandmark,
  2: faWallet,
  3: faChartLine,
  4: faPiggyBank,
  5: faShieldHeart
};

export default function Segments() {
  return (
    <div>
      <section style={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        padding: '4rem 0',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            letterSpacing: '-1px'
          }}>
            Segmentos Bancarios
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#c3a961',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Análisis detallado de 6 segmentos obtenidos mediante modelo K-Means sobre 884K+ clientes
          </p>
        </div>
      </section>

      <section style={{
        backgroundColor: '#ffffff',
        padding: '4rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {SEGMENT_METRICS.map((segment) => {
              const Icon = SEGMENT_ICONS[segment.cluster] || faUsers;

              return (
                <div
                  key={segment.cluster}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderLeft: `4px solid ${segment.color}`,
                    padding: '2rem',
                    boxShadow: '0 2px 12px rgba(26, 26, 26, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(26, 26, 26, 0.04)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div>
                      <span style={{
                        display: 'inline-block',
                        backgroundColor: segment.color,
                        color: '#ffffff',
                        padding: '0.5rem 0.9rem',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '0.75rem'
                      }}>
                        Clúster {segment.cluster}
                      </span>
                      <h3 style={{
                        color: '#1a1a1a',
                        textTransform: 'uppercase',
                        fontSize: '1.15rem',
                        letterSpacing: '0.8px',
                        margin: 0
                      }}>
                        {segment.name}
                      </h3>
                    </div>

                    <div style={{
                      width: '42px',
                      height: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: '#f7f7f7',
                      color: segment.color,
                      border: `1px solid ${segment.color}20`
                    }}>
                      <FontAwesomeIcon icon={Icon} style={{ fontSize: '18px' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    {[
                      ['Recencia', segment.recency],
                      ['Frecuencia', segment.frequency],
                      ['Volumen', `$${segment.monetary}`],
                      ['Saldo', `$${segment.balance}`]
                    ].map(([label, value]) => (
                      <div key={label} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        padding: '0.8rem 0.9rem',
                        backgroundColor: '#f7f7f7',
                        border: '1px solid #e8e3dc'
                      }}>
                        <span style={{ color: '#666666', fontWeight: '500' }}>{label}</span>
                        <strong style={{ color: '#1a1a1a', fontSize: '0.92rem' }}>{value}</strong>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    backgroundColor: '#fbfaf7',
                    padding: '1rem',
                    borderLeft: `3px solid ${segment.color}`
                  }}>
                    <strong style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#1a1a1a',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px'
                    }}>
                      Estrategia Comercial
                    </strong>
                    <p style={{
                      margin: 0,
                      color: '#666666',
                      fontSize: '0.9rem',
                      lineHeight: '1.6'
                    }}>
                      {segment.strategy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{
        backgroundColor: '#f7f7f7',
        padding: '4rem 0'
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
            Metodología
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ backgroundColor: '#ffffff', padding: '2rem', border: '1px solid #e0e0e0' }}>
              <h4 style={{ marginBottom: '1rem', color: '#c3a961', textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '1px' }}>
                Análisis RFM
              </h4>
              <p style={{ margin: 0, color: '#666666', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Recencia: días desde última transacción. Frecuencia: total de transacciones. Monetario: volumen total invertido.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '2rem', border: '1px solid #e0e0e0' }}>
              <h4 style={{ marginBottom: '1rem', color: '#c3a961', textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '1px' }}>
                Preprocesamiento
              </h4>
              <p style={{ margin: 0, color: '#666666', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Log transformation + Z-score normalization para manejar distribuciones asimétricas.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '2rem', border: '1px solid #e0e0e0' }}>
              <h4 style={{ marginBottom: '1rem', color: '#c3a961', textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '1px' }}>
                Modelo K-Means
              </h4>
              <p style={{ margin: 0, color: '#666666', fontSize: '0.95rem', lineHeight: '1.7' }}>
                K-Means con k=6 clusters. Centroides reales sobre 884,265 clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}