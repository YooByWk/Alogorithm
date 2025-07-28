
local N = tonumber(io.read("*l")) 
local sangeun_cards = {}          

local st_line = io.read("*l")
for num_str in st_line:gmatch("%S+") do 
    sangeun_cards[tonumber(num_str)] = true 
end

local M = tonumber(io.read("*l"))
local target_line = io.read("*l")
local result = {}                 

for num_str in target_line:gmatch("%S+") do 
    local target_num = tonumber(num_str)
    if sangeun_cards[target_num] then
        table.insert(result, "1")
    else
        table.insert(result, "0")
    end
end

print(table.concat(result, " ")) 