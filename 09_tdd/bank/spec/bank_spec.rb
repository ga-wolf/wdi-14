require_relative '../bank' # Getting the contents of a file

describe Bank do
  # bank = Bank.new "RSpec Bank"
  let (:bank) { Bank.new "RSpec Bank" } # Setup

  # Bank.new - dot for class methods
  describe ".new" do
    it "should create a new bank object" do
      expect( bank ).to_not eq nil
    end

    it "should have a name" do
      expect( bank.name ).to eq "RSpec Bank"
    end

    it "should have no accounts" do
      expect( bank.accounts.count ).to eq 0
    end
  end

  # bank.create_account - hash for instance methods
  describe "#create_account" do
    it "should create an account for a user with a given deposit" do
      bank.create_account "Gerry", 200 # Execution

      expect( bank.balance("Gerry") ).to eq 200 # Validation
    end
  end
end
