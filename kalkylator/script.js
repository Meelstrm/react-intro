let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let mainDiv = document.querySelector('.main')

let plusBtn = document.getElementById('plusBtn')
let minusBtn = document.getElementById('minusBtn')
let gångerBtn = document.getElementById('gångerBtn')


function clearPreviousResult() {
    const previousResult = document.querySelector('h3');
    if (previousResult) {
        previousResult.remove();
    }
}

plusBtn.addEventListener('click', () => {
    clearPreviousResult() 
    let input1 = Number(num1.value);
    let input2 = Number(num2.value);

    let result = document.createElement('h3');
    result.textContent = `Resultatet är: ${input1 + input2}`;
    
    mainDiv.append(result)

})

minusBtn.addEventListener('click', () => {
    clearPreviousResult() 
    let input1 = Number(num1.value);
    let input2 = Number(num2.value);

    let result = document.createElement('h3');
    result.textContent = `Resultatet är: ${input1 - input2}`

    mainDiv.append(result)

})

gångerBtn.addEventListener('click', () => {
    clearPreviousResult() 
    let input1 = Number(num1.value);
    let input2 = Number(num2.value);

    let result = document.createElement('h3');
    result.textContent = `Resultatet är: ${input1 * input2}`

    mainDiv.append(result)
    
})





