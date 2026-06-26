export const useApi = () => {
  const { public: { apiBase } } = useRuntimeConfig();
  const { authHeaders } = useAuth();

  const apiFetch = <T>(path: string, options?: Parameters<typeof $fetch>[1]) =>
    $fetch<T>(`${apiBase}${path}`, {
      ...options,
      headers: { ...authHeaders.value, ...(options?.headers ?? {}) },
    });

  return { apiFetch, apiBase };
};
