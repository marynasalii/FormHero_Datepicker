angular.module('skillsLab').directive('fhDateInput', function ($filter) {
    return {
        scope: {
            ngModel: '=?',
            fhMaxDate: '=?',
            fhMinDate: '=?'
        },
        link: function (scope, elem, attrs, ngModel) {
            // if not Date - create one
            if (Object.prototype.toString.call(scope.ngModel) != '[object Date]') {
                let currentDate = new Date(scope.ngModel);
                scope.ngModel = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate());
            }

            scope.checkIfMax = function () {
                if (scope.ngModel.getTime() > scope.fhMaxDate.getTime()) {
                    alert("Choosen date is too big!");
                    scope.ngModel = "";
                }
            }

            scope.checkIfMin = function () {
                if (scope.ngModel.getTime() < scope.fhMinDate.getTime()) {
                    alert("Choosen date is too small!");
                    scope.ngModel = "";
                }
            }

            scope.$watch('ngModel', function () {
                if (scope.fhMaxDate) {
                    scope.fhMaxDate = new Date(scope.fhMaxDate);
                    scope.checkIfMax();
                } 
                if (scope.fhMinDate){
                    scope.fhMinDate = new Date(scope.fhMinDate);
                    scope.checkIfMin();
                }
            });
        }
    };

});