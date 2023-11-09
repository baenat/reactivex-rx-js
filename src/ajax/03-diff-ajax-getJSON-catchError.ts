import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbin<.org./delay/1';

const manejaError = (resp: AjaxError) => {
    return of({
        ok: false,
        usuarios: []
    })
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: (data) => console.log('next => ', data),
    error: (error) => console.log('error => ', error),
    complete: () => console.log('complete')
});
// obs2$.subscribe(data => console.log('ajax: ', data));