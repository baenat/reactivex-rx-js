import { exhaustMap, fromEvent, interval, take } from 'rxjs';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap(() => interval$) // Mantiene solo una suscripcion activa, si se emite otra suscripcion se ignora porque la actual aun no se completa
).subscribe(console.log)