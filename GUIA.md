# Guía para editar el anexo

Todo el contenido vive en **`datos.js`**. Es el único archivo que necesitas
tocar: `index.html` solo se encarga de dibujar la página y no hay que abrirlo
para agregar nombres o episodios.

Dentro de `datos.js` hay cuatro listas:

| Lista | Qué contiene |
|---|---|
| `ERAS` | Los grandes bloques de la cronología (Era I, Era II…) |
| `CRONOLOGIA` | Cada episodio del hilo |
| `GENERACIONES` | Los bloques del árbol (Primordiales, Titanes…) |
| `FIGURAS` | Cada personaje |

Cada entrada va entre llaves `{ }`, separada de la siguiente por una **coma**.
La última de cada lista no lleva coma.

---

## 1. Agregar un personaje

Busca la lista `FIGURAS`, ponte al final de la generación que le corresponda,
agrega una coma a la entrada anterior y pega esto:

```js
{id:"cadmo", n:"Cadmo", rol:"Rey", epi:"El fundador de Tebas",
 gen:"g5", sexo:"m", padres:["agenor"], pareja:["harmonia"],
 r:"Sembró los dientes del dragón y de ellos brotaron los primeros tebanos."},
```

Qué significa cada campo:

- **`id`** — la etiqueta interna. Sin tildes, sin espacios, sin mayúsculas y sin
  repetirse. Es la que usarás en `padres`, `pareja` y `ver` para enlazar.
  Si dos figuras comparten nombre, distínguelas así: `tetis-t`.
- **`n`** — el nombre tal y como debe leerse. Aquí sí van tildes: `Sémele`.
- **`rol`** — la palabra pequeña bajo el nombre: `Héroe`, `Titánide`, `Mortal`…
  Inventa las que quieras.
- **`epi`** — el epíteto en cursiva. Puedes dejarlo vacío: `epi:""`.
- **`gen`** — a qué bloque del árbol pertenece: `g1` … `g5` (mira `GENERACIONES`).
- **`sexo`** — `"f"`, `"m"` o `"pl"` (para grupos como *Los Cíclopes*). Solo sirve
  para que la página escriba *casada con* o *casado con*, *hija* o *hijo*.
- **`padres`** — los `id` de sus padres. Si no los sabes: `padres:[]`.
- **`pareja`** — los `id` de sus uniones. Si no tiene ninguna, borra la línea entera.
  Basta anotar cada unión en **una** de las dos fichas: la otra la muestra sola.
- **`r`** — la reseña que aparece en el panel lateral.

**Los hijos no se escriben.** La página los deduce sola: si pones a Cadmo como
padre de alguien, ese alguien aparecerá automáticamente en la descendencia de
Cadmo. Solo hay que declarar los padres, nunca los hijos.

### Cómo decide el árbol dónde colgar a cada uno

En la vista **Linaje con flechas** cada figura aparece una sola vez, colgando del
**primer** padre de su lista. El segundo padre da nombre a la etiqueta:

```js
padres:["zeus","leto"]   →  cuelga de Zeus, bajo el rótulo "hijos con Leto"
padres:["leto","zeus"]   →  cuelga de Leto, bajo el rótulo "hijos con Zeus"
```

Si quieres mover una rama de sitio, invierte el orden de los padres.

### Uniones que no son matrimonios

Por defecto se lee *casada con* / *casado con*. Cuando no hubo boda, se pone la
palabra que corresponda:

```js
pareja:["hera", {id:"leto", rel:"amante"}, {id:"europa", rel:"rapto"}]
```

| `rel` | Cómo se lee | Dónde se escribe |
|---|---|---|
| *(nada)* | casada con · casado con | cualquiera de las dos fichas |
| `"amante"` | amante de | cualquiera de las dos |
| `"union"` | unida a · unido a | cualquiera de las dos |
| `"rapto"` | raptó a … · raptada por … | en la ficha de **quien rapta** |
| `"engano"` | engañó a … · engañada por … | en la ficha de **quien engaña** |

Las tres primeras se leen igual en ambas fichas, así que da lo mismo dónde las
pongas. Las dos últimas cambian de voz: se escriben en la ficha de quien hace la
acción y la otra las hereda al revés —en la de Zeus dice *raptó a Europa* y en la
de Europa, *raptada por Zeus*—. Escribe `"engano"` sin eñe.

Así está repartido ahora mismo:

- **casada/o con** — Gea y Urano · Crono y Rea · Océano y Tetis · Hiperión y Tea ·
  Ceo y Febe · Zeus con Hera, Metis y Temis · Hades y Perséfone · Hefesto y Afrodita
