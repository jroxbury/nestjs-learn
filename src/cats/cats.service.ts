import { Injectable } from '@nestjs/common';

export interface Cat {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      age: 10,
      breed: 'Persian',
      name: 'Rosco',
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
