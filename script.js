/* --- 1. MOCK YOUTUBE DATABASE (For Offline/Demo Stability) --- */
// Since we can't use a real key safely, we map keywords to REAL video IDs.
const youtubeDB = {
    'AI': [
        {id: 'JMUxmLyrhSk', title: 'AI for Beginners - Google Cloud'},
        {id: 'aircAruvnKk', title: 'Neural Networks 3Blue1Brown'},
        {id: 'GIsg-Z_n2hQ', title: 'What is Artificial Intelligence?'}
    ],
    'Web Dev': [
        {id: 'bMknfKXIFA8', title: 'React Course - Beginner to Advanced'},
        {id: 'mU6anWqZJcc', title: 'HTML CSS Full Course'},
        {id: 'kUMe1FH4CHE', title: 'Learn HTML in 1 hour'}
    ],
    'Physics': [
        {id: 'T84d6Zz5vO0', title: 'Thermodynamics: Crash Course Physics'},
        {id: 'ixTwQ3S-8Qk', title: 'Quantum Mechanics Explained'},
        {id: 'bHIhgxav9LY', title: 'The Physics of Black Holes'}
    ],
    'Math': [
        {id: '302eJ3TzJlg', title: 'Calculus: Derivatives 101'},
        {id: 'QyIobTsghv4', title: 'Linear Algebra - Matrix'},
        {id: 'vA-55wZtKrE', title: 'Statistics for Data Science'}
    ],
    'History': [
        {id: 'Y3t2EivwrZ0', title: 'The Roman Empire Explained'},
        {id: 'S4IVlptk1xI', title: 'World War 2 in 12 Minutes'}
    ],
    'Biology': [
        {id: '8IlzKri08kk', title: 'Introduction to Biology - Crash Course'},
        {id: 'ax0t_42l2P0', title: 'The Cell Song'},
        {id: 'hS23_9yBfQ', title: 'DNA Replication 3D'}
    ],
    'Chemistry': [
        {id: 'FSyAehMDpyI', title: 'Basic Chemistry Concepts'},
        {id: 'Rd4a1X3B61w', title: 'Periodic Table Explained'},
        {id: '0h5Jd7k_0_c', title: 'Organic Chemistry Introduction'}
    ],
    'Literature': [
        {id: 'MSYw502dJNY', title: 'To Kill a Mockingbird Summary'},
        {id: '4z7gDsZ8jnU', title: 'Shakespeare: Brief History'},
        {id: 'S0_6g_7_0_c', title: '1984 by George Orwell Analysis'}
    ],
    'Economics': [
        {id: '3ez10ADR_gM', title: 'Economics 101: Supply & Demand'},
        {id: 'LwLh6ax0_1U', title: 'How The Economic Machine Works'},
        {id: 'JMUxmLyrhSk', title: 'Macroeconomics vs Microeconomics'}
    ],
    'Psychology': [
        {id: 'vo4pMVb0R6M', title: 'Introduction to Psychology'},
        {id: 'hFV71QPvX2I', title: 'The Psychology of Learning'},
        {id: 'aircAruvnKk', title: 'Freud\'s Psychoanalytic Theory'}
    ],
    'Art': [
        {id: 'qv8TANh8djI', title: 'Art History 101'},
        {id: 'JMUxmLyrhSk', title: 'How to Read a Painting'},
        {id: 'Y3t2EivwrZ0', title: 'The Renaissance Explained'}
    ],
    'Music': [
        {id: 'bMknfKXIFA8', title: 'Music Theory in 30 Minutes'},
        {id: 'S4IVlptk1xI', title: 'History of Classical Music'},
        {id: 'JMUxmLyrhSk', title: 'How to Read Sheet Music'}
    ],
    'Data Science': [
        {id: 'X3paOmcrTjQ', title: 'Data Science for Beginners'},
        {id: 'aircAruvnKk', title: 'Python for Data Science'},
        {id: 'JMUxmLyrhSk', title: 'Machine Learning vs Data Science'}
    ],
    'Cybersecurity': [
        {id: 'inWWhr5tnEA', title: 'Cyber Security In 7 Minutes'},
        {id: 'bMknfKXIFA8', title: 'Ethical Hacking Course'},
        {id: 'JMUxmLyrhSk', title: 'What is Phishing?'}
    ],
    'Astronomy': [
        {id: 'libKVRa01L8', title: 'Solar System 101'},
        {id: 'T84d6Zz5vO0', title: 'The Big Bang Theory'},
        {id: 'bHIhgxav9LY', title: 'Black Holes Explained'}
    ],
    'Geography': [
        {id: 'K6DSMZ8b3LE', title: 'Geography Now!'},
        {id: 'JMUxmLyrhSk', title: 'World Map Explained'},
        {id: 'T84d6Zz5vO0', title: 'Plate Tectonics'}
    ],
    'Law': [
        {id: 'Y3t2EivwrZ0', title: 'Introduction to Law'},
        {id: 'S4IVlptk1xI', title: 'How the Court System Works'},
        {id: 'JMUxmLyrhSk', title: 'Constitutional Law'}
    ],
    'Medicine': [
        {id: '8IlzKri08kk', title: 'Anatomy of the Human Body'},
        {id: 'hS23_9yBfQ', title: 'How the Heart Works'},
        {id: 'JMUxmLyrhSk', title: 'Medical Terminology'}
    ],
    'Philosophy': [
        {id: '1A_CAkYt3GY', title: 'What is Philosophy?'},
        {id: 'aircAruvnKk', title: 'Plato\'s Allegory of the Cave'},
        {id: 'JMUxmLyrhSk', title: 'Stoicism 101'}
    ],
    'Business': [
        {id: '3ez10ADR_gM', title: 'Business Basics'},
        {id: 'JMUxmLyrhSk', title: 'Marketing Strategies'},
        {id: 'bMknfKXIFA8', title: 'Entrepreneurship 101'}
    ],
    'Sociology': [
        {id: 'LK5J0-cM-HE', title: 'Sociology - Crash Course'},
        {id: 'Y3t2EivwrZ0', title: 'Social Structures'},
        {id: 'JMUxmLyrhSk', title: 'Culture and Society'}
    ]
};

