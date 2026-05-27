'use strict';
/**
 * NihongoZen — App Data
 * All static content: kanji, vocab, grammar, listening, reading, JLPT
 */

/* =========================================================
   KANJI DATA
   ========================================================= */
const KanjiData = {
  N5: [
    { id:'k-n5-001',kanji:'日',reading:'にち・ひ',meaning:'Sun / Day',kun:'ひ、か',on:'ニチ、ジツ',example:'今日は晴れです。',exampleMeaning:'Today is sunny.',learned:true },
    { id:'k-n5-002',kanji:'月',reading:'つき・げつ',meaning:'Moon / Month',kun:'つき',on:'ゲツ、ガツ',example:'月曜日に会います。',exampleMeaning:'We meet on Monday.',learned:true },
    { id:'k-n5-003',kanji:'山',reading:'やま・さん',meaning:'Mountain',kun:'やま',on:'サン',example:'富士山は美しい。',exampleMeaning:'Mt. Fuji is beautiful.',learned:true },
    { id:'k-n5-004',kanji:'川',reading:'かわ・せん',meaning:'River',kun:'かわ',on:'セン',example:'川で泳ぎます。',exampleMeaning:'I swim in the river.',learned:false },
    { id:'k-n5-005',kanji:'木',reading:'き・もく',meaning:'Tree / Wood',kun:'き、こ',on:'モク、ボク',example:'木の下で休む。',exampleMeaning:'Rest under the tree.',learned:true },
    { id:'k-n5-006',kanji:'火',reading:'ひ・か',meaning:'Fire',kun:'ひ',on:'カ',example:'火曜日は忙しい。',exampleMeaning:'Tuesday is busy.',learned:true },
    { id:'k-n5-007',kanji:'水',reading:'みず・すい',meaning:'Water',kun:'みず',on:'スイ',example:'水を飲んでください。',exampleMeaning:'Please drink water.',learned:false },
    { id:'k-n5-008',kanji:'土',reading:'つち・ど',meaning:'Earth / Soil',kun:'つち',on:'ド、ト',example:'土曜日に遊ぶ。',exampleMeaning:'Play on Saturday.',learned:true },
    { id:'k-n5-009',kanji:'人',reading:'ひと・じん',meaning:'Person',kun:'ひと',on:'ジン、ニン',example:'あの人は先生です。',exampleMeaning:'That person is a teacher.',learned:true },
    { id:'k-n5-010',kanji:'大',reading:'おお・だい',meaning:'Big / Large',kun:'おお',on:'ダイ、タイ',example:'大きな犬がいる。',exampleMeaning:'There is a big dog.',learned:false },
    { id:'k-n5-011',kanji:'小',reading:'ちい・しょう',meaning:'Small',kun:'ちい、こ',on:'ショウ',example:'小さい猫が好き。',exampleMeaning:'I like small cats.',learned:true },
    { id:'k-n5-012',kanji:'上',reading:'うえ・じょう',meaning:'Above / Up',kun:'うえ、のぼ',on:'ジョウ',example:'机の上にある。',exampleMeaning:'It is on the desk.',learned:true },
    { id:'k-n5-013',kanji:'下',reading:'した・か',meaning:'Below / Down',kun:'した、くだ',on:'カ、ゲ',example:'机の下にある。',exampleMeaning:'It is under the desk.',learned:true },
    { id:'k-n5-014',kanji:'中',reading:'なか・ちゅう',meaning:'Middle / Inside',kun:'なか',on:'チュウ',example:'箱の中に入れる。',exampleMeaning:'Put it inside the box.',learned:false },
    { id:'k-n5-015',kanji:'国',reading:'くに・こく',meaning:'Country',kun:'くに',on:'コク',example:'日本は美しい国です。',exampleMeaning:'Japan is a beautiful country.',learned:true },
    { id:'k-n5-016',kanji:'年',reading:'とし・ねん',meaning:'Year',kun:'とし',on:'ネン',example:'今年は何年ですか。',exampleMeaning:'What year is this year?',learned:true },
    { id:'k-n5-017',kanji:'生',reading:'い・せい',meaning:'Life / Birth',kun:'い、う',on:'セイ、ショウ',example:'学生です。',exampleMeaning:'I am a student.',learned:false },
    { id:'k-n5-018',kanji:'先',reading:'さき・せん',meaning:'Before / Previous',kun:'さき',on:'セン',example:'先生に聞く。',exampleMeaning:'Ask the teacher.',learned:true },
    { id:'k-n5-019',kanji:'学',reading:'まな・がく',meaning:'Study / Learn',kun:'まな',on:'ガク',example:'日本語を学ぶ。',exampleMeaning:'Study Japanese.',learned:true },
    { id:'k-n5-020',kanji:'校',reading:'こう',meaning:'School',kun:'',on:'コウ',example:'学校に行く。',exampleMeaning:'Go to school.',learned:true },
  ],
  N4: [
    { id:'k-n4-001',kanji:'駅',reading:'えき',meaning:'Station',kun:'',on:'エキ',example:'駅まで歩きます。',exampleMeaning:'I walk to the station.',learned:true },
    { id:'k-n4-002',kanji:'映',reading:'えい',meaning:'Reflect / Movie',kun:'うつ',on:'エイ',example:'映画を見ました。',exampleMeaning:'I watched a movie.',learned:false },
    { id:'k-n4-003',kanji:'運',reading:'うん・はこ',meaning:'Transport / Luck',kun:'はこ',on:'ウン',example:'運動が好きです。',exampleMeaning:'I like exercise.',learned:true },
    { id:'k-n4-004',kanji:'開',reading:'ひら・かい',meaning:'Open',kun:'ひら、あ',on:'カイ',example:'ドアを開けてください。',exampleMeaning:'Please open the door.',learned:false },
    { id:'k-n4-005',kanji:'去',reading:'さ・きょ',meaning:'Past / Leave',kun:'さ',on:'キョ、コ',example:'去年日本に行った。',exampleMeaning:'I went to Japan last year.',learned:true },
    { id:'k-n4-006',kanji:'急',reading:'いそ・きゅう',meaning:'Hurry / Sudden',kun:'いそ',on:'キュウ',example:'急いでください！',exampleMeaning:'Please hurry!',learned:true },
    { id:'k-n4-007',kanji:'近',reading:'ちか・きん',meaning:'Near / Close',kun:'ちか',on:'キン',example:'駅の近くに住む。',exampleMeaning:'Live near the station.',learned:false },
    { id:'k-n4-008',kanji:'強',reading:'つよ・きょう',meaning:'Strong',kun:'つよ',on:'キョウ',example:'強い風が吹く。',exampleMeaning:'A strong wind blows.',learned:true },
    { id:'k-n4-009',kanji:'教',reading:'おし・きょう',meaning:'Teach',kun:'おし',on:'キョウ',example:'英語を教える。',exampleMeaning:'Teach English.',learned:true },
    { id:'k-n4-010',kanji:'銀',reading:'ぎん',meaning:'Silver / Bank',kun:'',on:'ギン',example:'銀行に行く。',exampleMeaning:'Go to the bank.',learned:false },
    { id:'k-n4-011',kanji:'計',reading:'はか・けい',meaning:'Measure / Plan',kun:'はか',on:'ケイ',example:'時計を見る。',exampleMeaning:'Look at the clock.',learned:true },
    { id:'k-n4-012',kanji:'建',reading:'た・けん',meaning:'Build / Construct',kun:'た',on:'ケン',example:'建物が高い。',exampleMeaning:'The building is tall.',learned:false },
  ],
  N3: [
    { id:'k-n3-001',kanji:'影',reading:'かげ・えい',meaning:'Shadow / Influence',kun:'かげ',on:'エイ',example:'影響を受けました。',exampleMeaning:'I was influenced.',learned:false },
    { id:'k-n3-002',kanji:'演',reading:'えん',meaning:'Perform / Demonstrate',kun:'',on:'エン',example:'演劇を楽しんだ。',exampleMeaning:'Enjoyed the play.',learned:false },
    { id:'k-n3-003',kanji:'応',reading:'おう',meaning:'Answer / Respond',kun:'こた',on:'オウ',example:'応援してください。',exampleMeaning:'Please cheer for me.',learned:true },
    { id:'k-n3-004',kanji:'横',reading:'よこ・おう',meaning:'Side / Horizontal',kun:'よこ',on:'オウ',example:'横断歩道を渡る。',exampleMeaning:'Cross the crosswalk.',learned:false },
    { id:'k-n3-005',kanji:'温',reading:'あたた・おん',meaning:'Warm / Temperature',kun:'あたた',on:'オン',example:'温かいお茶を飲む。',exampleMeaning:'Drink warm tea.',learned:true },
    { id:'k-n3-006',kanji:'化',reading:'か',meaning:'Change / Transform',kun:'ば',on:'カ、ケ',example:'文化を学ぶ。',exampleMeaning:'Learn about culture.',learned:false },
    { id:'k-n3-007',kanji:'価',reading:'か',meaning:'Value / Price',kun:'ね',on:'カ',example:'価格が高い。',exampleMeaning:'The price is high.',learned:false },
    { id:'k-n3-008',kanji:'果',reading:'は・か',meaning:'Fruit / Result',kun:'は',on:'カ',example:'結果を見る。',exampleMeaning:'See the result.',learned:true },
  ],
  N2: [
    { id:'k-n2-001',kanji:'握',reading:'にぎ',meaning:'Grip / Hold',kun:'にぎ',on:'アク',example:'手を握る。',exampleMeaning:'Grip the hand.',learned:false },
    { id:'k-n2-002',kanji:'威',reading:'い',meaning:'Dignity / Authority',kun:'',on:'イ',example:'威厳がある。',exampleMeaning:'Has dignity.',learned:false },
    { id:'k-n2-003',kanji:'慰',reading:'なぐさ',meaning:'Comfort / Console',kun:'なぐさ',on:'イ',example:'慰める言葉。',exampleMeaning:'Words of comfort.',learned:false },
    { id:'k-n2-004',kanji:'維',reading:'い',meaning:'Maintain / Fiber',kun:'',on:'イ',example:'維持する。',exampleMeaning:'Maintain.',learned:false },
  ],
  N1: [
    { id:'k-n1-001',kanji:'曖',reading:'あい',meaning:'Vague / Ambiguous',kun:'',on:'アイ',example:'曖昧な返事。',exampleMeaning:'An ambiguous answer.',learned:false },
    { id:'k-n1-002',kanji:'彙',reading:'い',meaning:'Vocabulary / Collect',kun:'',on:'イ',example:'語彙を増やす。',exampleMeaning:'Expand vocabulary.',learned:false },
    { id:'k-n1-003',kanji:'韻',reading:'いん',meaning:'Rhyme / Echo',kun:'',on:'イン',example:'韻を踏む。',exampleMeaning:'Rhyme.',learned:false },
    { id:'k-n1-004',kanji:'淫',reading:'いん',meaning:'Lewd / Excessive',kun:'みだ',on:'イン',example:'淫らな行為。',exampleMeaning:'Lewd behavior.',learned:false },
  ],
};

