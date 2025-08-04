const express = require("express");
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const jokes = [
  {
    joke: `Abu El Abed ra7 3al mahkameh mishen mashkal 3al tari2. 3assab la2ano natar ktir w ma eja dawro. Bas semi3 esmo wo2if edem el 2addeh. El 2addeh: t2ajalet el jalset la bokra Abu El Abed (Shouting): leh seedna? El 2addeh: 50k lbp gharamet l2annak ahanet el ma7hkameh, shefet leh!? El 2addeh shef abu el abed fata7 jezdeno. El 2addeh: mesh hala2 btedfa3, ba3den. Abu El Abed: ma baddeh edfa3 hala2 seedna, bas 3am fatesh eza ma3eh masareh kfeyeh ta2ellak ba3ed kelemten.`
  },
  {
    joke: `Abed sa2al emmo: mazbout enno aneh asleh ered? Em El Abed: ma ba3ref, la2anneh mesh sheyfeh ahel bayak men abel.`
  },
  {
    joke: `Abu El Abed rad 3al telephone w tolo3lo doctor gherfit tawari2. Doctor: Martak fetit b7adis sayara w 3andeh khabar mni7 w wa7ad morr, el morr enno martak nshalit w bada mose3adeh la tekol w tet7amam toul 7ayeta. Abu El Abed: Ya allah. Shul khabar l7elo? Doctor: 3am emza7, martak metit.`
  },
  {
    joke: `Em El Abed khayfene eno ykoun jawza 3am ykhouna, fa btrou7 teshtre fared. Tene yom btla2e Abu El Abed bel takhet ma3 mara 7elwe. Bte7mol el fared w bt7oto 3a rasa. Abu El Abed bnot mn el takhet, w byetrajeha ma tent7ir. Hysterically Em El Abed btred 3le: khras enta ba3deh.`
  },
  {
    joke: `Abu El Abed shtara telephone. houwe w 3am yo3rdo b ahwet l2zeiz bdo2 el telephone. Bred w byesma3 sot Em El Abed. Abu El Abed: yeh, EA!? ma ma32oul, keef 3refteh enneh hawn?`
  },
  {
    joke: `El estez sa2al Abed: shou bta3ref ya Abed 3an sho3ara2 el jaheliyeh. Abed: kelloun metoh ya estez.`
  },
  {
    joke: `Abed: emmeh, lamma kenna bel bosta aneh w abeh, awamneh ta y2a3ed mara matra7eh. Em El Abed: bravo 3laik ya abed deyman sma3 kelmet bayak. Abed: bas aneh kenet 2a3ed be7hodnoh.`
  },
  {
    joke: `Secretaryit el doctor da2it la Abu El Abed w aletlo: reje3 el check taba3ak ya Abu El Abed. Abu El Abed: kamen reje3 waja3 me3dteh.`
  },
  {
    joke: `Abu El Abed w Abu Steif ra7o 3al Casino. Abu Steif ra7 3a makanit el pepsi w 7at fiya 500L.L. w tol3it pepsi, tfeja2 Abu Steif w balash y7ot 500 wara 500 w yenzalo el pepsi. Abu El Abed byeje wara Abu Steif w bkhali ywa2if w byes2al iza 7ada tene bado yjarib. Aby Steif bsarikh bkhol2it Abu El Abed: Mish shayef jayeh hazzeh?`
  },
  {
    joke: `Abu El Abed w Abu Steif ra7o yestado. sar2o shakhtoura w meshyo fi. Abu El Abed sherib beera w gheffeh. Abu Steif: ya Abu El Abed fatteh 3einak, el shakhtoura maksoura w 3am toghra2!! Abu El Abed: khaliya toghra2, ma hiyeh el shakhtoura mesh la2elna`
  },
  {
    joke: `Abu El Abed eja yzour Abu Steif (AS) b Chicago. Abu Steif 3ayish b mant2a fiya ktir jarayim. Nasa7 abu el abed ma yeje la2ano khayfen 3le. Bas wosil, Abu Steif alo: Sho ya Abu El Abed, did you come here to die? Abu El Abed: (in English) 'No I came yesterdie.`
  },
  {
    joke: `Abu El Abed (AA) ra7 yzour rfi2o b Barja (mashhoura el mant2a b le3b el wara2). Bas fet 3al mant2a shef khetyara bada to2ta3 el sheri3 fa da3as frem w 2alla: 2ta3i ya hajjeh. El hajjeh: fet ya khalti!!`
  },
  {
    joke: `Abu El Abed khosir mosriyeto bel casino w ra7 3al baladiyeh el Basta la ye7ke ma3 el ra2is: ya rayyis, min byemlok el mabna? El ra2is: El mabna la wled el Basta Abu El Abed: Ezan bede bi3 7osteh.`
  },
  {
    joke: `Abu El Abed (AA) ken b Homs w a3id 7ad zalame 3omlak bel cafe Abu El Abed: Beddak tesma3 nekteh homsieh El zalame 3asab w allo: Ana homseh. Sheyif hal 3omlaken b ekhir el cafe? Kamen Hamasneh. Ba3d badak tkhabir el nekteh? Abu El Abed: la2. El zalame: Leh?, Khayfen nodorbak? Abu El Abed talla3 fi w al: La2, bas ma bede 3ida 4 marrat.`
  },
  {
    joke: `Marra Abu El Abed kean 3am wel3ab bel radio taba3o. Jarrab yefham shou ya3ne "AM-FM". Eja Abu Steif w allo: shoo 3am ta3mel ya Abu El Abed? Abu El Abed: lak ya khayyeh ma 3am befham shou ya3neh el FM wala el AM. Tala3 fi hek abu seif w allo: ya 7hmar, FM ya3ne fee mussi2a, w AM ya3ne 2afish musi2a!`
  },
  {
    joke: `Abu El Abed la7az eno ktir 3alam ma 3am tedfa3 bel bus w 3am ywarjo bit2a lal chauffeur. Ra7 Abu El Abed 3al beit w fatash 3a bita2a. 2am la2a shhedit jawezo. Tene marra, toli3 3al bus w warja el chauffeur el bita2a. El chauffeur: Habibi, hay btirkab fiya bel beit, mesh bel bus.`
  },
  {
    joke: `Marra Abu El Abed 2arrar yesh7ad masare. 3ala idteyno la yesh7ad. El 3alam tala3it fi w sa2leto leh 3am testa3mil idten wel sha7adin byestaemlo iid wa7de bel 3adeh. Rad Abu El Abed: rfi2e Abu Steif ra7 ye7dar film w sa2alne esh7ad 3anno.`
  },
  {
    joke: `Marra wa2t el 7arb, el kasef arrab 3al Basta. Abu El Abed 3ayyat: Ya Em El Abed, yalla 3ala el malja2 Em El Abed: Ntor 5 d2ayyi2. Abu El Abed: Ya Em El Abed, el kasef 3am bye2wa, 3ajleh ya mara Em El Abed ma raddit w ba3d shway Abu El Abed byerja3 b3ayit. Abu El Abed: Chou 3am ti3amleh ya mara. Em El Abed: 3am bjib el wajbeh (false teeth). Abu El Abed: Chou 3am byou2sfou bascot!!!`
  },
  {
    joke: `Mara Abu El Abed asked Abu Steif Abu El Abed: iza el-batata racha7het shou bet2oul lamma to3tos? Abu steif fakkar fiya bas ma la2a jaweb. Abu El Abed: bt2oul tttchippsssss. tayyeb halmarra iza el-banadura racha7het kif bto3tos? Abu steif kamen fakkar fiya bas ma la2a jaweb.. Abu El Abed: bt2oul kakatttchapppppp. Ok hayde hayne shu iza el 7amda racha7het? AS: bzon bt2oul 7a7a7amdaaaaa. Abu El Abed do7ik 3le w allo: ya zalame lesh el 7amda aslan betrache7. ma kella vitaminet.`
  },
  {
    joke: `Abu El Abed n3azam 3a 3id miled w ma bya3rif shu ya3neh 3id miled. Nbasat Abu El Abed w bel ekhir 2allon: 3eed miledkom el jey 3ende ya jame3ah.`
  },
  {
    joke: `Abu El Abed sa2al Abu Steif: shoul fare2 ben el Titanic w Fify Abdu (belly dancer)? Abu Steif: Sho houweh? Abu El Abed: Titanic bi ya3rfo adeh rukebha bas ma bya3rfo adeh rukeb Fify Abdo!`
  }
   {
    "joke": "Marra Abu El Abed and Abu Steif 3am bi dakhnou hashish w mastouleen 3al akheer.\n\nAbu steif: Abu El Abed...sme3et..el amercan tel3ou 3al amar.\n\nAbu El Abed nos fayi2 w 3youno mfanjrin sa2al: Shou? Kellon??"
  },
  {
    "joke": "Abu Abed 3am ydo2 3al beit; el san3a radit...\n\nAbu El Abed: Ma3ik el monsieur, 3atine el madame.\n\nEl san3a: Ma fine, el madame neyme ma3 el monsieur.\n\nAbu El Abed (m3asab): Ya hmara, ana el monsieur wel madame 3am tkhoune! Jibeh el fared w awsiyon w rja3ileh.\n\nBtnafiz el san3a el awemir\n\nAbu El Abed: Hala2 at3iyon ota3 w 7otiyon b kyes plastic.\n\nBtnafiz el san3a el awemir\n\nAbu El Abed: 7otteh el kyes bel kabou.\n\nEl san3a: Bas monsieur ma 3ana kabou bel beit.\n\nAbu El Abed: mesh heyda 01 345012?\n\nEl san3a: la heyda 01 345011\n\nAbu El Abed: Sorry ma twekhzine mghalbat el ra2m."
  },
  {
    "joke": "Abu El Abed and Abu Steif 3am ye7ko 3an wledon..\n\nAbu Steif: Ebne Moustafe ktir zake, shi yom 7a ysir mohandis.\n\nAbu El Abed: Kif bta3rif hal shi?\n\nAbu Steif: Ntor. ya Moutafe, fe wahed bekoun ibn bayek bas mesh khayek, min hayde?\n\nMostafe: hayda ane.\n\nAbu El Abed nbahar w sar bado ya3rif iza Abed zake ad Moustafe. Bas reji3 3al beit sa2alo nafs el so2al.\n\nAbed: Khaline fakir w berja3lak.\n\nDahar mn el beit w sa2al rfi2o Zakour w jewabo: Heyde ane.\n\nAbed alo la bayyo: Hayde Zakour.\n\nAbu El Abed: il3ama shou hmar, hayde Moustafe ya bhim."
  },
  {
    "joke": "Abu El Abed w Abu Steif 3am ysefro fo2 europa…\n\nAbu Steif (3am yetala3 mn el shebek): Ayya balad heyde?\n\nAbu El Abed: Heyde Czechoslovakia.\n\nBa3d 3 se3at..\n\nAbu Steif (3am yetala3 mnl shebek marra tenye): tab ayya balid heyde?\n\nAbu El Abed (tala3 la ta7t): heyde Czechoslovakia.\n\nAbu Steif: Mn shway kenit Czechoslovakia..\n\nAbu El Abed: el 2oula elta7teh, wel tenyeh elfawka!"
  },
  {
    "joke": "Marra Abu El Abed (AA) arrar ysefir 3a america w yefta7 business w sar ybi3 tyeb w ferash.\n\nBa3d 6 ashhor da2 la Em El Abed w 2alla: Em El Abed doubi chantek w ta3eh la hawn.\n\nEm El Abed: Leish ya Abu El Abed?\n\nAbu El Abed: Be3et miyet farsheh w khams miyet kilot w rbehet 150 000 Dollar.\n\nEm El Abed: Eh enta doub chantak w ta3a la hawn. Ana bi farsheh wa7deh w bala kilot rbehet 200 000 Dollar."
  },
  {
    "joke": "Abu El Abed w Abu Steif badon ykamlo 3elmon b america. El jem3a 3ateton forums la y3abouwon, w 3al forum se2lin shu esem madreston.\n\nAbu El Abed katab: I don't know\n\nAbu Steif katab: I didn't mean it.\n\nWa2ta sa2louwon shu azdon.\n\nAbu El Abed: Kenet bel ma3aref.\n\nAbu Steif: Kenet bel makassed."
  },
  {
    "joke": "Abu El Abed fata7 mat3ab bedl Ashrafieh. 7at yafta 3leya esem el taba2 el yawmeh.\n\nMara mar2a sa2lit Abu El Abed: shou el plat du jour lyaoum?\n\nAbu El Abed: Wara2 3enab malffouf.\n\nEl mara: J'aime beacoup ca. (I like that a lot)\n\nAbu El Abed: La2 jambo laban mesh kousa."
  },
  {
    "joke": "Abed ra7 ysajil b madrase w 3ando emti7an dokhoul. El m3almeh sa2leto: iza fi 3 3safir 3a shrit kahrabeh, w wa7ad tar kam 3asfour fi?\n\nAbed: Wala wa7ad.\n\nEl m3almeh: Leish?\n\nAbed: La2ano ma3rouf bas ytir 3asfour byel7a2ou el ba2yin.\n\nEl m3almeh: La2, Abed. El jaweb 2 bas by3jebneh tefkirak.\n\nAbed: khalineh es2alik so2al ya madam. iza fi 3 neswen 3am yeklo korneh bouza. Wa7de 3am tel7aso, el tenye 3am tmosso, wel telte 3am tekedsho. Ayya wa7deh mjawzeh?\n\nEl m3almeh: Ma ba3rif, eli 3am tmosso?\n\nAbed: La2, el lebse khatam jawez bas by3jebneh tefkirik."
  },
  {
    "joke": "Marra Abu El Abed t2akhar 3al shoghol, fa ken 3am y2asri3 w khabas zalameh.\n\nAbu El Abed wa2af el sayara w nezil yetaman 3al zalameh.\n\nEl zalame: Shou mesh sheyefneh?\n\nAbu El Abed: Mbaleh, bass mesh zaker wayn."
  },
  {
    "joke": "Marra Abu El Abed ken a3id bel Manara w la2a mosbeh adim. Jarab ynadfo w balash yeferko w faj2a, tolo3lo jenneh...\n\nEl jenneh: SHEBEIK LEBEIK Abdak bein eideyk. w allo la Abu El Abed 3ando omniyeh wa7de\n\nFakar shway Abu El Abed w alo lal jenneh: Ya jenneh bede autostrad mn hol la obros (Cyprus).\n\nEl jenneh: Ya Abu El Abed bta3rif enneh jenneh kbir w khatyaret, ma fi shi ahyan?\n\nAbu El Abed: Fi shi wa7ad, tari2it tefkir Em El Abed. Leh aw2at mabsouta w aw2at za3leneh, shu bye3jeba w shu la2. Fik tkhalineh efham 3keya?\n\nEl jenneh: w kam khat badak yeh lal autostrad?"
  }
];


app.get("/api/joke", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

app.get("/", (req, res) => {
  res.send("Ahlen w sahleen fik b API Abu El Abed. Try /api/joke for a random joke. contact: abuelabed@naous.eu.org");
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