const topics = Object.keys(youtubeDB);
let userPreferences = JSON.parse(localStorage.getItem('ses_prefs')) || ['AI', 'Web Dev'];
const GEMINI_API_KEY = 'AIzaSyB8bOfX4i1EqsvSbWvCDxQ4JM0K0iPt-nI';
let favorites = JSON.parse(localStorage.getItem('ses_favs')) || [];
let assignments = JSON.parse(localStorage.getItem('ses_assign')) || [];

/* --- 2. INITIALIZATION --- */
window.onload = () => {
    initTheme();
    initModal();
    renderDashboard();
    updateFavBadge();
    renderAssignments();
};

function switchView(view) {
    // Hide all views (added profile)
    ['dash', 'search', 'favorites', 'admin', 'profile'].forEach(id => {
        const el = document.getElementById('view-' + id);
        if(el) el.classList.add('hidden');
    });
    
    // Show selected
    const target = document.getElementById('view-' + view);
    if(target) target.classList.remove('hidden');
    
    // Update nav active state
    const btns = document.querySelectorAll('.nav-item');
    btns.forEach(b => b.classList.remove('active'));
    
    const activeBtn = document.querySelector(`.nav-item[onclick*="'${view}'"]`);
    if(activeBtn) activeBtn.classList.add('active');

    if(view === 'favorites') renderFavorites();
    if(view === 'admin') renderAdminPanel();
}

/* --- 3. PREFERENCES SYSTEM --- */
function initModal() {
    const grid = document.getElementById('pref-choices');
    grid.innerHTML = topics.map(t => 
        `<div class="choice-tag ${userPreferences.includes(t) ? 'selected' : ''}" onclick="toggleTag(this, '${t}')">${t}</div>`
    ).join('');
}

function toggleTag(el, topic) {
    el.classList.toggle('selected');
}

function toggleModal(show) {
    const modal = document.getElementById('pref-modal');
    if(show) {
        modal.classList.remove('hidden');
        initModal(); // Reset UI to matches current state
    } else {
        modal.classList.add('hidden');
    }
}

