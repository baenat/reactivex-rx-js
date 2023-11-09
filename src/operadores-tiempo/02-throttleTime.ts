import { from, fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

/**
 * throttleTime:
 * Deja pasar un valor, pero ignora las emisiones durante el tiempo determinado que tiene entre los parentesis.
 */

click$.pipe(
    throttleTime(3000)
);//.subscribe(console.log)

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    // map(({target})=> ({target}))
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)