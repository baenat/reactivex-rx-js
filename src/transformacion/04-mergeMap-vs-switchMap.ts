import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);


click$.pipe(
    // mergeMap(()=> interval$), // Pueden manter (n) suscripciones activas simultaneamente corriendo
    switchMap(() => interval$), // Solo mantiene una suscripcion interna activa
).subscribe(console.log)