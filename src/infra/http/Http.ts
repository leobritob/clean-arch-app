export interface Http {
  listen(port: number, callback?: () => void): void;
  route(
    path: string,
    method: string,
    callback: (params: { params?: any; query?: any; body?: any }) => Promise<any>
  ): Promise<any>;
}
