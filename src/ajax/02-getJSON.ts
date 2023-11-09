import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org./delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'aplication/json',
    'mi-token' : 'ABCD123'
});

obs$.subscribe({
    next: (data) => console.log('next => ', data),
    error: (error) => console.log('error => ', error),
    complete: () => console.log('complete')
 });