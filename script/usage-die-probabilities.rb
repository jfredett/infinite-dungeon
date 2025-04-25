#!/usr/bin/env ruby

PROBABILITIES = [0.95, 0.8, 0.5]

def solve_n(x, p)
  Math.log(1.0 - p) / Math.log((x - 1.0) / x.to_f)
end

puts
puts "standard die time-to-degrade (95, 80, 50 ptiles), via equation"
puts

19.times do |size|
  probs = PROBABILITIES.map { |p| solve_n(size + 2, p).round(1) }.join("|")
  puts "| #{size + 2} | #{probs} |"
end


class Die
  attr_reader :sides, :pred, :histo

  SAMPLE_SIZE = 100_000

  def initialize(sides, &pred)
    @sides = sides
    @pred = pred
    @histo = Hash.new(0)
  end
  
  def run!
    return if @has_run
    SAMPLE_SIZE.times do
      count = 0
      while true do
        count += 1
        if roll! == :downgrade
          @histo[count] += 1
          break
        end
      end
    end
    @has_run = true
  end

  def run_along_chain!(chain)
    return if @has_run

    original_sides = @sides
    @histo = Hash.new(0)

    SAMPLE_SIZE.times do
      catch :goto do
        count = 0
        while true do
          count += 1
          if roll! == :downgrade
            if chain.empty?
              @histo[count] += 1
              throw :goto
            else
              @sides = chain.shift
            end
          end
        end
      end
    end

    @has_run = true
    @sides = original_sides
    self
  end

  def values
    (1..sides).to_a
  end

  def roll!
    return :downgrade if @pred.( self.values.sample )
    return :nothing
  end

  # with probability `p`, it will take this many steps to downgrade.
  def ptile(p)
    total = (SAMPLE_SIZE * p).floor
    step = 0
    self.histo.keys.sort.each do |k|
      step += 1
      total -= self.histo[k]
      break if total < 0
    end
    step
  end
end


# downgrade on a 1 only
dice = (2..20).map { |sides| Die.new(sides) { |v| v == 1 } }

# downgrade on a 2-
black_hack_die = (1..20).map { |sides| Die.new(sides) { |v| v <= 2 } }

puts
puts "standard die time-to-degrade (95, 80, 50 ptiles)"
puts

# dice.each(&:run!).each do |die|
#   puts "| #{die.sides} | #{die.ptile(0.95)} | #{die.ptile(0.8)} | #{die.ptile(0.5)} |"
# end

puts
puts "black hack die (2-) ttd"
puts

# black_hack_die.each(&:run!).each do |die|
#   puts "| #{die.sides} | #{die.ptile(0.95)} | #{die.ptile(0.8)} | #{die.ptile(0.5)} |"
# end

puts
puts "d20 chain on 1- time to fully degrade (95, 80, 50)"
puts

d20 = Die.new(20) { |v| v == 1 }
d20.run_along_chain!([12,10,8,6,4]).tap do |die|
  puts "| #{die.sides} | #{die.ptile(0.95)} | #{die.ptile(0.8)} | #{die.ptile(0.5)} |"
end

puts
puts "d20 chain on 2- time to fully degrade (95, 80, 50)"
puts
d20 = Die.new(20) { |v| v <= 2 }
d20.run_along_chain!([12,10,8,6,4]).tap do |die|
  puts "| #{die.sides} | #{die.ptile(0.95)} | #{die.ptile(0.8)} | #{die.ptile(0.5)} |"
end

puts
puts "d6 on a descend-by-1 chain degrade on 1- time to fully degrade (95, 80, 50)"
puts
d20 = Die.new(6) { |v| v <= 1 }
d20.run_along_chain!([5,4,3,2,1]).tap do |die|
  puts "| #{die.sides} | #{die.ptile(0.95)} | #{die.ptile(0.8)} | #{die.ptile(0.5)} |"
end