- **unida/o a** — Gea con Ponto y con Tártaro · Érebo y Nix · Zeus con Deméter y con Dánae
- **amante de** — Zeus con Leto, Mnemósine, Maya y Sémele · Ares y Afrodita ·
  Afrodita y Anquises
- **raptó a** — Zeus y Europa
- **engañó a** — Zeus con Alcmena y con Leda

Si alguna no te convence, cambia una sola palabra en `datos.js` y la página se
reescribe sola en las dos fichas.

---

## 2. Agregar un episodio a la cronología

En la lista `CRONOLOGIA`, colócalo entre los dos episodios que le correspondan
—el orden del archivo es el orden de la página— y pega:

```js
{era:"e4", marca:"Generación II", titulo:"Belerofonte y la Quimera",
 resena:"Doma a Pegaso con la brida de oro de Atenea y mata al monstruo desde el aire. Después quiso subir al Olimpo y la caída lo dejó cojo y ciego.",
 ver:["atenea","poseidon"]},
```

- **`era`** — a qué era pertenece: `e1` … `e5` (mira `ERAS`).
- **`marca`** — la etiqueta pequeña de arriba (*Origen*, *Guerra*, *Chispa*…).
  Inventa las que necesites.
- **`titulo`** — el nombre del episodio.
- **`resena`** — dos o tres frases; es lo que se abre al tocar el nudo.
- **`ver`** — los `id` de las figuras que quedan enlazadas al pie del episodio.
  Si no quieres ninguna: `ver:[]`.

**Para cambiar un episodio de sitio**, córtalo entero (desde `{` hasta `},`) y
pégalo donde toque. Si lo pasas a otra era, cambia también su campo `era`.

---

## 3. Quitar cosas

Dos maneras:

**Ocultarlo sin perderlo** (recomendado mientras avanzas con el libro). Agrega
`oculto:true` y desaparece de la página, pero el texto sigue guardado:

```js
{era:"e5", oculto:true, marca:"Regresos", titulo:"Los nostoi y la Odisea",
 resena:"…", ver:["poseidon"]},
```

Funciona igual en `FIGURAS`, en `ERAS` y en `GENERACIONES`. Para recuperarlo,
borra `oculto:true,` y vuelve a aparecer donde estaba.

**Borrarlo del todo**: elimina la entrada completa, desde su `{` hasta la coma
que la cierra. Si borras una figura, revisa que ningún `padres`, `pareja` o `ver`
la siga nombrando; si queda algún `id` huérfano, la página simplemente lo ignora
y no se rompe nada.

---

## 4. Agregar una era o una generación nuevas

En `ERAS` (manda el orden de la cronología):

```js
{id:"e6", num:"Era VI", titulo:"Después del mito", sub:"Lo que heredó Roma"}
```

En `GENERACIONES` (manda el orden de las fichas):

```js
{id:"g6", titulo:"Monstruos y bestias"}
```

Un bloque vacío no se dibuja: la era o la generación aparecen en cuanto tengan
al menos un episodio o una figura dentro.

---

## 5. Cómo comprobar que quedó bien

1. Guarda `datos.js`.
2. Abre `index.html` con doble clic (o recarga la pestaña con `Ctrl/Cmd + R`).
3. Si la página aparece **en blanco**, hay un error de puntuación en `datos.js`.
   No se pierde nada: deshaz el último cambio (`Ctrl/Cmd + Z`) y prueba otra vez.

### Los cuatro errores frecuentes

| Síntoma | Causa casi siempre |
|---|---|
| La página sale en blanco | Falta una coma entre dos entradas, o sobra la de la última |
| Sale en blanco | Se abrió una comilla `"` y no se cerró |
| Un nombre no aparece en el árbol | El `id` de `padres` está mal escrito o lleva tilde |
| Un enlace no se dibuja | El `id` en `ver` o en `pareja` no existe en `FIGURAS` |

Las comillas tienen que ser rectas (`"`), no curvas (`“ ”`). Si escribes en Word y
pegas, cámbialas a mano; es más seguro editar con el Bloc de notas, TextEdit en
modo texto plano, o directamente en GitHub.

### Editar desde GitHub, sin instalar nada

Entra al archivo `datos.js` en el repositorio, toca el lápiz (**Edit this file**),
haz el cambio y baja hasta **Commit changes**. Queda guardado con fecha y siempre
puedes volver a una versión anterior desde el historial.

---

## 6. Cambiar las palabras del árbol

Si prefieres otro vocabulario (*desposó a*, *engendró a*, *descendencia*…),
está todo junto en `index.html`, en las tres funciones bajo el rótulo
`PARENTESCO — las palabras y quién cuelga de quién`:

```js
function palNacio(s){return s==="pl"?"nacieron de":"nació de"}
```

Cambia el texto entre comillas y listo; no hace falta tocar nada más.
