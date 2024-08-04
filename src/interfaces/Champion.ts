import { Skin } from "./Skin";

export interface Champion {
    id?: string;
    championId: number;
    key: string;
    name: string;
    title: string;
    fullName: string;
    releaseDate: string;
    releasePatch: string;
    price: any;
    lore: string;
    faction: string;
    skins: Skin[];
    splashPath: string;
    uncenteredSplashPath: string;
    tilePath: string;
    loadScreenPath: string;
}