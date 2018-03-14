'use strict';
(function(year, month){
  let today = new Date().getDate();
  month -= 1;
  let htmlMonth = '';
  let requiredDate = new Date(year, month, 1);
  let dayOfWeek = requiredDate.getDay()||7; //день недели для первого числа месяца, если вск, то присвоить 7
  let dayOfMonth = requiredDate.getDate();
  function getWeekHTML(startDay=1){
    let html = "<tr>";
    for(let i = 1; i <= 7; i++){
      html += `<td ${requiredDate.getDate() === today?'class="day today"':'class="day"'}>${requiredDate.getMonth() === month&&i >= startDay?requiredDate.getDate():""}</td>`;
      if(i >= startDay){
        requiredDate.setDate(++dayOfMonth);
      }
    }
    return html + "</tr>";
  }
  for(let i = 0; requiredDate.getMonth()===month; i++){
    if(i===0){
      htmlMonth += getWeekHTML(dayOfWeek);
    }
     htmlMonth += getWeekHTML();
  }
  var element = document.querySelector('#calendar-body');
  element.innerHTML = htmlMonth;
})(2018, 4);
