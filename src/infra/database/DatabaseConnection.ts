export interface DatabaseConnection {
  connection: any;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
