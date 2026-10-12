import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LivresService } from './livres.service.js';

@Controller('livres')
export class LivresController {
  constructor(private readonly livresServices: LivresService) {}
  @Get()
  findAll() {
    return this.livresServices.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    const livre = this.livresServices.findOne(+id);
    if (!livre) {
      return { erreur: 'Livre introuvable' };
    }
    return livre;
  }
  @Post()
  create(@Body() body: { titre: string; auteur: string }) {
    return this.livresServices.create(body.titre, body.auteur);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    const succes = this.livresServices.remove(+id);
    if (!succes) {
      return { erreur: 'Livre introuvable, impossible de supprimer' };
    }
    return { message: 'Livre supprimé avec succès' };
  }
}
