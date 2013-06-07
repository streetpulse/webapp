//-------------------------------------
App = Ember.Application.create({
  LOG_TRANSITIONS: true
});


//-------------------------------------
App.Store = DS.Store.extend({
	adapter: DS.RESTAdapter
});


//-------------------------------------
DS.RESTAdapter.reopen({
  namespace: 'api/1'
});


//-------------------------------------
DS.RESTAdapter.registerTransform('dailyActivityForAWeek', {

  serialize: function(value) {
  	console.log("sending a week");
    return [value.get('ago7'), 
    		value.get('ago6'),
    		value.get('ago5'),
    		value.get('ago4'),
    		value.get('ago3'),
			value.get('ago2'),
			value.get('ago1')
			];
    },

  deserialize: function(value) {
  	console.log("creating a week");
    return Ember.create({ ago7: value[0],
    					  ago6: value[1],
    					  ago5: value[2],
    					  ago4: value[3],
    					  ago3: value[4],
    					  ago2: value[5],
    					  ago1: value[6]
      });
    }
});

//-------------------------------------
DS.RESTAdapter.registerTransform('hourlyActivityForAWeek', {

  serialize: function(value) {
  	  	console.log("sending a day");
    return [value.get('h0'), 
    		value.get('h1'),
    		value.get('h2'),
    		value.get('h3'),
    		value.get('h4'),
			value.get('h5'),
			value.get('h6'),
			value.get('h7'),
			value.get('h8'),
			value.get('h9'),
			value.get('h10'),
			value.get('h11'),
			value.get('h12'),
			value.get('h13'),
			value.get('h14'),
			value.get('h15'),
			value.get('h16'),
			value.get('h17'),
			value.get('h18'),
			value.get('h19'),
			value.get('h20'),
			value.get('h21'),
			value.get('h22'),
			value.get('h23')
			];
    },

  deserialize: function(value) {
  	console.log("creating a day");
    return Ember.create({ h0: value[0],
    					  h1: value[1],
    					  h2: value[2],
    					  h3: value[3],
    					  h4: value[4],
    					  h5: value[5],
    					  h6: value[6],
    					  h7: value[7],
    					  h8: value[8],
    					  h9: value[9],
    					  h10: value[10],
    					  h11: value[11],
    					  h12: value[12],
    					  h13: value[13],
    					  h14: value[14],
    					  h15: value[15],
    					  h16: value[16],
    					  h17: value[17],
    					  h18: value[18],
    					  h19: value[19],
    					  h20: value[20],
    					  h21: value[21],
    					  h22: value[22],
    					  h23: value[23]
      });
    }
});