function savePreferences() {
    const selected = Array.from(document.querySelectorAll('.choice-tag.selected')).map(el => el.innerText);
    userPreferences = selected;
    localStorage.setItem('ses_prefs', JSON.stringify(selected));
    renderDashboard();
    toggleModal(false);
}

/* --- 4. DASHBOARD LOGIC --- */
let dashboardRetryInterval = null;
const CACHE_DURATION = 3600000; // 1 hour cache validity

/* --- NEW: FREEDOM API LOADER (Invidious + Dailymotion) --- */
async function fetchSmartVideos(query) {
    // 1. Try Invidious API (YouTube Proxy - No Key/Quota)
    try {
        // Using invidious.nerdvpn.de as requested
        const res = await fetch(`https://invidious.nerdvpn.de/api/v1/search?q=${encodeURIComponent(query)}&type=video`);
        if(!res.ok) throw new Error('Invidious Error');
        const data = await res.json(); // Invidious returns array directly
        // Filter and map results (Exclude shorts < 60s)
        return data.filter(i => i.type === 'video' && i.lengthSeconds > 60).slice(0, 10).map(i => ({
            id: i.videoId,
            title: i.title,
            thumb: i.videoThumbnails ? i.videoThumbnails[0].url : `https://img.youtube.com/vi/${i.videoId}/hqdefault.jpg`,
            platform: 'youtube'
        }));
    } catch(e) {
        console.warn("Primary API failed, switching to backup:", e);
    }

    // 2. Backup: Dailymotion API
    try {
        // Added duration field to filter shorts client-side
        const res = await fetch(`https://api.dailymotion.com/videos?fields=id,title,thumbnail_url,duration&search=${encodeURIComponent(query)}&limit=20`);
        if(!res.ok) throw new Error('DM Error');
        const data = await res.json();
        return data.list.filter(i => i.duration > 60).slice(0, 10).map(i => ({
            id: i.id,
            title: i.title,
            thumb: i.thumbnail_url,
            platform: 'dailymotion'
        }));
    } catch(e) {
        return []; // Fail silently to trigger mock data
    }
}

async function renderDashboard() {
    // Update Hero Tags
    document.getElementById('user-prefs-display').innerHTML = userPreferences.map(p => 
        `<span class="pref-tag"><i class="fa-solid fa-check"></i> ${p}</span>`
    ).join('');

    const feed = document.getElementById('dashboard-feed');

    if(userPreferences.length === 0) {
        feed.innerHTML = '';
        feed.innerHTML = '<div style="text-align:center; padding:20px; color:#64748b;">No preferences set. Click gear icon to setup.</div>';
        return;
    }

    // ONLINE MODE (No Key Required)
    let apiSuccess = false;
    if (navigator.onLine) {
        try {
            const promises = userPreferences.map(async topic => {
                const cacheKey = `ses_cache_v4_${topic}`; // Versioned cache
                const cached = localStorage.getItem(cacheKey);
                if (cached) {
                    const { ts, data } = JSON.parse(cached);
                    if (Date.now() - ts < CACHE_DURATION) return { topic, data };
                }

                const videos = await fetchSmartVideos(topic + ' education');
                if(videos.length === 0) throw new Error("No results");
                
                localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), data: videos }));
                return { topic, data: videos };
            });

            const results = await Promise.all(promises);

            // Success: Clear retry interval
            if(dashboardRetryInterval) {
                clearInterval(dashboardRetryInterval);
                dashboardRetryInterval = null;
            }

            feed.innerHTML = '';
            results.forEach(({topic, data}) => {
                // data is now the array of videos
                if(data.length === 0) return;
                feed.innerHTML += `<div class="row-title">${topic} Recommended</div><div class="scroll-row">${data.map(v => createVideoCard(v)).join('')}</div>`;
            });
            apiSuccess = true;

        } catch(e) {
            console.warn("Dashboard API failed, switching to mock data:", e);
        }
    }

    if(!apiSuccess) {
        if(dashboardRetryInterval) {
            clearInterval(dashboardRetryInterval);
            dashboardRetryInterval = null;
        }

    // MOCK FALLBACK (Only if no API Key)
    feed.innerHTML = '';
    userPreferences.forEach(topic => {
        const videos = youtubeDB[topic] || [];
        if(videos.length === 0) return;

        const html = `
            <div class="row-title">${topic} Recommended</div>
            <div class="scroll-row">
                ${videos.map(v => createVideoCard(v)).join('')}
            </div>
        `;
        feed.innerHTML += html;
    });
    }
}

