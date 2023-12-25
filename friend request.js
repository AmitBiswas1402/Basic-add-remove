let status = document.querySelector("h4")
let button = document.querySelector("#add")
// let theme = document.querySelector("button")
// let removeFriend = document.querySelector("#remove")
let flag = 0

button.addEventListener("click", function(){
    if(flag==0){
        status.innerHTML = "Friends"
        status.style.color = "green"
        // theme.style.color = "purple"
        button.innerHTML = "Remove Friend"
        flag = 1
    } else {
        status.innerHTML = "Not Friends"
        status.style.color = "red"
        // theme.style.color = "darkorange"
        button.innerHTML = "Add Friend"
        flag = 0
    }
})

// removeFriend.addEventListener("click", function(){
//     status.innerHTML = "Not Friend"
//     status.style.color = "Red"
// })