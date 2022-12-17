var questions = [
    {
      numb: 1,
      question: "Q1. What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "Q2. What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "Q3. What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "Q4. What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: " Q5. What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
  ];
  var QuestionNum = document.getElementById("QuestionNum")
  var question = document.getElementById("question")
  var optionParent = document.getElementById("optionParent")
  var indexNumber = 0;
  var marks = 0;

  function renderQuestion(){
    question.innerHTML = questions[indexNumber].question;
    QuestionNum.innerHTML = "Question # " + (indexNumber + 1) + "/" + questions.length;
    optionParent.innerHTML = "";
    for(i = 0 ; i < questions[indexNumber].options.length ; i++ ){
      optionParent.innerHTML += `<div>
      <button onclick = "checking('${questions[indexNumber].options[i]}' , '${questions[indexNumber].answer}')" class = "option-btn">
      ${questions[indexNumber].options[i]}
      </button>
  </div>`
    }

  } 
  renderQuestion()

  function changeQuestion(){
    indexNumber++
    renderQuestion();
  }
  
  function checking(u , c){
    if(u == c ){
      marks++
    }if(indexNumber + 1 == questions.length){
      alert("Your Result Is" + " " + marks + " Answers Correct")
    }else{
      changeQuestion();
    }
  }

