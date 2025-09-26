// Inizializza EmailJS con il tuo User ID
emailjs.init("5ztQd60GF5T2vY5Bc");

// Aggiungi l'evento submit al form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce l'invio predefinito del modulo

    // Crea un oggetto FormData per raccogliere i dati dal modulo
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value; // Associa nome, email, messaggio ai rispettivi campi
    });

    // Aggiungi il campo 'time' con la data/ora corrente
    const currentTime = new Date().toLocaleString(); // Ottieni la data/ora corrente
    formObject["time"] = currentTime; // Aggiungi il campo 'time'

    // Invia i dati tramite EmailJS (sostituisci con i tuoi Service ID e Template ID)
    emailjs.send("service_38giqlh", "template_swn48zm", formObject)
        .then(function(response) {
            // Mostra un messaggio di successo
            alert("Email inviata correttamente, ti risponderò appena possibile!");
        }, function(error) {
            // Mostra un messaggio di errore
            console.log("EmailJS Error: ", error);
            alert("C'è stato un problema nell'invio del messaggio. Ti prego di contattarmi direttamente a daniel.beltrami0@gmail.com. Grazie per la pazienza.");
        });
});
