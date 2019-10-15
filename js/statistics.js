$( document ).ready(function() {

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
          datasets: [{ 
              data: [1500,0,0,2800,0,4000,0, 1100, 200, 1200,0, 150,],
              label: "Body work",
              borderColor: "#3e95cd",
              fill: false
            },
            
          
          ]
        },
        options: {
          title: {
            display: true,
            text: 'something'
          }
        }
      });
      new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
          labels: ['Oil Changes','Inspections', 'idk'],
          datasets: [{ 
              data: [10,20,30],
              backgroundColor: [
                '#007bff',
                '#4f86f7',
                '#abbaff'
              ],
              label: "Something",
              borderColor: "#3e95cd",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'something'
          }
        }
      });

      new Chart(document.getElementById("scatter-chart"), {
        type: 'scatter',
        data: {
          labels: ['what','lol?', 'idk'],
          datasets: [{ 
            data: [{
              x: 10,
              y: 0
          }, {
              x: 0,
              y: 10
          }, {
              x: 30,
              y: 5
          },
          {
              x: 5,
              y: 50
          },
          {
              x: 8,
              y: 28
          },
          {
              x: 20,
              y: 30
        }
      ],
              label: "Something",
              borderColor: "#3e95cd",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'something'
          }
        }
      });

      new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: ['Oil Changes','Inspections', 'idk'],
          datasets: [{ 
              data: [15,20,30],
              backgroundColor: [
                '#007bff',
                '#4f86f7',
                '#abbaff'
              ],
              label: "Something",
              borderColor: "#3e95cd",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'something'
          }
        }
      });

});