		

			$(document).ready(function()
			{
				var letter=0;
				var letters = ["A","B","G","D","H"];
				
				$("#recognize").click(function()
				{
				  	var candidate_score = 0;
				  	var ideal_weight = 0;
				  	

				  	for (i=0; i< letters.length;i++)
				  	{
					  	$('.input_check').each(function(index) 
					  	{
					  		var val = $('#'+(index+1)+letters[i]).text();
					  		
					  		if($(this).css("background-color")=="rgb(85, 85, 85)"){
					  			val = val * 1;
					  		}else{
					  			val = val * 0;
					  		}
					  		candidate_score += val;
					  	});

				  		$('.weight').each(function(index) 
				  		{
					  		var val = $('#'+(index+1)+letters[i]).text();
					  		if(val > 0)
					  		{
					  			ideal_weight += val * 1;
					  		}
				  		});
					  	
					  	
					  	$('#rq'+letters[i]).text( Math.round((candidate_score / ideal_weight) * 100) / 100);
						
					  	candidate_score = 0;
					  	ideal_weight = 0;

				  	}


				  	$('.input_check').each(function(index) 
				  	{
				  		$(this).css("background-color","#dedede");
				  	});

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
			  $(".input"+letters[i]).mouseover(function(){
			    if(isDown) {        // Only change css if mouse is down
			    	$(this).css("background-color","#555");
			    }
			  });
			  
			  $(".input"+letters[i]).click(function(){
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
			