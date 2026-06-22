/* =====================================================================
   THE MIDNIGHT LIBRARY ENGINE (THE HOSTEL FAREWELL EDITION - FIXED)
   Strict JSON Fetch | Zen Mode Mobile Fix | Global Gate Opener
===================================================================== */

// 🔴 FIX 2: Commented out the Aggressive Live Network Injector. 
// (Isse production website mein memory save hogi aur offline caching kaam karegi)
/*
if ('serviceWorker' in navigator) { 
    navigator.serviceWorker.getRegistrations().then(function(registrations) { 
        for(let registration of registrations) { 
            registration.unregister(); 
        } 
    });
}
*/

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    let POEM_DATABASE = [];
    const UPCOMING_CHAPTER = { chapterNum: "IV", title: "THE UNSEEN REALM" };
    window.twMasterState = {};
    const globalState = { activeTheme: "dark", isAudioPlaying: false, vortexActive: false, secretClicks: 0, notesVisitCount: 0, secretPassword: "silence", hasTappedMoon: false, hasTypedWord: false, rainActive: false, visitorName: "Wanderer", elevenElevenTriggered: false, zenModeActive: false };

    const quoteDatabase = ['"Every silence contains a poem."', '"The moon remembers what we choose to forget."', '"A library is a hospital for the mind."'];
    const moonWords = ["silence", "poetry", "creation", "memories", "love", "solitude", "eternity"];
    const midnightThoughts = ["The moon has seen every version of you.", "Not every chapter deserves a sequel.", "Some memories glow brighter after they're gone."];
    const notesCombos = [
        ["The hardest goodbyes are the ones that happen quietly.", "Some people become memories before they leave.", "Happiness often arrives disguised as ordinary moments."],
        ["Words are the shadows of deep hidden emotions.", "The moon remembers everything we choose to forget.", "Time is a silent thief, taking only what we love."]
    ];
    const starCoords = [{top: 50, left: 20}, {top: 20, left: 50}, {top: 60, left: 80}, {top: 80, left: 40}, {top: 30, left: 85}, {top: 75, left: 15}];

    const audioPageTurn = document.getElementById("audio-page-turn");
    const audioRain = document.getElementById("audio-rain");
    const audioAmbient = document.getElementById("audio-ambient");

    // Core Init Framework Calls - Isolated so one error doesn't break the whole app
    const coreEngines = [
        initClockAndAtmosphere, initUltimateUniverseBackground, initCosmicNavigation, 
        initScrollProgressBar, initLedger, initDynamicShadows, initBookmarksDrawer, 
        initFavouritesDrawer, initTimeCapsule, initTouchRipple, init1111Wish, initAuthorsDesk
    ];
    coreEngines.forEach(engine => { try { engine(); } catch (e) { console.error("Engine Blocked:", engine.name, e); } });

    /* ======================================================
       1. STRICT JSON FETCHING (No hardcoded Fallbacks)
       ====================================================== */
    async function loadLibraryData() {
        try {
            const response = await fetch('poems.json');
            if (!response.ok) throw new Error("JSON Fetch Aborted");
            const data = await response.json();
            POEM_DATABASE = Array.isArray(data) ? data : [];
        } catch (error) {
            console.error("Error loading poems.json:", error);
            showToast("⚠️ Archives failed to load. Check JSON connection.");
        }
        buildLibrarySystem();
        initLibraryFeatures();
        initSecretKeyboardVault();
    }
    loadLibraryData();

    function buildLibrarySystem() {
        const nav = document.getElementById("library-nav"); 
        const bookshelf = document.getElementById("dynamic-bookshelf"); 
        const starMap = document.getElementById("star-map"); 
        const authorScripting = document.getElementById("author-scripting-status"); 
        const secretPage = document.getElementById("page-secret");
        if(!nav || !bookshelf) return;

        nav.innerHTML = `<button class="nav-link active-nav" data-target="page1">Library Entrance</button>`;
        bookshelf.innerHTML = "";
        let prevPageId = "page1";

        POEM_DATABASE.forEach((poem, i) => {
            const pageId = `poem-page-${i + 1}`;
            const nextPageId = i < POEM_DATABASE.length - 1 ? `poem-page-${i + 2}` : `page-fragments`;
            nav.innerHTML += `<button class="nav-link" data-target="${pageId}">${poem.chapterLabel}</button>`;
            
            const cleanTitle = poem.title.replace(/<br>/g, ' ');
            const safeText = poem.text.replace(/\n/g, '\\n');

            const sectionHtml = `
            <section id="${pageId}" class="page" data-poem-index="${i}">
              <div class="top-deco">✧ ─ ❦ ─ ✧</div>
              <span class="chapter-badge" style="color:var(--gold); font-family:'Cinzel'; font-size:11px;">${poem.chapterLabel}</span>
              <div class="heading-wrapper"><h2 class="page1-heading moon-glow">${poem.title}</h2></div>
              <p class="poem-subtitle" style="font-family:'Cinzel'; font-size:12px; margin-bottom:10px; opacity:0.7;">${poem.subtitle}</p>
              <div class="meta-strip" style="margin: 15px 0;">
                <span class="mood-tag">${poem.themeTag}</span>
                <span class="read-time">⏱️ 1 Min Read</span>
                <button class="bookmark-btn btn-utility" data-poem="${poem.spineLabel}" style="border:none; background:transparent; color:var(--gold); cursor:pointer;">🔖 Bookmark</button>
              </div>
              <div class="poetry-box antique-parchment dynamic-shadow" id="card-${pageId}">
                <div class="wax-seal-wrapper"><div class="wax-seal"><div class="seal-ring"></div><span class="seal-letter">SJ</span></div></div>
                <div class="poem-text-container">
                    <p class="royal-poem-text typewriter-poem" data-lines="${safeText}"></p><br>
                    <p class="poem-date">${poem.dateText}</p>
                    <span class="poem-greatvibes sign-animate">${poem.signature}</span>
                </div>
                <div class="poem-interactions mt-20">
                    <button class="resonate-btn" data-poem="${cleanTitle}" style="z-index:100; position:relative;">⭐ RESONATED WITH ME</button>
                    <button class="listen-btn" style="z-index:100; position:relative;">🎙️ LISTEN TO THE POEM</button>
                </div>
              </div>
              <div class="button-row" style="margin-top: 15px;">
                <button class="btn-utility download-poem-btn" data-poem-index="${i}" style="z-index:100; position:relative;">📸 Save As A Memory</button>
                <button class="btn-utility share-poem-btn" data-poem-index="${i}" style="z-index:100; position:relative;">🔗 Share Verse</button>
              </div>
              <div class="button-row mt-20">
                <button class="btn-outline trigger-nav" data-target="${prevPageId}">❮ Previous</button>
                <button class="btn-solid trigger-nav" data-target="${nextPageId}">Next ❯</button>
              </div>
            </section>`;
            
            if(secretPage) secretPage.insertAdjacentHTML('beforebegin', sectionHtml);
            bookshelf.innerHTML += `<div class="book-spine ${i % 2 !== 0 ? 'spine-gold' : ''} trigger-nav" data-target="${pageId}"><div class="spine-text">${poem.spineLabel}</div></div>`;
            prevPageId = pageId;
        });

        nav.innerHTML += `<button class="nav-link" data-target="page-fragments">Notes Room</button><button class="nav-link" data-target="page-archive">Ancient Shelf</button><button class="nav-link" data-target="page-about">Author's Chamber</button>`;
        
        const exploreBtn = document.getElementById("btn-explore");
        if(exploreBtn) exploreBtn.setAttribute("data-target", "poem-page-1");
        
        const fragPrev = document.getElementById("btn-frag-prev");
        if(fragPrev) fragPrev.setAttribute("data-target", `poem-page-${POEM_DATABASE.length}`);
        
        bookshelf.innerHTML += `<div class="book-spine spine-locked interactive-locked" title="Awaiting active logs..."><div class="spine-text">${UPCOMING_CHAPTER.title}</div></div>`;

        if(starMap) {
            let svgLines = '', starsHtml = '';
            for (let i = 0; i < POEM_DATABASE.length; i++) {
                let p1 = starCoords[i % starCoords.length];
                starsHtml += `<div class="star-node active-star trigger-nav" data-target="poem-page-${i+1}" style="top: ${p1.top}%; left: ${p1.left}%;"></div>`;
                if (i < POEM_DATABASE.length - 1) {
                    let p2 = starCoords[(i+1)%starCoords.length];
                    svgLines += `<line x1="${p1.left}%" y1="${p1.top}%" x2="${p2.left}%" y2="${p2.top}%" stroke="rgba(191,164,111,0.4)" stroke-width="1" />`;
                }
            }
            starMap.innerHTML = `<svg width="100%" height="100%" style="position: absolute; top:0; left:0; z-index: 1;">${svgLines}</svg>${starsHtml}`;
        }
        if(authorScripting) authorScripting.innerHTML = `<strong>Currently Scripting:</strong> ${UPCOMING_CHAPTER.title}`;
    }

    /* ======================================================
       2. CANVAS HD DRAWING (HQ Share & Save - No Squish)
    ====================================================== */
    function createPoemCanvas(poem) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 1080;
        canvas.height = 1920;

        ctx.fillStyle = globalState.activeTheme === "dark" ? "#0b0b0f" : "#e8dcc7";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "#bfa46f";
        ctx.lineWidth = 4;

        // FIX 3: Adjusted width and height by subtracting 100 to keep a perfect 50px border on all sides.
        ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

        ctx.fillStyle = "#bfa46f"; ctx.textAlign = "center"; 
        ctx.font = "bold 60px Cinzel, serif"; 
        ctx.fillText("THE MIDNIGHT LIBRARY", canvas.width / 2, 180);
        
        ctx.font = "30px Urbanist, sans-serif"; 
        ctx.fillText("✦  ✦  ✦", canvas.width / 2, 240);
        
        ctx.font = "bold 80px Cinzel, serif"; 
        ctx.fillText(poem.title.replace(/<br>/g, ' '), canvas.width / 2, 400);
        
        ctx.font = "35px Cinzel, serif"; 
        ctx.fillStyle = globalState.activeTheme === "dark" ? "rgba(242,238,233,0.6)" : "rgba(59,34,16,0.6)"; 
        ctx.fillText(poem.subtitle, canvas.width / 2, 460);
        
        ctx.fillStyle = globalState.activeTheme === "dark" ? "#f2eee9" : "#3B2210"; 
        ctx.font = "40px Playfair Display, serif";
        
        let y = 600; 
        const lines = poem.text.replace(/\\n/g, '\n').split('\n');
        lines.forEach(line => { 
            if(line === "") { y += 40; } else { ctx.fillText(line.trim(), canvas.width / 2, y); y += 60; } 
        });
        
        ctx.fillStyle = "#bfa46f"; 
        ctx.font = "italic 60px Great Vibes, cursive"; 
        ctx.fillText(poem.signature.replace(/<br>/g, ' '), canvas.width / 2, canvas.height - 200);
        
        return canvas;
    }

    /* ======================================================
       3. GLOBAL CLICK LISTENERS (Gate Open, Save, Share, Audio, Favs)
       ====================================================== */
    document.body.addEventListener('click', (e) => {

        // GLOBAL GATE OPENER (100% Guaranteed fix with display:none)
        if(e.target.id === 'enter-library-btn') {
            const inputName = document.getElementById("visitor-name");
            let name = inputName && inputName.value.trim() !== "" ? inputName.value.trim() : "Wanderer";
            localStorage.setItem("midnightVisitor", name);
            globalState.visitorName = name;
            
            const greeting = document.getElementById("vault-greeting");
            if(greeting) greeting.innerHTML = `Ah, <span style="color:var(--gold);">${name}</span>... welcome to the Secret Vault.`;
            const letterTitle = document.getElementById("reader-letter-title");
            if(letterTitle) letterTitle.innerText = `A LETTER TO ${name.toUpperCase()}`;
            
            const introScreen = document.getElementById("intro-screen");
            if(introScreen) {
                // Smoothly fade out and then completely remove it from blocking the layout
                introScreen.style.transition = "opacity 0.8s ease";
                introScreen.style.opacity = "0";
                setTimeout(() => {
                    introScreen.style.display = "none";
                }, 800);
            }
            
            if(audioAmbient && !globalState.isAudioPlaying) {
                audioAmbient.volume = 0.2;
                audioAmbient.play().catch(()=>{});
                globalState.isAudioPlaying = true;
            }
            
            showToast("🏛️ Welcome, " + name);
        }

        // DOWNLOAD
        if(e.target.classList.contains('download-poem-btn')) {
            const pIdx = e.target.getAttribute('data-poem-index'); if(pIdx === null) return;
            const canvas = createPoemCanvas(POEM_DATABASE[pIdx]);
            const link = document.createElement("a"); link.download = `${POEM_DATABASE[pIdx].title.replace(/<br>/g,'')}_Memory.png`; 
            link.href = canvas.toDataURL("image/png"); link.click(); showToast("📸 Memory Saved to Gallery!");
        }
        // SHARE
        if(e.target.classList.contains('share-poem-btn')) {
            const pIdx = e.target.getAttribute('data-poem-index'); if(pIdx === null) return;
            const poem = POEM_DATABASE[pIdx];
            showToast("🔗 Generating verse card...");
            const canvas = createPoemCanvas(poem);
            canvas.toBlob((blob) => {
                if (!blob) return; const file = new File([blob], `Midnight_Verse.png`, { type: 'image/png' });
                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    navigator.share({ files: [file], title: poem.title.replace(/<br>/g, ' '), text: `A whisper from Soham's sanctuary... 🌙` }).then(() => showToast("✨ Shared successfully!")).catch(()=>{});
                } else {
                    const fallbackText = `📖 *${poem.title.replace(/<br>/g, ' ')}*\n\n"${poem.text.replace(/\\n/g, '\n')}"\n\nRead more at The Midnight Library: ${window.location.href}`;
                    navigator.share({ title: poem.title.replace(/<br>/g, ' '), text: fallbackText }).catch(() => { navigator.clipboard.writeText(fallbackText); showToast("🔗 Link copied to clipboard!"); });
                }
            }, 'image/png');
        }
        // AUDIO NARRATOR
        if(e.target.classList.contains('listen-btn')) {
            const btn = e.target;
            if (window.speechSynthesis.speaking) { window.speechSynthesis.cancel(); btn.innerHTML = "🎙️ LISTEN TO THE POEM"; showToast("🛑 Narration stopped."); return; }
            const page = btn.closest('.page'); const poemTextEl = page ? page.querySelector('.typewriter-poem') : null; if(!poemTextEl) return;
            let text = poemTextEl.innerText.replace(/🪶/g, ''); 
            let utterance = new SpeechSynthesisUtterance(text); utterance.rate = 0.85; utterance.pitch = 0.9; window.speechSynthesis.speak(utterance);
            btn.innerHTML = "🛑 STOP LISTENING"; showToast("🎙️ Speech synthesis online...");
            utterance.onend = () => { btn.innerHTML = "🎙️ LISTEN TO THE POEM"; };
        }
        // FAVOURITES & BOOKMARKS
        if(e.target.classList.contains('resonate-btn')) {
            const title = e.target.getAttribute('data-poem') || "A Beautiful Verse"; let favs = JSON.parse(localStorage.getItem('midnightFavs') || '[]');
            if (!favs.includes(title)) { favs.push(title); localStorage.setItem('midnightFavs', JSON.stringify(favs)); e.target.classList.add('active-fav'); showToast("❤️ Added to Favourites."); updateSavedDrawers(); } else { showToast("✨ Already in Favourites."); }
        }
        if(e.target.classList.contains('bookmark-btn')) {
            const title = e.target.getAttribute('data-poem') || "A Beautiful Verse"; let bookmarks = JSON.parse(localStorage.getItem('midnightBookmarks') || '[]');
            if (!bookmarks.includes(title)) { bookmarks.push(title); localStorage.setItem('midnightBookmarks', JSON.stringify(bookmarks)); e.target.innerText = "🔖 Saved"; showToast("🔖 Verse saved."); updateSavedDrawers(); } else { showToast("✨ Verse already remembered."); }
        }
    });

    /* ======================================================
       4. DRAWERS & NAVIGATION
       ====================================================== */
    function updateSavedDrawers() {
        const favList = document.getElementById("favourites-list"); const archList = document.getElementById("bookmarks-list");
        let favs = JSON.parse(localStorage.getItem('midnightFavs') || '[]'); let bookmarks = JSON.parse(localStorage.getItem('midnightBookmarks') || '[]');
        if (favList) { favList.innerHTML = favs.length === 0 ? `<p style="opacity: 0.5; font-style: italic;">No verses have resonated with you yet...</p>` : favs.map(fv => `<div class="bookmark-item" data-title="${fv}">❤️ ${fv}</div>`).join(''); }
        if (archList) { archList.innerHTML = bookmarks.length === 0 ? `<p style="opacity: 0.5; font-style: italic;">Your soul hasn't saved any verses yet...</p>` : bookmarks.map(bm => `<div class="bookmark-item" data-title="${bm}">📖 ${bm}</div>`).join(''); }
        document.querySelectorAll('.bookmark-item[data-title]').forEach(item => {
            item.addEventListener('click', (e) => {
                const targetTitle = e.target.getAttribute('data-title');
                const poemIndex = POEM_DATABASE.findIndex(p => p.spineLabel === targetTitle || p.title.replace(/<br>/g, ' ') === targetTitle);
                if(poemIndex !== -1) {
                    document.getElementById("favourites-drawer")?.classList.remove("open"); document.getElementById("bookmarks-drawer")?.classList.remove("open");
                    executePageFlip(`poem-page-${poemIndex + 1}`);
                }
            });
        });
    }

    function initBookmarksDrawer() {
        const favDrawer = document.getElementById("favourites-drawer"); const archDrawer = document.getElementById("bookmarks-drawer");
        document.getElementById("open-fav-btn")?.addEventListener("click", () => { updateSavedDrawers(); favDrawer?.classList.add("open"); });
        document.getElementById("close-fav-drawer")?.addEventListener("click", () => favDrawer?.classList.remove("open"));
        document.getElementById("open-bookmarks-btn")?.addEventListener("click", () => { updateSavedDrawers(); archDrawer?.classList.add("open"); });
        document.getElementById("close-drawer")?.addEventListener("click", () => archDrawer?.classList.remove("open"));
        updateSavedDrawers();
    }

    function initTouchRipple() { document.body.addEventListener('click', (e) => { if(e.target.tagName === 'BUTTON' || e.target.closest('.btn-icon')) return; const ripple = document.createElement('div'); ripple.className = 'touch-ripple'; ripple.style.left = e.clientX + 'px'; ripple.style.top = e.clientY + 'px'; document.body.appendChild(ripple); setTimeout(() => ripple.remove(), 800); }); }

    function initCosmicNavigation() {
        document.body.addEventListener("click", (e) => {
            if(e.target.classList.contains("trigger-nav") || e.target.classList.contains("nav-link") || e.target.classList.contains("star-node")) {
                const targetPageId = e.target.getAttribute("data-target"); 
                if(audioPageTurn) { audioPageTurn.currentTime = 0; audioPageTurn.play().catch(()=>{}); }
                executePageFlip(targetPageId);
            }
        });
    }

    function executePageFlip(targetPageId) {
        const currentActivePage = document.querySelector(".page.active"); 
        const destinationPage = document.getElementById(targetPageId);
        if(!destinationPage || currentActivePage === destinationPage) return;

        globalState.vortexActive = true; 
        document.body.style.overflowY = 'hidden';

        if(targetPageId === "page-fragments") {
            const currentCombo = notesCombos[globalState.notesVisitCount % notesCombos.length];
            const q1 = document.getElementById("combo-quote-1"); if(q1) q1.innerText = currentCombo[0];
            const q2 = document.getElementById("combo-quote-2"); if(q2) q2.innerText = currentCombo[1];
            const q3 = document.getElementById("combo-quote-3"); if(q3) q3.innerText = currentCombo[2];
            globalState.notesVisitCount++;
        }

        if(currentActivePage) {
            currentActivePage.classList.remove("active");
            destinationPage.classList.add("active");
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            globalState.vortexActive = false; 
            document.body.style.overflowY = 'auto';
            bindWaxSeals(destinationPage);
        } else { 
            destinationPage.classList.add("active"); 
            initTypewriterEngine(); 
        }
        document.querySelectorAll(".nav-link").forEach(lnk => { lnk.classList.toggle("active-nav", lnk.getAttribute("data-target") === targetPageId); });
    }

    function bindWaxSeals(page) {
        const sealWrap = page.querySelector(".wax-seal-wrapper:not(.broken)");
        if (!sealWrap) { initTypewriterEngine(); return; }
        if (sealWrap.dataset.isBroken === "true") { sealWrap.classList.add("broken"); initTypewriterEngine(); return; }
        const sealBtn = sealWrap.querySelector(".wax-seal"); showToast("👆 Click the wax seal to break it...");
        sealBtn.addEventListener('click', (e) => { sealWrap.dataset.isBroken = "true"; sealWrap.classList.add("broken"); showToast("🔓 The seal is broken."); setTimeout(initTypewriterEngine, 800); });
    }

    function applyWhispers(el, poemIndex) {
        const pData = POEM_DATABASE[poemIndex]; if(!pData || !pData.whispers || el.dataset.whispersApplied === "true") return;
        let html = el.innerHTML; pData.whispers.forEach(w => { const regex = new RegExp(`\\b${w.word}\\b`, 'gi'); html = html.replace(regex, `<span class="whisper-word" data-original="${w.word}" data-hidden="${w.hidden}">${w.word}</span>`); });
        el.innerHTML = html; el.dataset.whispersApplied = "true";
        el.querySelectorAll('.whisper-word').forEach(span => { span.addEventListener('click', function() { let curr = this.innerText; this.style.opacity = 0; setTimeout(() => { this.innerText = (curr.toLowerCase() === this.dataset.original.toLowerCase()) ? this.dataset.hidden : this.dataset.original; this.style.opacity = 1; this.classList.toggle('whispered'); }, 300); }); });
    }

    function initTypewriterEngine() {
        const activePage = document.querySelector(".page.active"); if (!activePage) return;
        const poemIndex = activePage.getAttribute("data-poem-index");
        const poemEls = activePage.querySelectorAll(".typewriter-poem");
        poemEls.forEach((el, index) => {
            const text = el.getAttribute("data-lines"); if (!text) return;
            const lines = text.replace(/\\n/g, '\n').split('\n'); const signEl = activePage.querySelector(".sign-animate"); const poemId = activePage.id + "-" + index;
            if (!window.twMasterState[poemId]) { window.twMasterState[poemId] = { lineIndex: 0, charIndex: 0, outHtml: "", status: "unstarted" }; el.innerHTML = ""; }
            let state = window.twMasterState[poemId];
            if (state.status === "finished" || el.getAttribute("data-animated") === "true") { if(signEl) { signEl.classList.add("show-instantly"); } if(poemIndex !== null) applyWhispers(el, poemIndex); return; }
            if (state.status === "typing") return; 
            state.status = "typing"; el.classList.add("is-typing");
            function typeNext() {
                if (!activePage.classList.contains("active")) { state.status = "paused"; el.classList.remove("is-typing"); return; }
                if (state.lineIndex < lines.length) {
                    let currentLine = lines[state.lineIndex];
                    if (currentLine === "") { state.outHtml += "<br><br>"; el.innerHTML = state.outHtml; state.lineIndex++; state.charIndex = 0; setTimeout(typeNext, 200); return; }
                    if (state.charIndex === 0 && state.lineIndex === 0) { let char = currentLine.charAt(0); state.outHtml += `<span class="drop-cap-antique">${char}</span>`; el.innerHTML = state.outHtml; state.charIndex++; setTimeout(typeNext, 40);
                    } else if (state.charIndex < currentLine.length) { let isFirstChar = (state.charIndex === 0 && state.lineIndex === 0); el.innerHTML = state.outHtml + currentLine.substring(isFirstChar ? 1 : 0, state.charIndex + 1); state.charIndex++; setTimeout(typeNext, 35); 
                    } else { state.outHtml = el.innerHTML + "<br>"; el.innerHTML = state.outHtml; state.lineIndex++; state.charIndex = 0; setTimeout(typeNext, 400); }
                } else { state.status = "finished"; el.setAttribute("data-animated", "true"); el.classList.remove("is-typing"); if(signEl) { signEl.classList.add("active-sign"); } if(poemIndex !== null) applyWhispers(el, poemIndex); }
            }
            setTimeout(typeNext, 200);
        });
    }

    function initLedger() {
        const ledgerList = document.getElementById("ledger-list"); 
        const submits = document.querySelectorAll(".ledger-submit"); 
        const inputs = document.querySelectorAll(".ledger-input");
        let entries = JSON.parse(localStorage.getItem('midnightLedger') || '[]');
        function renderLedger() { if(!ledgerList) return; ledgerList.innerHTML = entries.length === 0 ? `<p style="opacity:0.5;">No wandering souls recorded yet...</p>` : entries.map(e => `<p style="margin-bottom:6px;">"${e.text}" <span style="font-size:10px; opacity:0.4;">— ${e.date}</span></p>`).join(''); }
        renderLedger();
        submits.forEach((btn, idx) => { btn.addEventListener("click", () => { const input = inputs[idx]; if(input && input.value.trim() !== "") { entries.unshift({ text: input.value.trim(), date: new Date().toLocaleDateString() }); localStorage.setItem('midnightLedger', JSON.stringify(entries)); input.value = ""; renderLedger(); } }); });
    }

    function init1111Wish() {
        const modal = document.getElementById("wish-modal");
        const submitBtn = document.getElementById("submit-wish-btn");
        const input = document.getElementById("wish-input");
        setInterval(() => { const d = new Date(); if (d.getHours() === 23 && d.getMinutes() === 11 && !globalState.elevenElevenTriggered) { globalState.elevenElevenTriggered = true; if(modal) modal.style.display = "flex"; } }, 15000);
        if(submitBtn) { submitBtn.addEventListener("click", () => { if(input?.value.trim() !== "") { modal.style.display = "none"; showToast("✨ Wish sent to the cosmos."); } }); }
    }
    
    function initDynamicShadows() { document.addEventListener('mousemove', (e) => { const x = (e.clientX / window.innerWidth - 0.5) * 20; const y = (e.clientY / window.innerHeight - 0.5) * 20; document.documentElement.style.setProperty('--shadow-x', `${x}px`); document.documentElement.style.setProperty('--shadow-y', `${15 + y}px`); }); }
    function initTimeCapsule() { const capsule = document.getElementById("time-capsule-item"); const status = document.getElementById("capsule-status"); if(!capsule || !status) return; if (new Date() >= new Date("January 1, 2027 00:00:00")) { status.innerHTML = `<span style="color:var(--gold);">Unlocked. "To the me who survived, thank you."</span>`; } else { status.innerText = "A letter to the future. Sealed until January 1, 2027."; } }
    function initScrollProgressBar() { window.addEventListener("scroll", () => { let st = window.scrollY || document.documentElement.scrollTop; let sh = document.documentElement.scrollHeight - window.innerHeight; const prog = document.getElementById("reading-progress"); if(prog) prog.style.width = sh > 0 ? ((st / sh) * 100) + "%" : "0%"; }); }

    /* ======================================================
       5. ZEN MODE & ATMOSPHERE & VISUALS
       ====================================================== */
    let zenRAF;
    function smoothZenScroll() {
        if (globalState.zenModeActive) {
            let currentY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            window.scrollTo(0, currentY + 1);
            zenRAF = requestAnimationFrame(smoothZenScroll);
        }
    } // FIXED: This missing bracket was breaking everything!

    function initClockAndAtmosphere() {
        const dateEl = document.getElementById("journal-date");
        if(dateEl) dateEl.innerText = `Journal Entry: ${new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}`;
        const themeBtn = document.getElementById("theme-toggle");
        if(themeBtn) { themeBtn.addEventListener("click", () => { const nextTheme = globalState.activeTheme === "dark" ? "light" : "dark"; document.documentElement.setAttribute("data-theme", nextTheme); themeBtn.innerText = nextTheme === "dark" ? "🌙 Night" : "☀️ Day"; globalState.activeTheme = nextTheme; }); }
        
        const rainToggleBtn = document.getElementById("rain-toggle");
        if(rainToggleBtn) rainToggleBtn.addEventListener("click", toggleRain);
        
        const focusBtn = document.getElementById("reading-mode-toggle");
        const exitFocusBtn = document.getElementById("exit-focus-btn");
        function toggleFocus() { document.body.classList.toggle("reading-mode"); focusBtn.innerText = document.body.classList.contains("reading-mode") ? "👁️ Normal" : "📖 Focus"; }
        if(focusBtn) focusBtn.addEventListener("click", toggleFocus); if(exitFocusBtn) exitFocusBtn.addEventListener("click", toggleFocus);
    }

    function toggleRain() {
        globalState.rainActive = !globalState.rainActive;
        const rCanvas = document.getElementById("rain-canvas");
        if(globalState.rainActive) { rCanvas?.classList.add("raining"); startRainVisuals(); showToast("🌧️ Storm simulation active..."); if(audioRain) { audioRain.volume = 0.4; audioRain.play(); } }
        else { rCanvas?.classList.remove("raining"); showToast("🌤️ Storm cleared."); if(audioRain) { audioRain.pause(); } }
    }

    function startRainVisuals() {
        const rCanvas = document.getElementById("rain-canvas"); if(!rCanvas) return; const rCtx = rCanvas.getContext("2d"); rCanvas.width = window.innerWidth; rCanvas.height = window.innerHeight;
        const drops = []; for(let i=0; i<80; i++) drops.push({x: Math.random()*rCanvas.width, y: Math.random()*rCanvas.height, l: Math.random()*20+10, v: Math.random()*4+5});
        function drawRain() {
            if(!globalState.rainActive) return; rCtx.clearRect(0,0,rCanvas.width,rCanvas.height); rCtx.strokeStyle = "rgba(191,164,111,0.25)"; rCtx.lineWidth = 1; rCtx.beginPath();
            for(let i=0; i<drops.length; i++) { let d = drops[i]; rCtx.moveTo(d.x, d.y); rCtx.lineTo(d.x, d.y+d.l); d.y += d.v; if(d.y > rCanvas.height) { d.y = -20; d.x = Math.random()*rCanvas.width; } }
            rCtx.stroke(); requestAnimationFrame(drawRain);
        }
        drawRain();
    }

    function initUltimateUniverseBackground() {
        const canvas = document.getElementById("universe"); if(!canvas) return; const ctx = canvas.getContext("2d", { alpha: false }); let width = canvas.width = window.innerWidth; let height = canvas.height = window.innerHeight; window.addEventListener("resize", () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });
        const backgroundStars = []; 
        for(let i = 0; i < 45; i++) backgroundStars.push({ x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 1.2 + 0.2, baseAlpha: Math.random() * 0.4 + 0.2, phase: Math.random() * Math.PI });
        function processRenderLoop() {
            ctx.fillStyle = globalState.activeTheme === "dark" ? "#050507" : "#f4ebd0"; ctx.fillRect(0, 0, width, height);
            for(let star of backgroundStars) { star.phase += 0.015; let a = star.baseAlpha + Math.sin(star.phase) * 0.15; ctx.beginPath(); ctx.fillStyle = globalState.activeTheme === "dark" ? `rgba(242,238,233,${Math.max(0.1, a)})` : `rgba(28, 22, 12,${Math.max(0.1, a)})`; ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2); ctx.fill(); }
            requestAnimationFrame(processRenderLoop);
        }
        requestAnimationFrame(processRenderLoop);
    }

    /* ======================================================
       6. THE AUTHOR'S DESK (Admin Portal Control)
       ====================================================== */
    function initAuthorsDesk() {
        const trigger = document.getElementById('secret-admin-trigger');
        const modal = document.getElementById('admin-modal');
        const loginSection = document.getElementById('admin-auth-section');
        const formSection = document.getElementById('admin-form-section');
        const passInput = document.getElementById('admin-pass-input');
        const loginBtn = document.getElementById('btn-admin-login');
        const genBtn = document.getElementById('btn-generate-json');
        const closeBtn = document.getElementById('btn-close-admin');

        if(!trigger || !modal) return; 
        trigger.addEventListener('click', () => { modal.style.display = 'flex'; if(passInput) passInput.value = ""; loginSection.style.display = 'block'; formSection.style.display = 'none'; });
        
        if(loginBtn) {
            loginBtn.addEventListener('click', () => {
                if(passInput && passInput.value === "soham123") {
                    showToast("🔓 Access Granted.");
                    loginSection.style.display = 'none';
                    formSection.style.display = 'block';
                    const targetDateNode = document.getElementById('ap-date'); if(targetDateNode) targetDateNode.value = new Date().toLocaleDateString();
                    const targetSignNode = document.getElementById('ap-sign'); if(targetSignNode) targetSignNode.value = "-- Soham Jadhao";
                } else { showToast("❌ Invalid Key."); }
            });
        }
        if(genBtn) {
            genBtn.addEventListener('click', () => {
                const ch = document.getElementById('ap-chapter')?.value.trim();
                const ttl = document.getElementById('ap-title')?.value.trim();
                const txt = document.getElementById('ap-text')?.value.trim();
                if(!ch || !ttl || !txt) { showToast("⚠️ Missing parameters."); return; }
                const jsonObject = { chapterLabel: ch, spineLabel: ttl, title: ttl, subtitle: "A REFLECTION", themeTag: "Motivation", text: txt.replace(/\n/g, '\\n'), dateText: new Date().toLocaleDateString(), signature: "-- Soham" };
                navigator.clipboard.writeText("," + JSON.stringify(jsonObject, null, 2)).then(() => { alert("✨ Poem Copied!"); modal.style.display = 'none'; });
            });
        }
        if(closeBtn) closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    }

    function initLibraryFeatures() {
        const footerQuote = document.getElementById("quote-rotator"); if(footerQuote) footerQuote.innerText = quoteDatabase[Math.floor(Math.random() * quoteDatabase.length)];
        const moonTrigger = document.getElementById("moon-phase");
        if(moonTrigger) {
            moonTrigger.addEventListener("click", () => {
                globalState.secretClicks++; 
                if(globalState.secretClicks === 3) { globalState.hasTappedMoon = true; showToast("🏆 Achievement Unlocked: Moonwalker"); document.querySelector(".trigger-nav[data-target='page-secret']")?.click() || document.getElementById('page-secret')?.classList.add('active'); globalState.secretClicks = 0; }
            });
        }
        const thoughtBtn = document.getElementById("reveal-thought-btn"); const thoughtDisplay = document.getElementById("midnight-thought-display");
        if(thoughtBtn && thoughtDisplay) { thoughtBtn.addEventListener("click", () => { thoughtDisplay.style.opacity = 0; setTimeout(() => { thoughtDisplay.innerText = `"${midnightThoughts[Math.floor(Math.random() * midnightThoughts.length)]}"`; thoughtDisplay.style.opacity = 0.8; }, 300); }); }
    }

    function initSecretKeyboardVault() {
        let inputBuffer = "";
        window.addEventListener("keydown", (e) => {
            if (e.key.length === 1 && e.key.match(/[a-z]/i)) inputBuffer += e.key.toLowerCase();
            if (inputBuffer.length > 7) inputBuffer = inputBuffer.substring(inputBuffer.length - 7);
            if (inputBuffer === "silence") {
                showToast("👁️ Secret Room Access Initialized...");
                document.querySelector(".trigger-nav[data-target='page-secret']")?.click();
                inputBuffer = "";
            }
        });
    }

    function showToast(msg) { const container = document.getElementById("toast-container"); if(!container) return; const toast = document.createElement("div"); toast.className = "toast"; toast.innerText = msg; container.appendChild(toast); setTimeout(() => toast.remove(), 3500);}
    
    /* ======================================================
       7. PWA INSTALLATION SYSTEM & LIFECYCLE
       ====================================================== */
    let deferredPrompt;
    const installBtn = document.getElementById("btn-install-app");

    window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (installBtn) {
            installBtn.style.display = "block";
        }
    });

    if (installBtn) {
        installBtn.addEventListener("click", async () => {
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === "accepted") {
                showToast("✨ Sanctuary installed successfully!");
            }
            deferredPrompt = null;
            installBtn.style.display = "none";
        });
    }

    window.addEventListener("appinstalled", () => {
        if (installBtn) installBtn.style.display = "none";
        deferredPrompt = null;
        showToast("🏛️ Welcome to the permanent library.");
    });
});
// =======================================================
// FRESH GATE OPEN BUTTON FUNCTION (ROBUST FIX)
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
    const openGatesBtn = document.getElementById("open-gates-btn");
    const introScreen = document.getElementById("intro-screen");

    if (openGatesBtn && introScreen) {
        openGatesBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Kisi bhi unwanted page refresh ko rokne ke liye
            
            console.log("Gate open button clicked successfully!");

            // Intro screen ko fade out karne ke liye class add karo
            introScreen.classList.add("fade-out");

            // Optional: Agar future me check karna ho ki gate khul chuka hai
            localStorage.setItem("gatesOpened", "true");
        });
    } else {
        console.error("Error: '#open-gates-btn' ya '#intro-screen' DOM mein nahi mila! Ek baar HTML check karein.");
    }
});
// =======================================================
