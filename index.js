// Code your solutions in this file
function writeCards(array, event) {
    
    var messages = [];

    
    for (var i = 0; i < array.length; i++) {
        
        var message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;

      
        messages.push(message);
    }

   
    return messages;
}



function countDown(number) {
    
    for (var i = number; i >= 0; i--) {
        console.log(i); 
    }
}


