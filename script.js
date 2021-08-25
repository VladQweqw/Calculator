const nr = $(".number");
const display = $(".display")
let res,copy,number = "";
$(() => {
    
     res = JSON.parse(localStorage.getItem("operation"));
    display.text(res)
    nr.click(function(e) {
        
        switch(e.target.id) {
            case "clear": res = "";
                display.text(res)
            break;

            case "remove":
                res = Math.floor(res/10)
                display.text(res);
            break;
            
            case "enter": 
                try{
                    res = eval(display.text())
                    display.text(res);
                }
                catch(error) {
                    display.text("Invalid") ;
                     res = ""}
            break;
            
            default: res+=e.target.id;
                if(res.length >18) {
                    display.text("Number is too big")
                }else {
                    display.text(res)
                    navigator.clipboard.writeText(res);
                }
                if(res == "Nan" || res == "Undefined") {
                    display.text("Invalid")
                }

        
                
        }
        const operation = [];
        operation.push(res)
        localStorage.setItem("operation",JSON.stringify(operation));
    })




})