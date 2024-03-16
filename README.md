# Api para crear una lista de usuarios. Primeros pasos con Nest JS.

## Descripción

API de práctica desarrollada con NestJS que incluye funcionalidades básicas para interactuar con una lista de usuarios. Sus funcionalidades son:

- Leer todos los usuario de la lista.
- Leer un usuario en particular de la lista.
- Crea usuarios nuevos y agregarlos a la lista.

## Prerequisitos

- NodeJS (v12 o superior)
- npm(v6 o superior)
- NestJS CLI

## Installación

1. Clonar el repositorio

```bash
$ git clone https://github.com/Ariel2911/bootcamp-nest-practica01.git
```

2. Navegar al directorio

```bash
$ cd bootcamp-nest-practica01
```

3. Instalar dependencias

```bash
$ npm install
```

## Ejecución

```bash
$ npm run start
```

## Punto de acceso

http://localhost:3000

## Uso

Este servidor se comunicará a travez de datos en formato JSON

### Obtener una lista de usuarios

```http
  GET /api/users/
```

Respuesta:

| Status | Type                                                                 | Description              |
| :----- | :------------------------------------------------------------------- | :----------------------- |
| `200`  | `[{"id": number, "name": string, "surname": string, "age": string}]` | Resultado de la busqueda |

### Obtener un usuario específico

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Id de la tarea a buscar |

Respuesta:

| Status | Type                                                               | Description              |
| :----- | :----------------------------------------------------------------- | :----------------------- |
| `200`  | `{"id": number, "name": string, "surname": string, "age": string}` | Resultado de la busqueda |

### Añadir un usuario

```http
  POST /api/users/
```

| Body      | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `name`    | `string` | **Required**. Valor que se almacena |
| `surname` | `string` | **Required**. Valor que se almacena |
| `age`     | `string` | **Required**. Valor que se almacena |

Respuesta:

| Status | Type                                                               | Description      |
| :----- | :----------------------------------------------------------------- | :--------------- |
| `201`  | `{"id": number, "name": string, "surname": string, "age": string}` | Usuario agregado |

| Status | Type                     | Description               |
| :----- | :----------------------- | :------------------------ |
| `400`  | `"error": "Bad Request"` | "message": "Invalid data" |

## Licencia

[Licencia MIT](https://es.wikipedia.org/wiki/Licencia_MIT).

## Contacto:

Email: ariel29111978@hotmail.com
