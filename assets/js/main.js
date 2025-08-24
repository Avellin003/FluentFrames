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

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
        });
    });

    // Navigation Active State Tracking
    const sections = document.querySelectorAll('section[id], main[id]');
    const navLinks = document.querySelectorAll('.navbar .menu-items a[href^="#"]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 150; // Offset for navbar height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`.navbar .menu-items a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Update active nav link on page load
    updateActiveNavLink();
    
    // About Section Navigation
    const aboutDots = document.querySelectorAll('.about-dot');
    const aboutSections = document.querySelectorAll('.about-section');
    
    aboutDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const targetSection = dot.getAttribute('data-section');
            
            // Remove active class from all dots and sections
            aboutDots.forEach(d => d.classList.remove('active'));
            aboutSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked dot and target section
            dot.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });
    
    // Auto-rotate about sections every 5 seconds
    let currentAboutIndex = 0;
    const aboutSectionIds = ['about-us', 'meet-founder'];
    
    setInterval(() => {
        currentAboutIndex = (currentAboutIndex + 1) % aboutSectionIds.length;
        const nextSection = aboutSectionIds[currentAboutIndex];
        
        // Update dots and sections
        aboutDots.forEach(d => d.classList.remove('active'));
        aboutSections.forEach(s => s.classList.remove('active'));
        
        document.querySelector(`[data-section="${nextSection}"]`).classList.add('active');
        document.getElementById(nextSection).classList.add('active');
    }, 5000);
    
    // Contact Modal Functionality
    const contactBtn = document.querySelector('.contact-btn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const contactForm = document.getElementById('contactForm');
    
    // Open modal
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
    
    // Close modal functions
    function closeContactModal() {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
        contactForm.reset(); // Reset form
    }
    
    closeModal.addEventListener('click', closeContactModal);
    cancelBtn.addEventListener('click', closeContactModal);
    
    // Close modal when clicking outside
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            closeContactModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal.style.display === 'block') {
            closeContactModal();
        }
    });
    
    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        alert(`Thank you for your message, ${name}! We'll get back to you soon at ${email}.`);
        
        // Close modal and reset form
        closeContactModal();
    });
});