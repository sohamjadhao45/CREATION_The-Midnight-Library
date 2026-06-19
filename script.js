/* =====================================================================
   THE MIDNIGHT LIBRARY ENGINE (ULTIMATE PRO EDITION)
   Linter-Safe | Interactive Click Wax Seal | 11:11 Easter Egg | Feedback
   ===================================================================== */

const twStates = new WeakMap();

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* ======================================================
       📜 POEM DATABASE (AUTO-BUILD)
       ====================================================== */
    const POEM_DATABASE = [
        {
            chapterLabel: "CHAPTER I", spineLabel: "ANCHOR - CH.I", title: "ANCHOR", subtitle: "A TRIBUTE TO MY FATHER", themeTag: "❤️ Family & Love", dateText: "A memory from 5 May, 2026", signature: "-- Soham Jadhao<br>Love You Pappa !!!!",
            text: `You're my truth, my life,\nmy beginning, my end.\nYou know my weaknesses and flaws,\nyet you're my buddy and my friend.\n\nThis relation is not only of blood,\nbut of emotions and linked hearts too.\nAmong all the bonds I've ever known,\nyou're a part of me, I'm a part of you.\n\nAs love has no age limit,\nthat's why my love for you stays true.\nYour morals and your way of seeing life\nhave taught me something new.\n\nWords are too few to describe you,\neven calamities fear facing you.\nYou're present in my every breath,\nand I know what you truly mean to me.`,
            whispers: [ { word: "friend", hidden: "mirror" }, { word: "blood", hidden: "soul" } ]
        },
        {
            chapterLabel: "CHAPTER II", spineLabel: "SPORTSMAN - CH.II", title: "SPORTSMAN<br>SPIRIT", subtitle: "THE SPIRIT OF EXCELLENCE", themeTag: "⚡ Motivation", dateText: "Written on 14 March 2026", signature: "— Soham Jadhao",
            text: `Ignite your fire.\nLearn from every downfall,\nBouncers will come and go,\nDon't fear the pavilion's call.\n\nNever get upset,\nFace every yorker,\nBuild your own present,\nYour ace will be your marker.\n\nSometimes a hundred,\nSometimes a duck,\nGive your best always,\nAnd leave the rest to luck.\n\nThe past is your best teacher,\nThe future, an unseen creature,\nSpread your wings in the present sky,\nEvery great score begins with a try.`,
            whispers: [ { word: "duck", hidden: "lesson" } ]
        }
    ];

    const UPCOMING_CHAPTER = { chapterNum: "III", title: "THE COSMOS WITHIN" };

    const globalState = { activeTheme: "dark", isAudioPlaying: false, vortexActive: false, secretClicks: 0, notesVisitCount: 0, secretPassword: "", hasTappedMoon: false, hasTypedWord: false, rainActive: false, visitorName: "Wanderer", elevenElevenTriggered: false, zenModeActive: false };

    const midnightThoughts = ["The moon has seen every version of you.", "Not every chapter deserves a sequel.", "Some memories glow brighter after they're gone.", "The hardest part of moving forward is not looking back.", "We bury our loudest screams in the quietest poetry."];
    const moonWords = ["silence", "poetry", "creation", "memories", "love", "solitude", "eternity"];
    const starCoords = [{top: 50, left: 20}, {top: 20, left: 50}, {top: 60, left: 80}, {top: 80, left: 40}, {top: 30, left: 85}, {top: 75, left: 15}];

    const audioPageTurn = document.getElementById("audio-page-turn");
    const audioRain = document.getElementById("audio-rain");
    const audioAmbient = document.getElementById("audio-ambient");

    buildLibrarySystem(); 
    initTimeGreeting();
    initClockAndAtmosphere(); 
    initUltimateUniverseBackground(); 
    initCosmicNavigation(); 
    initScrollProgressBar(); 
    initSecretKeyboardVault(); 
    initLedger();
    initDynamicShadows(); 
    initTimeCapsule(); 
    initPassport(); 
    initTouchRipple(); 
    init1111Wish(); 
    initZenMode();
    initFeedbackModal();

    let deferredPrompt;
    const installBtn = document.getElementById('installAppBtn');
    if (installBtn) {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installBtn.style.display = 'inline-block';
        });
        installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') console.log('App install ho gaya!');
                deferredPrompt = null;
                installBtn.style.display = 'none';
            }
        });
    }

    function initTimeGreeting() {
        const greetingEl = document.getElementById("time-greeting");
        if (!greetingEl) return;
        const hour = new Date().getHours();
        let greeting = "Welcome, Wanderer";
        if (hour >= 5 && hour < 12) greeting = "Good Morning, Wanderer";
        else if (hour >= 12 && hour < 17) greeting = "Good Afternoon, Wanderer";
        else if (hour >= 17 && hour < 21) greeting = "Good Evening, Wanderer";
        else greeting = "The night is quiet, perfect for reading.";
        greetingEl.innerText = greeting;
    }

    let zenScrollInterval;
    function initZenMode() {
        const zenBtn = document.getElementById("zen-mode-toggle");
        if (!zenBtn) return;
        zenBtn.addEventListener("click", () => {
            globalState.zenModeActive = !globalState.zenModeActive;
            if (globalState.zenModeActive) {
                zenBtn.classList.add("active-zen");
                zenBtn.innerText = "📜 Zen: ON";
                showToast("Zen Mode Activated. Read slowly...");
                zenScrollInterval = setInterval(() => window.scrollBy({ top: 1, left: 0, behavior: 'auto' }), 40);
            } else {
                zenBtn.classList.remove("active-zen");
                zenBtn.innerText = "📜 Zen Mode";
                clearInterval(zenScrollInterval);
                showToast("Zen Mode Deactivated.");
            }
        });
    }

    function initTouchRipple() {
        document.body.addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
            const ripple = document.createElement('div');
            ripple.className = 'touch-ripple';
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 800);
        });
    }

    function initPassport() {
        const input = document.getElementById("visitor-name");
        const enterBtn = document.getElementById("enter-library-btn");
        const savedName = localStorage.getItem("midnightVisitor");
        if(savedName && input) input.value = savedName;

        if(enterBtn) {
            enterBtn.addEventListener("click", () => {
                let name = input ? input.value.trim() : "";
                if(!name) name = "Wanderer";
                localStorage.setItem("midnightVisitor", name);
                globalState.visitorName = name;
                
                const greeting = document.getElementById("vault-greeting");
                if(greeting) greeting.innerHTML = `Ah, <span style="color:var(--gold);">${name}</span>... welcome to the Secret Vault.`;

                const letterTitle = document.getElementById("reader-letter-title");
                if(letterTitle) letterTitle.innerText = `A LETTER TO ${name.toUpperCase()}`;

                document.getElementById("intro-screen").classList.add("fade-out");
                
                if(audioAmbient && !globalState.isAudioPlaying) {
                    audioAmbient.volume = 0.2;
                    audioAmbient.play().catch(e => console.log("Audio play blocked"));
                    globalState.isAudioPlaying = true;
                }
            });
        }
    }

    function buildLibrarySystem() {
        const nav = document.getElementById("library-nav"); 
        const bookshelf = document.getElementById("dynamic-bookshelf"); 
        const starMap = document.getElementById("star-map"); 
        const authorScripting = document.getElementById("author-scripting-status"); 
        const secretPage = document.getElementById("page-secret");
        
        if(!nav || !bookshelf || !secretPage) return;

        nav.innerHTML = `<button class="nav-link active-nav" data-target="page1">Library Entrance</button>`; 
        bookshelf.innerHTML = ""; 
        let prevPageId = "page1";

        POEM_DATABASE.forEach((poem, i) => {
            const pageId = `poem-page-${i + 1}`; 
            const nextPageId = i < POEM_DATABASE.length - 1 ? `poem-page-${i + 2}` : `page-fragments`;
            nav.innerHTML += `<button class="nav-link" data-target="${pageId}">${poem.chapterLabel}</button>`;
            const cleanTitle = poem.title.replace('<br>', ' '); 
            const safeText = poem.text.replace(/\n/g, '\\n');

            const sectionHtml = `
            <section id="${pageId}" class="page" data-poem-index="${i}">
              <div class="top-deco">✧ ─ ❦ ─ ✧</div>
              <span class="chapter-badge">${poem.chapterLabel}</span>
              <div class="heading-wrapper"><h2 class="page1-heading moon-glow">${poem.title}</h2></div>
              <p class="poem-subtitle">${poem.subtitle}</p>
              <div class="meta-strip" style="margin: 15px 0;">
                <span class="mood-tag tag-motivation">${poem.themeTag}</span>
                <span class="read-time">⏱️ 1 Min Read</span>
                <button class="bookmark-btn btn-utility" data-poem="${poem.spineLabel}" style="border: none; background: transparent; padding: 0 !important; cursor: pointer; color: var(--gold);">🔖 Bookmark</button>
              </div>
              <div class="poetry-box antique-parchment dynamic-shadow" id="card-${pageId}">
                <div class="wax-seal-wrapper seal-clickable" data-target-text="text-${pageId}">
                    <div class="wax-seal" title="Click to break seal">
                        <div class="seal-ring"></div>
                        <span class="seal-letter">SJ</span>
                    </div>
                </div>
                
                <div class="poem-text-container" id="text-${pageId}" style="opacity: 0; pointer-events: none; transition: opacity 1.5s ease;">
                    <p class="royal-poem-text typewriter-poem" data-lines="${safeText}"></p><br>
                    <p class="poem-date">${poem.dateText}</p>
                    <span class="poem-greatvibes sign-animate">${poem.signature}</span>
                    <div class="poem-interactions mt-20">
                        <button class="resonate-btn" data-poem="${cleanTitle}">⭐ Resonated With Me</button>
                        <button class="listen-btn" title="Future Feature">🎙️ Listen: SOON</button>
                    </div>
                    
                    <div class="visitor-journal mt-20" style="max-width: 100%; border-top: 1px dashed rgba(191,164,111,0.3); padding-top: 15px;">
                       <input type="text" placeholder="Write something memorable..." class="journal-input ledger-input inline-poem-feedback" style="z-index: 10; position: relative;">
                       <button class="journal-submit ledger-submit" style="z-index: 10; position: relative;">🖋️</button>
                    </div>
                </div>
              </div>

              <div class="button-row" style="margin-top: 15px;">
                <button class="btn-utility download-poem-btn" data-target="card-${pageId}" data-poem-index="${i}">📸 Save As A Memory</button>
                <button class="btn-utility share-poem-btn" data-poem-title="${cleanTitle}">🔗 Share Verse</button>
              </div>
              <div class="button-row mt-20"><button class="btn-outline trigger-nav" data-target="${prevPageId}">❮ Previous</button><button class="btn-solid trigger-nav" data-target="${nextPageId}">Next ❯</button></div>
            </section>`;
            secretPage.insertAdjacentHTML('beforebegin', sectionHtml);
            bookshelf.innerHTML += `<div class="book-spine ${i % 2 !== 0 ? 'spine-gold' : ''} trigger-nav" data-target="${pageId}"><div class="spine-text">${poem.spineLabel}</div></div>`;
            prevPageId = pageId;
        });

        nav.innerHTML += `<button class="nav-link" data-target="page-fragments">Notes Room</button><button class="nav-link" data-target="page-archive">Ancient Shelf</button><button class="nav-link" data-target="page-about">Author's Chamber</button>`;
        
        const btnExplore = document.getElementById("btn-explore");
        if(btnExplore) btnExplore.setAttribute("data-target", "poem-page-1"); 
        
        const btnFragPrev = document.getElementById("btn-frag-prev");
        if(btnFragPrev) btnFragPrev.setAttribute("data-target", `poem-page-${POEM_DATABASE.length}`);
        
        bookshelf.innerHTML += `<div class="book-spine spine-locked interactive-locked" title="Some stories are still being lived."><div class="spine-text">${UPCOMING_CHAPTER.title}</div><div class="spine-subtext" style="position: absolute; bottom: 10px; width: 100%; text-align: center; font-size: 8px; color: rgba(255,255,255,0.4);">UNAVAILABLE</div></div>`;

        if(starMap) {
            let svgLines = ''; let starsHtml = '';
            for (let i = 0; i < POEM_DATABASE.length; i++) {
                let p1 = starCoords[i]; starsHtml += `<div class="star-node active-star trigger-nav" data-target="poem-page-${i+1}" title="${POEM_DATABASE[i].dateText} - ${POEM_DATABASE[i].title.replace('<br>',' ')}" style="top: ${p1.top}%; left: ${p1.left}%;"></div>`;
                if (i < POEM_DATABASE.length - 1) { let p2 = starCoords[i+1]; svgLines += `<line x1="${p1.left}%" y1="${p1.top}%" x2="${p2.left}%" y2="${p2.top}%" stroke="rgba(191,164,111,0.4)" stroke-width="1" stroke-dasharray="4" />`; }
            }
            if (POEM_DATABASE.length > 0) {
                let lastStar = starCoords[POEM_DATABASE.length - 1]; let lockedStar = starCoords[POEM_DATABASE.length];
                svgLines += `<line x1="${lastStar.left}%" y1="${lastStar.top}%" x2="${lockedStar.left}%" y2="${lockedStar.top}%" stroke="rgba(191,164,111,0.1)" stroke-width="1" stroke-dasharray="4" />`;
                starsHtml += `<div class="star-node pulse-star interactive-locked" title="Awaiting Completion..." style="top: ${lockedStar.top}%; left: ${lockedStar.left}%;"></div>`;
            }
            starMap.innerHTML = `<svg width="100%" height="100%" style="position: absolute; top:0; left:0; z-index: 1;">${svgLines}</svg>${starsHtml}`;
        }
        if(authorScripting) authorScripting.innerHTML = `<span class="pulse-dot"></span><strong>Currently Scripting:</strong> Chapter ${UPCOMING_CHAPTER.chapterNum}: ${UPCOMING_CHAPTER.title}`;
    }

    const thoughtBtn = document.getElementById("reveal-thought-btn");
    const thoughtDisplay = document.getElementById("midnight-thought-display");
    if(thoughtBtn && thoughtDisplay) {
        thoughtBtn.addEventListener("click", () => {
            thoughtDisplay.style.opacity = 0;
            setTimeout(() => { thoughtDisplay.innerText = `"${midnightThoughts[Math.floor(Math.random() * midnightThoughts.length)]}"`; thoughtDisplay.style.opacity = 0.8; }, 300);
        });
    }

    function initDynamicShadows() {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20; 
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            document.documentElement.style.setProperty('--shadow-x', `${x}px`); 
            document.documentElement.style.setProperty('--shadow-y', `${15 + y}px`);
        });
    }

    function initTimeCapsule() {
        const capsule = document.getElementById("time-capsule-item"); 
        const status = document.getElementById("capsule-status");
        if(!capsule || !status) return;
        if (new Date() >= new Date("January 1, 2027 00:00:00")) { 
            status.innerHTML = `<span style="color:var(--gold);">Unlocked. "To the me who survived, thank you."</span>`; 
        } else { 
            status.innerText = "A letter to the future. Sealed until January 1, 2027."; 
        }
    }

    function initScrollProgressBar() { 
        window.addEventListener("scroll", () => { 
            let st = window.scrollY || document.documentElement.scrollTop; 
            let sh = document.documentElement.scrollHeight - window.innerHeight; 
            const progress = document.getElementById("reading-progress");
            if(progress) progress.style.width = sh > 0 ? ((st / sh) * 100) + "%" : "0%"; 
        }); 
    }

    function checkUltimateVault() {
        const condMoon = document.getElementById("cond-moon"); 
        const condNotes = document.getElementById("cond-notes"); 
        const condWord = document.getElementById("cond-word"); 
        if(!condMoon) return;

        condMoon.innerText = globalState.hasTappedMoon ? "✅ Moon Tapped (3/3)" : `❌ Moon Tapped (${globalState.secretClicks}/3)`;
        condNotes.innerText = globalState.notesVisitCount >= 5 ? "✅ Notes Room Visits (5/5)" : `❌ Notes Room Visits (${globalState.notesVisitCount}/5)`;
        if(globalState.hasTypedWord) condWord.innerText = "✅ Secret Word Typed";

        if(globalState.hasTappedMoon && globalState.notesVisitCount >= 5 && globalState.hasTypedWord) {
            document.getElementById("quest-conditions").style.display = "none"; 
            document.getElementById("hidden-poem-container").style.display = "block"; 
            document.getElementById("ultimate-secret-log").querySelector("strong").innerText = "🔓 Vault Log #003 (Status: Unlocked)";
        }
    }

    function initSecretKeyboardVault() {
        const randomIndex = Math.floor(Math.random() * moonWords.length);
        globalState.secretPassword = moonWords[randomIndex];
        const wordDisplay = document.getElementById("secret-word");
        if(wordDisplay) wordDisplay.innerText = globalState.secretPassword;

        let inputBuffer = "";
        window.addEventListener("keydown", (e) => {
            if (e.key.length === 1 && e.key.match(/[a-z]/i)) inputBuffer += e.key.toLowerCase();
            if (inputBuffer.endsWith("rain") && !globalState.rainActive) toggleRain();
            
            if (inputBuffer.length > globalState.secretPassword.length) {
                inputBuffer = inputBuffer.substring(inputBuffer.length - globalState.secretPassword.length);
            }
            if (inputBuffer === globalState.secretPassword) {
                globalState.hasTypedWord = true; 
                checkUltimateVault(); 
                showToast("👁️ The Vault Opens...");
                const trigger = document.getElementById('secret-vault-trigger');
                if(trigger) trigger.click();
                inputBuffer = ""; 
            }
        });
    }

    function initLedger() {
        const ledgerList = document.getElementById("ledger-list"); 
        let entries = JSON.parse(localStorage.getItem('midnightLedger') || '[]');
        
        function renderLedger() {
            if(!ledgerList) return; 
            ledgerList.innerHTML = "";
            if(entries.length === 0) { 
                ledgerList.innerHTML = `<p style="margin-bottom: 8px; font-style: italic; opacity:0.5;">No wandering souls have left a mark yet...</p>`; 
            } else { 
                entries.forEach(e => { 
                    ledgerList.innerHTML += `<p style="margin-bottom: 8px; font-style: italic;">"${e.text}" <span style="font-size:11px; opacity:0.5;">— ${e.date}</span></p>`; 
                }); 
            }
        }
        renderLedger();

        document.body.addEventListener('click', (e) => {
            if(e.target.classList.contains('ledger-submit')) {
                const parentDiv = e.target.closest('.visitor-journal');
                const input = parentDiv.querySelector('.ledger-input');
                if(input && input.value.trim() !== "") {
                    entries.unshift({ text: input.value.trim(), date: new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' }) });
                    if(entries.length > 10) entries.pop(); 
                    localStorage.setItem('midnightLedger', JSON.stringify(entries)); 
                    input.value = ""; 
                    showToast("🖋️ Your silence has been recorded."); 
                    renderLedger();
                }
            }
        });
    }

    function toggleRain() {
        globalState.rainActive = !globalState.rainActive; 
        const rCanvas = document.getElementById("rain-canvas");
        if(!rCanvas) return;

        if(globalState.rainActive) { 
            rCanvas.classList.add("raining"); 
            startRainVisuals(); 
            showToast("🌧️ The sky begins to weep..."); 
            if(audioRain) { audioRain.volume = 0.5; audioRain.play(); }
        } else { 
            rCanvas.classList.remove("raining"); 
            showToast("🌤️ The storm has passed."); 
            if(audioRain) { audioRain.pause(); }
        }
    }

    function init1111Wish() {
        const modal = document.getElementById("wish-modal");
        const submitBtn = document.getElementById("submit-wish-btn");
        const input = document.getElementById("wish-input");
        
        setInterval(() => {
            const now = new Date();
            if (now.getHours() === 23 && now.getMinutes() === 11 && !globalState.elevenElevenTriggered) {
                globalState.elevenElevenTriggered = true;
                if(modal) modal.style.display = 'flex';
                showToast("✨ The universe is listening...");
            }
        }, 30000); 

        if(submitBtn && modal && input) {
            submitBtn.addEventListener('click', () => {
                if(input.value.trim() !== '') {
                    modal.style.display = 'none';
                    showToast("🌠 Your wish has been cast into the cosmos.");
                } else {
                    showToast("Whisper something first.");
                }
            });
        }
    }

    function initClockAndAtmosphere() {
        setInterval(() => {
            const dateSpan = document.getElementById('journal-date');
            if(dateSpan) {
                const now = new Date();
                dateSpan.innerText = `Journal Entry: ${now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
            }
        }, 60000);
    }

    function initCosmicNavigation() {
        document.body.addEventListener('click', (e) => {
            
            // --- SEAL BREAK LOGIC ---
            const sealWrapper = e.target.closest('.seal-clickable');
            if (sealWrapper && !sealWrapper.classList.contains('broken')) {
                sealWrapper.classList.add('broken');
                
                const targetTextId = sealWrapper.getAttribute('data-target-text');
                const textContainer = document.getElementById(targetTextId);
                
                if (textContainer) {
                    textContainer.style.opacity = '1';
                    textContainer.style.pointerEvents = 'auto';
                    
                    const typewriterEl = textContainer.querySelector('.typewriter-poem');
                    if (typewriterEl) {
                        setTimeout(() => initTypewriterEngine(typewriterEl), 600); 
                    }
                }
                return; 
            }

            // --- NAVIGATION & RESUMING ANIMATION ---
            if(e.target.classList.contains('trigger-nav')) {
                if(audioPageTurn) {
                    audioPageTurn.currentTime = 0;
                    audioPageTurn.play().catch(()=>{});
                }
                const target = e.target.getAttribute('data-target');
                document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
                
                const newPage = document.getElementById(target);
                if(newPage) {
                    newPage.classList.add('active');
                    
                    // Agar seal pehle se tooti hai aur animation ruki hai toh wapas resume karega!
                    const pageSealWrapper = newPage.querySelector('.seal-clickable');
                    if (!pageSealWrapper || pageSealWrapper.classList.contains('broken')) {
                        const typewriters = newPage.querySelectorAll('.typewriter-poem');
                        typewriters.forEach(el => {
                            setTimeout(() => initTypewriterEngine(el), 100);
                        });
                    }
                }
                
                document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active-nav'));
                const newActiveNav = document.querySelector(`.nav-link[data-target="${target}"]`);
                if(newActiveNav) newActiveNav.classList.add('active-nav');
                
                if(target === "page-fragments") {
                    globalState.notesVisitCount++;
                    checkUltimateVault();
                }
            }
            
            // General Buttons
            if(e.target.classList.contains('resonate-btn')) showToast(`❤️ "${e.target.getAttribute('data-poem')}" added to your saved echoes.`);
            if(e.target.classList.contains('bookmark-btn')) showToast(`🔖 Bookmark placed.`);
            if(e.target.classList.contains('share-poem-btn')) {
                const title = e.target.getAttribute('data-poem-title');
                if (navigator.share) navigator.share({ title: title, url: window.location.href });
                else { navigator.clipboard.writeText(window.location.href); showToast("🔗 Link copied to clipboard!"); }
            }

            if(e.target.id === 'rain-toggle') toggleRain();
            if(e.target.id === 'moon-phase') {
                globalState.secretClicks++;
                if(globalState.secretClicks >= 3 && !globalState.hasTappedMoon) {
                    globalState.hasTappedMoon = true;
                    showToast("🌙 The moon acknowledges your presence.");
                    checkUltimateVault();
                }
            }
            if(e.target.id === 'close-drawer' || e.target.id === 'close-fav-drawer') document.querySelectorAll('.drawer').forEach(d => d.style.right = '-350px');
            if(e.target.id === 'open-bookmarks-btn') { const d = document.getElementById('bookmarks-drawer'); if(d) d.style.right = '0'; }
            if(e.target.id === 'open-fav-btn') { const d = document.getElementById('favourites-drawer'); if(d) d.style.right = '0'; }
            if(e.target.id === 'theme-toggle') {
                const html = document.documentElement;
                if(globalState.activeTheme === "dark") { html.setAttribute('data-theme', 'light'); globalState.activeTheme = "light"; e.target.innerText = "☀️ Day"; }
                else { html.setAttribute('data-theme', 'dark'); globalState.activeTheme = "dark"; e.target.innerText = "🌙 Night"; }
            }
            if(e.target.id === 'reading-mode-toggle') {
                document.body.classList.toggle('focus-mode');
                const exitBtn = document.getElementById('exit-focus-btn');
                if(document.body.classList.contains('focus-mode')) { if(exitBtn) exitBtn.style.display = 'block'; showToast("📖 Focus Mode activated."); }
            }
            if(e.target.id === 'exit-focus-btn') { document.body.classList.remove('focus-mode'); e.target.style.display = 'none'; }
        });
    }

    // --- FLAWLESS TYPEWRITER ENGINE (Resume Fix) ---
    function initTypewriterEngine(el) {
        if (!twStates.has(el)) {
            twStates.set(el, { lineIndex: 0, charIndex: 0, outHtml: "", status: "unstarted" });
            el.innerHTML = "";
        }
        let state = twStates.get(el);

        const text = el.getAttribute("data-lines");
        if (!text) return;
        const lines = text.split('\\n');
        const signEl = el.closest('.poem-text-container')?.querySelector(".sign-animate");

        if (state.status === "finished") { 
            if(signEl) { signEl.style.width = "100%"; signEl.style.borderColor = "transparent"; signEl.classList.add("show-instantly"); }
            return; 
        }
        if (state.status === "typing") return; 

        state.status = "typing"; 
        el.classList.add("is-typing"); 

        function typeWriter() {
            if (!el.closest('.page').classList.contains("active")) { 
                state.status = "paused"; 
                el.classList.remove("is-typing"); 
                return; 
            }
            if (state.lineIndex < lines.length) {
                let currentLine = lines[state.lineIndex];
                if (currentLine === "") {
                    state.outHtml += "<br><br>"; 
                    el.innerHTML = state.outHtml; 
                    state.lineIndex++; 
                    state.charIndex = 0;
                    setTimeout(typeWriter, 200); return;
                }
                if (state.charIndex === 0 && state.lineIndex === 0) {
                    let char = currentLine.charAt(0); 
                    state.outHtml += `<span class="drop-cap-antique">${char}</span>`; 
                    el.innerHTML = state.outHtml; 
                    state.charIndex++;
                    setTimeout(typeWriter, 40);
                } else if (state.charIndex < currentLine.length) {
                    let isFirstChar = (state.charIndex === 0 && state.lineIndex === 0);
                    el.innerHTML = state.outHtml + currentLine.substring(isFirstChar ? 1 : 0, state.charIndex + 1); 
                    state.charIndex++;
                    setTimeout(typeWriter, 35); 
                } else {
                    state.outHtml = el.innerHTML + "<br>"; 
                    el.innerHTML = state.outHtml; 
                    state.lineIndex++; 
                    state.charIndex = 0;
                    setTimeout(typeWriter, 400); 
                }
            } else { 
                state.status = "finished"; 
                el.classList.remove("is-typing"); 
                if(signEl) { signEl.style.width = "100%"; signEl.style.borderColor = "transparent"; signEl.classList.add("show-instantly"); }
            }
        }
        typeWriter();
    }

    let drops = [];
    function startRainVisuals() {
        const canvas = document.getElementById("rain-canvas");
        if(!canvas) return;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if(drops.length === 0) {
            for(let i=0; i<100; i++){
                drops.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, l: Math.random()*1 + 10, v: Math.random()*2 + 10 });
            }
        }

        function drawRain() {
            if(!globalState.rainActive) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(174,194,224,0.5)';
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            for(let i=0; i<drops.length; i++) {
                let d = drops[i];
                ctx.beginPath();
                ctx.moveTo(d.x, d.y);
                ctx.lineTo(d.x, d.y + d.l);
                ctx.stroke();
                d.y += d.v;
                if(d.y > canvas.height){ d.y = 0; d.x = Math.random() * canvas.width; }
            }
            requestAnimationFrame(drawRain);
        }
        drawRain();
    }

    function initUltimateUniverseBackground() {
        const canvas = document.getElementById("universe");
        if(!canvas) return;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = [];
        for (let i = 0; i < 150; i++) stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5, opacity: Math.random() });

        function drawUniverse() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
                ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
                s.opacity += (Math.random() - 0.5) * 0.05;
                if(s.opacity < 0) s.opacity = 0; if(s.opacity > 1) s.opacity = 1;
            }
            requestAnimationFrame(drawUniverse);
        }
        drawUniverse();
    }

    function showToast(msg) {
        const t = document.createElement('div');
        t.className = 'toast'; 
        t.innerText = msg;
        const container = document.getElementById('toast-container');
        if(container) { container.appendChild(t); setTimeout(() => t.remove(), 3000); }
    }

    function initFeedbackModal() {
        const openBtn = document.getElementById('open-feedback-btn');
        const closeBtn = document.getElementById('close-feedback-btn');
        const submitBtn = document.getElementById('submit-feedback-btn');
        const modal = document.getElementById('feedback-modal');
        const input = document.getElementById('feedback-input');

        if(openBtn && modal) openBtn.addEventListener('click', () => modal.style.display = 'flex');
        if(closeBtn && modal) closeBtn.addEventListener('click', () => modal.style.display = 'none');
        if(submitBtn && modal && input) {
            submitBtn.addEventListener('click', () => {
                if(input.value.trim() !== '') { alert("Your words have been left in the library. Thank you."); modal.style.display = 'none'; input.value = ''; }
                else alert("Please write something before sending.");
            });
        }
    }
});
