function SJF(jobs, index){
  var end = jobs[index];
  var counter = 0;
  var j = 0; // account for FIFO: count # of same size jobs before index
  while(j < index){
    if(jobs[j] === end && j < index){
      counter += 1;
    }
    j++;
  }
  var jobsSort=jobs.sort(function(a, b){return a-b}); // sort jobs
  var timer = 0;
  for(var i=0; i<jobsSort.length; i++){
    timer += jobsSort[i];
    if(jobsSort[i]===end){
      /* 
      timer accounts for time to get to correct value
      counter * end accounts for number of same size jobs before index
      */
      return timer + counter * end;
    }
  }
}

/* best practices

function SJF(jobs, index){
  return jobs.reduce((a,b,i)=>a+(b<jobs[index]||(b==jobs[index]&&i<=index) ? b:0),0);
}

*/