// Flat list of all kanji
const AllKanji = Object.values(KanjiData).flat();

/* =========================================================
   VOCAB DATA
   ========================================================= */
const VocabData = [
  { id:'v-001',jp:'勉強',romaji:'benkyou',en:'Study / Learning',category:'Education',level:'N5' },
  { id:'v-002',jp:'電車',romaji:'densha',en:'Train / Electric train',category:'Transport',level:'N4' },
  { id:'v-003',jp:'図書館',romaji:'toshokan',en:'Library',category:'Places',level:'N5' },
  { id:'v-004',jp:'難しい',romaji:'muzukashii',en:'Difficult / Hard',category:'Adjectives',level:'N4' },
  { id:'v-005',jp:'友達',romaji:'tomodachi',en:'Friend',category:'People',level:'N5' },
  { id:'v-006',jp:'仕事',romaji:'shigoto',en:'Work / Job',category:'Work',level:'N4' },
  { id:'v-007',jp:'自転車',romaji:'jitensha',en:'Bicycle',category:'Transport',level:'N4' },
  { id:'v-008',jp:'料理',romaji:'ryouri',en:'Cooking / Cuisine',category:'Food',level:'N3' },
  { id:'v-009',jp:'先生',romaji:'sensei',en:'Teacher',category:'People',level:'N5' },
  { id:'v-010',jp:'学校',romaji:'gakkou',en:'School',category:'Education',level:'N5' },
  { id:'v-011',jp:'電話',romaji:'denwa',en:'Telephone',category:'Work',level:'N5' },
  { id:'v-012',jp:'病院',romaji:'byouin',en:'Hospital',category:'Places',level:'N5' },
  { id:'v-013',jp:'美しい',romaji:'utsukushii',en:'Beautiful',category:'Adjectives',level:'N3' },
  { id:'v-014',jp:'山',romaji:'yama',en:'Mountain',category:'Nature',level:'N5' },
  { id:'v-015',jp:'海',romaji:'umi',en:'Sea / Ocean',category:'Nature',level:'N5' },
  { id:'v-016',jp:'頭',romaji:'atama',en:'Head',category:'Body',level:'N5' },
  { id:'v-017',jp:'会社',romaji:'kaisha',en:'Company / Office',category:'Work',level:'N4' },
  { id:'v-018',jp:'飛行機',romaji:'hikouki',en:'Airplane',category:'Transport',level:'N4' },
  { id:'v-019',jp:'公園',romaji:'kouen',en:'Park',category:'Places',level:'N5' },
  { id:'v-020',jp:'音楽',romaji:'ongaku',en:'Music',category:'Education',level:'N4' },
  { id:'v-021',jp:'映画',romaji:'eiga',en:'Movie / Film',category:'Education',level:'N4' },
  { id:'v-022',jp:'天気',romaji:'tenki',en:'Weather',category:'Nature',level:'N5' },
  { id:'v-023',jp:'家族',romaji:'kazoku',en:'Family',category:'People',level:'N5' },
  { id:'v-024',jp:'旅行',romaji:'ryokou',en:'Travel / Trip',category:'Places',level:'N4' },
];

