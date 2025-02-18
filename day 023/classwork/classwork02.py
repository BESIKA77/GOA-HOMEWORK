# 1) შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი. ამ ფუნქციას
# უნდა დაარქვათ calculate. უნდა დაბეჭდოთ რომელი ოპრეაციის
# არჩევა შეუძლია მომხმარებელს და შემდეგ უნდა ჩაატაროთ ის
# ოპერაცია იმ ორ რიცხვს შორის რომელიც მომხმარებელმა შემოიყვანა
def calculate(num1, num2):
    print("1.plus")
    print("2.minus")
    print("3.multiplication")
    print("4.devision")
    user_input = int(input("choose whitch one shoud i do: "))
    if user_input == 1:
        print(num1 + num2)
    elif user_input == 2:
        print(num1 - num2)
    elif user_input == 3:
        print(num1 * num2)
    elif user_input == 4:
        print(num1 / num2)
    else:
        print("you didn't choose the correct one")
calculate(8, 6)
    
