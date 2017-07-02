$(function() {
  'use strict';

  // define plugin
  $.fn.tabgroup = function() {

    var $this = $(this);
    var $openers = $('<div class="tab-group-openers"></div>');
    $this.prepend($openers);

    var openedByDefault = $this.data('tab-open') || 0;
    var tabs = [];
    var currentTab = {};

    $this.find('.tab').each(function(i, t) {
      var tab = $(t);
      tab.data('tab-index', i);
      var tabName = tab.data('tab-name') || 'Tab '+i;
      var tabFile = tab.data('tab-file') || false;
      var $opener = makeOpener(tabName, i);
      $openers.append($opener);
      tab.hide();
      var loaded = false;
      tabs.push({index: i, name: tabName, file: tabFile, dom: tab, opener: $opener, loaded: false});
    });

    $this.on('click', 'a[href^="#"]', function(event) {
      var $target = $(event.currentTarget);
      var tab = getTabByName($target.attr('href').replace('#', ''));
      if ( tab ) {
        showTab(tab.index);
      }
      event.preventDefault();
    });

    function getTabByName(name) {
      var it = -1;
      $.each(tabs, function(i, t) {
        if ( t.name.toLowerCase() === name.toLowerCase() ) {
          it = i;
        }
      });
      if ( it >= 0 ) {
        return tabs[it];
      } else {
        return false;
      }
    }

    function makeOpener(tabName, i) {
      return $('<span class="tab-opener">'+tabName+'</span>').
              on('click', function() {
                showTab(i);
              });
    }

    function showTab(i) {
      tabs.forEach(function(t) {
        t.dom.hide();
        t.opener.removeClass('tab-visible');
      });
      currentTab = tabs[i];
      if ( !currentTab.loaded && currentTab.file ){
        $.get(currentTab.file, function(res) {
          currentTab.dom.html(res);
          currentTab.loaded = true;
        });
      }
      currentTab.opener.addClass('tab-visible');
      currentTab.dom.show();
    }

    showTab(openedByDefault);
    currentTab = tabs[openedByDefault];

  };

  // apply plugin to all available tab-groups
  $('.tab-group').each(function(i, t) {
    $(t).tabgroup();
  })
});
