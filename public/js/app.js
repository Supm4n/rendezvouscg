Parse.initialize("xCZ9CjBE7pET5Kcw8NIDwzxVWWrEajv0SvIn4YkG", "lr9xhaLct15MDncuWLHJhJimEgTtCf9nbIY9RY8q");
var User = Parse.Object.extend("User");

$(function(){

		$("#email-collect").on("submit", function(e) {
		  e.preventDefault();
		  $("#email-collect ul").addClass("bouncing-ball");
		  pushEmail($(this));
		});;

		$("#suggestEvent").click(function(){
			ga('send', 'event', 'eventSuggestion', 'homePageEventSuggestion', 'Proposer un évènement|bg=white,color:orange');
		});
});

function pushEmail(form){
		var email = $("#email").prop("value");
		//console.log($("#email").prop("value"));

		var user = new User();

		user.set("email", email);
		user.set("username", email);
		user.set("password", email);
		user.set("welcomed", false);

		user.save(null, {
      success: function(user) {
		  $("#email-collect ul").removeClass("bouncing-ball");
		  $.growl.notice({title: "rendezvous.ci",  message: "Vous êtes bien enregistré. A très bientôt !", duration : 5000});
      $('body,html').animate({scrollTop: $('#facebook').offset().top}, 'slow');
			ga('send', 'event', 'emailSubscription', 'homePageEmailSubscriptionButton', 'Tenez-moi informé(e)');
    },
      error: function(user, response) {
		    $("#email-collect ul").removeClass("bouncing-ball");
				console.log(response);
		    if(response.code === 202)
				{
		      $.growl.notice({title: "rendezvous.ci",  message: "Vous êtes bien enregistré. A très bientôt !" });
          $('body,html').animate({scrollTop: $('#facebook').offset().top}, 'slow');
				}
        else
				{
		      $.growl.error({title: "rendezvous.ci",  message: "Veillez saisir une adresse email correcte ou réessayez plus tard." });
				}
    }}); 
}
