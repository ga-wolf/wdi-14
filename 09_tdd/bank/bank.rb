class Bank
  attr_reader :name, :accounts

  def initialize name
    @name = name
    @accounts = {}
  end

  def create_account name, balance
    @accounts[name] = balance
  end

  def balance name
    @accounts[name]
  end
end
