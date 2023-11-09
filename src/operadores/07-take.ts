import { of } from 'rxjs';
import { take } from 'rxjs/operators';


const numeros$ = of(1, 2, 3, 4, 5).pipe(
    take(2)
);

numeros$.subscribe({
    next: (value) => console.log('next: ', value),
    complete: () => console.log('complete')
})