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

        let idText = document.createTextNode(sqDiv.id)

        sqDiv.addEventListener("mouseover", () => {


            sqDiv.appendChild(idText)

            sqDiv.style.color = "white"
            sqDiv.style.textAlign = "center"


        })

        sqDiv.addEventListener("mouseout", () => {

            sqDiv.removeChild(idText)

        })

        sqDiv.addEventListener("click", () => {

            sqDiv.style.backgroundColor = "#" + Math.floor(Math.random() * 255 ** 3).toString(16)

        })

        sqDiv.addEventListener("dblclick", () => {

           
            if (sqDiv.id % 2 == 0) {

                if (sqDiv.nextSibling !== null) {

                    sqDiv.nextSibling.remove()
                    

                } else { window.alert("no square so saddd") } 
            }

             else if (sqDiv.id % 2 == 1) {

                    if (sqDiv.previousSibling !== null) {

                        sqDiv.previousSibling.remove()
                        

                    } else { window.alert("no square so saddd") }
                }
            

        })

    })



})