const VocabCategories = ['All','Education','Transport','Places','Adjectives','People','Work','Food','Nature','Body'];

/* =========================================================
   GRAMMAR DATA
   ========================================================= */
const GrammarData = [
  {
    id:'g-001', pattern:'〜は〜です', level:'N5',
    title:'Topic Marker + Copula',
    explanation:'Used to state that something is something. は (wa) marks the topic, and です (desu) is the polite copula meaning "is/am/are".',
    structure:'[Topic] は [Noun/Adjective] です',
    examples:[
      { id:'ex-1',jp:'私は学生です。',en:'I am a student.' },
      { id:'ex-2',jp:'これは本です。',en:'This is a book.' },
      { id:'ex-3',jp:'田中さんは先生です。',en:'Mr. Tanaka is a teacher.' },
    ],
  },
  {
    id:'g-002', pattern:'〜が好きです', level:'N5',
    title:'Expressing Likes',
    explanation:'Used to express that you like something. が marks the object of liking, and 好き (suki) means "like/fond of".',
    structure:'[Subject] は [Object] が 好きです',
    examples:[
      { id:'ex-1',jp:'私は音楽が好きです。',en:'I like music.' },
      { id:'ex-2',jp:'彼女は猫が好きです。',en:'She likes cats.' },
      { id:'ex-3',jp:'日本語が好きですか？',en:'Do you like Japanese?' },
    ],
  },
  {
    id:'g-003', pattern:'〜てください', level:'N5',
    title:'Polite Request',
    explanation:'Used to make polite requests. Attach てください to the て-form of a verb.',
    structure:'[Verb て-form] ください',
    examples:[
      { id:'ex-1',jp:'ゆっくり話してください。',en:'Please speak slowly.' },
      { id:'ex-2',jp:'ここに名前を書いてください。',en:'Please write your name here.' },
      { id:'ex-3',jp:'窓を開けてください。',en:'Please open the window.' },
    ],
  },
  {
    id:'g-004', pattern:'〜ことができる', level:'N4',
    title:'Expressing Ability',
    explanation:'Used to express ability or possibility. Attach ことができる to the dictionary form of a verb.',
    structure:'[Verb dictionary form] ことができる',
    examples:[
      { id:'ex-1',jp:'日本語を話すことができます。',en:'I can speak Japanese.' },
      { id:'ex-2',jp:'泳ぐことができますか？',en:'Can you swim?' },
      { id:'ex-3',jp:'明日来ることができません。',en:'I cannot come tomorrow.' },
    ],
  },
  {
    id:'g-005', pattern:'〜ために', level:'N4',
    title:'Purpose / For the Sake of',
    explanation:'Used to express purpose. Attach ために to the dictionary form of a verb or a noun.',
    structure:'[Verb dict. form / Noun の] ために',
    examples:[
      { id:'ex-1',jp:'日本語を勉強するために、毎日練習します。',en:'In order to study Japanese, I practice every day.' },
      { id:'ex-2',jp:'健康のために、運動します。',en:'For the sake of health, I exercise.' },
      { id:'ex-3',jp:'試験に合格するために、頑張ります。',en:'I will work hard to pass the exam.' },
    ],
  },
  {
    id:'g-006', pattern:'〜ば〜ほど', level:'N3',
    title:'The More... The More...',
    explanation:'Used to express that as one thing increases, another also increases proportionally.',
    structure:'[Verb ば-form] [Verb dict. form] ほど',
    examples:[
      { id:'ex-1',jp:'練習すればするほど上手になります。',en:'The more you practice, the better you become.' },
      { id:'ex-2',jp:'食べれば食べるほど太ります。',en:'The more you eat, the more weight you gain.' },
      { id:'ex-3',jp:'勉強すればするほど、わかります。',en:'The more you study, the more you understand.' },
    ],
  },
];

