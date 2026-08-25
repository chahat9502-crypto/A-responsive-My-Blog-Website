const STORAGE_KEY = "myBlogArticles";
const ADMIN_LOGIN_KEY = "myBlogAdminLoggedIn";
const EDIT_KEY = "editArticleId";
const DELETED_KEY = "myBlogDeletedArticleIds";
const DARK_MODE_KEY = "myBlogDarkMode";
const DATA_VERSION_KEY = "myBlogDataVersion";
const CURRENT_DATA_VERSION = "2026-08-25-full-content-v3";
const defaultArticles = [

    {
        id: "html-css-js",
        title: "Why Learning HTML CSS JavaScript is Important",
        category: "Programming",
        date: "12 August 2026",
        image: "image/blog1.jpg",
        description:
            "Learning HTML, CSS and JavaScript helps you build professional websites.",
        content:
`Web development is one of the fastest growing fields in the technology world. Every website that we use today is created using HTML, CSS and JavaScript. These three technologies are the foundation of modern websites.

HTML is used to create the structure of a webpage. CSS helps designers make websites attractive with colors, layouts, animations and responsive designs. JavaScript adds functionality and makes websites interactive.

Learning these technologies opens many career opportunities. A beginner can start creating simple websites and gradually build advanced web applications. With practice and creativity, anyone can become a successful web developer.

Responsive design is also an important part of web development. Modern websites must work smoothly on mobile phones, tablets and computers. Using CSS Flexbox, Grid and JavaScript, developers can create powerful user-friendly websites.`
    },

    {
        id: "beautiful-places",
        title: "Top 10 Beautiful Places to Visit",
        category: "Travel",
        date: "15 August 2026",
        image: "image/blog2.jpg",
        description:
            "Discover beautiful destinations and unforgettable travel experiences.",
        content:
`Traveling gives us a chance to explore beautiful places, discover new cultures, and create unforgettable memories. From peaceful beaches and majestic mountains to historic cities and natural wonders, every destination has something special to offer.

Some amazing places to visit include Paris, Switzerland, Bali, Dubai, London, New York, Maldives, Kashmir, Manali, and Goa. These destinations are popular for their beautiful scenery, unique culture, delicious food, and exciting experiences.

Whether you love nature, adventure, beaches, or historical places, traveling to new destinations can make your life more enjoyable and memorable.`
    },

    {
        id: "healthy-lifestyle",
        title: "Healthy Lifestyle Tips",
        category: "Health",
        date: "20 August 2026",
        image: "image/blog3.jpg",
        description:
            "Simple habits can help you build a healthier and happier life.",
        content:
`A healthy lifestyle is important for keeping our body and mind active, strong, and happy. It starts with simple daily habits such as eating a balanced diet, drinking enough water, exercising regularly, and getting proper sleep.

Regular physical activity helps improve fitness, energy levels, and overall well-being. Eating fresh fruits, vegetables, whole grains, and nutritious foods can provide the body with essential nutrients. It is also important to limit unhealthy foods and maintain a balanced routine.

Along with physical health, taking care of mental health is equally important. Spending time with family and friends, getting enough rest, managing stress, and taking breaks from busy routines can help maintain a positive mindset.

A healthy lifestyle does not require major changes overnight. Small and consistent habits can make a big difference over time and help us live a healthier, happier, and more productive life.`
    },

    {
        id: "javascript",
        title: "Complete Guide to JavaScript",
        category: "Programming",
        date: "25 August 2026",
        image: "image/blog4.jpg",
        description:
            "Learn how JavaScript makes websites interactive and dynamic.",
        content:
`JavaScript is a powerful and popular programming language used to make websites interactive and dynamic. It works with HTML and CSS to create modern and user-friendly web pages. HTML provides the structure, CSS handles the design, and JavaScript adds functionality.

With JavaScript, developers can create features such as buttons, forms, animations, image sliders, pop-ups, menus, and dynamic content. It also provides important concepts like variables, functions, arrays, objects, loops, conditions, and events.

JavaScript can interact with the DOM (Document Object Model), allowing developers to change webpage content and styles without reloading the page. It can also communicate with APIs to retrieve and display data from external services.

Today, JavaScript is used not only for front-end development but also for backend development through Node.js. Popular technologies such as React, Angular, and Vue.js are also built around JavaScript.

Overall, learning JavaScript is an important step toward becoming a skilled web developer. With practice and real-world projects, JavaScript can help you create interactive, responsive, and professional web applications.`
    },

    {
        id: "responsive-design",
        title: "Responsive Web Design Tips",
        category: "Programming",
        date: "28 August 2026",
        image: "image/blog5.jpg",
        description:
            "Learn how to create websites that work perfectly on all screen sizes.",
        content:
`Responsive web design is the process of creating websites that automatically adjust to different screen sizes such as mobile phones, tablets, laptops, and desktop computers. A responsive website should remain easy to read and use on every device.

CSS Flexbox and Grid are useful for creating flexible layouts, while Media Queries allow developers to change styles for different screen widths. Images should also be flexible so they do not overflow their containers on smaller screens.

A mobile-first approach can make responsive design easier because the layout is first designed for small screens and then enhanced for larger screens. Navigation menus, buttons, text sizes, spacing, and cards should all be tested on multiple screen sizes.

Good responsive design improves user experience and makes a website look professional across devices. Testing the website regularly on both mobile and desktop helps find layout problems before deployment.`
    },

    {
        id: "ai-future",
        title: "The Future of Artificial Intelligence",
        category: "Technology",
        date: "30 August 2026",
        image: "image/blog6.jpg",
        description:
            "Artificial Intelligence is transforming many industries.",
        content:
`Artificial Intelligence (AI) is changing the way we live, work, and learn. AI-powered tools can help people solve problems, automate tasks, and make faster decisions.

In the future, AI is expected to become more useful in areas such as education, healthcare, business, transportation, and communication. Smart systems may help students learn better, assist doctors, and make everyday tasks easier.

However, AI should be developed and used responsibly. Privacy, security, and human control will remain important as AI technology continues to grow.

The future of AI is full of possibilities. With responsible development and human creativity, AI can become a powerful technology that improves our daily lives.`
    },

    {
        id: "technology-trends",
        title: "Latest Technology Trends",
        category: "Technology",
        date: "1 September 2026",
        image: "image/blog12.jpg",
        description:
            "Explore the latest innovations, gadgets, software and digital solutions.",
        content:
`Technology is developing rapidly and introducing new ways to work, communicate, and solve everyday problems. Some of the latest technology trends include Artificial Intelligence (AI), Machine Learning, cloud computing, cybersecurity, Internet of Things (IoT), and automation.

Artificial Intelligence is becoming more useful in areas such as education, healthcare, business, and content creation. Cloud computing allows people and organizations to store and access data online, while IoT connects smart devices to share information and perform tasks automatically.

Another important trend is cybersecurity, as protecting personal and business data has become increasingly important. Technologies such as robotics, virtual reality, and advanced mobile applications are also creating new opportunities.

Overall, the latest technology trends are making digital experiences smarter, faster, and more connected, while creating exciting possibilities for the future.`
    },

    {
        id: "web-development",
        title: "Learn Web Development",
        category: "Programming",
        date: "2 September 2026",
        image: "image/blog13.jpg",
        description:
            "Learn HTML, CSS and JavaScript to create modern websites.",
        content:
`Web development is the process of creating and maintaining websites and web applications. It is a valuable skill for anyone interested in technology and programming. The basic technologies used in web development are HTML, CSS, and JavaScript.

HTML is used to create the structure of a webpage, CSS is used for styling and layout, and JavaScript adds interactivity and functionality. Beginners can start by learning these three technologies and practicing with small projects such as personal websites, portfolios, blogs, and simple web applications.

As you gain experience, you can explore responsive design, APIs, databases, and popular frameworks such as React. Regular practice and building real-world projects are excellent ways to improve your skills.

Overall, learning web development can help you create creative, interactive, and professional websites while opening many opportunities in the technology field.`
    },

    {
        id: "world-travel",
        title: "Beautiful Places Around The World",
        category: "Travel",
        date: "3 September 2026",
        image: "image/blog14.jpg",
        description:
            "Discover amazing destinations around the world.",
        content:
`The world is full of beautiful places that offer breathtaking views, unique cultures, and unforgettable experiences. From the snow-covered mountains of Switzerland to the peaceful beaches of the Maldives, every destination has something special to explore.

Famous places such as Paris, Bali, Dubai, Switzerland, and the Andaman Islands attract travelers with their natural beauty, architecture, history, and exciting activities. Visiting different destinations also gives people the opportunity to experience new cultures, taste different foods, and create wonderful memories.

Traveling to beautiful places can be a great way to relax, discover nature, and learn about the world. With proper planning, even a short trip can become a memorable adventure.`
    },

    {
        id: "daily-life",
        title: "Improve Your Daily Life",
        category: "Lifestyle",
        date: "4 September 2026",
        image: "image/blog15.jpg",
        description:
            "Small habits and positive thinking can improve everyday life.",
        content:
`Improving your daily life starts with small and positive habits. A good routine can help you stay organized, focused, and productive throughout the day. Start by planning your tasks, setting simple goals, and managing your time effectively.

Taking regular breaks, staying physically active, eating healthy food, and getting enough sleep can help maintain your energy. It is also important to spend some time learning new things, enjoying your hobbies, and connecting with family and friends.

Avoiding unnecessary distractions and maintaining a positive mindset can make everyday activities more enjoyable. By making small improvements consistently, you can become more productive, confident, and satisfied with your daily life.`
    },

    {
        id: "learning-skills",
        title: "Importance of Learning Skills",
        category: "Education",
        date: "5 September 2026",
        image: "image/blog16.jpg",
        description:
            "Continuous learning helps people grow professionally and personally.",
        content:
`Learning new skills is an important part of personal and professional growth. Skills help us improve our knowledge, solve problems, and handle different situations with greater confidence. Whether it is communication, computer skills, creativity, or time management, every useful skill can provide new opportunities.

Learning does not always have to happen in a classroom. People can learn through online courses, books, practice, videos, and real-life experiences.

By regularly learning and improving new skills, we can become more capable, independent, and prepared for the future.`
    },

    {
        id: "business-growth",
        title: "Business Growth Strategies",
        category: "Business",
        date: "6 September 2026",
        image: "image/blog17.jpg",
        description:
            "Learn useful business ideas and strategies for success.",
        content:
`Business growth requires proper planning, consistent effort, and a clear understanding of customer needs. A business can grow by improving its products or services, providing excellent customer support, and building a strong brand presence.

Using digital marketing, social media, and online platforms can help businesses reach a larger audience. Understanding market trends and customer feedback can also help companies make better decisions and develop new opportunities.

Another important strategy is to manage finances carefully, build a skilled team, and focus on long-term customer relationships. Businesses should also be willing to adapt to changing technology and market conditions.

By combining good planning, innovation, effective marketing, and customer satisfaction, businesses can achieve sustainable growth and build a strong position in the market.`
    },

    {
        id: "healthy-life",
        title: "Healthy Lifestyle Guide",
        category: "Health",
        date: "7 September 2026",
        image: "image/blog18.jpg",
        description:
            "Build healthy habits for a better lifestyle.",
        content:
`A healthy lifestyle helps improve both physical and mental well-being. It starts with eating a balanced diet that includes fruits, vegetables, whole grains, and nutritious foods. Drinking enough water and limiting excessive junk food and sugary drinks can also support overall health.

Regular physical activity and exercise help keep the body active and strong. Getting enough quality sleep is equally important because it allows the body and mind to recover. Managing stress through relaxation, hobbies, or spending time with loved ones can also contribute to a healthier lifestyle.

Small, consistent habits can make a big difference over time. By maintaining a balanced diet, staying active, sleeping well, and taking care of mental well-being, you can build a healthier and more energetic life.`
    }
    {
    id: "healthy-lifestyle-guide",
    title: "Healthy Lifestyle Guide",
    category: "Health",
    image: "image/blog21.jpg",
    description: "A healthy lifestyle includes eating nutritious food, exercising regularly, getting enough sleep, drinking plenty of water, and managing stress. Good daily habits help keep your body and mind healthy, active, and happy.",
    content: `A healthy lifestyle is important for keeping our body and mind fit. It includes eating nutritious food, exercising regularly, drinking enough water, and getting proper sleep. Fresh fruits, vegetables, whole grains, and balanced meals provide the energy our body needs.
Regular exercise such as walking, cycling, or yoga improves fitness and reduces stress. Getting 7–8 hours of sleep helps the body recover and keeps the mind fresh. We should also avoid too much junk food, smoking, and other unhealthy habits.
By following simple healthy habits every day, we can stay active, energetic, and enjoy a better quality of life.`,
}

];

