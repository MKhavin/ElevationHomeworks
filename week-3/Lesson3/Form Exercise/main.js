function validate(event) {
    event.preventDefault()

    const form = document.getElementById("sign-form")
    const errorsArray = checkFormValues()

    if (errorsArray.length > 0) {
        showErrors(errorsArray)
    } else {
        form.style.display = "none"

        const name = document.getElementById("name").value
        alert(`Welcome, ${name}`)
    }
}

function checkFormValues() {
    const name = document.getElementById("name").value
    const desiredSalary = document.getElementById("desired-salary").value
    const birthday = document.getElementById("birthday").value
    const tel = document.getElementById("tel").value

    const errorsArray = []

    if (name.length <= 2) {
        errorsArray.push("name must contain more than 2 charachters")
    }

    if (desiredSalary < 10000 || desiredSalary > 16000) {
        errorsArray.push("desired salary must be in range 10000 - 16000")
    }

    if (birthday === "") {
        errorsArray.push("birthday must be set")
    }

    if (tel.length !== 10) {
        errorsArray.push("tel must contain 10-digit numbers")
    }

    return errorsArray
}

function addErrorContainer(errors) {
    const form = document.getElementById("sign-form")

    const currentErrorContainer = document.getElementById("error-container")
    if (currentErrorContainer) {
        form.removeChild(currentErrorContainer)
    }

    const errorContainer = document.createElement("div")
    errorContainer.style.color = "red"
    errorContainer.setAttribute("id", "error-container")
    errorContainer.style.fontSize = "1rem";
    form.appendChild(errorContainer)

    return errorContainer
}

function showErrors(errors) {
    const errorContainer = addErrorContainer(errors)

    for (let error of errors) {
        const newError = document.createElement("p")
        newError.innerHTML = error

        errorContainer.appendChild(newError)
    }
}

document.getElementById("submit").onclick = validate