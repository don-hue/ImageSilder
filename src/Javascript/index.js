import '../SASS/styles.scss';
import './_maindiv';
import './_radiobutton';
import './_createImage';
import './_arrow';
import { _createRadioButton } from './_radiobutton';
import { _ElementCreator, _addClass } from './_maindiv';
import { _insertImage } from './_createImage';
import { _leftArrow, _rightArrow } from './_arrow';

//TODO: Main-functio for buildng boxes--> takes input of how many boxes you want to create
_ElementCreator('div', 'Maindiv', document.body);
_ElementCreator('div', 'img1', document.querySelector('.Maindiv'));
_addClass(document.querySelector('.img1'), 'box');

_ElementCreator('div', 'img2', document.querySelector('.Maindiv'));
_addClass(document.querySelector('.img2'), 'box');

_ElementCreator('div', 'img3', document.querySelector('.Maindiv'));
_addClass(document.querySelector('.img3'), 'box');

_ElementCreator('div', 'img4', document.querySelector('.Maindiv'));
_addClass(document.querySelector('.img4'), 'box');

_ElementCreator('div', 'img5', document.querySelector('.Maindiv'));
_addClass(document.querySelector('.img5'), 'box');

//TODO: Function to create several checkboxes
_ElementCreator('form', 'Radio', document.body);
_insertImage(document.querySelector('.Radio'),'left','/src/SASS/Images/left.png')
_addClass(document.querySelector('.left'),'Arrow');
_createRadioButton(document.querySelector('.Radio'), 'Rad1');
_addClass(document.querySelector('.Rad1'),'Rad');
document.querySelector('.Rad1').checked=true;
_createRadioButton(document.querySelector('.Radio'), 'Rad2');
_addClass(document.querySelector('.Rad2'),'Rad');
_createRadioButton(document.querySelector('.Radio'), 'Rad3');
_addClass(document.querySelector('.Rad3'),'Rad');
_createRadioButton(document.querySelector('.Radio'), 'Rad4');
_addClass(document.querySelector('.Rad4'),'Rad');
_insertImage(document.querySelector('.Radio'),'right','/src/SASS/Images/right.png');
_addClass(document.querySelector('.right'),'Arrow');

_rightArrow();
_leftArrow()

