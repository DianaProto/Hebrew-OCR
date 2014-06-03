		

			$(document).ready(function()
			{
				
				var letters = [
					{name: "Alef", symbol: "A"},
					{name: "Bet", symbol: "B"},
					{name: "Gimel", symbol: "G"},
					{name: "Dalet", symbol: "D"},
					{name: "Hey", symbol: "H"}
				];
				
				
				$("#recognize").click(function()
				{
				  	var candidate_score = 0;
				  	var ideal_weight = 0;
				  	var maxRq=0;
				  	var maxRqIndex=0;
				  	var letter=0;

				  	for (i=0; i< letters.length;i++)
				  	{
				  		
					  	$('.input_check').each(function(index) 
					  	{
					  		var val = $('#'+(index+1)+letters[i].symbol).text();
					  		
					  		if($(this).css("background-color")=="rgb(85, 85, 85)"){
					  			val = val * 1;
					  		}else{
					  			val = val * 0;
					  		}
					  		candidate_score += val;	
					  	});
					  	
				  		$('.weight').each(function(index) 
				  		{
					  		var val = $('#'+(index+1)+letters[i].symbol).text();
					  		if(val > 0)
					  		{
					  			ideal_weight += val * 1;
					  		}
				  		});

					  	letters[i].rq = Math.round((candidate_score / ideal_weight) * 100) / 100;

					  	candidate_score = 0;
					  	ideal_weight = 0; 	
				  	}

				  	console.log(letters);

				  	for(var j=0;j<letters.length; j++){

				  		if (letters[j].rq > maxRq) {
				  			maxRq = letters[j].rq;
				  			maxRqIndex = j;
				  		}
				  	}

				  	$('#guessLetter').text(letters[maxRqIndex].name);

				  	$('.input_check').each(function(index) 
				  	{
				  		$(this).css("background-color","#dedede");
				  	});

				});

				$("#show").click(function(){
					$('.learningSet').slideToggle();
			  	});

				
			 	 var isDown = false;
			
			 	 $(document).mousedown(function() 
			 	 {
			  		isDown = true;
			  	})
			 	 .mouseup(function() 
				{
			 		isDown = false;
			 	});
			



			for (var i=0; i<letters.length; i++)
			{
			  $(".input"+letters[i].symbol).mouseover(function(){
			    if(isDown) {        // Only change css if mouse is down
			    	$(this).css("background-color","#555");
			    }
			  });
			  
			  $(".input"+letters[i].symbol).click(function(){
			    $(this).css("background-color","#555");
			  });
			  
			 }


			  $(".input_check").mouseover(function(){
			    if(isDown) {        // Only change css if mouse is down
			    	$(this).css("background-color","#555");
			    }
			  });
			  
			  $(".input_check").click(function(){
			    $(this).css("background-color","#555");
			  });
			  


			  $("#learnA").click(function(){
			  	letter='A';
			  	learn();
			  });

			  $("#emptyA").click(function(){
			  	letter='A';
			  	empty();
			  });
			  
			  $("#resetA").click(function(){
			  	location.reload(true);
			  });
			  
			   $("#learnB").click(function(){
			  	letter='B';
			  	learn();
			  });
			    
			  $("#emptyB").click(function(){
			  	letter='B';
			  	empty();
			  });
			  
			  $("#resetB").click(function(){
			  	location.reload(true);
			  });

			   $("#learnG").click(function(){
			  	letter='G';
			  	learn();
			  });
			    
			  $("#emptyB").click(function(){
			  	letter='G';
			  	empty();
			  });
			  
			  $("#resetG").click(function(){
			  	location.reload(true);
			  });

			   $("#learnD").click(function(){
			  	letter='D';
			  	learn();
			  });
			    
			  $("#emptyD").click(function(){
			  	letter='D';
			  	empty();
			  });
			  
			  $("#resetD").click(function(){
			  	location.reload(true);
			  });

			   $("#learnH").click(function(){
			  	letter='H';
			  	learn();
			  });
			    
			  $("#emptyH").click(function(){
			  	letter='H';
			  	empty();
			  });
			  
			  $("#resetH").click(function(){
			  	location.reload(true);
			  });

			  function empty(){
			  	$('.input'+letter).each(function(index) {
			  		$(this).css("background-color","#dedede");
			  	});
			  }

			   function learn(){
			   	$('.input'+letter).each(function(index) {
			  		var val = $('#'+(index+1)+letter).text();
			  		if($(this).css("background-color")=="rgb(85, 85, 85)"){
			  			val++;
			  		}else{
			  			val--;
			  		}
			  		$('#'+(index+1)+letter).text(val);
			  	});
			  	empty();
			  }



			});	
			