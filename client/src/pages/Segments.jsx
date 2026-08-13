import { SEGMENT_METRICS } from '../utils/segmentData';

export default function Segments() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Perfilamiento de Segmentos (Modelo K-Means, k=6)</h2>
      <p style={{ color: '#475569', marginBottom: '2rem' }}>
        Desglose analítico de las características operativas y valores medios (centroides reales) calculados sobre la matriz RFM:
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {SEGMENT_METRICS.map((segment) => (
          <div
            key={segment.cluster}
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              borderTop: `6px solid ${segment.color}`,
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>
              Clúster {segment.cluster}
            </span>
            <h3 style={{ margin: '0.25rem 0 1rem 0', color: segment.color }}>
              {segment.name}
            </h3>

            <table style={{ width: '100%', fontSize: '0.875rem', borderCollapse: 'collapse', marginBottom: '1rem' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.4rem 0', color: '#64748b' }}>Recencia Promedio:</td>
                  <td style={{ padding: '0.4rem 0', textAlign: 'right', fontWeight: 'bold' }}>{segment.recency}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.4rem 0', color: '#64748b' }}>Frecuencia Promedio:</td>
                  <td style={{ padding: '0.4rem 0', textAlign: 'right', fontWeight: 'bold' }}>{segment.frequency}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.4rem 0', color: '#64748b' }}>Volumen Monetario:</td>
                  <td style={{ padding: '0.4rem 0', textAlign: 'right', fontWeight: 'bold' }}>{segment.monetary}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.4rem 0', color: '#64748b' }}>Saldo en Cuenta:</td>
                  <td style={{ padding: '0.4rem 0', textAlign: 'right', fontWeight: 'bold' }}>{segment.balance}</td>
                </tr>
              </tbody>
            </table>

            <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '4px', fontSize: '0.8125rem' }}>
              <strong>Estrategia Comercial:</strong>
              <p style={{ margin: '0.25rem 0 0 0', color: '#334155' }}>{segment.strategy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}