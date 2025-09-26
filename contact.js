fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        service_id: 'service_38giqlh', // Sostituisci con il tuo Service ID
        template_id: 'template_swn48zm', // Sostituisci con il tuo Template ID
        user_id: 'sjYoENSccuaE231cn', // Sostituisci con il tuo User ID
        template_params: formObject // i tuoi dati del form
    })
}).then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert("Email inviata correttamente, ti risponderò appena possibile!");
  })
  .catch((error) => {
      console.error('Error:', error);
      alert("C'è stato un problema nell'invio del messaggio. Ti prego di contattarmi direttamente a daniel.beltrami0@gmail.com. Grazie per la pazienza.");
  });
