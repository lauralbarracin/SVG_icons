// this is the module pattern
// also called an IIFE
// an Immediately Invoked Function Expression

(() => {
    //JavaScript comment
    console.log('fired! javascript is working!');

    // querySelector takes a CSS selector and uses that to find a match in the HTML file
    const i = document.querySelectorAll('svg');
    console.log(i); 
    
   
    i[0].addEventListener('click', function onIcon() {
      console.log(this.id);
    });
    
    for (const icon of i) {
      icon.addEventListener('click', function onIcon() {
        console.log(this.id);
      });
    }
})();