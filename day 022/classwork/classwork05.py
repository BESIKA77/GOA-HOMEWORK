# შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი. თქვენი
# დავალებაა ამლისტიდან ამოიღიოთ ყველა ციფრი და
# დაახარისხოთ ისინი კენტებად და ლუწებად
def filter_list(numbers_list):
    for num in numbers_list:
        if num % 2 == 0:
            print("even:", num)
        else:
            print("odd:", num)


filter_list([1,2,3,4,5,6,7,8,9,10])