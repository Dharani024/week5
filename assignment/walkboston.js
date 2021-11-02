function renderwalkboston(boston, container) {
    const people = boston.data;
    const len = boston.data.length;
    var topSalaryPeople=[];
    console.log(topSalaryPeople);
    let html = '';
    
    
    for (let i = 0; i < len; i++) {
        if(people[i][11]>=181000){
      html +=
        '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
    }
}
for(let j=0;j<len;j++){
  if(people[j][8]>=200000){
    
  }
}
    
    
       
         // TODO: add code to display the html variable inside a ul element with id="data"
    // Hint: you can use the container parameter's innerHTML property to insert Html tags

    


    container.innerHTML = '<ul id = "data">' + html + '</ul>';
}
  
  renderwalkboston(boston, document.getElementById('container'));

  