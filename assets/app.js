document.addEventListener("DOMContentLoaded", function() {

	const gallery = document.getElementById("gallery")
	if (gallery) {
		
		const items = gallery.getElementsByClassName("gallery-item")
		let index = 0

		setInterval(function() {
			index += 1
			items[index-1].classList.remove("active")
			if (index == items.length) index = 0
			items[index].classList.add("active")
		}, 6000)

	}

	const burger = document.getElementById("burger")
	burger.addEventListener("click", function() {
		document.body.classList.toggle("nav-open")
	})

})