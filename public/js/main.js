function loadFact() {
    $('#fact-text').hide().removeClass('fs-4 fs-5 fs-6');
    $('#fact-loader').show();
  
    $.getJSON('http://numbersapi.com/1/30/date?json')
      .done(function(data) {
        setTimeout(function() {
          $('#fact-loader').fadeOut(300, function() {
            const txt = data.text;
            const len = txt.length;
            let sizeClass = 'fs-4';        
            if (len > 150) sizeClass = 'fs-5';
            if(len>120) sizeClass = 'fs-6';
            if (len > 180) sizeClass = 'fs-6';
            if (len > 250) sizeClass = 'fs-6 text-break';
            $('#fact-text')
              .addClass(sizeClass)         
              .text(txt)
              .fadeIn(800);
          });
        }, 3000);
      })
      .fail(function() {
        setTimeout(function() {
          $('#fact-loader').fadeOut(300, function() {
            $('#fact-text')
              .addClass('fs-5')
              .text('Sorry, could not load fact.')
              .fadeIn(800);
          });
        }, 3000);
      });
  }
  
  $(document).ready(function() {
    loadFact();
    $('#reload-fact').click(loadFact);
  });
  