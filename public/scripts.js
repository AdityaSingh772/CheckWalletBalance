document.addEventListener('DOMContentLoaded' , () => {
    const balanceForm = document.getElementById('balanceForm');
    const balanceResult = document.getElementById('balanceResult');

    balanceForm.addEventListener('submit', async(event) => {
        event.preventDefault();
        const address = event.target.address.value;

        try{
            const balance = await Web3.eth.getBalance(address);

            //converting from wei to ether
            const etherBalance = web3.utils.fromWei(balance, 'ether');
            balanceResult.innerHTML = `<p>Balance of address : ${etherBalance} ETH </p>`
        }catch(error){
            console.log(error);
            balanceResult.innerHTML = `<p>Error : ${error.message}</p>`;

        }
    });
});