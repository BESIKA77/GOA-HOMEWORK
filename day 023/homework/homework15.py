# 15)შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია.
# შემდეგ გამოიყენეთ ციკლი, რათა განიხილოთ ამ სიის ყველა რიცხვი
# - თუ რიცხვი ლუწია, ახალ სიაში დაამატეთ მისი განაყოფი ორზე,
# ხოლო თუ კენტია, მაშინ რიცხვის ნამრავლი ორზე. საბოლოოდ
# დააბრუნეთ განახლებული სია
def func(list):
    new_list = []
    for i in range(len(list)):
        if list[i] % 2 == 0:
            new_list.append(list[i] // 2) 
        else:
            new_list.append(list[i] * 2)
    print(new_list)
func([1,2,3,4,5,6,7,8,9])