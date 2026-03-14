let timeoutCopiedConfirmation
const payload = "00020126580014BR.GOV.BCB.PIX0136c12ec579-60a6-4af8-b42b-79c1b30170de52040000530398654045.005802BR5923Pietro Diosti Ferrarezi6009SAO PAULO62140510LBhx5LkZ5g6304E7B7"

async function copyPayload() {
    try {
        clearTimeout(timeoutCopiedConfirmation)

        if (navigator.clipboard) {
            await navigator.clipboard.writeText(payload)
        } else {
            const textarea = document.createElement("textarea")
            textarea.value = payload
            document.body.appendChild(textarea)
            textarea.select()
            document.execCommand("copy")
            document.body.removeChild(textarea)
        }

        displayControll(".confirmed-copied-div", "block")

        timeoutCopiedConfirmation = setTimeout(() => {
            displayControll(".confirmed-copied-div", "none")
        }, 2000)

    } catch (error) {
        console.log(`Erro (copyPayload): ${error.message}`)
    }
}

function displayControll(element, display) {
    document.querySelector(element).style.display = display
}

function goto_donate() {
    try {
        window.location.pathname = "/donate"
    } catch (error) {
        console.log(`Erro?! (Function: goto_donate()): ${error.message}`)
    }
}

document.querySelector(".copy-button").addEventListener("click", copyPayload)