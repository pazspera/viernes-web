// Arreglo con todas las películas para las cards
const peliculasCards = [
    {
        id: 'mind_game',
        name: 'Mind Game',
        date_seen: new Date(2021,11,10),
        img_card: 'img/cards/card_mind_game.jpg',
        img_card_alt: '#',
        pick: 'Loco',
        year: 2004,
        duration: '1h 43min',
        link_page: '#',
        director: 'Director: Masaaki Yuasa & Kôji Morimoto',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/o6SWofbYD90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Dieciséis años después, Snake vuelve a ser capturado y obligado, contra su voluntad, a llevar a cabo una misión suicida para salvar al mundo.',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Kurt Russell',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Steve Buscemi',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Stacy Keach',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Pam Grier',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: '',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: '',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: '',
                class: 'hidden_first',
            },
        ],        
    },
    {
        id: 'battle_royale',
        name: 'Battle Royale',
        date_seen: new Date(2021,11,03),
        img_card: 'img/cards/card_battle_royale.jpg',
        img_card_alt: '#',
        pick: 'Paz',
        year: 2006,
        duration: '1h 54min',
        link_page: '#',
        director: 'Director: Kinji Fukasaku',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/o6SWofbYD90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Dieciséis años después, Snake vuelve a ser capturado y obligado, contra su voluntad, a llevar a cabo una misión suicida para salvar al mundo.',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Kurt Russell',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Steve Buscemi',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Stacy Keach',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Pam Grier',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: '',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: '',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: '',
                class: 'hidden_first',
            },
        ],        
    },
    {
        id: 'volver',
        name: 'Volver',
        date_seen: new Date(2021,10,26),
        img_card: 'img/cards/card_volver.jpg',
        img_card_alt: '#',
        pick: 'Geor',
        year: 2006,
        duration: '2h 1min',
        link_page: '#',
        director: 'Director: Pedro Almodóvar',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/o6SWofbYD90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Dieciséis años después, Snake vuelve a ser capturado y obligado, contra su voluntad, a llevar a cabo una misión suicida para salvar al mundo.',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Kurt Russell',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Steve Buscemi',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Stacy Keach',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Pam Grier',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: '',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: '',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: '',
                class: 'hidden_first',
            },
        ],        
    },
    {
        id: 'escape_la',
        name: 'Escape from L.A.',
        date_seen: new Date(2021,10,19),
        img_card: 'img/cards/card_escape_la.jpg',
        img_card_alt: '',
        pick: 'Pollo',
        year: 1996,
        duration: '1h 41min',
        link_page: '#',
        director: 'Director: John Carpenter',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/o6SWofbYD90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Dieciséis años después, Snake vuelve a ser capturado y obligado, contra su voluntad, a llevar a cabo una misión suicida para salvar al mundo.',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Kurt Russell',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Steve Buscemi',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Stacy Keach',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Pam Grier',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: '',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: '',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: '',
                class: 'hidden_first',
            },
        ],        
    },
    {
        id: 'fear_loathing',
        name: 'Fear and Loathing in Las Vegas',
        date_seen: new Date(2021,10,05),
        img_card: 'img/cards/card_fear_loathing.jpg',
        img_card_alt: 'Hombre con sombrero y un cigarrillo en la boca asomándose en la puerta de una habitación de hotel',
        pick: 'Loco',
        year: 1998,
        duration: '1h 26min',
        link_page: 'fear_loathing.html',
        director: 'Director: Terry Gilliam',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uOmtVFQ3WF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Un periodista y un misterioso abogado, ocupantes de un descapotable rojo, se encaminan a través del desierto hacia Las Vegas. El maletero del coche es una auténtica farmacia: dos bolsas de marihuana, 75 pastillas de mescalina, 5 hojas de ácidos y multitud de otras drogas.',
        weeklyPicks: ['24 hours Party People', 'Woodstock', 'Fear and Loathing in Las Vegas' ],
        secondPick: '24 Hours Party People',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Johnny Depp',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Benicio Del Toro',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre en el desierto apuntando una pistola',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Cartel en una carretera desierta que indica pena de 20 años por consumo de marihuana en Nevada',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Dos hombres asustados caminando por un espectáculo psicodélico',
                class: 'hidden_first',
            },
        ],        
    },
    {
        id: 'what_we_do_shadows',
        name: 'What We Do in the Shadows',
        date_seen: new Date(2021,09,29),
        img_card: 'img/cards/card_what_we_do_shadows.jpg',
        img_card_alt: 'Vampiro sosteniendo una taza frente a un espejo, el espejo refleja solo la taza flotando',
        pick: 'Pollo',
        year: 2014,
        duration: '1h 26min',
        link_page: 'what_we_do_shadows.html',
        director: 'Directores: Jemaine Clement & Taika Waititi',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IAZEWtyhpes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Tres vampiros hacen lo posible por adaptarse a la sociedad moderna, una vida de lo más normal, salvo por el hecho de que son inmortales y tienen que alimentarse de sangre humana. Cuando uno de ellos convierte en vampiro a Nick, los tres deberán enseñarle cómo funciona vivir eternamente. A cambio, ellos aprenderán cosas sobre la vida moderna.',
        weeklyPicks: ['From Dusk Till Dawn', 'Color Out of Space', 'Lamb', 'Pet Sematary', 'Hellraiser'],
        secondPick: 'Pet Sematary',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Taika Waititi',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jemaine Clement',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Jonny Brugh',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Ben Fransham',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Cori Gonzalez-Macuer',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos vampiros sentados en una sala con decoración antigua',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Un humano enseñándole a un vampiro a usar una computadora',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Vampiro asustado flotando en la esquina del techo',
                class: 'hidden_first',
            },
        ],        
    },
    {
        id: 'nuit_noire',
        name: 'Nuit Noire',
        date_seen: new Date(2021,09,22),
        img_card: 'img/cards/card_nuit_noire.jpg',
        img_card_alt: 'Hombre mirando un capullo de insecto gigante que está acostado en su cama',
        pick: 'Paz',
        year: 2005,
        duration: '1h 30min',
        link_page: 'nuit_noire.html',
        director: 'Director: Olivier Smolders',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/H1FdP-6GdeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Fábula construida sobre la boda del negro y del blanco, de la nieve y de la noche, de la sangre y de la leche, de una vieja Europa y de una África que ella ha inventado, de la vida subterránea de los escarabajos y de la vida aérea de las mariposas. Prisionero entre el deseo y la repulsión que transmite el paraíso perdido de sus amores de crianza, Oscar abandona poco a poco la vida inquietante de los fantasmas.',
        weeklyPicks: ['Nuit Noire', 'High Life', 'The Green Knight'],
        secondPick: 'The Green Knight',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Yves-Marie Gnahoua',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Marie Lecomte',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Fabrice Rodriguez',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos hombres mayores, canosos y de traje mirando a cámara',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Un insecto parado sobre una rama',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Una niña y un niño con una lámpara de mano mirando con asombro',
                class: 'hidden_first',
            },
        ],        
    },
    {
        id: 'man_moon',
        name: 'Man on the Moon',
        date_seen: new Date(2021,09,15),
        img_card: 'img/cards/card_man_moon.jpg',
        img_card_alt: 'Hombre con una cámara antigua mirando',
        pick: 'Geor',
        year: 1999,
        duration: '1h 58min',
        link_page: 'man_moon.html',
        director: 'Director: Milos Forman',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pCcQB-iT7LY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'La vida y carrera del legendario comediante Andy Kaufman.',
        weeklyPicks: ['The Silence of Lambs', 'Man on the Moon', 'The Shining'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Jim Carrey',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Danny DeVito',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Courtney Love',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Paul Giamatti',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre haciendo un espectáculo en un teatro lleno',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre parado delante de una cortina roja siendo filmado',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con anteojos de sol en un escenario',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'tucker_dale_evil',
        name: 'Tucker and Dale vs Evil',
        date_seen: new Date(2021,09,8),
        img_card: 'img/cards/card_tucker_dale_evil.jpg',
        img_card_alt: 'Hombres en una camioneta sonriéndole a un policía que los detuvo en la ruta.',
        pick: 'Pollo',
        year: 2010,
        duration: '1h 29min',
        link_page: 'tucker_dale_evil.html',
        director: 'Director: Eli Craig',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/j0hJSCqqIs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Tucker & Dale son dos amigos de toda la vida que acaban de comprarse una vieja cabaña en lo más remoto del monte, donde pretenden pasar unas tranquilas vacaciones. Sin embargo, unos universitarios les confundirán con unos improbables asesinos en serie, lo que acabará derivando en una orgía de sangre y dolor.',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Tyler Labine',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Alan Tudyk',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Katrina Bowden',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre juntando leña en el bosque, detrás de él otro hombre cae dentro de una cortadora de madera.',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Dos hombres parados frente a una cabaña de madera, uno se cubre la cara con las manos',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer y hombre con una escopeta en el bosque.',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'as_gods_will',
        name: 'As the Gods Will',
        date_seen: new Date(2021,09,01),
        img_card: 'img/cards/card_as_gods_will.jpg',
        img_card_alt: 'Grupo de alumnos de secundaria aterrados mirando a un Daruma sentado en un escritorio',
        pick: 'Loco',
        year: 2014,
        duration: '1h 57min',
        link_page: 'as_gods_will.html',
        director: 'Director: Takashi Miike',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OEh1fT1IH14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Shun Takahata es un estudiante normal de secundaria que lleva una vida aburrida, junto a su mejor amiga, Ichika Akimoto. Un día, la cabeza de su maestro explota en clase y Shun y sus compañeros se ven obligados a jugar un juego mortal sin saber el quién, el cómo o el por qué.',
        weeklyPicks: ['As the Gods Will', 'Train to Busan', 'Battle Royale'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Sôta Fukushi',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Hirona Yamazaki',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Ryûnosuke Kamiki',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Alumno parado en un aula llena de cadáveres',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Muñecos japoneses sonrientes flotando',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Adolescente disfrazado de ratón y adolescente en uniforme de colegio parados en un gimnasio',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'cooties', 
        name: 'Cooties',
        date_seen: new Date(2021,08,24),
        img_card: 'img/cards/card_cooties.jpg',
        img_card_alt: 'Profesor de gimnasia huyendo de un grupo de niños en un patio de escuela',
        pick: 'Paz',
        year: 2014,
        duration: '1h 28min',
        link_page: 'cooties.html',
        director: 'Directors: Jonathan Milott & Cary Murnion',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/G_he1HiLy0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Un misterioso brote de virus infecta los Nuggets de pollo de la cafetería de una escuela primaria afectando a los niños, quienes se convierten en unos pequeños despiadados y salvajes monstruos caníbales asesinos.',
        weeklyPicks: ['Cooties', 'Mandy', 'Tucker and Dale Vs. Evil'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Elijah Wood',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Rainn Wilson',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Alison Pill',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Leigh Whannell',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Jorge Garcia',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Profesor en un aula enseñando',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Grupo de niños amontonándose frente a la puerta de una escuela',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Niño visitando la enfermera de una escuela',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'milagro_ptinto',
        name: 'El milagro de P.Tinto',
        date_seen: new Date(2021, 08, 17),
        img_card: 'img/cards/card_milagro_ptinto.jpg',
        img_card_alt: 'Dos hombres arreglando el motor de un auto pequeño pintado de rosa',
        link_page: 'milagro_ptinto.html',
        pick: 'Geor',
        year: 1998,
        director: 'Director: Javier Fesser',
        sinopsis: 'En su más tierna infancia, el niño P. Tinto tiene una revelación: su propósito en la vida es la de ser padre de familia numerosa. A partir de entonces sueña con un montón de hijos que crezcan a su alrededor sanos y fuertes. Casado con Olivia vive en una casa perdida en un valle. Cincuenta años después, ya de ancianos, ven cómo lo que habían esperado toda su vida se hace realidad, quizás por un milagro.',
        duration: '1h 46min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/s0fT8i9IhKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        weeklyPicks: ['Así en el cielo como en la tierra', 'Amanece, que no es poco', 'El milagro de P.Tinto'],
        secondPick: 'Amanece, que no es poco',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Luis Ciges',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Silvia Casanova',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Pablo Pinedo',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Javier Aller',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Emilio Gavira',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos hombres toomando gaseosa en un campo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Auto pequeño visto desde una ventana',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Sacerdote en un aula, detrás de su cabeza se ve un triángulo representando la Santísima Trinidad',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'holy_mountain',
        name: 'The Holy Mountain',
        date_seen: new Date(2021, 08, 10),
        img_card: 'img/cards/card_holy_mountain.jpg',
        img_card_alt: 'Hombre con un sombrero grande sentado con una cabra a cada lado',
        link_page: 'holy_mountain.html',
        pick: 'Pollo',
        year: 1973,
        director: 'Director: Alejandro Jodorowsky',
        sinopsis: 'En un mundo corrupto impulsado por la avaricia, un poderoso alquimista guía a un joven mesiánico y siete figuras materialistas a la Montaña Sagrada, donde esperan alcanzar la iluminación.',
        duration: '1h 54min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qmR0vi0ifzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        weeklyPicks: ['Love', 'Dogtooth', 'The Holy Mountain'],
        secondPick: 'Dogtooth',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Alejandro Jodorowsky',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Horacio Salinas',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Richard Rutowski',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Adriana Page',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Luis Lomelí',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Tres personas junto a un buey en un cuarto con cuadros de cartas de tarot',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mesa vista desde arriba que parece un ojo',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Dos hombres vestidos con túnicas y sombrero en un cuarto de espejos',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'human_nature',
        name: 'Human Nature',
        date_seen: new Date(2021, 08, 03),
        img_card: 'img/cards/card_human_nature.jpg',
        img_card_alt: 'Hombre en una habitación de vidrio sentado en un sillón y fumando una pipa',
        link_page: 'human_nature.html',
        pick: 'Loco',
        year: 2001,
        director: 'Director: Michel Gondry',
        duration: '1h 36min',
        sinopsis: 'Un científico obsesivo y una naturalista descubren a un hombre que ha nacido y se ha criado en estado salvaje. Mientras el científico intenta educarlo, su amante lucha por preservar los instintos simiescos del hombre, porque según ella, representan la libertad. En medio de esta lucha por el poder, surge un insólito triángulo amoroso.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1gjUtwtxv0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Tim Robbins',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Patricia Arquette',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Rhys Ifans',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre encerrado dentro de un cuarto de vidrio sosteniendo un tenedor',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer y hombre caminando cautelosamente por el bosque',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre encerrado dentro de un cuadro de vidrio mirando a mujer apoyada sobre el vidrio',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'mother',
        name: 'Mother!',
        date_seen: new Date(2021, 07,27),
        img_card: 'img/cards/card_mother.jpg',
        img_card_alt: 'Mujer mirando una pared con atención',
        link_page: 'mother.html',
        year: 2017,
        pick: 'Fisura Castels',
        duration: '2h 1min',
        director: 'Director: Darren Aronofsky',
        sinopsis: 'La relación de una pareja es puesta a prueba cuando llegan a casa visitas sin invitación, interrumpiendo su tranquila existencia.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XpICoc65uh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Jennifer Lawrence',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Javier Bardem',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Ed Harris',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Michelle Pfeiffer',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre parado en una escalera mirando hacia abajo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer mirando hacia arriba',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Casa victoriana en un prado',
                class: 'hidden_first',
            },
        ],        
    },
    {
        id: 'double',
        name: 'The Double',
        date_seen: new Date(2021, 07, 20),
        img_card: 'img/cards/card_double.jpg',
        img_card_alt: 'Hombre parado al lado de una televisión',
        link_page: 'double.html',
        year: 2013,
        pick: 'Paz',
        duration: '1h 33min',
        director: 'Director: Richard Ayoade',
        sinopsis: 'Un empleado de una agencia gubernamental descubre que su vida poco envidiable da un giro con la llegada de un nuevo compañero de trabajo que es tanto su doble físico como su opuesto: seguro, carismático y seductor con las mujeres.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xWhikLYeSQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Jesse Eisenberg',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jesse Eisenberg',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Mia Wasikowska',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Wallace Shawn',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos hombres iguales sentados a una mesa hablando',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer y hombre hablando en un mostrador',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con un trapo en la cara mirando hacia arriba',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'master',
        name: 'The Master',
        date_seen: new Date(2021, 07, 13),
        img_card: 'img/cards/card_master.jpg',
        img_card_alt: 'Hombre posando y mirando a cámara',
        link_page: 'master.html',
        year: 2012,
        pick: 'Geor',
        duration: '2h 18min',
        director: 'Director: Paul Thomas Anderson',
        sinopsis: 'Un veterano de la marina vuelve a casa después de la guerra perturbado y inseguro sobre su futuro hasta que es tentado por La Causa y su carismático líder.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uBn5dURHsUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Philip Seymour Hoffman',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Joaquin Phoenix',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Amy Adams',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer acostada en un sillón hablando con un hombre, un grupo de personas los miran',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre en un desierto sacando una foto con una cámara antigua',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con la cara pegada a una pared, un grupo de personas lo miran',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'swiss_army_man',
        name: 'Swiss Army Man',
        date_seen: new Date(2021, 07, 08),
        img_card: 'img/cards/card_swiss_army_man.jpg',
        img_card_alt: 'Dos hombres acostados a la luz de una fogata',
        link_page: 'swiss_army_man.html',
        year: 2016,
        pick: 'Pollo',
        director: 'Directores: Dan Kwan & Daniel Scheinert',
        duration: '1h 37min',
        sinopsis: 'Un hombre desesperado varado en una isla desierta se hace amigo de un cadáver. Juntos se embarcarán en un viaje surrealista para volver a casa.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4v92gXetGqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Paul Dano',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Daniel Radcliff',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos hombres hablando en un bosque',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Dos manos sobre césped haciendo pulgar hacia arriba',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre andando en una moto acuática en el mar',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'pontypool',
        name: 'Pontypool',
        year: '2008',
        date_seen: new Date(2021, 6, 30),
        img_card: 'img/cards/card_pontypool.jpg',
        img_card_alt: 'Locutor en una cabina de radio hablando',
        link_page: 'pontypool.html',
        pick: 'Loco',
        director: 'Director: Bruce McDonald',
        duration: '1h 33min',
        sinopsis: 'Un locutor de radio reporta un posible epidemia de un virus mortal que infecta la ciudad de Ontario.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/H4EoVxwJecM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Stephen McHattie',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Lisa Houle',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Georgina Reilly',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Hrant Alianak',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos hombres con auriculares en una cabina de radio',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Personas detrás de un vidrio golpeándolo con las manos',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Figura de Joey Ramone al lado de una pecera',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'john_dies_end',
        name: 'John Dies at the End',
        year: '2012',
        date_seen: new Date(2021, 6, 23),
        img_card: 'img/cards/card_john_dies_end.jpg',
        img_card_alt: 'Hombre hablando por un pancho como si fuera un teléfono',
        link_page: 'john_dies_end.html',
        pick: 'Paz',
        director: 'Director: Don Coscarelli',
        duration: '1h 39min',
        sinopsis: 'Una nueva droga callejera que envía a sus consumidores a través del tiempo y las dimensiones tiene un inconveniente: algunas personas ya no regresan como seres humanos.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IfJp417dyig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['drogas', 'ciencia ficción', 'comedia', 'multiverso', 'onírica'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Chase Williamson',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Rob Mayes',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Paul Giamatti',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos hombres mirando a una silueta de persona hecha de cortes de carne',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Dos hombres mirando a cámara',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con máscara parado frente a una iglesia llena de personas',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'outrage',
        name: 'Outrage',
        year: '2010',
        date_seen: new Date(2021, 6, 16),
        img_card: 'img/cards/card_outrage.jpg',
        img_card_alt: 'Dos miembros de a Yakuza mirando a cámara y apuntando con un arma',
        link_page: 'outrage.html',
        pick: 'Geor',
        director: 'Director: Takeshi Kitano',
        duration: '1h 49min',
        sinopsis: 'El jefe de un importante sindicato del crimen ordena a su lugarteniente que ponga orden en una banda de traficantes de drogas, un trabajo que pasa a su sufrido subordinado.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3Fj3htxRRHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['crimen', 'acción', 'oriental', 'policial'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Takeshi Kitano',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Kippei Shîna',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Fumiyo Kohinata',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Soichiro Kitamura',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Jun Kunimura',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos hombres parados en un estacionamiento, uno con una ametralladora en la mano y el otro, con una pistola',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre rastrillando un jardín zen',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Dos hombres parados frente a un escritorio, uno tiene la cara vendada',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'brick',
        name: 'Brick',
        year: '2005',
        date_seen: new Date(2021, 6, 09),
        img_card: 'img/cards/card_brick.jpg',
        img_card_alt: 'Adolescente hablando en una cabina telefónica de noche',
        link_page: 'brick.html',
        pick: 'Pollo',
        director: 'Director: Rian Johnson',
        duration: '1h 50min',
        sinopsis: 'Un adolescente solitario se adentra en las profundidades de una red criminal de la escuela secundaria para investigar la desaparición de su ex-novia.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4Zfw8__A7ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['crimen', 'acción', 'policial'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Joseph Gordon-Levitt',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Emilie de Ravin',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Lukas Haas',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Nora Zehetner',
            },  
            {
                img: 'cast_5.jpg',
                actor: 'Noah Fleiss',
            },  
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Adolescente apoyado sobre la parte de atrás de un auto convertible',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Dos adolescente sentados a una mesa con una jarra con forma de gallina',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Pareja de adolescentes sentados en el piso hablando',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'holy_motors',
        name: 'Holy Motors',
        year: 2012,
        date_seen: new Date(2021, 6, 02),
        img_card: 'img/cards/card_holy_motors.jpg',
        img_card_alt: 'Hombre ciego de un ojo parado frente a un grupo de gente',
        link_page: 'holy_motors.html',
        pick: 'la democracia',
        director: 'Director: Leos Carax',
        duration: '1h 55min',
        sinopsis: 'Desde el amanecer hasta el anochecer, unas horas en la misteriosa vida del místico hombre conocido como Monsieur Oscar.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NWu9WjEcdbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['onírica', 'multiverso', 'francesa'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Denis Lavant',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Edith Scob',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Kylie Minogue',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Eva Mendes',
            },  
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre parado frente a una pared con un empapelado de árboles',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre saliendo de una alcantarilla',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer con una máscara turquesa caminando en un estacionamiento lleno de limusinas',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'black_rainbow',
        name: 'Beyond the Black Rainbow',
        year: 2010,
        date_seen: new Date(2021, 5, 25),
        img_card: 'img/cards/card_black_rainbow.jpg',
        img_card_alt: 'Hombre caminando en un pasillo con una luz roja de fondo',
        link_page: 'black_rainbow.html',
        pick: 'Loco',
        director: 'Director: Panos Cosmatos',
        duration: '1h 50min',
        sinopsis: 'Una mujer muy sedada con ESP intenta escapar de la comuna aislada donde la han mantenido cautiva.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bi7aQ-bKziY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['distopía', 'onírica', 'ciencia ficción'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Michael J Rogers',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Eva Bourne',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Rondel Reynoldson',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre parado en la puerta de un cuarto futurista iluminado con luz roja',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer escalando por pozo de ascensor',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre de mirada perturbadora manejando',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'rumba',
        name: 'Rumba',
        year: 2008,
        date_seen: new Date(2021, 5, 18),
        img_card: 'img/cards/card_rumba.jpg',
        img_card_alt: 'Mujer y hombre bailando en un patio de escuela',
        link_page: 'rumba.html',
        pick: 'Tutte',
        director: 'Directores: Dominique Abel, Fiona Gordon & Bruno Romy',
        duration: '1h 17min',
        sinopsis: 'Fiona y Dom son maestros de una escuela de campo. Comparten su pasión por el baile latino y están muy enamorados. Una noche, de vuelta de un concurso de baile, intentan evitar a un torpe suicida, plantado en medio de la carretera. Su coche se aplasta contra una pared. Y su vida vuelca.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1hIK4xRI3bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['comedia', 'musical'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Dominique Abel',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Fiona Gordon',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer frente a un pizarrón que tiene un dibujo de un perro',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Pareja bailando a la orilla del mar',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Profesor pretendiendo pelear con sus alumnes',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'ravenous',
        name: 'Ravenous',
        year: 1999,
        date_seen: new Date(2021, 5, 11),
        img_card: 'img/cards/card_ravenous.jpg',
        img_card_alt: 'Hombre con ropa manchada de sangre sonriendo en un bosque',
        link_page: 'ravenous.html',
        pick: 'Paz',
        director: 'Directora: Antonia Bird',
        duration: '1h 41min',
        sinopsis: 'En un remoto puesto militar del siglo XIX, el capitán John Boyd y su regimiento se embarcan en una misión de rescate que da un giro oscuro cuando son emboscados por un caníbal sádico.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/l7BDiNktrLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['época', 'acción'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Guy Pearce',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Robert Carlyle',
            },
            {
                img: 'cast_3.jpg',
                actor: 'David Arquette',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Jeremy Davies',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Jeffrey Jones',
            },
            {
                img: 'cast_6.jpg',
                actor: 'Neal McDonough',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre arreglando la manga de camisa de otro hombre',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Dos hombres charlando intensamente',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre descubre varios esqueletos en una cueva',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'only_lovers',
        name: 'Only Lovers Left Alive',
        year: 2013,
        date_seen: new Date(2021, 5, 04),
        img_card: 'img/cards/card_only_lovers.jpg',
        img_card_alt: 'Mujer y hombre mirando a cámara con un mosaico de patrones circulares de fondo',
        link_page: 'only_lovers.html',
        pick: 'Geor',
        director: 'Director: Jim Jarmusch',
        duration: '2h 3min',
        sinopsis: 'Un músico deprimido se reencuentra con su amante. Su romance, que sobrevivió por varios siglos, se verá interrumpido por la llegada de la incontrolable hermana menor de su pareja.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pkeWhokaPPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['vampiros', 'romance'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Tilda Swinton',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Tom Hiddleston',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Mia Wasikowska',
            },
            {
                img: 'cast_4.jpg',
                actor: 'John Hurt',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Anton Yelchin',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Ava pidiéndole un favor a Adam',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Adam y Eve durmiendo en un avión',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Eve y Adam hablando por videollamada',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'juan_muertos',
        name: 'Juan de los muertos',
        year: 2011,
        date_seen: new Date(2021, 4, 28),
        img_card: 'img/cards/card_juan.jpg',
        img_card_alt: 'Hombre agarrado de la cornisa de un balcón y una mujer ayudándolo',
        link_page: 'juan_muertos.html',
        pick: 'Pollo',
        director: 'Director: Alejandro Brugués',
        duration: '1h 32min',
        sinopsis: 'Un grupo de holgazanes se enfrenta a un ejercito de zombies. El gobierno cubano y los medios aseguran que los muertos vivientes son disidentes protestando contra el gobierno.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gYuxT5nQJ8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['zombies', 'comedia', 'acción'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Alexis Díaz de Villegas',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jorge Molina',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Andrea Duro',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Andros Perugorría',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Jazz Vilá',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Grupo de personas levantando una bandera de Estados Unidos en el aire',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer apuntando con una honda',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Grupo de personas sonriendo intensamente',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'time_gypsies',
        name: 'Time of the Gypsies',
        year: 1988,
        date_seen: new Date(2021, 4, 21),
        img_card: 'img/cards/card_time_gypsies.jpg',
        img_card_alt: 'Grupo de personas mirando un ritual funerio en un río',
        link_page: 'time_gypsies.html',
        pick: 'Loco',
        director: 'Director: Emir Kusturica',
        duration: '2h 22min',
        sinopsis: 'En esta brillante historia que se desarrolla en Sarajevo y en Italia, Perhan, un encantador joven rumano (de etnia gitana) con poderes telequinéticos, se deja seducir por el mundo del dinero rápido de la delincuencia, que amenaza con destruirlo a él y a las personas que ama.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/J9K1iQ57LbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags:  ['gitanos', 'realismo mágico', 'drama'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Davor Dujmovic',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Sinolicka Trpkova',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Ljubica Adzovic',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Husnija Hasimovic',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Familia parada frente a su casa con un grupo de niños tocando instrumentos',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Grupo de personas celebrando en un río',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Una chica y un chico con un acordión',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'troll_hunter',
        name: 'Troll Hunter',
        year: 2010,
        date_seen: new Date(2021, 4, 15),
        img_card: 'img/cards/card_trollhunter.jpg',
        img_card_alt: 'Hombre en una camioneta iluminando a un troll que sale del bosque',
        link_page: 'trollhunter.html',
        pick: 'Paz',
        director: 'Director: André Øvredal',
        duration: '1h 43min',
        sinopsis: 'Un grupo de estudiantes investiga lo que parece ser una matanza por parte de un oso y descubre que el responsable es algo mucho más peligroso.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uvwEyHeRSvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['acción', 'realismo mágico', 'comedia', 'mockumentary'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Otto Jespersen',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Glenn Erland Tosterud',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Johanna Mørck',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Tomas Alf Larsen',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Cazador de trolls parado delante de una camioneta',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Documentarista posando con una aguja gigante',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Cazador de trolls y equipo de filmación en el bosque de noche',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'black_sheep',
        name: 'Black Sheep',
        year: 2006,
        date_seen: new Date(2021, 4, 14),
        img_card: 'img/cards/card_black_sheep.jpg',
        img_card_alt: 'Taxi rodeado de ovejas, varado en una ruta',
        link_page: 'black_sheep.html',
        pick: 'Paz',
        director: 'Director: Jonathan King',
        duration: '1h 27min',
        sinopsis: 'Un experimento de ingeniería genética convierte ovejas inofensivas en asesinos sedientos de sangre que aterrorizan a una granja de Nueva Zelanda.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hhck0SLcA6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['acción', 'comedia'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Nathan Meister',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Peter Feeney',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Danielle Mason',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Tammy Davis',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre acostado en el piso con una oveja bebé encima',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre siendo atacado por una oveja',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer y señora con una escopeta sorprendidas',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'suspiria_2018',
        name: 'Suspiria',
        year: 2018,
        date_seen: new Date(2021, 4, 8),
        img_card: 'img/cards/card_suspiria_2018.jpg',
        img_card_alt: 'Una mujer mirando a otra desde el umbral de una puerta',
        link_page: 'suspiria_2018.html',
        pick: 'Paz',
        director: 'Director: Luca Guadagnino',
        duration: '2h 32min',
        sinopsis: 'Una oscuridad envuelve una compañía de danza de fama internacional. Una oscuridad que consumirá a la directora artística, a una joven y ambiciosa bailarina y a un terapeuta en duelo. Algunos sucumbirán a la pesadilla. Otros finalmente despertarán.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BY6QKRl56Ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags:['onírica', 'realismo mágico', 'terror', 'brujas'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Dakota Johnson',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Tilda Swinton',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Mia Goth',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Lutz Ebersdorf',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Chloë Grace Moretz',
            },
            {
                img: 'cast_6.jpg',
                actor: 'Elena Fokina',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Personal de la academia de baile mirando a cámara',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Sarah golpeando ligeramente un espejo',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Susie y Madame Blanc en una pose ritualística',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'fantastic_fox',
        name: 'Fantastic Mr. Fox',
        year: 2009,
        date_seen: new Date(2021, 3, 30),
        img_card: 'img/cards/card_fantastic_fox.jpg',
        img_card_alt: 'Dos zorritos ladrones asomándose de la tapa de una alcantarilla',
        link_page: 'fantastic_fox.html',
        pick: 'Geor', 
        director: 'Wes Anderson',
        duration: '1h 27min',
        sinopsis: 'El Sr. y la Sra. Fox viven una feliz vida hogareña con su excéntrico hijo Ash y su sobrino Kristofferson, quien está de visita, hasta que el Sr. Fox recae en sus taimados hábitos y planea el robo de gallinas más grande presenciado por el mundo animal.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/n2igjYFojUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['comedia', 'animación'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'George Clooney',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Meryl Streep',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Jason Schwartzman',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Eric Chase Anderson',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Willem Dafoe',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Zorro con máscara sobre la cara sonriendo con culpa',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Zorro y zorra mirando hacia arriba',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Cazadores con armas enojados',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'muertos_risa',
        name: 'Muertos de risa',
        year: 1999,
        date_seen: new Date(2021, 3, 23) ,
        img_card: 'img/cards/card_muertos_risa.jpg',
        img_card_alt: 'Hombre a punto de darle una cachetada a otro hombre',
        link_page: 'muertos_risa.html',
        pick: 'Pollo', 
        director: 'Director: Alex de la Iglesia',
        duration: '1h 53min',
        sinopsis: 'Nino y Bruno son dos comediantes que alcanzan el éxito con su dúo, convirtiéndose en grandes celebridades de televisión. Sin embargo, el odio entre ellos crece tan rápido y tanto como su fama.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MsOgZ-6WtCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['comedia'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Santiago Segura',
            },
            {
                img: 'cast_2.jpg',
                actor: 'El Gran Wyoming',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos hombres caminando en una ruta de noche',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Tres hombres vestidos formales delante de una calesita',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre vestido elegante y otro hombre sacudiendo su mano con un plumero',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'suspiria_1977',
        name: 'Suspiria',
        year: 1977,
        date_seen: new Date(2021, 3, 16),
        img_card: 'img/cards/card_suspiria_1977.jpg',
        img_card_alt: 'Mujer pasando por un pasillo iluminado de rojo y entrando a una habitación',
        link_page: 'suspiria_1977.html',
        pick: 'Loco',
        director: 'Director: Dario Argento',
        duration: '1h 35min',
        sinopsis: 'Un estadounidense recién llegado a una prestigiosa academia alemana de ballet se da cuenta de que la escuela es una fachada para algo siniestro en medio de una serie de horripilantes asesinatos.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/y31qSjZ2s-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['onírica', 'terror', 'brujas'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Jessica Harper',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Joan Bennett',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Alida Valli',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Stefania Casini',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Flavio Bucci',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Susie reflejada en un espejo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer y niño mirando a cámara junto a una mesita llena de platos',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Sarah intentando despertar a Susie',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'antiviral',
        name: 'Antiviral',
        year: 2012,
        date_seen: new Date(2021, 3, 9),
        img_card: 'img/cards/card_antiviral.jpg',
        img_card_alt: 'Hombre mirando con preocupación un tubo de ensayo con sangre',
        link_page: 'antiviral.html',
        pick: 'Paz', 
        director: 'Director: Brandon Cronenberg',
        duration: '1h 48min',
        sinopsis: "En un futuro cercano obscuro, una próspera industria vende enfermedades de celebridades a sus obsesionados fans. Los intentos del empleado Syd March de explotar el sistema fracasan cuando lo involucran en un misterio potencialmente mortal.",
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XIZb50HiBCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['distopía', 'drogas', 'ciencia ficción', 'cronenberg', 'genética'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Caleb Landry Jones',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Sarah Gadon',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Joe Pingue',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Malcolm McDowell',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Douglas Smith',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre preocupado mirándose al espejo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Bandejas con carne sintética',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Dos hombres hablando frente a una máquina extraña',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'top_secret',
        name: 'Top Secret',
        year: 1984,
        date_seen: new Date (2021, 3, 2),
        img_card: 'img/cards/card_top_secret.jpg',
        img_card_alt: 'Hombre al lado de una ventana con los vidrios rotos',
        duration: '1h 30min',
        director: 'Directores: Jim Abrahams, David Zucker & Jerry Zucker',
        link_page: 'top_secret.html',
        sinopsis: 'Parodia de películas de espías de la Segunda Guerra Mundial en las que un cantante de rock and roll estadounidense se involucra en un complot de la Resistencia para rescatar a un científico encarcelado en Alemania Oriental.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/J4hX23pyXxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        pick: 'Fisura Castels', 
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Val Kilmer',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Lucy Gutteridge',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Peter Cushing',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Christopher Villiers',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Jeremy Kemp',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Tres mercenarios con armas mirando amenazadoramente',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer y hombre caminando agarrados del brazo en una fiesta elegante',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre atrapado dentro de estructura metálica mirando a cámara con una sonrisa',
                class: 'hidden_first',
            },
        ],
        tags: ['comedia'],
    },
    {
        id: 'snatch',
        name: 'Snatch',
        year: 2000,
        date_seen: new Date(2021, 2, 26),
        img_card: 'img/cards/card_snatch.jpg',
        img_card_alt: 'Hombre alentando a boxeador en un ring',
        director: 'Director: Guy Ritchie',
        duration: '1h 44min',
        link_page: 'snatch.html',
        sinopsis: 'Promotores de boxeo sin escrúpulos, editores violentos, un gánster ruso, ladrones amateur incompetentes, y joyeros supuestamente judíos se enfrentan para seguirle la pista a un preciado diamante robado.',
        pick: 'Geor',   
        tags: ['acción', 'comedia'],
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9Jar2XkBboo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Jason Statham',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Brad Pitt',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Stephen Graham',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Vinnie Jones',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Dennis Farina',
            },
            {
                img: 'cast_6.jpg',
                actor: 'Benicio del Toro',
            },
            {
                img: 'cast_7.jpg',
                actor: 'Alan Ford',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre sosteniendo tres cartas de poker en la mano',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Tres hombres sentados delante de una casa rodante',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre apuntándole con un arma en la cabeza a otro hombre',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'oldboy',
        name: 'Oldboy',
        year: 2003,
        date_seen: new Date(2021, 2, 19),
        img_card: 'img/cards/card_oldboy.jpg',
        img_card_alt: 'Hombre con pelo largo sonriendo extrañamente en una habitación',
        link_page: 'old_boy.html',
        pick: 'Pollo', 
        director: 'Director: Park Chan-Wook',
        duration: '2h',
        sinopsis: 'Tras ser secuestrado y aprisionado durante 15 años, Oh Dae-Su es liberado y tiene 5 días para encontrar a su captor.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/w4UUGIIZxFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['perturbadoras', 'oriental', 'acción'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Choi Min-sik',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Yoo Ji-Tae',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Kang Hye-jeong',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre apuntando a la cabeza de otro hombre con un martillo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre y mujer hablando en un restaurant',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con sangre en la cara cerrando un ojo',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'enter_void',
        name: 'Enter the Void',
        year: 2009,
        date_seen: new Date(2021, 2, 13),
        img_card: 'img/cards/card_enter_void.jpg',
        img_card_alt: 'Hombre y mujer caminando de espaldas en una tienda con muchas luces de colores',
        link_page: 'enter_void.html',
        pick: 'Loco', 
        director: 'Director: Gaspar Noé',
        duration: '2h 42min',
        sinopsis: 'Un traficante francés que vive en Tokio es traicionado por su mejor amigo y asesinado en un negocio de drogas. Su alma, observando las repercusiones de su muerte, busca la resurrección.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F0d82zVw8Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['onírica', 'multiverso', 'perturbadoras', 'drogas', 'gaspar noé'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Nathaniel Brown',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Paz de la Huerta',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Cyril Roy',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Olly Alexander',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre mirando a un mujer a través de la puerta de una cocina',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre fumando dmt',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre escribiendo en una pared',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'thx_1138',
        name: 'THX 1138',
        year: 1971,
        date_seen: new Date(2021, 2, 5),
        img_card: 'img/cards/card_thx1138.jpg',
        img_card_alt: 'Policias enmascarados golpeando a un hombre con palos en una habitación completamente blanca',
        link_page: 'thx_1138.html',
        pick: 'Loco', 
        director: 'Director: George Lucas',
        duration: '1h 26min',
        sinopsis: 'En el siglo veinticinco, una época en la que la gente tiene designaciones en lugar de nombres, un hombre, THX 1138, y una mujer, LUH 3417, se rebelan contra su sociedad rígidamente controlada.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eHgqfVQWv7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['distopía', 'ciencia ficción'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Robert Duvall',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Maggie McOmie',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Donald Pleasence',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre en un confesionario futurista',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Operadora teléfonica trabajando en consolas',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre relajado bañado en luz roja',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'synecdoche',
        name: 'Synecdoche, New York',
        year: 2008,
        date_seen: new Date(2021, 1, 27),
        img_card: 'img/cards/card_synecdoche.jpg',
        img_card_alt: 'Hombre y mujer rodeados de mesas mirando hacia arriba',
        link_page: 'synecdoche.html',
        pick: 'Geor',
        director: 'Director: Charlie Kaufman',
        duration: '2h 4min',
        sinopsis: 'Un director de teatro, en el proceso de crear una réplica de Nueva York en un almacén para su próxima obra, tiene dificultades en el trabajo y con las mujeres en su vida.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/i2q8F0yRmrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['realismo mágico', 'perturbadoras', 'oníricas', 'charlie kaufman'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Philip Seymour Hoffman',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Samantha Morton',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Tom Noonan',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Michelle Williams',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Catherine Keener',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Caden asomándose en un pasillo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Pintura de una mujer desnuda sentada en una cama',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Caden, Sammy y Claire charlando en un balcón',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'labyrinth',
        name: 'Labyrinth',
        year: 1986,
        date_seen: new Date(2021, 1, 19),
        img_card: 'img/cards/card_labyrinth.jpg',
        img_card_alt: 'Hombre y mujer bailando en un baile de máscaras',
        link_page: 'labyrinth.html',
        duration: '1h 41min',
        director: 'Director: Jim Henson',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/O2yd4em1I6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Una chica de 16 años tiene 13 horas para llegar al centro del laberinto y rescatar a su hermano pequeño del rey Goblin.',
        pick: 'Pauleta', 
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'David Bowie',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jennifer Connelly',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer y niño atrapados en un laberinto de escaleras',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Marioneta de un anciano en un laberinto',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Grupo de goblins',
                class: 'hidden_first',
            },
        ],
        tags: ['comedia'],
    },
    {
        id: 'tale_tales',
        name: 'Tale of Tales',
        year: 2015,
        date_seen: new Date(2021, 1, 12),
        director: 'Director: Matteo Garrone',
        duration: '2h 14min',  
        img_card: 'img/cards/card_tale_tales.jpg',
        img_card_alt: 'Hombre mirando con una lupa una caja de madera',
        sinopsis: 'Sigue la historia de la amarga búsqueda de la Reina de Longtrellis, dos misteriosas hermanas que provocan la pasión de un rey y el Rey de Highhills obsesionado con una pulga gigante.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Afup26-_3iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        link_page: 'tale_tales.html',
        pick: 'Paz', 
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Salma Hayek',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Vincent Cassel',
            }, 
            {
                img: 'cast_3.jpg',
                actor: 'Toby Jones',
            }, 
            {
                img: 'cast_4.jpg',
                actor: 'John C. Reilly',
            }, 
            {
                img: 'cast_5.jpg',
                actor: 'Beve Cave',
            }, 
            {
                img: 'cast_6.jpg',
                actor: 'Christian Lees',
            }, 
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Reina parada a la orilla del río junto a una criatura marina gigante muerta',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Laberinto en un bosque',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mago encapuchado susurrando en un castillo',
                class: 'hidden_first',
            },
        ],
        tags: ['época', 'realismo mágico'],
    },
    {
        id: 'mulholland_drive',
        name: 'Mulholland Drive',
        year: 2001,
        date_seen: new Date(2021, 1, 5),
        img_card: 'img/cards/card_mulholland_drive.jpg',
        img_card_alt: 'Dos mujeres escuchando por teléfono con atención',
        link_page: 'mulholland_drive.html',
        director: 'Director: David Lynch',
        duration: '2h 27min',
        pick: 'Pollo', 
        sinopsis: 'Tras un accidente en Mulholland Drive, una mujer amnésica y una aspirante a actriz recorrerán Los Ángeles buscando respuestas en un viaje más allá de los sueños y la realidad.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jbZJ487oJlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Naomi Watts',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Laura Harring',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Justin Theroux',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Melissa George',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Patrick Fischler',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Grupo de personas bailando jitterbug',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Pareja de personas mayores sonriendo en un auto',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombres conversando en un campo de noche, uno de ellos está vestido como cowboy',
                class: 'hidden_first',
            },
        ],
        tags: ['perturbadoras', 'onírica', 'realismo mágico', 'lynch'],
    },
    {
        id: 'perfect_blue',
        name: 'Perfect Blue',
        year: 1997,
        date_seen: new Date(2021, 0, 22),
        img_card: 'img/cards/card_perfect_blue.jpg',
        img_card_alt: 'Reflejo de una mujer en un espejo roto',
        link_page: 'perfect_blue.html',
        pick: 'Geor', 
        director: 'Director: Satoshi Kon',
        duration: '1h 21min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4uRakM7gpo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Una excantante de pop que ahora es actriz es acosada por un fan obsesionado y un fantasma de su pasado.',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Junko Iwao',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Rica Matsumoto',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Shinpachi Tsuji',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Masaaki Ôkura',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer mirando por la ventana de un balcón, su reflejo se ve en el vidrio',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Tres personas mirando a través de una cámara de video',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Reflejo de una mujer en un monitor de computadora',
                class: 'hidden_first',
            },
        ],
        tags: ['perturbadoras', 'animación', 'oriental'],
    },
    {
        id: 'heavy_metal',
        name: 'Heavy Metal',
        year: 1981,
        date_seen: new Date(2021, 0, 8),
        img_card: 'img/cards/card_heavy_metal.jpg',
        img_card_alt: 'Hombre con uniforme militar con un robot ovalado flotante a su lado',
        link_page: 'heavy_metal.html',
        sinopsis: 'Un orbe verde, encarnación del mal supremo, aterroriza a una joven con una antología de historias extrañas sobre fantasías oscuras, erotismo y horror.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gIum5aIUVlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        director: 'Directores: Gerald Potterton, John Bruno & John Halas',
        duration: '1h 26min',
        pick: 'Markus', 
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Richard Romanus',
            },
            {
                img: 'cast_2.jpg',
                actor: 'John Candy',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Eugene Levy',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre con casco amenazando con una mano en alto',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer sosteniendo una espada frente a una estatua gigante',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Grupo de alienígenas sentados en una tribuna',
                class: 'hidden_first',
            },
        ],
        tags: ['animación'],
    },
    {
        id: 'bad_taste',
        name: 'Bad Taste',
        year: 1987,
        date_seen: new Date(2020, 11, 12),
        img_card: 'img/cards/card_bad_taste.jpg',
        img_card_alt: 'Grupo de tres extraterrestres caminando por el bosque',
        link_page: 'bad_taste.html',
        duration: '1h 31min',
        director: 'Director: Peter Jackson',
        pick: 'Loco', 
        sinopsis: 'Una pequeña ciudad de la costa está más tranquila que nunca. Todos sus habitantes han desaparecido. Su destino ha sido decidido por un grupo de aliens en busca de carne humana para las hamburgesas de un fast-food intergaláctico. Un cuerpo especial se enfrentará a los extraterrestres.',
        tags: ['acción', 'clase b'],
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7IHwKJOZZ6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Peter Jackson',
            },
            {
                img: 'cast_2.jpg',
                actor: "Pete O'Herne",
            },
            {
                img: 'cast_3.jpg',
                actor: 'Doug Wren',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Auto pequeño en un camino y dos personas haciendo autostop',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Extraterrestres en un auto tapándose las orejas',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con un hacha en la mano caminando por una ruta',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'moon',
        name: 'Moon',
        year: 2009,
        date_seen: new Date(2020, 11, 4),
        img_card: 'img/cards/card_moon.jpg',
        img_card_alt: 'Astronauta mirando una máquina con un emoji de carita triste en su pantalla',
        link_page: 'moon.html',
        pick: 'Paz', 
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WWoDBcSW4_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        duration: '1h 37min',
        director: 'Director: Duncan Jones',
        sinopsis: 'El astronauta Sam Bell tiene un encuentro personal por excelencia hacia el final de su estadía de 3 años en la Luna, donde, trabajando junto a su computadora, GERTY, envía a la Tierra paquetes de un recurso que ha ayudado a disminuir los problemas de energía de nuestro planeta.',
        tags: ['ciencia ficción'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Sam Rockwell',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Kevin Spacey',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Dominique McElligott',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer acostada en un sillón hablando con un hombre, un grupo de personas los miran',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre en un desierto sacando una foto con una cámara antigua',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con la cara pegada a una pared, un grupo de personas lo miran',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'baron',
        name: 'The Adventures of Baron Munchausen',
        year: 1988,
        date_seen: new Date(2020, 10, 28),
        img_card: 'img/cards/card_baron.jpg',
        img_card_alt: 'Hombre vestido con uniforme militar antiguo y una niña mirando por la borda de un barco',
        link_page: 'baron.html',
        pick: 'Geor', 
        duration: '2h 6min',
        director: 'Director: Terry Gilliam',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/C1M-vhN8lsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'El descarado Barón Munchausen cuenta sus numerosas aventuras, desde conocer a un hombre en la Luna hasta derrotar él solo a un ejército turco entero.',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'John Neville',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Eric Idle',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Jack Purvis',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Winston Dennis',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Sarah Polley',
            }, 
            {
                img: 'cast_6.jpg',
                actor: 'Uma Thurman',
            }, 
            {
                img: 'cast_7.jpg',
                actor: 'Robin Williams',
            }, 
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Escenario de teatro con un hombre parado con los brazos extendidos grandilocuentemente',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre y niña parados en una habitación, una cara gigante les habla desde la derecha',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Pareja bailando y flotando entre nubes',
                class: 'hidden_first',
            },
        ],
        tags: ['época', 'comedia'],
    },
    {
        id: 'waking_life',
        name: 'Waking Life',
        year: 2001,
        date_seen: new Date(2020, 10, 20),
        img_card: 'img/cards/card_waking_life.jpg',
        img_card_alt: 'Dos hombre conversando, uno es una silueta de nubes',
        link_page: 'waking_life.html',
        director: 'Director: Richard Linklater',
        duration: '1h 41min',
        pick: 'Pollo', 
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xX10vQEa56E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sinopsis: 'Un hombre se mueve a través de un sueño conociendo a varias personas y discutiendo los significados y propósitos del universo.',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Wiley Wiggins',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Bill Wise',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Kim Krizan',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Charles Gunning',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mono sentado en una silla proyectando una película',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Pareja conversando en la cama',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre mayor y hombre joven sentados a una mesa charlando',
                class: 'hidden_first',
            },
        ],
        tags: ['oníricas', 'realismo mágico', 'multiverso', 'linklater'],

    },
    {
        id: 'rocky_horror',
        name: 'The Rocky Horror Picture Show',
        year: 1975,
        date_seen: new Date(2020, 10, 13),
        img_card: 'img/cards/card_rocky_horror.jpg',
        img_card_alt: 'Primer plano de hombre mirando con desafío a cámara',
        link_page: 'rocky_horror.html',
        pick: 'Loco',
        director: 'Director: Jim Sharman',
        duration: '1h 40min',
        sinopsis: 'Una pareja recién comprometida se queda varada en un camino desolado y deberá buscar refugio en la peculiar residencia del Dr. Frank-n-Furter.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4plqh6obZW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['comedia', 'musical'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Tim Curry',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Susan Sarandon',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Barry Bostwick',
            },
            {
                img: 'cast_4.jpg',
                actor: "Richard O'Brien",
            },
            {
                img: 'cast_5.jpg',
                actor: 'Patricia Quinn',
            },
            {
                img: 'cast_6.jpg',
                actor: 'Nell Campbell',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Brad y Janet mirando asombradosCaden asomándose en un pasillo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Frank charlando con Brad y Janet',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Magenta y Columbia riéndose en su cuarto',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'slacker',
        name: 'Slacker',
        year: 1990,
        date_seen: new Date(2020, 10, 6),
        img_card: 'img/cards/card_slacker.jpg',
        img_card_alt: 'Tres personas conversando en la calle',
        link_page: 'slacker.html',
        director: 'Director: Richard Linklater',
        duration: '1h 37min',
        pick: 'Loco',
        sinopsis: 'Un día en la vida de Austin, mientras la cámara se desplaza de un lugar a otro y ofrece una breve mirada a los excesos, los inadaptados sociales, los marginados y los bichos raros.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KlmfRuXxuXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['comedia', 'linklater'], 
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Richard Linklater',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jerry Delony',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Teresa Taylor',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Tres hombres paseando en un auto',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Dos personas charlando en una mesa llena de botellas de cerveza vacías',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Tres personas charlando en un jardín',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'reanimator',
        name: 'Re-Animator',
        year: 1985,
        date_seen: new Date(2020, 9, 30),
        img_card: 'img/cards/card_reanimator.jpg',
        img_card_alt: 'Científico cargando una jeringa con un líquido verde fluorescente',
        tags: ['acción', 'clase b', 'lovecraft'],
        link_page: 'reanimator.html',
        pick: 'Pollo', 
        sinopsis: 'Después de que un extraño estudiante de medicina llega al campus, un chico y su novia se ven involucrados en experimentos centrados en la re-animación de tejido muerto.',
        director: 'Director: Stuart Gordon',
        duration: '1h 44min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zf-5_Je_D80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Jeffrey Combs',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Bruce Abbott',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Barbara Crampton',
            },
            {
                img: 'cast_4.jpg',
                actor: 'David Gale',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre en un cuarto de hospital mirando por un microscopio',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre empujando una camilla por un pasillo de hospital',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con la cara ensangrentada agarrándose la cabeza',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'lighthouse',
        name: 'The Lighthouse',
        year: 2019,
        date_seen: new Date(2020, 9, 23),
        img_card: 'img/cards/card_lighthouse.jpg',
        img_card_alt: 'Dos marinos mirando al horizonte con un faro de fondo',
        link_page: 'lighthouse.html',
        pick: 'Paz', 
        sinopsis: 'La historia de un guardián del faro llamado Old en la Maine de principios del siglo XX.',
        director: 'Director: Robert Eggers',
        duration: '1h 49min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hyag7lR8CPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['época', 'realismo mágico'], 
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Willem Dafoe',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Robert Pattinson',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre parado delante de una casa con el océano de fondo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Primer plano de hombre sufriendo',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Gaviota graznando',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'paprika',
        name: 'Paprika',
        year: 2006,
        date_seen: new Date(2020, 9, 16),
        img_card: 'img/cards/card_paprika.jpg',
        img_card_alt: 'Hombre con traje corriendo por un pasillo de hotel que se derrite' ,
        link_page: 'paprika.html',
        pick: 'Geor', 
        sinopsis: 'Cuando una máquina que permite a los terapeutas entrar en los sueños de sus pacientes es robada, una gran catástrofe amenaza. Solo una joven terapeuta, Paprika, puede detenerlo.',
        director: 'Director: Satoshi Kon',
        duration: '1h 30min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SBrUhQ0_qYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Megumi Hayashibara',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Akio Ôtsuka',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Tôru Furuya',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Katsunosuke Hori',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Tôru Emori',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer mirando su reflejo en la ventana de un rascacielos',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Desfile exuberante con gente disfrazada',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre sentado trabajando en un cuarto oscuro lleno de equipamiento',
                class: 'hidden_first',
            },
        ],
        tags: ['oníricas', 'animación', 'oriental'], 
    },
    {
        id: 'dark_city',
        name: 'Dark City',
        year: 1994,
        date_seen: new Date(2020, 9, 9),
        img_card: 'img/cards/card_dark_city.jpg',
        img_card_alt: 'Hombre encadenado a una máquina y personas en el fondo mirando',
        link_page: 'dark_city.html',
        tags: ['distopía', 'ciencia ficción'],
        pick: 'Loco',
        sinopsis: 'Un hombre con problemas de memoria lucha contra pequeñas imágenes, como la de una esposa a la que no recuerda, o la de un mundo sin sol.',
        director: 'Director: Alex Proyas',
        duration: '1h 40min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gt9HkO-cGGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Rufus Sewell',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Kiefer Sutherland',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Jennifer Connelly',
            },
            {
                img: 'cast_4.jpg',
                actor: 'William Hurt',
            },
            {
                img: 'cast_5.jpg',
                actor: "Richard O'Brien",
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre parado en la calle con cara de preocupación',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre pálido con sombrero señalando con la mano',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mano moviendo fichas en un tablero',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'gattaca',
        name: 'Gattaca',
        year: 1997,
        date_seen: new Date(2020, 8, 26),
        img_card: 'img/cards/card_gattaca.jpg',
        img_card_alt: 'Hombre caminando por un pasillo circular',
        link_page: 'gattaca.html',
        tags: ['distopía', 'ciencia ficción', 'genética'],
        pick: 'Pollo',
        sinopsis: 'Un hombre genéticamente inferior asume la identidad de uno superior para cumplir su sueño de viajar al espacio.',
        director: 'Director: Andrew Niccol',
        duration: '1h 46min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/W_KruQhfvW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Ethan Hawke',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Uma Thurman',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Jude Law',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre parado en la cima de una escalera mirando a un hombre en silla de ruedas',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre limpiando el techo de un edificio y mirando el lanzamiento de un cohete que se ve a la distancia',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer y hombre viajando en un auto de noche',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'mouth_madness',
        name: 'In the Mouth of Madness',
        year: 1994,
        date_seen: new Date(2020, 8, 18),
        img_card: 'img/cards/card_mouth_madness.jpg',
        img_card_alt: 'Hombre en un manicomio con cruces dibujadas por su cuerpo y ropa',
        link_page: 'mouth_madness.html',
        pick: 'Paz', 
        sinopsis: 'Un investigador de seguros sospecha del impacto que los libros de terror de cierto autor tienen en su audiencia.',
        director: 'John Carpenter',
        duration: '1h 35min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qMjcDVEFQDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Sam Neill',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jürgen Prochnow',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Julie Carmen',
            },
            {
                img: 'cast_4.jpg',
                actor: 'David Warner',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer acostada en un sillón hablando con un hombre, un grupo de personas los miran',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre en un desierto sacando una foto con una cámara antigua',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con la cara pegada a una pared, un grupo de personas lo miran',
                class: 'hidden_first',
            },
        ],
        tags: ['terror', 'lovecraft', 'john carpenter'],
    },
    {
        id: 'thinking_ending',
        name: "I'm Thinking of Ending Things",
        year: 2020,
        date_seen: new Date(2020, 8, 11),
        img_card: 'img/cards/card_thinking_ending.jpg',
        img_card_alt: 'Dos parejas sentadas a una mesa cenando',
        link_page: 'thinking_ending.html',
        pick: 'Geor', 
        sinopsis: 'Pese a albergar dudas sobre la relación con su nueva pareja, una joven emprende un viaje por carretera con su novio Jake rumbo a la granja de los padres de este, donde empieza a cuestionarse todo lo que creía saber.',
        director: 'Director: Charlie Kaufman',
        duration: '2h 14min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cDTg62vsV4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['charlie kaufman', 'realismo mágico', 'oníricas', 'perturbadoras'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Jesse Plemons',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jessie Buckley',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Toni Collette',
            },
            {
                img: 'cast_4.jpg',
                actor: 'David Thewlis',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre y mujer mirando por la ventanilla de un auto',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Dos parejas sentadas a la mesa cenando',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer parada en un mostrador, otras dos mujeres la atienden',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'logans_run',
        name: "Logan's Run",
        year: 1976,
        date_seen: new Date(2020, 8, 4),
        img_card: 'img/cards/card_logans_run.jpg',
        img_card_alt: 'Tres personas caminando por un pasillo futurista',
        link_page: 'logans_run.html',
        pick: 'Pollo',
        sinopsis: 'Un idílico futuro de ciencia ficción tiene un fallo: la vida debe acabar a la edad de 30 años.',
        director: 'Director: Michael Anderson',
        duration: '1h 59min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/USADM5Gk9Gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['distopía', 'ciencia ficción'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Michael York',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jenny Agutter',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Richard Jordan',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Farrah Fawcett',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Grupo de personas con túnicas blancas paradas en círculo mirando una luz roja',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Gente caminado por un pasillo futurista iluminado con luces fluor',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Dos hombres mirando un panel de control futurista',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'time_bandits',
        name: 'Time Bandits',
        year: 1981,
        date_seen: new Date(2020, 7, 28),
        img_card: 'img/cards/card_time_bandits.jpg',
        img_card_alt: 'Hombre y mujer vestidos con ropa imperial antigua junto a un niño',
        link_page: 'time_bandits.html',
        pick: 'Geor',
        sinopsis: 'Un joven accidentalmente se une a una banda de enanos que viajan a través del tiempo, mientras saltan de era en era en busca de un tesoro que robar.',
        director: 'Director: Terry Gilliam',
        duration: '1h 56min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vioocIR0gHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['época', 'comedia'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Sean Connery',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Shelley Duvall',
            },
            {
                img: 'cast_3.jpg',
                actor: 'John Cleese',
            }, 
            {
                img: 'cast_4.jpg',
                actor: 'Michael Palin',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Katherine Helmond',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Pasillo iluminado con una luz brillante y una cara flotante en el medio',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Grupo de personas vestidas como Napoleon sentadas a una mesa',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Personas vestidas de carnaval mirando a cámara',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'coherence',
        name: 'Coherence',
        year: 2013,
        date_seen: new Date(2020, 7, 21),
        img_card: 'img/cards/card_coherence.jpg',
        img_card_alt: 'Grupo de personas cenando y divirtiéndose',
        link_page: 'coherence.html',
        pick: 'Paz', 
        sinopsis: 'Cosas estrañas empiezan a suceder cuando un grupo de amigos que se reúnen para una cena y un cometa pasa por encima.',
        director: 'Director: James Ward Byrkit',
        duration: '1h 29min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eo3If7uZOo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['ciencia ficción', 'multiverso'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Emily Baldoni',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Maury Sterling',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Nicholas Brendon',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre hablando en una cena',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Serie de números anotados en un papel cuadriculado',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer sentada a la mesa mirando papeles con cara de preocupación',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'brazil',
        name: 'Brazil',
        year: 1985,
        date_seen: new Date(2020, 7, 14),
        img_card: 'img/cards/card_brazil.jpg',
        tags: ['distopía', 'ciencia ficción', 'perturbadoras'],
        img_card_alt: 'Oficinista confundido parado en un pasillo',
        link_page: 'brazil.html',
        pick: 'Loco', 
        sinopsis: 'Un burócrata, en un mundo retro-futuro, trata de corregir un error administrativo y se convierte en enemigo del Estado.',
        director: 'Director: Terry Gilliam',
        duration: '2h 12min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZKPFC8DA9_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Jonathan Pryce',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Kim Greist',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Michael Palin',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Katherine Helmond',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Oficina retro futurista con un monitor donde se ve la cara de un hombre',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Dos hombres mirando fijamente a cámara',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Burócrata sentado en una oficina color gris',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'mishima',
        name: 'Mishima: A Life in Four Chapters',
        year: 1985,
        date_seen: new Date(2020, 7, 8),
        img_card: 'img/cards/card_mishima.jpg',
        img_card_alt: 'Dos mujeres paradas en un muelle',
        link_page: 'mishima.html',
        pick: 'Pollo', 
        sinopsis: 'Relata la vida del célebre escritor japonés Yukio Mishima.',
        director: 'Director: Paul Schrader',
        duration: '2h',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LzaXtBr5210" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['drama', 'oriental'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Ken Ogata',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Masayuki Shionoya',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Junkichi Orimoto',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre sentado en el piso apuntando a su estómago con un sable',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre frente a un templo barriendo pétalos de rosas',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Dos hombres hablando de una oficina pintada de blanco',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'kill_bill',
        name: 'Kill Bill: The Whole Bloody Affair',
        year: 2011,
        date_seen: new Date(2020, 6, 31),
        img_card: 'img/cards/card_kill_bill.jpg',
        img_card_alt: 'Mujer preparada para atacar con un sable',
        link_page: 'kill_bill.html',
        pick: 'Pollo', 
        sinopsis: 'La esposa debe matar a su ex jefe y amante Bill, quien la traicionó en su ceremonia de boda, le disparó en la cabeza y se llevó a su hija no nacida. Pero primero, debe hacer sufrir a los otros cuatro miembros del Escuadrón de Asesinato de Víboras Mortales.',
        director: 'Director: Quentin Tarantino',
        duration: '4h 7min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/s_iExUQIH9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['acción', 'quentin tarantino'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Uma Thurman',
            },
            {
                img: 'cast_2.jpg',
                actor: 'David Carradine',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Lucy Liu',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Daryl Hannah',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Vivica A. Fox',
            },
            {
                img: 'cast_6.jpg',
                actor: 'Michael Madsen',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer en un traje amarillo parada delante de un sable',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Dos mujeres y dos hombres mirando a cámara',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Maestro de artes marciales sentado en una escalera de un templo',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'wayward_cloud',
        name: 'The Wayward Cloud',
        year: 2005,
        date_seen: new Date(2020, 6, 24),
        img_card: 'img/cards/card_wayward_cloud.jpg',
        img_card_alt: 'Hombre debajo de una mesa fumando de un cigarrillo sostenido por el pie de una mujer',
        link_page: 'wayward_cloud.html',
        pick: 'Geor', 
        sinopsis: 'Hsiao-Kang, que trabaja como actor pornográfico, se encuentra con Shiang-chyi una vez más. Mientras tanto, la ciudad de Taipei se enfrenta a una escasez de agua que hace que las ventas de sandías se disparen.',
        director: 'Director: Ming-liang Tsai',
        duration: '1h 54min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QSmWstWA8PM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['comedia'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Kang-sheng Lee',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Shiang-chyi Chen',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer en la cocina sirviendo jugo, hombre en el living arreglando una maleta',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer con un sombrero bailando, detrás hay un grupo de bailarines sosteniendo paraguas de sandías',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer lamiendo una sandía que está dentro de una heladera',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'midsommar',
        name: 'Midsommar',
        year: 2019,
        date_seen: new Date(2020, 6, 17),
        img_card: 'img/cards/card_midsommar.jpg',
        img_card_alt: 'Manos ensangrentadas sobre una piedra con símbolos tallados',
        link_page: 'midsommar.html',
        pick: 'Paz', 
        sinopsis: 'Un joven convence a su novia de que le acompañe a un festival de verano en Suecia que resulta no ser lo que parece.',
        director: 'Director: Ari Aster',
        duration: '2h 28min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Vnghdsjmd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['terror', 'perturbadoras', 'drogas'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Florence Pugh',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jack Reynor',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Vilhelm Blomgren',
            },
            {
                img: 'cast_4.jpg',
                actor: 'William Jackson Harper',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Will Poulter',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Grupo de personas en una tarde soleada sentadas en el pasto',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Tapete con dibujos',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre en un prado parado delante de una pirámide amarilla',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'mood_indigo',
        name: 'Mood Indigo',
        year: 2013,
        date_seen: new Date(2020, 6, 10),
        img_card: 'img/cards/card_mood_indigo.jpg',
        img_card_alt: 'Pareja sentada en un banco mirándose con cariño',
        tags: ['drama', 'realismo mágico', 'francesa'],
        link_page: 'mood_indigo.html',
        pick: 'Pollo',
        sinopsis: 'Colin se esfuerza por encontrar una cura para su amante Chloe después de que le diagnostican una enfermedad inusual causada por una flor que crece en sus pulmones.',
        director: 'Director: Michel Gondry',
        duration: '2h 11min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/38ugyccL5zU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Romain Duris',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Audrey Tautou',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Omar Sy',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Gad Elmaleh',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Dos hombres y una mujer haciendo un picnic en un campo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre vestido de ratón comiendo un trozo de queso',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Dos hombres bailando en un living',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'tokyo_godfathers',
        name: 'Tokyo Godfathers',
        year: 2003,
        date_seen: new Date(2020, 6, 3),
        img_card: 'img/cards/card_tokyo_godfathers.jpg',
        img_card_alt: 'Pareja con una niña y un bebé hablando',
        tags: ['animación', 'drama', 'oriental'],
        link_page: 'tokyo_godfathers.html',
        pick: 'Geor',
        sinopsis: 'En Noche Buena, tres personas sin hogar en las calles de Tokyo encuentran a un recién nacido entre la basura e intentan encontrar a sus padres.',
        director: 'Director: Satoshi Kon',
        duration: '1h 33min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZL_2E-HfIZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Tôru Emori',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Yoshiaki Umegaki',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Aya Okamoto',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Tres personas cuidando un bebé',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Chica con un sombrero parada entre las góndolas de un supermercado',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre mayor tomando alcohol sobre bolsas de basura',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'climax',
        name: 'Climax',
        year: 2018,
        date_seen: new Date(2020, 5, 26),
        img_card: 'img/cards/card_climax.jpg',
        img_card_alt: 'Televisor antiguo con vhs al costado y una mujer hablando en la pantalla',
        link_page: 'climax.html',
        pick: 'Loco', 
        sinopsis: 'Uno grupo de bailarines franceses se reúne en una escuela abandonada y remota para ensayar en una noche invernal. Una fiesta que iba a durar toda la noche se transforma en una pesadilla plagada de alucinaciones cuando descubren que su sangría está envenenada con LSD.',
        director: 'Director: Gaspar Noé',
        duration: '1h 37min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hi69nL_VrTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['drogas', 'gaspar noé', 'musical'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Sofia Boutella',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Romain Guillermic',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Kiddy Smile',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer en un baño oscuro lavándose las manos',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Bowl de sangría',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer caminando por un pasillo, la imagen está invertida y parece estar caminando en el techo',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'trainspotting',
        name: 'Trainspotting',
        year: 1996,
        date_seen: new Date(2020, 5, 19),
        img_card: 'img/cards/card_trainspotting.jpg',
        img_card_alt: 'Tres hombres comiendo papas fritas y hablando',
        tags: ['drogas', 'drama'],
        link_page: 'trainspotting.html',
        pick: 'Loco', 
        sinopsis: 'Renton, inmerso en el mundo de las drogas de Edimburgo, intenta desintoxicarse.',
        director: 'Director: Danny Boyle',
        duration: '1h 33min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8LuxOYIpu-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Ewan McGregor',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Jonny Lee Miller',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Ewen Bremmer',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Robert Carlyle',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Kevin McKidd',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Cinco hombres en una cancha de fútbol posando delante de una pelota',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre sentado con las piernas cruzadas frente a una cama',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre reflejado en varios espejos',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'host',
        name: 'The Host',
        year: 2006,
        date_seen: new Date(2020, 5, 12),
        img_card: 'img/cards/card_host.jpg',
        img_card_alt: 'Padre e hija tomando un refresco y hablando',
        link_page: 'host.html',
        pick: 'Pollo',
        sinopsis: 'Un monstruo emerge del río Han en Seúl y empieza a atacar a la gente. La familia de una de las víctimas hace lo que puede para rescatarla de sus garras.',
        director: 'Director: Bong Joon Ho',
        duration: '2h',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/i6b42ZMkUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['acción', 'clase b'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Kang-ho Song',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Ko Asung',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Byun Hee-Bong',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Bae Doona',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Park Hae-il',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Grupo de personas huyendo a las corridas en una playa',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer con expresión de ansiedad mirando a cámara',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Niña asustada parada en un parque, un monstruo se ve detrás de ella',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'buen_dia',
        name: 'Un buen día',
        year: 2010,
        date_seen: new Date(2020, 4, 29),
        img_card: 'img/cards/card_buen_dia.jpg',
        img_card_alt: 'Hombre haciendo mimica de tocar una guitarra y una mujer riendo',
        link_page: 'buen_dia.html',
        director: 'Director: Nicolás Del Boca',
        duration: '1h 35min',
        pick: 'Loco', 
        sinopsis: 'Una relación se desarrolla entre dos argentinos solitarios que se conocen por casualidad en un café en California.',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7e3xIE5QDlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tags: ['comedia'],
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Aníbal Silveyra',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Lucila Solá',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Andrea Del Boca',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Hombre y mujer caminando por la playa',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre y mujer charlando en las escaleras de un crucero',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer y hombre disfrazados en una tienda',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'cyborg',
        name: "I'm a Cyborg and That's Ok",
        year: 2006,
        date_seen: new Date(2020, 4, 22),
        img_card: 'img/cards/card_cyborg.jpg',
        img_card_alt: 'Hombre y mujer en un campo',
        link_page: 'cyborg.html',
        pick: 'Geor', 
        director: 'Director: Park Chan-Wook',
        duration: '1h 47min',
        sinopsis: 'Una chica que cree ser un cíborg de combate ingresa en un hospital psiquiátrico, donde conoce a otros psicóticos. Al final, se enamora de un hombre que cree que puede robar las almas de las personas.',
        tags: ['comedia', 'oriental'],
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/E1Wn7GfJnnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Lim Soo-jung',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Rain',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer con pintura verde en la cara estirando las manos hacia la cámara',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre con una máscara de conejo de cartón parado delante de una reja',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer y hombre caminando en un cuarto de apariencia industrial',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'neon_demon',
        name: 'The Neon Demon',
        year: 2016,
        date_seen: new Date(2020, 4, 15),
        img_card: 'img/cards/card_neon_demon.jpg',
        img_card_alt: 'Mujer y su reflejo iluminadas por luces de neón',
        link_page: 'neon_demon.html',
        pick: 'Loco', 
        duration: '1h 57min',
        director: 'Director: Nicolas Winding Refn',
        sinopsis: 'Una aspirante a modelo, Jesse, es nueva en Los Ángeles. Sin embargo, su belleza y juventud, que genera gran fascinación y envidia en la industria de la moda, les resultará siniestra.',
        tags: ['perturbadoras', 'terror'],
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cipOTUO0CmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Elle Fanning',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Christina Hendricks',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Jena Malone',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Abbey Lee',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Keanu Reeves',
            },
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Mujer observando a otra mujer que está mirándose al espejo',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Mujer tirada en el piso con la boca ensangrentada y fotos de revista rotas esparcidas a su alrededor',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Mujer asomándose desde detrás de una pared de ladrillos grises',
                class: 'hidden_first',
            },
        ],
    },
    {
        id: 'true_romance',
        name: 'True Romance',
        year: 1993,
        date_seen: new Date(2020, 4, 8),
        img_card: 'img/cards/card_true_romance.jpg',
        img_card_alt: 'Pareja en un auto mirándose amorosamente',
        link_page: 'true_romance.html',
        pick: 'Pollo',
        sinopsis: 'En Detroit, un friki de la cultura pop se casa con una prostituta, le roba cocaína a su chulo, e intenta venderla en Hollywood. Los propietarios de la coca les siguen la pista para recuperarla.',
        tags: ['romance', 'drama'],
        director: 'Director: Tony Scott',
        duration: '1h 59min',
        trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_wNYNDzKpuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        cast: [
            {
                img: 'cast_1.jpg',
                actor: 'Christian Slater',
            },
            {
                img: 'cast_2.jpg',
                actor: 'Patricia Arquette',
            },
            {
                img: 'cast_3.jpg',
                actor: 'Gary Oldman',
            },
            {
                img: 'cast_4.jpg',
                actor: 'Brad Pitt',
            },
            {
                img: 'cast_5.jpg',
                actor: 'Dennis Hopper',
            }
        ],
        img_row: [
            {
                img: 'img_1.jpg',
                alt: 'Pareja en el cine comiendo pochoclos y mirando una película',
                class: 'always_show',
            },
            {
                img: 'img_2.jpg',
                alt: 'Hombre amenazador parado con una tele de fondo',
                class: 'always_show',
            },
            {
                img: 'img_3.jpg',
                alt: 'Hombre con anteojos de sol visto a través de la mirilla de una puerta',
                class: 'hidden_first',
            },
        ],
    },
];

