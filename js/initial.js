// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // Zone.js hides global jQuery, but it's in the window object.
  if (typeof(window.jQuery) !== 'undefined') {
    jQuery = $ = window.jQuery;
  }
  // Check if require is a defined function.
  else if (typeof(require) === 'function') {
    jQuery = $ = require('jquery');
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
