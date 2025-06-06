const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    sectionButton.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            // Remove active button class
            const currentButton = document.querySelector('.active-btn');
            if (currentButton) {
                currentButton.classList.remove('active-btn');
            }
            this.classList.add('active-btn');

            // Remove active section class
            const activeSection = document.querySelector('.section.active');
            if (activeSection) {
                activeSection.classList.remove('active');
            }

            // Add active class to the corresponding section
            sections[index].classList.add('active');
        });
    });
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove active class from all sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            // Add active class to the clicked section
            const activeSection = document.querySelector(`#${id}`);
            if (activeSection) {
                activeSection.classList.add('active');
            }
            
            // Remove active button class
            const currentButton = document.querySelector('.active-btn');
            if (currentButton) {
                currentButton.classList.remove('active-btn');
            }
            
            // Add active class to the corresponding button
            const newActiveButton = document.querySelector(`[data-id="${id}"]`);
            if (newActiveButton) {
                newActiveButton.classList.add('active-btn');
            }
            const element = document.getElementById(id);
            element.classList.add('active');
        }
        
    });
}

PageTransitions();