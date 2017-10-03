angular.module('skillsLab').controller("DemonstrationViewController", function($scope, $interval) {

  var _this = this;

  _this.useCase4SelectedDate = "2017-10-03T20:18:05.075Z";
  _this.prepopulatedFromDateString = "2017-06-21T00:00:00.000Z";
  _this.prepopulatedFromDateObject = Date.parse("2018-05-29T00:00:00.000Z");
  _this.exampleMaximumDate = "2018-05-29T00:00:00.000Z";
  _this.exampleMinimumDate = "2017-06-21T00:00:00.000Z";

  _this.useCase1 = '<div fh-date-input \r\n\tng-model="demoCtrl.prepopulatedFromDateObject">\r\n</div>';
  _this.useCase2 = '<div fh-date-input \r\n\tng-model="demoCtrl.prepopulatedFromDateString">\r\n</div>';
  _this.useCase3 = '<div fh-date-input \r\n\tng-model="demoCtrl.changingDate">\r\n</div>';
  _this.useCase4 = '<div fh-date-input \r\n\tng-model="demoCtrl.useCase4SelectedDate" \r\n\tfh-max-date="dataCtrl.exampleMaximumDate">\r\n</div>';
  _this.useCase5 = '<div fh-date-input \r\n\tng-model="demoCtrl.useCase4SelectedDate" \r\n\tfh-min-date="demoCtrl.exampleMinimumDate">\r\n</div>';
  _this.useCase6 = '<div fh-date-input fh-required="true"></div>';
  _this.useCase7 = '<div fh-date-input fh-precision="month"></div>';
  _this.useCase8 = '<div fh-date-input fh-precision="year"></div>';

  _this.changingDate = new Date();


  function _aceLoaded(_editor) {
    _editor.setReadOnly(true);
    _editor.renderer.setScrollMargin(10, 10);
  }

  $interval(function() {
    //We're going to change the date by 10 days every 5 seconds.
    _this.changingDate = new Date(_this.changingDate);
    _this.changingDate.setDate(_this.changingDate.getDate() - 10);
  }, 5000);


  angular.extend(_this, {
    aceLoaded: _aceLoaded
  })

});