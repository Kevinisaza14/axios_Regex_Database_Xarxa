# Proyecto Database xarxa Industrial
Autor Kevin Isaza.

## Descripción del Proyecto
Proyecto enfocado en obtener y manejar datos relacionados con la población y empresas industiales, en resumen diseñado para interactuar con bases de datos o APIs externas para obtener y manejar datos demográficos y empresariales.

### Funcionalidades Principales
El proyecto esta enfocado en obtener y manejar datos relacionados con la población y empresas. Basado en los comentarios del archivo api.controller.js, El proyecto realiza las siguientes tareas:

- **getPopulation:** Obtiene información relacionada con la población, posiblemente a través de consultas a una base de datos o una API externa para recuperar datos de URL de cada poblacion en la web.

- **getEmpresas:** Recupera una lista de empresas, accediendo a una base de datos o una API para obtener información sobre diferentes empresas.

- **getEmpresasinfo:** Obtiene información detallada sobre una empresa específica, utilizando un identificador de empresa para recuperar datos más específicos y detallados.
En resumen, tu proyecto parece estar diseñado para interactuar con bases de datos o APIs externas para obtener y manejar datos demográficos y empresariales. 

# Informacion de uso del proyecto:
Se debe iniciar un servidor local en mi caso utilizo Xampp para el servidor de MySQL.
El archivo `api.js` es el arrancador del proyecto, desde una consola de cmd ubicandose en la carpeta del proyecto puedes ejecutar el comando `npm start` para activar el servidor.

Para lograr almacenar los resultados en la base de datos se debera correr la db ubicada en la carpeta `src/sql/xarxa.sql` esta puede ser ejecutada en cualquier gestor de base de datos, en mi caso `MySQL Workbench`. despues de esto se debera realizar las consultas de las url en la web en cualquier navegador.

## Los endpoints son los siguientes:
http://localhost:3000/api/v1/xarxaUrl 
http://localhost:3000/api/v1/xarxaEmpresas
http://localhost:3000/api/v1/xarxaAll

Se debera ejecutar uno a la vez y experar hasta tener una respuesta ya que la cantidad de informacion es alta se requiere de bastante tiempo intermedio entre url para ejecutar la siguiente y que la base de datos quede cargada correctamente.