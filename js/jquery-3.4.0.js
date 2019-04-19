/ *!
 * jQuery JavaScript Library v3.4.0
 * https://jquery.com/
 *
 * Incluye Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores.
 * Lanzado bajo la licencia MIT
 * https://jquery.org/license
 *
 * Fecha: 2019-04-10T19: 48Z
 * /
(función (global, fábrica) {

	"uso estricto";

	if (typeof module === "object" && typeof module.exports === "object") {

		// Para entornos similares a CommonJS y CommonJS donde una 'ventana' adecuada
		// está presente, ejecuta la fábrica y consigue jQuery.
		// Para entornos que no tienen una `ventana` con un` documento`
		// (como Node.js), expone una fábrica como module.exports.
		// Esto acentúa la necesidad de crear una 'ventana' real.
		// p. ej. var jQuery = require ("jquery") (ventana);
		// Vea el boleto # 14549 para más información.
		module.exports = global.document?
			fábrica (global, verdadero):
			función (w) {
				si (! w.document) {
					lanzar nuevo error ("jQuery requiere una ventana con un documento");
				}
				fábrica de retorno (w);
			};
	} else {
		fábrica (global);
	}

// Pasa esto si la ventana aún no está definida.
}) (typeof window! == "undefined"? window: this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lanzar excepciones cuando el código no estricto (por ejemplo, ASP.NET 4.5) accede al modo estricto
// argument.callee.caller (trac-13335). Pero a partir de jQuery 3.0 (2016), el modo estricto debería ser común
// basta con que todos esos intentos estén protegidos en un bloque try.
"uso estricto";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Object);

soporte var = {};

var isFunction = function isFunction (obj) {

      // Soporte: Chrome <= 57, Firefox <= 52
      // En algunos navegadores, typeof devuelve "function" para elementos <object> HTML
      // (es decir, `typeof document.createElement (" object ") ===" function "`).
      // No queremos clasificar * ningún * nodo DOM como una función.
      devuelve typeof obj === "function" && typeof obj.nodeType! == "number";
  };


var isWindow = función isWindow (obj) {
		return obj! = null && obj === obj.window;
	};




	var preserveScriptAttributes = {
		tipo: verdadero,
		src: verdadero,
		nonce: verdadero,
		noModule: true
	};

	función DOMEval (código, nodo, documento) {
		doc = doc || documento;

		var i, val,
			script = doc.createElement ("script");

		script.text = código;
		if (nodo) {
			para (i en preservScriptAtributos) {

				// Soporte: Firefox 64+, Edge 18+
				// Algunos navegadores no admiten la propiedad "nonce" en los scripts.
				// Por otro lado, solo usar `getAttribute` no es suficiente como
				// el atributo `nonce` se restablece a una cadena vacía siempre que
				// se convierte en navegador de contexto conectado.
				// Ver https://github.com/whatwg/html/issues/2369
				// Ver https://html.spec.whatwg.org/#nonce-attributes
				// La comprobación `node.getAttribute` fue agregada por el bien de
				// `jQuery.globalEval` para que pueda falsificar un nodo que no contiene
				// a través de un objeto.
				val = nodo [i] || node.getAttribute && node.getAttribute (i);
				if (val) {
					script.setAttribute (i, val);
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


función toType (obj) {
	if (obj == null) {
		devuelve obj + "";
	}

	// Soporte: Android <= 2.3 solamente (función RegExp)
	tipo de objeto devuelto === "objeto" || typeof obj === "function"?
		class2type [toString.call (obj)] || "objeto":
		typeof obj;
}
/ * Símbolo global * /
// Definir este global en .eslintrc.json crearía un peligro de usar el global
// sin vigilancia en otro lugar, parece más seguro definir global solo para este módulo



var
	version = "3.4.0",

	// Definir una copia local de jQuery
	jQuery = función (selector, contexto) {

		// El objeto jQuery es en realidad solo el constructor init 'mejorado'
		// Necesita inicio si se llama a jQuery (solo permita que se produzca un error si no está incluido)
		devolver nuevo jQuery.fn.init (selector, contexto);
	}

	// Soporte: Android <= 4.0 solamente
	// Asegúrate de recortar BOM y NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	// La versión actual de jQuery en uso
	jquery: version,

	constructor: jQuery,

	// La longitud predeterminada de un objeto jQuery es 0
	longitud: 0,

	toArray: function () {
		devolver slice.call (esto);
	}

	// Obtener el elemento Nth en el conjunto de elementos coincidentes O
	// Obtener todo el conjunto de elementos emparejados como una matriz limpia
	obtener: función (num) {

		// Devuelve todos los elementos en una matriz limpia
		if (num == null) {
			devolver slice.call (esto);
		}

		// Devuelve solo un elemento del conjunto
		devuelve num <0? este [num + this.length]: este [num];
	}

	// Toma una matriz de elementos y empújalo en la pila
	// (devolviendo el nuevo conjunto de elementos coincidentes)
	pushStack: function (elems) {

		// Construir un nuevo conjunto de elementos coincidentes de jQuery
		var ret = jQuery.merge (this.constructor (), elems);

		// Añadir el objeto antiguo a la pila (como referencia)
		ret.prevObject = esto;

		// Devuelve el conjunto de elementos recién formado
		volver ret
	}

	// Ejecutar una devolución de llamada para cada elemento en el conjunto coincidente.
	each: function (callback) {
		return jQuery.each (this, callback);
	}

	mapa: función (devolución de llamada) {
		devuelve this.pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	}

	slice: function () {
		devuelve this.pushStack (slice.apply (this, argumentos));
	}

	primero: function () {
		devuelve this.eq (0);
	}

	last: function () {
		devuelve this.eq (-1);
	}

	eq: función (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		devuelve this.pushStack (j> = 0 && j <len? [this [j]]: []);
	}

	end: function () {
		devuelve this.prevObject || este.constructor ();
	}

	// Sólo para uso interno.
	// Se comporta como el método de un Array, no como el método jQuery.
	empuja empuja,
	tipo: arr.sort,
	empalme: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	opciones de var, nombre, fuente, copia, copyIsArray, clon,
		target = argumentos [0] || {}
		i = 1,
		longitud = argumentos.longitud,
		profundo = falso;

	// Manejar una situación de copia profunda
	if (typeof target === "boolean") {
		profundo = objetivo;

		// Salta el booleano y el objetivo
		target = argumentos [i] || {};
		i ++;
	}

	// Manejar caso cuando el objetivo es una cadena o algo (posible en copia profunda)
	if (typeof target! == "object" &&! isFunction (target)) {
		target = {};
	}

	// Extiende jQuery si solo se pasa un argumento
	if (i === longitud) {
		objetivo = esto;
		yo--;
	}

	para (; i <longitud; i ++) {

		// Solo tratar con valores no nulos / indefinidos
		si ((opciones = argumentos [i])! = nulo) {

			// Extender el objeto base
			para (nombre en opciones) {
				copia = opciones [nombre];

				// Prevenir la contaminación de objetos y prototipos.
				// Prevenir el bucle interminable
				if (name === "__proto__" || target === copy) {
					continuar;
				}

				// Recurse si estamos fusionando objetos simples o matrices
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copia)))) {
					src = target [nombre];

					// Asegurar el tipo apropiado para el valor de origen
					if (copyIsArray &&! Array.isArray (src)) {
						clon = [];
					} else if (! copyIsArray &&! jQuery.isPlainObject (src)) {
						clon = {};
					} else {
						clon = src;
					}
					copyIsArray = false;

					// Nunca muevas objetos originales, clónalos
					target [nombre] = jQuery.extend (deep, clone, copy);

				// No traer valores indefinidos
				} else if (copia! == indefinido) {
					target [nombre] = copiar;
				}
			}
		}
	}

	// Devolver el objeto modificado
	objetivo de retorno
};

jQuery.extend ({

	// Único para cada copia de jQuery en la página
	expando: "jQuery" + (version + Math.random ()) .replace (/ \ D / g, ""),

	// Supongamos que jQuery está listo sin el módulo listo
	isReady: verdadero,

	error: función (msg) {
		lanzar nuevo error (msg);
	}

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, ctor;

		// Detectar negativos obvios
		// Use toString en lugar de jQuery.type para capturar objetos del host
		if (! obj || toString.call (obj)! == "[object Object]") {
			falso retorno;
		}

		proto = getProto (obj);

		// Los objetos sin prototipo (por ejemplo, `Object.create (null)`) son simples
		si (! proto) {
			devuelve verdadero
		}

		// Los objetos con prototipo son simples si fueron construidos por una función de objeto global
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		devuelva typeof Ctor === "function" && fnToString.call (Ctor) === ObjectFunctionString;
	}

	isEmptyObject: function (obj) {
		nombre var

		para (nombre en obj) {
			falso retorno;
		}
		devuelve verdadero
	}

	// Evalúa un script en un contexto global
	globalEval: función (código, opciones) {
		DOMEval (código, {nonce: options && options.nonce});
	}

	each: function (obj, callback) {
		longitud var, i = 0;

		if (isArrayLike (obj)) {
			longitud = obj.length;
			para (; i <longitud; i ++) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					descanso;
				}
			}
		} else {
			para (i en obj) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					descanso;
				}
			}
		}

		volver obj;
	}

	// Soporte: Android <= 4.0 solamente
	recortar: función (texto) {
		devuelve texto == nulo?
			"":
			(texto + "") .replace (rtrim, "");
	}

	// los resultados son solo para uso interno
	makeArray: función (arr, resultados) {
		var ret = resultados || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "string"?
					[arr]: arr
				);
			} else {
				push.call (ret, arr);
			}
		}

		volver ret
	}

	inArray: function (elem, arr, i) {
		volver arr == null? -1: indexOf.call (arr, elem, i);
	}

	// Soporte: Android <= 4.0 solamente, PhantomJS 1 solamente
	// push.apply (_, arraylike) lanza en el antiguo WebKit
	fusionar: función (primero, segundo) {
		var len = + second.length,
			j = 0,
			i = first.length;

		para (; j <len; j ++) {
			primero [i ++] = segundo [j];
		}

		first.length = i;

		regresa primero
	}

	grep: function (elems, callback, invert) {
		var callbackInverse,
			concuerda = [],
			i = 0,
			longitud = elems.length,
			callbackExpect =! invert;

		// Ir a través de la matriz, solo guardando los elementos
		// que pasa la función de validador
		para (; i <longitud; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				fósforos.push (elems [i]);
			}
		}

		partidos de vuelta;
	}

	// arg es solo para uso interno
	map: function (elems, callback, arg) {
		longitud var, valor,
			i = 0,
			ret = [];

		// Ir a través de la matriz, traduciendo cada uno de los elementos a sus nuevos valores
		if (isArrayLike (elems)) {
			longitud = elems.length;
			para (; i <longitud; i ++) {
				valor = devolución de llamada (elems [i], i, arg);

				si (valor! = nulo) {
					ret.push (valor);
				}
			}

		// Ir a través de cada tecla en el objeto,
		} else {
			para (i in elems) {
				valor = devolución de llamada (elems [i], i, arg);

				si (valor! = nulo) {
					ret.push (valor);
				}
			}
		}

		// Aplanar cualquier matriz anidada
		devolver concat.apply ([], ret);
	}

	// Un contador GUID global para objetos
	guid: 1,

	// jQuery.support no se usa en Core pero otros proyectos adjuntan sus
	// propiedades a ella por lo que necesita existir.
	soporte soporte
});

if (typeof Symbol === "function") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Rellenar el mapa class2type
jQuery.each ("Booleano Número Cadena Función Array Fecha RegExp Objeto Símbolo de error" .split (""),
función (i, nombre) {
	class2type ["[object" + name + "]"] = name.toLowerCase ();
});

función isArrayLike (obj) {

	// Soporte: solo iOS 8.2 real (no reproducible en simulador)
	// `in 'check usado para prevenir el error JIT (gh-2145)
	// hasOwn no se usa aquí debido a falsos negativos
	// con respecto a la longitud de Nodelist en IE
	var length = !! obj && "length" en obj && obj.length,
		type = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		falso retorno;
	}

	tipo de retorno === "array" || longitud === 0 ||
		typeof length === "number" && length> 0 && (length - 1) en obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores.
 * Lanzado bajo la licencia MIT
 * https://js.foundation/
 *
 * Fecha: 2019-04-08
 * /
