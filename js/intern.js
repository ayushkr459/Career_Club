/************ getting elements ***************/
const intern_container = document.getElementById("internship");
const loader = document.getElementById("loader-6");
const cityform = document.getElementById("cityform");
const city = document.getElementById("city");

/************ fetching internship data ***************/
function getandset(url_to_fetch, location) {
  url = url_to_fetch;
  fetch(url)
    .then((response) => response.json())
    .then(showData)
    .catch((e) => handleError(e));

  function showData(data) {
    //removing loader
    intern_container.removeChild(loader);

    for (let index in data) {
      addInternships(
        data[index].title,
        data[index].link,
        data[index].apply_by,
        data[index].duration,
        data[index].stipend,
        /*data[index]['location-type']*/ location,
        data[index].company_name,
        data[index].start_date
      );
    }
  }
  function handleError(e) {
    console.log("Error Occured" + e);

    //removing loader
    intern_container.removeChild(loader);

    let error_div = document.createElement("div");
    error_div.setAttribute("id", "error");
    error_div.setAttribute("class", "alert alert-danger");
    error_div.setAttribute("role", "alert");
    error_div.innerHTML =
      "An error occured Please contact us or complain about the same. 🙏";
    intern_container.appendChild(error_div);
  }

  function addInternships(
    title,
    link,
    apply_by,
    duration,
    stipend,
    location_type,
    company_name,
    start_date
  ) {
    let intern_div = document.createElement("div");
    intern_div.setAttribute("class", "media");

    intern_div.innerHTML =
      '<div class="media-body"><h3>' +
      title +
      '</h3><p class="Company">Company: ' +
      company_name +
      '</p><p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>' +
      location_type +
      '</p><div class="row"><div class="col"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/></svg>START DATE<p>' +
      start_date +
      '</p></div><div class="col"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/><path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>STIPEND<p>' +
      stipend +
      '</p></div><div class="col"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/><path fill-rule="evenodd" d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>DURATION<p>' +
      duration +
      '</p></div><div class="col"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/><path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/></svg>APPLY BY<p>' +
      apply_by +
      "</p></div></div><a href=" +
      link +
      ">view details -></a></div>";

    intern_container.appendChild(intern_div);
  }
}

/*************** initial call to fetch method ************/
getandset(
  "https://storage.scrapinghub.com/items/466570/22/5?apikey=dfaa31f92c0e40148fa36b077fd08310&format=json&saveas=items_main_5.json",
  "Any"
);

/******************** form control ****************/
cityform.addEventListener("submit", function (e) {
  e.preventDefault();

  //starting loader
  intern_container.innerHTML = "";
  intern_container.appendChild(loader);

  getandset(city.value, city.options[city.selectedIndex].text);
});
