var app = angular.module('cookieCalculator', []);

app.controller('ctrl', ['$scope', function ($scope) {
	$scope.buildings = [
		{
			name: 'Cursor',
			initial: 15,
			current: 0,
			desired: 0
		}, {
			name: 'Grandma',
			initial: 100,
			current: 0,
			desired: 0
		}, {
			name: 'Farm',
			initial: 1100,
			current: 0,
			desired: 0
		}, {
			name: 'Mine',
			initial: 12000,
			current: 0,
			desired: 0
		}, {
			name: 'Factory',
			initial: 130000,
			current: 0,
			desired: 0
		}, {
			name: 'Bank',
			initial: 1400000,
			current: 0,
			desired: 0
		}, {
			name: 'Temple',
			initial: 20000000,
			current: 0,
			desired: 0
		}, {
			name: 'Wizard Tower',
			initial: 330000000,
			current: 0,
			desired: 0
		}, {
			name: 'Shipment',
			initial: 5100000000,
			current: 0,
			desired: 0
		}, {
			name: 'Alchemy Lab',
			initial: 75000000000,
			current: 0,
			desired: 0
		}, {
			name: 'Portal',
			initial: 1000000000000,
			current: 0,
			desired: 0
		}, {
			name: 'Time Machine',
			initial: 14000000000000,
			current: 0,
			desired: 0
		}, {
			name: 'Antimatter Condenser',
			initial: 170000000000000,
			current: 0,
			desired: 0
		}, {
			name: 'Prism',
			initial: 2100000000000000,
			current: 0,
			desired: 0
		}, {
			name: 'Chancemaker',
			initial: 26000000000000000,
			current: 0,
			desired: 0
		}
	];
	$scope.shortNumbers = true;
	$scope.show10 = false;
	$scope.show50 = true;
	$scope.show100 = false;
	$scope.increments = [1, 10, 50, 100];
	$scope.incrementVal = $scope.increments[0];
	$scope.fabergeEgg = false;
	$scope.seasonSavings = false;
	$scope.santasDominion = false;
	$scope.divineDiscount = false;
	$scope.starterKit = false;
	$scope.starterKitchen = false;
	$scope.earthShatterer = false;
	$scope.fierceHoarder = false;

	$scope.increment = function (obj, field) {
		obj[field] += $scope.incrementVal;
	};

	$scope.decrement = function (obj, field) {
		obj[field] -= $scope.incrementVal;
		if (obj[field] < 0) {
			obj[field] = 0;
		}
	};

	$scope.priceDiff = function (obj, desired) {
		var sum = 0;
		for (var i = obj.current; i < desired; i++) {
			sum += Math.ceil(obj.initial * Math.pow(1.15, i));
		}
		return sum;
	};
}]);

app.filter('cookieNumber', ['$filter', function ($filter) {
	var intervals = [
		'',
		'',
		'M',
		'B',
		'T',
		'Qa',
		'Qi',
		'Sx',
		'Sp',
		'Oc',
		'No',
		'Dec',
		'UnD',
		'DuD',
		'TrD'
	];
	return function (number, isShortFormat) {
		if (!isShortFormat || Math.log10(number) < 6) {
			return $filter('number')(number);
		} else {
			var interval = Math.floor(Math.log10(number) / 3);
			var exponent = interval * 3;
			return $filter('number')(number / Math.pow(10, exponent), 3) + ' ' + intervals[interval];
		}
	}
}]);