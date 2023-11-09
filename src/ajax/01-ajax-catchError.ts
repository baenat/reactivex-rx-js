import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const manejaError = (response: Response) => {
    if (!response.ok) throw Error(response.statusText)
    return response;
}

const atrapaError = (error: AjaxError) => {
    console.warn('Error en usuarios: ', error.message);
    return of([]);
}

/** Peticiones fecth API  */

const fetchPromise = fetch(url);

// fetchPromise
//     .then(response => response.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('Error en usuarios: ', err));

/**
 * Controlando el error con la funcion manejadorErrores
 * Para disparar el catch, se debe de dispara un throw en las promesas
 */

// fetchPromise
//     .then(manejaError)
//     .then(response => response.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('Error en usuarios: ', err));


/** Peticiones Ajax RxJS  */

const ajaxApi = ajax(url).pipe(
    map(response => response.response),
    catchError(atrapaError)
)

ajaxApi.subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log(error),
    complete: () => console.log('complete')
})