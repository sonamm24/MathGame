require_relative 'questions'
require './twoPlayer'
require './game'

puts "Welcome to TwO-O-Player Ruby Math Game!"
puts "Player ONE , please choose a name: "
#  create 2 new Players class and get the name form the terminal 
p_name1 = gets.chomp
player1= Player.new(p_name1)

puts "Player TWO , please choose a name: "

p_num2 = gets.chomp
player2 = Player.new(p_num2)

puts "Game On!"
# creat a new GAme class , with two laready made players 
game = Game.new(player1, player2)
#  as long as player's lives is not zero , game is on 
while game.player1.is_alive && game.player2.is_alive
  puts "------- NEW TURN -------"
  puts "#{game.current_player.name}, your turn!"
#  creat a Question calss  
  question = Question.new
  question.pose_Q

  player_answer = gets.chomp

  if question.result(player_answer)
    puts "You got it right!"
  else
    puts "That is incorrect! Lose a life!"
    # if answer is not right , call reduce_life method
    game.current_player.reduce_life
  end
#  switch to the other player
  game.player_switch
  # incoke life_count_prompt to give a rport about players
  game.life_count_prompt

end

puts "------- GAME OVER -------"

game.is_winner

puts "#{game.is_winner.name} is the winner, they have #{game.is_winner.lives} lives left!"