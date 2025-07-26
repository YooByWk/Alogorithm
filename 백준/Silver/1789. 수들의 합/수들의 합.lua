local S_str = io.read("*n") 
local S = tonumber(S_str)  

local current_sum = 0
local count = 0
local i = 1


while true do
    if current_sum + i > S then
        break 
    end
    current_sum = current_sum + i
    count = count + 1
    i = i + 1
end

print(count)