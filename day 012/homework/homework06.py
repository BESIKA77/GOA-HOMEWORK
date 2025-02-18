numbers = range(1, 51)
one_fifth = []
for i in range(len(numbers)):
    if numbers[i] % 5 == 0:
        one_fifth.append(numbers[i])
print(sum(one_fifth))
