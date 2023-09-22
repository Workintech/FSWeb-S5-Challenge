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
  const headerDiv = document.createElement('div')
  headerDiv.classList.add('header')

  const tarihSpan = document.createElement('span')
  tarihSpan.classList.add('date')
  tarihSpan.textContent = tarih

  const headerH1 = document.createElement('h1')
  headerH1.textContent = baslik

  const tempSpan = document.createElement('span')
  tempSpan.classList.add('temp')
  tempSpan.textContent = yazi

  headerDiv.append(tarihSpan, headerH1, tempSpan)
  return headerDiv
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //


  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  
  const headerEkle = document.querySelector(secici)
  headerEkle.append(Header('Basliktir','Tarihtir','Yazidir'))
}

export { Header, headerEkleyici }
