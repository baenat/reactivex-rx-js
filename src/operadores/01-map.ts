import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1, 5).pipe(
//     map<number, number>((value) => value * 10)
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

// keyup$.subscribe(value => console.log('map ', value.code));
keyupCode$.subscribe(code => console.log('map ', code));