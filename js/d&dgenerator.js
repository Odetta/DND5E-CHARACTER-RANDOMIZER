//D&D 5E RANDOM CHARACTER CREATOR APP (LVL 1)

//~~~~~~~~~~ARRAYS AND FUNCTIONS~~~~~~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//I. COLLAPSIBLE SECTIONS
//~~~~~~~~~~ARRAYS~~~~~~~~~~//
//II. CLASS
//III. RACE
//IV. ALIGNMENT
//V. BACKGROUND
//VI. PERSONALITY TRAITS
//  a. POSITIVE
//  b. NEGATIVE
//  c. NEUTRAL
//VII. ABILITY SCORES
//VIII SPELLS
//  a. BARD
//  b. CLERIC
//  c. DRUID
//  d. RANGER
//  e. SORCERER
//  f. WARLOCK
//  g. WIZARD
//IX. TOOLS
//X. INSTRUMENTS
//XI. LANGUAGES
//XII. SKILLS
//XIII. WEAPONS
//  a. MARTIAL MELEE WEAPONS
//  b. SIMPLE MELEE WEAPONS
//  c. SIMPLE RANGED WEAPONS
//XIV. DIVINE DOMAINS
//XV. DEITIES
//  a. LAWFUL GOOD
//  b. LAWFUL NEUTRAL
//  c. LAWFUL EVIL
//  d. NEUTRAL GOOD
//  e. TRUE NEUTRAL
//  f. NEUTRAL EVIL
//  g. CHAOTIC GOOD
//  h. CHAOTIC NEUTRAL
//  i. CHAOTIC EVIL
//XVI. FIGHTER FIGHTING STYLES
//XVII. RANGER FAVORED ENEMIES
//XVIII. RANGER FAVORED TERRAIN
//XIX. WARLOCK OTHERWORLDLY PATRON
//XX. TRINKETS
//XXI. MAGIC ITEMS
//XXII. GAMING SETS
//XXIII. LAND VEHICLES
//XXIV. WATER VEHICLES
//XXV. PROFICIENCY BONUS
//~~~~~~~~~FUNCTIONS~~~~~~~~~//
//XXVI. FUNCTIONS
//XXVII. ABILITY SCORE RANDOMIZER
//XXVIII. CLASS RANDOMIZER
//XXIX. RACE RANDOMIZER
//XXX. WEAPON PROFICIENCIES
//XXXI. RACIAL TRAITS AND IMAGES
//XXXII. SPEED (SOME WITHIN SUBRACE SECTION BELOW)
//XXXIII. ARMOR PROFICIENCIES
//XXXIV. SAVING THROWS
//XXXV. LANGUAGES (SOME WITHIN SUBRACE SECTION BELOW)
//XXXVI. SUB RACE RANDOMIZER AND ABILITY SCORE ADJUSTER, SOME SUBRACE TOOLS
//XXXVII. ABILITY SCORE RACE ADJUSTMENTS
//XXXVIII. CREATURE TYPE
//XXXIX. AGE RANDOMIZER
//XL. SIZE
//XLI. TOOL RANDOMIZER (SOME OF THE TOOL RANDOMIZERS ARE WITHIN THE DWARF AND ROCK GNOME CODE ABOVE)
//XLII. ALIGNMENT RANDOMIZER
//XLIII. CLASS/SUBCLASS (PART OF EQUIP TOO)
//XLIV. EQUIPMENT (MUST BE BELOW SUBCLASS SECTION)
//XLV. BACKGROUND RANDOMIZER
//XLVI. FIRST CHARACTERISTIC RANDOMIZER (ALWAYS POSITIVE)
//XLVII. SECOND CHARACTERISTIC RANDOMIZER (50%POSITIVE, 25%NEUTRAL, 25%NEGATIVE)
//XLVIII. ABILITY SCORE MODIFIERS & INITIATIVE
//XLIX. HIT POINTS
//L. SUBCLASS ADDTIONS USING PULLED textContent
//LI. SPELL RANDOMIZER
//LII. SUBRACE ADDITIONS USING PULLED textContent
//LIII. SKILLS AND OTHER CLASS ITEMS
//LIV. SUBCLASS ADDTIONS USING PULLED textContent CONTINUED
//LV. RANGER FAVORED ENEMY LANGUAGES
//LVI. EQUIPMENT FILTER (MANY MORE FILTERS BELOW BACKGROUND SECTION)
//LVII. MAGIC ITEMS
//LVIII. TRINKETS
//LIX. PLAYER BACKGROUND ITEMS
//LX. ARRAY FILTERS TO REMOVE ANY DUPLICATES THAT MIGHT REMAIN
//	a. LANGUAGES FILTER
//	b. TOOL PROFICIENCY FILTER
//	c. SKILL PROFICIENCY FILTER
//	d. ARMOR PROFICIENCY FILTER
//	e. WEAPON PROFICIENCY FILTER
//	f. CANTRIP FILTER
//	g. SPELL FILTER
//LXI. SPELLCASTING INFO





//I. COLLAPSIBLE SECTIONS
let coll = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


//II. CLASS
let checkedClasses = document.querySelectorAll("[name='classArrayCreator']");
let playerClass = [];
function createClassArray() {
  playerClass = [];
  let checkedClassBox = document.querySelectorAll("div[name='classArrayCreatorDiv'] > [type='checkbox']:checked");
  checkedClassBox.forEach(function(item) {
    playerClass.push(item.value);
  });
}
createClassArray();
checkedClasses.forEach(function(item) {
  item.addEventListener("change", function() {
    createClassArray();
  });
});
//// CLEAR ALL
function uncheckAllClass() {
    document.querySelectorAll("div[name='classArrayCreatorDiv'] > [type='checkbox']:checked")
      .forEach(item => item.checked = false);
      createClassArray();
  }
document.querySelector("[name='classClearButton']").addEventListener('click', uncheckAllClass)
//// CHECK ALL
function checkAllClass() {
    document.querySelectorAll("div[name='classArrayCreatorDiv'] > [type='checkbox']")
      .forEach(item => item.checked = true);
      createClassArray();
    }
document.querySelector("[name='classCheckButton']").addEventListener('click', checkAllClass)


//III. RACE
let checkedRaces = document.querySelectorAll("[name='raceArrayCreator']");
let playerRace = [];
function createRaceArray() {
  playerRace = [];
  let checkedRaceBox = document.querySelectorAll("div[name='raceArrayCreatorDiv'] > [type='checkbox']:checked");
  checkedRaceBox.forEach(function(item) {
    playerRace.push(item.value);
  });
}
createRaceArray();
checkedRaces.forEach(function(item) {
  item.addEventListener("change", function() {
    createRaceArray();
  });
});
//// CLEAR ALL
function uncheckAllRace() {
    document.querySelectorAll("div[name='raceArrayCreatorDiv'] > [type='checkbox']:checked")
      .forEach(item => item.checked = false);
      createRaceArray();
  }
document.querySelector("[name='raceClearButton']").addEventListener('click', uncheckAllRace)
//// CHECK ALL
function checkAllRace() {
    document.querySelectorAll("div[name='raceArrayCreatorDiv'] > [type='checkbox']")
      .forEach(item => item.checked = true);
      createRaceArray();
    }
document.querySelector("[name='raceCheckButton']").addEventListener('click', checkAllRace)


//IV. ALIGNMENT
let checkedAlignment = document.querySelectorAll("[name='alignmentArrayCreator']");
let playerAlignment = [];
function createAlignmentArray() {
  playerAlignment = [];
  let checkedAlignmentBox = document.querySelectorAll("div[name='alignmentArrayCreatorDiv'] > [type='checkbox']:checked");
  checkedAlignmentBox.forEach(function(item) {
    playerAlignment.push(item.value);
  });
}
createAlignmentArray();
checkedAlignment.forEach(function(item) {
  item.addEventListener("change", function() {
    createAlignmentArray();
  });
});
//// CLEAR ALL
function uncheckAllAlignment() {
    document.querySelectorAll("div[name='alignmentArrayCreatorDiv'] > [type='checkbox']:checked")
      .forEach(item => item.checked = false);
      createAlignmentArray();
  }
document.querySelector("[name='alignmentClearButton']").addEventListener('click', uncheckAllAlignment)
//// CHECK ALL
function checkAllAlignment() {
    document.querySelectorAll("div[name='alignmentArrayCreatorDiv'] > [type='checkbox']")
      .forEach(item => item.checked = true);
      createAlignmentArray();
    }
document.querySelector("[name='alignmentCheckButton']").addEventListener('click', checkAllAlignment)


//V. BACKGROUND
let checkedBackground = document.querySelectorAll("[name='backgroundArrayCreator']");
let playerBackground = [];
function createBackgroundArray() {
  playerBackground = [];
  let checkedBackgroundBox = document.querySelectorAll("div[name='backgroundArrayCreatorDiv'] > [type='checkbox']:checked");
  checkedBackgroundBox.forEach(function(item) {
    playerBackground.push(item.value);
  });
}
createBackgroundArray();
checkedBackground.forEach(function(item) {
  item.addEventListener("change", function() {
    createBackgroundArray();
  });
});
//// CLEAR ALL
function uncheckAllBackground() {
    document.querySelectorAll("div[name='backgroundArrayCreatorDiv'] > [type='checkbox']:checked")
      .forEach(item => item.checked = false);
      createBackgroundArray();
  }
document.querySelector("[name='backgroundClearButton']").addEventListener('click', uncheckAllBackground)
//// CHECK ALL
function checkAllBackground() {
    document.querySelectorAll("div[name='backgroundArrayCreatorDiv'] > [type='checkbox']")
      .forEach(item => item.checked = true);
      createBackgroundArray();
    }
document.querySelector("[name='backgroundCheckButton']").addEventListener('click', checkAllBackground)


//VI. PERSONALITY TRAITS
//a. (POSITIVE)
const playerTraitPositive = ["loyal","brave","merciful","reasonable","diligent","naive","optimistic","humble","kind","adaptable","admirable","agreeable","alert","articulate","athletic","calm","caring","cheerful","clever","confident","conscientious","considerate","contemplative","cooperative","cultured","curious","daring","decisive","dedicated","dignified","disciplined","dramatic","dutiful","earnest","eloquent","empathetic","energetic","enthusiastic","focused","forgiving","forthright","gallant","gentle","genuine","gracious","hardworking","idealistic","imaginative","innovative","insightful","intuitive","mature","methodical","modest","observant","organized","passionate","patient","peaceful","practical","principled","protective","rational","relaxed","reliable","resourceful","selfless","sensitive","sentimental","serious","simple","spontaneous","steadfast","suave","trusting"];

//b. (NEGATIVE)
const playerTraitNegative = ["abrasive","aimless","angry","apathetic","argumentative","arrogant","callous","careless","childish","clumsy","cold","conceited","cowardly","crass","cruel","cynical","deceitful","demanding","disloyal","disorderly","erratic","foolish","frivolous","ignorant","impatient","impulsive","inconsiderate","indulgent","insecure","insulting","irrational","irritable","lazy","malicious","narcissistic","obnoxious","obsessive","paranoid","petty","pompous","pretentious","selfish","suspicious","unreliable","vindictive"];

//c. (NEUTRAL)
const playerTraitNeutral = ["absentminded","competitive","contradictory","determined","dry","enigmatic","folksy","formal","frugal","impressionable","intense","mellow","noncommittal","outspoken","questioning","reserved","sarcastic","self-conscious","skeptical","solemn","stern","strict","stubborn","unpredictable","whimsical"];


//VII. ABILITY SCORES
const abilityScores = [8,9,10,10,11,11,12,12,12,13,13,13,14,14,14,15,15,16,16,17,18];

//VIII. SPELLS
//a. BARD
const bardCantrip = ["blade ward","dancing lights","friends","light","mage hand","mending","message","minor illusion","prestidigitation","true strike","vicious mockery"];

const bardSpellL1 = ["animal friendship","bane","charm person","comprehend languages","cure wounds","detect magic","disguise self","dissonant whispers","faerie fire","feather fall","healing word","heroism","identify","illusory script","longstrider","silent image","sleep","speak with animals","tasha's hideous laughter","thunderwave","unseen servant"];

//b. CLERIC
const clericCantrip = ["guidance","light","mending","resistance","sacred flame","spare the dying","thaumaturgy"];

const clericSpellL1 = ["bane","bless","command","create or destroy water","cure wounds","detect evil and good","detect magic","detect poison and disease","guiding bolt","healing word","inflict wounds","protection from evil and good","purify food and drink","sanctuary","shield of faith"];

//c. DRUID
const druidCantrip = ["druidcraft","guidance","mending","poison spray","produce flame","resistance","shillelagh","thorn whip"];

const druidSpellL1 = ["animal friendship","charm person","create or destroy water","cure wounds","detect magic","detect poison and disease","entangle","faerie fire","fog cloud","goodberry","healing word","jump","longstrider","purify food and drink","speak with animals","thunderwave"];

//d. RANGER
const rangerSpellL1 = ["alarm","animal friendship","cure wounds","detect magic","detect poison and disease","ensnaring strike","fog cloud","goodberry","hail of thorns","hunter's mark","jump","longstrider","speak with animals"];

//e. SORCERER
const sorcererCantrip = ["acid splash","blade ward","chill touch","dancing lights","fire bolt","friends","light","mage hand","mending","message","minor illusion","poison spray","prestidigitation","ray of frost","shocking grasp","true strike"];

const sorcererSpellL1 = ["burning hands","charm person","chromatic orb","color spray","comprehend languages","detect magic","disguise self","expeditious retreat","false life","feather fall","fog cloud","jump","mage armor","magic missile","ray of sickness","shield","silent image","sleep","thunderwave","witch bolt"];

//f. WARLOCK
const warlockCantrip = ["blade ward","chill touch","eldritch blast","friends","mage hand","minor illusion","poison spray","prestidigitation","true strike"];

const warlockSpellL1 = ["armor of agathys","arms of hadar","charm person","comprehend languages","expeditious retreat","hellish rebuke","hex","illusory script","protection from evil and good","unseen servant","witch bolt"];

//g. WIZARD
const wizardCantrip = ["acid splash","blade ward","chill touch","dancing lights","fire bolt","friends","light","mage hand","mending","message","minor illusion","poison spray","prestidigitation","ray of frost","shocking grasp","true strike"];

const wizardSpellL1 = ["alarm","burning hands","charm person","chromatic orb","color spray","comprehend languages","detect magic","disguise self","expeditious retreat","false life","feather fall","find familiar","fog cloud","grease","identify","illusory script","jump","longstrider","mage armor","magic missile","protection from evil and good","ray of sickness","shield","silent image","sleep","tasha's hideous laughter","tenser's floating disk","thunderwave","unseen servant","witch bolt"];

//IX. TOOLS
const artisanTools = ["alchemist's supplies","brewer's supplies","calligrapher's supplies","carpenter's tools","cartographer's tools","cobbler's tools","cook's utensils","glassblower's tools","jeweler's tools","leatherworker's tools","mason's tools","painter's supplies","potter's tools","smith's tools","tinker's tools","weaver's tools","woodcarver's tools"];

//X. INSTRUMENTS
const musicalInstrument = ["bagpipes","drum","dulcimer","flute","lute","lyre","horn","pan flute","shawm","viol"];

