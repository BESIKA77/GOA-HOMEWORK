num1 = int(input("enter any number: "))
num2 = int(input("enter any number: "))
if num1 > num2:
    print("num1 is greater than num2")
for i in range(num2, num1):
    print(i)
else:
    print("num1 is greater than num2")
for i in range(num1, num2):
    print(i)