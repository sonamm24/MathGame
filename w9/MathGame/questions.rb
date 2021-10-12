class Question
  attr_accessor :number1, :number2
  def initialize
    @number1 = rand(1..20)
    @number2 = rand(1..20)
    @answer = @number1 + @number2
  end

  def pose_Q
    puts "What does #{@number1} + #{@number2} equal?"
  end
# player_answer = answer is comming from terminal /player
  def result(answer)
    @answer == answer.to_i  
  end

end

