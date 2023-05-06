import axios from "axios";
import { response } from "express";
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
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const baslikDiv = document.createElement("div");
  baslikDiv.classList.add("headline");
  baslikDiv.append(makale.anabaslik);
  cardDiv.append(baslikDiv);

  const author = document.createElement("div");
  author.classList.add("author");
  cardDiv.append(author);

  const imgCont = document.createElement("div");
  imgCont.setAttribute("class","img-container");
  cardDiv.append(imgCont);

  const img = document.createElement("img");
  img.src = makale.yazarFoto;
  cardDiv.append(img);

  const span = document.createElement("span");
  span.textContent = makale.yazarAdi + `tarafından`;
  author.append(span);

  return cardDiv;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const cardAdd = document.querySelector(secici);
  axios.get(`http://localhost:5001/api/makaleler`).then((response) => {
    let makaleler = response.data.makaleler;
    for(let key in makaleler){
      for(let i =0 ; i< makaleler[key].length; i++){
        cardAdd.append(Card(makaleler[key][i]));
      }
    }
  });
};

export { Card, cardEkleyici }
