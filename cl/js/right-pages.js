const rightPages = document.querySelector('#right-pages')
fetch('../include/right-pages.html')
.then(res=>res.text())
.then(data=>{
    rightPages.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})