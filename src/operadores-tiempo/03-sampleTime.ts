import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

/**
 * sampleTime:
 * Cuando se realiza la suscripción va a empezar a contar dependiendo el x tiempo en el parametro especificado,
 * En el momento que se realice una suscripcion, cada x tiempo, va a estar emitiendo cual fue el ultimo valor emitido,
 * Pero si no se emitio nigun valor en ese tiempo no emite nada.
 */

click$.pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y })),
).subscribe(console.log);