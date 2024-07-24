import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MusicRepository } from './music.repository';

@Injectable()
export class MusicService {
  constructor(private readonly musicRepository: MusicRepository){}

  create(createAlbumDto: CreateMusicDto) {
    return this.musicRepository.create(createAlbumDto);
  }

  findAll() {
    return this.musicRepository.findAll();
  }

  findOne(id: number) {
    return this.musicRepository.findOne(id);
  }

  update(id: number, updateAlbumDto: UpdateMusicDto) {
    return this.musicRepository.update(id, updateAlbumDto);
  }

  remove(id: number) {
    return this.musicRepository.remove(id);
  }
}
