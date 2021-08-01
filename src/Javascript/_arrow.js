let currentImg = 0;
const imgArray = ['.img1', '.img2', '.img3', '.img4', '.img5'];
const radArray = ['.Rad1', '.Rad2', '.Rad3', '.Rad4'];

function slideRight() {
	if (currentImg == 0) {
		const temp2 = document.querySelector(imgArray[currentImg + 1]);
		temp2.classList.add('imgAnim');

		const rad = document.querySelector(radArray[currentImg + 1]);
		rad.checked = true;

		currentImg = 1;
	} else if (currentImg == 1 || currentImg < 3) {
		const temp = document.querySelector(imgArray[currentImg]);
		temp.style.marginLeft = '-100%';
		temp.classList.remove('imgAnim');

		const temp2 = document.querySelector(imgArray[currentImg + 1]);
		temp2.classList.add('imgAnim');

		const rad = document.querySelector(radArray[currentImg + 1]);
		rad.checked = true;

		currentImg = currentImg + 1;
	} else if (currentImg == 3) {
		const temp = document.querySelector(imgArray[currentImg]);
		temp.style.marginLeft = '-100%';
		temp.classList.remove('imgAnim');

		const temp0 = document.querySelector(imgArray[currentImg + 1]);
		temp0.classList.add('imgAnim');

		const temp00 = document.querySelector('.img1');
		temp00.style.zindex = '1';

		setTimeout(() => {
			const temp1 = document.querySelector(imgArray[1]);
			temp1.style.marginLeft = '0%';

			const temp2 = document.querySelector(imgArray[2]);
			temp2.style.marginLeft = '0%';

			const temp3 = document.querySelector(imgArray[3]);
			temp3.style.marginLeft = '0%';

			const temp4 = document.querySelector(imgArray[4]);
			temp4.style.marginLeft = '0%';
			temp4.classList.remove('imgAnim');
		}, 1100);

		const rad = document.querySelector(radArray[0]);
		rad.checked = true;

		currentImg = 0;
	}
}

function slideLeft() {
    if (currentImg < 1 || currentImg < 4) {
		const temp = document.querySelector(imgArray[currentImg]);
		temp.classList.add('imgAnimB');
        temp.classList.remove('imgAnim');

        setTimeout(() => {
            temp.classList.remove('imgAnimB');
            temp.style.marginLeft='0%';
        }, 1100);

		const rad = document.querySelector(radArray[currentImg - 1]);
		rad.checked = true;

		currentImg = currentImg - 1;
	}
}

const _rightArrow = () => {
	const rightArrow = document.querySelector('.right');
	rightArrow.addEventListener('click', slideRight);
};

const _leftArrow = () => {
	const leftArrow = document.querySelector('.left');
	leftArrow.addEventListener('click', slideLeft);
};

export { _rightArrow, _leftArrow };
