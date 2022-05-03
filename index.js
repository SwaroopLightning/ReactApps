<!DOCTYPE html>
 <html lang="en">
<head>
    <meta charset="utf-8"  name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./css/styles.css">
    <title>
       Timer
    </title>
</head>

 <body>
<div class="timer-div">
    <form class="myform" name="myform" method="get/post">
         <label id="Hours-label" >Hours</label><input type="text" name="timer-name" class="timer-class" id="timer-id" placeholder="Hours" >
      
         <label id="Minutes-label" >Minutes</label><input type="text"  class="timer-Minutes" id="timer-Minutes" placeholder="Minutes" >
      

         <label id="Seconds-label" >Seconds</label><input type="text"  class="timer-Seconds" id="timer-Seconds" placeholder="Seconds" >
      

         <button class="timer-button" type="button">click</button>

        </form>


        <p class="time-left">Here </p>
</div>

<script src="./scripts/timer.js"></script>
</body>
</html>
