$("#slider-range-hoogte").slider({
            range: true,
            min: 0,
            max: 5000,
            step: 10,
            values: [100, 500],
            slide: function(event, ui) {
            $("#hoogte_min").val($(this).slider("values", 0));
            $("#hoogte_max").val($(this).slider("values", 1));
            },
            stop: function(event, ui) {
            $("#hoogte_min").val($(this).slider("values", 0));
            $("#hoogte_max").val($(this).slider("values", 1));
            }
            });
            //initialiseren van de startwaarden
            $("#hoogte_min").val($("#slider-range-hoogte").slider("values", 0));
            $("#hoogte_max").val($("#slider-range-hoogte").slider("values", 1));


