$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $.get('http://localhost:4567/update', function(data) {
    thermostat._temp = JSON.parse(data).temp;
    $('#temperature').text(JSON.parse(data).temp);
  });

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
    sendState();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
    sendState();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSaveOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSaveOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
    });

    function sendState() {
     var data = {temp: thermostat.temp()};
     $.post('http://localhost:4567/states', data);
    };

  function updateTemperature() {
    $('#temperature').text(thermostat.temp());
    $('#temperature').attr('class', thermostat.currentUsage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var apiToken = '&APPID=258dbad571183babd86dfa47ed6e92a8'
    var units = '&units=metric'
    $.get(url + apiToken + units, function(data) {
        $('#current-temperature').text(data.main.temp);
      });
  };


})