/* =========================================================
   LISTENING DATA
   ========================================================= */
const ListeningData = [
  {
    id:'dlg-001', level:'N5', topic:'At the Station', topicJp:'駅で', lineCount:6,
    preview:'Asking for directions to the platform',
    script:[
      { id:'l1',speaker:'Tanaka',jp:'すみません、新幹線のホームはどこですか？',en:"Excuse me, where is the Shinkansen platform?" },
      { id:'l2',speaker:'Staff', jp:'三番ホームです。エレベーターで上に行ってください。',en:"It's platform 3. Please go up by elevator." },
      { id:'l3',speaker:'Tanaka',jp:'ありがとうございます。何時に出発しますか？',en:"Thank you. What time does it depart?" },
      { id:'l4',speaker:'Staff', jp:'次の新幹線は十時三十分に出発します。',en:"The next Shinkansen departs at 10:30." },
      { id:'l5',speaker:'Tanaka',jp:'わかりました。切符はどこで買えますか？',en:"I see. Where can I buy a ticket?" },
      { id:'l6',speaker:'Staff', jp:'自動券売機はあちらにあります。',en:"The ticket machines are over there." },
    ],
    phrases:[
      { id:'p1',jp:'すみません',en:'Excuse me' },
      { id:'p2',jp:'どこですか',en:'Where is it?' },
      { id:'p3',jp:'ありがとうございます',en:'Thank you very much' },
    ],
    quiz:[
      { id:'q1',question:'Which platform is the Shinkansen on?',options:['Platform 1','Platform 2','Platform 3','Platform 4'],answer:2 },
      { id:'q2',question:'What time does the next Shinkansen depart?',options:['10:00','10:15','10:30','11:00'],answer:2 },
    ],
  },
  {
    id:'dlg-002', level:'N5', topic:'At the Restaurant', topicJp:'レストランで', lineCount:5,
    preview:'Ordering food and asking about the menu',
    script:[
      { id:'l1',speaker:'Waiter',   jp:'いらっしゃいませ。何名様ですか？',en:"Welcome. How many people?" },
      { id:'l2',speaker:'Customer', jp:'二人です。窓際の席はありますか？',en:"Two people. Do you have a window seat?" },
      { id:'l3',speaker:'Waiter',   jp:'はい、こちらへどうぞ。ご注文はお決まりですか？',en:"Yes, this way please. Are you ready to order?" },
      { id:'l4',speaker:'Customer', jp:'ラーメンと餃子をください。',en:"I'll have ramen and gyoza please." },
      { id:'l5',speaker:'Waiter',   jp:'かしこまりました。少々お待ちください。',en:"Certainly. Please wait a moment." },
    ],
    phrases:[
      { id:'p1',jp:'いらっしゃいませ',en:'Welcome (to a shop)' },
      { id:'p2',jp:'ご注文はお決まりですか',en:'Are you ready to order?' },
      { id:'p3',jp:'かしこまりました',en:'Certainly (formal)' },
    ],
    quiz:[
      { id:'q1',question:'How many people are dining?',options:['1','2','3','4'],answer:1 },
      { id:'q2',question:'What did the customer order?',options:['Sushi and miso soup','Ramen and gyoza','Tempura and rice','Udon and salad'],answer:1 },
    ],
  },
  {
    id:'dlg-003', level:'N4', topic:'Job Interview', topicJp:'就職面接', lineCount:6,
    preview:'A formal job interview conversation',
    script:[
      { id:'l1',speaker:'Interviewer',jp:'本日はお越しいただきありがとうございます。',en:"Thank you for coming today." },
      { id:'l2',speaker:'Applicant', jp:'こちらこそ、よろしくお願いいたします。',en:"Thank you for having me." },
      { id:'l3',speaker:'Interviewer',jp:'自己紹介をお願いできますか？',en:"Could you please introduce yourself?" },
      { id:'l4',speaker:'Applicant', jp:'田中と申します。大学でコンピューターサイエンスを専攻しました。',en:"My name is Tanaka. I majored in computer science at university." },
      { id:'l5',speaker:'Interviewer',jp:'なぜ当社を志望されましたか？',en:"Why did you apply to our company?" },
      { id:'l6',speaker:'Applicant', jp:'御社の革新的な技術に魅力を感じました。',en:"I was attracted by your company's innovative technology." },
    ],
    phrases:[
      { id:'p1',jp:'よろしくお願いいたします',en:'I look forward to working with you' },
      { id:'p2',jp:'自己紹介',en:'Self-introduction' },
      { id:'p3',jp:'志望動機',en:'Reason for applying' },
    ],
    quiz:[
      { id:'q1',question:"What did Tanaka major in?",options:['Business','Computer Science','Engineering','Literature'],answer:1 },
    ],
  },
];

