


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

# Se implemento la vista de los grupos por grados  André (03-09-2021)

en el service se implementaron tres metodos uno para obtener los grupos de acuerdo al grado en que el docente imparte clases 


```js
Metodo para obtener los grupos de acuerdo al grado
getGrupos(){
    
    const URL = `${this.baseUrl}/grupos/${this.idUser}/${this.grado}`;

    return this.http.get<ResponseInterface>(URL)
                    .pipe(
                      map(res=>{
                        return res.body;
                      }),
                      catchError(e=>of(e))
                    )
  }
  ```
```js
Metodo para obtener la lista de estudiantes de acuerdo al grado
  getEstdiantes(grado:string) {
  const URL = `${this.baseUrl}/lista/${grado}`;
    return this.http.get<ResponseInterface>(URL)
              .pipe(
                map(res=>{
                  return  res.body;
                 }),
                 catchError(e=>of(e))
              );
  }
  ```
 se modifico el archivo `interface` del docente, dejando todo en un solo archivo `teacher interface` dejando como respuesta principal al `interfaceResponse` interface quecontiene el status de la peticion y a su vez, las disntinas interfaces segun sea el caso.

 por facilidad y rapidez, se pasa el id por la ruta del navegador 


 ````js
    /////////
   /   * *   \ 
  /    {}     \ _____
  |             _____
  |  \  \      YO PUSE MI CODIGO AQUí XD
  |   \   \___ ___
  |     \  ___ ___

````

# Cargue  de actividad firebase André (03-09-2021)

 - se implento la recuerpacion  en el service docente,  del grado (`getGrado(id_grado:string)`),   la posicion  `(getGrupo( id_grado:string, id_grupo:string))` y la asignatura `( getAsignatura(grupo:string))` de acuerdo el docente, para asi cuando el user ingrese a la pestaña de crear activad, tenga los datos necesario

 - para cargar un archivo se instalo firebae `npm install firebase @angular/fire --save` configuraciones relacionadas a firebase en app.moduele.ts  `src\app\app.module.ts`
    - para cargar la imagen al server, se tiene el siguiente metodo

     ```ts
              updloadFile(event,id_grado:string, id_grupo:string, id_asignatura:string ){
            
              const file = event.target.files[0];
              this.fileName = file.name;
              this.filePath =`${this.id_docente}/${id_grado}/${id_grupo}/${id_asignatura}/${this.fileName}`;
              const fileRef = this.storage.ref(this.filePath);
              const upload = this.storage.upload(this.filePath, file);
              upload.snapshotChanges()
                    .pipe( 
                      finalize(()=>{
                          fileRef.getDownloadURL()
                                .subscribe(url=>{
                                  console.log(url);
                                })                  
                      })
                    ).subscribe(
                      response =>{
                        console.log(response, 'response');  
                      }
                    );
                }

      ```

      # Nota
        - hay que crear un indicador de carga cuando el archivo se este enviando al servidor