export class ApiError extends Error {
  constructor(
    public message: string,
    public status: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiClient<T>(
  url: string,
  options?: RequestInit & { next?: NextFetchRequestConfig },
): Promise<T> {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new ApiError(message || 'API request failed', response.status);
  }

  return response.json() as Promise<T>;
}
