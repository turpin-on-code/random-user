const cardImage = document.querySelector('.card-image')
const userName = document.querySelector('.user-name')
const tbody = document.querySelector('tbody')
const button = document.querySelector('.btn')

const fetchRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    const results = data.results[0]
    console.log('results', results)
    cardImage.innerHTML = `<img src=${results.picture.large}
        alt="portrait image" class="card-img"/>
    `
    userName.innerHTML = `
        ${results.name.first} ${results.name.last}
    `
    tbody.innerHTML = `
            <tr>
                <td class="label">email</td> 
                <td class="user-value">${results.email}</td>
            </tr>
            <tr>
                <td class="label">gender</td> 
                <td class="user-value">${results.gender}</td>
            </tr>
            <tr>
                <td class="label">country</td> 
                <td class="user-value">${results.location.country}</td>
            </tr>
            <tr>
                <td class="label">city</td> 
                <td class="user-value">${results.location.city}</td>
            </tr>
    `
}

fetchRandomUser()
button.addEventListener('click', () => fetchRandomUser())