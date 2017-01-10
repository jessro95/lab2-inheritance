class Account{
    private balance:number;
    private owner:String;

    //constructor
    constructor(initialBalance:number, ownerName:String){
        this.balance = initialBalance;
        this.owner = ownerName;
    }

    public deposit(amount:number):void{
        this.balance += amount;
    }

    public withdraw(amount:number):void{
        this.balance -= amount;
    }

    public checkBalance():void{
        console.log("Owner: " + this.owner + "\nBalance: " + this.balance);
    }

}
class CheckingAccount extends Account{
    //constructor
    constructor(initialBalance:number, ownerName:String){
        super(initialBalance, ownerName);
    }

}

/*var checking:CheckingAccount = new CheckingAccount(155, "Jessica");
checking.checkBalance();
checking.deposit(144);
checking.checkBalance();
checking.withdraw(15);
checking.checkBalance();
checking.withdraw(15);
checking.withdraw(15);
checking.checkBalance();
checking.withdraw(15);
checking.checkBalance();*/

class SavingsAccount extends Account{

    private withdrawl:number;

    //constructor
    constructor(initialBalance:number, ownerName:String){
        super(initialBalance, ownerName);
        this.withdrawl = 0;
    }

    public withdraw(amount:number):void{
        if(this.withdrawl < 3){
            super.withdraw(amount);
            this.withdrawl++;
        } else {
            console.log("Error: you made already made "+ this.withdrawl + "withdrawls. Withdrawls cannot be performed");
        }

    }

}


var saving:SavingsAccount = new SavingsAccount(155, "Jessica");
saving.checkBalance();
saving.deposit(144);
saving.checkBalance();
saving.withdraw(15);
saving.checkBalance();
saving.withdraw(15);
saving.withdraw(15);
saving.checkBalance();
saving.withdraw(15);
saving.checkBalance();