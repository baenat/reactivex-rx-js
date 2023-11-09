import { catchError, exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

// creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// helper
const peticionHttpLogin = (user) => {
    return ajax.post('https://reqres.in/api/login?delay=1', user).pipe(
        map(resp => resp.response['token']),
        catchError((error: AjaxError) => of('Error en la peticion: ', error.message))
    )
}

// configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit').pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    
    /* Puede tener n candidad de suscripciones internas activas simultaneamente */
    // mergeMap(peticionHttpLogin),

    /* Cancela cualquier suscripcion que este pendiente, y solo devuelve la ultima */
    // switchMap(peticionHttpLogin),

    /* Solo toma la primer suscripcion e ignora todas las siguientes despues de la primera, hasta que la suscripcion se complete */
    exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe(token => {
    console.log(token)
});

