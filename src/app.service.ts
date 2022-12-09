import { Injectable,Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('PLAYERS_TEAMS_MS') private readonly players_teams_ms:ClientProxy,){}
}
