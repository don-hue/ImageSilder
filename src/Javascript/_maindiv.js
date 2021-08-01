const _ElementCreator = (element, classname, parent) => {
	const temp = document.createElement(element);
	temp.classList.add(classname);
	parent.appendChild(temp);
};

const _addClass=(element, classname)=>{
	element.classList.add(classname);
}

export { _ElementCreator, _addClass };
