function toggleSongs() {
	let songsSecondHalf = document.getElementById("item1")
	songsSecondHalf.classList.toggle("hidden")
}


document.getElementById("toggle-button").onclick = toggleSongs;
