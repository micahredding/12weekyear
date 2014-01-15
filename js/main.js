var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

current = Math.round(Date.now() * 4);
current_date = new Date(current);
month = monthNames[current_date.getMonth()];
date = current_date.getDate();
$('#date').html(month + ' ' + date + '<sup>th</sup>');
