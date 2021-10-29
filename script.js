fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(memeData => {
        const memeText = memeData.attachments[0].text;
        const memeelement = document.getElementById('memeelement');

        memeelement.innerHTML = memeText;
    })