function generateArticleId(title) {

    let base = String(title || "article")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    if (!base) {
        base = "article";
    }

    return (
        base +
        "-" +
        Date.now().toString(36) +
        "-" +
        Math.random().toString(36).substring(2, 8)
    );
}
function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function fixImagePath(image) {

    if (!image) {
        return "image/blog1.jpg";
    }

    let path = String(image).trim().replace(/\\/g, "/");

    // Keep valid online/data URLs unchanged.
    if (
        path.startsWith("http://") ||
        path.startsWith("https://") ||
        path.startsWith("data:image/")
    ) {
        return path;
    }

    // Remove local relative prefixes.
    path = path.replace(/^(\.\.\/)+/, "");
    path = path.replace(/^(\.\/)+/, "");

    // Convert old Windows/local paths such as
    // E:/project1/image/blog19.jpg -> image/blog19.jpg
    const lower = path.toLowerCase();
    const imageIndex = lower.lastIndexOf("/image/");

    if (imageIndex !== -1) {
        return path.substring(imageIndex + 1);
    }

    // Normalize accidental plural folder name.
    if (lower.startsWith("images/")) {
        return "image/" + path.substring(7);
    }

    // A remaining Windows drive path cannot work on GitHub Pages.
    if (/^[a-zA-Z]:\//.test(path)) {
        const fileName = path.split("/").pop();
        return fileName ? "image/" + fileName : "image/blog1.jpg";
    }

    return path || "image/blog1.jpg";
}
function formatDateForInput(dateValue) {

    if (!dateValue) {
        return "";
    }

    const value = String(dateValue).trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value;
    }

    const match = value.match(
        /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/
    );

    if (match) {

        const day = String(match[1]).padStart(2, "0");
        const monthName = match[2].toLowerCase();
        const year = match[3];

        const months = {
            january: "01",
            february: "02",
            march: "03",
            april: "04",
            may: "05",
            june: "06",
            july: "07",
            august: "08",
            september: "09",
            october: "10",
            november: "11",
            december: "12"
        };

        if (months[monthName]) {
            return `${year}-${months[monthName]}-${day}`;
        }
    }

    const parsed = new Date(value);

    if (isNaN(parsed.getTime())) {
        return "";
    }

    return [
        parsed.getFullYear(),
        String(parsed.getMonth() + 1).padStart(2, "0"),
        String(parsed.getDate()).padStart(2, "0")
    ].join("-");
}


