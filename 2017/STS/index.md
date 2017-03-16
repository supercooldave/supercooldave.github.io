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
| Tuesday, 21/3 | Project Management lecture, Scrum, Kanban, project management tools: Git, Trello, Taiga, Slack. | Tobias Wrigstad, Kiko Fernandez (guests) |
| Friday, 24/3 | Groups pitch their  project ideas. | Dave, Davide, Anton |
| Monday, 27/3 | Web Technology lecture             | Davide |
| Thursday, 29/3 | Security lecture  | Björn Victor (guest) |
| Tuesday, 3/4 | Usability lecture   | Anton |
| Monday, 25/5 | Intermediate presentations  |  |
| Friday, 2/6  | Final presentations         |  |

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
application, including the database. Development will take place
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



The project involves a number of compulsory deliverables. 
Typically these involve a small amount of quality work, and are primarily to obtain
feedback on the work in progress and to help structure your work. 
Producing these deliverables should not be stressful.
Most deliverables can be reused, in updated form, in the final report.

All **deadlines are 18:00** on the day mentioned, except when the due date 
corresponds to a contact moment in the schedule.
The deliverables are summarised in the table below.
Those marked with a star (\*) occur during a scheduled contact moment.

**All deadlines except those marked with a star (\*) and the thesis 
submissions are negotiable!!!!**


| Number | Title   | Due Date |  Week |
| -------|---------|----------|-------|
| D1     | Pitch \* |  Friday, March 24 | 12 |
| D2 | Requirements | Friday, March 31 | 13 |
| D3 | Project Plan | Tuesday, April 4 | 14 |
| D4 | System Design and Test Plan | Thursday, April 13 | 15 |
| D5 | User Profiling | Wednesday, April 19 | 16 |
| D6 | Security and Privacy Analysis | Wednesday, April 19 | 16 |
| D7 | Intermediate Presentation \* | Tuesday, April 25 | 17 |
| D8 | Usability Assessment | Monday, May 15 | 20 |
| D9 | Draft Thesis | Monday, May 22 | 21 |
| D10 | Final Presentation \* | Friday, June 2 | 22 |
| D11 | Thesis | Friday, June 2 | 22 |
| D12 | Code | Friday, June 3 | 22 |
 

 
**Note that the thesis may be handed in one week later,
technically this is after the end of semester.**

Although these deliverables and their order may give the impression
that the project should be developed following the waterfall model
this is not the case. Instead, you should follow an agile process.
Consider the documents as fluid, changing over time as you learn
more about the system-under-development. The deliverables can be
seen as a snapshot of work in progress, submitted for comment
and feedback.

#### Structure of deliverables

Deliverables may be submitted as a document or, after negotiation with the
lecturer, delivered as a short presentation  (10--15 minutes). 

Textual deliverables should be properly structured documents,
with an introduction, a description of the structure of the document, 
the body of the document, and a conclusion. As a rough estimate, there
should be 2-5 pages of content in the deliverables, not including intro, conclusion,
references, and images.

Presentations need to be to the point and thus must focus on core issues.

Presentations offer the advantage of immediate feedback. The disadvantage is that
you will miss out on feedback on your writing, and you will not build up
material to later use in your thesis chapters.

### D1: Pitch

**Due: Lecture on Friday, March 24 (wk 12)**
{: .blue}

Each group needs to come up with _up to_ 3 project ideas
or variations on single idea.
These need to be explained and "sold" in
    a pitch of up to 10 minutes. Slides are optional.

During the pitch, team members should introduce themselves.

The pitch can be delivered by any subset of the team, including just one member
or all members.


### D2: Requirements 

**Due: Friday, March 31 (wk 13)**
{: .blue}

During the second week of the course, project teams will need to determined
the requirements of the system. Requirements must consider both functional
and non-functional aspects.  Teams will also need to identify the intended users
of the system, and where possible find such users and communicate with them
about the requirements, 

This deliverable will consist of:

