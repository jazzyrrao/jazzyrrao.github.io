function toggleTheme() {
    let grocerylist = document.querySelector("body")
    grocerylist.classList.toggle("dark-mode")
}

var button = document.getElementById("toggleButton")

button.onclick = toggleTheme;