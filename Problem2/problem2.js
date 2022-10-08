const date = new Date();
let hr = date.getHours()
if ((hr >= 4) && (hr < 12)) {
    document.getElementById('dayForm').innerHTML = 'Morning'
}
if (hr >= 12 && hr < 17) {
    document.getElementById('dayForm').innerHTML = 'Afternoon'
}
if (hr >= 17 && hr < 21) {
    document.getElementById('dayForm').innerHTML = 'Evening'
}
else if (hr >= 21 && hr < 4) {          //
    document.getElementById('dayForm').innerHTML = 'Night'
}

let quotes = ["A man who was completely innocent, offered himself as a sacrifice for the good of others, including his enemies, and became the ransom of the world.", "God cannot be realized through the intellect. Intellect can lead one to a certain extent and no further. It is a matter of faith and experience derived from that faith.", "A vow is a purely religious act which cannot be taken in a fit of passion. It can be taken only with a mind purified and composed and with God as witness.", "We may never be strong enough to be entirely nonviolent in thought, word and deed. But we must keep nonviolence as our goal and make strong progress towards it.", "As human beings, our greatness lies not so much in being able to remake the world - that is the myth of the atomic age - as in being able to remake ourselves.", "I have nothing new to teach the world. Truth and Non-violence are as old as the hills. All I have done is to try experiments in both on as vast a scale as I could.", "It is the duty of every thoughtful Indian not to marry. In case he is helpless in regard to marriage, he should abstain from sexual intercourse with his wife.", "I claim to be a simple individual liable to err like any other fellow mortal. I own, however, that I have humility enough to confess my errors and to retrace my steps.", "Constant development is the law of life, and a man who always tries to maintain his dogmas in order to appear consistent drives himself into a false position.", "Just as a man would not cherish living in a body other than his own, so do nations not like to live under other nations, however noble and great the latter may be."]

let tcolors = ["#0000aa", "#11574a", "#d1001c", "#9e1212", "#cc00ff", "#fe01b1", "#f2013f", "#f4bfff", "#dd4455", "#9e003a"]

let bcolors = ["#c4d1b2", "#caf0c7", "#f7f5c8", "	#f1f1f1", "#b4a7d6", "#f6ca9c", "#adccf3", "#ffffff", "	#eeeeee", "#d0dbc2"]



function quoteGen() {
    document.getElementById('quotes').innerHTML = quotes[Math.floor((Math.random() * quotes.length))]

    document.getElementById('quotes').style.color = tcolors[Math.floor((Math.random() * quotes.length))]

    document.getElementById('author').style.color = tcolors[Math.floor((Math.random() * quotes.length))]

    document.getElementById('background').style.background = bcolors[Math.floor((Math.random() * quotes.length))]

}
quoteGen()


/*let a = date.toLocaleTimeString('en-US', { hour12: false, })
document.getElementById('time').innerHTML = a*/
