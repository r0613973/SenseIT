require('./bootstrap');

// Make 'log_message.js' accessible inside the HTML pages
import logs from "./log_message.js";
window.VinylShop = logs;
// Run the hello() function
logs.hello();
