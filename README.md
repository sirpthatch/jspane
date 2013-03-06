jspane
======

Simple continual full size image pane for JS

This is a plugin for JQuery that takes whatever image you specify
and provides a simple animation of the camera paning on top of it.

This should work on any image contained within a parent element.
Images will be automatically resized to work within their parent
element.

See the test.html file for an example of how to use this.

Add the following to your header:
<script type="text/javascript" src="[INSERT JQUERY REFERENCE]"></script>
<script  type="text/javascript" src="js/jspane.js"></script>

Then somewhere in your script (best if at the end):
$(".paneimg").pane();