function formatDateForStorage(dateValue) {

    if (!dateValue) {
        return "";
    }

    const value = String(dateValue).trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {

        const [year, month, day] = value.split("-");

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
    }

    return value;
}

function getSavedArticles() {

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return [];
        }

        const articles = JSON.parse(saved);

        return Array.isArray(articles)
            ? articles
            : [];

    } catch (error) {

        console.error(
            "Error reading articles:",
            error
        );

        return [];
    }
}


function saveArticles(articles) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(articles)
        );

        return true;

    } catch (error) {

        console.error(
            "Error saving articles:",
            error
        );

        return false;
    }
}

function getDeletedArticleIds() {

    try {

        const data =
            localStorage.getItem(DELETED_KEY);

        if (!data) {
            return [];
        }

        const ids = JSON.parse(data);

        return Array.isArray(ids)
            ? ids.map(id => String(id))
            : [];

    } catch (error) {

        return [];
    }
}


function saveDeletedArticleIds(ids) {

    try {

        const uniqueIds = [
            ...new Set(
                ids.map(id => String(id))
            )
        ];

        localStorage.setItem(
            DELETED_KEY,
            JSON.stringify(uniqueIds)
        );

        return true;

    } catch (error) {

        console.error(error);

        return false;
    }
}

function getArticles() {

    let articles = getSavedArticles();

    const previousDataVersion = localStorage.getItem(DATA_VERSION_KEY);
    const shouldRepairOldLiveData =
        previousDataVersion !== CURRENT_DATA_VERSION;

    const deletedIds =
        new Set(getDeletedArticleIds());

   
    defaultArticles.forEach(defaultArticle => {

        const id = String(defaultArticle.id);

        if (deletedIds.has(id)) {
            return;
        }

        const index = articles.findIndex(article =>
            article && String(article.id) === id
        );

        if (index === -1) {
            articles.push({ ...defaultArticle });
            return;
        }

        const saved = articles[index] || {};

        const savedDescription = String(
            saved.description || defaultArticle.description || ""
        ).trim();

        const savedContent = String(
            saved.content || ""
        ).trim();

        const defaultContent = String(
            defaultArticle.content || defaultArticle.description || ""
        ).trim();

       
        const contentLooksOld =
            !savedContent ||
            savedContent === savedDescription ||
            savedContent === String(defaultArticle.description || "").trim() ||
            savedContent.length <= savedDescription.length + 20;

        articles[index] = {
            ...defaultArticle,
            ...saved,
            id: defaultArticle.id,
            title: String(saved.title || defaultArticle.title),
            category: String(saved.category || defaultArticle.category),
            date: saved.date || defaultArticle.date,
            image: fixImagePath(saved.image || defaultArticle.image),
            description: savedDescription,
            content: shouldRepairOldLiveData
                ? defaultContent
                : (contentLooksOld ? defaultContent : savedContent)
        };
    });

    if (shouldRepairOldLiveData) {
        localStorage.setItem(
            DATA_VERSION_KEY,
            CURRENT_DATA_VERSION
        );
    }

    articles = articles
        .filter(article =>
            article &&
            article.id &&
            !deletedIds.has(String(article.id))
        )
        .map(article => ({
            ...article,
            image: fixImagePath(article.image),
            content: String(
                article.content || article.description || ""
            ).trim()
        }));

    saveArticles(articles);

    return articles;
}

