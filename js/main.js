(function ($) {
    "use strict";

    /*==================================================================
    [ Contato de foco2 ]*/
    $('.input').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })
    /*==================================================================
    [ Validar após a tipagem ]*/
    $('.validate-input .input').each(function () {
        $(this).on('blur', function () {
            if (validar(this) == false) {
                mostrarValidacao(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })
    })

    /*==================================================================
    [ Validar ]*/
    var input = $('.validate-input .input');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validar(input[i]) == false) {
                mostrarValidacao(input[i]);
                check = false;
            }
        }
        return check;
    });


    $('.validate-form .input').each(function () {
        $(this).focus(function () {
            esconderValidacao(this);
            $(this).parent().removeClass('true-validate');
        });
    });

    function validar(input) {

        if ($(input).attr('type') == 'cpf' || $(input).attr('name') == 'cpf') {
            if ($(input).val().trim().match(/^([0-9]{1,11})(\]?)$/) == null) {
                return false;
            }
            if ($(input).val().length != 11)
                return false;
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }

    }

    function mostrarValidacao(input) {
        let esseAlert = $(input).parent();

        $(esseAlert).addClass('alert-validate');
    }

    function esconderValidacao(input) {
        let esseAlert = $(input).parent();

        $(esseAlert).removeClass('alerta-validacao');
    }

})(jQuery);
