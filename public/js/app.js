$(function(){

		$("#email-collect").on("submit", function(e) {
		  e.preventDefault();
		  $("#email-collect ul").addClass("bouncing-ball");
		  pushEmail($(this));
		});;

		//$("#suggestEvent").click(function(){
		//	ga('send', 'event', 'eventSuggestion', 'homePageEventSuggestion', 'Proposer un évènement|bg=white,color:orange');
		//});
});

function pushEmail(form){
		var email = $("#email").prop("value");

		$.ajax({
				type:"POST",
				url: "https://bouger.us8.list-manage.com/subscribe/post-json?u=eae7f8d4e1c20125d910a2549&amp;id=733f7cd62b&c=?",
				data : $.param({EMAIL : email}),
				cache:false,
				dataType: 'json',
				contentType: 'application/json; charset=utf-8',
				error : function(data){
						$.growl.error({title: "rendezvous.cg",  message: "Veillez saisir une adresse email correcte ou réessayez plus tard." });
						$("#email-collect ul").removeClass("bouncing-ball");
				},
				success : function(data) {

						if(data.result === "success") {
								$.growl.notice({title: "rendezvous.cg",  message: "Vous êtes bien enregistré. A très bientôt !", duration : 5000});
								$("#email-collect ul").removeClass("bouncing-ball");
						}
						else {
								$.growl.error({title: "rendezvous.cg",  message: "Veillez saisir une adresse email correcte ou réessayez plus tard." });
								$("#email-collect ul").removeClass("bouncing-ball");
						}
						//$.growl.notice({title: "rendezvous.cg",  message: "Vous êtes bien enregistré. A très bientôt !", duration : 5000});
						/*
						var data = JSON.parse(data);

						if(data.indexOf("Subscription Confirmed") !== -1)
						{
								console.log(data);
								$("#email-collect ul").removeClass("bouncing-ball");
								$.growl.notice({title: "rendezvous.cg",  message: "Vous êtes bien enregistré. A très bientôt !", duration : 5000});
						} 
						else 
						{
								console.log(data);
								$.growl.error({title: "rendezvous.cg",  message: "Veillez saisir une adresse email correcte ou réessayez plus tard." });
						} */
				}


		});

		/*
		$.ajax({
		  type: "POST",
			url: "/members",
			data: {"email_address": email,"status":"subscribed"},
			success: function(data) {
				console.log(data);
		    $("#email-collect ul").removeClass("bouncing-ball");
				$.growl.notice({title: "rendezvous.cg",  message: "Vous êtes bien enregistré. A très bientôt !", duration : 5000});
			},
			error: function(data) {
				console.log(data);
				$.growl.error({title: "rendezvous.cg",  message: "Veillez saisir une adresse email correcte ou réessayez plus tard." });
			},
			dataType: 'text',
		});
		*/
}
