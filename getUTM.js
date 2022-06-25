/**
 * This function parses the URL for a given parameter and returns the value of that parameter
 */
 function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
  
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  /**
   * Enter all the parameters you want to capture from the URL into the array.
   */
  var urlParamsToForward = [
    'email',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_source'
  ];
  
  /**
   * Loop through the array of query parameters you want, Save the results into a hidden field with a VALUE that matches
   * the name of the parameter. This should be setup properly in GravityForms.
   */
  jQuery.each(urlParamsToForward, function(i, param) {
    var selector = 'input[value="' + param + '"]';
    jQuery(selector).val(getUrlParameter(param));
  });