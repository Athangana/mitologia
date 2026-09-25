# Guía para editar el anexo

Todo el contenido vive en **`datos.js`**. Es el único archivo que necesitas tocar:
`index.html` solo dibuja la página y no hace falta abrirlo para agregar figuras
ni episodios.

Dentro de `datos.js` hay cuatro listas:

| Lista | Qué contiene | Ahora mismo |
|---|---|---|
| `ERAS` | Los grandes bloques de la cronología | 5 |
| `CRONOLOGIA` | Cada episodio del hilo | 27 |
| `GENERACIONES` | Los bloques en que se ordena el índice | 14 |
| `FIGURAS` | Cada personaje | 244 |

Cada entrada va entre llaves `{ }`, separada de la siguiente por una **coma**.
La última de cada lista no lleva coma.

---

## 1. Agregar un personaje

Busca la lista `FIGURAS`, ponte al final del bloque que le corresponda, agrega una
coma a la entrada anterior y pega esto:

```js
{id:"cadmo", n:"Cadmo", rol:"Rey", epi:"El fundador de Tebas", gen:"gt",
 padres:["agenor","telefasa"], pareja:["harmonia"],
 r:"Sembró los dientes del dragón y de ellos brotaron los primeros tebanos.",
 v:"Apolodoro lo hace hijo de Agenor; otras fuentes, de Fénix."},
```

| Campo | Para qué sirve |
|---|---|
| `id` | La etiqueta interna. Sin tildes, sin espacios, en minúsculas y sin repetirse. Es la que usan `padres`, `pareja` y `ver` para enlazar. Si dos figuras comparten nombre, distínguelas así: `perses-2`. |
| `n` | El nombre tal como debe leerse. Aquí sí van tildes: `Sémele`. |
| `rol` | La palabra pequeña bajo el nombre: `Héroe`, `Titánide`, `Rey`, `Mortal`… Inventa las que quieras. |
| `epi` | El epíteto en cursiva. Puedes dejarlo vacío: `epi:""`. |
| `gen` | En qué bloque del índice aparece. La tabla está más abajo. |
| `padres` | Los `id` de sus padres. Si no los sabes: `padres:[]`. |
| `pareja` | Los `id` de sus uniones. Si no tiene ninguna, borra la línea entera. |
| `vinculos` | *Opcional.* Lazos que no son de sangre ni de unión: amistades, amores no correspondidos, servidumbres. |
| `r` | La reseña: el texto principal del panel. |
| `v` | *Opcional.* Variantes y fuentes: discrepancias entre autores, nombres alternativos, versiones minoritarias. Sale aparte, en letra más chica. |
| `img` | *Opcional.* La ruta de la ilustración, por ejemplo `img:"imagenes/cadmo.jpg"`. |

**Los hijos no se escriben nunca.** La página los deduce sola: si pones a Cadmo en
el campo `padres` de alguien, ese alguien aparecerá automáticamente en la
descendencia de Cadmo, en su panel y en el árbol. Solo se declaran los padres.

**Las uniones sí conviene escribirlas en las dos fichas.** En el diagrama
*Familia* basta con anotarla en una —la página mira también quién te nombra a ti—,
pero el panel lateral solo enseña lo que esa ficha declara. Si quieres que Cadmo
aparezca en el panel de Harmonía, Harmonía tiene que nombrar a Cadmo en su
`pareja`.

### Vínculos que no son de sangre ni de unión

Para lo que no cabe en `padres` ni en `pareja` —un amigo, un amor no
correspondido, una sirvienta— está `vinculos`, con la frase que corresponda:

```js
vinculos:[{id:"faeton", como:"Pariente, amigo o amante de"}]
```

Si basta con la fórmula neutra *Relacionado con*, alcanza el `id` suelto:
`vinculos:["faeton"]`.

Se escribe en **una sola** de las dos fichas: la otra lo hereda y lo enseña como
*Relacionado con*. Aparece en el panel, en una fila propia del diagrama *Familia*,
y en el *Árbol completo* como una línea de puntos entre los dos. Además, a una
figura sin padres la coloca a la altura de su vínculo en vez de dejarla suelta
arriba del todo: así Cicno queda junto a Faetón, y Clitia junto a Helios.

---

## 2. Los bloques del índice (`gen`)

| `gen` | Bloque | Fichas |
|---|---|---|
| `g1` | Primordiales | 14 |
| `gn` | Prole de la Noche | 21 |
| `gm` | Estirpe de Ponto | 35 |
| `g2` | Titanes | 12 |
| `g3` | Segunda generación titánica | 31 |
| `g4` | Olímpicos | 26 |
| `g5` | Héroes y semidioses | 17 |
| `gt` | Linaje de Ío · Fenicia, Tebas y Creta | 25 |
| `ga` | Casa de Argos | 15 |
| `ge` | Casa de Esparta | 6 |
| `gf` | Casa de Ftía · los Eácidas | 8 |
| `gs` | Linaje del Sol | 20 |
| `gy` | Casa de Troya | 6 |
| `gv` | Astros y vientos | 8 |

Este campo **solo** ordena el modo *Índice*. Los otros dos modos de la genealogía
no lo miran: el *Árbol completo* y el diagrama *Familia* se construyen con `padres`
y `pareja`, así que una figura sale en el lugar que le toca aunque su `gen` sea
discutible.

Para agregar un bloque nuevo, añade una línea a `GENERACIONES`:

```js
{id:"gx", titulo:"Casa de Micenas"}
```