function showOfflineState(container) {
    container.innerHTML = `<div style="text-align:center; padding:50px; color:var(--text-muted);"><i class="fa-solid fa-wifi" style="font-size:3rem; margin-bottom:20px; color:var(--danger);"></i><h3>Connection Issue</h3><p>Unable to reach YouTube servers.</p><div style="margin-top:20px; color:var(--primary); font-weight:600;"><i class="fa-solid fa-circle-notch fa-spin"></i> Retrying in 2.5s...</div></div>`;
    if(!dashboardRetryInterval) dashboardRetryInterval = setInterval(renderDashboard, 2500);
}

function createVideoCard(video) {
    const platform = video.platform || 'youtube';
    const isFav = favorites.some(f => f.id === video.id);
    const safeTitle = video.title.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    
    let thumb = video.thumb;
    if(!thumb) {
        thumb = (platform === 'dailymotion') ? `https://www.dailymotion.com/thumbnail/video/${video.id}` : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
    }

    return `
        <div class="resource-card">
            <div class="card-img" onclick="openVideoPlayer('${video.id}', '${platform}')">
                <span class="card-badge badge-video">Video</span>
                <img src="${thumb}" alt="${safeTitle}">
                <div class="play-overlay"><i class="fa-solid fa-play"></i></div>
            </div>
            <div class="card-body">
                <h3 class="card-title" onclick="openVideoPlayer('${video.id}', '${platform}')">${video.title}</h3>
                <div class="card-actions">
                    <span class="btn-action" onclick="openVideoPlayer('${video.id}', '${platform}')">WATCH <i class="fa-solid fa-arrow-right"></i></span>
                    <button class="btn-fav ${isFav ? 'active' : ''}" data-id="${video.id}" onclick="toggleFav('${video.id}', '${safeTitle}', '${thumb}', '${platform}')">
                        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

/* --- 5. ROBUST SEARCH ENGINE --- */
async function performGlobalSearch(overrideQuery = null) {
    const query = overrideQuery || document.getElementById('global-search').value;
    if(!query) return;

    // If triggered from chat, switch view
    if(overrideQuery) {
        switchView('search');
        document.getElementById('global-search').value = query;
    }

    // UI Reset
    document.getElementById('search-loader').classList.remove('hidden');
    document.getElementById('search-results').classList.add('hidden');

    // 1. Generate File Discovery Cards (The "Google Dorking" Feature)
    renderFileRow(query);

    // 2. Video Search (Real API or Mock)
    let vidMatches = [];
    
    // Try Smart Fetch (Piped/Dailymotion)
    if(navigator.onLine) {
        vidMatches = await fetchSmartVideos(query);
    }

    // Fallback to Mock if no API results
    if(vidMatches.length === 0) {
        Object.values(youtubeDB).flat().forEach(v => {
            if(v.title.toLowerCase().includes(query.toLowerCase())) vidMatches.push(v);
        });
        
        if(vidMatches.length === 0) {
            vidMatches.push({
                id: '', 
                title: `Search YouTube for "${query}"`, 
                isGeneric: true
            });
        }
    }
    
    renderVideoRow(vidMatches, query);

    // 3. Real Google Books Fetch
    try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=6`);
        const data = await res.json();
        renderBookRow(data.items || []);
    } catch(e) { console.log(e); }

    document.getElementById('search-loader').classList.add('hidden');
    document.getElementById('search-results').classList.remove('hidden');
}

/* --- 6. RENDERERS --- */

