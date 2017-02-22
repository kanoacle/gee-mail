window.onload = function(){

	for (var i = 0; i < window.geemails.length; i++) {
		var message = window.geemails[i];
		displayMessage(message);
	}

	function addNewMessage (){
    		var message = getNewMessage();	
    		displayMessage(message);
    		
    		window.geemails.push(message);
    		console.log (window.geemails.length);        
    	}

   	var interval = setInterval(addNewMessage,3000);

   	function displayMessage (message) {
    			var date = message.date;
    			var sender = message.sender;
    			var subject = message.subject;
    			var body = message.body;
                
                $('#navigation li').innerHTML = window.geemails.length;
    			
    			$('.messageHolder').append(
    				'<div class="sender">'  + sender + '</div>' + 
    				'<div class="subject">'  + subject +  '</div>' + 
    				'<div class="body">'  + body +  '</div>' + 
    				'<div class="date">'  + date +  '</div>' + 
    				'<div> &nbsp </div>'
    				)
    				      
    	}  

}