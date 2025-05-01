require 'pry'

def d20
  (1..20).to_a.sample
end

def test
  min, mid, max = *[d20, d20, d20].sort
  r = { low: mid - min, high: max - mid }
  r[:net] = if r[:low] > r[:high] 
    r[:low]
  else
    r[:high]
  end
  r
end

def test2
  min, low_mid, high_mid, max = *[d20, d20, d20, d20].sort
  r = { low: low_mid - min, high: max - high_mid }
  r[:net] = [ r[:high] , r[:low] ]
  r
end


def sample_block(size = 100_000)
  arr = []
  size.times do arr << test end
  arr
end

net_histo = Hash.new(0)

sample_block.each do |sample|
  net_histo[ sample[:net]] += 1
end

net_histo.keys.sort.each do |key|
  STDERR.puts "#{key}, #{net_histo[key]}"
  puts "#{key}, #{net_histo[key]}"
end
