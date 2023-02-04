const loadCountryData = async () => {
    const url = 'https://restcountries.com/v2/all';
    const response = await fetch(url);
    const data = await response.json();
    displayCountryData(data);
}
const displayCountryData = countries => {
    console.log(countries[0]);

    const countryHTML = countries.map(country => getCountryHTML(country)).join(' ');
    const container = document.getElementById('countries');
    container.innerHTML = countryHTML;
    // console.log(countryHTML);
    
}
const getCountryHTML = ({name, flag, population, region, capital}) => {
    return `
    <div class="country">
        <h2>${name}</h2>
        <p>Population: ${population}</p>
        <p>Region: ${region}</p>
        <p>Capital: ${capital}</p>
        <img src="${flag}" alt="${name}" />
        <button>Details</button>
    </div>
    `
}
loadCountryData();