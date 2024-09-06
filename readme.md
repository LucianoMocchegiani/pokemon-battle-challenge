# Pokemon Battle server

API diseñada para gestionar datos y proporcionar endpoints para una aplicación cliente de Pokémon Battle. Permite manejar la información de los Pokémon, las batallas y otros aspectos relevantes del juego

1. Requisitos:
Antes de comenzar, asegúrate de tener instalados Node.js y npm

2. Instalar Dependencias:
Abre un a terminal y navega al directorio del proyecto, luego realiza un npm install

3. Inicializa la base de datos con las migraciones:
Desde la terminal en el directorio del proyecto realiza los siguientes pasos.
npm run build 
npm migration:run

4. Listo para usar:
npm run start:dev o npm run start

/pokemons
Método: GET
Descripción: Obtiene una lista de todos los Pokémon disponibles en el servidor.
Respuesta: Un array de objetos Pokémon  {id, name, type, speed, hp, attack, defense}.

/battles
Método: POST
Descripción: Crea una nueva batalla entre dos Pokémon.
Respuesta: Un objeto batalla {id, results, message:'pokemon win!'}.
Uso: Se deben enviar dos parámetros en el cuerpo de la solicitud (body), que son los IDs de los dos Pokémon que van a batallar ({id1, id2}).

Método: GET
Descripción: Obtiene una lista de todas las batallas registradas en el servidor.
Respuesta: Un array de objetos batalla {id, results, message:'pokemon win!'}.

# Pokemon Battle client

Elige tu pokemon y ponlo a batalllar.

1. Requisitos:
Antes de comenzar, asegúrate de tener instalados Node.js y npm

2. Instalar Dependencias:
Abre un a terminal y navega al directorio del proyecto, luego realiza un npm install

3. crea una archivo .env en la raiz del proyecto y configura la url del server
VITE_API_URL = http://localhost:3000

4. Listo para usar:
npm run dev


# El Challenge

La aplicación es una batalla de Pokémon. Cada uno tiene diferentes stats, como ataque y defensa, por ejemplo, 
y tenemos que hacerlos batallar entre ellos.

## Objetivos de Backend

1. Implementar migraciones de DB, debe de popularse una tabla con los datos de los pokemon
2. Implementar endpoint para listar todos los pokemon
3. Implementar endpoint para hacerlos batallar
4. Guardar los resultados de las batallas en una tabla

## Objetivos del Frontend

1. Implementar la UI/UX que liste y seleccione los pokemon
2. Implementar la Card del Pokemon que liste los stats
3. Cuando de Inicio a la batalla, se debe escoger automáticamente y aleatoriamente un contrincante diferente y luego mostrar el resultado
4. Implementar Responsividad básica.
5. Conectar con el Backend

## Algoritmo de Batalla

Para el cálculo de la batalla, ten en consideración lo siguiente:

- El pokemon con la velocidad más alta hace el primer ataque, si son iguales, el pokemon con el ataque más alto va primero.
- Para calcular el daño, resta la defensa del ataque (ataque-defensa). La diferencia es el daño. Si el ataque es igual o menor que la defensa el daño es 1.
- El daño lo restas del HP.
- Los pokemon pelearán por turnos. Todos los turnos serán calculados in el mismo request. Es por esto por lo que el endpoint debe retornar la data del ganador en la misma llamada.
- El ganador es el que se reste el HP del enemigo a cero. 
- NOTA: como adicional se podría implementar el sistema de tipos, pero no es requerido.

## Tecnología a usar

Backend:
- NestJs
- Typeorm
- Sqlite

Frontend:
- React
- MaterialUI

    ## Modo de entrega

    El código se debe de entregar en un repositorio público para ser revisado. Por favor adicionar un readme con instrucciones.
