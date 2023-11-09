import { combineLatest, forkJoin, fromEvent, interval, map, merge, Observer, of, range, take } from 'rxjs';

const observer: Observer<any> = ({
    next: (value) => console.log('next => ', value),
    error: (error) => console.log('error => ', error),
    complete: () => console.log('complete')
});

/**
 * forkJoin:
 * Funcion que recibe observables finitos como argumentos y emite todos los valores de todos los observables cuando se completen.
 */

const numeros$  = of(1,2,3,4);
const interval$ = interval(1000).pipe(take(3));
const letras$   = of('a', 'b', 'c');

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// ).subscribe(observer);

// forkJoin({
//     numeros$,
//     interval$,
//     letras$
// }).subscribe(observer);

forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$
}).subscribe(observer);