/* =========================================================
   READING DATA
   ========================================================= */
const ReadingData = [
  {
    id:'r-001', level:'N5', title:'My Daily Routine', titleJp:'私の日課',
    difficulty:'Beginner', wordCount:80,
    lines:[
      { id:'rl-1',jp:'私は毎朝六時に起きます。',en:"I wake up at 6 o'clock every morning." },
      { id:'rl-2',jp:'まず顔を洗って、歯を磨きます。',en:"First, I wash my face and brush my teeth." },
      { id:'rl-3',jp:'朝ごはんはトーストとコーヒーです。',en:"Breakfast is toast and coffee." },
      { id:'rl-4',jp:'七時半に家を出て、電車で会社に行きます。',en:"I leave home at 7:30 and go to work by train." },
      { id:'rl-5',jp:'会社は九時から始まります。',en:"Work starts at 9 o'clock." },
      { id:'rl-6',jp:'昼ごはんは会社の近くのレストランで食べます。',en:"I eat lunch at a restaurant near the office." },
      { id:'rl-7',jp:'六時に仕事が終わって、家に帰ります。',en:"Work ends at 6 and I go home." },
      { id:'rl-8',jp:'夜は日本語を勉強します。',en:"In the evening, I study Japanese." },
    ],
    vocab:[
      { id:'rv-1',jp:'日課',en:'Daily routine' },
      { id:'rv-2',jp:'起きます',en:'Wake up' },
      { id:'rv-3',jp:'電車',en:'Train' },
    ],
    quiz:[
      { id:'q1',question:'What time does the person wake up?',options:['5:00','6:00','7:00','7:30'],answer:1 },
      { id:'q2',question:'How does the person go to work?',options:['By car','By bus','By train','Walking'],answer:2 },
      { id:'q3',question:'What does the person do in the evening?',options:['Watch TV','Exercise','Study Japanese','Cook dinner'],answer:2 },
    ],
  },
  {
    id:'r-002', level:'N4', title:'Japanese Seasons', titleJp:'日本の四季',
    difficulty:'Elementary', wordCount:120,
    lines:[
      { id:'rl-1',jp:'日本には四つの季節があります。',en:"Japan has four seasons." },
      { id:'rl-2',jp:'春は三月から五月で、桜の花が咲きます。',en:"Spring is from March to May, and cherry blossoms bloom." },
      { id:'rl-3',jp:'多くの人が花見を楽しみます。',en:"Many people enjoy hanami (flower viewing)." },
      { id:'rl-4',jp:'夏は六月から八月で、とても暑いです。',en:"Summer is from June to August and is very hot." },
      { id:'rl-5',jp:'海や山に行く人が多いです。',en:"Many people go to the sea or mountains." },
      { id:'rl-6',jp:'秋は九月から十一月で、紅葉が美しいです。',en:"Autumn is from September to November, and the autumn leaves are beautiful." },
      { id:'rl-7',jp:'冬は十二月から二月で、雪が降ることもあります。',en:"Winter is from December to February, and it sometimes snows." },
    ],
    vocab:[
      { id:'rv-1',jp:'四季',en:'Four seasons' },
      { id:'rv-2',jp:'桜',en:'Cherry blossom' },
      { id:'rv-3',jp:'紅葉',en:'Autumn leaves' },
    ],
    quiz:[
      { id:'q1',question:'When does spring occur in Japan?',options:['Jan-Mar','Mar-May','Jun-Aug','Sep-Nov'],answer:1 },
      { id:'q2',question:'What is hanami?',options:['Snow viewing','Flower viewing','Leaf viewing','Star viewing'],answer:1 },
    ],
  },
  {
    id:'r-003', level:'N3', title:'The History of Sushi', titleJp:'寿司の歴史',
    difficulty:'Intermediate', wordCount:150,
    lines:[
      { id:'rl-1',jp:'寿司は日本を代表する料理の一つです。',en:"Sushi is one of Japan's representative dishes." },
      { id:'rl-2',jp:'その起源は東南アジアにあると言われています。',en:"Its origins are said to be in Southeast Asia." },
      { id:'rl-3',jp:'最初は魚を保存するための方法として発展しました。',en:"It first developed as a method of preserving fish." },
      { id:'rl-4',jp:'江戸時代に現在のような握り寿司が生まれました。',en:"Nigiri sushi as we know it today was born in the Edo period." },
      { id:'rl-5',jp:'今では世界中で愛されている料理になりました。',en:"Today it has become a dish loved around the world." },
    ],
    vocab:[
      { id:'rv-1',jp:'起源',en:'Origin' },
      { id:'rv-2',jp:'保存',en:'Preservation' },
      { id:'rv-3',jp:'江戸時代',en:'Edo period' },
    ],
    quiz:[
      { id:'q1',question:"Where are the origins of sushi said to be?",options:['China','Korea','Southeast Asia','Japan'],answer:2 },
    ],
  },
];

