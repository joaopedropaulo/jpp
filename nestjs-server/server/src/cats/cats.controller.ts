import { Body, Controller, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/request/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async createCat(@Body() catDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(catDto);
  }
}
