            var port = new osc.WebSocketPort({
                url: "ws://localhost:8081"
            });

            function logMessage (x) {console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n ↳ new message \"" + x + "\" from Renick \n\n\n\n\n");
             }

            port.on("message", function (oscMessage) {
                //$("#message").text(JSON.stringify(oscMessage, undefined, 2));
                //console.log("message", oscMessage);
                //console.log(oscMessage);
                logMessage(oscMessage.args[0]);
                move_to_act(oscMessage.args[0]);
            });

            port.open();

            var sendMessage = function (x) {
                port.send({
                address: "/visual",
                args: [x]
               });
            };

// var sayHello = function (x) {
//     port.send({
//     address: "/Hello",
//     args: [x]
//    });
// };


// Steps to follow:
// IP address: systems preferences >  Network >  TCP/P > “IPv4” (tell R mine)
// On folder "circul0_meio" “index.js file” add R IPv4 to “remoteAddress” and check  the port: "var udp = new osc.UDPPort"
// On the terminal “cd /Users/joanachicau/Documents/Project/J_R/circulo_meio”
// Start terminal “node .”
// comand on terminal to quit operation: "cntrl + C"
// open CHROME: refresh webpage (index.html)
