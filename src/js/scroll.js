var generalSettings = {
  cursorcolor: '#2a2a2a',
  cursorborder: '1px solid #1a1a1a',
  cursorborderradius: '2px',
  hidecursordelay: '0',
  autohidemode: 'false'
};

var htmlSettings = {
  cursorwidth: '15px',
  background: '#1a1a1a'
}

var textareaSettings = {
  cursorwidth: '8px'
}

for(var p in generalSettings) htmlSettings[p] = generalSettings[p];
for(var p in generalSettings) textareaSettings[p] = generalSettings[p];

$('html').niceScroll(htmlSettings);
$('textarea').niceScroll(textareaSettings);