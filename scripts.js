window.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement("button")
    let btnText = document.createTextNode("Add Square")

    button.appendChild(btnText)
    this.document.body.appendChild(button)

    let container = document.createElement('container')
    document.body.appendChild(container)

    container.className = "con"

    let base = 0
    
    button.addEventListener("click", function () {

        let sqDiv = document.createElement("div")
        document.body.appendChild(sqDiv)
        container.appendChild(sqDiv)

        sqDiv.className = "bs"

        
        base++

        sqDiv.id = base



        // sqDiv.addEventListener("hover", function(){}





    })

})