import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";


const interval$ = interval(500).pipe(take(4));
const click$ = fromEvent(document, 'click');

click$.pipe(
    // switchMap(()=> interval$) // Solo mantiene una suscripcion interna activa
    concatMap(()=> interval$) // Pueden manter (n) suscripciones activas, pero se ejecuta una despues de la otra, es decir hasta que se complete el anterior suscripcion
).subscribe(console.log);