const beehive = document.querySelector("#beehive-front")
const beeRotation = document.querySelector('.bee-rotate')
const beePath = document.querySelector('.bee-body')

const btnBee = document.querySelector("#bee-btn")

btnBee.addEventListener('click', () => {
    beehive.classList.toggle('beehive-empty')
    setTimeout(function (){
        beeRotation.classList.toggle('hide')
        beeRotation.classList.toggle('bee-rotation')
        beePath.classList.toggle('bee-pathing')
    }, 400)

    if (beeRotation.classList.contains("paused")) {
        btnBee.disabled = true;
        beeRotation.classList.remove("paused");
        
        beeRotation.addEventListener("animationend", function () {
          btnBee.disabled = false;
          setTimeout(function (){
            btnBee.click()}, 400)
        }, { once: true });
      } else {
    
        beeRotation.classList.toggle("paused");
      }
})