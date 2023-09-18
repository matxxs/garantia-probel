const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

    if (!isValidForm()) {
        event.preventDefault();
    } else {
        changeButton();
        registerForm.submit();
    }
}

function isValidForm() {
    const formData = {
        fullName: getValue('full-name'),
        email: getValue('email'),
        phone: getValue('phone'),
        cpfCnpj: getValue('CpfCnpj'),
        date: getValue('date'),
        warrantyProduct: getValue('warranty-product'),
        photoNf: getValue('photo-nf'),
        photoTag: getValue('photo-tag')
    };

    if (!checkField(formData.fullName)) return false;
    if (!checkValidationEmail(formData.email)) return false;
    if (!checkValidationPhone(formData.phone)) return false;
    if (!checkValidationCpfOrCnpj(formData.cpfCnpj)) return false;
    if (!checkField(formData.date)) return false;
    if (!checkField(formData.warrantyProduct)) return false;
    if (!checkSizePhotoNF(formData.photoNf)) return false;
    if (!checkSizePhotoEQT(formData.photoTag)) return false;

    return true;
}

// === CHECK GENERAL VALIDATION ===

function getValue(elementId) {
    return document.getElementById(elementId).value;
}

function checkField(value) {
    const alertBanner = document.querySelector('.alert-banner ');
    if (value === '') {
        showError('Ocorreu um problema no cadastro. Verifique se todos os campos foram preenchidos corretamente.');
        alertBanner.style.background = 'rgb(221, 194, 43';
        return false;
    }
    hideError();
    return true;
}

function showError(message) {
    const alertBanner = document.querySelector('.alert-banner');
    const spanAlert = document.querySelector('.span-error');

    spanAlert.innerHTML = message;
    alertBanner.style.display = 'flex';
    alertBanner.style.background = 'red';
}

function hideError() {
    const alertBanner = document.querySelector('.alert-banner');
    alertBanner.style.display = 'none';
}

function changeButton() {
    const bnt = document.querySelector('.bnt');
    const spanText = document.getElementById('span-text');
    const spanSpinnery = document.getElementById('span-spinnery');

    if (bnt) {
        spanText.style.display = 'none';
        spanSpinnery.style.display = 'flex';
    } else {
        spanText.style.display = 'flex';
        spanSpinnery.style.display = 'none';
    }
}

// === CHECK SPECIFIC VALIDATION ===

function checkValidationEmail(email) {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
        checkField(email)
        return false;
    }
    if (!emailPattern.test(email)) {
        showError('O e-mail inserido não é válido.');
        return false;
    }
    hideError();
    return true;
}

function checkValidationPhone(phone) {
    if (phone === '') {
        checkField(phone);
        return false;
    }
    if (!validatePhone(phone)) {
        showError('O Telefone inserido não é válido.');
        return false;
    }
    hideError();
    return true;
}

function checkValidationCpfOrCnpj(CpfOrCnpj) {
    if (CpfOrCnpj === '') {
        checkField(CpfOrCnpj)
        return false;
    }
    if (!validaCpfCnpj(CpfOrCnpj)) {
        showError('O CPF ou CNPJ inserido não é válido.');
        return false;
    }
    hideError();
    return true;
}

// ========== MASK ============

function formatPhoneNumber(input) {
    const inputValue = input.value.replace(/\D/g, '');
    const formattedValue = format(inputValue); 
  
    input.value = formattedValue; 
  }

  function format(phoneNumber) {

    if (phoneNumber.length > 10) {
      return `(${phoneNumber.substr(0, 2)}) ${phoneNumber.substr(2, 1)} ${phoneNumber.substr(3, 4)}-${phoneNumber.substr(7, 4)}`;
    } else if (phoneNumber.length > 6) {

      return `(${phoneNumber.substr(0, 2)}) ${phoneNumber.substr(2, 4)}-${phoneNumber.substr(6, 4)}`;
    } else if (phoneNumber.length > 2) {

      return `(${phoneNumber.substr(0, 2)}) ${phoneNumber.substr(2)}`;
    } else {
      return phoneNumber;
    }
  }

  function applyMask(){
    const cpfOrCnpjInput = document.getElementById('CpfCnpj');
    cpfOrCnpjInput.addEventListener('input', (value) =>{
        let x = value.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
        value.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '/' : x[4]) + x[4] + (x[5] ? '-' + x[5] : '');
  
    if (value.target.value.length < 15) {
      x = value.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
      value.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' : '') + x[3] + (x[4] ? '-' + x[4] : '');
    }
    });
}