//XI. LANGUAGES
const allLanguages = ["common","dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];

//XII. SKILLS
const allSkills = ["athletics","acrobatics","sleight of hand","stealth","arcana","history","investigation","nature","religion","animal handling","insight","medicine","perception","survival","deception","intimidation","performance","persuasion"];

//XIII. WEAPONS
//a. MARTIAL MELEE WEAPONS
const martialMeleeWeapons = ["battleaxe","flail","glaive","greataxe","greatsword","halberd","lance","longsword","maul","morningstar","pike","rapier","scimitar","shortsword","trident","war pick","warhammer","whip"];

//b. SIMPLE MELEE WEAPONS
const simpleMeleeWeapons = ["club","dagger","greatclub","handaxe","javelin","light hammer","mace","quarterstaff","sickle","spear"];

//c. SIMPLE RANGED WEAPONS
const simpleRangedWeapons = ["light crossbow","dart","shortbow","sling"];

//XIV. DIVINE DOMAINS
const divineDomain = ["knowledge","life","light","nature","tempest","trickery","war"];

//XV. DEITIES
//a. LAWFUL GOOD
const lawfulGoodAll = ["Rao, god of peace and reason","Majere, god of meditation and order","Moradin, dwarf god of creation","Ilmater, god of endurance","Mishakal, goddess of healing","Boldrei, goddess of community and home","Yondalla, halfling goddess of fertility and protection","Diancecht, god of medicine and healing","Pholtus, god of light and law","Re-Horakhty, god of the sun, ruler of the gods","Osiris, god of nature and the underworld","Garl Glittergold, gnome god of trickery and wiles","Torm, god of courage and self-sacrifice","Tyr, god of justice","Heironeous, god of chivalry and valor","Ulaa, goddess of hills and mountains","Paladine, god of rulers and guardians","Kiri-Jolith, god of honor and war","Dol Arrah, goddess of sunlight and honor","The Silver Flame, deity of protection and good","Bahamut, dragon god of good","Athena, goddess of wisdom and civilization","Heimdall, god of watchfulness and loyalty"];

const lawfulGoodKnowledge = ["Rao, god of peace and reason","Majere, god of meditation and order","Mishakal, goddess of healing","Moradin, dwarf god of creation","Athena, goddess of wisdom and civilization"];

const lawfulGoodLife = ["Ilmater, god of endurance","Ulaa, goddess of hills and mountains","Mishakal, goddess of healing","Boldrei, goddess of community and home","The Silver Flame, deity of protection and good","Bahamut, dragon god of good","Yondalla, halfling goddess of fertility and protection","Diancecht, god of medicine and healing","Re-Horakhty, god of the sun, ruler of the gods","Osiris, god of nature and the underworld"];

const lawfulGoodLight = ["Pholtus, god of light and law","Dol Arrah, goddess of sunlight and honor","The Silver Flame, deity of protection and good","Re-Horakhty, god of the sun, ruler of the gods","Heimdall, god of watchfulness and loyalty"];

const lawfulGoodNature = ["Osiris, god of nature and the underworld"];

//const lawfulGoodTempest = [];
//no gods exist for this combination; true neutral substituted

const lawfulGoodTrickery = ["Garl Glittergold, gnome god of trickery and wiles"];

const lawfulGoodWar = ["Torm, god of courage and self-sacrifice","Tyr, god of justice","Heironeous, god of chivalry and valor","Ulaa, goddess of hills and mountains","Paladine, god of rulers and guardians","Kiri-Jolith, god of honor and war","Dol Arrah, goddess of sunlight and honor","The Silver Flame, deity of protection and good","Bahamut, dragon god of good","Athena, goddess of wisdom and civilization","Heimdall, god of watchfulness and loyalty"];

//b. LAWFUL NEUTRAL
const lawfulNeutralAll = ["Azuth, god of wizards","Savras, god of divination and fate","St. Cuthbert, god of common sense and zeal","Wee Jas, goddess of magic and death","Aureon, god of law and knowledge","Ptah, god of crafts, knowledge, and secrets","The Blood of Vol, philosophy of immortality and undeath","Helm, god of protection","The Path of Light, philosophy of light and self-improvement","Manannan mac Lir, god of oceans and sea creatures","Nike, goddess of victory","Tyr, god of courage and strategy"];

const lawfulNeutralKnowledge = ["Azuth, god of wizards","Savras, god of divination and fate","St. Cuthbert, god of common sense and zeal","Wee Jas, goddess of magic and death","Aureon, god of law and knowledge","Ptah, god of crafts, knowledge, and secrets","Tyr, god of courage and strategy"];

const lawfulNeutralLife = ["Helm, god of protection","The Blood of Vol, philosophy of immortality and undeath","The Path of Light, philosophy of light and self-improvement"];

const lawfulNeutralLight = ["Helm, god of protection","The Path of Light, philosophy of light and self-improvement"];

const lawfulNeutralNature = ["Manannan mac Lir, god of oceans and sea creatures"];

const lawfulNeutralTempest = ["Manannan mac Lir, god of oceans and sea creatures"];

//const lawfulNeutralTrickery = [];
//no gods exist for this combination; true neutral substituted

const lawfulNeutralWar = ["Nike, goddess of victory","Tyr, god of courage and strategy"];

//c. LAWFUL EVIL
const lawfulEvilAll = ["Sekolah, sahuagin god of the hunt","Sobek, god of water and crocodiles","Tiamat, dragon goddess of evil","Bane, god of tyranny","Hextor, god of war and discord","Sargonnas, god of vengeance and fire","Kurtulmak, kobold god of war and mining","Maglubiyet, goblinoid god of war","Surtur, god of fire giants and craft"];

const lawfulEvilKnowledge = ["Surtur, god of fire giants and craft"];

//const lawfulEvilLife = [];
//no gods exist for this combination; true neutral substituted

//const lawfulEvilLight = [];
//no gods exist for this combination; true neutral substituted

const lawfulEvilNature = ["Sekolah, sahuagin god of the hunt","Sobek, god of water and crocodiles"];

const lawfulEvilTempest = ["Sekolah, sahuagin god of the hunt","Sobek, god of water and crocodiles"];

const lawfulEvilTrickery = ["Tiamat, dragon goddess of evil"];

const lawfulEvilWar = ["Bane, god of tyranny","Hextor, god of war and discord","Sargonnas, god of vengeance and fire","Kurtulmak, kobold god of war and mining","Maglubiyet, goblinoid god of war","Surtur, god of fire giants and craft"];

//d. NEUTRAL GOOD
const neutralGoodAll = ["Deneir, god of writing","Mystra, goddess of magic","Onatar, god of craft","Oghma, god of speech and writing","Hephaestus, god of smithing and craft","Imhotep, god of crafts and medicine","Chauntea, goddess of agriculture","The Undying Court, elven ancestors","Brigantia, goddess of rivers and livestock","Goibhniu, god of smiths and healing","Artemis, goddess of hunting and childbirths","Demeter, goddess of agriculture","Hestia, goddess of home and family","Isis, goddess of fertility and magic","Freya, goddess of fertility and love","Lathander, god of birth and renewal","Milil, god of poetry and song","Pelor, god of the sun and healing","Branchala, god of music","Belenus, god of sun, light, and warmth","Hathor, goddess of love, music, and motherhood","Balder, god of beauty and poetry","Frey, god of fertility and the sun","Eldath, goddess of peace","Mielikki, goddess of forests","Ehlonna, goddess of woodlands","Arawai, goddess of fertility","Artemis, goddess of hunting and childbirth","Habbakuk, god of animal life and the sea","Njord, god of sea and wind","Fharlanghn, god of horizons and travel","Olladra, goddess of good fortune","Odin, god of knowledge and war"];

const neutralGoodKnowledge = ["Deneir, god of writing","Mystra, goddess of magic","Fharlanghn, god of horizons and travel","Onatar, god of craft","The Undying Court, elven ancestors","Goibhniu, god of smiths and healing","Oghma, god of speech and writing","Hephaestus, god of smithing and craft","Imhotep, god of crafts and medicine","Isis, goddess of fertility and magic","Odin, god of knowledge and war"];

const neutralGoodLife = ["Chauntea, goddess of agriculture","Eldath, goddess of peace","Lathander, god of birth and renewal","Ehlonna, goddess of woodlands","Pelor, god of the sun and healing","Arawai, goddess of fertility","Olladra, goddess of good fortune","The Undying Court, elven ancestors","Brigantia, goddess of rivers and livestock","Goibhniu, god of smiths and healing","Artemis, goddess of hunting and childbirths","Demeter, goddess of agriculture","Hestia, goddess of home and family","Hathor, goddess of love, music, and motherhood","Isis, goddess of fertility and magic","Balder, god of beauty and poetry","Frey, god of fertility and the sun","Freya, goddess of fertility and love"];

const neutralGoodLight = ["Lathander, god of birth and renewal","Milil, god of poetry and song","Pelor, god of the sun and healing","Branchala, god of music","Belenus, god of sun, light, and warmth","Hathor, goddess of love, music, and motherhood","Balder, god of beauty and poetry","Frey, god of fertility and the sun"];

const neutralGoodNature = ["Eldath, goddess of peace","Mielikki, goddess of forests","Ehlonna, goddess of woodlands","Habbakuk, god of animal life and the sea","Arawai, goddess of fertility","Artemis, goddess of hunting and childbirth","Njord, god of sea and wind"];

const neutralGoodTempest = ["Habbakuk, god of animal life and the sea","Njord, god of sea and wind"];

const neutralGoodTrickery = ["Fharlanghn, god of horizons and travel","Olladra, goddess of good fortune"];

const neutralGoodWar = ["Odin, god of knowledge and war"];

//e. TRUE NEUTRAL
const trueNeutralAll = ["Gond, god of craft","Oghma, god of knowledge","Boccob, god of magic","Celestian, god of stars and wanderers","Istus, goddess of fate and destiny","Gilean, god of knowledge","Reorx, god of craft","Zivilyn, god of wisdom","Skoraeus Stonebones, god of stone giants and art","Thoth, god of knowledge and wisdom","Semuanya, lizardfolk deity of survival","Forseti, god of justice and law","Frigga, goddess of birth and fertility","Silvanus, god of wild nature","Beory, goddess of nature","Obad-Hai, god of nature","Chislev, goddess of nature","Sirrion, god of fire and change","Balinor, god of beasts and the hunt","Skerrit, centaur and satyr god of nature","Dunatis, god of mountains and peaks","Silvanus, god of nature and forests","Skadi, god of earth and mountains","Eadro, merfolk deity of the sea","Zeus, god of the sky, ruler of the gods","Waukeen, goddess of trade","Shinare, goddess of wealth and trade","Kol Korran, god of trade and wealth","Tyche, goddess of good fortune","Tempus, god of war","Nuada, god of war and warriors"];

const trueNeutralKnowledge = ["Gond, god of craft","Oghma, god of knowledge","Waukeen, goddess of trade","Boccob, god of magic","Celestian, god of stars and wanderers","Istus, goddess of fate and destiny","Gilean, god of knowledge","Reorx, god of craft","Shinare, goddess of wealth and trade","Zivilyn, god of wisdom","Skoraeus Stonebones, god of stone giants and art","Thoth, god of knowledge and wisdom"];

const trueNeutralLife = ["Balinor, god of beasts and the hunt","Semuanya, lizardfolk deity of survival","Frigga, goddess of birth and fertility"];

const trueNeutralLight = ["Forseti, god of justice and law","Frigga, goddess of birth and fertility"];

const trueNeutralNature = ["Silvanus, god of wild nature","Beory, goddess of nature","Obad-Hai, god of nature","Chislev, goddess of nature","Sirrion, god of fire and change","Balinor, god of beasts and the hunt","Eadro, merfolk deity of the sea","Skerrit, centaur and satyr god of nature","Dunatis, god of mountains and peaks","Silvanus, god of nature and forests","Skadi, god of earth and mountains"];

const trueNeutralTempest = ["Eadro, merfolk deity of the sea","Zeus, god of the sky, ruler of the gods"];

const trueNeutralTrickery = ["Waukeen, goddess of trade","Shinare, goddess of wealth and trade","Kol Korran, god of trade and wealth","Tyche, goddess of good fortune"];

const trueNeutralWar = ["Tempus, god of war","Nuada, god of war and warriors"];

//f. NEUTRAL EVIL
const neutralEvilAll = ["Vecna, god of evil secrets","Math Mathonwy, god of magic","Arawn, god of life and death","Auril, goddess of winter","The Devourer, god of nature’s wrath","Aegir, god of the sea and storms","Shar, goddess of darkness and loss","Cults of the Dragon Below, deities of madness","Apep, god of evil, fire, and serpents","The Fury, goddess of wrath and madness","The Mockery, god of violence and treachery"];

const neutralEvilKnowledge = ["Vecna, god of evil secrets","Math Mathonwy, god of magic"];

const neutralEvilLife = ["Arawn, god of life and death"];

//const neutralEvilLight = [];
//no gods exist for this combination; true neutral substituted

const neutralEvilNature = ["Auril, goddess of winter"];

const neutralEvilTempest = ["Auril, goddess of winter","The Devourer, god of nature’s wrath","Aegir, god of the sea and storms"];

const neutralEvilTrickery = ["Shar, goddess of darkness and loss","Cults of the Dragon Below, deities of madness","Apep, god of evil, fire, and serpents"];

const neutralEvilWar = ["The Fury, goddess of wrath and madness","The Mockery, god of violence and treachery"];

//g. CHAOTIC GOOD
const chaoticGoodAll = ["Sehanine Moonbow, elf goddess of the moon","Lliira, goddess of joy","Selune, goddess of the moon","Sune, goddess of love and beauty","Corellon Larethian, elf deity of art and magic","Aphrodite, goddess of love and beauty","Apollo, god of light, music, and healing","Odur, god of light and the sun","Rillifane Rallathil, wood elf god of nature","Deep Sashelas, elf god of the sea","Tymora, goddess of good fortune","The Daghdha, god of weather and crops","Hermes, god of travel and commerce","Kord, god of athletics and sport","Trithereon, god of liberty and retribution","Dol Dorn, god of strength at arms","The Spirits of the Past, elven ancestors","Hercules, god of strength and adventure","Bast, goddess of cats and vengeance","Thor, god of storms and thunder"];

const chaoticGoodKnowledge = ["Selune, goddess of the moon","Sehanine Moonbow, elf goddess of the moon","Apollo, god of light, music, and healing"];

const chaoticGoodLife = ["Lliira, goddess of joy","Selune, goddess of the moon","Sune, goddess of love and beauty","Apollo, god of light, music, and healing"];

const chaoticGoodLight = ["Sune, goddess of love and beauty","Corellon Larethian, elf deity of art and magic","Aphrodite, goddess of love and beauty","Apollo, god of light, music, and healing","Odur, god of light and the sun"];

const chaoticGoodNature = ["Deep Sashelas, elf god of the sea","Rillifane Rallathil, wood elf god of nature","The Daghdha, god of weather and crops"];

const chaoticGoodTempest = ["Kord, god of athletics and sport","Deep Sashelas, elf god of the sea","Hercules, god of strength and adventure","Thor, god of storms and thunder"];

const chaoticGoodTrickery = ["Tymora, goddess of good fortune","The Daghdha, god of weather and crops","Hermes, god of travel and commerce"];

const chaoticGoodWar = ["Kord, god of athletics and sport","Trithereon, god of liberty and retribution","Dol Dorn, god of strength at arms","The Spirits of the Past, elven ancestors","Hercules, god of strength and adventure","Bast, goddess of cats and vengeance","Thor, god of storms and thunder"];

//h. CHAOTIC NEUTRAL
const chaoticNeutralAll = ["Lugh, god of arts, travel, and commerce","Dionysus, god of mirth and wine","Pan, god of nature","Uller, god of hunting and winter","Poseidon, god of the sea and earthquakes","Leira, goddess of illusion","Mask, god of thieves","Olidammara, god of revelry","Ralishaz, god of ill luck and insanity","The Traveler, deity of chaos and change","Hera, goddess of marriage and intrigue","Bes, god of luck and music","Hermod, god of luck"];

const chaoticNeutralKnowledge = ["The Traveler, deity of chaos and change","Lugh, god of arts, travel, and commerce"];

const chaoticNeutralLife = ["Lugh, god of arts, travel, and commerce","Dionysus, god of mirth and wine"];

//const chaoticNeutralLight = [];
//no gods exist for this combination; true neutral substituted

const chaoticNeutralNature = ["Pan, god of nature","Uller, god of hunting and winter"];

const chaoticNeutralTempest = ["Poseidon, god of the sea and earthquakes"];

const chaoticNeutralTrickery = ["Leira, goddess of illusion","Mask, god of thieves","Olidammara, god of revelry","Ralishaz, god of ill luck and insanity","The Traveler, deity of chaos and change","Hera, goddess of marriage and intrigue","Bes, god of luck and music","Hermod, god of luck"];

//const chaoticNeutralWar = [];
//no gods exist for this combination; true neutral substituted

//i. CHAOTIC EVIL
const chaoticEvilAll = ["The Shadow, god of dark magic","Malar, god of the hunt","Talos, god of storms","Umberlee, goddess of the sea","Zeboim, goddess of the sea and storms","Beshaba, goddess of misfortune","Cyric, god of lies","Tharizdun, god of eternal darkness","Hiddukel, god of lies and greed","Lolth, drow goddess of spiders","Hecate, goddess of magic and the moon","Set, god of darkness and desert storms","Loki, god of thieves and trickery","Erythnul, god of envy and slaughter","Grolantor, hill giant god of war","Gruumsh, orc god of storms and war","Hruggek, bugbear god of violence","Thrym, god of frost giants and strength","Morrigan, goddess of battle","Ares, god of war and strife","Thrym, god of fire giants and cold"];

const chaoticEvilKnowledge = ["The Shadow, god of dark magic","Hecate, goddess of magic and the moon"];

//const chaoticEvilLife = [];
//no gods exist for this combination; true neutral substituted

//const chaoticEvilLight = [];
//no gods exist for this combination; true neutral substituted

const chaoticEvilNature = ["Malar, god of the hunt"];

const chaoticEvilTempest = ["Talos, god of storms","Umberlee, goddess of the sea","Zeboim, goddess of the sea and storms","Gruumsh, orc god of storms and war","Set, god of darkness and desert storms"];

const chaoticEvilTrickery = ["Beshaba, goddess of misfortune","Cyric, god of lies","Tharizdun, god of eternal darkness","Hiddukel, god of lies and greed","Lolth, drow goddess of spiders","Hecate, goddess of magic and the moon","Set, god of darkness and desert storms","Loki, god of thieves and trickery"];

const chaoticEvilWar = ["Erythnul, god of envy and slaughter","Grolantor, hill giant god of war","Gruumsh, orc god of storms and war","Hruggek, bugbear god of violence","Thrym, god of frost giants and strength","Morrigan, goddess of battle","Ares, god of war and strife","Thrym, god of fire giants and cold"];

//XVI. FIGHTER FIGHTING STYLES
const fightingStyle = ["archery","defense","dueling","great weapon fighting","protection","two-weapon fighting"];

//XVII. RANGER FAVORED ENEMIES
const favoredEnemy = ["aberrations","beasts","celestials","constructs","dragons","elementals","fey","fiends","giants","monstrosities","oozes","plants","undead"];

const humanoidEnemy = ["humans","elves","dwarves","halflings","dragonborn","gnomes","tieflings","orcs","aarakocra","aasimar","bugbears","deep gnomes","duergar","eladrin","firbolgs","genasi","githyanki","githzerai","goblins","goliaths","harengon","hobgoblins","kenku","kobolds","lizardfolk","minotaurs","sea elves","shadar-kai","shifters","tabaxi","tortles","tritons","yuan-tis"];

//XVIII. RANGER FAVORED TERRAIN
const favoredTerrain = ["arctic","coast","desert","forest","grassland","mountain","swamp","underdark"];

//XIX. WARLOCK OTHERWORLDLY PATRON
const otherworldlyPatron = ["the archfey","the fiend","the great old one"];

//XX. TRINKETS
const trinkets = ["a shard of obsidian that always feels warm to the touch","a mummified goblin hand","a piece of crystal that faintly glows in the moonlight","a dragon's bony talon hanging from a plain leather necklace","a gold coin minted in an unknown land","a diary written in a language you don’t know","a pair of old socks","a brass ring that never tarnishes","a blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking","an old chess piece made from glass","a pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips","a silver badge in the shape of a five-pointed star","a knife that belonged to a relative","a small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it","a glass vial filled with nail clippings","a rectangular metal device with two tiny metal cups on one end that throws sparks when wet","a rope necklace from which dangles four mummified elf fingers","a white, sequined glove sized for a human","the deed for a parcel of land in a realm unknown to you","a vest with one hundred tiny pockets","a small, weightless stone block","a 1-ounce block made from an unknown material","a tiny sketch portrait of a goblin","a small cloth doll skewered with needles","an empty glass vial that smells of perfume when opened","a tooth from an unknown beast","an enormous scale, perhaps from a dragon","a gemstone that looks like a lump of coal when examined by anyone but you","a bright green feather","an old divination card bearing your likeness","a scrap of cloth from an old banner","a glass orb filled with moving smoke","a rank insignia from a lost legionnaire","a 1-pound egg with a bright red shell","a tiny silver bell without a clapper","a pipe that blows bubbles","a mechanical canary inside a gnomish lamp","a glass jar containing a weird bit of flesh floating in pickling fluid","a tiny chest carved to look like it has numerous feet on the bottom","a tiny gnome-crafted music box that plays a song you dimly remember from your childhood","a dead sprite inside a clear glass bottle","a metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)","a small wooden statuette of a smug halfling","a brass orb etched with strange runes","a multicolored stone disk","a glass orb filled with water, in which swims a clockwork goldfish","a tiny silver icon of a raven",
"a bag containing forty-seven humanoid teeth, one of which is rotten","a silver spoon with an M engraved on the handle","a whistle made from gold-colored wood","a dead scarab beetle the size of your hand","an invitation to a party where a murder happened","two toy soldiers, one with a missing head","a bronze pentacle with an etching of a rat's head in its center","a small box filled with different-sized buttons","a candle that can’t be lit","a purple handkerchief embroidered with the name of a powerful archmage","a tiny cage with no door","an old key","half of a floorplan for a temple, castle, or some other structure","an indecipherable treasure map","a hilt from a broken sword","a bit of folded cloth that, when unfolded, turns into a stylish cap","a rabbit’s foot","a glass eye","a receipt of deposit at a bank in a far-flung city","a cameo carved in the likeness of a hideous person","a diary with seven missing pages","a silver skull the size of a coin","an empty silver snuffbox bearing an inscription on the surface that says 'dreams'","an alabaster mask","a pyramid of sticky black incense that smells very bad","an iron holy symbol devoted to an unknown god","a nightcap that, when worn, gives you pleasant dreams","a book that tells the story of a legendary hero's rise and fall, with the last chapter missing","a single caltrop made from bone","a vial of dragon blood","a gold monocle frame without the lens","an ancient arrow of elven design","a 1-inch cube, each side painted a different color","a needle that never bends","a crystal knob from a door","an ornate brooch of dwarven design","a small packet filled with pink dust","an empty wine bottle bearing a pretty label that says, 'The Wizard of Wines Winery, Red Dragon Crush, 331422-W'","a fragment of a beautiful song, written as musical notes on two pieces of parchment","a silver teardrop earring made from a real teardrop","a mosaic tile with a multicolored, glazed surface","the shell of an egg painted with scenes of human misery in disturbing detail","a petrified mouse","a black pirate flag adorned with a dragon's skull and crossbones","a fan that, when unfolded, shows a sleeping cat","a set of bone pipes","a tiny mechanical crab or spider that moves about when it’s not being observed",
"a four-leaf clover pressed inside a book discussing manners and etiquette","a glass jar containing lard with a label that reads, 'Griffon Grease'","a sheet of parchment upon which is drawn a complex mechanical contraption","a wooden box with a ceramic bottom that holds a living worm with a head on each end of its body","an ornate scabbard that fits no blade you have found so far","a metal urn containing the ashes of a hero"];

//XXI. MAGIC ITEMS
const magicItemCommon = ["potion of climbing","potion of healing","spell scroll: acid splash","spell scroll: blade ward","spell scroll: chill touch","spell scroll: friends","spell scroll: mage hand","spell scroll: poison spray","spell scroll: ray of frost","spell scroll: shocking grasp","spell scroll: true strike","spell scroll: bless","spell scroll: burning hands","spell scroll: chromatic orb","spell scroll: command","spell scroll: cure wounds","spell scroll: detect magic","spell scroll: feather fall","spell scroll: hex","spell scroll: jump","spell scroll: longstrider","spell scroll: mage armor","spell scroll: magic missile","spell scroll: ray of sickness","spell scroll: shield","spell scroll: sleep","spell scroll: thunderwave","spell scroll: witch bolt"];

const magicItemUncommon = ["alchemy jug","amulet of proof against detection and location","bag of holding","bag of tricks","boots of elvenkind","boots of striding and springing","boots of the winterlands","bracers of archery","brooch of shielding","broom of flying","cap of water breathing","circlet of blasting","cloak of elvenkind","cloak of protection","cloak of the manta ray","decanter of endless water","deck of illusions","driftglobe","dust of disappearance","dust of dryness","dust of sneezing and choking","elemental gem","eversmoking bottle","eyes of charming","eyes of minute seeing","eyes of the eagle","gauntlets of ogre power","gem of brightness","gloves of missile snaring","gloves of swimming and climbing","gloves of thievery","goggles of night","hat of disguise","headband of intellect","helm of comprehending languages","helm of telepathy","immovable rod","Keoghtom's ointment","lantern of revealing","medallion of thoughts","necklace of adaptation","oil of slipperiness","pearl of power","periapt of health","periapt of wound closure","philter of love","pipes of haunting","pipes of the sewers","potion of animal friendship","potion of fire breath","potion of growth","potion of greater healing","potion of poison","potion of resistance","potion of water breathing","quiver of Ehlonna","ring of jumping","ring of mind shielding","ring of swimming","ring of warmth","ring of water walking","robe of useful items","rope of climbing","saddle of the cavalier","sending stones","slippers of spider climbing","stone of good luck","wind fan","spell scroll: alter self","spell scroll: blur","spell scroll: cloud of daggers","spell scroll: darkness","spell scroll: hold person","spell scroll: invisibility","spell scroll: levitate","spell scroll: locate object","spell scroll: ray of enfeeblement","spell scroll: scorching ray","spell scroll: suggestion","spell scroll: animate dead","spell scroll: blink","spell scroll: clairvoyance","spell scroll: dispel magic","spell scroll: fireball","spell scroll: fly","spell scroll: gaseous form","spell scroll: haste","spell scroll: lightning bolt","spell scroll: revivify","spell scroll: slow","spell scroll: thunder step","spell scroll: water walk"];

const magicItemRare = ["amulet of health","bag of beans","bead of force","belt of dwarvenkind","boots of levitation","boots of speed","bowl of commanding water elementals","bracers of defense","brazier of commanding fire elementals","cape of the mountebank","censer of controlling air elementals","chime of opening","cloak of displacement","cloak of the bat","cube of force","Daern's instant fortress","dimensional shackles","elixir of health","folding boat","gem of seeing","helm of teleportation","Heward's handy haversack","horn of blasting","horseshoes of speed","iron bands of bilarro","mantle of spell resistance","necklace of fireballs","oil of etherealness","periapt of proof against poison","portable hole","potion of clairvoyance","potion of diminution","potion of gaseous form","potion of superior healing","potion of heroism","potion of invulnerability","potion of mind reading","Quaal's feather token","ring of animal influence","ring of evasion","ring of feather falling","ring of free action","ring of protection","ring of resistance","ring of the ram","ring of x-ray vision","robe of eyes","rope of entanglement","scroll of protection","stone of controlling earth elementals","spell scroll: banishment","spell scroll: blight","spell scroll: ice storm","spell scroll: polymorph","spell scroll: stoneskin","spell scroll: dominate person","spell scroll: reincarnate","spell scroll: telekinesis"];

//XXII. GAMING SETS
const gamingSet = ["dice set","dragonchess set","playing card set","three-dragon ante set"];

//XXIII. LAND VEHICLES
const landVehicle = ["camel","donkey or mule","elephant","draft horse","riding horse","mastiff","pony","warhorse"];

//XXIV. WATER VEHICLES
const waterVehicle = ["galley","kellboat","longship","rowboat","sailing ship","warship"];

//XXV. PROFICIENCY BONUS
const pBonus = 2;



//XXVI. FUNCTIONS
masterFunction = () => {

//RESETS THE FIELDS AT THE BEGINNING OF THE FUNCTION
    document.getElementById("tools").innerHTML = "<b>Tool proficiencies: </b>";
    document.getElementById("hp").innerHTML = "<b>Hit points: </b>";
    document.getElementById("cantrips").innerHTML = "<b>Cantrips: </b>";
    document.getElementById("spells").innerHTML = "<b>Spells: </b>";
    document.getElementById("spellNotes").innerHTML = "";
    document.getElementById("age").innerHTML = "<b>Age: </b>";
    document.getElementById("type").innerHTML = "<b>Creature type: </b>";
    document.getElementById("size").innerHTML = "<b>Size: </b>";
    document.getElementById("speed").innerHTML = "<b>Walk: </b>";
    document.getElementById("languages").innerHTML = "<b>Languages: </b>";
    document.getElementById("skills").innerHTML = "<b>Skill proficiencies: </b>";
    document.getElementById("weapons").innerHTML = "<b>Weapon proficiencies: </b>";
    document.getElementById("armor").innerHTML = "<b>Armor proficiencies: </b>";
    document.getElementById("savingThrows").innerHTML = "<b>Saving throws: </b>";
    document.getElementById("equipment").innerHTML = "<b>Equipment: </b>";
    document.getElementById("subclass").innerHTML = "";
    document.getElementById("subclass2").innerHTML = "";
    document.getElementById("raceImage").src = "";
    document.getElementById("raceTrait").innerHTML = "";
    document.getElementById("subsub").innerHTML = "";
    document.getElementById("armorSub").innerHTML = "";
    document.getElementById("classTraits").innerHTML = "";
    document.getElementById("domain").innerHTML = "";
    document.getElementById("backgroundSub").innerHTML = "";
    document.getElementById("initiative").innerHTML = "";
    document.getElementById("spellcastingAbility").innerHTML = "";
    document.getElementById("spellSave").innerHTML = "";
    document.getElementById("spellAttack").innerHTML = "";


//XXVII. ABILITY SCORE RANDOMIZER
    let playerStrength = abilityScores[Math.floor(Math.random() * abilityScores.length)];
    document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
    let playerDexterity = abilityScores[Math.floor(Math.random() * abilityScores.length)];
    document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
    let playerConstitution = abilityScores[Math.floor(Math.random() * abilityScores.length)];
    document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
    let playerIntelligence = abilityScores[Math.floor(Math.random() * abilityScores.length)];
    document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
    let playerWisdom = abilityScores[Math.floor(Math.random() * abilityScores.length)];
    document.getElementById("wisdom").innerHTML = `<b>Wisdom:</b> ${playerWisdom}`;
    let playerCharisma = abilityScores[Math.floor(Math.random() * abilityScores.length)];
    document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;

//RACE/CLASS TESTING
//let playerRaceSelected = "half-elf";
//let playerClassSelected = "bard";


//XXVIII. CLASS RANDOMIZER
    let playerClassSelected = playerClass[Math.floor(Math.random() * playerClass.length)];
    document.getElementById("class").innerHTML = `<b>Class:</b> ${playerClassSelected}`;
    document.getElementById("class2").innerHTML = `<b>Class:</b> ${playerClassSelected}`;


//XXIX. RACE RANDOMIZER
    let playerRaceSelected = playerRace[Math.floor(Math.random() * playerRace.length)];
    document.getElementById("race").innerHTML = `<b>Race:</b> ${playerRaceSelected}`;
    document.getElementById("race2").innerHTML = `<b>Race:</b> ${playerRaceSelected}`;


//XXX. WEAPON PROFICIENCIES
    if(playerClassSelected == "barbarian"||playerClassSelected == "fighter"||playerClassSelected == "paladin"||playerClassSelected == "ranger") {
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> simple weapons, martial weapons`;
    } else if(playerClassSelected == "bard"||playerClassSelected == "rogue") {
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> simple weapons, hand crossbows, longswords, rapiers, shortswords`;
    } else if(playerClassSelected == "cleric") {
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> all simple weapons`;
    } else if(playerClassSelected == "druid") {
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears`;
    } else if(playerClassSelected == "monk") {
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> simple weapons, shortswords`;
    } else if(playerClassSelected == "sorcerer"||playerClassSelected == "wizard") {
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> daggers, darts, slings, quarterstaffs, light crossbows`;
    } else if(playerClassSelected == "warlock") {
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> simple weapons`;
    };


//XXXI. RACIAL TRAITS AND IMAGES
    if(playerRaceSelected == "dwarf") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.<br>
        <br>
        <i>Dwarven Resilience.</i> You have advantage on saving throws against poison, and you have resistance against poison damage.<br>
        <br>
        <i>Stonecunning.</i> Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.`;
        document.getElementById("raceImage").src = "./img/dwarf.JPG";
        document.getElementById("weapons").innerHTML += `, battleaxes, handaxes, throwing hammers, warhammers`;
    } else if(playerRaceSelected == "elf") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.<br>
        <br>
        <i>Fey Ancestry.</i> You have advantage on saving throws against being charmed, and magic can’t put you to sleep.<br>
        <br>
        <i>Trance.</i> Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.`;
        document.getElementById("raceImage").src = "./img/elf.JPG";
        document.getElementById("skills").innerHTML += `perception, `;
    } else if(playerRaceSelected == "human") {
        document.getElementById("raceImage").src = "./img/human.JPG";
    } else if(playerRaceSelected == "gnome") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
        <br>
        <i>Gnome Cunning.</i> You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.`;
        document.getElementById("raceImage").src = "./img/gnome.JPG";
    } else if(playerRaceSelected == "halfling") {
        document.getElementById("raceTrait").innerHTML += ` <i>Lucky.</i> When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.<br>
        <br>
        <i>Brave.</i> You have advantage on saving throws against being frightened.<br>
        <br>
        <i>Halfling Nimbleness.</i> You can move through the space of any creature that is of a size larger than yours.`;
        document.getElementById("raceImage").src = "./img/halfling.JPG";
    } else if(playerRaceSelected == "half-elf") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.<br>
        <br>
        <i>Fey Ancestry.</i> You have advantage on saving throws against being charmed, and magic can’t put you to sleep.`;
        document.getElementById("raceImage").src = "./img/half-elf.JPG";
    } else if(playerRaceSelected == "half-orc") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
        <br>
        <i>Relentless Endurance.</i> When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.<br>
        <br>
        <i>Savage Attacks.</i> When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.`;
        document.getElementById("raceImage").src = "./img/half-orc.JPG";
        document.getElementById("skills").innerHTML += `intimidation, `;
    } else if(playerRaceSelected == "dragonborn") {
        document.getElementById("raceTrait").innerHTML += ` <i>Breath Weapon.</i> You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.<br>
        <br>
        <i>Damage Resistance.</i> You have resistance to the damage type associated with your draconic ancestry.`;
        document.getElementById("raceImage").src = "./img/dragonborn.JPG";
    } else if(playerRaceSelected == "tiefling") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.<br>
        <br>
        <i>Hellish Resistance.</i> You have resistance to fire damage.`;
        document.getElementById("raceImage").src = "./img/tiefling.JPG";
        document.getElementById("cantrips").innerHTML += `thaumaturgy, `;
        document.getElementById("spellNotes").innerHTML += `<i><ul><li>the thaumaturgy cantrip is cast using CHR</li></ul></i>`;
    } else if(playerRaceSelected == "aarakocra") {
        document.getElementById("raceTrait").innerHTML += ` <i>Flight.</i> Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.<br>
        <br>
        <i>Talons.</i> You have talons that you can use to make unarmed strikes. When you hit with them, the strike deals ld6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.`;
        document.getElementById("raceImage").src = "./img/aarakocra.JPG";
    } else if(playerRaceSelected == "aasimar") {
        document.getElementById("raceTrait").innerHTML += ` <i>Celestial Resistance.</i> You have resistance to necrotic damage and radiant damage.<br>
        <br>
        <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Healing Hands.</i> As an action, you can touch a creature and roll a number of d4s equal to your proficiency bonus. The creature regains a number of hit points equal to the total rolled. Once you use this trait, you can't use it again until you finish a long rest.`;
        document.getElementById("raceImage").src = "./img/aasimar.JPG";
        document.getElementById("cantrips").innerHTML += `light, `;
        document.getElementById("spellNotes").innerHTML += `<i><ul><li>the light cantrip is cast using CHR</li></ul></i>`;       
    } else if(playerRaceSelected == "bugbear") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Fey Ancestry.</i> You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
        <br>
        <i>Long-Limbed.</i> When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.<br>
        <br>
        <i>Powerful Build.</i> You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br>
        <br>
        <i>Sneaky.</i> Without squeezing, you can move through and stop in a space large enough for a Small creature.<br>
        <br>
        <i>Surprise Attack.</i> If you hit a creature with an attack roll, the creature takes an extra 2d6 damage if it hasn't taken a turn yet in the current combat.`;
        document.getElementById("raceImage").src = "./img/bugbear.JPG";
        document.getElementById("skills").innerHTML += `stealth, `;
    } else if(playerRaceSelected == "centaur") {
        document.getElementById("raceTrait").innerHTML += ` <i>Charge.</i> If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.<br>
        <br>
        <i>Equine Build.</i> You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet instead of the normal 1 extra foot.<br>
        <br>
        <i>Hooves.</i> You have hooves that you can use to make unarmed strikes. When you hit with them, the strike deals ld6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.`;
        document.getElementById("raceImage").src = "./img/centaur.JPG";
        let tempArray = ["animal handling","medicine","nature","survival"];
        let tempSkill = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("skills").innerHTML += `${tempSkill}, `;
    } else if(playerRaceSelected == "changeling") {
        document.getElementById("raceTrait").innerHTML += ` <i>Shapechanger.</i> As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight and can change your size between Medium and Small. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of an individual you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait. You stay in the new form until you use an action to revert to your true form or until you die.`;
        document.getElementById("raceImage").src = "./img/changeling.JPG";
        let tempArray = ["deception","insight","intimidation","performance","persuasion"];
        let tempSkill = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("skills").innerHTML += `${tempSkill}, `;
        let pulledSkillPosition = tempArray.indexOf(tempSkill);
        tempArray.splice(pulledSkillPosition, 1);
        let tempSkill2 = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("skills").innerHTML += `${tempSkill2}, `;
    } else if(playerRaceSelected == "deep gnome") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Gnomish Magic Resistance.</i> You have advantage on Intelligence, Wisdom, and Charisma saving throws against spells.<br>
        <br>
        <i>Svirfneblin Camouflage.</i> When you make a Dexterity (Stealth) check, you can make the check with advantage. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`;
        document.getElementById("raceImage").src = "./img/deep gnome.JPG";
    } else if(playerRaceSelected == "duergar") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Dwarven Resilience.</i> You have advantage on saving throws you make to avoid or end the poisoned condition on yourself. You also have resistance to poison damage.<br>
        <br>
        <i>Psionic Fortitude.</i> You have advantage on saving throws you make to avoid or end the charmed or stunned condition on yourself.`;
        document.getElementById("raceImage").src = "./img/duergar.JPG";
    } else if(playerRaceSelected == "eladrin") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Fey Ancestry.</i> You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
        <br>
        <i>Fey Step.</i> As a bonus action , you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this tra it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
        <br>
        <i>Trance.</i> You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness. Whenever you finish this trance, you can change your season, and you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.`;
        document.getElementById("raceImage").src = "./img/eladrin.JPG";
        document.getElementById("skills").innerHTML += `perception, `;
    } else if(playerRaceSelected == "fairy") {
        document.getElementById("raceTrait").innerHTML += ` <i>Flight.</i> Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.`;
        document.getElementById("raceImage").src = "./img/fairy.JPG";
        document.getElementById("cantrips").innerHTML += `druidcraft, `;
        let statArray = ["INT","WIS","CHR"];
        let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
        document.getElementById("spellNotes").innerHTML += `<i><ul><li>the druidcraft cantrip is cast using ${raceSpell}</li></ul></i>`;
        let feyCharacteristics = ["Your wings are like those of a bird.","You have shimmering, multicolored skin.","You have exceptionally large ears.","A glittering mist constantly surrounds you.","You have a small spectral horn on your forehead, like a little unicorn horn.","Your legs are insectile.","You smell like fresh brownies.","A noticeable, harmless chill surrounds you."];
        let selectedCharacteristic = feyCharacteristics[Math.floor(Math.random() * feyCharacteristics.length)];
        document.getElementById("subsub").innerHTML += `<i><ul><li>${selectedCharacteristic}</li></ul></i>`;
    } else if(playerRaceSelected == "firbolg") {
        document.getElementById("raceTrait").innerHTML += ` <i>Firbolg Magic.</i> You can cast the detect magic and disguise self spells with this trait. When you use this version of disguise self, you can seem up to 3 feet shorter or taller. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.<br>
        <br>
        <i>Hidden Step.</i> As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
        <br>
        <i>Powerful Build.</i> You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br>
        <br>
        <i>Speech of Beast and Leaf.</i> You have the ability to communicate in a limited manner with Beasts, Plants, and vegetation. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.`;
        document.getElementById("raceImage").src = "./img/firbolg.JPG";
        let statArray = ["INT","WIS","CHR"];
        let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
        document.getElementById("spellNotes").innerHTML += `<i><ul><li>the detect magic and disguise self spells are cast using ${raceSpell}</li></ul></i>`;
        document.getElementById("spells").innerHTML += `detect magic, disguise self, `;
    } else if(playerRaceSelected == "genasi") {
        document.getElementById("raceImage").src = "./img/genasi.JPG";
    } else if(playerRaceSelected == "githyanki") {
        document.getElementById("raceTrait").innerHTML += ` <i>Astral Knowledge.</i> You can mystically access a reservoir of experiences of entities connected to the Astral Plane. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you momentarily project your consciousness into the Astral Plane. These proficiencies last until the end of your next long rest.<br>
        <br>
        <i>Githyanki Psionics.</i> You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait.<br>
        <br>
        <i>Psychic Resilience.</i> You have resistance to psychic damage.`;
        document.getElementById("raceImage").src = "./img/githyanki.JPG";
        let statArray = ["INT","WIS","CHR"];
        let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
        document.getElementById("spellNotes").innerHTML += `<i><ul><li>the mage hand cantrip is cast using ${raceSpell}</li></ul></i>`;
        document.getElementById("cantrips").innerHTML += `mage hand, `;
    } else if(playerRaceSelected == "githzerai") {
        document.getElementById("raceTrait").innerHTML += ` <i>Githzerai Psionics.</i> You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait.<br>
        <br>
        <i>Mental Discipline.</i> Your innate psychic defenses grant you advantage on saving throws you make to avoid or end the charmed and frightened conditions on yourself.<br>
        <br>
        <i>Psychic Resilience.</i> You have resistance to psychic damage.`;
        document.getElementById("raceImage").src = "./img/githzerai.JPG";
        let statArray = ["INT","WIS","CHR"];
        let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
        document.getElementById("spellNotes").innerHTML += `<i><ul><li>the mage hand cantrip is cast using ${raceSpell}</li></ul></i>`;
        document.getElementById("cantrips").innerHTML += `mage hand, `;
    } else if(playerRaceSelected == "goblin") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Fey Ancestry.</i> You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
        <br>
        <i>Fury of the Small.</i> When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn.<br>
        <br>
        <i>Nimble Escape.</i> You can take the Disengage or Hide action as a bonus action on each of your turns.`;
        document.getElementById("raceImage").src = "./img/goblin.JPG";
    } else if(playerRaceSelected == "goliath") {
        document.getElementById("raceTrait").innerHTML += ` <i>Little Giant.</i> You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br>
        <br>
        <i>Mountain Born.</i> You have resistance to cold damage. You also naturally acclimate to high altitudes, even if you've never been to one. This includes elevations above 20,000 feet.<br>
        <br>
        <i>Stone's Endurance.</i> You can supernaturally draw on unyielding stone to shrug off harm. When you take damage, you can use your reaction to roll a dl2. Add your Constitution modifier to the number rolled and reduce the damage by that total. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`;
        document.getElementById("raceImage").src = "./img/goliath.JPG";
        document.getElementById("skills").innerHTML += `athletics, `;
    } else if(playerRaceSelected == "harengon") {
        document.getElementById("raceTrait").innerHTML += ` <i>Hare-Trigger.</i> You can add your proficiency bonus to your initiative rolls.<br>
        <br>
        <i>Lucky Footwork.</i> When you fail a Dexterity saving throw, you can use your reaction to roll a d4 and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're prone or your speed is 0.<br>
        <br>
        <i>Rabbit Hop.</i> As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`;
        document.getElementById("raceImage").src = "./img/harengon.JPG";
        document.getElementById("skills").innerHTML += `perception, `;
    } else if(playerRaceSelected == "hobgoblin") {
        document.getElementById("raceTrait").innerHTML += ` <i></i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Fey Ancestry.</i> You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
        <br>
        <i>Fey Gift.</i> You can use this trait to take the Help action as a bonus action, and you can do so a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest.<br>
        <br>
        <i>Fortune from the Many.</i> If you miss with an attack roll or fail an ability check or a saving throw, you can draw on your bonds of reciprocity to gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +3). You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`;
        document.getElementById("raceImage").src = "./img/hobgoblin.JPG";
    } else if(playerRaceSelected == "kenku") {
        document.getElementById("raceTrait").innerHTML += ` <i>Expert Duplication.</i> When you copy writing or craftwork produced by yourself or someone else, you have advantage on any ability checks you make to produce an exact duplicate.<br>
        <br>
        <i>Kenku Recall</i> When you make an ability check using any skill in which you have proficiency, you can give yourself advantage on the check before rolling the d20. You can give yourself advantage in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
        <br>
        <i>Mimicry.</i> You can accurately mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations only with a successful Wisdom (Insight) check against a DC of 8 + your proficiency bonus+ your Charisma modifier.`;
        document.getElementById("raceImage").src = "./img/kenku.JPG";
        let tempArray = allSkills;
        let tempSkill = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("skills").innerHTML += `${tempSkill}, `;
        let pulledSkillPosition = tempArray.indexOf(tempSkill);
        tempArray.splice(pulledSkillPosition, 1);
        let tempSkill2 = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("skills").innerHTML += `${tempSkill2}, `;
    } else if(playerRaceSelected == "kobold") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Draconic Cry.</i> As a bonus action, you let out a cry at your enemies within 10 feet of you. Until the start of your next turn, you and your allies have advantage on attack rolls against any of those enemies who could hear you. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`;
        document.getElementById("raceImage").src = "./img/kobold.JPG";
    } else if(playerRaceSelected == "lizardfolk") {
        document.getElementById("raceTrait").innerHTML += ` <i>Bite.</i> You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals ld6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
        <br>
        <i>Hold Breath.</i> You can hold your breath for up to 15 minutes at a time.<br>
        <br>
        <i>Hungry jaws.</i> You can throw yourself into a feeding frenzy. As a bonus action, you can make a special attack with your Bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
        <br>
        <i>Natural Armor.</i> You have tough, scaly skin. When you aren't wearing armor, your base AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.`;
        document.getElementById("raceImage").src = "./img/lizardfolk.JPG";
        let tempArray = ["animal handling","medicine","nature","perception","stealth","survival"];
        let tempSkill = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("skills").innerHTML += `${tempSkill}, `;
        let pulledSkillPosition = tempArray.indexOf(tempSkill);
        tempArray.splice(pulledSkillPosition, 1);
        let tempSkill2 = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("skills").innerHTML += `${tempSkill2}, `;
    } else if(playerRaceSelected == "minotaur") {
        document.getElementById("raceTrait").innerHTML += ` <i>Horns.</i> You have horns that you can use to make unarmed strikes. When you hit with them, the strike deals ld6 + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
        <br>
        <i>Goring Rush.</i> Immediately after you take the Dash action on your turn and move at least 20 feet, you can make one melee attack with your Horns as a bonus action.<br>
        <br>
        <i>Hammering Horns.</i> Immediately after you hit a creature with a melee attack as part of the Attack action on your turn, you can use a bonus action to attempt to push that target with your horns. The target must be within 5 feet of you and no more than one size larger than you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus+ your Strength modifier, you push it up to 10 feet away from you.<br>
        <br>
        <i>Labyrinthine Recall.</i> You always know which direction is north, and you have advantage on any Wisdom (Survival) check you make to navigate or track.`;
        document.getElementById("raceImage").src = "./img/minotaur.JPG";
    } else if(playerRaceSelected == "orc") {
        document.getElementById("raceTrait").innerHTML += ` <i>Adrenaline Rush.</i> You can take the Dash action as a bonus action. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. Whenever you use this trait, you gain a number of temporary hit points equal to your proficiency bonus.<br>
        <br>
        <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Powerful Build.</i> You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br>
        <br>
        <i>Relentless Endurance.</i> When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once you use this trait, you can't do so again until you finish a long rest.`;
        document.getElementById("raceImage").src = "./img/orc.JPG";
    } else if(playerRaceSelected == "satyr") {
        document.getElementById("raceTrait").innerHTML += ` <i>Ram.</i> You can use your head and horns to make unarmed strikes. When you hit with them, the strike deals ld6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
        <br>
        <i>Magic Resistance.</i> You have advantage on saving throws against spells.<br>
        <br>
        <i>Mirthful Leaps.</i> Whenever you make a long jump or a high jump, you can roll a d8 and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal.`;
        document.getElementById("raceImage").src = "./img/satyr.JPG";
        document.getElementById("skills").innerHTML += `performance, persuasion, `;
    } else if(playerRaceSelected == "sea elf") {
        document.getElementById("raceTrait").innerHTML += ` <i>Child of the Sea.</i> You can breathe air and water, and you have resistance to cold damage.<br>
        <br>
        <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Fey Ancestry.</i> You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
        <br>
        <i>Friend of the Sea.</i> Aquatic animals have an extraordinary affinity with your people. You can communicate simple ideas to any Beast that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.<br>
        <br>
        <i>Trance.</i> You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness. Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.`;
        document.getElementById("raceImage").src = "./img/sea elf.JPG";
        document.getElementById("skills").innerHTML += `perception, `;
    } else if(playerRaceSelected == "shadar-kai") {
        document.getElementById("raceTrait").innerHTML += ` <i>Blessing of the Raven Queen.</i> As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
        <br>
        <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Fey Ancestry.</i> You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
        <br>
        <i>Necrotic Resistance.</i> You have resistance to necrotic damage.<br>
        <br>
        <i>Trance.</i> You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness. Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.`;
        document.getElementById("raceImage").src = "./img/shadar-kai.JPG";
        document.getElementById("skills").innerHTML += `perception, `;
    } else if(playerRaceSelected == "shifter") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Shifting.</i> As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 x your proficiency bonus. You can shift a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`;
        document.getElementById("raceImage").src = "./img/shifter.JPG";
        let tempArray = ["acrobatics","athletics","intimidation","survival"];
        let tempSkill = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("skills").innerHTML += `${tempSkill}, `;
    } else if(playerRaceSelected == "tabaxi") {
        document.getElementById("raceTrait").innerHTML += ` <i>Cat's Claws.</i> You can use your claws to make unarmed strikes. When you hit with them, the strike deals ld6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
        <br>
        <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Feline Agility.</i> Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move O feet on one of your turns.`;
        document.getElementById("raceImage").src = "./img/tabaxi.JPG";
        document.getElementById("skills").innerHTML += `perception, stealth, `;
    } else if(playerRaceSelected == "tortle") {
        document.getElementById("raceTrait").innerHTML += ` <i>Claws.</i> You have claws that you can use to make unarmed strikes. When you hit with them, the strike deals ld6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
        <br>
        <i>Hold Breath.</i> You can hold your breath for up to 1 hour.<br>
        <br>
        <i>Natural Armor.</i> Your shell provides you a base AC of 17 (your Dexterity modifier doesn't affect this number). You can't wear light, medium, or heavy armor, but if you are using a shield, you can apply the shield's bonus as normal.<br>
        <br>
        <i>Shell Defense.</i> You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to your AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is O and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell.`;
        document.getElementById("raceImage").src = "./img/tortle.JPG";
        let tempArray = ["animal handling","medicine","nature","perception","stealth","survival"];
        let tempSkill = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("skills").innerHTML += `${tempSkill}, `;
    } else if(playerRaceSelected == "triton") {
        document.getElementById("raceTrait").innerHTML += ` <i>Amphibious.</i> You can breathe air and water.<br>
        <br>
        <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Emissary of the Sea.</i> You can communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.<br>
        <br>
        <i>Guardian of the Depths.</i> Adapted to the frigid ocean depths, you have resistance to cold damage.`;
        document.getElementById("raceImage").src = "./img/triton.JPG";
        let statArray = ["INT","WIS","CHR"];
        let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
        document.getElementById("spellNotes").innerHTML += `<i><ul><li>the fog cloud cantrip is cast using ${raceSpell}</li></ul></i>`;
        document.getElementById("cantrips").innerHTML += `fog cloud, `;
    } else if(playerRaceSelected == "yuan-ti") {
        document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
        <br>
        <i>Magic Resistance.</i> You have advantage on saving throws against spells.<br>
        <br>
        <i>Poison Resilience.</i> You have advantage on saving throws you make to avoid or end the poisoned condition on yourself. You also have resistance to poison damage.<br>
        <br>
        <i>Serpentine Spellcasting.</i> You can cast animal friendship an unlimited number of times with this trait, but you can target only snakes with it.`;
        document.getElementById("raceImage").src = "./img/yuan-ti.JPG";
        let statArray = ["INT","WIS","CHR"];
        let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
        document.getElementById("spellNotes").innerHTML += `<i><ul><li>the poison spray and animal friendship cantrips are cast using ${raceSpell}</li></ul></i>`;
        document.getElementById("cantrips").innerHTML += `poison spray, animal friendship, `;
    };