function findArticleById(id) {

    const requestedId =
        String(id || "").trim();

    if (!requestedId) {
        return null;
    }

    const articles = getArticles();

    return (
        articles.find(article =>
            String(article.id) === requestedId
        ) || null
    );
}

function addArticle(articleData) {

    const articles = getArticles();

    const newArticle = {

        id: generateArticleId(
            articleData.title
        ),

        title: String(
            articleData.title || ""
        ).trim(),

        category: String(
            articleData.category || "Other"
        ).trim(),

        date:
            formatDateForStorage(
                articleData.date
            ) ||
            new Date().toLocaleDateString(
                "en-GB",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                }
            ),

        image:
            fixImagePath(
                articleData.image
            ),

        description: String(
            articleData.description || ""
        ).trim(),

        content: String(
            articleData.content || ""
        ).trim(),

        isAdminAdded: true
    };


    articles.push(newArticle);

    return saveArticles(articles);
}
function updateArticle(id, updatedData) {

    const requestedId =
        String(id || "").trim();

    const articles = getArticles();

    const index =
        articles.findIndex(article =>
            String(article.id) === requestedId
        );


    if (index === -1) {

        console.error(
            "Article not found:",
            requestedId
        );

        return false;
    }


    const oldArticle =
        articles[index];


    articles[index] = {

        ...oldArticle,

        id: oldArticle.id,

        title:
            String(
                updatedData.title ??
                oldArticle.title
            ).trim(),

        category:
            String(
                updatedData.category ??
                oldArticle.category
            ).trim(),

        date:
            formatDateForStorage(
                updatedData.date
            ) ||
            oldArticle.date,

        image:
            fixImagePath(
                updatedData.image ||
                oldArticle.image
            ),

        description:
            String(
                updatedData.description ??
                oldArticle.description
            ).trim(),

        content:
            String(
                updatedData.content ??
                oldArticle.content
            ).trim(),

        isAdminAdded:
            oldArticle.isAdminAdded === true
    };


    return saveArticles(articles);
}

function deleteArticle(id) {

    const articleId =
        String(id || "").trim();

    let articles = getArticles();

    const exists =
        articles.some(article =>
            String(article.id) === articleId
        );


    if (!exists) {

        alert("Article not found.");

        return false;
    }


    articles =
        articles.filter(article =>
            String(article.id) !== articleId
        );


    if (!saveArticles(articles)) {

        alert("Delete failed.");

        return false;
    }


    const deletedIds =
        getDeletedArticleIds();


    if (!deletedIds.includes(articleId)) {

        deletedIds.push(articleId);

        saveDeletedArticleIds(
            deletedIds
        );
    }


    displayHomeArticles();
    displayCategoriesPage();
    displayCategoryArticles();
    renderAdminDashboard();

    return true;
}

function isAdminLoggedIn() {

    return (
        localStorage.getItem(
            ADMIN_LOGIN_KEY
        ) === "true"
    );
}


function setAdminLogin(value) {

    localStorage.setItem(
        ADMIN_LOGIN_KEY,
        value ? "true" : "false"
    );
}


function adminLogout() {

    setAdminLogin(false);

    localStorage.removeItem(
        EDIT_KEY
    );

    window.location.href =
        "admin-login.html";
}

function setupDarkMode() {

    const buttons =
        document.querySelectorAll(
            "#darkBtn"
        );

    const savedMode =
        localStorage.getItem(
            DARK_MODE_KEY
        );

    const isDark =
        savedMode === "true";


    document.body.classList.toggle(
        "dark-mode",
        isDark
    );


    buttons.forEach(button => {

        updateDarkIcon(
            button,
            isDark
        );


        if (
            button.dataset.darkReady ===
            "true"
        ) {
            return;
        }


        button.dataset.darkReady =
            "true";


        button.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark-mode"
                );


                const dark =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                localStorage.setItem(
                    DARK_MODE_KEY,
                    dark ? "true" : "false"
                );


                document
                    .querySelectorAll(
                        "#darkBtn"
                    )
                    .forEach(btn => {

                        updateDarkIcon(
                            btn,
                            dark
                        );
                    });
            }
        );
    });
}


