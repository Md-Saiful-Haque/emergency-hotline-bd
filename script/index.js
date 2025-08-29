function getElement (id){
    const element = document.getElementById(id);
    return element;
}

// Heart functionality
const heartCount = document.getElementsByClassName("heart-btn");

for(const heart of heartCount){
    heart.addEventListener("click", function(){
        const heartNumber = document.getElementById("heart-number").innerText;

        const totalHeartNumber = Number(heartNumber) + 1;
        getElement("heart-number").innerText = totalHeartNumber;
    })
}

// Call button functionality
let coinNumber = getElement("coin-number").innerText;
let coin = 20;

const callBtns = document.getElementsByClassName("btn-call");
 for (let callBtn of callBtns){
    callBtn.addEventListener("click", function(){
        const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;

        const callNumber = callBtn.parentNode.parentNode.children[3].innerText
        
        if(coinNumber >= coin){
            coinNumber = coinNumber - coin;
            alert(`Calling ${cardTitle} ${callNumber}...`)
        }
        else{
            alert("You don't have sufficient coins. It will take at least 20 coins to make a call")
            return
        }
        getElement("coin-number").innerText = coinNumber;

        const callHistoryContainer = getElement("call-history-container");

        const newHistory = document.createElement("div");

        newHistory.innerHTML = `
        <div class="flex justify-between items-center mt-4 bg-[#FAFAFA] gap-y-2 p-2">
                    <div>
                        <h2 class="text-[16px] font-semibold">${cardTitle}</h2>
                        <span class="text-[#5C5C5C] text-[16px]">${callNumber}</span>
                    </div>
                    <div>
                        <span class="text-[16px] font-normal">${new Date().toLocaleTimeString()}</span>
                    </div>
                </div>
        `

        callHistoryContainer.append(newHistory);
    })
 }

// Remove call history (clear btn functionality)

getElement("btn-clear").addEventListener("click", function(){
    const callHistoryContainer = getElement("call-history-container");
    callHistoryContainer.innerHTML = "";
})

// copy btn functionality

const copyBtns = document.getElementsByClassName("btn-copy");

for(const copyBtn of copyBtns){
    copyBtn.addEventListener("click", function(){
        const copyNumber = getElement("count-copy-number").innerText;
        const copyCountNumber = Number(copyNumber) + 1;
        getElement("count-copy-number").innerText = copyCountNumber;

        const helplineNumber = copyBtn.parentNode.parentNode.children[3].innerText;
        
        navigator.clipboard.writeText(helplineNumber).then(() => {
            alert("The number has been copied:" + helplineNumber);

        })
    })
}









