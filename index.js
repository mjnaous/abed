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
    joke: `Abu El Abed sa2al Abu Steif: shoul fare2 ben el Titanic 2 Fify Abdu (belly dancer)? Abu Steif: Sho houweh? Abu El Abed: Titanic bi ya3rfo adeh rukebha bas ma bya3rfo adeh rukeb Fify Abdo!`
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
