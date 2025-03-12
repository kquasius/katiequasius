


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const vibe = document.getElementById("vibes")
console.log(vibe)
const recommendation = document.getElementById("recommendation");
vibes = {
    na: "",
    cold_brew: "cold brew...okay i'm sensing you're ready to lock! in! and be! productive! listen to <a href='https://open.spotify.com/playlist/7BMckosFHhqaXsQoTaGbtl?si=5a5e4e88ad594f8f' target='_blank'>this playlist</a> to help you be a machine!!!",
    iced_latte: "iced vanilla latte...is there anything more perfect to match your chill, happy, carefree mood? yes, there is, it's <a href='https://open.spotify.com/playlist/6NlvOI4UlHj0AXpfpG220S?si=de7550e2456d49a3' target='_blank'>this playlist</a>! enjoy and have a great day!",
    london_fog: "london fog...i'm sensing it's maybe a rainy day and you're in a castle in Ireland swaying to relaxing music...although...are you listening to music? OMG! no worries if not listen to <a href='https://open.spotify.com/playlist/6DOxukwe8Qc3PrEhY3XgBV?si=831ff88f69044cdf' target='_blank'>this playlist</a>!",
    crazy_mocha: "i can't even type this drink out again it's too crazy! someone's in a fun mood! so random so crazy have a listen to <a href='https://open.spotify.com/playlist/0Tq47Ak7dpE0NlYDb9Re1n?si=8dad840562b842ef' target='_blank'>this crazy and random playlist</a>!"
}
vibe.onchange = function() {
    recommendation.innerHTML = vibes[this.value];
}








