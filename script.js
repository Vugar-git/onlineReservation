const staff = [
  {
    id: 1,
    name: "Alex Rosetta",
    email: "alexyrosetta@egmail.com",
    image:
      "https://s3-alpha-sig.figma.com/img/6865/4fe5/e7aec592edbaff73e3b949205e5b95a9?Expires=1692576000&Signature=NS5sIMtJfkF7MVbXMgZM3ehsxVzJ7DUxfKHct~ontS7sc8PQQl63kKgBzPS9qgVYFkCxo8Aaud7KNYlQ-NVPWpL2ds8FZb1wkx5u~~Qllc7yAT7CSTNuExHSy-Ip8kQ3tRgXAs~lVvsi71DoietKTVcyhc60JwGP6sspMj4rqXeRBpGaFPRSgQ90TBhQ-F1EceOfrawZzk4p~QC3voHKpSZAaRyAb1XoWLggOU3-U8rDsmEnbrnkZhbwLPYWALagrBxWr12reLna-HYtmGsB7mGj7cSbpakSWJ6MJjVWm5icQDyZUb8iqmGVDCoT70BQM8YSnyAEZXNq0OVnrOEsDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    name: "Maria July",
    email: "mariajuly@egmail.com",
    image:
      "https://s3-alpha-sig.figma.com/img/829b/4f5f/0e515a414b9006a84a7472f20d74f845?Expires=1692576000&Signature=akzh4VO7RbPI-Xg7LWZhTmCZGfNGa-xQh4SwbL3nQFrthF178WTl4jIBXhNQHXwm8J7DzknSyJxYWn9W6~uhooKUY75Nqsau2PT-g3VoYYl0~gniOzvN~MQ2xQJHoG~m6WDfC4NEsYj-Vw7q-pAzIFgW3cR6Mf1z8mFk4tb7MKq4Va60gwBrZIAXIpzQudcCXYCWvSQCaV5NFLik8huymUVueubKHOCRTMAaJrqpN3iNrUVhOFD0uL2bOA8Qgt6EwZ4GysadTmUi5aLEy8P~krrmEjeWPRYCxV-2MxgcNXhl35bz0B5ha95sIbK5SdButVzJe22aMrzbDu~dIEMj7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  
];

const cardsContainer = document.getElementById("cardsContainer");
const nextButton = document.getElementById("nextButton");
let selectedCards = [];

staff.forEach((person) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const img = document.createElement("img");
  img.src = person.image;
  img.alt = "";

  const namePara = document.createElement("p");
  namePara.className = "name1";
  namePara.innerHTML = `${person.name} <br /><span class="name2">${person.email}</span>`;

  cardDiv.appendChild(img);
  cardDiv.appendChild(namePara);

  cardsContainer.appendChild(cardDiv);
});

const services = [
  {
    id: 1,
    name: "Oral hygiene",
    image: "service-1.jpg",
    duration: "1 hour",
    price: 50.0,
  },
  {
    id: 2,
    name: "Implants",
    image: "service-2.jpg",
    duration: "1 hour 30 minutes",
    price: 120.0,
  },
];

const dates = ["2022-03-04", "2022-03-05", "2022-03-06"];

const times = [
  {
    start_time: "09:00",
    end_time: "09:30",
  },
  {
    start_time: "09:30",
    end_time: "10:00",
  },
];



