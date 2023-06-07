## instalacion de git

https://git-scm.com/downloads

## libro de uso de git

https://git-scm.com/book/en/v2

## comprobar la instalacion con `git -v` o `git ---version`

salida `git version <version>`

## comandos de git

### configuracion

`git config --global user.name "John Doe"` el nombre que se usara para los commits

`git config --global user.email johndoe@example.com` el email que se usara para los commits

`git config --list` comprobar la configuracion y para mostrar todas las propiedades que Git ha configurado.

`git config --global -e` abre el editor de vim para editar los alias

### trabajar en local comandos basicos

`git init` para crear un nuevo repositorio

'git checkout --.' Uitlizado para restablecer todo el contenido del proyecto en caso de ser eliminado el contenido

`git add <nombre de ruta>` para agregar una carpeta o archivo especifico

`git add .` para agregar todos los cambios al repositorio de la carpeta actual

`git commit -m "mensaje del commit"` para hacer un commit e indicar el mensaje

`git commit -a "mensaje del commit"` si el archivo ya esta en el repositorio se agrega sin git add

'git commit --amend -m 'nuevo nombre del commit' utilizado para renombrar el ultimo comit 

`git status` ver el estado del repositorio

`git log` ver los logs de los commits

`git log --oneline` ver los logs en una solo linea

`git branch` para la ramas y ver la actual

`git branch <nueva rama>` para crear una nueva rama

`git checkout -b <nueva rama>` crear una nueva rama y te mueve a la rama

`git branch -d <nombre de rama>` eliminar una rama

`git stash` para guardar temporal.

`git merge <nombre de la rama>` hace una funcion a la actual

'git tag' para especificar un punto especifico del proyecto

'git reset' restablecer en un punto del log con el hash del commit

'git rebase -i HEAD~"cantidad de commits a utilizar"' Utilizado para renombrar un commit o hacerle un squash o modificar el commit del mismo"

### trabajar en remoto

iniciar sesion de la terminal con github. o agregar claves para git crear un repositorio en github.

`git push --tags`

`git push origin <nombre de la rama>` para agregar la rama tambien

`git pull` para descargar los cambios del repositorio remoto

'git fetch' visulizar los cambios que hay en remoto

### trucos de git y mas comandos
.gitignore: lista de archivos que no va a seguir git
