// Restablecer el proyecto a como está en el ultimo commit
git checkout -- .

// Para moverme entre ramas
git checkout <nombre-de-la-rama> o git switch <nombre-de-la-rama>
asdasd

// para borrar una rama
git branch -d <nombre-de-la-rama>

// para hacer un merge, me voy a la rama main y ejecuto esto, ese nombre de la rama es el que quiero incluir en mi main, en mi caso será dev-dev las cosas de dev-dev se incluiran en main
git merge <nombre-de-la-rama>

// para saber en que rama estoy 
git branch

Color palette:
    * rojo: "#DA1641",
    * blanco: "#F2F2F2",
    * gris: "#A6A6A6",
    * "gris-oscuro": "#595959",
    * negro: "#131211",
Fonts
    * Roboto: ["Roboto", "sans-serif"],
    * Cardo: ["Cardo", "serif"],

Consideraciónes a la hora del registro:

Se debe enviar el mail, contraseña, rol, nombre, apellido, se debe tener en cuenta que el mail no este registrado, se tiene que tener en cuenta que la contraseña cumpla las especificaciones del backend

Consideraciones a la hora de logueo:
Se debe enviar el mail y contraseña
El access_token debe guardarse en localstorage