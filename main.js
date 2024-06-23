
const account = {
 "mainAccount" :[
                    ["Blum", "https://t.me/BlumCryptoBot/app?startapp"],
                    ["Hamster Combat", "https://t.me/hamster_kOmbat_bot/start?startapp"],
                    ["TapSwap", "https://t.me/pixelversexyzbot?start=6941855425"],
                    ["SEED", "https://t.me/seed_coin_bot/app?startapp"],
                    ["TAPTON", "https://t.me/TapTongamebot?start=QFU212"],
                    ["Supermeow", "https://t.me/supermeow_vip_bot?start=6941855425"],
                    ["Shuttle", "https://t.me/Shuttle_ton_bot?start=r_6941855425"],
                    ["MemeFi", "https://t.me/memefi_coin_bot?start=r_192eb1636b"],
                    ["Pepe", "https://t.me/pepekombat_bot/app?startapp"],
                    ["PocketFi", "https://t.me/pocketfi_bot/Mining?startapp"]
                ],
"_2ndAccount":  [
                    ["Blum", "https://t.me/BlumCryptoBot/app?startapp"],
                    ["Hamster Combat", "https://t.me/hamster_kOmbat_bot/start?startapp"],
                    ["TapSwap", "https://t.me/pixelversexyzbot?start=6941855425"],
                    ["SEED", "https://t.me/seed_coin_bot/app?startapp"],
                    ["TAPTON", "https://t.me/TapTongamebot?start=QFU212"],
                ]
}


    function items(game, url){
    var itemBox = 
    `<div id="box1" class="form-group border border-stone-500 rounded-lg w-72 h-16 flex justify-center items-center m-auto mt-5 text-white cursor-pointer">
        <a href="${url}"target="blank" class="link">
            <div class="box1">
                ${game}
            </div>
        </a>
    </div>`;  
    return itemBox;
   }  
   var selectedAccount = [];

        function accSelect(selection) {
            var container = document.getElementById('container');
            container.innerHTML = '';

            if (selection === 1) {
                selectedAccount = account.mainAccount;
            } else if (selection === 2) {
                selectedAccount = account._2ndAccount;
            }

            for (var i = 0; i < selectedAccount.length; i++) {
                container.innerHTML += items(selectedAccount[i][0], selectedAccount[i][1]);
            }
        }

        function reset() {
            document.querySelector('.accountlist').style.display = "none";
        }

        document.getElementById('1').onclick = function() {
            accSelect(1);
            reset();
        };

        document.getElementById('2').onclick = function() {
            accSelect(2);
            reset();
        };  