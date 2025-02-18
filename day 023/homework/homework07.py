# 7) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგების ლისტი. ამ ფუნქციამ
# უნდა იპოვოს ყველაზე გრძელი და ყველაზე მოკლე სტრინგები ამ ლისტში.
def my_func(list):
    # longest_string = ""
    # for i in list:
    #     if len(i) >= len(longest_stringstring):
    #         longest_stringstring = i
    #     print("longest_stringstring: ",longest_stringstring)
    shortest_string = "           "
    for i in list:
        if len(i) <= len(shortest_string):
            shortest_string = i
            print("shortest_string: ",len(shortest_string))
my_func(["Tazo", "Sandro", "Rati", "Andria"])
