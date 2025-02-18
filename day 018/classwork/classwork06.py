# 6) შექმენით სია სადაც გექნებათ თქვენი სახელი გამეორებული ორჯერ.
# როცა გადაუვლით სიას თუკი სახელი უდრის თქვენს სახელს დაწერეთ
# hello admin სხვა შემთხვევაში დაწერეთ hello user
list = [input("enter your name: ")]
for i in range(len(list)):
    if list[i] == "Andria":
        print("hello admin")
    else:
        print("hello user")