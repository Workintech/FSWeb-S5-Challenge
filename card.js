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

  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = makale.anabaslik;
  card.append(headline);

  const author = document.createElement("div");
  author.classList.add("author");
  card.append(author);

  const imgCont = document.createElement("div");
  imgCont.classList.add("img-container");
  author.append(imgCont);

  const img = document.createElement("img");
  img.src = makale.yazarFoto;
  imgCont.append(img);

  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = makale.yazarAdi;
  author.append(yazarAdi);

return card;

}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

const cardContainer = document.querySelector(secici);

axios
.get(`http://localhost:5001/api/makaleler`)
.then((res) => {
console.log(res.data.makaleler);
for (let konu in res.data.makaleler){
  res.data.makaleler[konu].forEach((makale) => {
    cardContainer.append(Card(makale));
    
    });
  }
})
.catch((err) => {
  console.log("error", err);
});

};


export { Card, cardEkleyici };
