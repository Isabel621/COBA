window.addEventListener("scroll", function(){
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

// let imgboc = document.querySelectorAll('.imgboc');
// imgboc.forEach(popup => popup.addEventListener('click', () => {
// 	popup.classList.toggle('active')
// }))