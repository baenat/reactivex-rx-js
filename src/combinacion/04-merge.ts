import { fromEvent, map, merge, Observer } from 'rxjs';

/**
 * merge:
 * Funcion que recibe uno o mas observables y el resultado sera el producto de ambos observables combinados
 * simultaneamente, para completarse los observables se deben de completar.
 */

const observer: Observer<any> = ({
    next: (value) => console.log('next => ', value),
    error: (error) => console.log('error => ', error),
    complete: () => console.log('complete')
});

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<PointerEvent>(document, 'click');

merge(
    keyup$.pipe(
        map(event => event.type)
    ),
    click$.pipe(
        map(event => event.type)
    )
).subscribe(observer);