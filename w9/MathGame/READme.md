# TwO-O-Player Math Game - Planning-

1. This is a Math game

2. 2-Player

3. Players take turns answering math questions

4. Each player starts with 3 lives.

5. Each player must answer the math questions correctly otherwise they will lose a life.

6. During each turn one player generates a question by picking two numbers between 1 and 20 (for example 15 & 8)

7. The other player has to then answer the generated question.

8. At the end of each turn the game will output their current remaining lives.

9. The game does not end until a player loses all their lives.

10. After the last turn the game will output who won and their score.



# Task 1: Extract Nouns for Classes

player
question
game

player - name, lives
question - number, generates answers, output, tell if an answer is correct or wrong 


game - checking lives to check winner, keeping track of turns, prompts players for numbers

# player class/object
 The player class will store name of the player. A player class will keep track of lives.

 ## state
 name, number of lives

 ## method/behaviour
  setPlayer(string, integer)
  loseOneLife()
  setName(string)
  getName()
  noLives()

  setQuestion()
  numOfquestion()
  answerIsCorect()
  

# question class/object
 question class will take numbers and generate question and answers and it will output if answer is wrong or right 

# game class/object
  it will declared the winner. it will keep track of the turns and it will request for  numbers from  the players.


