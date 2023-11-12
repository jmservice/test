// Get the logged-in user from local storage
const loggedInUser = localStorage.getItem('loggedInUser');

// Display the username on the welcome page
if (loggedInUser) {
    document.write(loggedInUser);
} else {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
}
// Load and display the stored value when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    const storedValue = localStorage.getItem(loggedInUser + '_storedValue');
    const storedValueInput = document.getElementById('storedValue');
    const storedValue2 = localStorage.getItem(loggedInUser + '_storedValue2');
    const storedValueInput2 = document.getElementById('storedValue2');
    const grantdValue = document.getElementById('grant');
    
    if (storedValue2) {
        storedValueInput2.value = storedValue2;
    }
    else{
    	storedValueInput2.value = 0;
    }

    if (storedValue) {
        storedValueInput.value = storedValue;
    }
    else{
    	storedValueInput.value = 0;
    }
    if(storedValue > 0){
    	document.getElementById("grant").style.color = "green";
    	grantdValue.value = 'Claimed ✔';
    	


    }else{
    	document.getElementById("grant").style.color = "red";
    	grantdValue.value = 'Not Claimed X';
    }
});

// Function to store the value permanently
function storeValue() {
	  const userStoredValue = 25;

    // Store the value for the logged-in user in local storage
    localStorage.setItem(loggedInUser + '_storedValue', userStoredValue);

    // Display the stored value in the input box
    document.getElementById('storedValue').value = userStoredValue;

}

function storeValue2() {
	  const userStoredValue2 = 7485.23;

    // Store the value for the logged-in user in local storage
    localStorage.setItem(loggedInUser + '_storedValue2', userStoredValue2);

    // Display the stored value in the input box
    document.getElementById('storedValue2').value = userStoredValue2;

}


 // JavaScript function to show the floating card
        function showFloatingCard() {
            var floatingCard = document.getElementById('floatingCard');
            
            floatingCard.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCard.style.display = 'none';
            }, 3000);
        }

        function showFloatingCard2() {
            var floatingCard2 = document.getElementById('floatingCard2');
            
            floatingCard2.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCard2.style.display = 'none';
            }, 3000);
        }

        function showFloatingCard3() {
            var floatingCard3 = document.getElementById('floatingCard3');
            
            floatingCard3.style.display = 'block';

            // Automatically hide the floating card after 3 seconds
            setTimeout(function() {
                floatingCard3.style.display = 'none';
            }, 3000);
        }

        function showFloatingCard4() {
            var floatingCard4 = document.getElementById('floatingCard4');
            
            floatingCard4.style.display = 'block';

            //
        }

        function showFloatingCard5() {
            var floatingCard4 = document.getElementById('floatingCard4');
            
            floatingCard4.style.display = 'none';

            //
        }

         function showFloatingCard51() {
            var floatingCard5 = document.getElementById('floatingCard5');
            
            floatingCard5.style.display = 'none';

            //
        }

        function showFloatingCard52() {
            var floatingCard5 = document.getElementById('floatingCard5');
            
            floatingCard5.style.display = 'block';

            //
        }
        function showFloatingCard6() {
            var floatingCard6 = document.getElementById('floatingCard6');
            
            floatingCard6.style.display = 'block';

            //
        }
        function showFloatingCard7() {
            var floatingCard6 = document.getElementById('floatingCard6');
            
            floatingCard6.style.display = 'none';

            //
        }

        function showSection(sectionId) {
            // Hide all sections
            document.getElementById('section1').style.display = 'none';
            document.getElementById('section2').style.display = 'none';
            document.getElementById('section3').style.display = 'none';
            document.getElementById('section4').style.display = 'none';
            document.getElementById('section5').style.display = 'none';

            // Show the selected section
            document.getElementById(sectionId).style.display = 'block';
        }
