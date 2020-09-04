<!DOCTYPE html>
<html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
       <meta http-equiv="x-ua-compatible" content="ie=edge">
       <title>Material Design for Bootstrap</title>
       <!-- Font Awesome -->
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
       <!-- Google Fonts Roboto -->
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
       <!-- Bootstrap core CSS -->
       <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
       <!-- Material Design Bootstrap -->
       <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
</head>
   <body>
       <!-- Start your project here-->
       <div class="container my-5">
           <form action="" method="POST">
            <div class="form-group">
                <label for="password">Mot de passe :</label>
                <input oninput="checkPasswordFormat(this.value)" type="text" name="password" id="password" class="form-control" placeholder="Ex : Nekrose12" />
            </div>
            <ul style="list-style: none">
                <li id="charLength">Au moins 8 caractères</li>
                <li>Au moins une lettre en majuscule</li>
                <li id="lowerCase">Au moins une lettre en minuscule</li>
                <li id="charNumber">Au moins un chiffre</li>
            </ul>
            <input type="submit" name="send" class="btn btn-primary" />
           </form>
       </div>
       <!-- End your project here-->
       <!-- jQuery -->
       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
       <!-- Bootstrap tooltips -->
       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
       <!-- Bootstrap core JavaScript -->
       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
       <!-- MDB core JavaScript -->
       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>
       <!-- Your custom scripts (optional) -->
       <script type="text/javascript" src="assets/js/script.js">
       </script>
   </body>
</html>