// Javascript for calculation

var App = {
	launch : function() {
		App.getName();
		App.getEmail();
		App.getTotal();
	},

	getName : function() {
		var name = document.getElementById("name").value;

	},

	getEmail : function() {
		var email = document.getElementById("email").value;
		
	},

	getTotal : function() {
		let favorite = [];
		let total = 0;
		$.each($("input[name='tea']:checked"), function() {
			favorite.push($(this).val());
		});
		for ( var i in favorite) {
			total += parseFloat(favorite[i]);
		}
		if (total != 0) {
			$("#payment").html(total); 
			$(".displayText").css('display', 'inline-block');
		} else {
			alert("Please select some item(s)");
		}
	}

};
