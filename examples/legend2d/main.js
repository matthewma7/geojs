// Run after the DOM loads
$(function () {
  'use strict';

  // Create a map object
  var map = geo.map({
    node: '#map',
    zoom: 3
  });

  // Add the default osm layer
  map.createLayer('osm');

  // Create a ui layer
  var ui = map.createLayer('ui');

  // Create a legend widget
  var legend = ui.createWidget('legend2d', {
    position: {
      right: 20,
      top: 10
    }
  });

  // Add rows to the legend
  //
  // The categories are displayed in the order passed as
  // a row on the legend.  The category objects should
  // contain the following properties:
  //
  //   * name: (string) The name/description
  //   * style: (object) The feature style object
  //   * type: (string) The feature type ('point', 'line', 'other')
  //
  // Points are displayed as circles, lines as lines, and everything else
  // is displayed as a rounded rectangle.  The style objects have the same
  // properties as feature styles (fill is ignored for lines):
  //
  //   * stroke: (bool) Turn on or off the stroke
  //   * strokeWidth: (number) The stroke width in pixels
  //   * strokeColor: (string|object) The stroke color
  //   * strokeOpacity: (number) The stroke opacity
  //   * fill: (bool) Turn on or off the fill
  //   * fillColor: (string|object) The fill color
  //   * fillOpacity: (number) The fill opacity
  legend.categories([
    {
      name: 'test1',
      type: 'discrete',
      scale: {
        type: 'ordinal',
        domain: [1, 2, 3],
        range: ['red', 'green', 'blue']
      }
    }
  ]);

});
