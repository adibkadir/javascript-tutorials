// listen for submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function deleteBookmark(url) {
  console.log(url);
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  bookmarks.forEach(function (bookmark, index, initial_array){
    if (bookmark.url == url) {
      initial_array.splice(index, 1);
    }
  });
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  fetchBookmarks();
}


function saveBookmark(e){

  // get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  //local storage test
  if (localStorage.getItem('bookmarks') == null) {
    var bookmarks = []
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // clear form fields
  document.getElementById('myForm').reset();

  fetchBookmarks();
  // prevent form from submitting and flashing
  e.preventDefault();

}

function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  var bookmarksResults = document.getElementById('bookmarksResults');

  bookmarksResults.innerHTML = '';
  bookmarks.forEach(function (bookmark){
    var name = bookmark.name;
    var url = bookmark.url;
    bookmarksResults.innerHTML += '<div class="card grey"><div class="card-content white-text">' +
                                  '<h5>' + name +
                                  ' <a target="_blank" class="waves-effect waves-light btn" href="'+url+'">Visit</a>'+
                                  ' <a class="waves-effect waves-light btn red" src="#" onclick="deleteBookmark(\''+url+'\')">Delete</a>'+
                                  '</h5>' +
                                  '</div></div>';
  });
}


function validateForm(siteName, siteUrl){

  if (!siteName || !siteUrl) {
    alert("error");
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Bad url");
    return false;
  }

  return true;
}
