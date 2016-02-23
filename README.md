# Desarrollo de Software por Equipos
## Evaluación


Complete la aplicación basada en Javascript + Angular, de forma que
sea posible listar y editar los datos de las Personas y de Tareas de
un proyecto.

* Deberá crear las plantillas de HTML y modificar algunos archivos Javascript

Lea detalladamente la información contenida en el README.md.

### Casos de uso a realizar

**Modulo**  | **Casos de Uso**
----------- | ----------------
**Person**  | Listar Personas
            | Agregar Persona
**Task**    | Listar Tareas
            | Agregar Tarea


### Clases y Atributos

Para esta tarea no se requieren definir relaciones entre las clases /
entidades *Person* y *Task*.

Considere que son clases / entidades independientes.

**Clase**   | **Atributos**
----------- | -----------------
**Person**  | id
            | name
            | email
**Task**    | id
            | name
            | description
            | date


### Archivos por revisar y modificar

El proyecto inicial tiene un conjunto de archivos que se debe
modificar y revisar.

**Archivo**         | **Tarea**
------------------- | -------------------------------------------------------------
```index.html```    | Contiene la página principal del proyecto.
                    | Debe agregarse enlaces *ui-sref* a los módulos del proyecto.
```src/app.js```    | Contiene la configuración de la aplicación.
                    | Debe definir y configurar los *estados* de la aplicación.


Para el módulo de personas en ```src/modules/person```

**Archivo**           | **Tarea**
--------------------- | -------------------------------------------------------------
```person.mod.js```   | Contiene la definición del módulo de personas.
```person.tpl.html``` | Plantilla usada por el módulo de personas.
                      | Debe crear una plantilla que use los atributos y métodos definidos por el controlador.
```person.ctrl.js```  | Contiene un controlador para el módulo de personas.
                      | Debe agregar los atributos y métodos que se usan desde la pantalla.
```person.svc.js```   | Contiene la definición del servicio de personas.
                      | Revise los nombres de las funciones. Estas ya funcionan. Es necesario usarlas desde el controlador. 
```person.mock.js```  | Contiene la definición del mock del servicio de personas. 


Para el módulo de tareas en ```src/modules/task```


**Archivo**         | **Tarea**
------------------- | -------------------------------------------------------------
```task.mod.js```   | Contiene la definición del módulo de tareas.
```task.tpl.html``` | Plantilla usada por el módulo de tareas.
                    | Debe crear una plantilla que use los atributos y métodos definidos por el controlador.
```task.ctrl.js```  | Contiene un controlador para el módulo de tareas.
                    | Debe agregar los atributos y métodos que se usan desde la pantalla.
```task.svc.js```   | Contiene la definición del servicio de tareas.
                    | Revise los nombres de las funciones. Estas ya funcionan. Es necesario usarlas desde el controlador.
```task.mock.js```  | Contiene la definición del mock del servicio de tareas.