(función (ventana) {

var i
	apoyo,
	Expr
	getText
	isXML,
	tokenizar
	compilar,
	seleccionar,
	contexto externo,
	sortInput,
	ha duplicado,

	// Vars de documentos locales
	setDocument,
	documento,
	docelema
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	partidos,
	contiene,

	// Datos específicos de la instancia
	expando = "chisporrotear" + 1 * nueva Fecha (),
	preferredDoc = window.document,
	dirruns = 0,
	hecho = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	nonnativeSelectorCache = createCache (),
	sortOrder = función (a, b) {
		si (a === b) {
			hasDuplicate = true;
		}
		devuelve 0;
	}

	// Métodos de instancia
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use un índice reducido como es más rápido que el nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = función (lista, elemento) {
		var i = 0,
			len = list.length;
		para (; i <len; i ++) {
			if (list [i] === elem) {
				regreso i;
			}
		}
		devuelve -1;
	}

	booleans = "seleccionado | seleccionado | async | autofocus | autoplay | controles | diferir | deshabilitado | oculto | ismap | loop | multiple | open | readonly | required | scoped",

	// Expresiones regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) +",

	// Selectores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\ [" + whitespace + "* (" + identifier + ") (?:" + whitespace +
		// Operador (captura 2)
		"* ([* ^ $ |! ~]? =)" + espacios en blanco +
		// "Los valores de atributo deben ser identificadores de CSS [captura 5] o cadenas [captura 3 o captura 4]"
		"* (?: '((?? \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| (" + identifier + "))))) + whitespace +
		"* \\]",

	pseudos = ":(" + identifier + ") (?: \\ ((" +
		// Para reducir el número de selectores que necesitan tokenize en el prefiltro, prefiera los argumentos:
		// 1. citado (captura 3; captura 4 o captura 5)
		"('(((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +
		// 2. simple (captura 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + atributos + ") *) |" +
		// 3. cualquier otra cosa (captura 2)
		". *" +
		") \\) |)",

	// Espacios en blanco al final y sin escape, que capturan algunos caracteres que no son espacios en blanco que preceden al último
	rwhitespace = new RegExp (espacio en blanco + "+", "g"),
	rtrim = new RegExp ("^" + espacio en blanco + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + whitespace + "+ $", "g "),

	rcomma = new RegExp ("^" + espacio en blanco + "*," + espacio en blanco + "*"),
	rcombinators = new RegExp ("^" + espacio en blanco + "* ([> + ~] |" + espacio en blanco + ")" + espacio en blanco + "*"),
	rdescend = new RegExp (espacios en blanco + "|>"),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ("^" + identifier + "$"),

	matchExpr = {
		"ID": nuevo RegExp ("^ # (" + identifier + ")"),
		"CLASE": nuevo RegExp ("^ \\. (" + Identifier + ")"),
		"TAG": nuevo RegExp ("^ (" + identifier + "| [*])"),
		"ATTR": nuevo RegExp ("^" + atributos),
		"PSEUDO": nuevo RegExp ("^" + pseudos),
		"CHILD": nuevo RegExp ("^ :( solo | primero | último | nth | nth-last) - (child | of-type) (?: \\ (" + whitespace +
			"* (par | impar | (([+ -] |) (\\ d *) n |)" + espacio en blanco + "* (?: ([+ -] |)" + espacio en blanco +
			"* (\\ d +) |))" + espacio en blanco + "* \\) |)", "i"),
		"bool": nuevo RegExp ("^ (?:" + booleans + ") $", "i"),
		// Para uso en bibliotecas implementando .is ()
		// Lo usamos para la coincidencia de POS en `select`
		"needsContext": new RegExp ("^" + espacio en blanco + "* [> + ~] |: (incluso | impar | eq | gt | lt | nth | first | last) (?: \\ (" +
			espacio en blanco + "* ((?: - \\ d)? \\ d *)" + espacio en blanco + "* \\) |) (? = [^ -] | $)", "i")
	}

	rhtml = / HTML $ / i,
	rinputs = / ^ (?: input | select | textarea | button) $ / i,
	rheader = / ^ h \ d $ / i,

	rnativo = / ^ [^ {] + \ {\ s * \ [nativo \ w /,

	// Selectores de ID o TAG o CLASS fácilmente analizables / recuperables
	rquickExpr = /^(?:#([\w-◆+)|(\w+)|\.([\w-◆+))$/,

	rsibling = / [+ ~] /,

	// escapes CSS
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ ([\\ da-f] {1,6}" + espacio en blanco + "? | (" + espacio en blanco + ") |.)", "ig"),
	funescape = function (_, escaped, escapedWhitespace) {
		var alto = "0x" + escapado - 0x10000;
		// NaN significa no punto de código
		// Soporte: Firefox <24
		// Interpretación numérica errónea de la solución de + "0x"
		retorno alto! == alto || escapedWhitespace?
			escapado :
			alto <0?
				// punto de código BMP
				String.fromCharCode (alto + 0x10000):
				// Punto de código del plano suplementario (par suplente)
				String.fromCharCode (alto >> 10 | 0xD800, alto & 0x3FF | 0xDC00);
	}

	// CSS serie / identificador de serialización
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (comoCodePoint) {

			// U + 0000 NULL se convierte en U + FFFD CARACTER DE SUSTITUCIÓN
			if (ch === "\ 0") {
				devuelve "\ uFFFD";
			}

			// Los caracteres de control y los números (dependientes de la posición) se escapan como puntos de código
			devuelve ch.slice (0, -1) + "\\" + ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// Otros caracteres ASCII potencialmente especiales obtienen una barra invertida-escapada
		devuelve "\\" + ch;
	}

	// Utilizado para iframes
	// Ver setDocument ()
	// La eliminación del envoltorio de función provoca un "Permiso denegado"
	// error en IE
	unloadHandler = function () {
		setDocument ();
	}

	inDisabledFieldset = addCombinator (
		función (elem) {
			return elem.disabled === true && elem.nodeName.toLowerCase () === "fieldset";
		}
		{dir: "parentNode", siguiente: "legend"}
	);

// Optimizar para push.apply (_, NodeList)
tratar {
	aplicar
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);
	// Soporte: Android <4.0
	// Detecta silenciosamente fallando push.apply
	arr [preferredDoc.childNodes.length] .nodeType;
} atrapar (e) {
	push = {apply: arr.length?

		// Aprovechar el segmento si es posible
		función (objetivo, els) {
			push_native.apply (target, slice.call (els));
		}:

		// Soporte: IE <9
		// De lo contrario, agregue directamente
		función (objetivo, els) {
			var j = target.length,
				i = 0;
			// No puedo confiar en NodeList.length
			while ((target [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

función Sizzle (selector, contexto, resultados, semilla) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType por defecto es 9, ya que el contexto por defecto es el documento
		nodeType = context? context.nodeType: 9;

	resultados = resultados || [];

	// Retorno temprano de llamadas con selector o contexto inválido
	if (typeof selector! == "string" ||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		resultados de retorno
	}

	// Intente realizar accesos directos a las operaciones de búsqueda (a diferencia de los filtros) en documentos HTML
	si (! semilla) {

		if ((context? context.ownerDocument || context: preferredDoc)! == document) {
			setDocument (contexto);
		}
		contexto = contexto || documento;

		if (documentIsHTML) {

			// Si el selector es lo suficientemente simple, intente usar un método DOM "obtener * por *"
			// (exceptuando el contexto DocumentFragment, donde los métodos no existen)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector))) {

				// selector de ID
				if ((m = match [1])) {

					// Contexto del documento
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// Soporte: IE, Opera, Webkit
							// TODO: identificar versiones
							// getElementById puede hacer coincidir elementos por nombre en lugar de ID
							if (elem.id === m) {
								resultados.push (elem);
								resultados de retorno
							}
						} else {
							resultados de retorno
						}

					// contexto del elemento
					} else {

						// Soporte: IE, Opera, Webkit
						// TODO: identificar versiones
						// getElementById puede hacer coincidir elementos por nombre en lugar de ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contiene (contexto, elem) &&
							elem.id === m) {

							resultados.push (elem);
							resultados de retorno
						}
					}

				// Selector de tipo
				} else if (match [2]) {
					push.apply (results, context.getElementsByTagName (selector));
					resultados de retorno

				// selector de clase
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (results, context.getElementsByClassName (m));
					resultados de retorno
				}
			}

			// Aprovecha QuerySelectorAll
			si (support.qsa &&
				! nonnativeSelectorCache [selector + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (selector)) &&

				// Soporte: solo IE 8
				// Excluir elementos de objeto
				(nodeType! == 1 || context.nodeName.toLowerCase ()! == "object")) {

				newSelector = selector;
				newContext = context;

				// qSA considera elementos fuera de una raíz de alcance cuando evalúa un hijo o
				// combinadores descendientes, que no es lo que queremos.
				// En tales casos, resolvemos el comportamiento prefijando cada selector en el
				// lista con un selector de ID que hace referencia al contexto del ámbito.
				// Gracias a Andrew Dupont por esta técnica.
				if (nodeType === 1 && rdescend.test (selector)) {

					// Capture el ID de contexto, configurándolo primero si es necesario
					if ((nid = context.getAttribute ("id"))) {
						nid = nid.replace (rcssescape, fcssescape);
					} else {
						context.setAttribute ("id", (nid = expando));
					}

					// Prefijo cada selector en la lista
					groups = tokenize (selector);
					i = grupos.longitud;
					mientras yo-- ) {
						grupos [i] = "#" + nid + "" + toSelector (grupos [i]);
					}
					newSelector = groups.join (",");

					// Expandir el contexto para los selectores de hermanos
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						contexto;
				}

				tratar {
					push.apply (resultados,
						newContext.querySelectorAll (newSelector)
					);
					resultados de retorno
				} catch (qsaError) {
					nonnativeSelectorCache (selector, true);
				} finalmente {
					if (nid === expando) {
						context.removeAttribute ("id");
					}
				}
			}
		}
	}

	// Todos los otros
	return select (selector.replace (rtrim, "$ 1"), contexto, resultados, semilla);
}

/ **
 * Crear cachés clave-valor de tamaño limitado
 * @returns {function (string, object)} Devuelve los datos del Objeto después de almacenarlo en sí mismo con
 * nombre de la propiedad la cadena (con sufijo de espacio) y (si el caché es más grande que Expr.cacheLength)
 * eliminando la entrada más antigua
 * /
función createCache () {
	teclas var = [];

	función caché (clave, valor) {
		// Use (clave + "") para evitar la colisión con las propiedades del prototipo nativo (ver Problema # 157)
		if (keys.push (key + "")> Expr.cacheLength) {
			// Mantener solo las entradas más recientes.
			eliminar caché [keys.shift ()];
		}
		return (caché [clave + ""] = valor);
	}
	caché de retorno
}

/ **
 * Marca una función para uso especial de Sizzle.
 * @param {Función} fn La función a marcar
 * /
función markFunction (fn) {
	fn [expando] = verdadero;
	devuelve fn;
}

/ **
 * Soporte de pruebas utilizando un elemento.
 * @param {Función} fn Pasó el elemento creado y devuelve un resultado booleano
 * /
función de afirmación (fn) {
	var el = document.createElement ("fieldset");

	tratar {
		vuelve !! fn (el);
	} atrapar (e) {
		falso retorno;
	} finalmente {
		// Eliminar de su padre por defecto
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}
		// liberar memoria en IE
		el = nulo;
	}
}

/ **
 * Agrega el mismo controlador para todos los atributos especificados
 * @param {String} attrs Lista de atributos separados por tuberías
 * @param {Función} handler El método que se aplicará
 * /
función addHandle (attrs, handler) {
	var arr = attrs.split ("|"),
		i = arr.length;

	mientras yo-- ) {
		Expr.attrHandle [arr [i]] = controlador;
	}
}

/ **
 * Verifica el orden del documento de dos hermanos.
 * @param {Elemento} a
 * @param {Elemento} b
 * @returns {Number} Devuelve menos de 0 si a precede a b, mayor a 0 si a sigue a b
 * /
función siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex si está disponible en ambos nodos
	if (diff) {
		volver dif
	}

	// Comprueba si b sigue a
	if (cur) {
		while ((cur = cur.nextSibling)) {
			si (cur === b) {
				devuelve -1;
			}
		}
	}

	devolver un? 1: -1;
}

/ **
 * Devuelve una función para usar en pseudos para tipos de entrada
 * @param {String} type
 * /
función createInputPseudo (tipo) {
	función de retorno (elem) {
		nombre var = elem.nodeName.toLowerCase ();
		nombre de retorno === "entrada" && elem.type === tipo;
	};
}

/ **
 * Devuelve una función para usar en pseudos para botones.
 * @param {String} type
 * /
función createButtonPseudo (tipo) {
	función de retorno (elem) {
		nombre var = elem.nodeName.toLowerCase ();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/ **
 * Devuelve una función para usar en pseudos para: habilitado /: deshabilitado
 * @param {Boolean} disabled true para: disabled; falso para: habilitado
 * /
función createDisabledPseudo (deshabilitado) {

	// Conocido: deshabilitado falsos positivos: fieldset [deshabilitado]> leyenda: nth-of-type (n + 2): can-disable
	función de retorno (elem) {

		// Solo ciertos elementos pueden coincidir: habilitado o: deshabilitado
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("forma" en elem) {

			// Verifique la incapacidad heredada en elementos relevantes no deshabilitados:
			// * enumeró los elementos asociados al formulario en un fieldset deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opción en un optgroup deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos estos elementos tienen una propiedad "formulario".
			if (elem.parentNode && elem.disabled === false) {

				// Los elementos de la opción se remiten a un grupo optativo principal si está presente
				if ("label" en elem) {
					if ("label" en elem.parentNode) {
						devolver elem.parentNode.disabled === deshabilitado;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Soporte: IE 6 - 11
				// Use la propiedad de acceso directo isDisabled para verificar los antepasados ​​deshabilitados de conjuntos de campos
				devolver elem.isDisabled === deshabilitado ||

					// Donde no hay isDisabled, verifique manualmente
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
						inDisabledFieldset (elem) === deshabilitado;
			}

			return elem.disabled === disabled;

		// Intente descifrar elementos que no puedan ser deshabilitados antes de confiar en la propiedad deshabilitada.
		// Algunas víctimas quedan atrapadas en nuestra red (etiqueta, leyenda, menú, pista), pero no debería
		// Incluso existen en ellos, y mucho menos tener un valor booleano.
		} else if ("label" en elem) {
			return elem.disabled === disabled;
		}

		// Los elementos restantes no son: habilitados ni: deshabilitados
		falso retorno;
	};
}

/ **
 * Devuelve una función para usar en pseudos para posicionales.
 * @param {Función} fn
 * /
función createPositionalPseudo (fn) {
	return markFunction (function (argumento) {
		argumento = + argumento;
		return markFunction (función (semilla, coincidencias) {
			var j
				matchIndexes = fn ([], seed.length, argumento),
				i = matchIndexes.length;

			// Coincidir elementos encontrados en los índices especificados
			mientras yo-- ) {
				if (semilla [(j = matchIndexes [i])]) {
					semilla [j] =! (coincide con [j] = semilla [j]);
				}
			}
		});
	});
}

/ **
 * Comprueba la validez de un nodo como contexto Sizzle
 * @param {Elemento | Objeto =} contexto
 * @returns {Elemento | Objeto | Booleano} El nodo de entrada si es aceptable, de lo contrario es un valor falso
 * /
función testContext (contexto) {
	devolver contexto && typeof context.getElementsByTagName! == "undefined" && context;
}

// Exponer vars de soporte por conveniencia
support = Sizzle.support = {};

/ **
 * Detecta nodos XML
 * @param {Elemento | Objeto} elem Un elemento o un documento
 * @returns {Boolean} Verdadero si elem es un nodo XML no HTML
 * /
isXML = Sizzle.isXML = function (elem) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem) .documentElement;

	// Soporte: IE <= 8
	// Supongamos HTML cuando documentElement aún no existe, como dentro de los iframes de carga
	// https://bugs.jquery.com/ticket/4833
	return! rhtml.test (namespace || docElem && docElem.nodeName || "HTML");
};

/ **
 * Establece las variables relacionadas con el documento una vez basadas en el documento actual
 * @param {Elemento | Objeto} [doc] Un elemento u objeto de documento a usar para configurar el documento
 * @returns {Objeto} Devuelve el documento actual
 * /
setDocument = Sizzle.setDocument = function (node) {
	var hasCompare, subWindow,
		doc = nodo? node.ownerDocument || nodo: preferredDoc;

	// Regresa temprano si el documento no es válido o ya está seleccionado
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		documento de devolución
	}

	// Actualizar variables globales
	documento = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (documento);

	// Soporte: IE 9-11, Edge
	// El acceso a los documentos iframe después de la descarga arroja errores de "permiso denegado" (jQuery # 13936)
	if (preferredDoc! == document &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Soporte: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("unload", unloadHandler, false);

		// Soporte: IE 9 - 10 solamente
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	/ * Atributos
	-------------------------------------------------- -------------------- * /

	// Soporte: IE <8
	// Verifique que getAttribute realmente devuelva atributos y no propiedades
	// (exceptuando los booleanos de IE8)
	support.attributes = assert (function (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) por *
	-------------------------------------------------- -------------------- * /

	// Comprueba si getElementsByTagName ("*") devuelve solo elementos
	support.getElementsByTagName = assert (function (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*"). length;
	});

	// Soporte: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Soporte: IE <10
	// Comprueba si getElementById devuelve elementos por nombre
	// Los métodos getElementById rotos no recogen nombres establecidos por programación,
	// así que usa una prueba getElementsByName de rotonda
	support.getById = assert (function (el) {
		docElem.appendChild (el) .id = expando;
		volver! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// filtro de ID y encontrar
	if (support.getById) {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				devolver elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var elem = context.getElementById (id);
				volver elem? [elem]: [];
			}
		};
	} else {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				var node = typeof elem.getAttributeNode! == "undefined" &&
					elem.getAttributeNode ("id");
				return node && node.value === attrId;
			};
		};

		// Soporte: IE 6 - 7 solamente
		// getElementById no es confiable como acceso directo de búsqueda
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				nodo var, i, elems,
					elem = context.getElementById (id);

				if (elem) {

					// Verificar el atributo id
					node = elem.getAttributeNode ("id");
					if (node ​​&& node.value === id) {
						return [elem];
					}

					// Retroceder en getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						node = elem.getAttributeNode ("id");
						if (node ​​&& node.value === id) {
							return [elem];
						}
					}
				}

				regreso [];
			}
		};
	}

	// etiqueta
	Expr.find ["TAG"] = support.getElementsByTagName?
		función (etiqueta, contexto) {
			if (typeof context.getElementsByTagName! == "undefined") {
				devolver context.getElementsByTagName (etiqueta);

			// Los nodos DocumentFragment no tienen gEBTN
			} else if (support.qsa) {
				devolver context.querySelectorAll (etiqueta);
			}
		}:

		función (etiqueta, contexto) {
			var elem
				tmp = [],
				i = 0,
				// Por feliz coincidencia, también aparece un gEBTN (roto) en los nodos DocumentFragment
				results = context.getElementsByTagName (etiqueta);

			// Filtrar posibles comentarios
			si (etiqueta === "*") {
				while ((elem = resultados [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				devuelve tmp;
			}
			resultados de retorno
		};

	// Clase
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "undefined" && documentIsHTML) {
			devolver context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// Soporte de QSA y matchSelector

	// matchesSelector (: active) informa de falso cuando es verdadero (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) informa de falso cuando es verdadero (Chrome 21)
	// Permitimos esto debido a un error en IE8 / 9 que produce un error
	// cada vez que se accede a `document.activeElement` en un iframe
	// Entonces, permitimos: enfocar pasar a través de QSA todo el tiempo para evitar el error de IE
	// Ver https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {
		// Construir expresiones regulares QSA
		// Regex estrategia adoptada de Diego Perini
		afirmar (función (el) {
			// Seleccionar se establece en cadena vacía a propósito
			// Esto es para probar el tratamiento de IE no explícitamente
			// estableciendo un atributo de contenido booleano,
			// ya que su presencia debería ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </option> </select>";

			// Soporte: IE8, Opera 11-12.16
			// No se debe seleccionar nada cuando las cadenas vacías siguen ^ = o $ = o * =
			// El atributo de prueba debe ser desconocido en Opera pero "seguro" para WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[msallowcapture ^ = '']"). length) {
				rbuggyQSA.push ("[* ^ $] =" + espacio en blanco + "* (?: '' | \" \ ")");
			}

			// Soporte: IE8
			// Los atributos booleanos y el "valor" no se tratan correctamente
			if (! el.querySelectorAll ("[selected]"). length) {
				rbuggyQSA.push ("\\ [" + whitespace + "* (?: value |" + booleans + ")");
			}

			// Soporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				rbuggyQSA.push ("~ =");
			}

			// Webkit / Opera -: seleccionado debería devolver los elementos de opción seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 arroja un error aquí y no verá pruebas posteriores
			if (! el.querySelectorAll (": checked"). length) {
				rbuggyQSA.push (": check");
			}

			// Soporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// Fallo en el `selector # id.
			if (! el.querySelectorAll ("a #" + expando + "+ *") .length) {
				rbuggyQSA.push (". #. + [+ ~]");
			}
		});

		afirmar (función (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </select>";

			// Soporte: Windows 8 Native Apps
			// Los atributos de tipo y nombre están restringidos durante la asignación de .innerHTML
			var input = document.createElement ("input");
			input.setAttribute ("type", "hidden");
			el.appendChild (input) .setAttribute ("name", "D");

			// Soporte: IE8
			// Exigir mayúsculas y minúsculas del atributo de nombre
			if (el.querySelectorAll ("[name = d]"). length) {
				rbuggyQSA.push ("nombre" + espacio en blanco + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: habilitado /: deshabilitado y elementos ocultos (los elementos ocultos todavía están habilitados)
			// IE8 arroja un error aquí y no verá pruebas posteriores
			if (el.querySelectorAll (": enabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Soporte: IE9-11 +
			// IE: selector deshabilitado no recoge los hijos de los conjuntos de campos deshabilitados
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Opera 10-11 no lanza pseudos inválidos postcoma
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((coincide = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		afirmar (función (el) {
			// Compruebe si es posible hacer coincidenciasSelector
			// en un nodo desconectado (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// Esto debería fallar con una excepción
			// Gecko no da error, devuelve falso en su lugar
			matches.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && nuevo RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contiene
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// Elemento contiene otro
	// A propósito auto-exclusivo
	// Al igual que en, un elemento no se contiene a sí mismo
	contiene = hasCompare || rnative.test (docElem.contains)?
		función (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			devuelve un === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) y 16
			));
		}:
		función (a, b) {
			si (b) {
				while ((b = b.parentNode)) {
					si (b === a) {
						devuelve verdadero
					}
				}
			}
			falso retorno;
		};

	/ * Clasificación
	-------------------------------------------------- -------------------- * /

	// Ordenación de documentos
	sortOrder = hasCompare?
	función (a, b) {

		// Marcar para la eliminación de duplicados
		si (a === b) {
			hasDuplicate = true;
			devuelve 0;
		}

		// Ordenar por existencia de método si solo una entrada tiene compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		si (comparar) {
			retorno comparar
		}

		// Calcular posición si ambas entradas pertenecen al mismo documento
		compare = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// De lo contrario sabemos que están desconectados.
			1;

		// Nodos desconectados
		si (comparar y 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === compare)) {

			// Elija el primer elemento que está relacionado con nuestro documento preferido
			if (a === document || a.ownerDocument === preferredDoc && contiene (preferredDoc, a)) {
				devuelve -1;
			}
			if (b === document || b.ownerDocument === preferredDoc && contiene (preferredDoc, b)) {
				devuelve 1;
			}

			// Mantener el orden original
			devuelve sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		volver comparar y 4? -1: 1;
	}:
	función (a, b) {
		// Salir temprano si los nodos son idénticos
		si (a === b) {
			hasDuplicate = true;
			devuelve 0;
		}

		var cur
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// Los nodos sin padres son documentos o están desconectados
		si (! aup ||! bup) {
			devolver un documento ===? -1:
				b === documento? 1:
				aup? -1:
				bup? 1:
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Si los nodos son hermanos, podemos hacer una revisión rápida
		} else if (aup === bup) {
			return siblingCheck (a, b);
		}

		// De lo contrario necesitamos listas completas de sus ancestros para la comparación.
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Camina por el árbol buscando una discrepancia.
		while (ap [i] === bp [i]) {
			i ++;
		}

		volver i?
			// Verifica si los nodos tienen un ancestro común
			siblingCheck (ap [i], bp [i]):

			// De lo contrario, los nodos en nuestro documento ordenan primero
			ap [i] === preferredDoc? -1:
			bp [i] === preferredDoc? 1:
			0;
	};

	documento de devolución
};

Sizzle.matches = function (expr, elements) {
	return Sizzle (expr, null, null, elements);
};

Sizzle.matchesSelector = function (elem, expr) {
	// Establecer vars de documento si es necesario
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	if (support.matchesSelector && documentIsHTML &&
		! nonnativeSelectorCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		tratar {
			var ret = matches.call (elem, expr);

			// El selector de coincidencias de IE 9 devuelve falso en nodos desconectados
			if (ret || support.disconnectedMatch ||
					// Además, se dice que los nodos desconectados están en un documento
					// fragmento en IE 9
					elem.document && elem.document.nodeType! == 11) {
				volver ret
			}
		} atrapar (e) {
			nonnativeSelectorCache (expr, true);
		}
	}

	devuelve Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (context, elem) {
	// Establecer vars de documento si es necesario
	if ((context.ownerDocument || context)! == document) {
		setDocument (contexto);
	}
	return contiene (contexto, elemento);
};

Sizzle.attr = function (elem, name) {
	// Establecer vars de documento si es necesario
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],
		// No te dejes engañar por las propiedades de Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, nombre,! documentIsHTML):
			indefinido

	devuelve val! == no definido?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (nombre):
			(val = elem.getAttributeNode (nombre)) && val.specified?
				val.valor:
				nulo;
};

Sizzle.escape = función (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	lanzar un nuevo error ("Error de sintaxis, expresión no reconocida:" + msg);
};

/ **
 * Clasificación de documentos y eliminación de duplicados.
 * @param {ArrayLike} resultados
 * /
Sizzle.uniqueSort = function (resultados) {
	var elem
		duplicados = [],
		j = 0,
		i = 0;

	// A menos que * sepamos * podemos detectar duplicados, asumir su presencia
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = resultados [i ++])) {
			if (elem === resultados [i]) {
				j = duplicados.push (i);
			}
		}
		mientras que (j--) {
			results.splice (duplicados [j], 1);
		}
	}

	// Borrar entrada después de ordenar para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	resultados de retorno
};

/ **
 * Función de utilidad para recuperar el valor de texto de una matriz de nodos DOM
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	nodo var,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	si (! nodeType) {
		// Si no hay nodeType, se espera que esto sea una matriz
		while ((node ​​= elem [i ++])) {
			// No atravesar los nodos de comentario
			ret + = getText (nodo);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Usar textContent para elementos
		// Se eliminó el uso del texto interior para mantener la coherencia de las nuevas líneas (jQuery # 11153)
		if (typeof elem.textContent === "string") {
			devolver elem.textContent;
		} else {
			// Atraviesa a sus hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		devuelve elem.nodeValue;
	}
	// No incluir nodos de instrucción de procesamiento o comentario

	volver ret
};

Expr = Sizzle.selectors = {

	// Puede ser ajustado por el usuario
	cacheLength: 50,

	createPseudo: markFunction,

	partido: matchExpr,

	attrHandle: {},

	encontrar: {},

	relativo: {
		">": {dir: "parentNode", first: true},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", first: true},
		"~": {dir: "previousSibling"}
	}

	prefiltro: {
		"ATTR": función (coincidencia) {
			match [1] = match [1] .replace (runescape, funescape);

			// Mueve el valor dado para que coincida con [3] ya sea entre comillas o no.
			match [3] = (match [3] || match [4] || match [5] || "") .replace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = "" + match [3] + "";
			}

			devuelve match.slice (0, 4);
		}

		"NIÑO": función (emparejar) {
			/ * resultados de matchExpr ["CHILD"]
				1 tipo (solo | nth | ...)
				2 qué (niño | de tipo)
				3 argumento (par | impar | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 componente xn del argumento xn + y ([+ -]? \ D * n |)
				5 signo de componente xn
				6 x de componente xn
				7 signo de componente y
				8 y de componente y
			* /
			match [1] = match [1] .toLowerCase ();

			if (coincide con [1] .slice (0, 3) === "nth") {
				// nth- * requiere argumento
				si (! match [3]) {
					Sizzle.error (match [0]);
				}

				// Parámetros x e y numéricos para Expr.filter.CHILD
				// recuerda que falso / verdadero emitido respectivamente a 0/1
				match [4] = + (match [4]? match [5] + (match [6] || 1): 2 * (match [3] === "even" || match [3] === " impar" ) );
				match [5] = + ((match [7] + match [8]) || match [3] === "odd");

			// otros tipos prohíben argumentos
			} else if (match [3]) {
				Sizzle.error (match [0]);
			}

			partido de vuelta
		}

		"PSEUDO": función (emparejar) {
			exceso de var
				unquoted =! match [6] && match [2];

			if (matchExpr ["CHILD"]. test (match [0])) {
				retorno nulo
			}

			// Aceptar los argumentos citados como están
			si (coinciden [3]) {
				match [2] = match [4] || partido [5] || "";

			// Eliminar el exceso de caracteres de los argumentos sin comillas
			} else if (no citado && rpseudo.test (no citado) &&
				// Obtener el exceso de tokenize (recursivamente)
				(exceso = tokenize (sin comillas, verdadero)) &&
				// avanzar al siguiente paréntesis de cierre
				(exceso = unquoted.indexOf (")", unquoted.length - exceso) - unquoted.length)) {

				// el exceso es un índice negativo
				match [0] = match [0] .slice (0, exceso);
				match [2] = unquoted.slice (0, exceso);
			}

			// Devuelve solo las capturas que necesita el método de pseudo filtro (tipo y argumento)
			devuelve match.slice (0, 3);
		}
	}

	filtro: {

		"TAG": función (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			devuelve nodeNameSelector === "*"?
				function () {return true; }:
				función (elem) {
					devolver elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		}

		"CLASS": función (className) {
			var pattern = classCache [className + ""];

			patrón de retorno ||
				(pattern = new RegExp ("(^ |" + whitespace + ")" + className + "(" + whitespace + "| $)")) &&
				classCache (className, function (elem) {
					return pattern.test (typeof elem.className === "string" && elem.className || typeof elem.getAttribute! == "undefined" && elem.getAttribute ("class") || "");
				});
		}

		"ATTR": función (nombre, operador, cheque) {
			función de retorno (elem) {
				var resultado = Sizzle.attr (elem, nombre);

				si (resultado == nulo) {
					operador de retorno === "! =";
				}
				si (! operador) {
					devuelve verdadero
				}

				resultado + = "";

				operador de retorno === "="? resultado === cheque:
					operador === "! ="? resultado! == cheque:
					operador === "^ ="? check && result.indexOf (check) === 0:
					operador === "* ="? check && result.indexOf (check)> -1:
					operador === "$ ="? check && result.slice (-check.length) === check:
					operador === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (check)> -1:
					operador === "| ="? resultado === cheque || result.slice (0, check.length + 1) === check + "-":
					falso;
			};
		}

		"NIÑO": función (tipo, qué, argumento, primero, último) {
			var simple = type.slice (0, 3)! == "nth",
				adelante = tipo.slice (-4)! == "último",
				ofType = what === "of-type";

			devuelve primero === 1 && último === 0?

				// Atajo para: nth - * (n)
				función (elem) {
					volver !! elem.parentNode;
				}:

				función (elem, contexto, xml) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple! == adelante? "nextSibling": "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = falso;

					si (padre) {

						//: (primero | último | solo) - (hijo | de tipo)
						si (simple) {
							while (dir) {
								nodo = elem;
								while ((node ​​= node [dir])) {
									si (de tipo?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) {

										falso retorno;
									}
								}
								// Dirección inversa para: only- * (si aún no lo hemos hecho)
								start = dir = type === "only" &&! start && "nextSibling";
							}
							devuelve verdadero
						}

						inicio = [adelante? parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) almacena datos de caché en `parent`
						if (forward && useCache) {

							// Busca `elem` de un índice previamente almacenado en caché

							// ... de una manera amigable con el gzip
							nodo = padre;
							outerCache = nodo [expando] || (nodo [expando] = {});

							// Soporte: IE <9 solamente
							// Defender contra las propiedades clonadas (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							cache = uniqueCache [tipo] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && node && node [dir] ||

								// Fallback para buscar `elem` desde el principio.
								(diff = nodeIndex = 0) || start.pop ())) {

								// Cuando se encuentra, almacena en caché los índices en `parent` y rompe
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [tipo] = [dirruns, nodeIndex, diff];
									descanso;
								}
							}

						} else {
							// Usar el índice del elemento previamente almacenado en caché si está disponible
							if (useCache) {
								// ... de una manera amigable con el gzip
								nodo = elem;
								outerCache = nodo [expando] || (nodo [expando] = {});

								// Soporte: IE <9 solamente
								// Defender contra las propiedades clonadas (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								cache = uniqueCache [tipo] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// o: nth-last-child (...) o: nth (-last)? - of-type (...)
							si (dif === falso) {
								// Usa el mismo bucle anterior para buscar `elem` desde el principio
								while ((node ​​= ++ nodeIndex && node && node [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									si ((ofType?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) &&
										++ diff) {

										// Cachear el índice de cada elemento encontrado
										if (useCache) {
											outerCache = nodo [expando] || (nodo [expando] = {});

											// Soporte: IE <9 solamente
											// Defender contra las propiedades clonadas (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [type] = [dirruns, diff];
										}

										if (node ​​=== elem) {
											descanso;
										}
									}
								}
							}
						}

						// Incorporar el offset, luego verificar contra el tamaño del ciclo
						diff - = último;
						return diff === primero || (diff% first === 0 && diff / first> = 0);
					}
				};
		}

		"PSEUDO": función (pseudo, argumento) {
			// los nombres de pseudo-clases no distinguen entre mayúsculas y minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorice por mayúsculas y minúsculas en caso de que se agreguen pseudos personalizados con letras mayúsculas
			// Recuerda que setFilters hereda de pseudos
			var args
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo no admitido:" + pseudo);

			// El usuario puede usar createPseudo para indicar que
			// se necesitan argumentos para crear la función de filtro
			// tal como lo hace Sizzle
			if (fn [expando]) {
				devuelve fn (argumento);
			}

			// Pero mantén el soporte para firmas antiguas
			if (fn.length> 1) {
				args = [pseudo, pseudo, "", argumento];
				devuelve Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (función (semilla, coincidencias) {
						var idx,
							emparejado = fn (semilla, argumento),
							i = matched.length;
						mientras yo-- ) {
							idx = indexOf (semilla, coincidente [i]);
							seed [idx] =! (coincide con [idx] = matched [i]);
						}
					}):
					función (elem) {
						devuelve fn (elem, 0, args);
					};
			}

			devuelve fn;
		}
	}

	pseudos: {
		// Pseudos potencialmente complejos
		"no": markFunction (función (selector) {
			// Recortar el selector pasado para compilar
			// para evitar el tratamiento de liderar y arrastrar
			// espacios como combinadores
			entrada var = [],
				resultados = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			volver matcher [expando]?
				markFunction (función (semilla, coincidencias, contexto, xml) {
					var elem
						unmatched = matcher (seed, null, xml, []),
						i = longitud de semilla;

					// Coincidir con elementos no emparejados por `matcher`
					mientras yo-- ) {
						if ((elem = sin emparejar [i])) {
							semilla [i] =! (coincide con [i] = elem);
						}
					}
				}):
				función (elem, contexto, xml) {
					entrada [0] = elem;
					matcher (entrada, nulo, xml, resultados);
					// No conserves el elemento (problema # 299)
					entrada [0] = nulo;
					return! results.pop ();
				};
		}),

		"has": markFunction (function (selector) {
			función de retorno (elem) {
				devuelve Sizzle (selector, elem) .length> 0;
			};
		}),

		"contiene": markFunction (función (texto) {
			text = text.replace (runescape, funescape);
			función de retorno (elem) {
				return (elem.textContent || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// "Si un elemento está representado por un selector: lang ()
		// se basa únicamente en el valor de idioma del elemento
		// siendo igual al identificador C,
		// o comenzando con el identificador C inmediatamente seguido de "-".
		// La comparación de C con el valor de idioma del elemento se realiza sin distinción de mayúsculas y minúsculas.
		// El identificador C no tiene que ser un nombre de idioma válido ".
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {
			// el valor lang debe ser un identificador válido
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("lang no compatible:" + lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			función de retorno (elem) {
				var elemLang;
				hacer {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				falso retorno;
			};
		}),

		// Misceláneo
		"target": function (elem) {
			var hash = window.location && window.location.hash;
			volver hash && hash.slice (1) === elem.id;
		}

		"root": function (elem) {
			devuelve elem === docElem;
		}

		"focus": function (elem) {
			return elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		}

		// propiedades booleanas
		"habilitado": createDisabledPseudo (false),
		"deshabilitado": createDisabledPseudo (true),

		"revisado": función (elem) {
			// En CSS3,: checked debería devolver tanto los elementos seleccionados como los seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
		}

		"seleccionado": función (elem) {
			// Accediendo a esta propiedad hace seleccionado por defecto
			// las opciones en Safari funcionan correctamente
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			devuelve elem.selected === true;
		}

		// Contenidos
		"vacío": función (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: vacío es negado por el elemento (1) o los nodos de contenido (texto: 3; cdata: 4; entidad ref: 5),
			// pero no por otros (comentario: 8; instrucción de procesamiento: 7; etc.)
			// nodeType <6 funciona porque los atributos (2) no aparecen como hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					falso retorno;
				}
			}
			devuelve verdadero
		}

		"padre": función (elem) {
			volver! Expr.pseudos ["empty"] (elem);
		}

		// Tipos de elementos / entradas
		"header": function (elem) {
			return rheader.test (elem.nodeName);
		}

		"entrada": función (elem) {
			return rinputs.test (elem.nodeName);
		}

		"botón": función (elem) {
			nombre var = elem.nodeName.toLowerCase ();
			nombre de retorno === "entrada" && elem.type === "botón" || nombre === "botón";
		}

		"texto": función (elem) {
			var attr;
			devuelve elem.nodeName.toLowerCase () === "input" &&
				elem.type === "texto" &&

				// Soporte: IE <8
				// Los nuevos valores de atributos HTML5 (por ejemplo, "búsqueda") aparecen con elem.type === "texto"
				((attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "text");
		}

		// Posición en la colección
		"first": createPositionalPseudo (function () {
			return [0];
		}),

		"last": createPositionalPseudo (function (matchIndexes, length) {
			return [longitud - 1];
		}),

		"eq": createPositionalPseudo (function (matchIndexes, length, argumento) {
			devuelve [argumento <0? argumento + longitud: argumento];
		}),

		"even": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			devuelve matchIndexes;
		}),

		"impar": createPositionalPseudo (función (matchIndexes, length) {
			var i = 1;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			devuelve matchIndexes;
		}),

		"lt": createPositionalPseudo (función (matchIndexes, length, argumento) {
			var i = argumento <0?
				argumento + longitud:
				argumento> longitud?
					longitud :
					argumento;
			para (; --i> = 0;) {
				matchIndexes.push (i);
			}
			devuelve matchIndexes;
		}),

		"gt": createPositionalPseudo (función (matchIndexes, length, argumento) {
			var i = argumento <0? argumento + longitud: argumento;
			para (; ++ i <longitud;) {
				matchIndexes.push (i);
			}
			devuelve matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Añadir botón / tipo de entrada pseudos
para (i in {radio: true, casilla de verificación: true, file: true, password: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
para (i en {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API fácil para crear nuevos setFilters
función setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	var emparejado, partido, fichas, tipo,
		soFar, grupos, prefiltros,
		cached = tokenCache [selector + ""];

	if (en caché) {
		volver parseOnly? 0: caché.slice (0);
	}

	soFar = selector;
	grupos = [];
	preFilters = Expr.preFilter;

	while (tanFar) {

		// coma y primera corrida
		if (! matched || (match = rcomma.exec (soFar))) {
			si (emparejar) {
				// No consumas comas finales como válidas
				soFar = soFar.slice (match [0] .length) || hasta aquí;
			}
			groups.push ((tokens = []));
		}

		emparejado = falso;

		// combinadores
		if ((match = rcombinators.exec (soFar))) {
			emparejado = match.shift ();
			tokens.push ({
				valor: emparejado,
				// Emitir combinadores descendientes al espacio.
				tipo: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// Filtros
		para (escriba Expr.filter) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(match = prefiltros [tipo] (match)))) {
				emparejado = match.shift ();
				tokens.push ({
					valor: emparejado,
					tipo: tipo
					partidos: partido
				});
				soFar = soFar.slice (matched.length);
			}
		}

		si (! coincidente) {
			descanso;
		}
	}

	// Devuelve la longitud del exceso inválido
	// si solo estamos analizando
	// De lo contrario, lanza un error o devuelve tokens
	volver parseOnly?
		soFar.length:
		hasta aquí ?
			Sizzle.error (selector):
			// Cachear los tokens
			tokenCache (selector, grupos) .slice (0);
};

función toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		selector = "";
	para (; i <len; i ++) {
		selector + = fichas [i] .value;
	}
	selector de retorno;
}

función addCombinator (matcher, combinator, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		clave = saltar || dir
		checkNonElements = base && key === "parentNode",
		doneName = done ++;

	volver combinator.first?
		// Verificar contra el antepasado más cercano / elemento precedente
		función (elem, contexto, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, context, xml);
				}
			}
			falso retorno;
		}:

		// Comprobar contra todos los elementos antecesores / precedentes
		función (elem, contexto, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// No podemos establecer datos arbitrarios en nodos XML, por lo que no se benefician del almacenamiento en caché del combinador
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							devuelve verdadero
						}
					}
				}
			} else {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = elem [expando] || (elem [expando] = {});

						// Soporte: IE <9 solamente
						// Defender contra las propiedades clonadas (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] || (outerCache [elem.uniqueID] = {});

						if (skip && skip === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem
						} else if ((oldCache = uniqueCache [clave]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Asignar a newCache para que los resultados se propaguen a elementos anteriores
							return (newCache [2] = oldCache [2]);
						} else {
							// Reutilizar newcache para que los resultados se propaguen a elementos anteriores
							uniqueCache [clave] = newCache;

							// Una coincidencia significa que hemos terminado; un fallo significa que tenemos que seguir comprobando
							if ((newCache [2] = matcher (elem, context, xml)) {
								devuelve verdadero
							}
						}
					}
				}
			}
			falso retorno;
		};
}

función elementMatcher (matchers) {
	volver matchers.length> 1?
		función (elem, contexto, xml) {
			var i = matchers.length;
			mientras yo-- ) {
				if (! matchers [i] (elem, context, xml)) {
					falso retorno;
				}
			}
			devuelve verdadero
		}:
		emparejadores [0];
}

Función multipleContexts (selector, contextos, resultados) {
	var i = 0,
		len = contexts.length;
	para (; i <len; i ++) {
		Sizzle (selector, contextos [i], resultados);
	}
	resultados de retorno
}

función condensar (no coincidente, mapa, filtro, contexto, xml) {
	var elem
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map! = null;

	para (; i <len; i ++) {
		if ((elem = sin emparejar [i])) {
			if (! filter || filter (elem, context, xml)) {
				nuevoUnmatched.push (elem);
				if (mapeado) {
					map.push (i);
				}
			}
		}
	}

	devuelve newUnmatched;
}

función setMatcher (prefiltro, selector, comparador, postfiltro, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (función (semilla, resultados, contexto, xml) {
		temp temp, yo, elem,
			preMap = [],
			postMap = [],
			preexistente = resultados.longitud,

			// Obtener elementos iniciales de semilla o contexto
			elems = semilla || multipleContexts (selector || "*", context.nodeType? [context]: context, []),

			// Prefiltro para obtener la entrada del emparejador, preservando un mapa para la sincronización de resultados de semilla
			matcherIn = prefiltro && (selector ||! semilla)?
				Condensar (elementos, preMap, prefiltro, contexto, xml):
				elems,

			matcherOut = matcher?
				// Si tenemos un postFinder, una semilla filtrada o un filtro posterior no semilla o resultados preexistentes,
				postFinder || (¿semilla? prefiltro: preexistente || postfiltro)?

					// ... el procesamiento intermedio es necesario
					[]:

					// ... de lo contrario, usa los resultados directamente
					resultados:
				matcherIn;

		// Encontrar coincidencias primarias
		if (matcher) {
			matcher (matcherIn, matcherOut, context, xml);
		}

		// Aplicar postFilter
		if (postFilter) {
			t emp = condensar (matcherOut, postMap);
			postFilter (temp, [], context, xml);

			// Desmarca los elementos defectuosos moviéndolos de nuevo a matcherIn
			i = temp.length;
			mientras yo-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		si (semilla) {
			if (postFinder || preFilter) {
				if (postFinder) {
					// Obtenga el final matcherOut condensando este intermedio en contextos postFinder
					temp = [];
					i = matcherOut.length;
					mientras yo-- ) {
						if ((elem = matcherOut [i])) {
							// Restaurar matcherIn ya que elem aún no es una coincidencia final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Mueve los elementos coincidentes de semilla a resultados para mantenerlos sincronizados
				i = matcherOut.length;
				mientras yo-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (seed, elem): preMap [i])> -1) {

						semilla [temp] =! (resultados [temp] = elem);
					}
				}
			}

		// Añadir elementos a los resultados, a través de postFinder si está definido
		} else {
			matcherOut = condensar (
				matcherOut === resultados?
					matcherOut.splice (preexistente, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (nulo, resultados, matcherOut, xml);
			} else {
				push.apply (resultados, matcherOut);
			}
		}
	});
}

función matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative [tokens [0] .type],
		implicitRelative = leadingRelative || Relativo [""],
		i = LeadingRelative? 1: 0,

		// El comparador fundamental garantiza que se pueda acceder a los elementos desde los contextos de nivel superior
		matchContext = addCombinator (function (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [función (elemento, contexto, xml) {
			var ret = (! leadingRelative && (xml || context! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, context, xml):
					matchAnyContext (elem, context, xml));
			// Evita colgarte en el elemento (número 299)
			checkContext = null;
			volver ret
		}];

	para (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} else {
			matcher = Expr.filter [tokens [i] .type] .apply (null, tokens [i] .matches);

			// Regreso especial al ver un emparejador posicional
			if (matcher [expando]) {
				// Encuentre el siguiente operador relativo (si lo hay) para un manejo adecuado
				j = ++ i;
				para (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						descanso;
					}
				}
				devuelve setMatcher (
					i> 1 && elementMatcher (matchers),
					i> 1 && toSelector (
						// Si el token anterior era un combinador descendente, inserte un elemento * * `implícito
						tokens.slice (0, i - 1) .concat ({value: tokens [i - 2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					emparejador
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (tokens)
				);
			}
			matchers.push (matcher);
		}
	}

	devolver elementMatcher (matchers);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		porElemento = elementMatchers.length> 0,
		superMatcher = function (semilla, contexto, xml, resultados, más externo) {
			var elem, j, emparejador,
				matchedCount = 0,
				i = "0",
				incomparable = semilla && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Siempre debemos tener elementos semilla o contexto más externo
				elems = semilla || porElement && Expr.find ["TAG"] ("*", el más externo),
				// Usar dirruns enteros si este es el mejor emparejador
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			if (más externo) {
				outermostContext = context === document || contexto || más exterior;
			}

			// Añadir elementos pasando elementMatchers directamente a los resultados
			// Soporte: IE <9, Safari
			// Tolerar las propiedades de NodeList (IE: "length"; Safari: <número>) haciendo coincidir los elementos por ID
			para (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;
					if (! context && elem.ownerDocument! == document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, context || document, xml)) {
							resultados.push (elem);
							descanso;
						}
					}
					if (más externo) {
						dirruns = dirrunsUnique;
					}
				}

				// Rastrear elementos no coincidentes para establecer filtros
				if (bySet) {
					// Habrán pasado por todos los posibles matchers.
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Alargar la matriz para cada elemento, emparejado o no
					si (semilla) {
						unmatched.push (elem);
					}
				}
			}

			// `i` es ahora el recuento de elementos visitados anteriormente, y se agrega a` matchedCount`
			// hace este último no negativo.
			matchedCount + = i;

			// Aplicar filtros establecidos a elementos no coincidentes
			// NOTA: Esto se puede omitir si no hay elementos no coincidentes (es decir, `matchedCount`
			// es igual a `i`), a menos que no hayamos visitado elementos _any_ en el bucle anterior porque tenemos
			// No hay coincidencias de elementos ni semillas.
			// Incrementar una cadena inicial "0" `i` permite que` i` permanezca como una cadena solo en eso
			// caso, que resultará en un "00" `matchedCount` que difiere de` i` pero también es
			// numéricamente cero.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					matcher (unmatched, setMatched, context, xml);
				}

				si (semilla) {
					// Reintegrar las coincidencias de elementos para eliminar la necesidad de clasificación
					if (matchedCount> 0) {
						mientras yo-- ) {
							if (! (sin emparejar [i] || setMatched [i])) {
								setMatched [i] = pop.call (resultados);
							}
						}
					}

					// Descartar valores de marcador de posición de índice para obtener solo coincidencias reales
					setMatched = condense (setMatched);
				}

				// Añadir coincidencias a los resultados
				push.apply (resultados, setMatched);

				// Las combinaciones de conjuntos sin semillas que suceden varios emparejadores exitosos estipulan la clasificación
				if (más externo &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Anular la manipulación de los globales por emparejadores anidados
			if (más externo) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			retorno inigualable;
		};

	volver bySet?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (selector, match / * Internal Use Only * /) {
	var i
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [selector + ""];

	si (! en caché) {
		// Generar una función de funciones recursivas que se pueden usar para verificar cada elemento
		si (! match) {
			match = tokenize (selector);
		}
		i = match.length;
		mientras yo-- ) {
			cached = matcherFromTokens (match [i]);
			if (en caché [expando]) {
				setMatchers.push (en caché);
			} else {
				elementMatchers.push (en caché);
			}
		}

		// caché la función compilada
		cached = compilerCache (selector, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Guardar selector y tokenización
		cached.selector = selector;
	}
	retorno en caché;
};

/ **
 * Una función de selección de bajo nivel que funciona con la compilación de Sizzle
 * funciones de selector
 * @param {String | Función} selector Un selector o un precompilado
 * Función selectora construida con Sizzle.compile
 * @param {Elemento} contexto
 * @param {Array} [resultados]
 * @param {Array} [semilla] Un conjunto de elementos con los que hacer coincidir
 * /
select = Sizzle.select = function (selector, contexto, resultados, semilla) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match =! seed && tokenize ((selector = compiled.selector || selector));

	resultados = resultados || [];

	// Trate de minimizar las operaciones si solo hay un selector en la lista y no se aceptan semillas
	// (el último de los cuales nos garantiza el contexto)
	si (match.length === 1) {

		// Reducir el contexto si el selector compuesto principal es una ID
		tokens = match [0] = match [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]). type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), context) || []) [0];
			si (! contexto) {
				resultados de retorno

			// Los emparejadores precompilados seguirán verificando la ascendencia, así que subir un nivel
			} else if (compilado) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// Obtener un conjunto de semillas para la coincidencia de derecha a izquierda
		i = matchExpr ["needsContext"]. test (selector)? 0: tokens.length;
		mientras yo-- ) {
			ficha = fichas [i];

			// Abortar si golpeamos un combinador
			if (Expr.relative [(type = token.type)]) {
				descanso;
			}
			if ((find = Expr.find [tipo])) {
				// Buscar, expandir el contexto para los principales combinadores de hermanos.
				si ((semilla = encontrar)
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) || contexto
				))) {

					// Si la semilla está vacía o si no quedan fichas, podemos regresar temprano
					tokens.splice (i, 1);
					selector = seed.length && toSelector (tokens);
					if (! selector) {
						push.apply (resultados, semilla);
						resultados de retorno
					}

					descanso;
				}
			}
		}
	}

	// Compilar y ejecutar una función de filtrado si no se proporciona una
	// Proporcionar `match` para evitar la retokenización si modificamos el selector de arriba
	(compilado || compilar (selector, coincidencia)) (
		semilla,
		contexto,
		! documentIsHTML,
		resultados
		! contexto || rsibling.test (selector) && testContext (context.parentNode) || contexto
	);
	resultados de retorno
};

