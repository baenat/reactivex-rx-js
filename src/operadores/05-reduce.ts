import { range, fromEvent, interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual;

const total = numbers.reduce(totalReducer, 0);

// console.log('Total:', total);


interval(1000)
    .pipe(
        take(3),
        reduce(totalReducer)
    )
    .subscribe({
        next: value => console.log('next: ', value),
        complete: () => console.log('complete')
    });
