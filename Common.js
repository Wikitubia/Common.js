mw.loader.load('https://apis.google.com/js/platform.js');

if(wgPageName == 'Special:Upload' || wgPageName == 'Special:MultipleUpload') {
$('#wpUploadDescription').val('[[Category:Images]]');
}

// change label
$('.pi-data-label:contains("Username")').replaceWith('<h3 class="pi-data-label pi-secondary-font">Subscribers</h3>');
 
// UserBadges settings
window.UserTagsJS = {
	modules: {},
	tags: {
                bureaucrat: { link:'Project:Administration#Bureaucrats and Administrators' },
		sysop: { link:'Project:Administration#Bureaucrats and Administrators' },
		rollback: { link:'Project:Administration#Rollbacks and Chat Moderators' },
                chatmoderator: { link:'Project:Administration#Rollbacks and Chat Moderators' }
	}
};
UserTagsJS.modules.inactive = 30;
UserTagsJS.modules.mwGroups = ['bureaucrat', 'sysop', 'rollback', 'chatmoderator', 'bot'];
UserTagsJS.modules.metafilter = { 'notautoconfirmed': ['newuser'] };
UserTagsJS.modules.newuser = { days: 5, edits: 0 };
 
// LastEdited settings
window.lastEdited = {
    position: 'bottom',
    size: false,
    comment: false,
    time: true
};

window.railWAM = {
    logPage:"Project:WAM Log"
};

window.UserTagsJS = {
    modules: {},
    tags: {
        discordfounder: { u:'Discord Founder' },
        discordadmin: { u:'Discord Admin' },
        discordmod: { u:'Discord Moderator' },
        verifiedyt: { u:'Verified YouTuber' },
        rollback: { u:'Rollbacker' },
        retired: { u:'Retired Staff'},
    }
};

