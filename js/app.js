$(document).foundation()

$(document).ready(function () {

    //----------------------DESKTOP------------------------

    $("#logo").click(function () {
        if ($("#about-page").hasClass("off")) {
            //nichts
        } else {
            $("#about-page").addClass("animated fadeOut");
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").addClass("off");
                    $("#logo").addClass("off");
                    $("#homepage").removeClass("off");
                    $("#homepage").addClass("animated slideInDown");
                    $("#homepage").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                        function (e) {
                            $("#homepage").removeClass("off");
                            $("#homepage").removeClass("animated slideInDown");
                            $("#about-page").addClass("off");
                            $("#service-page").addClass("off");
                            $("#works-page").addClass("off");
                            $("#contact-page").addClass("off");
                            $("#about-page").removeClass("fadeOut");
                        });
                });
        };

        if ($("#service-page").hasClass("off")) {
            //nichts
        } else {
            $("#service-page").addClass("animated fadeOut");
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").addClass("off");
                    $("#logo").addClass("off");
                    $("#homepage").removeClass("off");
                    //alert("off");
                    $("#homepage").addClass("animated slideInDown");
                    $("#homepage").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                        function (e) {
                            $("#homepage").removeClass("off");
                            $("#homepage").removeClass("animated slideInDown");
                            $("#about-page").addClass("off");
                            $("#service-page").addClass("off");
                            $("#works-page").addClass("off");
                            $("#contact-page").addClass("off");
                            $("#service-page").removeClass("fadeOut");
                        });
                });
        };

        if ($("#works-page").hasClass("off")) {
            //nichts
        } else {
            $("#works-page").addClass("animated fadeOut");
            $("#works-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-page").addClass("off");
                    $("#logo").addClass("off");
                    $("#homepage").removeClass("off");
                    //alert("off");
                    $("#homepage").addClass("animated slideInDown");
                    $("#homepage").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                        function (e) {
                            $("#homepage").removeClass("off");
                            $("#homepage").removeClass("animated slideInDown");
                            $("#about-page").addClass("off");
                            $("#service-page").addClass("off");
                            $("#works-page").addClass("off");
                            $("#contact-page").addClass("off");
                            $("#works-page").removeClass("fadeOut");
                        });
                });
        };

        if ($("#works-bfmu-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bfmu-content").addClass("animated fadeOut");
            $("#works-bfmu-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bfmu-content").addClass("off");
                    $("#logo").addClass("off");
                    $("#homepage").removeClass("off");
                    $("#homepage").addClass("animated slideInDown");
                    $("#homepage").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                        function (e) {
                            $("#works-thumb-page").removeClass("off");
                            $("#homepage").removeClass("off");
                            $("#homepage").removeClass("animated slideInDown");
                            $("#about-page").addClass("off");
                            $("#service-page").addClass("off");
                            $("#works-page").addClass("off");
                            $("#contact-page").addClass("off");
                            $("#works-page").removeClass("fadeOut");
                        });
                });
        };

        if ($("#works-freiheitsredner-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-freiheitsredner-content").addClass("animated fadeOut");
            $("#works-freiheitsredner-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-freiheitsredner-content").addClass("off");
                    $("#logo").addClass("off");
                    $("#homepage").removeClass("off");
                    $("#homepage").addClass("animated slideInDown");
                    $("#homepage").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                        function (e) {
                            $("#works-thumb-page").removeClass("off");
                            $("#homepage").removeClass("off");
                            $("#homepage").removeClass("animated slideInDown");
                            $("#about-page").addClass("off");
                            $("#service-page").addClass("off");
                            $("#works-page").addClass("off");
                            $("#contact-page").addClass("off");
                            $("#works-page").removeClass("fadeOut");
                        });
                });
        };

        if ($("#works-bucketlist-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bucketlist-content").addClass("animated fadeOut");
            $("#works-bucketlist-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bucketlist-content").addClass("off");
                    $("#logo").addClass("off");
                    $("#homepage").removeClass("off");
                    $("#homepage").addClass("animated slideInDown");
                    $("#homepage").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                        function (e) {
                            $("#works-thumb-page").removeClass("off");
                            $("#homepage").removeClass("off");
                            $("#homepage").removeClass("animated slideInDown");
                            $("#about-page").addClass("off");
                            $("#service-page").addClass("off");
                            $("#works-page").addClass("off");
                            $("#contact-page").addClass("off");
                            $("#works-page").removeClass("fadeOut");
                        });
                });
        };

        if ($("#contact-page").hasClass("off")) {
            //nichts
        } else {
            $("#contact-page").addClass("animated fadeOut");
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").addClass("off");
                    $("#logo").addClass("off");
                    $("#homepage").removeClass("off");
                    //alert("off");
                    $("#homepage").addClass("animated slideInDown");
                    $("#homepage").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                        function (e) {
                            $("#homepage").removeClass("off");
                            $("#homepage").removeClass("animated slideInDown");
                            $("#about-page").addClass("off");
                            $("#service-page").addClass("off");
                            $("#works-page").addClass("off");
                            $("#contact-page").addClass("off");
                            $("#contact-page").removeClass("fadeOut");
                        });
                });
        };
    });





    $("#about").click(function () {
        if ($("#homepage").hasClass("off")) {
            //nichts
        } else {
            $("#homepage").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#about-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#homepage").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#homepage").addClass("off");
                    $("#homepage").removeClass("animated fadeOut");
                    $("#about-page").removeClass("off");
                });
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").removeClass("animated slideInDown");
                });
        };

        if ($("#service-page").hasClass("off")) {
            //nichts
        } else {
            $("#service-page").addClass("animated fadeOut");
            $("#about-page").addClass("animated slideInDown");
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").addClass("off");
                    $("#service-page").removeClass("animated fadeOut");
                    $("#about-page").removeClass("off");
                });
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-page").hasClass("off")) {
            //nichts
        } else {
            $("#works-page").addClass("animated fadeOut");
            $("#about-page").addClass("animated slideInDown");
            $("#works-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-page").addClass("off");
                    $("#works-page").removeClass("animated fadeOut");
                    $("#about-page").removeClass("off");
                });
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-bfmu-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bfmu-content").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#about-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-bfmu-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bfmu-content").addClass("off");
                    $("#works-bfmu-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#about-page").removeClass("off");
                });
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-freiheitsredner-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-freiheitsredner-content").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#about-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-freiheitsredner-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-freiheitsredner-content").addClass("off");
                    $("#works-freiheitsredner-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#about-page").removeClass("off");
                });
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-bucketlist-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bucketlist-content").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#about-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-bucketlist-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bucketlist-content").addClass("off");
                    $("#works-bucketlist-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#about-page").removeClass("off");
                });
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").removeClass("animated slideInDown");
                });
        };








        if ($("#contact-page").hasClass("off")) {
            //nichts
        } else {
            $("#contact-page").addClass("animated fadeOut");
            $("#about-page").addClass("animated slideInDown");
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").addClass("off");
                    $("#contact-page").removeClass("animated fadeOut");
                    $("#about-page").removeClass("off");
                });
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").removeClass("animated slideInDown");
                });
        };


    });


    $("#service").click(function () {
        if ($("#homepage").hasClass("off")) {
            //nichts
        } else {
            $("#homepage").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#service-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#homepage").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#homepage").addClass("off");
                    $("#homepage").removeClass("animated fadeOut");
                    $("#service-page").removeClass("off");
                });
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").removeClass("animated slideInDown");
                });
        };

        if ($("#about-page").hasClass("off")) {
            //nichts
        } else {
            $("#about-page").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#service-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").addClass("off");
                    $("#about-page").removeClass("animated fadeOut");
                    $("#service-page").removeClass("off");
                });
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-page").hasClass("off")) {
            //nichts
        } else {
            $("#works-page").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#service-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-page").addClass("off");
                    $("#works-page").removeClass("animated fadeOut");
                    $("#service-page").removeClass("off");
                });
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-bfmu-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bfmu-content").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#service-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-bfmu-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bfmu-content").addClass("off");
                    $("#works-bfmu-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#service-page").removeClass("off");
                });
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-freiheitsredner-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-freiheitsredner-content").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#service-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-freiheitsredner-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-freiheitsredner-content").addClass("off");
                    $("#works-freiheitsredner-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#service-page").removeClass("off");
                });
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-bucketlist-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bucketlist-content").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#service-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-bucketlist-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bucketlist-content").addClass("off");
                    $("#works-bucketlist-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#service-page").removeClass("off");
                });
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").removeClass("animated slideInDown");
                });
        };



        if ($("#contact-page").hasClass("off")) {
            //nichts
        } else {
            $("#contact-page").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#service-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").addClass("off");
                    $("#contact-page").removeClass("animated fadeOut");
                    $("#service-page").removeClass("off");
                });
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").removeClass("animated slideInDown");
                });
        };

    });

    $("#works").click(function () {
        if ($("#homepage").hasClass("off")) {
            //nichts
        } else {
            $("#homepage").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#works-page").addClass("animated slideInUp");
            $("#logo").addClass("animated fadeIn");
            $("#homepage").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#homepage").addClass("off");
                    $("#homepage").removeClass("animated fadeOut");
                    $("#works-page").removeClass("off");
                });
            $("#works-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-page").removeClass("animated slideInUp");
                });
        };


        if ($("#about-page").hasClass("off")) {
            //nichts
        } else {
            $("#about-page").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#works-page").addClass("animated slideInUp");
            $("#logo").addClass("animated fadeIn");
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").addClass("off");
                    $("#about-page").removeClass("animated fadeOut");
                    $("#works-page").removeClass("off");
                });
            $("#works-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").addClass("off");
                    $("#works-page").removeClass("animated slideInUp");
                });
        };


        if ($("#service-page").hasClass("off")) {
            //nichts
        } else {
            $("#service-page").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#works-page").addClass("animated slideInUp");
            $("#logo").addClass("animated fadeIn");
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").addClass("off");
                    $("#service-page").removeClass("animated fadeOut");
                    $("#works-page").removeClass("off");
                });
            $("#works-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-page").removeClass("animated slideInUp");
                });
        };


        if ($("#contact-page").hasClass("off")) {
            //nichts
        } else {
            $("#contact-page").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#works-page").addClass("animated slideInUp");
            $("#logo").addClass("animated fadeIn");
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").addClass("off");
                    $("contact-page").removeClass("animated fadeOut");
                    $("#works-page").removeClass("off");
                });
            $("#works-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-page").removeClass("animated slideInUp");
                });
        };
    });





    $("#contact").click(function () {
        if ($("#homepage").hasClass("off")) {
            //nichts
        } else {
            $("#homepage").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#contact-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#homepage").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#homepage").addClass("off");
                    $("#homepage").removeClass("animated fadeOut");
                    $("#contact-page").removeClass("off");
                });
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").removeClass("animated slideInDown");
                });
        };

        if ($("#about-page").hasClass("off")) {
            //nichts
        } else {
            $("#about-page").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#contact-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#about-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#about-page").addClass("off");
                    $("#about-page").removeClass("animated fadeOut");
                    $("#contact-page").removeClass("off");
                });
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").removeClass("animated slideInDown");
                });
        };

        if ($("#service-page").hasClass("off")) {
            //nichts
        } else {
            $("#service-page").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#contact-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#service-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#service-page").addClass("off");
                    $("#service-page").removeClass("animated fadeOut");
                    $("#contact-page").removeClass("off");
                });
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-page").hasClass("off")) {
            //nichts
        } else {
            $("#works-page").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#contact-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-page").addClass("off");
                    $("#works-page").removeClass("animated fadeOut");
                    $("#contact-page").removeClass("off");
                });
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-bfmu-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bfmu-content").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#contact-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-bfmu-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bfmu-content").addClass("off");
                    $("#works-bfmu-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#contact-page").removeClass("off");
                });
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-freiheitsredner-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-freiheitsredner-content").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#contact-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-freiheitsredner-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-freiheitsredner-content").addClass("off");
                    $("#works-freiheitsredner-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#contact-page").removeClass("off");
                });
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").removeClass("animated slideInDown");
                });
        };

        if ($("#works-bucketlist-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bucketlist-content").addClass("animated fadeOut");
            $("#logo").removeClass("off");
            $("#contact-page").addClass("animated slideInDown");
            $("#logo").addClass("animated fadeIn");
            $("#works-bucketlist-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bucketlist-content").addClass("off");
                    $("#works-bucketlist-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#contact-page").removeClass("off");
                });
            $("#contact-page").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#contact-page").removeClass("animated slideInDown");
                });
        };

    });



    /*------------------------------MOBILE---------------------------*/


    $("#menu-burger").click(function () {
        if ($("#menu-page").hasClass("off")) {
            $("#example-animated-menu").addClass("off");
            $("#example-animated-menu").css({
                "display": "none"
            });
            $("#menu-page").removeClass("off");
            $("#menu-page").addClass("animated flipInY");
            $("#menu-page").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#menu-page").removeClass("animated flipInY");
                    $("#menu-page").removeClass("off");
                });
        } else {
            $("#menu-page").addClass("animated flipOutY");
            $("#example-animated-menu").addClass("off");
            $("#example-animated-menu").css({
                "display": "none"
            });
            $("#menu-page").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#menu-page").removeClass("animated flipOutY");
                    $("#menu-page").addClass("off");
                });
        }
    });



    $("#pop-home").click(function () {
        if ($("menu-page").hasClass("off")) {
            //nichts
        } else {
            $("#menu-page").addClass("animated flipOutY");
            $("#menu-page").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#menu-page").addClass("off");

                    if ($("#home-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#menu-page").removeClass("animated flipOutY");
                    };
                    if ($("#about-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#about-page").addClass("off");
                        $("#homepage").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#service-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#service-page").addClass("off");
                        $("#homepage").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#works-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#works-page").addClass("off");
                        $("#homepage").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#contact-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#contact-page").addClass("off");
                        $("#homepage").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                });
        };
    });




    $("#pop-about").click(function () {
        $(".title-box").css({
            "padding-top": "0vh"
        });
        $(".content-box").css({
            "padding-top": "0vh"
        });
        if ($("menu-page").hasClass("off")) {
            //nichts
        } else {
            $("#menu-page").addClass("animated flipOutY");
            $("#menu-page").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#menu-page").addClass("off");
                    if ($("#homepage").hasClass("off")) {
                        //nichts
                    } else {
                        $("#homepage").addClass("off");
                        $("#about-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#about-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#service-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#service-page").addClass("off");
                        $("#about-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#works-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#works-page").addClass("off");
                        $("#about-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#contact-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#contact-page").addClass("off");
                        $("#about-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                });
        };
    });



    $("#pop-service").click(function () {
        $(".title-box").css({
            "padding-top": "0vh"
        });
        $(".content-box").css({
            "padding-top": "0vh"
        });
        if ($("menu-page").hasClass("off")) {
            //nichts
        } else {
            $("#menu-page").addClass("animated flipOutY");
            $("#menu-page").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#menu-page").addClass("off");
                    if ($("#homepage").hasClass("off")) {
                        //nichts
                    } else {
                        $("#homepage").addClass("off");
                        $("#service-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#about-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#about-page").addClass("off");
                        $("#service-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#service-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#works-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#works-page").addClass("off");
                        $("#service-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#contact-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#contact-page").addClass("off");
                        $("#service-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                });
        };
    });

    $("#pop-works").click(function () {
        $(".title-box").css({
            "padding-top": "0vh"
        });
        $(".content-box").css({
            "padding-top": "0vh"
        });
        if ($("menu-page").hasClass("off")) {
            //nichts
        } else {
            $("#menu-page").addClass("animated flipOutY");
            $("#menu-page").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#menu-page").addClass("off");
                    if ($("#homepage").hasClass("off")) {
                        //nichts
                    } else {
                        $("#homepage").addClass("off");
                        $("#works-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#about-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#about-page").addClass("off");
                        $("#works-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };



                    if ($("#service-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#service-page").addClass("off");
                        $("#works-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#works-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#menu-page").removeClass("animated flipOutY");
                    };


                    if ($("#contact-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#contact-page").addClass("off");
                        $("#works-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                });
        };
    });


    $("#pop-contact").click(function () {
        $(".title-box").css({
            "padding-top": "0vh"
        });
        $(".content-box").css({
            "padding-top": "0vh"
        });
        if ($("menu-page").hasClass("off")) {
            //nichts
        } else {
            $("#menu-page").addClass("animated flipOutY");
            $("#menu-page").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#menu-page").addClass("off");
                    if ($("#homepage").hasClass("off")) {
                        //nichts
                    } else {
                        $("#homepage").addClass("off");
                        $("#contact-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#about-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#about-page").addClass("off");
                        $("#contact-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };



                    if ($("#service-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#service-page").addClass("off");
                        $("#contact-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                    if ($("#contact-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#menu-page").removeClass("animated flipOutY");
                    };


                    if ($("#works-page").hasClass("off")) {
                        //nichts
                    } else {
                        $("#works-page").addClass("off");
                        $("#contact-page").removeClass("off");
                        $("#menu-page").removeClass("animated flipOutY");
                    };

                });
        };
    });









    /*------------------------------service popup------------------------------*/


    $('#my_popup').popup({
        transition: 'all 0.3s'
    });


    $(".my_popup_close").click(function () {
        $("#explain-icondesign").addClass("off");
        $("#explain-uidesign").addClass("off");
        $("#explain-dev").addClass("off");
    });


    $("#icon-icondesign").click(function () {
        $("#explain-icondesign").removeClass("off");
    });

    $("#icon-uidesign").click(function () {
        $("#explain-uidesign").removeClass("off");
    });

    $("#icon-dev").click(function () {
        $("#explain-dev").removeClass("off");
    });


    /*-----------------------works---------------------------------*/

    $("#works-bfmu").click(function () {
        $("#works-bfmu-content").removeClass("off");
        $("#works-thumb-page").addClass("off");
    });
    
    $("#works-freiheitsredner").click(function () {
        $("#works-freiheitsredner-content").removeClass("off");
        $("#works-thumb-page").addClass("off");
    });

    $("#works-bucketlist").click(function () {
        $("#works-bucketlist-content").removeClass("off");
        $("#works-thumb-page").addClass("off");
    });

    $(".works-pages-exit").click(function () {
        if ($("#works-bfmu-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bfmu-content").addClass("animated fadeOut");
            $("#works-bfmu-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bfmu-content").addClass("off");
                    $("#works-bfmu-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#works-thumb-page").removeClass("animated slideInUp");

                });
        };

        if ($("#works-freiheitsredner-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-freiheitsredner-content").addClass("animated fadeOut");
            $("#works-freiheitsredner-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-freiheitsredner-content").addClass("off");
                    $("#works-freiheitsredner-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#works-thumb-page").removeClass("animated slideInUp");
                });
        };

        if ($("#works-bucketlist-content").hasClass("off")) {
            //nichts
        } else {
            $("#works-bucketlist-content").addClass("animated fadeOut");
            $("#works-bucketlist-content").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    $("#works-bucketlist-content").addClass("off");
                    $("#works-bucketlist-content").removeClass("animated fadeOut");
                    $("#works-thumb-page").removeClass("off");
                    $("#works-thumb-page").removeClass("animated slideInUp");
                });
        };
    });

    
});