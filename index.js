<!doctype html>
<html>
<head>
  <title>Hello jQuery</title>
</head>
<body>
  <p id="note">Hello, World!</p>
  <script src="jquery.js"></script>
  <script>
$("#note").html( "Hello from jQuery!" );
$("#note").css({
"color": "red", "background-color": "yellow", "padding": "10px"
    });
  </script>
</body>
</html>