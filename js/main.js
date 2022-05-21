// this is the module pattern
// also called an IIFE
// an Immediately Invoked Function Expression

(() => {
    // this is a JavaScript comment
    console.log('fired! javascript is working!');

    const icons = document.querySelectorAll('svg');
    console.log(icons); 
    
   
    icons[0].addEventListener('click', function onClick() {
      console.log(this.id);
    });
    
    for (const icon of icons) {
      icon.addEventListener('click', function onClick() {
        console.log(this.id);
      });
    }
})();