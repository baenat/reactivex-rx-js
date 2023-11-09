import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org./delay/1';

// GET
// ajax.get(url, {});

// POST
// ajax.post(url, {
//     id: 1,
//     nombre: 'Julian'
// }, {
//     'mi-token': 'ABCD123'
// }).subscribe(console.log)

// PUT
// ajax.put(url, {
//     id: 1,
//     nombre: 'Julian'
// }, {
//     'mi-token': 'ABCD123'
// }).subscribe(console.log)

// DELETE
// ajax.delete(url, {
//     'mi-token': 'ABCD123'
// }).subscribe(console.log)

// Peticiones dinamicas
ajax({
    url: url,
    method: 'POST',
    headers: {
        'mi-token': 'ABCD123'
    },
    body: {
        id: 1,
        nombre: 'Julian'
    }
}).subscribe(console.log)