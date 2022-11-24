// array containing all valid zip codes in the city of Chicago
var NyZips = [
  "10001",
  "10451",
  "11201",
  "10029",
  "10155",
  "10007",
  "10301",
  "10031",
  "10312",
  "10060",
  "10465",
  "10111",
  "10475",
  "11101",
  "10128",
  "10155",
  "11204",
  "10169",
  "11213",
  "10271",
  "11221",
  "11103",
  "11351",
  "11236",
  "11361",
  "11357",
  "11372",
  "11368",
  "11369",
  "11370",
  "11414",
  "11371",
  "11415",
  "11372",
  "11416",
  "11373",
  "11417",
  "11374",
  "11418",
  "11375",
  "11419",
  "11377",
  "11420",
  "11378",
  "11421",
  "11379",
  "11422",
  "11385",
  "11423",
  "11411",
  "11426",
  "11412",
  "11427",
];

$(document).ready(function () {
  function sendZip(zip) {
    // call to grab zip code info from the database
    $.get(
      "/api/" + zip,
      {
        zip: zip,
      },
      function (data, status) {
        $(".school-report-cards").empty();
        // if there are no schools in the provided zip code:
        if (data.schools === undefined || data.schools.length == 0) {
          $(".school-report-cards").append(
            `No CPS schools in that zip code.<br> Please reach out to CPS to find out more information about educational resources in this area.`
          );
          // otherwise, display the below data for each of the schools in that zip code
        } else {
          for (var i = 0; i < data.schools.length; i++) {
            var school_name = data.schools[i].school_name;
            var school_level = data.schools[i].level;
            var school_safety = data.schools[i].safety_icon;
            var instruction_score = data.schools[i].instruction_score;
            var ward = data.schools[i].ward_id;
            var alderman = data.schools[i].Alderman.alderman;
            var aldermanEmail = data.schools[i].Alderman.email;
            var aldermanPhone = data.schools[i].Alderman.phone_ward;

            $(".school-report-cards").append(`
                        <ul>
                            <a  class="list-group-item" data-toggle="collapse" href="#item-${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <h5 class="glyphicon glyphicon-chevron-right"></h5>${school_name}
                            </h5></a>
                            <div class="list-group collapse card card-body" id="item-${i}">
                            <li>School Level: ${school_level}</li>
                            <li>Safety Strength: ${school_safety}</li>
                            <li>Instruction Score: ${instruction_score}</li>
                            <li>Ward: ${ward}</li>
                           <li> <a  data-toggle="collapse" href="#collapseExample-${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Alderman: ${alderman}
                            </a> </li>
                          <div class="collapse" id="collapseExample-${i}">
                            <div class="card card-body">
                            <a href="mailto:${aldermanEmail}" target="_blank">${aldermanEmail}</a>${aldermanPhone}
                            </div>
                          </div>
                          </div>
                          </ul>`);
          }
        }
      }
    );
  }
  // listener to grabe the zipcode the user wants to search
  $("#submit").on("click", function (event) {
    event.preventDefault();
    let userZip = $("#zipcode").val().trim();
    if (NyZips.includes(userZip)) {
      // calling the function that grabs the zip code and displays the schools:
      sendZip(userZip);
    } else {
      $("#zipcode").val("");
      $("#zipcode").attr("placeholder", "Chicago zipcodes only");
    }
  });
});
