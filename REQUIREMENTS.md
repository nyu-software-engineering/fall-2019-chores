#Team Chores Requirements Page

#End-User Observations
	////TO-DO


#Use Cases:
##Title: Create Account
###Actor: User

Scenario: User enters a valid email and a password. System validates the email and ensures that this is not already associated with an account. System ensures password meets requirements. System will then send a confirmation email to user, after which they will be able to log into their new account.

Preconditions: Valid email account
_________________

##Title: Create Household
###Actor: User

Scenario: User signs up if they are not currently a member. User then selects the ‘chores’ they wish to include in their schedule from a default list, with standard chores (e.g. take out trash, wash wishes, etc.) and a standard default time between the same chore. Note the user does not need to select from this list, it is just used as an aid to help establish a schedule.

Preconditions: The user must be signed up if they are not currently a member.
Extensions: The user can also add custom chores after selecting from the list.
_________________

##Title: Add Members to Household
###Actor: User

Scenario: User inputs email address of the member which they wish to add. System validates this email and user then adds them to the household. The household will then be accessible to the user just added and will appear in their list of households.
_________________

##Title: Add Chore
###Actor: User

Scenario: User names the chore, then decides the scope. The chore can apply to the whole household, to someone specific or to themselves. The user then must select if this chore will be repeated and if so at what interval. Finally the user selects a deadline for this chore. (These options will appear in a quiz-like form for the user)

Preconditions: The user who is adding this chore must be in that household. You cannot add a chore to a household you are not a member of. 
_________________

##Title: Rate Chore
###Actor: User

Scenario: Upon entering the app, if there is a chore to rate, this pops up automatically requiring the user to rate the chore before proceeding to the app. The user gives a ‘thumbs up’ or a ‘thumbs down’ in response to three questions regarding the person and the chore they are evaluating.

Preconditions: User who’s chore has been completed must have already been ‘completed’.
_________________

##Title: Complete Chore
###Actor: User

Scenario: Once completing a chore, a user must tap the circle beside this chore in their list of chores. This indicates that the chore has been completed and the system then removes this chore from the upcoming list.

#Domain Model
	////TO-DO
