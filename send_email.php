<?php
// Verifica che il modulo sia stato inviato (con il metodo POST)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ottieni i dati dal modulo
    $name = htmlspecialchars($_POST['name']);     // Nome
    $email = htmlspecialchars($_POST['email']);   // Email
    $message = htmlspecialchars($_POST['message']); // Messaggio

    // Imposta l'indirizzo email dove vuoi ricevere il messaggio
    $to = "Daniel.beltrami0@gmail.com"; // Sostituisci con il tuo indirizzo email

    // Imposta l'oggetto dell'email (oggetto = titolo dell'email)
    $subject = "Nuovo messaggio da $name";

    // Imposta l'intestazione dell'email (chi è il mittente e come rispondere)
    $headers = "From: $email\r\n";  // Chi sta inviando il messaggio
    $headers .= "Reply-To: $email\r\n";  // Dove ti rispondono

    // Crea il corpo dell'email, cioè il contenuto
    $body = "Hai ricevuto un nuovo messaggio dal tuo sito:\n\n";
    $body .= "Nome: $name\n";
    $body .= "Email: $email\n";
    $body .= "Messaggio: \n$message\n";

    // Invia l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Messaggio inviato con successo!";
    } else {
        echo "Errore nell'invio del messaggio.";
    }
}
?>
