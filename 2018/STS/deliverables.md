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


## Deliverables
{: .no_toc}



The project involves a number of totally optional deliverables, with completely
flexibly guidelines.
 
Typically these involve a small amount of quality work, and are primarily to obtain
feedback on the work in progress and to help structure your work. You can produce a document for these deliverables, or just have a discussion with Dave or Davide.

Producing these deliverables should not be stressful.

Most deliverables can be reused, in updated form, in the final report.


- TOC
{:toc}


All deadlines are purely guidelines, except for the deliverables marked
with a star (\*).


| Number | Title   | Due Date |  Week | Obligatory |
| -------|---------|----------|-------|------------|
| D1     | Pitch |  Friday, March 23 | 12 | Yes |
| D2     | Requirements |  | 13 | No |
| D3     | Project Plan |  | 14 | No |
| D4     | System Design and Test Plan |  | 15 | No |
| D5     | User Profiling |  | 16 | No |
| D6     | Security and Privacy Analysis |  | 16 | No |
| D7     | Intermediate Presentation\* | Thursday, April 26 | 17 | Yes |
| D8     | Usability Assessment |  | 20 |  No |
| D9     | Draft Thesis |  | 21 | No |
| D10    | Final Presentation\* | Friday, May 31 | 22 | Yes |
| D11    | Thesis\* |  | 22 | Yes |
| D12    | Code\* |  | 22 | Yes |
 

 
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

**Due: Lecture on Friday, March 23 (wk 12)**
{: .blue}

Each group needs to come up with _up to_ 3 project ideas
or variations on single idea.
These need to be explained and "sold" in
    a pitch of up to 5 minutes (per group). Slides are optional.

During the pitch, team members should introduce themselves.

The pitch can be delivered by any member(s) of the team.

### D2: Requirements  

**Due: Friday Week 13**
{: .blue}

During the second week of the course, project teams will need to determined
the requirements of the system. Requirements must consider both functional
and non-functional aspects.  Teams will also need to identify the intended users
of the system, and where possible find such users and communicate with them
about the requirements, 

This deliverable will consist of:

1. An overview of the system-under-design.
2. A brief overview of the expected users.
3. A list of features that the system must, should and could exhibit. For example,
  *The system should allow users to record the amount of hours they sleep on a daily basis.*
4. A list of non-functional constraints on the system, such as those
        related to security, privacy, performance, quality of service, and so forth. 
5. An overview of how you would expect to make money from the software,
        if relevant.
    

All team members should contribute to this deliverable.

### D3: Project Plan

**Due: Wednesday Week 14**
{: .blue}

This deliverable should include:

1. A detailed (but preliminary) project plan covering all activities 
     and all members.
2. Dependencies between activities.
3. Estimated times of activities.
4. Estimated resources (people) for each activity.

