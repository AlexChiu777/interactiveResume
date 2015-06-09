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
		        'summary' : 'During my time at IDS Management as a Software Developer, I\'ve experienced different aspects of the software development cycle. We serve as a middle-man service provider between our customers and merchants regulating the cashflow in-between. I managed configuring and maintaining internal databases, design and implentmenting new features, as well as providing additional fucntions to existing features. In this technical software rich environment, I was able to develop and further expand my skills and knowledge as a developer.',
		        'details' :'Details',
		        'extraInfo': [
		            "Designed, implemented, automated multiple core financial business-as-usual tasks using J2EE web service package. Such as processing daily payouts, generating bank batch files, and providing a user-friendly interface for Merchant Integrations",
		            "Strategically organized and implemented the following payment related products built with J2EE technologies (Guest Customer checkout, ACH product integration and reconciliation, Citadel Instant Banking real-time for Global payment integration)",
		            "Provided in-depth back-end system knowledge including and not limited to organized java development, business services, models, data interfaces and design patterns within the company’s payment solution products (iDebit, Instadebit, VerifiedACH)",
		            "Experienced active mentor for individuals around the company for payment product structure details and day-to-day business as usual tasks",
		            "Actively participated in high level software development planning by providing expert-level relational SQL database knowledge and innovative recommendations",
		            "Handled and maintained foreign exchange designs across multiple products to ensure top tier quality control and consistency within various payment channels",
		            "Designed and deployed enhancements and/or features to our front-end customer and merchant portal using JSP, Javascripts, HTML, Resource bundles and Struts",
		            "Attended and participated in Agile daily scrum meetings to coordinate with the team to determine the current progress, resolves any issues and determining goals", 
		            "Utilized advanced SQL knowledge to produce efficient queries for the companies’ revenue and transactional reporting within our various payment solutions (e.g. joins, select sub queries, complex union queries, and embedded JDBC combination queries)", 
		            "Migrated Merchant facing portal from Struts framework to Spring MVC framework"],
		        'isCollapsed': true
		    },
		    'row3' : {
		    	'company' : 'IDS Management Inc',
		        'employmentDate' : 'June 2011 - June 2012',
		        'location' : 'Toronto, Ontario',
		        'position': 'Merchant Integration Engineer',
		        'summary' : 'After graduating from University, the Merchant Integration Engineer opportunity started me off with learning the basics of a financial system. I was given tasks specifically to learn how systems interact between API and to solve any issues during integration. Within this role, I was able to quickly pickup Structured Query Language (SQL) and later led to my advancement in the company to a Software Developer.',
		        'details' :'Details',
		        'extraInfo': [
		        	"Regulated and completed daily, weekly, monthly, yearly tasks in a professional manner",
		        	"Actively investigated and terminated fraud suspected customer accounts",
		        	"Maintained an active reconciliation report with the company supported banks to control the in/out flows of money",
		        	"Acquired  in-depth IBM DB2 SQL knowledge from daily interactions and operations on a relational transaction database",
		        	"Handled, maintained, and improved present day payment processing system to work with business requirements",
		        	"Provided professional assistance to a variety of internal departments such as accounting, customer service, merchant service, and the development team",
		        	"Integrated countless merchants into our staging environment built with J2EE technologies and migrated them to production after successful end-to-end testing",
		        	"Generated business-valued reports to provide customer, revenue, and transaction statistics"],
		        'isCollapsed': true
		    },
		    'row4' : {
		    	'company' : 'IBM Canada',
		        'employmentDate' : 'April 2009 - August 2010',
		        'location' : 'Markham, Ontario',
		        'position': 'Rational Install Infrastructure Developer - Internship',
		        'summary' : 'IBM Canada provided a great internship program where I was exposed into working in a enterprise environment. The experience of meeting real working individuals, be able to see their perspective and work alongside them was extremely valuable to my career. Within IBM, I was employed under the Rational products build team where we utilized Ant scripts to automate building/ testing Rational products. Specifically I was responsible for command line installation of the IBM Installation Manager and other Rational products. The process also includes uninstallation of the products to rollback the environment.',
		        'details' :'Details',
		        'extraInfo': [
		            "Maintained a working Apache Ant infrastructure for the CDI install team to create user interface builds for most Rational products (including Rational Application Developer)",
		            "Identified and corrected immediate build script issues related to the infrastructure for others (such as flawed programs, incorrect commands)",
		            "Developed new utilities with the combination of Bash Shell, Ant, and Java to coordinate disk cleanup tasks and the generation of disk images",
		            "Adopted new infrastructure from another team to enhance a more user-friendly product delivery method for IBM customers",
		            "Completed various functional verification testing by installing products, changing configurations, upgrading products, and rolling back products",
		            "Participated efficiently in scrum meetings in an Agile Software Development environment and maintained a working weekly progress with IBM’s Rational Team Concert product",
		            "Took initiative to research and developed a new AJAX Dojo internal website for displaying and building drivers displaying current products for the team",
		            "Completed and achieved certification on IBM DB2 SQL Fundamentals certification"],
		        'isCollapsed': true
		    }									
	};
	
});