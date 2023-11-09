import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const numeros$ = range(1, 5).pipe(
    tap(x => console.log('antes: ', x)),
    map(value => value * 10),
    tap({
        next: value => console.log('depues: ', value),
        complete: () => console.log('se termino todo!')
    })
);

numeros$.subscribe(value => console.log('subs: ', value));