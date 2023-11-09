import { Observable, fromEvent, interval, of } from 'rxjs';
import { map, catchError, debounceTime, pluck, tap, mergeAll, mergeMap, take, takeUntil } from 'rxjs/operators';
import { AjaxError, ajax } from 'rxjs/ajax';


const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((letra)=> interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)/* .subscribe({
    next: (value) => console.log('Next => ', value),
    error: (error) => console.log('Error => ', error),
    complete: () => console.log('complete')
}); */

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log)