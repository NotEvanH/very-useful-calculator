def find_arrangements(volume):
    arrangements = set()
    for a in range(1, int(volume ** (1/3)) + 1):
        if volume % a == 0:
            for b in range(a, int((volume // a) ** 0.5) + 1):
                if (volume // a) % b == 0:
                    c = volume // (a * b)
                    if b <= c:
                        arrangements.add((a, b, c))
    return sorted(arrangements)

arrangements = find_arrangements(10000)
print(arrangements, len(arrangements))
