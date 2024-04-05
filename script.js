document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log(window.innerHeight, window.getComputedStyle(document.body).height);
        if(window.innerHeight < parseInt(window.getComputedStyle(document.body).height))
        {
            console.log('yes')
            document.querySelector('.background').style.height = window.getComputedStyle(document.body).height;
        }
    }, 150);
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(obj => {
            let newCard = document.createElement('div');
            newCard.classList.add('content-card');
            newCard.setAttribute('type',obj.type);
            newCard.addEventListener('onclick', () => {window.location.href = obj.link});
            newCard.innerHTML = `
            <img src="${obj.imageLink}" alt="">
            <div class="content-title">${obj.title}</div>
            <div class="content-desc">
                ${obj.description}
            </div>
            `;
            document.querySelector('.content-grid').appendChild(newCard);
        })
    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });
})