El orden de esa lista es el orden en que salen los bloques. Un bloque vacío no se
dibuja: aparece en cuanto una figura lo use.

---

## 3. Agregar un episodio a la cronología

En `CRONOLOGIA`, colócalo entre los dos episodios que le correspondan —el orden del
archivo es el orden de la página— y pega:

```js
{era:"e4", marca:"Generación II", titulo:"Belerofonte y la Quimera",
 resena:"Doma a Pegaso con la brida de oro de Atenea y mata al monstruo desde el aire.",
 ver:["atenea","poseidon"]},
```

| Campo | Para qué sirve |
|---|---|
| `era` | A qué era pertenece. |
| `marca` | La etiqueta pequeña de arriba (*Origen*, *Guerra*, *Chispa*…). Inventa las que necesites. |
| `titulo` | El nombre del episodio. |
| `resena` | Dos o tres frases; es lo que se abre al tocar el nudo. |
| `ver` | Los `id` de las figuras que quedan enlazadas al pie. Si no quieres ninguna: `ver:[]`. |

Las cinco eras:

| `era` | Título | Subtítulo |
|---|---|---|
| `e1` | Era I — Antes del tiempo | El vacío y los primordiales |
| `e2` | Era II — El reino de Crono | Primera generación divina |
| `e3` | Era III — El orden olímpico | Zeus impone su ley |
| `e4` | Era IV — La edad de los héroes | Mortales con sangre divina |
| `e5` | Era V — Troya y el ocaso | El fin de la raza heroica |

**Para mover un episodio de sitio**, córtalo entero (desde `{` hasta `},`) y pégalo
donde toque. Si lo pasas a otra era, cambia también su campo `era`.

---

## 4. Quitar cosas

**Apartarlo sin perderlo** (recomendado mientras avanzas con el libro): envuelve la
entrada entre `/*` y `*/` y desaparece de la página, pero el texto sigue guardado.

```js
/* {era:"e5", marca:"Regresos", titulo:"Los nostoi y la Odisea",
    resena:"…", ver:["poseidon"]}, */
```

Envuelve la entrada **completa**, incluida su coma final, y no la dejes a medias.
Para recuperarla, quita las dos marcas. Funciona igual en las cuatro listas.

**Borrarlo del todo**: elimina la entrada entera. Si borras una figura, no hace
falta que persigas sus menciones: un `id` que ya no existe se ignora sin romper
nada, simplemente deja de dibujarse ese enlace.

---

## 5. Agregar ilustraciones

Guarda los archivos en una carpeta `imagenes` junto a `datos.js` y nómbralos en la
ficha:

```js
img:"imagenes/gea.jpg"
```

Conviene que sean cuadradas, de unos 400×400 píxeles. Aparecen en el círculo del
árbol y arriba del panel. Las figuras sin `img` muestran su inicial dentro del
círculo, así que puedes ir cargándolas de a poco sin que nada se vea a medio hacer.

---

## 6. Cómo comprobar que quedó bien

1. Guarda `datos.js`.
2. Abre `index.html` con doble clic (o recarga la pestaña con `Ctrl/Cmd + R`).
3. Si la página aparece **en blanco**, hay un error de puntuación en `datos.js`.
   No se pierde nada: deshaz el último cambio (`Ctrl/Cmd + Z`) y prueba otra vez.

### Los errores frecuentes

| Síntoma | Causa casi siempre |
|---|---|
| La página sale en blanco | Falta una coma entre dos entradas, o sobra la de la última |
| Sale en blanco | Se abrió una comilla `"` y no se cerró |
| Sale en blanco | Un comentario `/* … */` quedó sin cerrar |
| Una ficha no aparece en el índice | Su `gen` no coincide con ningún bloque de `GENERACIONES` (en el árbol sí sale) |
| Una figura cuelga suelta en el árbol | El `id` de `padres` está mal escrito o lleva tilde |
| Un enlace no se dibuja | El `id` en `ver` o en `pareja` no existe en `FIGURAS` |
| La unión se ve en *Familia* pero no en el panel | Solo está declarada en la otra ficha: agrégala también en esta |
| El círculo sale con una letra en vez de la ilustración | La ruta de `img` no coincide con el archivo, o falta subir la carpeta |

Las comillas tienen que ser rectas (`"`), no curvas (`“ ”`). Si escribes en Word y
pegas, cámbialas a mano; es más seguro editar con el Bloc de notas, TextEdit en
modo texto plano, o directamente en GitHub.

### Editar desde GitHub, sin instalar nada

Entra al archivo `datos.js` en el repositorio, toca el lápiz (**Edit this file**),
haz el cambio y baja hasta **Commit changes**. Queda guardado con fecha y siempre
puedes volver a una versión anterior desde el historial.

---

## 7. Las tres vistas de la genealogía

| Modo | Qué muestra | De qué se alimenta |
|---|---|---|
| **Árbol completo** | Todas las figuras en un lienzo que se arrastra y se acerca. Empieza centrado en el Caos; el botón □ enseña el conjunto | `padres` (calcula la profundidad de cada una) y `pareja` |
| **Familia** | Una familia por vez: arriba los padres, al centro la unión, abajo la descendencia agrupada según con quién se tuvo | `padres` y `pareja` |
| **Índice** | La rejilla de fichas ordenada por bloques | `gen` |

Los tres abren el mismo panel de reseña al tocar un nombre, y el buscador de arriba
mira el nombre, el epíteto, la reseña y las variantes.
