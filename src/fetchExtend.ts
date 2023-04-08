import path from 'path';

const API_HOST = 'https://fogrex.trap.show';
const API_BASE_PATH = '/fast-game-api/api/';

export const getFetch = async (apiKey: string, url: string,  params: Record<string, string> = {}) => {
  const fetchOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    credentials: 'include',
    mode: 'cors',
  };

  const query = new URLSearchParams(params);

  const result = await fetch(`${API_HOST}${path.join(API_BASE_PATH, url)}?${query}`, fetchOptions);

  if (result.ok) {
    const contentHeader = result.headers.get('Content-Type');
    if (contentHeader && contentHeader.indexOf('application/json') >= 0) return result.json();
    return;
  }

  return Promise.reject(result);
}

export const postFetch = async (apiKey: string, url: string, requestData: Record<string, unknown> = {}) => {
  const fetchOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify(requestData),
    credentials: 'include',
    mode: 'cors',
  };

  const result = await fetch(`${API_HOST}${path.join(API_BASE_PATH, url)}`, fetchOptions);

  if (result.ok) {
    const contentHeader = result.headers.get('Content-Type');
    if (contentHeader && contentHeader.indexOf('application/json') >= 0) return result.json();
    return;
  }

  return Promise.reject(result);
}

export const putFetch = async (apiKey: string, url: string, requestData: Record<string, unknown> = {}) => {
  const fetchOptions: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify(requestData),
    credentials: 'include',
    mode: 'cors',
  };

  const result = await fetch(`${API_HOST}${path.join(API_BASE_PATH, url)}`, fetchOptions);

  if (result.ok) {
    const contentHeader = result.headers.get('Content-Type');
    if (contentHeader && contentHeader.indexOf('application/json') >= 0) return result.json();
    return;
  }

  return Promise.reject(result);
}

