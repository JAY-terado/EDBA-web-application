import axios, { AxiosInstance } from "axios";

/**
 * Resolve and normalize the API base URL from Vite environment variables.
 * Handles formats like:
 * - "http://192.168.68.103:3010"
 * - "192.168.68.103/3010" -> "http://192.168.68.103:3010"
 * - "192.168.68.103:3010" -> "http://192.168.68.103:3010"
 */
function getApiBaseUrl(): string {
  const envUrl = (
    import.meta.env.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_URL ||
    "http://192.168.68.103:3010"
  ).trim();

  let normalized = envUrl;

  // Add http protocol if missing
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = `http://${normalized}`;
  }

  // Handle accidental "host/port" formatting (e.g. 192.168.68.103/3010 -> 192.168.68.103:3010)
  normalized = normalized.replace(/(\d+\.\d+\.\d+\.\d+)\/(\d{2,5})($|\/.*)/, "$1:$2$3");

  // Remove trailing slashes
  return normalized.replace(/\/+$/, "");
}

export const API_BASE_URL = getApiBaseUrl();

/**
 * Configured Axios instance with standard headers, timeout, and base URL
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface DemoRequestBody {
  fullName: string;
  contactNumber: string;
  workEmail: string;
  instituteName: string;
  numberOfStudents?: number;
  numberOfEmployees?: number;
  instituteAddress?: string;
}

export interface DemoResponseData {
  id?: string;
  fullName?: string;
  contactNumber?: string;
  workEmail?: string;
  instituteName?: string;
  numberOfStudents?: number;
  numberOfEmployees?: number;
  instituteAddress?: string;
  status?: string;
  recordStatus?: number;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export interface DemoApiResponse {
  errCode: number;
  errMsg: string;
  data?: DemoResponseData;
}

/**
 * Submit demo request with automatic fallback between primary and alternative endpoints.
 * Primary: /v1/demo/public/submit
 * Alternative: /v1/demo-requests/public/submit
 */
export async function submitDemoRequest(payload: DemoRequestBody): Promise<DemoApiResponse> {
  const body: DemoRequestBody = {
    fullName: payload.fullName.trim(),
    contactNumber: payload.contactNumber.trim(),
    workEmail: payload.workEmail.trim(),
    instituteName: payload.instituteName.trim(),
  };

  if (typeof payload.numberOfStudents === "number" && !isNaN(payload.numberOfStudents)) {
    body.numberOfStudents = payload.numberOfStudents;
  }
  if (typeof payload.numberOfEmployees === "number" && !isNaN(payload.numberOfEmployees)) {
    body.numberOfEmployees = payload.numberOfEmployees;
  }
  if (payload.instituteAddress && payload.instituteAddress.trim()) {
    body.instituteAddress = payload.instituteAddress.trim();
  }

  const primaryEndpoint = "/v1/demo/public/submit";
  const alternativeEndpoint = "/v1/demo-requests/public/submit";

  try {
    const res = await apiClient.post<DemoApiResponse>(primaryEndpoint, body);
    return res.data;
  } catch (err: unknown) {
    // If endpoint returned 404, try alternative endpoint
    if (axios.isAxiosError(err) && err.response?.status === 404) {
      try {
        const altRes = await apiClient.post<DemoApiResponse>(alternativeEndpoint, body);
        return altRes.data;
      } catch (altErr: unknown) {
        if (axios.isAxiosError(altErr) && altErr.response?.data) {
          return altErr.response.data as DemoApiResponse;
        }
        throw altErr;
      }
    }

    if (axios.isAxiosError(err) && err.response?.data) {
      return err.response.data as DemoApiResponse;
    }

    throw err;
  }
}