//XXXII. SPEED (SOME WITHIN SUBRACE SECTION BELOW)
    if(playerRaceSelected == "dwarf"||playerRaceSelected == "halfling"||playerRaceSelected  == "gnome") {
        walkSpeed = 25;
        document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}`
    } else if(playerRaceSelected == "elf"||playerRaceSelected == "human"||  playerRaceSelected == "dragonborn"||playerRaceSelected == "half-elf"||playerRaceSelected == "half-orc"||playerRaceSelected == "tiefling"||playerRaceSelected == "aasimar"||playerRaceSelected == "bugbear"||playerRaceSelected == "changeling"||playerRaceSelected == "deep gnome"||playerRaceSelected == "duergar"||playerRaceSelected == "eladrin"||playerRaceSelected == "firbolg"||playerRaceSelected == "githyanki"||playerRaceSelected == "githzerai"||playerRaceSelected == "goblin"||playerRaceSelected == "goliath"||playerRaceSelected == "harengon"||playerRaceSelected == "hobgoblin"||playerRaceSelected == "kenku"||playerRaceSelected == "kobold"||playerRaceSelected == "minotaur"||playerRaceSelected == "orc"||playerRaceSelected == "shadar-kai"||playerRaceSelected == "shifter"||playerRaceSelected == "tortle"||playerRaceSelected == "yuan-ti") {
        walkSpeed = 30;
        document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}`;
    } else if(playerRaceSelected == "aarakocra"||playerRaceSelected == "fairy") {
        walkSpeed = 30;
        flySpeed = 30;
        document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}<br>
        <b>Fly:</b> ${flySpeed}`;
    } else if(playerRaceSelected == "centaur") {
        walkSpeed = 40;
        document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}`;
    } else if(playerRaceSelected == "lizardfolk"||playerRaceSelected == "sea elf"||playerRaceSelected == "triton") {
        walkSpeed = 30;
        swimSpeed = 30;
        document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}<br>
        <b>Swim:</b> ${swimSpeed}`;
    } else if(playerRaceSelected == "satyr") {
        walkSpeed = 35;
        document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}`;
    } else if(playerRaceSelected == "tabaxi") {
        walkSpeed = 30;
        climbSpeed = 30;
        document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}<br>
        <b>Climb:</b> ${climbSpeed}`;
    }


//XXXIII. ARMOR PROFICIENCIES
    if(playerClassSelected == "barbarian"||playerClassSelected == "cleric"||playerClassSelected == "ranger") {
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> light armor, medium armor, shields`;
    } else if(playerClassSelected == "bard"||playerClassSelected == "rogue"||playerClassSelected == "warlock") {
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> light armor`;
    } else if(playerClassSelected == "druid") {
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> light armor, medium armor, shields`;
    } else if(playerClassSelected == "fighter"||playerClassSelected == "paladin") {
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> all armor, shields`;
    } else if(playerClassSelected == "monk"||playerClassSelected == "sorcerer"||playerClassSelected == "wizard") {
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b>`;
    };


//XXXIV. SAVING THROWS
    if(playerClassSelected == "barbarian"||playerClassSelected == "fighter") {
        document.getElementById("savingThrows").innerHTML = `<b>Saving throws:</b> strength, constitution`;
    } else if(playerClassSelected == "bard") {
        document.getElementById("savingThrows").innerHTML = `<b>Saving throws:</b> dexterity, charisma`;
    } else if(playerClassSelected == "cleric"||playerClassSelected == "paladin"||playerClassSelected == "warlock") {
        document.getElementById("savingThrows").innerHTML = `<b>Saving throws:</b> wisdom, charisma`;
    } else if(playerClassSelected == "druid"||playerClassSelected == "wizard") {
        document.getElementById("savingThrows").innerHTML = `<b>Saving throws:</b> intelligence, wisdom`;
    } else if(playerClassSelected == "monk"||playerClassSelected == "ranger") {
        document.getElementById("savingThrows").innerHTML = `<b>Saving throws:</b> strength, dexterity`;
    } else if(playerClassSelected == "rogue") {
        document.getElementById("savingThrows").innerHTML = `<b>Saving throws:</b> dexterity, intelligence`;
    } else if(playerClassSelected == "sorcerer") {
        document.getElementById("savingThrows").innerHTML = `<b>Saving throws:</b> constitution, charisma`;
    };


