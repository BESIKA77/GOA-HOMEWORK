print("~{Guess Game}~")
print("Hello this is game about guessing the number,")
print("if you guess you win the 20 bucks.")
print("Hint: this number is up to 20")

num = 0

while num != 13:
    num = int(input("enter number: "))

    if num == 13:
        print("You Won!, Here's your money (20$)")
    else:
        print("Wrong number, please try again")
