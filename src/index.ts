import * as _ from 'lodash';
import {testFunc} from './testFunc'; 

function component() {

  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Nuevo', 'webpack'], ' ');

  return element;
}

console.log(testFunc(4));

document.body.appendChild(component());