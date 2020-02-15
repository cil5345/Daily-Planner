$(document).ready(function () {
    //current timer
    let timer = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(timer);

    // let m = moment().parseZone("MMMM Do YYYY, h:mm:ss a");








    // ====================================================================
    let workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"]
    // console.log(workTimeArr[1]);
    for (let i = 0; i < workHours.length; i++) {
        // console.log(workTimeArr[i]);

        let newRow = $("<div>");
        let hourCol = $("<div>");
        let titleCol = $("<input>");
        let buttonCol = $("<button>");
       
        
        newRow.addClass("row");
        hourCol.addClass("col-sm-1");
        titleCol.addClass("col-sm-10 title-input");
        buttonCol.addClass("col-sm-1 my-save-button");
        titleCol.attr("id", "text-input-" + parseInt(workHours[i]));

        console.log
        
       
       
    

        



     

   
      
        // ====================================================================
        //add addClass() function to  (titleCol) change background color to grey future green current and red past. 
        // console.log(moment());
        let now = moment();
        let notNow = moment(workHours[i], "Ha");

        // console.log(workHours[i])
        // console.log(now);
        // console.log("----------")
        // console.log(notNow);
        // console.log("*********")
        // console.log(notNow.diff(now, "minutes"));

        let timeDiff = notNow.diff(now, "minutes");
        console.log(timeDiff);

        if (timeDiff < -60) {
            titleCol.attr("style", "background-color:red");
        } else if (timeDiff > 0) {
            titleCol.attr("style", "background-color:green");
        } else {

        }

        hourCol.text(workHours[i]);
        buttonCol.text("save");


        newRow.append(hourCol, titleCol, buttonCol);
        $("#planner-row").append(newRow)



        // ====================================================================




    }
   
    // let happy = document.getElementById("text-input-9")
    // let user = {
    //     input: happy.value

    // }
    // console.log(user)
  
    $(".my-save-button").on("click", function (event) {
        event.preventDefault();

        //  console.log("bitch")
        
         let t9 = document.getElementById("text-input-9")
         let t10 = document.getElementById("text-input-10")
         let t11 = document.getElementById("text-input-11")
         let t12 = document.getElementById("text-input-12")
         let t1 = document.getElementById("text-input-1")
         let t2 = document.getElementById("text-input-2")
         let t3 = document.getElementById("text-input-3")
         let t4 = document.getElementById("text-input-4")
         let t5 = document.getElementById("text-input-5")

         console.log(t9.value)
    
         let user = {
            input1: t9.value,
            input2: t10.value,
            input3: t11.value,
            input4: t12.value,
            input5: t1.value,
            input6: t2.value,
            input7: t3.value,
            input8: t4.value,
            input9: t5.value
    
        }
        // console.log(user)

        let userInput1Span = document.querySelector("#text-input-9")
        let userInput2Span = document.querySelector("#text-input-10")
        let userInput3Span = document.querySelector("#text-input-11")
        let userInput4Span = document.querySelector("#text-input-12")
        let userInput5Span = document.querySelector("#text-input-1")
        let userInput6Span = document.querySelector("#text-input-2")
        let userInput7Span = document.querySelector("#text-input-3")
        let userInput8Span = document.querySelector("#text-input-4")
        let userInput9Span = document.querySelector("#text-input-5")

        console.log(userInput1Span)
        console.log(userInput2Span)
        console.log($(this))
        localStorage.setItem("user", JSON.stringify(user));

        // var lastUser = JSON.parse(localStorage.getItem("user"));

        var lastUser = JSON.parse(localStorage.getItem("user"));
      userInput1Span.textContent = lastUser.input1
      userInput2Span.textContent = lastUser.input2
      userInput3Span.textContent = lastUser.input3
      userInput4Span.textContent = lastUser.input4
      userInput5Span.textContent = lastUser.input5
      userInput6Span.textContent = lastUser.input6
      userInput7Span.textContent = lastUser.input7
      userInput8Span.textContent = lastUser.input8
      userInput9Span.textContent = lastUser.input9

    //     .text(lastUser.input2);
    //     .text(lastUser.input3);
    //     .text(lastUser.input4);
    //    .text(lastUser.input5);
    //   .text(lastUser.input6);
    //    .text(lastUser.input7);
    //    .text(lastUser.input8);
    //     .text(lastUser.input9);

        // let titleInput = $(".title-input")

        // var user = {
        //     firstName: titleInput.value
            

        // };

        // console.log(user)


        // localStorage.setItem("user", JSON.stringify(user));

        // var lastUser = JSON.parse(localStorage.getItem("user"));


    });


    // ====================================================================


    // console.log(timer);

    // ====================================================================



}); 