1. An overview of the system-under-design.
2. An overview of the expected users.
3. An overview of how you would expect to make money from the software,
        if relevant.
4. A list of features that the system must, should and could exhibit.
5. A list of non-functional constraints on the system, such as those
        related to security, privacy, performance, quality of service, and so forth.       

All team members should contribute to this deliverable.

### D3: Project Plan

**Due: Tuesday, April 4 (wk 14)**
{: .blue}

This deliverable should include:

1. A detailed (but preliminary) project plan covering all activities 
     and all members.
2. Dependencies between activities.
3. Estimated times of activities.
4. Estimated resources (people) for each activity.

The deliverable could be based on a Gantt chart plus descriptions of the
various activities, or it could be based on a snapshot of your
Trello/Taiga board.


The plan must include slack time at the end of term to account for 
delays that may occur. The plan must include time to learn what needs 
to be learned, and the writing of deliverables and theses.

The plan needs to be viewed as a living document, adapting
frequently to differences between projected and actual timing of tasks, and changing
directions of the team. Please save major versions of the plans so that you can 
see how it evolves. In the thesis, document major differences in planned and actual timing 
of tasks and try to account for why this happened.



### D4: System Design and Test Plan

**Due: Friday, April 13 (wk 15)**
{: .blue}

This deliverable consists of a high-level system design and a test plan. The deliverable
consists of four components:

*  **Site Map and UI Design**: A description of the user interface and
        its functionality, perhaps with Photoshop mock-ups.
        An overview of the expected flow between the pages 
        in your system. 
* **Data and System Specification**: A description of the data model
        underlying your system, perhaps using ER diagrams.
        A description of the architecture of the system,
        using UML diagrams, to capture the relationship between the major components
        of the system.
* **Test Plan**: A description of how you plan to systematically test your
        system.
* **Glossary**: A dictionary of the key terminology used in describing your
        system. For example, if your system records exercise activities which
        you describe as an _event_, your glossary should state that
        an _event_ is a record of an exercise activity.        

The system design should support a clean separation between the front-
and back-end functionality.



### D5: User Profiling

**Due: Wednesday, April 19 (wk 16)**
{: .blue}

This deliverable aims to answer the question: _Who are your users?_
and to provide a plan for evaluating the usability of your system.

This can be answered by conducting interviews with potential users
and through group discussion.


The document should include:

1. Profiles of the intended users, along with personas of each intended user group. 
2. Ideas on on how to do a usability test of the system, which involves a 
       cognitive walk through of your own system design. In other words, what must
       a (test) user do to help you evaluate your system. This will include
       several scenarios the user needs to go through, or tasks the user needs
       to complete.


### D6: Security & Privacy Analysis


**Due: Wednesday, April 19 (wk 16)**
{: .blue}

Each team needs to conduct an analysis of the security and privacy threats
associated with their chosen project. 

The deliverable should include:

1. A list of _relevant_ security and privacy threats.
2. A shorter list of which of these are the most pressing to address
        --- the 
        key question to ask is *which security and privacy threats most
                affect our system's users?*
3. A description of how these security and privacy threats can 
        be mitigated.

Important: Each threat should be described in terms of an example relevant for the
system-under-development, not in generic terms. 

