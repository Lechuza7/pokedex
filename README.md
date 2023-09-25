Sencilla aplicación (en construcción!) que simula una Pokedex básica. Entre sus caracterísiticas y funcionalidades se encuentran:</br>

1- Fetch de datos a la API, encapsulado en un service para usar en otro componentes de la app.</br>
2- usePokemons: custom hook para crear y gestionar el estado de los datos almacenados en un array de pokemons.</br>
3- useSearch: custom hook utilizado para controlar el input de búsquedas y generar los avisos (errores) correspondientes al usuario.</br>
4- Funcionalidades: búsqueda de pokemons por nombre y opción de ordenar alfabéticamente.</br>
5- useMemo para crear un estado booleano de "sort", evitando que se ejecute el propio "sort" al escribir en el input de búsqueda y activarse su onChange. Solamente se ejecutará "sort" si realizar la búsqueda clickando al botón o al modificar el checkbox del propio "sort".</br>
6- useRef usado para almacenar el valor de la búsqueda previa entre renderizados y evitar repetir una misma búsqueda.</br>

Gracias por visitar el repo!
