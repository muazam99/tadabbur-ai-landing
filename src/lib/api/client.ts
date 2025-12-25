/**
 * Base API configuration
 */
const API_BASE_URL = process.env.BASE_URL;

if (!API_BASE_URL) {
  throw new Error('BASE_URL environment variable is not defined');
}

/**
 * API response wrapper interface
 */
interface APIResponse<T> {
  success: boolean;
  data: T;
}

/**
 * Fetch data from the backend API
 * @param endpoint - The API endpoint path (e.g., 'public/surahs')
 * @param options - Optional fetch options
 * @returns Parsed API response data
 * @throws Error if the request fails or API returns success: false
 */
export async function fetchFromAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const result: APIResponse<T> = await response.json();

    if (!result.success) {
      throw new Error('API returned success: false');
    }

    return result.data;
  } catch (error) {
    console.error(`Failed to fetch from API: ${url}`, error);
    throw error;
  }
}

export { API_BASE_URL };
