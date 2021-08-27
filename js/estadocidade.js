(function () {
    let selectEstados = $('#estados'),
        selectCidades = $('#cidades');
    let url = 'https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json';
    $.getJSON(url, function (data) {
        let options = "<option value=''></option>";
        $.each(data.estados, function (key, val) {
            options += "<option value='" + val.sigla + "'> " + val.nome + "</option>";
        });
        selectEstados.html(options);
        selectEstados.on('change', function () {
            let estado = data.estados.find(function (estado) {
                return selectEstados.val() === estado.sigla;
            })
            let options = "<option value=''> </option>";
            $.each(estado.cidades, function (key, val) {
                options += "<option value='" + val + "'> " + val + "</option>";
            });
            selectCidades.html(options);
        });
    });
})();