// A. File Discovery (Smart Google Dorks)
function renderFileRow(query) {
    const container = document.getElementById('file-row');
    const types = [
        { ext: 'pdf', icon: 'fa-regular fa-file-pdf pdf-icon', label: 'PDF Document' },
        { ext: 'ppt', icon: 'fa-regular fa-file-powerpoint ppt-icon', label: 'Presentation' },
        { ext: 'doc', icon: 'fa-regular fa-file-word doc-icon', label: 'Word Doc' },
        { ext: 'epub', icon: 'fa-solid fa-book-open', label: 'Ebook File' }
    ];

    container.innerHTML = types.map(t => `
        <div class="file-card">
            <i class="${t.icon} file-icon"></i>
            <div class="file-type">${t.label}</div>
            <div style="font-size:0.9rem; margin:5px 0; font-weight:600;">"${query}"</div>
            <button class="btn btn-outline file-action" onclick="openDork('${t.ext}', '${query}')">
                Find ${t.ext.toUpperCase()}s <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
        </div>
    `).join('') + `
        <div class="file-card" style="border-color: #38bdf8;">
            <i class="fa-solid fa-book file-icon" style="color:#38bdf8"></i>
            <div class="file-type">OceanofPDF</div>
            <div style="font-size:0.9rem; margin:5px 0; font-weight:600;">"${query}"</div>
            <button class="btn btn-outline file-action" onclick="window.open('https://oceanofpdf.com/?s=${encodeURIComponent(query)}', '_blank')">
                Search Site <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
        </div>
    `;
}

