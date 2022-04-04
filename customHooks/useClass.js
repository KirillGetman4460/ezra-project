const animateCSS = (element, animation, prefix = 'animate__') =>{
  new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);  
      node.classList.add(`${prefix}animated`, animationName);  
      const handleAnimationEnd = (event) => {
          event.stopPropagation();
          node.classList.remove(`${prefix}animated`, animationName);
      }
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
}
export default animateCSS;