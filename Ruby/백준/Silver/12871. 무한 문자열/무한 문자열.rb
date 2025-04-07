def gcd(a, b)
  b == 0 ? a : gcd(b, a % b)
end

def lcm(a, b)
  a * b / gcd(a, b)
end

s = gets.chomp
t = gets.chomp

lcm_length = lcm(s.length, t.length)

if s * (lcm_length / s.length) == t * (lcm_length / t.length)
  puts 1
else
  puts 0
end