function updateDarkIcon(button, isDark) {

    const icon = button.querySelector("i");

    if (icon) {
        icon.className =
            isDark
                ? "fa-solid fa-sun"
                : "fa-solid fa-moon";
    }

    const text = button.querySelector("#darkText");

    if (text) {
        text.textContent =
            isDark
                ? "Light"
                : "Dark";
    }
}

function setupMobileMenu() {

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (!navbar || !navLinks) {
        return;
    }

    let menuButton = navbar.querySelector(".menu-toggle");

    // Some inner pages did not contain a hamburger button.
    // Create one automatically so the same JS fixes every page.
    if (!menuButton) {
        menuButton = document.createElement("button");
        menuButton.type = "button";
        menuButton.className = "menu-toggle";
        menuButton.setAttribute("aria-label", "Open Menu");
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';

        const navIcons = navbar.querySelector(".nav-icons");

        if (navIcons) {
            navIcons.appendChild(menuButton);
        } else {
            navbar.appendChild(menuButton);
        }
    }

    if (menuButton.dataset.menuReady === "true") {
        return;
    }

    menuButton.dataset.menuReady = "true";
    menuButton.setAttribute("aria-expanded", "false");

    const setMenuState = open => {
        navLinks.classList.toggle("active", open);
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute(
            "aria-label",
            open ? "Close Menu" : "Open Menu"
        );

        const icon = menuButton.querySelector("i");
        if (icon) {
            icon.className =
                open
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars";
        }
    };

    menuButton.addEventListener("click", function () {
        setMenuState(!navLinks.classList.contains("active"));
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            setMenuState(false);
        });
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            setMenuState(false);
        }
    });
}

function setupAdminDashboardPage() {

    const tableBody = document.getElementById("articlesTableBody");

    if (!tableBody) {
        return;
    }

    const loggedIn = localStorage.getItem(ADMIN_LOGIN_KEY);

    if (loggedIn === "false") {
        window.location.href = "admin-login.html";
        return;
    }

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn && logoutBtn.dataset.logoutReady !== "true") {
        logoutBtn.dataset.logoutReady = "true";
        logoutBtn.addEventListener("click", function () {
            const confirmed = confirm("Are you sure you want to logout?");
            if (confirmed) {
                adminLogout();
            }
        });
    }

    renderAdminDashboard();
}

function createArticleCard(article) {

    const card =
        document.createElement("article");

    card.className =
        "blog-card";

    card.dataset.articleId =
        String(article.id);


    card.innerHTML = `

        <img
            src="${escapeHTML(
                fixImagePath(article.image)
            )}"
            alt="${escapeHTML(
                article.title
            )}"
            onerror="
                this.onerror=null;
                this.src='image/blog1.jpg';
            "
        >

        <div class="blog-content">

            <span class="date">
                ${escapeHTML(article.date)}
            </span>

            <h3>
                ${escapeHTML(article.title)}
            </h3>

            <p>
                ${escapeHTML(
                    article.description
                )}
            </p>

            <a
                class="read-btn"
                href="article.html?id=${encodeURIComponent(
                    article.id
                )}"
            >
                Read More
            </a>

        </div>
    `;


    return card;
}
function displayHomeArticles() {

    const container =
        document.querySelector(
            ".blogs .blog-container"
        );


    if (!container) {
        return;
    }


    const articles =
        getArticles();


    container.innerHTML = "";


    if (!articles.length) {

        container.innerHTML = `

            <div class="no-articles">

                <h3>
                    No Articles Available
                </h3>

                <p>
                    There are currently no articles to display.
                </p>

            </div>
        `;

        return;
    }


    articles.forEach(article => {

        container.appendChild(
            createArticleCard(article)
        );
    });
    const loadMore =
        document.getElementById(
            "loadMore"
        );

    if (loadMore) {

        loadMore.dataset.visibleCount =
            "8";
    }


    setupLoadMore();
}

