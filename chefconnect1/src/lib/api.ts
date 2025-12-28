const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export type ApiError = { message?: string };

async function parseJsonSafe(res: Response) {
  try {
    return await res.json();
  } catch {
    return {};
  }
}

export async function apiPost<T>(path: string, body: unknown, token?: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });

  const data = (await parseJsonSafe(res)) as any;
  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data as T;
}

export async function apiGet<T>(path: string, token?: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "GET",
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const data = (await parseJsonSafe(res)) as any;
  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data as T;
}
