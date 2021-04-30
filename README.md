# DayPlannerProject
Project implements a very simple day planner template with persistent appointments based on local storage. Thanks to Michell Brito for invaluable assitance with the design of this project.

Deployed Page: https://github.com/GiantRobot76/DayPlannerProject

Preview Screenshot:
![image](https://user-images.githubusercontent.com/34629779/116717045-b06bad00-a995-11eb-8843-2e5c93ee0154.png)

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
