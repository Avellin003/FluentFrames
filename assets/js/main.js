 // Feedback data array
 const feedbackData = [
    {
        imgSrc: "https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus sequi nobis asperiores expedita laborum deleniti, nostrum praesentium blanditiis accusamus officia enim estminus dolore provident dolores perferendis sed ducimus cum.",
        name: "Lisa John",
        job: "Web Developer"
    },
    {
        imgSrc: "https://www.shutterstock.com/image-photo/portrait-one-young-happy-cheerful-600nw-1980856400.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus sequi nobis asperiores expedita laborum deleniti, nostrum praesentium blanditiis accusamus officia enim estminus dolore provident dolores perferendis sed ducimus cum.",
        name: "Jane Smith",
        job: "Graphic Designer"
    },
    {
        imgSrc: "https://media.istockphoto.com/id/1312451456/photo/business-woman-at-office-stock-photo.jpg?s=612x612&w=0&k=20&c=1L7yTeY2VcQpm7NgmwHj6rKudVkc0skMAH7Ot5T2oZo=",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus sequi nobis asperiores expedita laborum deleniti, nostrum praesentium blanditiis accusamus officia enim estminus dolore provident dolores perferendis sed ducimus cum.",
        name: "Gloria Rose",
        job: "Digital Marketing Specialist"
    },
    // Add more feedback objects as needed
];

let currentFeedbackIndex = 0;
const feedbackContainer = document.querySelector('.feedback-item-list-two');

function updateFeedback() {
    const currentFeedback = feedbackData[currentFeedbackIndex];
    const feedbackImg = feedbackContainer.querySelector('.feedback-img');
    const feedbackText = feedbackContainer.querySelector('.feedback-text');
    const nameSpan = feedbackContainer.querySelector('.name');
    const jobSpan = feedbackContainer.querySelector('.job');

    feedbackImg.src = currentFeedback.imgSrc;
    feedbackText.textContent = currentFeedback.text;
    nameSpan.textContent = currentFeedback.name;
    jobSpan.textContent = currentFeedback.job;
}

function showNextFeedback() {
    currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbackData.length;
    updateFeedback();
}

function showPreviousFeedback() {
    currentFeedbackIndex = (currentFeedbackIndex - 1 + feedbackData.length) % feedbackData.length;
    updateFeedback();
}