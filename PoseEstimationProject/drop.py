import random

#1: 드랍 X, 2: 드랍 O

N=0

for i in range(3):
    n = 0
    for j in range(10):
        k = random.randint(1, 2)
        print(k)
        n += (-1)**k
    print(n)
    print("_"*10)
    if n > 0:
        N += 1
    elif n==0:
        continue
    else:
        N -= 1

if N>0:
    print("드랍 ㄱ")
else:
    print("드랍 ㄴㄴ")