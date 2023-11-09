import { of } from "rxjs";

/**
 * of:
 * Nos permite crear un observable en base a un listado de elementos.
 */


// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(...[1, 2, 3, 4, 5, 6], 7, 8);
// const obs$ = of([1,2], {a:1, b:1}, ()=> {}, Promise.resolve(true), true);

// observables sincrono
console.log('Inicio obs$');
obs$.subscribe({
    next: (value) => console.log('next', value),
    complete: () => console.log('Terminamos la secuencia')
});
console.log('Fin obs$');