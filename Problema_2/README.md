# Problema N°2

# Consumo de Pokémon API

Este proyecto implementa una API para consultar información sobre Pokémon utilizando la PokeAPI (https://pokeapi.co/). La API proporciona diferentes rutas para obtener datos relacionados con Pokémon, como la suma total de Pokémon por tipo, los Pokémon que cumplen con dos tipos específicos, el número de un Pokémon por su nombre, las 6 stats base de un Pokémon por su número, la lista de Pokémon ordenados por nombre, tipo o peso, y la verificación si un Pokémon de un número dado posee un tipo específico.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando el siguiente comando:

```bash
npm install 
```
## Instrucciones de uso

1. Para iniciar el servidor y utilizar la API, ejecuta el siguiente comando en la terminal:

```bash
npm start
```
## Rutas de la API

1. Obtener todos los datos requeridos en una sola llamada
```bash
GET /api/pokemones
```
2. Obtener la suma total de Pokémon por tipo
```bash
GET /api/sumaTotalPorTipo?tipo1=fire
```

3. Obtener todos los Pokémon que cumplen con dos tipos específicos
```bash
GET /api/obtenerPokemonesPorTipos?tipo1=fire&tipo2=flying
```

4. Obtener el número de un Pokémon dado su nombre
```bash
GET /api/obtenerNumeroPorNombre?nombre=pikachu
```

5. Obtener las 6 stats base de un Pokémon dado su número
```bash
GET /api/obtenerStatsPorNumero/25
```

6. Obtener los Pokémon en un arreglo con su nombre, tipo y peso ordenados por un indicador
```bash
GET /api/obtenerPokemonesOrdenadosPorIndicador?ids=1,4,7,10&indicador=peso
```

7.Verificar si un Pokémon de un número dado posee un tipo específico

```bash
GET /api/tieneTipo?numero=25&tipo=electric
```

# Respuestas

Las respuestas de la API se devuelven en formato JSON y contienen la información solicitada. Si alguna solicitud no puede ser procesada correctamente, la API responderá con un mensaje de error y un código de estado 500.