//XXXV. LANGUAGES (SOME WITHIN SUBRACE SECTION BELOW)
    if(playerRaceSelected == "dwarf") {
        document.getElementById("languages").innerHTML = `<b>Languages:</b> common, dwarvish`;
    } else if(playerRaceSelected == "elf") {
        document.getElementById("languages").innerHTML = `<b>Languages:</b> common, elvish`;
    } else if(playerRaceSelected == "halfling") {
        document.getElementById("languages").innerHTML = `<b>Languages:</b> common, halfling`;
    } else if(playerRaceSelected == "human"||playerRaceSelected == "aarakocra"||playerRaceSelected == "aasimar"||playerRaceSelected == "bugbear"||playerRaceSelected == "centaur"||playerRaceSelected == "changeling"||playerRaceSelected == "deep gnome"||playerRaceSelected == "duergar"||playerRaceSelected == "eladrin"||playerRaceSelected == "fairy"||playerRaceSelected == "firbolg"||playerRaceSelected == "genasi"||playerRaceSelected == "githyanki"||playerRaceSelected == "githzerai"||playerRaceSelected == "goblin"||playerRaceSelected == "goliath"||playerRaceSelected == "harengon"||playerRaceSelected == "hobgoblin"||playerRaceSelected == "kenku"||playerRaceSelected == "kobold"||playerRaceSelected == "lizardfolk"||playerRaceSelected == "minotaur"||playerRaceSelected == "orc"||playerRaceSelected == "satyr"||playerRaceSelected == "sea elf"||playerRaceSelected == "shadar-kai"||playerRaceSelected == "shifter"||playerRaceSelected == "tabaxi"||playerRaceSelected == "tortle"||playerRaceSelected == "triton"||playerRaceSelected == "yuan-ti") {
        languageArray = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
        let extraLanguage = languageArray[Math.floor(Math.random() * languageArray.length)];
        document.getElementById("languages").innerHTML = `<b>Languages:</b> common, ${extraLanguage}`;
    } else if(playerRaceSelected == "dragonborn") {
        document.getElementById("languages").innerHTML = `<b>Languages:</b> common, draconic`;
    } else if(playerRaceSelected == "gnome") {
        document.getElementById("languages").innerHTML = `<b>Languages:</b> common, gnomish`;
    } else if(playerRaceSelected == "half-elf") {
        languageArray = ["dwarvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
        let extraLanguage = languageArray[Math.floor(Math.random() * languageArray.length)];
        document.getElementById("languages").innerHTML = `<b>Languages:</b> common, elvish, ${extraLanguage}`;
    } else if(playerRaceSelected == "half-orc") {
        document.getElementById("languages").innerHTML = `<b>Languages:</b> common, orc`;
    } else if(playerRaceSelected == "tiefling") {
        document.getElementById("languages").innerHTML = `<b>Languages:</b> common, infernal`;
    }


//XXXVI. SUB RACE RANDOMIZER AND ABILITY SCORE ADJUSTER, SOME SUBRACE TOOLS
    if(playerRaceSelected == "dwarf") {
        let dwarfTools = ["smith's tools","brewer's tools","mason's tools"];
        let dwarfToolSelected = dwarfTools[Math.floor(Math.random() * dwarfTools.length)];
        document.getElementById("tools").innerHTML += `${dwarfToolSelected}, `;
        raceArray = ["hill dwarf","mountain dwarf"];
        let playerSub = raceArray[Math.floor(Math.random() * raceArray.length)];
        document.getElementById("sub").innerHTML = `<b>Sub:</b> ${playerSub}`;
        if(playerSub == "hill dwarf") {
            playerWisdom++;
            document.getElementById("wisdom").innerHTML = `<b>Wisdom:</b> ${playerWisdom}`;
        } else if(playerSub == "mountain dwarf") {
            playerStrength++;
            playerStrength++;
            document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
        }
    } else if(playerRaceSelected == "halfling") {
        raceArray = ["lightfoot","stout"];
        let playerSub = raceArray[Math.floor(Math.random() * raceArray.length)];
        document.getElementById("sub").innerHTML = `<b>Sub:</b> ${playerSub}`;
        if(playerSub == "lightfoot") {
            playerCharisma++;
            document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Naturally Stealthy.</i> You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.`;
        } else if(playerSub == "stout") {
            playerConstitution++;
            document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Stout Resilience.</i> You have advantage on saving throws against poison, and you have resistance against poison damage.`;
        }
    } else if(playerRaceSelected == "gnome") {
        raceArray = ["forest gnome","rock gnome"];
        let playerSub = raceArray[Math.floor(Math.random() * raceArray.length)];
        document.getElementById("sub").innerHTML = `<b>Sub:</b> ${playerSub}`;
        if(playerSub == "forest gnome") {
            playerDexterity++;
            document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Speak with Small Beasts.</i> Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.`;
            document.getElementById("cantrips").innerHTML += `minor illusion, `;
            document.getElementById("spellNotes").innerHTML += `<i><ul><li>the minor illusion cantrip is cast using INT</li></ul></i>`;
        } else if(playerSub == "rock gnome") {
            document.getElementById("tools").innerHTML += `artisan's tools, `;
            playerConstitution++;
            document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Artificer’s Lore.</i> Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.<br>
            <br>
            <i>Tinker.</i> You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:<br>
            <li>Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.</li>
            <li>Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.</li>
            <li>Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.</li>`;
        }
    } else if(playerRaceSelected == "elf") {
        raceArray = ["high elf","wood elf","dark elf"];
        let playerSub = raceArray[Math.floor(Math.random() * raceArray.length)];
        document.getElementById("sub").innerHTML = `<b>Sub:</b> ${playerSub}`;
        if(playerSub == "high elf") {
            playerIntelligence++;
            document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
            languageArray = ["dwarvish","giant","gnomish","goblin","halfling","orc","abyssal","celesial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let extraLanguage = languageArray[Math.floor(Math.random() * languageArray.length)];
            document.getElementById("languages").innerHTML += `, ${extraLanguage}`;
            let highElfCantrip = wizardCantrip[Math.floor(Math.random() * wizardCantrip.length)];
            document.getElementById("cantrips").innerHTML += `${highElfCantrip}, `;
            document.getElementById("spellNotes").innerHTML += `<i><ul><li>the ${highElfCantrip} cantrip is cast using INT</li></ul></i>`;
        } else if(playerSub == "wood elf") {
            playerWisdom++;
            document.getElementById("wisdom").innerHTML = `<b>Wisdom:</b> ${playerWisdom}`;
            walkSpeed = 35;
            document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}`;
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Mask of the Wild.</i> You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.`;
        } else if(playerSub == "dark elf") {
            playerCharisma++;
            document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Superior Darkvision.</i> Your darkvision has a radius of 120 feet.<br>
            <br>
            <i>Sunlight Sensitivity.</i> You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.`;
            document.getElementById("cantrips").innerHTML += `dancing lights, `;
            document.getElementById("spellNotes").innerHTML += `<i><ul><li>the dancing lights cantrip is cast using CHR</li></ul></i>`;
        }
    } else if(playerRaceSelected == "genasi") {
        raceArray = ["air","earth","water","fire"];
        let playerSub = raceArray[Math.floor(Math.random() * raceArray.length)];
        document.getElementById("sub").innerHTML = `<b>Sub:</b> ${playerSub}`;
        if(playerSub == "air") {
            document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
            <br>
            <i>Unending Breath.</i> You can hold your breath indefinitely while you're not incapacitated.<br>
            <br>
            <i>Lightning Resistance.</i> You have resistance to lightning damage.`;
            walkSpeed = 35;
            document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}`;
            let statArray = ["INT","WIS","CHR"];
            let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
            document.getElementById("spellNotes").innerHTML += `<i><ul><li>the shocking grasp cantrip is cast using ${raceSpell}</li></ul></i>`;
            document.getElementById("cantrips").innerHTML += `shocking grasp, `;
        } else if(playerSub == "earth") {
            document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
            <br>
            <i>Earth Walk.</i> You can move across difficult terrain without expending extra movement if you are using your walking speed on the ground or a floor.<br>
            <br>
            <i>Merge with Stone.</i> You know the blade ward cantrip. You can cast it as normal, and you can also cast it as a bonus action a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest.`;
            walkSpeed = 30;
            document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}`;
            let statArray = ["INT","WIS","CHR"];
            let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
            document.getElementById("spellNotes").innerHTML += `<i><ul><li>the blade ward cantrip is cast using ${raceSpell}</li></ul></i>`;
            document.getElementById("cantrips").innerHTML += `blade ward, `;
        } else if(playerSub == "fire") {
            document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
            <br>
            <i>Fire Resistance.</i> You have resistance to fire damage.`;
            walkSpeed = 30;
            document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}`;
            let statArray = ["INT","WIS","CHR"];
            let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
            document.getElementById("spellNotes").innerHTML += `<i><ul><li>the produce flame cantrip is cast using ${raceSpell}</li></ul></i>`;
            document.getElementById("cantrips").innerHTML += `produce flame, `;
        } else if(playerSub == "water") {
            document.getElementById("raceTrait").innerHTML += ` <i>Darkvision.</i> You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
            <br>
            <i>Acid Resistance.</i> You have resistance to acid damage.<br>
            <br>
            <i>Amphibious.</i> You can breathe air and water.`;
            walkSpeed = 30;
            swimSpeed = 30;
            document.getElementById("speed").innerHTML = `<b>Walk:</b> ${walkSpeed}<br>
            <b>Swim:</b> ${swimSpeed}`;
            let statArray = ["INT","WIS","CHR"];
            let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
            document.getElementById("spellNotes").innerHTML += `<i><ul><li>the acid splash cantrip is cast using ${raceSpell}</li></ul></i>`;
            document.getElementById("cantrips").innerHTML += `acid splash, `;
        }
    } else if(playerRaceSelected == "dragonborn") {
        raceArray = ["black dragon (acid)","blue dragon (lightning)","brass dragon (fire)","bronze dragon (lightning)","copper dragon (acid)","gold dragon (fire)","green dragon (poison)","red dragon (fire)","silver dragon (cold)","white dragon (cold)"];
        let playerSub = raceArray[Math.floor(Math.random() * raceArray.length)];
        document.getElementById("sub").innerHTML = `<b>Sub:</b> ${playerSub}`;
    } else if(playerRaceSelected == "kobold") {
        legacyArray = ["craftiness","defiance","draconic sorcery"]
        let selectedLegacy = legacyArray[Math.floor(Math.random() * legacyArray.length)];
        if(selectedLegacy == "defiance") {
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Defiance.</i> You have advantage on saving throws to avoid or end the frightened condition on yourself.`
        } else if(selectedLegacy == "draconic sorcery") {
            let koboldCantrip = sorcererCantrip[Math.floor(Math.random() * sorcererCantrip.length)];
            let statArray = ["INT","WIS","CHR"];
            let raceSpell = statArray[Math.floor(Math.random() * statArray.length)];
            document.getElementById("spellNotes").innerHTML += `<i><ul><li>the ${koboldCantrip} cantrip is cast using ${raceSpell}</li></ul></i>`;
            document.getElementById("cantrips").innerHTML += `${koboldCantrip}, `;
        } else if (selectedLegacy == "craftiness") {
            let tempArray = ["arcana","investigation","medicine","sleight of hand","survival"];
            let tempSkill = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("skills").innerHTML += `${tempSkill}, `;
        };
        document.getElementById("sub").innerHTML = `<b>Kobold legacy:</b> ${selectedLegacy}`;
    } else if(playerRaceSelected == "shifter") {
        shifterArray = ["beasthide","longtooth","swiftstride","wildhunt"];
        let selectedShift = shifterArray[Math.floor(Math.random() * shifterArray.length)];
        if(selectedShift == "beasthide") {
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Beasthide.</i> You gain ld6 additional temporary hit points. While shifted, you have a + 1 bonus to your Armor Class.`;
        } else if(selectedShift == "longtooth") {
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Longtooth.</i> When you shift and as a bonus action on your other turns while shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to ld6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.`;
        } else if(selectedShift == "swiftstride") {
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Swiftstride.</i> While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks.`;
        } else if(selectedShift == "wildhunt") {
            document.getElementById("raceTrait").innerHTML += `<br>
            <br>
            <i>Wildhunt.</i> While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're incapacitated.`;
        };
        document.getElementById("sub").innerHTML = `<b>Sub:</b> ${selectedShift}`;
    } else {
        document.getElementById("sub").innerHTML = "";
    };


//XXXVII. ABILITY SCORE RACE ADJUSTMENTS
    if(playerRaceSelected == "dwarf") {
        playerConstitution++;
        playerConstitution++;
        document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
    } else if(playerRaceSelected == "elf") {
        playerDexterity++;
        playerDexterity++;
        document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
    } else if(playerRaceSelected == "halfling") {
        playerDexterity++;
        playerDexterity++;
        document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
    } else if(playerRaceSelected == "human") {
        playerStrength++;
        playerDexterity++;
        playerConstitution++;
        playerIntelligence++;
        playerWisdom++;
        playerCharisma++;
        document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
        document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
        document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
        document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
        document.getElementById("wisdom").innerHTML = `<b>Wisdom:</b> ${playerWisdom}`;
        document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
    } else if(playerRaceSelected == "dragonborn") {
        playerStrength++;
        playerStrength++;
        playerCharisma++;
        document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
        document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
    } else if(playerRaceSelected == "gnome") {
        playerIntelligence++;
        playerIntelligence++;
        document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
    } else if(playerRaceSelected == "half-orc") {
        playerStrength++;
        playerStrength++;
        playerConstitution++;
        document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
        document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
    } else if(playerRaceSelected == "tiefling") {
        playerIntelligence++;
        playerCharisma++;
        playerCharisma++;
        document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
        document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
    } else if(playerRaceSelected == "aarakocra"||playerRaceSelected == "aasimar"||playerRaceSelected == "bugbear"||playerRaceSelected == "centaur"||playerRaceSelected == "changeling"||playerRaceSelected == "deep gnome"||playerRaceSelected == "duergar"||playerRaceSelected == "eladrin"||playerRaceSelected == "fairy"||playerRaceSelected == "firbolg"||playerRaceSelected == "genasi"||playerRaceSelected == "githyanki"||playerRaceSelected == "githzerai"||playerRaceSelected == "goblin"||playerRaceSelected == "goliath"||playerRaceSelected == "harengon"||playerRaceSelected == "hobgoblin"||playerRaceSelected == "kenku"||playerRaceSelected == "kobold"||playerRaceSelected == "lizardfolk"||playerRaceSelected == "minotaur"||playerRaceSelected == "orc"||playerRaceSelected == "satyr"||playerRaceSelected == "sea elf"||playerRaceSelected == "shadar-kai"||playerRaceSelected == "shifter"||playerRaceSelected == "tabaxi"||playerRaceSelected == "tortle"||playerRaceSelected == "triton"||playerRaceSelected == "yuan-ti") {
        abilityScoreArray = ["strength","dexterity","constitution","intelligence","wisdom","charisma"];
        let randomAbility = abilityScoreArray[Math.floor(Math.random() * abilityScoreArray.length)];
        if(randomAbility == "strength") {
            playerStrength++;
            document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
        } else if(randomAbility == "dexterity") {
            playerDexterity++;
            document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
        } else if(randomAbility == "constitution") {
            playerConstitution++;
            document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
        } else if(randomAbility == "intelligence") {
            playerIntelligence++;
            document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
        } else if(randomAbility == "wisdom") {
            playerWisdom++;
            document.getElementById("wisdom").innerHTML = `<b>Wisdom:</b> ${playerWisdom}`;
        } else if(randomAbility == "charisma") {
            playerCharisma++;
            document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
        };
        let pulledStatPosition = abilityScoreArray.indexOf(randomAbility);
        abilityScoreArray.splice(pulledStatPosition, 1);
        let randomAbility2 = abilityScoreArray[Math.floor(Math.random() * abilityScoreArray.length)];
        if(randomAbility2 == "strength") {
            playerStrength++;
            document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
        } else if(randomAbility2 == "dexterity") {
            playerDexterity++;
            document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
        } else if(randomAbility2 == "constitution") {
            playerConstitution++;
            document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
        } else if(randomAbility2 == "intelligence") {
            playerIntelligence++;
            document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
        } else if(randomAbility2 == "wisdom") {
            playerWisdom++;
            document.getElementById("wisdom").innerHTML = `<b>Wisdom:</b> ${playerWisdom}`;
        } else if(randomAbility2 == "charisma") {
            playerCharisma++;
            document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
        };
        let randomAbility3 = abilityScoreArray[Math.floor(Math.random() * abilityScoreArray.length)];
        if(randomAbility3 == "strength") {
            playerStrength++;
            document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
        } else if(randomAbility3 == "dexterity") {
            playerDexterity++;
            document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
        } else if(randomAbility3 == "constitution") {
            playerConstitution++;
            document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
        } else if(randomAbility3 == "intelligence") {
            playerIntelligence++;
            document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
        } else if(randomAbility3 == "wisdom") {
            playerWisdom++;
            document.getElementById("wisdom").innerHTML = `<b>Wisdom:</b> ${playerWisdom}`;
        } else if(randomAbility3 == "charisma") {
            playerCharisma++;
            document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
        }
    } else if(playerRaceSelected == "half-elf") {
        playerCharisma++;
        playerCharisma++;
        document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
        abilityScoreArray = ["strength","dexterity","constitution","intelligence","wisdom","charisma"];
        let randomAbility = abilityScoreArray[Math.floor(Math.random() * abilityScoreArray.length)];
        if(randomAbility == "strength") {
            playerStrength++;
            document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
        } else if(randomAbility == "dexterity") {
            playerDexterity++;
            document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
        } else if(randomAbility == "constitution") {
            playerConstitution++;
            document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
        } else if(randomAbility == "intelligence") {
            playerIntelligence++;
            document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
        } else if(randomAbility == "wisdom") {
            playerWisdom++;
            document.getElementById("wisdom").innerHTML = `<b>Wisdom:</b> ${playerWisdom}`;
        } else if(randomAbility == "charisma") {
            playerCharisma++;
            document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
        };
        let randomAbility2 = abilityScoreArray[Math.floor(Math.random() * abilityScoreArray.length)];
        if(randomAbility2 == "strength") {
            playerStrength++;
            document.getElementById("strength").innerHTML = `<b>Strength:</b> ${playerStrength}`;
        } else if(randomAbility2 == "dexterity") {
            playerDexterity++;
            document.getElementById("dexterity").innerHTML = `<b>Dexterity:</b> ${playerDexterity}`;
        } else if(randomAbility2 == "constitution") {
            playerConstitution++;
            document.getElementById("constitution").innerHTML = `<b>Constitution:</b> ${playerConstitution}`;
        } else if(randomAbility2 == "intelligence") {
            playerIntelligence++;
            document.getElementById("intelligence").innerHTML = `<b>Intelligence:</b> ${playerIntelligence}`;
        } else if(randomAbility2 == "wisdom") {
            playerWisdom++;
            document.getElementById("wisdom").innerHTML = `<b>Wisdom:</b> ${playerWisdom}`;
        } else if(randomAbility2 == "charisma") {
            playerCharisma++;
            document.getElementById("charisma").innerHTML = `<b>Charisma:</b> ${playerCharisma}`;
        };
    };


//XXXVIII. CREATURE TYPE
    if(playerRaceSelected == "dwarf"||playerRaceSelected == "elf"||playerRaceSelected == "halfling"||playerRaceSelected == "human"||playerRaceSelected == "dragonborn"||playerRaceSelected == "gnome"||playerRaceSelected == "half-elf"||playerRaceSelected == "half-orc"||playerRaceSelected == "tiefling"||playerRaceSelected == "aarakocra"||playerRaceSelected == "aasimar"||playerRaceSelected == "firbolg"||playerRaceSelected == "genasi"||playerRaceSelected == "githyanki"||playerRaceSelected == "githzerai"||playerRaceSelected == "goliath"||playerRaceSelected == "harengon"||playerRaceSelected == "kenku"||playerRaceSelected == "kobold"||playerRaceSelected == "lizardfolk"||playerRaceSelected == "minotaur"||playerRaceSelected == "orc"||playerRaceSelected == "shifter"||playerRaceSelected == "tabaxi"||playerRaceSelected == "tortle"||playerRaceSelected == "triton"||playerRaceSelected == "yuan-ti") {
        document.getElementById("type").innerHTML = `<b>Creature type:</b> humanoid`;
    } else if(playerRaceSelected == "bugbear"||playerRaceSelected == "goblin"||playerRaceSelected == "hobgoblin") {
        document.getElementById("type").innerHTML = `<b>Creature type:</b> humanoid (goblinoid)`;
    } else if(playerRaceSelected == "centaur"||playerRaceSelected == "changeling"||playerRaceSelected == "fairy"||playerRaceSelected == "satyr") {
        document.getElementById("type").innerHTML = `<b>Creature type:</b> fey`;
    } else if(playerRaceSelected == "deep gnome") {
        document.getElementById("type").innerHTML = `<b>Creature type:</b> humanoid (gnome)`;
    } else if(playerRaceSelected == "duergar") {
        document.getElementById("type").innerHTML = `<b>Creature type:</b> humanoid (dwarf)`;
    } else if(playerRaceSelected == "eladrin"||playerRaceSelected == "sea elf"||playerRaceSelected == "shadar-kai") {
        document.getElementById("type").innerHTML = `<b>Creature type:</b> humanoid (elf)`;
    };


//XXXIX. AGE RANDOMIZER
    if(playerRaceSelected == "human"||playerRaceSelected == "tiefling"||playerRaceSelected == "aarakocra"||playerRaceSelected == "bugbear"||playerRaceSelected == "centaur"||playerRaceSelected == "changeling"||playerRaceSelected == "fairy"||playerRaceSelected == "githzerai"||playerRaceSelected == "goblin"||playerRaceSelected == "goliath"||playerRaceSelected == "harengon"||playerRaceSelected == "hobgoblin"||playerRaceSelected == "kenku"||playerRaceSelected == "kobold"||playerRaceSelected == "lizardfolk"||playerRaceSelected == "minotaur"||playerRaceSelected == "orc"||playerRaceSelected == "satyr"||playerRaceSelected == "shifter"||playerRaceSelected == "tabaxi"||playerRaceSelected == "tortle"||playerRaceSelected == "triton"||playerRaceSelected == "yuan-ti") {
        let playerAge = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "dwarf"||playerRaceSelected == "duergar") {
        let playerAge = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "elf"||playerRaceSelected == "eladrin"||playerRaceSelected == "sea elf"||playerRaceSelected == "shadar-kai") {
        let playerAge = Math.floor(Math.random() * (600 - 100 + 1)) + 100;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "halfling") {
        let playerAge = Math.floor(Math.random() * (120 - 20 + 1)) + 20;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "dragonborn") {
        let playerAge = Math.floor(Math.random() * (70 - 15 + 1)) + 15;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "gnome"||playerRaceSelected == "deep gnome") {
        let playerAge = Math.floor(Math.random() * (350 - 40 + 1)) + 40;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "half-elf") {
        let playerAge = Math.floor(Math.random() * (160 - 20 + 1)) + 20;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "half-orc") {
        let playerAge = Math.floor(Math.random() * (65 - 14 + 1)) + 14;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "aasimar") {
        let playerAge = Math.floor(Math.random() * (120 - 18 + 1)) + 18;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "firbolg") {
        let playerAge = Math.floor(Math.random() * (400 - 18 + 1)) + 18;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "genasi") {
        let playerAge = Math.floor(Math.random() * (100 - 18 + 1)) + 18;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    } else if(playerRaceSelected == "githyanki") {
        let playerAge = Math.floor(Math.random() * (1000000 - 18 + 1)) + 18;
        document.getElementById("age").innerHTML = `<b>Age:</b> ${playerAge}`;
    };


//XL. SIZE
    if(playerRaceSelected == "dwarf"||playerRaceSelected == "elf"||playerRaceSelected == "human"||playerRaceSelected == "dragonborn"||playerRaceSelected == "half-elf"||playerRaceSelected == "half-orc"||playerRaceSelected == "tiefling"||playerRaceSelected == "aarakocra"||playerRaceSelected == "bugbear"||playerRaceSelected == "centaur"||playerRaceSelected == "duergar"||playerRaceSelected == "eladrin"||playerRaceSelected == "firbolg"||playerRaceSelected == "githyanki"||playerRaceSelected == "githzerai"||playerRaceSelected == "goliath"||playerRaceSelected == "hobgoblin"||playerRaceSelected == "lizardfolk"||playerRaceSelected == "minotaur"||playerRaceSelected == "orc"||playerRaceSelected == "satyr"||playerRaceSelected == "sea elf"||playerRaceSelected == "shadar-kai"||playerRaceSelected == "shifter"||playerRaceSelected == "triton") {
        document.getElementById("size").innerHTML = `<b>Size:</b> medium`;
    } else if(playerRaceSelected == "halfling"||playerRaceSelected == "gnome"||playerRaceSelected == "deep gnome"||playerRaceSelected == "fairy"||playerRaceSelected == "goblin"||playerRaceSelected == "kobold") {
        document.getElementById("size").innerHTML = `<b>Size:</b> small`;
    } else if(playerRaceSelected == "aasimar"||playerRaceSelected == "changeling"||playerRaceSelected == "genasi"||playerRaceSelected == "harengon"||playerRaceSelected == "kenku"||playerRaceSelected == "tabaxi"||playerRaceSelected == "tortle"||playerRaceSelected == "yuan-ti") {
        sizeResult = (Math.floor(Math.random()*2)==0);
        if(sizeResult) {
            document.getElementById("size").innerHTML = `<b>Size:</b> small`;
        } else {
            document.getElementById("size").innerHTML = `<b>Size:</b> medium`;
        };
    };


//XLI. TOOL RANDOMIZER (SOME OF THE TOOL RANDOMIZERS ARE WITHIN THE DWARF AND ROCK GNOME CODE ABOVE)
    if(playerRaceSelected == "satyr") {
        let musicalInstrumentSelected = musicalInstrument[Math.floor(Math.random() * musicalInstrument.length)];
        document.getElementById("tools").innerHTML += `${musicalInstrumentSelected}, `;
    }
    if(playerClassSelected == "bard") {
        let pulledItem = document.getElementById("tools").textContent;
        let trimmedItem = pulledItem.substr(20);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = musicalInstrument.filter(item => !preFilteredItem.includes(item));
        let bardInstrument1 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("tools").innerHTML += `${bardInstrument1}, `;
        let pulledInstrument = filteredItem.indexOf(bardInstrument1);
        filteredItem.splice(pulledInstrument, 1);
        let bardInstrument2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("tools").innerHTML += `${bardInstrument2}, `;
        let pulledInstrument2 = filteredItem.indexOf(bardInstrument2);
        filteredItem.splice(pulledInstrument2, 1);
        let bardInstrument3 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("tools").innerHTML += `${bardInstrument3}`;
    } else if(playerClassSelected == "druid") {
        document.getElementById("tools").innerHTML += `herbalism kit<br>`;
    } else if(playerClassSelected == "monk") {
        result = (Math.floor(Math.random()*2)==0);
        if(result) {
            let monkTool = artisanTools[Math.floor(Math.random() * artisanTools.length)];
            document.getElementById("tools").innerHTML += `${monkTool}`;
        } else if(!result) {
            let pulledItem = document.getElementById("tools").textContent;
            let trimmedItem = pulledItem.substr(20);
            let splitItem = trimmedItem.split(",");
            let splitItemArray = splitItem.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let preFilteredItem = splitItemArray.filter(Boolean);
            let filteredItem = musicalInstrument.filter(item => !preFilteredItem.includes(item));
            let monkInstrument = filteredItem[Math.floor(Math.random() * filteredItem.length)];
            document.getElementById("tools").innerHTML += `${monkInstrument}`;
        }
    } else if(playerClassSelected == "rogue") {
        document.getElementById("tools").innerHTML += `thieves' tools<br>`;
    }


//XLII. ALIGNMENT RANDOMIZER
    let playerAlignmentSelected = playerAlignment[Math.floor(Math.random() * playerAlignment.length)];
    document.getElementById("alignment").innerHTML = `<b>Alignment:</b> ${playerAlignmentSelected}`;


//XLIII. CLASS/SUBCLASS (PART OF EQUIP TOO)
    if(playerClassSelected == "barbarian") {
        document.getElementById("classTraits").innerHTML += ` <i>Rage.</i> In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren’t wearing heavy armor:
        <ul><li>You have advantage on Strength checks and Strength saving throws.</li>
        <li>When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.</li>
        <li>You have resistance to bludgeoning, piercing, and slashing damage.</li></ul>
        If you are able to cast spells, you can’t cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.<br>
        <br>
        <i>Unarmored defense.</i> While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.`;
    } else if(playerClassSelected == "bard") {
        document.getElementById("classTraits").innerHTML += ` <i>Ritual casting.</i> You can cast any bard spell you know as a ritual if that spell has the ritual tag.<br>
        <br>
        <i>Spellcasting focus.</i> You can use a musical instrument as a spellcasting focus for your bard spells.<br>
        <br>
        <i>Bardic inspiration.</i> You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature canwait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.`
    } else if(playerClassSelected == "cleric") {
        document.getElementById("classTraits").innerHTML += ` <i>Ritual casting.</i> You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.<br>
        <br>
        <i>Spellcasting focus.</i> You can use a holy symbol as a spellcasting focus for your cleric spells.`
        let divineDomainSelected = divineDomain[Math.floor(Math.random() * divineDomain.length)];
        document.getElementById("domain").innerHTML = `<b>Divine domain:</b> ${divineDomainSelected}`;
        if(divineDomainSelected == "knowledge" && playerAlignmentSelected == "lawful good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = lawfulGoodKnowledge[Math.floor(Math.random() * lawfulGoodKnowledge.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "life" && playerAlignmentSelected == "lawful good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulGoodLife[Math.floor(Math.random() * lawfulGoodLife.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "light" && playerAlignmentSelected == "lawful good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = lawfulGoodLight[Math.floor(Math.random() * lawfulGoodLight.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "nature" && playerAlignmentSelected == "lawful good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulGoodNature[Math.floor(Math.random() * lawfulGoodNature.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "tempest" && playerAlignmentSelected == "lawful good") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = trueNeutralTempest[Math.floor(Math.random() * trueNeutralTempest.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "trickery" && playerAlignmentSelected == "lawful good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = lawfulGoodTrickery[Math.floor(Math.random() * lawfulGoodTrickery.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "war" && playerAlignmentSelected == "lawful good") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulGoodWar[Math.floor(Math.random() * lawfulGoodWar.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
            ///////////////
        } else if(divineDomainSelected == "knowledge" && playerAlignmentSelected == "lawful neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = lawfulNeutralKnowledge[Math.floor(Math.random() * lawfulNeutralKnowledge.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "life" && playerAlignmentSelected == "lawful neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulNeutralLife[Math.floor(Math.random() * lawfulNeutralLife.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "light" && playerAlignmentSelected == "lawful neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = lawfulNeutralLight[Math.floor(Math.random() * lawfulNeutralLight.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "nature" && playerAlignmentSelected == "lawful neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulNeutralNature[Math.floor(Math.random() * lawfulNeutralNature.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "tempest" && playerAlignmentSelected == "lawful neutral") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulNeutralTempest[Math.floor(Math.random() * lawfulNeutralTempest.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "trickery" && playerAlignmentSelected == "lawful neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = trueNeutralTrickery[Math.floor(Math.random() * trueNeutralTrickery.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "war" && playerAlignmentSelected == "lawful neutral") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulNeutralWar[Math.floor(Math.random() * lawfulNeutralWar.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
            ///////////////
        } else if(divineDomainSelected == "knowledge" && playerAlignmentSelected == "lawful evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = lawfulEvilKnowledge[Math.floor(Math.random() * lawfulEvilKnowledge.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "life" && playerAlignmentSelected == "lawful evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = trueNeutralLife[Math.floor(Math.random() * trueNeutralLife.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "light" && playerAlignmentSelected == "lawful evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = trueNeutralLight[Math.floor(Math.random() * trueNeutralLight.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "nature" && playerAlignmentSelected == "lawful evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulEvilNature[Math.floor(Math.random() * lawfulEvilNature.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "tempest" && playerAlignmentSelected == "lawful evil") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulEvilTempest[Math.floor(Math.random() * lawfulEvilTempest.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "trickery" && playerAlignmentSelected == "lawful evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = lawfulEvilTrickery[Math.floor(Math.random() * lawfulEvilTrickery.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "war" && playerAlignmentSelected == "lawful evil") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = lawfulEvilWar[Math.floor(Math.random() * lawfulEvilWar.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
            ///////////////
        } else if(divineDomainSelected == "knowledge" && playerAlignmentSelected == "neutral good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = neutralGoodKnowledge[Math.floor(Math.random() * neutralGoodKnowledge.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "life" && playerAlignmentSelected == "neutral good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = neutralGoodLife[Math.floor(Math.random() * neutralGoodLife.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "light" && playerAlignmentSelected == "neutral good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = neutralGoodLight[Math.floor(Math.random() * neutralGoodLight.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "nature" && playerAlignmentSelected == "neutral good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = neutralGoodNature[Math.floor(Math.random() * neutralGoodNature.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "tempest" && playerAlignmentSelected == "neutral good") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = neutralGoodTempest[Math.floor(Math.random() * neutralGoodTempest.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "trickery" && playerAlignmentSelected == "neutral good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = neutralGoodTrickery[Math.floor(Math.random() * neutralGoodTrickery.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "war" && playerAlignmentSelected == "neutral good") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = neutralGoodWar[Math.floor(Math.random() * neutralGoodWar.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
            ///////////////
        } else if(divineDomainSelected == "knowledge" && playerAlignmentSelected == "true neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = trueNeutralKnowledge[Math.floor(Math.random() * trueNeutralKnowledge.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "life" && playerAlignmentSelected == "true neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = trueNeutralLife[Math.floor(Math.random() * trueNeutralLife.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "light" && playerAlignmentSelected == "true neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = trueNeutralLight[Math.floor(Math.random() * trueNeutralLight.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "nature" && playerAlignmentSelected == "true neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = trueNeutralNature[Math.floor(Math.random() * trueNeutralNature.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "tempest" && playerAlignmentSelected == "true neutral") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = trueNeutralTempest[Math.floor(Math.random() * trueNeutralTempest.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "trickery" && playerAlignmentSelected == "true neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = trueNeutralTrickery[Math.floor(Math.random() * trueNeutralTrickery.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "war" && playerAlignmentSelected == "true neutral") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = trueNeutralWar[Math.floor(Math.random() * trueNeutralWar.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
            ///////////////
        } else if(divineDomainSelected == "knowledge" && playerAlignmentSelected == "neutral evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = neutralEvilKnowledge[Math.floor(Math.random() * neutralEvilKnowledge.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "life" && playerAlignmentSelected == "neutral evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = neutralEvilLife[Math.floor(Math.random() * neutralEvilLife.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "light" && playerAlignmentSelected == "neutral evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = trueNeutralLight[Math.floor(Math.random() * trueNeutralLight.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "nature" && playerAlignmentSelected == "neutral evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = neutralEvilNature[Math.floor(Math.random() * neutralEvilNature.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "tempest" && playerAlignmentSelected == "neutral evil") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = neutralEvilTempest[Math.floor(Math.random() * neutralEvilTempest.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "trickery" && playerAlignmentSelected == "neutral evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = neutralEvilTrickery[Math.floor(Math.random() * neutralEvilTrickery.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "war" && playerAlignmentSelected == "neutral evil") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = neutralEvilWar[Math.floor(Math.random() * neutralEvilWar.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
            ///////////////
        } else if(divineDomainSelected == "knowledge" && playerAlignmentSelected == "chaotic good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = chaoticGoodKnowledge[Math.floor(Math.random() * chaoticGoodKnowledge.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "life" && playerAlignmentSelected == "chaotic good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticGoodLife[Math.floor(Math.random() * chaoticGoodLife.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "light" && playerAlignmentSelected == "chaotic good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = chaoticGoodLight[Math.floor(Math.random() * chaoticGoodLight.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "nature" && playerAlignmentSelected == "chaotic good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticGoodNature[Math.floor(Math.random() * chaoticGoodNature.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "tempest" && playerAlignmentSelected == "chaotic good") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticGoodTempest[Math.floor(Math.random() * chaoticGoodTempest.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "trickery" && playerAlignmentSelected == "chaotic good") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = chaoticGoodTrickery[Math.floor(Math.random() * chaoticGoodTrickery.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "war" && playerAlignmentSelected == "chaotic good") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticGoodWar[Math.floor(Math.random() * chaoticGoodWar.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
            ///////////////
        } else if(divineDomainSelected == "knowledge" && playerAlignmentSelected == "chaotic neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = chaoticNeutralKnowledge[Math.floor(Math.random() * chaoticNeutralKnowledge.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "life" && playerAlignmentSelected == "chaotic neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticNeutralLife[Math.floor(Math.random() * chaoticNeutralLife.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "light" && playerAlignmentSelected == "chaotic neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = trueNeutralLight[Math.floor(Math.random() * trueNeutralLight.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "nature" && playerAlignmentSelected == "chaotic neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticNeutralNature[Math.floor(Math.random() * chaoticNeutralNature.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "tempest" && playerAlignmentSelected == "chaotic neutral") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticNeutralTempest[Math.floor(Math.random() * chaoticNeutralTempest.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "trickery" && playerAlignmentSelected == "chaotic neutral") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = chaoticNeutralTrickery[Math.floor(Math.random() * chaoticNeutralTrickery.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "war" && playerAlignmentSelected == "chaotic neutral") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = trueNeutralWar[Math.floor(Math.random() * trueNeutralWar.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
            ///////////////
        } else if(divineDomainSelected == "knowledge" && playerAlignmentSelected == "chaotic evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = chaoticEvilKnowledge[Math.floor(Math.random() * chaoticEvilKnowledge.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "life" && playerAlignmentSelected == "chaotic evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = trueNeutralLife[Math.floor(Math.random() * trueNeutralLife.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "light" && playerAlignmentSelected == "chaotic evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = trueNeutralLight[Math.floor(Math.random() * trueNeutralLight.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "nature" && playerAlignmentSelected == "chaotic evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticEvilNature[Math.floor(Math.random() * chaoticEvilNature.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "tempest" && playerAlignmentSelected == "chaotic evil") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticEvilTempest[Math.floor(Math.random() * chaoticEvilTempest.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "trickery" && playerAlignmentSelected == "chaotic evil") {
            document.getElementById("equipment").innerHTML += ` mace`;
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += `, scale mail`;
            } else {
                document.getElementById("equipment").innerHTML += `, leather armor`;
            };
            let godSelected = chaoticEvilTrickery[Math.floor(Math.random() * chaoticEvilTrickery.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        } else if(divineDomainSelected == "war" && playerAlignmentSelected == "chaotic evil") {
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` mace`;
            } else {
                document.getElementById("equipment").innerHTML += ` warhammer`;
            };
            tempArmor = ["scale mail","leather armor","chain mail"];
            let playerArmorSelected = tempArmor[Math.floor(Math.random() * tempArmor.length)];
            document.getElementById("equipment").innerHTML += `, ${playerArmorSelected}`;
            let godSelected = chaoticEvilWar[Math.floor(Math.random() * chaoticEvilWar.length)];
            document.getElementById("subclass").innerHTML += `<b>Deity:</b> ${godSelected}`;
        }
    } else if(playerClassSelected == "druid") {
        document.getElementById("classTraits").innerHTML += ` <i>Ritual casting.</i> You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.<br>
        <br>
        <i>Spellcasting focus.</i> You can use a druidic focus as a spellcasting focus for your druid spells.<br>
        <br>
        <i>Druidic.</i> You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.`
        document.getElementById("armorSub").innerHTML += `<i><ul><li>druid will not wear armor or use shields made of metal</li></ul></i>`;
    } else if(playerClassSelected == "fighter") {
        document.getElementById("classTraits").innerHTML += ` <i>Second wind.</i> You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d 10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.`
        let playerFightingStyle = fightingStyle[Math.floor(Math.random() * fightingStyle.length)];
        if(playerFightingStyle == "archery") {
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Archery.</i> You gain a +2 bonus to attack rolls you make with ranged weapons.`;
            document.getElementById("equipment").innerHTML += ` leather armor, longbow, 20 arrows`;
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                tempArray = ["battleaxe","flail","longsword","morningstar","rapier","scimitar","shortsword","war pick","warhammer","whip","glaive","greataxe","greatsword","halberd","maul","pike","trident"];
                let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
                document.getElementById("equipment").innerHTML += `, ${weaponSelected}, shield`;
            } else {
                tempArray = ["battleaxe","flail","longsword","morningstar","rapier","scimitar","shortsword","war pick","warhammer","whip","glaive","greataxe","greatsword","halberd","maul","pike","trident"];
                let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
                let weaponSelected2 = tempArray[Math.floor(Math.random() * tempArray.length)];
                document.getElementById("equipment").innerHTML += `, ${weaponSelected}, ${weaponSelected2}`;
            };
        } else if(playerFightingStyle == "defense") {
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Defense.</i> While you are wearing armor, you gain a +1 bonus to AC.`;
            document.getElementById("equipment").innerHTML += ` chain mail`;
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                tempArray = ["battleaxe","flail","longsword","morningstar","rapier","scimitar","shortsword","war pick","warhammer","whip","glaive","greataxe","greatsword","halberd","maul","pike","trident"];
                let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
                document.getElementById("equipment").innerHTML += `, ${weaponSelected}, shield`;
            } else {
                tempArray = ["battleaxe","flail","longsword","morningstar","rapier","scimitar","shortsword","war pick","warhammer","whip","glaive","greataxe","greatsword","halberd","maul","pike","trident"];
                let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
                let weaponSelected2 = tempArray[Math.floor(Math.random() * tempArray.length)];
                document.getElementById("equipment").innerHTML += `, ${weaponSelected}, ${weaponSelected2}`;
            };
        } else if(playerFightingStyle == "dueling") {
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Dueling.</i> When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.`;
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` chain mail`;
            } else {
                document.getElementById("equipment").innerHTML += ` leather armor, longbow, 20 arrows`;
            };
            tempArray = ["battleaxe","flail","longsword","morningstar","rapier","scimitar","shortsword","war pick","warhammer","whip"];
            let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("equipment").innerHTML += `, ${weaponSelected}, shield`;
        } else if(playerFightingStyle == "great weapon fighting") {
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Great weapon fighting.</i> When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.`;
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` chain mail`;
            } else {
                document.getElementById("equipment").innerHTML += ` leather armor, longbow, 20 arrows`;
            };
            tempArray = ["battleaxe","glaive","greataxe","greatsword","halberd","longsword","maul","pike","trident","warhammer"];
            let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("equipment").innerHTML += `, ${weaponSelected}, shield`;
        } else if(playerFightingStyle == "protection") {
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Protection.</i> When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.`;
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` chain mail`;
            } else {
                document.getElementById("equipment").innerHTML += ` leather armor, longbow, 20 arrows`;
            };
            tempArray = ["battleaxe","flail","longsword","morningstar","rapier","scimitar","shortsword","war pick","warhammer","whip","glaive","greataxe","greatsword","halberd","maul","pike","trident"];
            let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("equipment").innerHTML += `, ${weaponSelected}, shield`;
        } else if(playerFightingStyle == "two-weapon fighting") {
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Two-weapon fighting.</i> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.`;
            flipResult = (Math.floor(Math.random()*2)==0);
            if(flipResult) {
                document.getElementById("equipment").innerHTML += ` chain mail`;
            } else {
                document.getElementById("equipment").innerHTML += ` leather armor, longbow, 20 arrows`;
            };
            tempArray = ["battleaxe","flail","longsword","morningstar","rapier","scimitar","shortsword","war pick","warhammer","whip"];
            let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            let weaponSelected2 = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("equipment").innerHTML += `, ${weaponSelected}, ${weaponSelected2}`;
        };
        document.getElementById("subclass").innerHTML += `<b>Fighting style:</b> ${playerFightingStyle}`;
    } else if(playerClassSelected == "monk") {
        document.getElementById("classTraits").innerHTML += ` <i>Unarmored defense.</i> Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.<br>
        <br>
        <i>Martial arts.</i> At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes andmonk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property. You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:
        <ul><li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li>
        <li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li>
        <li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.</li></ul>`;
    } else if(playerClassSelected == "paladin") {
        document.getElementById("classTraits").innerHTML += ` <i>Divine sense.</i> The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.<br>
        <br>
        <i>Lay on hands.</i> Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.`;
    } else if(playerClassSelected == "ranger") {
        document.getElementById("classTraits").innerHTML += ` <i>Favored enemy.</i> Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.<br>
        <br>
        <i>Natural explorer.</i> You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits:
        <ul><li>Difficult terrain doesn’t slow your group’s travel.</li>
        <li>Your group can’t become lost except by magical means.</li>
        <li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.</li>
        <li>If you are traveling alone, you can move stealthily at a normal pace.</li>
        <li>When you forage, you find twice as much food as you normally would.</li>
        <li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.</li></ul>`;
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            let enemySelected = favoredEnemy[Math.floor(Math.random() * favoredEnemy.length)];
            document.getElementById("subclass").innerHTML += `<b>Favored enemy:</b> ${enemySelected}`;
        } else {
            let enemySelected = humanoidEnemy[Math.floor(Math.random() * humanoidEnemy.length)];
            let pulledEnemyPosition = humanoidEnemy.indexOf(enemySelected);
            humanoidEnemy.splice(pulledEnemyPosition, 1);
            let enemySelected2 = humanoidEnemy[Math.floor(Math.random() * humanoidEnemy.length)];
            document.getElementById("subclass").innerHTML += `<b>Favored enemy:</b> ${enemySelected}, ${enemySelected2}`;
            humanoidEnemy.push(enemySelected);
        };
        let terrainSelected = favoredTerrain[Math.floor(Math.random() * favoredTerrain.length)];
        document.getElementById("subclass2").innerHTML += `<b>Favored terrain:</b> ${terrainSelected}`;
    } else if(playerClassSelected == "rogue") {
        document.getElementById("classTraits").innerHTML += ` <i>Sneak attack.</i> Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.<br>
        <br>
        <i>Thieves' cant.</i> During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.`;
    } else if(playerClassSelected == "sorcerer") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("subclass").innerHTML += `<b>Sorcerous origin:</b> draconic bloodline`;
            tempArray = ["black (acid)","blue (lightning)","brass (fire)","bronze (lightning)","copper (acid)","gold (fire)","green (poison)","red (fire)","silver (cold)","white (cold)"];
            let ancestorSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("subclass").innerHTML += `<br><b>Draconic ancestry:</b> ${ancestorSelected}`;
        } else {
            document.getElementById("subclass").innerHTML += `<b>Sorcerous origin:</b> wild magic`;
        };
    } else if(playerClassSelected == "warlock") {
        document.getElementById("classTraits").innerHTML += ` <i>Spellcasting focus.</i> You can use an arcane focus as a spellcasting focus for your warlock spells.`
        let patronSelected = otherworldlyPatron[Math.floor(Math.random() * otherworldlyPatron.length)];
        document.getElementById("subclass").innerHTML += `<b>Otherworldly patron:</b> ${patronSelected}`;
    } else if(playerClassSelected == "wizard") {
        document.getElementById("classTraits").innerHTML += ` <i>Ritual casting.</i> You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.<br>
        <br>
        <i>Spellcasting focus.</i> You can use an arcane focus as a spellcasting focus for your wizard spells.<br>
        <br>
        <i>Arcane recovery.</i> You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.`
    };


//XLIV. EQUIPMENT (MUST BE BELOW SUBCLASS SECTION)
    if(playerClassSelected == "barbarian") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += ` greataxe`;
        } else {
            tempEquip = ["battleaxe","flail","glaive","greatsword","halberd","lance","longsword","maul","morningstar","pike","rapier","scimitar","shortsword","trident","war pick","warhammer","whip"];
            let weaponSelected = tempEquip[Math.floor(Math.random() * tempEquip.length)];
            document.getElementById("equipment").innerHTML += ` ${weaponSelected}`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, two handaxes`;
        } else {
            tempEquip = ["club","dagger","greatclub","javelin","light hammer","mace","quarterstaff","sickle","spear","light crossbow","dart","shortbow","sling"];
            let weaponSelected = tempEquip[Math.floor(Math.random() * tempEquip.length)];
            document.getElementById("equipment").innerHTML += `, ${weaponSelected}`;
        }
        document.getElementById("equipment").innerHTML += `, explorer's pack, four javelins`
    } else if(playerClassSelected == "bard") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            flipResult2 = (Math.floor(Math.random()*2)==0);
            if(flipResult2) {
                document.getElementById("equipment").innerHTML += ` rapier`;
            } else {
                document.getElementById("equipment").innerHTML += ` longsword`;
            }
        } else {
            tempEquip = ["club","dagger","greatclub","handaxe","javelin","light hammer","mace","quarterstaff","sickle","spear","light crossbow","dart","shortbow","sling"];
            let weaponSelected = tempEquip[Math.floor(Math.random() * tempEquip.length)];
            document.getElementById("equipment").innerHTML += ` ${weaponSelected}`;
        };
        flipResult3 = (Math.floor(Math.random()*2)==0);
        if(flipResult3) {
            document.getElementById("equipment").innerHTML += `, diplomat's pack`;
        } else {
            document.getElementById("equipment").innerHTML += `, entertainer's pack`;
        };
        flipResult4 = (Math.floor(Math.random()*2)==0);
        if(flipResult4) {
            document.getElementById("equipment").innerHTML += `, lute`;
        } else {
            tempInstrument = ["bagpipes","drum","dulcimer","flute","lyre","horn","pan flute","shawm","viol"];
            let instrumentSelected = tempInstrument[Math.floor(Math.random() * tempInstrument.length)];
            document.getElementById("equipment").innerHTML += `, ${instrumentSelected}`;
        };
        document.getElementById("equipment").innerHTML += `, leather armor, dagger`;
    } else if(playerClassSelected == "cleric") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += `, light crossbow and 20 bolts`;
        } else {
            let tempArray = simpleMeleeWeapons.concat(simpleRangedWeapons);
            let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("equipment").innerHTML += `, ${weaponSelected}`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, priest's pack`;
        } else {
            document.getElementById("equipment").innerHTML += `, explorer's pack`;
        };
        document.getElementById("equipment").innerHTML += `, shield, holy symbol`;
    } else if(playerClassSelected == "druid") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += ` wooden shield`;
        } else {
            let tempArray = simpleMeleeWeapons.concat(simpleRangedWeapons);
            let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("equipment").innerHTML += ` ${weaponSelected}`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, scimitar`;
        } else {
            let weaponSelected = simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)];
            document.getElementById("equipment").innerHTML += `, ${weaponSelected}`;
        };
        document.getElementById("equipment").innerHTML += `, leather armor, explorer's pack, druidic focus`;
    } else if(playerClassSelected == "fighter") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += `, light crossbow and 20 bolts`;
        } else {
            document.getElementById("equipment").innerHTML += `, two handaxes`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, dungeoneer's pack`;
        } else {
            document.getElementById("equipment").innerHTML += `, explorer's pack`;
        };
    } else if(playerClassSelected == "monk") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += ` shortsword`;
        } else {
            let tempArray = simpleMeleeWeapons.concat(simpleRangedWeapons);
            let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("equipment").innerHTML += ` ${weaponSelected}`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, dungeoneer's pack`;
        } else {
            document.getElementById("equipment").innerHTML += `, explorer's pack`;
        };
        document.getElementById("equipment").innerHTML += `, 10 darts`;
    } else if(playerClassSelected == "paladin") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            let weaponSelected = martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)];
            document.getElementById("equipment").innerHTML += ` ${weaponSelected}, shield`;
        } else {
            let weaponSelected = martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)];
            let weaponSelected2 = martialMeleeWeapons[Math.floor(Math.random() * martialMeleeWeapons.length)];
            document.getElementById("equipment").innerHTML += ` ${weaponSelected}, ${weaponSelected2}`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, five javelins`;
        } else {
            let weaponSelected = simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)];
            document.getElementById("equipment").innerHTML += `, ${weaponSelected}`;
        };
        flipResult3 = (Math.floor(Math.random()*2)==0);
        if(flipResult3) {
            document.getElementById("equipment").innerHTML += `, priest's pack`;
        } else {
            document.getElementById("equipment").innerHTML += `, explorer's pack`;
        };
        document.getElementById("equipment").innerHTML += `, chain mail, holy symbol`;
    } else if(playerClassSelected == "ranger") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += ` scale mail`;
        } else {
            document.getElementById("equipment").innerHTML += ` leather armor`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, two shortswords`;
        } else {
            let weaponSelected = simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)];
            let weaponSelected2 = simpleMeleeWeapons[Math.floor(Math.random() * simpleMeleeWeapons.length)];
            document.getElementById("equipment").innerHTML += `, ${weaponSelected}, ${weaponSelected2}`;
        };
        flipResult3 = (Math.floor(Math.random()*2)==0);
        if(flipResult3) {
            document.getElementById("equipment").innerHTML += `, dungeoneer's pack`;
        } else {
            document.getElementById("equipment").innerHTML += `, explorer's pack`;
        };
        document.getElementById("equipment").innerHTML += `, longbow, quiver of 20 arrows`;
    } else if(playerClassSelected == "rogue") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += ` rapier`;
        } else {
            document.getElementById("equipment").innerHTML += ` shortsword`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, shortbow, quiver of 20 arrows`;
        } else {
            document.getElementById("equipment").innerHTML += `, shortsword`;
        };
        tempArray = ["burglar's pack","dungeoneer's pack","explorer's pack"];
        let itemSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
        document.getElementById("equipment").innerHTML += `, ${itemSelected}`;
        document.getElementById("equipment").innerHTML += `, leather armor, two daggers, thieves' tools`;
    } else if(playerClassSelected == "sorcerer") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += ` light crossbow and 20 bolts`;
        } else {
            let tempArray = simpleMeleeWeapons.concat(simpleRangedWeapons);
            let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("equipment").innerHTML += ` ${weaponSelected}`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, component pouch`;
        } else {
            document.getElementById("equipment").innerHTML += `, arcane focus`;
        };
        flipResult3 = (Math.floor(Math.random()*2)==0);
        if(flipResult3) {
            document.getElementById("equipment").innerHTML += `, dungeoneer's pack`;
        } else {
            document.getElementById("equipment").innerHTML += `, explorer's pack`;
        };
        document.getElementById("equipment").innerHTML += `, two daggers`;
    } else if(playerClassSelected == "warlock") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += ` light crossbow and 20 bolts`;
        } else {
            let tempArray = simpleMeleeWeapons.concat(simpleRangedWeapons);
            let weaponSelected = tempArray[Math.floor(Math.random() * tempArray.length)];
            document.getElementById("equipment").innerHTML += ` ${weaponSelected}`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, component pouch`;
        } else {
            document.getElementById("equipment").innerHTML += `, arcane focus`;
        };
        flipResult3 = (Math.floor(Math.random()*2)==0);
        if(flipResult3) {
            document.getElementById("equipment").innerHTML += `, dungeoneer's pack`;
        } else {
            document.getElementById("equipment").innerHTML += `, scholar's pack`;
        };
        let tempArray2 = simpleMeleeWeapons.concat(simpleRangedWeapons);
        let weaponSelected2 = tempArray2[Math.floor(Math.random() * tempArray2.length)];
        document.getElementById("equipment").innerHTML += `, leather armor, ${weaponSelected2}, two daggers`;
    } else if(playerClassSelected == "wizard") {
        flipResult = (Math.floor(Math.random()*2)==0);
        if(flipResult) {
            document.getElementById("equipment").innerHTML += ` quarterstaff`;
        } else {
            document.getElementById("equipment").innerHTML += ` dagger`;
        };
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            document.getElementById("equipment").innerHTML += `, component pouch`;
        } else {
            document.getElementById("equipment").innerHTML += `, arcane focus`;
        };
        flipResult3 = (Math.floor(Math.random()*2)==0);
        if(flipResult3) {
            document.getElementById("equipment").innerHTML += `, explorer's pack`;
        } else {
            document.getElementById("equipment").innerHTML += `, scholar's pack`;
        };
        document.getElementById("equipment").innerHTML += `, spellbook`;
    };


//XLV. BACKGROUND RANDOMIZER
    let playerBackgroundSelected = playerBackground[Math.floor(Math.random() * playerBackground.length)];
    document.getElementById("background").innerHTML = `<b>Background:</b> ${playerBackgroundSelected}`;
    document.getElementById("background2").innerHTML = `<b>Background:</b> ${playerBackgroundSelected}`;


//XLVI. FIRST CHARACTERISTIC RANDOMIZER (ALWAYS POSITIVE)
    let playerTraitPositiveSelected = playerTraitPositive[Math.floor(Math.random() * playerTraitPositive.length)];
    document.getElementById("characteristic").innerHTML = `<b>Characteristics:</b> ${playerTraitPositiveSelected}, `;


//XLVII. SECOND CHARACTERISTIC RANDOMIZER (50%POSITIVE, 25%NEUTRAL, 25%NEGATIVE)
    traitResult = (Math.floor(Math.random()*2)==0);
    if(traitResult) {
        let playerTraitPositiveSelected2 = playerTraitPositive[Math.floor(Math.random() * playerTraitPositive.length)];
        if(playerTraitPositiveSelected2 == playerTraitPositiveSelected) {
            let playerTraitPositiveSelected3 = playerTraitPositive[Math.floor(Math.random() * playerTraitPositive.length)];
            document.getElementById("characteristic").innerHTML += playerTraitPositiveSelected3;
        } else {
            document.getElementById("characteristic").innerHTML += playerTraitPositiveSelected2;
        }
    } else {
        traitResult2 = (Math.floor(Math.random()*2)==0);
        if(traitResult2) {
            let playerTraitNegativeSelected = playerTraitNegative[Math.floor(Math.random() * playerTraitNegative.length)];
            document.getElementById("characteristic").innerHTML += playerTraitNegativeSelected;
        } else {
            let playerTraitNeutralSelected = playerTraitNeutral[Math.floor(Math.random() * playerTraitNeutral.length)];
            document.getElementById("characteristic").innerHTML += playerTraitNeutralSelected;
        }
    };


//XLVIII. ABILITY SCORE MODIFIERS & INITIATIVE
//make sure this is after all other ability score modifiers, but before spell randomization
    let strModifier = ((playerStrength - 10) / 2);
    let sModifier = Math.floor(strModifier);
    document.getElementById("strength").innerHTML += `  (${sModifier})`;

    let dexModifier = ((playerDexterity - 10) / 2);
    let dModifier = Math.floor(dexModifier);
    document.getElementById("dexterity").innerHTML += `  (${dModifier})`;
    if(dModifier < 0) {
        document.getElementById("initiative").innerHTML += `<b>Initiative modifier:</b> ${dModifier}`;
    } else if(dModifier == 0) {
        document.getElementById("initiative").innerHTML += `<b>Initiative modifier:</b> none`;
    } else {
        document.getElementById("initiative").innerHTML += `<b>Initiative modifier:</b> +${dModifier}`;
    }
    let conModifier = ((playerConstitution - 10) / 2);
    let cModifier = Math.floor(conModifier);
    document.getElementById("constitution").innerHTML += `  (${cModifier})`;
    let intModifier = ((playerIntelligence - 10) / 2);
    let iModifier = Math.floor(intModifier);
    document.getElementById("intelligence").innerHTML += `  (${iModifier})`;
    let wisModifier = ((playerWisdom - 10) / 2);
    let wModifier = Math.floor(wisModifier);
    document.getElementById("wisdom").innerHTML += `  (${wModifier})`;
    let chrModifier = ((playerCharisma - 10) / 2);
    let rModifier = Math.floor(chrModifier);
    document.getElementById("charisma").innerHTML += `  (${rModifier})`;


//XLIX. HIT POINTS
    if(playerClassSelected == "barbarian") {
        let hitPoints = (12 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "bard") {
        let hitPoints = (8 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "cleric") {
        let hitPoints = (8 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "druid") {
        let hitPoints = (8 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "fighter") {
        let hitPoints = (10 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "monk") {
        let hitPoints = (8 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "paladin") {
        let hitPoints = (10 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "ranger") {
        let hitPoints = (10 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    }  else if(playerClassSelected == "rogue") {
        let hitPoints = (8 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "sorcerer") {
        let hitPoints = (6 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "warlock") {
        let hitPoints = (8 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    } else if(playerClassSelected == "wizard") {
        let hitPoints = (6 + cModifier);
        document.getElementById("hp").innerHTML += hitPoints;
    }


//L. SUBCLASS ADDTIONS USING PULLED textContent
    let pulledSubclassText = document.getElementById("domain").textContent;
    let pulledSubclassTextTrimmed = pulledSubclassText.substr(15);
    if(pulledSubclassTextTrimmed == "knowledge") {
        document.getElementById("spells").innerHTML += `command, identify, `;
    } else if (pulledSubclassTextTrimmed == "life") {
        document.getElementById("spells").innerHTML += `bless, cure wounds, `;
    } else if (pulledSubclassTextTrimmed == "light") {
        document.getElementById("spells").innerHTML += `burning hands, faerie fire, `;
    } else if (pulledSubclassTextTrimmed == "nature") {
        document.getElementById("spells").innerHTML += `animal friendship, speak with animals, `;
    } else if (pulledSubclassTextTrimmed == "tempest") {
        document.getElementById("spells").innerHTML += `fog cloud, thunderwave, `;
    } else if (pulledSubclassTextTrimmed == "trickery") {
        document.getElementById("spells").innerHTML += `charm person, disguise self, `;
    } else if (pulledSubclassTextTrimmed == "war") {
        document.getElementById("spells").innerHTML += `divine favor, shield of faith, `;
    };


//LI. SPELL RANDOMIZER
    if(playerClassSelected == "bard") {
        //BARD CANTRIP ARRAY FILTER
        let cantripArray = document.getElementById("cantrips").textContent;
        let newCantripArray = cantripArray.substr(10);
        let splitArray = newCantripArray.split(",");
        let newSplitArray = splitArray.map(cantripFunction);
        function cantripFunction(cantrip) {
            return cantrip.trim();
        }
        let preFilteredCantrip = newSplitArray.filter(Boolean);
        let filteredCantrip = bardCantrip.filter(item => !preFilteredCantrip.includes(item));
        //BARD SPELL ARRAY FILTER
        let spellArray = document.getElementById("spells").textContent;
        let newSpellArray = spellArray.substr(8);
        let splitSpellArray = newSpellArray.split(",");
        let newSplitSpellArray = splitSpellArray.map(spellFunction);
        function spellFunction(spell) {
            return spell.trim();
        }
        let preFilteredSpell = newSplitSpellArray.filter(Boolean);
        let filteredSpell = bardSpellL1.filter(item => !preFilteredSpell.includes(item));
        //////////
        let bardCantrip1 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${bardCantrip1}, `;
        let pulledCantripPosition = filteredCantrip.indexOf(bardCantrip1);
        filteredCantrip.splice(pulledCantripPosition, 1);
        let bardCantrip2 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${bardCantrip2}`;
        let bardSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${bardSpell1}, `;
        let pulledSpellPosition = filteredSpell.indexOf(bardSpell1);
        filteredSpell.splice(pulledSpellPosition, 1);
        let bardSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${bardSpell2}, `;
        let pulledSpellPosition2 = filteredSpell.indexOf(bardSpell2);
        filteredSpell.splice(pulledSpellPosition2, 1);
        let bardSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${bardSpell3}, `;
        let pulledSpellPosition3 = filteredSpell.indexOf(bardSpell3);
        filteredSpell.splice(pulledSpellPosition3, 1);
        let bardSpell4 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${bardSpell4}`;
    } else if(playerClassSelected == "cleric") {
        //CLERIC CANTRIP ARRAY FILTER
        let cantripArray = document.getElementById("cantrips").textContent;
        let newCantripArray = cantripArray.substr(10);
        let splitArray = newCantripArray.split(",");
        let newSplitArray = splitArray.map(cantripFunction);
        function cantripFunction(cantrip) {
            return cantrip.trim();
        }
        let preFilteredCantrip = newSplitArray.filter(Boolean);
        let filteredCantrip = clericCantrip.filter(item => !preFilteredCantrip.includes(item));
        //CLERIC SPELL ARRAY FILTER
        let spellArray = document.getElementById("spells").textContent;
        let newSpellArray = spellArray.substr(8);
        let splitSpellArray = newSpellArray.split(",");
        let newSplitSpellArray = splitSpellArray.map(spellFunction);
        function spellFunction(spell) {
            return spell.trim();
        }
        let preFilteredSpell = newSplitSpellArray.filter(Boolean);
        let filteredSpell = clericSpellL1.filter(item => !preFilteredSpell.includes(item));
        //////////
        let clericCantrip1 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${clericCantrip1}, `;
        let pulledCantripPosition = filteredCantrip.indexOf(clericCantrip1);
        filteredCantrip.splice(pulledCantripPosition, 1);
        let clericCantrip2 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${clericCantrip2}, `;
        let pulledCantripPosition2 = filteredCantrip.indexOf(clericCantrip2);
        filteredCantrip.splice(pulledCantripPosition2, 1);
        let clericCantrip3 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${clericCantrip3}`;
        let clericSpellQuantity = (wModifier + 1);
        if(clericSpellQuantity == 0||clericSpellQuantity == 1) {
            let clericSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell1}`;
        } 
        if(clericSpellQuantity == 2) {
            let clericSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(clericSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let clericSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell2}`;
        }
        if(clericSpellQuantity == 3) {
            let clericSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(clericSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let clericSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell2}, `;
            let pulledSpellPosition2 = filteredSpell.indexOf(clericSpell2);
            filteredSpell.splice(pulledSpellPosition2, 1);
            let clericSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell3}`;
        }
        if(clericSpellQuantity == 4) {
            let clericSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(clericSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let clericSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell2}, `;
            let pulledSpellPosition2 = filteredSpell.indexOf(clericSpell2);
            filteredSpell.splice(pulledSpellPosition2, 1);
            let clericSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell3}, `;
            let pulledSpellPosition3 = filteredSpell.indexOf(clericSpell3);
            filteredSpell.splice(pulledSpellPosition3, 1);
            let clericSpell4 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell4}`;
        } 
        if(clericSpellQuantity == 5) {
            let clericSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(clericSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let clericSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell2}, `;
            let pulledSpellPosition2 = filteredSpell.indexOf(clericSpell2);
            filteredSpell.splice(pulledSpellPosition2, 1);
            let clericSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell3}, `;
            let pulledSpellPosition3 = filteredSpell.indexOf(clericSpell3);
            filteredSpell.splice(pulledSpellPosition3, 1);
            let clericSpell4 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell4}, `;
            let pulledSpellPosition4 = filteredSpell.indexOf(clericSpell4);
            filteredSpell.splice(pulledSpellPosition4, 1);
            let clericSpell5 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell5}`;
        } 
        if(clericSpellQuantity == 6) {
            let clericSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(clericSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let clericSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell2}, `;
            let pulledSpellPosition2 = filteredSpell.indexOf(clericSpell2);
            filteredSpell.splice(pulledSpellPosition2, 1);
            let clericSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell3}, `;
            let pulledSpellPosition3 = filteredSpell.indexOf(clericSpell3);
            filteredSpell.splice(pulledSpellPosition3, 1);
            let clericSpell4 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell4}, `;
            let pulledSpellPosition4 = filteredSpell.indexOf(clericSpell4);
            filteredSpell.splice(pulledSpellPosition4, 1);
            let clericSpell5 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell5}, `;
            let pulledSpellPosition5 = filteredSpell.indexOf(clericSpell5);
            filteredSpell.splice(pulledSpellPosition5, 1);
            let clericSpell6 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${clericSpell6}`;
        }
    } else if(playerClassSelected == "druid") {
        //DRUID CANTRIP ARRAY FILTER
        let cantripArray = document.getElementById("cantrips").textContent;
        let newCantripArray = cantripArray.substr(10);
        let splitArray = newCantripArray.split(",");
        let newSplitArray = splitArray.map(cantripFunction);
        function cantripFunction(cantrip) {
            return cantrip.trim();
        }
        let preFilteredCantrip = newSplitArray.filter(Boolean);
        let filteredCantrip = druidCantrip.filter(item => !preFilteredCantrip.includes(item));
        //DRUID SPELL ARRAY FILTER
        let spellArray = document.getElementById("spells").textContent;
        let newSpellArray = spellArray.substr(8);
        let splitSpellArray = newSpellArray.split(",");
        let newSplitSpellArray = splitSpellArray.map(spellFunction);
        function spellFunction(spell) {
            return spell.trim();
        }
        let preFilteredSpell = newSplitSpellArray.filter(Boolean);
        let filteredSpell = druidSpellL1.filter(item => !preFilteredSpell.includes(item));
        //////////
        let druidCantrip1 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${druidCantrip1}, `;
        let pulledCantripPosition = filteredCantrip.indexOf(druidCantrip1);
        filteredCantrip.splice(pulledCantripPosition, 1);
        let druidCantrip2 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${druidCantrip2}`;
        let druidSpellQuantity = (wModifier + 1);
        if(druidSpellQuantity == 0||druidSpellQuantity == 1) {
            let druidSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell1}, `;
        } 
        if(druidSpellQuantity == 2) {
            let druidSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(druidSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let druidSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell2}`;
        }
        if(druidSpellQuantity == 3) {
            let druidSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(druidSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let druidSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell2}, `;
            let pulledSpellPosition2 = filteredSpell.indexOf(druidSpell2);
            filteredSpell.splice(pulledSpellPosition2, 1);
            let druidSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell3}`;
        }
        if(druidSpellQuantity == 4) {
            let druidSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(druidSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let druidSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell2}, `;
            let pulledSpellPosition2 = filteredSpell.indexOf(druidSpell2);
            filteredSpell.splice(pulledSpellPosition2, 1);
            let druidSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell3}, `;
            let pulledSpellPosition3 = filteredSpell.indexOf(druidSpell3);
            filteredSpell.splice(pulledSpellPosition3, 1);
            let druidSpell4 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell4}`;
        } 
            if(druidSpellQuantity == 5) {
            let druidSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(druidSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let druidSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell2}, `;
            let pulledSpellPosition2 = filteredSpell.indexOf(druidSpell2);
            filteredSpell.splice(pulledSpellPosition2, 1);
            let druidSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell3}, `;
            let pulledSpellPosition3 = filteredSpell.indexOf(druidSpell3);
            filteredSpell.splice(pulledSpellPosition3, 1);
            let druidSpell4 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell4}, `;
            let pulledSpellPosition4 = filteredSpell.indexOf(druidSpell4);
            filteredSpell.splice(pulledSpellPosition4, 1);
            let druidSpell5 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell5}`;
        } 
            if(druidSpellQuantity == 6) {
            let druidSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell1}, `;
            let pulledSpellPosition = filteredSpell.indexOf(druidSpell1);
            filteredSpell.splice(pulledSpellPosition, 1);
            let druidSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell2}, `;
            let pulledSpellPosition2 = filteredSpell.indexOf(druidSpell2);
            filteredSpell.splice(pulledSpellPosition2, 1);
            let druidSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell3}, `;
            let pulledSpellPosition3 = filteredSpell.indexOf(druidSpell3);
            filteredSpell.splice(pulledSpellPosition3, 1);
            let druidSpell4 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell4}, `;
            let pulledSpellPosition4 = filteredSpell.indexOf(druidSpell4);
            filteredSpell.splice(pulledSpellPosition4, 1);
            let druidSpell5 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell5}, `;
            let pulledSpellPosition5 = filteredSpell.indexOf(druidSpell5);
            filteredSpell.splice(pulledSpellPosition5, 1);
            let druidSpell6 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
            document.getElementById("spells").innerHTML += `${druidSpell6}`;
        }
    } else if(playerClassSelected == "sorcerer") {
        //SORCERER CANTRIP ARRAY FILTER
        let cantripArray = document.getElementById("cantrips").textContent;
        let newCantripArray = cantripArray.substr(10);
        let splitArray = newCantripArray.split(",");
        let newSplitArray = splitArray.map(cantripFunction);
        function cantripFunction(cantrip) {
            return cantrip.trim();
        }
        let preFilteredCantrip = newSplitArray.filter(Boolean);
        let filteredCantrip = sorcererCantrip.filter(item => !preFilteredCantrip.includes(item));
        //SORCERER SPELL ARRAY FILTER
        let spellArray = document.getElementById("spells").textContent;
        let newSpellArray = spellArray.substr(8);
        let splitSpellArray = newSpellArray.split(",");
        let newSplitSpellArray = splitSpellArray.map(spellFunction);
        function spellFunction(spell) {
            return spell.trim();
        }
        let preFilteredSpell = newSplitSpellArray.filter(Boolean);
        let filteredSpell = sorcererSpellL1.filter(item => !preFilteredSpell.includes(item));
        //////////
        let sorcererCantrip1 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${sorcererCantrip1}, `;
        let pulledCantripPosition = filteredCantrip.indexOf(sorcererCantrip1);
        filteredCantrip.splice(pulledCantripPosition, 1);
        let sorcererCantrip2 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${sorcererCantrip2}, `;
        let pulledCantripPosition2 = filteredCantrip.indexOf(sorcererCantrip2);
        filteredCantrip.splice(pulledCantripPosition2, 1);
        let sorcererCantrip3 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${sorcererCantrip3}, `;
        let pulledCantripPosition3 = filteredCantrip.indexOf(sorcererCantrip3);
        filteredCantrip.splice(pulledCantripPosition3, 1);
        let sorcererCantrip4 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${sorcererCantrip4}`;
        let sorcererSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${sorcererSpell1}, `;
        let pulledSpellPosition = filteredSpell.indexOf(sorcererSpell1);
        filteredSpell.splice(pulledSpellPosition, 1);
        let sorcererSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${sorcererSpell2}`;      
    } else if(playerClassSelected == "warlock") {
        //WARLOCK CANTRIP ARRAY FILTER
        let cantripArray = document.getElementById("cantrips").textContent;
        let newCantripArray = cantripArray.substr(10);
        let splitArray = newCantripArray.split(",");
        let newSplitArray = splitArray.map(cantripFunction);
        function cantripFunction(cantrip) {
            return cantrip.trim();
        }
        let preFilteredCantrip = newSplitArray.filter(Boolean);
        let filteredCantrip = warlockCantrip.filter(item => !preFilteredCantrip.includes(item));
        //WARLOCK SPELL ARRAY FILTER
        let spellArray = document.getElementById("spells").textContent;
        let newSpellArray = spellArray.substr(8);
        let splitSpellArray = newSpellArray.split(",");
        let newSplitSpellArray = splitSpellArray.map(spellFunction);
        function spellFunction(spell) {
            return spell.trim();
        }
        let preFilteredSpell = newSplitSpellArray.filter(Boolean);
        let filteredSpell = warlockSpellL1.filter(item => !preFilteredSpell.includes(item));
        ///////PACT SPELL ADDITIONS
        let pulledItem2 = document.getElementById("subclass").textContent;
        let trimmedItem2 = pulledItem2.substr(21);
        if(trimmedItem2 == "the archfey") {
            let tempSpells = ["faerie fire","sleep"];
            let feyArray = filteredSpell.concat(tempSpells);
            let warlockSpell1 = feyArray[Math.floor(Math.random() * feyArray.length)];
            document.getElementById("spells").innerHTML += `${warlockSpell1}, `;
            let pulledSpellPosition = feyArray.indexOf(warlockSpell1);
            feyArray.splice(pulledSpellPosition, 1);
            let warlockSpell2 = feyArray[Math.floor(Math.random() * feyArray.length)];
            document.getElementById("spells").innerHTML += `${warlockSpell2}`; 
        } else if(trimmedItem2 == "the fiend") {
            let tempSpells = ["burning hands","command"];
            let fiendArray = filteredSpell.concat(tempSpells);
            let warlockSpell1 = fiendArray[Math.floor(Math.random() * fiendArray.length)];
            document.getElementById("spells").innerHTML += `${warlockSpell1}, `;
            let pulledSpellPosition = fiendArray.indexOf(warlockSpell1);
            fiendArray.splice(pulledSpellPosition, 1);
            let warlockSpell2 = fiendArray[Math.floor(Math.random() * fiendArray.length)];
            document.getElementById("spells").innerHTML += `${warlockSpell2}`; 
        } else if(trimmedItem2 == "the great old one") {
            let tempSpells = ["dissonant whispers","Tasha's hideous laughter"];
            let oldArray = filteredSpell.concat(tempSpells);
            let warlockSpell1 = oldArray[Math.floor(Math.random() * oldArray.length)];
            document.getElementById("spells").innerHTML += `${warlockSpell1}, `;
            let pulledSpellPosition = oldArray.indexOf(warlockSpell1);
            oldArray.splice(pulledSpellPosition, 1);
            let warlockSpell2 = oldArray[Math.floor(Math.random() * oldArray.length)];
            document.getElementById("spells").innerHTML += `${warlockSpell2}`; 
        };
        //////////
        let warlockCantrip1 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${warlockCantrip1}, `;
        let pulledCantripPosition = filteredCantrip.indexOf(warlockCantrip1);
        filteredCantrip.splice(pulledCantripPosition, 1);
        let warlockCantrip2 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${warlockCantrip2}`;
    } else if(playerClassSelected == "wizard") {
        //WIZARD CANTRIP ARRAY FILTER
        let cantripArray = document.getElementById("cantrips").textContent;
        let newCantripArray = cantripArray.substr(10);
        let splitArray = newCantripArray.split(",");
        let newSplitArray = splitArray.map(cantripFunction);
        function cantripFunction(cantrip) {
            return cantrip.trim();
        }
        let preFilteredCantrip = newSplitArray.filter(Boolean);
        let filteredCantrip = wizardCantrip.filter(item => !preFilteredCantrip.includes(item));
        //WIZARD SPELL ARRAY FILTER
        let spellArray = document.getElementById("spells").textContent;
        let newSpellArray = spellArray.substr(8);
        let splitSpellArray = newSpellArray.split(",");
        let newSplitSpellArray = splitSpellArray.map(spellFunction);
        function spellFunction(spell) {
            return spell.trim();
        }
        let preFilteredSpell = newSplitSpellArray.filter(Boolean);
        let filteredSpell = wizardSpellL1.filter(item => !preFilteredSpell.includes(item));
        //////////
        let wizardCantrip1 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${wizardCantrip1}, `;
        let pulledCantripPosition = filteredCantrip.indexOf(wizardCantrip1);
        filteredCantrip.splice(pulledCantripPosition, 1);
        let wizardCantrip2 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${wizardCantrip2}, `;
        let pulledCantripPosition2 = filteredCantrip.indexOf(wizardCantrip2);
        filteredCantrip.splice(pulledCantripPosition2, 1);
        let wizardCantrip3 = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `${wizardCantrip3}`;
        let wizardSpell1 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${wizardSpell1}, `;
        let pulledSpellPosition = filteredSpell.indexOf(wizardSpell1);
        filteredSpell.splice(pulledSpellPosition, 1);
        let wizardSpell2 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${wizardSpell2}, `;
        let pulledSpellPosition2 = filteredSpell.indexOf(wizardSpell2);
        filteredSpell.splice(pulledSpellPosition2, 1);
        let wizardSpell3 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${wizardSpell3}, `;
        let pulledSpellPosition3 = filteredSpell.indexOf(wizardSpell3);
        filteredSpell.splice(pulledSpellPosition3, 1);
        let wizardSpell4 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${wizardSpell4}, `;
        let pulledSpellPosition4 = filteredSpell.indexOf(wizardSpell4);
        filteredSpell.splice(pulledSpellPosition4, 1);
        let wizardSpell5 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${wizardSpell5}, `;
        let pulledSpellPosition5 = filteredSpell.indexOf(wizardSpell5);
        filteredSpell.splice(pulledSpellPosition5, 1);
        let wizardSpell6 = filteredSpell[Math.floor(Math.random() * filteredSpell.length)];
        document.getElementById("spells").innerHTML += `${wizardSpell6}`;
    } else if(playerClassSelected == "barbarian"||playerClassSelected == "fighter"||playerClassSelected == "monk"||playerClassSelected == "paladin"||playerClassSelected == "ranger"||playerClassSelected == "rogue") {
        let cantripArray = document.getElementById("cantrips").textContent;
        let newCantripArray = cantripArray.substring(0, cantripArray.length - 2);
        let newCantripArray2 = newCantripArray.substr(9);
        document.getElementById("cantrips").innerHTML = `<b>Cantrips: </b>${newCantripArray2}`;
        let spellArray = document.getElementById("spells").textContent;
        let newSpellArray = spellArray.substring(0, spellArray.length - 2);
        let newSpellArray2 = newSpellArray.substr(7);
        document.getElementById("spells").innerHTML = `<b>Spells: </b>${newSpellArray2}`;
    };


//LII. SUBRACE ADDITIONS USING PULLED textContent
    let pulledText = document.getElementById("sub").textContent;
    let pulledTextTrimmed = pulledText.substr(5);
    if(pulledTextTrimmed == "hill dwarf") {
        let pulledHPText = document.getElementById("hp").textContent;
        let pulledHPTextTrimmed = pulledHPText.substr(12);
        let parsedHPText = parseInt(pulledHPTextTrimmed);
        let newHitPoints = (parsedHPText + 1);
        document.getElementById("hp").innerHTML = `<b>Hit points:</b> ${newHitPoints}`;
    } else if(pulledTextTrimmed == "mountain dwarf") {
        let pulledItem = document.getElementById("armor").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["light armor","medium armor"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> ${joinArray}`;
    } else if(pulledTextTrimmed == "high elf"||pulledTextTrimmed == "wood elf") {
        let pulledItem = document.getElementById("weapons").textContent;
        let trimmedItem = pulledItem.substr(22);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["longswords","shortswords","shortbows","longbows"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> ${joinArray}`;
    } else if(pulledTextTrimmed == "dark elf") {
        let pulledItem = document.getElementById("weapons").textContent;
        let trimmedItem = pulledItem.substr(22);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["rapiers","shortswords","hand crossbows"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> ${joinArray}`;
    };


//LIII. SKILLS AND OTHER CLASS ITEMS
    if(playerClassSelected == "barbarian") {
        tempSkills = ["animal handling","athletics","intimidation","nature","perception","survival"];
        ////this block for skill randomization after a skill already exists from race or subrace stuff above
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        //////////////////////////////////
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}`;
    } else if(playerClassSelected == "bard") {
        tempSkills = ["athletics","acrobatics","sleight of hand","stealth","arcana","history","investigation","nature","religion","animal handling","insight","medicine","perception","survival","deception","intimidation","performance","persuasion"];
        /////
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        /////
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}, `;
        let pulledSkillPosition2 = filteredItem.indexOf(skillSelected2);
        filteredItem.splice(pulledSkillPosition2, 1);
        let skillSelected3 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected3}`;
    } else if(playerClassSelected == "cleric") {
        tempSkills = ["history","insight","medicine","persuasion","religion"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}`;
    } else if(playerClassSelected == "druid") {
        tempSkills = ["arcana","animal handling","insight","medicine","nature","perception","religion","survival"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}`;
    } else if(playerClassSelected == "fighter") {
        tempSkills = ["acrobatics","animal handling","athletics","history","insight","intimidation","perception","survival"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}`;
    } else if(playerClassSelected == "monk") {
        tempSkills = ["acrobatics","athletics","history","insight","religion","stealth"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}`;
    } else if(playerClassSelected == "paladin") {
        tempSkills = ["athletics","insight","intimidation","medicine","persuasion","religion"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}`;
    } else if(playerClassSelected == "ranger") {
        tempSkills = ["animal handling","athletics","insight","investigation","nature","perception","stealth","survival"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}, `;
        let pulledSkillPosition2 = filteredItem.indexOf(skillSelected2);
        filteredItem.splice(pulledSkillPosition2, 1);
        let skillSelected3 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected3}`;
    } else if(playerClassSelected == "rogue") {
        tempSkills = ["animal handling","athletics","insight","investigation","nature","perception","stealth","survival"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}, `;
        let pulledSkillPosition2 = filteredItem.indexOf(skillSelected2);
        filteredItem.splice(pulledSkillPosition2, 1);
        let skillSelected3 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected3}, `;
        let pulledSkillPosition3 = filteredItem.indexOf(skillSelected3);
        filteredItem.splice(pulledSkillPosition3, 1);
        let skillSelected4 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected4}`;
        expertiseSplit = (Math.floor(Math.random()*2)==0);
        if(expertiseSplit) {
            let pulledItem = document.getElementById("skills").textContent;
            let trimmedItem = pulledItem.substr(21);
            let splitItem = trimmedItem.split(",");
            let splitItemArray = splitItem.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let preFilteredItem = splitItemArray.filter(Boolean);
            let skillSelected = preFilteredItem[Math.floor(Math.random() * preFilteredItem.length)];
            let pulledSkillPosition = preFilteredItem.indexOf(skillSelected);
            preFilteredItem.splice(pulledSkillPosition, 1);
            let skillSelected2 = preFilteredItem[Math.floor(Math.random() * preFilteredItem.length)];
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Expertise.</i> Your proficiency bonus is doubled for any ability check you make that uses either ${skillSelected} or ${skillSelected2}.`;
        } else {
            let pulledItem = document.getElementById("skills").textContent;
            let trimmedItem = pulledItem.substr(21);
            let splitItem = trimmedItem.split(",");
            let splitItemArray = splitItem.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let preFilteredItem = splitItemArray.filter(Boolean);
            let skillSelected = preFilteredItem[Math.floor(Math.random() * preFilteredItem.length)];
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Expertise.</i> Your proficiency bonus is doubled for any ability check you make that uses either ${skillSelected} or thieves' tools.`;
        };
    } else if(playerClassSelected == "sorcerer") {
        tempSkills = ["arcana","deception","insight","intimidation","persuasion","religion"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}`;
        //draconic language
        let pulledItem2 = document.getElementById("subclass").textContent;
        let trimmedItem2 = pulledItem2.substr(18);
        if(trimmedItem2 !== "wild magic") {
            let pulledItem3 = document.getElementById("languages").textContent;
            let trimmedItem3 = pulledItem3.substr(11);
            let splitItem3 = trimmedItem3.split(",");
            let splitItemArray3 = splitItem3.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let preFilteredItem3 = splitItemArray3.filter(Boolean);
            let langDraconic = preFilteredItem3.includes("draconic");
            if(playerRaceSelected == "half-elf" && langDraconic) {
                tempArray = ["dwarvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","deep speech","infernal","primordial","sylvan","undercommon"];
                let extraLanguage = tempArray[Math.floor(Math.random() * tempArray.length)];
                document.getElementById("languages").innerHTML += `, ${extraLanguage}`;
            } else if(playerRaceSelected == "human" && langDraconic||playerRaceSelected == "aarakocra" && langDraconic||playerRaceSelected == "aasimar" && langDraconic||playerRaceSelected == "bugbear" && langDraconic||playerRaceSelected == "centaur" && langDraconic||playerRaceSelected == "changeling" && langDraconic||playerRaceSelected == "deep gnome" && langDraconic||playerRaceSelected == "duergar" && langDraconic||playerRaceSelected == "eladrin" && langDraconic||playerRaceSelected == "fairy" && langDraconic||playerRaceSelected == "firbolg" && langDraconic||playerRaceSelected == "genasi" && langDraconic||playerRaceSelected == "githyanki" && langDraconic||playerRaceSelected == "githzerai" && langDraconic||playerRaceSelected == "goblin" && langDraconic||playerRaceSelected == "goliath" && langDraconic||playerRaceSelected == "harengon" && langDraconic||playerRaceSelected == "hobgoblin" && langDraconic||playerRaceSelected == "kenku" && langDraconic||playerRaceSelected == "kobold" && langDraconic||playerRaceSelected == "lizardfolk" && langDraconic||playerRaceSelected == "minotaur" && langDraconic||playerRaceSelected == "orc" && langDraconic||playerRaceSelected == "satyr" && langDraconic||playerRaceSelected == "sea elf" && langDraconic||playerRaceSelected == "shadar-kai" && langDraconic||playerRaceSelected == "shifter" && langDraconic||playerRaceSelected == "tabaxi" && langDraconic||playerRaceSelected == "tortle" && langDraconic||playerRaceSelected == "triton" && langDraconic||playerRaceSelected == "yuan-ti" && langDraconic) {
                tempArray = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","deep speech","infernal","primordial","sylvan","undercommon"];
                let extraLanguage = tempArray[Math.floor(Math.random() * tempArray.length)];
                document.getElementById("languages").innerHTML += `, ${extraLanguage}`;
            } else if(playerRaceSelected == "half-elf" && !langDraconic) {
                document.getElementById("languages").innerHTML += `, draconic`;
            } else if(playerRaceSelected == "human" && !langDraconic||playerRaceSelected == "aarakocra" && !langDraconic||playerRaceSelected == "aasimar" && !langDraconic||playerRaceSelected == "bugbear" && !langDraconic||playerRaceSelected == "centaur" && !langDraconic||playerRaceSelected == "changeling" && !langDraconic||playerRaceSelected == "deep gnome" && !langDraconic||playerRaceSelected == "duergar" && !langDraconic||playerRaceSelected == "eladrin" && !langDraconic||playerRaceSelected == "fairy" && !langDraconic||playerRaceSelected == "firbolg" && !langDraconic||playerRaceSelected == "genasi" && !langDraconic||playerRaceSelected == "githyanki" && !langDraconic||playerRaceSelected == "githzerai" && !langDraconic||playerRaceSelected == "goblin" && !langDraconic||playerRaceSelected == "goliath" && !langDraconic||playerRaceSelected == "harengon" && !langDraconic||playerRaceSelected == "hobgoblin" && !langDraconic||playerRaceSelected == "kenku" && !langDraconic||playerRaceSelected == "kobold" && !langDraconic||playerRaceSelected == "lizardfolk" && !langDraconic||playerRaceSelected == "minotaur" && !langDraconic||playerRaceSelected == "orc" && !langDraconic||playerRaceSelected == "satyr" && !langDraconic||playerRaceSelected == "sea elf" && !langDraconic||playerRaceSelected == "shadar-kai" && !langDraconic||playerRaceSelected == "shifter" && !langDraconic||playerRaceSelected == "tabaxi" && !langDraconic||playerRaceSelected == "tortle" && !langDraconic||playerRaceSelected == "triton" && !langDraconic||playerRaceSelected == "yuan-ti" && !langDraconic) {
                document.getElementById("languages").innerHTML += `, draconic`;
            } else if(playerRaceSelected == "dwarf"||playerRaceSelected == "elf"||playerRaceSelected == "halfling"||playerRaceSelected == "gnome"||playerRaceSelected == "half-orc"||playerRaceSelected == "tiefling") {
                document.getElementById("languages").innerHTML += `, draconic`;
            };
            document.getElementById("classTraits").innerHTML += ` <i>Draconic ancestry.</i> Whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.<br>
            <br>
            <i>Draconic resilience.</i> Parts of your skin are covered by a thin sheen of dragon-like scales. When you aren’t wearing armor, your AC equals 13 + your Dexterity modifier.`;
            let pulledHPText = document.getElementById("hp").textContent;
            let pulledHPTextTrimmed = pulledHPText.substr(12);
            let parsedHPText = parseInt(pulledHPTextTrimmed);
            let newHitPoints = (parsedHPText + 1);
            document.getElementById("hp").innerHTML = `<b>Hit points:</b> ${newHitPoints}`;
        } else if(trimmedItem2 == "wild magic") {
            document.getElementById("classTraits").innerHTML += ` <i>Wild magic surge.</i> Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect.<br>
            <br>
            <i>Tides of chaos.</i> Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again. Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.`;
        };
    } else if(playerClassSelected == "warlock") {
        tempSkills = ["arcana","deception","history","intimidation","investigation","nature","religion"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}`;
        let pulledItem2 = document.getElementById("subclass").textContent;
        let trimmedItem2 = pulledItem2.substr(21);
        if(trimmedItem2 == "the archfey") {
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Fey presence.</i> Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn. Once you use this feature, you can’t use it again until you finish a short or long rest.`;
        } else if (trimmedItem2 == "the fiend") {
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Dark one's blessing.</i> Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).`;
        } else if (trimmedItem2 == "the great old one") {
            document.getElementById("classTraits").innerHTML += `<br>
            <br>
            <i>Awakened mind.</i> Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can communicate telepathically with any creature you can see within 30 feet of you. You don’t need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.`;
        };
    } else if(playerClassSelected == "wizard") {
        tempSkills = ["arcana","history","insight","investigation","medicine","religion"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected}, `;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("skills").innerHTML += `${skillSelected2}`;
    };


//LIV. SUBCLASS ADDTIONS USING PULLED textContent CONTINUED
    let pulledSubclassText2 = document.getElementById("domain").textContent;
    let pulledSubclassTextTrimmed2 = pulledSubclassText2.substr(15);
    if(pulledSubclassTextTrimmed2 == "knowledge") {
        let pulledItem3 = document.getElementById("languages").textContent;
        let trimmedItem3 = pulledItem3.substr(11);
        let splitItem3 = trimmedItem3.split(",");
        let splitItemArray3 = splitItem3.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem3 = splitItemArray3.filter(Boolean);
        let filteredItem = allLanguages.filter(item => !preFilteredItem3.includes(item));
        let skillSelected = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("languages").innerHTML += `, ${skillSelected}`;
        let pulledSkillPosition = filteredItem.indexOf(skillSelected);
        filteredItem.splice(pulledSkillPosition, 1);
        let skillSelected2 = filteredItem[Math.floor(Math.random() * filteredItem.length)];
        document.getElementById("languages").innerHTML += `, ${skillSelected2}`;
        tempSkills = ["history","arcana","nature","religion"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem2 = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected3 = filteredItem2[Math.floor(Math.random() * filteredItem2.length)];
        document.getElementById("skills").innerHTML += `, ${skillSelected3}`;
        let pulledSkillPosition2 = filteredItem2.indexOf(skillSelected3);
        filteredItem2.splice(pulledSkillPosition2, 1);
        let skillSelected4 = filteredItem2[Math.floor(Math.random() * filteredItem2.length)];
        document.getElementById("skills").innerHTML += `, ${skillSelected4}`;
        document.getElementById("classTraits").innerHTML += `<br>
        <br>
        <i>Blessings of knowledge.</i> Your proficiency bonus is doubled for any ability check you make that uses either ${skillSelected3} or ${skillSelected4}.`;
    } else if (pulledSubclassTextTrimmed2 == "life") {
        let pulledItem = document.getElementById("armor").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["heavy armor"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> ${joinArray}`;
        document.getElementById("classTraits").innerHTML += `<br>
        <br>
        <i>Disciple of life.</i> Starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell’s level.`;
    } else if (pulledSubclassTextTrimmed2 == "light") {
        let pulledItem = document.getElementById("cantrips").textContent;
        let trimmedItem = pulledItem.substr(10);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["light"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("cantrips").innerHTML = `<b>Cantrips:</b> ${joinArray}`;
        document.getElementById("classTraits").innerHTML += `<br>
        <br>
        <i>Warding flare.</i> At 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can’t be blinded is immune to this feature. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`;
    } else if (pulledSubclassTextTrimmed2 == "nature") {
        let cantripArray = document.getElementById("cantrips").textContent;
        let newCantripArray = cantripArray.substr(10);
        let splitArray = newCantripArray.split(",");
        let newSplitArray = splitArray.map(cantripFunction);
        function cantripFunction(cantrip) {
            return cantrip.trim();
        }
        let preFilteredCantrip = newSplitArray.filter(Boolean);
        let filteredCantrip = druidCantrip.filter(item => !preFilteredCantrip.includes(item));
        let natureCantrip = filteredCantrip[Math.floor(Math.random() * filteredCantrip.length)];
        document.getElementById("cantrips").innerHTML += `, ${natureCantrip}`;
        tempSkills = ["animal handling","nature","survival"];
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let filteredItem2 = tempSkills.filter(item => !preFilteredItem.includes(item));
        let skillSelected3 = filteredItem2[Math.floor(Math.random() * filteredItem2.length)];
        document.getElementById("skills").innerHTML += `, ${skillSelected3}`;
        let pulledItem4 = document.getElementById("armor").textContent;
        let trimmedItem4 = pulledItem4.substr(21);
        let splitItem4 = trimmedItem4.split(",");
        let splitItemArray4 = splitItem4.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem4 = splitItemArray4.filter(Boolean);
        let tempArray4 = ["heavy armor"];
        let updatedArray4 = preFilteredItem4.concat(tempArray4);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray4 = removeDuplicates(updatedArray4);
        let joinArray4 = finalizedArray4.join(", ");
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> ${joinArray4}`;
    } else if (pulledSubclassTextTrimmed2 == "tempest") {
        let pulledItem4 = document.getElementById("armor").textContent;
        let trimmedItem4 = pulledItem4.substr(21);
        let splitItem4 = trimmedItem4.split(",");
        let splitItemArray4 = splitItem4.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem4 = splitItemArray4.filter(Boolean);
        let tempArray4 = ["heavy armor"];
        let updatedArray4 = preFilteredItem4.concat(tempArray4);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray4 = removeDuplicates(updatedArray4);
        let joinArray4 = finalizedArray4.join(", ");
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> ${joinArray4}`;
        let pulledItem = document.getElementById("weapons").textContent;
        let trimmedItem = pulledItem.substr(22);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["martial weapons"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> ${joinArray}`;
        document.getElementById("classTraits").innerHTML += `<br>
        <br>
        <i>Wrath of the storm.</i> At 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`;
    } else if (pulledSubclassTextTrimmed2 == "trickery") {
        document.getElementById("classTraits").innerHTML += `<br>
        <br>
        <i>Blessing of the trickster.</i> Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.`;
    } else if (pulledSubclassTextTrimmed2 == "war") {
        let pulledItem4 = document.getElementById("armor").textContent;
        let trimmedItem4 = pulledItem4.substr(21);
        let splitItem4 = trimmedItem4.split(",");
        let splitItemArray4 = splitItem4.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem4 = splitItemArray4.filter(Boolean);
        let tempArray4 = ["heavy armor"];
        let updatedArray4 = preFilteredItem4.concat(tempArray4);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray4 = removeDuplicates(updatedArray4);
        let joinArray4 = finalizedArray4.join(", ");
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> ${joinArray4}`;

        let pulledItem = document.getElementById("weapons").textContent;
        let trimmedItem = pulledItem.substr(22);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["martial weapons"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> ${joinArray}`;
        document.getElementById("classTraits").innerHTML += `<br>
        <br>
        <i>War priest.</i> From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`;
    };


//LV. RANGER FAVORED ENEMY LANGUAGES
    if(playerClassSelected == "ranger") {
        let rangerFavoredLanguage = document.getElementById("subclass").textContent;
        let rangerFavoredLanguageTrimmed = rangerFavoredLanguage.substr(15);
        let rangerFavoredLanguageSplit = rangerFavoredLanguageTrimmed.split(",");
        let rangerFavoredLanguageSplitArray = rangerFavoredLanguageSplit.map(itemFunction);
        function itemFunction(item) {
        return item.trim();
        }
        let rangerFavoredLanguageFiltered = rangerFavoredLanguageSplitArray.filter(Boolean);
        if(rangerFavoredLanguageFiltered.includes("celestials")) {
            let tempLanguage = ["celestial"];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(tempLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        } else if(rangerFavoredLanguageFiltered.includes("dragons")) {
            let tempLanguage = ["draconic"];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(tempLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        } else if(rangerFavoredLanguageFiltered.includes("elementals")) {
            let tempLanguage = ["primordial"];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(tempLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        } else if(rangerFavoredLanguageFiltered.includes("fey")) {
            let tempLanguage = ["sylvan"];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(tempLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        } else if(rangerFavoredLanguageFiltered.includes("giants")) {
            let tempLanguage = ["giant"];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(tempLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("humans")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("orcs")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("aarakocra")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("aasimar")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("bugbears")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("deep gnomes")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("duergar")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("eladrin")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("firbolgs")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("genasi")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("githyanki")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("githzerai")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("goblins")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("goliaths")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("harengon")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("hobgoblins")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("kenku")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("kobolds")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("lizardfolk")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("minotaurs")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("sea elves")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("shadar-kai")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("shifters")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("tabaxi")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("tortles")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("tritons")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("yuan-tis")) {
            let tempLanguage = ["dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep speech","infernal","primordial","sylvan","undercommon"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            let tempArray = ["common"];
            let updatedArray2 = updatedArray.concat(tempArray);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray2);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("elves")) {
            let tempLanguage = ["common","elvish"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];

            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("dwarves")) {
            let tempLanguage = ["common","dwarvish"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("halflings")) {
            let tempLanguage = ["common","halfling"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("dragonborn")) {
            let tempLanguage = ["common","draconic"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("gnomes")) {
            let tempLanguage = ["common","gnomish"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
        if(rangerFavoredLanguageFiltered.includes("tieflings")) {
            let tempLanguage = ["common","infernal"];
            let chosenLanguage = tempLanguage[Math.floor(Math.random() * tempLanguage.length)];
            let pulledLanguages = document.getElementById("languages").textContent;
            let pulledLanguagesTrimmed = pulledLanguages.substr(11);
            let pulledLanguagesSplit = pulledLanguagesTrimmed.split(",");
            let pulledLanguagesArray = pulledLanguagesSplit.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let pulledLanguagesFiltered = pulledLanguagesArray.filter(Boolean);
            let updatedArray = pulledLanguagesFiltered.concat(chosenLanguage);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray = removeDuplicates(updatedArray);
            let joinArray = finalizedArray.join(", ");
            document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinArray}`;
        };
    };


//LVI. EQUIPMENT FILTER (MANY MORE FILTERS BELOW BACKGROUND SECTION)
    let pulledInfo8 = document.getElementById("equipment").textContent;
    let pulledInfoTrimmed8 = pulledInfo8.substr(11);
    let pulledInfoSplit8 = pulledInfoTrimmed8.split(",");
    let pulledInfoArray8 = pulledInfoSplit8.map(dupeFunction);
    let pulledInfoFiltered8 = pulledInfoArray8.filter(Boolean);
    finalInfoArray8 = removeInfoDuplicates(pulledInfoFiltered8);
    let joinInfoArray8 = finalInfoArray8.join(", ");
    if(joinInfoArray8.length === 0) {
        document.getElementById("equipment").innerHTML = `<b>Equipment:</b> none`;
    } else {
        document.getElementById("equipment").innerHTML = `<b>Equipment:</b> ${joinInfoArray8}`;
    }


//LVII. MAGIC ITEMS
        // rare - 5%
        // uncommon - 10%
        // common - 25%
        // nothing - 60%
    function magicItemFunction() {
        let magicItemCheck = document.getElementById("magicItemAdd");
        if(magicItemCheck.checked == true) {
            let itemNumber = Math.floor(Math.random() * 100) + 1;
            if(itemNumber > 60 && itemNumber < 86) {
                let commonItem = magicItemCommon[Math.floor(Math.random() * magicItemCommon.length)];
                document.getElementById("equipment").innerHTML += `, <i>${commonItem}</i>`;
            } else if(itemNumber > 85 && itemNumber < 96) {
                let uncommonItem = magicItemUncommon[Math.floor(Math.random() * magicItemUncommon.length)];
                document.getElementById("equipment").innerHTML += `, <i>${uncommonItem}</i>`;
            } else if(itemNumber > 95) {
                let rareItem = magicItemRare[Math.floor(Math.random() * magicItemRare.length)];
                document.getElementById("equipment").innerHTML += `, <i>${rareItem}</i>`;
            };
        }
    }
    magicItemFunction();


//LVIII. TRINKETS
    function trinketFunction() {
        let trinketCheck = document.getElementById("trinkets");
        let trinketSelected = trinkets[Math.floor(Math.random() * trinkets.length)];
        if(trinketCheck.checked == true) {
            document.getElementById("equipment").innerHTML += `, ${trinketSelected}`;
        }
    }
    trinketFunction();


//LIX. PLAYER BACKGROUND ITEMS
    if(playerBackgroundSelected == "acolyte") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["insight","religion"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //EQUIPMENT ADDITIONS
        let pulledItem4 = document.getElementById("equipment").textContent;
        let trimmedItem4 = pulledItem4.substr(11);
        let splitItem4 = trimmedItem4.split(",");
        let splitItemArray4 = splitItem4.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem4 = splitItemArray4.filter(Boolean);
        if(preFilteredItem4.includes("holy symbol")) {
            document.getElementById("equipment").innerHTML += `, a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp`;
        } else {
            document.getElementById("equipment").innerHTML += `, a holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp`;
        };
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        let languageAdditionsArray2 = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray2 = languageAdditionsArray2.substr(11);
        let splitLanguageAdditionsArray2 = newLanguageAdditionsArray2.split(",");
        let newSplitLanguageAdditionsArray2 = splitLanguageAdditionsArray2.map(languageFunction2);
        function languageFunction2(language2) {
            return language2.trim();
        }
        let preFilteredLanguageAdditions2 = newSplitLanguageAdditionsArray2.filter(Boolean);
        let filteredLanguages2 = allLanguages.filter(item => !preFilteredLanguageAdditions2.includes(item));
        let backgroundLanguage2 = filteredLanguages2[Math.floor(Math.random() * filteredLanguages2.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage2}`;
        //BACKGROUND SPECIFIC ADDITIONS
        if(playerAlignmentSelected == "lawful good") {
            let acolyteDeity = lawfulGoodAll[Math.floor(Math.random() * lawfulGoodAll.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Deity:</b> ${acolyteDeity}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let acolyteDeity = lawfulNeutralAll[Math.floor(Math.random() * lawfulNeutralAll.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Deity:</b> ${acolyteDeity}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let acolyteDeity = lawfulEvilAll[Math.floor(Math.random() * lawfulEvilAll.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Deity:</b> ${acolyteDeity}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let acolyteDeity = trueNeutralAll[Math.floor(Math.random() * trueNeutralAll.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Deity:</b> ${acolyteDeity}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let acolyteDeity = neutralGoodAll[Math.floor(Math.random() * neutralGoodAll.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Deity:</b> ${acolyteDeity}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let acolyteDeity = neutralEvilAll[Math.floor(Math.random() * neutralEvilAll.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Deity:</b> ${acolyteDeity}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let acolyteDeity = chaoticGoodAll[Math.floor(Math.random() * chaoticGoodAll.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Deity:</b> ${acolyteDeity}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let acolyteDeity = chaoticNeutralAll[Math.floor(Math.random() * chaoticNeutralAll.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Deity:</b> ${acolyteDeity}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let acolyteDeity = chaoticEvilAll[Math.floor(Math.random() * chaoticEvilAll.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Deity:</b> ${acolyteDeity}`;
        }
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Shelter of the faithful.</i> As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. 
        <br>
        <br>
        You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["I would die to recover an ancient relic of my faith that was lost long ago.","I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.","I owe my life to the priest who took me in when my parents died.","Everything I do is for the common people.","I will do anything to protect the temple where I served.","I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I judge others harshly, and myself even more severely.","I put too much trust in those who wield power within my temple's hierarchy.","My piety sometimes leads me to blindly trust those that profess faith in my god.","I am inflexible in my thinking.","I am suspicious of strangers and expect the worst of them.","Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.","I can find common ground between the fiercest enemies, empathizing with them and always working towards peace.","I see omens in every event and action. The gods try to speak to us, we just need to listen.","Nothing can shake my optimistic attitude.","I quote (or misquote) sacred texts and proverbs in almost every situation.","I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.","I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.","I've spent so long in the temple that I have little practical experience dealing with people in the outside world."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","Smuggler's Code: I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","Smuggler's Code: I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents.","Peace and Prosperity: I smuggle only to achieve a greater goal that benefits my community."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","Smuggler's Code: I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents.","All for a Coin: I'll do nearly anything if it means I turn a profit."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil"||playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","All for a Coin: I'll do nearly anything if it means I turn a profit."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good"||playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","Peace and Prosperity: I smuggle only to achieve a greater goal that benefits my community."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral"||playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "charlatan") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["deception","sleight of hand"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        let tempArray2 = ["disguise kit","forgery kit"];
        let updatedArray2 = preFilteredItem2.concat(tempArray2);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(updatedArray2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        let tempTools = ["ten stoppered bottles filled with colored liquid","a set of weighted dice","a deck of marked cards","a signet ring of an imaginary duke"];
        let chosenTools = tempTools[Math.floor(Math.random() * tempTools.length)];
        document.getElementById("equipment").innerHTML += `, a set of fine clothes, a disguise kit, ${chosenTools}, and a pouch containing 15 gp`;
        //BACKGROUND SPECIFIC ADDITIONS
        let charlatanScam = ["I cheat at games of chance","I shave coins or forge documents","I insinuate myself into people's lives to prey on their weakness and secure their fortunes","I put on new identities like clothes","I run sleight-of-hand cons on street corners","I convince people that worthless junk is worth their hard-earned money"];
        let chosenScam = charlatanScam[Math.floor(Math.random() * charlatanScam.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Favorite scheme:</b> ${chosenScam}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>False identity.</i> You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.","I owe everything to my mentor — a horrible person who's probably rotting in jail somewhere.","Somewhere out there, I have a child who doesn't know me. I'm making the world better for them.","I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.","A powerful person killed someone I love. Some day soon, I'll have my revenge.","I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I can't resist a pretty face.","I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.","I'm convinced that no one could ever fool me the way I fool others.","I'm too greedy for my own good. I can't resist taking a risk if there's money involved.","I can't resist swindling people who are more powerful than me.","I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I fall in and out of love easily, and am always pursuing someone.","I have a joke for every occasion, especially occasions where humor is inappropriate.","Flattery is my preferred trick for getting what I want.","I'm a born gambler who can't resist taking a risk for a potential payoff.","I lie about almost everything, even when there's no good reason to.","Sarcasm and insults are my weapons of choice.","I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.","I pocket anything I see that might have some value."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Aspiration. I'm determined to make something of myself.","Fairness. I never target people who can't afford to lose a few coins.","Charity. I distribute the money I acquire to the people who really need it","Friendship. Material goods come and go. Bonds of friendship last forever."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral"||playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Aspiration. I'm determined to make something of myself.","Fairness. I never target people who can't afford to lose a few coins."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Aspiration. I'm determined to make something of myself.","Independence. I am a free spirit — no one tells me what to do.","Creativity. I never run the same con twice.","Charity. I distribute the money I acquire to the people who really need it","Friendship. Material goods come and go. Bonds of friendship last forever."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral"||playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Aspiration. I'm determined to make something of myself.","Independence. I am a free spirit — no one tells me what to do.","Creativity. I never run the same con twice."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Aspiration. I'm determined to make something of myself.","Charity. I distribute the money I acquire to the people who really need it","Friendship. Material goods come and go. Bonds of friendship last forever."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral"||playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Aspiration. I'm determined to make something of myself."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "criminal") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["deception","stealth"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        let tempArray2 = ["thieves' tools"];
        let updatedArray2 = preFilteredItem2.concat(tempArray2);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(updatedArray2);
        let joinArray2 = finalizedArray2.join(", ");
        let selectedSet = gamingSet[Math.floor(Math.random() * gamingSet.length)];
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}, ${selectedSet}`;
        //EQUIPMENT ADDITIONS
        document.getElementById("equipment").innerHTML += `, a crowbar, a set of dark common clothes including a hood, and a pouch containing 15 gp`;
        //BACKGROUND SPECIFIC ADDITIONS
        let criminalSpecialty = ["blackmailer","burglar","enforcer","fence","highway robber","hired killer","pickpocket"];
        let chosenSpecialty = criminalSpecialty[Math.floor(Math.random() * criminalSpecialty.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Specialty:</b> ${chosenSpecialty}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Criminal contact.</i> You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["I'm trying to pay off an old debt I owe to a generous benefactor.","My ill-gotten gains go to support my family.","Something important was taken from me, and I aim to steal it back.","I will become the greatest thief that ever lived.","I'm guilty of a terrible crime. I hope I can redeem myself for it.","Someone I loved died because of a mistake I made. That will never happen again."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["When I see something valuable, I can't think about anything but how to steal it.","When faced with a choice between money and my friends, I usually choose the money.","If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.","I have a 'tell' that reveals when I'm lying.","I turn tail and run when things look bad.","An innocent person is in prison for a crime that I committed. I'm okay with that."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I always have a plan for what to do when things go wrong.","I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.","The first thing I do in a new place is note the locations of everything valuable — or where such things could be hidden.","I would rather make a new friend than a new enemy.","I am incredibly slow to trust. Those who seem the fairest often have the most to hide.","I don't pay attention to the risks in a situation. Never tell me the odds.","The best way to get me to do something is to tell me I can't do it.","I blow up at the slightest insult."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Honor. I don't steal from others in the trade.","Charity. I steal from the wealthy so that I can help people in need.","Redemption. There's a spark of good in everyone."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Honor. I don't steal from others in the trade.","People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Honor. I don't steal from others in the trade.","Greed. I will do whatever it takes to become wealthy."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Freedom. Chains are meant to be broken, as are those who would forge them.","Charity. I steal from the wealthy so that I can help people in need.","Redemption. There's a spark of good in everyone."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Freedom. Chains are meant to be broken, as are those who would forge them.","People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Freedom. Chains are meant to be broken, as are those who would forge them.","Greed. I will do whatever it takes to become wealthy."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Charity. I steal from the wealthy so that I can help people in need.","People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care.","Redemption. There's a spark of good in everyone."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Greed. I will do whatever it takes to become wealthy.","People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "entertainer") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["acrobatics","performance"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let selectedInstrument = musicalInstrument[Math.floor(Math.random() * musicalInstrument.length)];
        document.getElementById("tools").innerHTML += `, ${selectedInstrument}`
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        let tempArray2 = ["disguise kit"];
        let updatedArray2 = preFilteredItem2.concat(tempArray2);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(updatedArray2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        let pulledItem4 = document.getElementById("equipment").textContent;
        let trimmedItem4 = pulledItem4.substr(11);
        let splitItem4 = trimmedItem4.split(",");
        let splitItemArray4 = splitItem4.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem4 = splitItemArray4.filter(Boolean);
        let filteredItem4 = musicalInstrument.filter(item => !preFilteredItem4.includes(item));
        let chosenInstrument = filteredItem4[Math.floor(Math.random() * filteredItem4.length)];
        let tempFavor = ["love letter from an admirer","lock of hair from an admirer","trinket from an admirer"];
        let chosenFavor = tempFavor[Math.floor(Math.random() * tempFavor.length)];
        document.getElementById("equipment").innerHTML += `, ${chosenInstrument}, ${chosenFavor}, costume clothes, and a pouch containing 15 gp`;
        //BACKGROUND SPECIFIC ADDITIONS
        const entertainerNumber = [1,2,3];
        let chosenEntertainerNumber = entertainerNumber[Math.floor(Math.random() * entertainerNumber.length)];
        const entertainerRoutines = ["actor","dancer","fire-eater","jester","juggler","instrumentalist","poet","singer","storyteller","tumbler"];
        if(chosenEntertainerNumber == 1) {
            let chosenRoutine = entertainerRoutines[Math.floor(Math.random() * entertainerRoutines.length)];
            document.getElementById("backgroundSub").innerHTML += `<b>Routine:</b> ${chosenRoutine}`;
        } else if(chosenEntertainerNumber == 2) {
            let chosenRoutine = entertainerRoutines[Math.floor(Math.random() * entertainerRoutines.length)];
            let pulledRoutinePosition = entertainerRoutines.indexOf(chosenRoutine);
            entertainerRoutines.splice(pulledRoutinePosition, 1);
            let chosenRoutine2 = entertainerRoutines[Math.floor(Math.random() * entertainerRoutines.length)];
            entertainerRoutines.push(chosenRoutine);
            document.getElementById("backgroundSub").innerHTML += `<b>Routines:</b> ${chosenRoutine}, ${chosenRoutine2}`;
        } else if(chosenEntertainerNumber == 3) {
            let chosenRoutine = entertainerRoutines[Math.floor(Math.random() * entertainerRoutines.length)];
            let pulledRoutinePosition = entertainerRoutines.indexOf(chosenRoutine);
            entertainerRoutines.splice(pulledRoutinePosition, 1);
            let chosenRoutine2 = entertainerRoutines[Math.floor(Math.random() * entertainerRoutines.length)];
            let pulledRoutinePosition2 = entertainerRoutines.indexOf(chosenRoutine2);
            entertainerRoutines.splice(pulledRoutinePosition2, 1);
            let chosenRoutine3 = entertainerRoutines[Math.floor(Math.random() * entertainerRoutines.length)];
            entertainerRoutines.push(chosenRoutine);
            entertainerRoutines.push(chosenRoutine2);
            document.getElementById("backgroundSub").innerHTML += `<b>Routines:</b> ${chosenRoutine}, ${chosenRoutine2}, ${chosenRoutine3}`;
        }
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>By popular demand.</i> You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["My instrument is my most treasured possession, and it reminds me of someone I love.","Someone stole my precious instrument, and someday I'll get it back.","I want to be famous, whatever it takes.","I idolize a hero of the old tales and measure my deeds against that person's.","I will do anything to prove myself superior to my hated rival.","I would do anything for the other members of my old troupe."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I'll do anything to win fame and renown.","I'm a sucker for a pretty face.","A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.","I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.","I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.","Despite my best efforts, I am unreliable to my friends."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I know a story relevant to almost every situation.","Whenever I come to a new place, I collect local rumors and spread gossip.","I'm a hopeless romantic, always searching for that 'special someone.'","Nobody stays angry at me or around me for long, since I can defuse any amount of tension.","I love a good insult, even one directed at me.","I get bitter if I'm not the center of attention.","I'll settle for nothing less than perfection.","I change my mood or my mind as quickly as I change key in a song."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Beauty. When I perform, I make the world better than it was.","Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are","Honesty. Art should reflect the soul; it should come from within and reveal who we really are."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are","People. I like seeing the smiles on people's faces when I perform. That's all that matters.","Honesty. Art should reflect the soul; it should come from within and reveal who we really are."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are","Greed. I'm only in it for the money and fame.","Honesty. Art should reflect the soul; it should come from within and reveal who we really are."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Beauty. When I perform, I make the world better than it was.","Creativity. The world is in need of new ideas and bold action","Honesty. Art should reflect the soul; it should come from within and reveal who we really are."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Creativity. The world is in need of new ideas and bold action","People. I like seeing the smiles on people's faces when I perform. That's all that matters.","Honesty. Art should reflect the soul; it should come from within and reveal who we really are."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Creativity. The world is in need of new ideas and bold action","Greed. I'm only in it for the money and fame.","Honesty. Art should reflect the soul; it should come from within and reveal who we really are."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Beauty. When I perform, I make the world better than it was.","People. I like seeing the smiles on people's faces when I perform. That's all that matters.","Honesty. Art should reflect the soul; it should come from within and reveal who we really are."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["People. I like seeing the smiles on people's faces when I perform. That's all that matters.","Honesty. Art should reflect the soul; it should come from within and reveal who we really are."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Greed. I'm only in it for the money and fame.","People. I like seeing the smiles on people's faces when I perform. That's all that matters.","Honesty. Art should reflect the soul; it should come from within and reveal who we really are."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "folk hero") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["animal handling","survival"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let selectedTool = artisanTools[Math.floor(Math.random() * artisanTools.length)];
        document.getElementById("tools").innerHTML += `, ${selectedTool}`;
        let selectedVehicle = landVehicle[Math.floor(Math.random() * landVehicle.length)];
        document.getElementById("tools").innerHTML += `, ${selectedVehicle}`;
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(preFilteredItem2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        let pulledItem4 = document.getElementById("equipment").textContent;
        let trimmedItem4 = pulledItem4.substr(11);
        let splitItem4 = trimmedItem4.split(",");
        let splitItemArray4 = splitItem4.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem4 = splitItemArray4.filter(Boolean);
        let filteredItem4 = artisanTools.filter(item => !preFilteredItem4.includes(item));
        let chosenTool = filteredItem4[Math.floor(Math.random() * filteredItem4.length)];
        document.getElementById("equipment").innerHTML += `, ${chosenTool}, a shovel, an iron pot, a set of common clothes, and a pouch containing 10 gp`;
        //BACKGROUND SPECIFIC ADDITIONS
        let definingEvent = ["I stood up to a tyrant's agents","I saved people during a natural disaster","I stood alone against a terrible monster","I stole from a corrupt merchant to help the poor","I led a militia to fight off an invading army","I broke into a tyrant's castle and stole weapons to arm the people","I trained the peasantry to use farming implements as weapons against a tyrant's soldiers","A lord rescinded an unpopular decree after I led a symbolic act of protest against it","A celestial, fey, or similar creature gave me a blessing or revealed my secret origin","Recruited into a lord's army, I rose to leadership and was commended for my heroism"];
        let chosenEvent = definingEvent[Math.floor(Math.random() * definingEvent.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Defining event:</b> ${chosenEvent}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Rustic hospitality.</i> Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["I have a family, but I have no idea where they are. One day, I hope to see them again.","I worked the land, I love the land, and I will protect the land.","A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.","My tools are symbols of my past life, and I carry them so that I will never forget my roots.","I protect those who cannot protect themselves.","I wish my childhood sweetheart had come with me to pursue my destiny."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["The tyrant who rules my land will stop at nothing to see me killed.","I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.","The people who knew me when I was young know my shameful secret, so I can never go home again.","I have a weakness for the vices of the city, especially hard drink.","Secretly, I believe that things would be better if I were a tyrant lording over the land.","I have trouble trusting in my allies."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I judge people by their actions, not their words.","If someone is in trouble, I'm always ready to lend help.","When I set my mind to something, I follow through no matter what gets in my way.","I have a strong sense of fair play and always try to find the most equitable solution to arguments.","I'm confident in my own abilities and do what I can to instill confidence in others.","Thinking is for other people. I prefer action.","I misuse long words in an attempt to sound smarter.","I get bored easily. When am I going to get on with my destiny?"];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Respect. People deserve to be treated with dignity and respect.","Fairness. No one should get preferential treatment before the law, and no one is above the law.","Destiny. Nothing and no one can steer me away from my higher calling."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Fairness. No one should get preferential treatment before the law, and no one is above the law.","Sincerity. There's no good in pretending to be something I'm not.","Destiny. Nothing and no one can steer me away from my higher calling."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Fairness. No one should get preferential treatment before the law, and no one is above the law.","Might. If I become strong, I can take what I want — what I deserve.","Destiny. Nothing and no one can steer me away from my higher calling."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Respect. People deserve to be treated with dignity and respect.","Freedom. Tyrants must not be allowed to oppress the people.","Destiny. Nothing and no one can steer me away from my higher calling."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Freedom. Tyrants must not be allowed to oppress the people.","Sincerity. There's no good in pretending to be something I'm not.","Destiny. Nothing and no one can steer me away from my higher calling."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Freedom. Tyrants must not be allowed to oppress the people.","Might. If I become strong, I can take what I want — what I deserve.","Destiny. Nothing and no one can steer me away from my higher calling."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Respect. People deserve to be treated with dignity and respect.","Sincerity. There's no good in pretending to be something I'm not.","Destiny. Nothing and no one can steer me away from my higher calling."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Sincerity. There's no good in pretending to be something I'm not.","Destiny. Nothing and no one can steer me away from my higher calling."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Might. If I become strong, I can take what I want — what I deserve.","Sincerity. There's no good in pretending to be something I'm not.","Destiny. Nothing and no one can steer me away from my higher calling."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "guild artisan") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["insight","persuasion"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let selectedTool = artisanTools[Math.floor(Math.random() * artisanTools.length)];
        document.getElementById("tools").innerHTML += `, ${selectedTool}`;
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(preFilteredItem2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        let pulledItem4 = document.getElementById("equipment").textContent;
        let trimmedItem4 = pulledItem4.substr(11);
        let splitItem4 = trimmedItem4.split(",");
        let splitItemArray4 = splitItem4.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem4 = splitItemArray4.filter(Boolean);
        let filteredItem4 = artisanTools.filter(item => !preFilteredItem4.includes(item));
        let chosenTool = filteredItem4[Math.floor(Math.random() * filteredItem4.length)];
        document.getElementById("equipment").innerHTML += `, ${chosenTool}, a letter of introduction from your guild, a set of traveler's clothes, and a pouch containing 15 gp`;
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        //BACKGROUND SPECIFIC ADDITIONS
        if(selectedTool == "alchemist's supplies") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> alchemists and apothecaries`;
        } else if(selectedTool == "brewer's supplies") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> brewers, distillers, and vinters`;
        } else if(selectedTool == "calligrapher's supplies") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> calligraphers, scribes, and scriveners`;
        } else if(selectedTool == "carpenter's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> carpenters, roofers, and plasterers`;
        } else if(selectedTool == "cartographer's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> cartographers, surveyors, and chart-makers`;
        } else if(selectedTool == "cobbler's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> cobblers and shoemakers`;
        } else if(selectedTool == "cook's utensils") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> cooks and bakers`;
        } else if(selectedTool == "glassblower's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> glassblowers and glaziers`;
        } else if(selectedTool == "jeweler's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> jewelers and gemcutters`;
        } else if(selectedTool == "leatherworker's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> leatherworkers, skinners, and tanners`;
        } else if(selectedTool == "mason's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> masons and stonecutters`;
        } else if(selectedTool == "painter's supplies") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> painters, limners, and sign-makers`;
        } else if(selectedTool == "potter's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> potters and tile-makers`;
        } else if(selectedTool == "smith's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> smiths and metal-forgers`;
        } else if(selectedTool == "tinker's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> tinkers, pewterers, and casters`;
        } else if(selectedTool == "weaver's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> weavers and dyers`;
        } else if(selectedTool == "woodcarver's tools") {
            document.getElementById("backgroundSub").innerHTML += `<b>Guild business:</b> woodcarvers, coopers, and bowyers`;
        }
            //businesses not represented: armorers, locksmiths, and finesmiths
            //shipwrights and sail-makers
            //wagon-makers and wheelwrights
            //no definite corresponding artisan's tool 
        document.getElementById("backgroundSub").innerHTML += `<br>
            <br>
            <i>Guild membership.</i> As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.
            <br>
            <br>
            Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.
            <br>
            <br>
            You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["The workshop where I learned my trade is the most important place in the world to me.","I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.","I owe my guild a great debt for forging me into the person I am today.","I pursue wealth to secure someone's love.","One day I will return to my guild and prove that I am the greatest artisan of them all.","I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I'll do anything to get my hands on something rare or priceless.","I'm quick to assume that someone is trying to cheat me.","No one must ever learn that I once stole money from guild coffers.","I'm never satisfied with what I have — I always want more.","I would kill to acquire a noble title.","I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I believe that anything worth doing is worth doing right. I can't help it — I'm a perfectionist.","I'm a snob who looks down on those who can't appreciate fine art.","I always want to know how things work and what makes people tick.","I'm full of witty aphorisms and have a proverb for every occasion.","I'm rude to people who lack my commitment to hard work and fair play.","I like to talk at length about my profession.","I don't part with my money easily and will haggle tirelessly to get the best deal possible.","I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Aspiration. I work hard to be the best there is at my craft.","Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization.","Generosity. My talents were given to me so that I could use them to benefit the world."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Aspiration. I work hard to be the best there is at my craft.","Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization.","People. I'm committed to the people I care about, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Aspiration. I work hard to be the best there is at my craft.","Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization.","Greed. I'm only in it for the money."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Aspiration. I work hard to be the best there is at my craft.","Generosity. My talents were given to me so that I could use them to benefit the world.","Freedom. Everyone should be free to pursue their own livelihood."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Aspiration. I work hard to be the best there is at my craft.","Freedom. Everyone should be free to pursue their own livelihood.","People. I'm committed to the people I care about, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Aspiration. I work hard to be the best there is at my craft.","Freedom. Everyone should be free to pursue their own livelihood.","Greed. I'm only in it for the money."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Aspiration. I work hard to be the best there is at my craft.","Generosity. My talents were given to me so that I could use them to benefit the world.","People. I'm committed to the people I care about, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Aspiration. I work hard to be the best there is at my craft.","People. I'm committed to the people I care about, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Aspiration. I work hard to be the best there is at my craft.","Greed. I'm only in it for the money.","People. I'm committed to the people I care about, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "hermit") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["medicine","religion"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        let tempArray2 = ["herbalism kit"];
        let updatedArray2 = preFilteredItem2.concat(tempArray2);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(updatedArray2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        document.getElementById("equipment").innerHTML += `, a scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, an herbalism kit, and 5 gp`;
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        //BACKGROUND SPECIFIC ADDITIONS
        let secludedLife = ["I was searching for spiritual enlightenment","I was partaking of communal living in accordance with the dictates of a religious order","I was exiled for a crime I didn't commit","I retreated from society after a life-altering event","I needed a quiet place to work on my art, literature, music, or manifesto","I needed to commune with nature, far from civilization","I was the caretaker of an ancient ruin or relic","I was a pilgrim in search of a person, place, or relic of spiritual significance"];
        let chosenLife = secludedLife[Math.floor(Math.random() * secludedLife.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Life of seclusion:</b> ${chosenLife}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Discovery.</i> The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society.
        <br>
        <br>
        Work with your DM to determine the details of your discovery and its impact on the campaign.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["Nothing is more important than the other members of my hermitage, order, or association.","I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.","I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.","I entered seclusion because I loved someone I could not have.","Should my discovery come to light, it could bring ruin to the world.","My isolation gave me great insight into a great evil that only I can destroy."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["Now that I've returned to the world, I enjoy its delights a little too much.","I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.","I am dogmatic in my thoughts and philosophy.","I let my need to win arguments overshadow friendships and harmony.","I'd risk too much to uncover a lost bit of knowledge.","I like keeping secrets and won't share them with anyone."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.","I am utterly serene, even in the face of disaster.","The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.","I feel tremendous empathy for all who suffer.","I'm oblivious to etiquette and social expectations.","I connect everything that happens to me to a grand, cosmic plan.","I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.","I am working on a grand philosophical theory and love sharing my ideas."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;        
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Self-Knowledge. If you know yourself, there's nothing left to know.","Greater Good. My gifts are meant to be shared with all, not used for my own benefit.","Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Self-Knowledge. If you know yourself, there's nothing left to know.","Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking.","Live and Let Live. Meddling in the affairs of others only causes trouble."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Self-Knowledge. If you know yourself, there's nothing left to know.","Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking.","Power. Solitude and contemplation are paths toward mystical or magical power."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Self-Knowledge. If you know yourself, there's nothing left to know.","Greater Good. My gifts are meant to be shared with all, not used for my own benefit.","Free Thinking. Inquiry and curiosity are the pillars of progress."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Self-Knowledge. If you know yourself, there's nothing left to know.","Free Thinking. Inquiry and curiosity are the pillars of progress.","Live and Let Live. Meddling in the affairs of others only causes trouble."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Self-Knowledge. If you know yourself, there's nothing left to know.","Free Thinking. Inquiry and curiosity are the pillars of progress.","Power. Solitude and contemplation are paths toward mystical or magical power."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Self-Knowledge. If you know yourself, there's nothing left to know.","Greater Good. My gifts are meant to be shared with all, not used for my own benefit.","Live and Let Live. Meddling in the affairs of others only causes trouble."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Self-Knowledge. If you know yourself, there's nothing left to know.","Live and Let Live. Meddling in the affairs of others only causes trouble."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Self-Knowledge. If you know yourself, there's nothing left to know.","Power. Solitude and contemplation are paths toward mystical or magical power.","Live and Let Live. Meddling in the affairs of others only causes trouble."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "noble") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["history","persuasion"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let selectedTool = gamingSet[Math.floor(Math.random() * gamingSet.length)];
        document.getElementById("tools").innerHTML += `, ${selectedTool}`;
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(preFilteredItem2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        document.getElementById("equipment").innerHTML += `, a set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp`;
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        //BACKGROUND SPECIFIC ADDITIONS
        whichFeature = (Math.floor(Math.random()*2)==0);
        if(whichFeature) {
            document.getElementById("backgroundSub").innerHTML += `<i>Position of privilege.</i> Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.`;
        } else {
            document.getElementById("backgroundSub").innerHTML += `<i>Retainers.</i> You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.`;
        }
        //BACKGROUND BONDS
        let backgroundBonds = ["I will face any challenge to win the approval of my family.","My house's alliance with another noble family must be sustained at all costs.","Nothing is more important than the other members of my family.","I am in love with the heir of a family that my family despises.","My loyalty to my sovereign is unwavering.","The common folk must see me as a hero of the people."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I secretly believe that everyone is beneath me.","I hide a truly scandalous secret that could ruin my family forever.","I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.","I have an insatiable desire for carnal pleasures.","In fact, the world does revolve around me.","By my words and actions, I often bring shame to my family."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.","The common folk love me for my kindness and generosity.","No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.","I take great pains to always look my best and follow the latest fashions.","I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.","Despite my noble birth, I do not place myself above other folk. We all have the same blood.","My favor, once lost, is lost forever.","If you do me an injury, I will crush you, ruin your name, and salt your fields."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Family. Blood runs thicker than water.","Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity.","Noble Obligation. It is my duty to protect and care for the people beneath me.","Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Family. Blood runs thicker than water.","Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Family. Blood runs thicker than water.","Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine.","Power. If I can attain more power, no one will tell me what to do."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Family. Blood runs thicker than water.","Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity.","Noble Obligation. It is my duty to protect and care for the people beneath me.","Independence. I must prove that I can handle myself without the coddling of my family."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Family. Blood runs thicker than water.","Independence. I must prove that I can handle myself without the coddling of my family."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Family. Blood runs thicker than water.","Independence. I must prove that I can handle myself without the coddling of my family.","Power. If I can attain more power, no one will tell me what to do."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Family. Blood runs thicker than water.","Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity.","Noble Obligation. It is my duty to protect and care for the people beneath me."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Family. Blood runs thicker than water.","Power. If I can attain more power, no one will tell me what to do."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "outlander") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["athletics","survival"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let selectedTool = musicalInstrument[Math.floor(Math.random() * musicalInstrument.length)];
        document.getElementById("tools").innerHTML += `, ${selectedTool}`;
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(preFilteredItem2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        document.getElementById("equipment").innerHTML += `, a staff, a hunting trap, a trophy from an animal you killed, a set of traveler's clothes, and a pouch containing 10 gp`;
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        //BACKGROUND SPECIFIC ADDITIONS
        let outlanderOrigin = ["forester","trapper","homesteader","guide","exile or outcast","bounty hunter","pilgrim","tribal nomad","hunter-gatherer","tribal marauder"];
        let chosenOrigin = outlanderOrigin[Math.floor(Math.random() * outlanderOrigin.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Origin:</b> ${chosenOrigin}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Wanderer.</i> You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["My family, clan, or tribe is the most important thing in my life, even when they are far from me.","An injury to the unspoiled wilderness of my home is an injury to me.","I will bring terrible wrath down on the evildoers who destroyed my homeland.","I am the last of my tribe, and it is up to me to ensure their names enter legend.","I suffer awful visions of a coming disaster and will do anything to prevent it.","It is my duty to provide children to sustain my tribe."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I am too enamored of ale, wine, and other intoxicants.","There's no room for caution in a life lived to the fullest.","I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.","I am slow to trust members of other races, tribes, and societies.","Violence is my answer to almost any challenge.","Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I'm driven by a wanderlust that led me away from home.","I watch over my friends as if they were a litter of newborn pups.","I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.","I have a lesson for every situation, drawn from observing nature.","I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.","I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.","I feel far more comfortable around animals than people.","I was, in fact, raised by wolves."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Glory. I must earn glory in battle, for myself and my clan.","Greater Good. It is each person's responsibility to make the most happiness for the whole tribe.","Honor. If I dishonor myself, I dishonor my whole clan."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Glory. I must earn glory in battle, for myself and my clan.","Honor. If I dishonor myself, I dishonor my whole clan.","Nature. The natural world is more important than all the constructs of civilization."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Glory. I must earn glory in battle, for myself and my clan.","Honor. If I dishonor myself, I dishonor my whole clan.","Might. The strongest are meant to rule."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Glory. I must earn glory in battle, for myself and my clan.","Change. Life is like the seasons, in constant change, and we must change with it.","Greater Good. It is each person's responsibility to make the most happiness for the whole tribe."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Glory. I must earn glory in battle, for myself and my clan.","Change. Life is like the seasons, in constant change, and we must change with it.","Nature. The natural world is more important than all the constructs of civilization."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Glory. I must earn glory in battle, for myself and my clan.","Change. Life is like the seasons, in constant change, and we must change with it.","Might. The strongest are meant to rule."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Glory. I must earn glory in battle, for myself and my clan.","Greater Good. It is each person's responsibility to make the most happiness for the whole tribe.","Nature. The natural world is more important than all the constructs of civilization."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Glory. I must earn glory in battle, for myself and my clan.","Nature. The natural world is more important than all the constructs of civilization."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Glory. I must earn glory in battle, for myself and my clan.","Might. The strongest are meant to rule.","Nature. The natural world is more important than all the constructs of civilization."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "sage") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["arcana","history"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //EQUIPMENT ADDITIONS
        document.getElementById("equipment").innerHTML += `, a bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothes, and a pouch containing 10 gp`;
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        let languageAdditionsArray2 = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray2 = languageAdditionsArray2.substr(11);
        let splitLanguageAdditionsArray2 = newLanguageAdditionsArray2.split(",");
        let newSplitLanguageAdditionsArray2 = splitLanguageAdditionsArray2.map(languageFunction2);
        function languageFunction2(language2) {
            return language2.trim();
        }
        let preFilteredLanguageAdditions2 = newSplitLanguageAdditionsArray2.filter(Boolean);
        let filteredLanguages2 = allLanguages.filter(item => !preFilteredLanguageAdditions2.includes(item));
        let backgroundLanguage2 = filteredLanguages2[Math.floor(Math.random() * filteredLanguages2.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage2}`;
        //BACKGROUND SPECIFIC ADDITIONS
        let fieldOfStudy = ["alchemist","astronomer","discredited academic","librarian","professor","researcher","wizard's apprentice","scribe"];
        let chosenField = fieldOfStudy[Math.floor(Math.random() * fieldOfStudy.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Field of study:</b> ${chosenField}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Researcher.</i> When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature, Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["It is my duty to protect my students.","I have an ancient text that holds terrible secrets that must not fall into the wrong hands.","I work to preserve a library, university, scriptorium, or monastery.","My life's work is a series of tomes related to a specific field of lore.","I've been searching my whole life for the answer to a certain question.","I sold my soul for knowledge. I hope to do great deeds and win it back."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I am easily distracted by the promise of information.","Most people scream and run when they see a demon. I stop and take notes on its anatomy.","Unlocking an ancient mystery is worth the price of a civilization.","I overlook obvious solutions in favor of complicated ones.","I speak without really thinking through my words, invariably insulting others.","I can't keep a secret to save my life, or anyone else's."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I use polysyllabic words that convey the impression of great erudition.","I've read every book in the world's greatest libraries — or I like to boast that I have.","I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.","There's nothing I like more than a good mystery.","I'm willing to listen to every side of an argument before I make my own judgment.","I... speak... slowly... when talking... to idiots,... which... almost... everyone... is... compared... to me.","I am horribly, horribly awkward in social situations.","I'm convinced that people are always trying to steal my secrets."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Self-Improvement. The goal of a life of study is the betterment of oneself.","Beauty. What is beautiful points us beyond itself toward what is true.","Logic. Emotions must not cloud our logical thinking."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Self-Improvement. The goal of a life of study is the betterment of oneself.","Knowledge. The path to power and self-improvement is through knowledge.","Logic. Emotions must not cloud our logical thinking."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Self-Improvement. The goal of a life of study is the betterment of oneself.","Logic. Emotions must not cloud our logical thinking.","Power. Knowledge is the path to power and domination."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Self-Improvement. The goal of a life of study is the betterment of oneself.","Beauty. What is beautiful points us beyond itself toward what is true.","No Limits. Nothing should fetter the infinite possibility inherent in all existence."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Self-Improvement. The goal of a life of study is the betterment of oneself.","Knowledge. The path to power and self-improvement is through knowledge.","No Limits. Nothing should fetter the infinite possibility inherent in all existence."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Self-Improvement. The goal of a life of study is the betterment of oneself.","No Limits. Nothing should fetter the infinite possibility inherent in all existence.","Power. Knowledge is the path to power and domination."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Self-Improvement. The goal of a life of study is the betterment of oneself.","Knowledge. The path to power and self-improvement is through knowledge.","Beauty. What is beautiful points us beyond itself toward what is true."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Self-Improvement. The goal of a life of study is the betterment of oneself.","Knowledge. The path to power and self-improvement is through knowledge."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Self-Improvement. The goal of a life of study is the betterment of oneself.","Knowledge. The path to power and self-improvement is through knowledge.","Power. Knowledge is the path to power and domination."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "sailor") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["athletics","perception"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let selectedTool = waterVehicle[Math.floor(Math.random() * waterVehicle.length)];
        document.getElementById("tools").innerHTML += `, ${selectedTool}`;
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        let tempArray2 = ["navigator's tools"];
        let updatedArray2 = preFilteredItem2.concat(tempArray2);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(updatedArray2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        document.getElementById("equipment").innerHTML += `, a belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center, a set of common clothes, and a pouch containing 10 gp`;
        //BACKGROUND SPECIFIC ADDITIONS
        whichFeature = (Math.floor(Math.random()*2)==0);
        if(whichFeature) {
            document.getElementById("backgroundSub").innerHTML += `<i>Ship's passage.</i> When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.`;
        } else {
            document.getElementById("backgroundSub").innerHTML += `<i>Bad reputation.</i> No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities.`;
        }
        //BACKGROUND BONDS
        let backgroundBonds = ["I'm loyal to my captain first, everything else second.","The ship is most important — crewmates and captains come and go.","I'll always remember my first ship.","In a harbor town, I have a paramour whose eyes nearly stole me from the sea.","I was cheated out of my fair share of the profits, and I want to get my due.","Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I follow orders, even if I think they're wrong.","I'll say anything to avoid having to do extra work.","Once someone questions my courage, I never back down no matter how dangerous the situation.","Once I start drinking, it's hard for me to stop.","I can't help but pocket loose coins and other trinkets I come across.","My pride will probably lead to my destruction."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["My friends know they can rely on me, no matter what.","I work hard so that I can play hard when the work is done.","I enjoy sailing into new ports and making new friends over a flagon of ale.","I stretch the truth for the sake of a good story.","To me, a tavern brawl is a nice way to get to know a new city.","I never pass up a friendly wager.","My language is as foul as an otyugh nest.","I like a job well done, especially if I can convince someone else to do it."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Aspiration. Someday I'll own my own ship and chart my own destiny.","Respect. The thing that keeps a ship together is mutual respect between captain and crew.","Fairness. We all do the work, so we all share in the rewards."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Aspiration. Someday I'll own my own ship and chart my own destiny.","Fairness. We all do the work, so we all share in the rewards.","People. I'm committed to my crewmates, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Aspiration. Someday I'll own my own ship and chart my own destiny.","Fairness. We all do the work, so we all share in the rewards.","Mastery. I'm a predator, and the other ships on the sea are my prey."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Aspiration. Someday I'll own my own ship and chart my own destiny.","Respect. The thing that keeps a ship together is mutual respect between captain and crew.","Freedom. The sea is freedom — the freedom to go anywhere and do anything."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Aspiration. Someday I'll own my own ship and chart my own destiny.","Freedom. The sea is freedom — the freedom to go anywhere and do anything.","People. I'm committed to my crewmates, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Aspiration. Someday I'll own my own ship and chart my own destiny.","Freedom. The sea is freedom — the freedom to go anywhere and do anything.","Mastery. I'm a predator, and the other ships on the sea are my prey."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Aspiration. Someday I'll own my own ship and chart my own destiny.","Respect. The thing that keeps a ship together is mutual respect between captain and crew.","People. I'm committed to my crewmates, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Aspiration. Someday I'll own my own ship and chart my own destiny.","People. I'm committed to my crewmates, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Aspiration. Someday I'll own my own ship and chart my own destiny.","Mastery. I'm a predator, and the other ships on the sea are my prey.","People. I'm committed to my crewmates, not to ideals."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "soldier") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["athletics","intimidation"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let selectedTool = gamingSet[Math.floor(Math.random() * gamingSet.length)];
        document.getElementById("tools").innerHTML += `, ${selectedTool}`;
        let selectedTool2 = landVehicle[Math.floor(Math.random() * landVehicle.length)];
        document.getElementById("tools").innerHTML += `, ${selectedTool2}`;
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(preFilteredItem2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        let trophies = ["a dagger taken from a fallen enemy","a broken blade taken from a fallen enemy","a piece of a banner taken from a fallen enemy"];
        let trophy = trophies[Math.floor(Math.random() * trophies.length)];
        let setItems = ["a bone dice set","a playing card set"];
        let soldierSet = setItems[Math.floor(Math.random() * setItems.length)];
        document.getElementById("equipment").innerHTML += `, an insignia of rank, ${trophy}, ${soldierSet}, a set of common clothes, and a pouch containing 10 gp`;
        //BACKGROUND SPECIFIC ADDITIONS
        let soldierRole = ["officer","scout","infantry","cavalry","healer","quartermaster","standard-bearer","support staff"];
        let chosenRole = soldierRole[Math.floor(Math.random() * soldierRole.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Role:</b> ${chosenRole}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Military rank.</i> You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["I would still lay down my life for the people I served with.","Someone saved my life on the battlefield. To this day, I will never leave a friend behind.","My honor is my life.","I'll never forget the crushing defeat my company suffered or the enemies who dealt it.","Those who fight beside me are those worth dying for.","I fight for those who cannot fight for themselves."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["The monstrous enemy we faced in battle still leaves me quivering with fear.","I have little respect for anyone who is not a proven warrior.","I made a terrible mistake in battle that cost many lives — and I would do anything to keep that mistake secret.","My hatred of my enemies is blind and unreasoning.","I obey the law, even if the law causes misery.","I'd rather eat my armor than admit when I'm wrong."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I'm always polite and respectful.","I'm haunted by memories of war. I can't get the images of violence out of my mind.","I've lost too many friends, and I'm slow to make new ones.","I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.","I can stare down a hell hound without flinching.","I enjoy being strong and like breaking things.","I have a crude sense of humor.","I face problems head-on. A simple, direct solution is the best path to success."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Nation. My city, nation, or people are all that matter.","Greater Good. Our lot is to lay down our lives in defense of others.","Responsibility. I do what I must and obey just authority."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Nation. My city, nation, or people are all that matter.","Responsibility. I do what I must and obey just authority.","Live and Let Live. Ideals aren't worth killing over or going to war for."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Nation. My city, nation, or people are all that matter.","Responsibility. I do what I must and obey just authority.","Might. In life as in war, the stronger force wins."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Nation. My city, nation, or people are all that matter.","Greater Good. Our lot is to lay down our lives in defense of others.","Independence. When people follow orders blindly, they embrace a kind of tyranny."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Nation. My city, nation, or people are all that matter.","Independence. When people follow orders blindly, they embrace a kind of tyranny.","Live and Let Live. Ideals aren't worth killing over or going to war for."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Nation. My city, nation, or people are all that matter.","Independence. When people follow orders blindly, they embrace a kind of tyranny.","Might. In life as in war, the stronger force wins."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Nation. My city, nation, or people are all that matter.","Greater Good. Our lot is to lay down our lives in defense of others.","Live and Let Live. Ideals aren't worth killing over or going to war for."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Nation. My city, nation, or people are all that matter.","Live and Let Live. Ideals aren't worth killing over or going to war for."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Nation. My city, nation, or people are all that matter.","Might. In life as in war, the stronger force wins.","Live and Let Live. Ideals aren't worth killing over or going to war for."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "urchin") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["sleight of hand","stealth"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        let tempArray2 = ["disguise kit","thieves' tools"];
        let updatedArray2 = preFilteredItem2.concat(tempArray2);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(updatedArray2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        document.getElementById("equipment").innerHTML += `, a small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a pouch containing 10 gp`;
        //BACKGROUND SPECIFIC ADDITIONS
        document.getElementById("backgroundSub").innerHTML += `<i>City secrets.</i> You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["My town or city is my home, and I'll fight to defend it.","I sponsor an orphanage to keep others from enduring what I was forced to endure.","I owe my survival to another urchin who taught me to live on the streets.","I owe a debt I can never repay to the person who took pity on me.","I escaped my life of poverty by robbing an important person, and I'm wanted for it.","No one else should have to endure the hardships I've been through."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["If I'm outnumbered, I will run away from a fight.","Gold seems like a lot of money to me, and I'll do just about anything for more of it.","I will never fully trust anyone other than myself.","I'd rather kill someone in their sleep than fight fair.","It's not stealing if I need it more than someone else.","People who can't take care of themselves get what they deserve."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I hide scraps of food and trinkets away in my pockets.","I ask a lot of questions.","I like to squeeze into small places where no one else can get to me.","I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.","I eat like a pig and have bad manners.","I think anyone who's nice to me is hiding evil intent.","I don't like to bathe.","I bluntly say what other people are hinting at or hiding."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Aspiration. I'm going to prove that I'm worthy of a better life.","Respect. All people, rich or poor, deserve respect.","Community. We have to take care of each other, because no one else is going to do it."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Aspiration. I'm going to prove that I'm worthy of a better life.","Community. We have to take care of each other, because no one else is going to do it.","People. I help the people who help me – that's what keeps us alive."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Aspiration. I'm going to prove that I'm worthy of a better life.","Community. We have to take care of each other, because no one else is going to do it.","Retribution. The rich need to be shown what life and death are like in the gutters."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Aspiration. I'm going to prove that I'm worthy of a better life.","Respect. All people, rich or poor, deserve respect.","Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Aspiration. I'm going to prove that I'm worthy of a better life.","Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things.","People. I help the people who help me – that's what keeps us alive."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Aspiration. I'm going to prove that I'm worthy of a better life.","Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things.","Retribution. The rich need to be shown what life and death are like in the gutters."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Aspiration. I'm going to prove that I'm worthy of a better life.","Respect. All people, rich or poor, deserve respect.","People. I help the people who help me – that's what keeps us alive."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Aspiration. I'm going to prove that I'm worthy of a better life.","People. I help the people who help me – that's what keeps us alive."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Aspiration. I'm going to prove that I'm worthy of a better life.","Retribution. The rich need to be shown what life and death are like in the gutters.","People. I help the people who help me – that's what keeps us alive."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "anthropologist") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["insight","religion"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //EQUIPMENT ADDITIONS
        document.getElementById("equipment").innerHTML += `, a leatherbound diary, a bottle of ink, an ink pen, a set of traveler's clothes, and a pouch containing 10 gp`;
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        let languageAdditionsArray2 = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray2 = languageAdditionsArray2.substr(11);
        let splitLanguageAdditionsArray2 = newLanguageAdditionsArray2.split(",");
        let newSplitLanguageAdditionsArray2 = splitLanguageAdditionsArray2.map(languageFunction2);
        function languageFunction2(language2) {
            return language2.trim();
        }
        let preFilteredLanguageAdditions2 = newSplitLanguageAdditionsArray2.filter(Boolean);
        let filteredLanguages2 = allLanguages.filter(item => !preFilteredLanguageAdditions2.includes(item));
        let backgroundLanguage2 = filteredLanguages2[Math.floor(Math.random() * filteredLanguages2.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage2}`;
        //BACKGROUND SPECIFIC ADDITIONS
        let culturalChameleon = ["aarakocra","dwarf","elf","goblin","halfling","human","lizardfolk","orc"];
        let filteredCultures = culturalChameleon.filter(item => !playerRaceSelected.includes(item));
        let chosenCulture = filteredCultures[Math.floor(Math.random() * filteredCultures.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Cultural chameleon:</b> ${chosenCulture}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Adept linguist.</i> You can communicate with humanoids who don't speak any language you know. You must observe the humanoids interacting with one another for at least 1 day, after which you learn a handful of important words, expressions, and gestures - enough to communicate on a rudimentary level.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.","Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.","Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.","I want to learn more about a particular humanoid culture that fascinates me.","I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.","I have a trinket that I believe is the key to finding a long-lost society."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["Boats make me seasick.","I talk to myself, and I don't make friends easily.","I believe that I'm intellectually superior to people from other cultures and have much to teach them.","I've picked up some unpleasant habits living among goblins, lizardfolk, or orcs.","I complain about everything.","I wear a tribal mask and never take it off."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I prefer the company of those who aren't like me, including people of other races.","I'm a stickler when it comes to observing proper etiquette and local customs.","I would rather observe than meddle.","By living among violent people, I have become desensitized to violence.","I would risk life and limb to discover a new culture or unravel the secrets of a dead one.","When I arrive at a new settlement for the first time, I must learn all of its customs."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Discovery. I want to be the first person to discover a lost culture.","Knowledge. By understanding other races and cultures, we learn to understand ourselves.","Distance. One must not interfere with the affairs of another culture — even one in need of aid.","Power. Common people crave strong leadership, and I do my utmost to provide it.","Protection. I must do everything possible to save a society facing extinction."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Discovery. I want to be the first person to discover a lost culture.","Knowledge. By understanding other races and cultures, we learn to understand ourselves.","Distance. One must not interfere with the affairs of another culture — even one in need of aid.","Power. Common people crave strong leadership, and I do my utmost to provide it."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Discovery. I want to be the first person to discover a lost culture.","Knowledge. By understanding other races and cultures, we learn to understand ourselves.","Distance. One must not interfere with the affairs of another culture — even one in need of aid.","Power. Common people crave strong leadership, and I do my utmost to provide it."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Discovery. I want to be the first person to discover a lost culture.","Knowledge. By understanding other races and cultures, we learn to understand ourselves.","Protection. I must do everything possible to save a society facing extinction.","Indifferent. Life is cruel. What's the point in saving people if they're going to die anyway?"];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Discovery. I want to be the first person to discover a lost culture.","Knowledge. By understanding other races and cultures, we learn to understand ourselves.","Indifferent. Life is cruel. What's the point in saving people if they're going to die anyway?"];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Discovery. I want to be the first person to discover a lost culture.","Knowledge. By understanding other races and cultures, we learn to understand ourselves.","Indifferent. Life is cruel. What's the point in saving people if they're going to die anyway?"];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Discovery. I want to be the first person to discover a lost culture.","Knowledge. By understanding other races and cultures, we learn to understand ourselves.","Protection. I must do everything possible to save a society facing extinction."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Discovery. I want to be the first person to discover a lost culture.","Knowledge. By understanding other races and cultures, we learn to understand ourselves."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Discovery. I want to be the first person to discover a lost culture.","Knowledge. By understanding other races and cultures, we learn to understand ourselves."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "archaeologist") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["history","survival"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //TOOL PROFICIENCY ADDITIONS
        flipResult2 = (Math.floor(Math.random()*2)==0);
        if(flipResult2) {
            let pulledItem2 = document.getElementById("tools").textContent;
            let trimmedItem2 = pulledItem2.substr(20);
            let splitItem2 = trimmedItem2.split(",");
            let splitItemArray2 = splitItem2.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let preFilteredItem2 = splitItemArray2.filter(Boolean);
            let tempArray2 = ["cartographer's tools"];
            let updatedArray2 = preFilteredItem2.concat(tempArray2);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray2 = removeDuplicates(updatedArray2);
            let joinArray2 = finalizedArray2.join(", ");
            document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        } else {
            let pulledItem2 = document.getElementById("tools").textContent;
            let trimmedItem2 = pulledItem2.substr(20);
            let splitItem2 = trimmedItem2.split(",");
            let splitItemArray2 = splitItem2.map(itemFunction);
            function itemFunction(item) {
                return item.trim();
            }
            let preFilteredItem2 = splitItemArray2.filter(Boolean);
            let tempArray2 = ["navigator's tools"];
            let updatedArray2 = preFilteredItem2.concat(tempArray2);
            function removeDuplicates(item) {
                return item.filter((value, index) => item.indexOf(value) === index);
            }
            finalizedArray2 = removeDuplicates(updatedArray2);
            let joinArray2 = finalizedArray2.join(", ");
            document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        };
        //EQUIPMENT ADDITIONS
        document.getElementById("equipment").innerHTML += `, a wooden case containing a map to a ruin or dungeon, a bullseye lantern, a miner's pick, a set of traveler's clothes, a shovel, a two-person tent, and a pouch containing 25 gp`;
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        //BACKGROUND SPECIFIC ADDITIONS
        let dustDigger = ["10-foot pole","crowbar","hat","hooded lantern","medallion","shovel","sledgehammer","whip"];
        let chosenItem = dustDigger[Math.floor(Math.random() * dustDigger.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Dust digger:</b> ${chosenItem}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Historical knowledge.</i> When you enter a ruin or dungeon, you can correctly ascertain its original purpose and determine its builders, whether those were dwarves, elves, humans, yuan-ti, or some other known race. In addition, you can determine the monetary value of art objects more than a century old.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books.","I want to find my mentor, who disappeared on an expedition some time ago.","I have a friendly rival. Only one of us can be the best, and I aim to prove it's me.","I won't sell an art object or other treasure that has historical significance or is one of a kind.","I'm secretly in love with the wealthy patron who sponsors my archaeological exploits.","I hope to bring prestige to a library, a museum, or a university."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I have a secret fear of some common wild animal — and in my work, I see them everywhere.","I can't leave a room without searching it for secret doors.","When I'm not exploring dungeons or ruins, I get jittery and impatient.","I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.","When given the choice of going left or right, I always go left.","I can't sleep except in total darkness."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I love a good puzzle or mystery.","I'm a pack rat who never throws anything away.","Fame is more important to me than money.","I have no qualms about stealing from the dead.","I'm happier in a dusty old tomb than in the centers of civilization.","Traps don't make me nervous. Idiots who trigger traps make me nervous.","I may fail, but I don't give up.","You may think I'm a scholar, but I love a good brawl. These fists were made for punching."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Immortality. All my exploring is part of a plan to find the secret of everlasting life.","Danger. With every great discovery comes grave danger. The two walk hand in hand.","Preservation. That artifact belongs in a museum.","Dignity. The dead and their belongings deserve to be treated with respect."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Immortality. All my exploring is part of a plan to find the secret of everlasting life.","Danger. With every great discovery comes grave danger. The two walk hand in hand.","Dignity. The dead and their belongings deserve to be treated with respect."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Immortality. All my exploring is part of a plan to find the secret of everlasting life.","Danger. With every great discovery comes grave danger. The two walk hand in hand.","Greed. I won't risk my life for nothing. I expect some kind of payment.","Dignity. The dead and their belongings deserve to be treated with respect."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Immortality. All my exploring is part of a plan to find the secret of everlasting life.","Danger. With every great discovery comes grave danger. The two walk hand in hand.","Preservation. That artifact belongs in a museum.","Death Wish. Nothing is more exhilarating than a narrow escape from the jaws of death."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Immortality. All my exploring is part of a plan to find the secret of everlasting life.","Danger. With every great discovery comes grave danger. The two walk hand in hand.","Death Wish. Nothing is more exhilarating than a narrow escape from the jaws of death."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Immortality. All my exploring is part of a plan to find the secret of everlasting life.","Danger. With every great discovery comes grave danger. The two walk hand in hand.","Greed. I won't risk my life for nothing. I expect some kind of payment.","Death Wish. Nothing is more exhilarating than a narrow escape from the jaws of death."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Immortality. All my exploring is part of a plan to find the secret of everlasting life.","Danger. With every great discovery comes grave danger. The two walk hand in hand.","Preservation. That artifact belongs in a museum."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Immortality. All my exploring is part of a plan to find the secret of everlasting life.","Danger. With every great discovery comes grave danger. The two walk hand in hand."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Immortality. All my exploring is part of a plan to find the secret of everlasting life.","Danger. With every great discovery comes grave danger. The two walk hand in hand.","Greed. I won't risk my life for nothing. I expect some kind of payment."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "athlete") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["acrobatics","athletics"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let selectedTool = landVehicle[Math.floor(Math.random() * landVehicle.length)];
        document.getElementById("tools").innerHTML += `, ${selectedTool}`;
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(preFilteredItem2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        let trophies = ["a bronze discus","a leather ball"];
        let trophy = trophies[Math.floor(Math.random() * trophies.length)];
        let setItems = ["a lucky charm","a past trophy"];
        let itemSet = setItems[Math.floor(Math.random() * setItems.length)];
        document.getElementById("equipment").innerHTML += `, ${trophy}, ${itemSet}, a set of traveler's clothes, and a pouch containing 10 gp`;
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        //BACKGROUND SPECIFIC ADDITIONS
        let favoredEvent = ["marathon","long-distance running","wrestling","boxing","chariot or horse race","pankration","hoplite race","pentathlon"];
        let chosenEvent = favoredEvent[Math.floor(Math.random() * favoredEvent.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Favored event:</b> ${chosenEvent}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Echoes of victory.</i> You have attracted admiration among spectators, fellow athletes, and trainers in the region that hosted your past athletic victories. When visiting any settlement within 100 miles of where you grew up, there is a 50 percent chance you can find someone there who admires you and is willing to provide information or temporary shelter.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["My teammates are my family.","I will overcome a rival and prove myself their better.","My mistake got someone hurt. I'll never make that mistake again.","I will be the best for the honor and glory of my home.","The person who trained me is the most important person in my world.","I strive to live up to a specific hero's example."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I indulge in a habit that threatens my reputation or my health.","I'll do absolutely anything to win.","I ignore anyone who doesn't compete and anyone who loses to me.","I have lingering pain from old injuries.","Any defeat or failure on my part is because my opponent cheated.","I must be the captain of any group I join."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I feel most at peace during physical exertion, be it exer­cise or battle.","I don't like to sit idle.","I have a daily exercise routine that I refuse to break.","Obstacles exist to be overcome.","When I see others struggling, I offer to help.","I love to trade banter and gibes.","Anything worth doing is worth doing best.","I get irritated if people praise someone else and not me."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Growth. Lessons hide in victory and defeat.","Camaraderie. The strongest bonds are forged through struggle.","Tradition. Every game has rules, and the playing field must be level."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Growth. Lessons hide in victory and defeat.","People. I strive to inspire my spectators.","Tradition. Every game has rules, and the playing field must be level."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Growth. Lessons hide in victory and defeat.","Triumph. The best part of winning is seeing my rivals brought low.","Tradition. Every game has rules, and the playing field must be level."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Growth. Lessons hide in victory and defeat.","Competition. I strive to test myself in all things.","Camaraderie. The strongest bonds are forged through struggle."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Growth. Lessons hide in victory and defeat.","Competition. I strive to test myself in all things.","People. I strive to inspire my spectators."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Growth. Lessons hide in victory and defeat.","Competition. I strive to test myself in all things.","Triumph. The best part of winning is seeing my rivals brought low."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Growth. Lessons hide in victory and defeat.","Camaraderie. The strongest bonds are forged through struggle.","People. I strive to inspire my spectators."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Growth. Lessons hide in victory and defeat.","People. I strive to inspire my spectators."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Growth. Lessons hide in victory and defeat.","Triumph. The best part of winning is seeing my rivals brought low.","People. I strive to inspire my spectators."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    }  else if(playerBackgroundSelected == "fisher") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["history","survival"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //EQUIPMENT ADDITIONS
        let trophies = ["a favorite fishing lure","oiled leather wading boots"];
        let trophy = trophies[Math.floor(Math.random() * trophies.length)];
        document.getElementById("equipment").innerHTML += `, fishing tackle, a net, ${trophy}, a set of traveler's clothes, and a belt pouch containing 10 gp`;
        //LANGUAGE ADDITIONS
        let languageAdditionsArray = document.getElementById("languages").textContent;
        let newLanguageAdditionsArray = languageAdditionsArray.substr(11);
        let splitLanguageAdditionsArray = newLanguageAdditionsArray.split(",");
        let newSplitLanguageAdditionsArray = splitLanguageAdditionsArray.map(languageFunction);
        function languageFunction(language) {
            return language.trim();
        }
        let preFilteredLanguageAdditions = newSplitLanguageAdditionsArray.filter(Boolean);
        let filteredLanguages = allLanguages.filter(item => !preFilteredLanguageAdditions.includes(item));
        let backgroundLanguage = filteredLanguages[Math.floor(Math.random() * filteredLanguages.length)];
        document.getElementById("languages").innerHTML += `, ${backgroundLanguage}`;
        //BACKGROUND SPECIFIC ADDITIONS
        let fishingTale = ["Lobster wrestling: you fought in hand-to-hand combat with an immense lobster.","It dragged the boat: you nearly caught a fish of monstrous size that pulled your boat for miles.","Fins of pure gold: you caught a sea animal whose fins were made of pure gold, but another fisher stole it.","Ghost fish: you are haunted by a ghostly fish that only you can see.","Nemesis clam: a large clam containing a pearl the size of your head claimed one of your fingers before jetting away; one day, you'll find that clam.","It swallowed the sun: you once saw a fish leap from the water and turn day into night.","Dive into the abyss: you found yourself in an underwater cave leading to the abyss, and your luck has been sour ever since.","Love story: you fell in love with a creature of pure water, but your brief romance ended tragically."];
        let chosenTale = fishingTale[Math.floor(Math.random() * fishingTale.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Fishing tale:</b> ${chosenTale}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Harvest the water.</i> You gain advantage on ability checks made using fishing tackle. If you have access to a body of water that sustains marine life, you can maintain a moderate lifestyle while working as a fisher, and you can catch enough food to feed yourself and up to ten other people each day.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["I lost something important in the deep sea, and I intend to find it.","Someone else's greed destroyed my livelihood, and I will be compensated.","I will fish the many famous waters of this land.","The gods saved me during a terrible storm, and I will honor their gift.","My destiny awaits me at the bottom of a particular pond in the Feywild.","I must repay my village's debt."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["I am judgmental, especially of those I deem homebodies or otherwise lazy.","I become depressed and anxious if I'm away from the sea too long.","I have lived a hard life and find it difficult to empathize with others.","I am inclined to tell long-winded stories at inopportune times.","I work hard, but I play harder.","I am obsessed with catching an elusive aquatic beast, often to the detriment of other pursuits."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I am unmoved by the wrath of nature.","My friends are my crew; we sink or float together.","I need long stretches of quiet to clear my head.","Rich folk don't know the satisfaction of hard work.","I laugh heartily, feel deeply, and fear nothing.","I work hard; nature offers no handouts.","I dislike bargaining; state your price and mean it.","Luck favors me, and I take risks others might not."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Hard Work: No wave can move a soul hard at work.","Camaraderie: Good people make even the longest voyage bearable.","Luck: Our luck depends on respecting its rules — now throw this salt over your shoulder."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Hard Work: No wave can move a soul hard at work.","Luck: Our luck depends on respecting its rules — now throw this salt over your shoulder.","Balance: Do not fish the same spot twice in a row; suppress your greed, and nature will reward you."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Hard Work: No wave can move a soul hard at work.","Luck: Our luck depends on respecting its rules — now throw this salt over your shoulder.","Plunder: Take all that you can and leave nothing for the scavengers."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Hard Work: No wave can move a soul hard at work.","Camaraderie: Good people make even the longest voyage bearable.","Daring: The richest bounty goes to those who risk everything."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Hard Work: No wave can move a soul hard at work.","Daring: The richest bounty goes to those who risk everything.","Balance: Do not fish the same spot twice in a row; suppress your greed, and nature will reward you."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Hard Work: No wave can move a soul hard at work.","Daring: The richest bounty goes to those who risk everything.","Plunder: Take all that you can and leave nothing for the scavengers."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Hard Work: No wave can move a soul hard at work.","Camaraderie: Good people make even the longest voyage bearable.","Balance: Do not fish the same spot twice in a row; suppress your greed, and nature will reward you."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Hard Work: No wave can move a soul hard at work.","Balance: Do not fish the same spot twice in a row; suppress your greed, and nature will reward you."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Hard Work: No wave can move a soul hard at work.","Plunder: Take all that you can and leave nothing for the scavengers.","Balance: Do not fish the same spot twice in a row; suppress your greed, and nature will reward you."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    } else if(playerBackgroundSelected == "smuggler") {
        //STATIC SKILL ADDITIONS
        let pulledItem = document.getElementById("skills").textContent;
        let trimmedItem = pulledItem.substr(21);
        let splitItem = trimmedItem.split(",");
        let splitItemArray = splitItem.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem = splitItemArray.filter(Boolean);
        let tempArray = ["athletics","deception"];
        let updatedArray = preFilteredItem.concat(tempArray);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray = removeDuplicates(updatedArray);
        let joinArray = finalizedArray.join(", ");
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinArray}`;
        //STATIC TOOL PROFICIENCY ADDITIONS
        let selectedTool = waterVehicle[Math.floor(Math.random() * waterVehicle.length)];
        document.getElementById("tools").innerHTML += `, ${selectedTool}`;
        let pulledItem2 = document.getElementById("tools").textContent;
        let trimmedItem2 = pulledItem2.substr(20);
        let splitItem2 = trimmedItem2.split(",");
        let splitItemArray2 = splitItem2.map(itemFunction);
        function itemFunction(item) {
            return item.trim();
        }
        let preFilteredItem2 = splitItemArray2.filter(Boolean);
        function removeDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
        }
        finalizedArray2 = removeDuplicates(preFilteredItem2);
        let joinArray2 = finalizedArray2.join(", ");
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinArray2}`;
        //EQUIPMENT ADDITIONS
        let trophies = ["a fancy leather vest","a pair of leather boots"];
        let trophy = trophies[Math.floor(Math.random() * trophies.length)];
        document.getElementById("equipment").innerHTML += `, ${trophy}, a set of common clothes, and a leather pouch with 15 gp`;
        //BACKGROUND SPECIFIC ADDITIONS
        let fameClaim = ["Spirit of the whale: you smuggled stolen dwarven spirits in the body of a dead whale being pulled behind a fishing boat. When you delivered the goods, the corpse suddenly exploded, sending whale meat and whiskey bottles for half a mile.","Cart and sword: you drove a cart filled with stolen art through the middle of a battlefield while singing sea shanties to confuse the combatants.","The recruit: you enlisted in another nation's navy for the purpose of smuggling stolen jewels to a distant port. You attained a minor rank before disappearing from the navy and making your way here.","River of shadows: your riverboat accidentally slipped through the veil into the Shadowfell for several hours. While you were there, you sold some stolen dragonborn artifacts before returning to this plane and paddling home.","Gold-hearted: you agreed to transport a family escaping a war. The baby began to cry at a checkpoint, and you gave the guards all your gold to let you pass. The family never found out about this gesture.","Playing both sides: you once smuggled crates of crossbow bolts and bundles of arrows, each destined for an opposing side in a regional war, at the same time. The buyers arrived within moments of each other but did not discover your trickery."];
        let chosenClaim = fameClaim[Math.floor(Math.random() * fameClaim.length)];
        document.getElementById("backgroundSub").innerHTML += `<b>Claim to fame:</b> ${chosenClaim}`;
        document.getElementById("backgroundSub").innerHTML += `<br>
        <br>
        <i>Down low.</i> You are acquainted with a network of smugglers who are willing to help you out of tight situations. While in a particular town, city, or other similarly sized community (DM's discretion), you and your companions can stay for free in safe houses. Safe houses provide a poor lifestyle. While staying at a safe house, you can choose to keep your presence (and that of your companions) a secret.`;
        //BACKGROUND BONDS
        let backgroundBonds = ["My vessel was stolen from me, and I burn with the desire to recover it.","I intend to become the leader of the network of smugglers that I belong to.","I owe a debt that cannot be repaid in gold.","After one last job, I will retire from the business.","I was tricked by a fellow smuggler who stole something precious from me. I will find that thief.","I give most of my profits to a charitable cause, and I don't like to brag about it."];
        let chosenBond = backgroundBonds[Math.floor(Math.random() * backgroundBonds.length)];
        document.getElementById("bond").innerHTML = `<b>Bond:</b> ${chosenBond}`;
        //BACKGROUND FLAWS
        let backgroundFlaws = ["Lying is reflexive, and I sometimes engage in it without realizing.","I tend to assess my relationships in terms of profit and loss.","I believe everyone has a price and am cynical toward those who present themselves as virtuous.","I struggle to trust the words of others.","Few people know the real me.","Though I act charming, I feel nothing for others and don't know what friendship is."];
        let chosenFlaw = backgroundFlaws[Math.floor(Math.random() * backgroundFlaws.length)];
        document.getElementById("flaw").innerHTML = `<b>Flaw:</b> ${chosenFlaw}`;
        //BACKGROUND TRAITS
        let backgroundTraits = ["I love being on the water but hate fishing.","I think of everything in terms of monetary value.","I never stop smiling.","Nothing rattles me; I have a lie for every occasion.","I love gold but won't cheat a friend.","I enjoy doing things others believe to be impossible.","I become wistful when I see the sun rise over the ocean.","I am no common criminal; I am a mastermind."];
        let chosenTrait = backgroundTraits[Math.floor(Math.random() * backgroundTraits.length)];
        document.getElementById("trait").innerHTML = `<b>Personality trait:</b> ${chosenTrait}`;
        //BACKGROUND IDEALS
        if(playerAlignmentSelected == "lawful good") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","Smuggler's Code: I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents.","Peace and Prosperity: I smuggle only to achieve a greater goal that benefits my community."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful neutral") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","Smuggler's Code: I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "lawful evil") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","Smuggler's Code: I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents.","All for a Coin: I'll do nearly anything if it means I turn a profit."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic good") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","Peace and Prosperity: I smuggle only to achieve a greater goal that benefits my community."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic neutral") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "chaotic evil") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","All for a Coin: I'll do nearly anything if it means I turn a profit."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral good") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","Peace and Prosperity: I smuggle only to achieve a greater goal that benefits my community."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "true neutral") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        } else if(playerAlignmentSelected == "neutral evil") {
            let idealsArray = ["Wealth: Heaps of coins in a secure vault is all I dream of.","People: For all my many lies, I place a high value on friendship.","Daring: I am most happy when risking everything.","All for a Coin: I'll do nearly anything if it means I turn a profit."];
            let chosenIdeal = idealsArray[Math.floor(Math.random() * idealsArray.length)];
            document.getElementById("ideal").innerHTML = `<b>Ideal:</b> ${chosenIdeal}`;
        }
    };


//LX. ARRAY FILTERS TO REMOVE ANY DUPLICATES THAT MIGHT REMAIN
//a. LANGUAGES FILTER
    let pulledInfo = document.getElementById("languages").textContent;
    let pulledInfoTrimmed = pulledInfo.substr(11);
    let pulledInfoSplit = pulledInfoTrimmed.split(",");
    let pulledInfoArray = pulledInfoSplit.map(dupeFunction);
    function dupeFunction(item) {
            return item.trim();
            }
    let pulledInfoFiltered = pulledInfoArray.filter(Boolean);
    function removeInfoDuplicates(item) {
            return item.filter((value, index) => item.indexOf(value) === index);
            }
    finalInfoArray = removeInfoDuplicates(pulledInfoFiltered);
    let joinInfoArray = finalInfoArray.join(", ");
    if(joinInfoArray.length === 0) {
        document.getElementById("languages").innerHTML = `<b>Languages:</b> none`;
    } else {
        document.getElementById("languages").innerHTML = `<b>Languages:</b> ${joinInfoArray}`;
    }
//b. TOOL PROFICIENCY FILTER
    let pulledInfo2 = document.getElementById("tools").textContent;
    let pulledInfoTrimmed2 = pulledInfo2.substr(20);
    let pulledInfoSplit2 = pulledInfoTrimmed2.split(",");
    let pulledInfoArray2 = pulledInfoSplit2.map(dupeFunction);
    let pulledInfoFiltered2 = pulledInfoArray2.filter(Boolean);
    finalInfoArray2 = removeInfoDuplicates(pulledInfoFiltered2);
    let joinInfoArray2 = finalInfoArray2.join(", ");
    if(joinInfoArray2.length === 0) {
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> none`;
    } else {
        document.getElementById("tools").innerHTML = `<b>Tool proficiencies:</b> ${joinInfoArray2}`;
    }
//c. SKILL PROFICIENCY FILTER
    let pulledInfo3 = document.getElementById("skills").textContent;
    let pulledInfoTrimmed3 = pulledInfo3.substr(21);
    let pulledInfoSplit3 = pulledInfoTrimmed3.split(",");
    let pulledInfoArray3 = pulledInfoSplit3.map(dupeFunction);
    let pulledInfoFiltered3 = pulledInfoArray3.filter(Boolean);
    finalInfoArray3 = removeInfoDuplicates(pulledInfoFiltered3);
    let joinInfoArray3 = finalInfoArray3.join(", ");
    if(joinInfoArray3.length === 0) {
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> none`;
    } else {
        document.getElementById("skills").innerHTML = `<b>Skill proficiencies:</b> ${joinInfoArray3}`;
    }
//d. ARMOR PROFICIENCY FILTER
    let pulledInfo4 = document.getElementById("armor").textContent;
    let pulledInfoTrimmed4 = pulledInfo4.substr(21);
    let pulledInfoSplit4 = pulledInfoTrimmed4.split(",");
    let pulledInfoArray4 = pulledInfoSplit4.map(dupeFunction);
    let pulledInfoFiltered4 = pulledInfoArray4.filter(Boolean);
    finalInfoArray4 = removeInfoDuplicates(pulledInfoFiltered4);
    let joinInfoArray4 = finalInfoArray4.join(", ");
    if(joinInfoArray4.length === 0) {
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> none`;
    } else {
        document.getElementById("armor").innerHTML = `<b>Armor proficiencies:</b> ${joinInfoArray4}`;
    }
//e. WEAPON PROFICIENCY FILTER
    let pulledInfo5 = document.getElementById("weapons").textContent;
    let pulledInfoTrimmed5 = pulledInfo5.substr(22);
    let pulledInfoSplit5 = pulledInfoTrimmed5.split(",");
    let pulledInfoArray5 = pulledInfoSplit5.map(dupeFunction);
    let pulledInfoFiltered5 = pulledInfoArray5.filter(Boolean);
    finalInfoArray5 = removeInfoDuplicates(pulledInfoFiltered5);
    let joinInfoArray5 = finalInfoArray5.join(", ");
    if(joinInfoArray5.length === 0) {
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> none`;
    } else {
        document.getElementById("weapons").innerHTML = `<b>Weapon proficiencies:</b> ${joinInfoArray5}`;
    }
//f. CANTRIP FILTER
    let pulledInfo6 = document.getElementById("cantrips").textContent;
    let pulledInfoTrimmed6 = pulledInfo6.substr(10);
    let pulledInfoSplit6 = pulledInfoTrimmed6.split(",");
    let pulledInfoArray6 = pulledInfoSplit6.map(dupeFunction);
    let pulledInfoFiltered6 = pulledInfoArray6.filter(Boolean);
    finalInfoArray6 = removeInfoDuplicates(pulledInfoFiltered6);
    let joinInfoArray6 = finalInfoArray6.join(", ");
    if(joinInfoArray6.length === 0) {
        document.getElementById("cantrips").innerHTML = `<b>Cantrips:</b> none`;
    } else {
        document.getElementById("cantrips").innerHTML = `<b>Cantrips:</b> ${joinInfoArray6}`;
    }
//g. SPELL FILTER
    let pulledInfo7 = document.getElementById("spells").textContent;
    let pulledInfoTrimmed7 = pulledInfo7.substr(8);
    let pulledInfoSplit7 = pulledInfoTrimmed7.split(",");
    let pulledInfoArray7 = pulledInfoSplit7.map(dupeFunction);
    let pulledInfoFiltered7 = pulledInfoArray7.filter(Boolean);
    finalInfoArray7 = removeInfoDuplicates(pulledInfoFiltered7);
    let joinInfoArray7 = finalInfoArray7.join(", ");
    if(joinInfoArray7.length === 0) {
        document.getElementById("spells").innerHTML = `<b>Spells:</b> none`;
    } else {
        document.getElementById("spells").innerHTML = `<b>Spells:</b> ${joinInfoArray7}`;
    }


//LXI. SPELLCASTING INFO
    if(playerClassSelected == "bard") {
        document.getElementById("spellcastingAbility").innerHTML += `<b>Spellcasting ability:</b> charisma`;
        let spellSaveDC = (8 + pBonus + rModifier);
        document.getElementById("spellSave").innerHTML += `<b>Spell save DC:</b> ${spellSaveDC}`;
        let spellAttack = (pBonus + rModifier);
        document.getElementById("spellAttack").innerHTML += `<b>Spell attack modifier:</b> +${spellAttack}`;
    } else if(playerClassSelected == "cleric") {
        document.getElementById("spellcastingAbility").innerHTML += `<b>Spellcasting ability:</b> wisdom`;
        let spellSaveDC = (8 + pBonus + wModifier);
        document.getElementById("spellSave").innerHTML += `<b>Spell save DC:</b> ${spellSaveDC}`;
        let spellAttack = (pBonus + wModifier);
        document.getElementById("spellAttack").innerHTML += `<b>Spell attack modifier:</b> +${spellAttack}`;
    } else if(playerClassSelected == "druid") {
        document.getElementById("spellcastingAbility").innerHTML += `<b>Spellcasting ability:</b> wisdom`;
        let spellSaveDC = (8 + pBonus + wModifier);
        document.getElementById("spellSave").innerHTML += `<b>Spell save DC:</b> ${spellSaveDC}`;
        let spellAttack = (pBonus + wModifier);
        document.getElementById("spellAttack").innerHTML += `<b>Spell attack modifier:</b> +${spellAttack}`;
    } else if(playerClassSelected == "paladin") {
        document.getElementById("spellcastingAbility").innerHTML += `<b>Spellcasting ability:</b> charisma`;
        let spellSaveDC = (8 + pBonus + rModifier);
        document.getElementById("spellSave").innerHTML += `<b>Spell save DC:</b> ${spellSaveDC}`;
        let spellAttack = (pBonus + rModifier);
        document.getElementById("spellAttack").innerHTML += `<b>Spell attack modifier:</b> +${spellAttack}`;
    } else if(playerClassSelected == "ranger") {
        document.getElementById("spellcastingAbility").innerHTML += `<b>Spellcasting ability:</b> wisdom`;
        let spellSaveDC = (8 + pBonus + wModifier);
        document.getElementById("spellSave").innerHTML += `<b>Spell save DC:</b> ${spellSaveDC}`;
        let spellAttack = (pBonus + wModifier);
        document.getElementById("spellAttack").innerHTML += `<b>Spell attack modifier:</b> +${spellAttack}`;
    } else if(playerClassSelected == "sorcerer") {
        document.getElementById("spellcastingAbility").innerHTML += `<b>Spellcasting ability:</b> charisma`;
        let spellSaveDC = (8 + pBonus + rModifier);
        document.getElementById("spellSave").innerHTML += `<b>Spell save DC:</b> ${spellSaveDC}`;
        let spellAttack = (pBonus + rModifier);
        document.getElementById("spellAttack").innerHTML += `<b>Spell attack modifier:</b> +${spellAttack}`;
    } else if(playerClassSelected == "warlock") {
        document.getElementById("spellcastingAbility").innerHTML += `<b>Spellcasting ability:</b> charisma`;
        let spellSaveDC = (8 + pBonus + rModifier);
        document.getElementById("spellSave").innerHTML += `<b>Spell save DC:</b> ${spellSaveDC}`;
        let spellAttack = (pBonus + rModifier);
        document.getElementById("spellAttack").innerHTML += `<b>Spell attack modifier:</b> +${spellAttack}`;
    } else if(playerClassSelected == "wizard") {
        document.getElementById("spellcastingAbility").innerHTML += `<b>Spellcasting ability:</b> intelligence`;
        let spellSaveDC = (8 + pBonus + iModifier);
        document.getElementById("spellSave").innerHTML += `<b>Spell save DC:</b> ${spellSaveDC}`;
        let spellAttack = (pBonus + iModifier);
        document.getElementById("spellAttack").innerHTML += `<b>Spell attack modifier:</b> +${spellAttack}`;
    }
};
let masterButton = document.getElementById("randomize");
masterButton.addEventListener("click", masterFunction);
