const { Kayn, REGIONS } = require('kayn')

const config = require('./config.json');

const kayn = Kayn(config.key)({
    region: REGIONS.EUROPE_WEST,
});

const main = async () => {
    try {
        const fezz = await kayn.Summoner.by.name('Th3F1zz');

        const ligi_fezza = await kayn.LeaguePositions.by.summonerID(fezz.id);

        console.log(ligi_fezza);
    } catch (e) {
        console.log(e)
    }
}

main();