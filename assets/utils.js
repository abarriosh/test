 var Utils = function () {};

    Utils.prototype.randomNumber = function () {
      	var randomNumber = browser.execute(function(){
       		 return Math.floor((Math.random() * 10000000000) + 1);	
       	
       	      	})		 
       	
       	return randomNumber;

    };


     Utils.prototype.generateDate = function () {
      	
      //Create Date in Connexa Format
      var dateGenerated = browser.execute(function(){
      var date = new Date();
			var d  = date.getDate();
			var day = (d < 10) ? '0' + d : d;
			var m = date.getMonth() + 1;
			var month = (m < 10) ? '0' + m : m;
			var yy = date.getYear();
			var year = (yy < 1000) ? yy + 1900 : yy;

			return year+'-'+month+'-'+day;
		 })

       	return dateGenerated;
    };


    Utils.prototype.generateHour = function (afterMinutes) {
      
      var hourGenerated = browser.execute(function(afterMinutes){
      var date = new Date();
      var h  = date.getHours();
      var hour = (h < 10) ? '0' + h : h;
      var m = date.getMinutes() + parseInt(afterMinutes); 
      var minute = (m < 10) ? '0' + m : m;
      
      return hour+':'+minute;
      },afterMinutes);

        return hourGenerated;
    };

    exports.Utils = new Utils();
 

