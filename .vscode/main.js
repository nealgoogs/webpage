$(document).ready(function() {
    const username = 'nealgoogs';
    const githubUrl = `https://github.com/${username}`;
  
    $('#github-btn').on('click', function() {
      window.open(githubUrl);
    });
  });

 function goToJourneyPage(){
  window.location.href = 'computer.html';
 } 

 const journeyBtn = document.getElementById('journey');
 journeyBtn.addEventListener('click', goToJourneyPage);