# 1
numbers = [-1, 5, -6, 7, -43, 87, -32, 92, 0]
positive_numbers = []
negative_numbers = []
for i in range(len(numbers)):
    if numbers[i] == 0:
        continue
    elif numbers[i] < 0:
        negative_numbers.append(numbers[i])
    else:
        positive_numbers.append(numbers[i])
print("this is positive numbers: ", positive_numbers)
print("this is negative numbers: ", negative_numbers)

# 2
numbers_list = []
even_numbers = []
odd_numbers = []
for i in range(10):
    user_numbers = int(input("enter number: "))
    numbers_list.append(user_numbers)

for i in range(len(numbers_list)):
    if numbers_list[i] % 2 == 0:
        even_numbers.append(numbers_list[i])
    else:
        odd_numbers.append(numbers_list[i])
print("this is even numbers: ", even_numbers)
print("this is odd numbers: ", odd_numbers)

# 3
numbers_list = []
double_digit = []

for i in range(10):
    user_numbers = int(input("enter number: "))
    numbers_list.append(user_numbers)

for i in range(len(numbers_list)):
    if numbers_list[i] > 9 and numbers_list[i] < 100:
        double_digit.append(numbers_list[i])
    else:
        continue
print("double digit numbers: ", double_digit) #ორნიშნა
print(len(double_digit)) #ორნიშნების რაოდენობა

# 4 
numbers = []
more = []
less = []
for i in range(10):
    users_input = int(input("please enter number: "))
    numbers.append(users_input)

for i in range(len(numbers)):
    if numbers[i] == 100:
        continue
    elif numbers[i] > 100:
        more.append(numbers[i])
    else:
        less.append(numbers[i])
print("this numbers are more than 100: ", more)
print("this numbers are less than 100: ", less)

# 5
print("Guess Game")
print("Hello this game is about guessing the number,")
print("you have three chances to win 20$ and to start")
print("your gonna have to give me 2$, but if you loose")
print("you loose your money")
user_input = input("do you wanna play this game: ")
if user_input == "yes":
    money = int(input("give me 2$ to start: "))
    if money >= 2:
        print("Hint: this number is up to 10")
        print("game has begin you have three chances left")
        
        num = 0

        while num != 3:
            num = int(input("enter number: "))

        if num == 3:
            print("You Won!, Here's your money (20$)")
        else:
            print("Wrong numbers, please try again")
    else:
        print("your not paying 2$, so you don't get to play")
else:
    print("ok, bye-bye")