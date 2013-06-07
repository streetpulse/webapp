App.Pulse = DS.Model.extend({
  nickName:  DS.attr('string'),
  zipCode: 	 DS.attr('string'),
  address: 	 DS.attr('string'),
  blockRank: DS.attr('number'),
  backgroundImageUrl: DS.attr('string'),
  week:      DS.belongsTo('App.Week'),
  day:       DS.belongsTo('App.Day')
});

App.Week = DS.Model.extend({
  paper:   DS.attr('dailyActivityForAWeek'),
  plastic: DS.attr('dailyActivityForAWeek'),
  garbage: DS.attr('dailyActivityForAWeek'),
  pulse:   DS.belongsTo('App.Pulse')
});

App.Day = DS.Model.extend({
  paper:   DS.attr('hourlyActivityForAWeek'),
  plastic: DS.attr('hourlyActivityForAWeek'),
  garbage: DS.attr('hourlyActivityForAWeek'),
  pulse:   DS.belongsTo('App.Pulse')
});