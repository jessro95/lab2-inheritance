class CheckingAccount{
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

var checking:CheckingAccount = new CheckingAccount(155, "Jessica");
checking.checkBalance();
checking.deposit(144);
checking.checkBalance();
checking.withdraw(15);
checking.checkBalance();
checking.withdraw(15);
checking.withdraw(15);
checking.checkBalance();
checking.withdraw(15);
checking.checkBalance();