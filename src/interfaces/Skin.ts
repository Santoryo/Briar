export interface Skin {
    id?: string;
    skinId: number;
    name: string;
    isBase: boolean;
    availability: string;
    formatName: string;
    lootEligible: boolean;
    cost: number;
    sale: number;
    distribution: string;
    rarity: string;
    chromas: any[];
    lore: string;
    release: string;
    set: string[];
    splashPath: string;
    uncenteredSplashPath: string;
    tilePath: string;
    loadScreenPath: string;
    loadScreenVintagePath: string;
    newEffects: boolean;
    newAnimations: boolean;
    newRecall: boolean;
    newVoice: boolean;
    newQuotes: boolean;
    voiceActor: string[];
    splashArtist: string[];
    model: string | null;
}