/* ============================================================
   DATOS DEL ANEXO — este es el unico archivo que necesitas
   tocar para agregar o corregir contenido del libro.
   No hace falta saber programar: copia el formato de una
   entrada existente y cambia el texto entre comillas.

   ERAS         -> los grandes bloques de la cronologia
   CRONOLOGIA   -> cada episodio (era, marca, titulo, resena, ver)
   GENERACIONES -> los bloques del arbol genealogico
   FIGURAS      -> cada personaje (id, n, rol, epi, gen, padres,
                   pareja, r = resena)

   Regla unica: el "id" de cada figura debe ser unico y sin
   tildes ni espacios, porque es el que usan "padres",
   "pareja" y "ver" para enlazar unos con otros.
   ============================================================ */

const ERAS = [
 {id:"e1", num:"Era I",  titulo:"Antes del tiempo", sub:"El vacío y los primordiales"},
 {id:"e2", num:"Era II", titulo:"El reino de Crono", sub:"Primera generación divina"},
 {id:"e3", num:"Era III",titulo:"El orden olímpico", sub:"Zeus impone su ley"},
 {id:"e4", num:"Era IV", titulo:"La edad de los héroes", sub:"Mortales con sangre divina"},
 {id:"e5", num:"Era V",  titulo:"Troya y el ocaso", sub:"El fin de la raza heroica"}
];

