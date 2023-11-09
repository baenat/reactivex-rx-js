import { interval, timer } from 'rxjs';

/**
 * interval:
 * Al suscribir nos al observable que genera el interval, tendriamos una secuencia de valores que 
 * inician desde el 0 hasta el fin de los tiempos, las emisiones se realizan segun el tiempo determinado (1000) 1 seg.
 */

/**
 * timer:
 * Crea un observable que empieza a emitir valores despues de una fecha especifica y luego de ese valor
 * empieza a emitir los valores siguientes en periodo de tiempo indicado.
 */


const observer = {
    next: value => console.log('next: ', value),
    complete: () => console.log('completado')
}

const interval$ = interval(1000);

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const timer$ = timer(hoyEn5);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');