/* =========================================================
   KANA DATA
   ========================================================= */
const KanaData = {
  hiragana: [
    {id:'h-a',jp:'あ',romaji:'a'},{id:'h-i',jp:'い',romaji:'i'},{id:'h-u',jp:'う',romaji:'u'},{id:'h-e',jp:'え',romaji:'e'},{id:'h-o',jp:'お',romaji:'o'},
    {id:'h-ka',jp:'か',romaji:'ka'},{id:'h-ki',jp:'き',romaji:'ki'},{id:'h-ku',jp:'く',romaji:'ku'},{id:'h-ke',jp:'け',romaji:'ke'},{id:'h-ko',jp:'こ',romaji:'ko'},
    {id:'h-sa',jp:'さ',romaji:'sa'},{id:'h-shi',jp:'し',romaji:'shi'},{id:'h-su',jp:'す',romaji:'su'},{id:'h-se',jp:'せ',romaji:'se'},{id:'h-so',jp:'そ',romaji:'so'},
    {id:'h-ta',jp:'た',romaji:'ta'},{id:'h-chi',jp:'ち',romaji:'chi'},{id:'h-tsu',jp:'つ',romaji:'tsu'},{id:'h-te',jp:'て',romaji:'te'},{id:'h-to',jp:'と',romaji:'to'},
    {id:'h-na',jp:'な',romaji:'na'},{id:'h-ni',jp:'に',romaji:'ni'},{id:'h-nu',jp:'ぬ',romaji:'nu'},{id:'h-ne',jp:'ね',romaji:'ne'},{id:'h-no',jp:'の',romaji:'no'},
    {id:'h-ha',jp:'は',romaji:'ha'},{id:'h-hi',jp:'ひ',romaji:'hi'},{id:'h-fu',jp:'ふ',romaji:'fu'},{id:'h-he',jp:'へ',romaji:'he'},{id:'h-ho',jp:'ほ',romaji:'ho'},
    {id:'h-ma',jp:'ま',romaji:'ma'},{id:'h-mi',jp:'み',romaji:'mi'},{id:'h-mu',jp:'む',romaji:'mu'},{id:'h-me',jp:'め',romaji:'me'},{id:'h-mo',jp:'も',romaji:'mo'},
    {id:'h-ya',jp:'や',romaji:'ya'},{id:'h-ya2',jp:'',romaji:''},{id:'h-yu',jp:'ゆ',romaji:'yu'},{id:'h-ye',jp:'',romaji:''},{id:'h-yo',jp:'よ',romaji:'yo'},
    {id:'h-ra',jp:'ら',romaji:'ra'},{id:'h-ri',jp:'り',romaji:'ri'},{id:'h-ru',jp:'る',romaji:'ru'},{id:'h-re',jp:'れ',romaji:'re'},{id:'h-ro',jp:'ろ',romaji:'ro'},
    {id:'h-wa',jp:'わ',romaji:'wa'},{id:'h-wi',jp:'',romaji:''},{id:'h-wo',jp:'を',romaji:'wo'},{id:'h-we',jp:'',romaji:''},{id:'h-n',jp:'ん',romaji:'n'},
  ],
  katakana: [
    {id:'k-a',jp:'ア',romaji:'a'},{id:'k-i',jp:'イ',romaji:'i'},{id:'k-u',jp:'ウ',romaji:'u'},{id:'k-e',jp:'エ',romaji:'e'},{id:'k-o',jp:'オ',romaji:'o'},
    {id:'k-ka',jp:'カ',romaji:'ka'},{id:'k-ki',jp:'キ',romaji:'ki'},{id:'k-ku',jp:'ク',romaji:'ku'},{id:'k-ke',jp:'ケ',romaji:'ke'},{id:'k-ko',jp:'コ',romaji:'ko'},
    {id:'k-sa',jp:'サ',romaji:'sa'},{id:'k-shi',jp:'シ',romaji:'shi'},{id:'k-su',jp:'ス',romaji:'su'},{id:'k-se',jp:'セ',romaji:'se'},{id:'k-so',jp:'ソ',romaji:'so'},
    {id:'k-ta',jp:'タ',romaji:'ta'},{id:'k-chi',jp:'チ',romaji:'chi'},{id:'k-tsu',jp:'ツ',romaji:'tsu'},{id:'k-te',jp:'テ',romaji:'te'},{id:'k-to',jp:'ト',romaji:'to'},
    {id:'k-na',jp:'ナ',romaji:'na'},{id:'k-ni',jp:'ニ',romaji:'ni'},{id:'k-nu',jp:'ヌ',romaji:'nu'},{id:'k-ne',jp:'ネ',romaji:'ne'},{id:'k-no',jp:'ノ',romaji:'no'},
    {id:'k-ha',jp:'ハ',romaji:'ha'},{id:'k-hi',jp:'ヒ',romaji:'hi'},{id:'k-fu',jp:'フ',romaji:'fu'},{id:'k-he',jp:'ヘ',romaji:'he'},{id:'k-ho',jp:'ホ',romaji:'ho'},
    {id:'k-ma',jp:'マ',romaji:'ma'},{id:'k-mi',jp:'ミ',romaji:'mi'},{id:'k-mu',jp:'ム',romaji:'mu'},{id:'k-me',jp:'メ',romaji:'me'},{id:'k-mo',jp:'モ',romaji:'mo'},
    {id:'k-ya',jp:'ヤ',romaji:'ya'},{id:'k-ya2',jp:'',romaji:''},{id:'k-yu',jp:'ユ',romaji:'yu'},{id:'k-ye',jp:'',romaji:''},{id:'k-yo',jp:'ヨ',romaji:'yo'},
    {id:'k-ra',jp:'ラ',romaji:'ra'},{id:'k-ri',jp:'リ',romaji:'ri'},{id:'k-ru',jp:'ル',romaji:'ru'},{id:'k-re',jp:'レ',romaji:'re'},{id:'k-ro',jp:'ロ',romaji:'ro'},
    {id:'k-wa',jp:'ワ',romaji:'wa'},{id:'k-wi',jp:'',romaji:''},{id:'k-wo',jp:'ヲ',romaji:'wo'},{id:'k-we',jp:'',romaji:''},{id:'k-n',jp:'ン',romaji:'n'},
  ],
  dakuten: [
    {id:'d-ga',jp:'が',romaji:'ga'},{id:'d-gi',jp:'ぎ',romaji:'gi'},{id:'d-gu',jp:'ぐ',romaji:'gu'},{id:'d-ge',jp:'げ',romaji:'ge'},{id:'d-go',jp:'ご',romaji:'go'},
    {id:'d-za',jp:'ざ',romaji:'za'},{id:'d-ji',jp:'じ',romaji:'ji'},{id:'d-zu',jp:'ず',romaji:'zu'},{id:'d-ze',jp:'ぜ',romaji:'ze'},{id:'d-zo',jp:'ぞ',romaji:'zo'},
    {id:'d-da',jp:'だ',romaji:'da'},{id:'d-di',jp:'ぢ',romaji:'di'},{id:'d-du',jp:'づ',romaji:'du'},{id:'d-de',jp:'で',romaji:'de'},{id:'d-do',jp:'ど',romaji:'do'},
    {id:'d-ba',jp:'ば',romaji:'ba'},{id:'d-bi',jp:'び',romaji:'bi'},{id:'d-bu',jp:'ぶ',romaji:'bu'},{id:'d-be',jp:'べ',romaji:'be'},{id:'d-bo',jp:'ぼ',romaji:'bo'},
    {id:'d-pa',jp:'ぱ',romaji:'pa'},{id:'d-pi',jp:'ぴ',romaji:'pi'},{id:'d-pu',jp:'ぷ',romaji:'pu'},{id:'d-pe',jp:'ぺ',romaji:'pe'},{id:'d-po',jp:'ぽ',romaji:'po'},
  ],
  combinations: [
    {id:'c-kya',jp:'きゃ',romaji:'kya'},{id:'c-kyu',jp:'きゅ',romaji:'kyu'},{id:'c-kyo',jp:'きょ',romaji:'kyo'},
    {id:'c-sha',jp:'しゃ',romaji:'sha'},{id:'c-shu',jp:'しゅ',romaji:'shu'},{id:'c-sho',jp:'しょ',romaji:'sho'},
    {id:'c-cha',jp:'ちゃ',romaji:'cha'},{id:'c-chu',jp:'ちゅ',romaji:'chu'},{id:'c-cho',jp:'ちょ',romaji:'cho'},
    {id:'c-nya',jp:'にゃ',romaji:'nya'},{id:'c-nyu',jp:'にゅ',romaji:'nyu'},{id:'c-nyo',jp:'にょ',romaji:'nyo'},
    {id:'c-hya',jp:'ひゃ',romaji:'hya'},{id:'c-hyu',jp:'ひゅ',romaji:'hyu'},{id:'c-hyo',jp:'ひょ',romaji:'hyo'},
    {id:'c-mya',jp:'みゃ',romaji:'mya'},{id:'c-myu',jp:'みゅ',romaji:'myu'},{id:'c-myo',jp:'みょ',romaji:'myo'},
    {id:'c-rya',jp:'りゃ',romaji:'rya'},{id:'c-ryu',jp:'りゅ',romaji:'ryu'},{id:'c-ryo',jp:'りょ',romaji:'ryo'},
    {id:'c-gya',jp:'ぎゃ',romaji:'gya'},{id:'c-gyu',jp:'ぎゅ',romaji:'gyu'},{id:'c-gyo',jp:'ぎょ',romaji:'gyo'},
    {id:'c-ja', jp:'じゃ',romaji:'ja'}, {id:'c-ju', jp:'じゅ',romaji:'ju'}, {id:'c-jo', jp:'じょ',romaji:'jo'},
  ],
};

