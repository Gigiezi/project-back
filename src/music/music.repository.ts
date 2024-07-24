import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MusicEntity } from "./entities/music.entity";
import { CreateMusicDto } from "./dto/create-music.dto";
import { Repository } from "typeorm";
import { UpdateMusicDto } from "./dto/update-music.dto";

@Injectable()
export class MusicRepository {
    constructor(
        @InjectRepository(MusicEntity)
        private musicRepository: Repository<MusicEntity>
    ) { }

    async create(data: CreateMusicDto){
        const newMusic = this.musicRepository.create(data)
        return await this.musicRepository.save(newMusic)
    }

    findAll(){
        return this.musicRepository
            .createQueryBuilder("music")
            .getMany()
    }

    findOne(id: number){
        return this.musicRepository
            .createQueryBuilder("music")
            .where("music.id = :id", { id })
            .getMany()
    }

    async update(id: number, data: UpdateMusicDto){
        await this.musicRepository.createQueryBuilder("music")
        .update()
        .set(data)
        .where("music.id = :id", {id})
        .execute()

        return this.musicRepository.findOneBy({id})
    }

    async remove(id: number){
        await this.musicRepository.softDelete(id)

        return this.musicRepository
        .createQueryBuilder("music")
        .withDeleted()
        .where("music.id = :id", {id})
        .getOne()
    }
}