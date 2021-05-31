$( '.back-button' ).click(function() {
    $( '.list-container').removeClass('hide');
    $( '.list-container').addClass('flex');
    $( '.agent-form').removeClass('flex');
    $( '.agent-form').addClass('hide');
    $( '.builder-form').removeClass('flex');
    $( '.builder-form').addClass('hide');
    $( '.dealer-form').removeClass('flex');
    $( '.dealer-form').addClass('hide');
    $( '.architect-form').removeClass('flex');
    $( '.architect-form').addClass('hide');
   });

   $( '#agent' ).click(function() {
    $( '.list-container').removeClass('flex');
    $( '.list-container').addClass('hide');
    $( '.agent-form').removeClass('hide');
    $( '.agent-form').addClass('flex');
   });

   $( '#builder' ).click(function() {
    $( '.list-container').removeClass('flex');
    $( '.list-container').addClass('hide');
    $( '.builder-form').removeClass('hide');
    $( '.builder-form').addClass('flex');
   });
   $( '#dealer' ).click(function() {
    $( '.list-container').removeClass('flex');
    $( '.list-container').addClass('hide');
    $( '.dealer-form').removeClass('hide');
    $( '.dealer-form').addClass('flex');
   });
   $( '#architect' ).click(function() {
    $( '.list-container').removeClass('flex');
    $( '.list-container').addClass('hide');
    $( '.architect-form').removeClass('hide');
    $( '.architect-form').addClass('flex');
   });


   $().ready(function() {
    // Selezione form e definizione dei metodi di validazione
    $("#agent-form").validate({
        // Definiamo le nostre regole di validazione
        rules : {
            // login - nome del campo di input da validare
            agent_name : {
              required : true
            },
            agent_surname : {
                required : true,
            },
            agent_list : {
                required : true,
            },
            agent_phone : {
                required : true,
                minlength : 10,
                maxlength : 12,
                digits: true

            },
            agent_email :{
                required : true,
                email : true
            }
        },
        // Personalizzimao i mesasggi di errore
        messages: {
            agent_name: "Inserisci un nome",
            agent_surname: "Inserisci un cognome",
            agent_phone: "Inserisci un telefono valido",
            agent_list:' Inserisci la lista di aziende per cui lavori',
            agent_email: "Inserisci la tua email"
        },
        // Settiamo il submit handler per la form
        submitHandler: function(form) {
            form.submit();
        }
    });
    $("#builder-form").validate({
        // Definiamo le nostre regole di validazione
        rules : {
            // login - nome del campo di input da validare
            builder_name : {
              required : true
            },
            builder_surname : {
                required : true,
            },
            builder_company : {
                required : true,
            },
            builder_role : {
                required : true,
            },
            builder_phone : {
                required : true,
                minlength : 10,
                maxlength : 12,
                digits: true

            },
            builder_email :{
                required : true,
                email : true
            }
        },
        // Personalizzimao i mesasggi di errore
        messages: {
            builder_name: "Inserisci un nome",
            builder_surname: "Inserisci un cognome",
            builder_phone: "Inserisci un telefono valido",
            builder_company:' Inserisci il nome della tua azienda',
            builder_role:' Inserisci il tuo ruolo in azienda',
            builder_email: "Inserisci la tua email"
        },
        // Settiamo il submit handler per la form
        submitHandler: function(form) {
            form.submit();
        }
    });
    $("#dealer-form").validate({
        // Definiamo le nostre regole di validazione
        rules : {
            // login - nome del campo di input da validare
            dealer_name : {
              required : true
            },
            dealer_surname : {
                required : true,
            },
            dealer_company : {
                required : true,
            },
            dealer_role : {
                required : true,
            },
            dealer_phone : {
                required : true,
                minlength : 10,
                maxlength : 12,
                digits: true

            },
            dealer_email :{
                required : true,
                email : true
            }
        },
        // Personalizzimao i mesasggi di errore
        messages: {
            dealer_name: "Inserisci un nome",
            dealer_surname: "Inserisci un cognome",
            dealer_phone: "Inserisci un telefono valido",
            dealer_company:' Inserisci il nome della tua azienda',
            dealer_role:' Inserisci il tuo ruolo in azienda',
            dealer_email: "Inserisci la tua email"
        },
        // Settiamo il submit handler per la form
        submitHandler: function(form) {
            form.submit();
        }
    });
    $("#architect-form").validate({
        // Definiamo le nostre regole di validazione
        rules : {
            // login - nome del campo di input da validare
            architect_name : {
              required : true
            },
            architect_surname : {
                required : true,
            },
            architect_company : {
                required : true,
            },
            architect_role : {
                required : true,
            },
            architect_phone : {
                required : true,
                minlength : 10,
                maxlength : 12,
                digits: true

            },
            architect_email :{
                required : true,
                email : true
            }
        },
        // Personalizzimao i mesasggi di errore
        messages: {
            architect_name: "Inserisci un nome",
            architect_surname: "Inserisci un cognome",
            architect_phone: "Inserisci un telefono valido",
            architect_company:' Inserisci il nome della tua azienda',
            architect_role:' Inserisci il tuo ruolo in azienda',
            architect_email: "Inserisci la tua email"
        },
        // Settiamo il submit handler per la form
        submitHandler: function(form) {
            form.submit();
        }
    });
});