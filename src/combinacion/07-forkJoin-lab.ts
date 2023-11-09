import { Observer, catchError, forkJoin, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const observer: Observer<any> = ({
    next: (value) => console.log('next => ', value),
    error: (error) => console.log('error => ', error),
    complete: () => console.log('complete')
});

/**
 * forkJoin:
 * Funcion que recibe observables finitos como argumentos y emite todos los valores de todos los observables cuando se completen.
 */
const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'baenat';

forkJoin({
    usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos1`).pipe(
        catchError(error=> of([]))
    ),
    name: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`).pipe(
        map(event => event['name'])
    ),
}).pipe(
    catchError(error => of(error))
).subscribe(console.log)