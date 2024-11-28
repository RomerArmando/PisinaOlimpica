const API_BASE_URL = '/api'

export const ApiEndpoints = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
  },
  HORAS: {
    BASE: `${API_BASE_URL}/horas`,
    ADD: `${API_BASE_URL}/horas/add`,
    GET_ALL: `${API_BASE_URL}/horas/get`,
    GET_BY_USER: (userId: number) => `${API_BASE_URL}/horas/get/${userId}`,
    DELETE: (horaId: number) => `${API_BASE_URL}/horas/delete/${horaId}`,
  },
  USUARIOS: {
    BASE: `${API_BASE_URL}/usuario`,
    ADD_ADMIN: `${API_BASE_URL}/usuario/add/admin`,
    GET_BY_ID: (id: number) => `${API_BASE_URL}/usuario/get/byid/${id}`,
  },
  TURNOS: {
    BASE: `${API_BASE_URL}/turnos`,
    GET_ALL: `${API_BASE_URL}/turnos/get`,
    ADD: `${API_BASE_URL}/turnos/add`,
    DELETE: (turnoId: number) => `${API_BASE_URL}/turnos/eliminar/${turnoId}`,
  },
  NIVELES: {
    BASE: `${API_BASE_URL}/niveles`,
    GET_ALL: `${API_BASE_URL}/niveles/get`,
    ADD: `${API_BASE_URL}/niveles/add`,
  },
  PROFESORES: {
    GET_ALL: `${API_BASE_URL}/profesores/get`,
  },
};
