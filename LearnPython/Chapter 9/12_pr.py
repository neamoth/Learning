import random
def game():
    return random.randint(0, 100)
score = game()

with open('score.txt', 'r') as f:
    highscore = f.read()
if(highscore == ''):
    with open('score.txt', 'w') as f:
        f.write(str(score))
elif(int(highscore)<score):
    with open('score.txt', 'w') as f:
        f.write(str(score))
with open('score.txt', 'r') as file:
    a = file.read()
    print(f"Your score {score} and High score is {a}")