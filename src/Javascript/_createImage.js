const _insertImage = (parent, classname, source) => {
	const temp = document.createElement('img');
	temp.src = source;
	temp.classList.add(classname);
	parent.appendChild(temp);
};

export { _insertImage };
