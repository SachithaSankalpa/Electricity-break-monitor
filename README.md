# Electricity-break-monitor
Second year second semester IOT projects. (Group Project)
In case of a sudden power breakdown the consumers gets frustrated and confused. Even the electricity board has to search the entire electrical network in the area to find the post in which the electricity breakdown took place and to find the broken power line.

Therefore this helps in finding the place in which power breakdown occurred (the post number) in a situation such as a powe failure due to fallen trees.

Therefore even in a thunderstorm, this helps the electricity board to find the place of breakdown directly without the consumers’ engagement because this device shows the place of the breakdown to the specific maintenance group.

Key Features 

• User Friendly 
• Easy to use 
• Real time monitoring

PROBLEM DEFINITION
Electricity is an essential part of people’s everyday busy lives. Therefore, in the event of a power outage, it is very difficult to find the place of the breakdown. It is not easy when there are a lot of branches to be cut. Which is why, the maintenance crews have to spend a long time at one place before moving to the other to fix the breakdowns. Most of the time they have to choose another day. 
This happens because of the inconvenience caused by having to spend time in finding the place of breakdown.
A lot of time could be saved if the specific place is known beforehand. 
This provides a solution to the problem of time .


TECHNICAL STATEMENT

The electricity we get from the power line exceeds 240V. Therefore we must convert it to 12Vby connecting a 12V adaptor. We get a 12V DC output from it. This should be added to our chip. 
The box which holds this unit must be earthed as given below.

A signal will be sent every 30 second to the database we created notifying electricity is available in the power lines.
In case of a breakdown, a signal will not be sent to the database as there is no electricity in the power lines. 
Then it will show the number of the post through which the electricity does not flow through.
A signal will be sent to the time stamp of the database every 30 second. But a timestamp cannot be added to a unit without a time module. 
So, when a signal comes from the unit, a server timestamp will be created in the real time database by a function in the server. 
If there’s a delay of 5 minutes, a log in the sql database will notify of a power failure.
All these functions are included in the server.
the src here contains a website with svelter files. The functions include 2 types of functions which run in the backend. Namely ,two functions;

 1. Function which renders the server side
 2. Function which directs to the timestamp when the value in the database changes

