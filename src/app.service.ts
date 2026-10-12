import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly salutations = ['Bonjour', 'Hello', 'Salut', 'Ciao', 'Hola']
  getHello(): string {
    const index = Math.floor(Math.random() * this.salutations.length)
    return this.salutations[index] + ' depuis mon serveur NestJs';
  }
}
