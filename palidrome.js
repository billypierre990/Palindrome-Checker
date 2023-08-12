// Palidrome Game
    const Palidrome = document.getElementById("palidromeIdentify");
   
    

    
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
       


