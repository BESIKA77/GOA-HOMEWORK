# 1) შექმენით ფუნქცია რომელსაც გადაეცემა რამდენიმე სტრინგი.
# თქვენი დავალებაა მომხმარებელს შემოატანინოთ ეს სტრინგები
# და შემდეგ დაპრინტოთ ლისთის სახით
list = []
def strings(str1, str2, str3, str4):
    list.append(str1)
    list.append(str2)
    list.append(str3)
    list.append(str4)
strings(input("enter something:"), input("enter something:"), input("enter something:"), input("enter something:") )
print(list)