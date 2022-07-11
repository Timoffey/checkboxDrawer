import {colors} from './colors.js';
export default function () {
	const cursor = {
		state: false,
		paint: true,
		hook: true
	};

	const $checkbox = document.querySelector('.checkbox');
	$checkbox.style.backgroundColor = colors.secondary;

	for (let i = 1; i < 4000; i++) {
		const $clone = $checkbox.cloneNode(true);
		$clone.id = i+1;
		document.querySelector('.wrapper').append($clone);
	}

	document.querySelectorAll('.checkbox').forEach(checkbox => {
		checkbox.switch = function (state) {
			const switcher = this.querySelector('input');
			switcher.checked = state;
			this.style.backgroundColor = state ? colors.primary : colors.secondary;
		};
	});

	document.addEventListener('mousedown', () => cursor.state = cursor.hook = true);
	document.addEventListener('mouseup', () => cursor.state = cursor.hook = false);

	document.addEventListener('mouseover', event => {
		if (cursor.state && event.target.className === 'checkbox') {
			if (cursor.hook) {
				cursor.paint = !event.target.querySelector('input').checked;
			}
			cursor.hook = false;
			event.target.switch(cursor.paint);
		}
	});
}

