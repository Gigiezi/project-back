import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule } from './albums/albums.module';
import { AuthorsModule } from './authors/authors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicsModule } from './musics/musics.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'localhost',
    database: 'project',
    autoLoadEntities: true,
    synchronize: true
  }),
    AlbumsModule, AuthorsModule, UsersModule, PlaylistsModule, MusicsModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
