import { concat, from, interval, take } from "rxjs";



const interval$ = interval(1000);

/**
 * concat:
 * Funcion que recibe obervables, iterables o un arreglo como argumento 
 * concatena observable y continua con el siguiente, siempre que se haya completado.
 */

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    from([10,20,30,40])
).subscribe(console.log)