    findByName(name: string){
        return this.musicRepository
        .createQueryBuilder("music")
        .where('music.name Like :name', {name: `%${name}%`})
        .getMany()
    }
