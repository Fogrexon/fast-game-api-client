import path from 'path';

const API_BASE_PATH = 'http://fast-game-api.fogrex.trap.show/api/';

export const getFetch = async (apiKey: string, url: string,  params: Record<string, string> = {}) => {
  const fetchOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    credentials: 'include',
  };

  const query = new URLSearchParams(params);

  const result = await fetch(`path.join(API_BASE_PATH, url)?${params}`, fetchOptions);

  if (result.ok) return result.json();

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
  };

  const result = await fetch(path.join(API_BASE_PATH, url), fetchOptions);

  if (result.ok) return result.json();

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
  };

  const result = await fetch(path.join(API_BASE_PATH, url), fetchOptions);

  if (result.ok) return result.json();

  return Promise.reject(result);
}

