# Team Chores - Project Requirements

## Stakeholder Interviews
During our stakeholder interviews with Prof. Bloomberg and Karan, we were given advices on how to develop our project, such as:ㅇ- **Using Facebook or Google apis to skip over the user-verification step:**
Our application will require user login, as each user has different set of household chores assigned. We can achieve this goal by using apis from Facebook or Google and creating a database for keeping track of users.


## End-User Observations

#### Nathan Lee

- **Age:** 
19

- **Occupation:** 
College student

- **Company:** 
New York University

- **Goal:**
Nathan is a freshman at NYU. He is living in a dorm with roommates who he does not feel too close with. He wants to handle household chores with his roommates respectfully and facilitate chores amongst themselves.

- **Challenge:**
As he is living in a dorm with roommates, who he does not feel too close with, he has a hard time talking to his roommates about upcoming household chores or chores that were undone.

- **How We Help:**
Chores project can help Nathan fairly distribute chores with his roommates without any direct confrontation. If the chores are getting out of hand, the application can address the issue with a notification feature that allows other roommates to be notified with their assigned chores that needs to be handled. Also, if the work done is unsatisfactory, the rating functionality helps roommates express about how they feel without being rude.


#### Sarah D. Burkhardt

- **Age:** 
42

- **Occupation:** 
Dentist

- **Company:** 
NYU Langone Health

- **Goal:**
Sarah is a working mother. She wants to help her children learn the values of handling their own household chores by themselves at an early age.

- **Challenge:**
Sarah is too busy working during weekdays, so she has hard time keeping track of her children’s household duties.

- **How We Help:**
The application helps Sarah assign the household that her children has to do. Doing so, she can easily check which chores needs to be done by whom, by when at a glance. Also, the hierarchical mode allows the user with administrator role in each household group to have access to chores assignment/completion. This will prevent her children from marking the chores as completed by themselves and ultimately allow Sarah to be in control of assigning the household work.



# Use Cases:
## Title: Create Account
### Actor: User

Scenario: User enters a valid email and a password. System validates the email and ensures that this is not already associated with an account. System ensures password meets requirements. System will then send a confirmation email to user, after which they will be able to log into their new account.

Preconditions: Valid email account
_________________

## Title: Create Household
### Actor: User

Scenario: User signs up if they are not currently a member. User then selects the ‘chores’ they wish to include in their schedule from a default list, with standard chores (e.g. take out trash, wash wishes, etc.) and a standard default time between the same chore. Note the user does not need to select from this list, it is just used as an aid to help establish a schedule.

Preconditions: The user must be signed up if they are not currently a member.
Extensions: The user can also add custom chores after selecting from the list.
_________________

## Title: Add Members to Household
### Actor: User

Scenario: User inputs email address of the member which they wish to add. System validates this email and user then adds them to the household. The household will then be accessible to the user just added and will appear in their list of households.
_________________

## Title: Add Chore
### Actor: User

Scenario: User names the chore, then decides the scope. The chore can apply to the whole household, to someone specific or to themselves. The user then must select if this chore will be repeated and if so at what interval. Finally the user selects a deadline for this chore. (These options will appear in a quiz-like form for the user)

Preconditions: The user who is adding this chore must be in that household. You cannot add a chore to a household you are not a member of. 
_________________

## Title: Rate Chore
### Actor: User

Scenario: Upon entering the app, if there is a chore to rate, this pops up automatically requiring the user to rate the chore before proceeding to the app. The user gives a ‘thumbs up’ or a ‘thumbs down’ in response to three questions regarding the person and the chore they are evaluating.

Preconditions: User who’s chore has been completed must have already been ‘completed’.
_________________

## Title: Complete Chore
### Actor: User

Scenario: Once completing a chore, a user must tap the circle beside this chore in their list of chores. This indicates that the chore has been completed and the system then removes this chore from the upcoming list.

# Domain Model
![image](domain%20model.png)
