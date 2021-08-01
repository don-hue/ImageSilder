import './_maindiv';
import './_maindiv';
import { _ElementCreator } from './_maindiv';


const _createSeveralDivs=(amount,ClassRoot)=>{
    for (let i=0, i<amount, i++){
        _ElementCreator('div', ClassRoot+'${i}', document.querySelector('.Maindiv'));
        _addClass(document.querySelector(ClassRoot+'${i}'),'box');
    }
}

export{_createSeveralDivs};