import { range, fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin justo erat, eget interdum nisl auctor a. Donec metus dui, scelerisque a turpis vestibulum, scelerisque consectetur nunc. In mattis nibh eget leo rutrum, dignissim elementum dui accumsan. Duis consectetur, ante vel rutrum fringilla, purus dui faucibus lacus, eu volutpat sem ex eu mi. Morbi vel malesuada velit. Curabitur in euismod eros. In hac habitasse platea dictumst. Donec ut finibus velit. Donec nec ipsum lobortis, iaculis dui sit amet, porttitor nulla. In volutpat facilisis risus, ut imperdiet eros facilisis ac. Fusce laoreet tortor nec molestie egestas.
<br><br>
Aliquam ultrices neque nec massa suscipit fringilla eu a nulla. Phasellus aliquam iaculis risus, sed auctor mauris suscipit quis. Sed sit amet iaculis magna. Duis maximus suscipit vulputate. Praesent aliquet pulvinar erat vitae pellentesque. Mauris mattis non purus non egestas. Nullam lacinia, tortor vel hendrerit ultricies, nulla enim imperdiet tortor, in lobortis magna lacus et purus. Nulla consequat, augue ac lobortis congue, enim odio sagittis turpis, rutrum consequat justo sem vel nunc. In cursus justo risus, id lobortis mi pretium sed. Aliquam accumsan nunc risus, quis elementum ligula vulputate non.
<br><br>
Suspendisse consequat eros pellentesque fringilla elementum. Suspendisse potenti. Pellentesque sed placerat magna, tincidunt varius justo. Morbi ultrices tristique nibh, ac sollicitudin nisl mollis volutpat. In commodo facilisis leo. Morbi congue purus eget nibh facilisis, sed placerat elit dignissim. Praesent in diam ac elit elementum porttitor. Morbi sem sapien, fringilla quis luctus vitae, sagittis a felis. Suspendisse potenti. Integer rutrum libero eu mattis lacinia. Curabitur ut faucibus quam. Vivamus turpis mi, congue a nisi vel, commodo elementum magna. Nullam rutrum diam at elit ornare imperdiet. Sed tincidunt sagittis ligula. Etiam non arcu eget ante mollis euismod sed a erat.
<br><br>
Nulla feugiat aliquet massa, at rhoncus erat luctus id. Integer neque ex, euismod id risus quis, aliquam rutrum velit. Maecenas porttitor bibendum pretium. Nullam dapibus eros elit, nec efficitur felis blandit non. Nunc turpis ante, porta quis facilisis in, vulputate vitae eros. Nullam nec purus eget eros molestie volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum sed mauris egestas ante consectetur dictum. Nullam lobortis placerat porttitor. Duis interdum faucibus auctor. Aliquam vel aliquam libero. Praesent semper, neque quis condimentum interdum, est mi lacinia urna, quis tempus ante turpis quis libero. Donec dignissim, diam ac hendrerit egestas, sapien massa tempor justo, in bibendum nisi est et massa. Sed magna odio, fringilla vel massa ac, ultrices vestibulum nisi. Sed quis neque dignissim massa laoreet tempus. Pellentesque vel risus aliquet, elementum odio in, auctor turpis.
<br><br>
Etiam viverra ante non tellus venenatis, nec tempor nulla condimentum. In dapibus mi enim, vel efficitur massa varius at. Nam ullamcorper dolor in neque ultrices, vel aliquet odio volutpat. Ut venenatis nisi at urna aliquam fermentum. Vestibulum sed mattis tellus, a sollicitudin ligula. Donec sodales felis in nibh vulputate, ac feugiat elit pulvinar. Proin ut cursus eros, vitae efficitur risus. Aliquam nec mauris in nisl venenatis maximus ut sit amet nisl.`;

const body = document.querySelector('body');
body.append(texto);


const progressBard = document.createElement('div');
progressBard.setAttribute('class', 'progress-bar');
body.append(progressBard);


// Funcion que realice el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop, scrollHeight, clientHeight
     } = event.target.documentElement;

     return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap(value => console.log('value: ', value))
);

progress$.subscribe(porcentaje => {
    console.log('suns: ', porcentaje)
    progressBard.style.width = `${porcentaje}%`;
})