// Palidrome Game
    const Palidrome = document.getElementById("palidromeIdentify");
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const submit = document.getElementById("submit");
    let loginForm = document.getElementById("loginForm");
    const zipCode = document.getElementById("zipCode");

    const palidromeImg = document.getElementById("palidrome");

    

    
    
    


    function palindromeChecker(string){

        // find the length of a string
            const len = string.length;
    
        // loop through half of the string
            for (let i = 0; i < len / 2; i++) {
    
        // check if first and last string are same
            if (string[i] !== string[len - 1 - i]) {
                return 'Not a Palidrome';
            }else{
                return 'Palidrome!!!' ;
            }
        };
    };


  




var j=0;

while(j<10){


    const Ask = prompt("Want to play Palidromes?");

    if(Ask == 'yes'){
        //  take input
            const string = prompt('Enter a string:');

        // call the function
            let value = palindromeChecker(string);

        //Give the user the Result 
            result = alert(value);

            j++;

        }else if (Ask == "no"){

            alert("Ok, Thank you")

            j=10;
    };
};
       
loginForm.addEventListener("submit", function checkInfo(){
    const fullName = firstName.value + " " + lastName.value;
    const ZipCode = zipCode.value;
    if(fullName.length > 20){
        if(ZipCode.length == 5){
            alert("Secret Message....")
            alert("THE THINGS YOU TAKE FOR GRANTED SOMEONE ELSE IS PRAYING FOR")
            alert("STAY POSITIVE")
            palidromeImg.scr = "Thrid Pics/message picture.png";
        }else{
            alert("Invalid Zip Code")
        }
    }else {
        alert("you do not have 20 characters in your name")
    }
    
});

