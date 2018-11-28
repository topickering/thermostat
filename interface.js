$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
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

  function updateTemperature() {
    $('#temperature').text(thermostat.temp());
    if(thermostat.currentUsage() === 'low') {
    $('#temperature').css('color', 'green')
  } else if(thermostat.currentUsage() === 'medium') {
    $('#temperature').css('color', 'black')
  } else {
    $('#temperature').css('color', 'red')
  }
  };

})
