const label =  document.querySelectorAll(".label");
const input = document.getElementsByTagName("input");
const icon = document.querySelector(".icon");
const menu = document.querySelector(".menu");
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

icon.addEventListener("click", ()=> 
{
    if (!menu.classList.contains("active"))
        {
            menu.classList.add("active");
        }
        else {
            menu.classList.remove("active");
        }
})