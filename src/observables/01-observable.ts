import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('Siguiente [next]:', valor),
    error: error => console.warn('Error [observer]:', error),
    complete: () => console.log('Completado [observer]')
}

// const obs$ = Observable.create();

const obs$ = new Observable<string>(subscriber => {

    // Emitira el valor a las personas que esten suscritas a él
    subscriber.next('Hola');
    subscriber.next('Mundo');

    subscriber.next('Desde');
    subscriber.next('Observable');

    // Forzar error
    // let a = undefined;
    // a.nombre = 'Nombre';

    // Observable completo, ya no emitira nada
    subscriber.complete();

    // Ya no se emitiran nada mas
    subscriber.next('Hola');
    subscriber.next('Mundo');
});

// Por lo menos tener una suscripcion

// obs$.subscribe( console.log )

// obs$.subscribe(valor => console.log('Next:', valor));

// obs$.subscribe({
//     next: valor => console.log('Next:', valor),
//     error: error => console.warn('Error:', error),
//     complete: () => console.log('Completado')
// });

obs$.subscribe(observer);