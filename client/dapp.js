console.log("Token Generator is live");

window.addEventListener('load', function(){
    if(window.ethereum !== 'undefined'){
        let mmdetected = this.document.getElementById("connect-wallet");
        console.log("MetaMask detected");
        mmdetected.innerHTML = "MetaMask has been detected";
    }
    else{
        console.log("There's no wallet detected. Please, install metamask");
        this.alert("There's no wallet detected. Please, install metamask");
    }
});


const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async ()=>{

    await ethereum.request({method:'eth_requestAccounts'});
    let connectedAccount= document.getElementById("mm-connected-account");
    connectedAccount.innerHTML= "Current account "+ethereum.selectedAddress;
    console.log("Connected");
    if(connectedAccount!==null){
        mmEnable.innerHTML = "Disconnect";
    }else{
        mmEnable.innerHTML = "Connect Wallet";
    }
}
