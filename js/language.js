

$(function() {

  var t = {
    nav_language: {
      en: "Language",
      es: "Idioma",
      rs: "Jezik"
    },
    nav_language_english: {
      en: "English",
      es: "Inglés",
      rs: "Engleski"
    },
    nav_language_spanish: {
      en: "Spanish",
      es: "Español",
      rs: "Španski"
    },
    nav_language_serbian: {
      en: "Serbian",
      es: "Serbio",
      rs: "Srpski"
    },
    nav_home: {
      en: "Home",
      es: "Inicio",
      rs: "Početna"
    },
    nav_wallets: {
      en: "Wallets",
      es: "Carteras",
      rs: "Novčanici"
    },
    nav_roadmap: {
      en: "Roadmap",
      es: "Hoja de ruta",
      rs: "Planovi za budućnost"
    },
    nav_exchanges: {
      en: "Exchanges",
      es: "Casas de intercambio",
      rs: "Menjačnice",
    },
    nav_team: {
      en: "Team",
      es: "Equipo",
      rs: "Tim"
    },
    nav_community: {
      en: "Community",
      es: "Comunidad",
      rs: "Zajednica"
    },
    price_block: {
      en: "Price",
      es: "Precio",
      rs: "Cena"
    },
    section_logo_text: {
      en: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#No ICO&nbsp;&nbsp;&nbsp;&nbsp;#No Premine&nbsp;&nbsp;&nbsp;&nbsp;#No Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Fair Launch",
      es: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#Sin ICO&nbsp;&nbsp;&nbsp;&nbsp;#Sin Preminado&nbsp;&nbsp;&nbsp;&nbsp;#Sin Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Lanzamiento justo",
      rs: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#Nema ICO&nbsp;&nbsp;&nbsp;&nbsp;#Nema Premine-a&nbsp;&nbsp;&nbsp;&nbsp;#Nema Airdropova&nbsp;&nbsp;&nbsp;&nbsp;#Fer pokretanje"
    },
    marketcap_block: {
      en: "Market Cap",
      es: "Capitalización de mercado",
      rs: "Ukupna kapitalizacija"
    },
    currentsupply_block: {
      en: "Current supply",
      es: "Suministro actual",
      rs: "Trenutni broj novčića"
    },
    hashrate_block: {
      en: "Hashrate",
      es: "Tasa de hash",
      rs: "Hashrate"
    },
    about: {
      en: "About",
      es: "Acerca de",
      rs: "O nama"
    },
    about_desc_1: {
      en: "Actinium is more than a crypto currency.<br><br>Actinium is a <b>decentralized currency built on blockchain technology</b> that aims to help bring crypto into every customer’s pocket, every store, and be extraordinarily safe and easy to use.<br><br>This can be achieved because <b>Actinium is a Lightning Network supported coin</b> that will allow <b>instant transactions with near-zero fees, atomic swaps, and many of the numerous other 2nd Layer solutions.</b>",
      es: "Actinium es más que una criptomoneda.<br><br>Actinium es una <b>moneda descentralizada basada en la tecnología blockchain</b> que tiene como objetivo ayudar a llevar las criptomonedas al bolsillo de cada cliente, a cada tienda y ser extraordinariamente seguro y fácil de usar.<br><br>Esto se puede lograr porque <b>Actinium es una moneda admitida por Lightning Network</b> que permitirá <b>transacciones instantáneas con tarifas casi nulas, swaps atómicos y muchas de las numerosas soluciones de 2ª capa.</b>",
      rs: "Aktinijum je mnogo više od kriptovalute.<br><br>Aktinijum je <b>decentralizovana valuta, izgradjena na blokčejn tehnologiji</b> koja za cilj ima da učini kripto dostupnim svakom pojedincu, svakoj prodavnici, kao i da pruži sigurnost i lakoću, prilikom korišćenja.<br><br>Ovo je moguće iz prostog razloga,<b>Aktinijum je novčić koji podržava Lightning Network</b>, protokol koji omogućava instant transakcije, uz izuzetno niske provizije, Atomic Swaps, kao i mnoga druga rešenja, drugog sloja.</b>  "
    },
    about_desc_2: {
      en: "Actinium is completely decentralized without premine and is not an ICO. <b>It has proper mining support, mobile wallets, and hardware wallet integration.</b><br><br>Actinium has all the needed features already activated to achieve Lightning Network compatibility.<br><br>Actinium will not remain a blockchain-only cryptocurrency. <b>The inevitable progress will deliver competing solutions to many problems on different layers.</b>",
      es: "Actinium está completamente descentralizado sin preminado y no es una ICO. <b>Tiene soporte de minería adecuado, carteras móviles e integración de carteras de hardware.</b><br><br>Actinium tiene todas las características necesarias ya activadas para lograr la compatibilidad de Lightning Network.<br><br>Actinium no seguirá siendo una criptomoneda de blockchain. <b>El progreso inevitable ofrecerá soluciones competitivas para muchos problemas en diferentes capas.</b>",
      rs: "Aktinijum je kompletno decentralizovan, bez premine-a i bez ICO-a. <b>Potpuno je podržan od strane rudara, poseduje mobilni i hardverski novčanik.</b><br><br>Sve odlike Aktiniujma su kompatibilne sa Lightning Network-om.<br><br>Aktinijum neće ostati samo blokčejn valuta. <b>Nezaustavljivi napredak donosi konkurentna rešenja za mnoge probleme Drugog nivoa.</b>"
    },
    wallets: {
      en: "Wallets",
      es: "Carteras",
      rs: "Novčanici"
    },
    wallets_desc: {
      en: "Download Actinium for any platform",
      es: "Descarga Actinium para cualquier plataforma",
      rs: "Preuzmite Aktinijum novčanik za bilo koju platformu"
    },
    pools: {
      en: "Mining pools",
      es: "Piscinas de minado",
      rs: "Mining Pools"
    },
    pools_desc: {
      en: "Select a pool and start mining",
      es: "Selecciona una piscina y comienza a minar",
      rs: "Odaberite pool i počnite da rudarite"
    },
    official_button: {
      en: "Official",
      es: "Oficial",
      rs: "Zvanično"
    },
    explorer_button: {
      en: "Explorer",
      es: "Explorador",
      rs: "Explorer"
    },
    miners: {
      en: "Miners",
      es: "Mineros",
      rs: "Rudari"
    },
    miners_desc: {
      en: "Download a miner for your GPU architecture",
      es: "Descargue el minero según la arquitectura de su GPU",
      rs: "Preuzmite majner za svoje GPU"
    },
    how_to_gpu_amd_01: {
      en: "Create a .bat file inside the miner directory and add this parameters:",
      es: "Crea un archivo .bat dentro del directorio del minero y añade estos parámetros:",
      rs: "Napravite .bat fajl unutar majner foldera i dodajte ove parametre:"
    },
    how_to_gpu_amd_02: {
      en: "You can download sgMiner for AMD GPU in the next link:",
      es: "Puedes descargar sgMiner para GPUs AMD en el siguiente enlace:",
      rs: "Možete preuzeti sgMiner za AMD grafičke kartice na sledećem linku:"
    },
    how_to_gpu_nvidia_01: {
      en: "Create a .bat file inside the miner directory and add this parameters:",
      es: "Crea un archivo .bat dentro del directorio del minero y añade estos parámetros:",
      rs: "Napravite .bat fajl unutar majner foldera i dodajte ove parametre:"
    },
    how_to_gpu_nvidia_02: {
      en: "You can download sgMiner for NVIDIA GPU in the next link:",
      es: "Puedes descargar sgMiner para GPUs NVIDIA en el siguiente enlace:",
      rs: "Možete preuzeti sgMiner za NVIDIA grafičke kartice na sledećem linku:"
    },
    how_to_code_miner: {
      en: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u YOURADDRESS -p c=ACM -I 10",
      es: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u TUDIRECCIÓN -p c=ACM -I 10",
      rs: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u YOURADDRESS -p c=ACM -I 10",
    },
    other_links: {
      en: "Other links",
      es: "Otros enlaces",
      rs: "Ostali linkovi"
    },
    other_links_desc: {
      en: "Discover more about Actinium",
      es: "Descubre más sobre Actinium",
      rs: "Otkrijte još o Aktinijumu"
    },
    desktop_wallets: {
      en: "Desktop Wallets",
      es: "Carteras de escritorio",
      rs: "Desktop novčanici"
    },
    finish_q1: {
      en: "Finished Q1 2018",
      es: "Finalizado Q1 2018 ",
      rs: "Završeno u Q1 2018",
    },
    progress: {
      en: "Progress...",
      es: "Progreso...",
      rs: "Napredak..."
    },
    smartphone_wallets: {
      en: "Smartphone Wallets",
      es: "Carteras para móvil",
      rs: "Smartphone novčanici",
    },
    going_q2: {
      en: "On going Q2 2018",
      es: "Estimado para Q2 2018",
      rs: "Planirano u Q2 2018",
    },
    going_q3: {
      en: "On going Q3 2018",
      es: "Estimado para Q3 2018",
      rs: "Planirano u Q3 2018",
    },
    ledger_nano: {
      en: "Ledger Nano",
      es: "Ledger Nano",
      rs: "Ledger Nano",
    },
    ledger_nano_progress: {
      en: "Ledger Nano progress...",
      es: "Desarrollo para Ledger Nano...",
      rs: "Ledger Nano napredak.."
    },
    ledger_nano_screenshot: {
      en: "Take a look!",
      es: "¡Échale un vistazo!",
      rs: "Pogledajte!"
    },
    lightning_network: {
      en: "Lightning Network",
      es: "Lightning Network",
      rs: "Lightning Network",
    },
    testing: {
      en: "Testing!",
      es: "¡En pruebas!",
      rs: "Test faza"
    },
    exchanges: {
      en: "Exchanges",
      es: "Casas de intercambio",
      rs: "Menjačnice",
    },
    exchanges_desc: {
      en: "Trade your Actinium",
      es: "Intercambia tus Actinium",
      rs: "Trgujte Aktinijumom"
    },
    team: {
      en: "Team",
      es: "Equipo",
      rs: "Tim",
    },
    team_desc: {
      en: "Unlike many other altcoins <b>we are not anonymous.</b><br><br>We think that investors have a right to know the people representing the coin. Yes, the standard excuse is very often <i>'But Satoshi never revealed himself'</i>.<br><br>However, unlike us, who are building things based on Bitcoin's original code, Satoshi created something extraordinary and he/she/they had every right to remain hidden.",
      es: "A diferencia de muchas otras altcoins, <b>no somos anónimos.</b><br><br>Creemos que los inversores tienen derecho a conocer a las personas que representan la moneda. Sí, la excusa estándar es muy a menudo <i>'Pero Satoshi nunca se reveló a sí mismo'.</i><br><br>Sin embargo, a diferencia de nosotros, que estamos construyendo cosas basadas en el código original de Bitcoin, Satoshi creó algo extraordinario y él/ella/ellos tenían todo el derecho a permanecer ocultos.",
      rs: "Za razliku od mnogih drugih altcoin-a<b>mi se ne krijemo.</b><br><br>Naše je mišljenje da investitori imaju pravo da znaju ko su ljudi koji stoje iza novčića. Da, najčešći izgovor je <i>'Ali Satoshi nikad nije otkrio svoj identitet'</i>.<br><br>Za razliku od nas, koji gradimo na Bitkoinovom originalnom kodu, Satoshi je napravio nešto zaista izuzetno, i on/ona/oni imaju svako pravo da ostanu anonimni."
    },
    harris_sub: {
      en: "Founder - Software developer",
      es: "Fundador - Desarrollador de software",
      rs: "Osnivač - Softver developer",
    },
    harris_desc: {
      en: "Software Developer 🤖",
      es: "Desarrollador de software 🤖",
      rs: "Softver Developer 🤖"
    },
    pablo_sub: {
      en: "Web Designer",
      es: "Diseñador Web",
      rs: "Web Dizajner"
    },
    pablo_desc: {
      en: "I came here when this was still an experiment. Fan of 360º photography and cats lover (I have 12)... 😹",
      es: "Llegué aquí cuando todo esto era aún un experimento. Fan de la fotografía en 360º y amante de los gatos (Tengo 12)... 😹",
      rs: "Pridružio sam se zajednici još u fazi eksperimenta. Zaljubljenik u 360º fotografije, kao i u mačke(Imam ih 12)...😹"
    },
    copyright: {
      en: "Copyrights &copy; 2018 All Rights Reserved by The Actinium Project.",
      es: "Copyrights &copy; 2018 Todos los Derechos Reservados por El Proyecto Actinium.",
      rs: "Copyrights &copy; 2018 Sva prava zadržava Aktinijum Projekat."
    },

    "JUST THE END, DONT TOUCH AFTER THIS": {
      es: "Dont touch after this"
    }
  };
  var _t = $('body').translate({lang: "en", t: t});
  var str = _t.g("translate");
  console.log(str);


  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    console.log(lang);
    ev.preventDefault();
  });



});
