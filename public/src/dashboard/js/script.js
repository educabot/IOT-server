$(document).ready(function() {

  // Create new aREST device when button is clicked
  $('#validate').click(function() {
    var address = $('#device_address').val();
    var device = new Device(address);

    // Set device pins
    //device.pinMode(6, "OUTPUT");
    device.pinMode(13, "OUTPUT");

    // Button
    $('#on13').click(function() {
      device.digitalWrite(13, 1);
    });

    $('#off13').click(function() {
      device.digitalWrite(13, 0);
    });

    // Button
    $('#on12').click(function() {
      device.digitalWrite(12, 1);
    });

    $('#off12').click(function() {
      device.digitalWrite(12, 0);
    });


    // Button
    $('#on11').click(function() {
      device.digitalWrite(11, 1);
    });

    $('#off11').click(function() {
      device.digitalWrite(11, 0);
    });

    // Button
    $('#on10').click(function() {
      device.digitalWrite(10, 1);
    });

    $('#off10').click(function() {
      device.digitalWrite(10, 0);
    });
        // Button
    $('#on9').click(function() {
      device.digitalWrite(9, 1);
    });

    $('#off9').click(function() {
      device.digitalWrite(9, 0);
    });

    // Button
    $('#on8').click(function() {
      device.digitalWrite(8, 1);
    });

    $('#off8').click(function() {
      device.digitalWrite(8, 0);
    });

    // Button
    $('#on7').click(function() {
      device.digitalWrite(7, 1);
    });

    $('#off7').click(function() {
      device.digitalWrite(7, 0);
    });


    // Button
    $('#on6').click(function() {
      device.digitalWrite(6, 1);
    });

    $('#off6').click(function() {
      device.digitalWrite(6, 0);
    });

    // Button
    $('#on5').click(function() {
      device.digitalWrite(5, 1);
    });

    $('#off5').click(function() {
      device.digitalWrite(5, 0);
    });
        // Button
    $('#on4').click(function() {
      device.digitalWrite(4, 1);
    });

    $('#off4').click(function() {
      device.digitalWrite(4, 0);
    });

    // Button
    $('#on3').click(function() {
      device.digitalWrite(3, 1);
    });

    $('#off3').click(function() {
      device.digitalWrite(3, 0);
    });


    // // Analog write
    // $('#slider').mouseup(function() {
    //   var val = $('#slider').val();
    //   device.analogWrite(6, val);
    // });

    //Analog read every 5 seconds
    device.analogRead(0, function(data) {
      $("#A0").html(data.return_value);
    });
    setInterval(function() {
      device.analogRead(0, function(data) {
        $("#A0").html(data.return_value);

      });
    }, 1000);

    device.analogRead(1, function(data) {
      $("#A1").html(data.return_value);
    });
    setInterval(function() {
      device.analogRead(1, function(data) {
        $("#A1").html(data.return_value);
      });
    }, 1000);

        device.analogRead(2, function(data) {
      $("#A2").html(data.return_value);
    });
    setInterval(function() {
      device.analogRead(2, function(data) {
        $("#A2").html(data.return_value);
      });
    }, 1000);

        device.analogRead(3, function(data) {
      $("#A3").html(data.return_value);
    });
    setInterval(function() {
      device.analogRead(3, function(data) {
        $("#A3").html(data.return_value);
      });
    }, 1000);

        device.analogRead(4, function(data) {
      $("#A4").html(data.return_value);
    });
    setInterval(function() {
      device.analogRead(4, function(data) {
        $("#A4").html(data.return_value);
      });
    }, 1000);

        device.analogRead(5, function(data) {
      $("#A5").html(data.return_value);
    });
    setInterval(function() {
      device.analogRead(5, function(data) {
        $("#A5").html(data.return_value);
      });
    }, 1000);

    // Digital read every 5 seconds
    // device.digitalRead(11, function(data) {
    //   $('#2').html(data.return_value);
    // });
    // setInterval(function() {
    //   device.digitalRead(11, function(data) {
    //     $('#2').html(data.return_value);
    //   });
    // }, 1000);

    // // Temperature display
    // device.getVariable('temperature', function(data) {
    //   $('#temperature').html(data.temperature);
    // });
    //
    // // Humidity display
    // device.getVariable('humidity', function(data) {
    //   $('#humidity').html(data.humidity);
    // });
  });

});