/* =========================================================
   JLPT LEVEL INFO
   ========================================================= */
const JLPTLevels = [
  { id:'jlpt-n5',level:'N5',title:'初級',subtitle:'Beginner',desc:'Basic hiragana, katakana, and 100 kanji',kanji:'初',progress:94,total:100,learned:94,color:'var(--n5)',dim:'var(--n5-dim)',status:'Completed' },
  { id:'jlpt-n4',level:'N4',title:'初中級',subtitle:'Elementary',desc:'300 kanji, everyday conversation',kanji:'中',progress:72,total:300,learned:216,color:'var(--n4)',dim:'var(--n4-dim)',status:'In Progress' },
  { id:'jlpt-n3',level:'N3',title:'中級',subtitle:'Intermediate',desc:'650 kanji, news comprehension',kanji:'語',progress:28,total:650,learned:182,color:'var(--n3)',dim:'var(--n3-dim)',status:'In Progress' },
  { id:'jlpt-n2',level:'N2',title:'上級',subtitle:'Upper-Inter.',desc:'1000 kanji, professional texts',kanji:'上',progress:5,total:1000,learned:50,color:'var(--n2)',dim:'var(--n2-dim)',status:'Unlocked' },
  { id:'jlpt-n1',level:'N1',title:'最上級',subtitle:'Advanced',desc:'2000 kanji, native-level texts',kanji:'極',progress:0,total:2000,learned:0,color:'var(--n1)',dim:'var(--n1-dim)',status:'Locked' },
];

