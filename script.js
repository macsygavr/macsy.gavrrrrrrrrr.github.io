let newImg = document.createElement('img');
let messages = document.querySelector('.messages');
let input = document.querySelector('.input');
let button = document.querySelector('.button');

newImg.setAttribute('src', 'img/one.gif');
newImg.style.width = '40px';
newImg.style.height = '25px';
newImg.className = 'message bot';
newImg.style.borderRadius = '20px';

button.addEventListener('click', () => {
  let humanMessage = document.createElement('div');
  let botMessage = document.createElement('div');

  humanMessage.className = 'message human';
  botMessage.className = 'message bot';

  if (input.value.length !== 0) {
    humanMessage.innerText = input.value;
    messages.appendChild(humanMessage);

    input.value = '';

    if (humanMessage.innerText.toLowerCase().includes('привет') || humanMessage.innerText.toLowerCase().includes('хело') || humanMessage.innerText.toLowerCase().includes('приветики')) {
      botMessage.innerText = 'Приветики) меня зовут Ботик) я не очень умный, но стараюсь ☹️ \n\n Я могу немного поговорить по душам, но кроме этого я знаю какая погода на 29 июня в Москве, Питере, Казани, Владимире, Смоленске, Вичуге и Кинешме :) \n\n Так что спрашивай, не стесняйся)';

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('что ты умеешь')) {
      botMessage.innerText = 'Я могу немного поговорить по душам, но кроме этого я знаю какая погода на 29 июня в Москве, Питере, Казани, Владимире, Смоленске, Вичуге и Кинешме :) \n\n Так что спрашивай, не стесняйся)';

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('как') && humanMessage.innerText.toLowerCase().includes('дела')) {
      botMessage.innerText = 'У меня все прекрасненько 🤗, у тебя как?';

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('хорошо') || humanMessage.innerText.toLowerCase().includes('меня тоже')) {
      botMessage.innerText = 'Это прекрасненько 🤗🤗🤗';

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('плохо') || humanMessage.innerText.toLowerCase().includes('не очень')) {
      botMessage.innerText = 'Печалька ☹️☹️☹️☹️';

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('делаешь') || humanMessage.innerText.toLowerCase().includes('занимаешься')) {
      botMessage.innerText = 'Очень переписываюсь с тобой очень сосредоточенно 🧐';

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('настя')) {
      botMessage.innerText = 'Откуда ты знаешь что я что то написал на случай этого сообщения😅 точно камеры расставлены😰';

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('москв')) {
      botMessage.innerText = "В Москве сейчас: 21°C\nВероятность осадков: 47%\nВлажность: 73%\nВетер: 6 м/с";

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('питер') || humanMessage.innerText.toLowerCase().includes('санкт')) {
      botMessage.innerText = "В Питере сейчас: 23°C\nВероятность осадков: 72%\nВлажность: 45%\nВетер: 5 м/с";

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('казан')) {
      botMessage.innerText = "В Казани сейчас: 33°C\nВероятность осадков: 7%\nВлажность: 34%\nВетер: 6 м/с";

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('вичуг')) {
      botMessage.innerText = "В Вичуге сейчас: 24°C\nВероятность осадков: 1%\nВлажность: 64%\nВетер: 5 м/с";

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('кинешм')) {
      botMessage.innerText = "В Кинешме сейчас: 25°C\nВероятность осадков: 21%\nВлажность: 64%\nВетер: 5 м/с";

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('владим')) {
      botMessage.innerText = "Во Владимире сейчас: 23°C\nВероятность осадков: 12%\nВлажность: 63%\nВетер: 5 м/с";

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else if (humanMessage.innerText.toLowerCase().includes('смол')) {
      botMessage.innerText = "В Смоленске сейчас: 22°C\nВероятность осадков: 10%\nВлажность: 62%\nВетер: 5 м/с";

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    } else {
      botMessage.innerText = 'Я еще не настолько умный чтобы отвечать на такие сложные сообщения 😭';

      setTimeout(() => messages.appendChild(newImg), 1000);
      setTimeout(() => messages.querySelector('img').remove(), 3000);
      setTimeout(() => messages.appendChild(botMessage), 3000);
    }
  }
});
