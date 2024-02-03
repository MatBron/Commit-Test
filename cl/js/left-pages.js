const leftPages = document.querySelector('#left-pages')
fetch('../include/left-pages.html')
.then(res=>res.text())
.then(data=>{
    leftPages.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})