const _createRadioButton=(parent, classname)=>{
    const temp = document.createElement('input');
    temp.setAttribute('type', 'radio');
    temp.name='action'
    temp.classList.add(classname);
    parent.appendChild(temp);
}

export{_createRadioButton}