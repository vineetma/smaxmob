myApp.service('Department', function() {
	var options = [ {
		name : 'Electronics',
		value : '1'
	}, {
		name : 'Mechnical',
		value : '2'
	}, {
		name : 'Civil',
		value : '3'
	} ];
	this.getIndexByvalue = function(val) {
		for ( var i = 0; i < options.length; i++) {
			if (options[i].value == val) {
				return i;
			}
		}
	};
	this.getOptions = function() {
		console.log("Options", options);
		return options;
	};
});
myApp.service('Section', function() {
	var options = [ {
		name : 'A',
		value : '1'
	}, {
		name : 'B',
		value : '2'
	} ];
	this.getIndexByvalue = function(val) {
		for ( var i = 0; i < options.length; i++) {
			if (options[i].value == val) {
				return i;
			}
		}
	};
	this.getOptions = function() {
		return options;
	};
});
myApp.service('Semester', function() {
	var options = [ {
		name : 'Semester-1',
		value : '1'
	}, {
		name : 'Semester-2',
		value : '2'
	},{
		name : 'Semester-3',
		value : '3'
	},{
		name : 'Semester-4',
		value : '4'
	},{
		name : 'Semester-5',
		value : '5'
	},{
		name : 'Semester-6',
		value : '6'
	},{
		name : 'Semester-7',
		value : '7'
	},{
		name : 'Semester-8',
		value : '8'
	}, ];
	this.getIndexByvalue = function(val) {
		for ( var j = 0; j < options.length; j++) {
			if (options[j].value == val) {
				return j;
			}
		}
	};
	this.getOptions = function() {
		return options;
	};
});