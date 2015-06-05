'use strict';
angular.module('appService').controller('workController', function () {
	var vm = this;
	
	vm.workExps = {
			'row1' : {
		        'company' : 'ScotiaBank',
		        'employmentDate' : 'June 2015 - Present',
		        'location' : 'Toronto, Ontario',
		        'position': 'Senior J2EE Developer',
		        'summary' : 'Summary of work',
		        'details' :'Details',
		        'extraInfo': 'Some content',
		        'isCollapsed': true
		    },
		    'row2' : {
		    	'company' : 'IDS Management Inc',
		        'employmentDate' : 'June 2012 - June 2015',
		        'location' : 'Toronto, Ontario',
		        'position': 'Java Software Developer',
		        'summary' : 'Summary of work',
		        'details' :'Details',
		        'extraInfo': 'Some content',
		        'isCollapsed': true
		    },
		    'row3' : {
		    	'company' : 'IDS Management Inc',
		        'employmentDate' : 'June 2011 - June 2012',
		        'location' : 'Toronto, Ontario',
		        'position': 'Merchant Integration Engineer',
		        'summary' : 'Summary of work',
		        'details' :'Details',
		        'extraInfo': 'Some content',
		        'isCollapsed': true
		    },
		    'row4' : {
		    	'company' : 'IBM Canada',
		        'employmentDate' : 'April 2009 - August 2010',
		        'location' : 'Markham, Ontario',
		        'position': 'Rational Install Infrastructure Developer - Internship',
		        'summary' : 'Summary of work',
		        'details' :'Details',
		        'extraInfo': 'Some content',
		        'isCollapsed': true
		    }									
	};
	
});