const CRONOLOGIA = [
 {era:"e1", marca:"Origen", titulo:"El Caos", resena:"No es desorden sino abertura: una sima bostezante donde todavía no hay arriba ni abajo. Hesíodo lo pone primero porque todo lo demás necesita un lugar donde caber.", ver:["caos"]},
 {era:"e1", marca:"Origen", titulo:"Nacen los primordiales", resena:"Del Caos surgen Gea (la tierra), Tártaro (el abismo bajo ella), Eros (la fuerza que une), Érebo (la sombra) y Nix (la noche). Son potencias, no personas: nadie les reza, todos los heredan.", ver:["gea","tartaro","eros","erebo","nix"]},
 {era:"e1", marca:"Origen", titulo:"Gea engendra sola", resena:"Sin unión previa, la tierra produce a Urano (el cielo estrellado), las montañas y Ponto (el mar). Es el primer acto de creación por desdoblamiento: la tierra fabrica aquello que la cubrirá.", ver:["urano","ponto"]},
 {era:"e1", marca:"Origen", titulo:"Los hijos encerrados", resena:"De Gea y Urano nacen doce titanes, tres cíclopes y tres hecatónquiros de cien brazos. Urano teme a los monstruosos y los devuelve al vientre de su madre, que empieza a fraguar la venganza.", ver:["ciclopes","hecatonquiros"]},
 {era:"e1", marca:"Ruptura", titulo:"La castración de Urano", resena:"Crono, el menor de los titanes, siega a su padre con una hoz de pedernal que Gea le entrega. De la sangre caída brotan las Erinias, los Gigantes y las ninfas; de la espuma del mar donde cae el sexo, nace Afrodita.", ver:["crono","urano","afrodita"]},

 {era:"e2", marca:"Edad de oro", titulo:"Crono devora a sus hijos", resena:"Advertido de que un hijo suyo lo destronará como él destronó a su padre, Crono traga a cada recién nacido. El ciclo del mito griego se anuncia aquí: ningún poder logra impedir su propio relevo.", ver:["crono","rea"]},
 {era:"e2", marca:"Edad de oro", titulo:"El engaño de Rea", resena:"Rea da a luz a Zeus en secreto en una cueva de Creta y entrega a Crono una piedra envuelta en pañales. El niño crece amamantado por la cabra Amaltea, entre los golpes de los Curetes que ahogan su llanto.", ver:["rea","zeus"]},
 {era:"e2", marca:"Guerra", titulo:"Zeus libera a sus hermanos", resena:"Ya adulto, Zeus hace vomitar a Crono a los cinco hijos devorados: Hestia, Deméter, Hera, Hades y Poseidón. Salen adultos y en orden inverso, así que el hermano menor es también el primogénito.", ver:["zeus","hestia","demeter","hera","hades","poseidon"]},
 {era:"e2", marca:"Guerra", titulo:"La Titanomaquia", resena:"Diez años de guerra entre olímpicos y titanes. Zeus libera del Tártaro a los cíclopes, que le forjan el rayo, el tridente a Poseidón y el casco de invisibilidad a Hades; los hecatónquiros sepultan a los titanes bajo una lluvia de rocas.", ver:["zeus","ciclopes","hecatonquiros"]},
 {era:"e2", marca:"Reparto", titulo:"El sorteo del cosmos", resena:"Los tres hermanos echan suertes: a Zeus el cielo, a Poseidón el mar, a Hades el mundo subterráneo. La tierra y el Olimpo quedan en común, y esa ambigüedad alimentará casi todos los conflictos posteriores.", ver:["zeus","poseidon","hades"]},

 {era:"e3", marca:"Amenaza", titulo:"La Gigantomaquia", resena:"Gea lanza contra los olímpicos a los Gigantes nacidos de la sangre de Urano. Un oráculo advierte que ningún dios puede matarlos sin la ayuda de un mortal: Heracles dispara la flecha que decide la guerra.", ver:["gea","heracles","zeus"]},
 {era:"e3", marca:"Amenaza", titulo:"Tifón contra Zeus", resena:"El último hijo de Gea, con cien cabezas de serpiente, arrasa el Olimpo y llega a arrancarle a Zeus los tendones. Vencido, queda aplastado bajo el Etna, y su aliento sigue saliendo por el cráter.", ver:["zeus","gea"]},
 {era:"e3", marca:"Humanidad", titulo:"El robo del fuego", resena:"Prometeo engaña a Zeus en el reparto del sacrificio y luego roba el fuego para los hombres en una caña hueca. Su castigo es el águila que le devora el hígado cada día en el Cáucaso.", ver:["prometeo","zeus"]},
 {era:"e3", marca:"Humanidad", titulo:"Pandora abre la jarra", resena:"Como represalia, Zeus envía a la primera mujer con una vasija que contiene todos los males. Cuando la abre solo queda dentro la esperanza, y los griegos nunca se pusieron de acuerdo sobre si eso es un consuelo o una condena.", ver:["epimeteo","zeus"]},
 {era:"e3", marca:"Estaciones", titulo:"El rapto de Perséfone", resena:"Hades se lleva a la hija de Deméter al inframundo; la madre, buscándola, deja morir toda cosecha. El pacto final —seis granos de granada, unos meses arriba y otros abajo— explica el invierno y funda los misterios de Eleusis.", ver:["hades","persefone","demeter"]},
 {era:"e3", marca:"Humanidad", titulo:"El diluvio de Deucalión", resena:"Harto de la edad de bronce, Zeus anega la tierra. Sobreviven Deucalión, hijo de Prometeo, y Pirra, que repueblan el mundo lanzando piedras por encima del hombro: los huesos de la madre tierra se vuelven hombres.", ver:["prometeo","zeus"]},

 {era:"e4", marca:"Generación I", titulo:"Perseo y la Gorgona", resena:"Con las sandalias aladas, el casco de Hades y un escudo pulido como espejo, decapita a Medusa sin mirarla. De su cuello brota Pegaso, y la cabeza cortada seguirá petrificando enemigos hasta terminar en el escudo de Atenea.", ver:["perseo","atenea"]},
 {era:"e4", marca:"Generación II", titulo:"Los doce trabajos de Heracles", resena:"Enloquecido por Hera, mata a su familia; la expiación son doce tareas imposibles al servicio de Euristeo, del león de Nemea al perro Cerbero. Es el único héroe que termina sentado entre los dioses.", ver:["heracles","hera"]},
 {era:"e4", marca:"Generación II", titulo:"Teseo y el Minotauro", resena:"Se ofrece como uno de los catorce jóvenes tributados a Creta y mata a la bestia del laberinto guiado por el hilo de Ariadna. Al volver olvida cambiar las velas negras, y su padre Egeo se arroja al mar que lleva su nombre.", ver:["teseo","minos","poseidon"]},
 {era:"e4", marca:"Generación II", titulo:"Los Argonautas", resena:"Jasón reúne a la primera tripulación de héroes para traer el vellocino de oro desde la Cólquide. Lo consigue por la hechicería de Medea, y el precio de esa deuda destruirá después a los dos.", ver:["orfeo","heracles"]},
 {era:"e4", marca:"Generación II", titulo:"La maldición de Tebas", resena:"Edipo resuelve el enigma de la Esfinge sin resolver el suyo: mata a su padre y desposa a su madre. La ciudad arrastrará la culpa hasta la guerra de los Siete contra Tebas y la desobediencia de Antígona.", ver:["dioniso"]},

 {era:"e5", marca:"Chispa", titulo:"La manzana de la discordia", resena:"A las bodas de Peleo y Tetis acuden todos los dioses salvo Eris, que arroja una manzana dedicada a la más bella. La disputa entre Hera, Atenea y Afrodita queda en manos de un pastor troyano.", ver:["afrodita","hera","atenea","aquiles"]},
 {era:"e5", marca:"Chispa", titulo:"El juicio de Paris", resena:"Cada diosa ofrece un soborno: poder, victoria en la guerra o la mujer más bella del mundo. Paris elige a Afrodita, se lleva a Helena de Esparta y arrastra consigo a mil naves.", ver:["afrodita","helena"]},
 {era:"e5", marca:"Guerra", titulo:"Diez años ante Ilión", resena:"La Ilíada no cuenta la guerra entera sino unas semanas del noveno año: la cólera de Aquiles, la muerte de Patroclo y el rescate del cuerpo de Héctor. Los dioses combaten en ambos bandos.", ver:["aquiles","zeus","atenea","apolo"]},
 {era:"e5", marca:"Caída", titulo:"El caballo y el saqueo", resena:"La astucia de Odiseo termina lo que diez años de asedio no pudieron. La ciudad arde, los templos se profanan y esa impiedad condena a los propios vencedores en el viaje de vuelta.", ver:["atenea","poseidon"]},
 {era:"e5", marca:"Regresos", titulo:"Los nostoi y la Odisea", resena:"Casi ningún héroe llega bien a casa: Agamenón cae asesinado al cruzar su umbral y Odiseo tarda otros diez años entre cíclopes, hechiceras y muertos. El regreso resulta más caro que la guerra.", ver:["poseidon","atenea"]},
 {era:"e5", marca:"Final", titulo:"El fin de la edad heroica", resena:"Orestes es absuelto por un tribunal humano y no por los dioses: la venganza cede ante la ley. Los semidioses se extinguen, Eneas huye hacia occidente y comienza la edad de hierro, la nuestra.", ver:["eneas","atenea"]}
];

