import { useState } from 'react';
import api from '../services/api';
import { CLUSTER_PROFILES } from '../utils/clusterDescriptions';

export default function Predictor() {
  const [formData, setFormData] = useState({
    Recency: '',
    Frequency: '',
    Monetary_Volume: '',
    Avg_Account_Balance: ''
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    // Formateo explícito de tipos numéricos
    const payload = {
      Recency: parseFloat(formData.Recency),
      Frequency: parseFloat(formData.Frequency),
      Monetary_Volume: parseFloat(formData.Monetary_Volume),
      Avg_Account_Balance: parseFloat(formData.Avg_Account_Balance)
    };

    try {
      const response = await api.post('/predict_segment', payload);
      if (response.data.status === 'success') {
        setResult(response.data.assigned_cluster);
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Error de comunicación con el microservicio de inferencia.');
    } finally {
      setLoading(false);
    }
  };

  const profile = result !== null ? CLUSTER_PROFILES[result] : null;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Clasificador de Clientes en Tiempo Real</h2>
      <p>Ingrese los descriptores RFM del cliente para ejecutar la inferencia sobre el modelo K-Means:</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>Recencia (Días transcurridos):</label>
          <input
            type="number"
            step="any"
            name="Recency"
            value={formData.Recency}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>Frecuencia (Total transacciones):</label>
          <input
            type="number"
            step="any"
            name="Frequency"
            value={formData.Frequency}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>Volumen Monetario Total ($):</label>
          <input
            type="number"
            step="any"
            name="Monetary_Volume"
            value={formData.Monetary_Volume}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>Saldo Promedio en Cuenta ($):</label>
          <input
            type="number"
            step="any"
            name="Avg_Account_Balance"
            value={formData.Avg_Account_Balance}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.75rem',
            backgroundColor: '#0f172a',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Procesando Inferencia...' : 'Clasificar Cliente'}
        </button>
      </form>

      {error && (
        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fef2f2', color: '#dc2626', borderRadius: '4px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {result !== null && profile && (
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            borderRadius: '6px',
            borderLeft: `6px solid ${profile.color}`,
            backgroundColor: '#f8fafc',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          <span style={{ fontSize: '0.875rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold' }}>
            Segmento Asignado
          </span>
          <h3 style={{ margin: '0.5rem 0', color: profile.color }}>
            Clúster {result}: {profile.name}
          </h3>
          <p style={{ margin: 0, color: '#334155' }}>{profile.description}</p>
        </div>
      )}
    </div>
  );
}