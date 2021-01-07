const questions = [
    { number: '1', description: 'Что такое система контроля версий и зачем она нужна', img: 'images/version-control-system.png' },
    { number: '2', description: 'Git : a. checkout, add, commit, pull, push; b. Основы ветвления и слияния', img: 'images/git-1.jpg' },
    { number: '3', description: 'Что такое nodejs, зачем он нужен и как устанавливать', img: 'images/node.js-1.jpg' },
    { number: '4', description: 'Что такое менеджер пакетов, установка npm', img: 'images/npm-1.jpg' },
    { number: '5', description: 'Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки, w3c валидация', img: 'images/html-1.png' },
    { number: '6', description: 'Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы', img: 'images/css-1.png' }
  ]
  
  function createQuestion(question) {
    return `
      <div class="card">
          <div class="card-img">
              <img
                src="${question.img}"
                alt="${question.description}">
          </div>
          <h3>${question.number}</h3>
          <p>${question.description}</p>
      </div>
    `
  }
  
  
  const templates = questions.map(question => createQuestion(question))
  const html = templates.join(' ')
  
  document.querySelector('.list').innerHTML = html
