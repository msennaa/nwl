import { Controller, Get, Post } from '@nestjs/common';

@Controller('ads')
export class AdsController {
  @Get()
  public getAllAds(): any {
    const teste = [
      {
        id: 1,
        name: 'anuncio',
      },
      {
        id: 2,
        name: 'anuncio 2',
      },
      {
        id: 3,
        name: 'anuncio 3',
      },
    ];
    return teste;
  }

  @Post()
  public createAds(): any {
    return;
  }
}
