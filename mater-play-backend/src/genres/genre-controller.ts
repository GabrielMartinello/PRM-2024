import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
  } from '@nestjs/common';
import { GenreService } from './genre-service';
import { Genre } from './genre-entity';

  
  @Controller('genres')
  export class GenreController {
    constructor(private service: GenreService) {}
  
    @Get()
    findAll(): Promise<Genre[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Genre> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Genre not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() Genre: Genre): Promise<Genre> {
      return this.service.save(Genre);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() Genre: Genre,
    ): Promise<Genre> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Genre not found', HttpStatus.NOT_FOUND);
      }
  
      Genre.id = found.id;
  
      return this.service.save(Genre);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Genre not found', HttpStatus.NOT_FOUND);
      }
  
      return this.service.remove(id);
    }
  }