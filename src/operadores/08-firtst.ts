import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        tap<PointerEvent>(console.log),
        // map(event => ({
        //     clientY: event.clientY,
        //     clientX: event.clientX
        // })),
        map(({ clientX, clientY }) => ({ clientX, clientY })),
        tap(console.log),
        first((event) => event.clientY >= 150)
    )
    .subscribe({
        next: (value) => console.log('next: ', value),
        complete: () => console.log('complete')
    })