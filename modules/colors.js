const $primaryColor = document.querySelector("#primaryColor");
const $secondaryColor = document.querySelector("#secondaryColor");

const colors = {
	primary: $primaryColor.value,
	secondary: $secondaryColor.value
};

function colorsInit() {
	$primaryColor.addEventListener('change', () => colors.primary = $primaryColor.value);
	$secondaryColor.addEventListener('change', () => colors.secondary = $secondaryColor.value);
	document.querySelector('.clearField').addEventListener('click', () => {
		document.querySelectorAll('.checkbox').forEach(checkbox => {
			checkbox.querySelector('input').checked = false;
			checkbox.style.backgroundColor = colors.secondary;
		});
	});
}
export {colors, colorsInit};