The deliverable could be based on a Gantt chart plus descriptions of the
various activities, or it could be based on a snapshot of your
[Trello](https://trello.com/)/[Taiga](https://taiga.io/) board.


The plan must include slack time at the end of term to account for 
delays that may occur. The plan must include time to learn what needs 
to be learned, and the writing of deliverables and theses.

The plan needs to be viewed as a living document, adapting
frequently to differences between projected and actual timing of tasks, and changing
directions of the team. Please save major versions of the plans so that you can 
see how it evolves. In the thesis, document major differences in planned and actual timing of tasks and try to account for why this happened.

**This deliverable could be presented live, by showing Dave or Davide your
plan.**

[//]: # "Team structure, working process, tools used and how, milestones" 

### D4: System Design and Test Plan

**Due: Friday Week 15**
{: .blue}

This deliverable consists of a high-level system design and a test plan. The deliverable
consists of four components:

*  **Site Map and UI Design**: A description of the user interface and
        its functionality, perhaps with Photoshop mock-ups.
        An overview of the expected flow between the pages 
        in your system. 
* **Data and System Specification**: A description of the data model
        underlying your system, perhaps using ER diagrams.
        A description of the architecture of the system, perhaps
        using UML diagrams, to capture the relationship between the major components
        of the system.
* **Test Plan**: A description of how you plan to systematically test your
        system. This is not about usability testing, but testing the software
        to find and remove bugs.
* **Glossary**: A dictionary of the key terminology used in describing your
        system. For example, if your system records exercise activities which
        you describe as an _event_, your glossary should state that
        an _event_ is a record of an exercise activity.    The terms defined
        in the glossary should be specific for your system, not generic, software-related  
        terms.

The system design should support a clean separation between the front-
and back-end functionality.



### D5: User Profiling  

**Due: Friday Week 16**
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


**Due: Friday Week 16**
{: .blue}

**You may want to ignore this deliverable, unless security, privacy,
or safety are crucial for your app. One lightweight approach to
dealing with the deliverable is to make a list of all the security,
privacy, and safety concerns related to your app, and discuss
with Dave or Davide this list to see whether there are things
you may have missed.**

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
Also consider *ethical issues* related to the retention of private user data,
especially in the context of the new European General Data Protection Regulation (GDPR).

Are there any safety issues relevant to your app?



### D7: Intermediate Presentation

**Due: Week 17**
{: .blue}

The intermediate presentation gives teams the opportunity to present
their work in progress --- details of what the presentation should contain
are found below. The slot for each presentation is 20 minutes 
(about 15 minutes of content, 5 minutes for questions).

We will provide feedback on your presentations to help improve for
future presentations.

Presentations can be given by some subset of your team, including
just one member or all members. All team members should be present
at the introduction of the talk and should reappear for questions.


### D8: Usability Assessment

**Due: Week 20**
{: .blue}

Organise a usability study of *your own system* with (at least) 5 participants, ideally matching the intended users of your system.

The principle aim of the deliverable is to get some people to work through your system trying to perform various tasks and thus providing feedback to you on the experience, which you will then take to improve your system.

The test sessions should be performed using a concurrent verbalisation protocol (think-aloud), where participants are given tasks based on use cases of your system and asked to think out loud what is going through their minds as they navigate the system. To prepare for the tests, you should create a test protocol that you use with each participant to make sure all participants are given the same instructions, tasks, and questions. You finish the test by giving the participants a System Usability Scale (SUS) questionnaire.

Please read the usability lecture slides for more information on the SUS questionnaire as well as test procedures.

When your system is ready for testing, you can ask Dave or Davide to act as
a pilot participant to test your protocol. You will then be given verbal feedback and pointers on how to improve the protocol and test session.

Who participates? Ideally, individuals that match the personas described in D5. In practice this might be difficult. So try to find some external person matching the personas. If that fails, try to find one other group to perform the tasks in your system.

The deliverable should include

* demographic data on who were participating in your tests,
* a description on the tasks they performed,
* a result section on how participants performed in each task and what problems they encountered, and
* a discussion on what you are going to do to address the elicited problems.

The information gathered in the usability testing is primarily of importance for your teams to improve your systems. The deliverable can include a snapshot of the kinds of results obtained, rather than an exhaustive account of everything.

The usability assessment report should be used to address the flaws in the system. How these flaws are addressed (or not, with reasons) should be recorded in the final thesis.



### D9: Draft Thesis

**Due: Early Week 21**
{: .blue}

A draft of the thesis needs to be submitted so that the other team
can give feedback and use it as the basis for questions during the final
presentation. The most important requirement for this deliverable
is that the structure of the thesis is clear, via, for example, a table
of contents.

If you submit a draft thesis for feedback, you will be required to
give feedback on some other team's thesis. If you do not submit,
then you will not get feedback on your thesis.

### D10: Final Presentation

**Due: Thursday 31st May, Week 22**
{: .blue}

All projects are presented in a final seminar. Each team appointed an opposing 
team. 
Each presentation will take a 40 minute slot, divided as follows:

* 30 minutes of content, 
* 10 minutes questioning by opponent, and others.

The format of the presentation is discussed below.

Feedback will be given after the presentation, for the benefit of your
future presentations.

 

### D11: Thesis

**Due: Week 22**
{: .blue}

The final outcome of the course is a thesis describing the software system
developed. Each team will produce a single thesis together. 
The thesis  consists of project plan, technical specifications, business model,
processes taken, various kinds of analysis
(requirements, security, etc) done, etc. --- essentially,
updated versions of all deliverables ---  with added introduction, 
conclusion and appendices.

### D12: The Code

**Due: Week 22**
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

If you cannot release your code for some reason, for example, due
to constraints imposed by the company you are working with,
please arrange for Dave to see your code before the course finishes.

Note: teams are permitted to borrow code from the
Internet and to use sites like [StackExchange](stackexchange.com) in order to
solve any technical issues that may arise. *All code borrowed from elsewhere
needs to be properly attributed to avoid problems of plagiarism.*  

**If you are working at a company, and cannot release your code,
could you schedule some time with Dave to go through the code.**

## Guidelines for Presentations

### Presentation Content

Both presentations may cover the following topics, not necessarily in
this order. Try to tell a good story of your app, it's context,
and your progress. We don't want to hear a chronological story of
how your work has evolved.

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


** The following are guidelines. You chose the structure of your presentation.**

* Communication manager organises presentation and delagates parts (if desired).
* Test beforehand that your laptop and the projector communicate well 
        (the projector may have a different resolution that may affect screen shots and Powerpoint presentations).
* Rehearse the presentation and demo.
* The audience are your fellow students (not the assistents or teacher).
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

As a rough guideline, **each student will contribute approximately 10--15 pages of text**,
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
Also extensive screen shots or use-case diagrams belong in an appendix.

**For smaller groups, feel free to scale down whichever aspects are less
interesting for you. For instance, if Security is not especially important
for your app, describe why in a few lines.**

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
learned during the project. **This part is obligatory, regardless of what size your
project group is.**


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
