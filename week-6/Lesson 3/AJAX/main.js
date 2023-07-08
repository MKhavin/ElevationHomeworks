$.get(
  "https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind",
  function (result) {
    console.log(result);
  }
);

//request the data with a GET request
$.get("https://jsonplaceholder.typicode.com/users", function (users) {
  //extract the geo data of the first user

  let lat = users[0].address.geo.lat;
  let long = users[0].address.geo.lng;
  let companyCatchphrase = users[0].company.catchPhrase;

  //log the data
  console.log(`${lat}, ${long}`); //prints -37.3159, 81.1496
  console.log(`${companyCatchphrase}`);
});

function useData(data) {
  if ("items" in data) {
    const root = $("body");
    root.append("<ul class='books'></ul>");

    const booksContainer = $(".books");

    data.items.forEach((value) => {
      booksContainer.append(
        `<li>${value.volumeInfo.title} - ${value.volumeInfo.subtitle}</li>`
      );
    });
  }
}

$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind",
  success: useData,
  error: function (xhr, text, error) {
    alert("Error occure in process of loading. Check logs and cal developers.");
    console.log(text)
  }
});
