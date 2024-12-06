import { apiClient } from './apiClient';

export async function getUser() {
  return await apiClient({ end_point: 'todosff' });
}
