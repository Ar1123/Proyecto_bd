


# Se inicia la implementacion de los endpoint para el docente en el Front-Ent - André (2021-08-31)

- Se implemento el  login con un service y se aseguro la ruta de home del docente, para que solo pueda acceder si y solo esta logueado
- Se removieron algunas carpetas para facilitar la protecion de rutas y creacion de rutas hijas, es decir `src\app\app.routes.ts`  contiene los modulos del `auth` y  del  `protected`, donde protected, solo se accede si hay una sesion activa el modulo de protected esta protegido desde `src\app\app.routes.ts` mediante guards `src\app\guards\auth.guard.ts`, este consulta el `localStare` y obtiene el id para verificar con back si existe el user y si el dato enviado es correcto, de lo contrario lo manda al `index`
    - `src\app\app.routes.ts `  RUTA PADRE
    - `src\app\auth\auth-routing.module.ts `  RUTA HIJA - 1
    - `src\app\protected\protected-routing.module.ts `  RUTA HIJA - 2

- se crearon dos services, uno para el auth `src\app\auth\service\login.service.ts`  y otro para el docente `src\app\services\service-docente.service.ts` en este ultimo se recomienta mirar la viriable `user` para mejorar la interpolacion del lado del html

- Estructura
```bash
        |--app
           |--auth
                |--index
                |--login
                |-service
           |--guards
           |--header
           |--services
           |--protected
  Se recomienda no eliminar las carpetas restantes, ya tienen las interfaces hechas, solo es pasarlas XD
```
````js
    /////////
   /   * *   \ 
  /    {}     \ _____
  |             _____
  |  \  \      YO PUSE MI CODIGO AQUí XD
  |   \   \___ ___
  |     \  ___ ___

````