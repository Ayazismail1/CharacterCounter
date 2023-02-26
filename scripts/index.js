const textareaEl = document.getElementById("textarea");


remaining = 750
textareaEl.addEventListener("keyup", () => {
    updatecounter()
    
})

function updatecounter() {
    let length = textareaEl.value.length

    document.getElementById("total-counter").innerHTML = length
    document.getElementById("total-remaining").innerHTML = remaining - length
}