const GENERACIONES = [
 {id:"g1", titulo:"Primordiales"},
 {id:"g2", titulo:"Titanes"},
 {id:"g3", titulo:"Segunda generación titánica"},
 {id:"g4", titulo:"Olímpicos"},
 {id:"g5", titulo:"Héroes y semidioses"}
];

/* padres: ids · pareja: ids (uniones notables) */
const FIGURAS = [
 {id:"caos", n:"Caos", rol:"Primordial", epi:"La sima que se abre", gen:"g1", padres:[],
  r:"El primer principio: un hueco bostezante, sin forma ni límite. No engendra por unión sino por simple aparición, y de él salen la noche y la sombra."},
 {id:"gea", n:"Gea", rol:"Primordial", epi:"La tierra de amplio pecho", gen:"g1", padres:["caos"], pareja:["urano","ponto","tartaro"],
  r:"Suelo firme y madre de casi todo lo que existe. Es también la conspiradora perpetua: arma a Crono contra Urano, y después a los Gigantes y a Tifón contra Zeus."},
 {id:"tartaro", n:"Tártaro", rol:"Primordial", epi:"El abismo bajo la tierra", gen:"g1", padres:["caos"], pareja:["gea"],
  r:"Tan lejos del suelo como el suelo del cielo: un yunque tardaría nueve días en caer. Es cárcel de los titanes y, con Gea, padre de Tifón."},
 {id:"eros", n:"Eros", rol:"Primordial", epi:"El que afloja los miembros", gen:"g1", padres:["caos"],
  r:"En la versión antigua no es el niño con arco sino la fuerza más vieja del mundo: sin él nada se une y la creación se detiene."},
 {id:"erebo", n:"Érebo", rol:"Primordial", epi:"La tiniebla", gen:"g1", padres:["caos"], pareja:["nix"],
  r:"La oscuridad densa que ocupa el espacio entre la tierra y el mundo de los muertos. De su unión con Nix nacen el aire luminoso y el día."},
 {id:"nix", n:"Nix", rol:"Primordial", epi:"La noche", gen:"g1", padres:["caos"], pareja:["erebo"],
  r:"Madre del Sueño, la Muerte, las Moiras y la Discordia. Hasta Zeus la respeta: la Ilíada cuenta que se abstuvo de ofenderla por temor."},
 {id:"urano", n:"Urano", rol:"Primordial", epi:"El cielo estrellado", gen:"g1", padres:["gea"], pareja:["gea"],
  r:"Nacido de Gea sin padre y convertido después en su esposo. Encierra a sus hijos monstruosos en el vientre de la tierra y por eso cae bajo la hoz de Crono."},
 {id:"ponto", n:"Ponto", rol:"Primordial", epi:"El mar sin cultivar", gen:"g1", padres:["gea"], pareja:["gea"],
  r:"El mar anterior a Poseidón, sin voluntad ni templos. Con Gea engendra a Nereo, el viejo del mar, y a la estirpe de los monstruos marinos."},
 {id:"ciclopes", n:"Los Cíclopes", rol:"Primordial", epi:"Brontes, Estéropes y Arges", gen:"g1", padres:["gea","urano"],
  r:"Herreros de un solo ojo, encerrados dos veces y liberados por Zeus. Su agradecimiento cambia la historia: forjan el rayo, el tridente y el casco de invisibilidad."},
 {id:"hecatonquiros", n:"Los Hecatónquiros", rol:"Primordial", epi:"Los de cien brazos", gen:"g1", padres:["gea","urano"],
  r:"Coto, Briareo y Giges, con cincuenta cabezas cada uno. Deciden la Titanomaquia arrojando trescientas rocas a la vez y quedan de guardianes en el Tártaro."},

 {id:"crono", n:"Crono", rol:"Titán", epi:"El de mente retorcida", gen:"g2", padres:["gea","urano"], pareja:["rea"],
  r:"El menor y más audaz de los titanes. Derroca a su padre y gobierna la edad de oro, pero devora a sus hijos por miedo a repetir su propio crimen."},
 {id:"rea", n:"Rea", rol:"Titánide", epi:"La madre de los dioses", gen:"g2", padres:["gea","urano"], pareja:["crono"],
  r:"Esposa y hermana de Crono. Salva a Zeus escondiéndolo en Creta y entregando a su marido una piedra envuelta en pañales."},
 {id:"oceano", n:"Océano", rol:"Titán", epi:"El río que rodea el mundo", gen:"g2", padres:["gea","urano"], pareja:["tetis-t"],
  r:"No participa en la guerra contra Zeus y conserva su dominio. De él y Tetis nacen los tres mil ríos y las oceánides."},
 {id:"tetis-t", n:"Tetis", rol:"Titánide", epi:"Nodriza de las aguas", gen:"g2", padres:["gea","urano"], pareja:["oceano"],
  r:"Madre de todos los cursos de agua dulce. No debe confundirse con Tetis la nereida, madre de Aquiles: son dos figuras distintas con nombre casi idéntico."},
 {id:"hiperion", n:"Hiperión", rol:"Titán", epi:"El que va por lo alto", gen:"g2", padres:["gea","urano"], pareja:["tea"],
  r:"Titán de la luz celeste y padre de los tres astros. Antes de Apolo, la carrera del sol le pertenece a su linaje."},
 {id:"tea", n:"Tea", rol:"Titánide", epi:"La de ojos brillantes", gen:"g2", padres:["gea","urano"], pareja:["hiperion"],
  r:"Diosa de la vista y del brillo del metal y las piedras preciosas. Los griegos creían que el oro reluce porque ella lo mira."},
 {id:"ceo", n:"Ceo", rol:"Titán", epi:"El eje del cielo", gen:"g2", padres:["gea","urano"], pareja:["febe"],
  r:"Titán del pilar norte y del intelecto que interroga. Abuelo de Apolo y Ártemis por su hija Leto."},
 {id:"febe", n:"Febe", rol:"Titánide", epi:"La resplandeciente", gen:"g2", padres:["gea","urano"], pareja:["ceo"],
  r:"Dueña del oráculo de Delfos antes que Apolo, a quien se lo cede como regalo. De ella toma su nieto el epíteto Febo."},
 {id:"crio", n:"Crío", rol:"Titán", epi:"El carnero", gen:"g2", padres:["gea","urano"],
  r:"El más oscuro de los doce, asociado a las constelaciones y al pilar sur. Su descendencia domina los vientos y los astros errantes."},
 {id:"japeto", n:"Jápeto", rol:"Titán", epi:"El perforador", gen:"g2", padres:["gea","urano"],
  r:"Padre de Prometeo, Epimeteo y Atlas: la rama titánica que se juega el destino de los mortales. Los griegos lo tenían por antepasado de la humanidad."},
 {id:"temis", n:"Temis", rol:"Titánide", epi:"La ley que no se escribe", gen:"g2", padres:["gea","urano"], pareja:["zeus"],
  r:"Encarna el orden justo y la costumbre. Consejera de Zeus y madre de las Horas y las Moiras, es la única titánide sentada en el Olimpo."},
 {id:"mnemosine", n:"Mnemósine", rol:"Titánide", epi:"La memoria", gen:"g2", padres:["gea","urano"], pareja:["zeus"],
  r:"Nueve noches con Zeus y nueve Musas: la poesía nace de la memoria, no de la inspiración súbita. Sin ella no habría relato del mito."},

 {id:"helios", n:"Helios", rol:"Titán menor", epi:"El sol", gen:"g3", padres:["hiperion","tea"],
  r:"Cruza el cielo en un carro de cuatro caballos y lo ve todo: es quien delata a Afrodita ante Hefesto y a Hades ante Deméter."},
 {id:"selene", n:"Selene", rol:"Titánide menor", epi:"La luna", gen:"g3", padres:["hiperion","tea"],
  r:"Conduce un carro de plata y ama al pastor Endimión, a quien Zeus concede un sueño eterno para que nunca envejezca."},
 {id:"eos", n:"Eos", rol:"Titánide menor", epi:"La de dedos de rosa", gen:"g3", padres:["hiperion","tea"],
  r:"Abre las puertas del cielo cada mañana. Pidió la inmortalidad para su amante Titono pero olvidó pedir la juventud, y él envejeció sin poder morir."},
 {id:"leto", n:"Leto", rol:"Titánide menor", epi:"La discreta", gen:"g3", padres:["ceo","febe"], pareja:["zeus"],
  r:"Perseguida por Hera, ninguna tierra firme se atreve a acogerla hasta que la isla flotante de Delos la recibe. Allí da a luz a los gemelos arqueros."},
 {id:"prometeo", n:"Prometeo", rol:"Titán menor", epi:"El que piensa antes", gen:"g3", padres:["japeto"],
  r:"Modela a los hombres con barro y les roba el fuego. Conoce el secreto que puede destronar a Zeus y por eso resiste treinta generaciones de tortura sin hablar."},
 {id:"epimeteo", n:"Epimeteo", rol:"Titán menor", epi:"El que piensa después", gen:"g3", padres:["japeto"],
  r:"Reparte todas las cualidades entre los animales y deja al hombre desnudo. Acepta a Pandora pese a la advertencia de su hermano."},
 {id:"atlas", n:"Atlas", rol:"Titán menor", epi:"El que sostiene", gen:"g3", padres:["japeto"],
  r:"Condenado a cargar la bóveda del cielo por su bando en la Titanomaquia. Solo se libra un instante, cuando Heracles se la sostiene para pedirle las manzanas de oro."},

 {id:"hestia", n:"Hestia", rol:"Olímpica", epi:"El hogar", gen:"g4", padres:["crono","rea"],
  r:"La primogénita devorada y la última en salir. Renuncia a su trono y a todo relato: su presencia es el fuego que no se deja apagar en la casa y en la ciudad."},
 {id:"demeter", n:"Deméter", rol:"Olímpica", epi:"La madre del grano", gen:"g4", padres:["crono","rea"], pareja:["zeus"],
  r:"Enseña la agricultura y controla la fertilidad de la tierra. Su duelo por Perséfone es la única vez que un dios doblega a otro por hambre."},
 {id:"hera", n:"Hera", rol:"Olímpica", epi:"Reina del Olimpo", gen:"g4", padres:["crono","rea"], pareja:["zeus"],
  r:"Diosa del matrimonio legítimo y esposa de un marido que jamás lo respeta. Su cólera persigue a las amantes y a los hijos bastardos, sobre todo a Heracles."},
 {id:"hades", n:"Hades", rol:"Olímpico", epi:"El de mucha riqueza", gen:"g4", padres:["crono","rea"], pareja:["persefone"],
  r:"Señor de los muertos, no dios de la maldad: es inflexible, no cruel. Casi nunca sube al Olimpo y su nombre se evita en voz alta."},
 {id:"poseidon", n:"Poseidón", rol:"Olímpico", epi:"El que sacude la tierra", gen:"g4", padres:["crono","rea"],
  r:"Manda en el mar, los caballos y los terremotos. Pierde el Ática ante Atenea y persigue a Odiseo por haber cegado a su hijo el cíclope."},
 {id:"zeus", n:"Zeus", rol:"Olímpico", epi:"Padre de dioses y hombres", gen:"g4", padres:["crono","rea"], pareja:["hera","demeter","leto","temis","mnemosine","alcmena","danae","leda","europa","semele","maya","metis"],
  r:"Guarda el rayo y el orden del mundo, incluido el juramento y la hospitalidad. Rompe el ciclo de padres derrocados tragando a Metis antes de que le dé un hijo más fuerte que él."},
 {id:"afrodita", n:"Afrodita", rol:"Olímpica", epi:"La nacida de la espuma", gen:"g4", padres:["urano"], pareja:["anquises"],
  r:"Surge del mar donde cayeron los restos de Urano, así que es más antigua que Zeus. Su poder no admite excepciones: solo Atenea, Ártemis y Hestia le resisten."},
 {id:"atenea", n:"Atenea", rol:"Olímpica", epi:"La de ojos de lechuza", gen:"g4", padres:["zeus","metis"],
  r:"Nace armada de la cabeza de Zeus. Es la guerra pensada frente a la carnicería de Ares, y patrona de los héroes que ganan con astucia: Perseo, Heracles, Odiseo."},
 {id:"apolo", n:"Apolo", rol:"Olímpico", epi:"El del arco de plata", gen:"g4", padres:["zeus","leto"],
  r:"Oráculo, música, medicina y peste: cura y mata con la misma flecha. Su templo en Delfos ordena conocerse a uno mismo y no pasarse de la raya."},
 {id:"artemisa", n:"Ártemis", rol:"Olímpica", epi:"La cazadora", gen:"g4", padres:["zeus","leto"],
  r:"Gemela de Apolo y virgen por elección. Protege a las crías y a las jóvenes, y castiga sin apelación a quien invade su bosque: Acteón terminó devorado por sus perros."},
 {id:"ares", n:"Ares", rol:"Olímpico", epi:"El azote de los hombres", gen:"g4", padres:["zeus","hera"], pareja:["afrodita"],
  r:"La guerra como matanza y pánico, sin gloria. Ni su padre lo quiere, y en la Ilíada Atenea lo derriba de un pedrada."},
 {id:"hefesto", n:"Hefesto", rol:"Olímpico", epi:"El herrero cojo", gen:"g4", padres:["hera"], pareja:["afrodita"],
  r:"Único dios que trabaja. Concebido por Hera sin varón y arrojado del Olimpo, se venga con obras maestras: las armas de Aquiles, los autómatas de oro, la red que atrapa a los amantes."},
 {id:"hermes", n:"Hermes", rol:"Olímpico", epi:"El de las sandalias aladas", gen:"g4", padres:["zeus","maya"],
  r:"Mensajero, ladrón, guía de los muertos y patrón de los caminos. El día que nació ya había robado el ganado de Apolo e inventado la lira para pagarle."},
 {id:"dioniso", n:"Dioniso", rol:"Olímpico", epi:"El nacido dos veces", gen:"g4", padres:["zeus","semele"],
  r:"Rescatado del vientre de su madre fulminada y cosido al muslo de Zeus. Trae el vino, el éxtasis y el teatro, y destruye a quien niega su divinidad."},
 {id:"persefone", n:"Perséfone", rol:"Olímpica", epi:"Reina del inframundo", gen:"g4", padres:["zeus","demeter"], pareja:["hades"],
  r:"Muchacha raptada y soberana temible a la vez. Los granos de granada que come la atan al mundo de abajo y reparten el año entre su madre y su esposo."},
 {id:"metis", n:"Metis", rol:"Oceánide", epi:"La astucia", gen:"g4", padres:["oceano","tetis-t"], pareja:["zeus"],
  r:"Primera esposa de Zeus y quien le dio la pócima que hizo vomitar a Crono. Él la traga estando embarazada, y así la inteligencia queda dentro del poder."},
 {id:"maya", n:"Maya", rol:"Pléyade", epi:"La mayor de las Pléyades", gen:"g4", padres:["atlas"], pareja:["zeus"],
  r:"Hija de Atlas, vive apartada en una cueva de Arcadia. Madre de Hermes, a quien encuentra fuera de la cuna la misma noche en que lo dio a luz."},
 {id:"semele", n:"Sémele", rol:"Mortal", epi:"La princesa tebana", gen:"g4", padres:[], pareja:["zeus"],
  r:"Engañada por Hera, pide ver a Zeus en su forma verdadera y el rayo la calcina. Su hijo Dioniso la rescatará después del Hades y la hará inmortal."},

 {id:"perseo", n:"Perseo", rol:"Héroe", epi:"El matador de Medusa", gen:"g5", padres:["zeus","danae"],
  r:"Concebido en una lluvia de oro dentro de una torre. Es el primer héroe de la estirpe de Zeus y el bisabuelo de Heracles: casi todos los linajes heroicos pasan por él."},
 {id:"danae", n:"Dánae", rol:"Mortal", epi:"La encerrada", gen:"g5", padres:[], pareja:["zeus"],
  r:"Su padre la aísla para evitar un oráculo y consigue justo lo contrario. Echada al mar en un arca con su hijo, sobrevive en la isla de Sérifos."},
 {id:"heracles", n:"Heracles", rol:"Héroe", epi:"La gloria de Hera", gen:"g5", padres:["zeus","alcmena"],
  r:"El más fuerte y el más castigado. Sus doce trabajos limpian el mundo de monstruos, y tras morir por la túnica envenenada de Neso es el único mortal admitido entre los dioses."},
 {id:"alcmena", n:"Alcmena", rol:"Mortal", epi:"La reina de Tirinto", gen:"g5", padres:[], pareja:["zeus"],
  r:"Zeus la visita con la forma de su marido y alarga la noche al triple. De ese engaño nace Heracles, y de la misma noche su hermano mortal Ificles."},
 {id:"helena", n:"Helena", rol:"Semidiosa", epi:"La de Esparta", gen:"g5", padres:["zeus","leda"],
  r:"Nacida de un huevo tras la visita de Zeus en forma de cisne. Su fuga con Paris desata la guerra de Troya, aunque una versión sostiene que solo viajó allí un fantasma suyo."},
 {id:"leda", n:"Leda", rol:"Mortal", epi:"La reina de Esparta", gen:"g5", padres:[], pareja:["zeus"],
  r:"Madre de Helena y de los Dioscuros. Sus hijos nacen mezclados, unos mortales y otros divinos, según de quién sean esa misma noche."},
 {id:"minos", n:"Minos", rol:"Rey", epi:"El juez de los muertos", gen:"g5", padres:["zeus","europa"],
  r:"Rey de Creta y dueño del laberinto. Oculta al Minotauro nacido del castigo de Poseidón y termina, tras morir, juzgando a las almas en el inframundo."},
 {id:"europa", n:"Europa", rol:"Mortal", epi:"La raptada por el toro", gen:"g5", padres:[], pareja:["zeus"],
  r:"Princesa fenicia llevada a Creta a lomos de un toro blanco. Su nombre acabó designando todo un continente y su hermano Cadmo fundó Tebas buscándola."},
 {id:"teseo", n:"Teseo", rol:"Héroe", epi:"El sinoicista de Atenas", gen:"g5", padres:["poseidon"],
  r:"Hijo de un padre doble, Egeo y Poseidón. Mata al Minotauro, unifica el Ática y encarna al héroe convertido en rey y legislador."},
 {id:"aquiles", n:"Aquiles", rol:"Héroe", epi:"El de los pies ligeros", gen:"g5", padres:[],
  r:"Hijo de Peleo y la nereida Tetis, invulnerable salvo en el talón. Elige a sabiendas la vida corta con gloria eterna sobre la larga y olvidada."},
 {id:"eneas", n:"Eneas", rol:"Héroe", epi:"El piadoso", gen:"g5", padres:["afrodita","anquises"],
  r:"Escapa de Troya en llamas cargando a su padre y llevando de la mano a su hijo. Su viaje hacia occidente convierte el final griego en el comienzo de Roma."},
 {id:"anquises", n:"Anquises", rol:"Mortal", epi:"El pastor del Ida", gen:"g5", padres:[], pareja:["afrodita"],
  r:"Amado por Afrodita y advertido de no jactarse jamás de ello. Habló, y quedó lisiado; su hijo tendría que sacarlo a hombros de la ciudad en ruinas."},
 {id:"orfeo", n:"Orfeo", rol:"Héroe", epi:"El que amansa a las piedras", gen:"g5", padres:[],
  r:"Hijo de la musa Calíope. Su música detiene el remo de Caronte y conmueve a Hades, pero mira atrás a un paso de la salida y pierde a Eurídice para siempre."}
];
