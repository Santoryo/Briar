import { RecordModel } from "pocketbase";
import { GenericType } from "typescript";
import { formatSkinName } from "~/utils/leagueUtils";
import { Champion } from "~~/src/interfaces/Champion";
import { Skin } from "~~/src/interfaces/Skin";


export default defineTask({
    meta: {
      name: "updateData",
      description: "Run Static Data into DB update data task",
    },
    async run({ payload, context }) {

      try {
        const temp = await fetch(useRuntimeConfig().staticData);
        const champions: {[key: string]: Champion} = await temp.json();
        for (const key in champions)
        {
          const skinIds: string[] = [];
          const champion = champions[key];
          for (const skin of champion.skins)
          {
            const data: Skin = {
              skinId: parseInt(skin.id),
              name: skin.name,
              skinName: formatSkinName(skin, champion),
              championName: champion.name,
              isBase: skin.isBase,
              availability: skin.availability,
              formatName: skin.formatName,
              lootEligible: skin.lootEligible,
              cost: skin.cost,
              sale: skin.sale,
              distribution: skin.distribution,
              rarity: skin.rarity,
              chromas: skin.chromas,
              lore: skin.lore,
              release: skin.release,
              set: skin.set,
              splashPath: skin.splashPath,
              uncenteredSplashPath: skin.uncenteredSplashPath,
              tilePath: skin.tilePath,
              loadScreenPath: skin.loadScreenPath,
              loadScreenVintagePath: skin.loadScreenVintagePath,
              newEffects: skin.newEffects,
              newAnimations: skin.newAnimations,
              newRecall: skin.newRecall,
              newVoice: skin.newVoice,
              newQuotes: skin.newQuotes,
              voiceActor: skin.voiceActor,
              splashArtist: skin.splashArtist,
              model: null
            }
            const skinId = await addSkin(data);
            skinIds.push(skinId);
          }

            const championData: Champion = {
              championId: parseInt(champion.id),
              key: champion.key,
              name: champion.name,
              title: champion.title,
              fullName: champion.fullName,
              releaseDate: champion.releaseDate,
              releasePatch: champion.releasePatch,
              price: champion.price,
              lore: champion.lore,
              faction: champion.faction,
              skins: skinIds as any,
              splashPath: champion.skins[0].splashPath,
              uncenteredSplashPath: champion.skins[0].uncenteredSplashPath,
              tilePath: champion.skins[0].tilePath,
              loadScreenPath: champion.skins[0].loadScreenPath,
            };
            await addChampion(championData);
          }

        }
        catch (e) {
          console.error(e);
          return { result: "Failed" };
        }
      return { result: "Success" };
    },
  });

  async function addSkin(skin: Skin) {
    const verify = await pb.admins.authWithPassword(useRuntimeConfig().pbUser, useRuntimeConfig().pbPass);
    const doesSkinExist: RecordModel[] = await pb.collection("skins4").getFullList({filter: `skinId = ${skin.skinId}`});
    if (doesSkinExist.length > 0) {
      console.log("Updating skin: " + skin.name);
      await pb.collection("skins4").update(doesSkinExist[0].id, skin);
      return doesSkinExist[0].id;
    }
    console.log("Adding skin: " + skin.name);
    const data = await pb.collection("skins4").create(skin);
    return data.id;
  }

  async function addChampion(champion: Champion): Promise<string> {
    const verify = await pb.admins.authWithPassword(useRuntimeConfig().pbUser, useRuntimeConfig().pbPass);
    const doesChampionExist: RecordModel[] = await pb.collection("champions4").getFullList({filter: `championId = ${champion.championId}`});
    if (doesChampionExist.length > 0) {
      console.log("Updating champion: " + champion.name);
      await pb.collection("champions4").update(doesChampionExist[0].id, champion);
      return doesChampionExist[0].id;
    }
    console.log("Adding champion: " + champion.name);
    const data = await pb.collection("champions4").create(champion);
    return data.id;
  }