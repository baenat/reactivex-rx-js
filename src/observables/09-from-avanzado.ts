import { of, from } from 'rxjs';

/**
 * of       = toma argumentos y genera una secuencia
 * from     = array, promise, iterable, obsevable
 */

const observer = {
    next: (value) => console.log('next: ', value),
    complete: () => console.log('complete')
}

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();


from(miIterable).subscribe(observer)


// const source$ = from([1,2,3,4,5]);
// const source$ = of([1,2,3,4,5]);
// const source$ = from('Julian');
const source$ = from(fetch('https://api.github.com/users/baenat'));

// source$.subscribe( async (resp)=> {
//     console.log(resp);

//     const data = await resp.json();
//     console.log(data)
// });