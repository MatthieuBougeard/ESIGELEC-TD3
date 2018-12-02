module.exports = {
  networks : {
    ganache : {
      host : "localhost",
      port : 7545, // By default Ganache runs on this port.     
      network_id : 5777 // network_id for ganache is 5777. However, by keeping * as value you can run this node on any network
     }
   }
 };
