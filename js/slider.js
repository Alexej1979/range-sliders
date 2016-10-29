 $(function()
            {
                $("#plus").on("click",function()
                {
                    $("#ok").show(); 
                    $("#plus").hide();
                });

                const slider = new Slider('#ex1'); 
                $("#ex1SliderVal").text("+"+$("#ex1").attr("data-slider-value"));
                slider.on("slide", function(slideEvt) 
                {
                    $("#ex1SliderVal").text("+"+slideEvt);
                });

                $("#ex2SliderVal").text("+"+$("#ex2").attr("data-slider-max"));

                const slider2 = new Slider('#ex2');  
                $("#ex2SliderVal").text("+"+$("#ex2").attr("data-slider-value"));
                slider2.on("slide", function(slideEvt) 
                {
                    $("#ex2SliderVal").text("+"+slideEvt);
                });
            });