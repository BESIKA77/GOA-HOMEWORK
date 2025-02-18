dictionary = {"a": 1, "b": 2}
list = list(dictionary.items())
i = 0
while i < len(list):
    key, value = list[i]
    print(key, value)
    i += 1