if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    /* ==========================================================================
      Fade Out The Loading Layer
      ========================================================================== */
    setTimeout(function() {
        $('.loading-layer').fadeOut();
    }, 1500);


    /* ==========================================================================
      Hide Logo on Project Page
      ========================================================================== */
    if(window.location.href.indexOf("https://www.0039.com/progetti.html") > -1) {
        $(".loading-logo, .logo").addClass("hide-logo");
    }

    if(window.location.href.indexOf("https://www.0039.com/en/projects.html") > -1) {
        $(".loading-logo, .logo").addClass("hide-logo");
    }



    /* ==========================================================================
       HomePage Slides
       ========================================================================== */
    function initializeFullpage(){
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            recordHistory: false,
            animateAnchor: false,
            continuousVertical: true,
            navigationTooltips: ['Progetti', 'I.W.C.C.', 'Atelier', 'Su Misura', 'Immaginario', 'Colori d\'Autore'],
            scrollingSpeed: 1000,
            easingcss3: 'cubic-bezier(1,.01,.39,1)',

            afterLoad: function(anchorLink, index) {
                var loadedSection = $(this);

                if (index == 1) {
                    $('.slide-box-text-01').delay(150).fadeIn(250);
                }
                if (index == 2) {
                    $('.slide-box-text-02').delay(150).fadeIn(250);
                }
                if (index == 3) {
                    $('.slide-box-text-03').delay(150).fadeIn(250);
                }
                if (index == 4) {
                    $('.slide-box-text-04').delay(150).fadeIn(250);
                }
                if (index == 5) {
                    $('.slide-box-text-05').delay(150).fadeIn(250);
                }
                if (index == 6) {
                    $('.slide-box-text-06').delay(150).fadeIn(250);
                }
            },

            onLeave: function(anchorLink, index) {
                var loadedSection = $(this);

                if (index == 1 | 2 | 3 | 4 | 5 | 6) {
                    $('.slide-box-text').fadeOut(250);
                }
            }
        });
    }

    initializeFullpage();

    $('.slide-arrow-up').click(function() {
        $.fn.fullpage.moveSectionUp();
    });

    $('.slide-arrow-down').click(function() {
        $.fn.fullpage.moveSectionDown();
    });



    /* ==========================================================================
       Menu
       ========================================================================== */
    var isLateralNavAnimating = false;

    $('.navigation-trigger, .navigation-layer, .logo').on('click', function(event) {
        event.preventDefault();
        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true;
            $('body').toggleClass('navigation-is-open');

            if ($('body').hasClass('navigation-is-open')) {
                $(".navigation-layer").css({
                    "z-index": "999",
                    "opacity": "1"
                });
            } else {
                $(".navigation-layer").css("opacity", "0");
                setTimeout(function() {
                    $(".navigation-layer").css("z-index", "-1");
                }, 500);
            }

            $(".project-section-navigation").fadeOut();
            $('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                isLateralNavAnimating = false;
            });
        }
    });

    $('.navigation-layer, .logo').on('click', function(event) {
        $('.hamburger').toggleClass('is-active');
    });



    /* ==========================================================================
       Scroll Down To Discover The Project
       ========================================================================== */
    $('.cover-button').click(function(e) {
        $("html, body").animate({
            scrollTop: $(".project-section-beige").offset().top
        }, 750);
        e.preventDefault();
        return false;
    });


    /* ==========================================================================
       Click Current Page LINK And Prevent Default
       ========================================================================== */
    $('a.selected').click(function(e) {
        e.preventDefault();
        return false;
    });



    /* ==========================================================================
       Swap The Divs
       ========================================================================== */
   $(window).bind("load resize", function(e) {
       if ($(window).width() > 767) {
           $('.reveal-block-50-small .reveal-block-50-content').each(function() {
               $(this).insertBefore($(this).prev('.reveal-block-50-inner'));
           });

           $('.swap-fix .reveal-block-50-content').each(function() {
               $(this).insertBefore($(this).prev('.reveal-block-50-inner'));
           });

           $('.swap-fix-2 .reveal-block-50-inner').each(function() {
               $(this).insertBefore($(this).prev('.reveal-block-50-content'));
           });
       } else {
           $('.reveal-block-50-small .reveal-block-50-inner').each(function() {
               $(this).insertBefore($(this).prev('.reveal-block-50-content'));
           });

           $('.swap-fix .reveal-block-50-inner').each(function() {
               $(this).insertBefore($(this).prev('.reveal-block-50-content'));
           });

           $('.swap-fix-2 .reveal-block-50-inner').each(function() {
               $(this).insertBefore($(this).prev('.reveal-block-50-content'));
           });
       }

       if ($(window).width() > 639) {
           $('.footer-logo, .footer-social-container').insertAfter(".footer-container-center nav:nth-of-type(2)");

           $(".footer-container-bottom p").html(function() {
               return $(this).html().replace('Via Roma, 24 - 35010 Limena<br>Padova - ITALIA', 'Via Roma, 24&nbsp;&nbsp; | &nbsp;&nbsp;35010 Limena - Padova&nbsp;&nbsp; | &nbsp;&nbsp;ITALIA');
           });

           $(".footer-container-bottom p").html(function() {
               return $(this).html().replace('Via Roma, 24 - 35010 Limena<br>Padova - ITALY', 'Via Roma, 24&nbsp;&nbsp; | &nbsp;&nbsp;35010 Limena - Padova&nbsp;&nbsp; | &nbsp;&nbsp;ITALY');
           });

           $(".footer-container-bottom").html(function() {
               return $(this).html().replace('<p class="privacies"><a href="mailto:info@0039.com">info@0039.com</a><br>+39 049 884 2253</p>', '<p class="privacies"><a href="mailto:info@0039.com">info@0039.com</a>&nbsp;&nbsp; | &nbsp;&nbsp;+39 049 884 2253</p>');
           });
       } else {
           $('.footer-logo, .footer-social-container').insertAfter(".footer-container-center");

           $(".footer-container-bottom p").html(function() {
               return $(this).html().replace('Via Roma, 24&nbsp;&nbsp; | &nbsp;&nbsp;35010 Limena - Padova&nbsp;&nbsp; | &nbsp;&nbsp;ITALIA', 'Via Roma, 24 - 35010 Limena<br>Padova - ITALIA');
           });

           $(".footer-container-bottom p").html(function() {
               return $(this).html().replace('Via Roma, 24&nbsp;&nbsp; | &nbsp;&nbsp;35010 Limena - Padova&nbsp;&nbsp; | &nbsp;&nbsp;ITALY', 'Via Roma, 24 - 35010 Limena<br>Padova - ITALY');
           });
       }
   });

   if ($(window).width() > 479) {
       $(".footer-container-policy-credits").html(function() {
           return $(this).html().replace('<br>', ' &nbsp;|&nbsp; ');
       });
   } else {
       $(".footer-container-policy-credits").html(function() {
           return $(this).html().replace(' &nbsp;|&nbsp; ', '<br>');
       });
   }


    /* ==========================================================================
       Project Navigation
       ========================================================================== */
    $(window).scroll(function() {
        if ($(window).scrollTop() > 800) {
            $(".project-section-navigation").fadeIn();
        } else {
            $(".project-section-navigation").fadeOut();
        }

        /* ==========================================================================
           If Reach Bottom Fade In / Out The Logo
           ========================================================================== */
        if ($(window).scrollTop() + 473 > $(document).height() - $(window).height()) {
            $(".logo, .loading-logo").fadeOut("fast");
        } else {
            $(".logo, .loading-logo").fadeIn("fast");
        }
    });



    /* ==========================================================================
       Project Navigation
       ========================================================================== */
    window.addEventListener('orientationchange', function() {
        var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
        document.body.style.display = 'none';
        setTimeout(function() {
            document.body.style.display = originalBodyStyle;
        }, 10);
    });



    /* ==========================================================================
       Open / Close Privacy Policy - Cookie Policy
       ========================================================================== */
    $(".open-privacy-policy").click(function() {
        $(".privacy-policy-layer").fadeIn(250);
        $("body, html").addClass("no-scroll");
        if ($('html').hasClass('fp-enabled')) {
            $.fn.fullpage.destroy('all');
        }
        return false
    });

    $(".close-privacy-policy").click(function() {
        $(".privacy-policy-layer").delay(1000).fadeOut(250);
        $(".layer-content-outer").animate({
            scrollTop: 0
        }, 500);
        $("body, html").removeClass("no-scroll");
        return false
    });


    $(".open-cookie-policy").click(function() {
        $(".cookie-policy-layer").fadeIn(250);
        $("body, html").addClass("no-scroll");
        if ($('html').hasClass('fp-enabled')) {
            $.fn.fullpage.destroy('all');
        }
        return false
    });

    $(".close-cookie-policy").click(function() {
        $(".cookie-policy-layer").delay(1000).fadeOut(250);
        $(".layer-content-outer").animate({
            scrollTop: 0
        }, 500);
        $("body, html").removeClass("no-scroll");
        return false
    });


    $(".close-home-policy").click(function() {
        $('img.logo').css({"display":"block"});
        initializeFullpage();
        return false
    });


    $(".from-privacy-to-cookies").click(function() {
        $(".cookie-policy-layer").delay(1000).fadeIn();
        $(".privacy-policy-layer").delay(1500).fadeOut(250);
        $(".layer-content-outer").animate({
            scrollTop: 0
        }, 500);
        return false
    });

    $(".from-cookies-to-privacy").click(function() {
        $(".privacy-policy-layer").fadeIn();
        $(".cookie-policy-layer").delay(1000).fadeOut(250);
        $(".layer-content-outer").animate({
            scrollTop: 0
        }, 500);
        return false
    });



    /* ==========================================================================
       Open / Close Catalogue Request
       ========================================================================== */
    $(".open-catalogue-request").click(function() {
        $(".catalogue-request-layer").fadeIn(250);
        $("body, html").addClass("no-scroll");
        return false
    });

    $(".close-catalogue-request").click(function() {
        $(".catalogue-request-layer").fadeOut(250);
        $("body, html").removeClass("no-scroll");
        return false
    });



    /* ==========================================================================
       Privacy Policy Accordions - Cookie Policy Accordions
       ========================================================================== */
    new jQueryCollapse($(".accordion"), {
        accordion: true,
        open: function() {
            this.slideDown(250);
        },
        close: function() {
            this.slideUp(250);
        }
    });



    /* ==========================================================================
       Catalogue Request
       ========================================================================== */
    $('input[id="privato"]').on('ifChecked', function(event) {
        $(this).val('Si');
        $('input[id="architettoDesigner"]').iCheck('uncheck');
        $('input[id="agenteRivenditore"]').iCheck('uncheck');
    });
    $('input[id="privato"]').on('ifUnchecked', function(event) {
        $(this).val('No');
    });


    $('input[id="architettoDesigner"]').on('ifChecked', function(event) {
        $(this).val('Si');
        $('input[id="privato"]').iCheck('uncheck');
        $('input[id="agenteRivenditore"]').iCheck('uncheck');
    });
    $('input[id="architettoDesigner"]').on('ifUnchecked', function(event) {
        $(this).val('No');
    });


    $('input[id="agenteRivenditore"]').on('ifChecked', function(event) {
        $(this).val('Si');
        $('input[id="privato"]').iCheck('uncheck');
        $('input[id="architettoDesigner"]').iCheck('uncheck');
    });
    $('input[id="agenteRivenditore"]').on('ifUnchecked', function(event) {
        $(this).val('No');
    });


    $('input[type=checkbox], input[type=radio]').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'icheckbox_square-green',
        increaseArea: '20%'
    });


    jQuery.validator.addMethod('telephoneNumber', function(value) {
        return (value.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}(\s*(ext|x)\s*\.?:?\s*([0-9]+))?$/));
    }, 'Inserisci un numero valido');

    $("#catalogue-request").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            city: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telephone: {
                telephoneNumber: true
            },
            message: {
                required: true,
                minlength: 3
            },
            privacy: {
                required: true
            },
        },
    });


    $("#catalogue-request").submit(function(event) {
        event.preventDefault();
        var $form = $(this),
            $submit = $form.find('input[type="submit"]'),
            name_value = $form.find('input[name="name"]').val(),
            city_value = $form.find('input[name="city"]').val(),
            email_value = $form.find('input[name="email"]').val(),
            telephone_value = $form.find('input[name="telephone"]').val(),
            message_value = $form.find('textarea[name="message"]').val(),
            privato_value = $form.find('input[id=privato]').val(),
            architettoDesigner_value = $form.find('input[id=architettoDesigner]').val(),
            agenteRivenditore_value = $form.find('input[id=agenteRivenditore]').val(),
            privacy_value = $form.find('input[type=checkbox]:checked').val(),

            url = $form.attr('action');

        var posting = $.post(url, {
            name: name_value,
            city: city_value,
            email: email_value,
            telephone: telephone_value,
            message: message_value,
            privato: privato_value,
            architettoDesigner: architettoDesigner_value,
            agenteRivenditore: agenteRivenditore_value,
            privacy: privacy_value
        });

        posting.done(function(data) {
            $(".form-response").addClass("visible-form-response").html(data);
            $(".form-response-container").fadeIn();
            setTimeout(function() {
                $('.form-response').removeClass("visible-form-response");
                $(".form-response-container").fadeOut();
            }, 6000);
            if ($('#catalogue-request').valid()) {
                $('#catalogue-request').find('#name, #city, #email, #telephone, #message').val('').removeClass('error').removeClass('valid');
                $('#catalogue-request').find('input[type=checkbox], input[type=radio]').iCheck('uncheck');
                $('.input-container').removeClass("input-filled");
            }
            if ($('#name, #city, #email, #telephone, #message').val == "") {
                $('#name, #city, #email, #telephone, #message').removeClass('valid');
            }
            setTimeout(function() {
                location.reload();
            }, 7000);
        });
    });


    (function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
            (function() {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }

        [].slice.call(document.querySelectorAll('input.input-field, textarea.input-field')).forEach(function(inputEl) {
            // in case the input is already filled..
            if (inputEl.value.trim() !== '') {
                classie.add(inputEl.parentNode, 'input-filled');
            }

            // events:
            inputEl.addEventListener('focus', onInputFocus);
            inputEl.addEventListener('blur', onInputBlur);
        });

        function onInputFocus(ev) {
            classie.add(ev.target.parentNode, 'input-filled');
        }

        function onInputBlur(ev) {
            if (ev.target.value.trim() === '') {
                classie.remove(ev.target.parentNode, 'input-filled');
            }
        }
    })();
} else {

    /* ==========================================================================
      SmoothState
      ========================================================================== */
      $(function() {
          'use strict';
          var $page = $('#main'),
              options = {
                  debug: true,
                  prefetch: true,
                  forms: 'none',
                  cacheLength: 2,

                  onBefore: function($currentTarget, $container) {
                      setTimeout(function() {
                          $('html, body').animate({
                              scrollTop: 0
                          });
                      }, 1500);
                      $(".navigation-layer").addClass("loading-navigation-layer");
                  },

                  onStart: {
                      duration: 2000,
                      render: function($container) {
                          $container.addClass('is-exiting');
                          smoothState.restartCSSAnimations();
                          $('.loading-layer').fadeIn();
                          if ($('body').hasClass('navigation-is-open')) {
                              $('body').toggleClass('navigation-is-open');
                          }
                          if ($('.hamburger').hasClass('is-active')) {
                              $('.hamburger').toggleClass('is-active');
                          }
                      }
                  },

                  onReady: {
                      duration: 2000,
                      render: function($container, $newContent) {
                          $container.removeClass('is-exiting');
                          $container.html($newContent);
                          $('.loading-layer').fadeOut();
                          if ($('html').hasClass('fp-enabled')) {
                              $.fn.fullpage.destroy('all');
                          }
                          $.readyFn.execute();

                          /* ==========================================================================
                             Contacts Map
                             ========================================================================== */
                          var latitude = 45.480200,
                              longitude = 11.842936,
                              map_zoom = 15;

                          var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
                          var marker_url = (is_internetExplorer11) ? 'https://www.0039.com//img/icons/map-location.png' : 'https://www.0039.com//img/icons/map-location.svg';

                          var style=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#5d5243"},{lightness:0}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#281e1d"},{lightness:0}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#281e1d"},{lightness:0}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#3c2d2b"},{lightness:0}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#3c2d2b"},{lightness:0}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#3c2d2b"},{lightness:0},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#3c2d2b"},{lightness:0}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#3c2d2b"},{lightness:-5}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#1e1716"},{lightness:0}]}];

                          var map_options = {
                              center: new google.maps.LatLng(45.480200, 11.842936),
                              zoom: map_zoom,
                              panControl: false,
                              zoomControl: false,
                              mapTypeControl: false,
                              streetViewControl: false,
                              mapTypeId: google.maps.MapTypeId.ROADMAP,
                              scrollwheel: false,
                              styles: style,
                          }

                          var map = new google.maps.Map(document.getElementById('map'), map_options);
                          var marker = new google.maps.Marker({
                              position: new google.maps.LatLng(latitude, longitude),
                              map: map,
                              visible: true,
                              icon: marker_url,
                          });

                          google.maps.event.addDomListener(window, "resize", function() {
                              var center = map.getCenter();
                              google.maps.event.trigger(map, "resize");
                              map.setCenter(center);
                          });

                          function CustomZoomControl(controlDiv, map) {
                              var controlUIzoomIn = document.getElementById('zoom-in'),
                                  controlUIzoomOut = document.getElementById('zoom-out');
                              controlDiv.appendChild(controlUIzoomIn);
                              controlDiv.appendChild(controlUIzoomOut);

                              google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
                                  map.setZoom(map.getZoom() + 1)
                              });
                              google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
                                  map.setZoom(map.getZoom() - 1)
                              });
                          }

                          var zoomControlDiv = document.createElement('div');
                          var zoomControl = new CustomZoomControl(zoomControlDiv, map);

                          map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(zoomControlDiv);

                          /* ==========================================================================
                             Add Google map Button over the map
                             ========================================================================== */
                          $(".google-map-button").appendTo("#map");

                          $(".google-map-button, .mobile-google-map-button").click(function() {
                              var productLink = $(this);

                              productLink.attr("target", "_blank");
                              window.open(productLink.attr("href"));

                              return false;
                          });
                      }
                  }
              },
          smoothState = $page.smoothState(options).data('smoothState');
      });



    /* ==========================================================================
      Fade Out The Loading Layer
      ========================================================================== */
    $(document).ready(function() {
        setTimeout(function() {
            $('.loading-layer').fadeOut();
        }, 1500);


        /* ==========================================================================
           Reload When Page Resize Reach 1024
           ========================================================================== */
      	var threshold = 1025;
      	var initialDiff = ($(window).width() > threshold) ? 1:-1;

      	$(window).on('resize',function(e){
      		var w = $(window).width();
      		var currentDiff = w - threshold;
      		if(currentDiff*initialDiff < 0) {
      			location.reload();
      		}
      	});


        /* ==========================================================================
          Hide Logo on Project Page
          ========================================================================== */
        if(window.location.href.indexOf("https://www.0039.com/progetti.html") > -1) {
            $(".loading-logo, .logo").addClass("hide-logo");
        }

        if(window.location.href.indexOf("https://www.0039.com/en/projects.html") > -1) {
            $(".loading-logo, .logo").addClass("hide-logo");
        }



        /* ==========================================================================
           HomePage Slides
           ========================================================================== */
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            recordHistory: false,
            animateAnchor: false,
            continuousVertical: true,
            navigationTooltips: ['Progetti', 'I.W.C.C.', 'Atelier', 'Su Misura', 'Immaginario', 'Colori d\'Autore'],
            scrollingSpeed: 1000,
            easingcss3: 'cubic-bezier(1,.01,.39,1)',

            afterLoad: function(anchorLink, index) {
                var loadedSection = $(this);

                if (index == 1) {
                    $('.slide-box-text-01').delay(150).fadeIn(250);
                }
                if (index == 2) {
                    $('.slide-box-text-02').delay(150).fadeIn(250);
                }
                if (index == 3) {
                    $('.slide-box-text-03').delay(150).fadeIn(250);
                }
                if (index == 4) {
                    $('.slide-box-text-04').delay(150).fadeIn(250);
                }
                if (index == 5) {
                    $('.slide-box-text-05').delay(150).fadeIn(250);
                }
                if (index == 6) {
                    $('.slide-box-text-06').delay(150).fadeIn(250);
                }
            },

            onLeave: function(anchorLink, index) {
                var loadedSection = $(this);

                if (index == 1 | 2 | 3 | 4 | 5 | 6) {
                    $('.slide-box-text').fadeOut(250);
                }
            }
        });

        $('.slide-arrow-up').click(function() {
            $.fn.fullpage.moveSectionUp();
        });

        $('.slide-arrow-down').click(function() {
            $.fn.fullpage.moveSectionDown();
        });



        /* ==========================================================================
           Menu
           ========================================================================== */
        var isLateralNavAnimating = false;

        $('.navigation-trigger, .navigation-layer, .logo').on('click', function(event) {
            event.preventDefault();
            if (!isLateralNavAnimating) {
                if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true;
                $('body').toggleClass('navigation-is-open');

                if ($('body').hasClass('navigation-is-open')) {
                    $(".navigation-layer").css({
                        "z-index": "999",
                        "opacity": "1"
                    });
                } else {
                    $(".navigation-layer").css("opacity", "0");
                    setTimeout(function() {
                        $(".navigation-layer").css("z-index", "-1");
                    }, 500);
                }

                $(".project-section-navigation").fadeOut();
                $('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                    isLateralNavAnimating = false;
                });
            }
        });

        $('.navigation-layer, .logo').on('click', function(event) {
            $('.hamburger').toggleClass('is-active');
        });



        /* ==========================================================================
           Project Cover Parallax Effects
           ========================================================================== */
        if ($(window).width() > 1024) {
            var scrollTop = $(window).scrollTop();
            var height = 900;
            $('.project-cover-image').css({
                'opacity': ((height - scrollTop) / height)
            });

            var y = $(window).scrollTop();

            $(".project-cover-image").filter(function() {
                return $(this).offset().top < (y + $(window).height()) &&
                    $(this).offset().top + $(this).height() > y;
            }).css('background-position', '0px ' + parseInt(-y / 6) + 'px');
        }



        /* ==========================================================================
           Scroll Down To Discover The Project
           ========================================================================== */
        $('.cover-button').click(function(e) {
            $("html, body").animate({
                scrollTop: $(".project-section-beige").offset().top
            }, 750);
            e.preventDefault();
            return false;
        });


        /* ==========================================================================
           Click Current Page LINK And Prevent Default
           ========================================================================== */
        $('a.selected').click(function(e) {
            e.preventDefault();
            return false;
        });



        /* ==========================================================================
           Project Reveal Effects
           ========================================================================== */
        if ($(window).width() > 1024) {
            var scrollElemToWatch = document.getElementById('reveal-block-city'),
                watcher2 = scrollMonitor.create(scrollElemToWatch, -200),
                rev2 = new RevealFx(scrollElemToWatch, {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });

            watcher2.enterViewport(function() {
                rev2.reveal();
                watcher2.destroy();
            });

            var splitContent1 = document.querySelector('.reveal-block-50-content-architect'),
                watcher1 = scrollMonitor.create(splitContent1, -200),
                rev1 = new RevealFx(document.querySelector('#reveal-block-50-architect'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent1.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher1.enterViewport(function() {
                rev1.reveal();
                watcher1.destroy();
            });

            var splitContent3 = document.querySelector('.reveal-block-50-content-01'),
                watcher3 = scrollMonitor.create(splitContent3, -200),
                rev3 = new RevealFx(document.querySelector('#reveal-block-50-01'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent3.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher3.enterViewport(function() {
                rev3.reveal();
                watcher3.destroy();
            });

            var splitContent4 = document.querySelector('.reveal-block-50-content-02'),
                watcher4 = scrollMonitor.create(splitContent4, -200),
                rev4 = new RevealFx(document.querySelector('#reveal-block-50-02'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent4.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher4.enterViewport(function() {
                rev4.reveal();
                watcher4.destroy();
            });

            var splitContent5 = document.querySelector('.reveal-block-50-content-03'),
                watcher5 = scrollMonitor.create(splitContent5, -200),
                rev5 = new RevealFx(document.querySelector('#reveal-block-50-03'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent5.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher5.enterViewport(function() {
                rev5.reveal();
                watcher5.destroy();
            });

            var splitContent6 = document.querySelector('.reveal-block-50-content-04'),
                watcher6 = scrollMonitor.create(splitContent6, -200),
                rev6 = new RevealFx(document.querySelector('#reveal-block-50-04'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent6.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher6.enterViewport(function() {
                rev6.reveal();
                watcher6.destroy();
            });

            var splitContent7 = document.querySelector('.reveal-block-50-content-05'),
                watcher7 = scrollMonitor.create(splitContent7, -200),
                rev7 = new RevealFx(document.querySelector('#reveal-block-50-05'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent7.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher7.enterViewport(function() {
                rev7.reveal();
                watcher7.destroy();
            });

            var splitContent8 = document.querySelector('.reveal-block-50-content-06'),
                watcher8 = scrollMonitor.create(splitContent8, -200),
                rev8 = new RevealFx(document.querySelector('#reveal-block-50-06'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent8.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher8.enterViewport(function() {
                rev8.reveal();
                watcher8.destroy();
            });

            var splitContent9 = document.querySelector('.reveal-block-50-content-07'),
                watcher9 = scrollMonitor.create(splitContent9, -200),
                rev9 = new RevealFx(document.querySelector('#reveal-block-50-07'), {
                    revealSettings: {
                        bgcolor: '#291e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent9.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher9.enterViewport(function() {
                rev9.reveal();
                watcher9.destroy();
            });

            var splitContent10 = document.querySelector('.reveal-block-50-content-08'),
                watcher10 = scrollMonitor.create(splitContent10, -200),
                rev10 = new RevealFx(document.querySelector('#reveal-block-50-08'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent10.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher10.enterViewport(function() {
                rev10.reveal();
                watcher10.destroy();
            });

            var splitContent11 = document.querySelector('.reveal-block-50-content-09'),
                watcher11 = scrollMonitor.create(splitContent11, -200),
                rev11 = new RevealFx(document.querySelector('#reveal-block-50-09'), {
                    revealSettings: {
                        bgcolor: '#291e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent11.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher11.enterViewport(function() {
                rev11.reveal();
                watcher11.destroy();
            });

            var splitContent12 = document.querySelector('.reveal-block-50-content-10'),
                watcher12 = scrollMonitor.create(splitContent12, -200),
                rev12 = new RevealFx(document.querySelector('#reveal-block-50-10'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent12.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher12.enterViewport(function() {
                rev12.reveal();
                watcher12.destroy();
            });

            var splitContent13 = document.querySelector('.reveal-block-50-content-11'),
                watcher13 = scrollMonitor.create(splitContent13, -200),
                rev13 = new RevealFx(document.querySelector('#reveal-block-50-11'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent13.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher13.enterViewport(function() {
                rev13.reveal();
                watcher13.destroy();
            });

            var splitContent14 = document.querySelector('.reveal-block-50-content-12'),
                watcher14 = scrollMonitor.create(splitContent14, -200),
                rev14 = new RevealFx(document.querySelector('#reveal-block-50-12'), {
                    revealSettings: {
                        bgcolor: '#281e1d',
                        direction: 'rl',
                        duration: 500,
                        easing: 'easeInOutCirc',
                        coverArea: 0,
                        onCover: function(contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                            splitContent14.classList.add('reveal-block-50-content-show');
                        }
                    }
                });

            watcher14.enterViewport(function() {
                rev14.reveal();
                watcher14.destroy();
            });
        }


        /* ==========================================================================
           Swap The Divs
           ========================================================================== */

        $(window).bind("load resize", function(e) {
            if ($(window).width() > 767) {
                $('.reveal-block-50-small .reveal-block-50-content').each(function() {
                    $(this).insertBefore($(this).prev('.reveal-block-50-inner'));
                });

                $('.swap-fix .reveal-block-50-content').each(function() {
                    $(this).insertBefore($(this).prev('.reveal-block-50-inner'));
                });

                $('.swap-fix-2 .reveal-block-50-inner').each(function() {
                    $(this).insertBefore($(this).prev('.reveal-block-50-content'));
                });
            } else {
                $('.reveal-block-50-small .reveal-block-50-inner').each(function() {
                    $(this).insertBefore($(this).prev('.reveal-block-50-content'));
                });

                $('.swap-fix .reveal-block-50-inner').each(function() {
                    $(this).insertBefore($(this).prev('.reveal-block-50-content'));
                });

                $('.swap-fix-2 .reveal-block-50-inner').each(function() {
                    $(this).insertBefore($(this).prev('.reveal-block-50-content'));
                });
            }

            if ($(window).width() > 639) {
                $('.footer-logo, .footer-social-container').insertAfter(".footer-container-center nav:nth-of-type(2)");

                $(".footer-container-bottom p").html(function() {
                    return $(this).html().replace('Via Roma, 24 - 35010 Limena<br>Padova - ITALIA', 'Via Roma, 24&nbsp;&nbsp; | &nbsp;&nbsp;35010 Limena - Padova&nbsp;&nbsp; | &nbsp;&nbsp;ITALIA');
                });

                $(".footer-container-bottom p").html(function() {
                    return $(this).html().replace('Via Roma, 24 - 35010 Limena<br>Padova - ITALY', 'Via Roma, 24&nbsp;&nbsp; | &nbsp;&nbsp;35010 Limena - Padova&nbsp;&nbsp; | &nbsp;&nbsp;ITALY');
                });
            } else {
                $('.footer-logo, .footer-social-container').insertAfter(".footer-container-center");

                $(".footer-container-bottom p").html(function() {
                    return $(this).html().replace('Via Roma, 24&nbsp;&nbsp; | &nbsp;&nbsp;35010 Limena - Padova&nbsp;&nbsp; | &nbsp;&nbsp;ITALIA', 'Via Roma, 24 - 35010 Limena<br>Padova - ITALIA');
                });

                $(".footer-container-bottom p").html(function() {
                    return $(this).html().replace('Via Roma, 24&nbsp;&nbsp; | &nbsp;&nbsp;35010 Limena - Padova&nbsp;&nbsp; | &nbsp;&nbsp;ITALY', 'Via Roma, 24 - 35010 Limena<br>Padova - ITALY');
                });
            }

            if ($(window).width() > 400) {
                $(".footer-container-bottom").html(function() {
                    return $(this).html().replace('<p class="privacies"><a href="mailto:info@0039.com">info@0039.com</a><br>+39 049 884 2253</p>', '<p class="privacies"><a href="mailto:info@0039.com">info@0039.com</a>&nbsp;&nbsp; | &nbsp;&nbsp;+39 049 884 2253</p>');
                });
            } else {
                $(".footer-container-bottom").html(function() {
                    return $(this).html().replace('<p class="privacies"><a href="mailto:info@0039.com">info@0039.com</a>&nbsp;&nbsp; | &nbsp;&nbsp;+39 049 884 2253</p>', '<p class="privacies"><a href="mailto:info@0039.com">info@0039.com</a><br>+39 049 884 2253</p>');
                });
            }
        });

        if ($(window).width() > 479) {
            $(".footer-container-policy-credits").html(function() {
                return $(this).html().replace('<br>', ' &nbsp;|&nbsp; ');
            });
        } else {
            $(".footer-container-policy-credits").html(function() {
                return $(this).html().replace(' &nbsp;|&nbsp; ', '<br>');
            });
        }


        /* ==========================================================================
           Project Navigation
           ========================================================================== */
        $(window).scroll(function() {
            if ($(window).scrollTop() > 800) {
                $(".project-section-navigation").fadeIn();
            } else {
                $(".project-section-navigation").fadeOut();
            }

            /* ==========================================================================
               If Reach Bottom Fade In / Out The Logo
               ========================================================================== */
            if ($(window).scrollTop() + 473 > $(document).height() - $(window).height()) {
                $(".logo, .loading-logo").fadeOut("fast");
            } else {
                $(".logo, .loading-logo").fadeIn("fast");
            }
        });



        /* ==========================================================================
           Open / Close Privacy Policy - Cookie Policy
           ========================================================================== */
        $(".open-privacy-policy").click(function() {
            $(".privacy-policy-layer").fadeIn(250);
            $("body, html").addClass("no-scroll");
            return false
        });

        $(".close-privacy-policy").click(function() {
            $(".privacy-policy-layer").delay(1000).fadeOut(250);
            $(".layer-content-outer").animate({
                scrollTop: 0
            }, 500);
            $("body, html").removeClass("no-scroll");
            return false
        });


        $(".open-cookie-policy").click(function() {
            $(".cookie-policy-layer").fadeIn(250);
            $("body, html").addClass("no-scroll");
            return false
        });

        $(".close-cookie-policy").click(function() {
            $(".cookie-policy-layer").delay(1000).fadeOut(250);
            $(".layer-content-outer").animate({
                scrollTop: 0
            }, 500);
            $("body, html").removeClass("no-scroll");
            return false
        });


        $(".from-privacy-to-cookies").click(function() {
            $(".cookie-policy-layer").delay(1000).fadeIn();
            $(".privacy-policy-layer").delay(1500).fadeOut(250);
            $(".layer-content-outer").animate({
                scrollTop: 0
            }, 500);
            return false
        });

        $(".from-cookies-to-privacy").click(function() {
            $(".privacy-policy-layer").fadeIn();
            $(".cookie-policy-layer").delay(1000).fadeOut(250);
            $(".layer-content-outer").animate({
                scrollTop: 0
            }, 500);
            return false
        });



        /* ==========================================================================
           Open / Close Catalogue Request
           ========================================================================== */
        $(".open-catalogue-request").click(function() {
            $(".catalogue-request-layer").fadeIn(250);
            $("body, html").addClass("no-scroll");
            return false
        });

        $(".close-catalogue-request").click(function() {
            $(".catalogue-request-layer").fadeOut(250);
            $("body, html").removeClass("no-scroll");
            return false
        });



        /* ==========================================================================
           Privacy Policy Accordions - Cookie Policy Accordions
           ========================================================================== */
        new jQueryCollapse($(".accordion"), {
            accordion: true,
            open: function() {
                this.slideDown(250);
            },
            close: function() {
                this.slideUp(250);
            }
        });



        /* ==========================================================================
           Catalogue Request
           ========================================================================== */
        $('input[id="privato"]').on('ifChecked', function(event) {
            $(this).val('Si');
            $('input[id="architettoDesigner"]').iCheck('uncheck');
            $('input[id="agenteRivenditore"]').iCheck('uncheck');
        });
        $('input[id="privato"]').on('ifUnchecked', function(event) {
            $(this).val('No');
        });


        $('input[id="architettoDesigner"]').on('ifChecked', function(event) {
            $(this).val('Si');
            $('input[id="privato"]').iCheck('uncheck');
            $('input[id="agenteRivenditore"]').iCheck('uncheck');
        });
        $('input[id="architettoDesigner"]').on('ifUnchecked', function(event) {
            $(this).val('No');
        });


        $('input[id="agenteRivenditore"]').on('ifChecked', function(event) {
            $(this).val('Si');
            $('input[id="privato"]').iCheck('uncheck');
            $('input[id="architettoDesigner"]').iCheck('uncheck');
        });
        $('input[id="agenteRivenditore"]').on('ifUnchecked', function(event) {
            $(this).val('No');
        });


        $('input[type=checkbox], input[type=radio]').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'icheckbox_square-green',
            increaseArea: '20%'
        });


        jQuery.validator.addMethod('telephoneNumber', function(value) {
            return (value.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}(\s*(ext|x)\s*\.?:?\s*([0-9]+))?$/));
        }, 'Inserisci un numero valido');

        $("#catalogue-request").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                city: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                telephone: {
                    telephoneNumber: true
                },
                message: {
                    required: true,
                    minlength: 3
                },
                privacy: {
                    required: true
                },
            },
        });


        $("#catalogue-request").submit(function(event) {
            event.preventDefault();
            var $form = $(this),
                $submit = $form.find('input[type="submit"]'),
                name_value = $form.find('input[name="name"]').val(),
                city_value = $form.find('input[name="city"]').val(),
                email_value = $form.find('input[name="email"]').val(),
                telephone_value = $form.find('input[name="telephone"]').val(),
                message_value = $form.find('textarea[name="message"]').val(),
                privato_value = $form.find('input[id=privato]').val(),
                architettoDesigner_value = $form.find('input[id=architettoDesigner]').val(),
                agenteRivenditore_value = $form.find('input[id=agenteRivenditore]').val(),
                privacy_value = $form.find('input[type=checkbox]:checked').val(),

                url = $form.attr('action');

            var posting = $.post(url, {
                name: name_value,
                city: city_value,
                email: email_value,
                telephone: telephone_value,
                message: message_value,
                privato: privato_value,
                architettoDesigner: architettoDesigner_value,
                agenteRivenditore: agenteRivenditore_value,
                privacy: privacy_value
            });

            posting.done(function(data) {
                $(".form-response").addClass("visible-form-response").html(data);
                $(".form-response-container").fadeIn();
                setTimeout(function() {
                    $('.form-response').removeClass("visible-form-response");
                    $(".form-response-container").fadeOut();
                }, 6000);
                if ($('#catalogue-request').valid()) {
                    $('#catalogue-request').find('#name, #city, #email, #telephone, #message').val('').removeClass('error').removeClass('valid');
                    $('#catalogue-request').find('input[type=checkbox], input[type=radio]').iCheck('uncheck');
                    $('.input-container').removeClass("input-filled");
                }
                if ($('#name, #city, #email, #telephone, #message').val == "") {
                    $('#name, #city, #email, #telephone, #message').removeClass('valid');
                }
                setTimeout(function() {
                    location.reload();
                }, 7000);
            });
        });


        (function() {
            // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
            if (!String.prototype.trim) {
                (function() {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function() {
                        return this.replace(rtrim, '');
                    };
                })();
            }

            [].slice.call(document.querySelectorAll('input.input-field, textarea.input-field')).forEach(function(inputEl) {
                // in case the input is already filled..
                if (inputEl.value.trim() !== '') {
                    classie.add(inputEl.parentNode, 'input-filled');
                }

                // events:
                inputEl.addEventListener('focus', onInputFocus);
                inputEl.addEventListener('blur', onInputBlur);
            });

            function onInputFocus(ev) {
                classie.add(ev.target.parentNode, 'input-filled');
            }

            function onInputBlur(ev) {
                if (ev.target.value.trim() === '') {
                    classie.remove(ev.target.parentNode, 'input-filled');
                }
            }
        })();
    });
}



/* ==========================================================================
 Sliders
 ========================================================================== */
var tpj = jQuery;

var revapi1065;
tpj(document).ready(function() {
    if (tpj("#rev_slider_1065_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1065_1");
    } else {
        revapi1065 = tpj("#rev_slider_1065_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: 'hades',
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                thumbnails: {
                    style: 'gyges',
                    enable: true,
                    width: 100,
                    height: 67,
                    min_width: 100,
                    wrapper_padding: 5,
                    wrapper_color: "transparent",
                    wrapper_opacity: "1",
                    tmp: '<span class="tp-thumb-img-wrap"><span class="tp-thumb-image"></span></span>',
                    visibleAmount: 5,
                    hide_onmobile: true,
                    hide_under: 800,
                    hide_onleave: false,
                    direction: "horizontal",
                    span: false,
                    position: "inner",
                    space: 3,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 200,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: ''
                }
            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "80%",
                presize: false
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [800, 700, 600, 500],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
                type: "mouse",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "on",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});


var revapi469;
tpj(document).ready(function() {
    if (tpj("#rev_slider_469_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_469_1");
    } else {
        revapi469 = tpj("#rev_slider_469_1").show().revolution({
            sliderType: "carousel",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                    style: 'hades',
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 200,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: ''
                },
                touch: {
                    touchenabled: "off",
                },
            },
            carousel: {
                horizontal_align: "center",
                vertical_align: "center",
                fadeout: "on",
                vary_fade: "on",
                maxVisibleItems: 3,
                infinity: "on",
                space: 10,
                stretch: "off"
            },
            responsiveLevels: [2560, 1660, 1100, 778, 480],
            visibilityLevels: [2560, 1660, 1100, 778, 480],
            gridwidth: [800, 600, 500, 480, 480],
            gridheight: [720, 540, 450, 480, 360],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "enterpoint",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 46, 47, 48, 49, 50, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});


var revapi500;
tpj(document).ready(function() {
    if (tpj("#rev_slider_500_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_500_1");
    } else {
        revapi469 = tpj("#rev_slider_500_1").show().revolution({
            sliderType: "carousel",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                    style: 'hades',
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 200,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: ''
                }
            },
            carousel: {
                horizontal_align: "center",
                vertical_align: "center",
                fadeout: "on",
                vary_fade: "on",
                maxVisibleItems: 3,
                infinity: "on",
                space: 10,
                stretch: "off"
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [800, 640, 480, 480],
            gridheight: [508, 720, 480, 360],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "enterpoint",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 46, 47, 48, 49, 50, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});


var revapi600;
tpj(document).ready(function() {
    if (tpj("#rev_slider_600_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_600_1");
    } else {
        revapi469 = tpj("#rev_slider_600_1").show().revolution({
            sliderType: "carousel",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                    style: 'hades',
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 200,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: ''
                }
            },
            carousel: {
                horizontal_align: "center",
                vertical_align: "center",
                fadeout: "on",
                vary_fade: "on",
                maxVisibleItems: 5,
                infinity: "on",
                space: 10,
                stretch: "off"
            },
            responsiveLevels: [2560, 1360, 1024, 778, 480],
            visibilityLevels: [2560, 1360, 1024, 778, 480],
            gridwidth: [500, 400, 400, 400, 480],
            gridheight: [650, 450, 450, 450, 360],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "enterpoint",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 46, 47, 48, 49, 50, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});


var revapi1066;
tpj(document).ready(function() {
    if (tpj("#rev_slider_1066_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1066_1");
    } else {
        revapi1065 = tpj("#rev_slider_1066_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: 'hades',
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                thumbnails: {
                    style: 'gyges',
                    enable: true,
                    width: 100,
                    height: 67,
                    min_width: 100,
                    wrapper_padding: 5,
                    wrapper_color: "transparent",
                    wrapper_opacity: "1",
                    tmp: '<span class="tp-thumb-img-wrap"><span class="tp-thumb-image"></span></span>',
                    visibleAmount: 5,
                    hide_onmobile: true,
                    hide_under: 800,
                    hide_onleave: false,
                    direction: "horizontal",
                    span: false,
                    position: "inner",
                    space: 3,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 200,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: ''
                }
            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "80%",
                presize: false
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [800, 700, 600, 500],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
                type: "mouse",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "on",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});


var revapi800;
tpj(document).ready(function() {
    if (tpj("#rev_slider_800_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_800_1");
    } else {
        revapi469 = tpj("#rev_slider_800_1").show().revolution({
            sliderType: "carousel",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                    style: 'hades',
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 200,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: ''
                }
            },
            carousel: {
                horizontal_align: "center",
                vertical_align: "center",
                fadeout: "on",
                vary_fade: "on",
                maxVisibleItems: 5,
                infinity: "on",
                space: 10,
                stretch: "off"
            },
            responsiveLevels: [2560, 1360, 1024, 778, 480],
            visibilityLevels: [2560, 1360, 1024, 778, 480],
            gridwidth: [500, 400, 400, 400, 480],
            gridheight: [650, 450, 450, 450, 360],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "enterpoint",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 46, 47, 48, 49, 50, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});


var revapi900;
tpj(document).ready(function() {
    if (tpj("#rev_slider_900_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_900_1");
    } else {
        revapi469 = tpj("#rev_slider_900_1").show().revolution({
            sliderType: "carousel",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                arrows: {
                    style: 'hades',
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 200,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: ''
                }
            },
            carousel: {
                horizontal_align: "center",
                vertical_align: "center",
                fadeout: "on",
                vary_fade: "on",
                maxVisibleItems: 5,
                infinity: "on",
                space: 5,
                stretch: "off"
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [344, 344, 196, 196],
            gridheight: [527, 527, 300, 300],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "enterpoint",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 46, 47, 48, 49, 50, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});


/* ==========================================================================
   Contacts Map
   ========================================================================== */
window.onload = function() {
    var latitude = 45.480200,
        longitude = 11.842936,
        map_zoom = 15;

    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var marker_url = (is_internetExplorer11) ? 'https://www.0039.com//img/icons/map-location.png' : 'https://www.0039.com//img/icons/map-location.svg';

    var style=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#5d5243"},{lightness:0}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#281e1d"},{lightness:0}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#281e1d"},{lightness:0}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#3c2d2b"},{lightness:0}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#3c2d2b"},{lightness:0}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#3c2d2b"},{lightness:0},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#3c2d2b"},{lightness:0}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#3c2d2b"},{lightness:-5}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#1e1716"},{lightness:0}]}];

    var map_options = {
        center: new google.maps.LatLng(45.480200, 11.842936),
        zoom: map_zoom,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style,
    }

    var map = new google.maps.Map(document.getElementById('map'), map_options);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        visible: true,
        icon: marker_url,
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    function CustomZoomControl(controlDiv, map) {
        var controlUIzoomIn = document.getElementById('zoom-in'),
            controlUIzoomOut = document.getElementById('zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
            map.setZoom(map.getZoom() + 1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
            map.setZoom(map.getZoom() - 1)
        });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(zoomControlDiv);

    /* ==========================================================================
       Add Google map Button over the map
       ========================================================================== */
    $(".google-map-button").appendTo("#map");

    $(".google-map-button, .mobile-google-map-button").click(function() {
        var productLink = $(this);

        productLink.attr("target", "_blank");
        window.open(productLink.attr("href"));

        return false;
    });
}
