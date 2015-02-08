//My data objects

var bio = {
    "name" : "Markus Arnold",
    "role" : "Programmer",
    "contacts" :
    	{
    		"github" : "markusstudent",
    		"email" : "markus.arnold@gtest.com",
    		"location" : "Munich (Germany)"
    	},
    "biopic" : "https://drnicoll.files.wordpress.com/2010/08/dr-evil.jpg",
    "welcomeMessage" : "Hello! This is Mr. Evil",
    "skills" : ["Programming", "French", "English"]
};

var work = {
	"jobs" : [
		{
			"title" : "Entrepreneur in Residence",
			"employer" : "Delivery Hero",
			"location" : "Sydney (Australia)",
			"dates" : "May 2012 until November 2012",
			"description" : "Helping to build up the marketing department"
		},
		{
			"title" : "Entrepreneur in Residence",
			"employer" : "European Media Holding",
			"location" : "Munich (Germany)",
			"dates" : "January 2014 until June 2014",
			"description" : "Developing new business opportunities"
		},
		{
			"title" : "Produktmanager",
			"employer" : "CHECK24",
			"location" : "Munich (Germany)",
			"dates" : "August 2013 until now",
			"description" : "Responsible for mobile website & the apps"
		}
	],
};

var projects = {
	"projects" : [
		{
			"title" : "Project 1",
			"dates" : "from 2013 - 2014",
			"description" : "This was my first project",
			"images" : [
				"http://www.solplus.co.uk/wp-content/uploads/2013/03/projectManagement.jpg"
			]
		},
		{
			"title" : "Project 2",
			"dates" : "from 2014 - 2015",
			"description" : "This was my second project",
			"images" : [
				"http://www.solplus.co.uk/wp-content/uploads/2013/03/projectManagement.jpg"
			]
		}
	]
};

var education = {
	"schools" : [
		{
			"name" : "University of St. Gallen",
			"location" : "St. Gallen",
			"degree" : 	"BA",
			"dates" : "2006 - 2010",
			"major" : "Business Administration",
			"url" : "http://www.unisg.ch/"
		},
		{
			"name" : "University of St. Gallen",
			"location" : "St. Gallen",
			"degree" : 	"MA",
			"dates" : "2010 - 2012",
			"major" : "Marketing",
			"url" : "http://www.unisg.ch/"
		},
		{
			"name" : "HEC",
			"location" : "Paris",
			"degree" : 	"MA",
			"dates" : "2012 - 2013",
			"major" : "Entrepreneurship",
			"url" : "http://www.hec.fr/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Nanodegree Front-End Web Developer",
			"school" : "Udacity.com",
			"dates" : "Nov 2014 until now",
			"url" : "https://www.udacity.com/course/nd001"
		}
	]
};


//my display functions

//show bio

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);

	$("#header").append(formattedName);


	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").append(formattedRole);


	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);

	$("#header").append(formattedGithub);

	$("#footerContacts").append(formattedGithub);


	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);

	$("#header").append(formattedEmail);

	$("#footerContacts").append(formattedEmail);


	var formattedLoc = HTMLlocation.replace("%data%", bio.contacts["location"]);

	$("#header").append(formattedLoc);

	$("#footerContacts").append(formattedLoc);


	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

	$("#header").append(formattedBioPic);


	var formattedWelMes = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedWelMes);


	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);

	};

}

work.display = function() {

	for (job in work.jobs) {
		
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedEmployerTitle);
	}
}


projects.display = function() {

	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[project].images.length > 0) {

			for (image in projects.projects[project].images) {

						var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

						$(".project-entry:last").append(formattedProjectImages);
			}
		}
	}
}



education.display = function() {

	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);

		formattedSchool = formattedSchool.replace("#", education.schools[school].url);

		$(".education-entry:last").append(formattedSchool);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$(".education-entry:last").append(formattedSchoolMajor);

	}

	for (course in education.onlineCourses) {

		$("#education").append(HTMLonlineClasses);

		$("#education").append(HTMLonlineStart);

		var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);

		formattedCourseTitle = formattedCourseTitle.replace("#", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedCourseTitle);

		var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

		$(".education-entry:last").append(formattedCourseSchool);

		var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

		$(".education-entry:last").append(formattedCourseDates);

	}
}


bio.display();

work.display();

projects.display();

education.display();


$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


function inName(name) {

	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);