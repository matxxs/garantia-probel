function mascaraTelefone(event) {
    let tecla = event.key;
    let telefone = event.target.value.replace(/\D+/g, "");

    if (/^[0-9]$/i.test(tecla)) {
        telefone = telefone + tecla;
        let tamanho = telefone.length;

        if (tamanho >= 12) {
            return false;
        }
        
        if (tamanho > 10) {
            telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (tamanho > 5) {
            telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (tamanho > 2) {
            telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            telefone = telefone.replace(/^(\d*)/, "($1");
        }

        event.target.value = telefone;
    }

    if (!["Backspace", "Delete"].includes(tecla)) {
        return false;
    }
}



document.getElementById('cpf').addEventListener('input', function(e) {
    
    if(e.target.value.length < 15) {
        x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '-' + x[4] : '');
    }

    console.log('Com formatação: ' + e.target.value);

});

document.getElementById('cnpj').addEventListener('input', function(e) {
    
  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
  e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '/' : x[4]) + x[4] + (x[5] ? '-' + x[5] : '');

  console.log('Com formatação: ' + e.target.value);

});


function mascaraData(val) {
    var pass = val.value;
    var expr = /[0123456789]/;
  
    for (i = 0; i < pass.length; i++) {
      // charAt -> retorna o caractere posicionado no índice especificado
      var lchar = val.value.charAt(i);
      var nchar = val.value.charAt(i + 1);
  
      if (i == 0) {
        // search -> retorna um valor inteiro, indicando a posição do inicio da primeira
        // ocorrência de expReg dentro de instStr. Se nenhuma ocorrencia for encontrada o método retornara -1
        // instStr.search(expReg);
        if ((lchar.search(expr) != 0) || (lchar > 3)) {
          val.value = "";
        }
  
      } else if (i == 1) {
  
        if (lchar.search(expr) != 0) {
          // substring(indice1,indice2)
          // indice1, indice2 -> será usado para delimitar a string
          var tst1 = val.value.substring(0, (i));
          val.value = tst1;
          continue;
        }
  
        if ((nchar != '/') && (nchar != '')) {
          var tst1 = val.value.substring(0, (i) + 1);
  
          if (nchar.search(expr) != 0)
            var tst2 = val.value.substring(i + 2, pass.length);
          else
            var tst2 = val.value.substring(i + 1, pass.length);
  
          val.value = tst1 + '/' + tst2;
        }
  
      } else if (i == 4) {
  
        if (lchar.search(expr) != 0) {
          var tst1 = val.value.substring(0, (i));
          val.value = tst1;
          continue;
        }
  
        if ((nchar != '/') && (nchar != '')) {
          var tst1 = val.value.substring(0, (i) + 1);
  
          if (nchar.search(expr) != 0)
            var tst2 = val.value.substring(i + 2, pass.length);
          else
            var tst2 = val.value.substring(i + 1, pass.length);
  
          val.value = tst1 + '/' + tst2;
        }
      }
  
      if (i >= 6) {
        if (lchar.search(expr) != 0) {
          var tst1 = val.value.substring(0, (i));
          val.value = tst1;
        }
      }
    }
  
    if (pass.length > 10)
      val.value = val.value.substring(0, 10);
    return true;
}



const input = document.querySelector ('receipt')

receipt.addEventListener('keypress' , () => {
    let inputlength = receipt.value.length

    if (inputlength === 3 || 
        inputlength === 7 || 
        inputlength === 11 ) {
        receipt.value += '.'
    }

})