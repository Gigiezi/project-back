import { Injectable, NotFoundException } from '@nestjs/common';
import { albumsRepository } from 'src/albums/albums.repository';
import { AuthorRepository } from 'src/authors/authors.repository';
import { MusicRepository } from 'src/musics/musics.repository';

@Injectable()
export class SearchService {
    constructor(private musicRepository: MusicRepository, 
                private albumRepository: albumsRepository,
                private authorRepository: AuthorRepository){}

    async search(name:string){
        if(!name){
            throw new NotFoundException('Not Found')
        }

        const music = await this.musicRepository.findByName(name);
        const album = await this.albumRepository.findByName(name);
        const author = await this.authorRepository.findByName(name)

        return {
            music,
            album,
            author
        }
    }
}
