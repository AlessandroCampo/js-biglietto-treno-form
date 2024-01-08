const input_name = document.getElementById("name")
const input_distance = document.getElementById("distance")
const input_age = document.getElementById("age")
const generate_button = document.getElementById("generate")
const undo_button = document.getElementById("undo")
const ticket = document.getElementById("ticket-container")
const ticket_name = document.getElementById("passenger-name")
const ticket_offer_type = document.getElementById("offer-type")
const ticket_carriage = document.getElementById("carriage")
const ticket_code = document.getElementById("code")
const ticket_price = document.getElementById("ticket-price")
let price_multiplier = 0.21

let passenger_name
let distance
let age

undo_button.addEventListener("click", () => {
    input_name.value = ""
    input_distance.value = ""
    input_age.value = ""
    if (!ticket.className.includes("d-none")) {
        ticket.classList.add("d-none")
    }

})

generate_button.addEventListener("click", () => {
    if (input_name.value == "" || input_distance.value == "") {
        alert("Attenzione, compilta tutti i campi prima di generare il biglietto!")
        return
    }
    passenger_name = input_name.value
    distance = input_distance.value
    age = input_age.value
    carriage = Math.floor(Math.random() * 15) + 1
    code = randomIntFromInterval({ min: 1000, max: 99999 })
    let selected_offer
    let effective_price = distance * 0.21
    if (input_age.value == "underage") {
        selected_offer = "Biglietto Young"
        effective_price = effective_price * 0.8
    }

    else if (input_age.value == "o65") {
        selected_offer = "Biglietto Senior"
        effective_price = effective_price * 0.6
    }

    else {
        selected_offer = "Biglietto Standard"
    }
    ticket.classList.remove("d-none")
    ticket_name.innerText = passenger_name
    ticket_carriage.innerText = carriage
    ticket_offer_type.innerText = selected_offer
    ticket_price.innerText = `${effective_price.toFixed(2)} €`
    ticket_code.innerText = code

})

function randomIntFromInterval({ min, max }) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}