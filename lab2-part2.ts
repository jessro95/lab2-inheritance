class SavingsAccount{
    private balance:number;
    private owner:String;
    private withdrawl:number;

    //constructor
    constructor(initialBalance:number, ownerName:String){
        this.balance = initialBalance;
        this.owner = ownerName;
        this.withdrawl = 0;
    }

    public deposit(amount:number):void{
        this.balance += amount;
    }

    public withdraw(amount:number):void{
        if(this.withdrawl < 3){
            this.balance -= amount;
            this.withdrawl++;
        } else {
            console.log("Error: you made already made "+ this.withdrawl + "withdrawls. Withdrawls cannot be performed");
        }

    }

    public checkBalance():void{
        console.log("Owner: " + this.owner + "\nBalance: " + this.balance);
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