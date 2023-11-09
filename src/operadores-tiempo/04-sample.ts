import { fromEvent, interval } from 'rxjs';
import { map, sample } from 'rxjs/operators';

const interval$ = interval(5000);

const click$ = fromEvent<PointerEvent>(document, 'click');

/**
 * sample:
 * Emite el ulitmo valor emitido por el observable hasta que el otro observable que tenemos dentro del operador sample,
 * emita un valor.
 */

interval$.pipe(
    sample(click$)
)
.subscribe(console.log)

