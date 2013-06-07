App.PulsesController = Ember.ArrayController.extend({
	itemController : 'pulse',
});

App.PulseController = Ember.ObjectController.extend({

	garbageHourly: function(){
		return  this.get('day').get('garbage');
	}.property('day'),

	paperHourly: function(){
		return  this.get('day').get('paper');
	}.property('day'),

	plasticHourly: function(){
		return  this.get('day').get('plastic');
	}.property('day'),

	garbageWeekly: function(){
		return  this.get('week').get('garbage');
	}.property('week'),

	paperWeekly: function(){
		return this.get('week').get('paper');
	}.property('week'),

	plasticWeekly: function(){
		return  this.get('week').get('plastic');
	}.property('week'),

	ordinalSuffix: function(){
		var suffix,
			num = this.get('blockRank') ,
			suffixArr = ["th", "st", "nd", "rd", "th"];
		return (suffixArr[(num-20)%10] || suffixArr[num] || suffixArr[0])
	}.property('blockRank'),


	imageUrl: function(){
		return "background-image:url('" + this.get('backgroundImageUrl') + "');";
	}.property('backgroundImageUrl')
});