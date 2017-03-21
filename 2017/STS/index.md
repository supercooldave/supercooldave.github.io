<link rel="stylesheet" href="css/splendor.css">

<style>
tr:nth-child(even) {background-color: #f2f2f2}
th {
    background-color: #4CAF50;
    color: white;
}
.blue {
  color: blue;
}
</style>

# STS Independent Project 2017
{: .no_toc}

### Lecturer: Dave Clarke
{: .no_toc}

This document provides  information for  the  STS Independent Project course,
including details of the teaching staff, contact moments,
project requirements, project deliverables, and
suggested project team structure.

The course will provide you an opportunity to learn new IT techniques
by getting involved in a deep, technical project.
The project will involve programming, project management, communication,
brain storming, and much more.
You **will be required** to independently acquire new
knowledge in order to complete the project successfully.

- TOC
{:toc}

## Teaching Staff and Contact Moments



The teaching staff are:

  * Dave Clarke (`dave.clarke@it.uu.se`) --- lecturer.  
   Expertise: project management, security, programming, software design, ideas.
  * Anton Axelsson (`anton.axelsson@it.uu.se`) --- TA. 
   Expertise: project management, HCI, usability, programming, ideas.
  * Davide Vega D'Aurelio (`davide.vega@it.uu.se`) --- TA.  
  Expertise: project management, web technologies, programming, software design, ideas.
    

The main role of the teaching staff in this course are to provide
guidance, encouragement, inspiration and feedback. 
The feedback is provided
not to judge you, but to help you improve your work for later in the course and
in your future work. 

Apart from the explicitly scheduled sessions, the teaching staff will frequently
visit your lab to see how you are going, and  will be available for meetings.
It is your job to contact the desired member of staff and organise meetings
(based on their expertise and your preferences) when you need them  --- 
it is an independent project and you decide on the interaction model.
After initial rush and planning and requirements efforts, where the teaching staff 
will be very present, the project becomes completely your responsibility.


The following table lists all the course contact moments and their purpose.

| Date | Content | Lecturer |
|---|---|---|
| Monday, 20/3 | Introduction Lecture, Course Overview, Team formation, Visit Project Room | Dave |
| Tuesday, 21/3 | Project Management lecture, Scrum, Kanban, project management tools: [Git](github.com/), [Trello](https://trello.com/), [Taiga](https://taiga.io/), [Slack](http://slack.com). | Tobias Wrigstad, Kiko Fernandez (guests) |
| Friday, 24/3 | Groups pitch their  project ideas. | Dave, Davide, Anton |
| Monday, 27/3 | Web Technology lecture             | Davide |
| Thursday, 29/3 | Security lecture  | Björn Victor (guest) |
| Tuesday, 3/4 | Usability lecture   | Anton |
| Monday, 25/4 | Intermediate presentations  |  |
| Friday, 2/6  | Final presentations         |  |


#### Slack Channel

The Slack site [stsip.slack.com](https://stsip.slack.com/) will allow you to chat directly to the teaching and receive announcements from them. You will receive an invitation 
early in the course.

## Project Rooms

Rooms **ICT 1246** and **1446** are available for you for the entire term to
work on your projects together with your teams. You can organise the rooms how you
want (within reason). There will be machines there for you to use --- if not, these
can be ordered. The door is locked, and your student card or a code
will get you into these offices.



## Grading

The course is graded on a **U/G** scale. 
Examination is through active participation in the project, 
timely submission of deliverables, 
adequate opposition during presenations, and approval of the final report.
You will be giving feedback on your deliverables, 
and in the case of an insufficient result, you will be 
given the chance  to resubmit the relevant components. 



## The Project

The course involves  an extensive software development project. 
You need to decide the topic of the project.
The project will be developed in teams of 5-7.

### Requirements

The following are constraints on the grand idea underlying your project,
phrased
in terms of compulsory requirements (MUST), desired requirements (SHOULD),
and possible requirements (COULD).


 * The system MUST be a web information system --- a web front end connected to
a server with a database --- or a smart phone app.  
The database will probably contain users and products, 
for instance.  
 * If the system is a web app, it MUST provide a responsive interface, that is, it must automatically adapt
to desktop and mobile devices.  
 * The system MUST support user accounts, automated user registration,
 and logging in, along with the appropriate security
support. The service provided by the system MUST be connected to user accounts,
and allow users to connect to each other.
Administrator log in and associated functionality MUST be provided.  
 *  The system MUST have a social component (social involvement, social engineering). 
The system MUST utilise the connections between users.
This COULD be realised by having the system connect via a social networking API
to Facebook  or Twitter.  
 * The system MUST be involve some technical challenges.  
 * The system SHOULD  be based on a (somewhat) realistic business idea.  
 * The system does not have to be original (almost anything that you could think of is on the web anyway), but it SHOULD have some original aspect.  
 * The system SHOULD present an attractive user interface to
        ``regular'' users.  
 * The system COULD source data from the web.  
 * The system COULD be, in part, a mashup or integration of other services.  
 * The system COULD support and utilise geolocation, perhaps with Google Maps
or Open Street Map integration.  
 * The system COULD generate a lot of data that could be useful and interesting to
analyse.  
 * The system COULD provide support to visualise the data generated, using existing
visualisation tools.  
 * You MUST think big.  


Perhaps you could ask yourselves _What is missing in your lives?_
Allow the following keywords to guide you: social software, 
crowd sourcing, human computation, volunteer computation, ...



### Technical Constraints


There are no constraints about what language you implement your system in. 
You could consider a framework such as [Django](https://www.djangoproject.com/)
(for Python) or Ruby on Rails 
(for Ruby), or use  Apache, MySQL and PHP (they come in a package like 
WAMP, MAMP or LAMP --- the W, M and L stand for Windows, Mac, and Linux, respectively).
You can use a NoSQL database like MongoDB, a cloud-based database like Google Firebase, whatever.
Last year teams used, in addition: Xamarin, Bootstrap, Less, Angular JS, Java,
Javascript.

The choice is yours, based on what you want to learn --- but decide quickly.


## Teams

Teams will ideally consist of 6 members --- the class will be split into
roughly 6 teams.

Each team member will need to take on a number of roles,
and each role has certain responsibilities. Some roles are
small, some are large. Not all roles may be relevant to each
team. Roles will need to be distributed among the team
members at the start of the course or as needed.
It is important that each member who is doing what.

We stress that **teams need to be flexible** regarding what roles 
various members take, and these should change as the requirements
of the project demands.

Every team member needs to be a developer, focussed either on
the front- or back-end (or both). Other important roles to assign
now are: **project manager**, and
**usability expert**. 


### Major Roles

#### Management

 
The **project manager** (= product owner) is primarily responsible for 
task formulation (which features to implement, priorities), planning, 
task tracking and follow up, 
setting deadlines, intra-team communications, and communicating with the teaching staff.
*Note that any student can ask for help at any time.  
Group questions may be coordinated through the project manager.*
The project manager needs to focus less on
the details of the product and more on the ability to navigate the plan. 
Planning needs to include slack time, and time for team members to gain new knowledge.
One of the primary skills required by the project manager is the ability to delegate.
The project manager has the final say in the decision-making process --- this is
important to avoid deadlocked debates.
 

> The  team needs to ensure that **exactly** one person
 is in charge, to ensure that decisions are made when they need to 
 be made. 
  
 
The **communications manager** is responsible for presentations, 
communications with other teams (such as when doing usability assessments), 
preparing reports, and, if you have an external client interested in your work,
communicating with that client. 
This is not to say that the communications manager does all the work on these
presentations and reports. The communications manager is in charge of delegating  to the appropriate other members of the team.




#### Usability 

The usability role
investigates intended users, making personas, and does interviews and 
testing with users. 
It cooperates with UI designer(s) and the front-end 
developers to make a usable interface to a useful system by performing 
usability assessments during development. 


#### Front-End Developer


Front-end developers will set up the client side of
the application, including the HTML for the web pages,
styling via CSS, aspects of Django, and interaction using Javascript. 
The front-end developers will interact with the 
UI Designer and the Usability team, along with
the back-end developers.
                    
#### Back-End Developer

The back-end developers will set up the server side of the 
application, including the database. 
Development will take place
using Django or PHP, plus SQL and the like.


### Minor Roles


In addition to these core positions, a number of other roles that may need to
be filled or shared: 

*  security expert
*  privacy expert 
*  visualisation expert --- if any data needs to be visualised
* test data generator --- if your system collects data from a large number
        of users, you'll need to generate mock data until you get users
* database designer
* data modeller
* UI designer --- design the visual appearance of the web site using Photoshop
* software designer --- aim for a clear separation between 
        front- and back-end functionality
* technical manager --- in charge of getting software installed,
         setting up github, etc.
* other  --- maybe something specific to your chosen domain.


### Team Identity

Think of your team as a small company. Find a snappy name for your
team and your product. Consider developing a team logo and colour scheme.
Use the colour scheme and logo in your software, and all deliverables.
Consider developing a
document format  for all of
your deliverables, presentations, and final thesis.


## Deliverables

See  [Deliverables](deliverables.html) document.

