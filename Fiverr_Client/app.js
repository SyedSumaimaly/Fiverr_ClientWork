function calculateVolume() {
    const shortSide = document.getElementById("Short_side").value;
    const longSide = document.getElementById("Long_side").value;
    const height = document.getElementById("Height").value;
    const addSides = +longSide + +shortSide;
    const divide = +addSides / 2;
    const total = +divide * height;
    document.getElementById("format_output1").style.display = "block"
    document.getElementById("format_output1").innerHTML = `
    Short side was ${shortSide}, and Long side was ${longSide}, and Height was ${height}.</br>
    The Volume is: ${total}.
    `
}



function summarize() {
    let Name = document.getElementById("name").value;
    let favoriteColor = document.getElementById("FColor").value;
    document.getElementById("format_output2").style.display = "block"
    document.getElementById("format_output2").innerHTML = `
Your name is ${Name} and your favorite color is ${favoriteColor}.
`
};


