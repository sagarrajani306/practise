let inputValue = document.getElementById('input-box')
// console.log(inputValue)

let button = document.querySelectorAll('button')
// console.log(button)

let result = "";

let buttonArr = Array.from(button)
// console.log(buttonArr)

buttonArr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            result = eval(result)
            inputValue.value = result
        }
        else if (e.target.innerHTML == "AC") {
            result = ""
            inputValue.value = result

        }
        else if (e.target.innerHTML == "Del") {
            result = result.substring(0, result.length-1)
            inputValue.value = result

        }
        else {
            result += e.target.innerHTML
            inputValue.value = result
        }
    })
})