function openDork(type, query) {
    // The Magic Google Query - Enhanced for Study Material
    let dork = `filetype:${type}`;
    if(['pdf', 'ppt', 'doc'].includes(type)) {
        dork += ` (site:edu OR site:org)`; // Target academic sources
    }
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}+${dork}`;
    window.open(url, '_blank');
}

// B. Video Row
function renderVideoRow(videos, query) {
    const container = document.getElementById('video-row');
    container.innerHTML = videos.map(v => {
        if(v.isGeneric) {
            // Fallback if no local match
            return `
            <div class="resource-card" style="display:flex; align-items:center; justify-content:center; text-align:center; padding:20px; min-width:300px;" onclick="window.open('https://www.youtube.com/results?search_query=${query}', '_blank')">
                <div>
                    <i class="fa-brands fa-youtube" style="font-size:3rem; color:red;"></i>
                    <h3>Browse YouTube</h3>
                    <p>Click to search YouTube directly for "${query}"</p>
                </div>
            </div>`;
        }
        return createVideoCard(v);
    }).join('');
}

// C. Book Row
function renderBookRow(books) {
    const container = document.getElementById('book-row');
    container.innerHTML = books.map(b => {
        const info = b.volumeInfo;
        const img = info.imageLinks ? info.imageLinks.thumbnail : 'https://via.placeholder.com/128x190?text=No+Cover';
        return `
            <div class="resource-card" style="width:200px; min-width:200px;" onclick="window.open('${info.previewLink}', '_blank')">
                <div class="card-img" style="height:250px;">
                    <img src="${img}" style="object-fit:cover;">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${info.title}</h3>
                    <div style="font-size:0.75rem; color:#64748b;">${info.authors ? info.authors[0] : 'Unknown'}</div>
                </div>
            </div>
        `;
    }).join('');
}

/* --- 7. CHATBOT LOGIC --- */
function toggleChat() {
    document.getElementById('chat-window').classList.toggle('hidden');
}

async function sendChat() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if(!msg) return;

    addMsg(msg, 'user');
    input.value = '';

    // Show typing indicator
    const container = document.getElementById('chat-messages');
    const typingId = 'typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg msg-bot';
    typingDiv.id = typingId;
    typingDiv.innerHTML = '<i class="fa-solid fa-ellipsis fa-fade"></i>';
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;

    // Process Response
    try {
        const response = await generateBotResponse(msg);
        const typingEl = document.getElementById(typingId);
        if(typingEl) typingEl.remove();

        addMsg(response.text, 'bot');
        
        if(response.action) {
            response.action();
        }
    } catch (e) {
        const typingEl = document.getElementById(typingId);
        if(typingEl) typingEl.remove();
        addMsg("I'm having trouble connecting to the AI right now.", 'bot');
        console.error(e);
    }
}

async function generateBotResponse(msg) {
    const lower = msg.toLowerCase();
    
    // 1. GREETINGS
    if (/^(hi|hello|hey|greetings)/.test(lower)) {
        return { text: "Hello! I'm your academic assistant. I can help you find resources, manage your favorites, or navigate the app. What are you studying today?" };
    }

    // 2. NAVIGATION & SYSTEM COMMANDS
    if (lower.includes('favorite') || lower.includes('saved')) {
        return { 
            text: "I've opened your favorites folder. You can see all your saved videos and books here.",
            action: () => switchView('favorites')
        };
    }
    if (lower.includes('dashboard') || lower.includes('home')) {
        return { 
            text: "Heading back to the dashboard!",
            action: () => switchView('dash')
        };
    }
    if (lower.includes('admin')) {
        return { 
            text: "Opening the Admin Console.",
            action: () => switchView('admin')
        };
    }

    // 3. SPECIFIC SEARCH INTENTS
    // Matches: "find videos about X", "search for X", "show me X"
    const searchMatch = lower.match(/(?:search|find|show me|about|on)\s+(?:videos?|books?|resources?|documents?)?\s*(?:about|for|on)?\s*(.+)/i);
    
    if (searchMatch || lower.startsWith('search ')) {
        let topic = searchMatch ? searchMatch[1] : lower.replace('search', '').trim();
        // Clean punctuation
        topic = topic.replace(/[?.!]$/, '');
        
        // Remove conversational suffixes (e.g. "and suggest resources")
        topic = topic.split(/\s+(?:and|also|plus)\s+(?:suggest|show|find|give|search|tell|list)/i)[0];

        if(topic.length < 2) return { text: "Could you be more specific? What topic are you looking for?" };

        return {
            text: `Searching our database and the web for "<b>${topic}</b>"...`,
            action: () => performGlobalSearch(topic)
        };
    }

    // 4. DATABASE KNOWLEDGE (Meta-queries)
    if (lower.includes('what topics') || lower.includes('what can you') || lower.includes('list')) {
        const available = Object.keys(youtubeDB).slice(0, 5).join(', ');
        return { text: `I can search for anything, but I have curated collections for: ${available}, and more. Try "Search Physics".` };
    }

    // 5. GEMINI API (General Queries)
    // Using latest models from the provided catalog (v2.5 / v2.0)
    const models = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-2.0-flash-lite-preview-02-05'];
    
    for (const model of models) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: "You are a helpful academic assistant. Keep answers concise. User: " + msg }]
                    }]
                })
            });
            const data = await response.json();

            if (data.error) {
                console.warn(`Model ${model} failed:`, data.error.message);
                continue; // Try next model
            }

            if(data.candidates && data.candidates.length > 0) {
                console.log(`Success: Connected to ${model}`);
                let reply = data.candidates[0].content.parts[0].text;
                reply = reply.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); // Bold formatting
                return { text: reply };
            }
        } catch (e) {
            console.warn(`Network error on ${model}:`, e);
        }
    }
    
    return { text: "I'm having trouble connecting to the AI. Please check your API key or internet connection." };
}

function addMsg(text, sender) {
    const container = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = `chat-msg msg-${sender}`;
    div.innerHTML = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

/* --- 8. VIDEO PLAYER LOGIC --- */
function openVideoPlayer(id, platform = 'youtube') {
    document.getElementById('video-player-modal').classList.remove('hidden');
    if(platform === 'dailymotion') {
        document.getElementById('yt-player-frame').src = `https://www.dailymotion.com/embed/video/${id}?autoplay=1`;
    } else {
        document.getElementById('yt-player-frame').src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
}
function closeVideoPlayer() {
    document.getElementById('video-player-modal').classList.add('hidden');
    document.getElementById('yt-player-frame').src = '';
}

