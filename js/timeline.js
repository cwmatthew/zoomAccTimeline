google.charts.load("current", {
  packages: ['timeline']
});
google.charts.setOnLoadCallback(drawSheetName);

function drawSheetName() {
  var queryString = encodeURIComponent('SELECT A, B, C, D');

  var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1jLBE9Hp1s9E8FyIJayCIH05VuBtUPnTO8zUmkuoWG4w/gviz/tq?sheet=zoomdata&headers=1&tq=' + queryString);
    //'https://docs.google.com/spreadsheets/d/1ivOsyxizIfrbxTd9_buNZ8VqHoFlz27s_Qk06EhyDjA/gviz/tq?sheet=data2&headers=1&tq=' 
  query.send(handleSampleDataQueryResponse);
}

function handleSampleDataQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();
  var chart = new google.visualization.Timeline(document.getElementById('timeline'));
  
  /* var options = {
     timeline: { avoidOverlappingGridLines: true,
                  groupByRowLabel: true },
     backgroundColor: '#ffe',
     width:6000,
     height:800
   }; */
   var options2 = {
          width:20000,
          height:600
      };

   chart.draw(data, options2);
}
