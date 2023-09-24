# N, M = map(int,(input().split()))
# for _ in range(1):
#     if  N == 1 or M == 1 :
#         print(1)
#         print(1)
#         break
#     if N != M :
#         X = min(N,M)
#         Y = max(N,M)
#     else:
#         X , Y  = N, M
#     i = 2
#     temp = 1
#     temp_mul = 1
#     while i != N and i != M:
#         if X % i == 0 and Y % i == 0:
#             temp *= i
#             X /= i
#             Y /= i
#             i = 2
#         else:
#             i += 1
#
#     else:
#         if temp == 1:
#             print(1)
#             print(X * Y)
#         else:
#             temp = int(temp)
#
#             print((temp))
#             print(int(N*M//temp))
a, b = map(int, input().split())

def gcd(a, b):
    while b > 0:
        a, b = b, a % b
    return a

def lcm(a, b):
    return a * b // gcd(a, b)

print(gcd(a, b))
print(lcm(a,b))