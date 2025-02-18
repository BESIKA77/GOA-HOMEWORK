# 3) შექმენით ფუნქცია რომელიც ამოწმებს რიცხვი კენტია თუ ლუწი.
def func(num):
    if num % 2 == 0:
        return "it's even"
    else: 
        return "it's odd"
print(func(6))