function displayCategoryArticles() {

    const container =
        document.getElementById(
            "categoryArticles"
        ) ||
        document.querySelector(
            ".category-articles"
        );


    if (!container) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const categoryParam =
        params.get("category");


    const articles =
        getArticles();


    let filteredArticles =
        articles;


    if (categoryParam) {

        const selectedCategory =
            String(categoryParam)
                .trim()
                .toLowerCase();


        filteredArticles =
            articles.filter(article => {

                const articleCategory =
                    String(
                        article.category || ""
                    )
                    .trim()
                    .toLowerCase();

                return (
                    articleCategory ===
                    selectedCategory
                );
            });
    }


    container.innerHTML = "";


    const title =
        document.getElementById(
            "categoryTitle"
        );


    const count =
        document.getElementById(
            "categoryCount"
        );


    if (title) {

        title.textContent =
            categoryParam
                ? `${categoryParam} Articles`
                : "All Articles";
    }


    if (count) {

        count.textContent =
            `${filteredArticles.length} article${
                filteredArticles.length === 1
                    ? ""
                    : "s"
            } found`;
    }


    if (!filteredArticles.length) {

        container.innerHTML = `

            <div class="no-articles">

                <h3>
                    No Articles Found
                </h3>

                <p>
                    ${
                        categoryParam
                            ? `No articles are available in the ${escapeHTML(
                                categoryParam
                              )} category.`
                            : "There are currently no articles."
                    }
                </p>

                <a
                    href="categories.html"
                    class="btn"
                >
                    View All Categories
                </a>

            </div>
        `;

        return;
    }


    filteredArticles.forEach(article => {

        container.appendChild(
            createArticleCard(article)
        );
    });
}
function displayCategoriesPage() {

    const container =
        document.getElementById(
            "categoryList"
        ) ||
        document.querySelector(
            ".category-list"
        );


    if (!container) {
        return;
    }


    const articles =
        getArticles();


    const categoryMap =
        new Map();


    articles.forEach(article => {

        const category =
            String(
                article.category || "Other"
            ).trim();


        if (!category) {
            return;
        }


        const key =
            category.toLowerCase();


        if (!categoryMap.has(key)) {

            categoryMap.set(
                key,
                category
            );
        }
    });


    container.innerHTML = "";


    const categories =
        Array.from(
            categoryMap.values()
        ).sort((a, b) =>
            a.localeCompare(b)
        );


    if (!categories.length) {

        container.innerHTML =
            "<p>No categories available.</p>";

        return;
    }


    categories.forEach(category => {

        const link =
            document.createElement("a");


        link.href =
            "categories.html?category=" +
            encodeURIComponent(category);


        link.className =
            "category-link";


        link.textContent =
            category;


        container.appendChild(link);
    });
}
function loadArticlePage() {

    const page =
        document.querySelector(
            ".article-page"
        );


    if (!page) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        params.get("id");


    if (!id) {

        showArticleError(
            page,
            "Article Not Found",
            "Please select an article."
        );

        return;
    }


    const article =
        findArticleById(id);


    if (!article) {

        showArticleError(
            page,
            "Article Not Found",
            "This article may have been deleted or is no longer available."
        );

        return;
    }


    const paragraphs =
        String(
            article.content ||
            article.description ||
            ""
        )
        .split(/\n+/)
        .map(text => text.trim())
        .filter(Boolean)
        .map(paragraph => `
            <p>
                ${escapeHTML(paragraph)}
            </p>
        `)
        .join("");


    page.innerHTML = `

        <img
            src="${escapeHTML(
                fixImagePath(article.image)
            )}"
            alt="${escapeHTML(
                article.title
            )}"
            onerror="
                this.onerror=null;
                this.src='image/blog1.jpg';
            "
        >

        <h1>
            ${escapeHTML(article.title)}
        </h1>

        <div class="date">
            ${escapeHTML(article.date)}
        </div>

        <div class="article-category">
            ${escapeHTML(article.category)}
        </div>

        <div class="article-content">
            ${paragraphs}
        </div>

        <div class="share-buttons">

            <button
                type="button"
                class="share-article-btn"
                title="Share Article"
            >
                <i class="fa-solid fa-share-nodes"></i>
            </button>

        </div>
    `;


    const shareButton =
        page.querySelector(
            ".share-article-btn"
        );


    if (shareButton) {

        shareButton.addEventListener(
            "click",
            () => {

                shareArticle(
                    article.title
                );
            }
        );
    }
}

function showArticleError(
    page,
    title,
    message
) {

    page.innerHTML = `

        <div class="no-articles">

            <h1>
                ${escapeHTML(title)}
            </h1>

            <p>
                ${escapeHTML(message)}
            </p>

            <a
                href="index.html"
                class="btn"
            >
                Back Home
            </a>

        </div>
    `;
}

function shareArticle(title) {

    const shareData = {

        title: title,

        text: title,

        url: window.location.href
    };


    if (navigator.share) {

        navigator.share(
            shareData
        ).catch(() => {});

        return;
    }


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(
                window.location.href
            )
            .then(() => {

                alert(
                    "Article link copied!"
                );

            })
            .catch(() => {

                alert(
                    window.location.href
                );
            });

        return;
    }


    alert(
        window.location.href
    );
}

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {
        return;
    }


    if (
        input.dataset.searchReady ===
        "true"
    ) {
        return;
    }


    input.dataset.searchReady =
        "true";


    input.addEventListener(
        "input",
        function () {

            const keyword =
                this.value
                    .toLowerCase()
                    .trim();


            const cards =
                document.querySelectorAll(
                    ".blogs .blog-card"
                );


            cards.forEach(card => {

                const text =
                    card.textContent
                        .toLowerCase();


                card.style.display =
                    text.includes(keyword)
                        ? ""
                        : "none";
            });
        }
    );
}
function setupLoadMore() {

    const loadMore =
        document.getElementById(
            "loadMore"
        );


    if (!loadMore) {
        return;
    }


    const container =
        document.querySelector(
            ".blogs .blog-container"
        );


    if (!container) {
        return;
    }


    const cards =
        Array.from(
            container.querySelectorAll(
                ".blog-card"
            )
        );


    const pageSize = 8;


    let visibleCount =
        Number(
            loadMore.dataset.visibleCount ||
            pageSize
        );


    if (
        !Number.isFinite(
            visibleCount
        )
    ) {

        visibleCount =
            pageSize;
    }


    cards.forEach(
        (card, index) => {

            card.style.display =
                index < visibleCount
                    ? ""
                    : "none";
        }
    );


    if (
        cards.length <= pageSize
    ) {

        loadMore.style.display =
            "none";

        return;
    }


    loadMore.style.display =
        "block";


    if (
        loadMore.dataset.loadMoreReady ===
        "true"
    ) {
        return;
    }


    loadMore.dataset.loadMoreReady =
        "true";


    loadMore.addEventListener(
        "click",
        function () {

            visibleCount +=
                pageSize;


            loadMore.dataset.visibleCount =
                String(visibleCount);


            cards.forEach(
                (card, index) => {

                    if (
                        index < visibleCount
                    ) {

                        card.style.display =
                            "";
                    }
                }
            );


            if (
                visibleCount >=
                cards.length
            ) {

                loadMore.style.display =
                    "none";
            }
        }
    );
}
function setupNewsletter() {

    const form =
        document.querySelector(
            ".newsletter form"
        );


    if (!form) {
        return;
    }


    if (
        form.dataset.newsletterReady ===
        "true"
    ) {
        return;
    }


    form.dataset.newsletterReady =
        "true";


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const input =
                form.querySelector(
                    "input[type='email']"
                );


            if (
                !input ||
                !input.value.trim()
            ) {

                alert(
                    "Please enter your email."
                );

                return;
            }


            if (
                !input.checkValidity()
            ) {

                alert(
                    "Please enter a valid email."
                );

                return;
            }


            alert(
                "Thank you for subscribing!"
            );


            form.reset();
        }
    );
}

