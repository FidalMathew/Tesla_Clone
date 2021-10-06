(function($) {
    $(function() {
        //initialize functions
        function navbarTracker(event) {
            var elementX = event.pageX;
            var numberOfElement = $(this).index('.nav-link');
            var navevent = $('#hover-event').position().left;
            var navbar = $('.nav-right').position().left;
            var widths = [$('.nav-item:nth-child(1)'), $('.nav-item:nth-child(2)'),
            $('.nav-item:nth-child(3)'), $('.nav-item:nth-child(4)'), $('.nav-item:nth-child(5)'),
            $('.nav-item:nth-child(6)'), $('.nav-item1'), $('.nav-item2'),
            $('.nav-item3')];

            
            
            console.log(numberOfElement)
            switch(numberOfElement){

                case 0:
                var elementWidth = $('.nav-item:nth-child(1)').width();
                $('#hover-tracker').css('left', navevent + widths[0].position().left + 'px');
                $('#hover-tracker').css('margin-left', 35 + 'px');
                break;

                case 1:
                var elementWidth = $('.nav-item:nth-child(2)').width();
                $('#hover-tracker').css('left', navevent + widths[1].position().left + 'px');
                $('#hover-tracker').css('margin-left', 35 + 'px');
                break;

                case 2:
                var elementWidth = $('.nav-item:nth-child(3)').width();
                $('#hover-tracker').css('left', navevent + widths[2].position().left + 'px');
                $('#hover-tracker').css('margin-left', 35 + 'px');
                break;

                case 3:
                var elementWidth = $('.nav-item:nth-child(4)').width();
                $('#hover-tracker').css('left',  navevent + widths[3].position().left + 'px');
                $('#hover-tracker').css('margin-left', 35 + 'px');
                break;

                case 4:
                var elementWidth = $('.nav-item:nth-child(5)').width();
                $('#hover-tracker').css('left', navevent + widths[4].position().left + 'px');
                $('#hover-tracker').css('margin-left', 35 + 'px');
                break;

                case 5:
                
                var elementWidth = $('.nav-item:nth-child(6)').width();
                $('#hover-tracker').css('left', navevent + widths[5].position().left + 'px');
                $('#hover-tracker').css('margin-left', 35 + 'px');
                break;

                case 6:
                var elementWidth = $('.nav-item1').width();                
                $('#hover-tracker').css('left', navbar + 'px');
                $('#hover-tracker').css('margin-left', -13 + 'px');
                break;

                case 7:
                var elementWidth = $('.nav-item2').width();
                $('#hover-tracker').css('left', navbar + $('.nav-item2').position().left + 'px');
                $('#hover-tracker').css('margin-left', -13 + 'px');
                break;

                case 8:
                var elementWidth = $('.nav-item3').width();
                $('#hover-tracker').css('left', navbar + $('.nav-item3').position().left + 'px');
                $('#hover-tracker').css('margin-left', -13 + 'px');
                break;

                
                

                default:
                    var elementWidth = 0;
                break;

            }
            var trackerWidth = elementWidth;
            $('#hover-tracker').css('width', trackerWidth + 'px'); 
        
            
        }

        function fadeInTracker() {
            $('#hover-tracker').fadeIn(450);
        }

        function fadeOutTracker() {
            $('#hover-tracker').fadeOut(450);
        }

        //event handler
        $('.nav-link').mouseover(navbarTracker);
        $('#hover-event').mouseover(fadeInTracker);
        $('#hover-event').mouseleave(fadeOutTracker);
    })
}) (jQuery);