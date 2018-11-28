'use strict'

function Thermostat() {
  this._DEFAULTTEMP = 20;
  this._temp = this._DEFAULTTEMP;
  this._powerSave = true;
  this._pSMax = 25;
  this._max = 32;
  this._min = 10;
  this._lowerUsageLimit = 18;
  this._mediumUsageLimit = 25;
  this._currentUsage = this.currentUsage();
};

Thermostat.prototype.temp = function() {
  return this._temp;
};

Thermostat.prototype.up = function() {
  if (this._powerSave && this._temp >= this._pSMax) {
    return 'Maximum temperature reached';
  }
  if (this._temp >= this._max) {
    return 'Maximum temperature reached';
  }
  else {
  this._temp++;
  this.currentUsage();
  }
};

Thermostat.prototype.down = function() {
  if (this._temp <= this._min) {
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
  if (this._temp > this._pSMax) {
    this._temp = this._pSMax
  };
};

Thermostat.prototype.reset = function() {
  this._temp = this._DEFAULTTEMP;
  this.currentUsage();
};

Thermostat.prototype.currentUsage = function() {
  if (this._temp < this._lowerUsageLimit) {
    this._currentUsage = 'low';
    return this._currentUsage
  }
  if (this._temp < this._mediumUsageLimit) {
    this._currentUsage = 'medium';
    return this._currentUsage
  }
  else {
    this._currentUsage = 'high';
    return this._currentUsage
  }
};