const JLPTPageInfo = {
  n5:{ level:'N5',title:'初級',subtitle:'Beginner',color:'var(--n5)',dim:'var(--n5-dim)',kanji:'初',desc:'Basic hiragana, katakana, and 100 kanji. Everyday expressions.',progress:94,total:100,learned:94 },
  n4:{ level:'N4',title:'初中級',subtitle:'Elementary',color:'var(--n4)',dim:'var(--n4-dim)',kanji:'中',desc:'300 kanji, everyday conversation and basic grammar.',progress:72,total:300,learned:216 },
  n3:{ level:'N3',title:'中級',subtitle:'Intermediate',color:'var(--n3)',dim:'var(--n3-dim)',kanji:'語',desc:'650 kanji, news comprehension and complex sentences.',progress:28,total:650,learned:182 },
};

/* =========================================================
   WEEK/PROGRESS DATA
   ========================================================= */
const WeekData = [
  { id:'wd-mon',day:'M',xp:420,active:true },
  { id:'wd-tue',day:'T',xp:380,active:true },
  { id:'wd-wed',day:'W',xp:510,active:true },
  { id:'wd-thu',day:'T',xp:290,active:true },
  { id:'wd-fri',day:'F',xp:340,active:true },
  { id:'wd-sat',day:'S',xp:0,  active:false },
  { id:'wd-sun',day:'S',xp:0,  active:false },
];

const Achievements = [
  { id:'ach-1',icon:'🎯',title:'N5 Complete', desc:'Completed all N5 kanji',  earned:true,  date:'Jan 2026' },
  { id:'ach-2',icon:'🔥',title:'14-Day Streak',desc:'Studied 14 days in a row',earned:true,  date:'May 2026' },
  { id:'ach-3',icon:'📚',title:'Scholar Rank', desc:'Reached Level 12',        earned:true,  date:'Apr 2026' },
  { id:'ach-4',icon:'漢',title:'100 Kanji',    desc:'Learned 100 kanji',       earned:true,  date:'Feb 2026' },
  { id:'ach-5',icon:'⚡',title:'XP Master',    desc:'Earn 50,000 total XP',    earned:false, date:null },
  { id:'ach-6',icon:'🏆',title:'N4 Complete',  desc:'Complete all N4 kanji',   earned:false, date:null },
];

/* =========================================================
   COLOR HELPERS
   ========================================================= */
function levelColor(level) {
  const map = { N5:'var(--n5)',N4:'var(--n4)',N3:'var(--n3)',N2:'var(--n2)',N1:'var(--n1)' };
  return map[level] || 'var(--primary)';
}
function levelDim(level) {
  const map = { N5:'var(--n5-dim)',N4:'var(--n4-dim)',N3:'var(--n3-dim)',N2:'var(--n2-dim)',N1:'var(--n1-dim)' };
  return map[level] || 'var(--primary-dim)';
}

// Initialize learned set from data
State.initLearnedKanji(AllKanji);
