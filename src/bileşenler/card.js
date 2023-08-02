import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const divCard = document.createElement("div");
  divCard.classList.add('card');
  const divAuthor = document.createElement("div");
  const divHeadline = document.createElement("div");
  divAuthor.classList.add("author");
  divHeadline.classList.add("headline");
  divHeadline.textContent = makale.anabaslik;
  divCard.appendChild(divHeadline);
  const divImg = document.createElement("div");
  divImg.classList.add("img-container");
  const img = document.createElement("img");
  img.src=makale.yazarFoto;
  divImg.appendChild(img);
  const span = document.createElement("span");
  span.textContent = makale.yazarAdi + " tarafından";
  divImg.appendChild(span);
  divAuthor.appendChild(divImg);
  divCard.appendChild(divAuthor);
  return divCard;

}

const cardEkleyici = (secici) => {
// servislere istek yapmak için kullanılan kütüphane: axios, get ile bilgi alırız, post ile bilginin gelmesini sağlarız, put ile bilgi ekler/koyarız,
const node = document.querySelector(secici);

const url = "http://localhost:5001/api/makaleler";  
axios.get(url)
        .then((response) => {
          //console.log(response);
          const makaleler = response.data.makaleler;
          /*const values = Object.values(makaleler);
          console.log(values);
          values.forEach(element => {
            element.forEach((item) => {
              let card = Card(item);
              node.appendChild(card);
            })
          })
          
          const keys = Object.keys(makaleler);
          keys.forEach((element) => {
            makaleler[element].forEach(item => {
              let card = Card(item);
              node.appendChild(card);
            })
          });*/
          for(let key in makaleler){
            makaleler[key].forEach(element => {
              let card = Card(element);
              node.appendChild(card);
            });
          }
        })
        .catch((err)=>{
          console.log(err);
        })

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
}

export { Card, cardEkleyici }
