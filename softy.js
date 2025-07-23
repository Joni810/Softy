let cards = [
  {
    information: "Modern Strategy",
    description: "Customize anything in this template to fit",
    spanpart: "your website needs",
  },
  {
    information: "Best Relationship",
    description: "Contact us immediately if you have a",
    spanpart: "question in mind",
  },
  {
    information: "Ultimate Marketing",
    description: "You just need to tell your friends about our",
    spanpart: "free templates",
  },
];
rendercard();
function rendercard() {
  cards.forEach((card) => {
    let informationcard = document.createElement("div");
    informationcard.classList.add("infocard");
    informationcard.innerHTML = `<div class="iconcontainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path
                    d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
                ></path>
                </svg>
                </div>
                <h4>${card.information}</h4>
                <p>${card.description}</p>
                <span>${card.spanpart}</span>`;
    document.getElementById("infocards").appendChild(informationcard);
  });
}

/**/

work_cards = [
  { text: "Get Ideas", paragraph: "Lorem ipsum dolor sit amet." },
  { text: "Sketch Up", paragraph: "Lorem ipsum dolor sit amet." },
  { text: "Discuss", paragraph: "Lorem ipsum dolor sit amet." },
  { text: "Revise", paragraph: "Lorem ipsum dolor sit amet." },
  { text: "Approve", paragraph: "Lorem ipsum dolor sit amet." },
  { text: "Launch", paragraph: "Lorem ipsum dolor sit amet." },
];

renderworkcards();
function renderworkcards() {
  work_cards.forEach((work_card) => {
    console.log("adding card:", work_card);
    let workcard = document.createElement("div");
    workcard.classList.add("workcard");
    workcard.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path
                d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"
              ></path>
            </svg>
            <h5>${work_card.text}</h5>
            <p>${work_card.paragraph}</p>
          `;
    document.getElementById("workcards").appendChild(workcard);
  });
}

/**/

reviews = [
  {
    name: "Catherine Soft",
    jobtitle: "Managing Director",
    photo: "../images/portrait (1).jpg",
  },
  {
    name: "Kelvin Wood",
    jobtitle: "Digital Marketer",
    photo: "../images/portrait (2).jpg",
  },
  {
    name: "David Martin",
    jobtitle: "Website Manager",
    photo: "../images/portrait (3).jpg",
  },
];

reviews.forEach((review) => {
  let reviewcard = document.createElement("div");
  reviewcard.classList.add("reviewcard");
  reviewcard.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path
                d="M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128ZM84,140a12,12,0,1,0-12-12A12,12,0,0,0,84,140Zm88,0a12,12,0,1,0-12-12A12,12,0,0,0,172,140Zm60-76V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.13,16.13,0,0,1-6.8-1.52A15.85,15.85,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64ZM40,224h0ZM216,64H40V224l34.77-30A8,8,0,0,1,80,192H216Z"
              ></path>
            </svg>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              quod quidem debitis ea dignissimos ab modi nulla, unde incidunt,
              dolorem impedit assumenda soluta nemo iusto.
            </p>
            <img src="${review.photo}" alt="" class="reviewimg" />
            <div class="jobtitle">
              <h5>${review.name}</h5>
              <h5 class="job">${review.jobtitle}</h5>
            </div>`;
  document.getElementById("reviewcards").appendChild(reviewcard);
});
