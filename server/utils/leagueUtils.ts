import { Champion } from "~~/src/interfaces/Champion"
import { Skin } from "~~/src/interfaces/Skin"

export function formatSkinName(skins: Skin, champion: Champion) {
    if(skins.isBase) return champion.name;
    if(skins.formatName == skins.name)
    {
        return skins.formatName + " " + champion.name
    }
    else
    {
        return skins.formatName
    }
}