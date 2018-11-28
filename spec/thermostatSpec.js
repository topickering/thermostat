'use strict'

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('can record the temperature', function() {
    it('and it starts at 20 degrees', function() {
      expect(thermostat.temp()).toEqual(20)
    });
    it('and it has a minimum of 10 degrees', function() {
      for (var i=0; i<10; i++) { thermostat.down(); };
      expect(thermostat.down()).toEqual('Cannot decrease below minimum of 10')
    });
    it('and a maximum of 32 if power save is off', function() {
      thermostat.powerSaveOff()
      for (var i=0; i<12; i++) { thermostat.up(); };
      expect(thermostat.up()).toEqual('Maximum temperature reached')
    });
  });

  describe('can change the temperature', function() {
    it('and it can be increased by 1 with up', function() {
      thermostat.up()
      expect(thermostat.temp()).toEqual(21)
    });
    it('and it can be decreased by 1 with down', function() {
      thermostat.down()
      expect(thermostat.temp()).toEqual(19)
    });
  });

  describe('has a power saving mode', function() {
    it('which is on by default', function() {
      expect(thermostat._powerSave).toEqual(true)
    });
    it('which sets a maximum of 25', function() {
      for (var i=0; i<5; i++) { thermostat.up(); };
      expect(thermostat.up()).toEqual('Maximum temperature reached')
    });
  });

  describe('has a reset switch', function() {
    it('whichs resets temperature to 20', function() {
      thermostat.up()
      thermostat.reset()
      expect(thermostat.temp()).toEqual(20)
    });
  });

  describe('can be asked about energy usage', function() {
    it('which is low-usage if temp is less than 18', function(){
      for (var i=0; i<3; i++) { thermostat.down(); };
      expect(thermostat.currentUsage()).toEqual('low')
    });
    it('which is medium-usage if temp is less than 25', function(){
      expect(thermostat.currentUsage()).toEqual('medium')
    });
    it('which is high-usage if temp is equal to or more than 25', function(){
      for (var i=0; i<5; i++) { thermostat.up(); };
      expect(thermostat.currentUsage()).toEqual('high')
    });
  });

});