Lists of various security and privacy threats can be found by looking
at methodologies [STRIDE](https://www.cs.berkeley.edu/~daw/teaching/cs261-f12/hws/Introduction_to_Threat_Modeling.pdf) and [LINDDUN](https://distrinet.cs.kuleuven.be/software/linddun/), though you do not need to follow these methodologies in any detail.
Also consider *ethical issues* related to the retention of private user data.



### D7: Intermediate Presentation 

**Due: Monday, April 25 (wk 17)**
{: .blue}

The intermediate presentation gives teams the opportunity to present
their work in progress --- details of what the presentation should contain
are found below. The slot for each presentation is 45 minutes 
(about 30 minutes of content, 10 minutes for questions, 5 minutes of slack).


Each team will have another team acting as opposition.
For this presentation, the opposition does not need to prepare
in advance, but does need to ask questions at the end
of the presentation. 

We will provide feedback on your presentations to help improve for
future presentations.

Presentations can be given by some subset of your team, including
just one member or all members. All team members should be present
at the introduction of the talk and should reappear for questions.

 

### D8: Usability Assessment

**Due: Monday, May 15 (wk 20)**
{: .blue}

Conduct a usability study of another group's system with 
5 users matching intended users of that particular system. 
Make use of the other group's personas to determine which users 
to find. This report is to be handed in to the teaching staff 
as well  as to the group whose system has been tested.


The team who receives the usability assessment report needs to
address all usability flaws and report how they have been
address (or not, with reasons) in the final report.


### D9: Draft Thesis

**Due: Monday, May 22 (wk 21)**
{: .blue}

A draft of the thesis needs to be submitted so that the other team
can give feedback and use it as the basis for questions during the final
presentation. The most important requirement for this deliverable
is that the structure of the thesis is clear, via, for example, a table
of contents.



### D10: Final Presentation

**Due: Friday, June 2 (wk 22)**
{: .blue}

All projects are presented in a final seminar. Each team appointed an opposing 
team. 
Each presentation will take a 45 minute slot, divided as follows:

* 30 minutes of content, 
* 10 minutes questioning by opponent, 
* 5 minutes for other questions. 

The format of the presentation is discussed below.

Feedback will be given after the presentation, for the benefit of your
future presentations.

 

### D11: Thesis

**Due: Friday, June 2 (wk 22)**
{: .blue}

The final outcome of the course is a thesis describing the software system
developed. Each team will produce a single thesis together. 
The thesis  consists of project plan, technical specifications, business model,
processes taken, various kinds of analysis
(requirements, security, etc) done, etc. --- essentially,
updated versions of all deliverables ---  with added introduction, 
conclusion and appendices.

### D12: The Code

**Due: Friday, June 2 (wk 22)**
{: .blue}

Provide a link to your GitHub repository with read access permission 
given to `supercooldave`.

Ensure (from the start) that your repository is kept clean. 
Old versions of the software, experiments, etc, should be removed
or placed in some "old" directory.

Provide a `README.md` document to make navigation of the
repository easier.

Please **do not** produce a new repository for submission ---
we want to see your development history and the other statistics available
in GitHub.

Note: teams are permitted to borrow code from the
Internet and to use sites like [StackExchange](stackexchange.com) in order to
solve any technical issues that may arise. *All code borrowed from elsewhere
needs to be properly attributed to avoid problems of plagiarism.*  


## Guidelines for Presentations

### Presentation Content

Both presentations should cover the following topics, not necessarily in
this order.

* Goals of system: purpose and design objectives
* Expected users of the system and corresponding use cases
* Architecture diagram: system overview, UML diagrams, etc
* Major components and functionality
* Implementation: choice of tools, major challenges
* User interfaces: HCI issues
* Evaluation: experiments and results
* Discussion: lessons learned and (possible) future work
* Demo


### Recommendations for  Presentations


* Communication manager organises presentation and delagates parts (if desired).
* Test beforehand that your laptop and the projector communicate well 
        (the projector may have a different resolution that may affect screen shots and Powerpoint presentations).
* Rehearse the presentation and demo.
* The audience are your fellow students (not the assistents or  teacher).
* Take it slow, start from the beginning.
* You are by now very familiar with the project, the audience is not (even though
        they are working on the same topic)!
* Be selective, plan your timing. Include both non-technical and technical aspects.
* Understand everything you say --- don't say everything you understand.
* An ER diagram/UML diagram usually helps to clarify your terminology 
        (but you might want to omit most attributes for clarity).
* Demonstrate both regular use and incorrect use (error messages, failed login).
* Sell it! Show through verbal and (most importantly) nonverbal communication that you believe in yourself and in the system. Team members are not yet presenting
         still send nonverbal signals.
* Don't oversell it. Things that don't work (yet), don't work. Reflect on the product and say what could be improved (1 or 2 slides: this is mostly a point for the final discussion).
Comment on the process as well: how did your time plan work, what was hard, what did you learn? (1 or 2 slides: this is mostly a point for the final discussion).
* Include overview slides in your presentation to help listeners follow your
       story.


### Recommendations for the Opposition


The role of the opposition is to question the design choices 
made by the team being opposed, to ask for clarifications when there 
are misunderstandings, and to get more information about their project
than what is explicitly said in the report/presentation.

* All students must participate actively in the opposition.
* What are the strong aspects of the project? What could have been better (realistically)?
* What choices did the team make --- why?
* Comment both the presentation and the written report.
* Don't dig down into nitty-gritty details during the opposition ("In the first paragraph of page 5 ...") --- you can prepare list of issues and discuss them with the authors afterwards.


## Guidelines for Thesis


The thesis reports on the work you have done over the term.
It will include a description of your project, its design, its users,
the planning, and so forth. 

As a rough guideline, each student will contribute approximately 10--15 pages of text,
not including the appendix describing the individual contribution.


Here is an outline of what should be in the report. 
Note that the headings used here are generic, make your own more informative
headings.    You can change the order of sections: write in an order that 
feels natural, and does not require too many forward pointers. You can 
join or split sections.
The order in which you write the report is usually not the order of 
sections in the report. 

Write as you work on the project --- as paragraph or a page at a time --- 
and put things into place later; the deliverables force you to do this writing.

Anything that refers to code (methods, .php files) usually belongs in an appendix. 
Also extensive screen shots or use case diagrams belong in an appendix.

* **Abstract**
* **Table of contents**
* **Introduction**     
An introduction stating the broad idea,
and the context of the project (not STS IP is not the context).
* **Socio-economic aspects**  
What is your target user group? Why would they be interested?  
How will your system make money (if relevant)?
* **The user perspective** (Administrators are also users!)  
Use cases (what can a user do,  and how)?  
User interfaces.   
Graphical design (is it distinguishing, and attractive for your target group?)  
Do not forget incorrect use (error detection, informative error messages)!  
User involvement, focus group, etc. (this can also be put under "method")   
Motivate the choices that you made!  
* **Method**  
Time plan and outcome.   
Process of design and implementation.  
Working methods (work division, group dynamics, what was hard, ...)   
Why this (implementation) method was selected.
* **Database design**  
ER diagram + explanation + motivation of your choices.  
Tables, keys, ...  
How did the design evolve?
* **Technical solutions**  
Tools and components used (short description, references that you found useful)  
How things fit together (software architecture)  
Security
* **Evaluation**  
Testing methods used, test results (unit tests, system tests, user evaluations)  
Things you would need to fix before launching the site.  
Performance, scalability (would this work "for real"?)
* **Reflection**  
How did your process change over the term?  
What would you have done differently were you to start again?  
What hurdles held your team back? How would you get around them if
you could try again?  
(Perhaps reflection could be distributed across the relevant chapters,
rather than grouped here)
* **Conclusion**   
Further development: all the ideas that you had,
but didn't have time to implement, or that were too difficult with standard technology.  
Lessons learned
* **References** (see below)
* **Appendix**  
Each student needs to write 3 pages describing what their role
in the project was, what work they did, what text they wrote, and what they
learned during the project.


Try to avoid a chronological story where you are the stars: "We chose to do this project
because ...." Focus on the project, not yourselves. Also avoid writing things like
"This project was done for STS IP." Focus on the project, not the course.

### Formalities of the report


* You must write in English.
* To pass, the required level of English must be understandable, not so bad that it prevents us from reading the report.
* Use section numbers and page numbers.
* Include a table of contents.
* Use numbers and captions for figures and tables.
* Use footnotes for clarifying comments, not for references.
* References  
  In text: preferably short keys (\[12\], \[OsRi2011\]).  
  Endnotes: sorted on key.  
  For a paper reference: authors, year (month), how published.  
  For a web reference: URL, date visited, if possible: title, author/organisation.   
  Consult a style guide.
