var main = {

  init : function() {
    // Initial calculation for the sideMenu offset
    adjustSideMenu(107); // outer height of full nav

    let sideMenuOffset = 0;
    // shorten navbar when the url is an anchor link
    if(window.location.hash) {
      $(".navbar").addClass("top-nav-short");
      $(".side-menu").addClass("nav-shortened");
      $(".right-side-menu").addClass("nav-shortened");

      sideMenuOffset = 70; // outer height of shortened nav
    }

    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-short");
            $(".header-section").addClass("nav-shortened");
            $(".right-side-menu").addClass("nav-shortened");

            sideMenuOffset = 70; // outer height of shortened nav
        } else {
            $(".navbar").removeClass("top-nav-short");
            $(".header-section").removeClass("nav-shortened");
            $(".right-side-menu").removeClass("nav-shortened");

            sideMenuOffset = 107; // outer height of full nav
        }

        // if the screen is not small, adjust the margin at the bottom of the sidebar to the height of the footer
        if( !main.isBreakpoint('xs') ) {
            $(document).on('scroll', adjustSideMenu(sideMenuOffset));
        }
    });

    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    });

    // On mobile, when clicking on a multi-level navbar menu, show the child links
    $('#main-navbar').on("click", ".navlinks-parent", function(e) {
      var target = e.target;
      $.each($(".navlinks-parent"), function(key, value) {
        if (value == target) {
          $(value).parent().toggleClass("show-children");
        } else {
          $(value).parent().removeClass("show-children");
        }
      });
    });

    // Ensure nested navbar menus are not longer than the menu header
    var menus = $(".navlinks-container");
    if (menus.length > 0) {
      var navbar = $("#main-navbar ul");
      var fakeMenuHtml = "<li class='fake-menu' style='display:none;'><a></a></li>";
      navbar.append(fakeMenuHtml);
      var fakeMenu = $(".fake-menu");

      $.each(menus, function(i) {
        var parent = $(menus[i]).find(".navlinks-parent");
        var children = $(menus[i]).find(".navlinks-children a");
        var words = [];
        $.each(children, function(idx, el) { words = words.concat($(el).text().trim().split(/\s+/)); });
        var maxwidth = 0;
        $.each(words, function(id, word) {
          fakeMenu.html("<a>" + word + "</a>");
          var width =  fakeMenu.width();
          if (width > maxwidth) {
            maxwidth = width;
          }
        });
        $(menus[i]).css('min-width', maxwidth + 'px')
      });

      fakeMenu.remove();
    }

    // activate tooltips in the footer
    $('[data-toggle="tooltip"]').tooltip();
  },

  isBreakpoint : function(alias) {
      return $('.device-' + alias).is(':visible');
  }
};

document.addEventListener('DOMContentLoaded', main.init);

function adjustSideMenu(navOffset) {
    let footerHeight = $('footer').outerHeight();
    let distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
    let deductPixels;

    if(distanceFromBottom < footerHeight) {
        // deduct the distance to the bottom from the footer height.
        // Now we know how much pixels of the footer is visible
        // also deduct the height from the visible header
        deductPixels = (footerHeight - distanceFromBottom) + navOffset;
    } else {
        // deduct just the height of the nav using the parameter given
        deductPixels = navOffset;
    }

    let displayStyle = [
        'height: calc(100% - ' + deductPixels + 'px)',
        'height: -moz-calc(100% - ' + deductPixels + 'px)',
        'height: -webkit-calc(100% - ' + deductPixels + 'px)'
    ].join(';');

    $('.right-side-menu-wrapper').attr('style', displayStyle);
}
