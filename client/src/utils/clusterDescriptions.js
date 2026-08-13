export const CLUSTER_PROFILES = {
  0: {
    name: 'Clientes Frecuentes',
    description: 'Alta frecuencia transaccional con saldos y montos sostenidos. Motor operativo clave.',
    color: '#2563eb'
  },
  1: {
    name: 'Alto Valor Estático',
    description: 'Saldos significativos en cuenta con baja frecuencia y operaciones de gran volumen.',
    color: '#7c3aed'
  },
  2: {
    name: 'Masas - Transacción Única',
    description: 'Clientes esporádicos con bajo volumen transaccional y bajo saldo.',
    color: '#64748b'
  },
  3: {
    name: 'Clientes Activos / Recientes',
    description: 'Operatividad en la fecha de corte con liquidez saludable.',
    color: '#059669'
  },
  4: {
    name: 'Masas - Saldo Moderado',
    description: 'Clientes de baja frecuencia pero con saldos medios en cuenta.',
    color: '#d97706'
  },
  5: {
    name: 'Bajo Valor / Inactivos',
    description: 'Saldos residuales y nula recurrencia. Alto riesgo de deserción.',
    color: '#dc2626'
  }
};