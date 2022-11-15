import { Http } from './Http';
import express, { Request, Response } from 'express';

export class ExpressHttp implements Http {
  private app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  listen(port: number, callback?: (() => void) | undefined): void {
    this.app.listen(port, callback);
  }

  route(
    path: string,
    method: string,
    callback: (params: { params?: any; query?: any; body?: any }) => any
  ): Promise<any> {
    return this.app[method](path, async (req: Request, res: Response) => {
      const result = await callback({ params: req.params, query: req.query, body: req.body });
      res.json(result);
    });
  }
}
