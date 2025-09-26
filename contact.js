// Inizializza EmailJS con il tuo User ID
emailjs.init("5ztQd60GF5T2vY5Bc");

// Gestore dell'evento di invio del modulo
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce l'invio predefinito del modulo

    // Crea un oggetto FormData per raccogliere i dati dal modulo
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value; // Associa nome, email, messaggio ai rispettivi campi
    });

    // Invia i dati tramite EmailJS (sostituisci con i tuoi Service ID e Template ID)
    emailjs.send("service_38giqlh", "template_yf43bfb", formObject)
    .then(function(response) {
        // Mostra un messaggio di successo
        alert("Email sent successfully, you will hear from me as soon as possible");
    }, function(error) {
        // Mostra un messaggio di errore
        console.log("EmailJS Error: ", error);  // Aggiungi questo per ottenere dettagli sull'errore
        alert("We regret to inform you that there was an issue while sending your message. Kindly reach out directly to daniel.beltrami0@gmail.com for further assistance. Thank you for your understanding and patience.");
    });



