require './twoPlayer'

class Game
  attr_accessor :player_control, :current_player, :winner, :player1, :player2
  def initialize(player1, player2)
    @player1 = player1
    @player2 = player2
    @current_player = player1
    @player_control
    @winner
  end

  def player_switch
    if self.current_player == self.player1
       self.current_player = player2
    else
      self.current_player = player1
    end
  end

  def is_winner
    if self.player1.is_alive 
       @winner = self.player1
    else
       @winner = self.player2
    end
  end

  def life_count_prompt
    puts "Player 1(#{@player1.name}): #{@player1.lives}/3 --- Player 2(#{@player2.name}): #{@player2.lives}/3"
  end
  
end