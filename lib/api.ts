import { ApiResponse } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

interface FetchOptions extends RequestInit {
  params?: Record<string, string | number>;
}

async function fetchAPI<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const { params, ...fetchOptions } = options;

  let url = `${API_BASE}${endpoint}`;

  // Add query parameters
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
    url += `?${searchParams.toString()}`;
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || 'An error occurred',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Admin API calls
export const adminAPI = {
  add: (data: FormData) =>
    fetchAPI('/admin/add', {
      method: 'POST',
      body: data,
    }),
  getAll: () => fetchAPI('/admin/all'),
  login: (credentials: Record<string, string>) =>
    fetchAPI('/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  update: (id: string, data: FormData) =>
    fetchAPI(`/admin/update/${id}`, {
      method: 'PUT',
      body: data,
    }),
  delete: (id: string) =>
    fetchAPI(`/admin/delete/${id}`, {
      method: 'DELETE',
    }),
};

// Student API calls
export const studentAPI = {
  add: (data: FormData) =>
    fetchAPI('/student/add', {
      method: 'POST',
      body: data,
    }),
  getAll: () => fetchAPI('/student/all'),
  login: (credentials: Record<string, string>) =>
    fetchAPI('/student/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  update: (id: string, data: FormData) =>
    fetchAPI(`/student/update/${id}`, {
      method: 'PUT',
      body: data,
    }),
  delete: (id: string) =>
    fetchAPI(`/student/delete/${id}`, {
      method: 'DELETE',
    }),
};

// Faculty API calls
export const facultyAPI = {
  add: (data: FormData) =>
    fetchAPI('/faculty/add', {
      method: 'POST',
      body: data,
    }),
  getAll: () => fetchAPI('/faculty/all'),
  login: (credentials: Record<string, string>) =>
    fetchAPI('/faculty/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  update: (id: string, data: FormData) =>
    fetchAPI(`/faculty/update/${id}`, {
      method: 'PUT',
      body: data,
    }),
  delete: (id: string) =>
    fetchAPI(`/faculty/delete/${id}`, {
      method: 'DELETE',
    }),
};
