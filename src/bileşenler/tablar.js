import axios from "axios";



const Tablar = (konular) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const divTopic = document.createElement("div");
  divTopic.classList.add("topics");
  konular.forEach((konu) => {
    let divTab = document.createElement("div");
    divTab.classList.add("tab");
    divTab.textContent = konu;
    divTopic.appendChild(divTab)
  })
  return divTopic;
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const node = document.querySelector(secici);
  const url = `http://localhost:5001/api/konular`;
  axios.get(url)
  .then(response => {
    //console.log(response);
    const konular = Tablar(response.data.konular);
    node.appendChild(konular);
  }).catch(error => {
    console.log(error);
  })

}

export { Tablar, tabEkleyici }
