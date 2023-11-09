import { fromEvent, interval } from 'rxjs';
import { map, auditTime, tap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

/**
 * auditTime:
 * Emite el ultimo valor que ha sido emitido por el observable en un periodo de tiempo determinado
 */

click$.pipe(
    map(({ x }) => x),
    tap(value => console.log('tap', value)),
    auditTime(5000),
).subscribe(console.log)