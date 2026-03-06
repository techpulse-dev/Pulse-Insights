/**
 * Pulse Insights — News-style Blog
 */

const ARTICLES = [
    {
        id: 1,
        title: "How AI Agents Are Changing the Way We Work and Create",
        excerpt: "From content creation to data analysis, autonomous agents are reshaping productivity across industries.",
        category: "Technology",
        date: "2026-03-06",
        readTime: "8 min",
        url: "articles/ai-agents-changing-work.html"
    },
    {
        id: 2,
        title: "5 Side Hustles You Can Start Today with Zero Investment",
        excerpt: "Proven ways to earn extra income using nothing but a computer and creativity. No startup costs required.",
        category: "Money",
        date: "2026-03-06",
        readTime: "6 min",
        url: "articles/side-hustles-zero-investment.html"
    },
    {
        id: 3,
        title: "The Psychology of Viral Content: Why Some Posts Blow Up",
        excerpt: "What makes content go viral? A look at the science of shareability, emotional triggers, and timing.",
        category: "Culture",
        date: "2026-03-05",
        readTime: "10 min",
        url: "articles/psychology-viral-content.html"
    },
    {
        id: 4,
        title: "Minimalist Productivity: Do Less, Achieve More",
        excerpt: "The counterintuitive approach to getting things done. How top performers use simplicity as their edge.",
        category: "Lifestyle",
        date: "2026-03-05",
        readTime: "7 min",
        url: "articles/minimalist-productivity.html"
    },
    {
        id: 5,
        title: "Crypto Without the Hype: A Practical Guide for 2026",
        excerpt: "Cutting through the noise. What actually works in crypto and DeFi — minus the speculation.",
        category: "Finance",
        date: "2026-03-04",
        readTime: "9 min",
        url: "articles/crypto-practical-guide-2026.html"
    },
    {
        id: 6,
        title: "How to Build Habits That Actually Stick",
        excerpt: "Forget willpower. Evidence-based strategies that make new habits automatic, backed by neuroscience.",
        category: "Health",
        date: "2026-03-04",
        readTime: "12 min",
        url: "articles/build-habits-that-stick.html"
    },
    {
        id: 7,
        title: "Tinder to Pay $60.5M Over Age Discrimination Claims",
        excerpt: "The dating app settles a decade-long class action lawsuit. Over 260,000 users in California may be eligible for compensation.",
        category: "News",
        date: "2026-03-06",
        readTime: "5 min",
        url: "articles/20260306_153155_Tinder_agrees_to_pay_605M_after_dating_app_s.html"
    },
    {
        id: 8,
        title: "The Rise of Pay-What-You-Want: Why Free Works",
        excerpt: "More creators are ditching fixed prices. How the PWYW model builds trust and can actually increase revenue.",
        category: "Money",
        date: "2026-03-03",
        readTime: "6 min",
        url: "articles/pay-what-you-want-model.html"
    },
    {
        id: 9,
        title: "Digital Detox: A Week Without Social Media",
        excerpt: "What happens when you unplug for 7 days? One writer's honest account of clarity, boredom, and unexpected lessons.",
        category: "Lifestyle",
        date: "2026-03-03",
        readTime: "8 min",
        url: "articles/digital-detox-week.html"
    }
];

const RESOURCES = [
    {
        title: "Productivity Cheat Sheet 2026",
        desc: "Quick reference for the best tools, apps, and frameworks to get more done.",
        link: "#",
        format: "PDF"
    },
    {
        title: "Side Hustle Launch Checklist",
        desc: "Step-by-step checklist to go from idea to first sale in 7 days.",
        link: "#",
        format: "Checklist"
    },
    {
        title: "Content Strategy Templates",
        desc: "5 ready-to-use templates for blog posts, social media, and newsletters.",
        link: "#",
        format: "Markdown"
    }
];

let currentFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
    setDate();
    renderFeatured();
    renderSideArticles();
    renderArticles();
    renderResources();
    initNav();
    initTheme();
    initFilters();
});

function setDate() {
    const el = document.getElementById("currentDate");
    if (el) {
        const d = new Date();
        el.textContent = d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    }
}

function renderFeatured() {
    const el = document.getElementById("featuredArticle");
    if (!el || !ARTICLES.length) return;
    const a = ARTICLES[0];
    el.innerHTML = `
        <div class="featured-label">${a.category}</div>
        <h2 class="featured-title">${a.title}</h2>
        <p class="featured-excerpt">${a.excerpt}</p>
        <div class="featured-meta">${a.date} &middot; ${a.readTime} read</div>
    `;
    el.onclick = () => location.href = a.url;
}

function renderSideArticles() {
    const el = document.getElementById("sideArticles");
    if (!el) return;
    const items = ARTICLES.slice(1, 5);
    el.innerHTML = items.map((a, i) => `
        <a href="${a.url}" class="side-card">
            <span class="side-card-num">0${i + 2}</span>
            <div class="side-card-body">
                <div class="side-card-cat">${a.category}</div>
                <div class="side-card-title">${a.title}</div>
                <div class="side-card-meta">${a.readTime} read</div>
            </div>
        </a>
    `).join("");
}

function renderArticles(filter) {
    const grid = document.getElementById("articlesGrid");
    const count = document.getElementById("articleCount");
    if (!grid) return;

    const filtered = filter && filter !== "all"
        ? ARTICLES.filter(a => a.category === filter)
        : ARTICLES;

    grid.innerHTML = filtered.slice(0).map(a => `
        <a href="${a.url}" class="article-card">
            <div class="article-cat">${a.category}</div>
            <div class="article-title">${a.title}</div>
            <p class="article-excerpt">${a.excerpt}</p>
            <div class="article-meta">
                <span>${a.date}</span>
                <span>${a.readTime} read</span>
            </div>
        </a>
    `).join("");

    if (count) count.textContent = `${filtered.length} articles`;
}

function renderResources() {
    const grid = document.getElementById("resourcesGrid");
    if (!grid) return;
    grid.innerHTML = RESOURCES.map(r => `
        <div class="resource-card">
            <div class="resource-title">${r.title}</div>
            <p class="resource-desc">${r.desc}</p>
            <div class="resource-footer">
                <span class="resource-format">${r.format}</span>
                <a href="${r.link}" class="resource-link">Download</a>
            </div>
        </div>
    `).join("");
}

function initNav() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
    if (toggle && nav) {
        toggle.addEventListener("click", () => nav.classList.toggle("open"));
    }
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            const t = document.querySelector(link.getAttribute("href"));
            if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth" }); if (nav) nav.classList.remove("open"); }
        });
    });
}

function initTheme() {
    const btn = document.getElementById("themeToggle");
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);

    if (btn) {
        btn.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme");
            const next = current === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
        });
    }
}

function initFilters() {
    document.querySelectorAll(".tag[data-filter]").forEach(tag => {
        tag.addEventListener("click", e => {
            e.preventDefault();
            document.querySelectorAll(".tag").forEach(t => t.classList.remove("active"));
            tag.classList.add("active");
            currentFilter = tag.dataset.filter;
            renderArticles(currentFilter);
        });
    });
}
