import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  constructor(){
    super({
      log: ['query']
    });
  }
  async onModuleInit() { //executa ao iniciar a aplicação
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) { //se a conexao cair fecha o app
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
