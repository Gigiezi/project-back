import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { MusicsModule } from 'src/musics/musics.module';
import { AlbumsModule } from 'src/albums/albums.module';
import { AuthorsModule } from 'src/authors/authors.module';

@Module({
  imports: [MusicsModule, AlbumsModule, AuthorsModule],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
