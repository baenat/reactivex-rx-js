import { range } from 'rxjs';

/**
 * range:
 * Nos permite crear un observable que emite una secuencia de numeros en base a un rango.
 */

const obs$ = range(-5, 10);

console.log('Inicio subscriber');
obs$.subscribe(console.log);
console.log('Fin subscriber');