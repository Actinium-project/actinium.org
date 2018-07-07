

$(function() {

  var t = {
    language: {
      en: "Language",
      es: "Idioma",
      rs: " "
    },
    language_en: {
      en: "English",
      es: "Inglés",
      rs: " "
    },
    language_es: {
      en: "Spanish",
      es: "Español",
      rs: " "
    },
    language_rs: {
      en: "Serbian",
      es: "Serbio",
      rs: " "
    },
    home: {
      en: "Home",
      es: "Inicio",
      rs: " "
    },
    roadmap: {
      en: "Roadmap",
      es: "Hoja de ruta",
      rs: " "
    },
    team: {
      en: "Team",
      es: "Equipo",
      rs: " "
    },
    community: {
      en: "Community",
      es: "Comunidad",
      rs: " "
    },
    price_block: {
      en: "Price",
      es: "Precio",
      rs: " "
    },
    section_logo_text: {
      en: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#No ICO&nbsp;&nbsp;&nbsp;&nbsp;#No Premine&nbsp;&nbsp;&nbsp;&nbsp;#No Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Fair Launch",
      es: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#Sin ICO&nbsp;&nbsp;&nbsp;&nbsp;#Sin Preminado&nbsp;&nbsp;&nbsp;&nbsp;#Sin Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Lanzamiento justo",
      rs: " "
    },
    marketcap_block: {
      en: "Market Cap",
      es: "Capitalización de mercado",
      rs: " "
    },
    currentsupply_block: {
      en: "Current supply",
      es: "Suministro actual",
      rs: " "
    },
    hashrate_block: {
      en: "Hashrate",
      es: "Tasa de hash",
      rs: " "
    },
    about: {
      en: "About",
      es: "Acerca de",
      rs: " "
    },
    about_desc_1: {
      en: "Actinium is more than a crypto currency.<br><br>Actinium is a <b>decentralized currency built on blockchain technology</b> that aims to help bring crypto into every customer’s pocket, every store, and be extraordinarily safe and easy to use.<br><br>This can be achieved because <b>Actinium is a Lightning Network supported coin</b> that will allow <b>instant transactions with near-zero fees, atomic swaps, and many of the numerous other 2nd Layer solutions.</b>",
      es: "Actinium es más que una criptomoneda.<br><br>Actinium es una <b>moneda descentralizada basada en la tecnología blockchain</b> que tiene como objetivo ayudar a llevar las criptomonedas al bolsillo de cada cliente, a cada tienda y ser extraordinariamente seguro y fácil de usar.<br><br>Esto se puede lograr porque <b>Actinium es una moneda admitida por Lightning Network</b> que permitirá <b>transacciones instantáneas con tarifas casi nulas, swaps atómicos y muchas de las numerosas soluciones de 2ª capa.</b>",
      rs: " "
    },
    about_desc_2: {
      en: "Actinium is completely decentralized without premine and is not an ICO. <b>It has proper mining support, mobile wallets, and hardware wallet integration.</b><br><br>Actinium has all the needed features already activated to achieve Lightning Network compatibility.<br><br>Actinium will not remain a blockchain-only cryptocurrency. <b>The inevitable progress will deliver competing solutions to many problems on different layers.</b>",
      es: "Actinium está completamente descentralizado sin preminado y no es una ICO. <b>Tiene soporte de minería adecuado, carteras móviles e integración de carteras de hardware.</b><br><br>Actinium tiene todas las características necesarias ya activadas para lograr la compatibilidad de Lightning Network.<br><br>Actinium no seguirá siendo una criptomoneda de blockchain. <b>El progreso inevitable ofrecerá soluciones competitivas para muchos problemas en diferentes capas.</b>",
      rs: " "
    },
    wallets: {
      en: "Wallets",
      es: "Carteras",
      rs: " "
    },
    wallets_desc: {
      en: "Download Actinium for any platform",
      es: "Descarga Actinium para cualquier plataforma",
      rs: " "
    },
    pools: {
      en: "Mining pools",
      es: "Piscinas de minado",
      rs: " "
    },
    pools_desc: {
      en: "Select a pool and start mining",
      es: "Selecciona una piscina y comienza a minar",
      rs: " "
    },
    official_button: {
      en: "Official",
      es: "Oficial",
      rs: " "
    },
    explorer_button: {
      en: "Explorer",
      es: "Explorador",
      rs: " "
    },
    miners: {
      en: "Miners",
      es: "Mineros",
      rs: " "
    },
    miners_desc: {
      en: "Download a miner for your GPU architecture",
      es: "Descargue el minero según la arquitectura de su GPU",
      rs: " "
    },
    how_to_gpu_amd_01: {
      en: "Create a .bat file inside the miner directory and add this parameters:",
      es: "Crea un archivo .bat dentro del directorio del minero y añade estos parámetros:",
      rs: " "
    },
    how_to_gpu_amd_02: {
      en: "You can download sgMiner for AMD GPU in the next link:",
      es: "Puedes descargar sgMiner para GPUs AMD en el siguiente enlace:",
      rs: " "
    },
    how_to_gpu_nvidia_01: {
      en: "Create a .bat file inside the miner directory and add this parameters:",
      es: "Crea un archivo .bat dentro del directorio del minero y añade estos parámetros:",
      rs: " "
    },
    how_to_gpu_nvidia_02: {
      en: "You can download sgMiner for NVIDIA GPU in the next link:",
      es: "Puedes descargar sgMiner para GPUs NVIDIA en el siguiente enlace:",
      rs: " "
    },
    how_to_code_miner: {
      en: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u YOURADDRESS -p c=ACM -I 10",
      es: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u TUDIRECCIÓN -p c=ACM -I 10",
      rs: " "
    },
    other_links: {
      en: "Other links",
      es: "Otros enlaces",
      rs: " "
    },
    other_links_desc: {
      en: "Discover more about Actinium",
      es: "Descubre más sobre Actinium",
      rs: " "
    },
    desktop_wallets: {
      en: "Desktop Wallets",
      es: "Carteras de escritorio",
      rs: " "
    },
    finish_q1: {
      en: "Finished Q1 2018",
      es: "Finalizado Q1 2018 ",
      rs: " "
    },
    progress: {
      en: "Progress...",
      es: "Progreso...",
      rs: " "
    },
    smartphone_wallets: {
      en: "Smartphone Wallets",
      es: "Carteras para móvil",
      rs: " "
    },
    going_q2: {
      en: "On going Q2 2018",
      es: "Estimado para Q2 2018",
      rs: " "
    },
    going_q3: {
      en: "On going Q3 2018",
      es: "Estimado para Q3 2018",
      rs: " "
    },
    ledger_nano: {
      en: "Ledger Nano",
      es: "Ledger Nano",
      rs: " "
    },
    ledger_nano_progress: {
      en: "Ledger Nano progress...",
      es: "Desarrollo para Ledger Nano...",
      rs: " "
    },
    ledger_nano_screenshot: {
      en: "Take a look!",
      es: "¡Échale un vistazo!",
      rs: " "
    },
    lightning_network: {
      en: "Lightning Network",
      es: "Lightning Network",
      rs: " "
    },
    testing: {
      en: "Testing!",
      es: "¡En pruebas!",
      rs: " "
    },
    exchanges: {
      en: "Exchanges",
      es: "Casas de intercambio",
      rs: " "
    },
    exchanges_desc: {
      en: "Trade your Actinium",
      es: "Intercambia tus Actinium",
      rs: " "
    },
    team: {
      en: "Team",
      es: "Equipo",
      rs: " "
    },
    team_desc: {
      en: "Unlike many other altcoins <b>we are not anonymous.</b><br><br>We think that investors have a right to know the people representing the coin. Yes, the standard excuse is very often <i>'But Satoshi never revealed himself'</i>.<br><br>However, unlike us, who are building things based on Bitcoin's original code, Satoshi created something extraordinary and he/she/they had every right to remain hidden.",
      es: "A diferencia de muchas otras altcoins, <b>no somos anónimos.</b><br><br>Creemos que los inversores tienen derecho a conocer a las personas que representan la moneda. Sí, la excusa estándar es muy a menudo <i>'Pero Satoshi nunca se reveló a sí mismo'.</i><br><br>Sin embargo, a diferencia de nosotros, que estamos construyendo cosas basadas en el código original de Bitcoin, Satoshi creó algo extraordinario y él/ella/ellos tenían todo el derecho a permanecer ocultos.",
      rs: " "
    },
    harris_sub: {
      en: "Founder - Software developer",
      es: "Fundador - Desarrollador de software",
      rs: " "
    },
    harris_desc: {
      en: "Software Developer 🤖",
      es: "Desarrollador de software 🤖",
      rs: " "
    },
    pablo_sub: {
      en: "Web Designer",
      es: "Diseñador Web",
      rs: " "
    },
    pablo_desc: {
      en: "I came here when this was still an experiment. Fan of 360º photography and cats lover (I have 12)... 😹",
      es: "Llegué aquí cuando todo esto era aún un experimento. Fan de la fotografía en 360º y amante de los gatos (Tengo 12)... 😹",
      rs: " "
    },
    copyright: {
      en: "Copyrights &copy; 2018 All Rights Reserved by The Actinium Project.",
      es: "Copyrights &copy; 2018 Todos los Derechos Reservados por El Proyecto Actinium.",
      rs: " "
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