/* --- 9. FAVORITES LOGIC --- */
function toggleFav(id, title, thumb, platform = 'youtube') {
    const index = favorites.findIndex(f => f.id === id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push({ id, title, thumb, platform, type: 'Video', date: new Date().toISOString() });
    }
    localStorage.setItem('ses_favs', JSON.stringify(favorites));
    
    updateFavBadge();

    // Update UI buttons immediately
    const btns = document.querySelectorAll(`.btn-fav[data-id="${id}"]`);
    btns.forEach(btn => {
        btn.classList.toggle('active');
        const icon = btn.querySelector('i');
        if(btn.classList.contains('active')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });

    // Refresh grid if we are on favorites view
    const favView = document.getElementById('view-favorites');
    if(favView && !favView.classList.contains('hidden')) {
        renderFavorites();
    }
}

function updateFavBadge() {
    const badge = document.getElementById('fav-badge');
    if(badge) badge.innerText = favorites.length;
}

function renderFavorites() {
    const grid = document.getElementById('fav-grid');
    if(!grid) return;
    
    if(favorites.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:#64748b;">No favorites saved yet. Search for videos to add them here!</div>';
        return;
    }
    
    grid.innerHTML = favorites.map(v => createVideoCard(v)).join('');
}

/* --- 10. THEME & ASSIGNMENTS & ADMIN --- */

// Theme Logic
function initTheme() {
    const theme = localStorage.getItem('ses_theme');
    if(theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').className = 'fa-solid fa-sun';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('ses_theme', isDark ? 'dark' : 'light');
    document.getElementById('theme-icon').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

// Assignment Logic
function toggleAssignModal(show) {
    const modal = document.getElementById('assign-modal');
    if(show) modal.classList.remove('hidden');
    else modal.classList.add('hidden');
}

function saveAssignment() {
    const title = document.getElementById('assign-title').value;
    const date = document.getElementById('assign-date').value;
    
    if(title && date) {
        assignments.push({ title, date, id: Date.now() });
        // Sort by date
        assignments.sort((a,b) => new Date(a.date) - new Date(b.date));
        localStorage.setItem('ses_assign', JSON.stringify(assignments));
        
        renderAssignments();
        toggleAssignModal(false);
        document.getElementById('assign-title').value = '';
        document.getElementById('assign-date').value = '';
    }
}

function renderAssignments() {
    const container = document.getElementById('dashboard-assignments');
    if(!container) return;

    if(assignments.length === 0) {
        container.innerHTML = '<div style="font-size:0.8rem; color:var(--text-muted); font-style:italic;">No pending assignments.</div>';
        return;
    }

    // Show top 3
    container.innerHTML = assignments.slice(0, 3).map(a => `
        <div class="assign-card">
            <div style="font-weight:600; font-size:0.9rem;">${a.title}</div>
            <div class="assign-date">${new Date(a.date).toLocaleDateString()}</div>
            <i class="fa-solid fa-check" style="color:var(--success); cursor:pointer; margin-left:10px;" onclick="completeAssignment(${a.id})"></i>
        </div>
    `).join('');
}

function completeAssignment(id) {
    assignments = assignments.filter(a => a.id !== id);
    localStorage.setItem('ses_assign', JSON.stringify(assignments));
    renderAssignments();
}

// Admin Logic (Mock)
function renderAdminPanel() {
    const tbody = document.getElementById('admin-uploads-list');
    // Mock Data
    const uploads = [
        { name: 'Notes_Physics_Ch1.pdf', type: 'PDF', user: 'John Doe', date: '2023-10-25' },
        { name: 'React_Project_Final.zip', type: 'ZIP', user: 'Jane Smith', date: '2023-10-26' },
        { name: 'History_Essay_Draft.docx', type: 'DOC', user: 'Mike Ross', date: '2023-10-27' }
    ];

    tbody.innerHTML = uploads.map(u => `
        <tr>
            <td><i class="fa-regular fa-file"></i> ${u.name}</td>
            <td><span style="background:#eff6ff; color:var(--primary); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">${u.type}</span></td>
            <td>${u.user}</td>
            <td>${u.date}</td>
            <td>
                <button class="btn-outline" style="padding:5px 10px; color:var(--success); border-color:var(--success);" onclick="this.closest('tr').remove()"><i class="fa-solid fa-check"></i></button>
                <button class="btn-outline" style="padding:5px 10px; color:var(--danger); border-color:var(--danger);" onclick="this.closest('tr').remove()"><i class="fa-solid fa-xmark"></i></button>
            </td>
        </tr>
    `).join('');
}
