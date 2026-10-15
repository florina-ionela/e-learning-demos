window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script9 = function()
{
  /*var certFilename = 'certificate.html';
var iframeElements = document.getElementsByTagName("iframe");

for(var i = 0; i < iframeElements.length; i++){
	var src = iframeElements[i].getAttribute('src');
	if (src.indexOf(certFilename) != -1) {
		iframeElements[i].contentWindow.generatePDF();
	}
}
*/
Array.from(document.getElementsByTagName("iframe"))
	.find(({src})=>src.endsWith('certificate.html'))?.contentWindow.generatePDF();

}

};
