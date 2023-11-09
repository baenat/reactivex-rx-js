import { fromEvent } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

/**
 * takeWhile:
 * Emite los valores siempre y cuando se cumpla la condicion.
 * Ultimo parametro (opcional), signica que incluye el ultimo valor que rompe la condicion.
 */

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile((event) => event.x > event.y)
    // Ultimo parametro takeWhile, signica que incluye el ultimo valor que rompe la condicion
    takeWhile((event) => event.x > event.y, true)
).subscribe({
    next: (value) => console.log('next: ', value),
    complete: () => console.log('complete')
});

/**
 * takeUntil:
 * Emite los valores hasta que el segundo observable emita su primer valor.
 */