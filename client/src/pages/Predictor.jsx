import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faUsers } from '@fortawesome/free-solid-svg-icons';
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
      setError(err.response?.data?.detail || 'Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  const profile = result !== null ? CLUSTER_PROFILES[result] : null;

  const fields = [
    {
      name: 'Recency',
      label: 'Recencia',
      placeholder: 'Ej: 45',
      hint: 'Días desde la última transacción'
    },
    {
      name: 'Frequency',
      label: 'Frecuencia',
      placeholder: 'Ej: 250',
      hint: 'Total de transacciones'
    },
    {
      name: 'Monetary_Volume',
      label: 'Volumen Monetario',
      placeholder: 'Ej: 50000',
      hint: 'Total gastado ($)'
    },
    {
      name: 'Avg_Account_Balance',
      label: 'Saldo Promedio',
      placeholder: 'Ej: 15000',
      hint: 'Saldo en cuenta ($)'
    }
  ];

  return (
    <div>
      {/* HEADER SECTION */}
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
            Clasificador RFM
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#c3a961',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Ingrese los parámetros del cliente para obtener su segmento bancario
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '4rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {/* FORM COLUMN */}
            <div style={{
              backgroundColor: '#f7f7f7',
              padding: '2.5rem',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{
                textTransform: 'uppercase',
                fontSize: '1.2rem',
                marginBottom: '2rem',
                letterSpacing: '1px'
              }}>
                Datos del Cliente
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {fields.map((field) => (
                  <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{
                      fontWeight: '600',
                      color: '#1a1a1a',
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {field.label}
                    </label>
                    <input
                      type="number"
                      step="any"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        backgroundColor: '#ffffff',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#c3a961';
                        e.target.style.boxShadow = '0 0 0 3px rgba(195, 169, 97, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e0e0e0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                    <small style={{ color: '#999999', fontSize: '0.85rem' }}>
                      {field.hint}
                    </small>
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '1rem',
                    marginTop: '1rem',
                    backgroundColor: loading ? '#999999' : '#1a1a1a',
                    color: '#ffffff',
                    border: '2px solid #1a1a1a',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: loading ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.backgroundColor = '#c3a961';
                      e.target.style.borderColor = '#c3a961';
                      e.target.style.color = '#1a1a1a';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.backgroundColor = '#1a1a1a';
                      e.target.style.borderColor = '#1a1a1a';
                      e.target.style.color = '#ffffff';
                    }
                  }}
                >
                  {loading ? 'Clasificando...' : 'Clasificar Cliente'}
                </button>
              </form>

              {error && (
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(231, 76, 60, 0.05)',
                  borderLeft: '4px solid #e74c3c',
                  color: '#c0392b',
                  fontSize: '0.9rem'
                }}>
                  <strong>Error:</strong> {error}
                </div>
              )}
            </div>

            {/* RESULT COLUMN */}
            <div>
              {result !== null && profile ? (
                <div style={{
                  backgroundColor: '#f7f7f7',
                  padding: '2.5rem',
                  border: '1px solid #e0e0e0',
                  borderLeft: `4px solid ${profile.color}`
                }}>
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: `1px solid ${profile.color}33`,
                      color: profile.color,
                      marginBottom: '1rem'
                    }}>
                      <FontAwesomeIcon icon={faChartPie} style={{ fontSize: '22px' }} />
                    </div>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: profile.color,
                      color: '#ffffff',
                      padding: '0.5rem 1rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Segmento Asignado
                    </span>
                  </div>

                  <h3 style={{
                    color: profile.color,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontSize: '1.5rem',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>
                    {profile.name}
                  </h3>

                  <div style={{
                    textAlign: 'center',
                    color: '#999999',
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem'
                  }}>
                    Clúster #{result}
                  </div>

                  <p style={{
                    color: '#666666',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem'
                  }}>
                    {profile.description}
                  </p>

                  <div style={{
                    backgroundColor: '#ffffff',
                    padding: '1.5rem',
                    border: '1px solid #e0e0e0',
                    marginBottom: '1.5rem'
                  }}>
                    <strong style={{
                      display: 'block',
                      marginBottom: '0.75rem',
                      color: '#1a1a1a',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Estrategia Comercial
                    </strong>
                    <p style={{
                      margin: 0,
                      color: '#666666',
                      fontSize: '0.95rem',
                      lineHeight: '1.7'
                    }}>
                      {profile.strategy}
                    </p>
                  </div>
                </div>
              ) : (
                <div style={{
                  backgroundColor: '#f7f7f7',
                  padding: '3rem 2rem',
                  border: '1px solid #e0e0e0',
                  textAlign: 'center',
                  color: '#999999',
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: '1px solid #e0e0e0',
                      marginBottom: '1rem'
                    }}>
                      <FontAwesomeIcon icon={faUsers} style={{ fontSize: '22px', color: '#1a1a1a' }} />
                    </div>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                      Completa el formulario e ingresa los datos del cliente para ver el resultado de clasificación
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}