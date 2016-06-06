function updateCounter() {
  var total = 0;
  var sel = document.getElementsByTagName('input');
  for (var i=0; i<sel.length; i++) {
    if (sel[i].checked) { total++; }
  }
  document.getElementById('divCount').innerHTML = total;
  console.log(total);
}

$('[data-toggle="tooltip"]').tooltip({
    'placement': 'top'
});
$('[data-toggle="popover"]').popover({
    trigger: 'hover',
        'placement': 'top'
});

$('#userNameField').tooltip({
    'show': true,
        'placement': 'bottom',
        'title': "Please remember to..."
});

$('#userNameField').tooltip('show');