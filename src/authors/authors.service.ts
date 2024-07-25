import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorRepository } from './authors.repository';

@Injectable()
export class AuthorsService {

  constructor(private readonly authorsRepository: AuthorRepository){}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.authorsRepository.create(createAuthorDto)
  }

  findAll() {
    return this.authorsRepository.findAll()
  }

  findOne(id: number) {
    return this.authorsRepository.findOne(id)
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return await this.authorsRepository.update(id, updateAuthorDto)
  }

  async remove(id: number) {
    return await this.authorsRepository.remove(id)
  }
}
