// ============================================
// MASSAGE PRAHA - Static Website JavaScript
// Minimal JS for interactivity, i18n, and forms
// ============================================

// Content Data (i18n)
const content = {
    ua: {
        nav: {
            home: 'Головна',
            services: 'Послуги',
            benefits: 'Для кого',
            gallery: 'Галерея',
            reviews: 'Відгуки',
            faq: 'FAQ',
            contact: 'Контакти',
            book: 'Записатись'
        },
    
        hero: {
            title: 'Професійний масаж',
            subtitle: 'Подбай про своє здоровʼя',
            cta: 'Записатись на консультацію',
            trust: 'Масажист з медичною освітою'
        },
        about: {
    title: 'Про масажиста',
    text: 'Ігор — професійний масажист з медичною освітою та понад 7-річним досвідом роботи. Він має офіційні сертифікати та глибокі знання анатомії й фізіології, що дозволяє йому безпечно та ефективно працювати з тілом кожного клієнта. Ігор підходить до масажу комплексно: уважно слухає, враховує індивідуальні потреби та підбирає оптимальну техніку для досягнення найкращого результату — зняття болю, напруги або відновлення після навантажень. Як фахівець, він постійно вдосконалює свої навички, а як людина — відкритий, доброзичливий і завжди готовий допомогти. До Ігоря звертаються ті, хто цінує професіоналізм, довіру та турботу про здоров’я.'
},
        services: {
            title: 'Види масажу',
            items: [
                {
                    title: 'Лікувальний масаж',
                    description: 'Професійне лікування та відновлення після травм.',
                    image: 'images/massage-rehab.jpg'
                },
                {
                    title: 'Класичний масаж',
                    description: 'Зняття напруги, покращення кровообігу та загальне розслаблення організму.',
                    image: 'images/massage-classic.jpg'
                },
                {
                    title: 'Спортивний масаж',
                    description: 'Підготовка до змагань, відновлення після тренувань та профілактика травм.',
                    image: 'images/gallery-5.jpg'
                },
                {
                    title: 'Релакс масаж',
                    description: 'Повна релаксація, зняття стресу та відновлення енергії організму.',
                    image: 'images/massage-relax.jpg'
                },
                {
                    title: 'Антицелюлітний масаж',
                    description: 'Корекція фігури, покращення стану шкіри та виведення токсинів.',
                    image: 'images/massage-anti-cellulite.jpg'
                }
            ]
        },
        benefits: {
            title: 'Для кого масаж буде корисним',
            items: [
                {
                    title: 'Люди із целюлітом',
                    description: 'Ефективна боротьба з "апельсиновою кіркою", покращення тонусу шкіри та лімфодренаж.'
                },
                {
                    title: 'Люди із травмами',
                    description: 'Професійна допомога у відновленні функцій м\'язів та суглобів після пошкоджень.'
                },
                {
                    title: 'Люди з фізично важкою працею',
                    description: 'Зняття м\'язової втоми, попередження професійних захворювань та відновлення сил.'
                },
                {
                    title: 'Люди з сидячою роботою',
                    description: 'Профілактика болю в спині та шиї, покращення постави та кровообігу.'
                }
            ]
        },
        gallery: {
            title: 'Фото виїздів',
            description: 'Натисніть на фото, щоб переглянути детальніше'
        },
        reviews: {
    title: 'Відгуки клієнтів',
    items: [
        {
            text: 'Найкращий масаж, який я коли-небудь отримувала. Професіонал своєї справи!',
            author: 'Марія К.'
        },
        {
            text: 'Спасибі за чудовий сервіс та якість. Обовʼязково повернусь!',
            author: 'Петро В.'
        },
        {
            text: 'Рекомендую всім своїм друзям. Результат просто неймовірний!',
            author: 'Анна Л.'
        }
    ]
},
      contact: {
    title: 'Контакти'
},  
        faq: {
            title: 'Часті запитання',
            items: [
                {
                    question: 'Як підготуватися до масажу?',
                    answer: 'Бажано не їсти за годину до сеансу, прийняти душ. Якщо є хронічні захворювання, повідомте про це заздалегідь.'
                },
                {
                    question: 'Чи є протипоказання?',
                    answer: 'Так, гострі запальні процеси, висока температура, шкірні захворювання, онкологія. Проконсультуйтеся перед записом.'
                },
                {
                    question: 'Скільки триває сеанс?',
                    answer: 'Залежно від виду масажу, сеанс може тривати від 45 до 90 хвилин.'
                },
                {
                    question: 'Де ви приймаєте?',
                    answer: 'Я працюю з виїздом до клієнта по Празі, а також приймаю в кабінеті (адреса уточнюється при записі).'
                },
                {
                    question: 'Яку косметику ви використовуєте?',
                    answer: 'Використовуються тільки професійні гіпоалергенні масла та креми преміум-класу.'
                },
                {
                    question: 'Як часто потрібно робити масаж?',
                    answer: 'Для профілактики достатньо 1-2 рази на тиждень. Для лікування курс призначається індивідуально.'
                }
            ]
        },
        cta: {
            text: 'Запишіться сьогодні та отримаєте знижку 10%',
            button: 'Забронювати знижку'
        },
        footer: {
            agreement: 'Договір оферти',
            privacy: 'Політика конфіденційності',
            refund: 'Політика повернення',
            support: 'Email support',
            copyright: '© 2026 Massage Praha. All rights reserved.'
        },
        modal: {
            title: 'Запис на масаж',
            subtitle: ' Консультація безкоштовна — не зволікай',
            phoneLabel: 'Телефон',
            instagramLabel: 'Instagram',
            submit: 'Надіслати заявку',
            successTitle: 'Дякуємо!',
            successMessage: 'Очікуйте зворотного звʼязку',
            errorTitle: 'Помилка',
            errorMessage: 'Щось пішло не так. Спробуйте ще раз або напишіть нам у соцмережах.'
        },
        sticky: {
            button: 'Записатись'
        }
    },
    cz: {
        nav: {
            home: 'Domů',
            services: 'Služby',
            benefits: 'Pro koho',
            gallery: 'Galerie',
            reviews: 'Recenze',
            faq: 'FAQ',
            contact: 'Kontakt',
            book: 'Rezervovat'
        },
        hero: {
            title: 'Profesionální masáž',
            subtitle: 'Pečujte o své zdraví',
            cta: 'Napsat masérovi',
            trust: 'Masér se zdravotnickým vzděláním'
        },
      about: {
    title: 'O terapeutovi',
    text: 'Igor je profesionalni maser s lekarskym vzdelanim a vice nez 7 lety praxe. Ma oficialni certifikaty a hluboke znalosti anatomie a fyziologie, coz mu umoznuje pracovat s telem kazdeho klienta bezpecne a efektivne. Ke kazdemu klientovi pristupuje individualne, peclive nasloucha potrebam a voli optimalni techniku pro dosazeni nejlepsich vysledku - ulevu od bolesti, uvolneni napeti nebo regeneraci po zatezi. Jako odbornik se neustale zdokonaluje a jako clovek je otevreny, pratelsky a vzdy pripraven pomoci. Vyhledavaji ho lide, kteri si ceni profesionality, duvery a pece o zdravi.'
},
        services: {
            title: 'Druhy masáží',
            items: [
                {
                    title: 'Léčebná masáž',
                    description: 'Profesionální léčba a zotavení po úrazech.',
                    image: 'images/massage-rehab.jpg'
                },
                {
                    title: 'Klasická masáž',
                    description: 'Uvolnění napětí, zlepšení krevního oběhu a celková relaxace organismu.',
                    image: 'images/massage-classic.jpg'
                },
                {
                    title: 'Sportovní masáž',
                    description: 'Příprava na soutěže, zotavení po tréninku a prevence zranění.',
                    image: 'images/gallery-5.jpg'
                },
                {
                    title: 'Relaxační masáž',
                    description: 'Úplná relaxace, zmírnění stresu a obnovení energie organismu.',
                    image: 'images/massage-relax.jpg'
                },
                {
                    title: 'Anticelulitidní masáž',
                    description: 'Korekce postavy, zlepšení stavu pokožky a odstranění toxinů.',
                    image: 'images/massage-anti-cellulite.jpg'
                }
            ]
        },
        benefits: {
            title: 'Pro koho je masáž užitečná',
            items: [
                {
                    title: 'Lidé s celulitidou',
                    description: 'Efektivní boj s "pomerančovou kůží", zlepšení tonusu pokožky a lymfodrenáž.'
                },
                {
                    title: 'Lidé po úrazech',
                    description: 'Profesionální pomoc při obnově funkcí svalů a kloubů po poškození.'
                },
                {
                    title: 'Lidé s fyzicky náročnou prací',
                    description: 'Úleva od svalové únavy, prevence nemocí z povolání a obnova sil.'
                },
                {
                    title: 'Lidé se sedavým zaměstnáním',
                    description: 'Prevence bolestí zad a krku, zlepšení držení těla a krevního oběhu.'
                }
            ]
        },
        gallery: {
            title: 'Fotografie z výjezdů',
            description: 'Klikněte na fotografii pro detailní zobrazení'
        },
        reviews: {
    title: 'Recenze klientů',
    items: [
        {
            text: 'Nejlepší masáž, jakou jsem kdy zažila. Skutečný profesionál!',
            author: 'Marie K.'
        },
        {
            text: 'Děkuji za skvělý servis a kvalitu. Určitě se vrátím!',
            author: 'Petr V.'
        },
        {
            text: 'Doporučuji všem přátelům. Výsledek je úžasný!',
            author: 'Anna L.'
        }
    ]
},
        contact: {
    title: 'Kontakt'
},
        faq: {
            title: 'Časté dotazy',
            items: [
                {
                    question: 'Jak se připravit na masáž?',
                    answer: 'Doporučuje se nejíst hodinu před masáží a osprchovat se. Pokud máte chronická onemocnění, informujte o tom předem.'
                },
                {
                    question: 'Existují kontraindikace?',
                    answer: 'Ano, akutní zánětlivé procesy, vysoká horečka, kožní onemocnění, onkologie. Před objednáním se poraďte.'
                },
                {
                    question: 'Jak dlouho trvá sezení?',
                    answer: 'V závislosti na typu masáže může sezení trvat od 45 do 90 minut.'
                },
                {
                    question: 'Kde přijímáte?',
                    answer: 'Pracuji s výjezdem ke klientovi po Praze a také přijímám v ordinaci (adresa bude upřesněna při objednání).'
                },
                {
                    question: 'Jakou kosmetiku používáte?',
                    answer: 'Používají se pouze profesionální hypoalergenní oleje a krémy prémiové kvality.'
                },
                {
                    question: 'Jak často je třeba chodit na masáž?',
                    answer: 'Pro prevenci stačí 1-2krát týdně. Pro léčbu se kurz určuje individuálně.'
                }
            ]
        },
        cta: {
            text: 'Objednejte se dnes a získejte slevu 10%',
            button: 'Rezervovat slevu'
        },
        footer: {
            agreement: 'Smlouva o poskytování služeb',
            privacy: 'Zásady ochrany osobních údajů',
            refund: 'Zásady vrácení peněz',
            support: 'Emailová podpora',
            copyright: '© 2026 Massage Praha. Všechna práva vyhrazena.'
        },
        modal: {
            title: 'Objednání masáže',
            subtitle: 'Konzultace je zdarma — neváhejte',
            phoneLabel: 'Telefon',
            instagramLabel: 'Instagram',
            submit: 'Odeslat žádost',
            successTitle: 'Děkujeme!',
            successMessage: 'Čekejte na zpětnou vazbu',
            errorTitle: 'Chyba',
            errorMessage: 'Něco se pokazilo. Zkuste to prosím znovu nebo nám napište na sociálních sítích.'
        },
        sticky: {
            button: 'Rezervovat'
        }
    }
};

