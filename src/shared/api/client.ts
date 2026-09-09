import { config } from '@shared/config';

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${config.apiUrl}${endpoint}`, options);
  if (!response.ok) throw new Error('API Error');
  return response.json();
}

export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint),
  post: <T>(endpoint: string, data: unknown) =>
    request<T>(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
};