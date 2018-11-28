'use strict'

function Thermostat() {
  this._temp = 20;
  this._powerSave = true;
  this._currentUsage = this.currentUsage();
};

Thermostat.prototype.temp = function() {
  return this._temp;
};

Thermostat.prototype.up = function() {
  if (this._powerSave && this._temp >= 25) {
    return 'Maximum temperature reached';
  }
  if (this._temp >= 32) {
    return 'Maximum temperature reached';
  }
  else {
  this._temp++;
  this.currentUsage();
  }
};

Thermostat.prototype.down = function() {
  if (this._temp <= 10) {
    return 'Cannot decrease below minimum of 10';
  }
  else {
    this._temp--;
    this.currentUsage();
  }
};

Thermostat.prototype.powerSaveOff = function() {
  this._powerSave = false;
};

Thermostat.prototype.powerSaveOn = function() {
  this._powerSave = false;
};

Thermostat.prototype.reset = function() {
  this._temp = 20;
  this.currentUsage();
};

Thermostat.prototype.currentUsage = function() {
  if (this._temp < 18) {
    this._currentUsage = 'low';
    return this._currentUsage
  }
  if (this._temp < 25) {
    this._currentUsage = 'medium';
    return this._currentUsage
  }
  else {
    this._currentUsage = 'high';
    return this._currentUsage
  }
};
