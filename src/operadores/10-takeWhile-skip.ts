import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    skip(1)
);

counter$.pipe(
    // takeUntil: Cuando se emite el evento click se termina el observable counter
    takeUntil(clickBtn$)
).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('complete')
});