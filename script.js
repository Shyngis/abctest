$(document).ready(function () {
  // Load header
  $("header").load("common/header.html");

  // Load footer
  $(".footer-section").load("common/footer.html");
});

// function toggleInfo(element) {
//   // Remove the active class from all <p> elements
//   document
//     .querySelectorAll(".text-part p")
//     .forEach((p) => p.classList.remove("main-text"));

//   // Hide all info sections
//   document
//     .querySelectorAll(".info")
//     .forEach((info) => info.classList.remove("visible"));

//   // Add the active class to the clicked <p> element
//   element.classList.add("main-text");

//   // Find the next sibling .info div and show it
//   let infoDiv = element.nextElementSibling;
//   if (infoDiv.classList.contains("info")) {
//     infoDiv.classList.add("visible");
//   }
// }

const infoContent = [
  {
    title: "Карьерные транзиторы",
    text: "Профессионалы с опытом работы по специальности более 4 лет, в особенности финансистам, аудиторам, консультантам, риск менеджерам, сотрудникам национальных управляющих холдингов, национального банка и государственных служащих.",
    description:
      "Эти люди обладают глубокими знаниями и навыками в своей текущей сфере, но ищут новые вызовы и возможности для профессионального роста в других областях.",
    img: "assets/career1.png",
  },
  {
    title: "Международные опытные искатели",
    text: "Люди, которые мечтают работать за рубежом и набраться опыта в ведущих корпорациях мира, стремятся к новым возможностям и профессиональному росту. Для них это не просто работа, а шанс погрузиться в уникальные культуры, узнать новые подходы к решению задач и познакомиться с передовыми технологиями. Работая в международных компаниях, они могут расширить свои горизонты, получить бесценные знания и навыки, которые помогут им стать конкурентоспособными специалистами на глобальном рынке труда.",
    description: null,
    img: "assets/intern2.png",
  },
  {
    title: "Образовательные эмигранты",
    text: "Те, кто мечтает переехать и попробовать себя в другой стране через образование, видят в этом не только возможность получить качественные знания, но и шанс кардинально изменить свою жизнь. Для многих это не просто образовательное путешествие, а целый этап, который включает в себя адаптацию к новой культуре, обретение новых друзей и знакомство с традициями других народов. Образование за границей открывает доступ к мировым научным и культурным достижениям.",
    description: null,
    img: "assets/obr3.png",
  },
  {
    title: "Руководители и топ-менеджеры",
    text: "Руководители среднего и высшего звена, которым нужен диплом престижной бизнес-школы, стремятся не только к формальному подтверждению своих знаний и навыков, но и к углублению своего профессионального опыта и расширению деловых контактов. Получение диплома в ведущей бизнес-школе предоставляет уникальные возможности для обучения у лучших профессоров и экспертов в области менеджмента, маркетинга, финансов и других ключевых аспектов ведения бизнеса.",
    description: null,
    img: "assets/ruk4.png",
  },
];

function showInfo(index) {
  // Update the content in the info-visible section
  document.getElementById("info-title").textContent = infoContent[index].title;
  document.getElementById("info-text").textContent = infoContent[index].text;
  document.getElementById("info-description").textContent =
    infoContent[index].description;
  document.getElementById("info-img").src = infoContent[index].img;

  // Update the active class
  document
    .querySelectorAll(".text-part p")
    .forEach((p) => p.classList.remove("main-text"));
  document.querySelectorAll(".text-part p")[index].classList.add("main-text");
}

// Show the default content on page load
showInfo(0);
