console.log("Hello World");

function getData() {

  $.ajax({

    url: 'data.php',
    method: 'GET',
    success: function(data) {

      var success = data['success'];
      var values = data['response'];

      for (var i = 0; i < values.length; i++) {

        var cover = values[i]['poster'];
        var cdTitle = values[i]['title'];
        var artist = values[i]['author'];
        var year = values[i]['year'];

        getMusic(cover, cdTitle, artist, year)

      };
    },
    error: function() {

      console.log('error');

    }
  });
};


function getMusic(cover, cdTitle, artist, year) {

  var template = $('#template').html();
  var compiled = Handlebars.compile(template);
  var target = $('.cds-container');

  var areaHTML = compiled({

    'cover' : cover,
    'cdTitle' : cdTitle,
    'artist' : artist,
    'year' : year

  });

  target.append(areaHTML);

}


function init() {

  getData();

};

$(document).ready(init);
