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


numbers = []
for i in range(1,10 + 1):
    numbers.append(i)
even = []
odd = []
for i in numbers:
    if i %2  == 0:
        odd.append(i)
for i in numbers:
    if i %2  >0:
        even.append(i)
print(even)
print(odd)
    

