function GoHome()
{
    Home.removeAttribute("hidden");
    About.hidden = "true";
	Download.hidden = "true";
	Help.hidden = "true";
}
function LoadContent()
{
    var Home = document.getElementById("Home");
    var About = document.getElementById("About");
	var Download = document.getElementById("Download");
	var Help = document.getElementById("Help");
    GoHome();
}
function GoAbout()
{
    About.removeAttribute("hidden");
    Home.hidden = "true";
	Download.hidden = "true";
	Help.hidden = "true";
}
function GoDownload()
{

	Download.removeAttribute("hidden");
    About.hidden = "true";
	Home.hidden = "true";
	Help.hidden = "true";
}
function GoHelp()
{
	Help.removeAttribute("hidden");
    About.hidden = "true";
	Home.hidden = "true";
	Download.hidden = "true";
}