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


## Endpoints


1. /pokemons

    - Método: GET

        - Descripción: Obtiene una lista de todos los Pokémon disponibles en el servidor.

        - Respuesta: Un array de objetos Pokémon  {id, name, type, speed, hp, attack, defense}.



2. /battles

    - Método: POST

        - Descripción: Crea una nueva batalla entre dos Pokémon.

        - Respuesta: Un objeto batalla {id, results, message:'pokemon win!'}.

        - Uso: Se deben enviar dos parámetros en el cuerpo de la solicitud (body), que son los IDs de los dos Pokémon que van a batallar ({id1, id2}).


    - Método: GET

        - Descripción: Obtiene una lista de todas las batallas registradas en el servidor.

        - Respuesta: Un array de objetos batalla {id, results, message:'pokemon win!'}.
