import React, { useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import { FileText, Scale, AlertTriangle, BookOpen, UserCheck, Ban, Globe, Clock } from 'lucide-react';

const Terms = () => {
  const [activeSection, setActiveSection] = useState('agreement');

  const termsSections = [
    {
      id: 'Article I',
      title: 'Student Group Compliance',
      icon: <FileText className="w-5 h-5" />,
      content: `Section 1. Student groups must comply with all University policies and procedures, as well as local, state, and federal laws and regulations, including those that pertain to group membership and access to programs. Religious student groups may require their voting members and officers to adhere to the organization’s statement of faith and its rules of conduct. Please note that the Student Conduct Code applies to individuals and student groups and their activities both on- and off-campus.

Section 2. Violation of the policies outlined here or other student group requirements constitutes grounds for repeal of registration status and/or other sanctions, following established University procedures to be administered by Student Unions and Activities. Nothing in this policy should be construed to abridge the constitutional rights of students to freedom of speech, association, and free exercise of religion.

Subd 1. A student group’s status and access may be impacted if they have an outstanding University invoice past due more than sixty (60) days.

Subd 2. Student groups reserving space on campus are required to follow all policies according to the venue/space reserved.

Section 3. Student groups must be fully operated and led by currently registered students. Only currently enrolled, student services fee-paying University of Minnesota Twin Cities students are eligible to be officers. Groups must have a minimum of five officers on their GopherLink roster who are active in leading the group.

Subd 1. Registered Student Organizations (RSO) and Campus Life Programs (CLP) shall only operate for the purposes of co-curricular involvement. All student groups registered with Student Unions and Activities (SUA) shall not be affiliated with, sponsored by, or tied to any activities or courses that carry academic credit.

Subd 2. Students who are registered for classes external to the University of Minnesota Twin Cities campus are not eligible to serve in officer positions. This also applies to students who are studying abroad.`
    },
    {
      id: 'Article II',
      title: 'Officer Responsibilities',
      icon: <Globe className="w-5 h-5" />,
      content: `Section 1. Student groups shall have the privilege and responsibility to develop and implement appropriate internal policies and procedures that govern their operations, activities and member conduct. Groups must ensure that all members are informed of such policies and procedures, including the potential consequences for violations. The officers of each group bear the responsibility for development, implementation, administration, and enforcement of such policies and procedures, in accordance with the group’s constitution.

Section 2. By becoming an officer of a student group, students agree to the following statements:

I agree to abide by any and all University of Minnesota policies and procedures, as well as federal, state, and local laws and regulations.
I understand that health and safety directives, guidelines, and requirements from the University of Minnesota and the Minnesota Department of Health apply to all student group activities and gatherings, whether on-campus or off-campus.
I understand that groups that fail to comply with the above expectations may lose access to benefits and are subject to the Student Group Conduct Process (See Article XXII: Student Group Conduct, Policy Violations, and Dispute Resolution).
I understand that as a student group officer, I am not able to enter into a contract on the University’s behalf.
I understand that, if my student group is a Registered Student Organization (RSO), it must operate as a non-profit organization.
I understand that officers of this group must be currently enrolled, student services fee-paying students of the University of Minnesota Twin Cities. Officers must also be in good standing with the University and free of any outcomes defined by the Board of Regents Policy: Student Conduct Code, administered by the Office for Community Standards.
I understand that no more than 1/3 of the group’s voting membership may consist of non-University of Minnesota Twin Cities students.
I understand that I am responsible to ensure that the transition of responsibility to my successor is executed to my best ability.
I understand that I am responsible, along with fellow officers of the group, to ensure all policies and procedures are followed as set forth in our group constitution.
I accept and will uphold the principles of nondiscrimination, as stated in the University’s Administrative Policy: Discrimination, whereby the University of Minnesota is committed to the policy that all persons shall have equal access to its programs, facilities, and employment without regard to race, color, creed, religion, national origin, sex, gender, age, marital status, familial status, disability, public assistance status, membership or activity in a local commission created for the purpose of dealing with discrimination, veteran status, sexual orientation, gender identity, or gender expression.
I understand that all officers of the group shall be personally responsible and accountable for the operations of the group including external reporting obligations. This includes the transition of all officer responsibilities during all leadership changes.
I understand that the University strongly encourages students to immediately report incidents of sexual misconduct that they experience, witness, or learn about to the University’s Office of Equal Opportunity and Title IX (EOT).
I understand that when the Office of Equal Opportunity and Title IX (EOT) receives a report of sexual misconduct, it reaches out to the impacted person to provide resources for personal support and inform the student about the University’s procedures for investigating and addressing sexual misconduct. You can learn more about the Office of Equal Opportunity and Title IX (EOT)’s investigative role and processes on the Office of Equal Opportunity and Title IX (EOT) website.`
    },
    {
      id: 'Article III',
      title: 'Student Group Resources',
      icon: <UserCheck className="w-5 h-5" />,
      content: `Section 1. Student groups must register with Student Unions and Activities to establish a relationship with the University in order to access some University facilities, services, and resources in addition to the benefits of community and leadership development. Currently registered student groups in good standing have access to the following:

Use of the following areas for meetings and events at free or reduced rates:
Coffman Memorial Union
St. Paul Student Center
University classroom space
Outdoor campus space
Other venues on campus
Ability to conduct fundraisers and sales on campus
Eligibility to apply for funding, including Student Activities Office Grants and Student Services Fee allocations
Access to student group-specific email and Google accounts
Participation in campus-wide and student group-focused events, including Explore U, Activities Fairs, Homecoming, Spring Jam, Student Group Empowerment Series, and Tony Diggs Excellence Awards
Partnership opportunities with Student Events and Entertainment
Ability to participate in the Student Group Leadership Program
Access to the Student Group Resource Center's inventory, spaces, and programs
Ability to promote student group events via the five digital screens in Coffman Memorial Union
Access to GopherLink features for student group management including a profile page for the group in the directory, the event calendar and forms.
Ability to conduct student group elections through the Student Activities Office
Ability to participate in advisory boards and student government to represent your student group, including:
Undergraduate Student Government
University Recreation and Wellness Advisory Board (URWAB)
Consultation with Student Unions and Activities (SUA) Student Group Services staff to assist with organizational needs including but not limited to group issues, conflict management, risk management, general tax information, budget development, and student group and University policy.
Section 2. The resources a group is able to access are for that group’s use alone. For instance, reserving a meeting room, event venue, or contact table allows a group to use this space only for that group’s purpose. A group cannot reserve spaces for use by other student groups, University departments, external groups, or individual use to provide access or reduced costs in using University facilities, services, or staff. Student groups must abide by all venue policies.

Section 3. Providing inappropriate access to student group resources is considered fronting and may result in disciplinary action against the group. This may include the student group conduct investigation facilitated by Student Unions and Activities (See Article XXII: Student Group Conduct, Policy Violations, and Dispute Resolution). Groups may also be subject to pay external rates if found responsible for fronting.

Subd 1. Student groups that are in good standing may not partner with or cosponsor activities, events, or services with student groups that are not in good standing.  Student groups that are found responsible for providing inappropriate access to student group resources to student groups that are not in good standing may be subject to disciplinary action, including (but not limited to) an impact to their status with the University.`
    },
    {
      id: 'Article IV',
      title: 'Classification',
      icon: <Ban className="w-5 h-5" />,
      content: `Registered Student Organizations vs. Campus Life Programs

Section 1. Student groups that register with the University are classified as either Registered Student Organizations (RSOs) or Campus Life Programs (CLPs) and are subject to the following guidelines and policies.

Section 2. Registered Student Organization (RSO)

Definition: A voluntary association primarily composed of students that operates independently from the University. Upon completion of the established registration process, Registered Student Organizations (RSOs) may conduct activities at the University of Minnesota Twin Cities.
Registered Student Organizations are independent and autonomous from the University and are responsible for managing their own affairs. Registered Student Organizations should not present themselves or operate as units or agents of the University. Events and activities conducted by Registered Student Organizations are not considered University-sponsored unless the group is collaborating with a co-sponsoring University department. Registered Student Organizations must comply with all policies and procedures for Registered Student Organizations as detailed in the Student Group Policies, Student Conduct Code, and University policies.
Registered Student Organizations may be affiliated or act in accordance with a national or parent organization. However, students are responsible for all of the Registered Student Organization’s operations and actions independent from that organization. The national or parent organization, sometimes through a designated advisor, may provide additional guidance for the group’s operations, but these recommendations may not supersede the regulations or policies of the University.
Section 3. Campus Life Program (CLP)

Definition: A student-led, voluntary association primarily composed of students whose activities, operations, and decision-making processes are ultimately governed by and are the responsibility of University academic or administrative departments. Upon completion of the established registration process, Campus Life Programs have the ability to conduct activities at the University of Minnesota Twin Cities. Campus Life Programs are eligible for certain privileges and services that are unavailable to Registered Student Organizations.
A group registered as a Campus Life Program (CLP) must be sponsored by a University of Minnesota academic or administrative department and have a designated University faculty or staff advisor. The Campus Life Program and its advisor must be approved annually by the dean or department head and comply with all policies and procedures for Campus Life Programs contained within student group and University policies. All Campus Life Program operations and activities are subject to the oversight of the sponsoring or affiliated department. An updated Advisor Letter is required for annual group registration.
Campus Life Programs need to operate in the best interests of the University in all aspects of their operations and activities. The sponsoring or affiliated department, through the designated staff or faculty advisor, is responsible for ensuring that the group’s actions and operations align with the University’s policies and interests.
Expectations and policies regarding advising a student group can be found in Article XXI: Advisors of Student Groups.`
    },
    {
      id: 'Article V',
      title: 'Hazing',
      icon: <BookOpen className="w-5 h-5" />,
      content: `Section 1. Hazing by any member of the University community is prohibited by the University of Minnesota Student Conduct Code and by Minnesota Statutes § 121A.69. Any student or student group found responsible for a hazing violation may face disciplinary actions, including suspension or expulsion. Hazing is prohibited whenever it occurs on University premises or in connection with any University-affiliated group or activity. Any individual who believes that a student group has violated University policies, breached the group’s internal procedures, or acted inappropriately may report the incident by submitting a Student Group Conduct Incident Report. Anonymous reports may be submitted through the University’s confidential reporting service, UReport. Reports can be filed by anyone, including staff, faculty, students, and individuals outside the University community. Based on the nature of the report, individual students involved in the alleged conduct may be referred to the Office for Community Standards (OCS) for an individual student conduct investigation.

Section 2. The Stop Campus Hazing Act is a federal law to prevent and address hazing activities at higher education institutions. The Act mandates that all college and university students and organizations be informed about the dangers of hazing and the legal consequences associated with engaging in such behaviors.  The University Clery Compliance Office is responsible for ensuring that the University of Minnesota is in compliance with this important law by ensuring the complete and accurate collection of crime data and the distribution of this information to the public. 

Subd 1. The University of Minnesota is required to publish a Campus Hazing Transparency Report which summarizes hazing findings of any recognized student group found to be in violation of an institution's standard of conduct.`
    },
    {
      id: 'Article VI',
      title: 'Safety of Minors Policy',
      icon: <Clock className="w-5 h-5" />,
      content: `Section 1. Student groups hosting events on campus where minors are the primary intended audience are responsible to be aware of the University of Minnesota Administrative Policy on the Safety of Minors. All programs primarily intended for minors must comply with the Health and Safety Requirements for Programs Involving Minors.

Section 2. Student groups that operate programs or activities on campus or in a University facility where minors are the primary audience including University of Minnesota programming where staff are primary supervisors for youth without an accompanying adult, or when the program includes an overnight stay, must certify to the University that all individuals who will have ongoing interaction with minors have received training and have undergone a criminal background check, and that the program meets or exceeds the University’s Health and Safety Requirements for Programs Involving Minors. Instructions about how to adhere to the Safety of Minors policy are found on the University Policy Library.

Campus Life Programs follow the Safety of Minors policy through involvement with a campus department. They are required to register the program through Youth Central, which includes a certification of compliance.
Registered Student Organizations are responsible for meeting safety requirements and are considered similar to an outside organization using space on campus. Responsibility for meeting requirements are shown on the Safety of Minors - Requirements Grid attached to the Safety of Minors Policy. Facility use agreements include a compliance addendum.`
    },
    {
      id: 'Article VII',
      title: 'Alcohol at Student Group Events',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. Student groups must comply with the University’s policy on the sale and/or service of alcoholic beverages on University-owned or -operated property. Please reference instructions about how to adhere to the  Alcohol Beverage Sales and Service, and Venue Liquor Licensing.

Section 2. Student groups are responsible for understanding if external funds received may be used for:

events and/or activities where alcohol is present
the purchase of alcohol
payment to a licensed vendor who is selling and/or serving alcohol.
Subd 1. Student groups may not use University funding to purchase or serve alcoholic beverages.

`
    },
    {
      id: 'Article VIII',
      title: 'Student Group Status and Standing Levels',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `Section 1. Student group access to resources and listing on GopherLink is dependent upon their registration status and/or standing level.

Subd 1. Student Group Registration Status

Student group registration status is dependent on a group’s completion of the annual registration process or by request (in the case of dissolution). Student groups’ registration status may be New Student Group, Currently Registered Student Group, Expired Student Group, or Dissolved Student Group. The definition of each is as follows:

New Student Group
New student groups are in the process of registering with Student Unions and Activities for the first time.
New student groups will not have access to student group University resources until they have completed the registration process and their registration status has changed.
New student groups do not have a profile on GopherLink.
Currently Registered Student Group
Currently Registered student groups may be new or expired student groups that have completed the registration process or currently registered groups that maintain their status by completing the re-registration process with Student Unions and Activities.
Currently Registered student groups have full access to student group University resources.
Currently Registered student groups have an active profile on GopherLink.
Expired Student Group
Expired student groups were previously registered but did not complete the student group registration requirements or did not re-register during the required registration timeline.
Expired student groups have no access to student group University resources.
Expired student groups may be visible on GopherLink, but will have an “Expired Group” tag on their group’s profile.
Any student may contact the Student Activities Office to re-register an expired group within two academic years of the group’s expiration.
Dissolved Student Group
Dissolved student groups no longer exist at the University. Groups dissolve if a group did not re-register within two academic years of becoming expired or upon request of group members. See Section XI: Dissolving a Group.
Dissolved student groups have no access to student group University resources.
Dissolved student groups do not have a profile on GopherLink.
Dissolved student groups must follow all dissolution procedures as set forth in the group’s constitution.
Subd 2. Student Group Standing Levels

A student group’s standing level can be changed by Student Unions and Activities due to non-compliance with or violations of student group policies,  University policies, conduct investigation findings, findings from a national or parent organization, or actions that are inconsistent with the group’s governing documents. If a student group is not in good standing, this status will be publicly indicated on the group’s active GopherLink profile through as indicated by a profile tag. 

In Good Standing
Groups remain in Good Standing due to compliance with University policies and guidelines.
Groups in Good Standing have full access to student group University resources.
Student groups that are in Good Standing and are collaborating, partnering or co-sponsoring with another student group must reference Article III for additional guidance.
Probation
If a Student Unions and Activities determines that a group is placed on probation due to any of the reasons listed above, the group will not be in “good standing” with the University.
Student groups on probation may have limited access to student group University resources as determined by Student Unions and Activities and the terms of the probationary status.
Groups on probation will have this status displayed on their GopherLink profile as either “PROBATION - Registered Student Organization” or “PROBATION - Campus Life Program”.
Suspension
Suspension means separation of the student group from the University for a defined period of time, after which the student group is eligible to return to the University. Suspension may include conditions for readmission. Any violations of the Student Conduct Code while on suspension may be cause for additional charges and findings that may result in extended suspension or expulsion. A suspension may be deferred when an offense is serious enough to warrant separation from the University, but where specific circumstances of the case justify special consideration. More information can be found in the Student Group Conduct Code Procedure.
A student group can be suspended for a variety of reasons, including, but not limited to, non-compliance with policies, guidelines, or terms of probation. A group on suspension is not in “good standing” with the University.
Student groups that have been suspended have no access to student group University resources.
Suspended groups will have this status displayed on their GopherLink page as either “SUSPENDED - Registered Student Organization” or “SUSPENDED - Campus Life Program”.`
    },
    {
      id: 'Article IX',
      title: 'Name and Logo Use',
      icon: <FileText className="w-5 h-5" />,
      content: `Section 1. Student Group Naming Restrictions

By registering with Student Unions and Activities, groups reserve the right to the exclusive use of the group’s name at the University. The same group name cannot apply to multiple groups. Upon initial completion of registration, groups will be assigned a permanent group identification number. This number will not change if the group name changes. Upon registration, the group name will be listed in the GopherLink student group directory. In order to change a group’s name, an officer listed in GopherLink may request a name change during the annual registration process or by submitting a name change request form. Groups should meet with their assigned Activities Advisor to understand all requirements associated with an official name change. In either case, the group must submit an updated constitution reflecting the new group name. Student Unions and Activities reserves the right to require a group to change its name outside of the registration process as needed.
Student groups may not use the name of any other organization as their group name or within their group’s name. Exceptions may be made if a group obtains written permission from the organization stating permission for the use of the name. Student Unions and Activities reserves the right to refuse registration to any group claiming to represent for-profit organizations or wishing to use a name protected under applicable intellectual property law.
Students may register a group containing the name of a housing organization, such as apartment complexes whose primary tenants are University of Minnesota students. However, there may be no more than one group at a time with a housing organization’s name in the student group name.
Groups that are chapters of a national/international organization must designate a chapter name or denote the “geographical designator,” i.e., “at the University of Minnesota,” during the registration/re-registration process to differentiate from their national/international organization. Their official name, including this designation, must be reflected on all promotional materials, including chalking.
Registered Student Organizations (RSOs) are required to exactly match their official name listed with the University’s student group directory and all other official documentation (e.g., Internal Revenue Service and their banking institutions) to assist with officer transitions.
Campus Life Programs are not permitted to use acronyms to represent their groups in communications.
Registered Student Organizations are independent of the University of Minnesota and their names may not imply that they are part of, affiliated with, or controlled by the University. Registered Student Organizations shall not use the name “University of Minnesota,” any abbreviation thereof, the University wordmark, the word “Gopher,” or any other registered trademark held by the Regents of the University of Minnesota as part of the name of the organization. Registered Student Organizations may use the word “University” or the geographical designation “at the University of Minnesota.”
Section 2. Use of the University of Minnesota Name, Marks, and Logos

General Policy

All student group logos must meet University branding guidelines according to their classification. Registered Student Organization (RSO) branding policies and Campus Life Program (CLP) branding policies are determined by University Marketing Communications.
No student group (regardless of classification) may use the name of the University or any University trademark, including the Registered Student Organization marks:
In connection with alcoholic beverages, cigarettes, or other tobacco products, illegal or controlled substances, cannabis and related paraphernalia,  sexually oriented products or services, religious products or services, political parties or partisan political activities, gaming or games of chance, or firearms.
In any way that creates the impression the University is a user of or endorses a product or service.
In a manner that suggests or implies University endorsement of a point of view or personal, religious, or political opinion, business, activity, movement, or program that is not official University business. If there is potential for confusion in a statement describing affiliation with the University, the organization should use a disclaimer stating that the University is not involved in the business, activity, movement, etc.
Campus Life Programs

Campus Life Programs (CLPs) are subject to the oversight of the University and must use an official unit wordmark combination as approved by their sponsoring department’s Marketing and Communication Lead and University Marketing Communications. This includes all logos, promotional materials, apparel colors, and digital presence. All promotional materials must be in line with University Marketing Communications branding policies.
Campus Life Programs are required to work with their parent department to develop a unit wordmark combination consistent with the branding of the parent unit.
No other logo, wordmark, or other group identity graphic can be used. It is acceptable to have the group name in plain text. Campus Life Programs are also permitted the use of University trademarks, subject to approval by their parent department and University Marketing Communications.
Campus Life Programs are required to house their domain within the University ecosystem, including as a subdomain of your parent unit (e.g., cfans.umn.edu/examplegroup) or on a dedicated Google site. They are not permitted to have their own URL unless as a redirect to their umn.edu webpage.
Campus Life Programs may use any names that are acceptable for Registered Student Organizations. Additionally, they may use “University of Minnesota” and “Gopher” in their campus life program name, as they report into an official University unit. Examples include:
“University of Minnesota Gardening Club”
“UMN Gardening Club”
“U of M Gardening Club”
“M Gardening Club”
“Gopher Gardening Club”
Registered Student Organizations

Registered Student Organizations (RSOs) are separate entities from the University of Minnesota and their names, domain names, social media handles, etc. may not imply that they are part of the University or controlled by it.
Registered Student Organizations must include the following disclaimer on all social and web platforms (e.g., website, Facebook, Instagram, etc.): “This group is a Registered Student Organization and is independent from the University of Minnesota.”
Registered Student Organizations must not use the name “University of Minnesota,” any abbreviation thereof, or the University wordmark (“University of Minnesota” graphic), Block M, Ski-U-Mah, Row the Boat, or the word “Gopher” as part of the name of the organization or URL. The following names are examples of unacceptable names for Registered Student Organizations because they imply the group is part of the University:
“University of Minnesota Gardening Club”
“UMN Gardening Club”
“U of M Gardening Club”
“M Gardening Club”
“Gopher Gardening Club”
GardeningClubUMN.com
GopherGardening.com
Registered Student Organizations may use the word “University” or the geographical designation “at the University of Minnesota.” The following are examples of acceptable names for student groups:
“Gardening Club at the University of Minnesota”
“Campus Gardening Club”
“Minnesota Gardening Club”
“Student Gardening Club”
“University Gardening Club”
GardeningClubatUMN.com
GardeningatUMN.com
If the words “at the University of Minnesota” are added, we recommend they be in a sans-serif font (e.g., Helvetica, Arial, Calibri, Open Sans, Tahoma).
Registered Student Organizations are allowed to use the official “Block M RSO Mark” or “Goldy RSO Mark.” These marks must be used in their entirety, without alteration, and may not be combined with any other marks. When these marks are used, groups should include the disclaimer: “This group is a Registered Student Organization and is independent from the University of Minnesota.” These marks may be requested by Registered Student Organizations at z.umn.edu/URbrand. In addition, Registered Student Organizations must use these marks in compliance with University graphic standards and policies, and the following guidelines:
For group identification: Student groups are encouraged to list their official name, as listed on GopherLink, on all promotional materials.
For promotional products or clothing: The Block M RSO mark or Goldy RSO mark cannot appear next to or in the same visual space as other artwork. Items must be purchased from licensed vendors. For a list of licensed vendors, contact Gopher Athletics or review this list.
For print or web: The Block M RSO mark or Goldy RSO mark may be used at the bottom of a print piece separate from the Registered Student Organization’s logo or name and it must be accompanied by the disclaimer: “This group is a Registered Student Organization and is independent from the University of Minnesota.”
For athletics/sports: Registered Student Organizations that are identified as Athletics or Sports are not allowed to use the Block M RSO mark or Goldy RSO mark on uniforms, protective gear, or any game-related materials.
For fundraising purposes: Use of the Block M RSO mark or Goldy RSO mark are optional; however, student groups are required to include the group’s official name on any fundraising materials. Additionally, groups should include the disclaimer for any fundraising promotional materials: “This group is a Registered Student Organization and is independent from the University of Minnesota.”
Registered Student Organizations are not permitted to use or request any other University trademarks on any materials, including but not limited to the University of Minnesota Wordmark, Block M, Goldy Gopher, Row the Boat, Ski-U-Mah, etc.`
    },
    {
      id: 'Article X',
      title: 'Constitutions',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. Student groups are required to have a constitution in order to register with Student Unions and Activities. The constitution should outline the group’s fundamental principles, structure, and eligibility requirements for group members and officers.. The constitution serves as a statement of the group’s policies and rules and acts as an acknowledgement of the University of Minnesota’s policies and regulations.

Section 2. Student group officers are responsible for maintaining an up-to-date constitution that remains consistent with student group and University policies. By submitting a constitution to Student Unions and Activities, the group provides documentation of compliance with student group and University policy and the rules that will govern the group. All student groups are prohibited from adopting constitution terms that conflict with University policies. 

Section 3. Student Unions and Activities will only approve student group constitutions that meet all minimum requirements set by the University. Student groups and their constitutions must comply with all University policies and procedures, as well as all state, local, and federal laws and regulations. More information, including minimum requirements, recommended topics, and a sample constitution, can be found on the constitution requirements page of the Student Unions and Activities website.`
    },
    {
      id: 'Article XI',
      title: 'Dissolving a Group',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. When a student group is dissolved, the group’s official name and student group identification number are permanently terminated and may not be used or reactivated by students in the future. The group’s registration status  will be changed to “Dissolved” and cannot be reversed.

Subd 1. Groups affiliated with a national organization may request reinstatement of their official name and student group identification number, provided that the group submits historical documentation from the national organization verifying their status.

Section 2. A student group may become dissolved as a result of any of the following situations:

A group is expired for two academic years, or
The group follows any dissolution procedures in their governing documents to permanently terminate the student group, or
As a result of sanctions in a student group conduct process.
Section 3. The group’s officers are responsible for distributing any remaining funds in accordance with the dissolution procedure outlined in the group's constitution.`
    },
    {
      id: 'Article XII',
      title: 'Finances and Funding',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. General Financial Policies

Subd 1.The financial operations of student groups must be conducted in accordance with all University policies and local, state, federal laws and regulations, and the student group’s respective constitutions.

Subd 2.Officers of the student group shall have personal responsibility and accountability for the finances and operations of the group.

Subd 3. Groups are responsible for following policies and guidelines provided by any funding/revenue sources, whether internal or external to the University.

Section 2. Use of Funds

Subd 1. All use of student group funds shall be in accordance with the group’s constitution. Student groups must operate as nonprofits and no individuals will profit as a result of any revenue the group generates. This does not restrict the group from paying individuals for work or services rendered.

Subd 2. Student groups may provide financial awards/prizes to individuals, including officers or members, as a result of individual participation in a student group activity. 

Campus Life Programs should consult with the University Financial Aid director when considering the use of financial awards/prizes for participation in group activities. Other payments, including but not limited to gifts, distribution of residual assets or profits, dividends, and so on, to officers, members, or other individuals, are prohibited.
Subd 3. Registered student groups that qualify as charitable, educational, social, or benevolent organizations may make payments to other affiliated organizations outside the University where appropriate.

Subd 4. Independent auditing is an important element of the ongoing financial solvency and accountability of student groups’ accounts. Please see Maintenance and Tracking for additional information regarding best practices. Student Unions and Activities reserves the right to require audit information from a qualified independent auditor.

Subd 5. Partisan political student groups and student fees funding. “Partisan political student groups” are organizations affiliated with and in support of a registered political party or candidate for election. Partisan political student groups are not eligible to apply for and/or receive allocations of general student services fees. Such groups may seek funding for their nonpartisan political activities (e.g., candidate forums available to all qualified candidates, nonpartisan educational programs, etc.) through other University grant and student funding programs.

Subd 6. Limits on use of University funds for all student groups.

No registered student group may use University funds on behalf of a candidate for public office in a political campaign.
University funds or funds accessed through University processes must be utilized for the purposes agreed upon when the group was awarded funding. Groups that misuse University funds or do not comply with the guidelines and procedures of a University funding process may be subject to disciplinary action.
Section 3. Campus Life Program (CLP) v. Registered Student Organization (RSO) Finances

Subd 1. Financial Policies for Campus Life Programs (CLPs)

(a) Registered student groups classified as Campus Life Programs (CLPs) must comply with all University financial policies and procedures.

(b) All Campus Life Program funds shall be reflected on the University ledger system and all major equipment shall be registered on University inventory. The sponsoring or affiliated department will make University records of transactions related to the group available to student group officers.

(c) Campus Life Programs are not permitted to maintain financial accounts (including checkbooks) outside of the University and/or University of Minnesota Foundation.

(d) Campus Life Program funds and financial operations will be subject to the oversight of the host academic or administrative department.

(e) Required Procedures for Campus Life Programs:

(i) Student group funds must remain separate from other departmental funds.

(ii) All documents relating to the Campus Life Program should be signed by a registered officer of the student group and the departmental financial officer.

Subd 2. Financial Policies for Registered Student Organizations (RSOs)

(a) Registered student groups classified as Registered Student Organizations (RSOs) must comply with all University student group financial policies and procedures.

(b) Registered Student Organizations must maintain independent financial accounts outside of the University. Registered Student Organizations must independently secure and maintain banking services through a service provider of their choice. All accounts should be opened and maintained under a Tax ID Number (or EIN-Employee ID Number) specific to the group. Registered Student Organizations are not permitted to operate their finances via the University’s financial system.

(i) Student group officers of Registered Student Organizations (RSOs) are held personally responsible and accountable for the monitoring, tracking, and managing of all student group financial activity, including all required compliance set forth by the Internal Revenue Service (IRS) and the State of Minnesota, as applicable. Registered Student Organization student officers will be held responsible for any debts incurred by the student group.

(c) Registered Student Organizations do not have access to the University’s tax-exempt status and may not use the University tax identification number. Student groups seeking tax-exempt status must file on their own behalf with the state of Minnesota and/or the Internal Revenue Service (IRS).

(d) Although the University of Minnesota requires all Registered Student Organizations to operate as nonprofit entities, these groups do not automatically have nonprofit status with the State of Minnesota.

(e) Registered Student Organizations are encouraged to apply for an Employer Identification Number (EIN; also known as Tax ID Number) to be used for any financial accounts on the group’s behalf. Groups apply for a Tax ID number through the Internal Revenue Service (IRS). See the EIN Application Page for additional information on applying for a Tax ID number.

(i) Registered Student Organizations must use their official name across all documentation, registration, promotional materials and apparel, both within the University and external organizations (i.e., the IRS). The organization's official name should match their respective Student Unions and Activities registration and the EIN application to avoid access barriers in future years.

Section 4. Tax Information.

Subd 1. Student groups shall be responsible for all applicable tax requirements, including, but not limited to, collection and payment of sales taxes and filing and payment of income taxes.

Subd 2. Registered Student Organizations (RSOs) may have tax filing requirements with the Internal Revenue Service and the State of Minnesota on an annual basis. To learn more about tax filing requirements, visit the Student Unions and Activities website.

Subd 3. Campus Life Programs (CLPs) do not have tax filing requirements, as they are part of the University.

Section 5. General Fundraising

Subd 1. All student group fundraising activities must follow University policies and procedures, as well as local, state, and federal laws and regulations. When planning a fundraiser, keep the following in mind:

(1) Reserved spaces and contact tables must display the name of the student group and be staffed at all times by the members of the student group that has reserved space for the fundraiser or sale.

(2) The name of the sponsoring student group must be prominently displayed in all advertising and other communications connected with the fundraising or sales effort, including at the event site itself.

(3) Registered student groups should be aware of policies pertaining to Name and Logo Use (Article IX) for use on any merchandise.

 

Section 6. On-Campus Sales and/or Fundraising

Student groups officially registered with the University of Minnesota may conduct sales and/or fundraising activities, up to five (5) days per semester or summer session, using University facilities in accordance with the Student Group Policies.

Subd 1. Student groups may conduct sales and fundraising activities up to 5 days per semester.

Subd 2. Reserved spaces and contact tables must display the official name of the student group and be staffed at all times by the members of the student group that has reserved space for the fundraiser or sale.

Subd 3. The official name of the sponsoring student group must be prominently displayed in all advertising and other communications connected with the fundraising or sales effort, including at the event site itself.

Subd 4. Registered student groups should be aware of policies pertaining to Use of the University of Minnesota Name, Marks and Logos for Campus Life Programs and Registered Student Organizations for use on any merchandise.

Subd 5. Groups should save all receipts for expenses incurred as a result of the sale and/or fundraiser and a deposit slip of the amount received from the sale and/or fundraiser. Groups should make a good faith effort to keep all personal transactions separate from student group transactions.

Subd 6. Student Activities reserves the right to request a financial report from any group should they deem it necessary. Should you be requested to submit a financial report, all receipts must be attached. Groups that fail to respond to a request for a financial report may lose all University funding, sales and/or fundraising privileges for the remainder of the academic year and may have their student group status impacted.

Subd 7. Groups must comply with all University of Minnesota policies and local, state, and federal laws and regulations. Failure to comply could affect student group status with Student Unions and Activities. This includes being responsible for any and all taxes associated with your sale and/or fundraiser.

Subd 8. Student groups may conduct on-campus sales and fundraising activities up to 5 days per semester. Groups can conduct 1 bake sale per semester.

Subd 9. Groups may not host "raffles" without a permit from the Minnesota Gambling Control Board, as raffles by definition involve ticket sales. "Prize drawings" are permitted without a state permit so long as money is not exchanged.

Subd 10. Student groups conducting a sale or fundraiser must be registered and in good standing with Student Unions and Activities.

Subd 11. A group’s privileges of engaging in sales and/or fundraising activities is subject to immediate cancellation if the methods used interfere with general University operations, are disorderly, improper, obstruct traffic, or if they otherwise interfere with an individual’s rights to privacy and/or freedom from harassment.

Subd 12. Proceeds must go back to the student group, unless monies collected are intended to benefit an off-campus agency, nonprofit organization or musician, guest speaker, performing artist, etc., and the sales are directly related to an event sponsored by a student group. Off-campus agencies, nonprofit organizations, musicians, guest speakers, or performing artists shall not be permitted to solicit funds on campus unless they have a contract with the University of Minnesota or are sponsored by a student group as a sales and/or fundraising activity in accordance with the following procedures outlined by Student Unions and Activities.

Subd 13. Sales and/or fundraising activities shall not be conducted in classrooms, campus offices, residential facilities, and/or other University buildings, without written consent of the instructor or appropriate administrator.

Subd 14. No individuals may profit as a result of the sale and/or fundraiser.

Subd 15. Sales conducted by non-University vendors invited by student groups to participate in a student group-sponsored event at a University facility (including outdoor spaces) must abide by all University policies and procedures that apply to that facility and as permitted by its responsible administrator(s). When the reservation solely consists of a contact table, personnel from non-University vendors or companies are not allowed at the contact table when sales or sales-related fundraising or commercial activities are being conducted.

Subd 16. Sales and/or fundraising activities involving food must comply with the Policy for Serving Food or Refreshments on University Property in association with meetings, social gatherings, and special events, including filing all necessary permits with the Department of Environmental Health and Safety.

Subd 17. Bake Sales can occur once per semester per student group. Groups that conduct a bake sale on campus must seek out the appropriate permits as outlined through the Building Codes Department.

Subd 18. Gambling is illegal in the State of Minnesota without an approved permit. Student groups generally may not conduct any gambling tournaments or games of chance with or without a permit from the state and may ONLY conduct a raffle with an approved permit from the Minnesota Gambling Control Board. Please see below for more details on gambling.

Subd 19. Donation jars and/or donation solicitation are considered fundraising on campus. Solicitation of donations is also limited to the five (5) days per semester or summer session guideline.

Subd 20. University policy prohibits the use of University property by non-University entities for the purpose of revenue generation or the sale, solicitation, or promotion of goods or services. (Policy: Use and Lease of Real Estate: Appendix to Policy: Using and Leasing University Real Estate (Permissible Uses and Scheduling Priority, Non-permissible uses 1 and 2)

(a) Registered student groups may have non-University sponsors in support of a primary event; however, the primary purpose of the event cannot be non-University sponsor presence, promotion, or sales.

(b) When a registered student group has non-University sponsors of an event, insurance requirements and sponsorship agreements may be required.

(c) If promotional materials, including apparel, are created with sponsor logos, the sponsorship must be acknowledged via text as to not imply a University partnership.

Section 7. Off-Campus Sales and Fundraising

Subd 1. Registered Student Organization Sales Off-Campus

Registered Student Organizations wishing to solicit donations or contributions from off-campus sources must follow local, state, and federal laws and regulations.

Subd 2. Campus Life Program Sales Off-Campus 

All contributions received by Campus Life ProgramLPs from off-campus sources, with or without approval from the University of Minnesota Foundation, must be channeled through the University of Minnesota Foundation.

Campus Life Programs wishing to solicit donations or contributions from off-campus sources must obtain the approval of the Office of the Director of the University of Minnesota Foundation if all the following conditions are true:
The money solicited would be given to the student group for its use.
The money would be channeled to the student group through the University.
The amount of money sought is $1,000 or more.`
    },
    {
      id: 'Article XIII',
      title: 'Insurance',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. University Campus Life Programs have status as University of Minnesota entities and are insured under the University’s insurance program. 

Individual students are not considered to be insured under the policies.
Section 2. General Liability Insurance—On-Campus Events

Subd 1. Registered Student Organizations (RSOs) and their officers, individual members, and/or employees are not covered by the University’s General Liability Insurance. University faculty and staff who are advisors of Registered Student Organizations are insured under the University’s policy, which also covers them for their service to Campus Life Programs. The University has general liability insurance that provides coverage for claims of bodily injury and property damage against the University arising out of the negligent actions of the insured faculty and staff advisors.

 

Subd 2. While Registered Student Organizations do not have general liability insurance coverage from the University, the University does not require Registered Student Organizations to purchase additional insurance for most of their on-campus activities, except as noted under subdivision 2 below. Depending on the venue, most on-campus activities do not need additional insurance including:

Student group meetings regardless of the campus space reserved, including student union facilities (Coffman Memorial Union, St. Paul Student Center, outdoor spaces adjacent to student unions, and West Bank spaces reserved by Student Unions and Activities department), Academic Health Classroom Services, and the Office of Classroom Management
Registered Student Organization-sponsored concerts attended by University students
Working concession sales at events in University facilities (e.g., Mariucci and Williams Arenas)
Registered Student Organization dance practices
Registered Student Organization on-campus events and programs intended for and attended by University community and students
Section 3. On-Campus Events Requiring Registered Student Organizations to Purchase Liability Insurance

Subd 1. While the University does not require additional liability insurance for most on-campus activities, the University requires Registered Student Organizations to provide a certificate of insurance in order to conduct the following activities on campus:

Athletic events, including 5Ks or Fun Runs;
Activities or events for which the general public is the primary audience;
Activities involving the use of amusement devices (e.g., rides, slides, inflatables, bungees, climbing walls, dunk tanks)
Activities or events that involve animals
Events with 100 or more people. Student group meetings do not need to provide insurance.
Activities determined by Student Unions and Activities and the University’s Office of Risk Management to be a potential risk to the University or its students, faculty, or staff.
Subd 2. Where insurance is required, Registered Student Organizations will be required to provide a certificate of insurance in order to conduct events at University facilities. In these cases, insurance requirements for Registered Student Organizations must be consistent with the terms of the University of Minnesota’s agreement with other third-party users of University space.

Subd 3. To conduct excluded activities in University facilities, Registered Student Organizations must provide proof of general liability insurance coverage (i.e., a certificate of insurance) covering that organization’s event, naming Regents of the University of Minnesota as an additional insured, and evidencing coverage with a limit of not less than $1,000,000 each occurrence for bodily and personal injury and property damage.

Subd 4. If a Registered Student Organization does not have its own coverage, it may purchase a Tenant User’s Liability Insurance Policy (TULIP). This program is designed for third-party facility users who need to purchase general liability insurance for an event. TULIP is a general liability policy that protects both the facility user and the University. The policy provides coverage for bodily and personal injury or property damage arising out of the use of University premises by external users. Learn more about purchasing insurance and other event planning resources on the Student Unions and Activities (SUA) website.

Section 4. Coverage for Off-Campus Activities. In addition to not being covered by the University for their on-campus activities, Registered Student Organizations and their individual members are not covered for liabilities arising from their off-campus activities by any University general liability insurance. The University recommends that Registered Student Organizations consider purchasing their own general liability insurance coverage for their off-campus activities. While the University cannot provide this coverage, other insurance agents may be able to provide coverage for your organization.

Section 5. Coverage for International Travel. See Article XIV Section 5: “International Travel Considerations” .

Section 6. Compliance with Insurance Requirements

Subd 1. Where necessary, Registered Student Organizations shall be responsible for independently securing necessary liability insurance coverage to conduct activities using University facilities that are excluded from the general liability insurance program provided by the University. The TULIP program is available as an option to cover some excluded activities (generally excepting athletic-oriented activities).

Subd 2. Additionally, Registered Student Organizations are encouraged to pursue insurance coverage for property, automobile liability, workers compensation, directors and officers, special event and/or fidelity and crime, as appropriate.

Subd 3. Student Unions and Activities shall provide educational support addressing risk management and insurance issues and shall provide current information regarding insurance coverage options in conjunction with annual registration. However, Student Unions and Activities shall not enter into contracts with or on behalf of independent student groups.

Section 7. Sponsorship of Activities

Subd 1. All parties involved in the joint sponsorship or co-sponsorship of an excluded activity using University facilities each shall be required to meet all insurance requirements.

Subd 2. Co-sponsorship of an excluded activity using University facilities with a University Campus Life Program or other University entity shall not exempt student groups from insurance requirements for that activity.

Subd 3. For purposes of determining insurance requirements, joint, co-sponsorship, and sponsorship shall be defined as logistical involvement by the student group in the planning and coordination of the activity.`
    }
    ,
    {
      id: 'Article XIV',
      title: 'Travel',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. Student groups arrange many programs each year that require travel. Please note that the group is responsible, and can be held liable, for all members traveling as part of a group activity. For this reason it is important to consider many different aspects of travel. The following areas are important to consider.

Section 2. Domestic Travel Considerations

Subd 1. Student Group Vehicle Rental/Use

Registered Student Organizations:

Registered Student Organizations do not have use of University Fleet Services. Whenever possible, student groups should use third-party vendors (i.e., buses, rental vehicles) for transportation needs. This helps to defray some liability from the group and minimize health and safety risk. When using rental vehicles, individual insurance may be required or the rental services may not be provided by the vendor.
Car-sharing is one possible resource for local transportation.
When it is not possible to use a third party, groups should have a stated procedure for personal vehicle use that notifies members that they are personally responsible for anyone they are driving in their own vehicle.
Campus Life Programs:

Campus Life Programs can use third-party vendors for transportation needs and are allowed to rent vehicles from University Fleet Services. Vehicles can be used and expenses for use will be charged to the group’s EFS number. When using a third-party vendor, the group will need to work through their sponsoring department if a certificate of insurance is required, and any drivers may also need to maintain personal insurance.
Section 3. Insurance should be considered when traveling as a group. Please consult the Student Group Insurance Article for more information and work with a Student Activities Advisor on any questions you might have.

Section 4. Student groups must consider local, state, and federal travel advisories and warnings to minimize health and safety risks.

Section 5. International Travel Considerations

Subd 1. Groups can consult the Global Programs and Strategy Alliance (GPS Alliance) for assistance when considering international travel.

Subd 2. Student groups are encouraged to consider participating in programs abroad; however, careful planning is required to minimize health and safety risks. Before you begin planning a program abroad for a student group, please review the University policy on Student Travel and Education Abroad: Health and Safety for best practices regarding safe travel and program planning.

Subd 3. Please note that international travel refers to travel to any country (including Mexico and Canada) outside the continental U.S., Alaska, or Hawaii (including non-contiguous U.S. locations of American Samoa, Guam, Midway Islands, Northern Mariana Islands, Puerto Rico, the U.S. Virgin Islands, and Wake Island).

Registered Student Organizations have no direct relationship with the University and, therefore, international travel by a Registered Student Organization is not considered University-purpose and is not governed by the University’s policy on international travel. However, it is strongly recommended that students obtain adequate medical and evacuation insurance for all Registered Student Organization personal international travel.
Please note that while Registered Student Organizations are not governed by the University’s policy on Student Travel and Education Abroad: Health and Safety, any individual student on a Registered Student Organization trip or program that is receiving University funding or credit is governed by the policy. If a University unit is organizing or promoting the travel, the travel is also governed by the policy. Please contact Global Programs and Strategy Alliance (GPS Alliance) for assistance.
Campus Life Programs are governed by the University’s policy on Student Travel and Education Abroad: Health and Safety. The policy requires all students to register travel with the University, sign an electronic release and waiver, obtain mandated international medical and security insurance, provide 24/7 emergency contacts, and complete the online health and safety orientation.
If the travel involves undergraduate students and a University unit is organizing or promoting the travel for credit, the policy requires that the group work through an education abroad office. Please visit the Learning Abroad Center Student Groups website for additional information on the policy requirements.
Campus Life Programs will also need approval from the International Travel Risk Assessment and Advisory Committee (ITRAAC) if they are planning to visit countries or locations designated as Level 3 or 4 Travel Advisory by the U.S. State Department.
Campus Life Program Student Group Vehicle Rental/Use
Per University policy, students are not permitted to drive motor vehicles (including but not limited to scooters, motorbikes, motorcycles, Segways, and cars) while traveling for University purpose, which includes all international travel by Campus Life Programs. Faculty and staff may not drive vehicles in which students are passengers abroad without an approved exception from the Office of Risk Management in advance of departure from the United States. (Contact Global Programs and Strategy Alliance to inquire about such an exception.) Students must either use public transportation or hire a local driver/vehicle when abroad on University-purpose travel.
Campus Life Program Insurance
When traveling overseas, Campus Life Programs are required to purchase University-mandated international medical and security insurance. Registered Student Organizations shall be responsible for independently securing necessary insurance for any overseas activities. The University takes no responsibility for Registered Student Organization activities abroad. You may contact agencies directly. Contact the Global Programs and Strategy Alliance with questions.`
    }
    ,
    {
      id: 'Article XV',
      title: 'Health and Medically Related Activities',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. Student groups must comply with University of Minnesota policy as well as adhering to international, federal, state and local laws when involved in student group activities domestically or abroad.

Section 2. Student organizations that want to plan, organize, promote, or participate in health-related activities must meet appropriate legal standards, whether in the United States or abroad. This includes recognizing that a U.S. license, certification (e.g., Emergency medical Technician (EMT), Certified Nursing Assistant (CNA)), etc. is not valid in another country.

Section 3. Registered Student Organizations may not plan, organize, promote, or host health-related events where health-related activities including, but not limited to, those listed below are performed by students:

Assessment (blood pressure, height, weight, etc.)
Education or providing health-related advice that is above and beyond materials that have been produced independently by an independent legitimate or peer reviewed source. This can include preventive information or care.
Diagnosis of any type
Transfer, distribution, administration, or explanation of pharmaceuticals of any type (over-the-counter as well as prescription)
Treatment of any ailment
Collection of blood samples (anything that involves an invasive process)
Performing or assisting in surgery
Representing your members as health professionals (wearing a white coat, stethoscope, etc.)
Other activities that would be viewed as providing care that would otherwise require a license or be identified as functioning outside a licensed scope of practice.
Section 4. Students enrolled in a health profession college, program, or school may participate in the above health-related activities as part of a Campus Life Program student group with appropriate oversight from a department and a faculty advisor or part of a school sanctioned trip abroad with appropriate legal agreements with host organizations.

Section 5. All student groups will undergo a mandatory compliance check during their annual registration process in collaboration with the Office of the Vice Provost for Academic Health Sciences. Through this review, some Registered Student Organizations (RSOs) may be required to become a Campus Life Program (CLP) due to their intended group activities. The group is then responsible for securing a sponsoring department and faculty advisor.

Student groups seeking more information on whether their health or medically related group should be classified as an Registered Student Organization or a Campus Life Program can contact Academic Health Sciences:

Academic Health Center students should contact Brian Sick, MD.
Undergraduate students should contact Tricia Todd, MPH in the Pre-Health Student Resource Center.`
    }
    ,
    {
      id: 'Article XVI',
      title: 'Major Events',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. The University defines Major Events as events where the requester has raised security concerns, events where the University’s Department of Public Safety has identified a significant security concern, or events taking place in an indoor or outdoor space on campus with an estimated audience of 200 or more. Examples of Major Events may include, but are not limited to, concerts, lectures, public appearances, performances, rallies, or events that will draw a significant amount of the campus population or a large off-campus crowd or that represents a significant security concern (i.e., public figure, celebrity, etc.).

Section 2. Student groups seeking to host a major event on campus must follow the Major Events policy. This policy applies to anyone, be it an individual, a group, an academic department, college, or administrative unit, proposing to host a major event on the University of Minnesota’s Twin Cities campus. 

Section 3. On-campus venues may require a student group to complete a Major Event Proposal form. 

Section 4. The Major Events policy and process should be considered before entering into any agreements with sponsors, venders, artists or performers, as the process will need to be completed in its entirety before an event can be confirmed and space reservations held. Student groups should not enter into any major event commitments until they have completed the Major Events review in accordance with this policy.`
    }
    ,
    {
      id: 'Article XVII',
      title: 'Permits and Agreements',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. Student groups are responsible for knowing and following University policies and procedures, as well as following permit/application deadlines. Applications, permit deadlines, and approval timelines vary, so plan accordingly.

Section 2. Serving food during meetings or events: Depending on the type of food being served, submission of a University Food Permit, a Potluck Event Form, or a Pizza Only Form may be required. Forms are due a minimum of ten business days (two weeks) in advance of the event date. Please see the Building Code Department for the Food Permit for policies and applications related to serving food at events.

Section 3. Requesting to serve alcohol at an event: Groups interested in applying to have alcohol present at their event on campus are required to submit the Alcohol Use Application. A completed application is due a minimum of fifteen business days (three weeks) in advance of the event date.

Section 4. Public Performance of Films, TV Shows, and Video Games: In order to screen a film or TV show, groups must purchase or obtain a public performance license from an agency or the owner of copyrighted works. Public performance licenses are also needed if you want to play video games in a public venue. Public performance licenses are required for all University venues as well as off-campus events. Please see Use of Copyrighted Works (Article XIX) for more information.

Subd 1. All student groups should obtain a public performance license a minimum of fourteen (14) days prior to the event date regardless of event location (on or off campus). Student groups should consult with their venue to submit the documentation appropriately.

Section 5. General Liability Insurance Coverage for on-campus events: Please see Student Group Insurance.

Section 6. Concerts or Dances: Groups who would like to hold a dance or concert are encouraged to meet with their assigned Student Group Services Advisor to discuss their event plans, additional fees for security, and event policies. Groups should contact Student Activities at least 30 days in advance of your proposed event date.

 

Subd 1. Contact Tables

Reserved spaces and contact tables must display the official name of the student group and be staffed at all times by the members of the student group that has reserved space for the fundraiser or sale.
Food and beverages or food and beverage sales are not permitted at contact tables in the Student Unions.
Student groups are not permitted to reserve contact tables on behalf of University departments or external organizations. 
Subd 2. Student Group Name Display

The official name of the sponsoring student group must be prominently displayed in all advertising and other communications connected with the fundraising or sales effort, including at the event site itself.

Section 7. Gambling, Raffles and Drawings

Subd 1. Eligibility, Requirements and Exemptions

All forms of gambling are illegal in any location within the State of Minnesota without an approved gambling permit, subject to certain exceptions and requirements. Student groups are not eligible for a gambling permit with the State of Minnesota or to conduct a raffle, regardless of total value of prizes, unless they have applied for and received 501(c)(3) tax status with the Internal Revenue Service (IRS).
Registered Student Organizations that have been legally organized and/or have 501(c)(3) tax status with the IRS, should contact the Minnesota Gambling Control Board for more information on eligibility and how to obtain a charitable gambling permit.
Below are acceptable activities that may be conducted without a charitable gambling permit. Any questions regarding gambling should be directed to the Minnesota Gambling Control Board or Student Unions and Activities.
Campus Life Programs and departments/colleges/units of the University may be eligible to conduct a raffle or other approved activity under the University’s charitable gambling permit number.
Groups may collect charitable donations at an event.
Poker tournaments are allowed if there is no cost associated. No money may exchange hands at any time (i.e., no entry fee, no table fee, no fee per person, no personal money). Students may play with chips that have no monetary value and participants may win prizes, but participants may not contribute financially to the poker tournament in any way.
Drawings and Raffles. Student groups will be solely responsible for compliance with all gambling laws, rules, and ordinances, whether enumerated in this guide or not. See the Minnesota Department of Public Safety Frequently Asked Questions (FAQs).
Student groups typically need to get a permit, unless the total value of all prizes is less than $1500.
Raffle tickets have to meet specific requirements.
The raffle can be advertised online, but tickets cannot be sold online and no credit cards.
People under 18 can't play or win.
There are limitations on how funds can be spent.
The Minnesota Supreme Court and state statute allow chance drawings that do not require consideration if (1) the participant is not required to purchase a ticket for drawing in order to win a prize; (2) the participant must be allowed to enter the drawing without any consideration (payment of fee) for a chance to win a prize.`
    }
    ,
    {
      id: 'Article XVIII',
      title: 'On-Campus Promotions',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. The University allows posting for student groups in approved locations. Any posting that is not displayed in an approved location may be removed. Any damages to buildings incurred due to inappropriate posting will be assessed to the student group and its officers. Academic buildings and off-campus businesses have different policies on posting. Officers must receive permission and adhere to specific posting procedures at each building.

Subd 1. There are specific policies and procedures for the distribution of handouts, indoor postings, outdoor postings and chalking on campus. Reference the Administrative Policy on Distribution of Temporary Information through Publications, Signs, Banners, or Chalking. See Campus Specific Requirements: Twin Cities for more information, including specific allowable outdoor posting locations on campus.

Section 2. Groups must use their official student group name as listed with the Student Activities Office and their GopherLink profile.

Section 3. Student groups are responsible for communicating all on-campus promotions policies to their national or parent organization.

Section 4. Student Unions and Activities has an approval process for poster/flyer distribution highlighted below:

(a) All posters or flyers must be approved through the Student Unions and Activities (SUA) Welcome Desk, bearing the original stamp of Student Unions and Activities approval.

(i)The Welcome Desk will approve up to four (4) flyers per event.

(b) Student Unions and Activities staff will be responsible for placement of all posters. Student groups should not display their own posters/flyers. Flyers not approved by the Student Unions and Activities  Welcome Desk will be removed.

(c) Posters or flyers are allowed at designated posting areas only. No posters or flyers shall be put on any glass, carpeted, paneled, papered, painted, or wood surfaces.

(d) Any damages to buildings incurred due to inappropriate posting will be assessed to the student group and its officers.

Section 5. Residence Halls/Apartments. The approval process for posting information for Residence Halls can be reviewed on the Housing and Residential Life website.

Section 6. Distribution of publications inside of Student Unions and Activities facilities is allowed only at a reserved contact table.


Section 7. Use of Outdoor Banners on Campus

Subd 1. Download a Minneapolis campus map of approved outdoor posting locations

(a) Groups that would like to post a large banner must get approval from a sponsoring University Department, and complete and submit the Banner Installation Request Form.

(b) All Campus Life Programs that wish to display outdoor and exterior facing signage that will be posted for longer than a day (lawn signs, clings, banners, sandwich boards, etc.), excluding posters and chalk, must be submitted to their parent unit and approved by the Signage Committee at signcommittee@umn.edu.

Section 8. Chalking Policy: Chalking on campus is limited to registered student groups, University of Minnesota departments, faculty members, staff members, and any registered University of Minnesota student. Chalking must comply with the Administrative Policy on Distribution of Temporary Information through Publications, Signs, Banners, or Chalking. Facilities management reserves the right to clean and remove any chalking that does not comply with this policy.`
    }
    ,
    {
      id: 'Article XIX',
      title: 'Use of Copyrighted Works',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. Copyright Policy Statement for Student Unions and Activities

Subd 1. Rights to Perform

Federal law grants holders of copyright several valuable rights. They have the exclusive right to reproduce a copyrighted work, to distribute it, to prepare derivative works based on it, and to publicly display it. An especially valuable right is the exclusive right to publicly perform the work. Under this right, only the holder or a person granted permission by the holder may “recite, render, play, dance or act” the work, may show images sequentially from a video of it, or play audio from it “in a place open to the public or at any place where a substantial number of persons outside of a normal circle of a family and its social acquaintances is gathered.” U.S. Copyright Act, 17 U.S.C. § 101. In most instances, showing a film, playing a video game, or broadcasting music in the Student Unions, other off-campus venues is considered public performance.

Subd 2. Compliance with Ordinances 

Student Unions and Activities (SUA) advisors and employees may recommend a course of action, but users of copyrighted works ultimately bear responsibility for complying with the law and any permissions, licenses, or other agreements granting a right to use a work. Violation of a holder’s rights in a copyrighted work is serious. A federal court may award statutory or other damages, fines, and in certain instances, imprisonment or any combination of the above.

Subd 3. Proof of Permission

The University may require the presentation of proof that permission to use a copyrighted work, as planned, had been obtained. The University reserves the right to bar the showing of a film, playing of music, or other use of a copyrighted work if there are reasonable concerns that the showing, playing, or use likely violates the rights of the holder of the copyright.

Section 2. Common Occurrences Where Permission is Needed

While each use of a copyrighted work raises unique questions and concerns about the need to obtain permission from the holder of the copyright, in the following situations permission very likely needs to be obtained:

Subd 1. Showing a Film to a General Audience. 

The rental of a film, the purchase of a DVD/Blu-Ray, or subscription to a streaming service do not carry with them the right to show a film outside of a private residence. Unauthorized public performances refer to situations where an institution or commercial establishment shows a video or film to its members or customers without receiving permission from the copyrighted owner. This includes public performances where an admission fee is charged as well as those that are simply offered as an additional service of the establishment. This legal requirement applies regardless of whether the institution or organization is commercial or nonprofit, or whether a federal or state agency is involved.
Permissions. Student groups must purchase a Public Performance License for each instance they would like to publicly show a film/video. This can be done by contacting one of the following agencies that handle public performance licenses for many different film companies. If a license is not available through these agencies, your student group will need to contact the film/videos creator to obtain license purchasing information.
Swank Motion Pictures, Inc.
800-876-5577
Criterion Pictures USA
800-890-9494
Motion Pictures Licensing Corp.
800-462-8855
Subd 2. Allowing use of Video Games. 

Video games are generally for individual or private use. Use in a public setting may require additional licensing fees.

Subd 3. Allowing use of Music. 

The University pays a license fee to BMI, SESAC, ASCAP, and Global Music rights which allows University entities to publicly perform on university premises non-dramatic musical works included in each of these entities' repertories.  These licenses generally include non-University performers at Student Unions and Activities  events that are not co-sponsored with another entity, and registered student group on-campus projects, performances, and activities. Questions on music copyright may be directed to University Marketing and Communications.`
    }
    ,
    {
      id: 'Article XX',
      title: 'Confidential Data',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. Student group officers are required to adhere to the University’s information security policies, laws, and contractual agreements for the type of data groups collect, share, or are entrusted with by another organization, e.g., individual's contact information, affiliations, or survey results. Some data types that should not be collected are Social Security Numbers, credit card information, or healthcare information as defined by HIPAA. See Administrative Policy: Data Security Classification.

 View the following resources for more information:

Additional IT Resources and Tips
Difference between Privacy and Security Article
Fundamentals of Information Security handout
Know Your Data and How to Protect University Data
Participate in Information Security Awareness and Training
Online Training: Information Security Awareness (ISA101) (approx. 30 mins)
Securing Mobile Device handout
Sharing Data with Audiences Internal to the University Procedure
Sharing Data with Audiences External to the University Procedure
Section 2. Contact Office of Informational Technology for more information or to report information security incidents.  Anonymous reports may be submitted via the University UReport confidential reporting system.`
    }
    ,
    {
      id: 'Article XXI',
      title: 'Advisors of Student Groups',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. Student group advisors shall provide information and guidance to student groups based on information available. Advisors of student groups may seek support and guidance from Student Unions and Activities but may not act as leaders or officers of the organization. Actions that may be considered leadership of the organization include, but are not limited to:

Acting on behalf of the organization
Engaging in decision-making
Managing the group’s GopherLink profile
Selecting leadership of the group
Representing the group or the University
Being the sole financial manager of the group
Hosting or scheduling events on behalf of the group
Applying for funding on the group’s behalf
Subd 1. Incident Reporting

Advisors should document and direct any incidents (such as student group violations of, and non-compliance with, University policies and procedures, as well as local, state, and federal laws and regulations) to the Student Group Conduct Process (see Article XXII: Student Group Conduct, Policy Violations, and Dispute Resolution) for review by Student Unions and Activities.
All student group advisors (regardless of group classification) are required to complete the Campus Security Authorities training.
Subd 2. Advisors of Registered Student Organizations

Registered Student Organizations are not required to have an Advisor but may choose to have an advisor. The advisor’s individual affiliation with the University shall not have a bearing or impact on the group’s relationship with the University.

Subd 3. Advisors of Campus Life Programs

Campus Life Programs are required to have at least one University Advisor who is affiliated with the department sponsoring their group.
Campus Life Program advisors are required to sign the Campus Life Program Advisor Letter annually as a part of the group’s registration/re-registration process.
Campus Life Program Advisors, the sponsoring department, and the marketing communications leads of the sponsoring department must agree to and abide by the expectations and responsibilities outlined in the Campus Life Program Advisor Letter.
As part of sponsoring a CLP student group, departments, advisors, and marketing communications leads agree to the following terms:
The sponsoring department will assume liability for all student group activities and finances. The student members and officers are responsible for managing day-to-day operations of the student group but the department has the ultimate oversight of activities and finances. The department assumes responsibility for any debts incurred by the student group.
All Campus Life Program student group contracts will be signed by authorized staff members from the student group’s sponsoring department.
The Campus Life Program must operate all financial activity from within the group’s University’s financial system. Each Campus Life Program student group should have a unique chartstring number assigned through the University's financial system. Each student group should also have an up to date general ledger to track group financial activity. Campus Life Program student groups are not allowed to hold external checking accounts.
University policies apply to student groups classified as Campus Life Programs. For example, the group cannot have an external checking account and cannot use funds for alcohol.
Campus Life Program student groups and their advisors may develop an agreement that stipulates any additional roles and responsibilities of the advisor in relation to the group (beyond required responsibilities of a Campus Life Program advisor).
Campus Life Programs and advisors should collaborate with the marketing communications leads of the sponsoring department to ensure the group is complying with University branding guidelines for Campus Life Programs (CLP).
Campus Life Programs must use an official unit wordmark combination for group identity. No other logo, wordmark, or other group identity graphic can be used. It is acceptable to have the group name in plain text. Campus Life Programs are also permitted the use of University trademarks, subject to approval by their parent department and University Relations.`
    }
    ,
    {
      id: 'Article XXI',
      title: 'Student Group Conduct, Policy Violations, and Dispute Resolution',
      icon: <Scale className="w-5 h-5" />,
      content: `Section 1. Student Unions and Activities (SUA) is responsible for holding student groups accountable to student group and University policies, the Student Conduct Code (including hazing), and their own established procedures outlined in the group constitution or related materials. If it is believed that a student group has violated a policy, the group’s internal procedures, or otherwise acted unethically, any individual may report the policy or procedure violation to Student Unions and Activities.

Section 2.  Anyone may file a report on possible student group conduct violations including staff, faculty, students, and individuals external to the University. A report should be filed to make the Office for Community Standards (OCS) and Student Unions and Activities (SUA) aware of an incident and to initiate the student group conduct process. The Student Group Incident Report Form is the primary form of communication regarding student group conduct violations. An individual student (or individual students) involved in a reported student group activity may be referred to the Office for Community Standards (OCS) for an individual student disciplinary investigation.

Subd 1. Student Group Incident Reports must include the name and contact information of the reporting party. The reporting party may be contacted during the review process to learn more about the reported incident or violation. Anonymous reports can be filed through the University's confidential reporting service, EthicsPoint; however, these are not submitted directly to Office for Community Standards (OCS) and Student Unions and Activities (SUA) and are not specific to student group violations.

Section 3. Frequently Asked Questions

How to determine if the incident is individual or student group conduct? The determination regarding whether an alleged policy violation was committed by a student group or by an individual(s) will be made on a case-by-case basis. The Office for Community Standards (OCS) and Student Unions and Activities (SUA) will together make this determination. 

The following factors will be considered when making this determination:

How many of the members of the student group were involved in the incident?
Did the incident occur at a sponsored event of the student group?
Did a member(s) of the student group violate University regulations at an event sponsored by the group or in the course of the group’s affairs, and did the group fail to exercise reasonable preventive measures?
Did the student group’s leadership have knowledge or notice that the conduct was going to occur?
What was the nature of the incident?
How are student group violations reviewed and resolved? Student Unions and Activities (SUA) and the Office for Community Standards (OCS) will review the allegations / report of group misconduct. Consultation with the overseeing unit of the group may occur as needed. Student Unions and Activities (SUA) and the Office for Community Standards (OCS) will follow the outlined Student Group Conduct Code Procedure. The purpose of the student group disciplinary process is to provide a framework for resolving complaints about violations of Board of Regents Policy: Student Conduct Code, so that:
Informal resolution is encouraged. The disciplinary process encourages informal resolution of complaints where appropriate.
Student development is emphasized. The disciplinary process emphasizes the educational purpose in student group discipline, including helping students understand and accept responsibility for their own behavior.
Community interests are met. While the emphasis of the disciplinary process is on responsible student group self-development, the nature of the offense may require, in fairness to the community, the imposition of disciplinary sanctions.
Student groups receive fair treatment. Most disciplinary matters are resolved informally, with the agreement of the student group. However, when the people involved are unable to reach agreement, Board of Regents Policy states: Student Conduct Code requires that student groups have the opportunity to receive a fundamentally fair hearing and a campus-wide appeal.
Who can I contact to get more information about this process? Questions on allegations of student group conduct violations can be directed to the Student Group Services Team within Student Unions and Activities. More information about student group advising can be found on the Student Unions and Activities (SUA) website.`
    }
  ];


  return (
    <div className="min-h-screen bg-primery">
      <PageHeader 
        title="Terms of Service"
        description="Please read these terms carefully before using our services. By accessing our platform, you agree to be bound by these terms."
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />

      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Important Notice */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                    Student Group Policies
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-400">
                    This webpage contains the Student Unions and Activities (SUA) policies relevant to student groups registered at the University of Minnesota. All students must comply with the policies listed in order for student groups to remain in good standing with the University. Individual University departments may have additional departmental policies for specific student group activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Sidebar Navigation */}
              <div className="lg:w-1/4">
                <div className="sticky top-24 bg-primery dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Terms Overview</h3>
                  <nav className="space-y-2">
                    {termsSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                          activeSection === section.id
                            ? 'bg-white text-primery border-l-4 border-primery'
                            : 'text-white dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {section.icon}
                        <span className="font-medium">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="bg-primery border border-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                  
                  {/* Effective Date */}
                  <div className="bg-primery px-6 py-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Effective Date: January 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4" />
                        <span className="text-sm font-medium">Legally Binding</span>
                      </div>
                    </div>
                  </div>

                  {/* Terms Content */}
                  <div className="p-6 lg:p-8">
                    {termsSections.map((section, index) => (
                      <section
                        key={section.id}
                        id={section.id}
                        className={`mb-8 last:mb-0 scroll-mt-24 ${
                          activeSection === section.id ? 'animate-fade-in-up' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-white">
                            {section.icon}
                          </div>
                          <h2 className="text-2xl font-bold text-red">
                            {section.title}
                          </h2>
                        </div>
                        
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                          <p className="text-white leading-relaxed whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>

                        {index < termsSections.length - 1 && (
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-8"></div>
                        )}
                      </section>
                    ))}
                  </div>

                  {/* Acceptance Section */}
                  <div className="bg-primery dark:bg-gray-700/50 px-6 py-8 border-t border-gray-200 dark:border-gray-600">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white dark:text-white mb-2">
                        Acceptance of Terms
                      </h3>
                      <p className="text-white dark:text-gray-300 mb-4">
                        By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                      </p>
                      <div className="flex items-center justify-center gap-4 text-sm text-white dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>Last Updated: January 15, 2024</span>
                        </div>
                        <div className="w-px h-4 bg-gray-300 dark:bg-white"></div>
                        <div className="flex items-center gap-2">
                          <Scale className="w-4 h-4" />
                          <span>Version 2.1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;