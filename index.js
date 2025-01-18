const label =  document.querySelectorAll(".label");
const input = document.getElementsByTagName("input")
// function onFocus() {

    Array.from(input).forEach((inp, index) =>
        {
            inp.addEventListener("focus" , ()=>
            {
                // console.log('focus');
                
                    label[index].classList.add("active");

                
            })

          
            inp.addEventListener("focusout" , ()=>
                {
                    // console.log('focus');
                    if (inp.value == "")
                        {
                            label[index].classList.remove("active");
                        }
    
                    
                })
        }
    )
// }

function offFocus() {
    document.querySelector(".city-name").classList.remove("active");
}