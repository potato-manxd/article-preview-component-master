if (window.innerWidth < 400) {
    document.querySelector(".sh").onclick = () => {
        document.querySelector(".s2").style.display = "flex"
        document.querySelector(".s1").style.display = "none"
    }
} else {
    document.querySelector(".sh").onclick = () => {
        document.querySelector(".s2").style.display = "flex"
        document.querySelector(".s1").style.display = "block"
        let span1 = document.createElement("span")
        let a = document.createTextNode(">")
        span1.appendChild(a)
        document.querySelector(".s2").appendChild(span1)
        span1.setAttribute("class", "ss")
        document.querySelector(".mains").style.height = "280px"
    }
}
console.log(window.innerWidth)