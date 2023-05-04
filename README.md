# DND - Build-A-Monster

## Overview

We created a dashboard that allows a user to create their own tabletop RPG Monster. The user can input monster characteristics like size, hit points, and other numerical stats and create a monster. The challenge rating and average level of the group will appear for the created monster.

Presentation Link: https://docs.google.com/presentation/d/1p2H1VOYV1S2l-KxgNv2MTVLyTSLPGuzVoiJnb_SPr14/edit?usp=sharing 

Dataset Used: https://www.kaggle.com/datasets/mrpantherson/dnd-5e-monsters 

## Analysis

Based on our dataset, we used multiple linear regression to evaluate the relationship between different monster characteristics (size, ac, hp, legendary, str, dex, con, int, wis, cha, fly, swim, and type) to determine the monster's challenge rating (cr). To set up the interactive element, we coded the coefficients & intercept from the model into Javascript, and added a Tableau embedded script to provide some statistics on average monster ability scores. 

## Challenges

There were a few challenges that our team ran into as we moved through the ETL process. The first few we ran into right away as we cleaned the dataset, but there was a major one soon after that. 

- 1st hurdle: Panda reads fractions as objects and the column needed to be floats to run future code.
    - Needed to look up formulas to convert those fractions (see image).
    
    ![Fraction conversion formula](https://github.com/TheCarpeDM/DND/blob/7b308333753437b94eacec777867c7feab3b5ae7/resources/fractions.PNG)
    
- 2nd hurdle: The 'speed' column was split into two columns: fly & swim. We then needed to fill the empty data with filler for another conversion formula (see image).
    - Then those two columns and the legendary columns were changed to be a simple yes/no.
    
    ![Column split and filler formula](https://github.com/TheCarpeDM/DND/blob/7b308333753437b94eacec777867c7feab3b5ae7/resources/speed_column.PNG)
    
- 3rd hurdle: There were too many types (71) and it was bogging down the machine learning process.
    - There were 15 basic types, with the rest being sub-types. We eliminated the sub-types through a regular expression formula to delete the parenthesis and anything       between them (see image)
    
    ![Regular Expression to delete parenthesis](https://github.com/TheCarpeDM/DND/blob/7b308333753437b94eacec777867c7feab3b5ae7/resources/ReGex.PNG)

- 4th hurdle: As we tried to create a Python-Flask app, we realized that it would take our team too long to implement before our deadline. We decided that in order to    have a working model, we would run our dashboard through JavaScript instead. This helped us get a working model out, but isn't as streamlined as we would like.

## Plans for Future Work
- Integrating our Javascript with a Python Flask app so that the Create Monster button actually runs through our model in Python instead of through the equation in Javascript.
- Add a "CR" filter to the Tableau project so that users can see the summary of different monster stats based on a certain CR.
- Add an additional field to the output showing the most similar monster based on their statistics.
