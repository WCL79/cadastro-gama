(function ($) {
    " ";

    /*==================================================================
    [ Selector (.class).(açao) faz a interação, sendo a função .on vincula o conjuntos de elementos
    selecionados. ]*/
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
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })
    })

    /*==================================================================
    [ Validar ]*/
    let input = $('.validate-input .input');

    $('.validate-form').on('submit', function () {
        let check = true;

        for (var i = 0; i < input.length; i++) {
            if (validar(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });

    //[Dispara o evento de foco para as classes selecionadas]
    $('.validate-form .input').each(function () {
        $(this).focus(function () {
            hideValidate(this);
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

    function showValidate(input) {
        let esseAlert = $(input).parent();
        $(esseAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        let esseAlert = $(input).parent();
        $(esseAlert).removeClass('alert-validate');
    }
})(jQuery);