UserTagsJS.modules.custom = {
    'Jonpro' :['retired'],
    'Cflm001' :['retired'],
    'Yowuza' :['retired'],
    'The thing' :['retired'],
    'Flaminglawyer' :['retired'],
    'SVG' :['retired'],
    'TomGrove23' :['retired'],
    'Applegirl' :['retired'],
    'NinjaFatGuy' :['retired'],
    'Killer365' :['retired'],
    'Daredfox' :['retired'],
    'Lofangas' :['retired'],
    'Gamermadness' :['retired'],
    'HoneyCandiez' :['retired'],
    'Vonn Karma' :['retired'],
    'Degrassi Fan' :['retired'],
    'Celestial Demon' :['retired'],
    'NKpower' :['retired'],
    'Mickey030210navercom' :['retired'],
    'Sims41235' :['retired'],
    'Monochromatic Bunny' :['retired'],
    'Wwefanboi' :['retired'],
    'FastCube' :['retired'],
    'Aidan Dunphy' :['retired'],
    'Bvrrybomb' :['retired'],
    'Ash Porcupine' :['retired'],
    'Jvoshua': ['retired'],
    'Flugmented': ['retired'],
    'HanselElGato': ['discordfounder', 'retired'],
    'FkeBld': ['discordadmin', 'verifedyt'],
    'BoaDaSnakeMan': ['discordadmin'],
    'Davidjl123': ['discordmod', 'verifiedyt'],
    'JustLeafy': ['discordadmin'],
    'DomiTheGamer': ['rollback', 'verifiedyt'],
    'The Nameless Lancer': ['rollback'],
    'Bendrownedfan111': ['rollback'],
    'Yangyong08': ['rollback'],
    'BadBlitz808': ['rollback'],
    'Toasty Dinosaur': ['rollback', 'verifiedyt'],
    'Sidemen19': ['discordadmin'],
    'Cluckster': ['discordadmin'],
    'EpicNinjaDude37': ['discordadmin', 'verifiedyt'],
    'Zianka' :['verifiedyt'],
    'ITurkishmapping': ['discordmod'],
    'Popularmmos12345': ['verifiedyt'],
    'Rickyberwick': ['verifiedyt'],
    'IMightBeBlu': ['verifiedyt'],
    'ZHDdude46': ['verifiedyt'],
    'GgGibi': ['verifiedyt'],
    'Cartoon Apocalypse': ['verifiedyt'],
    'Official Fine Bros': ['verifiedyt'],
    'InfiniVid': ['verifiedyt'],
    'JackersEdit': ['verifiedyt'],
    'Michaeltheone': ['verifiedyt'],
    'BoosterCroc': ['verifiedyt'],
    'Jackmasseyw': ['verifiedyt'],
    'ActualFlyingKitty': ['verifiedyt'],
    'SubToHarleyTBS': ['verifiedyt'],
    'ASkylitAvenue' :['verifiedyt'],
    'OutlookG' :['verifiedyt'],
    'Therubinyt' :['verifiedyt'],
    'BunnyBloYT': ['verifiedyt'],
    'DancingFirefly': ['verifiedyt'],
    'Prince7990': ['verifiedyt'],
    'ItzFade': ['verifiedyt'],
    'HarryzYT': ['verifiedyt'],
    'ChiefJack': ['verifiedyt'],
    'ChiefJackYT': ['verifiedyt'],
    '99dinosaurking' : ['verifiedyt'],
    'Ethanb0206': ['verifiedyt'],
    'Repzion': ['verifiedyt'],
    'TheLiving Bluejay' :['verifiedyt'],
    'TheAwesomeGamerminer' :['verifiedyt'],
    'Johncocek3' :['verifiedyt'],
    'SkippoAPS' :['verifiedyt'],
    'Snowolfpup04' :['verifiedyt'],
    'ExoidYT' :['verifiedyt'],
    'RainbowedYT' :['verifiedyt'],
    'Theaidanator' :['verifiedyt'],
    'InScane' :['verifiedyt'],
    'Duskcoon' :['verifiedyt'],
    'Bradey8' :['verifiedyt'],
    'RealInkoming' :['verifiedyt'],
    'Peppzzii' :['verifiedyt'],
    'Disco the Hedgefox' :['verifiedyt'],
    'DaPugFilms' :['verifiedyt'],
    'HarmonTower805' :['verifiedyt'],
    'Phrenomythic' :['verifiedyt'],
    'Rugby Zone' :['verifiedyt'],
    'NotLiink' :['verifiedyt'],
    'Some Stupid Sketch Show Guy' :['verifiedyt'],
    'RealClix' :['verifiedyt'],
    'ElPran68Oficial' :['verifiedyt'],
    'Jurta' :['verifiedyt'],
    'Thugesh' :['verifiedyt'],
    'Kyublitz' :['verifiedyt'],
    'Drizzleanimations' :['verifiedyt'],
    'ZanderLS11' :['verifiedyt'],
    'AkaHeretic' :['verifiedyt'],
    'Gatorbox' :['verifiedyt'],
    'ElephantForEx' :['verifiedyt'],
    'Famouslogos9098' :['verifiedyt'],
    'Acharyya Bong Boy' :['verifiedyt'],
    'VanshBhardwaj45' :['verifiedyt'],
    'BLambClammy' :['verifiedyt'],
    'SSBUMaster' :['verifiedyt'],
    'Jackninja5DipperGravityFalls' :['verifiedyt'],
    'Duier' :['verifiedyt'],
    'Kevin08015' :['verifiedyt', 'retired'],
    'SubscriberWars' :['verifiedyt'],
    'Dufji' :['verifiedyt'],
    'Plush Posse' :['verifiedyt'],
    'EagleBuilder' :['verifiedyt'],
    'GoldenSpyro' :['verifiedyt'],
    'Mattthew0005' :['verifiedyt'],
    'Convexted' :['verifiedyt'],
    'BillehBawb' :['verifiedyt'],
    'Tamiltechguruji' :['verifiedyt'],
    'JulieoftheArts' :['verifiedyt'],
    'AquaTheYoshi' :['verifiedyt'],
    'Squidmcduck' :['verifiedyt'],
    'SnowyPackel' :['verifiedyt'],
    'TheRealRevzz' :['verifiedyt'],
    'Kairossbests' :['verifiedyt'],
    'Gabriel Jaggernauth' :['verifiedyt'],
    'KhaosYT' :['verifiedyt'],
    'Mtnbros' :['verifiedyt'],
    'Bong Baccha' :['verifiedyt'],
    'IanTEB' :['verifiedyt'],
    'Wikiquki1' :['verifiedyt'],
    'LukeMaster06' :['verifiedyt'],
    'NerdieBirdieYT' :['verifiedyt'],
    'Patonrobertz' :['verifiedyt'],
    'Bigicedog' :['verifiedyt'],
    'Borismartinez0' :['verifiedyt'],
    'Frozen.bus.channel' :['verifiedyt'],
    'DleckYT' :['verifiedyt'],
    'SoraSkyAtic' :['verifiedyt'],
    'FraserIRL' :['verifiedyt'],
    'ReyGGTV' :['verifiedyt'],
    'Theme Park Tom' :['verifiedyt'],
    'ChrisTDL' :['verifiedyt'],
    'NickSaysHenlo' :['verifiedyt'],
    'ValourianBen' :['verifiedyt'],
    'Robp98iom' :['verifiedyt'],
    'DiamondRules01' :['verifiedyt'],
    'Statistics and Data' :['verifiedyt'],
    'JoPo' :['verifiedyt'],
    'Kaiablackofficial' :['verifiedyt'],
    'BaconBanditBoy' :['verifiedyt'],
    'Easiorigami' :['verifiedyt'],
    'Zer0sVoid' :['verifiedyt'],
    'BFDIBebble': ['verifiedyt'],
    'DandereJordan': ['verifiedyt'],
    'Cookie95YT': ['verifiedyt'],
    'SparkySSBU1120':['verifiedyt'],
    'LDoubleJ': ['verifiedyt'],
    'T3Trends': ['verifiedyt'],
    'MikachuXD': ['verifiedyt'],
    'Linkmon99': ['verifiedyt'],
    '77Pacer' :['verifiedyt'],
    'Chris6d' :['verifiedyt'],
    '7zs' :['verifiedyt'],
    'Kiodiego' :['verifiedyt'],
    'Timmylogoyt' :['verifiedyt'],
    'Javier10223' :['verifiedyt'],
    'Katzotic1' :['verifiedyt'],
    'Meipon' :['verifiedyt'],
    'JoyConJames' :['verifiedyt'],
    'Aidanlockrow' :['verifiedyt'],
};
