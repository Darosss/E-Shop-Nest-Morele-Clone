export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
}
