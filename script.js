/* --- MODULE 1: config.js --- */
        const FrameConfigs = {
            'minimalis': { layout: '4-strip', name: 'Minimalis', desc: 'Putih Klasik', uiBg: '#ffffff', uiBoxes: '#e5e5e5', drawBg: '#ffffff', textColor: '#262626', subColor: '#737373', stickers: ['🤍', '✨', '☁️', '🕊️'] },
            'noir': { layout: '4-strip', name: 'Noir', desc: 'Hitam Elegan', uiBg: '#171717', uiBoxes: '#404040', drawBg: '#171717', textColor: '#ffffff', subColor: '#a3a3a3', stickers: ['🖤', '✨', '🕷️', '🕸️'] },
            'oatmeal': { layout: '4-strip', name: 'Oatmeal', desc: 'Krem Hangat', uiBg: '#f5f0e6', uiBoxes: '#e5dfd3', drawBg: '#f5f0e6', textColor: '#5c5346', subColor: '#8a7f6f', stickers: ['🤎', '🧸', '💌', '✨'] },
            'matcha': { layout: '4-strip', name: 'Matcha', desc: 'Hijau Soft', uiBg: '#eef2eb', uiBoxes: '#d8e0d3', drawBg: '#eef2eb', textColor: '#3d4a35', subColor: '#6a7a60', stickers: ['💚', '🍵', '🍀', '✨'] },
            'denim': { layout: '4-strip', name: 'Denim', desc: 'Biru Pudar', uiBg: '#e8ecef', uiBoxes: '#cfd6db', drawBg: '#e8ecef', textColor: '#2a3b4a', subColor: '#5c7285', stickers: ['💙', '🦋', '🌧️', '✨'] },
            'mocha': { layout: '4-strip', name: 'Mocha', desc: 'Coklat Kopi', uiBg: '#4a3f35', uiBoxes: '#6b5d50', drawBg: '#4a3f35', textColor: '#f5f0e6', subColor: '#a89d91', stickers: ['🤎', '☕', '🍩', '✨'] },
            'blush': { layout: '4-strip', name: 'Blush', desc: 'Gradasi Y2K', uiBg: 'linear-gradient(to bottom right, #ffe4e6, #fff7ed)', uiBoxes: 'rgba(255,255,255,0.6)', drawBg: 'gradient-blush', textColor: '#831843', subColor: '#be185d', stickers: ['💖', '🌸', '🎀', '✨'] },
            'checker': { layout: '4-strip', name: 'Checker', desc: 'Papan Catur', uiBg: '#f5f5f4', uiBoxes: 'rgba(255,255,255,0.9)', drawBg: 'pattern-checker', textColor: '#262626', subColor: '#737373', stickers: ['🏁', '🖤', '🤍', '✨'] },
            'polkadot': { layout: '4-strip', name: 'Polkadot', desc: 'Titik Retro', uiBg: '#fafafa', uiBoxes: 'rgba(255,255,255,0.95)', drawBg: 'pattern-dots', textColor: '#262626', subColor: '#737373', stickers: ['🔴', '❤️', '🎈', '✨'] },
            'lucu': { layout: '4-strip', name: 'Lucu Gemes', desc: 'Pastel Ceria', uiBg: '#fdf4ff', uiBoxes: '#fce7f3', drawBg: 'pattern-lucu', textColor: '#831843', subColor: '#be185d', stickers: ['💕', '🍓', '🍰', '✨'] },
            'sangar': { layout: '4-strip', name: 'Sangar', desc: 'Dark & Fierce', uiBg: '#0f172a', uiBoxes: '#7f1d1d', drawBg: 'pattern-grid', textColor: '#ef4444', subColor: '#b91c1c', stickers: ['❤️‍🔥', '💀', '🎸', '✨'] },
            'unisex': { layout: '4-strip', name: 'Urban', desc: 'Cool Unisex', uiBg: '#f3f4f6', uiBoxes: '#94a3b8', drawBg: '#cbd5e1', textColor: '#0f172a', subColor: '#334155', stickers: ['🤍', '🛹', '🎧', '✨'] },
            'y2k-stars': { layout: '4-strip', name: 'Y2K Stars', desc: 'Cute Pink 90s', uiBg: 'linear-gradient(135deg, #ffc8dd 0%, #bde0fe 100%)', uiBoxes: 'rgba(255,255,255,0.7)', drawBg: 'img:assets/bg_y2k_stars.png', textColor: '#ff006e', subColor: '#fb5607', stickers: ['💖', '⭐', '💿', '✨'] },
            'clouds': { layout: '4-strip', name: 'Dreamy Clouds', desc: 'Pastel Sky', uiBg: '#a2d2ff', uiBoxes: 'rgba(255,255,255,0.8)', drawBg: 'img:assets/bg_cloud_sky.png', textColor: '#0077b6', subColor: '#03045e', stickers: ['💙', '☁️', '🕊️', '✨'] },
            'vintage-floral': { layout: '4-strip', name: 'Vintage Floral', desc: 'Soft Warm', uiBg: '#e9edc9', uiBoxes: 'rgba(255,255,255,0.8)', drawBg: 'img:assets/bg_vintage_floral.png', textColor: '#606c38', subColor: '#283618', stickers: ['💛', '🌻', '🌼', '✨'] },
            'polaroid': { layout: '1-shot', name: 'Polaroid', desc: '1 Foto Instan', uiBg: '#ffffff', uiBoxes: '#e5e5e5', drawBg: '#ffffff', textColor: '#171717', subColor: '#525252' },
            'grid-cute': { layout: '2x2-grid', name: 'Grid Cute', desc: 'Pink 🎀 🧸', uiBg: '#ffe4e6', uiBoxes: '#fda4af', drawBg: '#ffe4e6', textColor: '#be123c', subColor: '#e11d48', stickers: ['🎀', '🌷', '🍰', '🧸'] },
            'grid-retro': { layout: '2x2-grid', name: 'Grid Retro', desc: '90s 📻 📼', uiBg: '#fef08a', uiBoxes: '#fde047', drawBg: '#fef08a', textColor: '#854d0e', subColor: '#ca8a04', stickers: ['📻', '📼', '🕹️', '⭐'] },
            'grid-dark': { layout: '2x2-grid', name: 'Grid Dark', desc: 'Night 🌙 ✨', uiBg: '#1e1b4b', uiBoxes: '#312e81', drawBg: '#1e1b4b', textColor: '#e0e7ff', subColor: '#a5b4fc', stickers: ['🌙', '✨', '🪐', '🔮'] },
            'grid-nature': { layout: '2x2-grid', name: 'Grid Nature', desc: 'Green 🌿 🍄', uiBg: '#dcfce7', uiBoxes: '#bbf7d0', drawBg: '#dcfce7', textColor: '#14532d', subColor: '#166534', stickers: ['🌿', '🍄', '🦋', '🌸'] }
        };

        const Captions = [
            "core memories.", "serendipity.", "a snippet of life.", 
            "fleeting moments.", "stolen seconds.", "good times only.", 
            "youth & aesthetic.", "just vibe.", "captured in time."
        ];

        const AppState = {
            selectedFrameId: 'minimalis',
            selectedFilter: 'none',
            isNightMode: false,
            stream: null,
            isFrontCamera: true,
            capturedPhotos: [], // Menyimpan foto murni (tanpa filter)
            finalUrl: null,
            finalGifUrl: null,
            localZipUrl: null,
            currentPhotoIndex: 1,
            totalPhotosToTake: 4
        };

        /* --- STREAMING_CHUNK: MODULE 2 - Manajemen UI (Tampilan) --- */
        const UI = {
            initFrames() {
                const container = document.getElementById('frame-options-container');
                let html = '';
                let isFirst = true;

                for (const [id, config] of Object.entries(FrameConfigs)) {
                    const isChecked = isFirst ? 'checked' : '';
                    let boxesHtml = '';
                    
                    if (config.layout === '1-shot') {
                        boxesHtml = `
                            <div class="w-full mb-4 border border-black border-opacity-5" style="aspect-ratio: 1/1; background-color: ${config.uiBoxes};"></div>
                            <div class="h-6 w-full flex items-center justify-center">
                                <div class="w-1/2 h-1 rounded-full" style="background-color: ${config.uiBoxes};"></div>
                            </div>
                        `;
                    } else if (config.layout === '2x2-grid') {
                        boxesHtml = `
                            <div class="w-full grid grid-cols-2 gap-1 mb-2 border border-black border-opacity-5 p-1 rounded-sm" style="background-color: ${config.uiBg};">
                                <div class="w-full rounded-sm shadow-sm" style="aspect-ratio: 1/1; background-color: ${config.uiBoxes};"></div>
                                <div class="w-full rounded-sm shadow-sm" style="aspect-ratio: 1/1; background-color: ${config.uiBoxes};"></div>
                                <div class="w-full rounded-sm shadow-sm" style="aspect-ratio: 1/1; background-color: ${config.uiBoxes};"></div>
                                <div class="w-full rounded-sm shadow-sm" style="aspect-ratio: 1/1; background-color: ${config.uiBoxes};"></div>
                            </div>
                            <div class="h-4 w-full flex items-center justify-center">
                                <div class="w-1/2 h-1 rounded-full opacity-50" style="background-color: ${config.textColor};"></div>
                            </div>
                        `;
                    } else {
                        boxesHtml = `
                            <div class="w-full flex-1 rounded-sm shadow-sm" style="background-color: ${config.uiBoxes};"></div>
                            <div class="w-full flex-1 rounded-sm shadow-sm" style="background-color: ${config.uiBoxes};"></div>
                            <div class="w-full flex-1 rounded-sm shadow-sm" style="background-color: ${config.uiBoxes};"></div>
                            <div class="w-full flex-1 rounded-sm shadow-sm" style="background-color: ${config.uiBoxes};"></div>
                            <div class="h-4 w-full mt-1 flex items-center justify-center">
                                <div class="w-1/3 h-1 opacity-50 rounded-full" style="background-color: ${config.textColor};"></div>
                            </div>
                        `;
                    }

                    let bgStyle = config.uiBg.startsWith('linear') ? `background-image: ${config.uiBg};` : `background-color: ${config.uiBg};`;
                    let patternClass = (config.drawBg && config.drawBg.includes('pattern')) ? config.drawBg : '';
                    
                    let stickersHtml = '';
                    if (config.stickers && config.stickers.length > 0) {
                        const positions = [
                            { top: '8%', left: '12%', rotate: '-15deg' },
                            { top: '35%', right: '10%', rotate: '15deg' },
                            { bottom: '20%', left: '10%', rotate: '-10deg' },
                            { bottom: '8%', right: '15%', rotate: '20deg' }
                        ];
                        stickersHtml = `<div class="absolute inset-0 pointer-events-none overflow-hidden">`;
                        config.stickers.forEach((sticker, i) => {
                            const pos = positions[i % positions.length];
                            let styleStr = `position: absolute; font-size: 1.1rem; transform: rotate(${pos.rotate});`;
                            if(pos.top) styleStr += ` top: ${pos.top};`;
                            if(pos.bottom) styleStr += ` bottom: ${pos.bottom};`;
                            if(pos.left) styleStr += ` left: ${pos.left};`;
                            if(pos.right) styleStr += ` right: ${pos.right};`;
                            stickersHtml += `<span style="${styleStr}">${sticker}</span>`;
                        });
                        stickersHtml += `</div>`;
                    }

                    html += `
                        <label class="cursor-pointer group relative flex-shrink-0 snap-center w-36 sm:w-40">
                            <input type="radio" name="frame-choice" value="${id}" ${isChecked} class="sr-only frame-radio">
                            <div class="w-full p-2 rounded-2xl border-2 border-transparent frame-card transition-all flex flex-col gap-1 relative overflow-hidden shadow-sm ${patternClass}" style="aspect-ratio: 1/2.2; ${bgStyle} color: ${config.textColor};">
                                ${boxesHtml}
                                ${stickersHtml}
                                <div class="absolute inset-0 ring-1 ring-inset ring-black ring-opacity-5 rounded-2xl pointer-events-none"></div>
                            </div>
                            <div class="text-center mt-3">
                                <span class="block text-sm font-bold text-gray-500 group-hover:text-gray-800 transition-colors label-text">${config.name}</span>
                                <span class="block text-gray-400" style="font-size: 10px;">${config.desc}</span>
                            </div>
                        </label>
                    `;
                    isFirst = false;
                }
                container.innerHTML = html;

                // Fungsi Scroll dengan Mouse (Drag & Wheel) untuk Desktop
                container.addEventListener('wheel', (evt) => {
                    evt.preventDefault();
                    container.scrollLeft += evt.deltaY;
                });

                let isDown = false, startX, scrollLeft, didMove = false;
                container.addEventListener('mousedown', (e) => {
                    isDown = true; didMove = false;
                    startX = e.pageX - container.offsetLeft;
                    scrollLeft = container.scrollLeft;
                });
                container.addEventListener('mouseleave', () => { isDown = false; });
                container.addEventListener('mouseup', () => { isDown = false; });
                container.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    const x = e.pageX - container.offsetLeft;
                    const walk = (x - startX) * 2;
                    if(Math.abs(walk) > 5) didMove = true;
                    container.scrollLeft = scrollLeft - walk;
                });
                container.addEventListener('click', (e) => {
                    // Cegah klik terpilih jika user hanya berniat drag/geser
                    if (didMove) { e.preventDefault(); e.stopPropagation(); }
                }, true);

                container.addEventListener('change', (e) => {
                    if (e.target.name === 'frame-choice') {
                        AppState.selectedFrameId = e.target.value;
                    }
                });

                // Tombol Navigasi Manual
                const btnLeft = document.getElementById('btn-scroll-left');
                const btnRight = document.getElementById('btn-scroll-right');
                if (btnLeft && btnRight) {
                    btnLeft.addEventListener('click', () => {
                        container.scrollBy({ left: -200, behavior: 'smooth' });
                    });
                    btnRight.addEventListener('click', () => {
                        container.scrollBy({ left: 200, behavior: 'smooth' });
                    });
                }
            },

            showView(viewId) {
                const views = ['view-home', 'view-camera', 'view-result'];
                views.forEach(id => {
                    const el = document.getElementById(id);
                    if(el) {
                        el.classList.add('hidden');
                        el.classList.remove('flex');
                    }
                });
                
                const targetId = viewId.startsWith('view-') ? viewId : `view-${viewId}`;
                const activeView = document.getElementById(targetId);
                
                if (activeView) {
                    activeView.classList.remove('hidden'); 
                    activeView.classList.add('flex');
                }

                const navActions = document.getElementById('nav-actions');
                if (navActions) {
                    if (targetId === 'view-camera') navActions.classList.remove('hidden');
                    else navActions.classList.add('hidden');
                }
            },

            showToast(msg, type = "info") {
                const container = document.getElementById('toast-container');
                const toast = document.createElement('div');
                let icon = `<svg style="width: 20px; height: 20px;" class="text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
                if (type === "success") icon = `<svg style="width: 20px; height: 20px;" class="text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
                else if (type === "error") icon = `<svg style="width: 20px; height: 20px;" class="text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
                
                toast.className = `flex items-center gap-3 bg-white bg-opacity-95 backdrop-blur-md text-gray-800 px-5 py-3.5 rounded-full shadow-lg border border-gray-200 toast-enter`;
                toast.innerHTML = `${icon} <p class="text-sm font-bold tracking-wide m-0">${msg}</p>`;
                container.appendChild(toast);

                setTimeout(() => {
                    toast.style.opacity = '0'; toast.style.transform = 'translateY(-20px)'; toast.style.transition = 'all 0.4s ease';
                    setTimeout(() => toast.remove(), 400);
                }, 3000);
            },

            renderLivePreview(frameId) {
                const container = document.getElementById('live-frame-preview');
                const config = FrameConfigs[frameId];
                
                let boxesHtml = '';
                const totalPhotos = config.layout === '1-shot' ? 1 : 4;

                if (config.layout === '2x2-grid') {
                    boxesHtml = `<div class="w-full grid grid-cols-2 gap-1 mb-1">`;
                    for (let i = 1; i <= 4; i++) {
                        boxesHtml += `
                            <div class="w-full relative overflow-hidden rounded-sm shadow-sm bg-gray-200" style="aspect-ratio: 1/1; background-color: ${config.uiBoxes}; border: 1px solid rgba(0,0,0,0.05);">
                                <img id="live-slot-${i}" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300">
                            </div>
                        `;
                    }
                    boxesHtml += `</div>
                            <div class="h-3 w-full flex items-center justify-center mt-1">
                                <div class="w-1/2 h-1 opacity-50 rounded-full" style="background-color: ${config.textColor};"></div>
                            </div>`;
                } else {
                    for (let i = 1; i <= totalPhotos; i++) {
                        if (config.layout === '1-shot') {
                            boxesHtml += `
                                <div class="w-full mb-2 border border-black border-opacity-5 relative overflow-hidden bg-gray-200" style="aspect-ratio: 1/1; background-color: ${config.uiBoxes};">
                                    <img id="live-slot-${i}" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300">
                                </div>
                                <div class="h-4 w-full flex items-center justify-center">
                                    <div class="w-1/2 h-1 rounded-full" style="background-color: ${config.uiBoxes};"></div>
                                </div>
                            `;
                        } else {
                            boxesHtml += `
                                <div class="w-full flex-1 relative overflow-hidden rounded-[2px] shadow-sm bg-gray-200" style="background-color: ${config.uiBoxes};">
                                    <img id="live-slot-${i}" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300">
                                </div>
                            `;
                        }
                    }
                    
                    if (config.layout !== '1-shot') {
                         boxesHtml += `
                                <div class="h-3 w-full mt-1 flex items-center justify-center">
                                    <div class="w-1/3 h-1 opacity-50 rounded-full" style="background-color: ${config.textColor};"></div>
                                </div>
                            `;
                    }
                }

                let bgStyle = config.uiBg.startsWith('linear') ? `background-image: ${config.uiBg};` : `background-color: ${config.uiBg};`;
                let patternClass = (config.drawBg && config.drawBg.includes('pattern')) ? config.drawBg : '';
                
                let stickersHtml = '';
                if (config.stickers && config.stickers.length > 0) {
                    const positions = [
                        { top: '8%', left: '12%', rotate: '-15deg' },
                        { top: '35%', right: '10%', rotate: '15deg' },
                        { bottom: '20%', left: '10%', rotate: '-10deg' },
                        { bottom: '8%', right: '15%', rotate: '20deg' }
                    ];
                    stickersHtml = `<div class="absolute inset-0 pointer-events-none overflow-hidden">`;
                    config.stickers.forEach((sticker, i) => {
                        const pos = positions[i % positions.length];
                        let styleStr = `position: absolute; font-size: 1.4rem; transform: rotate(${pos.rotate});`;
                        if(pos.top) styleStr += ` top: ${pos.top};`;
                        if(pos.bottom) styleStr += ` bottom: ${pos.bottom};`;
                        if(pos.left) styleStr += ` left: ${pos.left};`;
                        if(pos.right) styleStr += ` right: ${pos.right};`;
                        stickersHtml += `<span style="${styleStr}">${sticker}</span>`;
                    });
                    stickersHtml += `</div>`;
                }

                container.innerHTML = `
                    <div class="w-full p-2 md:p-3 rounded-2xl shadow-lg border border-gray-200 flex flex-col gap-1 md:gap-1.5 relative overflow-hidden ${patternClass}" style="aspect-ratio: 1/2.2; ${bgStyle}">
                        ${boxesHtml}
                        ${stickersHtml}
                    </div>
                `;
            }
        };

        /* --- STREAMING_CHUNK: MODULE 3 - Pengendali Kamera --- */
        const Camera = {
            video: document.getElementById('camera-stream'),

            async init() {
                try {
                    await navigator.mediaDevices.getUserMedia({ video: true });
                    const devices = await navigator.mediaDevices.enumerateDevices();
                    const vDevices = devices.filter(d => d.kind === 'videoinput');
                    
                    if (vDevices.length > 0) this.startStream(vDevices[0].deviceId);
                    else UI.showToast("Kamera tidak ditemukan", "error");
                } catch (err) {
                    UI.showToast("Gagal mengakses kamera. Mohon izinkan kamera di browser Anda.", "error");
                }
            },

            async startStream(deviceId = null) {
                if (AppState.stream) AppState.stream.getTracks().forEach(t => t.stop());
                
                const constraints = { video: deviceId ? { deviceId: { exact: deviceId } } : { facingMode: "user" } };
                
                try {
                    AppState.stream = await navigator.mediaDevices.getUserMedia(constraints);
                    this.video.srcObject = AppState.stream;

                    const track = AppState.stream.getVideoTracks()[0];
                    const label = track.label.toLowerCase();
                    AppState.isFrontCamera = label.includes('front') || label.includes('user');
                    
                    // Mirror dihilangkan sesuai request
                    this.video.classList.remove('mirror');
                } catch (err) { 
                    UI.showToast("Kamera gagal dimuat atau sedang digunakan.", "error"); 
                }
            },

            applyFilter() {
                let fStr = AppState.selectedFilter !== 'none' ? AppState.selectedFilter : '';
                if (AppState.isNightMode) fStr += ' brightness(1.3) contrast(1.1)';
                this.video.style.filter = fStr.trim() !== '' ? fStr : 'none';
            }
        };

        /* --- STREAMING_CHUNK: MODULE 4 - Logika Pemotretan dan Pemrosesan Gambar (Canvas) --- */
        const Capture = {
            async takeSinglePhoto() {
                if (!AppState.stream) {
                    UI.showToast("Kamera belum aktif.", "error");
                    return;
                }

                document.getElementById('btn-take-photo').classList.add('hidden');
                
                const dot = document.getElementById(`dot-${AppState.currentPhotoIndex}`);
                if(dot) {
                    dot.classList.add('active');
                    dot.classList.remove('bg-opacity-40');
                }

                await this.countdown(AppState.currentPhotoIndex, AppState.totalPhotosToTake);
                
                const config = FrameConfigs[AppState.selectedFrameId];
                const isSquare = (config.layout === '1-shot' || config.layout === '2x2-grid');
                
                const photoData = this.snap(isSquare);
                
                // Tampilkan preview
                const preview = document.getElementById('camera-preview');
                preview.src = photoData;
                preview.classList.remove('hidden');
                preview.classList.remove('mirror');

                // Masukkan ke live slot
                const liveSlot = document.getElementById(`live-slot-${AppState.currentPhotoIndex}`);
                if (liveSlot) {
                    liveSlot.src = photoData;
                    liveSlot.classList.remove('opacity-0');
                    liveSlot.classList.remove('mirror');
                }
                
                // Tampilkan tombol konfirmasi Ulang / Lanjut
                document.getElementById('confirm-controls').classList.remove('hidden');
                document.getElementById('confirm-controls').classList.add('flex');
            },

            countdown(current, total) {
                return new Promise((resolve) => {
                    let count = 3;
                    const overlay = document.getElementById('countdown-display');
                    const text = document.getElementById('countdown-text');
                    
                    overlay.classList.remove('hidden');
                    text.innerText = count;
                    document.getElementById('instruction-text').innerText = total > 1 ? `Pose ${current} dari ${total}` : 'Senyum!';

                    const interval = setInterval(() => {
                        count--;
                        if (count > 0) {
                            text.innerText = count;
                        } else {
                            clearInterval(interval);
                            overlay.classList.add('hidden');
                            
                            const flash = document.getElementById('flash-effect');
                            flash.style.opacity = '1';
                            setTimeout(() => flash.style.opacity = '0', 150);
                            setTimeout(resolve, 50); 
                        }
                    }, 1000);
                });
            },

            snap(isSquare) {
                const cvs = document.createElement('canvas');
                const ctx = cvs.getContext('2d');
                const vid = Camera.video;
                
                const tW = 900;
                const tH = isSquare ? 900 : 1200; 
                cvs.width = tW; cvs.height = tH;
                
                const vW = vid.videoWidth || 640;
                const vH = vid.videoHeight || 480;
                const targetRatio = tW / tH, videoRatio = vW / vH;
                let sX = 0, sY = 0, sW = vW, sH = vH;
                
                if (videoRatio > targetRatio) {
                    sW = vH * targetRatio; sX = (vW - sW) / 2;
                } else {
                    sH = vW / targetRatio; sY = (vH - sH) / 2;
                }

                // Ambil murni tanpa filter (Filter akan diterapkan saat renderCanvas)
                ctx.filter = 'none'; 
                // ctx.scale(-1, 1) dihilangkan agar tidak mirror

                ctx.drawImage(vid, sX, sY, sW, sH, 0, 0, tW, tH);
                return cvs.toDataURL('image/jpeg', 0.95);
            },

            async drawBgPattern(ctx, style, w, h) {
                if(style.startsWith('img:')) {
                    const imgUrl = style.substring(4);
                    try {
                        const img = await this.loadImg(imgUrl);
                        const pattern = ctx.createPattern(img, 'repeat');
                        ctx.fillStyle = pattern; 
                        ctx.fillRect(0,0,w,h);
                    } catch (e) {
                        ctx.fillStyle = '#ffffff'; ctx.fillRect(0,0,w,h);
                    }
                }
                else if(style === 'pattern-checker') {
                    ctx.fillStyle = '#e5e5e5'; ctx.fillRect(0,0,w,h);
                    ctx.fillStyle = '#f5f5f5';
                    for(let y=0; y<h; y+=80) {
                        for(let x=0; x<w; x+=80) {
                            if((x/80 + y/80)%2 === 0) ctx.fillRect(x,y,80,80);
                        }
                    }
                } 
                else if(style === 'pattern-dots') {
                    ctx.fillStyle = '#fafafa'; ctx.fillRect(0,0,w,h);
                    ctx.fillStyle = '#d1d5db';
                    for(let y=20; y<h; y+=40) {
                        for(let x=20; x<w; x+=40) {
                            ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill();
                        }
                    }
                }
                else if(style === 'gradient-blush') {
                    const grd = ctx.createLinearGradient(0,0,w,h);
                    grd.addColorStop(0, '#ffe4e6'); grd.addColorStop(1, '#fff7ed');
                    ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
                }
                else if(style === 'pattern-lucu') {
                    ctx.fillStyle = '#fdf4ff'; ctx.fillRect(0,0,w,h);
                    ctx.fillStyle = '#fbcfe8';
                    for(let y=0; y<h; y+=80) {
                        for(let x=0; x<w; x+=80) {
                            if((x/80 + y/80)%2 !== 0) {
                                ctx.beginPath(); ctx.arc(x+40,y+40,25,0,Math.PI*2); ctx.fill();
                            } else {
                                ctx.fillRect(x+35, y+20, 10, 40);
                                ctx.fillRect(x+20, y+35, 40, 10);
                            }
                        }
                    }
                }
                else if(style === 'pattern-grid') {
                    ctx.fillStyle = '#0f172a'; ctx.fillRect(0,0,w,h);
                    ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 3;
                    for(let y=0; y<h; y+=50) {
                        ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke();
                    }
                    for(let x=0; x<w; x+=50) {
                        ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke();
                    }
                }
                else {
                    ctx.fillStyle = style; ctx.fillRect(0,0,w,h);
                }
            },

            async renderCanvas(config, autoDl = true) {
                const cvs = document.createElement('canvas');
                const ctx = cvs.getContext('2d');
                
                // Siapkan string filter yang dipilih (dari AppState)
                let fStr = AppState.selectedFilter !== 'none' ? AppState.selectedFilter : '';
                if (AppState.isNightMode) fStr += ' brightness(1.3) contrast(1.1)';
                const canvasFilter = fStr.trim() !== '' ? fStr : 'none';

                const margin = 50; 
                const pW = 900;
                let bottomM = 300; 

                if (config.layout === '1-shot') {
                    const pH = 900; 
                    bottomM = 400; 
                    cvs.width = pW + (margin * 2);
                    cvs.height = margin + pH + bottomM;
                    
                    await this.drawBgPattern(ctx, config.drawBg, cvs.width, cvs.height);
                    
                    const img = await this.loadImg(AppState.capturedPhotos[0]);
                    
                    ctx.fillStyle = '#111111';
                    ctx.fillRect(margin-2, margin-2, pW+4, pH+4);
                    
                    ctx.filter = canvasFilter; // Terapkan Filter di sini
                    ctx.drawImage(img, margin, margin, pW, pH);
                    ctx.filter = 'none';
                } else if (config.layout === '2x2-grid') {
                    const pH = 900; 
                    bottomM = 400;
                    const gap = 40;
                    cvs.width = (pW * 2) + gap + (margin * 2);
                    cvs.height = (pH * 2) + gap + margin + bottomM;
                    
                    await this.drawBgPattern(ctx, config.drawBg, cvs.width, cvs.height);
                    
                    for (let i = 0; i < 4; i++) {
                        const img = await this.loadImg(AppState.capturedPhotos[i]);
                        const col = i % 2;
                        const row = Math.floor(i / 2);
                        const xPos = margin + (col * (pW + gap));
                        const yPos = margin + (row * (pH + gap));
                        
                        ctx.shadowColor = 'rgba(0,0,0,0.1)'; ctx.shadowBlur = 15; ctx.shadowOffsetY = 5;
                        
                        ctx.fillStyle = config.uiBoxes;
                        ctx.fillRect(xPos - 12, yPos - 12, pW + 24, pH + 24);
                        
                        ctx.filter = canvasFilter;
                        ctx.drawImage(img, xPos, yPos, pW, pH);
                        
                        ctx.filter = 'none';
                        ctx.shadowColor = 'transparent';
                        
                        ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(0,0,0,0.1)';
                        ctx.strokeRect(xPos, yPos, pW, pH);
                    }
                    
                    if (config.stickers && config.stickers.length > 0) {
                        ctx.font = '160px Arial';
                        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                        const positions = [
                            {x: margin + 20, y: margin + 30, a: -15, s: 0},
                            {x: cvs.width - margin - 30, y: margin + pW/2, a: 15, s: 1},
                            {x: margin + pW + gap/2, y: margin + pH + gap/2, a: 0, s: 2},
                            {x: margin - 10, y: margin + pH + gap + pH/2, a: -10, s: 3},
                            {x: margin + pW + gap + pW/2, y: margin - 40, a: 10, s: 0},
                            {x: margin + pW/2 - 50, y: cvs.height - bottomM + 20, a: -20, s: 1},
                            {x: cvs.width - margin + 20, y: cvs.height - bottomM - 50, a: 20, s: 2}
                        ];
                        
                        positions.forEach(pos => {
                            const sticker = config.stickers[pos.s % config.stickers.length];
                            ctx.save();
                            ctx.translate(pos.x, pos.y);
                            ctx.rotate(pos.a * Math.PI / 180);
                            ctx.fillText(sticker, 0, 0);
                            ctx.restore();
                        });
                    }
                } else {
                    const pH = 1200;
                    cvs.width = pW + (margin * 2);
                    cvs.height = margin + (4 * pH) + (3 * margin) + bottomM;

                    await this.drawBgPattern(ctx, config.drawBg, cvs.width, cvs.height);

                    // Tambahan efek lucu (Background Stickers)
                    if (config.drawBg === 'pattern-lucu' || config.drawBg.includes('y2k-stars') || config.id === 'lucu') {
                        const drawHeart = (x, y, size, angle) => {
                            ctx.save(); ctx.translate(x, y); ctx.rotate(angle); ctx.scale(size, size);
                            ctx.beginPath(); ctx.moveTo(0, 0);
                            ctx.bezierCurveTo(-15, -15, -30, 10, 0, 30);
                            ctx.bezierCurveTo(30, 10, 15, -15, 0, 0);
                            ctx.fillStyle = '#ff6b81'; ctx.globalAlpha = 0.6; ctx.fill(); ctx.restore();
                        };
                        const drawStar = (x, y, size, angle) => {
                            ctx.save(); ctx.translate(x, y); ctx.rotate(angle); ctx.scale(size, size);
                            ctx.beginPath();
                            for(let j=0; j<5; j++) { ctx.lineTo(Math.cos( (18 + j*72)/180*Math.PI ) * 20, -Math.sin( (18 + j*72)/180*Math.PI ) * 20); ctx.lineTo(Math.cos( (54 + j*72)/180*Math.PI ) * 8, -Math.sin( (54 + j*72)/180*Math.PI ) * 8); }
                            ctx.closePath(); ctx.fillStyle = '#feca57'; ctx.globalAlpha = 0.6; ctx.fill(); ctx.restore();
                        };
                        for(let i=0; i<15; i++) {
                            drawHeart(Math.random()*cvs.width, Math.random()*(cvs.height - bottomM), 0.5 + Math.random()*1, Math.random()*Math.PI*2);
                            drawStar(Math.random()*cvs.width, Math.random()*(cvs.height - bottomM), 0.5 + Math.random()*1, Math.random()*Math.PI*2);
                        }
                    }

                    if(config.drawBg.includes('pattern') || config.drawBg.startsWith('img:')) {
                        if(config.drawBg === 'pattern-grid') {
                            ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
                        } else if(config.drawBg === 'pattern-lucu') {
                            ctx.fillStyle = 'rgba(253, 244, 255, 0.95)';
                        } else {
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                        }
                        ctx.fillRect(0, cvs.height - bottomM - 50, cvs.width, bottomM + 50);
                    }

                    for (let i = 0; i < 4; i++) {
                        const img = await this.loadImg(AppState.capturedPhotos[i]);
                        const yPos = margin + (i * (pH + margin));
                        
                        ctx.shadowColor = 'rgba(0,0,0,0.1)'; ctx.shadowBlur = 15; ctx.shadowOffsetY = 5;
                        
                        ctx.filter = canvasFilter; // Terapkan filter di sini
                        ctx.drawImage(img, margin, yPos, pW, pH);
                        
                        ctx.filter = 'none';
                        ctx.shadowColor = 'transparent';

                        if(config.drawBg !== '#171717' && config.drawBg !== '#4a3f35') {
                            ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(0,0,0,0.05)';
                            ctx.strokeRect(margin, yPos, pW, pH);
                        }
                    }

                    if (config.stickers && config.stickers.length > 0) {
                        ctx.font = '160px Arial';
                        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                        const positions = [
                            {x: margin + 80, y: margin + 80, a: -15, s: 0},
                            {x: cvs.width - margin - 80, y: margin + pH - 80, a: 15, s: 1},
                            {x: margin + 80, y: margin + pH + margin + 80, a: -10, s: 2},
                            {x: cvs.width - margin - 80, y: margin + (2 * (pH + margin)) + 80, a: 20, s: 3},
                            {x: margin + 80, y: margin + (3 * (pH + margin)) + 80, a: 10, s: 0},
                            {x: cvs.width - margin - 80, y: cvs.height - bottomM - 80, a: -20, s: 1}
                        ];
                        
                        positions.forEach(pos => {
                            const sticker = config.stickers[pos.s % config.stickers.length];
                            ctx.save();
                            ctx.translate(pos.x, pos.y);
                            ctx.rotate(pos.a * Math.PI / 180);
                            ctx.fillText(sticker, 0, 0);
                            ctx.restore();
                        });
                    }
                }

                await document.fonts.ready; // Mencegah font kustom gagal dimuat

                const textY = cvs.height - (bottomM / 2);
                const randomCap = Captions[Math.floor(Math.random() * Captions.length)];
                
                ctx.fillStyle = config.textColor;
                ctx.font = '600 85px "Caveat", cursive';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText(randomCap, cvs.width / 2, textY - 30);
                
                ctx.font = '500 30px "DM Sans", sans-serif';
                ctx.fillStyle = config.subColor;
                const dateStr = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
                ctx.fillText(dateStr, cvs.width / 2, textY + 65);

                AppState.finalUrl = cvs.toDataURL('image/jpeg', 0.95);
                document.getElementById('countdown-display').classList.add('hidden');
                
                const imgResult = document.getElementById('final-strip-img');
                imgResult.src = AppState.finalUrl;
                
                const parentBox = document.getElementById('result-container');
                if(config.layout === '1-shot') parentBox.style.maxWidth = '400px';
                else parentBox.style.maxWidth = '320px';
                
                if (autoDl) this.autoDownload();
                UI.showView('result');
            },

            loadImg(url) { return new Promise(res => { const img = new Image(); img.onload = () => res(img); img.src = url; }); },

            autoDownload() {
                if(!AppState.finalUrl) return;
                const config = FrameConfigs[AppState.selectedFrameId];
                const typeName = config.layout === '1-shot' ? 'Polaroid' : '4Strip';
                
                const link = document.createElement('a');
                link.href = AppState.finalUrl;
                link.download = `Estetik_${typeName}_${Date.now()}.jpg`;
                document.body.appendChild(link);
                link.click();
                link.remove();
                UI.showToast("Berhasil! Foto otomatis diunduh.", "success");
            }
        };

        /* --- STREAMING_CHUNK: MODULE 4.5 - Generators (GIF & ZIP) --- */
        const Generators = {
            async generateGIF() {
                return new Promise((resolve) => {
                    const images = AppState.capturedPhotos;
                    if(images.length === 0) return resolve(null);
                    
                    document.getElementById('gif-loading').classList.remove('hidden');
                    document.getElementById('final-gif-img').classList.add('hidden');
                    
                    gifshot.createGIF({
                        images: images,
                        gifWidth: 600,
                        gifHeight: 800,
                        interval: 0.5,
                        numFrames: images.length,
                        sampleInterval: 10
                    }, function(obj) {
                        if(!obj.error) {
                            const image = obj.image;
                            AppState.finalGifUrl = image;
                            document.getElementById('final-gif-img').src = image;
                            document.getElementById('final-gif-img').classList.remove('hidden');
                            document.getElementById('gif-loading').classList.add('hidden');
                            resolve(image);
                        } else {
                            resolve(null);
                        }
                    });
                });
            },
            
            renderSingles() {
                const container = document.getElementById('view-singles');
                container.innerHTML = '';
                AppState.capturedPhotos.forEach((src, idx) => {
                    container.innerHTML += `<img src="${src}" class="w-full h-auto rounded-md shadow-sm border border-gray-100" alt="Foto ${idx+1}">`;
                });
            },
            
            async generateAndUploadZip() {
                document.getElementById('qr-loading').classList.remove('hidden');
                document.getElementById('qr-loading').classList.add('flex');
                document.getElementById('qrcode-container').classList.add('hidden');
                document.getElementById('qrcode-container').innerHTML = ''; // reset
                document.getElementById('qr-error').classList.add('hidden');
                
                try {
                    const zip = new JSZip();
                    
                    // Add Strip
                    if(AppState.finalUrl) {
                        const stripData = AppState.finalUrl.split(',')[1];
                        zip.file("photobooth_strip.jpg", stripData, {base64: true});
                    }
                    
                    // Add GIF
                    if(AppState.finalGifUrl) {
                        const gifData = AppState.finalGifUrl.split(',')[1];
                        zip.file("photobooth_anim.gif", gifData, {base64: true});
                    }
                    
                    // Add Singles
                    AppState.capturedPhotos.forEach((src, idx) => {
                        const singleData = src.split(',')[1];
                        zip.file(`photo_${idx+1}.jpg`, singleData, {base64: true});
                    });
                    
                    const content = await zip.generateAsync({type:"blob"});
                    AppState.localZipUrl = URL.createObjectURL(content);
                    
                    const formData = new FormData();
                    formData.append('file', content, 'photobox_session.zip');
                    
                    const response = await fetch('https://tmpfiles.org/api/v1/upload', {
                        method: 'POST',
                        body: formData
                    });
                    
                    const result = await response.json();
                    if(result.status === 'success') {
                        let dlUrl = result.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
                        
                        document.getElementById('qr-loading').classList.add('hidden');
                        document.getElementById('qr-loading').classList.remove('flex');
                        document.getElementById('qrcode-container').classList.remove('hidden');
                        
                        new QRCode(document.getElementById('qrcode-container'), {
                            text: dlUrl,
                            width: 150,
                            height: 150,
                            colorDark : "#1f2937",
                            colorLight : "#ffffff",
                            correctLevel : QRCode.CorrectLevel.L
                        });
                    } else {
                        throw new Error('Upload failed');
                    }
                } catch(e) {
                    console.error(e);
                    document.getElementById('qr-loading').classList.add('hidden');
                    document.getElementById('qr-loading').classList.remove('flex');
                    document.getElementById('qr-error').classList.remove('hidden');
                }
            }
        };

        /* --- STREAMING_CHUNK: MODULE 5 - Event Listeners / Interaksi Tombol --- */
        window.addEventListener('DOMContentLoaded', () => {
            UI.initFrames();

            document.getElementById('btn-open-camera').addEventListener('click', () => {
                const choices = document.getElementsByName('frame-choice');
                choices.forEach(r => { if(r.checked) AppState.selectedFrameId = r.value; });
                
                const config = FrameConfigs[AppState.selectedFrameId];
                AppState.totalPhotosToTake = config.layout === '1-shot' ? 1 : 4;
                AppState.currentPhotoIndex = 1;
                AppState.capturedPhotos = [];
                
                // Reset UI kamera
                const progContainer = document.getElementById('strip-progress');
                progContainer.classList.remove('opacity-0');
                for(let i=1; i<=4; i++) {
                    const dot = document.getElementById(`dot-${i}`);
                    dot.className = "w-3 h-3 rounded-full bg-white bg-opacity-40 progress-dot";
                    dot.style.display = (i <= AppState.totalPhotosToTake) ? 'block' : 'none';
                }
                
                document.getElementById('btn-take-photo').classList.remove('hidden');
                document.getElementById('confirm-controls').classList.add('hidden');
                document.getElementById('confirm-controls').classList.remove('flex');
                document.getElementById('camera-preview').classList.add('hidden');
                
                UI.renderLivePreview(AppState.selectedFrameId);

                UI.showView('camera');
                Camera.init();
            });

            document.getElementById('btn-back-home').addEventListener('click', () => {
                if (AppState.stream) AppState.stream.getTracks().forEach(t => t.stop());
                UI.showView('home');
            });
            
            const postFilter = document.getElementById('post-filter-select');

            // Fitur Ganti Filter Instan di layar hasil (tanpa auto-download)
            postFilter.addEventListener('change', e => {
                AppState.selectedFilter = e.target.value;
                UI.showToast("Menerapkan filter baru...", "info");
                Capture.renderCanvas(FrameConfigs[AppState.selectedFrameId], false); // false = jangan download ulang otomatis
            });

            document.getElementById('btn-take-photo').addEventListener('click', () => {
                Capture.takeSinglePhoto();
            });

            document.getElementById('btn-ulang-photo').addEventListener('click', () => {
                document.getElementById('camera-preview').classList.add('hidden');
                document.getElementById('confirm-controls').classList.add('hidden');
                document.getElementById('confirm-controls').classList.remove('flex');
                document.getElementById('btn-take-photo').classList.remove('hidden');
                
                const dot = document.getElementById(`dot-${AppState.currentPhotoIndex}`);
                if(dot) {
                    dot.classList.remove('active');
                    dot.classList.add('bg-opacity-40');
                }

                const liveSlot = document.getElementById(`live-slot-${AppState.currentPhotoIndex}`);
                if(liveSlot) {
                    liveSlot.src = '';
                    liveSlot.classList.add('opacity-0');
                }
            });

            document.getElementById('btn-lanjut-photo').addEventListener('click', async () => {
                const preview = document.getElementById('camera-preview');
                AppState.capturedPhotos.push(preview.src);
                
                const dot = document.getElementById(`dot-${AppState.currentPhotoIndex}`);
                if(dot) {
                    dot.classList.remove('active');
                    dot.classList.add('done');
                }

                preview.classList.add('hidden');
                document.getElementById('confirm-controls').classList.add('hidden');
                document.getElementById('confirm-controls').classList.remove('flex');
                
                if (AppState.currentPhotoIndex < AppState.totalPhotosToTake) {
                    AppState.currentPhotoIndex++;
                    document.getElementById('btn-take-photo').classList.remove('hidden');
                } else {
                    UI.showToast("Menyusun foto estetik...", "info");
                    document.getElementById('countdown-display').classList.remove('hidden');
                    document.getElementById('countdown-text').innerText = "✨";
                    document.getElementById('instruction-text').innerText = "Memproses...";
                    
                    const config = FrameConfigs[AppState.selectedFrameId];
                    await Capture.renderCanvas(config);
                    
                    // Generate other formats
                    Generators.renderSingles();
                    await Generators.generateGIF();
                    Generators.generateAndUploadZip();
                }
            });

            document.getElementById('btn-retake').addEventListener('click', () => {
                // Saat user klik foto ulang dari menu akhir
                if (AppState.stream) AppState.stream.getTracks().forEach(t => t.stop());
                UI.showView('home');
                UI.showToast("Silakan pilih frame dan mulai lagi.", "info");
            });

            document.getElementById('btn-download').addEventListener('click', () => {
                if(!document.getElementById('view-strip').classList.contains('hidden')) {
                    Capture.autoDownload();
                } else if(!document.getElementById('view-gif').classList.contains('hidden')) {
                    if(AppState.finalGifUrl) {
                        const link = document.createElement('a');
                        link.href = AppState.finalGifUrl;
                        link.download = `Estetik_Anim_${Date.now()}.gif`;
                        link.click();
                        UI.showToast("Berhasil mengunduh GIF!", "success");
                    } else {
                        UI.showToast("GIF masih diproses...", "info");
                    }
                } else {
                    if(AppState.localZipUrl) {
                        const link = document.createElement('a');
                        link.href = AppState.localZipUrl;
                        link.download = `Estetik_Semua_Foto_${Date.now()}.zip`;
                        link.click();
                        UI.showToast("Berhasil mengunduh semua (ZIP)!", "success");
                    } else {
                        UI.showToast("Sedang menyiapkan file...", "info");
                    }
                }
            });

            document.getElementById('btn-print').addEventListener('click', () => {
                if (!AppState.finalUrl) return;
                const w = window.open('', '_blank');
                w.document.write(`
                    <html><head><style>
                        body{margin:0;display:flex;justify-content:center;background:#fff;padding:20px;}
                        img{max-width:100%;height:auto;}
                        @media print { @page{margin:0;} body{padding:0;} img{max-height:100vh;} }
                    </style></head><body>
                        <img src="${AppState.finalUrl}" onload="window.print();window.close();" />
                    </body></html>
                `);
                w.document.close();
            });

            document.getElementById('btn-share').addEventListener('click', async () => {
                if (!AppState.finalUrl) return;
                try {
                    const res = await fetch(AppState.finalUrl);
                    const blob = await res.blob();
                    const file = new File([blob], 'aesthetic_photo.jpg', { type: 'image/jpeg' });

                    if (navigator.canShare && navigator.canShare({ files: [file] })) {
                        await navigator.share({ files: [file], title: 'Estetik Photobooth', text: 'Captured moments.' });
                    } else {
                        UI.showToast("Browser Anda tidak mendukung fitur berbagi ini.", "error");
                    }
                } catch (err) {
                    if(err.name !== 'AbortError') UI.showToast("Gagal membagikan.", "error");
                }
            });

            // Tab Navigation Logic
            const switchTab = (tabId) => {
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('bg-gray-800', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-600');
                });
                document.getElementById('tab-' + tabId).classList.remove('bg-white', 'text-gray-600');
                document.getElementById('tab-' + tabId).classList.add('bg-gray-800', 'text-white');
                
                document.querySelectorAll('.result-view').forEach(view => {
                    view.classList.add('hidden');
                    view.classList.remove('flex', 'grid');
                });
                
                const targetView = document.getElementById('view-' + tabId);
                targetView.classList.remove('hidden');
                if(tabId === 'gif' || tabId === 'strip') targetView.classList.add('flex');
                if(tabId === 'singles') targetView.classList.add('grid');
            };

            document.getElementById('tab-strip').addEventListener('click', () => switchTab('strip'));
            document.getElementById('tab-gif').addEventListener('click', () => switchTab('gif'));
            document.getElementById('tab-singles').addEventListener('click', () => switchTab('singles'));
        });
