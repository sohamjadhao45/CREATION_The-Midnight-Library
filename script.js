/* =====================================================================
   THE MIDNIGHT LIBRARY ENGINE (THE INDESTRUCTIBLE SANCTUM EDITION)
   Crash-Proof Safe Guards | Pure JSON Parsing | html2canvas MultiShield
   ===================================================================== */

// 🔴 AGGRESSIVE LIVE NETWORK INJECTOR (Kill Service Worker Cache permanently)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) { registration.unregister(); }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* --- HARDCODED BACKUP REPOSITORY (Zero Crash Kavach) --- */
    const FALLBACK_POEMS = [
        {
            chapterLabel: "CHAPTER I", spineLabel: "ANCHOR - CH.I", title: "ANCHOR", subtitle: "A TRIBUTE TO MY FATHER", themeTag: "❤️ Family & Love", dateText: "A memory from 5 May, 2026", signature: "-- Soham Jadhao<br>Love You Pappa !!!!",
            text: `You're my truth, my life,\nmy beginning, my end.\nYou know my weaknesses and flaws,\nyet you're my buddy and my friend.\n\nThis relation is not only of blood,\nbut of emotions and linked hearts too.\nAmong all the bonds I've ever known,\nyou're a part of me, I'm a part of you.\n\nAs love has no age limit,\nthat's why my love for you stays true.\nYour morals and your way of seeing life\nhave taught me something new.\n\nWords are too few to describe you,\neven calamities fear facing you.\nYou're present in my every breath,\nand I know what you truly mean to me.`,
            whispers: []
        },
        {
            chapterLabel: "CHAPTER II", spineLabel: "SPORTSMAN - CH.II", title: "SPORTSMAN<br>SPIRIT", subtitle: "THE SPIRIT OF EXCELLENCE", themeTag: "⚡ Motivation", dateText: "Written on 14 March 2026", signature: "— Soham Jadhao",
            text: `Ignite your fire.\nLearn from every downfall,\nBouncers will come and go,\nDon't fear the pavilion's call.\n\nNever get upset,\nFace every yorker,\nBuild your own present,\nYour ace will be your marker.\n\nSometimes a hundred,\nSometimes a duck,\nGive your best always,\nAnd leave the rest to luck.\n\nThe past is your best teacher,\nThe future, an unseen creature,\nSpread your wings in the present sky,\nEvery great score begins with a try.`,
            whispers: []
        }
    ];

    let POEM_DATABASE = [];
    const UPCOMING_CHAPTER = { chapterNum: "IV", title: "THE UNSEEN REALM" };
    window.twMasterState = {};
    const globalState = { activeTheme: "dark", isAudioPlaying: false, vortexActive: false, secretClicks: 0, notesVisitCount: 0, secretPassword: "silence", hasTappedMoon: false, hasTypedWord: false, rainActive: false, visitorName: "Wanderer", elevenElevenTriggered: false };

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

    // Core Init Framework Calls
    try {
        initClockAndAtmosphere();
        initUltimateUniverseBackground();
        initCosmicNavigation();
        initScrollProgressBar();
        initLedger();
        initDynamicShadows();
        initBookmarksDrawer();
        initFavouritesDrawer();
        initTimeCapsule();
        initPassport();
        initTouchRipple();
        init1111Wish();
        initAuthorsDesk();
    } catch (e) { console.error("Visual Framework Warning:", e); }

    // Dynamic Database Loader
    async function loadLibraryData() {
        try {
            const response = await fetch('poems.json');
            if (!response.ok) throw new Error("JSON Fetch Aborted");
            const data = await response.json();
            POEM_DATABASE = Array.isArray(data) && data.length > 0 ? data : FALLBACK_POEMS;
        } catch (error) {
            console.warn("Safety Trigger: Running Fallback Matrix.");
            POEM_DATABASE = FALLBACK_POEMS;
        }
        // Always render layout safely
        buildLibrarySystem();
        initLibraryFeatures();
        initSecretKeyboardVault();
    }
    loadLibraryData();

    function initPassport() {
        const inputName = document.getElementById("visitor-name");
        const enterBtn = document.getElementById("enter-library-btn");
        if(enterBtn) {
            enterBtn.addEventListener("click", () => {
                let name = inputName && inputName.value.trim() !== "" ? inputName.value.trim() : "Wanderer";
                localStorage.setItem("midnightVisitor", name);
                globalState.visitorName = name;
                
                const greeting = document.getElementById("vault-greeting");
                if(greeting) greeting.innerHTML = `Ah, <span style="color:var(--gold);">${name}</span>... welcome to the Secret Vault.`;
                const letterTitle = document.getElementById("reader-letter-title");
                if(letterTitle) letterTitle.innerText = `A LETTER TO ${name.toUpperCase()}`;
                
                document.getElementById("intro-screen").style.display = "none";
                if(audioAmbient && !globalState.isAudioPlaying) {
                    audioAmbient.volume = 0.2;
                    audioAmbient.play().catch(()=>{});
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
            starMap.innerHTML = `<svg width="100%" height="100%" style="position: absolute;">${svgLines}</svg>${starsHtml}`;
        }
        if(authorScripting) authorScripting.innerHTML = `<strong>Currently Scripting:</strong> ${UPCOMING_CHAPTER.title}`;
    }

    /* ======================================================
       6. SMART RE-RENDER SCREEN LAYOUT ENGINE (Multi-Shield html2canvas)
       ====================================================== */
    function renderHQCardImage(elementId, targetPoemTitle, runDownloadFallback) {
        if (typeof html2canvas === 'undefined') { showToast("⏳ Camera calibration active..."); return; }
        const sourceNode = document.getElementById(elementId);
        if (!sourceNode) return;

        showToast("📸 Processing High-Fidelity Snapshot...");

        // Smart Desktop Emulator Offscreen Container
                // Smart Desktop Emulator Offscreen Container
        const monitorEmulationFrame = document.createElement('div');
        monitorEmulationFrame.style.position = 'fixed';
        monitorEmulationFrame.style.top = '-99999px';
       
        monitorEmulationFrame.style.top = '-99999px';
        monitorEmulationFrame.style.left = '-99999px';
        monitorEmulationFrame.style.width = '680px'; // Forced desktop rigid limits preventing smartphone text wrapping squish
        monitorEmulationFrame.style.padding = '40px';
        monitorEmulationFrame.style.background = globalState.activeTheme === 'dark' ? '#151515' : '#e8dcc7';
        document.body.appendChild(monitorEmulationFrame);

        const snapshotClone = sourceNode.cloneNode(true);
        snapshotClone.style.width = '100%';
        snapshotClone.style.margin = '0';
        snapshotClone.style.transform = 'none';

        // Strip UI navigation elements inside raw image export card
        const interactiveOverlayBlocks = snapshotClone.querySelectorAll('.wax-seal-wrapper, .poem-interactions, .button-row');
        interactiveOverlayBlocks.forEach(block => block.remove());

        // Secure deep explicit text visibility weights
        const rigidTexts = snapshotClone.querySelectorAll('.typewriter-poem, .royal-poem-text');
        rigidTexts.forEach(t => {
            t.style.whiteSpace = 'pre-wrap';
            t.style.wordBreak = 'break-word';
            t.style.opacity = '1';
            t.style.color = globalState.activeTheme === 'dark' ? '#e0e0e0' : '#3B2210';
        });

        monitorEmulationFrame.appendChild(snapshotClone);

        document.fonts.ready.then(() => {
            setTimeout(() => {
                html2canvas(snapshotClone, {
                    scale: 2.5,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: globalState.activeTheme === 'dark' ? '#151515' : '#e8dcc7',
                    width: snapshotClone.offsetWidth,
                    height: snapshotClone.offsetHeight
                }).then(canvas => {
                    document.body.removeChild(monitorEmulationFrame);
                    runDownloadFallback(canvas);
                }).catch(() => {
                    document.body.removeChild(monitorEmulationFrame);
                    showToast("❌ Render configuration aborted.");
                });
            }, 400);
        });
    }

    /* ======================================================
       7. DYNAMIC GLOBAL ACTION DELEGATOR BUTTON INTERFACES
       ====================================================== */
    document.body.addEventListener('click', (e) => {
        // HQ SNAPSHOT MEMORY DOWNLOAD TRIGGER
        if(e.target.classList.contains('download-poem-btn')) {
            const currentSectionScope = e.target.closest('.page');
            if(!currentSectionScope) return;
            const targetDomCardId = `card-${currentSectionScope.id}`;
            const activePoemIndex = e.target.getAttribute('data-poem-index');
            const poemMeta = POEM_DATABASE[activePoemIndex];

            renderHQCardImage(targetDomCardId, poemMeta.title, (canvas) => {
                const pipelineLink = document.createElement("a");
                pipelineLink.download = `${poemMeta.title.replace(/<br>/g,'')}_Sanctuary_Echo.png`;
                pipelineLink.href = canvas.toDataURL("image/png");
                pipelineLink.click();
                showToast("✨ Card Saved into Device Local Storage!");
            });
        }

        // HYBRID CONTENT SHARING SUITE (Blobs + Native Text fallbacks)
        if(e.target.classList.contains('share-poem-btn')) {
            const currentSectionScope = e.target.closest('.page');
            if(!currentSectionScope) return;
            const targetDomCardId = `card-${currentSectionScope.id}`;
            const activePoemIndex = e.target.getAttribute('data-poem-index');
            const poemMeta = POEM_DATABASE[activePoemIndex];

            renderHQCardImage(targetDomCardId, poemMeta.title, (canvas) => {
                canvas.toBlob((fileBinaryBlob) => {
                    if (!fileBinaryBlob) return;
                    const sharedImageFile = new File([fileBinaryBlob], `Creation_Verse.png`, { type: 'image/png' });
                    
                    if (navigator.canShare && navigator.canShare({ files: [sharedImageFile] })) {
                        navigator.share({
                            files: [sharedImageFile],
                            title: poemMeta.title.replace(/<br>/g, ' '),
                            text: `A raw echo from Soham's digital sanctuary... 🌙`
                        }).then(() => showToast("✨ Shared Successfully!")).catch(()=>{});
                    } else {
                        // Flawless Native Fallback String Construction Formats beautifully inside messaging platforms
                        const staticPoemBodyString = poemMeta.text.replace(/\\n/g, '\n');
                        const transmissionTextLayout = `📖 *THE MIDNIGHT LIBRARY*\n\n*${poemMeta.title.replace(/<br>/g, ' ')}*\n_${poemMeta.subtitle}_\n\n"${staticPoemBodyString}"\n\nExplore further vaults inside the sanctuary here: ${window.location.href}`;
                        
                        navigator.share({ title: poemMeta.title, text: transmissionTextLayout }).catch(() => {
                            navigator.clipboard.writeText(transmissionTextLayout);
                            showToast("🔗 Text metadata copied to Clipboard clipboard!");
                        });
                    }
                }, 'image/png');
            });
        }

        // NATIVE CORE AUDIO TTS NARRATOR ENGINE
        if(e.target.classList.contains('listen-btn')) {
            const actionButtonNode = e.target;
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                actionButtonNode.innerHTML = "🎙️ LISTEN TO THE POEM";
                showToast("🛑 Text synthesis narration halted.");
                return;
            }
            const structuralParentPage = actionButtonNode.closest('.page');
            const targetTextContainer = structuralParentPage ? structuralParentPage.querySelector('.typewriter-poem') : null;
            if(!targetTextContainer) return;

            let purifiedCleanTextString = targetTextContainer.innerText.replace(/🪶/g, '');
            let speechUtteranceInstance = new SpeechSynthesisUtterance(purifiedCleanTextString);
            speechUtteranceInstance.rate = 0.82; 
            speechUtteranceInstance.pitch = 0.95;

            window.speechSynthesis.speak(speechUtteranceInstance);
            actionButtonNode.innerHTML = "🛑 STOP NARRATION";
            showToast("🎙️ Speech synthesis online...");
            
            speechUtteranceInstance.onend = () => { actionButtonNode.innerHTML = "🎙️ LISTEN TO THE POEM"; };
        }

        // RESONATE FAVORITES LOGIC
        if(e.target.classList.contains('resonate-btn')) {
            const rawTitleString = e.target.getAttribute('data-poem') || "The Unnamed Fragment";
            let localResonatedArray = JSON.parse(localStorage.getItem('midnightFavs') || '[]');
            if (!localResonatedArray.includes(rawTitleString)) {
                localResonatedArray.push(rawTitleString);
                localStorage.setItem('midnightFavs', JSON.stringify(localResonatedArray));
                e.target.classList.add('active-fav');
                showToast("❤️ Added into your Sanctuary Favourites!");
                updateSavedDrawers();
            } else { showToast("✨ Log already verified inside vault database."); }
        }

        // BOOKMARK ARCHIVE REGISTRY 
        if(e.target.classList.contains('bookmark-btn')) {
            const archiveReferenceId = e.target.getAttribute('data-poem') || "Fragment Core";
            let localArchivesArray = JSON.parse(localStorage.getItem('midnightBookmarks') || '[]');
            if (!localArchivesArray.includes(archiveReferenceId)) {
                localArchivesArray.push(archiveReferenceId);
                localStorage.setItem('midnightBookmarks', JSON.stringify(localArchivesArray));
                e.target.innerText = "❤️ Saved";
                showToast("🔖 Reference linked inside personal Archives!");
                updateSavedDrawers();
            } else { showToast("✨ Reference already exists."); }
        }
    });

    /* ======================================================
       8. DRAWER MANAGEMENT SUBSYSTEMS & SECRETS
       ====================================================== */
    function updateSavedDrawers() {
        const structuralFavContainer = document.getElementById("favourites-list");
        const structuralArchContainer = document.getElementById("bookmarks-list");
        let activeFavs = JSON.parse(localStorage.getItem('midnightFavs') || '[]');
        let activeBookmarks = JSON.parse(localStorage.getItem('midnightBookmarks') || '[]');

        if (structuralFavContainer) {
            structuralFavContainer.innerHTML = activeFavs.length === 0 ? `<p style="opacity: 0.5; font-style: italic;">No verses loaded inside portal drawers...</p>` : activeFavs.map(fv => `<div class="bookmark-item" data-title="${fv}">❤️ ${fv}</div>`).join('');
        }
        if (structuralArchContainer) {
            structuralArchContainer.innerHTML = activeBookmarks.length === 0 ? `<p style="opacity: 0.5; font-style: italic;">Archives currently unindexed...</p>` : activeBookmarks.map(bm => `<div class="bookmark-item" data-title="${bm}">📖 ${bm}</div>`).join('');
        }

        // Bind quick teleporter links inside drawer layouts safely
        document.querySelectorAll('.bookmark-item[data-title]').forEach(item => {
            item.addEventListener('click', (e) => {
                const targetedTitleKey = e.target.getAttribute('data-title');
                const computationalIndexRef = POEM_DATABASE.findIndex(p => p.spineLabel === targetedTitleKey || p.title.replace(/<br>/g, ' ') === targetedTitleKey);
                if(computationalIndexRef !== -1) {
                    document.getElementById("favourites-drawer")?.classList.remove("open");
                    document.getElementById("bookmarks-drawer")?.classList.remove("open");
                    const internalNavigationVirtualNode = document.createElement('div');
                    internalNavigationVirtualNode.setAttribute('data-target', `poem-page-${computationalIndexRef + 1}`);
                    executePageFlip(`poem-page-${computationalIndexRef + 1}`);
                }
            });
        });
    }

    function initBookmarksDrawer() {
        const favDrawer = document.getElementById("favourites-drawer");
        const archDrawer = document.getElementById("bookmarks-drawer");
        document.getElementById("open-fav-btn")?.addEventListener("click", () => { updateSavedDrawers(); favDrawer?.classList.add("open"); });
        document.getElementById("close-fav-drawer")?.addEventListener("click", () => favDrawer?.classList.remove("open"));
        document.getElementById("open-bookmarks-btn")?.addEventListener("click", () => { updateSavedDrawers(); archDrawer?.classList.add("open"); });
        document.getElementById("close-drawer")?.addEventListener("click", () => archDrawer?.classList.remove("open"));
        updateSavedDrawers();
    }

    function initSecretKeyboardVault() {
        let inputBuffer = "";
        window.addEventListener("keydown", (e) => {
            if (e.key.length === 1 && e.key.match(/[a-z]/i)) inputBuffer += e.key.toLowerCase();
            if (inputBuffer.length > 7) inputBuffer = inputBuffer.substring(inputBuffer.length - 7);
            if (inputBuffer === "silence") {
                showToast("👁️ Secret Room Access Initialized...");
                executePageFlip('page-secret');
                inputBuffer = "";
            }
        });
    }

    /* ======================================================
       9. RECURSIVE LAYOUT ENGINE CONTROLS
       ====================================================== */
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
        const backgroundStars = []; const goldenDust = [];
        for(let i = 0; i < 45; i++) backgroundStars.push({ x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 1.2 + 0.2, baseAlpha: Math.random() * 0.4 + 0.2, phase: Math.random() * Math.PI });
        function processRenderLoop() {
            ctx.fillStyle = globalState.activeTheme === "dark" ? "#050507" : "#f4ebd0"; ctx.fillRect(0, 0, width, height);
            for(let star of backgroundStars) { star.phase += 0.015; let a = star.baseAlpha + Math.sin(star.phase) * 0.15; ctx.beginPath(); ctx.fillStyle = globalState.activeTheme === "dark" ? `rgba(242,238,233,${Math.max(0.1, a)})` : `rgba(28, 22, 12,${Math.max(0.1, a)})`; ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2); ctx.fill(); }
            requestAnimationFrame(processRenderLoop);
        }
        requestAnimationFrame(processRenderLoop);
    }

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

    function initTypewriterEngine() {
        const activePage = document.querySelector(".page.active"); if (!activePage) return;
        const poemIndex = activePage.getAttribute("data-poem-index");
        const poemEls = activePage.querySelectorAll(".typewriter-poem");
        poemEls.forEach((el) => {
            const text = el.getAttribute("data-lines"); if (!text) return;
            const lines = text.replace(/\\n/g, '\n').split('\n');
            const poemId = activePage.id;
            if (!window.twMasterState[poemId]) { window.twMasterState[poemId] = { lineIndex: 0, charIndex: 0, outHtml: "", status: "unstarted" }; el.innerHTML = ""; }
            let state = window.twMasterState[poemId];
            if (state.status === "finished" || el.getAttribute("data-animated") === "true") { el.innerHTML = text.replace(/\\n/g, '<br>'); return; }
            state.status = "typing";
            el.innerHTML = text.replace(/\\n/g, '<br>');
            state.status = "finished";
            el.setAttribute("data-animated", "true");
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
    
    function initTouchRipple() {}
    function initDynamicShadows() {}
    function initTimeCapsule() {}

    /* ======================================================
       🖋️ THE AUTHOR'S DESK (Admin Portal Control Safe Frame)
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

        if(!trigger || !modal) return; // Automatic Guard preventing script execution halt
        trigger.addEventListener('click', () => { modal.style.display = 'flex'; if(passInput) passInput.value = ""; loginSection.style.display = 'block'; formSection.style.display = 'none'; });
        
        if(loginBtn) {
            loginBtn.addEventListener('click', () => {
                if(passInput && passInput.value === "soham123") {
                    showToast("🔓 Access Granted.");
                    loginSection.style.display = 'none';
                    formSection.style.display = 'block';
                    const targetDateNode = document.getElementById('ap-date'); if(targetDateNode) targetDateNode.value = new Date().toLocaleDateString();
                    const targetSignNode = document.getElementById('ap-sign'); if(targetSignNode) targetSignNode.value = "-- Soham Jadhao";
                } else { showToast("❌ Invalid Master Seal Key."); }
            });
        }
        if(genBtn) {
            genBtn.addEventListener('click', () => {
                const ch = document.getElementById('ap-chapter')?.value.trim();
                const ttl = document.getElementById('ap-title')?.value.trim();
                const txt = document.getElementById('ap-text')?.value.trim();
                if(!ch || !ttl || !txt) { showToast("⚠️ Missing vital parameters."); return; }
                const jsonObject = { chapterLabel: ch, spineLabel: ttl, title: ttl, subtitle: "A REFLECTION", themeTag: "Motivation", text: txt.replace(/\n/g, '\\n'), dateText: new Date().toLocaleDateString(), signature: "-- Soham" };
                navigator.clipboard.writeText("," + JSON.stringify(jsonObject, null, 2)).then(() => { alert("✨ Poem Copied to Clipboard!"); modal.style.display = 'none'; });
            });
        }
        if(closeBtn) closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    }
    showToast("🏛️ Entrance Open. Welcome Wanderer.");
});
