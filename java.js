let year;

function fullname(){
         let fullName = prompt("Please enter your full name:");
                

                document.getElementById("fname").textContent = fullName;
        }

   fullname();

function Username(){
         let username = prompt("Please enter your username:");
                

                document.getElementById("username").innerHTML = username;
        }

   Username();

function yourgender(){
	let gender;
        let getGender = confirm("What is your gender" + '\n' + "Press OK if you are male" + '\n' +  "Cancel if you are female");
        if (getGender) {
            gender = "M";

            alert("Your profile gender is set to MALE");

        }
        else {
        gender = "F";
        alert("Your profile gender is set to FEMALE");
        }

       document.getElementById("gender").innerHTML = gender;

    }

    yourgender();

function yourdescription(){
     description = prompt("Please type a brief description of yourself");
                
	   document.getElementById("desc").innerHTML = description;
    }

    yourdescription();

function birthyear(){
         year = prompt("Please enter your Birthyear:");
                
                document.getElementById("year").innerHTML = year;
        }

   birthyear();

function yourage(){
                let currentYear = 2023;
                let age = currentYear - year;
                document.getElementById("age").innerHTML = age;
        }

   yourage();

function ProfilePicture(){
        let Change = confirm("Do you want to use a custom profile picture?");
        if (Change) {
            let pic = prompt("Please enter the file namee of the picture: (Ex. wow.jpg)");
            
            document.getElementById("ppic").src = pic;

        }
         }
        ProfilePicture();
