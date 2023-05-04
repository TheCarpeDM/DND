# DND - Build-A-Monster

## Overview

We are creating a dashboard to allow a user to create their own tabletop RPG Monster. The user will be able to input monster characteristics like size, hit points, and other numerical stats and create a monster. The challenge rating and average level of the group will appear for the created monster.

Presentation Link: https://docs.google.com/presentation/d/1p2H1VOYV1S2l-KxgNv2MTVLyTSLPGuzVoiJnb_SPr14/edit?usp=sharing 

Dataset Used: https://www.kaggle.com/datasets/mrpantherson/dnd-5e-monsters 

## Analysis

Based on our dataset, we used multiple linear regression to evaluate the relationship between different monster characteristics (size, ac, hp, legendary, str, dex, con, int, wis, cha, fly, swim, and type) to determine the monster's challenge rating (cr). To set up the interactive element, we coded the coefficients & intercept from the model into Javascript, and added a Tableau embedded script to provide some statistics on average monster ability scores. 

## Challenges

## Plans for Future Work
- Integrating our Javascript with a Python Flask app so that the Create Monster button actually runs through our model in Python instead of through the equation in Javascript.
- Add a "CR" filter to the Tableau project so that users can see the summary of different monster stats based on a certain CR.
- Add an additional field to the output showing the most similar monster based on their statistics.
