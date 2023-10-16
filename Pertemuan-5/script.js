function Bilangan(){
let input = prompt("Masukkan suatu bilangan")

if (isNaN(input)) {
    alert(input + " tidak termasuk bilangan. coba lagi!")
}
else {
    if(input % 2 === 0) {
        alert(input + " merupakan bilangan genap")
    }
    else {
        alert(input + " merupakan bilangan ganjil")
    }
}
}

const tombol = document.getElementById("tombol")
tombol.addEventListener("click", Bilangan)
