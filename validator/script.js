let numberValue = document.querySelector('#inputValue')

numberValue.addEventListener('change', () => {
    let value = Number(numberValue.value);
    let h1Number = document.querySelector('#inputResult');

    h1Number.style.color = 'whitesmoke'

    if (value > 10 || value < 0) {
        h1Number.textContent = 'Please enter a value between 0-10!'
        h1Number.style.color = 'red'
    }

    else if (value < 4) {
        h1Number.textContent = `Value: ${value} (Bad)`
        h1Number.style.color = 'red'
    }

    else if (value <=7) {
        h1Number.textContent = `Value: ${value} (Average)`
        h1Number.style.color = 'orange'
    }

    else if (value <=10) {
        h1Number.textContent = `Value: ${value} (Good)`
        h1Number.style.color = 'green'
    }
})