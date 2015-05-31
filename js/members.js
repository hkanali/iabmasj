$(function(){
    /**
     * data of members.html
     */
    $.get('resources/members.txt',function(data){
        var members = $.csv(",", "", "\n")(data);
        var $membersContainer = $('.members-container');
        var cardsRow;
        for (var i = 0; i < members.length; i++) {
            if (i == 0) {
                continue;
            }
            var member = members[i];
            if (i % 2 == 1) {
                $cardsRow = $('<div class="row">');
                $membersContainer.append($cardsRow);
            }
            var descriptions = '';
            for (var iDescriptions = 2; iDescriptions < member.length; iDescriptions++) {
                descriptions += '' + member[iDescriptions] + '<br/>';
            }
            $cardsRow.append(''
                + '   <div class="col s12 m6">'
                + '     <div class="card">'
                + '       <div class="card-content">'
                + '         <span class="card-title activator grey-text text-darken-4">' + member[0] + ' <i class="mdi-navigation-more-vert right"></i></span>'
                + '         <p><a href="mailto:' + member[1] + '">Email: ' + member[1] + '</a></p>'
                + '       </div>'
                + '       <div class="card-reveal">'
                + '         <span class="card-title grey-text text-darken-4"><i class="mdi-navigation-close right"></i></span>'
                + descriptions
                + '       </div>'
                + '     </div>'
                + '   </div>'
                );
        }
    });
});
