const createRow = (data) => {
  
  const div = document.createElement('div'); //create div
  div.classList.add('news-item'); //add class news-item

  /********* Add big img to page *********/
  const bigImg = document.createElement('img'); //create big-img wrap
  bigImg.classList.add('news-img'); //add class to big-img wrap
  bigImg.src = data.img; //add src to img from JSON
  div.appendChild(bigImg); // add big img to HTML

  /********** Add news description block **********/
  const newsDescr = document.createElement('div'); //create img decription div
  newsDescr.classList.add('news-descr'); //add class to img decription div
  div.appendChild(newsDescr); //add img decription div

  /********** Add date div **********/
  const date = document.createElement('div'); //create date div
  date.classList.add('date'); //add class to date div
  date.textContent = data.date; //get date from JSON
  newsDescr.appendChild(date); //add date to HTML

  /*********** Add news paragraph block ***********/
  const newsParagraph = document.createElement('div'); //create div with news paragraph
  newsDescr.appendChild(newsParagraph); //add news paragraph to HTML

  /************ Add news title *************/
  const title = document.createElement('h2'); //Create news title
  title.textContent = data.title; //get date from JSON
  newsParagraph.appendChild(title); //add title to HTML

  /************ Add news text ************/
  const newsText = document.createElement('p'); //create news text
  newsText.classList.add('news-text'); //add class to news text
  newsText.textContent = data.description; //get date from JSON
  newsParagraph.appendChild(newsText); //add news text to HTML

  /*********** Add small img to news **********/
  const smallImgWrap = document.createElement('div'); //create small img-wrap
  smallImgWrap.classList.add('small-img-wrap'); //add class to small img wrap
  const smallImg = document.createElement('img'); //create img for small img in news
  smallImgWrap.appendChild(smallImg); //append small img to img wrap
  smallImg.src = data.img; //add src to img
  newsParagraph.appendChild(smallImgWrap); //add smal img to html

  return div;

}

const mainWrapper = document.getElementsByClassName('mainWrapper');

for (let i in data) {
  const child = createRow(data[i]);
  mainWrapper[0].appendChild(child);
}
