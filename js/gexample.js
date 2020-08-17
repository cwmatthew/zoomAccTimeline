google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart5);


function drawChart() {
  var container = document.getElementById("timeline");
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'President' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
    [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
    [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

    chart.draw(dataTable);
}


function drawChart2() {
    var container = document.getElementById('example2.2');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Term' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ '1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ '2', 'John Adams',        new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ '3', 'Thomas Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

    var options = {
      timeline: { showRowLabels: false
    }
    };

    chart.draw(dataTable, options);
  }


function drawChart3() {

    var container = document.getElementById('example3.1');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Position' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
      [ 'President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4) ],
      [ 'Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
      [ 'Vice President', 'Thomas Jefferson', new Date(1797, 2, 4), new Date(1801, 2, 4)],
      [ 'Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
      [ 'Vice President', 'George Clinton', new Date(1805, 2, 4), new Date(1812, 3, 20)],
      [ 'Secretary of State', 'John Jay', new Date(1789, 8, 25), new Date(1790, 2, 22)],
      [ 'Secretary of State', 'Thomas Jefferson', new Date(1790, 2, 22), new Date(1793, 11, 31)],
      [ 'Secretary of State', 'Edmund Randolph', new Date(1794, 0, 2), new Date(1795, 7, 20)],
      [ 'Secretary of State', 'Timothy Pickering', new Date(1795, 7, 20), new Date(1800, 4, 12)],
      [ 'Secretary of State', 'Charles Lee', new Date(1800, 4, 13), new Date(1800, 5, 5)],
      [ 'Secretary of State', 'John Marshall', new Date(1800, 5, 13), new Date(1801, 2, 4)],
      [ 'Secretary of State', 'Levi Lincoln', new Date(1801, 2, 5), new Date(1801, 4, 1)],
      [ 'Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)]
    ]);

    chart.draw(dataTable);
  }


  function drawChart5() {

    var container = document.getElementById('example5.1');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Room' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Magnolia Room', 'Beginning JavaScript',       new Date(0,0,0,12,0,0),  new Date(0,0,0,13,30,0) ],
      [ 'Magnolia Room', 'Intermediate JavaScript',    new Date(0,0,0,14,0,0),  new Date(0,0,0,15,30,0) ],
      [ 'Magnolia Room', 'Advanced JavaScript',        new Date(0,0,0,16,0,0),  new Date(0,0,0,17,30,0) ],
      [ 'Willow Room',   'Beginning Google Charts',    new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
      [ 'Willow Room',   'Intermediate Google Charts', new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
      [ 'Willow Room',   'Advanced Google Charts',     new Date(0,0,0,16,30,0), new Date(0,0,0,18,0,0) ]]);

    var options = {
      timeline: { colorByRowLabel: true }
    };

    chart.draw(dataTable, options);
  }