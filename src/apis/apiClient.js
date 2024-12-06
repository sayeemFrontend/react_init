const base_url =
  import.meta.env.MODE == 'development'
    ? import.meta.env.VITE_BASE_URL_DEV
    : import.meta.env.VITE_BASE_URL_PROD;

const token = '';

export async function apiClient({
  end_point = '',
  method = 'GET',
  ...options
}) {
  return fetch(`${base_url}/${end_point}`, {
    method: method,
    headers: {
      Authorization: `bear ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    ...options,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
}