function dateMask(val) {
    const inputValue = val.value.replace(/\D/g, '');
    const formattedValue = [];

    for (let i = 0; i < inputValue.length; i++) {
        if (i === 2 || i === 4 ){
            formattedValue.push('/');  
        }
        formattedValue.push(inputValue.charAt(i));
    }

    val.value = formattedValue.join('').substring(0, 10);
}

// === VALIDATION FIELDS ===

function validatePhone(telefone) {

    telefone = telefone.replace(/\D/g, '');
  
  
    if (!(telefone.length >= 10 && telefone.length <= 11)) return false;
  
  
    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;
  
  
    for (var n = 0; n < 10; n++) {
  
      if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
    }
    //DDDs validos
    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
      21, 22, 24, 27, 28, 31, 32, 33, 34,
      35, 37, 38, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 51, 53, 54, 55, 61, 62,
      64, 63, 65, 66, 67, 68, 69, 71, 73,
      74, 75, 77, 79, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 91, 92, 93, 94, 95,
      96, 97, 98, 99];
    //verifica se o DDD é valido (sim, da pra verificar rsrsrs)
    if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false;
  
    if (new Date().getFullYear() < 2017) return true;
    if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) return false;
  
    return true;
}

function validaCpfCnpj(val) {
  val = val.replace(/\D/g, '');
  if (val.length === 11) {
    // Valida CPF
    if (!validaCpf(val)) {
      return false;
    }
  } else if (val.length === 14) {
    // Valida CNPJ
    if (!validaCnpj(val)) {
      return false;
    }
  } else {
    // Tamanho inválido
    return false;
  }
  return true;
}

function validaCpf(cpf) {
  // Valida CPF
  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf[i - 1]) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf[9])) {
    return false;
  }

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf[i - 1]) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf[10])) {
    return false;
  }

  return true;
}

function validaCnpj(cnpj) {
  // Valida CNPJ
  let soma = 0;
  let resto;

  const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
  for (let i = 0; i < 12; i++) {
      soma += parseInt(cnpj[i]) * pesos1[i];
  }
  resto = soma % 11;
  if (resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }
  if (resto !== parseInt(cnpj[12])) {
    return false;
  }

  soma = 0;
  const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 13; i++) {
    soma += parseInt(cnpj[i]) * pesos2[i];
  }
  resto = soma % 11;
  if (resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }
  if (resto !== parseInt(cnpj[13])) {
    return false;
  }

  return true;
}

function checkFileSize(input, maxSize, errorMessage) {
  if (input.files && input.files[0]) {
    const tamanhoArquivo = input.files[0].size;

    if (tamanhoArquivo > maxSize) {
      setErrorFor(input, errorMessage);
      input.value = '';
      return false;
    }
  } 
  return true;
}

function maxSizePhotoNF(input) {
  const tamanhoMaximo = 5 * 1024 * 1024; // 5MB em bytes
  return checkFileSize(input, tamanhoMaximo, 'O tamanho da foto selecionada é maior do que o tamanho máximo permitido (5MB)');
}

function maxSizePhotoEQT(input) {
  const tamanhoMaximo = 5 * 1024 * 1024; // 5MB em bytes
  return checkFileSize(input, tamanhoMaximo, 'O tamanho da foto selecionada é maior do que o tamanho máximo permitido (5MB)');
} 