// Telegram Configuration

const INSTAGRAM_URL = 'https://www.instagram.com/massage_basalyha_praha?igsh=ZzB6cmd4Z2FuOXc2';

// State
let currentLanguage = localStorage.getItem('language') || 'ua';

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    renderContent();
    setupEventListeners();
    setupScrollEffects();
    initScrollAnimations();
});

// ============================================
// Language Management
// ============================================

function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    const reviews = content[currentLanguage].reviews.items;

    grid.innerHTML = reviews.map(review => `
        <div class="review-card animate-on-scroll">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">– ${review.author}</p>
        </div>
    `).join('');
}
function initLanguage() {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const text = getNestedValue(content[lang], key);
        if (text) {
            el.textContent = text;
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

// ============================================
// Content Rendering
// ============================================

function renderContent() {
    renderServices();
    renderBenefits();
    renderFAQ();
    renderReviews();
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    const services = content[currentLanguage].services.items;
    
    grid.innerHTML = services.map(service => `
        <div class="service-card">
            <img src="${service.image}" alt="${service.title}" class="service-image">
            <div class="service-content">
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            </div>
        </div>
    `).join('');
}

function renderBenefits() {
    const grid = document.getElementById('benefitsGrid');
    const benefits = content[currentLanguage].benefits.items;
    
    grid.innerHTML = benefits.map(benefit => `
        <div class="benefit-card">
            <h3 class="benefit-title">${benefit.title}</h3>
            <p class="benefit-description">${benefit.description}</p>
        </div>
    `).join('');
}

function renderFAQ() {
    const list = document.getElementById('faqList');
    const faqs = content[currentLanguage].faq.items;
    
    list.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" data-index="${index}">
            <div class="faq-question">
                <span>${faq.question}</span>
                <span class="faq-toggle">▼</span>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
    
    // Add click handlers to FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// ============================================
// Event Listeners
// ============================================
function setupEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
            renderContent();
            initScrollAnimations();
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Modal controls
    const modal = document.getElementById('bookingModal');
    const bookingBtn = document.getElementById('bookingBtn');
    const heroBtn = document.getElementById('heroBtn');
    const ctaBtn = document.getElementById('ctaBtn');
    const stickyCTA = document.getElementById('stickyCTA');
    const modalClose = document.getElementById('modalClose');
    const bookingForm = document.getElementById('bookingForm');

    [bookingBtn, heroBtn, ctaBtn, stickyCTA].forEach(btn => {
        btn?.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Form submission
    bookingForm?.addEventListener('submit', handleFormSubmit);
}
// ============================================
// Form Handling
// ============================================
async function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !phone) {
    alert('Введіть імʼя та телефон');
    return;
  }

  const url = 'https://script.google.com/macros/s/AKfycbwd334R8s_mF8zqUpOiK_XssYPUv7XggYAp7plZhgIoLKYI6YzlFWua7v48rkO1fLEOXA/exec';

  try {
    const response = await fetch(
      `${url}?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}`,
      { method: 'GET', cache: 'no-store' }
    );

    const text = await response.text();
    console.log('SCRIPT RESPONSE:', text);

    if (text.trim() !== 'OK') {
      throw new Error(text);
    }

    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';

  } catch (err) {
    console.error(err);
    document.getElementById('errorMessage').style.display = 'block';
  }
}
// ============================================
// Scroll Effects
// ============================================

function setupScrollEffects() {
    const stickyCTA = document.getElementById('stickyCTA');
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        // Show sticky CTA after hero section
        if (window.scrollY > hero.offsetHeight) {
            stickyCTA.classList.add('visible');
        } else {
            stickyCTA.classList.remove('visible');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
// ============================================
// Scroll animation
// ============================================

let scrollObserver;

function initScrollAnimations() {
    if (scrollObserver) scrollObserver.disconnect();

    const elements = document.querySelectorAll('.animate-on-scroll');

    scrollObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach(el => scrollObserver.observe(el));
}
