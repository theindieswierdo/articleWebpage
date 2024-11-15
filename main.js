
 //doghnut displaying increased inaccuracies with the technology
 var ctx = document.getElementById('inaccuracies').getContext('2d');
 const myData = {
   labels: ['positive leads', 'negative leads'],
   datasets: [{
     label: 'My First Dataset',
     data: [60, 40],
     backgroundColor: [
       'rgb(4, 120, 27)',
       'rgb(143, 11, 11)'
     ],
     hoverOffset: 4
   }]
 };

 const myChart = new Chart(ctx, {
   type: 'doughnut',
   data: myData,
   options: {
     plugins: {
         legend:{
             labels:{
                 font:{
                     size: 18
                 }
             }
         }
     }
   }
 });

 function createDoughnutChart(canvasId, labels=['',''], backgroundColor=['',''], data=[2]) {
  const ctx = document.getElementById(canvasId).getContext('2d');

  const myData = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: data,
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  };

  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: myData,
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              size: 18
            }
          }
        }
      }
    }
  });
}

// Directly call the function to create the charts
createDoughnutChart('datascience', ['black people', 'the industry'], ['rgb(47, 114, 237)', 'rgb(230, 247, 247)'], [6, 100]);
createDoughnutChart('software_engineering', ['black people', 'the industry'], ['rgb(47, 114, 237)', 'rgb(230, 247, 247)'], [4, 100]);
createDoughnutChart('database', ['black people', 'the industry'], ['rgb(47, 114, 237)', 'rgb(230, 247, 247)'], [8, 100]);

const homeLink= document.getElementById("Home");
const ethics_= document.getElementById("Ethic");
const conclude= document.getElementById("Conclusion");
    //clicking function
    homeLink.addEventListener('click', function(event){
        event.preventDefault();
        const targetSection= document.getElementById("h");
        smoothScroll(targetSection);
    })
    ethics_.addEventListener('click', function(event){
        event.preventDefault();
        const targetSection= document.getElementById("e");
        smoothScroll(targetSection);
    })
    conclude.addEventListener('click', function(event){
        event.preventDefault();
        const targetSection= document.getElementById("s");
        smoothScroll(targetSection);
    })
    function smoothScroll(targetSection) {
      const targetY = targetSection.offsetTop; // Get the vertical offset of the target section
      const currentY = window.scrollY; // Get the current vertical scroll position

      // Calculate the distance to scroll
      const scrollDistance = targetY - currentY;

      // Use animation for smooth scrolling
      let start = null;
      const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const easedY = currentY + scrollDistance * (timeElapsed / 1000); // Ease the scroll (adjust 1000 for speed)
      window.scrollTo(0, easedY);
      if (Math.abs(scrollDistance - easedY) < 5) return; // End animation if close enough to target
      requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
}

