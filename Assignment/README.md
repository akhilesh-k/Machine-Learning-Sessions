## Machine Learning Bootcamp v2.0

## Instructions to submit

Login into your GitHub account and fork this repo by clicking on the Fork button on the top right. You now need to clone the forked repository, complete the assignment, stage and commit the changes, and finally push the changes online. [This](https://try.github.io) interactive tutorial will help you cover the basics of Git. After doing all these steps, fill in [this form]().

The commands given below will do the job.

> git clone https://github.com/akhilesh-k/Machine-Learning-Sessions 
> jupyter notebook  
> git add -A  
> git commit -m "Assignment 1 completed"  
> git push origin master  

If you are uncomfortable with command line, you can use Git GUI tool GitKraken. Install it from [here](https://www.gitkraken.com/download). After installing,
1. Login into GitKraken with GitHub
2. Choose Clone Repo (File -> Clone Repo)
3. Open the Repo
4. Complete the assignment.
5. Stage all changes (button on the right.)
6. Fill in the commit message and press commit.
7. Push the repo (button is on the top).
8. Fill in [this form]().


## Assignment 1.1 - Numpy and Python Basics

The first part of the assignment is aimed to make you familiar with some of the basic Numpy functions. This assignment, along with the part 2 of it, is given in Python Notebook to make you feel comfortable while working in that notebook environment.


### Files Given

	array.pickle - A pickle file containing input array.
	Assignment_1_1.ipynb - A Python notebook which needs to be filled by you at appropriate palces to complete the assignment. Read the comments in order to understand what is required to be done at each step. 

In case you don't know the function which is required to execute any given operation or if you can't remember its syntax, Google your way out! Still if you face any difficulties, you can ask on the Slack channel. 


## Assignment 1.2 - Pandas Matplotlib


The 2nd part of this assignment helps you get familiar with Pandas functionalities and various Matplotlib operations you can do to generate various kinds of plots.

### Files Given

	day.csv -  It is part of a Bike Sharing Dataset. This dataset relates the bike sharing counts with various factors like temperature, weather and season. The fields present in day.csv are:
		
			* instant: record index
			* dteday : date
			* season : season (1:springer, 2:summer, 3:fall, 4:winter)
			* yr : year (0: 2011, 1:2012)
			* mnth : month ( 1 to 12)
			* hr : hour (0 to 23)
			* holiday : weather day is holiday or not (extracted from http://dchr.dc.gov/page/holiday-schedule)
			* weekday : day of the week
			* workingday : if day is neither weekend nor holiday is 1, otherwise is 0.
			+ weathersit : 
					* 1: Clear, Few clouds, Partly cloudy, Partly cloudy
					* 2: Mist + Cloudy, Mist + Broken clouds, Mist + Few clouds, Mist
					* 3: Light Snow, Light Rain + Thunderstorm + Scattered clouds, Light Rain + Scattered clouds
					* 4: Heavy Rain + Ice Pallets + Thunderstorm + Mist, Snow + Fog
			* temp : Normalized temperature in Celsius. The values are divided to 41 (max)
			* atemp: Normalized feeling temperature in Celsius. The values are divided to 50 (max)
			* hum: Normalized humidity. The values are divided to 100 (max)
			* windspeed: Normalized wind speed. The values are divided to 67 (max)
			* casual: count of casual users
			* registered: count of registered users
			* cnt: count of total rental bikes including both casual and registered
	Assignment_1_2.ipynb - A Python notebook which needs to be filled by you at appropriate palces to complete the assignment. Read the comments and text in order to understand what is required to be done at each step. 


This part of the assignment is a bit tougher than the first one. On successfully filling a plotting function completely, the corresponding plot will get generated.	

