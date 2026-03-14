const title = document.querySelector('.jump-title')

title.addEventListener('mouseenter', () => {
  const left = title.querySelector('.word-left')
  const right = title.querySelector('.word-right')

  const rand = (min, max) => Math.random() * (max - min) + min

  left.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  right.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'

  left.style.transform = `translate(${rand(-300, -80)}px, ${rand(-80, 80)}px) rotate(${rand(-15, 15)}deg)`
  right.style.transform = `translate(${rand(80, 300)}px, ${rand(-80, 80)}px) rotate(${rand(-15, 15)}deg)`
})

title.addEventListener('mouseleave', () => {
  const left = title.querySelector('.word-left')
  const right = title.querySelector('.word-right')

  left.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
  right.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'

  left.style.transform = 'translate(0, 0) rotate(0deg)'
  right.style.transform = 'translate(0, 0) rotate(0deg)'
})

// Bio text animation

document.addEventListener("click", () => {

  const spans = document.querySelectorAll(".bio-text span");

  spans.forEach(span => {

    const randomOffset = (Math.random() - 0.5) * 400;
    span.style.transform = `translateX(${randomOffset}px)`;

  });

});