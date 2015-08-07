        $(document).ready(function() {
            // Handler for .ready() called.
	    $('#ajax-loader').show();
            $('#badminton-container').hide();
            $('#carrom-container').hide();
            $('#chess-container').hide();
            $('#cricket-container').hide();
            $('#dumb-container').hide();
            $('#quiz-container').hide();
            $('#home-link').hide();
            $('#houses-container').hide();
            $('#score-container').hide();
            $('#discussion-container').hide();
            $('#coordinators-container').hide();
            $('#home-container').hide();
            $('#home-container').fadeIn("fast");
            $('#ajax-loader').hide();

        });
		
		



		    function writeDiscussion(val) {
            console.log(val);
            console.log("#" + val + "-dynamic-data");
            // fetching data from server start
            
                    
            $.getJSON("https://api.myjson.com/bins/40ncu", function(data) {
                placeData(data);
            });

            function placeData(obj) {
                count = 0;
                dataToDisplay = '';
                $.each(obj, function(key, value) {

						comment = value.comment;
						name  = value.name;
						timeOfComment = value.timeOfComment;
						
                        count++;
                        console.log(count);
                        dataToDisplay += '<div class="panel panel-default"><div class="panel-body"><span class="comment">' + comment + '</span></div><div class="panel-heading row"><span class="col-xs-7">' + timeOfComment + '</span> <span class="col-xs-5  pull-right">' + name + '</span></div></div>';

                    if (count == 0) {
                        $("#" + val + "-dynamic-data").html('<span class="alert alert-danger col-xs-12">No feeds to show... Visit later!</span>');
                    } else {
                        $("#" + val + "-dynamic-data").html(dataToDisplay);
                    }
                });
            }
            // fetching data from server end
        }
		
		
		

        function writeEventDetails(val) {
            console.log(val);
            console.log("#" + val + "-dynamic-data");
            // fetching data from server start
            
                    
            $.getJSON("https://api.myjson.com/bins/221ou", function(data) {
                placeData(data);
            });

            function placeData(obj) {
                count = 0;
                dataToDisplay = '';
                $.each(obj, function(key, value) {
                    console.log(value.gameName);
                    if (value.gameName == val) {
                        team1 = value.team1;
                        team2 = value.team2;
                        player1 = value.plr1;
                        player2 = value.plr2;
                        timeOfEvent = value.timeOfEvent;
                        roundName = value.roundName;
                        count++;
                        console.log(count);
                        dataToDisplay += '<div class="panel panel-default"><div class="panel-heading row"><span class="col-xs-7"><span class="team1">' + team1 + '</span> vs <span class="team2">' + team2 + '</span></span><span class="col-xs-5  pull-right"><span class="matchRound">' + roundName + '</span> Round</span></div><div class="panel-body"><span class="player1">' + player1 + '</span> vs <span class="player2">' + player2 + '</span><hr><span class="timeOfmatch">' + timeOfEvent + '</span></div></div>';
                    }
                    if (count == 0) {
                        $("#" + val + "-dynamic-data").html('<span class="alert alert-danger col-xs-12">This event has ended! Thank you!</span>');
                    } else {
                        $("#" + val + "-dynamic-data").html(dataToDisplay);
                    }
                });
            }
            // fetching data from server end
        }

        function load_event(val) {
            //console.log(val.value);
            $('#home-container').fadeOut("fast");

            $("#" + val.id + "-container").fadeIn("fast");
            console.log("#" + val.id + "-container");
            $('#home-link').fadeIn("fast");
		
	    $('#ajax-loader').show();
            writeEventDetails(val.id);
            $('#ajax-loader').hide();
            console.log("done");
        }

        function load_linkdata(val) {
            //console.log(val.value);
            $('#home-container').fadeOut("fast");

            $("#" + val.id + "-container").fadeIn("fast");
            console.log("#" + val.id + "-container");
            $('#home-link').fadeIn("fast");

            console.log("done");
        }
		function load_discussion(val) {
            //console.log(val.value);
            $('#home-container').fadeOut("fast");

            $("#" + val.id + "-container").fadeIn("fast");
            console.log("#" + val.id + "-container");
			
            $('#home-link').fadeIn("fast");
			writeDiscussion(val.id);
            console.log("done");
        }

