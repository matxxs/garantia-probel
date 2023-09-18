<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="./src/img/grupo-pelmex.png">
    <title>Cadastro</title>

    <link rel="stylesheet" href="./src/css/fontawesome/fontawesome.min.css">

    <link rel="stylesheet" href="./src/css/reset.css">
    <link rel="stylesheet" href="./register/src/css/style.css">
    <link rel="stylesheet" href="./src/css/variables.css">
    <link rel="stylesheet" href="./src/css/header.css">
    <link rel="stylesheet" href="./src/css/footer.css">
    <link rel="stylesheet" href="./src/css/responsive.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700&display=swap" rel="stylesheet">  
</head>

<body>
    <header>
        <?php include('./header/header.html'); ?>
    </header>
    
    <main id="container">

        <form id="registerForm" method="post" action="register/send_for.php" enctype="multipart/form-data" autocomplete="off">

            <strong class="form-header"> Cadastre-se para obter mas Garantia </strong>

            <div class="alert-banner">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span class="span-error">
                    Ocorreu um problema no cadastro. Verifique se todos os campos foram preenchido corretamente.
                </span>
            </div>

            <div id="personal-data">

                <div class="input-box">
                    <input type="text" name="full-name" id="full-name" class="input-focus">
                    <label for="full-name"
                    class="group-label">
                        <span> Nome completo </span>
                    </label>
                </div>

                <div class="input-box">
                    <input type="text" name="email" id="email" class="input-focus">
                    <label for="email"
                    class="group-label">
                        <span> E-mail </span>
                    </label>
                </div>

                <div class="input-box">
                    <input type="text" name="phone" id="phone" class="input-focus" oninput="formatPhoneNumber(this)">
                    <label for="phone"
                    class="group-label">
                        <span> Telefone </span>
                    </label>
                </div>

                <div class="input-box">
                    <input type="text" name="CpfCnpj" id="CpfCnpj" class="input-focus" onkeypress="applyMask()">
                    <label for="CpfCnpj"
                    class="group-label">
                        <span> CPF ou CNPJ </span>
                    </label>
                </div>
            
                <div class="input-box">
                    <input type="text" name="date" id="date" class="input-focus" maxlength="10" onkeypress="dateMask(this)">
                    <label for="date"
                    class="group-label">
                        <span> Data da compra </span>
                    </label>
                </div>

                <div class="input-box">
                    <input type="text" name="warranty-product" id="warranty-product" class="input-focus" >
                    <label for="warranty-product"
                    class="group-label">
                        <span> Modelo do colchão </span>
                    </label>
                </div>
                
                <div class="file-box">
                    <input type="file" name="photo-nf" id="photo-nf" value='0'> 
                    <i class="fa-solid fa-camera"></i> 
                    <label for="photo-nf"
                    class="group-label">
                        <span id="file-name-nf"> 
                            Foto Nº NF
                         </span>
                    </label>
                </div>

                <div class="file-box"> 
                    <input type="file" name="photo-tag" id="photo-tag" value='1'>
                    <i class="fa-solid fa-camera"></i> 
                    <label for="photo-tag"
                    class="group-label">
                        <span id="file-name-tag">
                            Foto da Etiqueta
                        </span>
                    </label>
                </div>
            </div>

            <div class="term-and-policy" >
                <span>
                    Ao se cadastar, você concorda com as 
                    <a target="_blank" href="">
                        Regras da Campanha
                    </a>
                        e com a 
                    <a target="_blank" href="#" >
                         Política de Privicidade.
                    </a>
                    
                </span>
            </div>

            <div class="check-marked">
                <input type="checkbox" id="check-marked-term" onclick="checkCheckbox()">
                <label for="check-marked-term">Eu li e concordo com os Termos de Uso</label>
            </div>

            <button type="submit" name="submitBD" class="bnt submit inactive" disabled>
                <span id="span-text">Cadastre-se</span>
                <span id="span-spinnery"></span>
            </button>
        </form>

        <section class="thanks-to-register">
            <div>
                <p class="header-thk-rgt">OBRIGADO POR SE CADASTRAR.</p>

                <p>
                    Seu cadastro de Garantia Estendida
                    foi enviado para validação,
                    você receberá um e-mail de CONFIRMÇÃO
                </p>

                <a href="https://www.probel.com.br/">
                    <button class="bnt link">
                        <span>Conheça nossos Produtos</span>
                    </button>
                </a>
            </div>
            
        </section>
    </main>

    <footer>
        <?php include('./footer/footer.html'); ?>
    </footer>

    <script src="./src/js/fontawesome/all.min.js"></script>
    <script src="./src/js/fontawesome/fontawesome.min.js"></script>
    <script src="./register/src/js/action.js"></script>
    <script src="./register/src/js/validation.js"></script>
</body>
</html>