import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Cat, CatsService } from './cats.service';

class CreateCatDto {
  breed: string;
}

@Controller('cats')
export class CatsController {
  constructor(private _catsService: CatsService) {}

  @Get('all')
  getAllCats(): Cat[] {
    return this._catsService.findAll();
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return `Created ${createCatDto.breed} Cat!`;
  }

  @Get('promise')
  async promiseCat(): Promise<number> {
    const test: Promise<number> = new Promise((resolve, reject) => {
      resolve(100);
    });
    return test;
  }

  @Get('observable')
  findAll(): Observable<any[]> {
    return of(['little cat', 'big cat']);
  }

  @Get(':id')
  getCatById(@Param('id') id: string): string {
    return `You tried to get cat ${id}`;
  }
}
