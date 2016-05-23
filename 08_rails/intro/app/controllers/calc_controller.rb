class CalcController < ApplicationController

  def calculate
    @first_num = params[:x].to_f
    @second_num = params[:y].to_f
    @operator = params[:operator]

    @result = case @operator
    when "+" then @first_num + @second_num
    when "-" then @first_num - @second_num
    when "*" then @first_num * @second_num
    when "divide" then @first_num / @second_num
    end

  end

end
