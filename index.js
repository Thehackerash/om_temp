const move = document.getElementById("move");
console.log(move);

document.body.onpointermove = (event) => {
	const { clientX, clientY } = event;

	move.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 1000, fill: "forwards" }
	);
};

const text = document.querySelector(".text");
if (text !== null)
	text.innerHTML = text.innerText
		.split("")
		.map(
			(char, i) =>
				`<span style="transform:rotate(${i * 9.7}deg)">${char}</span>`
		)
		.join("");
