'use strict';
(function(year, month){
  let today = new Date().getDate();
  month--;
  let requiredDate = new Date(year, month, 1);
  let dayOfWeek = requiredDate.getDay()||7; //день недели для первого числа месяца, если вск, то присвоить 7
  let dayOfMonth = requiredDate.getDate();
  function getWeekHTML(startDay=1){
    let trWeek = document.createElement('tr');
    for(let i = 1; i <= 7; i++){
      let tdDay = document.createElement('td');
      tdDay.className = requiredDate.getDate() === today?"day today":"day";
      tdDay.textContent = requiredDate.getMonth() === month&&i >= startDay?requiredDate.getDate():"";
      trWeek.appendChild(tdDay);
      if(i >= startDay&&requiredDate.getMonth() === month){
        requiredDate.setDate(++dayOfMonth);
      }
    }
    return trWeek;
  }
  function renderCalendar(weekFunction, startDay){
    let tbodyCalendar = document.getElementById('calendar-body');
    for(let i = 0; requiredDate.getMonth()===month; i++){
      if(i===0){
        tbodyCalendar.appendChild(weekFunction(startDay));
      }
       tbodyCalendar.appendChild(weekFunction());
    }
  }
  renderCalendar(getWeekHTML, dayOfWeek);
})(2017, 12);
