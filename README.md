# Courses and Lessons

Courses and Lessons es un proyecto que usa el framework Hapi.js, Javascript y Node.js, el objetivo del proyecto es registrar cursos y crear lecciones dentro de los cursos.

## Instalación

Para instalar todas las dependecias que se usan en el proyecto, debes correr el siguiente comando


```bash
npm install 
```

## Prueba

Corra el siguiente comando dentro de la carpeta del proyecto.

 ```bash
node server.js
```

Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost: 3000 para verlo en el navegador.

La página se volverá a cargar si realiza modificaciones.
También ver errores en la consola.


## Uso

Para poder realizar los registros de cursos debe usar Postman u otro programa similar, en el que estaremos usando los métodos POST y GET para realizar los registros.

### Ejemplo crear Cursos

Ingreso en la siguiente liga en  POST para registrar un curso

```link
http://localhost:3000/api/courses
```
y en el Body creo un JSON con los datos del curso, ejemplo:

```
{
 "name": "Hapi",
 "credits": 8,
 "code": "H1",
 "description": "Taller de Hapi"
}
```
Cada vez que registres el curso este se almacena en una base de datos temporal, así que si creas otro curso este quedará almacenado mientras el servidor este corriendo.

### Ejemplo crear Lecciones 

Una vez que creamos el curso recibiremos esta información
```
{
    "name": "Hapi",
    "credits": 8,
    "code": "H1",
    "description": "Taller de Hapi",
    "id": "ec00df2e-32d6-4a7c-9a04-f0d7b0974e40"
}

```
el id indica el curso que curso es, por lo que cuando cree las lecciones usaremos la siguiente liga:

```
http://localhost:3000/api/courses/ec00df2e-32d6-4a7c-9a04-f0d7b0974e40/lessons
```

y en el Body creo un JSON con los datos de la lección, ejemplo:

```
{
"name": "JavaScript",
"code": "JSL01",
"description": "Introducción a JS",
"approvalScore": 7
}
```
#### Por el momento las lecciones no se están registrando, se pueden omitir en lo que reparo el error.
## License
[MIT](https://choosealicense.com/licenses/mit/)