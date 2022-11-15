import { Router } from './infra/http/Router';
import { ExpressHttp } from './infra/http/ExpressHttp';
import { DatabaseFactory } from './infra/factory/DatabaseFactory';
import { PrismaConnection } from './infra/database/PrismaConnection';

function main() {
  const connection = new PrismaConnection();
  const repository = new DatabaseFactory(connection);
  const http = new ExpressHttp();
  const router = new Router(http, repository);
  router.init();
  http.listen(3333, () => console.log('🎉 Server is running...'));
}

main();
