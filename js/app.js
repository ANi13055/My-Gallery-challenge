const images = document.querySelectorAll(".gallery .image img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal .full-img");

images.forEach((img) => {
	img.addEventListener("click", (e) => {
		modal.classList.add("open");
		modalImg.classList.add("open");
		modalImg.src = img.src;
		modalImg.alt = img.alt;
		console.log(modalImg.alt);
	});
});

modal.addEventListener("click", (e) => {
	if (e.target.classList.contains("modal")) {
		modal.classList.remove("open");
		modalImg.classList.remove("open");
	}
});
