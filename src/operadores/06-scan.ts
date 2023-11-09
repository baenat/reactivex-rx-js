import { range, fromEvent, interval, from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;


// Reduce

from(numbers).pipe(
    reduce(totalAcumulador, 0)
).subscribe(console.log);


// Scan

from(numbers).pipe(
    scan(totalAcumulador, 0)
).subscribe(console.log);


// Redux

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'jul', autenticado: false, token: null },
    { id: 'jul', autenticado: true, token: 'ABC' },
    { id: 'jul', autenticado: true, token: 'ABC1' },
];

const state$ = from(user).pipe(
    // scan<Usuario>((acc, cur) => ({ ...acc, ...cur }), { edad: 33 })
    scan<Usuario, Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map(state => state.id)
);


id$.subscribe(console.log)

