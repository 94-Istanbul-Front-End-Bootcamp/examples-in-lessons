let data = [];

const fetchData = () => {
    //verinin çekildiği yer
    fetch("data.json")
    .then(response => {
        return response.json();
    })
    .then(responseData => {
        //json'dan okunan verinin data array'ine atanması
        data = responseData;

        //veri geldikten sonra filtreleme butonu görünür olsun
        let filterButton = document.querySelector("#filterButton");
        filterButton.setAttribute("style", "");

        //verinin html içerisinde listelendiği fonksiyon
        listData(responseData);
    })
    .catch(err => {
        //hata yönetimi
        console.log(err)
    })
}

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
    let list = document.querySelector(".list");
    list.innerHTML = data.map(element => {
        return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>email:</span> ${element.email}
        </li>
        `;
    })
}

//verinin filtrelenmesini sağlayan fonksiyon
//TODO
const filterData = (filter) => {
    switch (filter) {
        case "isActive":
            let filteredData = data.filter(element => element.isActive === true);
            listData(filteredData);
            break;
        default:
            break;
    }
}