import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller()
export class MoviesController {
  @Get()
  getAll() {
    return 'All Movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `One Movie id = ${movieId}`;
  }

  @Post()
  create() {
    return `create Movie`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `remove Movie id = ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `patch Movie id = ${movieId}`;
  }
}
