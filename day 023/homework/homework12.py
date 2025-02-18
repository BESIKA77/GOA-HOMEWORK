# 12)შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვი.
# თქვენი დავალებაა, რომ დააბრუნოთ ლუწია თუ კენტი ის.
def my_list(number):
    if number % 2 == 0:
        return "even"
    else:
        return "odd"
print(my_list(54))