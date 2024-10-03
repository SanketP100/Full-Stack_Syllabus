const nightModeToggle = document.getElementById('nightModeToggle');
const accordion = document.getElementById('accordion');
let isNightMode = false;
let openIndex = null;

nightModeToggle.addEventListener('click', () => {
    isNightMode = !isNightMode;
    document.body.classList.toggle('bg-black');
    document.body.classList.toggle('text-white');
    updateColors();
});


function updateColors() {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        item.classList.toggle('bg-[#000]');
        item.classList.toggle('bg-[#000]');
        item.classList.toggle('text-black');
        item.classList.toggle('text-white');


    });
    nightModeToggle.classList.toggle('bg-black');
    nightModeToggle.classList.toggle('text-gray-800');
    nightModeToggle.classList.toggle('bg-gray-100');
    nightModeToggle.classList.toggle('text-black');

}


const headings = [
    'Course Walkthrough', 'HTML – Making Architecture', 'CSS – Styling things up', 'JavaScript – Everything about JavaScript',
    'GSAP and Locomotive – Fun Stuff', 'Final Project – Obys Agency Clone', 'React JS', 'React JS Project – Refokus Clone',
    'Redux', 'React JS Final Project – SCSDB.', 'ExoApe – Bonus Project', 'How Internet Works', 'Node.js ', 'NPM Understanding', 'Package and Script ', 'HTTP Module in Node.js', 'Express Domination', 'Khatabook Project', 'Postman ', 'MongoDB & Mongoose', 'Production Level setup', '	Authentication and anthorization', 'How to utilize the power of AI', 'Multer JS ', 'Caching', 'Web Sockets', 'WebRTC', 'Testing APL', 'SQL', 'Git & GitHub'
];

const subheadings = [
    ['Essentials – So you don’t fail', 'Introduction – Getting Started'],
    ['HTML.Deep Dive', 'HTML5-Semantic'],
    ['CSS Basics – Understanding Core Concepts', 'CSS Grid Layout', 'CSS Responsive Project', 'Tailwind CSS', 'Bootstrap', 'Projects'],
    ['JavaScript – The Foundation', 'Advance JavaScript – God level JS', 'JS Animations – DOM Functionality Add', 'Asynchronous JavaScript', 'JS Interview preparation', 'Import and Export '],
    ['GSAP – Master Animations with GreenSock', 'Locomotive – Skilly Smooth Scroll', 'Bonus Project – GSAP and Locomotive'],
    ['Obys Agency Clone – Let’s Build It.', 'Obys Agency Clone – Let’s Host It.'],
    ['React JS – All Essential React JS Concepts', 'React JS – Hands-On Projects'],
    ['Refokus Clone – Let’s Build It'],
    ['Redux – Deep Dive'],
    ['SCSDB – Let’s Build From Scratch'],
    ['ExoApe – Let’s Build It'],
    ['Concepts'],
    ['Understanding Node.js', 'Installation and Veriffication'],
    ['NPM – What,  Why and How', 'Package and Script'],
    ['Fs in nodejs', 'Create file', 'Read file', 'Update file', 'Delete file ', 'With Folder'],
    ['Introduction', 'Dev Dependency', 'Create Server', 'Routing', 'HTTP Methods'],
    ['Basics', 'Routing', 'Middlewares', 'Server side Rendering with EJS', 'Error and Response Handling'],
    ['Understanding the project', 'Project Setup', 'CRUD Operations', 'Coding Overview'],
    ['Introduction', 'Collections', 'Envirables', 'Tests'],
    ['Setup', 'Model and Schema', 'CRUD Operations', 'Population and References', 'Advance MongoDB concepts'],
    ['Everything we need to learn', 'File naming convention', 'Git configuration – Inlt repo branches', 'Eslint and Prettler Setup', 'ENV Setup and MVC Approach', 'Configuration for production and Development ', 'Environment ', 'Error & Response Handling'],
    ['Introduction', 'JWT and Cookies', 'OAuth and Passport', 'Login with Google', 'Reset Passwords'],
    ['Introduction', 'GPT', 'How to use GPT in Node.js', 'Achieve more with less code',],
    ['Introduction', 'Setup', 'File upload with Multer', 'Disk storage ', 'Memory storge'],
    ['Introduction', 'Redis', 'How to use Redis in Node.js'],
    ['Introduction', 'Socket.to', 'How to use Socket.io in Node.js', 'Listeners and emitters', 'Error Handling in web Sockers'],
    ['Introduction', 'How to use WebRTC in Node.js', 'Real Time Communication'],
    ['Introduction', 'Jest', 'How to use jest in Node.js', 'Testing APL'],
    [' Introduction to SQL', 'Basics To Advanced'],
    ['Introduction To Git & GitHub', 'Git Init', 'Pull', 'Push', 'Commands','Bash', 'Repository Creation On GitHub', 'Introduce Git In VS Code']
];

function createAccordionItem(index) {
    const item = document.createElement('div');
    item.className = 'accordion-item bg-blake text-black p-0';

    let accordionContent = `
                <div class="flex items-center justify-between cursor-pointer lg:p-10 p-5 border-t-[1px] border-[#676161] tracking-wider">
                    <h1 class="text-[4.5vw] lg:text-[2.2vw] font-bold">${headings[index]}</h1>
                    <svg class="h-6 w-6 text-gray-300 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div class="accordion-content space-y-0">`;

    subheadings[index]?.forEach(subheading => {
        accordionContent += `<h3 class="lg:text-3xl text-sm font-semibold lg:pb-10 pb-5 lg:pl-24 pl-10">${subheading}</h3>`;
    });

    accordionContent += `</div>`;

    item.innerHTML = accordionContent;

    const header = item.querySelector('.flex');
    const content = item.querySelector('.accordion-content');
    const arrow = item.querySelector('svg');

    header.addEventListener('click', () => {
        if (openIndex !== null && openIndex !== index) {
            const oldOpenItem = accordion.children[openIndex];
            const oldOpenContent = oldOpenItem.querySelector('.accordion-content');
            const oldOpenArrow = oldOpenItem.querySelector('svg');
            oldOpenArrow.classList.remove('rotate-180');
        }

        if (openIndex === index) {
            content.classList.remove('open');
            arrow.classList.remove('rotate-180');
            openIndex = null;
        } else {
            content.classList.add('open');
            arrow.classList.add('rotate-180');
            openIndex = index;
        }
    });

    return item;
}

for (let i = 0; i < headings.length; i++) {
    accordion.appendChild(createAccordionItem(i));
}

updateColors();
