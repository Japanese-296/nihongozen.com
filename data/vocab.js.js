'use strict';
/**
 * NihongoZen — Vocabulary Page
 * 2104 words · 77 categories
 * Converted from vocab.tsx — same style, layout, audio functionality
 */


/* =========================================================
   VOCAB PAGE CSS — injected into <head> on mount
   Copy these styles into your components.css if needed
   ========================================================= */
(function injectVocabStyles() {
  if (document.getElementById('vocab-page-styles')) return;
  const style = document.createElement('style');
  style.id = 'vocab-page-styles';
  style.textContent = `
    #vocab-cat-tabs::-webkit-scrollbar { display: none; }

    /* Flip card */
    #vocab-flip-inner.flipped { transform: rotateY(180deg); }

    /* Equalizer animation */
    .nz-eq {
      display: flex; align-items: flex-end; gap: 2px; height: 14px;
    }
    .nz-eq-bar {
      width: 3px; border-radius: 2px;
      background: var(--primary);
      animation: nzEqBounce 0.8s ease-in-out infinite;
    }
    .nz-eq-bar:nth-child(1) { animation-delay: 0s;    height: 6px; }
    .nz-eq-bar:nth-child(2) { animation-delay: 0.15s; height: 12px; }
    .nz-eq-bar:nth-child(3) { animation-delay: 0.3s;  height: 8px; }
    @keyframes nzEqBounce {
      0%,100% { transform: scaleY(0.4); }
      50%      { transform: scaleY(1);   }
    }

    /* Card hover */
    .vocab-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }
  `;
  document.head.appendChild(style);
})();

/* =========================================================
   VOCAB DATA — 2104 words across 77 categories
   ========================================================= */
