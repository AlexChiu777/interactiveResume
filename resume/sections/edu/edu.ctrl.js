'use strict';

angular
		.module('appService')
		.controller(
				'educationController',
				function() {
					var vm = this;
					vm.educations = {
						'edu1' : {
							'name' : 'Ryerson University',
							'period' : 'Sept 2006 - April 2011',
							'Location' : 'Toronto, Ontario',
							'program' : 'Bachelor of Computer Engineering',
							'summary' : 'My education exposed me to various aspects of the software development life cycle process and provided opportunities where I can apply my knowledge. I\'ve taken multiple programming courses where I was able to learn about code structure, data structures, data manipulations and program efficiency. My education is valuable because it has helped me get into the mindset of innovcation and critical thinking while solving many life and work related problems.',
							'relevantCourses' : 'Operating Systems, Microprocessor Systems, HW/ SW Co-design Embedded Systems, Computer Organization and Architecture, Programming Languages, Object Orientated Analysis and Design, Software Engineering, and Computer Networks'
								
						},

						'edu2' : {
							'name' : 'Markham District',
							'period' : 'Sept 2002 - June 2006',
							'Location' : 'Markham, Ontario',
							'program' : 'High School',
							'summary' : 'An introduction education where I was able to experience computer programming for the first time and instantly became passionate about development. I\'ve had beginner courses in programming languages such as Pascal, Turing as well as Java.',
							'relevantCourses' : 'Computer and Information Science, Introduction to Computer Programming, Computer and Information Science II, Computer and Information Science III'
								
						}
					}

				});
