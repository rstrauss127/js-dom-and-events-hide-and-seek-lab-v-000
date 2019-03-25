function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');

}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li');

  for(let i of list) {
    i.textContent = parseInt(i.textContent) + n;
  }
}