const VocabPageWords = [
  {id:'v-0001',jp:'挨拶する',romaji:'aisatsu suru',en:'to greet',category:'Greetings',color:'var(--n5)'},
  {id:'v-0002',jp:'元気？',romaji:'genki?',en:'How are you?',category:'Greetings',color:'var(--n5)'},
  {id:'v-0003',jp:'さようなら',romaji:'sayōnara',en:'goodbye',category:'Greetings',color:'var(--n5)'},
  {id:'v-0004',jp:'バイバイ',romaji:'baibai',en:'bye (fam.)',category:'Greetings',color:'var(--n5)'},
  {id:'v-0005',jp:'じゃあね',romaji:'jā ne',en:'see you soon',category:'Greetings',color:'var(--n5)'},
  {id:'v-0006',jp:'さらば',romaji:'saraba',en:'farewell',category:'Greetings',color:'var(--n5)'},
  {id:'v-0007',jp:'またね',romaji:'mata ne',en:'so long',category:'Greetings',color:'var(--n5)'},
  {id:'v-0008',jp:'ありがとう',romaji:'arigatō',en:'thank you',category:'Greetings',color:'var(--n5)'},
  {id:'v-0009',jp:'どうもありがとう',romaji:'dōmo arigatō',en:'thank you very much',category:'Greetings',color:'var(--n5)'},
  {id:'v-0010',jp:'どういたしまして',romaji:'dōitashimashite',en:'you\\\'re welcome',category:'Greetings',color:'var(--n5)'},
  {id:'v-0011',jp:'失礼',romaji:'shitsurei',en:'excuse me',category:'Greetings',color:'var(--n5)'},
  {id:'v-0012',jp:'ごめんなさい',romaji:'gomennasai',en:'I\\\'m sorry',category:'Greetings',color:'var(--n5)'},
  {id:'v-0013',jp:'大丈夫です',romaji:'daijōbu desu',en:'it\\\'s okay',category:'Greetings',color:'var(--n5)'},
  {id:'v-0014',jp:'お願い',romaji:'onegai',en:'please',category:'Greetings',color:'var(--n5)'},
  {id:'v-0015',jp:'もちろん',romaji:'mochiron',en:'certainly',category:'Greetings',color:'var(--n5)'},
  {id:'v-0016',jp:'こんにちは！',romaji:'konnichiwa!',en:'Hello! (formal)',category:'Greetings',color:'var(--n5)'},
  {id:'v-0017',jp:'やあ！',romaji:'yā!',en:'Hello! (familiar)',category:'Greetings',color:'var(--n5)'},
  {id:'v-0018',jp:'おはよう！',romaji:'ohayō!',en:'Good morning!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0019',jp:'こんばんは！',romaji:'konbanwa!',en:'Good evening!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0020',jp:'おやすみなさい',romaji:'oyasuminasai',en:'Good night',category:'Greetings',color:'var(--n5)'},
  {id:'v-0021',jp:'さようなら！',romaji:'sayōnara!',en:'Goodbye! (formal)',category:'Greetings',color:'var(--n5)'},
  {id:'v-0022',jp:'バイバイ！',romaji:'baibai!',en:'Bye! (familiar)',category:'Greetings',color:'var(--n5)'},
  {id:'v-0023',jp:'じゃあね！',romaji:'jā ne!',en:'See you soon!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0024',jp:'さらば！',romaji:'saraba!',en:'Farewell!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0025',jp:'またね！',romaji:'mata ne!',en:'So long!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0026',jp:'別れを告げる',romaji:'wakare wo tsugeru',en:'to say goodbye',category:'Greetings',color:'var(--n5)'},
  {id:'v-0027',jp:'ありがとう！',romaji:'arigatō!',en:'Thank you!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0028',jp:'どうもありがとう！',romaji:'dōmo arigatō!',en:'Thank you very much!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0029',jp:'礼なんていいよ',romaji:'rei nante ī yo',en:'Don\\\'t mention it!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0030',jp:'失礼！',romaji:'shitsurei!',en:'Excuse me! (familiar)',category:'Greetings',color:'var(--n5)'},
  {id:'v-0031',jp:'失礼致します！',romaji:'shitsurei itashi masu!',en:'Excuse me! (formal)',category:'Greetings',color:'var(--n5)'},
  {id:'v-0032',jp:'ごめんなさい！',romaji:'gomennasai!',en:'I\\\'m sorry!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0033',jp:'おわび致します！',romaji:'owabi itashi masu!',en:'My apologies',category:'Greetings',color:'var(--n5)'},
  {id:'v-0034',jp:'大丈夫です！',romaji:'daijōbu desu!',en:'It\\\'s okay!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0035',jp:'忘れないで！',romaji:'wasure nai de!',en:'Don\\\'t forget!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0036',jp:'もちろん！',romaji:'mochiron!',en:'Certainly!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0037',jp:'オーケー！',romaji:'ōkē!',en:'Okay! (I agree)',category:'Greetings',color:'var(--n5)'},
  {id:'v-0038',jp:'もう十分だ！',romaji:'mō jūbun da!',en:'That\\\'s enough!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0039',jp:'そんなことないよ！',romaji:'sonna koto nai yo!',en:'Of course not!',category:'Greetings',color:'var(--n5)'},
  {id:'v-0040',jp:'誰',romaji:'dare',en:'who?',category:'Questions',color:'var(--n5)'},
  {id:'v-0041',jp:'何',romaji:'nani',en:'what?',category:'Questions',color:'var(--n5)'},
  {id:'v-0042',jp:'どこに',romaji:'doko ni',en:'where?',category:'Questions',color:'var(--n5)'},
  {id:'v-0043',jp:'いつ',romaji:'itsu',en:'when?',category:'Questions',color:'var(--n5)'},
  {id:'v-0044',jp:'なんで',romaji:'nande',en:'why?',category:'Questions',color:'var(--n5)'},
  {id:'v-0045',jp:'どうして',romaji:'dōshite',en:'why? (reason)',category:'Questions',color:'var(--n5)'},
  {id:'v-0046',jp:'どうやって',romaji:'dō yatte',en:'how?',category:'Questions',color:'var(--n5)'},
  {id:'v-0047',jp:'いくつ',romaji:'ikutsu',en:'how many?',category:'Questions',color:'var(--n5)'},
  {id:'v-0048',jp:'いくら',romaji:'ikura',en:'how much?',category:'Questions',color:'var(--n5)'},
  {id:'v-0049',jp:'誰のもの',romaji:'dare no mono',en:'whose?',category:'Questions',color:'var(--n5)'},
  {id:'v-0050',jp:'どこに？',romaji:'doko ni?',en:'Where? (at/in)',category:'Questions',color:'var(--n5)'},
  {id:'v-0051',jp:'どちらへ？',romaji:'dochira he?',en:'Where (to)?',category:'Questions',color:'var(--n5)'},
  {id:'v-0052',jp:'どこから？',romaji:'doko kara?',en:'From where?',category:'Questions',color:'var(--n5)'},
  {id:'v-0053',jp:'どちらの…？',romaji:'dochira no...?',en:'Which?',category:'Questions',color:'var(--n5)'},
  {id:'v-0054',jp:'どんな？',romaji:'donna?',en:'What kind of?',category:'Questions',color:'var(--n5)'},
  {id:'v-0055',jp:'ここで',romaji:'kokode',en:'here',category:'Function Words',color:'var(--n5)'},
  {id:'v-0056',jp:'そこで',romaji:'sokode',en:'there',category:'Function Words',color:'var(--n5)'},
  {id:'v-0057',jp:'前に',romaji:'mae ni',en:'in front / before',category:'Function Words',color:'var(--n5)'},
  {id:'v-0058',jp:'後ろに',romaji:'ushiro ni',en:'behind',category:'Function Words',color:'var(--n5)'},
  {id:'v-0059',jp:'真っ直ぐに',romaji:'massugu ni',en:'straight',category:'Function Words',color:'var(--n5)'},
  {id:'v-0060',jp:'今',romaji:'ima',en:'now',category:'Function Words',color:'var(--n5)'},
  {id:'v-0061',jp:'よく',romaji:'yoku',en:'often',category:'Function Words',color:'var(--n5)'},
  {id:'v-0062',jp:'普通は',romaji:'futsū wa',en:'usually',category:'Function Words',color:'var(--n5)'},
  {id:'v-0063',jp:'恐らく',romaji:'osoraku',en:'probably',category:'Function Words',color:'var(--n5)'},
  {id:'v-0064',jp:'とても',romaji:'totemo',en:'very',category:'Function Words',color:'var(--n5)'},
  {id:'v-0065',jp:'また',romaji:'mata',en:'also',category:'Function Words',color:'var(--n5)'},
  {id:'v-0066',jp:'ゼロ',romaji:'zero',en:'zero',category:'Numbers',color:'var(--n5)'},
  {id:'v-0067',jp:'一',romaji:'ichi',en:'one',category:'Numbers',color:'var(--n5)'},
  {id:'v-0068',jp:'二',romaji:'ni',en:'two',category:'Numbers',color:'var(--n5)'},
  {id:'v-0069',jp:'三',romaji:'san',en:'three',category:'Numbers',color:'var(--n5)'},
  {id:'v-0070',jp:'四',romaji:'yon',en:'four',category:'Numbers',color:'var(--n5)'},
  {id:'v-0071',jp:'五',romaji:'go',en:'five',category:'Numbers',color:'var(--n5)'},
  {id:'v-0072',jp:'六',romaji:'roku',en:'six',category:'Numbers',color:'var(--n5)'},
  {id:'v-0073',jp:'七',romaji:'nana',en:'seven',category:'Numbers',color:'var(--n5)'},
  {id:'v-0074',jp:'八',romaji:'hachi',en:'eight',category:'Numbers',color:'var(--n5)'},
  {id:'v-0075',jp:'九',romaji:'kyū',en:'nine',category:'Numbers',color:'var(--n5)'},
  {id:'v-0076',jp:'十',romaji:'jū',en:'ten',category:'Numbers',color:'var(--n5)'},
  {id:'v-0077',jp:'百',romaji:'hyaku',en:'hundred',category:'Numbers',color:'var(--n5)'},
  {id:'v-0078',jp:'千',romaji:'sen',en:'thousand',category:'Numbers',color:'var(--n5)'},
  {id:'v-0079',jp:'一万',romaji:'ichiman',en:'ten thousand',category:'Numbers',color:'var(--n5)'},
  {id:'v-0080',jp:'百万',romaji:'hyakuman',en:'one million',category:'Numbers',color:'var(--n5)'},
  {id:'v-0081',jp:'十一',romaji:'jū ichi',en:'eleven',category:'Numbers',color:'var(--n5)'},
  {id:'v-0082',jp:'十二',romaji:'jū ni',en:'twelve',category:'Numbers',color:'var(--n5)'},
  {id:'v-0083',jp:'十三',romaji:'jū san',en:'thirteen',category:'Numbers',color:'var(--n5)'},
  {id:'v-0084',jp:'十四',romaji:'jū yon',en:'fourteen',category:'Numbers',color:'var(--n5)'},
  {id:'v-0085',jp:'十五',romaji:'jū go',en:'fifteen',category:'Numbers',color:'var(--n5)'},
  {id:'v-0086',jp:'十六',romaji:'jū roku',en:'sixteen',category:'Numbers',color:'var(--n5)'},
  {id:'v-0087',jp:'十七',romaji:'jū shichi',en:'seventeen',category:'Numbers',color:'var(--n5)'},
  {id:'v-0088',jp:'十八',romaji:'jū hachi',en:'eighteen',category:'Numbers',color:'var(--n5)'},
  {id:'v-0089',jp:'十九',romaji:'jū kyū',en:'nineteen',category:'Numbers',color:'var(--n5)'},
  {id:'v-0090',jp:'二十',romaji:'ni jū',en:'twenty',category:'Numbers',color:'var(--n5)'},
  {id:'v-0091',jp:'二十一',romaji:'ni jū ichi',en:'twenty-one',category:'Numbers',color:'var(--n5)'},
  {id:'v-0092',jp:'二十二',romaji:'ni jū ni',en:'twenty-two',category:'Numbers',color:'var(--n5)'},
  {id:'v-0093',jp:'三十',romaji:'san jū',en:'thirty',category:'Numbers',color:'var(--n5)'},
  {id:'v-0094',jp:'四十',romaji:'yon jū',en:'forty',category:'Numbers',color:'var(--n5)'},
  {id:'v-0095',jp:'五十',romaji:'go jū',en:'fifty',category:'Numbers',color:'var(--n5)'},
  {id:'v-0096',jp:'六十',romaji:'roku jū',en:'sixty',category:'Numbers',color:'var(--n5)'},
  {id:'v-0097',jp:'七十',romaji:'nana jū',en:'seventy',category:'Numbers',color:'var(--n5)'},
  {id:'v-0098',jp:'八十',romaji:'hachi jū',en:'eighty',category:'Numbers',color:'var(--n5)'},
  {id:'v-0099',jp:'九十',romaji:'kyū jū',en:'ninety',category:'Numbers',color:'var(--n5)'},
  {id:'v-0100',jp:'二百',romaji:'ni hyaku',en:'two hundred',category:'Numbers',color:'var(--n5)'},
  {id:'v-0101',jp:'三百',romaji:'san byaku',en:'three hundred',category:'Numbers',color:'var(--n5)'},
  {id:'v-0102',jp:'四百',romaji:'yon hyaku',en:'four hundred',category:'Numbers',color:'var(--n5)'},
  {id:'v-0103',jp:'五百',romaji:'go hyaku',en:'five hundred',category:'Numbers',color:'var(--n5)'},
  {id:'v-0104',jp:'六百',romaji:'roppyaku',en:'six hundred',category:'Numbers',color:'var(--n5)'},
  {id:'v-0105',jp:'七百',romaji:'nana hyaku',en:'seven hundred',category:'Numbers',color:'var(--n5)'},
  {id:'v-0106',jp:'八百',romaji:'happyaku',en:'eight hundred',category:'Numbers',color:'var(--n5)'},
  {id:'v-0107',jp:'九百',romaji:'kyū hyaku',en:'nine hundred',category:'Numbers',color:'var(--n5)'},
  {id:'v-0108',jp:'二千',romaji:'nisen',en:'two thousand',category:'Numbers',color:'var(--n5)'},
  {id:'v-0109',jp:'10万',romaji:'jyūman',en:'one hundred thousand',category:'Numbers',color:'var(--n5)'},
  {id:'v-0110',jp:'十億',romaji:'jūoku',en:'one billion',category:'Numbers',color:'var(--n5)'},
  {id:'v-0111',jp:'第一の',romaji:'dai ichi no',en:'first',category:'Numbers',color:'var(--n5)'},
  {id:'v-0112',jp:'第二の',romaji:'dai ni no',en:'second',category:'Numbers',color:'var(--n5)'},
  {id:'v-0113',jp:'第三の',romaji:'dai san no',en:'third',category:'Numbers',color:'var(--n5)'},
  {id:'v-0114',jp:'第四の',romaji:'dai yon no',en:'fourth',category:'Numbers',color:'var(--n5)'},
  {id:'v-0115',jp:'第五の',romaji:'dai go no',en:'fifth',category:'Numbers',color:'var(--n5)'},
  {id:'v-0116',jp:'第六の',romaji:'dai roku no',en:'sixth',category:'Numbers',color:'var(--n5)'},
  {id:'v-0117',jp:'第七の',romaji:'dai nana no',en:'seventh',category:'Numbers',color:'var(--n5)'},
  {id:'v-0118',jp:'第八の',romaji:'dai hachi no',en:'eighth',category:'Numbers',color:'var(--n5)'},
  {id:'v-0119',jp:'第九の',romaji:'dai kyū no',en:'ninth',category:'Numbers',color:'var(--n5)'},
  {id:'v-0120',jp:'第十の',romaji:'dai jū no',en:'tenth',category:'Numbers',color:'var(--n5)'},
  {id:'v-0121',jp:'白い',romaji:'shiroi',en:'white',category:'Colors',color:'var(--n4)'},
  {id:'v-0122',jp:'黒い',romaji:'kuroi',en:'black',category:'Colors',color:'var(--n4)'},
  {id:'v-0123',jp:'赤い',romaji:'akai',en:'red',category:'Colors',color:'var(--n4)'},
  {id:'v-0124',jp:'青い',romaji:'aoi',en:'blue',category:'Colors',color:'var(--n4)'},
  {id:'v-0125',jp:'緑の',romaji:'midori no',en:'green',category:'Colors',color:'var(--n4)'},
  {id:'v-0126',jp:'黄色い',romaji:'kīroi',en:'yellow',category:'Colors',color:'var(--n4)'},
  {id:'v-0127',jp:'ピンクの',romaji:'pinku no',en:'pink',category:'Colors',color:'var(--n4)'},
  {id:'v-0128',jp:'オレンジの',romaji:'orenji no',en:'orange',category:'Colors',color:'var(--n4)'},
  {id:'v-0129',jp:'紫色の',romaji:'murasaki iro no',en:'violet',category:'Colors',color:'var(--n4)'},
  {id:'v-0130',jp:'茶色の',romaji:'chairo no',en:'brown',category:'Colors',color:'var(--n4)'},
  {id:'v-0131',jp:'灰色の',romaji:'haīro no',en:'gray',category:'Colors',color:'var(--n4)'},
  {id:'v-0132',jp:'金色の',romaji:'kiniro no',en:'golden',category:'Colors',color:'var(--n4)'},
  {id:'v-0133',jp:'色',romaji:'iro',en:'color',category:'Colors',color:'var(--n4)'},
  {id:'v-0134',jp:'色合い',romaji:'iroai',en:'shade/tint',category:'Colors',color:'var(--n4)'},
  {id:'v-0135',jp:'虹',romaji:'niji',en:'rainbow',category:'Colors',color:'var(--n4)'},
  {id:'v-0136',jp:'水色の',romaji:'mizu iro no',en:'light blue',category:'Colors',color:'var(--n4)'},
  {id:'v-0137',jp:'銀色の',romaji:'giniro no',en:'silvery',category:'Colors',color:'var(--n4)'},
  {id:'v-0138',jp:'ベージュの',romaji:'bēju no',en:'beige',category:'Colors',color:'var(--n4)'},
  {id:'v-0139',jp:'クリームの',romaji:'kurīmu no',en:'cream',category:'Colors',color:'var(--n4)'},
  {id:'v-0140',jp:'ターコイズブルーの',romaji:'tākoizuburū no',en:'turquoise',category:'Colors',color:'var(--n4)'},
  {id:'v-0141',jp:'クリムゾンの',romaji:'kurimuzon no',en:'crimson',category:'Colors',color:'var(--n4)'},
  {id:'v-0142',jp:'薄い',romaji:'usui',en:'light (color)',category:'Colors',color:'var(--n4)'},
  {id:'v-0143',jp:'濃い',romaji:'koi',en:'dark (color)',category:'Colors',color:'var(--n4)'},
  {id:'v-0144',jp:'鮮やかな',romaji:'azayaka na',en:'bright/vivid',category:'Colors',color:'var(--n4)'},
  {id:'v-0145',jp:'色とりどりの',romaji:'irotoridori no',en:'multicolored',category:'Colors',color:'var(--n4)'},
  {id:'v-0146',jp:'単色の',romaji:'tanshoku no',en:'plain/one-colored',category:'Colors',color:'var(--n4)'},
  {id:'v-0147',jp:'月曜日',romaji:'getsuyōbi',en:'Monday',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0148',jp:'火曜日',romaji:'kayōbi',en:'Tuesday',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0149',jp:'水曜日',romaji:'suiyōbi',en:'Wednesday',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0150',jp:'木曜日',romaji:'mokuyōbi',en:'Thursday',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0151',jp:'金曜日',romaji:'kinyōbi',en:'Friday',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0152',jp:'土曜日',romaji:'doyōbi',en:'Saturday',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0153',jp:'日曜日',romaji:'nichiyōbi',en:'Sunday',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0154',jp:'明後日',romaji:'asatte',en:'the day after tomorrow',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0155',jp:'一昨日',romaji:'ototoi',en:'the day before yesterday',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0156',jp:'営業日',romaji:'eigyōbi',en:'working day',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0157',jp:'公休',romaji:'kōkyū',en:'public holiday',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0158',jp:'休み',romaji:'yasumi',en:'day off',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0159',jp:'一日中',romaji:'ichi nichi chū',en:'all day long',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0160',jp:'翌日',romaji:'yokujitsu',en:'next day',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0161',jp:'2日前に',romaji:'futsu ka mae ni',en:'two days ago',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0162',jp:'毎日の',romaji:'mainichi no',en:'daily',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0163',jp:'毎日',romaji:'mainichi',en:'every day',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0164',jp:'週',romaji:'shū',en:'week',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0165',jp:'先週',romaji:'senshū',en:'last week',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0166',jp:'来週',romaji:'raishū',en:'next week',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0167',jp:'毎週',romaji:'maishū',en:'every week',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0168',jp:'週に2回',romaji:'shū ni nikai',en:'twice a week',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0169',jp:'週末',romaji:'shūmatsu',en:'weekend',category:'Weekdays',color:'var(--n5)'},
  {id:'v-0170',jp:'今日',romaji:'kyō',en:'today',category:'Time',color:'var(--n5)'},
  {id:'v-0171',jp:'明日',romaji:'ashita',en:'tomorrow',category:'Time',color:'var(--n5)'},
  {id:'v-0172',jp:'昨日',romaji:'kinō',en:'yesterday',category:'Time',color:'var(--n5)'},
  {id:'v-0173',jp:'朝',romaji:'asa',en:'morning',category:'Time',color:'var(--n5)'},
  {id:'v-0174',jp:'正午',romaji:'shōgo',en:'noon',category:'Time',color:'var(--n5)'},
  {id:'v-0175',jp:'夕方',romaji:'yūgata',en:'evening',category:'Time',color:'var(--n5)'},
  {id:'v-0176',jp:'夜',romaji:'yoru',en:'night',category:'Time',color:'var(--n5)'},
  {id:'v-0177',jp:'真夜中',romaji:'mayonaka',en:'midnight',category:'Time',color:'var(--n5)'},
  {id:'v-0178',jp:'午後',romaji:'gogo',en:'afternoon',category:'Time',color:'var(--n5)'},
  {id:'v-0179',jp:'秒',romaji:'byō',en:'second (time)',category:'Time',color:'var(--n5)'},
  {id:'v-0180',jp:'分',romaji:'fun',en:'minute',category:'Time',color:'var(--n5)'},
  {id:'v-0181',jp:'時間',romaji:'jikan',en:'hour',category:'Time',color:'var(--n5)'},
  {id:'v-0182',jp:'15分',romaji:'jū go fun',en:'quarter of an hour',category:'Time',color:'var(--n5)'},
  {id:'v-0183',jp:'一昼夜',romaji:'icchūya',en:'24 hours',category:'Time',color:'var(--n5)'},
  {id:'v-0184',jp:'日の出',romaji:'hinode',en:'sunrise',category:'Time',color:'var(--n5)'},
  {id:'v-0185',jp:'夜明け',romaji:'yoake',en:'dawn',category:'Time',color:'var(--n5)'},
  {id:'v-0186',jp:'早朝',romaji:'sōchō',en:'early morning',category:'Time',color:'var(--n5)'},
  {id:'v-0187',jp:'夕日',romaji:'yūhi',en:'sunset',category:'Time',color:'var(--n5)'},
  {id:'v-0188',jp:'昼も夜も',romaji:'hiru mo yoru mo',en:'round the clock',category:'Time',color:'var(--n5)'},
  {id:'v-0189',jp:'一月',romaji:'ichigatsu',en:'January',category:'Months',color:'var(--n5)'},
  {id:'v-0190',jp:'二月',romaji:'nigatsu',en:'February',category:'Months',color:'var(--n5)'},
  {id:'v-0191',jp:'三月',romaji:'sangatsu',en:'March',category:'Months',color:'var(--n5)'},
  {id:'v-0192',jp:'四月',romaji:'shigatsu',en:'April',category:'Months',color:'var(--n5)'},
  {id:'v-0193',jp:'五月',romaji:'gogatsu',en:'May',category:'Months',color:'var(--n5)'},
  {id:'v-0194',jp:'六月',romaji:'rokugatsu',en:'June',category:'Months',color:'var(--n5)'},
  {id:'v-0195',jp:'七月',romaji:'shichigatsu',en:'July',category:'Months',color:'var(--n5)'},
  {id:'v-0196',jp:'八月',romaji:'hachigatsu',en:'August',category:'Months',color:'var(--n5)'},
  {id:'v-0197',jp:'九月',romaji:'kugatsu',en:'September',category:'Months',color:'var(--n5)'},
  {id:'v-0198',jp:'十月',romaji:'jūgatsu',en:'October',category:'Months',color:'var(--n5)'},
  {id:'v-0199',jp:'十一月',romaji:'jūichigatsu',en:'November',category:'Months',color:'var(--n5)'},
  {id:'v-0200',jp:'十二月',romaji:'jūnigatsu',en:'December',category:'Months',color:'var(--n5)'},
  {id:'v-0201',jp:'季節',romaji:'kisetsu',en:'season',category:'Months',color:'var(--n5)'},
  {id:'v-0202',jp:'今月',romaji:'kongetsu',en:'this month',category:'Months',color:'var(--n5)'},
  {id:'v-0203',jp:'先月',romaji:'sengetsu',en:'last month',category:'Months',color:'var(--n5)'},
  {id:'v-0204',jp:'月刊の',romaji:'gekkan no',en:'monthly',category:'Months',color:'var(--n5)'},
  {id:'v-0205',jp:'年',romaji:'nen',en:'year',category:'Months',color:'var(--n5)'},
  {id:'v-0206',jp:'今年',romaji:'kotoshi',en:'this year',category:'Months',color:'var(--n5)'},
  {id:'v-0207',jp:'来年',romaji:'rainen',en:'next year',category:'Months',color:'var(--n5)'},
  {id:'v-0208',jp:'毎年の',romaji:'maitoshi no',en:'annual',category:'Months',color:'var(--n5)'},
  {id:'v-0209',jp:'世紀',romaji:'seiki',en:'century',category:'Months',color:'var(--n5)'},
  {id:'v-0210',jp:'カレンダー',romaji:'karendā',en:'calendar',category:'Months',color:'var(--n5)'},
  {id:'v-0211',jp:'半年',romaji:'hantoshi',en:'half a year',category:'Months',color:'var(--n5)'},
  {id:'v-0212',jp:'日付',romaji:'hizuke',en:'date (today\\\'s)',category:'Months',color:'var(--n5)'},
  {id:'v-0213',jp:'春',romaji:'haru',en:'spring',category:'Seasons',color:'var(--n4)'},
  {id:'v-0214',jp:'夏',romaji:'natsu',en:'summer',category:'Seasons',color:'var(--n4)'},
  {id:'v-0215',jp:'秋',romaji:'aki',en:'autumn',category:'Seasons',color:'var(--n4)'},
  {id:'v-0216',jp:'冬',romaji:'fuyu',en:'winter',category:'Seasons',color:'var(--n4)'},
  {id:'v-0217',jp:'同意する',romaji:'dōi suru',en:'to agree',category:'Verbs',color:'var(--n4)'},
  {id:'v-0218',jp:'謝る',romaji:'ayamaru',en:'to apologize',category:'Verbs',color:'var(--n4)'},
  {id:'v-0219',jp:'始める',romaji:'hajimeru',en:'to begin',category:'Verbs',color:'var(--n4)'},
  {id:'v-0220',jp:'変える',romaji:'kaeru',en:'to change',category:'Verbs',color:'var(--n4)'},
  {id:'v-0221',jp:'選択する',romaji:'sentaku suru',en:'to choose',category:'Verbs',color:'var(--n4)'},
  {id:'v-0222',jp:'料理をする',romaji:'ryōri wo suru',en:'to cook',category:'Verbs',color:'var(--n4)'},
  {id:'v-0223',jp:'泣く',romaji:'naku',en:'to cry',category:'Verbs',color:'var(--n4)'},
  {id:'v-0224',jp:'だます',romaji:'damasu',en:'to deceive',category:'Verbs',color:'var(--n4)'},
  {id:'v-0225',jp:'見つける',romaji:'mitsukeru',en:'to find',category:'Verbs',color:'var(--n4)'},
  {id:'v-0226',jp:'飛ぶ',romaji:'tobu',en:'to fly',category:'Verbs',color:'var(--n4)'},
  {id:'v-0227',jp:'忘れる',romaji:'wasureru',en:'to forget',category:'Verbs',color:'var(--n4)'},
  {id:'v-0228',jp:'行く',romaji:'iku',en:'to go',category:'Verbs',color:'var(--n4)'},
  {id:'v-0229',jp:'持つ',romaji:'motsu',en:'to have',category:'Verbs',color:'var(--n4)'},
  {id:'v-0230',jp:'聞く',romaji:'kiku',en:'to hear',category:'Verbs',color:'var(--n4)'},
  {id:'v-0231',jp:'手伝う',romaji:'tetsudau',en:'to help',category:'Verbs',color:'var(--n4)'},
  {id:'v-0232',jp:'急ぐ',romaji:'isogu',en:'to hurry',category:'Verbs',color:'var(--n4)'},
  {id:'v-0233',jp:'笑う',romaji:'warau',en:'to laugh',category:'Verbs',color:'var(--n4)'},
  {id:'v-0234',jp:'愛する',romaji:'aisuru',en:'to love',category:'Verbs',color:'var(--n4)'},
  {id:'v-0235',jp:'開ける',romaji:'akeru',en:'to open',category:'Verbs',color:'var(--n4)'},
  {id:'v-0236',jp:'払う',romaji:'harau',en:'to pay',category:'Verbs',color:'var(--n4)'},
  {id:'v-0237',jp:'遊ぶ',romaji:'asobu',en:'to play',category:'Verbs',color:'var(--n4)'},
  {id:'v-0238',jp:'読む',romaji:'yomu',en:'to read',category:'Verbs',color:'var(--n4)'},
  {id:'v-0239',jp:'走る',romaji:'hashiru',en:'to run',category:'Verbs',color:'var(--n4)'},
  {id:'v-0240',jp:'見る',romaji:'miru',en:'to see',category:'Verbs',color:'var(--n4)'},
  {id:'v-0241',jp:'売る',romaji:'uru',en:'to sell',category:'Verbs',color:'var(--n4)'},
  {id:'v-0242',jp:'送る',romaji:'okuru',en:'to send',category:'Verbs',color:'var(--n4)'},
  {id:'v-0243',jp:'座る',romaji:'suwaru',en:'to sit down',category:'Verbs',color:'var(--n4)'},
  {id:'v-0244',jp:'話す',romaji:'hanasu',en:'to speak',category:'Verbs',color:'var(--n4)'},
  {id:'v-0245',jp:'盗む',romaji:'nusumu',en:'to steal',category:'Verbs',color:'var(--n4)'},
  {id:'v-0246',jp:'泳ぐ',romaji:'oyogu',en:'to swim',category:'Verbs',color:'var(--n4)'},
  {id:'v-0247',jp:'取る',romaji:'toru',en:'to take',category:'Verbs',color:'var(--n4)'},
  {id:'v-0248',jp:'思う',romaji:'omō',en:'to think',category:'Verbs',color:'var(--n4)'},
  {id:'v-0249',jp:'理解する',romaji:'rikai suru',en:'to understand',category:'Verbs',color:'var(--n4)'},
  {id:'v-0250',jp:'待つ',romaji:'matsu',en:'to wait',category:'Verbs',color:'var(--n4)'},
  {id:'v-0251',jp:'働く',romaji:'hataraku',en:'to work',category:'Verbs',color:'var(--n4)'},
  {id:'v-0252',jp:'書く',romaji:'kaku',en:'to write',category:'Verbs',color:'var(--n4)'},
  {id:'v-0253',jp:'助言する',romaji:'jogen suru',en:'to advise',category:'Verbs',color:'var(--n4)'},
  {id:'v-0254',jp:'回答する',romaji:'kaitō suru',en:'to answer',category:'Verbs',color:'var(--n4)'},
  {id:'v-0255',jp:'到着する',romaji:'tōchaku suru',en:'to arrive',category:'Verbs',color:'var(--n4)'},
  {id:'v-0256',jp:'問う',romaji:'tō',en:'to ask',category:'Verbs',color:'var(--n4)'},
  {id:'v-0257',jp:'ある',romaji:'aru',en:'to be',category:'Verbs',color:'var(--n4)'},
  {id:'v-0258',jp:'怖がる',romaji:'kowagaru',en:'to be afraid',category:'Verbs',color:'var(--n4)'},
  {id:'v-0259',jp:'腹をすかす',romaji:'hara wo sukasu',en:'to be hungry',category:'Verbs',color:'var(--n4)'},
  {id:'v-0260',jp:'興味がある',romaji:'kyōmi ga aru',en:'to be interested in',category:'Verbs',color:'var(--n4)'},
  {id:'v-0261',jp:'必要である',romaji:'hitsuyō de aru',en:'to be needed',category:'Verbs',color:'var(--n4)'},
  {id:'v-0262',jp:'驚く',romaji:'odoroku',en:'to be surprised',category:'Verbs',color:'var(--n4)'},
  {id:'v-0263',jp:'喉が渇く',romaji:'nodo ga kawaku',en:'to be thirsty',category:'Verbs',color:'var(--n4)'},
  {id:'v-0264',jp:'所有物である',romaji:'shoyū butsu de aru',en:'to belong to',category:'Verbs',color:'var(--n4)'},
  {id:'v-0265',jp:'自慢する',romaji:'jiman suru',en:'to boast',category:'Verbs',color:'var(--n4)'},
  {id:'v-0266',jp:'折る、壊す',romaji:'oru, kowasu',en:'to break',category:'Verbs',color:'var(--n4)'},
  {id:'v-0267',jp:'捕らえる',romaji:'toraeru',en:'to catch',category:'Verbs',color:'var(--n4)'},
  {id:'v-0268',jp:'比較する',romaji:'hikaku suru',en:'to compare',category:'Verbs',color:'var(--n4)'},
  {id:'v-0269',jp:'不平を言う',romaji:'fuhei wo iu',en:'to complain',category:'Verbs',color:'var(--n4)'},
  {id:'v-0270',jp:'混同する',romaji:'kondō suru',en:'to confuse',category:'Verbs',color:'var(--n4)'},
  {id:'v-0271',jp:'続ける',romaji:'tsuzukeru',en:'to continue',category:'Verbs',color:'var(--n4)'},
  {id:'v-0272',jp:'管制する',romaji:'kansei suru',en:'to control',category:'Verbs',color:'var(--n4)'},
  {id:'v-0273',jp:'かかる',romaji:'kakaru',en:'to cost',category:'Verbs',color:'var(--n4)'},
  {id:'v-0274',jp:'計算する',romaji:'keisan suru',en:'to count',category:'Verbs',color:'var(--n4)'},
  {id:'v-0275',jp:'創造する',romaji:'sōzō suru',en:'to create',category:'Verbs',color:'var(--n4)'},
  {id:'v-0276',jp:'防衛する',romaji:'bōei suru',en:'to defend',category:'Verbs',color:'var(--n4)'},
  {id:'v-0277',jp:'要求する',romaji:'yōkyū suru',en:'to demand',category:'Verbs',color:'var(--n4)'},
  {id:'v-0278',jp:'掘る',romaji:'horu',en:'to dig',category:'Verbs',color:'var(--n4)'},
  {id:'v-0279',jp:'討議する',romaji:'tōgi suru',en:'to discuss',category:'Verbs',color:'var(--n4)'},
  {id:'v-0280',jp:'する',romaji:'suru',en:'to do',category:'Verbs',color:'var(--n4)'},
  {id:'v-0281',jp:'疑う',romaji:'utagau',en:'to doubt',category:'Verbs',color:'var(--n4)'},
  {id:'v-0282',jp:'落とす',romaji:'otosu',en:'to drop',category:'Verbs',color:'var(--n4)'},
  {id:'v-0283',jp:'存在する',romaji:'sonzai suru',en:'to exist',category:'Verbs',color:'var(--n4)'},
  {id:'v-0284',jp:'見越す',romaji:'mikosu',en:'to expect',category:'Verbs',color:'var(--n4)'},
  {id:'v-0285',jp:'説明する',romaji:'setsumei suru',en:'to explain',category:'Verbs',color:'var(--n4)'},
  {id:'v-0286',jp:'落ちる',romaji:'ochiru',en:'to fall',category:'Verbs',color:'var(--n4)'},
  {id:'v-0287',jp:'終える',romaji:'oeru',en:'to finish',category:'Verbs',color:'var(--n4)'},
  {id:'v-0288',jp:'ついて行く',romaji:'ni tsuiteiku',en:'to follow',category:'Verbs',color:'var(--n4)'},
  {id:'v-0289',jp:'許す',romaji:'yurusu',en:'to forgive',category:'Verbs',color:'var(--n4)'},
  {id:'v-0290',jp:'手渡す',romaji:'tewatasu',en:'to give',category:'Verbs',color:'var(--n4)'},
  {id:'v-0291',jp:'海水浴をする',romaji:'kaisuiyoku wo suru',en:'to go for a swim',category:'Verbs',color:'var(--n4)'},
  {id:'v-0292',jp:'朝食をとる',romaji:'chōshoku wo toru',en:'to have breakfast',category:'Verbs',color:'var(--n4)'},
  {id:'v-0293',jp:'夕食をとる',romaji:'yūshoku wo toru',en:'to have dinner',category:'Verbs',color:'var(--n4)'},
  {id:'v-0294',jp:'昼食をとる',romaji:'chūshoku wo toru',en:'to have lunch',category:'Verbs',color:'var(--n4)'},
  {id:'v-0295',jp:'隠す',romaji:'kakusu',en:'to hide',category:'Verbs',color:'var(--n4)'},
  {id:'v-0296',jp:'希望する',romaji:'kibō suru',en:'to hope',category:'Verbs',color:'var(--n4)'},
  {id:'v-0297',jp:'狩る',romaji:'karu',en:'to hunt',category:'Verbs',color:'var(--n4)'},
  {id:'v-0298',jp:'知らせる',romaji:'shiraseru',en:'to inform',category:'Verbs',color:'var(--n4)'},
  {id:'v-0299',jp:'主張する',romaji:'shuchō suru',en:'to insist',category:'Verbs',color:'var(--n4)'},
  {id:'v-0300',jp:'侮辱する',romaji:'bujoku suru',en:'to insult',category:'Verbs',color:'var(--n4)'},
  {id:'v-0301',jp:'招待する',romaji:'shōtai suru',en:'to invite',category:'Verbs',color:'var(--n4)'},
  {id:'v-0302',jp:'冗談を言う',romaji:'jōdan wo iu',en:'to joke',category:'Verbs',color:'var(--n4)'},
  {id:'v-0303',jp:'保つ',romaji:'tamotsu',en:'to keep',category:'Verbs',color:'var(--n4)'},
  {id:'v-0304',jp:'沈黙を守る',romaji:'chinmoku wo mamoru',en:'to keep silent',category:'Verbs',color:'var(--n4)'},
  {id:'v-0305',jp:'殺す',romaji:'korosu',en:'to kill',category:'Verbs',color:'var(--n4)'},
  {id:'v-0306',jp:'知っている',romaji:'shitte iru',en:'to know (sb)',category:'Verbs',color:'var(--n4)'},
  {id:'v-0307',jp:'知る',romaji:'shiru',en:'to know (sth)',category:'Verbs',color:'var(--n4)'},
  {id:'v-0308',jp:'好む',romaji:'konomu',en:'to like',category:'Verbs',color:'var(--n4)'},
  {id:'v-0309',jp:'探す',romaji:'sagasu',en:'to look for',category:'Verbs',color:'var(--n4)'},
  {id:'v-0310',jp:'誤りをする',romaji:'ayamari wo suru',en:'to make a mistake',category:'Verbs',color:'var(--n4)'},
  {id:'v-0311',jp:'管理する',romaji:'kanri suru',en:'to manage/run',category:'Verbs',color:'var(--n4)'},
  {id:'v-0312',jp:'意味する',romaji:'imi suru',en:'to mean',category:'Verbs',color:'var(--n4)'},
  {id:'v-0313',jp:'欠席する',romaji:'kesseki suru',en:'to miss (school)',category:'Verbs',color:'var(--n4)'},
  {id:'v-0314',jp:'見掛ける',romaji:'mikakeru',en:'to notice',category:'Verbs',color:'var(--n4)'},
  {id:'v-0315',jp:'反対する',romaji:'hantai suru',en:'to object',category:'Verbs',color:'var(--n4)'},
  {id:'v-0316',jp:'注文する',romaji:'chūmon suru',en:'to order (meal)',category:'Verbs',color:'var(--n4)'},
  {id:'v-0317',jp:'所有する',romaji:'shoyū suru',en:'to own',category:'Verbs',color:'var(--n4)'},
  {id:'v-0318',jp:'参加する',romaji:'sanka suru',en:'to participate',category:'Verbs',color:'var(--n4)'},
  {id:'v-0319',jp:'許可する',romaji:'kyoka suru',en:'to permit',category:'Verbs',color:'var(--n4)'},
  {id:'v-0320',jp:'計画する',romaji:'keikaku suru',en:'to plan',category:'Verbs',color:'var(--n4)'},
  {id:'v-0321',jp:'祈る',romaji:'inoru',en:'to pray',category:'Verbs',color:'var(--n4)'},
  {id:'v-0322',jp:'約束する',romaji:'yakusoku suru',en:'to promise',category:'Verbs',color:'var(--n4)'},
  {id:'v-0323',jp:'発音する',romaji:'hatsuon suru',en:'to pronounce',category:'Verbs',color:'var(--n4)'},
  {id:'v-0324',jp:'提案する',romaji:'teian suru',en:'to propose',category:'Verbs',color:'var(--n4)'},
  {id:'v-0325',jp:'罰する',romaji:'bassuru',en:'to punish',category:'Verbs',color:'var(--n4)'},
  {id:'v-0326',jp:'推薦する',romaji:'suisen suru',en:'to recommend',category:'Verbs',color:'var(--n4)'},
  {id:'v-0327',jp:'拒絶する',romaji:'kyozetsu suru',en:'to refuse',category:'Verbs',color:'var(--n4)'},
  {id:'v-0328',jp:'後悔する',romaji:'kōkai suru',en:'to regret',category:'Verbs',color:'var(--n4)'},
  {id:'v-0329',jp:'借りる',romaji:'kariru',en:'to rent',category:'Verbs',color:'var(--n4)'},
  {id:'v-0330',jp:'復唱する',romaji:'fukushō suru',en:'to repeat',category:'Verbs',color:'var(--n4)'},
  {id:'v-0331',jp:'予約する',romaji:'yoyaku suru',en:'to reserve/book',category:'Verbs',color:'var(--n4)'},
  {id:'v-0332',jp:'救出する',romaji:'kyūshutsu suru',en:'to save (rescue)',category:'Verbs',color:'var(--n4)'},
  {id:'v-0333',jp:'言う',romaji:'iu',en:'to say',category:'Verbs',color:'var(--n4)'},
  {id:'v-0334',jp:'叱る',romaji:'shikaru',en:'to scold',category:'Verbs',color:'var(--n4)'},
  {id:'v-0335',jp:'撃つ',romaji:'utsu',en:'to shoot',category:'Verbs',color:'var(--n4)'},
  {id:'v-0336',jp:'叫ぶ',romaji:'sakebu',en:'to shout',category:'Verbs',color:'var(--n4)'},
  {id:'v-0337',jp:'見せる',romaji:'miseru',en:'to show',category:'Verbs',color:'var(--n4)'},
  {id:'v-0338',jp:'微笑む',romaji:'hohoemu',en:'to smile',category:'Verbs',color:'var(--n4)'},
  {id:'v-0339',jp:'止める',romaji:'tomeru',en:'to stop',category:'Verbs',color:'var(--n4)'},
  {id:'v-0340',jp:'勉強する',romaji:'benkyō suru',en:'to study',category:'Verbs',color:'var(--n4)'},
  {id:'v-0341',jp:'脅す',romaji:'odosu',en:'to threaten',category:'Verbs',color:'var(--n4)'},
  {id:'v-0342',jp:'触れる',romaji:'fureru',en:'to touch',category:'Verbs',color:'var(--n4)'},
  {id:'v-0343',jp:'翻訳する',romaji:'honyaku suru',en:'to translate',category:'Verbs',color:'var(--n4)'},
  {id:'v-0344',jp:'信用する',romaji:'shinyō suru',en:'to trust',category:'Verbs',color:'var(--n4)'},
  {id:'v-0345',jp:'試みる',romaji:'kokoromiru',en:'to try',category:'Verbs',color:'var(--n4)'},
  {id:'v-0346',jp:'曲がる',romaji:'magaru',en:'to turn',category:'Verbs',color:'var(--n4)'},
  {id:'v-0347',jp:'合体させる',romaji:'gattai saseru',en:'to unite',category:'Verbs',color:'var(--n4)'},
  {id:'v-0348',jp:'欲する',romaji:'hossuru',en:'to want',category:'Verbs',color:'var(--n4)'},
  {id:'v-0349',jp:'警告する',romaji:'keikoku suru',en:'to warn',category:'Verbs',color:'var(--n4)'},
  {id:'v-0350',jp:'書き留める',romaji:'kakitomeru',en:'to write down',category:'Verbs',color:'var(--n4)'},
  {id:'v-0351',jp:'ホテル',romaji:'hoteru',en:'hotel',category:'Travel',color:'var(--n4)'},
  {id:'v-0352',jp:'パスポート',romaji:'pasupōto',en:'passport',category:'Travel',color:'var(--n4)'},
  {id:'v-0353',jp:'ビザ',romaji:'biza',en:'visa',category:'Travel',color:'var(--n4)'},
  {id:'v-0354',jp:'乗車券',romaji:'jōsha ken',en:'ticket',category:'Travel',color:'var(--n4)'},
  {id:'v-0355',jp:'地図',romaji:'chizu',en:'map',category:'Travel',color:'var(--n4)'},
  {id:'v-0356',jp:'空港',romaji:'kūkō',en:'airport',category:'Travel',color:'var(--n4)'},
  {id:'v-0357',jp:'出発',romaji:'shuppatsu',en:'departure',category:'Travel',color:'var(--n4)'},
  {id:'v-0358',jp:'到着',romaji:'tōchaku',en:'arrival',category:'Travel',color:'var(--n4)'},
  {id:'v-0359',jp:'荷物',romaji:'nimotsu',en:'luggage',category:'Travel',color:'var(--n4)'},
  {id:'v-0360',jp:'列車',romaji:'ressha',en:'train',category:'Travel',color:'var(--n4)'},
  {id:'v-0361',jp:'飛行機',romaji:'hikōki',en:'airplane',category:'Travel',color:'var(--n4)'},
  {id:'v-0362',jp:'船',romaji:'fune',en:'ship',category:'Travel',color:'var(--n4)'},
  {id:'v-0363',jp:'タクシー',romaji:'takushī',en:'taxi',category:'Travel',color:'var(--n4)'},
  {id:'v-0364',jp:'駅',romaji:'eki',en:'station',category:'Travel',color:'var(--n4)'},
  {id:'v-0365',jp:'地下鉄',romaji:'chikatetsu',en:'subway',category:'Travel',color:'var(--n4)'},
  {id:'v-0366',jp:'観光',romaji:'kankō',en:'tourism',category:'Travel',color:'var(--n4)'},
  {id:'v-0367',jp:'観光客',romaji:'kankō kyaku',en:'tourist',category:'Travel',color:'var(--n4)'},
  {id:'v-0368',jp:'旅行',romaji:'ryokō',en:'trip/voyage',category:'Travel',color:'var(--n4)'},
  {id:'v-0369',jp:'冒険',romaji:'bōken',en:'adventure',category:'Travel',color:'var(--n4)'},
  {id:'v-0370',jp:'休暇',romaji:'kyūka',en:'vacation',category:'Travel',color:'var(--n4)'},
  {id:'v-0371',jp:'バス',romaji:'basu',en:'bus',category:'Travel',color:'var(--n4)'},
  {id:'v-0372',jp:'飛行機で',romaji:'hikōki de',en:'by airplane',category:'Travel',color:'var(--n4)'},
  {id:'v-0373',jp:'列車で',romaji:'ressha de',en:'by train',category:'Travel',color:'var(--n4)'},
  {id:'v-0374',jp:'車で',romaji:'kuruma de',en:'by car',category:'Travel',color:'var(--n4)'},
  {id:'v-0375',jp:'船で',romaji:'fune de',en:'by ship',category:'Travel',color:'var(--n4)'},
  {id:'v-0376',jp:'スーツケース',romaji:'sūtsukēsu',en:'suitcase',category:'Travel',color:'var(--n4)'},
  {id:'v-0377',jp:'荷物カート',romaji:'nimotsu kāto',en:'luggage cart',category:'Travel',color:'var(--n4)'},
  {id:'v-0378',jp:'航空券',romaji:'kōkū ken',en:'air ticket',category:'Travel',color:'var(--n4)'},
  {id:'v-0379',jp:'ガイドブック',romaji:'gaido bukku',en:'guidebook',category:'Travel',color:'var(--n4)'},
  {id:'v-0380',jp:'ガイド',romaji:'gaido',en:'guide (person)',category:'Travel',color:'var(--n4)'},
  {id:'v-0381',jp:'小旅行',romaji:'shō ryokō',en:'excursion',category:'Travel',color:'var(--n4)'},
  {id:'v-0382',jp:'土産',romaji:'miyage',en:'souvenir',category:'Travel',color:'var(--n4)'},
  {id:'v-0383',jp:'土産品店',romaji:'miyage hin ten',en:'gift shop',category:'Travel',color:'var(--n4)'},
  {id:'v-0384',jp:'記念碑',romaji:'kinen hi',en:'monument',category:'Travel',color:'var(--n4)'},
  {id:'v-0385',jp:'要塞',romaji:'yōsai',en:'fortress',category:'Travel',color:'var(--n4)'},
  {id:'v-0386',jp:'宮殿',romaji:'kyūden',en:'palace',category:'Travel',color:'var(--n4)'},
  {id:'v-0387',jp:'城',romaji:'shiro',en:'castle',category:'Travel',color:'var(--n4)'},
  {id:'v-0388',jp:'塔',romaji:'tō',en:'tower',category:'Travel',color:'var(--n4)'},
  {id:'v-0389',jp:'マウソレウム',romaji:'mausoreumu',en:'mausoleum',category:'Travel',color:'var(--n4)'},
  {id:'v-0390',jp:'建築',romaji:'kenchiku',en:'architecture',category:'Travel',color:'var(--n4)'},
  {id:'v-0391',jp:'中世の',romaji:'chūsei no',en:'medieval',category:'Travel',color:'var(--n4)'},
  {id:'v-0392',jp:'古代の',romaji:'kodai no',en:'ancient',category:'Travel',color:'var(--n4)'},
  {id:'v-0393',jp:'国の',romaji:'kuni no',en:'national',category:'Travel',color:'var(--n4)'},
  {id:'v-0394',jp:'有名な',romaji:'yūmei na',en:'well-known',category:'Travel',color:'var(--n4)'},
  {id:'v-0395',jp:'写真に撮る',romaji:'shashin ni toru',en:'to take pictures',category:'Travel',color:'var(--n4)'},
  {id:'v-0396',jp:'ボート',romaji:'bōto',en:'boat',category:'Travel',color:'var(--n4)'},
  {id:'v-0397',jp:'フェリー',romaji:'ferī',en:'ferry',category:'Travel',color:'var(--n4)'},
  {id:'v-0398',jp:'ヨット',romaji:'yotto',en:'yacht',category:'Travel',color:'var(--n4)'},
  {id:'v-0399',jp:'モーターボート',romaji:'mōtābōto',en:'motorboat',category:'Travel',color:'var(--n4)'},
  {id:'v-0400',jp:'蒸気船',romaji:'jōki sen',en:'steamship',category:'Travel',color:'var(--n4)'},
  {id:'v-0401',jp:'遠洋定期船',romaji:'enyō teiki sen',en:'ocean liner',category:'Travel',color:'var(--n4)'},
  {id:'v-0402',jp:'クルーザー',romaji:'kurūzā',en:'cruiser',category:'Travel',color:'var(--n4)'},
  {id:'v-0403',jp:'曳船',romaji:'eisen',en:'tugboat',category:'Travel',color:'var(--n4)'},
  {id:'v-0404',jp:'艀、バージ',romaji:'hashike, bāji',en:'barge',category:'Travel',color:'var(--n4)'},
  {id:'v-0405',jp:'帆船',romaji:'hansen',en:'sailing ship',category:'Travel',color:'var(--n4)'},
  {id:'v-0406',jp:'砕氷船',romaji:'saihyō sen',en:'ice breaker',category:'Travel',color:'var(--n4)'},
  {id:'v-0407',jp:'潜水艦',romaji:'sensui kan',en:'submarine',category:'Travel',color:'var(--n4)'},
  {id:'v-0408',jp:'救命艇',romaji:'kyūmei tei',en:'lifeboat',category:'Travel',color:'var(--n4)'},
  {id:'v-0409',jp:'船長',romaji:'senchō',en:'captain (ship)',category:'Travel',color:'var(--n4)'},
  {id:'v-0410',jp:'水夫',romaji:'suifu',en:'sailor',category:'Travel',color:'var(--n4)'},
  {id:'v-0411',jp:'乗組員',romaji:'norikumi in',en:'crew (ship)',category:'Travel',color:'var(--n4)'},
  {id:'v-0412',jp:'甲板',romaji:'kanpan',en:'deck',category:'Travel',color:'var(--n4)'},
  {id:'v-0413',jp:'マスト',romaji:'masuto',en:'mast',category:'Travel',color:'var(--n4)'},
  {id:'v-0414',jp:'帆',romaji:'ho',en:'sail',category:'Travel',color:'var(--n4)'},
  {id:'v-0415',jp:'船首',romaji:'senshu',en:'bow (prow)',category:'Travel',color:'var(--n4)'},
  {id:'v-0416',jp:'船尾',romaji:'senbi',en:'stern',category:'Travel',color:'var(--n4)'},
  {id:'v-0417',jp:'船室',romaji:'senshitsu',en:'cabin (ship)',category:'Travel',color:'var(--n4)'},
  {id:'v-0418',jp:'錨',romaji:'ikari',en:'anchor',category:'Travel',color:'var(--n4)'},
  {id:'v-0419',jp:'港',romaji:'minato',en:'harbor/port',category:'Travel',color:'var(--n4)'},
  {id:'v-0420',jp:'埠頭',romaji:'futō',en:'wharf',category:'Travel',color:'var(--n4)'},
  {id:'v-0421',jp:'クルーズ',romaji:'kurūzu',en:'cruise',category:'Travel',color:'var(--n4)'},
  {id:'v-0422',jp:'沈没する',romaji:'chinbotsu suru',en:'to sink',category:'Travel',color:'var(--n4)'},
  {id:'v-0423',jp:'救命浮輪',romaji:'kyūmei ukiwa',en:'ring buoy',category:'Travel',color:'var(--n4)'},
  {id:'v-0424',jp:'お金',romaji:'okane',en:'money',category:'Money',color:'var(--n4)'},
  {id:'v-0425',jp:'銀行',romaji:'ginkō',en:'bank',category:'Money',color:'var(--n4)'},
  {id:'v-0426',jp:'口座',romaji:'kōza',en:'account',category:'Money',color:'var(--n4)'},
  {id:'v-0427',jp:'クレジットカード',romaji:'kurejitto kādo',en:'credit card',category:'Money',color:'var(--n4)'},
  {id:'v-0428',jp:'現金',romaji:'genkin',en:'cash',category:'Money',color:'var(--n4)'},
  {id:'v-0429',jp:'財布',romaji:'saifu',en:'wallet',category:'Money',color:'var(--n4)'},
  {id:'v-0430',jp:'税',romaji:'zei',en:'tax',category:'Money',color:'var(--n4)'},
  {id:'v-0431',jp:'割引',romaji:'waribiki',en:'discount',category:'Money',color:'var(--n4)'},
  {id:'v-0432',jp:'価格',romaji:'kakaku',en:'price',category:'Money',color:'var(--n4)'},
  {id:'v-0433',jp:'両替',romaji:'ryōgae',en:'currency exchange',category:'Money',color:'var(--n4)'},
  {id:'v-0434',jp:'為替レート',romaji:'kawase rēto',en:'exchange rate',category:'Money',color:'var(--n4)'},
  {id:'v-0435',jp:'ATM',romaji:'ētīemu',en:'ATM',category:'Money',color:'var(--n4)'},
  {id:'v-0436',jp:'コイン',romaji:'koin',en:'coin',category:'Money',color:'var(--n4)'},
  {id:'v-0437',jp:'ドル',romaji:'doru',en:'dollar',category:'Money',color:'var(--n4)'},
  {id:'v-0438',jp:'ユーロ',romaji:'yūro',en:'euro',category:'Money',color:'var(--n4)'},
  {id:'v-0439',jp:'スターリング・ポンド',romaji:'sutāringu pondo',en:'pound sterling',category:'Money',color:'var(--n4)'},
  {id:'v-0440',jp:'円',romaji:'en',en:'yen',category:'Money',color:'var(--n4)'},
  {id:'v-0441',jp:'債務',romaji:'saimu',en:'debt',category:'Money',color:'var(--n4)'},
  {id:'v-0442',jp:'貸す',romaji:'kasu',en:'to lend (money)',category:'Money',color:'var(--n4)'},
  {id:'v-0443',jp:'預金する',romaji:'yokin suru',en:'to deposit',category:'Money',color:'var(--n4)'},
  {id:'v-0444',jp:'引き出す',romaji:'hikidasu',en:'to withdraw',category:'Money',color:'var(--n4)'},
  {id:'v-0445',jp:'小切手',romaji:'kogitte',en:'check',category:'Money',color:'var(--n4)'},
  {id:'v-0446',jp:'小切手帳',romaji:'kogitte chō',en:'checkbook',category:'Money',color:'var(--n4)'},
  {id:'v-0447',jp:'小銭入れ',romaji:'kozeni ire',en:'change purse',category:'Money',color:'var(--n4)'},
  {id:'v-0448',jp:'家賃',romaji:'yachin',en:'rent money',category:'Money',color:'var(--n4)'},
  {id:'v-0449',jp:'お金を使う',romaji:'okane wo tsukau',en:'to spend',category:'Money',color:'var(--n4)'},
  {id:'v-0450',jp:'支払い',romaji:'shiharai',en:'payment',category:'Money',color:'var(--n4)'},
  {id:'v-0451',jp:'おつり',romaji:'o tsuri',en:'change (give the)',category:'Money',color:'var(--n4)'},
  {id:'v-0452',jp:'罰金',romaji:'bakkin',en:'fine (penalty)',category:'Money',color:'var(--n4)'},
  {id:'v-0453',jp:'融資',romaji:'yūshi',en:'loan',category:'Money',color:'var(--n4)'},
  {id:'v-0454',jp:'保障',romaji:'hoshō',en:'guarantee',category:'Money',color:'var(--n4)'},
  {id:'v-0455',jp:'電話',romaji:'denwa',en:'telephone',category:'Communication',color:'var(--n3)'},
  {id:'v-0456',jp:'携帯電話',romaji:'keitai denwa',en:'mobile phone',category:'Communication',color:'var(--n3)'},
  {id:'v-0457',jp:'電話する',romaji:'denwa suru',en:'to call',category:'Communication',color:'var(--n3)'},
  {id:'v-0458',jp:'もしもし',romaji:'moshimoshi',en:'hello (phone)',category:'Communication',color:'var(--n3)'},
  {id:'v-0459',jp:'メニュー',romaji:'menyū',en:'menu',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0460',jp:'レストラン',romaji:'resutoran',en:'restaurant',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0461',jp:'朝食',romaji:'chōshoku',en:'breakfast',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0462',jp:'昼食',romaji:'chūshoku',en:'lunch',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0463',jp:'夕食',romaji:'yūshoku',en:'dinner',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0464',jp:'ウェイター',romaji:'weitā',en:'waiter',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0465',jp:'お勘定',romaji:'okanjō',en:'the bill',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0466',jp:'チップ',romaji:'chippu',en:'tip',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0467',jp:'食べる',romaji:'taberu',en:'to eat',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0468',jp:'ウェートレス',romaji:'wētoresu',en:'waitress',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0469',jp:'バーテンダー',romaji:'bātendā',en:'bartender',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0470',jp:'ワインリスト',romaji:'wain risuto',en:'wine list',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0471',jp:'テーブルを予約する',romaji:'tēburu wo yoyaku suru',en:'to book a table',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0472',jp:'前菜',romaji:'zensai',en:'appetizer',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0473',jp:'デザート',romaji:'dezāto',en:'dessert',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0474',jp:'勘定を払う',romaji:'kanjō wo harau',en:'to pay the check',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0475',jp:'食欲',romaji:'shokuyoku',en:'appetite',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0476',jp:'どうぞお召し上がり下さい！',romaji:'dōzo o meshiagarikudasai!',en:'Enjoy your meal!',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0477',jp:'スプーン',romaji:'supūn',en:'spoon',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0478',jp:'ナイフ',romaji:'naifu',en:'knife',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0479',jp:'フォーク',romaji:'fōku',en:'fork',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0480',jp:'ナフキン',romaji:'nafukin',en:'napkin',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0481',jp:'つまようじ',romaji:'tsumayōji',en:'toothpick',category:'Restaurant',color:'var(--n4)'},
  {id:'v-0482',jp:'言語',romaji:'gengo',en:'language',category:'Language',color:'var(--n4)'},
  {id:'v-0483',jp:'外国語',romaji:'gaikoku go',en:'foreign language',category:'Language',color:'var(--n4)'},
  {id:'v-0484',jp:'辞書',romaji:'jisho',en:'dictionary',category:'Language',color:'var(--n4)'},
  {id:'v-0485',jp:'翻訳',romaji:'honyaku',en:'translation',category:'Language',color:'var(--n4)'},
  {id:'v-0486',jp:'発音',romaji:'hatsuon',en:'pronunciation',category:'Language',color:'var(--n4)'},
  {id:'v-0487',jp:'文法',romaji:'bunpō',en:'grammar',category:'Language',color:'var(--n4)'},
  {id:'v-0488',jp:'単語',romaji:'tango',en:'word',category:'Language',color:'var(--n4)'},
  {id:'v-0489',jp:'学ぶ',romaji:'manabu',en:'to learn',category:'Language',color:'var(--n4)'},
  {id:'v-0490',jp:'速く',romaji:'hayaku',en:'fast',category:'Language',color:'var(--n4)'},
  {id:'v-0491',jp:'ゆっくり',romaji:'yukkuri',en:'slowly',category:'Language',color:'var(--n4)'},
  {id:'v-0492',jp:'流ちょうに',romaji:'ryūchō ni',en:'fluently',category:'Language',color:'var(--n4)'},
  {id:'v-0493',jp:'語彙',romaji:'goi',en:'vocabulary',category:'Language',color:'var(--n4)'},
  {id:'v-0494',jp:'教科書',romaji:'kyōkasho',en:'textbook',category:'Language',color:'var(--n4)'},
  {id:'v-0495',jp:'慣用表現集',romaji:'kanyō hyōgen shū',en:'phrasebook',category:'Language',color:'var(--n4)'},
  {id:'v-0496',jp:'アルファベット',romaji:'arufabetto',en:'alphabet',category:'Language',color:'var(--n4)'},
  {id:'v-0497',jp:'なまり',romaji:'namari',en:'accent (language)',category:'Language',color:'var(--n4)'},
  {id:'v-0498',jp:'意味',romaji:'imi',en:'meaning',category:'Language',color:'var(--n4)'},
  {id:'v-0499',jp:'翻訳者',romaji:'honyaku sha',en:'translator',category:'Language',color:'var(--n4)'},
  {id:'v-0500',jp:'通訳者',romaji:'tsūyaku sha',en:'interpreter',category:'Language',color:'var(--n4)'},
  {id:'v-0501',jp:'先生',romaji:'sensei',en:'teacher',category:'Language',color:'var(--n4)'},
  {id:'v-0502',jp:'記憶',romaji:'kioku',en:'memory (faculty)',category:'Language',color:'var(--n4)'},
  {id:'v-0503',jp:'料理',romaji:'ryōri',en:'dish / cuisine',category:'Food',color:'var(--n4)'},
  {id:'v-0504',jp:'レシピ',romaji:'reshipi',en:'recipe',category:'Food',color:'var(--n4)'},
  {id:'v-0505',jp:'サラダ',romaji:'sarada',en:'salad',category:'Food',color:'var(--n4)'},
  {id:'v-0506',jp:'スープ',romaji:'sūpu',en:'soup',category:'Food',color:'var(--n4)'},
  {id:'v-0507',jp:'サンドイッチ',romaji:'sandoicchi',en:'sandwich',category:'Food',color:'var(--n4)'},
  {id:'v-0508',jp:'目玉焼き',romaji:'medamayaki',en:'fried eggs',category:'Food',color:'var(--n4)'},
  {id:'v-0509',jp:'ハンバーガー',romaji:'hanbāgā',en:'hamburger',category:'Food',color:'var(--n4)'},
  {id:'v-0510',jp:'ビーフステーキ',romaji:'bīfusutēki',en:'beefsteak',category:'Food',color:'var(--n4)'},
  {id:'v-0511',jp:'スパゲッティ',romaji:'supagetti',en:'spaghetti',category:'Food',color:'var(--n4)'},
  {id:'v-0512',jp:'ピザ',romaji:'piza',en:'pizza',category:'Food',color:'var(--n4)'},
  {id:'v-0513',jp:'オムレツ',romaji:'omuretsu',en:'omelet',category:'Food',color:'var(--n4)'},
  {id:'v-0514',jp:'甘い',romaji:'amai',en:'sweet',category:'Food',color:'var(--n4)'},
  {id:'v-0515',jp:'塩味の',romaji:'shioaji no',en:'salty',category:'Food',color:'var(--n4)'},
  {id:'v-0516',jp:'冷たい',romaji:'tsumetai',en:'cold',category:'Food',color:'var(--n4)'},
  {id:'v-0517',jp:'熱い',romaji:'atsui',en:'hot',category:'Food',color:'var(--n4)'},
  {id:'v-0518',jp:'苦い',romaji:'nigai',en:'bitter',category:'Food',color:'var(--n4)'},
  {id:'v-0519',jp:'美味しい',romaji:'oishī',en:'tasty',category:'Food',color:'var(--n4)'},
  {id:'v-0520',jp:'皮をむく',romaji:'kawa wo muku',en:'to peel',category:'Food',color:'var(--n4)'},
  {id:'v-0521',jp:'食べ物',romaji:'tabemono',en:'food',category:'Food',color:'var(--n4)'},
  {id:'v-0522',jp:'ブイヨン',romaji:'buiyon',en:'clear soup/broth',category:'Food',color:'var(--n4)'},
  {id:'v-0523',jp:'シチュー',romaji:'shichū',en:'stew',category:'Food',color:'var(--n4)'},
  {id:'v-0524',jp:'付け合わせ',romaji:'tsukeawase',en:'side dish',category:'Food',color:'var(--n4)'},
  {id:'v-0525',jp:'マッシュポテト',romaji:'masshupoteto',en:'mashed potatoes',category:'Food',color:'var(--n4)'},
  {id:'v-0526',jp:'煮た',romaji:'ni ta',en:'boiled (food)',category:'Food',color:'var(--n4)'},
  {id:'v-0527',jp:'薫製の',romaji:'kunsei no',en:'smoked (food)',category:'Food',color:'var(--n4)'},
  {id:'v-0528',jp:'揚げた',romaji:'age ta',en:'fried (food)',category:'Food',color:'var(--n4)'},
  {id:'v-0529',jp:'冷凍の',romaji:'reitō no',en:'frozen (food)',category:'Food',color:'var(--n4)'},
  {id:'v-0530',jp:'酢漬けの',romaji:'suzuke no',en:'pickled',category:'Food',color:'var(--n4)'},
  {id:'v-0531',jp:'揚げる',romaji:'ageru',en:'to fry',category:'Food',color:'var(--n4)'},
  {id:'v-0532',jp:'沸かす',romaji:'wakasu',en:'to boil',category:'Food',color:'var(--n4)'},
  {id:'v-0533',jp:'塩をかける',romaji:'shio wo kakeru',en:'to salt',category:'Food',color:'var(--n4)'},
  {id:'v-0534',jp:'カロリー',romaji:'karorī',en:'calorie',category:'Food',color:'var(--n4)'},
  {id:'v-0535',jp:'ダイエット',romaji:'daietto',en:'diet',category:'Food',color:'var(--n4)'},
  {id:'v-0536',jp:'肉',romaji:'niku',en:'meat',category:'Meat',color:'var(--n3)'},
  {id:'v-0537',jp:'鶏',romaji:'niwatori',en:'chicken',category:'Meat',color:'var(--n3)'},
  {id:'v-0538',jp:'豚肉',romaji:'buta niku',en:'pork',category:'Meat',color:'var(--n3)'},
  {id:'v-0539',jp:'牛肉',romaji:'gyū niku',en:'beef',category:'Meat',color:'var(--n3)'},
  {id:'v-0540',jp:'子牛肉',romaji:'kōshi niku',en:'veal',category:'Meat',color:'var(--n3)'},
  {id:'v-0541',jp:'子羊肉',romaji:'kohitsuji niku',en:'lamb',category:'Meat',color:'var(--n3)'},
  {id:'v-0542',jp:'ベーコン',romaji:'bēkon',en:'bacon',category:'Meat',color:'var(--n3)'},
  {id:'v-0543',jp:'ハム',romaji:'hamu',en:'ham',category:'Meat',color:'var(--n3)'},
  {id:'v-0544',jp:'卵',romaji:'tamago',en:'egg',category:'Meat',color:'var(--n3)'},
  {id:'v-0545',jp:'レバー',romaji:'rebā',en:'liver',category:'Meat',color:'var(--n3)'},
  {id:'v-0546',jp:'挽肉',romaji:'hikiniku',en:'ground beef',category:'Meat',color:'var(--n3)'},
  {id:'v-0547',jp:'ソーセージ',romaji:'sōsēji',en:'sausage',category:'Meat',color:'var(--n3)'},
  {id:'v-0548',jp:'ダック',romaji:'dakku',en:'duck',category:'Meat',color:'var(--n3)'},
  {id:'v-0549',jp:'ガチョウ',romaji:'gachō',en:'goose (food)',category:'Meat',color:'var(--n3)'},
  {id:'v-0550',jp:'兎肉',romaji:'usagi niku',en:'rabbit (food)',category:'Meat',color:'var(--n3)'},
  {id:'v-0551',jp:'パテ',romaji:'pate',en:'pâté',category:'Meat',color:'var(--n3)'},
  {id:'v-0552',jp:'タン',romaji:'tan',en:'tongue (food)',category:'Meat',color:'var(--n3)'},
  {id:'v-0553',jp:'卵の白身',romaji:'tamago no shiromi',en:'egg white',category:'Meat',color:'var(--n3)'},
  {id:'v-0554',jp:'卵の黄身',romaji:'tamago no kimi',en:'egg yolk',category:'Meat',color:'var(--n3)'},
  {id:'v-0555',jp:'キャビア',romaji:'kyabia',en:'caviar',category:'Meat',color:'var(--n3)'},
  {id:'v-0556',jp:'ニシン',romaji:'nishin',en:'herring',category:'Meat',color:'var(--n3)'},
  {id:'v-0557',jp:'マス',romaji:'masu',en:'trout',category:'Meat',color:'var(--n3)'},
  {id:'v-0558',jp:'魚',romaji:'sakana',en:'fish',category:'Seafood',color:'var(--n3)'},
  {id:'v-0559',jp:'魚介',romaji:'gyokai',en:'seafood',category:'Seafood',color:'var(--n3)'},
  {id:'v-0560',jp:'カニ',romaji:'kani',en:'crab',category:'Seafood',color:'var(--n3)'},
  {id:'v-0561',jp:'エビ',romaji:'ebi',en:'shrimp',category:'Seafood',color:'var(--n3)'},
  {id:'v-0562',jp:'カキ',romaji:'kaki',en:'oyster',category:'Seafood',color:'var(--n3)'},
  {id:'v-0563',jp:'タコ',romaji:'tako',en:'octopus',category:'Seafood',color:'var(--n3)'},
  {id:'v-0564',jp:'イカ',romaji:'ika',en:'squid',category:'Seafood',color:'var(--n3)'},
  {id:'v-0565',jp:'サケ',romaji:'sake',en:'salmon',category:'Seafood',color:'var(--n3)'},
  {id:'v-0566',jp:'マグロ',romaji:'maguro',en:'tuna',category:'Seafood',color:'var(--n3)'},
  {id:'v-0567',jp:'ウナギ',romaji:'unagi',en:'eel',category:'Seafood',color:'var(--n3)'},
  {id:'v-0568',jp:'タラ',romaji:'tara',en:'cod',category:'Seafood',color:'var(--n3)'},
  {id:'v-0569',jp:'サバ',romaji:'saba',en:'mackerel',category:'Seafood',color:'var(--n3)'},
  {id:'v-0570',jp:'イワシ',romaji:'iwashi',en:'sardine',category:'Seafood',color:'var(--n3)'},
  {id:'v-0571',jp:'サメ',romaji:'same',en:'shark',category:'Seafood',color:'var(--n3)'},
  {id:'v-0572',jp:'コイ',romaji:'koi',en:'carp',category:'Seafood',color:'var(--n3)'},
  {id:'v-0573',jp:'ナマズ',romaji:'namazu',en:'catfish',category:'Seafood',color:'var(--n3)'},
  {id:'v-0574',jp:'クラゲ',romaji:'kurage',en:'jellyfish',category:'Seafood',color:'var(--n3)'},
  {id:'v-0575',jp:'ヒトデ',romaji:'hitode',en:'starfish',category:'Seafood',color:'var(--n3)'},
  {id:'v-0576',jp:'ウニ',romaji:'uni',en:'sea urchin',category:'Seafood',color:'var(--n3)'},
  {id:'v-0577',jp:'イセエビ',romaji:'iseebi',en:'lobster',category:'Seafood',color:'var(--n3)'},
  {id:'v-0578',jp:'パン',romaji:'pan',en:'bread',category:'Groceries',color:'var(--n3)'},
  {id:'v-0579',jp:'チーズ',romaji:'chīzu',en:'cheese',category:'Groceries',color:'var(--n3)'},
  {id:'v-0580',jp:'砂糖',romaji:'satō',en:'sugar',category:'Groceries',color:'var(--n3)'},
  {id:'v-0581',jp:'塩',romaji:'shio',en:'salt',category:'Groceries',color:'var(--n3)'},
  {id:'v-0582',jp:'米',romaji:'kome',en:'rice',category:'Groceries',color:'var(--n3)'},
  {id:'v-0583',jp:'パスタ',romaji:'pasuta',en:'pasta',category:'Groceries',color:'var(--n3)'},
  {id:'v-0584',jp:'バター',romaji:'batā',en:'butter',category:'Groceries',color:'var(--n3)'},
  {id:'v-0585',jp:'牛乳',romaji:'miruku',en:'milk',category:'Groceries',color:'var(--n3)'},
  {id:'v-0586',jp:'ヨーグルト',romaji:'yōguruto',en:'yogurt',category:'Groceries',color:'var(--n3)'},
  {id:'v-0587',jp:'マヨネーズ',romaji:'mayonēzu',en:'mayonnaise',category:'Groceries',color:'var(--n3)'},
  {id:'v-0588',jp:'小麦粉',romaji:'komugiko',en:'flour',category:'Groceries',color:'var(--n3)'},
  {id:'v-0589',jp:'蜂蜜',romaji:'hachimitsu',en:'honey',category:'Groceries',color:'var(--n3)'},
  {id:'v-0590',jp:'ジャム',romaji:'jamu',en:'jam',category:'Groceries',color:'var(--n3)'},
  {id:'v-0591',jp:'油',romaji:'yu',en:'oil',category:'Groceries',color:'var(--n3)'},
  {id:'v-0592',jp:'麺',romaji:'men',en:'noodles',category:'Groceries',color:'var(--n3)'},
  {id:'v-0593',jp:'植物油',romaji:'shokubutsu yu',en:'vegetable oil',category:'Groceries',color:'var(--n3)'},
  {id:'v-0594',jp:'ひまわり油',romaji:'himawari yu',en:'sunflower oil',category:'Groceries',color:'var(--n3)'},
  {id:'v-0595',jp:'マーガリン',romaji:'māgarin',en:'margarine',category:'Groceries',color:'var(--n3)'},
  {id:'v-0596',jp:'オリーブ',romaji:'orību',en:'olives',category:'Groceries',color:'var(--n3)'},
  {id:'v-0597',jp:'オリーブ油',romaji:'orību yu',en:'olive oil',category:'Groceries',color:'var(--n3)'},
  {id:'v-0598',jp:'練乳',romaji:'rennyū',en:'condensed milk',category:'Groceries',color:'var(--n3)'},
  {id:'v-0599',jp:'サワークリーム',romaji:'sawā kurīmu',en:'sour cream',category:'Groceries',color:'var(--n3)'},
  {id:'v-0600',jp:'チューインガム',romaji:'chūin gamu',en:'chewing gum',category:'Groceries',color:'var(--n3)'},
  {id:'v-0601',jp:'缶詰',romaji:'kanzume',en:'canned food',category:'Groceries',color:'var(--n3)'},
  {id:'v-0602',jp:'コーンフレーク',romaji:'kōn furēku',en:'cornflakes',category:'Groceries',color:'var(--n3)'},
  {id:'v-0603',jp:'コムギ',romaji:'komugi',en:'wheat',category:'Groceries',color:'var(--n3)'},
  {id:'v-0604',jp:'水',romaji:'mizu',en:'water',category:'Drinks',color:'var(--n4)'},
  {id:'v-0605',jp:'ミネラルウォーター',romaji:'mineraru wōtā',en:'mineral water',category:'Drinks',color:'var(--n4)'},
  {id:'v-0606',jp:'ジュース',romaji:'jūsu',en:'juice',category:'Drinks',color:'var(--n4)'},
  {id:'v-0607',jp:'ビール',romaji:'bīru',en:'beer',category:'Drinks',color:'var(--n4)'},
  {id:'v-0608',jp:'ワイン',romaji:'wain',en:'wine',category:'Drinks',color:'var(--n4)'},
  {id:'v-0609',jp:'コーヒー',romaji:'kōhī',en:'coffee',category:'Drinks',color:'var(--n4)'},
  {id:'v-0610',jp:'茶',romaji:'cha',en:'tea',category:'Drinks',color:'var(--n4)'},
  {id:'v-0611',jp:'緑茶',romaji:'ryoku cha',en:'green tea',category:'Drinks',color:'var(--n4)'},
  {id:'v-0612',jp:'紅茶',romaji:'kō cha',en:'black tea',category:'Drinks',color:'var(--n4)'},
  {id:'v-0613',jp:'ウイスキー',romaji:'uisukī',en:'whisky',category:'Drinks',color:'var(--n4)'},
  {id:'v-0614',jp:'シャンパン',romaji:'shanpan',en:'champagne',category:'Drinks',color:'var(--n4)'},
  {id:'v-0615',jp:'カクテル',romaji:'kakuteru',en:'cocktail',category:'Drinks',color:'var(--n4)'},
  {id:'v-0616',jp:'レモネード',romaji:'remonēdo',en:'lemonade',category:'Drinks',color:'var(--n4)'},
  {id:'v-0617',jp:'ウォッカ',romaji:'wokka',en:'vodka',category:'Drinks',color:'var(--n4)'},
  {id:'v-0618',jp:'飲用水',romaji:'inyō sui',en:'drinking water',category:'Drinks',color:'var(--n4)'},
  {id:'v-0619',jp:'無炭酸の',romaji:'mu tansan no',en:'still (non-sparkling)',category:'Drinks',color:'var(--n4)'},
  {id:'v-0620',jp:'発泡性の',romaji:'happō sei no',en:'sparkling',category:'Drinks',color:'var(--n4)'},
  {id:'v-0621',jp:'ノンアルコールの',romaji:'non arukōru no',en:'non-alcoholic',category:'Drinks',color:'var(--n4)'},
  {id:'v-0622',jp:'炭酸飲料',romaji:'tansan inryō',en:'soft drink',category:'Drinks',color:'var(--n4)'},
  {id:'v-0623',jp:'白ワイン',romaji:'shiro wain',en:'white wine',category:'Drinks',color:'var(--n4)'},
  {id:'v-0624',jp:'赤ワイン',romaji:'aka wain',en:'red wine',category:'Drinks',color:'var(--n4)'},
  {id:'v-0625',jp:'ジン',romaji:'jin',en:'gin',category:'Drinks',color:'var(--n4)'},
  {id:'v-0626',jp:'ラム酒',romaji:'ramu shu',en:'rum',category:'Drinks',color:'var(--n4)'},
  {id:'v-0627',jp:'ライトビール',romaji:'raito bīru',en:'light beer',category:'Drinks',color:'var(--n4)'},
  {id:'v-0628',jp:'黒ビール',romaji:'kuro bīru',en:'dark beer',category:'Drinks',color:'var(--n4)'},
  {id:'v-0629',jp:'ブラックコーヒー',romaji:'burakku kōhī',en:'black coffee',category:'Drinks',color:'var(--n4)'},
  {id:'v-0630',jp:'カプチーノ',romaji:'kapuchīno',en:'cappuccino',category:'Drinks',color:'var(--n4)'},
  {id:'v-0631',jp:'インスタントコーヒー',romaji:'insutanto kōhī',en:'instant coffee',category:'Drinks',color:'var(--n4)'},
  {id:'v-0632',jp:'ミルクセーキ',romaji:'miruku sēki',en:'milk shake',category:'Drinks',color:'var(--n4)'},
  {id:'v-0633',jp:'オレンジジュース',romaji:'orenji jūsu',en:'orange juice',category:'Drinks',color:'var(--n4)'},
  {id:'v-0634',jp:'トマトジュース',romaji:'tomato jūsu',en:'tomato juice',category:'Drinks',color:'var(--n4)'},
  {id:'v-0635',jp:'野菜',romaji:'yasai',en:'vegetables',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0636',jp:'トマト',romaji:'tomato',en:'tomato',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0637',jp:'きゅうり',romaji:'kyūri',en:'cucumber',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0638',jp:'ニンジン',romaji:'ninjin',en:'carrot',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0639',jp:'ジャガイモ',romaji:'jagaimo',en:'potato',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0640',jp:'たまねぎ',romaji:'tamanegi',en:'onion',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0641',jp:'ニンニク',romaji:'ninniku',en:'garlic',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0642',jp:'キャベツ',romaji:'kyabetsu',en:'cabbage',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0643',jp:'ブロッコリー',romaji:'burokkorī',en:'broccoli',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0644',jp:'ナス',romaji:'nasu',en:'eggplant',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0645',jp:'カボチャ',romaji:'kabocha',en:'pumpkin',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0646',jp:'レタス',romaji:'retasu',en:'lettuce',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0647',jp:'ホウレンソウ',romaji:'hōrensō',en:'spinach',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0648',jp:'トウモロコシ',romaji:'tōmorokoshi',en:'corn',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0649',jp:'コショウ',romaji:'koshō',en:'pepper',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0650',jp:'カリフラワー',romaji:'karifurawā',en:'cauliflower',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0651',jp:'メキャベツ',romaji:'mekyabetsu',en:'Brussels sprouts',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0652',jp:'テーブルビート',romaji:'tēburu bīto',en:'beetroot',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0653',jp:'ズッキーニ',romaji:'zukkīni',en:'zucchini',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0654',jp:'カブ',romaji:'kabu',en:'turnip',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0655',jp:'パセリ',romaji:'paseri',en:'parsley',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0656',jp:'ディル',romaji:'diru',en:'dill',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0657',jp:'セロリ',romaji:'serori',en:'celery',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0658',jp:'アスパラガス',romaji:'asuparagasu',en:'asparagus',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0659',jp:'エンドウ',romaji:'endō',en:'pea',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0660',jp:'豆類',romaji:'mamerui',en:'beans',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0661',jp:'ハツカダイコン',romaji:'hatsukadaikon',en:'radish',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0662',jp:'アーティチョーク',romaji:'ātichōku',en:'artichoke',category:'Vegetables',color:'var(--n3)'},
  {id:'v-0663',jp:'果物',romaji:'kudamono',en:'fruit',category:'Fruits',color:'var(--n3)'},
  {id:'v-0664',jp:'リンゴ',romaji:'ringo',en:'apple',category:'Fruits',color:'var(--n3)'},
  {id:'v-0665',jp:'洋梨',romaji:'yōnashi',en:'pear',category:'Fruits',color:'var(--n3)'},
  {id:'v-0666',jp:'レモン',romaji:'remon',en:'lemon',category:'Fruits',color:'var(--n3)'},
  {id:'v-0667',jp:'イチゴ',romaji:'ichigo',en:'strawberry',category:'Fruits',color:'var(--n3)'},
  {id:'v-0668',jp:'プラム',romaji:'puramu',en:'plum',category:'Fruits',color:'var(--n3)'},
  {id:'v-0669',jp:'モモ',romaji:'momo',en:'peach',category:'Fruits',color:'var(--n3)'},
  {id:'v-0670',jp:'ラズベリー',romaji:'razuberī',en:'raspberry',category:'Fruits',color:'var(--n3)'},
  {id:'v-0671',jp:'パイナップル',romaji:'painappuru',en:'pineapple',category:'Fruits',color:'var(--n3)'},
  {id:'v-0672',jp:'バナナ',romaji:'banana',en:'banana',category:'Fruits',color:'var(--n3)'},
  {id:'v-0673',jp:'スイカ',romaji:'suika',en:'watermelon',category:'Fruits',color:'var(--n3)'},
  {id:'v-0674',jp:'ブドウ',romaji:'budō',en:'grape',category:'Fruits',color:'var(--n3)'},
  {id:'v-0675',jp:'チェリー',romaji:'cherī',en:'cherry',category:'Fruits',color:'var(--n3)'},
  {id:'v-0676',jp:'マンゴー',romaji:'mangō',en:'mango',category:'Fruits',color:'var(--n3)'},
  {id:'v-0677',jp:'アボカド',romaji:'abokado',en:'avocado',category:'Fruits',color:'var(--n3)'},
  {id:'v-0678',jp:'ピーナッツ',romaji:'pīnattsu',en:'peanut',category:'Fruits',color:'var(--n3)'},
  {id:'v-0679',jp:'アーモンド',romaji:'āmondo',en:'almond',category:'Fruits',color:'var(--n3)'},
  {id:'v-0680',jp:'マンダリン',romaji:'mandarin',en:'mandarin',category:'Fruits',color:'var(--n3)'},
  {id:'v-0681',jp:'アンズ',romaji:'anzu',en:'apricot',category:'Fruits',color:'var(--n3)'},
  {id:'v-0682',jp:'メロン',romaji:'meron',en:'melon',category:'Fruits',color:'var(--n3)'},
  {id:'v-0683',jp:'グレーブフルーツ',romaji:'gurēbu furūtsu',en:'grapefruit',category:'Fruits',color:'var(--n3)'},
  {id:'v-0684',jp:'ザクロ',romaji:'zakuro',en:'pomegranate',category:'Fruits',color:'var(--n3)'},
  {id:'v-0685',jp:'クロスグリ',romaji:'kuro suguri',en:'blackcurrant',category:'Fruits',color:'var(--n3)'},
  {id:'v-0686',jp:'セイヨウスグリ',romaji:'seiyō suguri',en:'gooseberry',category:'Fruits',color:'var(--n3)'},
  {id:'v-0687',jp:'ビルベリー',romaji:'biruberī',en:'bilberry',category:'Fruits',color:'var(--n3)'},
  {id:'v-0688',jp:'ブラックベリー',romaji:'burakku berī',en:'blackberry',category:'Fruits',color:'var(--n3)'},
  {id:'v-0689',jp:'レーズン',romaji:'rēzun',en:'raisin',category:'Fruits',color:'var(--n3)'},
  {id:'v-0690',jp:'イチジク',romaji:'ichijiku',en:'fig',category:'Fruits',color:'var(--n3)'},
  {id:'v-0691',jp:'デーツ',romaji:'dētsu',en:'date (fruit)',category:'Fruits',color:'var(--n3)'},
  {id:'v-0692',jp:'クルミ',romaji:'kurumi',en:'walnut',category:'Fruits',color:'var(--n3)'},
  {id:'v-0693',jp:'ココナッツ',romaji:'koko nattsu',en:'coconut',category:'Fruits',color:'var(--n3)'},
  {id:'v-0694',jp:'ピスタチオ',romaji:'pisutachio',en:'pistachio',category:'Fruits',color:'var(--n3)'},
  {id:'v-0695',jp:'クッキー',romaji:'kukkī',en:'cookies',category:'Sweets',color:'var(--n3)'},
  {id:'v-0696',jp:'チョコレート',romaji:'chokorēto',en:'chocolate',category:'Sweets',color:'var(--n3)'},
  {id:'v-0697',jp:'ケーキ',romaji:'kēki',en:'cake',category:'Sweets',color:'var(--n3)'},
  {id:'v-0698',jp:'アイスクリーム',romaji:'aisukurīmu',en:'ice cream',category:'Sweets',color:'var(--n3)'},
  {id:'v-0699',jp:'キャンディー',romaji:'kyandī',en:'candy',category:'Sweets',color:'var(--n3)'},
  {id:'v-0700',jp:'ワッフル',romaji:'waffuru',en:'waffle',category:'Sweets',color:'var(--n3)'},
  {id:'v-0701',jp:'パイ',romaji:'pai',en:'pie',category:'Sweets',color:'var(--n3)'},
  {id:'v-0702',jp:'マーマレード',romaji:'māmarēdo',en:'marmalade',category:'Sweets',color:'var(--n3)'},
  {id:'v-0703',jp:'プディング',romaji:'pudingu',en:'pudding',category:'Sweets',color:'var(--n3)'},
  {id:'v-0704',jp:'マスタード',romaji:'masutādo',en:'mustard',category:'Spices',color:'var(--n3)'},
  {id:'v-0705',jp:'ソース',romaji:'sōsu',en:'sauce',category:'Spices',color:'var(--n3)'},
  {id:'v-0706',jp:'酢',romaji:'su',en:'vinegar',category:'Spices',color:'var(--n3)'},
  {id:'v-0707',jp:'バジル',romaji:'bajiru',en:'basil',category:'Spices',color:'var(--n3)'},
  {id:'v-0708',jp:'シナモン',romaji:'shinamon',en:'cinnamon',category:'Spices',color:'var(--n3)'},
  {id:'v-0709',jp:'ゴマ',romaji:'goma',en:'sesame',category:'Spices',color:'var(--n3)'},
  {id:'v-0710',jp:'生姜',romaji:'shōga',en:'ginger',category:'Spices',color:'var(--n3)'},
  {id:'v-0711',jp:'パプリカ',romaji:'papurika',en:'paprika',category:'Spices',color:'var(--n3)'},
  {id:'v-0712',jp:'黒コショウ',romaji:'kuro koshō',en:'black pepper',category:'Spices',color:'var(--n3)'},
  {id:'v-0713',jp:'赤唐辛子',romaji:'aka tōgarashi',en:'red pepper',category:'Spices',color:'var(--n3)'},
  {id:'v-0714',jp:'セイヨウワサビ',romaji:'seiyō wasabi',en:'horseradish',category:'Spices',color:'var(--n3)'},
  {id:'v-0715',jp:'調味料',romaji:'chōmiryō',en:'condiment',category:'Spices',color:'var(--n3)'},
  {id:'v-0716',jp:'香辛料',romaji:'kōshinryō',en:'spice',category:'Spices',color:'var(--n3)'},
  {id:'v-0717',jp:'アニス',romaji:'anisu',en:'anise',category:'Spices',color:'var(--n3)'},
  {id:'v-0718',jp:'コリアンダー',romaji:'koriandā',en:'coriander',category:'Spices',color:'var(--n3)'},
  {id:'v-0719',jp:'ローリエ',romaji:'rōrie',en:'bay leaf',category:'Spices',color:'var(--n3)'},
  {id:'v-0720',jp:'サフラン',romaji:'safuran',en:'saffron',category:'Spices',color:'var(--n3)'},
  {id:'v-0721',jp:'醤油',romaji:'shoh-yu',en:'soy sauce',category:'Spices',color:'var(--n3)'},
  {id:'v-0722',jp:'名前',romaji:'namae',en:'name',category:'Family',color:'var(--n5)'},
  {id:'v-0723',jp:'誕生日',romaji:'tanjō bi',en:'date of birth',category:'Family',color:'var(--n5)'},
  {id:'v-0724',jp:'国籍',romaji:'kokuseki',en:'nationality',category:'Family',color:'var(--n5)'},
  {id:'v-0725',jp:'母親',romaji:'hahaoya',en:'mother',category:'Family',color:'var(--n5)'},
  {id:'v-0726',jp:'父親',romaji:'chichioya',en:'father',category:'Family',color:'var(--n5)'},
  {id:'v-0727',jp:'息子',romaji:'musuko',en:'son',category:'Family',color:'var(--n5)'},
  {id:'v-0728',jp:'娘',romaji:'musume',en:'daughter',category:'Family',color:'var(--n5)'},
  {id:'v-0729',jp:'兄',romaji:'ani',en:'elder brother',category:'Family',color:'var(--n5)'},
  {id:'v-0730',jp:'妹',romaji:'imōto',en:'younger sister',category:'Family',color:'var(--n5)'},
  {id:'v-0731',jp:'祖母',romaji:'sobo',en:'grandmother',category:'Family',color:'var(--n5)'},
  {id:'v-0732',jp:'祖父',romaji:'sofu',en:'grandfather',category:'Family',color:'var(--n5)'},
  {id:'v-0733',jp:'孫',romaji:'mago',en:'grandchildren',category:'Family',color:'var(--n5)'},
  {id:'v-0734',jp:'伯父',romaji:'oji',en:'uncle',category:'Family',color:'var(--n5)'},
  {id:'v-0735',jp:'伯母',romaji:'oba',en:'aunt',category:'Family',color:'var(--n5)'},
  {id:'v-0736',jp:'甥',romaji:'oi',en:'nephew',category:'Family',color:'var(--n5)'},
  {id:'v-0737',jp:'姪',romaji:'mei',en:'niece',category:'Family',color:'var(--n5)'},
  {id:'v-0738',jp:'妻',romaji:'tsuma',en:'wife',category:'Family',color:'var(--n5)'},
  {id:'v-0739',jp:'夫',romaji:'otto',en:'husband',category:'Family',color:'var(--n5)'},
  {id:'v-0740',jp:'子供',romaji:'kodomo',en:'child',category:'Family',color:'var(--n5)'},
  {id:'v-0741',jp:'親',romaji:'oya',en:'parents',category:'Family',color:'var(--n5)'},
  {id:'v-0742',jp:'友達',romaji:'tomodachi',en:'friend',category:'Family',color:'var(--n5)'},
  {id:'v-0743',jp:'隣人',romaji:'rinjin',en:'neighbor',category:'Family',color:'var(--n5)'},
  {id:'v-0744',jp:'同僚',romaji:'dōryō',en:'colleague',category:'Family',color:'var(--n5)'},
  {id:'v-0745',jp:'弟',romaji:'otōto',en:'younger brother',category:'Family',color:'var(--n5)'},
  {id:'v-0746',jp:'姉',romaji:'ane',en:'elder sister',category:'Family',color:'var(--n5)'},
  {id:'v-0747',jp:'長男',romaji:'chōnan',en:'eldest son',category:'Family',color:'var(--n5)'},
  {id:'v-0748',jp:'長女',romaji:'chōjo',en:'eldest daughter',category:'Family',color:'var(--n5)'},
  {id:'v-0749',jp:'従兄弟/従姉妹',romaji:'itoko',en:'cousin',category:'Family',color:'var(--n5)'},
  {id:'v-0750',jp:'お母さん',romaji:'okāsan',en:'mom',category:'Family',color:'var(--n5)'},
  {id:'v-0751',jp:'お父さん',romaji:'otōsan',en:'dad',category:'Family',color:'var(--n5)'},
  {id:'v-0752',jp:'孫息子',romaji:'mago musuko',en:'grandson',category:'Family',color:'var(--n5)'},
  {id:'v-0753',jp:'孫娘',romaji:'mago musume',en:'granddaughter',category:'Family',color:'var(--n5)'},
  {id:'v-0754',jp:'妻の母親',romaji:'tsuma no hahaoya',en:'mother-in-law',category:'Family',color:'var(--n5)'},
  {id:'v-0755',jp:'義父',romaji:'gifu',en:'father-in-law',category:'Family',color:'var(--n5)'},
  {id:'v-0756',jp:'娘の夫',romaji:'musume no otto',en:'son-in-law',category:'Family',color:'var(--n5)'},
  {id:'v-0757',jp:'継母',romaji:'keibo',en:'stepmother',category:'Family',color:'var(--n5)'},
  {id:'v-0758',jp:'継父',romaji:'keifu',en:'stepfather',category:'Family',color:'var(--n5)'},
  {id:'v-0759',jp:'赤ん坊',romaji:'akanbō',en:'baby',category:'Family',color:'var(--n5)'},
  {id:'v-0760',jp:'未亡人',romaji:'mibōjin',en:'widow',category:'Family',color:'var(--n5)'},
  {id:'v-0761',jp:'男やもめ',romaji:'otokoyamome',en:'widower',category:'Family',color:'var(--n5)'},
  {id:'v-0762',jp:'孤児',romaji:'koji',en:'orphan',category:'Family',color:'var(--n5)'},
  {id:'v-0763',jp:'養子にする',romaji:'yōshi ni suru',en:'to adopt',category:'Family',color:'var(--n5)'},
  {id:'v-0764',jp:'頭',romaji:'atama',en:'head',category:'Body',color:'var(--n5)'},
  {id:'v-0765',jp:'顔',romaji:'kao',en:'face',category:'Body',color:'var(--n5)'},
  {id:'v-0766',jp:'鼻',romaji:'hana',en:'nose',category:'Body',color:'var(--n5)'},
  {id:'v-0767',jp:'口',romaji:'kuchi',en:'mouth',category:'Body',color:'var(--n5)'},
  {id:'v-0768',jp:'眼',romaji:'me',en:'eye',category:'Body',color:'var(--n5)'},
  {id:'v-0769',jp:'耳',romaji:'mimi',en:'ear',category:'Body',color:'var(--n5)'},
  {id:'v-0770',jp:'歯',romaji:'ha',en:'tooth',category:'Body',color:'var(--n5)'},
  {id:'v-0771',jp:'舌',romaji:'shita',en:'tongue',category:'Body',color:'var(--n5)'},
  {id:'v-0772',jp:'首',romaji:'kubi',en:'neck',category:'Body',color:'var(--n5)'},
  {id:'v-0773',jp:'喉',romaji:'nodo',en:'throat',category:'Body',color:'var(--n5)'},
  {id:'v-0774',jp:'髪の毛',romaji:'kaminoke',en:'hair',category:'Body',color:'var(--n5)'},
  {id:'v-0775',jp:'手',romaji:'te',en:'hand',category:'Body',color:'var(--n5)'},
  {id:'v-0776',jp:'腕',romaji:'ude',en:'arm',category:'Body',color:'var(--n5)'},
  {id:'v-0777',jp:'指',romaji:'yubi',en:'finger',category:'Body',color:'var(--n5)'},
  {id:'v-0778',jp:'足',romaji:'ashi',en:'leg / foot',category:'Body',color:'var(--n5)'},
  {id:'v-0779',jp:'膝',romaji:'hiza',en:'knee',category:'Body',color:'var(--n5)'},
  {id:'v-0780',jp:'肩',romaji:'kata',en:'shoulder',category:'Body',color:'var(--n5)'},
  {id:'v-0781',jp:'腰',romaji:'koshi',en:'hip / waist',category:'Body',color:'var(--n5)'},
  {id:'v-0782',jp:'背中',romaji:'senaka',en:'back',category:'Body',color:'var(--n5)'},
  {id:'v-0783',jp:'胸',romaji:'mune',en:'chest',category:'Body',color:'var(--n5)'},
  {id:'v-0784',jp:'腹',romaji:'hara',en:'stomach',category:'Body',color:'var(--n5)'},
  {id:'v-0785',jp:'心臓',romaji:'shinzō',en:'heart',category:'Body',color:'var(--n5)'},
  {id:'v-0786',jp:'瞳',romaji:'hitomi',en:'pupil (eye)',category:'Body',color:'var(--n5)'},
  {id:'v-0787',jp:'眉',romaji:'mayu',en:'eyebrow',category:'Body',color:'var(--n5)'},
  {id:'v-0788',jp:'まつげ',romaji:'matsuge',en:'eyelash',category:'Body',color:'var(--n5)'},
  {id:'v-0789',jp:'まぶた',romaji:'mabuta',en:'eyelid',category:'Body',color:'var(--n5)'},
  {id:'v-0790',jp:'唇',romaji:'kuchibiru',en:'lips',category:'Body',color:'var(--n5)'},
  {id:'v-0791',jp:'頬骨',romaji:'hōbone',en:'cheekbones',category:'Body',color:'var(--n5)'},
  {id:'v-0792',jp:'歯茎',romaji:'haguki',en:'gum',category:'Body',color:'var(--n5)'},
  {id:'v-0793',jp:'あご',romaji:'ago',en:'chin',category:'Body',color:'var(--n5)'},
  {id:'v-0794',jp:'顎',romaji:'ago',en:'jaw',category:'Body',color:'var(--n5)'},
  {id:'v-0795',jp:'頬',romaji:'hō',en:'cheek',category:'Body',color:'var(--n5)'},
  {id:'v-0796',jp:'額',romaji:'hitai',en:'forehead',category:'Body',color:'var(--n5)'},
  {id:'v-0797',jp:'こめかみ',romaji:'komekami',en:'temple (head)',category:'Body',color:'var(--n5)'},
  {id:'v-0798',jp:'後頭部',romaji:'kōtōbu',en:'back of the head',category:'Body',color:'var(--n5)'},
  {id:'v-0799',jp:'髪形',romaji:'kamigata',en:'hairstyle',category:'Body',color:'var(--n5)'},
  {id:'v-0800',jp:'かつら',romaji:'katsura',en:'wig',category:'Body',color:'var(--n5)'},
  {id:'v-0801',jp:'口ひげ',romaji:'kuchihige',en:'mustache',category:'Body',color:'var(--n5)'},
  {id:'v-0802',jp:'あごひげ',romaji:'agohige',en:'beard',category:'Body',color:'var(--n5)'},
  {id:'v-0803',jp:'三つ編み',romaji:'mitsu ami',en:'braid',category:'Body',color:'var(--n5)'},
  {id:'v-0804',jp:'ポニーテール',romaji:'ponītēru',en:'ponytail',category:'Body',color:'var(--n5)'},
  {id:'v-0805',jp:'前髪',romaji:'maegami',en:'bangs',category:'Body',color:'var(--n5)'},
  {id:'v-0806',jp:'もみあげ',romaji:'momiage',en:'sideburns',category:'Body',color:'var(--n5)'},
  {id:'v-0807',jp:'つま先',romaji:'tsumasaki',en:'toe',category:'Body',color:'var(--n5)'},
  {id:'v-0808',jp:'親指',romaji:'oyayubi',en:'thumb',category:'Body',color:'var(--n5)'},
  {id:'v-0809',jp:'小指',romaji:'koyubi',en:'little finger',category:'Body',color:'var(--n5)'},
  {id:'v-0810',jp:'爪',romaji:'tsume',en:'nail',category:'Body',color:'var(--n5)'},
  {id:'v-0811',jp:'拳',romaji:'kobushi',en:'fist',category:'Body',color:'var(--n5)'},
  {id:'v-0812',jp:'手のひら',romaji:'tenohira',en:'palm',category:'Body',color:'var(--n5)'},
  {id:'v-0813',jp:'手首',romaji:'tekubi',en:'wrist',category:'Body',color:'var(--n5)'},
  {id:'v-0814',jp:'前腕',romaji:'zen wan',en:'forearm',category:'Body',color:'var(--n5)'},
  {id:'v-0815',jp:'肘',romaji:'hiji',en:'elbow',category:'Body',color:'var(--n5)'},
  {id:'v-0816',jp:'ふくらはぎ',romaji:'fuku ra hagi',en:'calf (leg)',category:'Body',color:'var(--n5)'},
  {id:'v-0817',jp:'身体',romaji:'shintai',en:'body',category:'Body',color:'var(--n5)'},
  {id:'v-0818',jp:'へそ',romaji:'heso',en:'navel',category:'Body',color:'var(--n5)'},
  {id:'v-0819',jp:'臀部',romaji:'denbu',en:'buttocks',category:'Body',color:'var(--n5)'},
  {id:'v-0820',jp:'肌',romaji:'hada',en:'skin',category:'Body',color:'var(--n5)'},
  {id:'v-0821',jp:'傷跡',romaji:'kizuato',en:'scar',category:'Body',color:'var(--n5)'},
  {id:'v-0822',jp:'タトゥー',romaji:'tatū',en:'tattoo',category:'Body',color:'var(--n5)'},
  {id:'v-0823',jp:'病気',romaji:'byōki',en:'sickness',category:'Health',color:'var(--n4)'},
  {id:'v-0824',jp:'健康',romaji:'kenkō',en:'health',category:'Health',color:'var(--n4)'},
  {id:'v-0825',jp:'風邪',romaji:'kaze',en:'cold (illness)',category:'Health',color:'var(--n4)'},
  {id:'v-0826',jp:'発熱',romaji:'hatsunetsu',en:'fever',category:'Health',color:'var(--n4)'},
  {id:'v-0827',jp:'咳',romaji:'seki',en:'cough',category:'Health',color:'var(--n4)'},
  {id:'v-0828',jp:'アレルギー',romaji:'arerugī',en:'allergy',category:'Health',color:'var(--n4)'},
  {id:'v-0829',jp:'糖尿病',romaji:'tōnyō byō',en:'diabetes',category:'Health',color:'var(--n4)'},
  {id:'v-0830',jp:'骨折',romaji:'kossetsu',en:'fracture',category:'Health',color:'var(--n4)'},
  {id:'v-0831',jp:'手術',romaji:'shujutsu',en:'surgery',category:'Health',color:'var(--n4)'},
  {id:'v-0832',jp:'注射',romaji:'chūsha',en:'injection',category:'Health',color:'var(--n4)'},
  {id:'v-0833',jp:'薬',romaji:'kusuri',en:'medicine',category:'Health',color:'var(--n4)'},
  {id:'v-0834',jp:'病院',romaji:'byōin',en:'hospital',category:'Health',color:'var(--n4)'},
  {id:'v-0835',jp:'患者',romaji:'kanja',en:'patient',category:'Health',color:'var(--n4)'},
  {id:'v-0836',jp:'包帯',romaji:'hōtai',en:'bandage',category:'Health',color:'var(--n4)'},
  {id:'v-0837',jp:'体温計',romaji:'taionkei',en:'thermometer',category:'Health',color:'var(--n4)'},
  {id:'v-0838',jp:'車椅子',romaji:'kurumaisu',en:'wheelchair',category:'Health',color:'var(--n4)'},
  {id:'v-0839',jp:'インフルエンザ',romaji:'infuruenza',en:'influenza',category:'Health',color:'var(--n4)'},
  {id:'v-0840',jp:'がん',romaji:'gan',en:'cancer',category:'Health',color:'var(--n4)'},
  {id:'v-0841',jp:'ウィルス',romaji:'wirusu',en:'virus',category:'Health',color:'var(--n4)'},
  {id:'v-0842',jp:'予防接種',romaji:'yobō sesshu',en:'vaccination',category:'Health',color:'var(--n4)'},
  {id:'v-0843',jp:'風邪をひく',romaji:'kaze wo hiku',en:'to catch a cold',category:'Health',color:'var(--n4)'},
  {id:'v-0844',jp:'鼻水',romaji:'hanamizu',en:'runny nose',category:'Health',color:'var(--n4)'},
  {id:'v-0845',jp:'気管支炎',romaji:'kikanshien',en:'bronchitis',category:'Health',color:'var(--n4)'},
  {id:'v-0846',jp:'肺炎',romaji:'haien',en:'pneumonia',category:'Health',color:'var(--n4)'},
  {id:'v-0847',jp:'ぜんそく',romaji:'zensoku',en:'asthma',category:'Health',color:'var(--n4)'},
  {id:'v-0848',jp:'歯痛',romaji:'shitsū',en:'toothache',category:'Health',color:'var(--n4)'},
  {id:'v-0849',jp:'下痢',romaji:'geri',en:'diarrhea',category:'Health',color:'var(--n4)'},
  {id:'v-0850',jp:'便秘',romaji:'benpi',en:'constipation',category:'Health',color:'var(--n4)'},
  {id:'v-0851',jp:'食中毒',romaji:'shokuchūdoku',en:'food poisoning',category:'Health',color:'var(--n4)'},
  {id:'v-0852',jp:'心臓発作',romaji:'shinzō hossa',en:'heart attack',category:'Health',color:'var(--n4)'},
  {id:'v-0853',jp:'脳卒中',romaji:'nōsocchū',en:'stroke',category:'Health',color:'var(--n4)'},
  {id:'v-0854',jp:'エイズ',romaji:'eizu',en:'AIDS',category:'Health',color:'var(--n4)'},
  {id:'v-0855',jp:'体温',romaji:'taion',en:'temperature (body)',category:'Health',color:'var(--n4)'},
  {id:'v-0856',jp:'脈拍',romaji:'myakuhaku',en:'pulse',category:'Health',color:'var(--n4)'},
  {id:'v-0857',jp:'くしゃみをする',romaji:'kushami wo suru',en:'to sneeze',category:'Health',color:'var(--n4)'},
  {id:'v-0858',jp:'気絶',romaji:'kizetsu',en:'faint',category:'Health',color:'var(--n4)'},
  {id:'v-0859',jp:'打撲傷',romaji:'dabokushō',en:'bruise',category:'Health',color:'var(--n4)'},
  {id:'v-0860',jp:'出血',romaji:'shukketsu',en:'bleeding',category:'Health',color:'var(--n4)'},
  {id:'v-0861',jp:'火傷',romaji:'yakedo',en:'burn (injury)',category:'Health',color:'var(--n4)'},
  {id:'v-0862',jp:'嘔吐',romaji:'ōto',en:'vomiting',category:'Health',color:'var(--n4)'},
  {id:'v-0863',jp:'医者',romaji:'isha',en:'doctor',category:'Health',color:'var(--n4)'},
  {id:'v-0864',jp:'診断',romaji:'shindan',en:'diagnosis',category:'Health',color:'var(--n4)'},
  {id:'v-0865',jp:'治療',romaji:'chiryō',en:'medical treatment',category:'Health',color:'var(--n4)'},
  {id:'v-0866',jp:'回復する',romaji:'kaifuku suru',en:'to recover',category:'Health',color:'var(--n4)'},
  {id:'v-0867',jp:'処方',romaji:'shohō',en:'prescription',category:'Health',color:'var(--n4)'},
  {id:'v-0868',jp:'錠剤',romaji:'jōzai',en:'tablet/pill',category:'Health',color:'var(--n4)'},
  {id:'v-0869',jp:'軟膏',romaji:'nankō',en:'ointment',category:'Health',color:'var(--n4)'},
  {id:'v-0870',jp:'シロップ',romaji:'shiroppu',en:'syrup',category:'Health',color:'var(--n4)'},
  {id:'v-0871',jp:'脱脂綿',romaji:'dasshimen',en:'cotton wool',category:'Health',color:'var(--n4)'},
  {id:'v-0872',jp:'ばんそうこう',romaji:'bansōkō',en:'Band-Aid',category:'Health',color:'var(--n4)'},
  {id:'v-0873',jp:'注射器',romaji:'chūsha ki',en:'syringe',category:'Health',color:'var(--n4)'},
  {id:'v-0874',jp:'松葉杖',romaji:'matsubazue',en:'crutches',category:'Health',color:'var(--n4)'},
  {id:'v-0875',jp:'痛み止め',romaji:'itami tome',en:'painkiller',category:'Health',color:'var(--n4)'},
  {id:'v-0876',jp:'下剤',romaji:'gezai',en:'laxative',category:'Health',color:'var(--n4)'},
  {id:'v-0877',jp:'歯医者',romaji:'ha-isha',en:'dentist',category:'Health',color:'var(--n4)'},
  {id:'v-0878',jp:'詰め物',romaji:'tsume mono',en:'filling (tooth)',category:'Health',color:'var(--n4)'},
  {id:'v-0879',jp:'ヨード',romaji:'yōdo',en:'iodine',category:'Health',color:'var(--n4)'},
  {id:'v-0880',jp:'アパート',romaji:'apāto',en:'apartment',category:'Home',color:'var(--n4)'},
  {id:'v-0881',jp:'寝室',romaji:'shinshitsu',en:'bedroom',category:'Home',color:'var(--n4)'},
  {id:'v-0882',jp:'台所',romaji:'daidokoro',en:'kitchen',category:'Home',color:'var(--n4)'},
  {id:'v-0883',jp:'浴室',romaji:'yokushitsu',en:'bathroom',category:'Home',color:'var(--n4)'},
  {id:'v-0884',jp:'居間',romaji:'ima',en:'living room',category:'Home',color:'var(--n4)'},
  {id:'v-0885',jp:'天井',romaji:'tenjō',en:'ceiling',category:'Home',color:'var(--n4)'},
  {id:'v-0886',jp:'床',romaji:'yuka',en:'floor',category:'Home',color:'var(--n4)'},
  {id:'v-0887',jp:'窓',romaji:'mado',en:'window',category:'Home',color:'var(--n4)'},
  {id:'v-0888',jp:'ドア',romaji:'doa',en:'door',category:'Home',color:'var(--n4)'},
  {id:'v-0889',jp:'テーブル',romaji:'tēburu',en:'table',category:'Home',color:'var(--n4)'},
  {id:'v-0890',jp:'椅子',romaji:'isu',en:'chair',category:'Home',color:'var(--n4)'},
  {id:'v-0891',jp:'ベッド',romaji:'beddo',en:'bed',category:'Home',color:'var(--n4)'},
  {id:'v-0892',jp:'ソファ',romaji:'sofa',en:'sofa',category:'Home',color:'var(--n4)'},
  {id:'v-0893',jp:'鏡',romaji:'kagami',en:'mirror',category:'Home',color:'var(--n4)'},
  {id:'v-0894',jp:'カーペット',romaji:'kāpetto',en:'carpet',category:'Home',color:'var(--n4)'},
  {id:'v-0895',jp:'カーテン',romaji:'kāten',en:'drapes',category:'Home',color:'var(--n4)'},
  {id:'v-0896',jp:'枕',romaji:'makura',en:'pillow',category:'Home',color:'var(--n4)'},
  {id:'v-0897',jp:'毛布',romaji:'mōfu',en:'blanket',category:'Home',color:'var(--n4)'},
  {id:'v-0898',jp:'食堂',romaji:'shokudō',en:'dining room',category:'Home',color:'var(--n4)'},
  {id:'v-0899',jp:'書斎',romaji:'shosai',en:'study (home office)',category:'Home',color:'var(--n4)'},
  {id:'v-0900',jp:'玄関',romaji:'genkan',en:'entry room',category:'Home',color:'var(--n4)'},
  {id:'v-0901',jp:'家具',romaji:'kagu',en:'furniture',category:'Home',color:'var(--n4)'},
  {id:'v-0902',jp:'肘掛け椅子',romaji:'hijikake isu',en:'armchair',category:'Home',color:'var(--n4)'},
  {id:'v-0903',jp:'書棚',romaji:'shodana',en:'bookcase',category:'Home',color:'var(--n4)'},
  {id:'v-0904',jp:'棚',romaji:'tana',en:'shelf',category:'Home',color:'var(--n4)'},
  {id:'v-0905',jp:'ワードローブ',romaji:'wādo rōbu',en:'wardrobe',category:'Home',color:'var(--n4)'},
  {id:'v-0906',jp:'チェスト',romaji:'chesuto',en:'dresser',category:'Home',color:'var(--n4)'},
  {id:'v-0907',jp:'コーヒーテーブル',romaji:'kōhī tēburu',en:'coffee table',category:'Home',color:'var(--n4)'},
  {id:'v-0908',jp:'暖炉',romaji:'danro',en:'fireplace',category:'Home',color:'var(--n4)'},
  {id:'v-0909',jp:'ろうそく',romaji:'rōsoku',en:'candle',category:'Home',color:'var(--n4)'},
  {id:'v-0910',jp:'壁紙',romaji:'kabegami',en:'wallpaper',category:'Home',color:'var(--n4)'},
  {id:'v-0911',jp:'シャンデリア',romaji:'shanderia',en:'chandelier',category:'Home',color:'var(--n4)'},
  {id:'v-0912',jp:'引き出し',romaji:'hikidashi',en:'drawer',category:'Home',color:'var(--n4)'},
  {id:'v-0913',jp:'シーツ',romaji:'shītsu',en:'bed sheet',category:'Home',color:'var(--n4)'},
  {id:'v-0914',jp:'ベッドカバー',romaji:'beddo kabā',en:'bedspread',category:'Home',color:'var(--n4)'},
  {id:'v-0915',jp:'冷蔵庫',romaji:'reizōko',en:'refrigerator',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0916',jp:'電子レンジ',romaji:'denshi renji',en:'microwave',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0917',jp:'オーブン',romaji:'ōbun',en:'oven',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0918',jp:'食器洗い機',romaji:'shokkiarai ki',en:'dishwasher',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0919',jp:'トースター',romaji:'tōsutā',en:'toaster',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0920',jp:'コーヒーメーカー',romaji:'kōhī mēkā',en:'coffee maker',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0921',jp:'やかん',romaji:'yakan',en:'kettle',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0922',jp:'フライパン',romaji:'furaipan',en:'frying pan',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0923',jp:'鍋',romaji:'nabe',en:'pot',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0924',jp:'包丁',romaji:'hōchō',en:'kitchen knife',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0925',jp:'皿',romaji:'sara',en:'plate',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0926',jp:'コップ',romaji:'koppu',en:'glass',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0927',jp:'カップ',romaji:'kappu',en:'cup',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0928',jp:'ボトル',romaji:'botoru',en:'bottle',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0929',jp:'ガスコンロ',romaji:'gasu konro',en:'gas cooker',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0930',jp:'電気コンロ',romaji:'denki konro',en:'electric cooker',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0931',jp:'冷凍庫',romaji:'reitōko',en:'freezer',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0932',jp:'急須',romaji:'kyūsu',en:'teapot',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0933',jp:'蓋',romaji:'futa',en:'lid',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0934',jp:'茶さじ',romaji:'cha saji',en:'teaspoon',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0935',jp:'大さじ',romaji:'ōsaji',en:'tablespoon',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0936',jp:'砂糖入れ',romaji:'satō ire',en:'sugar bowl',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0937',jp:'塩入れ',romaji:'shio ire',en:'salt shaker',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0938',jp:'おたま',romaji:'o tama',en:'ladle',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0939',jp:'配膳盆',romaji:'haizen bon',en:'tray',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0940',jp:'栓抜き',romaji:'sen nuki',en:'bottle opener',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0941',jp:'缶切り',romaji:'kankiri',en:'can opener',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0942',jp:'コルク抜き',romaji:'koruku nuki',en:'corkscrew',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0943',jp:'ゴミ箱',romaji:'gomibako',en:'trash can',category:'Kitchen',color:'var(--n3)'},
  {id:'v-0944',jp:'テレビ',romaji:'terebi',en:'TV',category:'Appliances',color:'var(--n3)'},
  {id:'v-0945',jp:'ラジオ',romaji:'rajio',en:'radio',category:'Appliances',color:'var(--n3)'},
  {id:'v-0946',jp:'掃除機',romaji:'sōji ki',en:'vacuum cleaner',category:'Appliances',color:'var(--n3)'},
  {id:'v-0947',jp:'アイロン',romaji:'airon',en:'iron',category:'Appliances',color:'var(--n3)'},
  {id:'v-0948',jp:'洗濯機',romaji:'sentaku ki',en:'washing machine',category:'Appliances',color:'var(--n3)'},
  {id:'v-0949',jp:'カメラ',romaji:'kamera',en:'camera',category:'Appliances',color:'var(--n3)'},
  {id:'v-0950',jp:'ゲーム機',romaji:'gēmu ki',en:'video game console',category:'Appliances',color:'var(--n3)'},
  {id:'v-0951',jp:'リモコン',romaji:'rimokon',en:'remote control',category:'Appliances',color:'var(--n3)'},
  {id:'v-0952',jp:'ビデオ',romaji:'bideo',en:'video/VCR',category:'Appliances',color:'var(--n3)'},
  {id:'v-0953',jp:'プレーヤー',romaji:'purēyā',en:'player (CD/MP3)',category:'Appliances',color:'var(--n3)'},
  {id:'v-0954',jp:'DVDプレーヤー',romaji:'dībuidī purēyā',en:'DVD player',category:'Appliances',color:'var(--n3)'},
  {id:'v-0955',jp:'アンプ',romaji:'anpu',en:'amplifier',category:'Appliances',color:'var(--n3)'},
  {id:'v-0956',jp:'ビデオカメラ',romaji:'bideo kamera',en:'video camera',category:'Appliances',color:'var(--n3)'},
  {id:'v-0957',jp:'デジタルカメラ',romaji:'dejitaru kamera',en:'digital camera',category:'Appliances',color:'var(--n3)'},
  {id:'v-0958',jp:'アイロン台',romaji:'airondai',en:'ironing board',category:'Appliances',color:'var(--n3)'},
  {id:'v-0959',jp:'ミシン',romaji:'mishin',en:'sewing machine',category:'Appliances',color:'var(--n3)'},
  {id:'v-0960',jp:'マイクロフォン',romaji:'maikurofon',en:'microphone',category:'Appliances',color:'var(--n3)'},
  {id:'v-0961',jp:'宇宙',romaji:'uchū',en:'space / universe',category:'Space',color:'var(--n2)'},
  {id:'v-0962',jp:'星',romaji:'hoshi',en:'star',category:'Space',color:'var(--n2)'},
  {id:'v-0963',jp:'惑星',romaji:'wakusei',en:'planet',category:'Space',color:'var(--n2)'},
  {id:'v-0964',jp:'月',romaji:'tsuki',en:'moon',category:'Space',color:'var(--n2)'},
  {id:'v-0965',jp:'太陽',romaji:'taiyō',en:'sun',category:'Space',color:'var(--n2)'},
  {id:'v-0966',jp:'地球',romaji:'chikyū',en:'Earth',category:'Space',color:'var(--n2)'},
  {id:'v-0967',jp:'銀河系',romaji:'gingakei',en:'galaxy',category:'Space',color:'var(--n2)'},
  {id:'v-0968',jp:'彗星',romaji:'suisei',en:'comet',category:'Space',color:'var(--n2)'},
  {id:'v-0969',jp:'宇宙船',romaji:'uchūsen',en:'spaceship',category:'Space',color:'var(--n2)'},
  {id:'v-0970',jp:'宇宙服',romaji:'uchū fuku',en:'spacesuit',category:'Space',color:'var(--n2)'},
  {id:'v-0971',jp:'望遠鏡',romaji:'bōenkyō',en:'telescope',category:'Space',color:'var(--n2)'},
  {id:'v-0972',jp:'隕石',romaji:'inseki',en:'meteorite',category:'Space',color:'var(--n2)'},
  {id:'v-0973',jp:'星座',romaji:'seiza',en:'constellation',category:'Space',color:'var(--n2)'},
  {id:'v-0974',jp:'衛星',romaji:'eisei',en:'satellite',category:'Space',color:'var(--n2)'},
  {id:'v-0975',jp:'小惑星',romaji:'shōwakusei',en:'asteroid',category:'Space',color:'var(--n2)'},
  {id:'v-0976',jp:'軌道',romaji:'kidō',en:'orbit',category:'Space',color:'var(--n2)'},
  {id:'v-0977',jp:'大気',romaji:'taiki',en:'atmosphere',category:'Space',color:'var(--n2)'},
  {id:'v-0978',jp:'太陽系',romaji:'taiyōkei',en:'solar system',category:'Space',color:'var(--n2)'},
  {id:'v-0979',jp:'日食',romaji:'nisshoku',en:'solar eclipse',category:'Space',color:'var(--n2)'},
  {id:'v-0980',jp:'火星',romaji:'kasei',en:'Mars',category:'Space',color:'var(--n2)'},
  {id:'v-0981',jp:'金星',romaji:'kinsei',en:'Venus',category:'Space',color:'var(--n2)'},
  {id:'v-0982',jp:'木星',romaji:'mokusei',en:'Jupiter',category:'Space',color:'var(--n2)'},
  {id:'v-0983',jp:'土星',romaji:'dosei',en:'Saturn',category:'Space',color:'var(--n2)'},
  {id:'v-0984',jp:'水星',romaji:'suisei',en:'Mercury',category:'Space',color:'var(--n2)'},
  {id:'v-0985',jp:'天王星',romaji:'tennōsei',en:'Uranus',category:'Space',color:'var(--n2)'},
  {id:'v-0986',jp:'海王星',romaji:'kaiōsei',en:'Neptune',category:'Space',color:'var(--n2)'},
  {id:'v-0987',jp:'天の川',romaji:'amanogawa',en:'Milky Way',category:'Space',color:'var(--n2)'},
  {id:'v-0988',jp:'北極星',romaji:'hokkyokusei',en:'North Star',category:'Space',color:'var(--n2)'},
  {id:'v-0989',jp:'宇宙ステーション',romaji:'uchū sutēshon',en:'space station',category:'Space',color:'var(--n2)'},
  {id:'v-0990',jp:'天文台',romaji:'tenmondai',en:'observatory',category:'Space',color:'var(--n2)'},
  {id:'v-0991',jp:'酸素',romaji:'sanso',en:'oxygen',category:'Space',color:'var(--n2)'},
  {id:'v-0992',jp:'無重力',romaji:'mu jūryoku',en:'weightlessness',category:'Space',color:'var(--n2)'},
  {id:'v-0993',jp:'海',romaji:'umi',en:'sea',category:'Geography',color:'var(--n3)'},
  {id:'v-0994',jp:'海洋',romaji:'kaiyō',en:'ocean',category:'Geography',color:'var(--n3)'},
  {id:'v-0995',jp:'川',romaji:'kawa',en:'river',category:'Geography',color:'var(--n3)'},
  {id:'v-0996',jp:'湖',romaji:'mizūmi',en:'lake',category:'Geography',color:'var(--n3)'},
  {id:'v-0997',jp:'山',romaji:'yama',en:'mountain',category:'Geography',color:'var(--n3)'},
  {id:'v-0998',jp:'島',romaji:'shima',en:'island',category:'Geography',color:'var(--n3)'},
  {id:'v-0999',jp:'砂漠',romaji:'sabaku',en:'desert',category:'Geography',color:'var(--n3)'},
  {id:'v-1000',jp:'森林',romaji:'shinrin',en:'forest',category:'Geography',color:'var(--n3)'},
  {id:'v-1001',jp:'平原',romaji:'heigen',en:'plain',category:'Geography',color:'var(--n3)'},
  {id:'v-1002',jp:'火山',romaji:'kazan',en:'volcano',category:'Geography',color:'var(--n3)'},
  {id:'v-1003',jp:'北',romaji:'kita',en:'north',category:'Geography',color:'var(--n3)'},
  {id:'v-1004',jp:'南',romaji:'minami',en:'south',category:'Geography',color:'var(--n3)'},
  {id:'v-1005',jp:'東',romaji:'higashi',en:'east',category:'Geography',color:'var(--n3)'},
  {id:'v-1006',jp:'西',romaji:'nishi',en:'west',category:'Geography',color:'var(--n3)'},
  {id:'v-1007',jp:'大陸',romaji:'tairiku',en:'continent',category:'Geography',color:'var(--n3)'},
  {id:'v-1008',jp:'半島',romaji:'hantō',en:'peninsula',category:'Geography',color:'var(--n3)'},
  {id:'v-1009',jp:'地球儀',romaji:'chikyūgi',en:'globe (table)',category:'Geography',color:'var(--n3)'},
  {id:'v-1010',jp:'地図帳',romaji:'chizu chō',en:'atlas',category:'Geography',color:'var(--n3)'},
  {id:'v-1011',jp:'ヨーロッパ',romaji:'yōroppa',en:'Europe',category:'Geography',color:'var(--n3)'},
  {id:'v-1012',jp:'アジア',romaji:'ajia',en:'Asia',category:'Geography',color:'var(--n3)'},
  {id:'v-1013',jp:'アフリカ',romaji:'afurika',en:'Africa',category:'Geography',color:'var(--n3)'},
  {id:'v-1014',jp:'北アメリカ',romaji:'kita america',en:'North America',category:'Geography',color:'var(--n3)'},
  {id:'v-1015',jp:'南アメリカ',romaji:'minami america',en:'South America',category:'Geography',color:'var(--n3)'},
  {id:'v-1016',jp:'南極大陸',romaji:'nankyokutairiku',en:'Antarctica',category:'Geography',color:'var(--n3)'},
  {id:'v-1017',jp:'北極',romaji:'hokkyoku',en:'the Arctic',category:'Geography',color:'var(--n3)'},
  {id:'v-1018',jp:'天気',romaji:'tenki',en:'weather',category:'Weather',color:'var(--n4)'},
  {id:'v-1019',jp:'雨',romaji:'ame',en:'rain',category:'Weather',color:'var(--n4)'},
  {id:'v-1020',jp:'雪',romaji:'yuki',en:'snow',category:'Weather',color:'var(--n4)'},
  {id:'v-1021',jp:'雲',romaji:'kumo',en:'cloud',category:'Weather',color:'var(--n4)'},
  {id:'v-1022',jp:'風',romaji:'kaze',en:'wind',category:'Weather',color:'var(--n4)'},
  {id:'v-1023',jp:'霧',romaji:'kiri',en:'fog',category:'Weather',color:'var(--n4)'},
  {id:'v-1024',jp:'雷',romaji:'kaminari',en:'thunder',category:'Weather',color:'var(--n4)'},
  {id:'v-1025',jp:'嵐',romaji:'arashi',en:'storm',category:'Weather',color:'var(--n4)'},
  {id:'v-1026',jp:'台風',romaji:'taifū',en:'typhoon',category:'Weather',color:'var(--n4)'},
  {id:'v-1027',jp:'地震',romaji:'jishin',en:'earthquake',category:'Weather',color:'var(--n4)'},
  {id:'v-1028',jp:'洪水',romaji:'kōzui',en:'flood',category:'Weather',color:'var(--n4)'},
  {id:'v-1029',jp:'津波',romaji:'tsunami',en:'tsunami',category:'Weather',color:'var(--n4)'},
  {id:'v-1030',jp:'晴れの',romaji:'hare no',en:'sunny',category:'Weather',color:'var(--n4)'},
  {id:'v-1031',jp:'曇りの',romaji:'kumori no',en:'cloudy',category:'Weather',color:'var(--n4)'},
  {id:'v-1032',jp:'暑い',romaji:'atsui',en:'hot (weather)',category:'Weather',color:'var(--n4)'},
  {id:'v-1033',jp:'寒い',romaji:'samui',en:'cold (weather)',category:'Weather',color:'var(--n4)'},
  {id:'v-1034',jp:'温度',romaji:'ondo',en:'temperature',category:'Weather',color:'var(--n4)'},
  {id:'v-1035',jp:'湿度の',romaji:'shitsudo no',en:'humid',category:'Weather',color:'var(--n4)'},
  {id:'v-1036',jp:'暖かい',romaji:'atatakai',en:'warm',category:'Weather',color:'var(--n4)'},
  {id:'v-1037',jp:'雨が降っている',romaji:'ame ga futte iru',en:'it\\\'s raining',category:'Weather',color:'var(--n4)'},
  {id:'v-1038',jp:'大雨',romaji:'ōame',en:'downpour',category:'Weather',color:'var(--n4)'},
  {id:'v-1039',jp:'雪が降っている',romaji:'yuki ga futte iru',en:'it\\\'s snowing',category:'Weather',color:'var(--n4)'},
  {id:'v-1040',jp:'稲妻',romaji:'inazuma',en:'lightning',category:'Weather',color:'var(--n4)'},
  {id:'v-1041',jp:'雷雨',romaji:'raiu',en:'thunderstorm',category:'Weather',color:'var(--n4)'},
  {id:'v-1042',jp:'ひょう',romaji:'hyō',en:'hail',category:'Weather',color:'var(--n4)'},
  {id:'v-1043',jp:'竜巻',romaji:'tatsumaki',en:'tornado',category:'Weather',color:'var(--n4)'},
  {id:'v-1044',jp:'雪崩',romaji:'nadare',en:'avalanche',category:'Weather',color:'var(--n4)'},
  {id:'v-1045',jp:'猛吹雪',romaji:'mō fubuki',en:'blizzard',category:'Weather',color:'var(--n4)'},
  {id:'v-1046',jp:'災害',romaji:'saigai',en:'disaster',category:'Weather',color:'var(--n4)'},
  {id:'v-1047',jp:'トラ',romaji:'tora',en:'tiger',category:'Animals',color:'var(--n4)'},
  {id:'v-1048',jp:'ライオン',romaji:'raion',en:'lion',category:'Animals',color:'var(--n4)'},
  {id:'v-1049',jp:'オオカミ',romaji:'ōkami',en:'wolf',category:'Animals',color:'var(--n4)'},
  {id:'v-1050',jp:'キツネ',romaji:'kitsune',en:'fox',category:'Animals',color:'var(--n4)'},
  {id:'v-1051',jp:'ヒョウ',romaji:'hyō',en:'leopard',category:'Animals',color:'var(--n4)'},
  {id:'v-1052',jp:'クマ',romaji:'kuma',en:'bear',category:'Animals',color:'var(--n4)'},
  {id:'v-1053',jp:'パンダ',romaji:'panda',en:'panda',category:'Animals',color:'var(--n4)'},
  {id:'v-1054',jp:'ゾウ',romaji:'zō',en:'elephant',category:'Animals',color:'var(--n4)'},
  {id:'v-1055',jp:'キリン',romaji:'kirin',en:'giraffe',category:'Animals',color:'var(--n4)'},
  {id:'v-1056',jp:'サル',romaji:'saru',en:'monkey',category:'Animals',color:'var(--n4)'},
  {id:'v-1057',jp:'カバ',romaji:'kaba',en:'hippopotamus',category:'Animals',color:'var(--n4)'},
  {id:'v-1058',jp:'カンガルー',romaji:'kangarū',en:'kangaroo',category:'Animals',color:'var(--n4)'},
  {id:'v-1059',jp:'シマウマ',romaji:'shimauma',en:'zebra',category:'Animals',color:'var(--n4)'},
  {id:'v-1060',jp:'クジラ',romaji:'kujira',en:'whale',category:'Animals',color:'var(--n4)'},
  {id:'v-1061',jp:'イルカ',romaji:'iruka',en:'dolphin',category:'Animals',color:'var(--n4)'},
  {id:'v-1062',jp:'アザラシ',romaji:'azarashi',en:'seal',category:'Animals',color:'var(--n4)'},
  {id:'v-1063',jp:'ウサギ',romaji:'usagi',en:'rabbit',category:'Animals',color:'var(--n4)'},
  {id:'v-1064',jp:'ネズミ',romaji:'nezumi',en:'mouse',category:'Animals',color:'var(--n4)'},
  {id:'v-1065',jp:'コウモリ',romaji:'kōmori',en:'bat',category:'Animals',color:'var(--n4)'},
  {id:'v-1066',jp:'猫',romaji:'neko',en:'cat',category:'Animals',color:'var(--n4)'},
  {id:'v-1067',jp:'犬',romaji:'inu',en:'dog',category:'Animals',color:'var(--n4)'},
  {id:'v-1068',jp:'ウマ',romaji:'uma',en:'horse',category:'Animals',color:'var(--n4)'},
  {id:'v-1069',jp:'牛',romaji:'ushi',en:'cow',category:'Animals',color:'var(--n4)'},
  {id:'v-1070',jp:'ブタ',romaji:'buta',en:'pig',category:'Animals',color:'var(--n4)'},
  {id:'v-1071',jp:'羊',romaji:'hitsuji',en:'sheep',category:'Animals',color:'var(--n4)'},
  {id:'v-1072',jp:'ヤギ',romaji:'yagi',en:'goat',category:'Animals',color:'var(--n4)'},
  {id:'v-1073',jp:'ニワトリ',romaji:'niwatori',en:'hen',category:'Animals',color:'var(--n4)'},
  {id:'v-1074',jp:'ジャガー',romaji:'jagā',en:'jaguar',category:'Animals',color:'var(--n4)'},
  {id:'v-1075',jp:'チーター',romaji:'chītā',en:'cheetah',category:'Animals',color:'var(--n4)'},
  {id:'v-1076',jp:'ピューマ',romaji:'pyūma',en:'puma',category:'Animals',color:'var(--n4)'},
  {id:'v-1077',jp:'雪豹',romaji:'yuki hyō',en:'snow leopard',category:'Animals',color:'var(--n4)'},
  {id:'v-1078',jp:'オオヤマネコ',romaji:'ōyamaneko',en:'lynx',category:'Animals',color:'var(--n4)'},
  {id:'v-1079',jp:'コヨーテ',romaji:'koyōte',en:'coyote',category:'Animals',color:'var(--n4)'},
  {id:'v-1080',jp:'ハイエナ',romaji:'haiena',en:'hyena',category:'Animals',color:'var(--n4)'},
  {id:'v-1081',jp:'ホッキョクグマ',romaji:'hokkyokuguma',en:'polar bear',category:'Animals',color:'var(--n4)'},
  {id:'v-1082',jp:'リス',romaji:'risu',en:'squirrel',category:'Animals',color:'var(--n4)'},
  {id:'v-1083',jp:'ハリネズミ',romaji:'harinezumi',en:'hedgehog',category:'Animals',color:'var(--n4)'},
  {id:'v-1084',jp:'ラット',romaji:'ratto',en:'rat',category:'Animals',color:'var(--n4)'},
  {id:'v-1085',jp:'ビーバー',romaji:'bībā',en:'beaver',category:'Animals',color:'var(--n4)'},
  {id:'v-1086',jp:'シカ',romaji:'shika',en:'deer',category:'Animals',color:'var(--n4)'},
  {id:'v-1087',jp:'ラクダ',romaji:'rakuda',en:'camel',category:'Animals',color:'var(--n4)'},
  {id:'v-1088',jp:'水牛',romaji:'suigyū',en:'buffalo',category:'Animals',color:'var(--n4)'},
  {id:'v-1089',jp:'イノシシ',romaji:'inoshishi',en:'wild boar',category:'Animals',color:'var(--n4)'},
  {id:'v-1090',jp:'チンパンジー',romaji:'chinpanjī',en:'chimpanzee',category:'Animals',color:'var(--n4)'},
  {id:'v-1091',jp:'ゴリラ',romaji:'gorira',en:'gorilla',category:'Animals',color:'var(--n4)'},
  {id:'v-1092',jp:'サイ',romaji:'sai',en:'rhinoceros',category:'Animals',color:'var(--n4)'},
  {id:'v-1093',jp:'コアラ',romaji:'koara',en:'koala',category:'Animals',color:'var(--n4)'},
  {id:'v-1094',jp:'スカンク',romaji:'sukanku',en:'skunk',category:'Animals',color:'var(--n4)'},
  {id:'v-1095',jp:'雄牛',romaji:'ōshi',en:'bull',category:'Animals',color:'var(--n4)'},
  {id:'v-1096',jp:'ロバ',romaji:'roba',en:'donkey',category:'Animals',color:'var(--n4)'},
  {id:'v-1097',jp:'子豚',romaji:'kobuta',en:'piglet',category:'Animals',color:'var(--n4)'},
  {id:'v-1098',jp:'おんどり',romaji:'ondori',en:'rooster',category:'Animals',color:'var(--n4)'},
  {id:'v-1099',jp:'アヒル',romaji:'ahiru',en:'duck (domestic)',category:'Animals',color:'var(--n4)'},
  {id:'v-1100',jp:'馬小屋',romaji:'umagoya',en:'stable',category:'Animals',color:'var(--n4)'},
  {id:'v-1101',jp:'農場',romaji:'nōjō',en:'farm',category:'Animals',color:'var(--n4)'},
  {id:'v-1102',jp:'群れ',romaji:'mure',en:'herd',category:'Animals',color:'var(--n4)'},
  {id:'v-1103',jp:'ヘビ',romaji:'hebi',en:'snake',category:'Animals',color:'var(--n4)'},
  {id:'v-1104',jp:'クサリヘビ',romaji:'kusarihebi',en:'viper',category:'Animals',color:'var(--n4)'},
  {id:'v-1105',jp:'コブラ',romaji:'kobura',en:'cobra',category:'Animals',color:'var(--n4)'},
  {id:'v-1106',jp:'ニシキヘビ',romaji:'nishikihebi',en:'python',category:'Animals',color:'var(--n4)'},
  {id:'v-1107',jp:'トカゲ',romaji:'tokage',en:'lizard',category:'Animals',color:'var(--n4)'},
  {id:'v-1108',jp:'イグアナ',romaji:'iguana',en:'iguana',category:'Animals',color:'var(--n4)'},
  {id:'v-1109',jp:'カメレオン',romaji:'kamereon',en:'chameleon',category:'Animals',color:'var(--n4)'},
  {id:'v-1110',jp:'サソリ',romaji:'sasori',en:'scorpion',category:'Animals',color:'var(--n4)'},
  {id:'v-1111',jp:'カメ',romaji:'kame',en:'turtle',category:'Animals',color:'var(--n4)'},
  {id:'v-1112',jp:'蛙',romaji:'kaeru',en:'frog',category:'Animals',color:'var(--n4)'},
  {id:'v-1113',jp:'ヒキガエル',romaji:'hikigaeru',en:'toad',category:'Animals',color:'var(--n4)'},
  {id:'v-1114',jp:'ワニ',romaji:'wani',en:'crocodile',category:'Animals',color:'var(--n4)'},
  {id:'v-1115',jp:'鳥',romaji:'tori',en:'bird',category:'Birds',color:'var(--n3)'},
  {id:'v-1116',jp:'鳩',romaji:'hato',en:'pigeon',category:'Birds',color:'var(--n3)'},
  {id:'v-1117',jp:'スズメ',romaji:'suzume',en:'sparrow',category:'Birds',color:'var(--n3)'},
  {id:'v-1118',jp:'カラス',romaji:'karasu',en:'crow',category:'Birds',color:'var(--n3)'},
  {id:'v-1119',jp:'鷲',romaji:'washi',en:'eagle',category:'Birds',color:'var(--n3)'},
  {id:'v-1120',jp:'鷹',romaji:'taka',en:'hawk',category:'Birds',color:'var(--n3)'},
  {id:'v-1121',jp:'白鳥',romaji:'hakuchō',en:'swan',category:'Birds',color:'var(--n3)'},
  {id:'v-1122',jp:'オウム',romaji:'ōmu',en:'parrot',category:'Birds',color:'var(--n3)'},
  {id:'v-1123',jp:'ペンギン',romaji:'pengin',en:'penguin',category:'Birds',color:'var(--n3)'},
  {id:'v-1124',jp:'フラミンゴ',romaji:'furamingo',en:'flamingo',category:'Birds',color:'var(--n3)'},
  {id:'v-1125',jp:'カモメ',romaji:'kamome',en:'seagull',category:'Birds',color:'var(--n3)'},
  {id:'v-1126',jp:'ダチョウ',romaji:'dachō',en:'ostrich',category:'Birds',color:'var(--n3)'},
  {id:'v-1127',jp:'カモ',romaji:'kamo',en:'duck (wild)',category:'Birds',color:'var(--n3)'},
  {id:'v-1128',jp:'ハヤブサ',romaji:'hayabusa',en:'falcon',category:'Birds',color:'var(--n3)'},
  {id:'v-1129',jp:'鶴',romaji:'tsuru',en:'crane (bird)',category:'Birds',color:'var(--n3)'},
  {id:'v-1130',jp:'クジャク',romaji:'kujaku',en:'peacock',category:'Birds',color:'var(--n3)'},
  {id:'v-1131',jp:'トラフズク',romaji:'torafuzuku',en:'owl',category:'Birds',color:'var(--n3)'},
  {id:'v-1132',jp:'ツバメ',romaji:'tsubame',en:'swallow (bird)',category:'Birds',color:'var(--n3)'},
  {id:'v-1133',jp:'キツツキ',romaji:'kitsutsuki',en:'woodpecker',category:'Birds',color:'var(--n3)'},
  {id:'v-1134',jp:'カッコウ',romaji:'kakkō',en:'cuckoo',category:'Birds',color:'var(--n3)'},
  {id:'v-1135',jp:'昆虫',romaji:'konchū',en:'insect',category:'Insects',color:'var(--n3)'},
  {id:'v-1136',jp:'チョウ',romaji:'chō',en:'butterfly',category:'Insects',color:'var(--n3)'},
  {id:'v-1137',jp:'アリ',romaji:'ari',en:'ant',category:'Insects',color:'var(--n3)'},
  {id:'v-1138',jp:'ハエ',romaji:'hae',en:'fly',category:'Insects',color:'var(--n3)'},
  {id:'v-1139',jp:'ハチ',romaji:'hachi',en:'bee',category:'Insects',color:'var(--n3)'},
  {id:'v-1140',jp:'クモ',romaji:'kumo',en:'spider',category:'Insects',color:'var(--n3)'},
  {id:'v-1141',jp:'トンボ',romaji:'tonbo',en:'dragonfly',category:'Insects',color:'var(--n3)'},
  {id:'v-1142',jp:'ゴキブリ',romaji:'gokiburi',en:'cockroach',category:'Insects',color:'var(--n3)'},
  {id:'v-1143',jp:'カ',romaji:'ka',en:'mosquito',category:'Insects',color:'var(--n3)'},
  {id:'v-1144',jp:'テントウムシ',romaji:'tentōmushi',en:'ladybug',category:'Insects',color:'var(--n3)'},
  {id:'v-1145',jp:'甲虫',romaji:'kabutomushi',en:'beetle',category:'Insects',color:'var(--n3)'},
  {id:'v-1146',jp:'ワスプ',romaji:'wasupu',en:'wasp',category:'Insects',color:'var(--n3)'},
  {id:'v-1147',jp:'キリギリス',romaji:'kirigirisu',en:'grasshopper',category:'Insects',color:'var(--n3)'},
  {id:'v-1148',jp:'ガ',romaji:'ga',en:'moth',category:'Insects',color:'var(--n3)'},
  {id:'v-1149',jp:'ダニ',romaji:'dani',en:'tick',category:'Insects',color:'var(--n3)'},
  {id:'v-1150',jp:'ノミ',romaji:'nomi',en:'flea',category:'Insects',color:'var(--n3)'},
  {id:'v-1151',jp:'バッタ',romaji:'batta',en:'locust',category:'Insects',color:'var(--n3)'},
  {id:'v-1152',jp:'カタツムリ',romaji:'katatsumuri',en:'snail',category:'Insects',color:'var(--n3)'},
  {id:'v-1153',jp:'ケムシ',romaji:'kemushi',en:'caterpillar',category:'Insects',color:'var(--n3)'},
  {id:'v-1154',jp:'ミミズ',romaji:'mimizu',en:'earthworm',category:'Insects',color:'var(--n3)'},
  {id:'v-1155',jp:'ホタル',romaji:'hotaru',en:'lightning bug',category:'Insects',color:'var(--n3)'},
  {id:'v-1156',jp:'木',romaji:'ki',en:'tree',category:'Plants',color:'var(--n3)'},
  {id:'v-1157',jp:'花',romaji:'hana',en:'flower',category:'Plants',color:'var(--n3)'},
  {id:'v-1158',jp:'葉',romaji:'ha',en:'leaf',category:'Plants',color:'var(--n3)'},
  {id:'v-1159',jp:'根',romaji:'ne',en:'root',category:'Plants',color:'var(--n3)'},
  {id:'v-1160',jp:'バラ',romaji:'bara',en:'rose',category:'Plants',color:'var(--n3)'},
  {id:'v-1161',jp:'チューリップ',romaji:'chūrippu',en:'tulip',category:'Plants',color:'var(--n3)'},
  {id:'v-1162',jp:'サボテン',romaji:'saboten',en:'cactus',category:'Plants',color:'var(--n3)'},
  {id:'v-1163',jp:'ユリ',romaji:'yuri',en:'lily',category:'Plants',color:'var(--n3)'},
  {id:'v-1164',jp:'タンポポ',romaji:'tanpopo',en:'dandelion',category:'Plants',color:'var(--n3)'},
  {id:'v-1165',jp:'松',romaji:'matsu',en:'pine',category:'Plants',color:'var(--n3)'},
  {id:'v-1166',jp:'オーク',romaji:'ōku',en:'oak',category:'Plants',color:'var(--n3)'},
  {id:'v-1167',jp:'竹',romaji:'take',en:'bamboo',category:'Plants',color:'var(--n3)'},
  {id:'v-1168',jp:'りんごの木',romaji:'ringonoki',en:'apple tree',category:'Plants',color:'var(--n3)'},
  {id:'v-1169',jp:'カバノキ',romaji:'kabanoki',en:'birch',category:'Plants',color:'var(--n3)'},
  {id:'v-1170',jp:'カエデ',romaji:'kaede',en:'maple',category:'Plants',color:'var(--n3)'},
  {id:'v-1171',jp:'シダー',romaji:'shidā',en:'cedar',category:'Plants',color:'var(--n3)'},
  {id:'v-1172',jp:'ポプラ',romaji:'popura',en:'poplar',category:'Plants',color:'var(--n3)'},
  {id:'v-1173',jp:'ヤナギ',romaji:'yanagi',en:'willow',category:'Plants',color:'var(--n3)'},
  {id:'v-1174',jp:'ブナ',romaji:'buna',en:'beech',category:'Plants',color:'var(--n3)'},
  {id:'v-1175',jp:'ニレ',romaji:'nire',en:'elm',category:'Plants',color:'var(--n3)'},
  {id:'v-1176',jp:'クリ',romaji:'kuri',en:'chestnut',category:'Plants',color:'var(--n3)'},
  {id:'v-1177',jp:'ヤシ',romaji:'yashi',en:'palm tree',category:'Plants',color:'var(--n3)'},
  {id:'v-1178',jp:'イトスギ',romaji:'itosugi',en:'cypress',category:'Plants',color:'var(--n3)'},
  {id:'v-1179',jp:'ユーカリ',romaji:'yūkari',en:'eucalyptus',category:'Plants',color:'var(--n3)'},
  {id:'v-1180',jp:'花束',romaji:'hanataba',en:'bouquet',category:'Plants',color:'var(--n3)'},
  {id:'v-1181',jp:'カーネーション',romaji:'kānēshon',en:'carnation',category:'Plants',color:'var(--n3)'},
  {id:'v-1182',jp:'ラン',romaji:'ran',en:'orchid',category:'Plants',color:'var(--n3)'},
  {id:'v-1183',jp:'ポピー',romaji:'popī',en:'poppy',category:'Plants',color:'var(--n3)'},
  {id:'v-1184',jp:'ミント',romaji:'minto',en:'mint',category:'Plants',color:'var(--n3)'},
  {id:'v-1185',jp:'スズラン',romaji:'suzuran',en:'lily of the valley',category:'Plants',color:'var(--n3)'},
  {id:'v-1186',jp:'シダ',romaji:'shida',en:'fern',category:'Plants',color:'var(--n3)'},
  {id:'v-1187',jp:'草',romaji:'kusa',en:'grass',category:'Plants',color:'var(--n3)'},
  {id:'v-1188',jp:'花びら',romaji:'hanabira',en:'petal',category:'Plants',color:'var(--n3)'},
  {id:'v-1189',jp:'茎',romaji:'kuki',en:'stem',category:'Plants',color:'var(--n3)'},
  {id:'v-1190',jp:'茎針',romaji:'kuki hari',en:'thorn',category:'Plants',color:'var(--n3)'},
  {id:'v-1191',jp:'開花する',romaji:'kaika suru',en:'to blossom',category:'Plants',color:'var(--n3)'},
  {id:'v-1192',jp:'しおれる',romaji:'shioreru',en:'to wither',category:'Plants',color:'var(--n3)'},
  {id:'v-1193',jp:'穀物',romaji:'kokumotsu',en:'grain',category:'Plants',color:'var(--n3)'},
  {id:'v-1194',jp:'イネ',romaji:'ine',en:'rice (plant)',category:'Plants',color:'var(--n3)'},
  {id:'v-1195',jp:'ライムギ',romaji:'raimugi',en:'rye',category:'Plants',color:'var(--n3)'},
  {id:'v-1196',jp:'オーツムギ',romaji:'ōtsu mugi',en:'oats',category:'Plants',color:'var(--n3)'},
  {id:'v-1197',jp:'オオムギ',romaji:'ōmugi',en:'barley',category:'Plants',color:'var(--n3)'},
  {id:'v-1198',jp:'ソバ',romaji:'soba',en:'buckwheat',category:'Plants',color:'var(--n3)'},
  {id:'v-1199',jp:'ダイズ',romaji:'daizu',en:'soy',category:'Plants',color:'var(--n3)'},
  {id:'v-1200',jp:'レンズマメ',romaji:'renzu mame',en:'lentil',category:'Plants',color:'var(--n3)'},
  {id:'v-1201',jp:'日本',romaji:'nihon',en:'Japan',category:'Countries',color:'var(--n4)'},
  {id:'v-1202',jp:'中国',romaji:'chūgoku',en:'China',category:'Countries',color:'var(--n4)'},
  {id:'v-1203',jp:'韓国',romaji:'kankoku',en:'South Korea',category:'Countries',color:'var(--n4)'},
  {id:'v-1204',jp:'アメリカ',romaji:'america',en:'USA',category:'Countries',color:'var(--n4)'},
  {id:'v-1205',jp:'イギリス',romaji:'igirisu',en:'England / UK',category:'Countries',color:'var(--n4)'},
  {id:'v-1206',jp:'フランス',romaji:'furansu',en:'France',category:'Countries',color:'var(--n4)'},
  {id:'v-1207',jp:'ドイツ',romaji:'doitsu',en:'Germany',category:'Countries',color:'var(--n4)'},
  {id:'v-1208',jp:'イタリア',romaji:'itaria',en:'Italy',category:'Countries',color:'var(--n4)'},
  {id:'v-1209',jp:'スペイン',romaji:'supein',en:'Spain',category:'Countries',color:'var(--n4)'},
  {id:'v-1210',jp:'ロシア',romaji:'roshia',en:'Russia',category:'Countries',color:'var(--n4)'},
  {id:'v-1211',jp:'インド',romaji:'indo',en:'India',category:'Countries',color:'var(--n4)'},
  {id:'v-1212',jp:'ブラジル',romaji:'burajiru',en:'Brazil',category:'Countries',color:'var(--n4)'},
  {id:'v-1213',jp:'カナダ',romaji:'kanada',en:'Canada',category:'Countries',color:'var(--n4)'},
  {id:'v-1214',jp:'オーストラリア',romaji:'ōsutoraria',en:'Australia',category:'Countries',color:'var(--n4)'},
  {id:'v-1215',jp:'メキシコ',romaji:'mekishiko',en:'Mexico',category:'Countries',color:'var(--n4)'},
  {id:'v-1216',jp:'エジプト',romaji:'ejiputo',en:'Egypt',category:'Countries',color:'var(--n4)'},
  {id:'v-1217',jp:'トルコ',romaji:'toruko',en:'Turkey',category:'Countries',color:'var(--n4)'},
  {id:'v-1218',jp:'タイ',romaji:'tai',en:'Thailand',category:'Countries',color:'var(--n4)'},
  {id:'v-1219',jp:'ベトナム',romaji:'betonamu',en:'Vietnam',category:'Countries',color:'var(--n4)'},
  {id:'v-1220',jp:'ポルトガル',romaji:'porutogaru',en:'Portugal',category:'Countries',color:'var(--n4)'},
  {id:'v-1221',jp:'北朝鮮',romaji:'kitachōsen',en:'North Korea',category:'Countries',color:'var(--n4)'},
  {id:'v-1222',jp:'台湾',romaji:'taiwan',en:'Taiwan',category:'Countries',color:'var(--n4)'},
  {id:'v-1223',jp:'スイス',romaji:'suisu',en:'Switzerland',category:'Countries',color:'var(--n4)'},
  {id:'v-1224',jp:'ギリシャ',romaji:'girisha',en:'Greece',category:'Countries',color:'var(--n4)'},
  {id:'v-1225',jp:'ウクライナ',romaji:'ukuraina',en:'Ukraine',category:'Countries',color:'var(--n4)'},
  {id:'v-1226',jp:'アフガニスタン',romaji:'afuganisutan',en:'Afghanistan',category:'Countries',color:'var(--n4)'},
  {id:'v-1227',jp:'アルゼンチン',romaji:'aruzenchin',en:'Argentina',category:'Countries',color:'var(--n4)'},
  {id:'v-1228',jp:'オーストリア',romaji:'ōsutoria',en:'Austria',category:'Countries',color:'var(--n4)'},
  {id:'v-1229',jp:'バングラデシュ',romaji:'banguradeshu',en:'Bangladesh',category:'Countries',color:'var(--n4)'},
  {id:'v-1230',jp:'ベルギー',romaji:'berugī',en:'Belgium',category:'Countries',color:'var(--n4)'},
  {id:'v-1231',jp:'ボリビア',romaji:'boribia',en:'Bolivia',category:'Countries',color:'var(--n4)'},
  {id:'v-1232',jp:'ブルガリア',romaji:'burugaria',en:'Bulgaria',category:'Countries',color:'var(--n4)'},
  {id:'v-1233',jp:'カンボジア',romaji:'kanbojia',en:'Cambodia',category:'Countries',color:'var(--n4)'},
  {id:'v-1234',jp:'チリ',romaji:'chiri',en:'Chile',category:'Countries',color:'var(--n4)'},
  {id:'v-1235',jp:'コロンビア',romaji:'koronbia',en:'Colombia',category:'Countries',color:'var(--n4)'},
  {id:'v-1236',jp:'クロアチア',romaji:'kuroachia',en:'Croatia',category:'Countries',color:'var(--n4)'},
  {id:'v-1237',jp:'キューバ',romaji:'kyūba',en:'Cuba',category:'Countries',color:'var(--n4)'},
  {id:'v-1238',jp:'チェコ',romaji:'cheko',en:'Czech Republic',category:'Countries',color:'var(--n4)'},
  {id:'v-1239',jp:'デンマーク',romaji:'denmāku',en:'Denmark',category:'Countries',color:'var(--n4)'},
  {id:'v-1240',jp:'フィンランド',romaji:'finrando',en:'Finland',category:'Countries',color:'var(--n4)'},
  {id:'v-1241',jp:'ハンガリー',romaji:'hangarī',en:'Hungary',category:'Countries',color:'var(--n4)'},
  {id:'v-1242',jp:'アイスランド',romaji:'aisurando',en:'Iceland',category:'Countries',color:'var(--n4)'},
  {id:'v-1243',jp:'インドネシア',romaji:'indoneshia',en:'Indonesia',category:'Countries',color:'var(--n4)'},
  {id:'v-1244',jp:'イラン',romaji:'iran',en:'Iran',category:'Countries',color:'var(--n4)'},
  {id:'v-1245',jp:'イラク',romaji:'iraku',en:'Iraq',category:'Countries',color:'var(--n4)'},
  {id:'v-1246',jp:'アイルランド',romaji:'airurando',en:'Ireland',category:'Countries',color:'var(--n4)'},
  {id:'v-1247',jp:'イスラエル',romaji:'isuraeru',en:'Israel',category:'Countries',color:'var(--n4)'},
  {id:'v-1248',jp:'ヨルダン',romaji:'yorudan',en:'Jordan',category:'Countries',color:'var(--n4)'},
  {id:'v-1249',jp:'カザフスタン',romaji:'kazafusutan',en:'Kazakhstan',category:'Countries',color:'var(--n4)'},
  {id:'v-1250',jp:'ケニア',romaji:'kenia',en:'Kenya',category:'Countries',color:'var(--n4)'},
  {id:'v-1251',jp:'クウェート',romaji:'kuwēto',en:'Kuwait',category:'Countries',color:'var(--n4)'},
  {id:'v-1252',jp:'ラトビア',romaji:'ratobia',en:'Latvia',category:'Countries',color:'var(--n4)'},
  {id:'v-1253',jp:'レバノン',romaji:'rebanon',en:'Lebanon',category:'Countries',color:'var(--n4)'},
  {id:'v-1254',jp:'リトアニア',romaji:'ritoania',en:'Lithuania',category:'Countries',color:'var(--n4)'},
  {id:'v-1255',jp:'ルクセンブルク',romaji:'rukusenburuku',en:'Luxembourg',category:'Countries',color:'var(--n4)'},
  {id:'v-1256',jp:'マレーシア',romaji:'marēshia',en:'Malaysia',category:'Countries',color:'var(--n4)'},
  {id:'v-1257',jp:'モンゴル',romaji:'mongoru',en:'Mongolia',category:'Countries',color:'var(--n4)'},
  {id:'v-1258',jp:'モロッコ',romaji:'morokko',en:'Morocco',category:'Countries',color:'var(--n4)'},
  {id:'v-1259',jp:'ミャンマー',romaji:'myanmā',en:'Myanmar',category:'Countries',color:'var(--n4)'},
  {id:'v-1260',jp:'ネパール',romaji:'nepāru',en:'Nepal',category:'Countries',color:'var(--n4)'},
  {id:'v-1261',jp:'ネーデルラント',romaji:'nēderuranto',en:'Netherlands',category:'Countries',color:'var(--n4)'},
  {id:'v-1262',jp:'ニュージーランド',romaji:'nyūjīrando',en:'New Zealand',category:'Countries',color:'var(--n4)'},
  {id:'v-1263',jp:'ノルウェー',romaji:'noruwē',en:'Norway',category:'Countries',color:'var(--n4)'},
  {id:'v-1264',jp:'パキスタン',romaji:'pakisutan',en:'Pakistan',category:'Countries',color:'var(--n4)'},
  {id:'v-1265',jp:'ペルー',romaji:'perū',en:'Peru',category:'Countries',color:'var(--n4)'},
  {id:'v-1266',jp:'ポーランド',romaji:'pōrando',en:'Poland',category:'Countries',color:'var(--n4)'},
  {id:'v-1267',jp:'ルーマニア',romaji:'rūmania',en:'Romania',category:'Countries',color:'var(--n4)'},
  {id:'v-1268',jp:'サウジアラビア',romaji:'saujiarabia',en:'Saudi Arabia',category:'Countries',color:'var(--n4)'},
  {id:'v-1269',jp:'スコットランド',romaji:'sukottorando',en:'Scotland',category:'Countries',color:'var(--n4)'},
  {id:'v-1270',jp:'セルビア',romaji:'serubia',en:'Serbia',category:'Countries',color:'var(--n4)'},
  {id:'v-1271',jp:'南アフリカ',romaji:'minami afurika',en:'South Africa',category:'Countries',color:'var(--n4)'},
  {id:'v-1272',jp:'スウェーデン',romaji:'suwēden',en:'Sweden',category:'Countries',color:'var(--n4)'},
  {id:'v-1273',jp:'シリア',romaji:'shiria',en:'Syria',category:'Countries',color:'var(--n4)'},
  {id:'v-1274',jp:'バチカン',romaji:'bachikan',en:'Vatican',category:'Countries',color:'var(--n4)'},
  {id:'v-1275',jp:'お名前',romaji:'o-namae',en:'your name (formal)',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1276',jp:'名字',romaji:'myōji',en:'surname',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1277',jp:'住所',romaji:'jūsho',en:'address',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1278',jp:'郵便番号',romaji:'yūbin bangō',en:'postal code',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1279',jp:'出生地',romaji:'shusshōchi',en:'place of birth',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1280',jp:'職業',romaji:'shokugyō',en:'occupation',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1281',jp:'既婚',romaji:'kikon',en:'married',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1282',jp:'未婚',romaji:'mikon',en:'single (unmarried)',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1283',jp:'離婚',romaji:'rikon',en:'divorced',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1284',jp:'身分証明書',romaji:'mibun shōmeisho',en:'identity card',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1285',jp:'運転免許証',romaji:'unten menkyoshō',en:'driving license',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1286',jp:'姓',romaji:'sei',en:'family name',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1287',jp:'国',romaji:'kuni',en:'country',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1288',jp:'性',romaji:'sei',en:'gender/sex',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1289',jp:'身長',romaji:'shinchō',en:'height (person)',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1290',jp:'体重',romaji:'taijū',en:'weight (person)',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1291',jp:'年齢',romaji:'nen-ray',en:'age',category:'Personal Info',color:'var(--n4)'},
  {id:'v-1292',jp:'今週',romaji:'konshū',en:'this week',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1293',jp:'来月',romaji:'raigetsu',en:'next month',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1294',jp:'去年',romaji:'kyonen',en:'last year',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1295',jp:'次の',romaji:'tsugi no',en:'next...',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1296',jp:'昨晩',romaji:'sakuban',en:'last night',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1297',jp:'今晩',romaji:'komban',en:'tonight',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1298',jp:'今朝',romaji:'kesa',en:'this morning',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1299',jp:'休日',romaji:'kyūjitsu',en:'day off / holiday',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1300',jp:'間に合って',romaji:'maniatte',en:'on time',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1301',jp:'早過ぎます',romaji:'hayasugimasu',en:'too early',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1302',jp:'遅過ぎます',romaji:'ososugimasu',en:'too late',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1303',jp:'少し遅れます',romaji:'sukoshi okuremasu',en:'I will be a little late',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1304',jp:'遅れてすみません',romaji:'okurete sumimasen',en:'sorry I am late',category:'Time Expressions',color:'var(--n4)'},
  {id:'v-1305',jp:'今何時ですか',romaji:'ima nanji desu ka',en:'what time is it?',category:'Telling Time',color:'var(--n4)'},
  {id:'v-1306',jp:'三十分間',romaji:'sanjuppunkan',en:'half an hour',category:'Telling Time',color:'var(--n4)'},
  {id:'v-1307',jp:'何時',romaji:'nanji',en:'what time?',category:'Telling Time',color:'var(--n4)'},
  {id:'v-1308',jp:'…過ぎに',romaji:'… sugi ni',en:'after (time)',category:'Telling Time',color:'var(--n4)'},
  {id:'v-1309',jp:'…から…まで',romaji:'… kara … made',en:'from... to...',category:'Telling Time',color:'var(--n4)'},
  {id:'v-1310',jp:'一時間後に',romaji:'ichijikan go ni',en:'in an hour',category:'Telling Time',color:'var(--n4)'},
  {id:'v-1311',jp:'十五分後に',romaji:'jūgofun go ni',en:'in 15 minutes',category:'Telling Time',color:'var(--n4)'},
  {id:'v-1312',jp:'全部で',romaji:'zenbu de',en:'in total',category:'Math',color:'var(--n3)'},
  {id:'v-1313',jp:'偶数の',romaji:'gūsū no',en:'even number',category:'Math',color:'var(--n3)'},
  {id:'v-1314',jp:'奇数の',romaji:'kisū no',en:'odd number',category:'Math',color:'var(--n3)'},
  {id:'v-1315',jp:'半分',romaji:'hanbun',en:'half',category:'Math',color:'var(--n3)'},
  {id:'v-1316',jp:'四分の一',romaji:'yonbun no ichi',en:'a quarter',category:'Math',color:'var(--n3)'},
  {id:'v-1317',jp:'三分の一',romaji:'sanbun no ichi',en:'a third',category:'Math',color:'var(--n3)'},
  {id:'v-1318',jp:'一倍',romaji:'ichibai',en:'once',category:'Math',color:'var(--n3)'},
  {id:'v-1319',jp:'二倍',romaji:'nibai',en:'twice',category:'Math',color:'var(--n3)'},
  {id:'v-1320',jp:'三倍',romaji:'sanbai',en:'triple',category:'Math',color:'var(--n3)'},
  {id:'v-1321',jp:'天気がくずれます',romaji:'tenki ga kuzuremasu',en:'weather is changing',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1322',jp:'涼しくなります',romaji:'suzushiku narimasu',en:'it\\\'s cooling down',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1323',jp:'雨になりますか',romaji:'ame ni narimasu ka',en:'is it going to rain?',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1324',jp:'雪になりますか',romaji:'yuki ni narimasu ka',en:'is it going to snow?',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1325',jp:'嵐になりますか',romaji:'arashi ni narimasu ka',en:'will there be a storm?',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1326',jp:'天気予報',romaji:'tenki yohō',en:'weather forecast',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1327',jp:'薄ら寒い',romaji:'usurāsamui',en:'chilly',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1328',jp:'快晴',romaji:'kaisei',en:'clear sky',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1329',jp:'蒸し暑い',romaji:'mushiatsui',en:'muggy',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1330',jp:'梅雨',romaji:'tsuyu',en:'rainy season',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1331',jp:'にわか雨',romaji:'niwaka ame',en:'shower',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1332',jp:'霜',romaji:'shimo',en:'frost',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1333',jp:'霧雨',romaji:'kirisame',en:'drizzle',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1334',jp:'霰',romaji:'arare',en:'sleet',category:'Weather Phrases',color:'var(--n4)'},
  {id:'v-1335',jp:'緊急出口',romaji:'kinkyū deguchi',en:'emergency exit',category:'Signs',color:'var(--n4)'},
  {id:'v-1336',jp:'通行禁止',romaji:'tsūkō kinshi',en:'no thoroughfare',category:'Signs',color:'var(--n4)'},
  {id:'v-1337',jp:'禁煙',romaji:'kinen',en:'no smoking',category:'Signs',color:'var(--n4)'},
  {id:'v-1338',jp:'故障中',romaji:'koshōchū',en:'out of order',category:'Signs',color:'var(--n4)'},
  {id:'v-1339',jp:'予約済',romaji:'yoyakuzumi',en:'reserved',category:'Signs',color:'var(--n4)'},
  {id:'v-1340',jp:'案内',romaji:'annai',en:'information',category:'Signs',color:'var(--n4)'},
  {id:'v-1341',jp:'待合室',romaji:'machiaishitsu',en:'waiting room',category:'Signs',color:'var(--n4)'},
  {id:'v-1342',jp:'猛犬注意',romaji:'mōken chūi',en:'beware of the dog',category:'Signs',color:'var(--n4)'},
  {id:'v-1343',jp:'高圧注意',romaji:'kōatsu chūi',en:'high voltage',category:'Signs',color:'var(--n4)'},
  {id:'v-1344',jp:'撮影禁止',romaji:'satsuei kinshi',en:'no photographs',category:'Signs',color:'var(--n4)'},
  {id:'v-1345',jp:'危険',romaji:'kiken',en:'danger',category:'Signs',color:'var(--n4)'},
  {id:'v-1346',jp:'注意',romaji:'chūi',en:'warning / caution',category:'Signs',color:'var(--n4)'},
  {id:'v-1347',jp:'応急手当',romaji:'ōkyū teate',en:'first aid',category:'Signs',color:'var(--n4)'},
  {id:'v-1348',jp:'入口',romaji:'iriguchi',en:'entrance',category:'Signs',color:'var(--n4)'},
  {id:'v-1349',jp:'出口',romaji:'deguchi',en:'exit',category:'Signs',color:'var(--n4)'},
  {id:'v-1350',jp:'立入禁止',romaji:'tachiiri kinshi',en:'no entry',category:'Signs',color:'var(--n4)'},
  {id:'v-1351',jp:'営業中',romaji:'eigyōchū',en:'open',category:'Signs',color:'var(--n4)'},
  {id:'v-1352',jp:'準備中',romaji:'junbichū',en:'closed',category:'Signs',color:'var(--n4)'},
  {id:'v-1353',jp:'私有地',romaji:'shiyūchi',en:'private property',category:'Signs',color:'var(--n4)'},
  {id:'v-1354',jp:'清掃中',romaji:'seisōchū',en:'cleaning in progress',category:'Signs',color:'var(--n4)'},
  {id:'v-1355',jp:'ペンキ塗りたて',romaji:'penki nuritale',en:'wet paint',category:'Signs',color:'var(--n4)'},
  {id:'v-1356',jp:'ようこそ',romaji:'yōkoso',en:'WELCOME!',category:'Signs',color:'var(--n4)'},
  {id:'v-1357',jp:'押す',romaji:'osu',en:'PUSH',category:'Signs',color:'var(--n4)'},
  {id:'v-1358',jp:'引く',romaji:'hiku',en:'PULL',category:'Signs',color:'var(--n4)'},
  {id:'v-1359',jp:'女性',romaji:'josei',en:'WOMEN',category:'Signs',color:'var(--n4)'},
  {id:'v-1360',jp:'男性',romaji:'dansei',en:'MEN',category:'Signs',color:'var(--n4)'},
  {id:'v-1361',jp:'バーゲンセール',romaji:'bāgen sēru',en:'SALE',category:'Signs',color:'var(--n4)'},
  {id:'v-1362',jp:'新発売！',romaji:'shin hatsubai!',en:'NEW!',category:'Signs',color:'var(--n4)'},
  {id:'v-1363',jp:'無料',romaji:'muryō',en:'FREE',category:'Signs',color:'var(--n4)'},
  {id:'v-1364',jp:'ご注意！',romaji:'go chūi!',en:'ATTENTION!',category:'Signs',color:'var(--n4)'},
  {id:'v-1365',jp:'満室',romaji:'manshitsu',en:'NO VACANCIES',category:'Signs',color:'var(--n4)'},
  {id:'v-1366',jp:'関係者以外立入禁止',romaji:'kankei sha igai tachīrikinshi',en:'STAFF ONLY',category:'Signs',color:'var(--n4)'},
  {id:'v-1367',jp:'手を触れるな',romaji:'te wo fureru na',en:'DO NOT TOUCH!',category:'Signs',color:'var(--n4)'},
  {id:'v-1368',jp:'高電圧',romaji:'kō denatsu',en:'HIGH TENSION',category:'Signs',color:'var(--n4)'},
  {id:'v-1369',jp:'水泳禁止',romaji:'suiei kinshi',en:'NO SWIMMING!',category:'Signs',color:'var(--n4)'},
  {id:'v-1370',jp:'可燃性物質',romaji:'kanen sei busshitsu',en:'FLAMMABLE',category:'Signs',color:'var(--n4)'},
  {id:'v-1371',jp:'禁止',romaji:'kinshi',en:'FORBIDDEN',category:'Signs',color:'var(--n4)'},
  {id:'v-1372',jp:'通り抜け禁止',romaji:'tōrinuke kinshi',en:'NO TRESPASSING!',category:'Signs',color:'var(--n4)'},
  {id:'v-1373',jp:'元日',romaji:'ganjitsu',en:'New Year\\\'s Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1374',jp:'成人の日',romaji:'seijin no hi',en:'Coming of Age Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1375',jp:'建国記念日',romaji:'kenkoku kinenbi',en:'National Foundation Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1376',jp:'春分の日',romaji:'shunbun no hi',en:'Vernal Equinox Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1377',jp:'憲法記念日',romaji:'kenpō kinenbi',en:'Constitution Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1378',jp:'こどもの日',romaji:'kodomo no hi',en:'Children\\\'s Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1379',jp:'海の日',romaji:'umi no hi',en:'Marine Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1380',jp:'敬老の日',romaji:'keirō no hi',en:'Respect for the Aged Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1381',jp:'秋分の日',romaji:'shūbun no hi',en:'Autumnal Equinox Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1382',jp:'体育の日',romaji:'taiiku no hi',en:'Health-Sports Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1383',jp:'文化の日',romaji:'bunka no hi',en:'Culture Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1384',jp:'勤労感謝の日',romaji:'kinrō kansha no hi',en:'Thanksgiving Day',category:'Holidays',color:'var(--n3)'},
  {id:'v-1385',jp:'天皇誕生日',romaji:'tennō tanjōbi',en:'Emperor\\\'s Birthday',category:'Holidays',color:'var(--n3)'},
  {id:'v-1386',jp:'真っ直ぐ',romaji:'massugu',en:'straight ahead',category:'Directions',color:'var(--n4)'},
  {id:'v-1387',jp:'右の方に',romaji:'migi no hō ni',en:'to the right',category:'Directions',color:'var(--n4)'},
  {id:'v-1388',jp:'左の方に',romaji:'hidari no hō ni',en:'to the left',category:'Directions',color:'var(--n4)'},
  {id:'v-1389',jp:'…の隣に',romaji:'… no tonari ni',en:'next to...',category:'Directions',color:'var(--n4)'},
  {id:'v-1390',jp:'…の向こう側に',romaji:'… no mukōgawa ni',en:'opposite...',category:'Directions',color:'var(--n4)'},
  {id:'v-1391',jp:'…の前に',romaji:'… no mae ni',en:'in front of...',category:'Directions',color:'var(--n4)'},
  {id:'v-1392',jp:'…の真ん中に',romaji:'… no mannaka ni',en:'in the center of...',category:'Directions',color:'var(--n4)'},
  {id:'v-1393',jp:'…経由で',romaji:'… keiyu de',en:'via...',category:'Directions',color:'var(--n4)'},
  {id:'v-1394',jp:'…の中に',romaji:'… no naka ni',en:'inside...',category:'Directions',color:'var(--n4)'},
  {id:'v-1395',jp:'…の上に',romaji:'… no ue ni',en:'on top of...',category:'Directions',color:'var(--n4)'},
  {id:'v-1396',jp:'…の下に',romaji:'… no shita ni',en:'under...',category:'Directions',color:'var(--n4)'},
  {id:'v-1397',jp:'…の側に',romaji:'… no soba ni',en:'near...',category:'Directions',color:'var(--n4)'},
  {id:'v-1398',jp:'前へ',romaji:'mae e',en:'forward',category:'Directions',color:'var(--n4)'},
  {id:'v-1399',jp:'後へ',romaji:'ushiro e',en:'backward',category:'Directions',color:'var(--n4)'},
  {id:'v-1400',jp:'上へ',romaji:'ue e',en:'upward',category:'Directions',color:'var(--n4)'},
  {id:'v-1401',jp:'下へ',romaji:'shita e',en:'downward',category:'Directions',color:'var(--n4)'},
  {id:'v-1402',jp:'外へ',romaji:'soto e',en:'outside (towards)',category:'Directions',color:'var(--n4)'},
  {id:'v-1403',jp:'中へ',romaji:'naka e',en:'inside (towards)',category:'Directions',color:'var(--n4)'},
  {id:'v-1404',jp:'この電車はどこへ行きますか',romaji:'kono densha wa doko e ikimasu ka',en:'where does this train go?',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1405',jp:'この席は空いていますか',romaji:'kono seki wa aite imasu ka',en:'is this seat free?',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1406',jp:'これは指定席ですか',romaji:'kore wa shiteiseki desu ka',en:'is this seat reserved?',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1407',jp:'予約しました',romaji:'yoyaku shimashita',en:'I have reserved...',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1408',jp:'今どのへんですか',romaji:'ima dono hen desu ka',en:'where are we now?',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1409',jp:'この切符は往復ですか',romaji:'kono kippu wa ōfuku desu ka',en:'is this a return ticket?',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1410',jp:'この切符で乗り換えられますか',romaji:'kono kippu de norikaerare masu ka',en:'can I change on this ticket?',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1411',jp:'この切符はいつまで有効ですか',romaji:'kono kippu wa itsu made yūkō desu ka',en:'how long is this ticket valid?',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1412',jp:'JRパスを持っています',romaji:'JR pasu wo motte imasu',en:'I have a Japan Rail Pass',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1413',jp:'案内所はどこですか',romaji:'annaijo wa doko desu ka',en:'where is the information desk?',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1414',jp:'時刻表',romaji:'jikokuhyō',en:'timetable / schedule',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1415',jp:'乗り換え',romaji:'norikae',en:'transfer / change trains',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1416',jp:'直行',romaji:'chokkō',en:'direct / non-stop',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1417',jp:'途中下車',romaji:'tochū gesha',en:'break of journey',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1418',jp:'宅急便',romaji:'takkyūbin',en:'express delivery / courier',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1419',jp:'接続',romaji:'setsuzoku',en:'connection (transport)',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1420',jp:'追加料金',romaji:'tsuika ryōkin',en:'extra charge / surcharge',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1421',jp:'タクシーの運転手',romaji:'takushī no unten shu',en:'taxi driver',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1422',jp:'タクシー乗り場',romaji:'takushī noriba',en:'taxi stand',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1423',jp:'路面電車',romaji:'romen densha',en:'streetcar',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1424',jp:'停留所',romaji:'tay-ryoo-jo',en:'bus stop',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1425',jp:'路線',romaji:'rosen',en:'route (bus)',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1426',jp:'運賃',romaji:'unchin',en:'fare',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1427',jp:'渋滞',romaji:'jūtai',en:'traffic jam',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1428',jp:'ラッシュアワー',romaji:'rasshuawā',en:'rush hour',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1429',jp:'駐車する',romaji:'chūsha suru',en:'to park',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1430',jp:'駐車場',romaji:'chūsha jō',en:'parking lot',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1431',jp:'信号',romaji:'shingō',en:'traffic light',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1432',jp:'逃す',romaji:'nogasu',en:'to miss (train)',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1433',jp:'交差点',romaji:'kōsaten',en:'intersection',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1434',jp:'横断歩道',romaji:'ōdan hodō',en:'crosswalk',category:'Transport Phrases',color:'var(--n4)'},
  {id:'v-1435',jp:'休暇で行きます',romaji:'kyūka de ikimasu',en:'I am going on vacation',category:'Travel Phrases',color:'var(--n4)'},
  {id:'v-1436',jp:'出張です',romaji:'shutchō desu',en:'I am on a business trip',category:'Travel Phrases',color:'var(--n4)'},
  {id:'v-1437',jp:'何も申告する物はありません',romaji:'nani mo shinkoku suru mono wa arimasen',en:'I have nothing to declare',category:'Travel Phrases',color:'var(--n4)'},
  {id:'v-1438',jp:'領収書です',romaji:'ryōshūsho desu',en:'here is the receipt',category:'Travel Phrases',color:'var(--n4)'},
  {id:'v-1439',jp:'輸入税はいくらですか',romaji:'yunyūzei wa ikura desu ka',en:'how much is the import tax?',category:'Travel Phrases',color:'var(--n4)'},
  {id:'v-1440',jp:'ロッカーはどこですか',romaji:'rokkā wa doko desu ka',en:'where are the luggage lockers?',category:'Travel Phrases',color:'var(--n4)'},
  {id:'v-1441',jp:'カバンが壊れています',romaji:'kaban ga kowarete imasu',en:'my suitcase is damaged',category:'Travel Phrases',color:'var(--n4)'},
  {id:'v-1442',jp:'片道',romaji:'katamichi',en:'one-way',category:'Tickets',color:'var(--n4)'},
  {id:'v-1443',jp:'往復',romaji:'ōfuku',en:'round-trip',category:'Tickets',color:'var(--n4)'},
  {id:'v-1444',jp:'一等車',romaji:'ittōsha',en:'first class',category:'Tickets',color:'var(--n4)'},
  {id:'v-1445',jp:'二等車',romaji:'nitōsha',en:'second class',category:'Tickets',color:'var(--n4)'},
  {id:'v-1446',jp:'エコノミークラス',romaji:'ekonomi kurasu',en:'economy class',category:'Tickets',color:'var(--n4)'},
  {id:'v-1447',jp:'ビジネスクラス',romaji:'bijinesu kurasu',en:'business class',category:'Tickets',color:'var(--n4)'},
  {id:'v-1448',jp:'座席を予約したいんです',romaji:'zaseki o yoyaku shitain desu',en:'I would like to reserve a seat',category:'Tickets',color:'var(--n4)'},
  {id:'v-1449',jp:'寝台車を予約したいんです',romaji:'shindaisha o yoyaku shitain desu',en:'I would like to reserve a berth',category:'Tickets',color:'var(--n4)'},
  {id:'v-1450',jp:'通路側の席',romaji:'tsūrogawa no seki',en:'aisle seat',category:'Tickets',color:'var(--n4)'},
  {id:'v-1451',jp:'窓際で',romaji:'madogiwa de',en:'by the window',category:'Tickets',color:'var(--n4)'},
  {id:'v-1452',jp:'一人用',romaji:'hitoriyō',en:'single (room/cabin)',category:'Tickets',color:'var(--n4)'},
  {id:'v-1453',jp:'二人用',romaji:'futariyō',en:'double (room/cabin)',category:'Tickets',color:'var(--n4)'},
  {id:'v-1454',jp:'喫煙',romaji:'kitsuen',en:'smoking',category:'Tickets',color:'var(--n4)'},
  {id:'v-1455',jp:'禁煙車',romaji:'kin-ensha',en:'no-smoking car',category:'Tickets',color:'var(--n4)'},
  {id:'v-1456',jp:'定期券',romaji:'teikiken',en:'season ticket',category:'Tickets',color:'var(--n4)'},
  {id:'v-1457',jp:'国際',romaji:'kokusai',en:'international',category:'Airport',color:'var(--n4)'},
  {id:'v-1458',jp:'国内',romaji:'kokunai',en:'domestic',category:'Airport',color:'var(--n4)'},
  {id:'v-1459',jp:'搭乗券',romaji:'tōjōken',en:'boarding pass',category:'Airport',color:'var(--n4)'},
  {id:'v-1460',jp:'手荷物受取所',romaji:'tenimotsu ukitorijo',en:'baggage claim',category:'Airport',color:'var(--n4)'},
  {id:'v-1461',jp:'金属探知機',romaji:'kinzoku tanchiki',en:'metal detector',category:'Airport',color:'var(--n4)'},
  {id:'v-1462',jp:'航空会社',romaji:'kōkū gaisha',en:'airline',category:'Airport',color:'var(--n4)'},
  {id:'v-1463',jp:'出発時刻',romaji:'shuppatsu jikoku',en:'departure time',category:'Airport',color:'var(--n4)'},
  {id:'v-1464',jp:'到着時刻',romaji:'tōchaku jikoku',en:'arrival time',category:'Airport',color:'var(--n4)'},
  {id:'v-1465',jp:'遅れる',romaji:'okureru',en:'to be delayed',category:'Airport',color:'var(--n4)'},
  {id:'v-1466',jp:'フライトの遅延',romaji:'furaito no chien',en:'flight delay',category:'Airport',color:'var(--n4)'},
  {id:'v-1467',jp:'税関',romaji:'zeikan',en:'customs',category:'Airport',color:'var(--n4)'},
  {id:'v-1468',jp:'税関吏',romaji:'zeikanri',en:'customs officer',category:'Airport',color:'var(--n4)'},
  {id:'v-1469',jp:'税関申告',romaji:'zeikan shinkoku',en:'customs declaration',category:'Airport',color:'var(--n4)'},
  {id:'v-1470',jp:'入国審査',romaji:'nyūkoku shinsa',en:'passport control',category:'Airport',color:'var(--n4)'},
  {id:'v-1471',jp:'持ち込み荷物',romaji:'mochikomi nimotsu',en:'hand luggage',category:'Airport',color:'var(--n4)'},
  {id:'v-1472',jp:'着陸',romaji:'chakuriku',en:'landing',category:'Airport',color:'var(--n4)'},
  {id:'v-1473',jp:'滑走路',romaji:'kassō ro',en:'runway',category:'Airport',color:'var(--n4)'},
  {id:'v-1474',jp:'タラップ',romaji:'tarappu',en:'airstairs',category:'Airport',color:'var(--n4)'},
  {id:'v-1475',jp:'チェックイン',romaji:'chekkuin',en:'check-in',category:'Airport',color:'var(--n4)'},
  {id:'v-1476',jp:'出発ゲート',romaji:'shuppatsu gēto',en:'departure gate',category:'Airport',color:'var(--n4)'},
  {id:'v-1477',jp:'乗り継ぎ',romaji:'noritsugi',en:'transit',category:'Airport',color:'var(--n4)'},
  {id:'v-1478',jp:'出発ロビー',romaji:'shuppatsu robī',en:'departure lounge',category:'Airport',color:'var(--n4)'},
  {id:'v-1479',jp:'見送る',romaji:'miokuru',en:'to see off',category:'Airport',color:'var(--n4)'},
  {id:'v-1480',jp:'空車',romaji:'kūsha',en:'taxi available / for hire',category:'Taxi',color:'var(--n4)'},
  {id:'v-1481',jp:'満車',romaji:'mansha',en:'taxi full / booked',category:'Taxi',color:'var(--n4)'},
  {id:'v-1482',jp:'タクシーを呼んで下さい',romaji:'takushī o yonde kudasai',en:'could you call me a taxi?',category:'Taxi',color:'var(--n4)'},
  {id:'v-1483',jp:'急いでいるんですが',romaji:'isoide irun desu ga',en:'I am in a hurry',category:'Taxi',color:'var(--n4)'},
  {id:'v-1484',jp:'もっと速く行ってください',romaji:'motto hayaku itte kudasai',en:'could you speed up?',category:'Taxi',color:'var(--n4)'},
  {id:'v-1485',jp:'ゆっくり行ってください',romaji:'yukkuri itte kudasai',en:'could you slow down?',category:'Taxi',color:'var(--n4)'},
  {id:'v-1486',jp:'他の道を取って下さい',romaji:'hoka no michi o totte kudasai',en:'take a different route',category:'Taxi',color:'var(--n4)'},
  {id:'v-1487',jp:'ここで下ろして下さい',romaji:'koko de oroshite kudasai',en:'let me out here please',category:'Taxi',color:'var(--n4)'},
  {id:'v-1488',jp:'左に曲がって下さい',romaji:'hidari ni magatte kudasai',en:'turn left',category:'Taxi',color:'var(--n4)'},
  {id:'v-1489',jp:'右に曲がって下さい',romaji:'migi ni magatte kudasai',en:'turn right',category:'Taxi',color:'var(--n4)'},
  {id:'v-1490',jp:'真っ直ぐ行ってください',romaji:'massugu itte kudasai',en:'go straight ahead',category:'Taxi',color:'var(--n4)'},
  {id:'v-1491',jp:'ちょっと待ってて下さい',romaji:'chotto mattete kudasai',en:'wait a minute please',category:'Taxi',color:'var(--n4)'},
  {id:'v-1492',jp:'ここです',romaji:'koko desu',en:'this is it / we are here',category:'Taxi',color:'var(--n4)'},
  {id:'v-1493',jp:'中心地',romaji:'chūshinchi',en:'city center',category:'Taxi',color:'var(--n4)'},
  {id:'v-1494',jp:'為替レートはいくらですか',romaji:'kawase rēto wa ikura desu ka',en:'what is the exchange rate?',category:'Banking',color:'var(--n4)'},
  {id:'v-1495',jp:'お金を両替したいんですが',romaji:'okane o ryōgae shitain desu ga',en:'I would like to change money',category:'Banking',color:'var(--n4)'},
  {id:'v-1496',jp:'お金をおろしたいのですが',romaji:'okane o oroshitai no desu ga',en:'I would like to withdraw cash',category:'Banking',color:'var(--n4)'},
  {id:'v-1497',jp:'口座番号',romaji:'kōza bangō',en:'bank account number',category:'Banking',color:'var(--n4)'},
  {id:'v-1498',jp:'送金',romaji:'sōkin',en:'money transfer',category:'Banking',color:'var(--n4)'},
  {id:'v-1499',jp:'入金',romaji:'nyūkin',en:'deposit received',category:'Banking',color:'var(--n4)'},
  {id:'v-1500',jp:'最小',romaji:'saishō',en:'minimum amount',category:'Banking',color:'var(--n4)'},
  {id:'v-1501',jp:'最高',romaji:'saikō',en:'maximum amount',category:'Banking',color:'var(--n4)'},
  {id:'v-1502',jp:'小銭',romaji:'kozeni',en:'small change',category:'Banking',color:'var(--n4)'},
  {id:'v-1503',jp:'暗証番号',romaji:'anshō bangō',en:'PIN number',category:'Banking',color:'var(--n4)'},
  {id:'v-1504',jp:'サービス料',romaji:'sābisu ryō',en:'service charge',category:'Banking',color:'var(--n4)'},
  {id:'v-1505',jp:'おつりが多すぎます',romaji:'otsuri ga ōsugimasu',en:'you gave me too much change',category:'Banking',color:'var(--n4)'},
  {id:'v-1506',jp:'おつりが少ないのですが',romaji:'otsuri ga sukunai no desu ga',en:'not enough change given',category:'Banking',color:'var(--n4)'},
  {id:'v-1507',jp:'持ち金が足りません',romaji:'mochigane ga tarimasen',en:'I do not have enough money',category:'Banking',color:'var(--n4)'},
  {id:'v-1508',jp:'お釣りはとっておいてください',romaji:'otsuri wa totte oite kudasai',en:'keep the change',category:'Banking',color:'var(--n4)'},
  {id:'v-1509',jp:'旅行用小切手',romaji:'ryokō yō kogitte',en:'traveler check',category:'Banking',color:'var(--n4)'},
  {id:'v-1510',jp:'レシートをもらえますか',romaji:'reshīto wo morae masu ka',en:'can I have a receipt?',category:'Banking',color:'var(--n4)'},
  {id:'v-1511',jp:'支店',romaji:'shiten',en:'branch (bank)',category:'Banking',color:'var(--n4)'},
  {id:'v-1512',jp:'銀行員',romaji:'ginkōin',en:'bank clerk',category:'Banking',color:'var(--n4)'},
  {id:'v-1513',jp:'当座預金口座',romaji:'tōza yokin kōza',en:'checking account',category:'Banking',color:'var(--n4)'},
  {id:'v-1514',jp:'貯蓄預金口座',romaji:'chochiku yokin kōza',en:'savings account',category:'Banking',color:'var(--n4)'},
  {id:'v-1515',jp:'口座を開く',romaji:'kōza wo hiraku',en:'to open an account',category:'Banking',color:'var(--n4)'},
  {id:'v-1516',jp:'クレジットカード番号',romaji:'kurejitto kādo bangō',en:'credit card number',category:'Banking',color:'var(--n4)'},
  {id:'v-1517',jp:'融資を申し込む',romaji:'yūshi wo mōshikomu',en:'to apply for a loan',category:'Banking',color:'var(--n4)'},
  {id:'v-1518',jp:'郵便局',romaji:'yūbinkyoku',en:'post office',category:'Post Office',color:'var(--n4)'},
  {id:'v-1519',jp:'ポスト',romaji:'posuto',en:'mailbox',category:'Post Office',color:'var(--n4)'},
  {id:'v-1520',jp:'切手',romaji:'kitte',en:'stamp',category:'Post Office',color:'var(--n4)'},
  {id:'v-1521',jp:'郵便為替',romaji:'yūbin kawase',en:'money order',category:'Post Office',color:'var(--n4)'},
  {id:'v-1522',jp:'小包み',romaji:'kozutsumi',en:'parcel',category:'Post Office',color:'var(--n4)'},
  {id:'v-1523',jp:'速達便',romaji:'sokutatsubin',en:'express mail',category:'Post Office',color:'var(--n4)'},
  {id:'v-1524',jp:'航空便',romaji:'kōkūbin',en:'airmail',category:'Post Office',color:'var(--n4)'},
  {id:'v-1525',jp:'書留',romaji:'kakitome',en:'registered mail',category:'Post Office',color:'var(--n4)'},
  {id:'v-1526',jp:'ファックス',romaji:'fakkusu',en:'fax',category:'Post Office',color:'var(--n4)'},
  {id:'v-1527',jp:'窓口',romaji:'madoguchi',en:'counter / service window',category:'Post Office',color:'var(--n4)'},
  {id:'v-1528',jp:'一ページはいくらですか',romaji:'ichi pēji wa ikura desu ka',en:'how much per page?',category:'Post Office',color:'var(--n4)'},
  {id:'v-1529',jp:'郵便物',romaji:'yūbin butsu',en:'mail (letters)',category:'Post Office',color:'var(--n4)'},
  {id:'v-1530',jp:'郵便配達人',romaji:'yūbin haitatsu jin',en:'mailman',category:'Post Office',color:'var(--n4)'},
  {id:'v-1531',jp:'手紙',romaji:'tegami',en:'letter',category:'Post Office',color:'var(--n4)'},
  {id:'v-1532',jp:'書留郵便',romaji:'kakitome yūbin',en:'registered letter',category:'Post Office',color:'var(--n4)'},
  {id:'v-1533',jp:'はがき',romaji:'hagaki',en:'postcard',category:'Post Office',color:'var(--n4)'},
  {id:'v-1534',jp:'電報',romaji:'denpō',en:'telegram',category:'Post Office',color:'var(--n4)'},
  {id:'v-1535',jp:'受け取る',romaji:'uketoru',en:'to receive',category:'Post Office',color:'var(--n4)'},
  {id:'v-1536',jp:'送り主',romaji:'okurinushi',en:'sender',category:'Post Office',color:'var(--n4)'},
  {id:'v-1537',jp:'受取人',romaji:'uketorinin',en:'receiver',category:'Post Office',color:'var(--n4)'},
  {id:'v-1538',jp:'封筒',romaji:'fūtō',en:'envelope',category:'Post Office',color:'var(--n4)'},
  {id:'v-1539',jp:'郵便切手',romaji:'yūbin kitte',en:'postage stamp',category:'Post Office',color:'var(--n4)'},
  {id:'v-1540',jp:'量る',romaji:'hakaru',en:'to weigh up',category:'Post Office',color:'var(--n4)'},
  {id:'v-1541',jp:'電話帳',romaji:'denwachō',en:'phone directory',category:'Phone',color:'var(--n4)'},
  {id:'v-1542',jp:'テレホンカード',romaji:'terehon kādo',en:'phone card',category:'Phone',color:'var(--n4)'},
  {id:'v-1543',jp:'国番号',romaji:'kuni bangō',en:'country code',category:'Phone',color:'var(--n4)'},
  {id:'v-1544',jp:'市外局番',romaji:'shigai kyokuban',en:'area code',category:'Phone',color:'var(--n4)'},
  {id:'v-1545',jp:'交換手',romaji:'kōkanshu',en:'switchboard operator',category:'Phone',color:'var(--n4)'},
  {id:'v-1546',jp:'コレクトコール',romaji:'korekuto kōru',en:'collect call',category:'Phone',color:'var(--n4)'},
  {id:'v-1547',jp:'スマートフォン',romaji:'sumātofon',en:'smartphone',category:'Phone',color:'var(--n4)'},
  {id:'v-1548',jp:'SIMカード',romaji:'SIM kādo',en:'SIM card',category:'Phone',color:'var(--n4)'},
  {id:'v-1549',jp:'SIMカードをなくしてしまいました',romaji:'SIM kādo wo nakushite shimaimashita',en:'I lost my SIM card',category:'Phone',color:'var(--n4)'},
  {id:'v-1550',jp:'SIMカードを買いたいのですが',romaji:'SIM kādo wo kaitai no desu ga',en:'I would like to buy a SIM card',category:'Phone',color:'var(--n4)'},
  {id:'v-1551',jp:'ここは電波が弱いです',romaji:'koko wa denpa ga yowai desu',en:'the signal is weak here',category:'Phone',color:'var(--n4)'},
  {id:'v-1552',jp:'デッドゾーン',romaji:'detto zōn',en:'dead zone',category:'Phone',color:'var(--n4)'},
  {id:'v-1553',jp:'電池がなくなってきています',romaji:'denchi ga nakunatte kite imasu',en:'my battery is low',category:'Phone',color:'var(--n4)'},
  {id:'v-1554',jp:'どこで携帯を充電できますか',romaji:'doko de keitai wo jūden dekimasu ka',en:'where can I charge my phone?',category:'Phone',color:'var(--n4)'},
  {id:'v-1555',jp:'後でメールしてもいいですか',romaji:'ato de mēru shite mo ii desu ka',en:'can I text you later?',category:'Phone',color:'var(--n4)'},
  {id:'v-1556',jp:'もしもし…です',romaji:'moshi moshi … desu',en:'hello this is...',category:'Phone',color:'var(--n4)'},
  {id:'v-1557',jp:'どなたですか',romaji:'donata desu ka',en:'who is this please?',category:'Phone',color:'var(--n4)'},
  {id:'v-1558',jp:'間違ってダイヤルしました',romaji:'machigatte daiyaru shimashita',en:'I dialed the wrong number',category:'Phone',color:'var(--n4)'},
  {id:'v-1559',jp:'電話が遠くて聞えにくいんですが',romaji:'denwa ga tōkute kikoe nikui n desu ga',en:'I cannot hear you well',category:'Phone',color:'var(--n4)'},
  {id:'v-1560',jp:'英語が出来る人いらっしゃいますか',romaji:'eigo ga dekiru hito irasshaimasu ka',en:'is there anyone who speaks English?',category:'Phone',color:'var(--n4)'},
  {id:'v-1561',jp:'後で電話をしてくれるようお願いします',romaji:'ato de denwa wo shite kureru yō onegai shimasu',en:'please ask them to call me back',category:'Phone',color:'var(--n4)'},
  {id:'v-1562',jp:'明日また電話をかけます',romaji:'ashita mata denwa wo kakemasu',en:'I will call back tomorrow',category:'Phone',color:'var(--n4)'},
  {id:'v-1563',jp:'話し中です',romaji:'hanashi chū desu',en:'the line is busy',category:'Phone',color:'var(--n4)'},
  {id:'v-1564',jp:'留守番電話',romaji:'rusuban denwa',en:'answering machine',category:'Phone',color:'var(--n4)'},
  {id:'v-1565',jp:'電話番号をダイアルする',romaji:'denwa bangō wo daiaru suru',en:'to dial a number',category:'Phone',color:'var(--n4)'},
  {id:'v-1566',jp:'受話器',romaji:'juwaki',en:'receiver (phone)',category:'Phone',color:'var(--n4)'},
  {id:'v-1567',jp:'電話に出る',romaji:'denwa ni deru',en:'to pick up (phone)',category:'Phone',color:'var(--n4)'},
  {id:'v-1568',jp:'電話を切る',romaji:'denwa wo kiru',en:'to hang up',category:'Phone',color:'var(--n4)'},
  {id:'v-1569',jp:'話し中',romaji:'hanashi chū',en:'busy (phone)',category:'Phone',color:'var(--n4)'},
  {id:'v-1570',jp:'鳴る',romaji:'naru',en:'to ring (phone)',category:'Phone',color:'var(--n4)'},
  {id:'v-1571',jp:'市内電話',romaji:'shinai denwa',en:'local call',category:'Phone',color:'var(--n4)'},
  {id:'v-1572',jp:'市外電話',romaji:'shigai denwa',en:'long-distance call',category:'Phone',color:'var(--n4)'},
  {id:'v-1573',jp:'国際電話',romaji:'kokusai denwa',en:'international call',category:'Phone',color:'var(--n4)'},
  {id:'v-1574',jp:'ボイスメール',romaji:'boisu mēru',en:'voice mail',category:'Phone',color:'var(--n4)'},
  {id:'v-1575',jp:'連絡先',romaji:'renraku saki',en:'contacts (phone)',category:'Phone',color:'var(--n4)'},
  {id:'v-1576',jp:'テキストメッセージ',romaji:'tekisuto messēji',en:'SMS/text message',category:'Phone',color:'var(--n4)'},
  {id:'v-1577',jp:'加入者',romaji:'kanyū sha',en:'subscriber',category:'Phone',color:'var(--n4)'},
  {id:'v-1578',jp:'インターネット',romaji:'intānetto',en:'internet',category:'Internet',color:'var(--n3)'},
  {id:'v-1579',jp:'メール',romaji:'mēru',en:'email / text message',category:'Internet',color:'var(--n3)'},
  {id:'v-1580',jp:'ソーシャルネットワーキング',romaji:'sōsharu nettowākingu',en:'social networking',category:'Internet',color:'var(--n3)'},
  {id:'v-1581',jp:'ツイート',romaji:'tsūīto',en:'tweet',category:'Internet',color:'var(--n3)'},
  {id:'v-1582',jp:'アダプター',romaji:'adaputā',en:'adapter',category:'Internet',color:'var(--n3)'},
  {id:'v-1583',jp:'充電器',romaji:'jūdenki',en:'charger',category:'Internet',color:'var(--n3)'},
  {id:'v-1584',jp:'ホットスポット',romaji:'hottosupotto',en:'hotspot',category:'Internet',color:'var(--n3)'},
  {id:'v-1585',jp:'ユーザー名',romaji:'yūzā mei',en:'username',category:'Internet',color:'var(--n3)'},
  {id:'v-1586',jp:'パスワード',romaji:'pasuwādo',en:'password',category:'Internet',color:'var(--n3)'},
  {id:'v-1587',jp:'ログオン',romaji:'rogu on',en:'log on',category:'Internet',color:'var(--n3)'},
  {id:'v-1588',jp:'ウェブサイト',romaji:'uebusaito',en:'website',category:'Internet',color:'var(--n3)'},
  {id:'v-1589',jp:'ブラウザ',romaji:'burauza',en:'browser',category:'Internet',color:'var(--n3)'},
  {id:'v-1590',jp:'サーチエンジン',romaji:'sāchi enjin',en:'search engine',category:'Internet',color:'var(--n3)'},
  {id:'v-1591',jp:'インターネットカフェ',romaji:'intānetto kafe',en:'cybercafé',category:'Internet',color:'var(--n3)'},
  {id:'v-1592',jp:'タブレット型パソコン',romaji:'taburetto gata pasokon',en:'tablet PC',category:'Internet',color:'var(--n3)'},
  {id:'v-1593',jp:'アプリ',romaji:'apuri',en:'app',category:'Internet',color:'var(--n3)'},
  {id:'v-1594',jp:'クラウド',romaji:'kuraudo',en:'cloud computing',category:'Internet',color:'var(--n3)'},
  {id:'v-1595',jp:'ソフトウェア',romaji:'sofutowea',en:'software',category:'Internet',color:'var(--n3)'},
  {id:'v-1596',jp:'ラップトップ',romaji:'rapputopu',en:'laptop',category:'Internet',color:'var(--n3)'},
  {id:'v-1597',jp:'マルウェア',romaji:'maruuea',en:'malware',category:'Internet',color:'var(--n3)'},
  {id:'v-1598',jp:'ハッカー',romaji:'hakkā',en:'hacker',category:'Internet',color:'var(--n3)'},
  {id:'v-1599',jp:'無線LAN',romaji:'musen LAN',en:'wi-fi',category:'Internet',color:'var(--n3)'},
  {id:'v-1600',jp:'パスワードは何ですか',romaji:'pasuwādo wa nan desu ka',en:'what is the password?',category:'Internet',color:'var(--n3)'},
  {id:'v-1601',jp:'ネットワーク名は何ですか',romaji:'nettowāku mei wa nan desu ka',en:'what is the network name?',category:'Internet',color:'var(--n3)'},
  {id:'v-1602',jp:'インターネットに繋がりません',romaji:'intānetto ni tsunagarimasen',en:'I cannot get online',category:'Internet',color:'var(--n3)'},
  {id:'v-1603',jp:'いらっしゃいませ',romaji:'irasshaimase',en:'welcome to a shop',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1604',jp:'ちょっと見ているだけです',romaji:'chotto mite iru dake desu',en:'I am just looking',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1605',jp:'これ下さい',romaji:'kore kudasai',en:'I will take this one',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1606',jp:'説明書は入っていますか',romaji:'setsumaisho wa haitte imasu ka',en:'does it come with instructions?',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1607',jp:'ちょっと高過ぎます',romaji:'chotto taka sugimasu',en:'it is too expensive',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1608',jp:'ビニール袋ありますか',romaji:'binīru bukuro arimasu ka',en:'do you have a bag?',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1609',jp:'プレゼントですから包んで下さい',romaji:'purezento desu kara tsutsunde kudasai',en:'please gift wrap it',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1610',jp:'袋は大丈夫です',romaji:'fukuro wa daijōbu desu',en:'I do not need a bag',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1611',jp:'材料は何ですか',romaji:'zairyō wa nan desu ka',en:'what is in it?',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1612',jp:'試着出来ますか',romaji:'shichaku dekimasu ka',en:'can I try this on?',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1613',jp:'試着室はどこですか',romaji:'shichakushitsu wa doko desu ka',en:'where is the fitting room?',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1614',jp:'このサイズは合いません',romaji:'kono saizu wa aimasen',en:'this size does not fit',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1615',jp:'似合いません',romaji:'niaimasen',en:'it does not suit me',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1616',jp:'絹',romaji:'kinu',en:'silk',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1617',jp:'木綿',romaji:'momen',en:'cotton',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1618',jp:'ウール',romaji:'ūru',en:'wool',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1619',jp:'洗ったら縮みますか',romaji:'arattara chijimimasu ka',en:'will it shrink in the wash?',category:'Shopping Phrases',color:'var(--n4)'},
  {id:'v-1620',jp:'デパート',romaji:'depāto',en:'department store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1621',jp:'コンビニ',romaji:'konbini',en:'convenience store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1622',jp:'スーパー',romaji:'sūpā',en:'supermarket',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1623',jp:'花屋',romaji:'hanaya',en:'florist',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1624',jp:'靴屋',romaji:'kutsuya',en:'shoe shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1625',jp:'酒屋',romaji:'sakaya',en:'liquor shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1626',jp:'古本屋',romaji:'furuhon ya',en:'used bookstore',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1627',jp:'おもちゃ屋',romaji:'omocha ya',en:'toy shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1628',jp:'床屋',romaji:'tokoya',en:'barber',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1629',jp:'コインランドリー',romaji:'koin randorī',en:'launderette',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1630',jp:'のみの市',romaji:'nomi no ichi',en:'flea market',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1631',jp:'百均',romaji:'hyakkin',en:'100-yen store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1632',jp:'電気屋',romaji:'denkiya',en:'electronics shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1633',jp:'アニメ・ゲームショップ',romaji:'anime gēmu shoppu',en:'anime game store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1634',jp:'コスプレショップ',romaji:'kosupure shoppu',en:'cosplay shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1635',jp:'メイドカフェ',romaji:'meido kafe',en:'maid café',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1636',jp:'果物屋',romaji:'kudamonoya',en:'fruit shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1637',jp:'骨董店',romaji:'kottōten',en:'antiques shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1638',jp:'健康食料品店',romaji:'kenkō shokuryōhinten',en:'health food shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1639',jp:'眼鏡屋',romaji:'meganaya',en:'optician',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1640',jp:'香水店',romaji:'kōsuiten',en:'perfume shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1641',jp:'総菜屋',romaji:'sōzaiya',en:'delicatessen',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1642',jp:'店',romaji:'mise',en:'store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1643',jp:'薬局',romaji:'yakkyoku',en:'pharmacy/drugstore',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1644',jp:'眼鏡店',romaji:'megane ten',en:'optical store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1645',jp:'ショッピングモール',romaji:'shoppingu mōru',en:'shopping mall',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1646',jp:'パン屋',romaji:'panya',en:'bakery',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1647',jp:'菓子店',romaji:'kashi ten',en:'candy store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1648',jp:'食料品店',romaji:'shokuryō hin ten',en:'grocery store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1649',jp:'肉屋',romaji:'nikuya',en:'butcher shop',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1650',jp:'八百屋',romaji:'yaoya',en:'produce store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1651',jp:'市場',romaji:'ichiba',en:'market',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1652',jp:'喫茶店',romaji:'kissaten',en:'coffee house',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1653',jp:'パブ',romaji:'pabu',en:'pub',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1654',jp:'ピザ屋',romaji:'piza ya',en:'pizzeria',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1655',jp:'美容院',romaji:'biyō in',en:'hair salon',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1656',jp:'クリーニング屋',romaji:'kurīningu ya',en:'dry cleaners',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1657',jp:'写真館',romaji:'shashin kan',en:'photo studio',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1658',jp:'本屋',romaji:'honya',en:'bookstore',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1659',jp:'スポーツ店',romaji:'supōtsu ten',en:'sporting goods store',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1660',jp:'映画館',romaji:'eiga kan',en:'movie theater',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1661',jp:'博物館',romaji:'hakubutsukan',en:'museum',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1662',jp:'図書館',romaji:'toshokan',en:'library',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1663',jp:'劇場',romaji:'gekijō',en:'theater',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1664',jp:'ナイトクラブ',romaji:'naito kurabu',en:'nightclub',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1665',jp:'カジノ',romaji:'kajino',en:'casino',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1666',jp:'モスク',romaji:'mosuku',en:'mosque',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1667',jp:'寺院',romaji:'jīn',en:'temple',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1668',jp:'教会',romaji:'kyōkai',en:'church',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1669',jp:'大学',romaji:'daigaku',en:'university',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1670',jp:'学校',romaji:'gakkō',en:'school',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1671',jp:'市役所',romaji:'shiyaku sho',en:'city hall',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1672',jp:'大使館',romaji:'taishikan',en:'embassy',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1673',jp:'ガソリンスタンド',romaji:'gasorin sutando',en:'gas station',category:'Shop Types',color:'var(--n4)'},
  {id:'v-1674',jp:'予約しなければなりませんか',romaji:'yoyaku shinakereba narimasen ka',en:'do I need an appointment?',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1675',jp:'髪を切って下さい',romaji:'kami wo kitte kudasai',en:'please cut my hair',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1676',jp:'髪を洗って下さい',romaji:'kami wo aratte kudasai',en:'please wash my hair',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1677',jp:'前髪を短く切って下さい',romaji:'maegami wo mijikaku kitte kudasai',en:'I would like short bangs',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1678',jp:'少しだけ切って下さい',romaji:'sukoshi dake kitte kudasai',en:'just a little off please',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1679',jp:'他の髪型にしたいんです',romaji:'hoka no kamigata ni shitain desu',en:'I want a different style',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1680',jp:'もっと黒く/明るくして下さい',romaji:'motto kuroku/akaruku shite kudasai',en:'I would like it darker or lighter',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1681',jp:'ひげを剃って下さい',romaji:'hige wo sotte kudasai',en:'I would like a shave',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1682',jp:'マッサージ',romaji:'massāji',en:'massage',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1683',jp:'ジェル',romaji:'jeru',en:'hair gel',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1684',jp:'パーマ',romaji:'pāma',en:'perm',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1685',jp:'カラーシャンプー',romaji:'karā shanpū',en:'color rinse shampoo',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1686',jp:'ドライヤー',romaji:'doraiyā',en:'hair dryer',category:'Hairdresser',color:'var(--n3)'},
  {id:'v-1687',jp:'部屋の予約をしてあります',romaji:'heya no yoyaku wo shite arimasu',en:'I have a room reservation',category:'Hotel',color:'var(--n4)'},
  {id:'v-1688',jp:'一泊はいくらですか',romaji:'ippaku wa ikura desu ka',en:'how much per night?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1689',jp:'一人部屋ありますか',romaji:'hitori beya arimasu ka',en:'do you have a single room?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1690',jp:'二人部屋ありますか',romaji:'futari beya arimasu ka',en:'do you have a double room?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1691',jp:'朝食付きですか',romaji:'chōshoku tsuki desu ka',en:'does it include breakfast?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1692',jp:'隣り合わせの部屋ありますか',romaji:'tonariaase no heya arimasu ka',en:'do you have adjoining rooms?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1693',jp:'エレベーターありますか',romaji:'erebētā arimasu ka',en:'is there an elevator?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1694',jp:'ルームサービスありますか',romaji:'rūmu sābisu arimasu ka',en:'is there room service?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1695',jp:'部屋を見せてもらえますか',romaji:'heya wo misete moraemasu ka',en:'can I see the room?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1696',jp:'この部屋に決めました',romaji:'kono heya ni kimemashita',en:'I will take this room',category:'Hotel',color:'var(--n4)'},
  {id:'v-1697',jp:'食堂はどこですか',romaji:'shokudō wa doko desu ka',en:'where is the dining room?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1698',jp:'非常口はどこですか',romaji:'hijōguchi wa doko desu ka',en:'where is the emergency exit?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1699',jp:'金庫',romaji:'kinko',en:'safe for valuables',category:'Hotel',color:'var(--n4)'},
  {id:'v-1700',jp:'ベビーシッター',romaji:'bebī shittā',en:'babysitter',category:'Hotel',color:'var(--n4)'},
  {id:'v-1701',jp:'毛布もう一枚お願いします',romaji:'mōfu mō ichimai onegaishimasu',en:'could I have an extra blanket?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1702',jp:'シーツがきたないのですが',romaji:'shītsu ga kitanai no desu ga',en:'the bed linen is dirty',category:'Hotel',color:'var(--n4)'},
  {id:'v-1703',jp:'暖房がきいていません',romaji:'danbō ga kiite imasen',en:'the heater is not working',category:'Hotel',color:'var(--n4)'},
  {id:'v-1704',jp:'エアコンがきいていません',romaji:'eakon ga kiite imasen',en:'the air conditioning is not working',category:'Hotel',color:'var(--n4)'},
  {id:'v-1705',jp:'お湯が出ません',romaji:'oyu ga demasen',en:'there is no hot water',category:'Hotel',color:'var(--n4)'},
  {id:'v-1706',jp:'部屋に虫がいるんですが',romaji:'heya ni mushi ga iru n desu ga',en:'there are bugs in the room',category:'Hotel',color:'var(--n4)'},
  {id:'v-1707',jp:'チェックアウトは何時ですか',romaji:'chekku auto wa nanji desu ka',en:'what time is check out?',category:'Hotel',color:'var(--n4)'},
  {id:'v-1708',jp:'おもてなしありがとうございました',romaji:'omotenashi arigatō gozaimashita',en:'thank you for your hospitality',category:'Hotel',color:'var(--n4)'},
  {id:'v-1709',jp:'モーテル',romaji:'mō teru',en:'motel',category:'Hotel',color:'var(--n4)'},
  {id:'v-1710',jp:'部屋、ルーム',romaji:'heya, rūmu',en:'room',category:'Hotel',color:'var(--n4)'},
  {id:'v-1711',jp:'シングルルーム',romaji:'shinguru rūmu',en:'single room',category:'Hotel',color:'var(--n4)'},
  {id:'v-1712',jp:'ダブルルーム',romaji:'daburu rūmu',en:'double room',category:'Hotel',color:'var(--n4)'},
  {id:'v-1713',jp:'部屋を予約する',romaji:'heya wo yoyaku suru',en:'to book a room',category:'Hotel',color:'var(--n4)'},
  {id:'v-1714',jp:'泊まる',romaji:'tomaru',en:'to stay (hotel)',category:'Hotel',color:'var(--n4)'},
  {id:'v-1715',jp:'ハーフボード',romaji:'hāfu bōdo',en:'half board',category:'Hotel',color:'var(--n4)'},
  {id:'v-1716',jp:'フルボード',romaji:'furu bōdo',en:'full board',category:'Hotel',color:'var(--n4)'},
  {id:'v-1717',jp:'浴槽付きの',romaji:'yokusō tsuki no',en:'with bath',category:'Hotel',color:'var(--n4)'},
  {id:'v-1718',jp:'シャワー付きの',romaji:'shawā tsuki no',en:'with shower',category:'Hotel',color:'var(--n4)'},
  {id:'v-1719',jp:'エアコン',romaji:'eakon',en:'air conditioner',category:'Hotel',color:'var(--n4)'},
  {id:'v-1720',jp:'タオル',romaji:'taoru',en:'towel',category:'Hotel',color:'var(--n4)'},
  {id:'v-1721',jp:'鍵',romaji:'kagi',en:'key',category:'Hotel',color:'var(--n4)'},
  {id:'v-1722',jp:'管理人',romaji:'kanri jin',en:'administrator',category:'Hotel',color:'var(--n4)'},
  {id:'v-1723',jp:'客室係',romaji:'kyakushitsu gakari',en:'chambermaid',category:'Hotel',color:'var(--n4)'},
  {id:'v-1724',jp:'ベルボーイ',romaji:'beru bōi',en:'porter/bellboy',category:'Hotel',color:'var(--n4)'},
  {id:'v-1725',jp:'ドアマン',romaji:'doa man',en:'doorman',category:'Hotel',color:'var(--n4)'},
  {id:'v-1726',jp:'パブ、バー',romaji:'pabu, bā',en:'pub/bar',category:'Hotel',color:'var(--n4)'},
  {id:'v-1727',jp:'ビュッフェ',romaji:'byuffe',en:'buffet',category:'Hotel',color:'var(--n4)'},
  {id:'v-1728',jp:'ロビー',romaji:'robī',en:'lobby',category:'Hotel',color:'var(--n4)'},
  {id:'v-1729',jp:'エレベーター',romaji:'erebētā',en:'elevator',category:'Hotel',color:'var(--n4)'},
  {id:'v-1730',jp:'起こさないで下さい',romaji:'okosa nai de kudasai',en:'DO NOT DISTURB',category:'Hotel',color:'var(--n4)'},
  {id:'v-1731',jp:'キャンプ出来ますか',romaji:'kyanpu dekimasu ka',en:'can we camp here?',category:'Camping',color:'var(--n3)'},
  {id:'v-1732',jp:'管理人はどこですか',romaji:'kanrinin wa doko desu ka',en:'where is the manager?',category:'Camping',color:'var(--n3)'},
  {id:'v-1733',jp:'静かな場所がありますか',romaji:'shizuka na basho ga arimasu ka',en:'do you have a quiet spot?',category:'Camping',color:'var(--n3)'},
  {id:'v-1734',jp:'テント',romaji:'tento',en:'tent',category:'Camping',color:'var(--n3)'},
  {id:'v-1735',jp:'寝袋',romaji:'nebukuro',en:'sleeping bag',category:'Camping',color:'var(--n3)'},
  {id:'v-1736',jp:'リュックサック',romaji:'ryukkusakku',en:'backpack',category:'Camping',color:'var(--n3)'},
  {id:'v-1737',jp:'ランタン',romaji:'rantan',en:'lantern',category:'Camping',color:'var(--n3)'},
  {id:'v-1738',jp:'水筒',romaji:'suitō',en:'water bottle',category:'Camping',color:'var(--n3)'},
  {id:'v-1739',jp:'懐中電灯',romaji:'kaichū dentō',en:'flashlight',category:'Camping',color:'var(--n3)'},
  {id:'v-1740',jp:'ハンモック',romaji:'hammokku',en:'hammock',category:'Camping',color:'var(--n3)'},
  {id:'v-1741',jp:'コンパス',romaji:'konpasu',en:'compass',category:'Camping',color:'var(--n3)'},
  {id:'v-1742',jp:'魔法瓶',romaji:'mahōbin',en:'thermos',category:'Camping',color:'var(--n3)'},
  {id:'v-1743',jp:'燃料タンク',romaji:'nenryō tanku',en:'fuel tank',category:'Camping',color:'var(--n3)'},
  {id:'v-1744',jp:'折りたたみ式キャンプ用いす',romaji:'oritatami shiki kyanpu yō isu',en:'folding camp chair',category:'Camping',color:'var(--n3)'},
  {id:'v-1745',jp:'飲み水はありますか',romaji:'nomimizu wa arimasu ka',en:'is there drinking water?',category:'Camping',color:'var(--n3)'},
  {id:'v-1746',jp:'電気を使えますか',romaji:'denki wo tsukaemasu ka',en:'are there power outlets?',category:'Camping',color:'var(--n3)'},
  {id:'v-1747',jp:'ごみはいつ集めますか',romaji:'gomi wa itsu atsumemasu ka',en:'when is garbage collected?',category:'Camping',color:'var(--n3)'},
  {id:'v-1748',jp:'私',romaji:'watashi',en:'I/me',category:'Pronouns',color:'var(--n5)'},
  {id:'v-1749',jp:'あなた',romaji:'anata',en:'you',category:'Pronouns',color:'var(--n5)'},
  {id:'v-1750',jp:'彼',romaji:'kare',en:'he',category:'Pronouns',color:'var(--n5)'},
  {id:'v-1751',jp:'彼女',romaji:'kanojo',en:'she',category:'Pronouns',color:'var(--n5)'},
  {id:'v-1752',jp:'私たち',romaji:'watashi tachi',en:'we',category:'Pronouns',color:'var(--n5)'},
  {id:'v-1753',jp:'あなたがた',romaji:'anata ga ta',en:'you (group)',category:'Pronouns',color:'var(--n5)'},
  {id:'v-1754',jp:'彼らは',romaji:'karera wa',en:'they',category:'Pronouns',color:'var(--n5)'},
  {id:'v-1755',jp:'重さ',romaji:'omo sa',en:'weight',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1756',jp:'長さ',romaji:'naga sa',en:'length',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1757',jp:'幅',romaji:'haba',en:'width',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1758',jp:'高さ',romaji:'taka sa',en:'height',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1759',jp:'深さ',romaji:'fuka sa',en:'depth',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1760',jp:'体積',romaji:'taiseki',en:'volume',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1761',jp:'面積',romaji:'menseki',en:'area',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1762',jp:'グラム',romaji:'guramu',en:'gram',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1763',jp:'ミリグラム',romaji:'miriguramu',en:'milligram',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1764',jp:'キログラム',romaji:'kiroguramu',en:'kilogram',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1765',jp:'トン',romaji:'ton',en:'ton',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1766',jp:'ポンド',romaji:'pondo',en:'pound',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1767',jp:'オンス',romaji:'onsu',en:'ounce',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1768',jp:'メートル',romaji:'mētoru',en:'meter',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1769',jp:'ミリメートル',romaji:'mirimētoru',en:'millimeter',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1770',jp:'センチメートル',romaji:'senchimētoru',en:'centimeter',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1771',jp:'キロメートル',romaji:'kiromētoru',en:'kilometer',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1772',jp:'マイル',romaji:'mairu',en:'mile',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1773',jp:'インチ',romaji:'inchi',en:'inch',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1774',jp:'フィート',romaji:'fīto',en:'foot',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1775',jp:'ヤード',romaji:'yādo',en:'yard',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1776',jp:'平方メートル',romaji:'heihō mētoru',en:'square meter',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1777',jp:'ヘクタール',romaji:'hekutāru',en:'hectare',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1778',jp:'リットル',romaji:'rittoru',en:'liter',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1779',jp:'度',romaji:'do',en:'degree',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1780',jp:'ボルト',romaji:'boruto',en:'volt',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1781',jp:'アンペア',romaji:'anpea',en:'ampere',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1782',jp:'馬力',romaji:'bariki',en:'horsepower',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1783',jp:'数量',romaji:'sūryō',en:'quantity',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1784',jp:'少し',romaji:'sukoshi',en:'a little bit',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1785',jp:'ダース',romaji:'dāsu',en:'dozen',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1786',jp:'縮尺',romaji:'shukushaku',en:'scale (map)',category:'Units Of Measurement',color:'var(--n3)'},
  {id:'v-1787',jp:'ジャー、瓶',romaji:'jā, bin',en:'jar',category:'Containers',color:'var(--n3)'},
  {id:'v-1788',jp:'缶',romaji:'kan',en:'can',category:'Containers',color:'var(--n3)'},
  {id:'v-1789',jp:'バケツ',romaji:'baketsu',en:'bucket',category:'Containers',color:'var(--n3)'},
  {id:'v-1790',jp:'樽',romaji:'taru',en:'barrel',category:'Containers',color:'var(--n3)'},
  {id:'v-1791',jp:'たらい',romaji:'tarai',en:'basin',category:'Containers',color:'var(--n3)'},
  {id:'v-1792',jp:'タンク',romaji:'tanku',en:'tank',category:'Containers',color:'var(--n3)'},
  {id:'v-1793',jp:'スキットル',romaji:'sukittoru',en:'hip flask',category:'Containers',color:'var(--n3)'},
  {id:'v-1794',jp:'マグカップ',romaji:'magukappu',en:'mug',category:'Containers',color:'var(--n3)'},
  {id:'v-1795',jp:'ソーサー',romaji:'sōsā',en:'saucer',category:'Containers',color:'var(--n3)'},
  {id:'v-1796',jp:'ガラスのコップ',romaji:'garasu no koppu',en:'glass (tumbler)',category:'Containers',color:'var(--n3)'},
  {id:'v-1797',jp:'ワイングラス',romaji:'wain gurasu',en:'wineglass',category:'Containers',color:'var(--n3)'},
  {id:'v-1798',jp:'両手鍋',romaji:'ryō tenabe',en:'saucepan',category:'Containers',color:'var(--n3)'},
  {id:'v-1799',jp:'デキャンター',romaji:'dekyanta',en:'carafe',category:'Containers',color:'var(--n3)'},
  {id:'v-1800',jp:'水差し',romaji:'mizusashi',en:'pitcher',category:'Containers',color:'var(--n3)'},
  {id:'v-1801',jp:'器',romaji:'utsuwa',en:'vessel',category:'Containers',color:'var(--n3)'},
  {id:'v-1802',jp:'鉢',romaji:'hachi',en:'pot (crock)',category:'Containers',color:'var(--n3)'},
  {id:'v-1803',jp:'花瓶',romaji:'kabin',en:'vase',category:'Containers',color:'var(--n3)'},
  {id:'v-1804',jp:'チューブ',romaji:'chūbu',en:'tube',category:'Containers',color:'var(--n3)'},
  {id:'v-1805',jp:'南京袋',romaji:'nankinbukuro',en:'sack/bag',category:'Containers',color:'var(--n3)'},
  {id:'v-1806',jp:'袋',romaji:'fukuro',en:'bag (paper/plastic)',category:'Containers',color:'var(--n3)'},
  {id:'v-1807',jp:'箱',romaji:'hako',en:'box',category:'Containers',color:'var(--n3)'},
  {id:'v-1808',jp:'木箱',romaji:'ki bako',en:'crate',category:'Containers',color:'var(--n3)'},
  {id:'v-1809',jp:'かご',romaji:'kago',en:'basket',category:'Containers',color:'var(--n3)'},
  {id:'v-1810',jp:'機長',romaji:'kichō',en:'captain (pilot)',category:'Airplane',color:'var(--n4)'},
  {id:'v-1811',jp:'乗務員',romaji:'jōmu in',en:'crew',category:'Airplane',color:'var(--n4)'},
  {id:'v-1812',jp:'パイロット',romaji:'pairotto',en:'pilot',category:'Airplane',color:'var(--n4)'},
  {id:'v-1813',jp:'客室乗務員',romaji:'kyakushitsu jōmu in',en:'flight attendant',category:'Airplane',color:'var(--n4)'},
  {id:'v-1814',jp:'翼',romaji:'tsubasa',en:'wings',category:'Airplane',color:'var(--n4)'},
  {id:'v-1815',jp:'コックピット',romaji:'kokkupitto',en:'cockpit',category:'Airplane',color:'var(--n4)'},
  {id:'v-1816',jp:'エンジン',romaji:'enjin',en:'engine',category:'Airplane',color:'var(--n4)'},
  {id:'v-1817',jp:'タービン',romaji:'tābin',en:'turbine',category:'Airplane',color:'var(--n4)'},
  {id:'v-1818',jp:'プロペラ',romaji:'puropera',en:'propeller',category:'Airplane',color:'var(--n4)'},
  {id:'v-1819',jp:'ブラックボックス',romaji:'burakku bokkusu',en:'black box',category:'Airplane',color:'var(--n4)'},
  {id:'v-1820',jp:'燃料',romaji:'nenryō',en:'fuel',category:'Airplane',color:'var(--n4)'},
  {id:'v-1821',jp:'酸素マスク',romaji:'sanso masuku',en:'oxygen mask',category:'Airplane',color:'var(--n4)'},
  {id:'v-1822',jp:'ライフジャケット',romaji:'raifu jaketto',en:'life vest',category:'Airplane',color:'var(--n4)'},
  {id:'v-1823',jp:'落下傘',romaji:'rakkasan',en:'parachute',category:'Airplane',color:'var(--n4)'},
  {id:'v-1824',jp:'離陸',romaji:'ririku',en:'takeoff',category:'Airplane',color:'var(--n4)'},
  {id:'v-1825',jp:'高度',romaji:'kōdo',en:'altitude',category:'Airplane',color:'var(--n4)'},
  {id:'v-1826',jp:'エアポケット',romaji:'eapoketto',en:'air pocket',category:'Airplane',color:'var(--n4)'},
  {id:'v-1827',jp:'ヘッドホン',romaji:'heddohon',en:'headphones',category:'Airplane',color:'var(--n4)'},
  {id:'v-1828',jp:'通路',romaji:'tsūro',en:'aisle',category:'Airplane',color:'var(--n4)'},
  {id:'v-1829',jp:'通勤列車',romaji:'tsūkin ressha',en:'suburban train',category:'Train',color:'var(--n4)'},
  {id:'v-1830',jp:'高速鉄道',romaji:'kōsoku tetsudō',en:'express train',category:'Train',color:'var(--n4)'},
  {id:'v-1831',jp:'各駅列車',romaji:'kaku-eki ressha',en:'slow train',category:'Train',color:'var(--n4)'},
  {id:'v-1832',jp:'ディーゼル機関車',romaji:'dīzeru kikan sha',en:'diesel locomotive',category:'Train',color:'var(--n4)'},
  {id:'v-1833',jp:'蒸気機関車',romaji:'jōki kikan sha',en:'steam engine',category:'Train',color:'var(--n4)'},
  {id:'v-1834',jp:'客車',romaji:'kyakusha',en:'passenger car',category:'Train',color:'var(--n4)'},
  {id:'v-1835',jp:'食堂車',romaji:'shokudō sha',en:'dining car',category:'Train',color:'var(--n4)'},
  {id:'v-1836',jp:'寝台車',romaji:'shin-digh-sha',en:'sleeping car',category:'Train',color:'var(--n4)'},
  {id:'v-1837',jp:'レール',romaji:'rēru',en:'rails',category:'Train',color:'var(--n4)'},
  {id:'v-1838',jp:'鉄道',romaji:'tetsudō',en:'railroad',category:'Train',color:'var(--n4)'},
  {id:'v-1839',jp:'枕木',romaji:'makuragi',en:'railroad tie',category:'Train',color:'var(--n4)'},
  {id:'v-1840',jp:'ホーム',romaji:'hōmu',en:'platform',category:'Train',color:'var(--n4)'},
  {id:'v-1841',jp:'線路',romaji:'senro',en:'track',category:'Train',color:'var(--n4)'},
  {id:'v-1842',jp:'機関士',romaji:'kikan shi',en:'train engineer',category:'Train',color:'var(--n4)'},
  {id:'v-1843',jp:'車掌',romaji:'shashō',en:'train steward',category:'Train',color:'var(--n4)'},
  {id:'v-1844',jp:'乗客',romaji:'jōkyaku',en:'passenger',category:'Train',color:'var(--n4)'},
  {id:'v-1845',jp:'検札係',romaji:'kensatsu gakari',en:'conductor',category:'Train',color:'var(--n4)'},
  {id:'v-1846',jp:'上段寝台',romaji:'jōdan shindai',en:'upper berth',category:'Train',color:'var(--n4)'},
  {id:'v-1847',jp:'下段寝台',romaji:'gedan shindai',en:'lower berth',category:'Train',color:'var(--n4)'},
  {id:'v-1848',jp:'寝台',romaji:'shindai',en:'berth',category:'Train',color:'var(--n4)'},
  {id:'v-1849',jp:'発車する',romaji:'hassha suru',en:'to depart',category:'Train',color:'var(--n4)'},
  {id:'v-1850',jp:'鉄道事故',romaji:'tetsudō jiko',en:'train wreck',category:'Train',color:'var(--n4)'},
  {id:'v-1851',jp:'脱線する',romaji:'dassen suru',en:'to be derailed',category:'Train',color:'var(--n4)'},
  {id:'v-1852',jp:'市、町',romaji:'shi, machi',en:'city',category:'City',color:'var(--n4)'},
  {id:'v-1853',jp:'首都',romaji:'shuto',en:'capital city',category:'City',color:'var(--n4)'},
  {id:'v-1854',jp:'村',romaji:'mura',en:'village',category:'City',color:'var(--n4)'},
  {id:'v-1855',jp:'中心街',romaji:'chūshin gai',en:'downtown',category:'City',color:'var(--n4)'},
  {id:'v-1856',jp:'郊外',romaji:'kōgai',en:'suburb',category:'City',color:'var(--n4)'},
  {id:'v-1857',jp:'町外れ',romaji:'machihazure',en:'outskirts',category:'City',color:'var(--n4)'},
  {id:'v-1858',jp:'市街地図',romaji:'shigai chizu',en:'city map',category:'City',color:'var(--n4)'},
  {id:'v-1859',jp:'街区',romaji:'gaiku',en:'city block',category:'City',color:'var(--n4)'},
  {id:'v-1860',jp:'住宅街',romaji:'jūtaku gai',en:'residential block',category:'City',color:'var(--n4)'},
  {id:'v-1861',jp:'歩行者',romaji:'hokō sha',en:'pedestrian',category:'City',color:'var(--n4)'},
  {id:'v-1862',jp:'歩道',romaji:'hodō',en:'sidewalk',category:'City',color:'var(--n4)'},
  {id:'v-1863',jp:'橋',romaji:'hashi',en:'bridge',category:'City',color:'var(--n4)'},
  {id:'v-1864',jp:'噴水',romaji:'funsui',en:'fountain',category:'City',color:'var(--n4)'},
  {id:'v-1865',jp:'公園',romaji:'kōen',en:'park',category:'City',color:'var(--n4)'},
  {id:'v-1866',jp:'大通り',romaji:'ōdōri',en:'boulevard',category:'City',color:'var(--n4)'},
  {id:'v-1867',jp:'広場',romaji:'hiroba',en:'square',category:'City',color:'var(--n4)'},
  {id:'v-1868',jp:'アヴェニュー',romaji:'avenyū',en:'avenue',category:'City',color:'var(--n4)'},
  {id:'v-1869',jp:'わき道',romaji:'wakimichi',en:'side street',category:'City',color:'var(--n4)'},
  {id:'v-1870',jp:'行き止まり',romaji:'ikidomari',en:'dead end',category:'City',color:'var(--n4)'},
  {id:'v-1871',jp:'建物',romaji:'tatemono',en:'building',category:'City',color:'var(--n4)'},
  {id:'v-1872',jp:'摩天楼',romaji:'matenrō',en:'skyscraper',category:'City',color:'var(--n4)'},
  {id:'v-1873',jp:'屋根',romaji:'yane',en:'roof',category:'City',color:'var(--n4)'},
  {id:'v-1874',jp:'ゴミ入れ',romaji:'gomi ire',en:'garbage can',category:'City',color:'var(--n4)'},
  {id:'v-1875',jp:'ベンチ',romaji:'benchi',en:'bench',category:'City',color:'var(--n4)'},
  {id:'v-1876',jp:'警官',romaji:'keikan',en:'police officer',category:'City',color:'var(--n4)'},
  {id:'v-1877',jp:'警察',romaji:'keisatsu',en:'police',category:'City',color:'var(--n4)'},
  {id:'v-1878',jp:'ホームレス',romaji:'hōmuresu',en:'homeless',category:'City',color:'var(--n4)'},
  {id:'v-1879',jp:'買う',romaji:'kau',en:'to buy',category:'Shopping',color:'var(--n4)'},
  {id:'v-1880',jp:'買い物に行く',romaji:'kaimono ni iku',en:'to go shopping',category:'Shopping',color:'var(--n4)'},
  {id:'v-1881',jp:'値札',romaji:'nefuda',en:'price tag',category:'Shopping',color:'var(--n4)'},
  {id:'v-1882',jp:'安価な',romaji:'anka na',en:'inexpensive',category:'Shopping',color:'var(--n4)'},
  {id:'v-1883',jp:'高い',romaji:'takai',en:'expensive',category:'Shopping',color:'var(--n4)'},
  {id:'v-1884',jp:'それは高い',romaji:'sore wa takai',en:'it\\\'s expensive',category:'Shopping',color:'var(--n4)'},
  {id:'v-1885',jp:'レジ',romaji:'reji',en:'check out/cash desk',category:'Shopping',color:'var(--n4)'},
  {id:'v-1886',jp:'試着室',romaji:'shichaku shitsu',en:'fitting room',category:'Shopping',color:'var(--n4)'},
  {id:'v-1887',jp:'試着する',romaji:'shichaku suru',en:'to try on',category:'Shopping',color:'var(--n4)'},
  {id:'v-1888',jp:'レンタル',romaji:'rentaru',en:'rental',category:'Shopping',color:'var(--n4)'},
  {id:'v-1889',jp:'付けで',romaji:'tsuke de',en:'on credit',category:'Shopping',color:'var(--n4)'},
  {id:'v-1890',jp:'洋服',romaji:'yōfuku',en:'clothes',category:'Clothing',color:'var(--n4)'},
  {id:'v-1891',jp:'オーバーコート',romaji:'ōbā kōto',en:'overcoat',category:'Clothing',color:'var(--n4)'},
  {id:'v-1892',jp:'毛皮のコート',romaji:'kegawa no kōto',en:'fur coat',category:'Clothing',color:'var(--n4)'},
  {id:'v-1893',jp:'ダウンコート',romaji:'daun kōto',en:'down coat',category:'Clothing',color:'var(--n4)'},
  {id:'v-1894',jp:'ジャケット',romaji:'jaketto',en:'jacket (leather)',category:'Clothing',color:'var(--n4)'},
  {id:'v-1895',jp:'レインコート',romaji:'reinkōto',en:'raincoat',category:'Clothing',color:'var(--n4)'},
  {id:'v-1896',jp:'防水の',romaji:'bōsui no',en:'waterproof',category:'Clothing',color:'var(--n4)'},
  {id:'v-1897',jp:'ワイシャツ',romaji:'waishatsu',en:'shirt',category:'Clothing',color:'var(--n4)'},
  {id:'v-1898',jp:'ズボン',romaji:'zubon',en:'pants/trousers',category:'Clothing',color:'var(--n4)'},
  {id:'v-1899',jp:'ジーンズ',romaji:'jīnzu',en:'jeans',category:'Clothing',color:'var(--n4)'},
  {id:'v-1900',jp:'背広',romaji:'sebiro',en:'suit (men\\\'s)',category:'Clothing',color:'var(--n4)'},
  {id:'v-1901',jp:'ドレス',romaji:'doresu',en:'dress',category:'Clothing',color:'var(--n4)'},
  {id:'v-1902',jp:'スカート',romaji:'sukāto',en:'skirt',category:'Clothing',color:'var(--n4)'},
  {id:'v-1903',jp:'ブラウス',romaji:'burausu',en:'blouse',category:'Clothing',color:'var(--n4)'},
  {id:'v-1904',jp:'Tシャツ',romaji:'tīshatsu',en:'T-shirt',category:'Clothing',color:'var(--n4)'},
  {id:'v-1905',jp:'半ズボン',romaji:'han zubon',en:'shorts',category:'Clothing',color:'var(--n4)'},
  {id:'v-1906',jp:'トラックスーツ',romaji:'torakku sūtsu',en:'tracksuit',category:'Clothing',color:'var(--n4)'},
  {id:'v-1907',jp:'バスローブ',romaji:'basurōbu',en:'bathrobe',category:'Clothing',color:'var(--n4)'},
  {id:'v-1908',jp:'パジャマ',romaji:'pajama',en:'pajamas',category:'Clothing',color:'var(--n4)'},
  {id:'v-1909',jp:'セーター',romaji:'sētā',en:'sweater',category:'Clothing',color:'var(--n4)'},
  {id:'v-1910',jp:'プルオーバー',romaji:'puruōbā',en:'pullover',category:'Clothing',color:'var(--n4)'},
  {id:'v-1911',jp:'ベスト',romaji:'besuto',en:'vest',category:'Clothing',color:'var(--n4)'},
  {id:'v-1912',jp:'タキシード',romaji:'takishīdo',en:'tuxedo',category:'Clothing',color:'var(--n4)'},
  {id:'v-1913',jp:'制服',romaji:'seifuku',en:'uniform',category:'Clothing',color:'var(--n4)'},
  {id:'v-1914',jp:'作業服',romaji:'sagyō fuku',en:'workwear',category:'Clothing',color:'var(--n4)'},
  {id:'v-1915',jp:'オーバーオール',romaji:'ōbā ōru',en:'overalls',category:'Clothing',color:'var(--n4)'},
  {id:'v-1916',jp:'下着',romaji:'shitagi',en:'underwear',category:'Clothing',color:'var(--n4)'},
  {id:'v-1917',jp:'ボクサーパンツ',romaji:'bokusā pantsu',en:'boxers',category:'Clothing',color:'var(--n4)'},
  {id:'v-1918',jp:'パンティー',romaji:'pantī',en:'panties',category:'Clothing',color:'var(--n4)'},
  {id:'v-1919',jp:'タンクトップ',romaji:'tanku toppu',en:'undershirt',category:'Clothing',color:'var(--n4)'},
  {id:'v-1920',jp:'靴下',romaji:'kutsushita',en:'socks',category:'Clothing',color:'var(--n4)'},
  {id:'v-1921',jp:'ネグリジェ',romaji:'negurije',en:'nightgown',category:'Clothing',color:'var(--n4)'},
  {id:'v-1922',jp:'ブラジャー',romaji:'burajā',en:'bra',category:'Clothing',color:'var(--n4)'},
  {id:'v-1923',jp:'パンティストッキング',romaji:'pantī sutokkingu',en:'tights',category:'Clothing',color:'var(--n4)'},
  {id:'v-1924',jp:'ストッキング',romaji:'sutokkingu',en:'stockings',category:'Clothing',color:'var(--n4)'},
  {id:'v-1925',jp:'水着',romaji:'mizugi',en:'bathing suit',category:'Clothing',color:'var(--n4)'},
  {id:'v-1926',jp:'帽子',romaji:'bōshi',en:'hat',category:'Clothing',color:'var(--n4)'},
  {id:'v-1927',jp:'野球帽',romaji:'yakyū bō',en:'baseball cap',category:'Clothing',color:'var(--n4)'},
  {id:'v-1928',jp:'ベレー帽',romaji:'berē bō',en:'beret',category:'Clothing',color:'var(--n4)'},
  {id:'v-1929',jp:'フード',romaji:'fūdo',en:'hood',category:'Clothing',color:'var(--n4)'},
  {id:'v-1930',jp:'ニット帽',romaji:'nitto bō',en:'knitted hat',category:'Clothing',color:'var(--n4)'},
  {id:'v-1931',jp:'ヘルメット',romaji:'herumetto',en:'helmet',category:'Clothing',color:'var(--n4)'},
  {id:'v-1932',jp:'シルクハット',romaji:'shiruku hatto',en:'top hat',category:'Clothing',color:'var(--n4)'},
  {id:'v-1933',jp:'マフラー',romaji:'mafurā',en:'scarf/muffler',category:'Clothing',color:'var(--n4)'},
  {id:'v-1934',jp:'手袋',romaji:'tebukuro',en:'gloves',category:'Clothing',color:'var(--n4)'},
  {id:'v-1935',jp:'ミトン',romaji:'miton',en:'mittens',category:'Clothing',color:'var(--n4)'},
  {id:'v-1936',jp:'ネクタイ',romaji:'nekutai',en:'necktie',category:'Clothing',color:'var(--n4)'},
  {id:'v-1937',jp:'蝶ネクタイ',romaji:'chō nekutai',en:'bow tie',category:'Clothing',color:'var(--n4)'},
  {id:'v-1938',jp:'サスペンダー',romaji:'sasupendā',en:'suspenders',category:'Clothing',color:'var(--n4)'},
  {id:'v-1939',jp:'ベルト',romaji:'beruto',en:'belt',category:'Clothing',color:'var(--n4)'},
  {id:'v-1940',jp:'バックル',romaji:'bakkuru',en:'buckle',category:'Clothing',color:'var(--n4)'},
  {id:'v-1941',jp:'襟',romaji:'eri',en:'collar',category:'Clothing',color:'var(--n4)'},
  {id:'v-1942',jp:'ポケット',romaji:'poketto',en:'pocket',category:'Clothing',color:'var(--n4)'},
  {id:'v-1943',jp:'袖',romaji:'sode',en:'sleeve',category:'Clothing',color:'var(--n4)'},
  {id:'v-1944',jp:'チャック',romaji:'chakku',en:'zipper',category:'Clothing',color:'var(--n4)'},
  {id:'v-1945',jp:'ボタン',romaji:'botan',en:'button',category:'Clothing',color:'var(--n4)'},
  {id:'v-1946',jp:'ボタンの穴',romaji:'botan no ana',en:'buttonhole',category:'Clothing',color:'var(--n4)'},
  {id:'v-1947',jp:'糸',romaji:'ito',en:'thread',category:'Clothing',color:'var(--n4)'},
  {id:'v-1948',jp:'縫い針',romaji:'nui bari',en:'sewing needle',category:'Clothing',color:'var(--n4)'},
  {id:'v-1949',jp:'縫い目',romaji:'nuime',en:'seam',category:'Clothing',color:'var(--n4)'},
  {id:'v-1950',jp:'刺繍',romaji:'shishū',en:'embroidery',category:'Clothing',color:'var(--n4)'},
  {id:'v-1951',jp:'靴',romaji:'kutsu',en:'shoes',category:'Footwear',color:'var(--n3)'},
  {id:'v-1952',jp:'アンクルブーツ',romaji:'ankuru būtsu',en:'ankle boots',category:'Footwear',color:'var(--n3)'},
  {id:'v-1953',jp:'パンプス',romaji:'panpusu',en:'shoes (low-heeled)',category:'Footwear',color:'var(--n3)'},
  {id:'v-1954',jp:'ブーツ',romaji:'būtsu',en:'boots',category:'Footwear',color:'var(--n3)'},
  {id:'v-1955',jp:'スリッパ',romaji:'surippa',en:'slippers',category:'Footwear',color:'var(--n3)'},
  {id:'v-1956',jp:'スニーカー',romaji:'sunīkā',en:'sneakers',category:'Footwear',color:'var(--n3)'},
  {id:'v-1957',jp:'サンダル',romaji:'sandaru',en:'sandals',category:'Footwear',color:'var(--n3)'},
  {id:'v-1958',jp:'テニスシューズ',romaji:'tenisu shūzu',en:'tennis shoes',category:'Footwear',color:'var(--n3)'},
  {id:'v-1959',jp:'かかと',romaji:'kakato',en:'heel',category:'Footwear',color:'var(--n3)'},
  {id:'v-1960',jp:'靴ひも',romaji:'kutsu himo',en:'shoestring',category:'Footwear',color:'var(--n3)'},
  {id:'v-1961',jp:'靴クリーム',romaji:'kutsu kurīmu',en:'shoe polish',category:'Footwear',color:'var(--n3)'},
  {id:'v-1962',jp:'靴べら',romaji:'kutsubera',en:'shoehorn',category:'Footwear',color:'var(--n3)'},
  {id:'v-1963',jp:'歯磨き粉',romaji:'hamigakiko',en:'toothpaste',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1964',jp:'歯ブラシ',romaji:'haburashi',en:'toothbrush',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1965',jp:'歯を磨く',romaji:'ha wo migaku',en:'to brush one\\\'s teeth',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1966',jp:'カミソリ',romaji:'kamisori',en:'razor',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1967',jp:'シェービングクリーム',romaji:'shēbingu kurīmu',en:'shaving cream',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1968',jp:'ひげを剃る',romaji:'hige wo soru',en:'to shave',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1969',jp:'せっけん',romaji:'sekken',en:'soap',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1970',jp:'シャンプー',romaji:'shanpū',en:'shampoo',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1971',jp:'はさみ',romaji:'hasami',en:'scissors',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1972',jp:'爪やすり',romaji:'tsume yasuri',en:'nail file',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1973',jp:'爪切り',romaji:'tsume giri',en:'nail clippers',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1974',jp:'ピンセット',romaji:'pinsetto',en:'tweezers',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1975',jp:'化粧品',romaji:'keshō hin',en:'cosmetics',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1976',jp:'フェイスパック',romaji:'feisu pakku',en:'face mask',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1977',jp:'マニキュア',romaji:'manikyua',en:'manicure',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1978',jp:'ペディキュア',romaji:'pedikyua',en:'pedicure',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1979',jp:'化粧ポーチ',romaji:'keshō pōchi',en:'make-up bag',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1980',jp:'フェイスパウダー',romaji:'feisu pauda',en:'face powder',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1981',jp:'ファンデーション',romaji:'fandēshon',en:'foundation',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1982',jp:'チーク',romaji:'chīku',en:'blusher',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1983',jp:'香水',romaji:'kōsui',en:'perfume',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1984',jp:'オードトワレ',romaji:'ōdotoware',en:'toilet water',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1985',jp:'ローション',romaji:'rō shon',en:'lotion',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1986',jp:'オーデコロン',romaji:'ōdekoron',en:'cologne',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1987',jp:'アイシャドウ',romaji:'aishadō',en:'eyeshadow',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1988',jp:'アイライナー',romaji:'airainā',en:'eyeliner',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1989',jp:'マスカラ',romaji:'masukara',en:'mascara',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1990',jp:'口紅',romaji:'kuchibeni',en:'lipstick',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1991',jp:'ネイルポリッシュ',romaji:'neiru porisshu',en:'nail polish',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1992',jp:'ヘアスプレー',romaji:'hea supurē',en:'hair spray',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1993',jp:'デオドラント',romaji:'deodoranto',en:'deodorant',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1994',jp:'フェイスクリーム',romaji:'feisu kurīmu',en:'face cream',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1995',jp:'ハンドクリーム',romaji:'hando kurīmu',en:'hand cream',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1996',jp:'しわ取りクリーム',romaji:'shiwa tori kurīmu',en:'anti-wrinkle cream',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1997',jp:'タンポン',romaji:'tanpon',en:'tampon',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1998',jp:'トイレットペーパー',romaji:'toiretto pēpā',en:'toilet paper',category:'Personal Care & Cosmetics',color:'var(--n3)'},
  {id:'v-1999',jp:'時計',romaji:'tokei',en:'watch (wristwatch)',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2000',jp:'目覚まし時計',romaji:'mezamashi dokei',en:'alarm clock',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2001',jp:'掛け時計',romaji:'kakedokei',en:'wall clock',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2002',jp:'砂時計',romaji:'sunadokei',en:'hourglass',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2003',jp:'日時計',romaji:'hidokei',en:'sundial',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2004',jp:'針',romaji:'hari',en:'hand (of clock)',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2005',jp:'ダイヤル',romaji:'daiyaru',en:'dial',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2006',jp:'電池',romaji:'denchi',en:'battery',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2007',jp:'進んでいる',romaji:'susundeiru',en:'to run fast (clock)',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2008',jp:'遅れている',romaji:'okureteiru',en:'to run slow (clock)',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2009',jp:'時計職人',romaji:'tokei shokunin',en:'watchmaker',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2010',jp:'修理する',romaji:'shūri suru',en:'to repair',category:'Watches & Clocks',color:'var(--n3)'},
  {id:'v-2011',jp:'ボールペン',romaji:'bōrupen',en:'ballpoint pen',category:'Stationery',color:'var(--n3)'},
  {id:'v-2012',jp:'万年筆',romaji:'mannenhitsu',en:'fountain pen',category:'Stationery',color:'var(--n3)'},
  {id:'v-2013',jp:'鉛筆',romaji:'enpitsu',en:'pencil',category:'Stationery',color:'var(--n3)'},
  {id:'v-2014',jp:'蛍光ペン',romaji:'keikō pen',en:'highlighter',category:'Stationery',color:'var(--n3)'},
  {id:'v-2015',jp:'フェルトペン',romaji:'feruto pen',en:'felt-tip pen',category:'Stationery',color:'var(--n3)'},
  {id:'v-2016',jp:'メモ帳',romaji:'memo chō',en:'notepad',category:'Stationery',color:'var(--n3)'},
  {id:'v-2017',jp:'手帳',romaji:'techō',en:'agenda/diary',category:'Stationery',color:'var(--n3)'},
  {id:'v-2018',jp:'定規',romaji:'jōgi',en:'ruler',category:'Stationery',color:'var(--n3)'},
  {id:'v-2019',jp:'電卓',romaji:'dentaku',en:'calculator',category:'Stationery',color:'var(--n3)'},
  {id:'v-2020',jp:'消しゴム',romaji:'keshigomu',en:'eraser',category:'Stationery',color:'var(--n3)'},
  {id:'v-2021',jp:'画鋲',romaji:'gabyō',en:'thumbtack',category:'Stationery',color:'var(--n3)'},
  {id:'v-2022',jp:'ゼムクリップ',romaji:'zemu kurippu',en:'paper clip',category:'Stationery',color:'var(--n3)'},
  {id:'v-2023',jp:'糊',romaji:'nori',en:'glue',category:'Stationery',color:'var(--n3)'},
  {id:'v-2024',jp:'ホッチキス',romaji:'hochikisu',en:'stapler',category:'Stationery',color:'var(--n3)'},
  {id:'v-2025',jp:'パンチ',romaji:'panchi',en:'hole punch',category:'Stationery',color:'var(--n3)'},
  {id:'v-2026',jp:'鉛筆削り',romaji:'enpitsu kezuri',en:'pencil sharpener',category:'Stationery',color:'var(--n3)'},
  {id:'v-2027',jp:'友情',romaji:'yūjō',en:'friendship',category:'Friends',color:'var(--n4)'},
  {id:'v-2028',jp:'パートナー',romaji:'pātonā',en:'partner',category:'Friends',color:'var(--n4)'},
  {id:'v-2029',jp:'長',romaji:'chō',en:'boss/chief',category:'Friends',color:'var(--n4)'},
  {id:'v-2030',jp:'上司',romaji:'jōshi',en:'superior',category:'Friends',color:'var(--n4)'},
  {id:'v-2031',jp:'部下',romaji:'buka',en:'subordinate',category:'Friends',color:'var(--n4)'},
  {id:'v-2032',jp:'知り合い',romaji:'shiriai',en:'acquaintance',category:'Friends',color:'var(--n4)'},
  {id:'v-2033',jp:'クラスメート',romaji:'kurasumēto',en:'classmate',category:'Friends',color:'var(--n4)'},
  {id:'v-2034',jp:'蛇口',romaji:'jaguchi',en:'tap/faucet',category:'Bathroom',color:'var(--n3)'},
  {id:'v-2035',jp:'温水',romaji:'onsui',en:'hot water',category:'Bathroom',color:'var(--n3)'},
  {id:'v-2036',jp:'冷水',romaji:'reisui',en:'cold water',category:'Bathroom',color:'var(--n3)'},
  {id:'v-2037',jp:'シャワーを浴びる',romaji:'shawā wo abiru',en:'to take a shower',category:'Bathroom',color:'var(--n3)'},
  {id:'v-2038',jp:'浴槽',romaji:'yokusō',en:'bathtub',category:'Bathroom',color:'var(--n3)'},
  {id:'v-2039',jp:'トイレ、便器',romaji:'toire, benki',en:'toilet',category:'Bathroom',color:'var(--n3)'},
  {id:'v-2040',jp:'洗面台',romaji:'senmen dai',en:'sink/washbasin',category:'Bathroom',color:'var(--n3)'},
  {id:'v-2041',jp:'スポンジ',romaji:'suponji',en:'sponge',category:'Bathroom',color:'var(--n3)'},
  {id:'v-2042',jp:'洗剤',romaji:'senzai',en:'laundry detergent',category:'Bathroom',color:'var(--n3)'},
  {id:'v-2043',jp:'湾',romaji:'wan',en:'gulf/bay',category:'Sea',color:'var(--n3)'},
  {id:'v-2044',jp:'海峡',romaji:'kaikyō',en:'straits',category:'Sea',color:'var(--n3)'},
  {id:'v-2045',jp:'入り江',romaji:'irie',en:'bay/cove',category:'Sea',color:'var(--n3)'},
  {id:'v-2046',jp:'岬',romaji:'misaki',en:'cape',category:'Sea',color:'var(--n3)'},
  {id:'v-2047',jp:'サンゴ',romaji:'sango',en:'coral',category:'Sea',color:'var(--n3)'},
  {id:'v-2048',jp:'海流',romaji:'kairyū',en:'current (sea)',category:'Sea',color:'var(--n3)'},
  {id:'v-2049',jp:'海岸',romaji:'kaigan',en:'shore',category:'Sea',color:'var(--n3)'},
  {id:'v-2050',jp:'満潮',romaji:'manchō',en:'high tide',category:'Sea',color:'var(--n3)'},
  {id:'v-2051',jp:'干潮',romaji:'kanchō',en:'low tide',category:'Sea',color:'var(--n3)'},
  {id:'v-2052',jp:'波',romaji:'nami',en:'wave',category:'Sea',color:'var(--n3)'},
  {id:'v-2053',jp:'ハリケーン',romaji:'harikēn',en:'hurricane',category:'Sea',color:'var(--n3)'},
  {id:'v-2054',jp:'空',romaji:'sora',en:'sky',category:'Sea',color:'var(--n3)'},
  {id:'v-2055',jp:'地平線',romaji:'chiheisen',en:'horizon',category:'Sea',color:'var(--n3)'},
  {id:'v-2056',jp:'灯台',romaji:'tōdai',en:'lighthouse',category:'Sea',color:'var(--n3)'},
  {id:'v-2057',jp:'山脈',romaji:'sanmyaku',en:'mountain range',category:'Nature',color:'var(--n4)'},
  {id:'v-2058',jp:'頂上',romaji:'chōjō',en:'summit/top',category:'Nature',color:'var(--n4)'},
  {id:'v-2059',jp:'噴火',romaji:'funka',en:'eruption',category:'Nature',color:'var(--n4)'},
  {id:'v-2060',jp:'溶岩',romaji:'yōgan',en:'lava',category:'Nature',color:'var(--n4)'},
  {id:'v-2061',jp:'峡谷',romaji:'kyōkoku',en:'canyon',category:'Nature',color:'var(--n4)'},
  {id:'v-2062',jp:'峠',romaji:'tōge',en:'pass/col',category:'Nature',color:'var(--n4)'},
  {id:'v-2063',jp:'高原',romaji:'kōgen',en:'plateau',category:'Nature',color:'var(--n4)'},
  {id:'v-2064',jp:'断崖',romaji:'dangai',en:'cliff',category:'Nature',color:'var(--n4)'},
  {id:'v-2065',jp:'丘',romaji:'oka',en:'hill',category:'Nature',color:'var(--n4)'},
  {id:'v-2066',jp:'氷河',romaji:'hyōga',en:'glacier',category:'Nature',color:'var(--n4)'},
  {id:'v-2067',jp:'滝',romaji:'taki',en:'waterfall',category:'Nature',color:'var(--n4)'},
  {id:'v-2068',jp:'風景',romaji:'fūkei',en:'landscape',category:'Nature',color:'var(--n4)'},
  {id:'v-2069',jp:'こだま',romaji:'kodama',en:'echo',category:'Nature',color:'var(--n4)'},
  {id:'v-2070',jp:'泉',romaji:'izumi',en:'spring (source)',category:'Nature',color:'var(--n4)'},
  {id:'v-2071',jp:'支流',romaji:'shiryū',en:'tributary',category:'Nature',color:'var(--n4)'},
  {id:'v-2072',jp:'川岸',romaji:'kawagishi',en:'bank (of river)',category:'Nature',color:'var(--n4)'},
  {id:'v-2073',jp:'下流の',romaji:'karyū no',en:'downstream',category:'Nature',color:'var(--n4)'},
  {id:'v-2074',jp:'上流の',romaji:'jōryū no',en:'upstream',category:'Nature',color:'var(--n4)'},
  {id:'v-2075',jp:'氾濫',romaji:'hanran',en:'flooding',category:'Nature',color:'var(--n4)'},
  {id:'v-2076',jp:'ダム',romaji:'damu',en:'dam',category:'Nature',color:'var(--n4)'},
  {id:'v-2077',jp:'運河',romaji:'unga',en:'canal',category:'Nature',color:'var(--n4)'},
  {id:'v-2078',jp:'沼地',romaji:'numachi',en:'swamp/bog',category:'Nature',color:'var(--n4)'},
  {id:'v-2079',jp:'小川',romaji:'ogawa',en:'stream (brook)',category:'Nature',color:'var(--n4)'},
  {id:'v-2080',jp:'氷',romaji:'kōri',en:'ice',category:'Nature',color:'var(--n4)'},
  {id:'v-2081',jp:'枝',romaji:'eda',en:'branch',category:'Nature',color:'var(--n4)'},
  {id:'v-2082',jp:'芽',romaji:'me',en:'bud',category:'Nature',color:'var(--n4)'},
  {id:'v-2083',jp:'幹',romaji:'miki',en:'trunk',category:'Nature',color:'var(--n4)'},
  {id:'v-2084',jp:'樹皮',romaji:'juhi',en:'bark',category:'Nature',color:'var(--n4)'},
  {id:'v-2085',jp:'コケ',romaji:'koke',en:'moss',category:'Nature',color:'var(--n4)'},
  {id:'v-2086',jp:'巣',romaji:'su',en:'nest',category:'Nature',color:'var(--n4)'},
  {id:'v-2087',jp:'焚火',romaji:'takibi',en:'campfire',category:'Nature',color:'var(--n4)'},
  {id:'v-2088',jp:'森林火災',romaji:'shinrin kasai',en:'forest fire',category:'Nature',color:'var(--n4)'},
  {id:'v-2089',jp:'密漁者',romaji:'mitsuryō sha',en:'poacher',category:'Nature',color:'var(--n4)'},
  {id:'v-2090',jp:'罠',romaji:'wana',en:'trap',category:'Nature',color:'var(--n4)'},
  {id:'v-2091',jp:'自然',romaji:'shizen',en:'nature',category:'Nature',color:'var(--n4)'},
  {id:'v-2092',jp:'天然資源',romaji:'tennen shigen',en:'natural resources',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2093',jp:'石油',romaji:'sekiyu',en:'oil (petroleum)',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2094',jp:'石炭',romaji:'sekitan',en:'coal',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2095',jp:'金',romaji:'kin',en:'gold',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2096',jp:'銀',romaji:'gin',en:'silver',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2097',jp:'銅',romaji:'dō',en:'copper',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2098',jp:'砂',romaji:'suna',en:'sand',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2099',jp:'石灰岩',romaji:'sekkaigan',en:'limestone',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2100',jp:'粘土',romaji:'nendo',en:'clay',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2101',jp:'水晶',romaji:'suishō',en:'crystal',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2102',jp:'ウラン',romaji:'uran',en:'uranium',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2103',jp:'鉱山',romaji:'kōzan',en:'mine',category:'Natural Resources',color:'var(--n2)'},
  {id:'v-2104',jp:'鉱山労働者',romaji:'kōzan rōdō sha',en:'miner',category:'Natural Resources',color:'var(--n2)'}
];

const VocabPageCategories = ['All', 'Greetings', 'Questions', 'Function Words', 'Numbers', 'Colors', 'Weekdays', 'Time', 'Months', 'Seasons', 'Verbs', 'Travel', 'Money', 'Communication', 'Restaurant', 'Language', 'Food', 'Meat', 'Seafood', 'Groceries', 'Drinks', 'Vegetables', 'Fruits', 'Sweets', 'Spices', 'Family', 'Body', 'Health', 'Home', 'Kitchen', 'Appliances', 'Space', 'Geography', 'Weather', 'Animals', 'Birds', 'Insects', 'Plants', 'Countries', 'Personal Info', 'Time Expressions', 'Telling Time', 'Math', 'Weather Phrases', 'Signs', 'Holidays', 'Directions', 'Transport Phrases', 'Travel Phrases', 'Tickets', 'Airport', 'Taxi', 'Banking', 'Post Office', 'Phone', 'Internet', 'Shopping Phrases', 'Shop Types', 'Hairdresser', 'Hotel', 'Camping', 'Pronouns', 'Units Of Measurement', 'Containers', 'Airplane', 'Train', 'City', 'Shopping', 'Clothing', 'Footwear', 'Personal Care & Cosmetics', 'Watches & Clocks', 'Stationery', 'Friends', 'Bathroom', 'Sea', 'Nature', 'Natural Resources'];

/* =========================================================
   VOCAB PAGE STATE
   ========================================================= */
const VocabPage = (() => {
  let mode           = 'grid';       // 'grid' | 'flashcard'
  let activeCategory = 'All';
  let cardIndex      = 0;
  let flipped        = false;
  let speakingId     = null;
  let speakTimer     = null;
  let keyHandler     = null;

  /* ── Audio helpers ──────────────────────────────────── */
  function speak(text, lang = 'ja-JP', rate = 0.85) {
    if (!window.speechSynthesis || !text) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = lang; utt.rate = rate;
    window.speechSynthesis.speak(utt);
  }

  function speakWord(jp, en) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const jpUtt = new SpeechSynthesisUtterance(jp);
    jpUtt.lang = 'ja-JP'; jpUtt.rate = 0.8;
    jpUtt.onend = () => setTimeout(() => {
      const enUtt = new SpeechSynthesisUtterance(en);
      enUtt.lang = 'en-US'; enUtt.rate = 0.9;
      window.speechSynthesis.speak(enUtt);
    }, 600);
    window.speechSynthesis.speak(jpUtt);
  }

  /* ── Filtered word list ─────────────────────────────── */
  function getFiltered() {
    if (activeCategory === 'All') return VocabPageWords;
    return VocabPageWords.filter(w => w.category === activeCategory);
  }

  /* ── Flashcard navigation ───────────────────────────── */
  function nextCard() {
    flipped = false;
    updateFlipCard();
    setTimeout(() => {
      const f = getFiltered();
      cardIndex = (cardIndex + 1) % f.length;
      renderFlashcardContent();
    }, 150);
  }

  function prevCard() {
    flipped = false;
    updateFlipCard();
    setTimeout(() => {
      const f = getFiltered();
      cardIndex = (cardIndex - 1 + f.length) % f.length;
      renderFlashcardContent();
    }, 150);
  }

  function flipCard() {
    flipped = !flipped;
    updateFlipCard();
  }

  function updateFlipCard() {
    const inner = document.getElementById('vocab-flip-inner');
    if (inner) inner.classList.toggle('flipped', flipped);
  }

  function goToCard(i) {
    cardIndex = i;
    flipped = false;
    updateFlipCard();
    renderFlashcardContent();
  }

  /* ── Keyboard handler ───────────────────────────────── */
  function attachKeyboard() {
    detachKeyboard();
    keyHandler = (e) => {
      if (mode !== 'flashcard') return;
      if (e.key === 'ArrowRight') { e.preventDefault(); nextCard(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevCard(); }
      else if (e.key === ' ') { e.preventDefault(); flipCard(); }
    };
    window.addEventListener('keydown', keyHandler);
  }

  function detachKeyboard() {
    if (keyHandler) { window.removeEventListener('keydown', keyHandler); keyHandler = null; }
  }

  /* ── Speak button ───────────────────────────────────── */
  function handleSpeakBtn(e, word) {
    e.stopPropagation();
    if (speakTimer) clearTimeout(speakTimer);
    speakingId = word.id;
    speakWord(word.jp, word.en);
    updateSpeakBtns();
    speakTimer = setTimeout(() => {
      speakingId = null;
      updateSpeakBtns();
    }, 3000);
  }

  function updateSpeakBtns() {
    document.querySelectorAll('.vocab-speak-btn').forEach(btn => {
      const id = btn.dataset.id;
      const isPlaying = id === speakingId;
      btn.style.background = isPlaying ? 'var(--primary-dim)' : 'transparent';
      btn.style.color       = isPlaying ? 'var(--primary)'     : 'var(--fg-muted)';
      btn.innerHTML = isPlaying
        ? `<div class="nz-eq"><div class="nz-eq-bar"></div><div class="nz-eq-bar"></div><div class="nz-eq-bar"></div></div>`
        : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
    });
  }

  /* ── Security ───────────────────────────────────────── */
  function esc(s) {
    return String(s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  /* ── Render category tabs ───────────────────────────── */
  function renderCategoryTabs() {
    const container = document.getElementById('vocab-cat-tabs');
    if (!container) return;
    container.innerHTML = VocabPageCategories.map(cat => {
      const active = cat === activeCategory;
      const filtered = cat === 'All' ? VocabPageWords : VocabPageWords.filter(w => w.category === cat);
      return `<button
        class="vocab-cat-btn flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
        data-cat="${esc(cat)}"
        style="background:${active ? 'var(--primary)' : 'var(--card-elevated)'};
               color:${active ? '#fff' : 'var(--fg-muted)'};
               border:1px solid ${active ? 'var(--primary)' : 'var(--border)'};
               white-space:nowrap; flex-shrink:0;">
        ${esc(cat)} <span style="opacity:0.7;font-size:9px;">${filtered.length}</span>
      </button>`;
    }).join('');

    container.querySelectorAll('.vocab-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        cardIndex = 0;
        flipped = false;
        render();
      });
    });
  }

  /* ── Render grid ─────────────────────────────────────── */
  function renderGrid() {
    const filtered = getFiltered();
    const area = document.getElementById('vocab-main-area');
    if (!area) return;

    area.innerHTML = `
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;">
  ${filtered.map(word => `
    <div class="vocab-card card-hover"
      data-id="${esc(word.id)}"
      style="border-radius:12px;border:1px solid var(--border);
             background:var(--card);padding:16px;cursor:pointer;
             border-left:3px solid ${word.color};position:relative;
             transition:transform 0.2s,box-shadow 0.2s;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px;">
        <div>
          <div style="font-family:'Noto Sans JP',sans-serif;font-size:22px;font-weight:700;
                      color:var(--fg);margin-bottom:2px;">${esc(word.jp)}</div>
          <p style="font-family:'JetBrains Mono',monospace;font-size:11px;
                    color:var(--fg-muted);font-style:italic;">${esc(word.romaji)}</p>
        </div>
        <button class="vocab-speak-btn"
          data-id="${esc(word.id)}"
          data-jp="${esc(word.jp)}"
          data-en="${esc(word.en)}"
          style="padding:6px;border-radius:8px;border:none;background:transparent;
                 color:var(--fg-muted);cursor:pointer;flex-shrink:0;transition:all 0.15s;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        </button>
      </div>
      <p style="font-size:13px;color:var(--fg);margin-bottom:12px;">${esc(word.en)}</p>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;
                     background:${word.color}22;color:${word.color};">${esc(word.category)}</span>
      </div>
    </div>
  `).join('')}
</div>`;

    // Click card to speak JP
    area.querySelectorAll('.vocab-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.vocab-speak-btn')) return;
        const id = card.dataset.id;
        const word = VocabPageWords.find(w => w.id === id);
        if (word) speak(word.jp);
      });
    });

    // Speak btn
    area.querySelectorAll('.vocab-speak-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const word = VocabPageWords.find(w => w.id === btn.dataset.id);
        if (word) handleSpeakBtn(e, word);
      });
    });
  }

  /* ── Render flashcard content only (no full re-render) ─ */
  function renderFlashcardContent() {
    const filtered = getFiltered();
    if (!filtered.length) return;
    const word = filtered[cardIndex] || filtered[0];

    const front = document.getElementById('vocab-fc-front');
    const back  = document.getElementById('vocab-fc-back');
    const counter = document.getElementById('vocab-fc-counter');
    const inner = document.getElementById('vocab-flip-inner');

    if (inner) inner.classList.toggle('flipped', flipped);

    if (front) front.innerHTML = `
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:52px;font-weight:700;
                  color:var(--fg);">${esc(word.jp)}</div>
      <p style="font-family:'JetBrains Mono',monospace;font-size:13px;
                color:var(--fg-muted);">${esc(word.romaji)}</p>
      <button id="fc-speak-front"
        style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;
               border:1px solid rgba(232,68,106,0.3);background:rgba(232,68,106,0.1);
               color:var(--primary);font-size:12px;cursor:pointer;margin-top:8px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
        Tap to hear
      </button>
      <p style="font-size:11px;color:var(--fg-subtle);margin-top:6px;">Click to reveal meaning</p>`;

    if (back) back.innerHTML = `
      <p style="font-size:22px;font-weight:700;color:var(--fg);text-align:center;
                margin-bottom:10px;">${esc(word.en)}</p>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span style="padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;
                     background:${word.color}22;color:${word.color};">${esc(word.category)}</span>
      </div>
      <button id="fc-speak-back"
        style="display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;
               border:1px solid rgba(232,68,106,0.3);background:rgba(232,68,106,0.1);
               color:var(--primary);font-size:12px;cursor:pointer;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        </svg>
        Hear both
      </button>
      <p style="font-size:11px;color:var(--fg-subtle);margin-top:6px;">Click to flip back</p>`;

    // Attach speak events
    const frontBtn = document.getElementById('fc-speak-front');
    if (frontBtn) frontBtn.addEventListener('click', e => { e.stopPropagation(); speak(word.jp); });
    const backBtn = document.getElementById('fc-speak-back');
    if (backBtn) backBtn.addEventListener('click', e => { e.stopPropagation(); speakWord(word.jp, word.en); });

    if (counter) counter.textContent = `${cardIndex + 1} / ${filtered.length}`;

    // Dots
    const dotsWrap = document.getElementById('vocab-fc-dots');
    if (dotsWrap) {
      const shown = filtered.slice(0, Math.min(filtered.length, 20));
      dotsWrap.innerHTML = shown.map((_, i) => `
        <button class="vocab-dot" data-i="${i}"
          style="width:8px;height:8px;border-radius:50%;border:1px solid ${i === cardIndex ? 'var(--primary)' : 'var(--border)'};
                 background:${i === cardIndex ? 'var(--primary)' : 'var(--card-elevated)'};
                 cursor:pointer;padding:0;transition:all 0.15s;"></button>
      `).join('');
      dotsWrap.querySelectorAll('.vocab-dot').forEach(dot => {
        dot.addEventListener('click', () => goToCard(parseInt(dot.dataset.i)));
      });
    }
  }

  /* ── Render flashcard wrapper ────────────────────────── */
  function renderFlashcard() {
    const area = document.getElementById('vocab-main-area');
    if (!area) return;

    area.innerHTML = `
<div style="display:flex;flex-direction:column;align-items:center;max-width:380px;margin:0 auto;">
  <p style="font-size:11px;color:var(--fg-muted);margin-bottom:16px;text-align:center;">
    Click card to flip · ← → arrow keys to navigate · Space to flip
  </p>

  <!-- Flip card -->
  <div id="vocab-fc-wrap" style="width:100%;perspective:1000px;cursor:pointer;margin-bottom:20px;">
    <div id="vocab-flip-inner"
      style="width:100%;height:220px;position:relative;
             transform-style:preserve-3d;transition:transform 0.6s cubic-bezier(0.4,0,0.2,1);">

      <!-- Front face -->
      <div id="vocab-fc-front"
        style="position:absolute;inset:0;border-radius:20px;border:1px solid var(--border);
               background:var(--card);backface-visibility:hidden;-webkit-backface-visibility:hidden;
               display:flex;flex-direction:column;align-items:center;justify-content:center;
               gap:8px;padding:24px;">
      </div>

      <!-- Back face -->
      <div id="vocab-fc-back"
        style="position:absolute;inset:0;border-radius:20px;border:2px solid var(--primary);
               background:var(--card);backface-visibility:hidden;-webkit-backface-visibility:hidden;
               transform:rotateY(180deg);
               display:flex;flex-direction:column;align-items:center;justify-content:center;
               gap:8px;padding:24px;">
      </div>
    </div>
  </div>

  <!-- Nav controls -->
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
    <button id="vocab-fc-prev"
      style="padding:10px;border-radius:12px;background:var(--card-elevated);
             border:1px solid var(--border);cursor:pointer;color:var(--fg);
             transition:border-color 0.15s;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"/>
      </svg>
    </button>
    <span id="vocab-fc-counter"
      style="font-family:'JetBrains Mono',monospace;font-size:13px;
             color:var(--fg-muted);min-width:60px;text-align:center;">1 / 1</span>
    <button id="vocab-fc-next"
      style="padding:10px;border-radius:12px;background:var(--card-elevated);
             border:1px solid var(--border);cursor:pointer;color:var(--fg);
             transition:border-color 0.15s;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>
    <button id="vocab-fc-reset"
      style="padding:10px;border-radius:12px;background:var(--card-elevated);
             border:1px solid var(--border);cursor:pointer;color:var(--fg-muted);
             transition:border-color 0.15s;margin-left:8px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
      </svg>
    </button>
  </div>

  <!-- Dots -->
  <div id="vocab-fc-dots" style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center;max-width:320px;"></div>
</div>`;

    // Attach events
    document.getElementById('vocab-fc-wrap').addEventListener('click', flipCard);
    document.getElementById('vocab-fc-prev').addEventListener('click', prevCard);
    document.getElementById('vocab-fc-next').addEventListener('click', nextCard);
    document.getElementById('vocab-fc-reset').addEventListener('click', () => {
      cardIndex = 0; flipped = false;
      updateFlipCard();
      renderFlashcardContent();
    });

    // Hover effects on nav buttons
    ['vocab-fc-prev','vocab-fc-next','vocab-fc-reset'].forEach(id => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('mouseenter', () => btn.style.borderColor = 'var(--primary)');
      btn.addEventListener('mouseleave', () => btn.style.borderColor = 'var(--border)');
    });

    renderFlashcardContent();
    attachKeyboard();
  }

  /* ── Render mode toggle buttons ──────────────────────── */
  function renderModeBtns() {
    const wrap = document.getElementById('vocab-mode-btns');
    if (!wrap) return;
    wrap.innerHTML = ['grid','flashcard'].map(m => `
      <button class="vocab-mode-btn"
        data-mode="${m}"
        style="padding:7px 14px;border-radius:8px;font-size:13px;font-weight:600;
               border:1px solid ${mode === m ? 'var(--primary)' : 'var(--border)'};
               background:${mode === m ? 'var(--primary)' : 'var(--card-elevated)'};
               color:${mode === m ? '#fff' : 'var(--fg-muted)'};cursor:pointer;
               font-family:inherit;transition:all 0.15s;">
        ${m === 'grid' ? '⊞ Grid' : '🃏 Flashcards'}
      </button>
    `).join('');
    wrap.querySelectorAll('.vocab-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        detachKeyboard();
        mode = btn.dataset.mode;
        flipped = false;
        render();
      });
    });
  }

  /* ── Update header counts ────────────────────────────── */
  function updateCounts() {
    const el = document.getElementById('vocab-count-label');
    if (el) el.textContent = `${VocabPageWords.length} words · ${VocabPageCategories.length - 1} categories`;
  }

  /* ── Full render ─────────────────────────────────────── */
  function render() {
    renderModeBtns();
    renderCategoryTabs();
    updateCounts();
    if (mode === 'grid') {
      detachKeyboard();
      renderGrid();
    } else {
      renderFlashcard();
    }
  }

  /* ── Mount — called from pages.js vocab() ────────────── */
  function mount(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
<div style="max-width:1600px;margin:0 auto;padding:24px 16px;">
  <!-- Header -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
    <div>
      <h1 style="font-size:22px;font-weight:800;color:var(--fg);margin-bottom:4px;letter-spacing:-0.3px;">
        語彙 Vocabulary
      </h1>
      <p id="vocab-count-label" style="font-size:13px;color:var(--fg-muted);"></p>
    </div>
    <div id="vocab-mode-btns" style="display:flex;gap:8px;"></div>
  </div>

  <!-- Category scroll tabs -->
  <div id="vocab-cat-tabs"
    style="display:flex;gap:8px;overflow-x:auto;padding-bottom:10px;margin-bottom:20px;
           scrollbar-width:none;">
  </div>

  <!-- Main content area -->
  <div id="vocab-main-area"></div>
</div>`;

    render();
  }

  /* ── Cleanup (called on page nav away) ───────────────── */
  function cleanup() {
    detachKeyboard();
    if (speakTimer) clearTimeout(speakTimer);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  return { mount, cleanup, render };
})();
