import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('next:', valor),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(suscriber => {

    let count = 0;
    const interval = setInterval(()=> {
        suscriber.next(++count);
        console.log(count);
    }, 1000);


    setTimeout(() => {
        suscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('interval destruido');
    }

});


const subs = intervalo$.subscribe(num => console.log('Next: ', num));


setTimeout(() => {
   subs.unsubscribe();
   console.log('timeout completado');
}, 6000);