function renderAdminDashboard() {

    const tableBody =
        document.getElementById(
            "articlesTableBody"
        );


    if (!tableBody) {
        return;
    }


    const articles =
        getArticles();


    tableBody.innerHTML = "";


    const categories =
        new Set();


    let adminCount = 0;


    articles.forEach(article => {

        if (article.category) {

            categories.add(
                article.category
            );
        }


        if (
            article.isAdminAdded === true
        ) {

            adminCount++;
        }


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>

                <img
                    src="${escapeHTML(
                        fixImagePath(article.image)
                    )}"
                    alt="${escapeHTML(
                        article.title
                    )}"
                    class="article-image"
                    onerror="
                        this.onerror=null;
                        this.src='image/blog1.jpg';
                    "
                >

            </td>

            <td>

                <div class="article-title">

                    ${escapeHTML(
                        article.title
                    )}

                </div>

            </td>

            <td>

                <span class="category-badge">

                    ${escapeHTML(
                        article.category
                    )}

                </span>

            </td>

            <td>

                ${escapeHTML(
                    article.date
                )}

            </td>

            <td>

                <div class="action-buttons">

                    <button
                        type="button"
                        class="action-btn view-btn"
                        data-action="view"
                        data-id="${escapeHTML(
                            article.id
                        )}"
                        title="View"
                    >
                        <i class="fa-solid fa-eye"></i>
                    </button>

                    <button
                        type="button"
                        class="action-btn edit-btn"
                        data-action="edit"
                        data-id="${escapeHTML(
                            article.id
                        )}"
                        title="Edit"
                    >
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button
                        type="button"
                        class="action-btn delete-btn"
                        data-action="delete"
                        data-id="${escapeHTML(
                            article.id
                        )}"
                        title="Delete"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </td>
        `;


        tableBody.appendChild(row);
    });


    const totalArticles =
        document.getElementById(
            "totalArticles"
        );


    const totalCategories =
        document.getElementById(
            "totalCategories"
        );


    const adminArticles =
        document.getElementById(
            "adminArticles"
        );


    if (totalArticles) {

        totalArticles.textContent =
            articles.length;
    }


    if (totalCategories) {

        totalCategories.textContent =
            categories.size;
    }


    if (adminArticles) {

        adminArticles.textContent =
            adminCount;
    }


    updateAdminEmptyState(
        articles.length
    );


    setupAdminSearch();
    setupAdminActions();
}

function setupAdminActions() {

    const tableBody =
        document.getElementById(
            "articlesTableBody"
        );


    if (!tableBody) {
        return;
    }


    if (
        tableBody.dataset.actionsReady ===
        "true"
    ) {
        return;
    }


    tableBody.dataset.actionsReady =
        "true";


    tableBody.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "button[data-action]"
                );


            if (!button) {
                return;
            }


            const action =
                button.dataset.action;


            const id =
                button.dataset.id;


            if (!id) {
                return;
            }


            if (action === "view") {

                viewArticle(id);

            } else if (action === "edit") {

                editArticle(id);

            } else if (action === "delete") {

                confirmDeleteArticle(id);
            }
        }
    );
}

function viewArticle(id) {

    const article =
        findArticleById(id);


    if (!article) {

        alert(
            "Article not found."
        );

        return;
    }


    window.location.href =
        "article.html?id=" +
        encodeURIComponent(
            article.id
        );
}
function editArticle(id) {

    const article =
        findArticleById(id);


    if (!article) {

        alert(
            "Article not found."
        );

        return;
    }


    localStorage.setItem(
        EDIT_KEY,
        String(article.id)
    );


    window.location.href =
        "add-article.html?edit=" +
        encodeURIComponent(
            article.id
        );
}

function confirmDeleteArticle(id) {

    const article =
        findArticleById(id);


    if (!article) {

        alert(
            "Article not found."
        );

        return;
    }


    const confirmed =
        confirm(
            `Delete "${article.title}"?`
        );


    if (!confirmed) {
        return;
    }


    if (
        deleteArticle(
            article.id
        )
    ) {

        alert(
            "Article deleted successfully!"
        );
    }
}

function updateAdminEmptyState(count) {

    const emptyState =
        document.getElementById(
            "emptyState"
        );


    if (!emptyState) {
        return;
    }


    emptyState.style.display =
        count === 0
            ? "block"
            : "none";
}

function setupAdminSearch() {

    const input =
        document.getElementById(
            "articleSearch"
        );


    const tableBody =
        document.getElementById(
            "articlesTableBody"
        );


    if (
        !input ||
        !tableBody
    ) {
        return;
    }


    if (
        input.dataset.adminSearchReady ===
        "true"
    ) {
        return;
    }


    input.dataset.adminSearchReady =
        "true";


    input.addEventListener(
        "input",
        function () {

            const keyword =
                this.value
                    .toLowerCase()
                    .trim();


            const rows =
                tableBody.querySelectorAll(
                    "tr"
                );


            let visibleRows = 0;


            rows.forEach(row => {

                const text =
                    row.textContent
                        .toLowerCase();


                const visible =
                    text.includes(
                        keyword
                    );


                row.style.display =
                    visible
                        ? ""
                        : "none";


                if (visible) {
                    visibleRows++;
                }
            });


            const emptyState =
                document.getElementById(
                    "emptyState"
                );


            if (emptyState) {

                emptyState.style.display =
                    visibleRows === 0
                        ? "block"
                        : "none";
            }
        }
    );
}
function setupArticleForm() {

    const form =
        document.getElementById(
            "articleForm"
        );


    if (!form) {
        return;
    }


    if (
        form.dataset.articleFormReady ===
        "true"
    ) {
        return;
    }


    form.dataset.articleFormReady =
        "true";


    const params =
        new URLSearchParams(
            window.location.search
        );


    let editId =
        params.get("edit");


    if (editId) {

        editId =
            String(editId).trim();

        localStorage.setItem(
            EDIT_KEY,
            editId
        );

    } else {

        editId =
            localStorage.getItem(
                EDIT_KEY
            );

        if (editId) {
            editId =
                String(editId).trim();
        }
    }


    const title =
        form.querySelector(
            "[name='title']"
        );


    const category =
        form.querySelector(
            "[name='category']"
        );


    const date =
        form.querySelector(
            "[name='date']"
        );


    const image =
        form.querySelector(
            "[name='image']"
        );


    const description =
        form.querySelector(
            "[name='description']"
        );


    const content =
        form.querySelector(
            "[name='content']"
        );


    if (editId) {

        const article =
            findArticleById(editId);


        if (!article) {

            alert(
                "Article not found."
            );


            localStorage.removeItem(
                EDIT_KEY
            );


            window.location.href =
                "admin-dashboard.html";


            return;
        }


        loadEditArticle(
            form,
            article
        );
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (
                !title ||
                !category ||
                !description ||
                !content
            ) {

                alert(
                    "Form fields are missing."
                );

                return;
            }


            const articleData = {

                title:
                    title.value.trim(),

                category:
                    category.value.trim(),

                date:
                    date
                        ? date.value
                        : "",

                image:
                    image
                        ? image.value.trim()
                        : "image/blog1.jpg",

                description:
                    description.value.trim(),

                content:
                    content.value.trim()
            };


            if (
                !articleData.title ||
                !articleData.category ||
                !articleData.description ||
                !articleData.content
            ) {

                alert(
                    "Please fill all required fields."
                );

                return;
            }


            if (editId) {

                const success =
                    updateArticle(
                        editId,
                        articleData
                    );


                if (success) {

                    localStorage.removeItem(
                        EDIT_KEY
                    );


                    alert(
                        "Article updated successfully!"
                    );


                    window.location.href =
                        "admin-dashboard.html";

                } else {

                    alert(
                        "Article update failed."
                    );
                }


                return;
            }


            const success =
                addArticle(
                    articleData
                );


            if (success) {

                localStorage.removeItem(
                    EDIT_KEY
                );


                alert(
                    "Article added successfully!"
                );


                form.reset();


                window.location.href =
                    "admin-dashboard.html";

            } else {

                alert(
                    "Article could not be added."
                );
            }
        }
    );
}
function loadEditArticle(
    form,
    article
) {

    if (!article) {
        return;
    }


    const fields = {

        title:
            article.title,

        category:
            article.category,

        date:
            article.date,

        image:
            article.image,

        description:
            article.description,

        content:
            article.content
    };


    Object.keys(fields).forEach(
        name => {

            let field =
                form.querySelector(
                    `[name="${name}"]`
                );


            if (!field) {

                field =
                    document.getElementById(
                        name
                    );
            }


            if (!field) {
                return;
            }


            if (
                name === "date" &&
                field.type === "date"
            ) {

                field.value =
                    formatDateForInput(
                        fields[name]
                    );

            } else {

                field.value =
                    fields[name] || "";
            }
        }
    );


    const pageTitle =
        document.getElementById(
            "formTitle"
        );


    if (pageTitle) {

        pageTitle.textContent =
            "Edit Article";
    }


    const submitButton =
        form.querySelector(
            "button[type='submit']"
        );


    if (submitButton) {

        submitButton.textContent =
            "Update Article";
    }
}

function setupAdminLogin() {

    const form =
        document.getElementById(
            "adminLoginForm"
        );


    if (!form) {
        return;
    }


    if (
        form.dataset.loginReady ===
        "true"
    ) {
        return;
    }


    form.dataset.loginReady =
        "true";


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const username =
                form.querySelector(
                    "[name='username']"
                );


            const password =
                form.querySelector(
                    "[name='password']"
                );


            if (
                !username ||
                !password
            ) {

                return;
            }


            if (
                username.value.trim() ===
                    "admin" &&
                password.value ===
                    "admin123"
            ) {

                setAdminLogin(true);


                window.location.href =
                    "admin-dashboard.html";

            } else {

                alert(
                    "Invalid username or password."
                );
            }
        }
    );
}


function normalizeHomeLinks() {
    document.querySelectorAll('a[href="web.html"]').forEach(function (link) {
        link.setAttribute("href", "index.html");
    });
}

document.addEventListener(
    "DOMContentLoaded",
    function () {
        normalizeHomeLinks();
        getArticles();
        setupDarkMode();
        setupMobileMenu();
        setupArticleForm();
        setupAdminLogin();
        displayHomeArticles();
        displayCategoriesPage();
        displayCategoryArticles();
        setupSearch();
        setupLoadMore();
        setupNewsletter();
        loadArticlePage();
        setupAdminDashboardPage();
    }
);
