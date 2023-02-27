import axios from "axios"

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

  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card')
  cardDiv.addEventListener('click',()=>{
    console.log(makale.anabaslik)
  })
  
  const headlineDiv = document.createElement('div')
  headlineDiv.classList.add('headline')
  headlineDiv.textContent = makale.anabaslik

  const authorDiv = document.createElement('div')
  authorDiv.classList.add('author')

  const imgContainerDiv = document.createElement('div')
  imgContainerDiv.classList.add('img-container')

  const imgYazar = document.createElement('img')
  imgYazar.setAttribute('src',makale.yazarFoto)

  const yazarAdiSpan = document.createElement('span')
  yazarAdiSpan.textContent = makale.yazarAdi + ' tarafından'

  imgContainerDiv.append(imgYazar)
  authorDiv.append(imgContainerDiv,yazarAdiSpan)
  cardDiv.append(headlineDiv,authorDiv)

  return cardDiv
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
  const cardYeri = document.querySelector(secici)

  axios.get(`http://localhost:5001/api/makaleler`).then(res=>res.data.makaleler).then(makaleler=>{
    for (const key in makaleler) {
      makaleler[key].forEach(element => {
        cardYeri.append(Card(element))
      });
    }
  })
}

export { Card, cardEkleyici }
