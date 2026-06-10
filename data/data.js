// Nemis-O'zbek Lug'at bazasi
const WORDS_DATA = [
  {
    "de": "der Apfel",
    "uz": "olma",
    "type": "noun",
    "plural": "die Äpfel",
    "pron": "der 'Apfl",
    "example_de": "Ich esse jeden Tag einen Apfel.",
    "example_uz": "Men har kuni bitta olma yeyman."
  },
  {
    "de": "das Brot",
    "uz": "non",
    "type": "noun",
    "plural": "die Brote",
    "pron": "das Broːt",
    "example_de": "Das Brot ist frisch gebacken.",
    "example_uz": "Non yangi pishirilgan."
  },
  {
    "de": "die Milch",
    "uz": "sut",
    "type": "noun",
    "pron": "diː Mɪlç",
    "example_de": "Kinder trinken gerne Milch.",
    "example_uz": "Bolalar sut ichishni yaxshi ko'rishadi."
  },
  {
    "de": "das Wasser",
    "uz": "suv",
    "type": "noun",
    "pron": "das 'Vasɐ",
    "example_de": "Ich trinke viel Wasser am Tag.",
    "example_uz": "Men kuniga ko'p suv ichaman."
  },
  {
    "de": "der Tee",
    "uz": "choy",
    "type": "noun",
    "pron": "deːɐ Teː",
    "example_de": "Morgens trinke ich immer Tee.",
    "example_uz": "Ertalab men doim choy ichaman."
  },
  {
    "de": "der Kaffee",
    "uz": "qahva",
    "type": "noun",
    "pron": "deːɐ Ka'feː",
    "example_de": "Der Kaffee ist sehr stark.",
    "example_uz": "Bu qahva juda kuchli."
  },
  {
    "de": "das Fleisch",
    "uz": "go'sht",
    "type": "noun",
    "pron": "das FlaɪʃC",
    "example_de": "Wir essen heute Fleisch zum Mittagessen.",
    "example_uz": "Biz bugun tushlikka go'sht yeymiz."
  },
  {
    "de": "der Fisch",
    "uz": "baliq",
    "type": "noun",
    "pron": "deːɐ Fɪʃ",
    "example_de": "Der Fisch im Restaurant war sehr lecker.",
    "example_uz": "Restorандаги baliq juda mazali edi."
  },
  {
    "de": "das Ei",
    "uz": "tuxum",
    "type": "noun",
    "plural": "die Eier",
    "pron": "das Aɪ",
    "example_de": "Ich koche jeden Morgen zwei Eier.",
    "example_uz": "Men har ertalab ikkita tuxum qaynataman."
  },
  {
    "de": "der Käse",
    "uz": "pishloq",
    "type": "noun",
    "pron": "deːɐ 'Kɛːzə",
    "example_de": "Der Käse aus der Schweiz schmeckt wunderbar.",
    "example_uz": "Shveytsariya pishlog'i ajoyib ta'm beradi."
  },
  {
    "de": "die Butter",
    "uz": "sariyog'",
    "type": "noun",
    "pron": "diː 'Butɐ",
    "example_de": "Ich streiche Butter auf das Brot.",
    "example_uz": "Men nonga sariyog' surtaman."
  },
  {
    "de": "der Zucker",
    "uz": "shakar",
    "type": "noun",
    "pron": "deːɐ 'Tsukɐ",
    "example_de": "Ich nehme keinen Zucker in den Kaffee.",
    "example_uz": "Men qahvaga shakar solmayman."
  },
  {
    "de": "das Salz",
    "uz": "tuz",
    "type": "noun",
    "pron": "das Zalts",
    "example_de": "Das Essen braucht mehr Salz.",
    "example_uz": "Taomga ko'proq tuz kerak."
  },
  {
    "de": "der Reis",
    "uz": "guruch",
    "type": "noun",
    "pron": "deːɐ Raɪs",
    "example_de": "In Asien isst man täglich Reis.",
    "example_uz": "Osiyoda har kuni guruch yeyiladi."
  },
  {
    "de": "die Tomate",
    "uz": "pomidor",
    "type": "noun",
    "plural": "die Tomaten",
    "pron": "diː To'maːtə",
    "example_de": "Die Tomaten im Garten sind reif.",
    "example_uz": "Bog'dagi pomidorlar pishib qoldi."
  },
  {
    "de": "die Kartoffel",
    "uz": "kartoshka",
    "type": "noun",
    "plural": "die Kartoffeln",
    "pron": "diː Kar'tɔfl",
    "example_de": "Wir machen heute Kartoffelsuppe.",
    "example_uz": "Biz bugun kartoshka sho'rva qilamiz."
  },
  {
    "de": "die Zwiebel",
    "uz": "piyoz",
    "type": "noun",
    "plural": "die Zwiebeln",
    "pron": "diː 'Tsviːbl",
    "example_de": "Die Zwiebeln machen meine Augen tränen.",
    "example_uz": "Piyoz ko'zimni yig'latadi."
  },
  {
    "de": "die Karotte",
    "uz": "sabzi",
    "type": "noun",
    "plural": "die Karotten",
    "pron": "diː Ka'rɔtə",
    "example_de": "Karotten sind gut für die Augen.",
    "example_uz": "Sabzi ko'z uchun foydali."
  },
  {
    "de": "die Gurke",
    "uz": "bodring",
    "type": "noun",
    "plural": "die Gurken",
    "pron": "diː 'Gurkə",
    "example_de": "Im Sommer esse ich gerne Gurken.",
    "example_uz": "Yozda bodring yeyishni yaxshi ko'raman."
  },
  {
    "de": "die Orange",
    "uz": "apelsin",
    "type": "noun",
    "plural": "die Orangen",
    "pron": "diː O'raŋʒə",
    "example_de": "Die Orange ist sehr saftig.",
    "example_uz": "Bu apelsin juda sharbatli."
  },
  {
    "de": "die Banane",
    "uz": "banan",
    "type": "noun",
    "plural": "die Bananen",
    "pron": "diː Ba'naːnə",
    "example_de": "Ich kaufe jeden Tag eine Banane.",
    "example_uz": "Men har kuni bitta banan sotib olaman."
  },
  {
    "de": "die Wassermelone",
    "uz": "tarvuz",
    "type": "noun",
    "pron": "diː 'Vasɐmeloːnə",
    "example_de": "Im Sommer essen wir Wassermelone.",
    "example_uz": "Yozda biz tarvuz yeymiz."
  },
  {
    "de": "der Vater",
    "uz": "ota",
    "type": "noun",
    "pron": "deːɐ 'Faːtɐ",
    "example_de": "Mein Vater arbeitet als Ingenieur.",
    "example_uz": "Mening otam muhandis bo'lib ishlaydi."
  },
  {
    "de": "die Mutter",
    "uz": "ona",
    "type": "noun",
    "pron": "diː 'Mutɐ",
    "example_de": "Meine Mutter kocht sehr gut.",
    "example_uz": "Mening onam juda yaxshi oshpazlik qiladi."
  },
  {
    "de": "der Bruder",
    "uz": "aka / uka",
    "type": "noun",
    "pron": "deːɐ 'Bruːdɐ",
    "example_de": "Mein Bruder ist zwei Jahre älter als ich.",
    "example_uz": "Mening akam mendan ikki yosh katta."
  },
  {
    "de": "die Schwester",
    "uz": "opa / singil",
    "type": "noun",
    "pron": "diː 'ʃvɛstɐ",
    "example_de": "Meine Schwester studiert Medizin.",
    "example_uz": "Mening opam tibbiyot o'qiydi."
  },
  {
    "de": "der Sohn",
    "uz": "o'g'il",
    "type": "noun",
    "pron": "deːɐ Zoːn",
    "example_de": "Ihr Sohn ist sehr klug.",
    "example_uz": "Uning o'g'li juda aqlli."
  },
  {
    "de": "die Tochter",
    "uz": "qiz",
    "type": "noun",
    "pron": "diː 'Tɔxtɐ",
    "example_de": "Ihre Tochter spricht drei Sprachen.",
    "example_uz": "Uning qizi uch tilda gapiradi."
  },
  {
    "de": "der Großvater",
    "uz": "bobo",
    "type": "noun",
    "pron": "deːɐ 'Groːsfaːtɐ",
    "example_de": "Mein Großvater erzählt tolle Geschichten.",
    "example_uz": "Mening bobom ajoyib hikoyalar aytib beradi."
  },
  {
    "de": "die Großmutter",
    "uz": "buvi",
    "type": "noun",
    "pron": "diː 'Groːsmutɐ",
    "example_de": "Die Großmutter backt den besten Kuchen.",
    "example_uz": "Buvi eng yaxshi pirog pishiradi."
  },
  {
    "de": "das Kind",
    "uz": "bola",
    "type": "noun",
    "plural": "die Kinder",
    "pron": "das Kɪnt",
    "example_de": "Das Kind spielt im Garten.",
    "example_uz": "Bola bog'da o'ynayapti."
  },
  {
    "de": "der Freund",
    "uz": "do'st",
    "type": "noun",
    "pron": "deːɐ Frɔɪnt",
    "example_de": "Mein bester Freund wohnt in Berlin.",
    "example_uz": "Mening eng yaxshi do'stim Berlinda yashaydi."
  },
  {
    "de": "der Mann",
    "uz": "er / odam",
    "type": "noun",
    "pron": "deːɐ Man",
    "example_de": "Der Mann liest die Zeitung.",
    "example_uz": "Odam gazeta o'qiyapti."
  },
  {
    "de": "die Frau",
    "uz": "xotin / ayol",
    "type": "noun",
    "pron": "diː Fraʊ",
    "example_de": "Die Frau arbeitet als Ärztin.",
    "example_uz": "Ayol shifokor bo'lib ishlaydi."
  },
  {
    "de": "der Kopf",
    "uz": "bosh",
    "type": "noun",
    "pron": "deːɐ Kɔpf",
    "example_de": "Mir tut der Kopf weh.",
    "example_uz": "Boshim og'riyapti."
  },
  {
    "de": "das Auge",
    "uz": "ko'z",
    "type": "noun",
    "plural": "die Augen",
    "pron": "das 'Aʊgə",
    "example_de": "Sie hat wunderschöne blaue Augen.",
    "example_uz": "Uning ko'zlari juda chiroyli ko'k."
  },
  {
    "de": "die Nase",
    "uz": "burun",
    "type": "noun",
    "pron": "diː 'Naːzə",
    "example_de": "Im Winter läuft mir immer die Nase.",
    "example_uz": "Qishda burunim doim oqadi."
  },
  {
    "de": "der Mund",
    "uz": "og'iz",
    "type": "noun",
    "pron": "deːɐ Munt",
    "example_de": "Bitte öffne den Mund beim Arzt.",
    "example_uz": "Shifokorga borganda og'izni oching."
  },
  {
    "de": "das Ohr",
    "uz": "quloq",
    "type": "noun",
    "plural": "die Ohren",
    "pron": "das Oːɐ",
    "example_de": "Er hört mit den Ohren sehr gut.",
    "example_uz": "U quloqlari bilan juda yaxshi eshitadi."
  },
  {
    "de": "die Hand",
    "uz": "qo'l",
    "type": "noun",
    "pron": "diː Hant",
    "example_de": "Wasch dir bitte die Hände!",
    "example_uz": "Iltimos, qo'llaringni yuv!"
  },
  {
    "de": "das Herz",
    "uz": "yurak",
    "type": "noun",
    "pron": "das Hɛrts",
    "example_de": "Das Herz schlägt rhythmisch.",
    "example_uz": "Yurak ritmik uradi."
  },
  {
    "de": "der Zahn",
    "uz": "tish",
    "type": "noun",
    "plural": "die Zähne",
    "pron": "deːɐ Tsaːn",
    "example_de": "Ich putze zweimal am Tag die Zähne.",
    "example_uz": "Men kuniga ikki marta tish yuvaman."
  },
  {
    "de": "das Haus",
    "uz": "uy",
    "type": "noun",
    "pron": "das Haʊs",
    "example_de": "Unser Haus hat einen großen Garten.",
    "example_uz": "Bizning uyimizda katta bog' bor."
  },
  {
    "de": "die Küche",
    "uz": "oshxona",
    "type": "noun",
    "pron": "diː 'Kyçə",
    "example_de": "Die Küche riecht nach frischem Essen.",
    "example_uz": "Oshxonadan yangi taom hidi kelmoqda."
  },
  {
    "de": "das Zimmer",
    "uz": "xona",
    "type": "noun",
    "pron": "das 'Tsɪmɐ",
    "example_de": "Mein Zimmer ist sehr ordentlich.",
    "example_uz": "Mening xonam juda tartibli."
  },
  {
    "de": "die Tür",
    "uz": "eshik",
    "type": "noun",
    "pron": "diː Tyːɐ",
    "example_de": "Bitte schließ die Tür hinter dir.",
    "example_uz": "Iltimos, orqangdan eshikni yop."
  },
  {
    "de": "das Fenster",
    "uz": "deraza",
    "type": "noun",
    "pron": "das 'Fɛnstɐ",
    "example_de": "Das Fenster ist offen, es kommt frische Luft herein.",
    "example_uz": "Deraza ochiq, toza havo kirmoqda."
  },
  {
    "de": "der Tisch",
    "uz": "stol",
    "type": "noun",
    "pron": "deːɐ Tɪʃ",
    "example_de": "Wir essen am Tisch zusammen.",
    "example_uz": "Biz stolda birga yeymiz."
  },
  {
    "de": "der Stuhl",
    "uz": "stul",
    "type": "noun",
    "pron": "deːɐ ʃtuːl",
    "example_de": "Bitte setz dich auf den Stuhl.",
    "example_uz": "Iltimos, stulga o'tir."
  },
  {
    "de": "das Bett",
    "uz": "karavot",
    "type": "noun",
    "pron": "das Bɛt",
    "example_de": "Ich gehe um 22 Uhr ins Bett.",
    "example_uz": "Men soat 22 da karavotga yotaman."
  },
  {
    "de": "der Kühlschrank",
    "uz": "muzlatgich",
    "type": "noun",
    "pron": "deːɐ 'Kyːlʃraŋk",
    "example_de": "Im Kühlschrank ist keine Milch mehr.",
    "example_uz": "Muzlatgichda sut qolmadi."
  },
  {
    "de": "der Fernseher",
    "uz": "televizor",
    "type": "noun",
    "pron": "deːɐ 'Fɛːɐnzeːɐ",
    "example_de": "Wir schauen abends gemeinsam Fernseher.",
    "example_uz": "Biz kechqurun birga televizor ko'ramiz."
  },
  {
    "de": "sein",
    "uz": "bo'lmoq",
    "type": "verb",
    "pron": "zaɪn",
    "example_de": "Ich bin müde nach der Arbeit.",
    "example_uz": "Men ishdan keyin charchadim."
  },
  {
    "de": "haben",
    "uz": "ega bo'lmoq",
    "type": "verb",
    "pron": "'haːbn",
    "example_de": "Er hat ein neues Auto.",
    "example_uz": "Uning yangi mashinasi bor."
  },
  {
    "de": "gehen",
    "uz": "bormoq / ketmoq",
    "type": "verb",
    "pron": "'geːən",
    "example_de": "Ich gehe jeden Morgen spazieren.",
    "example_uz": "Men har ertalab sayr qilgani boraman."
  },
  {
    "de": "kommen",
    "uz": "kelmoq",
    "type": "verb",
    "pron": "'kɔmən",
    "example_de": "Wann kommst du nach Hause?",
    "example_uz": "Sen qachon uyga kelasan?"
  },
  {
    "de": "machen",
    "uz": "qilmoq",
    "type": "verb",
    "pron": "'maxən",
    "example_de": "Was machst du heute Abend?",
    "example_uz": "Sen bugun kechqurun nima qilasan?"
  },
  {
    "de": "sagen",
    "uz": "aytmoq",
    "type": "verb",
    "pron": "'zaːgən",
    "example_de": "Er sagt immer die Wahrheit.",
    "example_uz": "U doim haqiqatni aytadi."
  },
  {
    "de": "sehen",
    "uz": "ko'rmoq",
    "type": "verb",
    "pron": "'zeːən",
    "example_de": "Kannst du das Schild dort sehen?",
    "example_uz": "U yerdagi belgini ko'ra olasanmi?"
  },
  {
    "de": "hören",
    "uz": "eshitmoq",
    "type": "verb",
    "pron": "'høːrən",
    "example_de": "Ich höre gerne klassische Musik.",
    "example_uz": "Men klassik musiqa tinglashni yaxshi ko'raman."
  },
  {
    "de": "sprechen",
    "uz": "gapirmoq",
    "type": "verb",
    "pron": "'ʃprɛçən",
    "example_de": "Sie spricht sehr gut Deutsch.",
    "example_uz": "U nemis tilida juda yaxshi gapiradi."
  },
  {
    "de": "lesen",
    "uz": "o'qimoq",
    "type": "verb",
    "pron": "'leːzən",
    "example_de": "Ich lese jeden Abend ein Buch.",
    "example_uz": "Men har kech kitob o'qiyman."
  },
  {
    "de": "schreiben",
    "uz": "yozmoq",
    "type": "verb",
    "pron": "'ʃraɪbn",
    "example_de": "Sie schreibt einen Brief an ihre Mutter.",
    "example_uz": "U onasiga xat yozmoqda."
  },
  {
    "de": "essen",
    "uz": "yemoq",
    "type": "verb",
    "pron": "'ɛsən",
    "example_de": "Wir essen um 12 Uhr zu Mittag.",
    "example_uz": "Biz soat 12 da tushlik yeymiz."
  },
  {
    "de": "trinken",
    "uz": "ichmoq",
    "type": "verb",
    "pron": "'trɪŋkən",
    "example_de": "Er trinkt täglich zwei Liter Wasser.",
    "example_uz": "U har kuni ikki litr suv ichadi."
  },
  {
    "de": "schlafen",
    "uz": "uxlamoq",
    "type": "verb",
    "pron": "'ʃlaːfən",
    "example_de": "Das Baby schläft gerade.",
    "example_uz": "Chaqaloq hozir uxlayapti."
  },
  {
    "de": "arbeiten",
    "uz": "ishlаmoq",
    "type": "verb",
    "pron": "'arbaitn",
    "example_de": "Mein Vater arbeitet in einer Fabrik.",
    "example_uz": "Otam zavodda ishlaydi."
  },
  {
    "de": "lernen",
    "uz": "o'rganmoq",
    "type": "verb",
    "pron": "'lɛrnən",
    "example_de": "Ich lerne seit einem Jahr Deutsch.",
    "example_uz": "Men bir yildan beri nemis tilini o'rganmoqdaman."
  },
  {
    "de": "kaufen",
    "uz": "sotib olmoq",
    "type": "verb",
    "pron": "'kaʊfən",
    "example_de": "Ich kaufe heute ein neues Kleid.",
    "example_uz": "Bugun men yangi ko'ylak sotib olaman."
  },
  {
    "de": "lieben",
    "uz": "sevmoq",
    "type": "verb",
    "pron": "'liːbn",
    "example_de": "Sie liebt ihren Mann sehr.",
    "example_uz": "U erini juda sevadi."
  },
  {
    "de": "helfen",
    "uz": "yordam bermoq",
    "type": "verb",
    "pron": "'hɛlfən",
    "example_de": "Kannst du mir bitte helfen?",
    "example_uz": "Menga yordam bera olasanmi, iltimos?"
  },
  {
    "de": "fragen",
    "uz": "so'ramoq",
    "type": "verb",
    "pron": "'fraːgən",
    "example_de": "Sie fragt den Lehrer nach der Hausaufgabe.",
    "example_uz": "U o'qituvchidan uy vazifasini so'raydi."
  },
  {
    "de": "verstehen",
    "uz": "tushunmoq",
    "type": "verb",
    "pron": "fɛɐ'ʃteːən",
    "example_de": "Ich verstehe diese Aufgabe nicht.",
    "example_uz": "Men bu vazifani tushunmayapman."
  },
  {
    "de": "vergessen",
    "uz": "unutmoq",
    "type": "verb",
    "pron": "fɛɐ'gɛsən",
    "example_de": "Ich habe meinen Schlüssel vergessen.",
    "example_uz": "Kalitimni unutibman."
  },
  {
    "de": "kochen",
    "uz": "pishirmoq",
    "type": "verb",
    "pron": "'kɔxən",
    "example_de": "Meine Mutter kocht heute Lagman.",
    "example_uz": "Onam bugun lag'mon pishiryapti."
  },
  {
    "de": "waschen",
    "uz": "yuvmoq",
    "type": "verb",
    "pron": "'vaʃən",
    "example_de": "Ich wasche meine Kleider am Wochenende.",
    "example_uz": "Dam olish kuni kiyimlarimni yuvaman."
  },
  {
    "de": "reisen",
    "uz": "sayohat qilmoq",
    "type": "verb",
    "pron": "'raɪzən",
    "example_de": "Wir reisen diesen Sommer nach Deutschland.",
    "example_uz": "Bu yoz biz Germaniyaga sayohat qilamiz."
  },
  {
    "de": "warten",
    "uz": "kutmoq",
    "type": "verb",
    "pron": "'vartn",
    "example_de": "Ich warte seit einer Stunde auf dich.",
    "example_uz": "Men seni bir soatdan beri kutmoqdaman."
  },
  {
    "de": "suchen",
    "uz": "qidirmoq",
    "type": "verb",
    "pron": "'zuːxən",
    "example_de": "Ich suche meinen Schlüssel überall.",
    "example_uz": "Kalitimni hamma joydan qidirmoqdaman."
  },
  {
    "de": "finden",
    "uz": "topmoq",
    "type": "verb",
    "pron": "'fɪndn",
    "example_de": "Hast du deinen Schlüssel gefunden?",
    "example_uz": "Kalitingni topdingmi?"
  },
  {
    "de": "denken",
    "uz": "o'ylamoq",
    "type": "verb",
    "pron": "'dɛŋkən",
    "example_de": "Ich denke, das ist eine gute Idee.",
    "example_uz": "Menimcha, bu yaxshi fikr."
  },
  {
    "de": "wissen",
    "uz": "bilmoq",
    "type": "verb",
    "pron": "'vɪsən",
    "example_de": "Weißt du, wo er wohnt?",
    "example_uz": "U qayerda yashashini bilasanmi?"
  },
  {
    "de": "spielen",
    "uz": "o'ynamoq",
    "type": "verb",
    "pron": "'ʃpiːlən",
    "example_de": "Die Kinder spielen im Park.",
    "example_uz": "Bolalar parkda o'ynayapti."
  },
  {
    "de": "anrufen",
    "uz": "qo'ng'iroq qilmoq",
    "type": "verb",
    "pron": "'anruːfən",
    "example_de": "Ruf mich bitte morgen an.",
    "example_uz": "Iltimos, ertaga menga qo'ng'iroq qil."
  },
  {
    "de": "gut",
    "uz": "yaxshi",
    "type": "adjective",
    "pron": "guːt",
    "example_de": "Das ist eine sehr gute Idee!",
    "example_uz": "Bu juda yaxshi fikr!"
  },
  {
    "de": "schlecht",
    "uz": "yomon",
    "type": "adjective",
    "pron": "ʃlɛçt",
    "example_de": "Das Wetter ist heute schlecht.",
    "example_uz": "Bugun ob-havo yomon."
  },
  {
    "de": "groß",
    "uz": "katta / baland",
    "type": "adjective",
    "pron": "groːs",
    "example_de": "Er ist sehr groß, fast zwei Meter.",
    "example_uz": "U juda baland bo'yli, deyarli ikki metr."
  },
  {
    "de": "klein",
    "uz": "kichik / past",
    "type": "adjective",
    "pron": "klaɪn",
    "example_de": "Das kleine Mädchen lacht laut.",
    "example_uz": "Kichkina qiz baland ovozda kulmoqda."
  },
  {
    "de": "neu",
    "uz": "yangi",
    "type": "adjective",
    "pron": "nɔɪ",
    "example_de": "Ich habe ein neues Handy gekauft.",
    "example_uz": "Men yangi telefon sotib oldim."
  },
  {
    "de": "alt",
    "uz": "eski / qari",
    "type": "adjective",
    "pron": "alt",
    "example_de": "Das alte Haus wird renoviert.",
    "example_uz": "Eski uy ta'mirlanmoqda."
  },
  {
    "de": "schön",
    "uz": "chiroyli / go'zal",
    "type": "adjective",
    "pron": "ʃøːn",
    "example_de": "Was für ein schöner Tag heute!",
    "example_uz": "Bugun qanday chiroyli kun!"
  },
  {
    "de": "schnell",
    "uz": "tez",
    "type": "adjective",
    "pron": "ʃnɛl",
    "example_de": "Das Pferd läuft sehr schnell.",
    "example_uz": "Ot juda tez yugurmoqda."
  },
  {
    "de": "langsam",
    "uz": "sekin",
    "type": "adjective",
    "pron": "'laŋzaːm",
    "example_de": "Bitte fahre langsamer!",
    "example_uz": "Iltimos, sekinroq haydang!"
  },
  {
    "de": "stark",
    "uz": "kuchli",
    "type": "adjective",
    "pron": "ʃtark",
    "example_de": "Er ist ein starker Mann.",
    "example_uz": "U kuchli odam."
  },
  {
    "de": "warm",
    "uz": "iliq / issiq",
    "type": "adjective",
    "pron": "varm",
    "example_de": "Heute ist es sehr warm draußen.",
    "example_uz": "Bugun tashqarida juda issiq."
  },
  {
    "de": "kalt",
    "uz": "sovuq",
    "type": "adjective",
    "pron": "kalt",
    "example_de": "Im Winter ist es hier sehr kalt.",
    "example_uz": "Qishda bu yerda juda sovuq bo'ladi."
  },
  {
    "de": "schön",
    "uz": "chiroyli",
    "type": "adjective",
    "pron": "ʃøːn",
    "example_de": "Die Blumen sind wirklich schön.",
    "example_uz": "Gullar haqiqatan ham chiroyli."
  },
  {
    "de": "müde",
    "uz": "charchagan",
    "type": "adjective",
    "pron": "'myːdə",
    "example_de": "Nach der Arbeit bin ich immer müde.",
    "example_uz": "Ishdan keyin men doim charchagan bo'laman."
  },
  {
    "de": "glücklich",
    "uz": "baxtli / xursand",
    "type": "adjective",
    "pron": "'glyklɪç",
    "example_de": "Sie ist sehr glücklich mit ihrem Leben.",
    "example_uz": "U o'z hayotidan juda xursand."
  },
  {
    "de": "krank",
    "uz": "kasal",
    "type": "adjective",
    "pron": "kraŋk",
    "example_de": "Er ist krank und bleibt heute zu Hause.",
    "example_uz": "U kasal va bugun uyda qolmoqda."
  },
  {
    "de": "gesund",
    "uz": "sog'lom",
    "type": "adjective",
    "pron": "gə'zunt",
    "example_de": "Sport treiben ist wichtig, um gesund zu bleiben.",
    "example_uz": "Sog'lom bo'lish uchun sport qilish muhim."
  },
  {
    "de": "interessant",
    "uz": "qiziqarli",
    "type": "adjective",
    "pron": "ɪntərɛ'sant",
    "example_de": "Das Buch ist sehr interessant.",
    "example_uz": "Kitob juda qiziqarli."
  },
  {
    "de": "billig",
    "uz": "arzon",
    "type": "adjective",
    "pron": "'bɪlɪç",
    "example_de": "Diese Schuhe sind sehr billig.",
    "example_uz": "Bu tuflilar juda arzon."
  },
  {
    "de": "teuer",
    "uz": "qimmat",
    "type": "adjective",
    "pron": "'tɔɪɐ",
    "example_de": "Das Restaurant ist sehr teuer.",
    "example_uz": "Bu restoran juda qimmat."
  },
  {
    "de": "rot",
    "uz": "qizil",
    "type": "adjective",
    "pron": "roːt",
    "example_de": "Sie trägt ein rotes Kleid.",
    "example_uz": "U qizil ko'ylak kiygan."
  },
  {
    "de": "blau",
    "uz": "ko'k",
    "type": "adjective",
    "pron": "blaʊ",
    "example_de": "Der Himmel ist heute strahlend blau.",
    "example_uz": "Bugun osmon moviy-ko'k."
  },
  {
    "de": "grün",
    "uz": "yashil",
    "type": "adjective",
    "pron": "gryːn",
    "example_de": "Das Gras ist grün im Frühling.",
    "example_uz": "Bahorda o't yashil bo'ladi."
  },
  {
    "de": "gelb",
    "uz": "sariq",
    "type": "adjective",
    "pron": "gɛlp",
    "example_de": "Die Sonnenblume ist gelb.",
    "example_uz": "Kungaboqar sariq."
  },
  {
    "de": "weiß",
    "uz": "oq",
    "type": "adjective",
    "pron": "vaɪs",
    "example_de": "Der Schnee ist weiß.",
    "example_uz": "Qor oq."
  },
  {
    "de": "schwarz",
    "uz": "qora",
    "type": "adjective",
    "pron": "ʃvarts",
    "example_de": "Er trägt immer schwarze Kleidung.",
    "example_uz": "U doim qora kiyim kiyadi."
  },
  {
    "de": "Montag",
    "uz": "Dushanba",
    "type": "noun",
    "pron": "'moːntaːk",
    "example_de": "Am Montag beginnt die Arbeitswoche.",
    "example_uz": "Dushanbada ish haftasi boshlanadi."
  },
  {
    "de": "Dienstag",
    "uz": "Seshanba",
    "type": "noun",
    "pron": "'diːnstaːk",
    "example_de": "Dienstags habe ich Deutschkurs.",
    "example_uz": "Seshanbada menda nemis tili kursi bor."
  },
  {
    "de": "Mittwoch",
    "uz": "Chorshanba",
    "type": "noun",
    "pron": "'mɪtvɔx",
    "example_de": "Mittwoch ist die Wochenmitte.",
    "example_uz": "Chorshanba haftaning o'rtasi."
  },
  {
    "de": "Donnerstag",
    "uz": "Payshanba",
    "type": "noun",
    "pron": "'dɔnɐstaːk",
    "example_de": "Donnerstags gehe ich ins Fitnessstudio.",
    "example_uz": "Payshanbada men fitnes zalga boraman."
  },
  {
    "de": "Freitag",
    "uz": "Juma",
    "type": "noun",
    "pron": "'fraɪtaːk",
    "example_de": "Am Freitag gehen wir aus.",
    "example_uz": "Juma kuni biz chiqamiz."
  },
  {
    "de": "Samstag",
    "uz": "Shanba",
    "type": "noun",
    "pron": "'zamstaːk",
    "example_de": "Am Samstag schläft er lange.",
    "example_uz": "Shanbada u uzoq uxlaydi."
  },
  {
    "de": "Sonntag",
    "uz": "Yakshanba",
    "type": "noun",
    "pron": "'zɔntaːk",
    "example_de": "Sonntags besuchen wir die Familie.",
    "example_uz": "Yakshanbada biz oilani ziyorat qilamiz."
  },
  {
    "de": "heute",
    "uz": "bugun",
    "type": "adverb",
    "pron": "'hɔɪtə",
    "example_de": "Heute ist das Wetter sehr schön.",
    "example_uz": "Bugun ob-havo juda chiroyli."
  },
  {
    "de": "gestern",
    "uz": "kecha",
    "type": "adverb",
    "pron": "'gɛstɐn",
    "example_de": "Gestern haben wir Fußball gespielt.",
    "example_uz": "Kecha biz futbol o'ynаdik."
  },
  {
    "de": "morgen",
    "uz": "ertaga",
    "type": "adverb",
    "pron": "'mɔrgən",
    "example_de": "Morgen fahre ich nach Berlin.",
    "example_uz": "Ertaga men Berlingа boraman."
  },
  {
    "de": "jetzt",
    "uz": "hozir",
    "type": "adverb",
    "pron": "jɛtst",
    "example_de": "Was machst du jetzt gerade?",
    "example_uz": "Sen hozir nima qilyapsan?"
  },
  {
    "de": "immer",
    "uz": "doimo",
    "type": "adverb",
    "pron": "'ɪmɐ",
    "example_de": "Er ist immer pünktlich.",
    "example_uz": "U doimo vaqtida keladi."
  },
  {
    "de": "nie",
    "uz": "hech qachon",
    "type": "adverb",
    "pron": "niː",
    "example_de": "Ich trinke nie Alkohol.",
    "example_uz": "Men hech qachon alkogol ichmayman."
  },
  {
    "de": "manchmal",
    "uz": "ba'zan",
    "type": "adverb",
    "pron": "'mançmaːl",
    "example_de": "Manchmal gehe ich ins Kino.",
    "example_uz": "Ba'zan kinoga boraman."
  },
  {
    "de": "der Tag",
    "uz": "kun",
    "type": "noun",
    "pron": "deːɐ taːk",
    "example_de": "Der Tag beginnt früh für mich.",
    "example_uz": "Men uchun kun erta boshlanadi."
  },
  {
    "de": "die Woche",
    "uz": "hafta",
    "type": "noun",
    "pron": "diː 'vɔxə",
    "example_de": "Diese Woche bin ich sehr beschäftigt.",
    "example_uz": "Bu hafta men juda band bo'ldim."
  },
  {
    "de": "der Monat",
    "uz": "oy",
    "type": "noun",
    "pron": "deːɐ 'moːnat",
    "example_de": "Dieser Monat ist sehr kalt.",
    "example_uz": "Bu oy juda sovuq."
  },
  {
    "de": "das Jahr",
    "uz": "yil",
    "type": "noun",
    "pron": "das jaːɐ",
    "example_de": "Dieses Jahr fahre ich nach Deutschland.",
    "example_uz": "Bu yil men Germaniyaga boraman."
  },
  {
    "de": "der Arzt",
    "uz": "shifokor",
    "type": "noun",
    "pron": "deːɐ aːrtst",
    "example_de": "Der Arzt untersucht den Patienten.",
    "example_uz": "Shifokor bemorni ko'rikdan o'tkazmoqda."
  },
  {
    "de": "der Lehrer",
    "uz": "o'qituvchi",
    "type": "noun",
    "pron": "deːɐ 'leːrɐ",
    "example_de": "Der Lehrer erklärt die Grammatik.",
    "example_uz": "O'qituvchi grammatikani tushuntiryapti."
  },
  {
    "de": "der Ingenieur",
    "uz": "muhandis",
    "type": "noun",
    "pron": "deːɐ ɪnʒe'njøːɐ",
    "example_de": "Der Ingenieur baut eine neue Brücke.",
    "example_uz": "Muhandis yangi ko'prik quryapti."
  },
  {
    "de": "der Student",
    "uz": "talaba",
    "type": "noun",
    "pron": "deːɐ ʃtu'dɛnt",
    "example_de": "Der Student lernt fleißig für die Prüfung.",
    "example_uz": "Talaba imtihonga qattiq tayyorlanmoqda."
  },
  {
    "de": "der Koch",
    "uz": "oshpaz",
    "type": "noun",
    "pron": "deːɐ kɔx",
    "example_de": "Der Koch bereitet das Abendessen vor.",
    "example_uz": "Oshpaz kechki ovqatni tayyorlamoqda."
  },
  {
    "de": "der Programmierer",
    "uz": "dasturchi",
    "type": "noun",
    "pron": "deːɐ prɔgramɪ'rɐ",
    "example_de": "Der Programmierer schreibt einen neuen Code.",
    "example_uz": "Dasturchi yangi kod yozmoqda."
  },
  {
    "de": "das Auto",
    "uz": "mashina / avtomobil",
    "type": "noun",
    "pron": "das 'aʊtoː",
    "example_de": "Mein Auto ist kaputt.",
    "example_uz": "Mening mashinam ishlamayapti."
  },
  {
    "de": "der Bus",
    "uz": "avtobus",
    "type": "noun",
    "pron": "deːɐ bʊs",
    "example_de": "Ich fahre mit dem Bus zur Arbeit.",
    "example_uz": "Men ish joyiga avtobusda boraman."
  },
  {
    "de": "der Zug",
    "uz": "poyezd",
    "type": "noun",
    "pron": "deːɐ tsuːk",
    "example_de": "Der Zug fährt um 10 Uhr ab.",
    "example_uz": "Poyezd soat 10 da jo'naydi."
  },
  {
    "de": "das Flugzeug",
    "uz": "samolyot",
    "type": "noun",
    "pron": "das 'fluːktsɔɪk",
    "example_de": "Das Flugzeug landet in einer Stunde.",
    "example_uz": "Samolyot bir soatdan keyin qo'nadi."
  },
  {
    "de": "die U-Bahn",
    "uz": "metro",
    "type": "noun",
    "pron": "diː 'uːbaːn",
    "example_de": "In Berlin ist die U-Bahn sehr praktisch.",
    "example_uz": "Berlinda metro juda qulay."
  },
  {
    "de": "die Sonne",
    "uz": "quyosh",
    "type": "noun",
    "pron": "diː 'zɔnə",
    "example_de": "Die Sonne scheint heute sehr hell.",
    "example_uz": "Bugun quyosh juda yorqin porlayapti."
  },
  {
    "de": "der Mond",
    "uz": "oy",
    "type": "noun",
    "pron": "deːɐ moːnt",
    "example_de": "Heute Nacht ist der Mond sehr groß.",
    "example_uz": "Bu kecha oy juda katta."
  },
  {
    "de": "der Regen",
    "uz": "yomg'ir",
    "type": "noun",
    "pron": "deːɐ 'reːgən",
    "example_de": "Im Herbst regnet es oft.",
    "example_uz": "Kuzda ko'p yomg'ir yog'adi."
  },
  {
    "de": "der Schnee",
    "uz": "qor",
    "type": "noun",
    "pron": "deːɐ ʃneː",
    "example_de": "Die Kinder spielen im Schnee.",
    "example_uz": "Bolalar qorda o'ynayapti."
  },
  {
    "de": "der Wind",
    "uz": "shamol",
    "type": "noun",
    "pron": "deːɐ vɪnt",
    "example_de": "Heute weht ein starker Wind.",
    "example_uz": "Bugun kuchli shamol esmoqda."
  },
  {
    "de": "der Berg",
    "uz": "tog'",
    "type": "noun",
    "pron": "deːɐ bɛrk",
    "example_de": "Die Alpen sind sehr hohe Berge.",
    "example_uz": "Alplar juda baland tog'lar."
  },
  {
    "de": "der Fluss",
    "uz": "daryo",
    "type": "noun",
    "pron": "deːɐ flʊs",
    "example_de": "Der Rhein ist ein langer Fluss.",
    "example_uz": "Reyn uzun daryo."
  },
  {
    "de": "das Meer",
    "uz": "dengiz",
    "type": "noun",
    "pron": "das meːɐ",
    "example_de": "Wir verbringen den Urlaub am Meer.",
    "example_uz": "Biz ta'tilni dengiz bo'yida o'tkazamiz."
  },
  {
    "de": "der Hund",
    "uz": "it",
    "type": "noun",
    "pron": "deːɐ hʊnt",
    "example_de": "Mein Hund heißt Max und ist sehr treu.",
    "example_uz": "Mening itim Maks deb ataladi va u juda sodiq."
  },
  {
    "de": "die Katze",
    "uz": "mushuk",
    "type": "noun",
    "pron": "diː 'katsə",
    "example_de": "Die Katze schläft auf dem Sofa.",
    "example_uz": "Mushuk divanda uxlayapti."
  },
  {
    "de": "der Vogel",
    "uz": "qush",
    "type": "noun",
    "pron": "deːɐ 'foːgl",
    "example_de": "Der Vogel singt wunderschön.",
    "example_uz": "Qush ajoyib sayraydi."
  },
  {
    "de": "das Pferd",
    "uz": "ot",
    "type": "noun",
    "pron": "das pfɛrt",
    "example_de": "Das Pferd läuft schnell über das Feld.",
    "example_uz": "Ot dalada tez yugurmoqda."
  },
  {
    "de": "der Löwe",
    "uz": "sher",
    "type": "noun",
    "pron": "deːɐ 'løːvə",
    "example_de": "Der Löwe ist der König der Tiere.",
    "example_uz": "Sher hayvonlar shohi."
  },
  {
    "de": "die Gesundheit",
    "uz": "sog'liq",
    "type": "noun",
    "pron": "diː gə'zunthait",
    "example_de": "Gesundheit ist das Wichtigste im Leben.",
    "example_uz": "Sog'liq hayotdagi eng muhim narsa."
  },
  {
    "de": "die Krankheit",
    "uz": "kasallik",
    "type": "noun",
    "pron": "diː 'kraŋkhait",
    "example_de": "Die Krankheit dauert schon eine Woche.",
    "example_uz": "Kasallik allaqachon bir hafta davom etmoqda."
  },
  {
    "de": "das Medikament",
    "uz": "dori",
    "type": "noun",
    "pron": "das medika'mɛnt",
    "example_de": "Der Arzt hat mir ein Medikament verschrieben.",
    "example_uz": "Shifokor menga dori yozib berdi."
  },
  {
    "de": "das Fieber",
    "uz": "isitma",
    "type": "noun",
    "pron": "das 'fiːbɐ",
    "example_de": "Das Kind hat hohes Fieber.",
    "example_uz": "Bolaning isitmasi baland."
  },
  {
    "de": "das Buch",
    "uz": "kitob",
    "type": "noun",
    "pron": "das buːx",
    "example_de": "Dieses Buch ist sehr interessant.",
    "example_uz": "Bu kitob juda qiziqarli."
  },
  {
    "de": "das Heft",
    "uz": "daftar",
    "type": "noun",
    "pron": "das hɛft",
    "example_de": "Ich schreibe in mein Heft.",
    "example_uz": "Men daftarimga yozaman."
  },
  {
    "de": "der Stift",
    "uz": "qalam",
    "type": "noun",
    "pron": "deːɐ ʃtɪft",
    "example_de": "Hast du einen Stift für mich?",
    "example_uz": "Mening uchun qalamingiz bormi?"
  },
  {
    "de": "die Hausaufgabe",
    "uz": "uy vazifasi",
    "type": "noun",
    "pron": "diː 'haʊsaʊfgaːbə",
    "example_de": "Ich mache meine Hausaufgaben nach der Schule.",
    "example_uz": "Men maktabdan keyin uy vazifasini qilaman."
  },
  {
    "de": "die Prüfung",
    "uz": "imtihon",
    "type": "noun",
    "pron": "diː 'pryːfʊŋ",
    "example_de": "Morgen habe ich eine wichtige Prüfung.",
    "example_uz": "Ertaga mening muhim imtiyazim bor."
  },
  {
    "de": "die Mathematik",
    "uz": "matematika",
    "type": "noun",
    "pron": "diː matema'tiːk",
    "example_de": "Mathematik ist mein Lieblingsfach.",
    "example_uz": "Matematika mening sevimli fаnim."
  },
  {
    "de": "Guten Morgen",
    "uz": "Xayrli tong",
    "type": "phrase",
    "pron": "'guːtn 'mɔrgn",
    "example_de": "Guten Morgen! Wie hast du geschlafen?",
    "example_uz": "Xayrli tong! Qanday uxlading?"
  },
  {
    "de": "Guten Tag",
    "uz": "Xayrli kun",
    "type": "phrase",
    "pron": "'guːtn taːk",
    "example_de": "Guten Tag! Kann ich Ihnen helfen?",
    "example_uz": "Xayrli kun! Sizga yordam bera olamanmi?"
  },
  {
    "de": "Guten Abend",
    "uz": "Xayrli kech",
    "type": "phrase",
    "pron": "'guːtn 'aːbnt",
    "example_de": "Guten Abend! Willkommen bei uns.",
    "example_uz": "Xayrli kech! Bizga xush kelibsiz."
  },
  {
    "de": "Auf Wiedersehen",
    "uz": "Xayr / Ko'rishguncha",
    "type": "phrase",
    "pron": "aʊf 'viːdɐzeːən",
    "example_de": "Auf Wiedersehen! Bis morgen!",
    "example_uz": "Xayr! Ertaga ko'rishguncha!"
  },
  {
    "de": "Danke schön",
    "uz": "Katta rahmat",
    "type": "phrase",
    "pron": "'daŋkə ʃøːn",
    "example_de": "Danke schön für Ihre Hilfe!",
    "example_uz": "Yordamingiz uchun katta rahmat!"
  },
  {
    "de": "Entschuldigung",
    "uz": "Kechirasiz / Uzr",
    "type": "phrase",
    "pron": "ɛnt'ʃʊldɪgʊŋ",
    "example_de": "Entschuldigung, wo ist der Bahnhof?",
    "example_uz": "Kechirasiz, temir yo'l stantsiyasi qayerda?"
  },
  {
    "de": "Es tut mir leid",
    "uz": "Kechirasiz / Afsusdaman",
    "type": "phrase",
    "pron": "ɛs tuːt miːɐ laɪt",
    "example_de": "Es tut mir leid, ich bin zu spät.",
    "example_uz": "Kechirasiz, men kechikdim."
  },
  {
    "de": "Wie geht es Ihnen?",
    "uz": "Qandaysiz? (rasmiy)",
    "type": "phrase",
    "pron": "viː geːt ɛs 'iːnən",
    "example_de": "Guten Tag, wie geht es Ihnen heute?",
    "example_uz": "Xayrli kun, bugun qandaysiz?"
  },
  {
    "de": "Mir geht es gut",
    "uz": "Men yaxshiman",
    "type": "phrase",
    "pron": "miːɐ geːt ɛs guːt",
    "example_de": "Danke, mir geht es gut. Und Ihnen?",
    "example_uz": "Rahmat, men yaxshiman. Siz-chi?"
  },
  {
    "de": "Wie viel kostet das?",
    "uz": "Bu qancha turadi?",
    "type": "phrase",
    "pron": "viː fiːl 'kɔstət das",
    "example_de": "Entschuldigung, wie viel kostet das Hemd?",
    "example_uz": "Kechirasiz, bu ko'ylak qancha turadi?"
  },
  {
    "de": "Ich verstehe nicht",
    "uz": "Men tushunmadim",
    "type": "phrase",
    "pron": "ɪç fɛɐ'ʃteːə nɪçt",
    "example_de": "Ich verstehe nicht. Können Sie das bitte wiederholen?",
    "example_uz": "Men tushunmadim. Iltimos, qaytaring."
  },
  {
    "de": "Sprechen Sie Deutsch?",
    "uz": "Nemis tilini bilasizmi?",
    "type": "phrase",
    "pron": "'ʃprɛçn ziː dɔɪtʃ",
    "example_de": "Sprechen Sie Deutsch? Ich lerne es gerade.",
    "example_uz": "Nemis tilini bilasizmi? Men hozir uni o'rganmoqdaman."
  },
  {
    "de": "Viel Erfolg!",
    "uz": "Omad tilayman!",
    "type": "phrase",
    "pron": "fiːl ɛɐ'fɔlk",
    "example_de": "Viel Erfolg bei der Prüfung morgen!",
    "example_uz": "Ertangi imtihonda omad tilayman!"
  },
  {
    "de": "Herzlichen Glückwunsch!",
    "uz": "Tabriklayman!",
    "type": "phrase",
    "pron": "'hɛrtslɪçən 'glykˌvʊnʃ",
    "example_de": "Herzlichen Glückwunsch zum Geburtstag!",
    "example_uz": "Tug'ilgan kuning bilan tabriklayman!"
  },
  {
    "de": "Den Nagel auf den Kopf treffen",
    "uz": "To'g'ri maqsadga urmoq",
    "type": "idiom",
    "pron": "deːn 'naːgl aʊf deːn kɔpf 'trɛfn",
    "example_de": "Mit seiner Aussage hat er den Nagel auf den Kopf getroffen.",
    "example_uz": "U o'z gapi bilan to'g'ri maqsadga urdi."
  },
  {
    "de": "Das ist nicht mein Bier",
    "uz": "Bu mening ishim emas",
    "type": "idiom",
    "pron": "das ɪst nɪçt maɪn biːɐ",
    "example_de": "Die Politik interessiert mich nicht — das ist nicht mein Bier.",
    "example_uz": "Siyosat meni qiziqtirmaydi — bu mening ishim emas."
  },
  {
    "de": "Ich drücke dir die Daumen",
    "uz": "Omad tilayman",
    "type": "idiom",
    "pron": "ɪç 'drykə diːɐ diː 'daʊmən",
    "example_de": "Ich drücke dir die Daumen bei deiner Prüfung!",
    "example_uz": "Imtihonida seni qo'llab-quvvatlayman!"
  },
  {
    "de": "Zeit ist Geld",
    "uz": "Vaqt — pul",
    "type": "idiom",
    "pron": "tsaɪt ɪst gɛlt",
    "example_de": "Beeil dich! Zeit ist Geld.",
    "example_uz": "Tezroq bo'l! Vaqt — bu pul."
  },
  {
    "de": "Morgenstund hat Gold im Mund",
    "uz": "Erta turgan oltin topar",
    "type": "idiom",
    "pron": "'mɔrgənʃtʊnt hat gɔlt ɪm mʊnt",
    "example_de": "Morgenstund hat Gold im Mund — deshalb stehe ich früh auf.",
    "example_uz": "Erta turgan oltin topar — shuning uchun erta turaman."
  },
  {
    "de": "Übung macht den Meister",
    "uz": "Mashq ustani shakllantiradi",
    "type": "idiom",
    "pron": "'yːbʊŋ maxt deːn 'maɪstɐ",
    "example_de": "Übe täglich Klavier — Übung macht den Meister.",
    "example_uz": "Har kuni pianino ijro et — mashq ustani shakllantiradi."
  },
  {
    "de": "Ende gut, alles gut",
    "uz": "Oxiri yaxshi bo'lsa hammasi yaxshi",
    "type": "idiom",
    "pron": "'ɛndə guːt 'aləs guːt",
    "example_de": "Wir hatten Probleme, aber Ende gut, alles gut!",
    "example_uz": "Muammolar bo'ldi, lekin oxiri yaxshi bo'lsa hammasi yaxshi!"
  },
  {
    "de": "Lügen haben kurze Beine",
    "uz": "Yolg'onning oyog'i qisqa",
    "type": "idiom",
    "pron": "'lyːgn 'haːbn 'kʊrtsə 'baɪnə",
    "example_de": "Du kannst mich nicht täuschen — Lügen haben kurze Beine.",
    "example_uz": "Meni aldolmaysan — yolg'onning oyog'i qisqa."
  },
  {
    "de": "Das ist mir Wurst",
    "uz": "Menga baribir",
    "type": "idiom",
    "pron": "das ɪst miːɐ vʊrst",
    "example_de": "Ob wir ins Kino oder ins Theater gehen — das ist mir Wurst.",
    "example_uz": "Kinoga borish yoki teatrga — menga baribir."
  },
  {
    "de": "Die Katze aus dem Sack lassen",
    "uz": "Sirni fosh qilmoq",
    "type": "idiom",
    "pron": "diː 'katsə aʊs deːm zak 'lasn",
    "example_de": "Endlich hat er die Katze aus dem Sack gelassen.",
    "example_uz": "Nihoyat u sirni fosh qildi."
  },
  {
    "de": "Schwein haben",
    "uz": "Omad qilmoq",
    "type": "idiom",
    "pron": "ʃvaɪn 'haːbn",
    "example_de": "Du hast wirklich Schwein gehabt, dass du den Zug nicht verpasst hast.",
    "example_uz": "Poyezdni o'tkazib yubormaging — omad qilding."
  },
  {
    "de": "Tomaten auf den Augen haben",
    "uz": "Ko'rinib turgan narsani ko'rmaslik",
    "type": "idiom",
    "pron": "to'maːtn aʊf deːn 'aʊgn 'haːbn",
    "example_de": "Hast du Tomaten auf den Augen? Der Fehler liegt direkt vor dir!",
    "example_uz": "Ko'rmayapsanmi? Xato to'g'ridan to'g'ri oldingda turibdi!"
  },
  {
    "de": "Aus den Augen, aus dem Sinn",
    "uz": "Ko'zdan uzoq — ko'ngildan uzoq",
    "type": "idiom",
    "pron": "aʊs deːn 'aʊgn aʊs deːm zɪn",
    "example_de": "Seit er weggezogen ist, haben wir kaum Kontakt — aus den Augen, aus dem Sinn.",
    "example_uz": "U ko'chib ketgandan beri aloqa yo'q — ko'zdan uzoq, ko'ngildan uzoq."
  },
  {
    "de": "Aller Anfang ist schwer",
    "uz": "Har qanday ishning boshi qiyin",
    "type": "idiom",
    "pron": "'alɐ 'anfaŋ ɪst ʃveːɐ",
    "example_de": "Das Deutschlernen fällt dir schwer? Aller Anfang ist schwer!",
    "example_uz": "Nemis tili qiyin ko'rinyadimi? Har qanday ishning boshi qiyin!"
  },
  {
    "de": "ich",
    "uz": "men",
    "type": "pronoun",
    "pron": "ɪç",
    "example_de": "Ich lerne Deutsch.",
    "example_uz": "Men nemis tilini o'rganaman."
  },
  {
    "de": "du",
    "uz": "sen",
    "type": "pronoun",
    "pron": "duː",
    "example_de": "Du sprichst sehr gut Deutsch.",
    "example_uz": "Sen nemis tilida juda yaxshi gapirasan."
  },
  {
    "de": "er",
    "uz": "u (erkak)",
    "type": "pronoun",
    "pron": "eːɐ",
    "example_de": "Er kommt morgen nach Hause.",
    "example_uz": "U ertaga uyga keladi."
  },
  {
    "de": "sie",
    "uz": "u (ayol) / ular",
    "type": "pronoun",
    "pron": "ziː",
    "example_de": "Sie ist sehr klug.",
    "example_uz": "U juda aqlli."
  },
  {
    "de": "wir",
    "uz": "biz",
    "type": "pronoun",
    "pron": "viːɐ",
    "example_de": "Wir gehen zusammen ins Kino.",
    "example_uz": "Biz birga kinoga boramiz."
  },
  {
    "de": "und",
    "uz": "va",
    "type": "conjunction",
    "pron": "ʊnt",
    "example_de": "Ich mag Tee und Kaffee.",
    "example_uz": "Men choy va qahvani yaxshi ko'raman."
  },
  {
    "de": "oder",
    "uz": "yoki",
    "type": "conjunction",
    "pron": "'oːdɐ",
    "example_de": "Möchtest du Tee oder Kaffee?",
    "example_uz": "Choy yoki qahva ichmoqchimisan?"
  },
  {
    "de": "aber",
    "uz": "lekin / ammo",
    "type": "conjunction",
    "pron": "'aːbɐ",
    "example_de": "Ich mag Fisch, aber nicht Fleisch.",
    "example_uz": "Men baliqni yaxshi ko'raman, lekin go'shtni emas."
  },
  {
    "de": "weil",
    "uz": "chunki",
    "type": "conjunction",
    "pron": "vaɪl",
    "example_de": "Ich bleibe heute zu Hause, weil ich krank bin.",
    "example_uz": "Bugun uyda qolaman, chunki kasalman."
  },
  {
    "de": "wenn",
    "uz": "agar / qachon",
    "type": "conjunction",
    "pron": "vɛn",
    "example_de": "Wenn du Zeit hast, ruf mich an.",
    "example_uz": "Agar vaqting bo'lsa, menga qo'ng'iroq qil."
  },
  {
    "de": "in",
    "uz": "ichida / da",
    "type": "preposition",
    "pron": "ɪn",
    "example_de": "Das Buch liegt in der Tasche.",
    "example_uz": "Kitob sumkaning ichida."
  },
  {
    "de": "auf",
    "uz": "ustida",
    "type": "preposition",
    "pron": "aʊf",
    "example_de": "Die Tasse steht auf dem Tisch.",
    "example_uz": "Piyola stolning ustida turibdi."
  },
  {
    "de": "mit",
    "uz": "bilan",
    "type": "preposition",
    "pron": "mɪt",
    "example_de": "Ich fahre mit dem Bus zur Arbeit.",
    "example_uz": "Men ish joyiga avtobus bilan boraman."
  },
  {
    "de": "für",
    "uz": "uchun",
    "type": "preposition",
    "pron": "fyːɐ",
    "example_de": "Dieses Geschenk ist für dich.",
    "example_uz": "Bu sovg'a sen uchun."
  },
  {
    "de": "von",
    "uz": "dan / haqida",
    "type": "preposition",
    "pron": "fɔn",
    "example_de": "Ich komme von der Arbeit.",
    "example_uz": "Men ishdan kelmoqdaman."
  },
  {
    "de": "nach",
    "uz": "keyin / ga tomon",
    "type": "preposition",
    "pron": "naːx",
    "example_de": "Nach der Schule gehe ich nach Hause.",
    "example_uz": "Maktabdan keyin uyga boraman."
  },
  {
    "de": "bei",
    "uz": "yonida / paytida",
    "type": "preposition",
    "pron": "baɪ",
    "example_de": "Ich wohne bei meinen Eltern.",
    "example_uz": "Men ota-onam yonida yashayman."
  },
  {
    "de": "ohne",
    "uz": "siz / holda",
    "type": "preposition",
    "pron": "'oːnə",
    "example_de": "Ich kann nicht ohne dich leben.",
    "example_uz": "Men sensiz yashay olmayman."
  },
  {
    "de": "eins",
    "uz": "bir",
    "type": "number",
    "pron": "aɪns",
    "example_de": "Ich habe nur einen Bruder.",
    "example_uz": "Mening bitta akam bor."
  },
  {
    "de": "zwei",
    "uz": "ikki",
    "type": "number",
    "pron": "tsvaɪ",
    "example_de": "Wir haben zwei Katzen zu Hause.",
    "example_uz": "Bizda uyda ikkita mushuk bor."
  },
  {
    "de": "drei",
    "uz": "uch",
    "type": "number",
    "pron": "draɪ",
    "example_de": "Ich brauche drei Eier für den Kuchen.",
    "example_uz": "Pirog uchun uchta tuxum kerak."
  },
  {
    "de": "zehn",
    "uz": "o'n",
    "type": "number",
    "pron": "tseːn",
    "example_de": "Ich warte seit zehn Minuten.",
    "example_uz": "Men o'n daqiqadan beri kutmoqdaman."
  },
  {
    "de": "hundert",
    "uz": "yuz",
    "type": "number",
    "pron": "'hʊndɐt",
    "example_de": "Das kostet hundert Euro.",
    "example_uz": "Bu yuz evro turadi."
  }
];
