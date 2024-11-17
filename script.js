const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            reveal.classList.add('visible');
        } else {
            reveal.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 

const projects = document.querySelector('#projects');

const projectImages = [
    { title: 'Pizza Ordering Exercise', src: 'images/pizzafile01.png' },
    { title: 'Feedback Form Exercise', src: 'images/manhattanFile.png' },
    { title: 'Education Platform', src: 'images/educationEx.png' },
];

projectImages.forEach(({ title, src }) => {
    const project = document.createElement('div');
    project.classList.add('project');
    project.innerHTML = `
        <h3>${title}</h3>
        <img src="${src}" alt="${title}" style="width:100%; border-radius: 8px; margin-bottom: 10px;">
    `;
    projects.appendChild(project);
});
