var domWidget = require('./domWidget');
var inherit = require('../inherit');
var registerWidget = require('../registry').registerWidget;

var legend2dWidget = function (arg) {
  'use strict';
  if (!(this instanceof legend2dWidget)) {
    return new legend2dWidget(arg);
  }

  domWidget.call(this, arg);

  var m_this = this,
    m_default_canvas = 'div';
  var m_categories = [];

  /**
   * Initializes DOM Widget.
   * Sets the canvas for the widget, does parent/child relationship management,
   * appends it to it's parent and handles any positioning logic.
   */
  this._init = function () {
    if (arg.hasOwnProperty('parent')) {
      arg.parent.addChild(m_this);
    }

    m_this._createCanvas();
    m_this._appendChild();

    m_this.canvas().addEventListener('mousedown', function (e) {
      e.stopPropagation();
    });

    m_this.reposition();
  };

  /**
   * Creates the widget canvas.
   * This is just a simple DOM element (based on args.el, or defaults to a div)
   */
  this._createCanvas = function () {
    m_this.canvas(document.createElement(arg.el || m_default_canvas));
  };

  this.draw = function () {
    m_this._init();
    var container = d3.select(m_this.canvas()).append('div');
    container.append('svg').append('text').text('abc');
  }

  this.categories = function (categories) {
    m_categories = categories;
    this.draw();
  }

  return this;
};

inherit(legend2dWidget, domWidget);

registerWidget('dom', 'legend2d', legend2dWidget);
module.exports = legend2dWidget;
