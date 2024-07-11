import { Injectable } from "@nestjs/common";
import { CreateMusicDto } from "./dto/create-music.dto";
import { UpdateMusicDto } from "./dto/update-music.dto";

@Injectable()

export class MusicRepository {
    

    findAll(){
        return 'This Action Returns All Music';
    };

    findOne(id: number){
        return `This Action Return One Music By ID #${id}`;
    };

    create(createMusicDto: CreateMusicDto){
        return createMusicDto;
    };

    update(id: number, updateMusicDto: UpdateMusicDto){
        return `This action updates a #${id} music`;
    };

    remove(id: number){
        return `This action removes a #${id} music`;
    };
}