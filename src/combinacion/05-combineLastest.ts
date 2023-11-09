import { combineLatest, fromEvent, map, merge, Observer, of, range } from 'rxjs';

const observer: Observer<any> = ({
    next: (value) => console.log('next => ', value),
    error: (error) => console.log('error => ', error),
    complete: () => console.log('complete')
});

/**
 * combineLatest:
 * Funcion que recibe observables como argumento combinarlos y emitir todos los valores de todos los observables
 * internos similtaneamente. Regresa un nuevo observable el cual emite valores hasta que todos los observables internos
 * hayan emitido al menos un valor.
 */

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gamil.com';
input2.placeholder = '*****';
input2.type = 'password';

document.querySelector('body').append(input1, input2);


// Helper
const getInputStream = (elem) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map(event => event.target['value'])
    )
};

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(observer)
