const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerOlustur = document.createElement("div");
  headerOlustur.classList.add("header");

  const dateOlustur = document.createElement("span");
  dateOlustur.classList.add("date");
  dateOlustur.textContent = tarih;

  const baslikOlustur = document.createElement("h1");
  baslikOlustur.textContent = baslik;

  const tempOlustur = document.createElement("span");
  tempOlustur.classList.add("temp");
  tempOlustur.textContent = yazi;

  headerOlustur.appendChild(dateOlustur);
  headerOlustur.appendChild(baslikOlustur);
  headerOlustur.appendChild(tempOlustur);

  return headerOlustur;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const seciciEkle = document.querySelector(secici);
  seciciEkle.appendChild(
    Header("Teknoloji Zamanı", "30 Aralık 2022", "sağdaki yazi")
  );
  return seciciEkle;
};

export { Header, headerEkleyici };
