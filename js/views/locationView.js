//-----------------------------------------
App.PulsesView = Ember.View.extend({
  classNames: 	['application-container']
  //controller: 	App.pulsesController,  
});

//-----------------------------------------
App.PulseView = Ember.View.extend({
    templateName: 'pulse',
    classNames:   ['pulse-container'],


   /*swipeOptions: {
      direction: Em.OneGestureDirection.Left | Em.OneGestureDirection.Right,
      cancelPeriod: 100,
      simultaneously: true,
      swipeThreshold: 10
    },

    touchMove: function(event) {
      //event.preventDefault();
    },

    swipeEnd: function(recognizer, evt) {
      var direction = recognizer.get('swipeDirection');

      if (direction === Em.OneGestureDirection.Right) {
        //alert("right");
        //window.scrollBy(-300,0);
        window.scrollBy(-300,0);


      } else if (direction === Em.OneGestureDirection.Left) {
        //alert("left");
        window.scrollBy(300,0);
      }
  },*/



    summaryData : [
              {
                value : 100, color : "#009933" //green
              },
              {
                value : 140, color : "#0066CC" //blue
              },
              {
                value : 120, color : "#663399" //purple
              }
            ],

    weeklyData :  {
        labels  : ["Monday" , "Tuesday", "Wednesday", "thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
        {
          //GARBAGE
          fillColor : "rgba(102, 51, 153,1)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [10,10,10,10,10,10,10]
        },
        {
          //PLASTIC
          fillColor : "rgba(0,153,51,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [0,0,0,0,0,0,0]
        },
        {
          //PAPER
          fillColor : "rgba(0,102,204,1)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : [0,0,0,0,0,0,0]
        }
      ]
    },
    

    dailyData : {
        labels : ["0 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"],
        datasets : [
            {
              type:"plastic",
              fillColor : "rgba(0,153,51,1)",
              strokeColor : "rgba(220,220,220,1)",
              pointColor : "rgba(220,220,220,1)",
              pointStrokeColor : "#fff",
              data : [10,10,10,10,10,10,10,10,10,20,40,50,10,10,10,10,10,10,10,10,10,10,10,10]
            },
            {
              type:"garbage",
              fillColor : "rgba(102, 51, 153,1)",
              strokeColor : "rgba(220,220,220,1)",
              pointColor : "rgba(220,220,220,1)",
              pointStrokeColor : "#fff",
              data : [10,10,20,40,50,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
            },
            {
              type:"paper",
              fillColor : "rgba(0,102,204,0.8)",
              strokeColor : "rgba(151,187,205,1)",
              pointColor : "rgba(151,187,205,1)",
              pointStrokeColor : "#fff",
              data : [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,30,40,60,10]
            }
            ]
    },
  



    didInsertElement: function(){

    

            if(document.documentElement.scrollHeight<window.outerHeight/window.devicePixelRatio)
               document.documentElement.style.height=(window.outerHeight/window.devicePixelRatio)+'px';
   
            //setTimeout(
              window.scrollTo(1,1);
              //,0);

            //if(navigator.userAgent.match(/Android/iPhone/)){
                window.scrollTo(0,1);
            //}


            

      


      var today = new Date();
      var dateDisplay = Array();
      for($i = 0 ; $i <7; $i++ )  {
        this.weeklyData.labels[$i] = moment().subtract('days', 7-$i).format("Do");
        dateDisplay[$i] = moment().subtract('days', 7-$i).format("Do");
      }

        
      var garbageDay = this.content.get('garbageWeekly');
      var paperDay   = this.content.get('paperWeekly');
      var plasticDay = this.content.get('plasticWeekly');
      this.summaryData[0].value = garbageDay.ago7+garbageDay.ago6+garbageDay.ago5+garbageDay.ago4+garbageDay.ago3+garbageDay.ago2+garbageDay.ago1;
      this.summaryData[1].value = paperDay.ago7+paperDay.ago6+paperDay.ago5+paperDay.ago4+paperDay.ago3+paperDay.ago2+paperDay.ago1;
      this.summaryData[2].value = plasticDay.ago7+plasticDay.ago6+plasticDay.ago5+plasticDay.ago4+plasticDay.ago3+plasticDay.ago2+plasticDay.ago1;
      var summaryContext = $("#recycling-donut").get(0).getContext("2d");


      
      var garbageHour = this.content.get('garbageHourly');
      var paperHour = this.content.get('paperHourly');
      var plasticHour = this.content.get('plasticHourly');

      this.dailyData.datasets[0].data  = [plasticHour.h0,plasticHour.h1,plasticHour.h2,plasticHour.h3,plasticHour.h4,plasticHour.h5,plasticHour.h6,
                                          plasticHour.h7,plasticHour.h8,plasticHour.h9,plasticHour.h10,plasticHour.h11,plasticHour.h12,plasticHour.h13,
                                          plasticHour.h14,plasticHour.h15,plasticHour.h16,plasticHour.h17,plasticHour.h18,plasticHour.h19,plasticHour.h20,
                                          plasticHour.h21,plasticHour.h22,plasticHour.h23
                                         ];
      this.dailyData.datasets[1].data  = [garbageHour.h0,garbageHour.h1,garbageHour.h2,garbageHour.h3,garbageHour.h4,garbageHour.h5,garbageHour.h6,
                                          garbageHour.h7,garbageHour.h8,garbageHour.h9,garbageHour.h10,garbageHour.h11,garbageHour.h12,garbageHour.h13,
                                          garbageHour.h14,garbageHour.h15,garbageHour.h16,garbageHour.h17,garbageHour.h18,garbageHour.h19,garbageHour.h20,
                                          garbageHour.h21,garbageHour.h22,garbageHour.h23
                                         ];

      this.dailyData.datasets[2].data  = [paperHour.h0,paperHour.h1,paperHour.h2,paperHour.h3,paperHour.h4,paperHour.h5,paperHour.h6,
                                          paperHour.h7,paperHour.h8,paperHour.h9,paperHour.h10,paperHour.h11,paperHour.h12,paperHour.h13,
                                          paperHour.h14,paperHour.h15,paperHour.h16,paperHour.h17,paperHour.h18,paperHour.h19,paperHour.h20,
                                          paperHour.h21,paperHour.h22,paperHour.h23
                                         ];

      
      
      this.weeklyData.datasets[0].data = [garbageDay.ago7,garbageDay.ago6,garbageDay.ago5,garbageDay.ago4,garbageDay.ago3,garbageDay.ago2,garbageDay.ago1];
      this.weeklyData.datasets[1].data = [plasticDay.ago7,plasticDay.ago6,plasticDay.ago5,plasticDay.ago4,plasticDay.ago3,plasticDay.ago2,plasticDay.ago1];
      this.weeklyData.datasets[2].data = [paperDay.ago7,paperDay.ago6,paperDay.ago5,paperDay.ago4,paperDay.ago3,paperDay.ago2,paperDay.ago1];
      var weekContext    = $("#weekly-chart").get(0).getContext("2d");
      var dailyContext   = $("#daily-chart").get(0).getContext("2d");



      
      var summaryChart   = new Chart(summaryContext).Doughnut(this.summaryData, {scaleFontColor : "#FFFFFF",animationSteps:40});      
      var weeklyChart    = new Chart(weekContext).Line(this.weeklyData,{ scaleOverride : true,  scaleSteps : 1,scaleStepWidth:250,scaleStartValue:0, pointDotRadius: 1,  scaleFontColor : "#FFFFFF",  scaleGridLineColor : "rgba(0,0,0,.08)",animationSteps:2});
      var dailyChart     = new Chart(dailyContext).Line(this.dailyData,{pointDotRadius: 0, animation : true, scaleFontColor : "#FFFFFF",animationSteps:2});
      


      

    

             
             
           //});
//      console.log();
    }

});
