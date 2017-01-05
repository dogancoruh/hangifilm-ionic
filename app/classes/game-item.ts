export class GameItem {
    public id: number;
    public language_tr: string;
    public language_en: string;
    public pictureUrl: string;
    public description: string;

    constructor(id?:number, language_tr?:string, language_en?:string, pictureUrl?:string, description?:string) {
        this.id = id;
        this.language_tr = language_tr;
        this.language_en = language_en;
        this.pictureUrl = pictureUrl;
        this.description = description;
    }
}
