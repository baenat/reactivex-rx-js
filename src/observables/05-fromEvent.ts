import { fromEvent, Observer } from 'rxjs';

/**
 * fromEvent:
 * Nos permite crear observables en base a un event target es decir de documento.
 */

// Eventos del DOM
const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer: Observer<any> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.log('error: ', error),
    complete: () => console.log('Terminado')
}

// Destructuracion

src1$.subscribe(({ x, y }) => {
    console.log(x, y)
});

src2$.subscribe((value) => {
    console.log(value.key)
});