function makeGrid(size) {
	let container = document.getElementById("div-parent")

	for (let i = 0; i < size; i++) {
		let column = document.createElement("div")
		column.classList.add("column")

		for (let j = 1; j <= size; j++) {
			let row = document.createElement("div")
			row.classList.add("row")
			row.style.border = "2px solid black"
			column.appendChild(row)
		}

		container.appendChild(column)
	}
}

makeGrid(16)