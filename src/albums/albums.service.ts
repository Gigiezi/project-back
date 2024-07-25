import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { albumsRepository } from './albums.repository';

@Injectable()
export class AlbumsService {
  constructor(private readonly albumsRepository: albumsRepository){}


  async create(createAlbumDto: CreateAlbumDto) {
    return await this.albumsRepository.create(createAlbumDto);
  }

  findAll() {
    return this.albumsRepository.findAll();
  }

  findOne(id: number) {
    return this.albumsRepository.findOne(id);
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return await this.albumsRepository.update(id, updateAlbumDto);
  }

  async remove(id: number) {
    return await this.albumsRepository.remove(id);
  }
}
