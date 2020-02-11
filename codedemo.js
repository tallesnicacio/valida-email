const demo = new GDemo('.democode');

const code = `
// Chama a function no clique em "Validar e-mail"
        jQuery(".btnValidaEmail").click(function(event) {
            //Remove a classe is-invalid a cada envio
            jQuery('.form-control').removeClass('is-invalid');
            event.preventDefault();
            validarEmail();
        });
        // Function que valida e exibe o callback
        function validarEmail() {
            // Pega o e-mail do input
            var email = jQuery('#email').val();
            var a = "f9420b3b-8ff4-4b9b-825a-179073fc486b"
            // Variavel com o objeto da requisição AJAX
            var settings = {
                    "async": true,
                    "crossDomain": true,
                    "dataType": "jsonp",
                    "url": "https://bpi.briteverify.com/emails.json?address=" + email + "&apikey=" + a,
                    "method": "POST",
                    "headers": {
                        "cache-control": "no-cache",
                        "postman-token": "fd412515-853b-39d9-36f9-07a1f418dab1"
                    }
                }
                // Requisição AJAX
            jQuery.ajax(settings).done(function(response) {
                var status = response.status;
                // Se invalido
                if (status == "invalid") {
                    // exibe info
                    jQuery('.form-control').addClass('is-invalid');
                    jQuery('#email').val("");

                }
                // Se valido
                if (status == "valid") {
                    // exibe info
                    jQuery('.form-control').addClass('is-valid');
                }
            });
        };
`

const highlightedCode = Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript'
);

demo
    .openApp('editor', {
        minHeight: '350px',
        windowTitle: 'Sublime Text 3'
    })
    .write(highlightedCode)
    .end();