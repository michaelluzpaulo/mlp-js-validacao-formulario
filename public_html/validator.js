/**
 * @author Michael Luz Paulo michaelluzpaulo@gmail.com
 * @version 1.0
 * 
 * @CLASSE(entre aspas) DE VALIDAÇÃO
 * 2013
 * 
 * Ajudas
 * http://www.mhavila.com.br/topicos/web/valform.html, 
 * http://www.javascriptkit.com/javatutors/redev2.shtml
 * http://imasters.com.br/artigo/2515/javascript/regular-expression/
 */

var Validator = {
    /**
     * Email
     * @author Michael Luz Paulo 2013
     * @param string value
     * @returns bool
     * @example email valido
     */
    isEmail: function(value) {
        return (/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value) ? true : false);
    },
    /**
     * Número
     * @param string value
     * @returns bool
     * @example 1,2,3,4,5
     */
    isNumber: function(value) {
        return  (/^\d+$/.test(value) ? true : false);
    },
    /**
     * Decimal em português
     * @param string value
     * @returns bool
     * @example 120 | 122,00 | 122,00000 | 12.200,00
     */
    isDecimalPT: function(value) {
        return  (/^[+-]?((\d+|\d{1,3}(\.\d{3})+)(\,\d*)?|\,\d+)$/.test(value) ? true : false);
    },
    /**
     * Decimal em inglês
     * @param string value
     * @returns bool
     * @example 120 | 122.00 | 122.00000
     */
    isDecimalEN: function(value) {
        return  (/^[+-]?((\d+|\d{1,3}(\,\d{3})+)(\.\d*)?|\.\d+)$/.test(value) ? true : false);
    },
    /**
     * Moeda Real Brasileira
     * @param string value
     * @returns bool
     * @example 120 | 122,00 | 122.000,00
     */
    isValorPT: function(value) {
        return  (/^\d{1,3}(\.\d{3})*\,\d{2}$/.test(value) ? true : false);
    },
    /**
     * Data basica
     * @param string value
     * @returns bool
     * @example 22/02/2013
     * @description Tradicional ? data no formato DD/MM/AAAA, basicamente é a data Completa, porém sem a opcionalidade do zero à esquerda no dia ou mês menor que 10 e sem a opcionalidade e verificação de século no ano, aceitando qualquer seqüência de 4 dígitos (\d{4}) como ano
     */
    isDate: function(value) {
        return (/^((0[1-9]|[12]\d)\/(0[1-9]|1[0-2])|30\/(0[13-9]|1[0-2])|31\/(0[13578]|1[02]))\/\d{4}$/.test(value) ? true : false);
    },
    /**
     * Data Completa
     * @param string value
     * @returns bool
     * @example 22/02/2013
     * @description Completa ? valida os dias permitidos de acordo com o mês. Para este último, foram criados três grupos alternativos de pares dia/mês: 
     Os dias 1 a 29 ((0?[1-9]|[12]\d)) são aceitos em todos os meses (1 a 12): (0?[1-9]|1[0-2])
     Dia 30 é válido em todos os meses, exceto fevereiro (02): (0?[13-9]|1[0-2])
     Dia 31 é permitido em janeiro (01), março (03), maio (05), julho (07), agosto (08), outubro (10) e dezembro (12)
     */
    isDateFull: function(value) {
        return (/^((0?[1-9]|[12]\d)\/(0?[1-9]|1[0-2])|30\/(0?[13-9]|1[0-2])|31\/(0?[13578]|1[02]))\/(19|20|21)?\d{4}$/.test(value) ? true : false);
    },
    /**
     * Ano
     * @author Michael Luz Paulo
     * @param string value
     * @returns bool
     * @example 4 digits
     * @description 1983
     */
    isAno: function(value) {
        return (/^\d{4}$/.test(value) ? true : false);
    },
    /**
     * Ano
     * @author Michael Luz Paulo
     * @param string value
     * @returns bool
     * @example 4 digits comeco com 19|20|21
     * @description 1983
     */
    isAnoFull: function(value) {
        return (/^(19|20|21)?\d{4}$/.test(value) ? true : false);
    },
    /**
     * Hora Completa 24 horas
     * @param string value
     * @returns bool
     * @example Horário HH:MM 12h
     * @description Horário HH:MM 12h ? aceita horas na faixa 01-12 e minutos 00-59, separados por dois-pontos.
     */
    isHora: function(value) {
        return (/^(0[1-9]|1[0-2]):[0-5]\d$/.test(value) ? true : false);
    },
    /**
     * CEP
     * @param string value
     * @returns bool
     * @example 91560-530
     */
    isCep: function(value) {
        return (/^[0-9]{5}-[0-9]{3}$/.test(value) ? true : false);
    },
    /**
     * CEP
     * @author Michael Luz Paulo
     * @param string value
     * @returns bool
     * @example (51) 3336-2438 | (51) 33363-2438 | (51) 3336-32438
     */
    isPhone: function(value) {
        return  (/^\([0-9]{2}\)\s([0-9]{4}|[0-9]{5})-([0-9]{4}|[0-9]{5})$/.test(value));
    },
    /**CPF
     * @param string value
     * @returns bool
     * @example 00827605005 | 008.276.050-05
     */
    isCPF: function(cpf)
    {
        cpf = cpf.replace('.', '');
        cpf = cpf.replace('.', '');
        cpf = cpf.replace('-', '');

        if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
            return false;
        add = 0;
        for (var i = 0; i < 9; i ++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        add = 0;
        for (var i = 0; i < 10; i ++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;

        return true;
    },
    /**CNPJ
     * @param string value
     * @returns bool
     * @example com numero ou mascara
     */
    isCNPJ: function(cnpj)
    {
        cnpj = cnpj.replace('.', '');
        cnpj = cnpj.replace('.', '');
        cnpj = cnpj.replace('/', '');
        cnpj = cnpj.replace('-', '');

        var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
        digitos_iguais = 1;
        if (cnpj.length < 14 && cnpj.length < 15)
            return false;
        for (i = 0; i < cnpj.length - 1; i++)
            if (cnpj.charAt(i) != cnpj.charAt(i + 1))
            {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais)
        {
            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0, tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--)
            {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--)
            {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        }
        else
            return false;
    }
}
