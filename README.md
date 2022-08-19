# Components List

## App

    Recibe: el token del usuario

    Muestra: Register componente
    Login componente o botón logout
    Lista usuarios solo si está logado

    Estado: logado o no logado

    Acción: Guarda/setea en local storage el token.

## LOGIN

    Recibe: nada

    Muestra: un formulario con un botón para login.

    Estado: ir actualizando los datos que va introduciendo usuario y si todo ha ido bien, redirigir al perfil de usuario.

    Acción: al clickar el usuario, enviar el formulario y los datos del usuario logado al store.

## REGISTER

    Recibe: nada

    Muestra: un formulario de registro con campos userName y Password y un botón registrarse

    Estado propio: ir actualizando los datos que va introduciendo usuario y al final volver al estado inicial.

    Acción: al clickar, enviar formulario de registro

## USERS LIST

    Recibe props: lista de usuarios a renderizar

    Muestra: tantas cards como usuarios reciba

    Estado: listado muestra todos o solo amigos o enemigos

    Acción: al clickar en todos, amigos o enemigos, renderiza en función del estado

## USER CARD

    Recibe: por props el user a imprimir y si es amigo o enemigo del usuario

    Muestra: un user con su foto y nombre y un botón para cambiar el tipo de relación y un botón para ir a galeria.

    Estado: nada

    Acción: nada

## EDIT PROFILE

    Recibe del store: info usuario login

    Muestra: formulario con input:
    Añadir foto
    editar userName
    un botón con su texto: edit perfil

    Estado: Inputs de cada usuario

    Acción: acción submit

## BUTTON

    Recibe: por props el texto y la acción a realizar

    Muestra: un botón con su texto

    Estado: nada

    Acción: acción recibida
