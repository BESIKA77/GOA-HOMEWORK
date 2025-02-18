#example 1
for i in range(11):
    print(i)


#example 2
user_input = int(input("enter number: "))
if user_input % 2 != 0:
    print("Number is odd")


#example 3
for i in range(20, 40, 2):
    print(i)
    

#exmample 4
sum = 0
for i in range(10, 30):
    sum = sum + i

print(sum)


#example 5
numbers = []
even = []
odd = []
for i in range(10):
    user_input = int(input("enter number: "))
    numbers.append(user_input)

for i in range(len(numbers)):
    if numbers[i] % 2 == 0:
        even.append(numbers[i])
    else:
        continue