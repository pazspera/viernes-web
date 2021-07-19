// Arreglo con todas las películas para las cards
const peliculasCards = [
    {
        id: 'outrage',
        nombre: 'Outrage',
        anio: '2010',
        fecha_vista: new Date(2021, 6, 16),
        img_card: 'img/cards/card_outrage.jpg',
        img_card_alt: 'Dos miembros de a Yakuza mirando a cámara y apuntando con un arma',
        link_pagina: 'peliculas/outrage.html',
        pick: 'Geor',
        director: 'Takeshi Kitano',
        duracion: '1h 49min',
    },
    {
        id: 'brick',
        nombre: 'Brick',
        anio: '2005',
        fecha_vista: new Date(2021, 6, 09),
        img_card: 'img/cards/card_brick.jpg',
        img_card_alt: 'Adolescente hablando en una cabina telefónica de noche',
        link_pagina: 'peliculas/brick.html',
        pick: 'Pollo',
        director: 'Rian Johnson',
        duracion: '1h 50min',
    },
    {
        id: 'holy_motors',
        nombre: 'Holy Motors',
        anio: 2012,
        fecha_vista: new Date(2021, 6, 02),
        img_card: 'img/cards/card_holy_motors.jpg',
        img_card_alt: 'Hombre ciego de un ojo parado frente a un grupo de gente',
        link_pagina: 'peliculas/holy_motors.html',
        pick: 'la democracia',
        director: 'Director: Leos Carax',
        duracion: '1h 55min',
    },
    {
        id: 'black_rainbow',
        nombre: 'Beyond the Black Rainbow',
        anio: 2010,
        fecha_vista: new Date(2021, 5, 25),
        img_card: 'img/cards/card_black_rainbow.jpg',
        img_card_alt: 'Hombre caminando en un pasillo con una luz roja de fondo',
        link_pagina: 'peliculas/black_rainbow.html',
        pick: 'Loco',
        director: 'Director: Panos Cosmatos',
        duracion: '1h 50min',
    },
    {
        id: 'rumba',
        nombre: 'Rumba',
        anio: 2008,
        fecha_vista: new Date(2021, 5, 18),
        img_card: 'img/cards/card_rumba.jpg',
        img_card_alt: 'Mujer y hombre bailando en un patio de escuela',
        link_pagina: 'peliculas/rumba.html',
        pick: 'Tutte',
        director: 'Directores: Dominique Abel, Fiona Gordon & Bruno Romy',
        duracion: '1h 17min',
    },
    {
        id: 'ravenous',
        nombre: 'Ravenous',
        anio: 1999,
        fecha_vista: new Date(2021, 5, 11),
        img_card: 'img/cards/card_ravenous.jpg',
        img_card_alt: 'Hombre con ropa manchada de sangre sonriendo en un bosque',
        link_pagina: 'peliculas/ravenous.html',
        pick: 'Paz',
        director: 'Directora: Antonia Bird',
        duracion: '1h 41min',
    },
    {
        id: 'only_lovers',
        nombre: 'Only Lovers Left Alive',
        anio: 2013,
        fecha_vista: new Date(2021, 5, 04),
        img_card: 'img/cards/card_only_lovers.jpg',
        img_card_alt: 'Mujer y hombre mirando a cámara con un mosaico de patrones circulares de fondo',
        link_pagina: 'peliculas/only_lovers.html',
        pick: 'Geor',
        director: 'Director: Jim Jarmusch',
        duracion: '2h 3min',
    },
    {
        id: 'juan_muertos',
        nombre: 'Juan de los muertos',
        anio: 2011,
        fecha_vista: new Date(2021, 4, 28),
        img_card: 'img/cards/card_juan.jpg',
        img_card_alt: 'Hombre agarrado de la cornisa de un balcón y una mujer ayudándolo',
        link_pagina: 'peliculas/juan_muertos.html',
        pick: 'Pollo',
        director: 'Director: Alejandro Brugués',
        duracion: '1h 32min',
    },
    {
        id: 'time_gypsies',
        nombre: 'Time of the Gypsies',
        anio: 1988,
        fecha_vista: new Date(2021, 4, 21),
        img_card: 'img/cards/card_time_gypsies.jpg',
        img_card_alt: 'Grupo de personas mirando un ritual funerio en un río',
        link_pagina: 'peliculas/time_gypsies.html',
        pick: 'Loco',
        director: 'Director: Emir Kusturica',
        duracion: '2h 22min',
    },
    {
        id: 'troll_hunter',
        nombre: 'Troll Hunter',
        anio: 2010,
        fecha_vista: new Date(2021, 4, 15),
        img_card: 'img/cards/card_trollhunter.jpg',
        img_card_alt: 'Hombre en una camioneta iluminando a un troll que sale del bosque',
        link_pagina: 'peliculas/trollhunter.html',
        pick: 'Paz',
        director: 'Director: André Øvredal',
        duracion: '1h 43min',
    },
    {
        id: 'black_sheep',
        nombre: 'Black Sheep',
        anio: 2006,
        fecha_vista: new Date(2021, 4, 14),
        img_card: 'img/cards/card_black_sheep.jpg',
        img_card_alt: 'Taxi rodeado de ovejas, varado en una ruta',
        link_pagina: 'peliculas/black_sheep.html',
        pick: 'Paz',
        director: 'Director: Jonathan King',
        duracion: '1h 27min',
    },
    {
        id: 'suspiria_2018',
        nombre: 'Suspiria',
        anio: 2018,
        fecha_vista: new Date(2021, 4, 8),
        img_card: 'img/cards/card_suspiria_2018.jpg',
        img_card_alt: 'Una mujer mirando a otra desde el umbral de una puerta',
        link_pagina: 'peliculas/suspiria_2018.html',
        pick: 'Paz',
        director: 'Director: Luca Guadagnino',
        duracion: '2h 32min',
    },
    {
        id: 'fantastic_fox',
        nombre: 'Fantastic Mr. Fox',
        anio: 2009,
        fecha_vista: new Date(2021, 3, 30),
        img_card: 'img/cards/card_fantastic_fox.jpg',
        img_card_alt: 'Dos zorritos ladrones asomándose de la tapa de una alcantarilla',
        link_pagina: 'peliculas/fantastic_fox.html',
        pick: 'Geor', 
    },
    {
        id: 'muertos_risa',
        nombre: 'Muertos de risa',
        anio: 1999,
        fecha_vista: new Date(2021, 3, 23) ,
        img_card: 'img/cards/card_muertos_risa.jpg',
        img_card_alt: 'Hombre a punto de darle una cachetada a otro hombre',
        link_pagina: '#',
        pick: 'Pollo', 
    },
    {
        id: 'suspiria_1977',
        nombre: 'Suspiria',
        anio: 1977,
        fecha_vista: new Date(2021, 3, 16),
        img_card: 'img/cards/card_suspiria_1977.jpg',
        img_card_alt: 'Mujer pasando por un pasillo iluminado de rojo y entrando a una habitación',
        link_pagina: 'peliculas/suspiria_1977.html',
        pick: 'Loco',
    },
    {
        id: 'antiviral',
        nombre: 'Antiviral',
        anio: 2012,
        fecha_vista: new Date(2021, 3, 9),
        img_card: 'img/cards/card_antiviral.jpg',
        img_card_alt: 'Hombre mirando con preocupación un tubo de ensayo con sangre',
        link_pagina: 'peliculas/antiviral.html',
        pick: 'Paz', 
    },
    {
        id: 'top_secret',
        nombre: 'Top Secret',
        anio: 1984,
        fecha_vista: new Date (2021, 3, 2),
        img_card: 'img/cards/card_top_secret.jpg',
        img_card_alt: 'Hombre al lado de una ventana con los vidrios rotos',
        link_pagina: '#',
        pick: 'Fede', 
    },
    {
        id: 'snatch',
        nombre: 'Snatch',
        anio: 2000,
        fecha_vista: new Date(2021, 2, 26),
        img_card: 'img/cards/card_snatch.jpg',
        img_card_alt: 'Hombre alentando a boxeador en un ring',
        link_pagina: '#',
        pick: 'Geor',    
    },
    {
        id: 'oldboy',
        nombre: 'Oldboy',
        anio: 2003,
        fecha_vista: new Date(2021, 2, 19),
        img_card: 'img/cards/card_oldboy.jpg',
        img_card_alt: 'Hombre con pelo largo sonriendo extrañamente en una habitación',
        link_pagina: 'peliculas/old_boy.html',
        pick: 'Pollo', 
    },
    {
        id: 'enter_void',
        nombre: 'Enter the Void',
        anio: 2009,
        fecha_vista: new Date(2021, 2, 13),
        img_card: 'img/cards/card_enter_void.jpg',
        img_card_alt: 'Hombre y mujer caminando de espaldas en una tienda con muchas luces de colores',
        link_pagina: 'peliculas/enter_void.html',
        pick: 'Loco', 
    },
    {
        id: 'thx_1138',
        nombre: 'THX 1138',
        anio: 1971,
        fecha_vista: new Date(2021, 2, 5),
        img_card: 'img/cards/card_thx1138.jpg',
        img_card_alt: 'Policias enmascarados golpeando a un hombre con palos en una habitación completamente blanca',
        link_pagina: 'peliculas/thx_1138.html',
        pick: 'Loco', 
    },
    {
        id: 'synecdoque',
        nombre: 'Synecdoque, New York',
        anio: 2008,
        fecha_vista: new Date(2021, 1, 27),
        img_card: 'img/cards/card_synecdoque.jpg',
        img_card_alt: 'Hombre y mujer rodeados de mesas mirando hacia arriba',
        link_pagina: 'peliculas/synecdoche.html',
        pick: 'Geor',
    },
    {
        id: 'labyrinth',
        nombre: 'Labyrinth',
        anio: 1986,
        fecha_vista: new Date(2021, 1, 19),
        img_card: 'img/cards/card_labyrinth.jpg',
        img_card_alt: 'Hombre y mujer bailando en un baile de máscaras',
        link_pagina: '#',
        pick: 'Pauleta', 
    },
    {
        id: 'tale_tales',
        nombre: 'Tale of Tales',
        anio: 2015,
        fecha_vista: new Date(2021, 1, 12),
        img_card: 'img/cards/card_tale_tales.jpg',
        img_card_alt: 'Hombre mirando con una lupa una caja de madera',
        link_pagina: '#',
        pick: 'Paz', 
    },
    {
        id: 'mulholland_drive',
        nombre: 'Mulholland Drive',
        anio: 2001,
        fecha_vista: new Date(2021, 1, 5),
        img_card: 'img/cards/card_mulholland_drive.jpg',
        img_card_alt: 'Dos mujeres escuchando por teléfono con atención',
        link_pagina: '#',
        pick: 'Pollo', 
    },
    {
        id: 'perfect_blue',
        nombre: 'Perfect Blue',
        anio: 1997,
        fecha_vista: new Date(2021, 0, 22),
        img_card: 'img/cards/card_perfect_blue.jpg',
        img_card_alt: 'Reflejo de una mujer en un espejo roto',
        link_pagina: '#',
        pick: 'Geor', 
    },
    {
        id: 'heavy_metal',
        nombre: 'Heavy Metal',
        anio: 1981,
        fecha_vista: new Date(2021, 0, 8),
        img_card: 'img/cards/card_heavy_metal.jpg',
        img_card_alt: 'Hombre con uniforme militar con un robot ovalado flotante a su lado',
        link_pagina: '#',
        pick: 'Markus', 
    },
    {
        id: 'bad_taste',
        nombre: 'Bad Taste',
        anio: 1987,
        fecha_vista: new Date(2020, 11, 12),
        img_card: 'img/cards/card_bad_taste.jpg',
        img_card_alt: 'Grupo de tres extraterrestres caminando por el bosque',
        link_pagina: '#',
        pick: 'Loco', 
    },
    {
        id: 'moon',
        nombre: 'Moon',
        anio: 2009,
        fecha_vista: new Date(2020, 11, 4),
        img_card: 'img/cards/card_moon.jpg',
        img_card_alt: 'Astronauta mirando una máquina con un emoji de carita triste en su pantalla',
        link_pagina: '#',
        pick: 'Paz', 
    },
    {
        id: 'baron',
        nombre: 'The Fabulous Baron Munchausen',
        anio: 1988,
        fecha_vista: new Date(2020, 10, 28),
        img_card: 'img/cards/card_baron.jpg',
        img_card_alt: 'Hombre vestido con uniforme militar antiguo y una niña mirando por la borda de un barco',
        link_pagina: '#',
        pick: 'Geor', 
    },
    {
        id: 'waking_life',
        nombre: 'Waking Life',
        anio: 2001,
        fecha_vista: new Date(2020, 10, 20),
        img_card: 'img/cards/card_waking_life.jpg',
        img_card_alt: 'Dos hombre conversando, uno es una silueta de nubes',
        link_pagina: '',
        pick: 'Pollo', 
    },
    {
        id: 'rocky_horror',
        nombre: 'The Rocky Horror Picture Show',
        anio: 1975,
        fecha_vista: new Date(2020, 10, 13),
        img_card: 'img/cards/card_rocky_horror.jpg',
        img_card_alt: 'Primer plano de hombre mirando con desafío a cámara',
        link_pagina: 'peliculas/rocky_horror.html',
        pick: 'Loco',
    },
    {
        id: 'slacker',
        nombre: 'Slacker',
        anio: 1990,
        fecha_vista: new Date(2020, 10, 6),
        img_card: 'img/cards/card_slacker.jpg',
        img_card_alt: 'Tres personas conversando en la calle',
        link_pagina: '#',
        pick: 'Loco',
    },
    {
        id: 'reanimator',
        nombre: 'Re-Animator',
        anio: 1985,
        fecha_vista: new Date(2020, 9, 30),
        img_card: 'img/cards/card_reanimator.jpg',
        img_card_alt: 'Científico cargando una jeringa con un líquido verde fluorescente',
        link_pagina: '#',
        pick: 'Pollo', 
    },
    {
        id: 'lighthouse',
        nombre: 'The Lighthouse',
        anio: 2019,
        fecha_vista: new Date(2020, 9, 23),
        img_card: 'img/cards/card_lighthouse.jpg',
        img_card_alt: 'Dos marinos mirando al horizonte con un faro de fondo',
        link_pagina: 'peliculas/lighthouse.html',
        pick: 'Paz', 
    },
    {
        id: 'paprika',
        nombre: 'Paprika',
        anio: 2006,
        fecha_vista: new Date(2020, 9, 16),
        img_card: 'img/cards/card_paprika.jpg',
        img_card_alt: 'Hombre con traje corriendo por un pasillo de hotel que se derrite' ,
        link_pagina: '#',
        pick: 'Geor', 
    },
    {
        id: 'dark_city',
        nombre: 'Dark City',
        anio: 1994,
        fecha_vista: new Date(2020, 9, 9),
        img_card: 'img/cards/card_dark_city.jpg',
        img_card_alt: 'Hombre encadenado a una máquina y personas en el fondo mirando',
        link_pagina: '#',
        pick: 'Loco',
    },
    {
        id: 'gattaca',
        nombre: 'Gattaca',
        anio: 1997,
        fecha_vista: new Date(2020, 8, 26),
        img_card: 'img/cards/card_gattaca.jpg',
        img_card_alt: 'Hombre caminando por un pasillo circular',
        link_pagina: '#',
        pick: 'Pollo',
    },
    {
        id: 'mouth_madness',
        nombre: 'In the Mouth of Madness',
        anio: 1994,
        fecha_vista: new Date(2020, 8, 18),
        img_card: 'img/cards/card_mouth_madness.jpg',
        img_card_alt: 'Hombre en un manicomio con cruces dibujadas por su cuerpo y ropa',
        link_pagina: '#',
        pick: 'Paz', 
    },
    {
        id: 'thinking_ending',
        nombre: "I'm Thinking of Ending Things",
        anio: 2020,
        fecha_vista: new Date(2020, 8, 11),
        img_card: 'img/cards/card_thinking_ending.jpg',
        img_card_alt: 'Dos parejas sentadas a una mesa cenando',
        link_pagina: '#',
        pick: 'Geor', 
    },
    {
        id: 'logans_run',
        nombre: "Logan's Run",
        anio: 1976,
        fecha_vista: new Date(2020, 8, 4),
        img_card: 'img/cards/card_logans_run.jpg',
        img_card_alt: 'Tres personas caminando por un pasillo futurista',
        link_pagina: '#',
        pick: 'Pollo',
    },
    {
        id: 'time_bandits',
        nombre: 'Time Bandits',
        anio: 1981,
        fecha_vista: new Date(2020, 7, 28),
        img_card: 'img/cards/card_time_bandits.jpg',
        img_card_alt: 'Hombre y mujer vestidos con ropa imperial antigua junto a un niño',
        link_pagina: '#',
        pick: 'Geor', 
    },
    {
        id: 'coherence',
        nombre: 'Coherence',
        anio: 2013,
        fecha_vista: new Date(2020, 7, 21),
        img_card: 'img/cards/card_coherence.jpg',
        img_card_alt: 'Grupo de personas cenando y divirtiéndose',
        link_pagina: '#',
        pick: 'Paz', 
    },
    {
        id: 'brazil',
        nombre: 'Brazil',
        anio: 1985,
        fecha_vista: new Date(2020, 7, 14),
        img_card: 'img/cards/card_brazil.jpg',
        img_card_alt: 'Oficinista confundido parado en un pasillo',
        link_pagina: '#',
        pick: 'Loco', 
    },
    {
        id: 'mishima',
        nombre: 'Mishima: A Life in Four Chapters',
        anio: 1985,
        fecha_vista: new Date(2020, 7, 8),
        img_card: 'img/cards/card_mishima.jpg',
        img_card_alt: 'Dos mujeres paradas en un muelle',
        link_pagina: '#',
        pick: 'Pollo', 
    },
    {
        id: 'kill_bill',
        nombre: 'Kill Bill: The Whole Bloody Affair',
        anio: 2011,
        fecha_vista: new Date(2020, 6, 31),
        img_card: 'img/cards/card_kill_bill.jpg',
        img_card_alt: 'Mujer preparada para atacar con un sable',
        link_pagina: '#',
        pick: 'Pollo', 
    },
    {
        id: 'wayward_cloud',
        nombre: 'The Wayward Cloud',
        anio: 2005,
        fecha_vista: new Date(2020, 6, 24),
        img_card: 'img/cards/card_wayward_cloud.jpg',
        img_card_alt: 'Hombre debajo de una mesa fumando de un cigarrillo sostenido por el pie de una mujer',
        link_pagina: '#',
        pick: 'Geor', 
    },
    {
        id: 'midsommar',
        nombre: 'Midsommar',
        anio: 2019,
        fecha_vista: new Date(2020, 6, 17),
        img_card: 'img/cards/card_midsommar.jpg',
        img_card_alt: 'Manos ensangrentadas sobre una piedra con símbolos tallados',
        link_pagina: '#',
        pick: 'Paz', 
    },
    {
        id: 'mood_indigo',
        nombre: 'Mood Indigo',
        anio: 2013,
        fecha_vista: new Date(2020, 6, 10),
        img_card: 'img/cards/card_mood_indigo.jpg',
        img_card_alt: 'Pareja sentada en un banco mirándose con cariño',
        link_pagina: '#',
        pick: 'Pollo', 
    },
    {
        id: 'tokyo_godfathers',
        nombre: 'Tokyo Godfathers',
        anio: 2003,
        fecha_vista: new Date(2020, 6, 3),
        img_card: 'img/cards/card_tokyo_godfathers.jpg',
        img_card_alt: 'Pareja con una niña y un bebé hablando',
        link_pagina: '#',
        pick: 'Geor',
    },
    {
        id: 'climax',
        nombre: 'Climax',
        anio: 2018,
        fecha_vista: new Date(2020, 5, 26),
        img_card: 'img/cards/card_climax.jpg',
        img_card_alt: 'Televisor antiguo con vhs al costado y una mujer hablando en la pantalla',
        link_pagina: '#',
        pick: 'Loco', 
    },
    {
        id: 'trainspotting',
        nombre: 'Trainspotting',
        anio: 1996,
        fecha_vista: new Date(2020, 5, 19),
        img_card: 'img/cards/card_trainspotting.jpg',
        img_card_alt: 'Tres hombres comiendo papas fritas y hablando',
        link_pagina: '#',
        pick: 'Loco', 
    },
    {
        id: 'host',
        nombre: 'The Host',
        anio: 2006,
        fecha_vista: new Date(2020, 5, 12),
        img_card: 'img/cards/card_host.jpg',
        img_card_alt: 'Padre e hija tomando un refresco y hablando',
        link_pagina: '#',
        pick: 'Pollo',
    },
    {
        id: 'buen_dia',
        nombre: 'Un buen día',
        anio: 2010,
        fecha_vista: new Date(2020, 4, 29),
        img_card: 'img/cards/card_buen_dia.jpg',
        img_card_alt: 'Hombre haciendo mimica de tocar una guitarra y una mujer riendo',
        link_pagina: '#',
        pick: 'Loco', 
    },
    {
        id: 'cyborg',
        nombre: "I'm a Cyborg and That's Ok",
        anio: 2006,
        fecha_vista: new Date(2020, 4, 22),
        img_card: 'img/cards/card_cyborg.jpg',
        img_card_alt: 'Hombre y mujer en un campo',
        link_pagina: '#',
        pick: 'Geor', 
    },
    {
        id: 'neon_demon',
        nombre: 'The Neon Demon',
        anio: 2016,
        fecha_vista: new Date(2020, 4, 15),
        img_card: 'img/cards/card_neon_demon.jpg',
        img_card_alt: 'Mujer y su reflejo iluminadas por luces de neón',
        link_pagina: '#',
        pick: 'Loco', 
    },
    {
        id: 'true_romance',
        nombre: 'True Romance',
        anio: 1993,
        fecha_vista: new Date(2020, 4, 8),
        img_card: 'img/cards/card_true_romance.jpg',
        img_card_alt: 'Pareja en un auto mirándose amorosamente',
        link_pagina: '#',
        pick: 'Pollo',
    },
];



/* 
    {
        /* 
        id: ,
        nombre: ,
        anio: ,
        fecha_vista: ,
        img_card: ,
        img_card_alt: ,
        link_pagina: ,
        pick: , 
        */
    //},
//*/