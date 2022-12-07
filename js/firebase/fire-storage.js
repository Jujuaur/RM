import { storage } from './firebase.js';
import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";


export function downloadFile(urlFile){
  getDownloadURL(ref(storage, urlFile))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
      let blob = new Blob([xhr.response], {
        type: 'application/octetstream',
      })
      let url = window.URL || window.webkitURL
      let link = url.createObjectURL(blob)
      let a = document.createElement('a')
      a.setAttribute('download', `${urlFile}.pdf`) //Força o arquivo a baixar com a extensão
      a.setAttribute('href', link)
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
    xhr.open('GET', url);
    xhr.send();
  })
  .catch((error) => {
    // Handle any errors
  });
}

//sai daqui hum, não vem olhar meus arquivos kkkkkkkkkkkkk
////mt chato vc eu so curiosa filho
//meu deus vo embora -> kkkkkkkkkkkkkkkkkkkkkkk medo é?!