// Tareas de una sola vez

// ordenar la estabilidad
support.sortStable = expando.split (""). sort (sortOrder) .join ("") === expando;

// Soporte: Chrome 14-35 +
// Siempre asuma duplicados si no se pasan a la función de comparación
support.detectDuplicates = !! hasDuplicate;

// Inicializar contra el documento por defecto
setDocument ();

// Soporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (corregido en Chrome 27)
// Los nodos separados se confunden y siguen * entre sí *
support.sortDetached = assert (function (el) {
	// Debe devolver 1, pero devuelve 4 (siguiente)
	devolver el.compareDocumentPosition (document.createElement ("fieldset")) & 1;
});

// Soporte: IE <8
// Impedir atributo / propiedad "interpolación"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! assert (function (el) {
	el.innerHTML = "<a href='#'> </a>";
	devuelve el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("tipo | href | altura | ancho", función (elem, nombre, isXML) {
		si (! isXML) {
			devolver elem.getAttribute (name, name.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Soporte: IE <9
// Use defaultValue en lugar de getAttribute ("valor")
if (! support.attributes ||! assert (function (el) {
	el.innerHTML = "<input />";
	el.firstChild.setAttribute ("value", "");
	devuelve el.firstChild.getAttribute ("valor") === "";
})) {
	addHandle ("valor", función (elemento, nombre, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// Soporte: IE <9
// Usa getAttributeNode para obtener valores booleanos cuando se encuentra getAttribute
if (! assert (function (el) {
	return el.getAttribute ("disabled") == null;
})) {
	addHandle (booleanos, función (elemento, nombre, isXML) {
		var val;
		si (! isXML) {
			devuelve elem [nombre] === verdadero? name.toLowerCase ():
					(val = elem.getAttributeNode (nombre)) && val.specified?
					val.valor:
				nulo;
		}
	});
}

volver chisporrotear;

})( ventana );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Obsoleto
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function (elem, dir, hasta) {
	var coincidente = [],
		truncar = hasta! == indefinido;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncate && jQuery (elem) .is (hasta)) {
				descanso;
			}
			emparejado.push (elem);
		}
	}
	retorno emparejado;
};


var hermanos = función (n, elem) {
	var coincidente = [];

	para (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			emparejado.push (n);
		}
	}

	retorno emparejado;
};


var rneedsContext = jQuery.expr.match.needsContext;



función nodeName (elem, name) {

  devolver elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ r \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implementar la funcionalidad idéntica para el filtro y no
función winnow (elementos, calificador, no) {
	if (isFunction (calificador)) {
		return jQuery.grep (elementos, función (elem, i) {
			return !! qualifier.call (elem, i, elem)! == no;
		});
	}

	// elemento único
	if (qualifier.nodeType) {
		return jQuery.grep (elements, function (elem) {
			return (elem === calificador)! == no;
		});
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if (typeof qualifier! == "string") {
		return jQuery.grep (elements, function (elem) {
			return (indexOf.call (qualifier, elem)> -1)! == no;
		});
	}

	// Filtrado directamente para selectores simples y complejos.
	devolver jQuery.filter (calificador, elementos, no);
}

jQuery.filter = function (expr, elems, no) {
	var elem = elems [0];

	si no ) {
		expr = ": not (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	devuelve jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		devuelve elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	encontrar: función (selector) {
		var i, ret,
			len = this.length,
			auto = esto;

		if (typeof selector! == "string") {
			devuelve this.pushStack (jQuery (selector) .filter (function () {
				para (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						devuelve verdadero
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		para (i = 0; i <len; i ++) {
			jQuery.find (selector, self [i], ret);
		}

		volver len> 1? jQuery.uniqueSort (ret): ret;
	}
	filtro: función (selector) {
		devuelve this.pushStack (winnow (this, selector || [], false));
	}
	no: función (selector) {
		devuelve this.pushStack (winnow (this, selector || [], true));
	}
	es: función (selector) {
		volver !!
			esta,

			// Si este es un selector de posición / relativo, verifique la membresía en el conjunto devuelto
			// por lo que $ ("p: first"). is ("p: last") no se devolverá verdadero para un documento con dos "p".
			typeof selector === "string" && rneedsContext.test (selector)?
				jQuery (selector):
				selector || [],
			falso
		).longitud;
	}
});


// Inicializar un objeto jQuery


// Una referencia central a la raíz jQuery (documento)
var rootjQuery,

	// Una forma sencilla de comprobar si hay cadenas HTML
	// Priorice #id sobre <tag> para evitar XSS a través de location.hash (# 9521)
	// Reconocimiento estricto de HTML (# 11290: debe comenzar con <)
	// Shortcut simple #id case for speed
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// MANIJA: $ (""), $ (nulo), $ (no definido), $ (falso)
		if (! selector) {
			devuelve esto
		}

		// El método init () acepta un rootjQuery alternativo
		// así que migrate puede soportar jQuery.sub (gh-2101)
		raíz = raíz || rootjQuery;

		// Manejar cadenas HTML
		if (typeof selector === "string") {
			si (selector [0] === "<" &&
				selector [selector.length - 1] === ">" &&
				selector.length> = 3) {

				// Suponga que las cadenas que comienzan y terminan con <> son HTML y omita la comprobación de expresiones regulares
				match = [null, selector, null];

			} else {
				match = rquickExpr.exec (selector);
			}

			// Coincidir con html o asegurarse de que no se especifique un contexto para #id
			if (match && (match [1] ||! context)) {

				// HANDLE: $ (html) -> $ (array)
				si (coinciden [1]) {
					context = context instanceof jQuery? contexto [0]: contexto;

					// La opción para ejecutar scripts es verdadera para back-compat
					// Intencionalmente deje que se genere el error si parseHTML no está presente
					jQuery.merge (este, jQuery.parseHTML (
						partido [1],
						context && context.nodeType? context.ownerDocument || contexto: documento,
						cierto
					));

					// HANDLE: $ (html, props)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (context)) {
						para (emparejar en contexto) {

							// Las propiedades del contexto se llaman como métodos si es posible
							if (isFunction (this [match])) {
								esta [coincidencia] (contexto [coincidencia]);

							// ... y de otro modo establecer como atributos
							} else {
								this.attr (match, context [match]);
							}
						}
					}

					devuelve esto

				// MANGO: $ (# id)
				} else {
					elem = document.getElementById (match [2]);

					if (elem) {

						// Inyectar el elemento directamente en el objeto jQuery
						este [0] = elem;
						this.length = 1;
					}
					devuelve esto
				}

			// MANIJA: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (context || root) .find (selector);

			// MANEJO: $ (expr, contexto)
			// (que es equivalente a: $ (context) .find (expr)
			} else {
				devuelve this.constructor (context) .find (selector);
			}

		// HANDLE: $ (DOMElement)
		} else if (selector.nodeType) {
			este [0] = selector;
			this.length = 1;
			devuelve esto

		// MANEJO: $ (función)
		// Atajo para documento listo
		} else if (isFunction (selector)) {
			devuelve root.ready! == undefined?
				root.ready (selector):

				// Ejecutar inmediatamente si está listo no está presente
				selector (jQuery);
		}

		return jQuery.makeArray (selector, this);
	};

// Dar a la función init el prototipo jQuery para una instanciación posterior
init.prototype = jQuery.fn;

// Inicializar referencia central
rootjQuery = jQuery (documento);


var rparentsprev = / ^ (?: parents | prev (?: Until | All)) /,

	// Métodos garantizados para producir un conjunto único al comenzar desde un conjunto único
	guaranteedUnique = {
		niños: verdad,
		contenido: verdadero,
		siguiente:
		anterior: verdadero
	};

jQuery.fn.extend ({
	tiene: función (objetivo) {
		objetivos var = jQuery (objetivo, esto),
			l = objetivos.longitud;

		devuelve this.filter (function () {
			var i = 0;
			para (; i <l; i ++) {
				if (jQuery.contains (this, target [i])) {
					devuelve verdadero
				}
			}
		});
	}

	más cercano: función (selectores, contexto) {
		var cur
			i = 0,
			l = this.length,
			emparejado = [],
			target = typeof selectors! == "string" && jQuery (selectores);

		// Los selectores de posición nunca coinciden, ya que no hay _selection_ context
		if (! rneedsContext.test (selectores)) {
			para (; i <l; i ++) {
				para (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {

					// Siempre saltar fragmentos de documentos
					if (cur.nodeType <11 && (target?
						target.index (cur)> -1:

						// No pases no elementos a Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, selectores))) {

						emparejado.push (cur);
						descanso;
					}
				}
			}
		}

		devuelve this.pushStack (matched.length> 1? jQuery.uniqueSort (matched): matched);
	}

	// Determinar la posición de un elemento dentro del conjunto
	índice: función (elem) {

		// Sin argumento, índice de retorno en padre
		si (! elem) {
			volver (este [0] && este [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Índice en selector
		if (typeof elem === "string") {
			devuelve indexOf.call (jQuery (elem), this [0]);
		}

		// Localiza la posición del elemento deseado
		devolver indexOf.call (esto,

			// Si recibe un objeto jQuery, se usa el primer elemento
			elem.jquery? elem [0]: elem
		);
	}

	agregar: función (selector, contexto) {
		devuelve this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (selector, contexto))
			)
		);
	}

	addBack: función (selector) {
		devuelve this.add (selector == null?
			this.prevObject: this.prevObject.filter (selector)
		);
	}
});

funcion hermano (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	volver cur
}

jQuery.each ({
	padre: función (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? padre: nulo;
	}
	padres: función (elem) {
		return dir (elem, "parentNode");
	}
	parentsUntil: function (elem, i, hasta) {
		return dir (elem, "parentNode", hasta);
	}
	siguiente: function (elem) {
		hermano de vuelta (elem, "nextSibling");
	}
	prev: function (elem) {
		volver hermano (elem, "previousSibling");
	}
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	}
	prevAll: function (elem) {
		return dir (elem, "previousSibling");
	}
	nextUntil: function (elem, i, until) {
		return dir (elem, "nextSibling", hasta);
	}
	prevUntil: función (elem, i, hasta) {
		return dir (elem, "previousSibling", hasta);
	}
	hermanos: función (elem) {
		devolver hermanos ((elem.parentNode || {}) .firstChild, elem);
	}
	niños: función (elem) {
		volver hermanos (elem.firstChild);
	}
	contenidos: función (elem) {
		if (typeof elem.contentDocument! == "undefined") {
			return elem.contentDocument;
		}

		// Soporte: solo IE 9 - 11, solo iOS 7, navegador Android <= 4.3 solamente
		// Trate el elemento de la plantilla como un elemento normal en los navegadores que
		// No lo apoyes.
		if (nodeName (elem, "template")) {
			elem = elem.content || elem
		}

		devolver jQuery.merge ([], elem.childNodes);
	}
}, función (nombre, fn) {
	jQuery.fn [nombre] = función (hasta, selector) {
		var matched = jQuery.map (this, fn, until);

		if (name.slice (-5)! == "Hasta") {
			selector = hasta que;
		}

		if (selector && typeof selector === "string") {
			emparejado = jQuery.filter (selector, emparejado);
		}

		if (this.length> 1) {

			// Eliminar duplicados
			si (! guaranteedUnique [nombre]) {
				jQuery.uniqueSort (emparejado);
			}

			// Orden inverso para padres * y prev-derivados
			if (rparentsprev.test (nombre)) {
				matched.reverse ();
			}
		}

		devuelve this.pushStack (coincidente);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Convertir las opciones con formato de cadena en opciones con formato de objeto
función createOptions (opciones) {
	objeto var = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		objeto [bandera] = verdadero;
	});
	devolver objeto;
}

/ *
 * Crea una lista de devolución de llamada utilizando los siguientes parámetros:
 *
 * opciones: una lista opcional de opciones separadas por espacios que cambiarán cómo
 * la lista de devolución de llamada se comporta o un objeto de opción más tradicional
 *
 * Por defecto, una lista de devolución de llamada actuará como una lista de devolución de llamada de evento y puede ser
 * "disparó" varias veces.
 *
 * Posibles opciones:
 *
 * una vez: se asegurará de que la lista de devolución de llamada solo se pueda activar una vez (como un Aplazado)
 *
 * memoria: mantendrá un registro de los valores anteriores y llamará a cualquier devolución de llamada agregada
 * después de que la lista se haya activado de inmediato con el último "memorizado"
 * valores (como un diferido)
 *
 * único: asegurará que la devolución de llamada solo se pueda agregar una vez (no hay duplicado en la lista)
 *
 * stopOnFalse: interrumpe llamadas cuando una devolución de llamada devuelve falso
 *
 * /
jQuery.Callbacks = function (opciones) {

	// Convertir las opciones de formato de cadena a formato de objeto si es necesario
	// (Verificamos caché primero)
	options = typeof options === "string"?
		createOptions (opciones):
		jQuery.extend ({}, opciones);

	var // Marcar para saber si la lista se está disparando actualmente
		disparo,

		// Último valor de disparo para listas no olvidables
		memoria,

		// Marcar para saber si la lista ya fue disparada
		despedido,

		// Bandera para evitar disparos.
		bloqueado

		// Lista de devolución de llamada actual
		lista = [],

		// Cola de datos de ejecución para listas repetibles.
		queue = [],

		// Índice de devolución de llamada que se está disparando actualmente (modificado por agregar / eliminar según sea necesario)
		índice de firing = -1,

		// Devolución de llamadas
		fuego = función () {

			// Hacer cumplir un solo disparo
			bloqueado = bloqueado || options.once;

			// Ejecutar devoluciones de llamada para todas las ejecuciones pendientes,
			// respetando las anulaciones de firingIndex y los cambios de tiempo de ejecución
			disparado = disparo = verdadero;
			para (; queue.length; firingIndex = -1) {
				memory = queue.shift ();
				while (++ firingIndex <list.length) {

					// Ejecutar devolución de llamada y comprobar la terminación anticipada
					if (list [firingIndex] .apply (memory [0], memory [1]) === false &&
						options.stopOnFalse) {

						// Salta al final y olvida los datos para que .add no se vuelva a disparar.
						firingIndex = list.length;
						memoria = falso;
					}
				}
			}

			// Olvida los datos si hemos terminado con ellos.
			si (! options.memory) {
				memoria = falso;
			}

			disparo = falso;

			// Limpiar si hemos terminado de disparar para siempre.
			si (bloqueado) {

				// Mantener una lista vacía si tenemos datos para futuras llamadas de adición.
				si (memoria) {
					lista = [];

				// De lo contrario, este objeto se gasta.
				} else {
					list = "";
				}
			}
		}

		// Objeto real de devoluciones de llamada
		auto = {

			// Agregar una devolución de llamada o una colección de devoluciones de llamada a la lista
			añadir: function () {
				si (lista) {

					// Si tenemos memoria de una ejecución pasada, deberíamos disparar después de agregar
					si (memoria &&! disparando) {
						firingIndex = list.length - 1;
						queue.push (memoria);
					}

					(función add (args) {
						jQuery.each (args, function (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if ((arg && arg.length && toType (arg)! == "string") {

								// inspeccionar recursivamente
								add (arg);
							}
						});
					}) (argumentos);

					si (memoria &&! disparando) {
						fuego();
					}
				}
				devuelve esto
			}

			// Eliminar una devolución de llamada de la lista
			eliminar: función () {
				jQuery.each (argumentos, función (_, arg) {
					índice var
					while ((index = jQuery.inArray (arg, list, index))> -1) {
						list.splice (índice, 1);

						// Manejar índices de disparo.
						if (index <= firingIndex) {
							índice de firmas--;
						}
					}
				});
				devuelve esto
			}

			// Compruebe si una devolución de llamada dada está en la lista.
			// Si no se proporciona ningún argumento, devuelva si la lista tiene devoluciones de llamada adjuntas.
			tiene: función (fn) {
				volver fn?
					jQuery.inArray (fn, lista)> -1:
					list.length> 0;
			}

			// Eliminar todas las devoluciones de llamada de la lista
			vacío: función () {
				si (lista) {
					lista = [];
				}
				devuelve esto
			}

			// Desactivar .fire y .add
			// Abortar cualquier ejecución actual / pendiente.
			// Borrar todos los callbacks y valores
			deshabilitar: función () {
				bloqueado = cola = [];
				list = memory = "";
				devuelve esto
			}
			deshabilitado: función () {
				volver! lista;
			}

			// Desactivar .fire
			// También deshabilite .add a menos que tengamos memoria (ya que no tendría efecto)
			// Abortar cualquier ejecución pendiente
			lock: function () {
				bloqueado = cola = [];
				if (! memory &&! firing) {
					list = memory = "";
				}
				devuelve esto
			}
			bloqueado: function () {
				retorno !! bloqueado;
			}

			// Llamar a todas las devoluciones de llamada con el contexto y los argumentos dados
			fireWith: function (context, args) {
				si (! bloqueado) {
					args = args || [];
					args = [contexto, args.slice? args.slice (): args];
					queue.push (args);
					si (! disparando) {
						fuego();
					}
				}
				devuelve esto
			}

			// Llamar a todos los callbacks con los argumentos dados.
			fuego: función () {
				self.fireWith (esto, argumentos);
				devuelve esto
			}

			// Para saber si las devoluciones de llamada ya han sido llamadas al menos una vez.
			disparado: function () {
				¡¡Vuelve !!
			}
		};

	volver a sí mismo
};


Identidad de la función (v) {
	volver v
}
función lanzador (ex) {
	tirar ex
}

función adoptValue (valor, resolución, rechazo, noValue) {
	método var;

	tratar {

		// Verifique el aspecto de promesa primero para privilegiar el comportamiento síncrono
		if (value && isFunction ((method = value.promise))) {
			method.call (valor) .done (resolver) .fail (rechaza);

		// Otros objetos
		} else if (value && isFunction ((method = value.then))) {
			method.call (valor, resolución, rechazo);

		// Otros no-thenables
		} else {

			// Controle los argumentos 'resolver' permitiendo que Array # slice lance el valor booleano `noValue` a entero:
			// * falso: [valor] .slice (0) => resolver (valor)
			// * true: [valor] .slice (1) => resolver ()
			resolver.apply (no definido, [valor] .slice (noValue));
		}

	// Para Promesas / A +, convertir excepciones en rechazos
	// Dado que jQuery.when no desenvuelve los problemas, podemos omitir los cheques adicionales que aparecen en
	// Aplazado # entonces para suprimir condicionalmente el rechazo.
	} captura (valor) {

		// Soporte: solo Android 4.0
		// Funciones de modo estricto invocadas sin .call / .apply obtener contexto de objeto global
		reject.apply (indefinido, [valor]);
	}
}

jQuery.extend ({

	Aplazado: función (func) {
		var tuples = [

				// acción, añadir escucha, devoluciones de llamada,
				// ... luego manejadores, índice de argumentos, [estado final]
				["Notify", "progress", jQuery.Callbacks ("memory"),
					jQuery.Callbacks ("memory"), 2],
				["resolver", "hecho", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks ("once memoria"), 0, "resuelto"],
				["rechazar", "fallar", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks ("once memory"), 1, "rechazado"]
			]
			estado = "pendiente",
			promesa = {
				función estatal() {
					estado de retorno
				}
				siempre: función () {
					deferred.done (argumentos) .fail (argumentos);
					devuelve esto
				}
				"captura": función (fn) {
					promesa de devolución. luego (nulo, fn);
				}

				// Mantener el tubo para la espalda
				pipe: function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = argumentos;

					return jQuery.Deferred (function (newDefer) {
						jQuery.each (tuplas, función (i, tupla) {

							// Mapear las tuplas (progress, done, fail) a los argumentos (done, fail, progress)
							var fn = isFunction (fns [tupla [4]]) && fns [tupla [4]];

							// deferred.progress (function () {enlazar a newDefer o newDefer.notify})
							// deferred.done (function () {enlazar a newDefer o newDefer.resolve})
							// deferred.fail (function () {enlazar a newDefer o newDefer.reject})
							aplazado [tupla [1]] (función () {
								var devuelto = fn && fn.apply (esto, argumentos);
								if (devuelto && isFunction (return.promise)) {
									devuelto.prometir ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} else {
									newDefer [tuple [0] + "With"] (
										esta,
										fn? [devuelto]: argumentos
									);
								}
							});
						});
						fns = nulo;
					}) .promise ();
				}
				entonces: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					Función de resolución (profundidad, diferido, manejador, especial) {
						función de retorno () {
							var que = esto,
								args = argumentos,
								mightThrow = function () {
									var volvió, entonces;

									// Soporte: Promesas / A + sección 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorar intentos de doble resolución
									if (profundidad <maxDepth) {
										regreso;
									}

									devuelto = handler.apply (that, args);

									// Soporte: Promesas / A + sección 2.3.1
									// https://promisesaplus.com/#point-48
									if (devuelto === diferido.promiso ()) {
										lanzar nuevo TypeError ("auto resolución de Thenable");
									}

									// Soporte: Promesas / A + secciones 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recuperar `then` solo una vez
									entonces = devuelto &&

										// Soporte: Promesas / A + sección 2.3.4
										// https://promisesaplus.com/#point-64
										// Solo revisar objetos y funciones para ver si están
										(typeof devuelto === "objeto" ||
											typeof devolvió === "función") &&
										devuelto.

									// Manejar un objeto devuelto
									if (isFunction (then)) {

										// Procesadores especiales (notificar) solo esperan resolución
										si (especial) {
											luego llame(
												devuelto
												resolver (maxDepth, diferido, Identidad, especial),
												resolver (maxDepth, diferido, Thrower, especial)
											);

										// Procesadores normales (resolver) también enganchan en progreso
										} else {

											// ... e ignorar los valores de resolución anteriores
											maxDepth ++;

											luego llame(
												devuelto
												resolver (maxDepth, diferido, Identidad, especial),
												resolver (maxDepth, diferido, Thrower, especial),
												resolver (maxDepth, diferido, Identidad,
													Deferred.notifyWith)
											);
										}

									// Manejar todos los demás valores devueltos
									} else {

										// Sólo los controladores sustitutos pasan el contexto
										// y valores múltiples (comportamiento no especif.)
										if (handler! == Identity) {
											que = indefinido;
											args = [devuelto];
										}

										// Procesar los valores
										// El proceso predeterminado es resolver
										(special || deferred.resolveWith) (that, args);
									}
								}

								// Sólo los procesadores normales (resolver) capturan y rechazan las excepciones
								proceso = especial?
									podría
									función () {
										tratar {
											Podrías tirar ();
										} atrapar (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Soporte: Promesas / A + sección 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar las excepciones posteriores a la resolución
											si (profundidad + 1> = maxDepth) {

												// Sólo los controladores sustitutos pasan el contexto
												// y valores múltiples (comportamiento no especif.)
												if (handler! == Thrower) {
													que = indefinido;
													args = [e];
												}

												deferred.rejectWith (that, args);
											}
										}
									};

							// Soporte: Promesas / A + sección 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Volver a resolver las promesas de inmediato para evitar el rechazo falso de
							// errores posteriores
							si (profundidad) {
								proceso();
							} else {

								// Llame a un gancho opcional para grabar la pila, en caso de excepción
								// ya que de otra manera se pierde cuando la ejecución se vuelve asíncrona
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (proceso);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuplas [0] [3] .add (
							resolver(
								0,
								nuevoDefer,
								isFunction (onProgress)?
									en progreso :
									Identidad,
								newDefer.notifyWith
							)
						);

						// completed_handlers.add (...)
						tuplas [1] [3] .add (
							resolver(
								0,
								nuevoDefer,
								isFunction (onFulfilled)?
									onFulfilled:
									Identidad
							)
						);

						// rejected_handlers.add (...)
						tuplas [2] [3] .add (
							resolver(
								0,
								nuevoDefer,
								isFunction (onRejected)?
									onReyectado:
									Lanzador
							)
						);
					}) .promise ();
				}

				// Obtener una promesa para este aplazado
				// Si se proporciona obj, el aspecto de promesa se agrega al objeto
				promesa: función (obj) {
					devuelve obj! = null? jQuery.extend (obj, promesa): promesa;
				}
			}
			diferido = {};

		// Añadir métodos específicos a la lista
		jQuery.each (tuplas, función (i, tupla) {
			var list = tuple [2],
				stateString = tupla [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promesa [tuple [1]] = list.add;

			// Manejar estado
			if (stateString) {
				list.add (
					función () {

						// estado = "resuelto" (es decir, cumplido)
						// estado = "rechazado"
						state = stateString;
					}

					// reject_callbacks.disable
					// completed_callbacks.disable
					tuplas [3 - i] [2] .disable,

					// reject_handlers.disable
					// completed_handlers.disable
					tuplas [3 - i] [3] .disable,

					// progress_callbacks.lock
					tuplas [0] [2] .lock,

					// progress_handlers.lock
					tuplas [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// completed_handlers.fire
			// rejected_handlers.fire
			list.add (tuple [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			aplazado [tupla [0]] = función () {
				aplazado [tupla [0] + "Con"] (esto === aplazado? indefinido: esto, argumentos);
				devuelve esto
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			aplazado [tupla [0] + "Con"] = list.fireWith;
		});

		// Haz de la promesa un aplazamiento
		promesa.promiso (diferido);

		// Llamar a la función dada si la hay
		if (func) {
			func.call (diferido, diferido);
		}

		// ¡Todo listo!
		retorno diferido
	}

	// ayudante diferido
	cuando: function (singleValue) {
		var

			// recuento de subordinados incompletos
			restante = argumentos.longitud,

			// recuento de argumentos sin procesar
			i = restante,

			// datos de cumplimiento subordinados
			resolverContexts = Array (i),
			resolverValues ​​= slice.call (argumentos),

			// el maestro diferido
			master = jQuery.Deferred (),

			// fábrica de devolución de llamada subordinada
			updateFunc = function (i) {
				función de retorno (valor) {
					resolverContexts [i] = esto;
					resolverValues ​​[i] = argumentos.longitud> 1? slice.call (argumentos): valor;
					si (! (--nombre)) {
						master.resolveWith (resolverContexts, resolverValues);
					}
				};
			};

		// Los argumentos simples y vacíos se adoptan como Promise.resolve
		si (restante <= 1) {
			adoptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				!restante );

			// Use .then () para desenvolver los objetos secundarios (cf. gh-3000)
			if (master.state () === "pendiente" ||
				isFunction (resolverValues ​​[i] && resolverValues ​​[i] .then)) {

				volver maestro.then ();
			}
		}

		// Múltiples argumentos se agregan como elementos de la matriz Promise.all
		mientras yo-- ) {
			adoptValue (resolverValues ​​[i], updateFunc (i), master.reject);
		}

		volver master.promise ();
	}
});


// Estos usualmente indican un error de programador durante el desarrollo,
// advierte sobre ellos lo antes posible en lugar de tragarlos por defecto.
var rerrorNames = / ^ (Eval | Internal | Range | Reference | Syntax | Type | URI) Error $ /;

jQuery.Deferred.exceptionHook = function (error, stack) {

	// Soporte: IE 8 - 9 solamente
	// La consola existe cuando las herramientas dev están abiertas, lo que puede suceder en cualquier momento
	if (window.console && window.console.warn && error && rerrorNames.test (error.name)) {
		window.console.warn ("jQuery.Deferred excepción:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		error de lanzamiento
	});
};




// El diferido utilizado en DOM listo
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	lista lista
		.then (fn)

		// Ajustar jQuery.readyException en una función para que la búsqueda
		// sucede en el momento de la gestión de errores en lugar de devolución de llamada
		// registro.
		.catch (función (error) {
			jQuery.readyException (error);
		});

	devuelve esto
};

jQuery.extend ({

	// ¿Está listo el DOM para ser utilizado? Establézcalo en verdadero una vez que ocurra.
	Listo: falso,

	// Un contador para rastrear cuántos artículos esperar antes
	// el evento listo dispara. Ver # 6781
	readyWait: 1,

	// Manejar cuando el DOM esté listo
	listo: función (espera) {

		// Cancelar si hay suspensiones pendientes o ya estamos listos
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			regreso;
		}

		// Recuerda que el DOM está listo
		jQuery.isReady = true;

		// Si un evento DOM Ready normal se activa, disminuye y espera si es necesario
		if (wait! == true && --jQuery.readyWait> 0) {
			regreso;
		}

		// Si hay funciones enlazadas, ejecutar
		readyList.resolveWith (documento, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// El controlador de eventos listo y el método de autolimpieza
función completada () {
	document.removeEventListener ("DOMContentLoaded", completado);
	window.removeEventListener ("carga", completado);
	jQuery.ready ();
}

// Capturar casos donde se llama $ (document) .ready ()
// después de que el evento del navegador ya haya ocurrido.
// Soporte: IE <= 9 - 10 solamente
// El IE antiguo a veces señala "interactivo" demasiado pronto
if (document.readyState === "complete" ||
	(document.readyState! == "cargando" &&! document.documentElement.doScroll)) {

	// Manéjelo de forma asíncrona para permitir que los scripts tengan la oportunidad de demorar listo
	window.setTimeout (jQuery.ready);

} else {

	// Usa el útil callback de evento
	document.addEventListener ("DOMContentLoaded", completado);

	// Una alternativa a window.onload, que siempre funcionará
	window.addEventListener ("carga", completado);
}




// Método multifuncional para obtener y establecer los valores de una colección
// El valor / s puede ser ejecutado opcionalmente si es una función
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = clave == nulo;

	// Establece muchos valores
	if (toType (clave) === "objeto") {
		chainable = true;
		para (i en clave) {
			access (elems, fn, i, key [i], true, emptyGet, raw);
		}

	// Establece un valor
	} else if (valor! == indefinido) {
		chainable = true;

		if (! isFunction (value)) {
			raw = true;
		}

		si (a granel) {

			// Las operaciones masivas se ejecutan contra todo el conjunto
			si (en bruto) {
				fn.call (elems, valor);
				fn = nulo;

			// ... excepto al ejecutar valores de función
			} else {
				bulk = fn;
				fn = función (elemento, clave, valor) {
					return bulk.call (jQuery (elem), valor);
				};
			}
		}

		si (fn) {
			para (; i <len; i ++) {
				fn
					elems [i], clave, crudo?
					valor:
					value.call (elems [i], i, fn (elems [i], clave))
				);
			}
		}
	}

	si (chainable) {
		volver elems;
	}

	// Obtiene
	si (a granel) {
		devuelve fn.call (elems);
	}

	volver len? fn (elems [0], clave): emptyGet;
};


// Coincide con la cadena punteada para camelizar
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// utilizado por camelCase como devolución de llamada para reemplazar ()
función fcamelCase (todos, letra) {
	return letter.toUpperCase ();
}

// Convertir guiones a camelCase; Utilizado por el css y los módulos de datos.
// Soporte: IE <= 9 - 11, Edge 12 - 15
// Microsoft olvidó juntar el prefijo de su proveedor (# 9572)
función camelCase (cadena) {
	devolver string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = function (owner) {

	// Sólo acepta:
	// - Nodo
	// - Nodo.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objeto
	// - Alguna
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




función de datos () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	caché: función (propietario) {

		// Comprobar si el objeto propietario ya tiene un caché
		var value = owner [this.expando];

		// Si no, crea uno
		si (! valor) {
			valor = {};

			// Podemos aceptar datos para nodos que no son elementos en navegadores modernos,
			// pero no deberíamos, ver # 8335.
			// Siempre devolver un objeto vacío.
			if (acceptData (propietario)) {

				// Si es un nodo poco probable que esté edificado o en bucle
				// usar asignación simple
				if (owner.nodeType) {
					propietario [this.expando] = valor;

				// De lo contrario, asegúralo en una propiedad no enumerable.
				// configurable debe ser verdadero para permitir que la propiedad sea
				// eliminado cuando se eliminan los datos
				} else {
					Object.defineProperty (propietario, este.expando, {
						valor: valor,
						configurable: verdadero
					});
				}
			}
		}

		valor de retorno;
	}
	set: función (propietario, datos, valor) {
		prop var
			cache = this.cache (propietario);

		// Manejar: [propietario, clave, valor] args
		// Siempre usa la tecla camelCase (gh-2257)
		if (typeof data === "string") {
			caché [camelCase (datos)] = valor;

		// Handle: [owner, {properties}] args
		} else {

			// Copia las propiedades una por una al objeto de caché
			para (prop en los datos) {
				caché [camelCase (prop)] = data [prop];
			}
		}
		caché de retorno
	}
	obtener: función (propietario, clave) {
		tecla de retorno === indefinido?
			this.cache (propietario):

			// Siempre usa la tecla camelCase (gh-2257)
			owner [this.expando] && owner [this.expando] [camelCase (key)];
	}
	acceso: función (propietario, clave, valor) {

		// En los casos en que:
		//
		// 1. No se especificó ninguna clave
		// 2. Se especificó una clave de cadena, pero no se proporcionó ningún valor
		//
		// Tome la ruta de "lectura" y permita que el método get determine
		// qué valor devolver, respectivamente:
		//
		// 1. El objeto de caché completo
		// 2. Los datos almacenados en la llave.
		//
		si (clave === indefinido ||
				((key && typeof key === "string") && value === undefined)) {

			devuelve this.get (propietario, clave);
		}

		// Cuando la clave no es una cadena, o tanto una clave como un valor
		// se especifican, establecen o amplían (objetos existentes) con:
		//
		// 1. Un objeto de propiedades.
		// 2. Una clave y un valor
		//
		this.set (propietario, clave, valor);

		// Dado que la ruta "set" puede tener dos puntos de entrada posibles
		// devuelve los datos esperados según la ruta que se tomó [*]
		valor de retorno! == indefinido? valor: clave;
	}
	eliminar: función (propietario, clave) {
		var i
			cache = owner [this.expando];

		if (cache === undefined) {
			regreso;
		}

		if (clave! == indefinido) {

			// Matriz de llaves o matriz de llaves separadas por espacios
			if (Array.isArray (clave)) {

				// Si la clave es una matriz de claves ...
				// Siempre configuramos las claves de camelCase, así que elimínelas.
				key = key.map (camelCase);
			} else {
				key = camelCase (key);

				// Si existe una clave con los espacios, úsala.
				// De lo contrario, cree una matriz haciendo coincidir espacios que no sean espacios en blanco.
				clave = clave en caché?
					[ llave ] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			mientras yo-- ) {
				borrar caché [clave [i]];
			}
		}

		// Eliminar el expando si no hay más datos.
		if (clave === undefined || jQuery.isEmptyObject (caché)) {

			// Soporte: Chrome <= 35 - 45
			// El rendimiento de Webkit & Blink sufre al eliminar propiedades
			// desde los nodos DOM, así que configúralo como indefinido en su lugar
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (error restringido)
			if (owner.nodeType) {
				propietario [this.expando] = indefinido;
			} else {
				borrar propietario [this.expando];
			}
		}
	}
	hasData: function (owner) {
		var cache = owner [this.expando];
		devolver caché! == undefined &&! jQuery.isEmptyObject (caché);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// Resumen de implementación
//
// 1. Exigir la compatibilidad de la superficie y semántica de la API con la rama 1.9.x
// 2. Mejorar la mantenibilidad del módulo reduciendo el almacenamiento
// Rutas hacia un solo mecanismo.
// 3. Utilice el mismo mecanismo único para admitir datos "privados" y de "usuario".
// 4. _Never_ expone datos "privados" al código de usuario (TODO: Drop _data, _removeData)
// 5. Evite exponer los detalles de la implementación en los objetos de usuario (por ejemplo, expando propiedades)
// 6. Proporcionar una ruta clara para la actualización de la implementación a WeakMap en 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

función getData (datos) {
	si (datos === "verdadero") {
		devuelve verdadero
	}

	si (datos === "falso") {
		falso retorno;
	}

	if (datos === "nulo") {
		retorno nulo
	}

	// Convertir solo a un número si no cambia la cadena
	si (datos === + datos + "") {
		retorno + datos;
	}

	if (rbrace.test (data)) {
		devolver JSON.parse (datos);
	}

	datos de retorno;
}

función dataAttr (elem, key, data) {
	nombre var

	// Si no se ha encontrado nada internamente, intenta buscar cualquier
	// datos del atributo de datos HTML5 *
	if (datos === undefined && elem.nodeType === 1) {
		name = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		datos = elem.getAttribute (nombre);

		if (typeof data === "string") {
			tratar {
				datos = getData (datos);
			} atrapar (e) {}

			// Asegúrate de configurar los datos para que no se modifiquen más tarde.
			dataUser.set (elem, clave, datos);
		} else {
			datos = indefinido;
		}
	}
	datos de retorno;
}

jQuery.extend ({
	hasData: function (elem) {
		devuelve dataUser.hasData (elem) || dataPriv.hasData (elem);
	}

	datos: función (elem, nombre, datos) {
		devuelve dataUser.access (elem, nombre, datos);
	}

	removeData: function (elem, name) {
		dataUser.remove (elem, nombre);
	}

	// TODO: Ahora que todas las llamadas a _data y _removeData han sido reemplazadas
	// con llamadas directas a los métodos dataPriv, estos pueden ser desaprobados.
	_data: función (elem, nombre, datos) {
		devuelve dataPriv.access (elem, nombre, datos);
	}

	_removeData: function (elem, name) {
		dataPriv.remove (elem, nombre);
	}
});

jQuery.fn.extend ({
	datos: función (clave, valor) {
		var i, nombre, datos,
			elem = este [0],
			attrs = elem && elem.attributes;

		// Obtiene todos los valores
		if (clave === indefinido) {
			if (this.length) {
				data = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					mientras yo-- ) {

						// Soporte: solo IE 11
						// Los elementos attrs pueden ser nulos (# 14894)
						if (attrs [i]) {
							name = attrs [i] .name;
							if (name.indexOf ("data-") === 0) {
								name = camelCase (name.slice (5));
								dataAttr (elem, nombre, datos [nombre]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", true);
				}
			}

			datos de retorno;
		}

		// Establece valores múltiples
		if (typeof key === "object") {
			devuelve this.each (function () {
				dataUser.set (esta, clave);
			});
		}

		acceso de retorno (esta, función (valor) {
			datos var

			// El objeto jQuery llamante (elemento coincide) no está vacío
			// (y por lo tanto tiene un elemento aparece en este [0]) y el
			// El parámetro `value` no estaba indefinido. Un objeto jQuery vacío
			// resultará en `undefined` para elem = this [0] lo cual
			// lanza una excepción si se hace un intento de leer un caché de datos.
			if (elem && value === undefined) {

				// Intentar obtener datos de la caché
				// La clave siempre será camelCased in Data
				data = dataUser.get (elem, clave);
				si (datos! == indefinido) {
					datos de retorno;
				}

				// Intentar "descubrir" los datos en
				// HTML5 custom data- * attrs
				data = dataAttr (elem, key);
				si (datos! == indefinido) {
					datos de retorno;
				}

				// Lo intentamos muy duro, pero los datos no existen.
				regreso;
			}

			// Establecer los datos ...
			this.each (function () {

				// Siempre almacenamos la clave camelCased
				dataUser.set (esto, clave, valor);
			});
		}, nulo, valor, argumentos.longitud> 1, nulo, verdadero);
	}

	removeData: function (key) {
		devuelve this.each (function () {
			dataUser.remove (esta, clave);
		});
	}
});


jQuery.extend ({
	queue: function (elem, type, data) {
		cola de var

		if (elem) {
			type = (type || "fx") + "queue";
			queue = dataPriv.get (elem, type);

			// Acelera la salida de la cola saliendo rápidamente si esto es solo una búsqueda
			si (datos) {
				if (! queue || Array.isArray (data)) {
					queue = dataPriv.access (elem, type, jQuery.makeArray (data));
				} else {
					queue.push (datos);
				}
			}
			cola de retorno || [];
		}
	}

	dequeue: function (elem, type) {
		tipo = tipo || "fx";

		var queue = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, type),
			next = function () {
				jQuery.dequeue (elem, tipo);
			};

		// Si la cola fx está en cola, siempre elimine el centinela de progreso
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		si (fn) {

			// Agregar un centinela de progreso para evitar que la cola de fx sea
			// automáticamente en cola
			if (tipo === "fx") {
				queue.unshift ("inprogress");
			}

			// Borrar la última función de parada de cola
			eliminar hooks.stop;
			fn.call (elem, siguiente, ganchos);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	}

	// No público: generar un objeto queueHooks o devolver el actual
	_queueHooks: function (elem, type) {
		var key = tipo + "queueHooks";
		devuelve dataPriv.get (elem, clave) || dataPriv.access (elem, clave, {
			vacío: jQuery.Callbacks ("once memory") .add (function () {
				dataPriv.remove (elem, [type + "queue", key]);
			})
		});
	}
});

jQuery.fn.extend ({
	cola: función (tipo, datos) {
		var setter = 2;

		if (tipo de tipo! == "cadena") {
			datos = tipo;
			type = "fx";
			setter--;
		}

		if (argumentos.longitud <definidor) {
			devuelva jQuery.queue (este [0], escriba);
		}

		devuelve datos === indefinido?
			esta :
			this.each (function () {
				var queue = jQuery.queue (this, type, data);

				// Asegurar un gancho para esta cola
				jQuery._queueHooks (this, type);

				if (escriba === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (this, type);
				}
			});
	}
	dequeue: function (type) {
		devuelve this.each (function () {
			jQuery.dequeue (this, type);
		});
	}
	clearQueue: function (type) {
		devuelva this.queue (escriba || "fx", []);
	}

	// Obtener una promesa resuelta cuando colas de un cierto tipo
	// se vacían (fx es el tipo por defecto)
	promesa: función (tipo, obj) {
		var tmp,
			cuenta = 1,
			defer = jQuery.Deferred (),
			elementos = esto,
			i = this.length,
			resolver = función () {
				si (! (--count)) {
					defer.resolveWith (elementos, [elementos]);
				}
			};

		if (tipo de tipo! == "cadena") {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		mientras yo-- ) {
			tmp = dataPriv.get (elementos [i], tipo + "queueHooks");
			if (tmp && tmp.empty) {
				cuenta ++;
				tmp.empty.add (resolver);
			}
		}
		resolver();
		devolver aplazar. prometer (obj);
	}
});
var pnum = (/[+-◆?(?:\d*\.|)\d+(? :[eE◆[+-- ??\d+|)/) .source;

var rcssNum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Top", "Right", "Bottom", "Left"];

var documentElement = document.documentElement;



	var isAttached = function (elem) {
			devolver jQuery.contains (elem.ownerDocument, elem);
		}
		compuesto = {compuesto: verdadero};

	// Verifique el adjunto a través de los límites del DOM de sombra cuando sea posible (gh-3504)
	if (documentElement.attachShadow) {
		isAttached = function (elem) {
			devolver jQuery.contains (elem.ownerDocument, elem) ||
				elem.getRootNode (compuesto) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree podría llamarse desde jQuery # filter function;
		// en ese caso, el elemento será el segundo argumento
		elem = el || elem

		// El estilo en línea triunfa sobre todo
		devolver elem.style.display === "none" ||
			elem.style.display === "" &&

			// De lo contrario, compruebe el estilo computado.
			// Soporte: Firefox <= 43 - 45
			// Los elementos desconectados pueden tener visualización computada: ninguno, así que primero confirme que elem es
			// en el documento.
			isAttached (elem) &&

			jQuery.css (elem, "display") === "none";
	};

var swap = function (elem, options, callback, args) {
	var ret, nombre,
		antiguo = {};

	// Recuerda los valores antiguos, e inserta los nuevos
	para (nombre en opciones) {
		old [nombre] = elem.style [nombre];
		elem.style [nombre] = opciones [nombre];
	}

	ret = callback.apply (elem, args || []);

	// Revertir los valores antiguos
	para (nombre en opciones) {
		elem.style [nombre] = antiguo [nombre];
	}

	volver ret
};




función adjustCSS (elem, prop, valueParts, tween) {
	var ajustada, escala,
		maxIteraciones = 20,
		currentValue = tween?
			función () {
				volver tween.cur ();
			}:
			función () {
				devuelva jQuery.css (elem, prop, "");
			}
		initial = currentValue (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// Se requiere el cálculo del valor inicial para posibles desajustes de unidades
		initialInUnit = elem.nodeType &&
			(jQuery.cssNumber [prop] || unit! == "px" && + initial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unidad) {

		// Soporte: Firefox <= 54
		// Reducir a la mitad el valor objetivo de la iteración para evitar la interferencia de los límites superiores de CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades fiduciarias reportadas por jQuery.css
		unidad = unidad || initialInUnit [3];

		// Iterativamente aproximado de un punto de partida distinto de cero
		initialInUnit = + initial || 1;

		while (maxIterations--) {

			// Evalúe y actualice nuestras mejores conjeturas (duplicando las conjeturas que se ponen a cero).
			// Finalice si la escala es igual a o cruza 1 (lo que hace que el producto nuevo * no sea positivo).
			jQuery.style (elem, prop, initialInUnit + unit);
			if ((1 - scale) * (1 - (scale = currentValue () / initial || 0.5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unit);

		// Asegúrate de actualizar las propiedades de la interpolación más adelante
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + inicial || 0;

		// Aplicar compensación relativa (+ = / - =) si se especifica
		ajustado = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ valueParts [2];
		if (tween) {
			tween.unit = unidad;
			tween.start = initialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado
}


var defaultDisplayMap = {};

función getDefaultDisplay (elem) {
	temperatura de var
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [nodeName];

	if (mostrar) {
		pantalla de retorno;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	if (display === "none") {
		display = "bloque";
	}
	defaultDisplayMap [nodeName] = display;

	pantalla de retorno;
}

función showHide (elementos, show) {
	pantalla var, elem,
		valores = [],
		índice = 0,
		longitud = elementos.longitud;

	// Determine el nuevo valor de visualización para los elementos que necesitan cambiar
	para (; índice <longitud; índice ++) {
		elem = elementos [índice];
		if (! elem.style) {
			continuar;
		}

		display = elem.style.display;
		if (mostrar) {

			// Dado que forzamos la visibilidad sobre elementos ocultos en cascada, una inmediata (y lenta)
			// se requiere verificación en este primer bucle a menos que tengamos un valor de visualización no vacío (ya sea
			// inline o about-to-be-restore)
			if (display === "none") {
				valores [índice] = dataPriv.get (elem, "display") || nulo;
				si (! valores [índice]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				valores [índice] = getDefaultDisplay (elem);
			}
		} else {
			if (display! == "none") {
				valores [índice] = "ninguno";

				// Recuerda lo que estamos sobrescribiendo
				dataPriv.set (elem, "display", display);
			}
		}
	}

	// Establecer la visualización de los elementos en un segundo bucle para evitar un reflujo constante
	para (índice = 0; índice <longitud; índice ++) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) &&
					dataPriv.get( el, "click" ) === undefined ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) &&
					dataPriv.get( el, "click" ) === undefined ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		jQuery.event.add( el, type, returnTrue );
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = undefined;
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(

					// Support: IE <=9 - 11+
					// Extend with the prototype to reset the above stopImmediatePropagation()
					jQuery.extend( saved.shift(), jQuery.Event.prototype ),
					saved,
					this
				) );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );