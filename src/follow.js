Array.from(document.getElementsByClassName('following-text')).forEach(function (e) {
	if (window.getComputedStyle(e)['display'] !== 'none') {
		e.click();
	}
});

window.scrollBy(0, 10000);