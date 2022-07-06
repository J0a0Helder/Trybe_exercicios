  function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let i = 0; i < weekDays.length; i += 1) {
      const days = weekDays[i];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDays (){
    let daysNumberList = document.getElementById ('days');

    for (let decemberDay of decemberDaysList) {
      let daysLi = document.createElement('li');
      daysLi.innerHTML = decemberDay;
      
      if (decemberDay === 24 || decemberDay === 31) {
        daysLi.className = 'day holiday';
        daysNumberList.appendChild(daysLi);
      } else if (decemberDay === 4 || decemberDay === 11 || decemberDay === 18) {
        daysLi.className = "day friday";
        daysNumberList.appendChild(daysLi);
      } else if (decemberDay === 25) {
        daysLi.className = "day holiday friday";
        daysNumberList.appendChild(daysLi);
      } else {
        daysLi.className = "day";
        daysNumberList.appendChild(daysLi);
      }
  
      daysNumberList.appendChild(daysLi);
    }
  }
  createDays();
  
  function CreateButton (buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  }
  CreateButton('Feriados');

  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }
  displayHolidays();

  function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  }
  createFridayButton('Sexta-Feira');

  function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    });
  }
  let decemberFridays = [ 4, 11, 18, 25 ];
  displayFridays(decemberFridays);

  function dayMouseOver() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    });
  }

  function dayMouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    });
  }
  dayMouseOver();
  dayMouseOut();

  function newTaskSpan(task) {
    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  }
  newTaskSpan('projeto');

  function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  }
  newTaskDiv('green');

  function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  }
  setTaskClass();

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; 
        event.target.style.color = color; 
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)'; 
      }
    });
  }
  setDayColor();

  function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    });
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  }
  addNewTask();