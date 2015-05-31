$(function(){
    /**
     * data of activities.html
     */
    $.get('resources/activities.txt',function(data){
        var activities = $.csv(",", "", "\n")(data);
        var $activitiesContainer = $('.activities-container');
        var cardsRow;
        for (var i = 0; i < activities.length; i++) {
            if (i == 0) {
                continue;
            }
            var activity = activities[i];
            if (activity.length == 1) {
                continue;
            }
            if (i % 2 == 1) {
                $cardsRow = $('<div class="row">');
                $activitiesContainer.append($cardsRow);
            }
            var descriptions = '';
            for (var iDescriptions = 3; iDescriptions < activity.length; iDescriptions++) {
                descriptions += '' + activity[iDescriptions] + '<br/>';
            }
            var cardImage = '';
            if (activity[2]) {
                cardImage = ''
                + '        <div class="card-image">'
                + '          <img src="images/' + activity[2] + '">'
                + '          <span class="card-title">@' + activity[1]  + '</span>'
                + '        </div>'
            }
            $cardsRow.append(''
                + '    <div class="col s12 m6">'
                + '      <div class="card">'
                + cardImage
                + '        <div class="card-content">'
                + '          <span class="card-title activator grey-text text-darken-4">' + activity[0] + ' <i class="mdi-navigation-more-vert right"></i></span>'
                + '        </div>'
                + '        <div class="card-reveal">'
                + '          <span class="card-title grey-text text-darken-4"><i class="mdi-navigation-close right"></i></span>'
                + descriptions
                + '        </div>'
                + '      </div>'
                + '    </div>'
                );
        }
    });
});
