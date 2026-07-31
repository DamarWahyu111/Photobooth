/* --- MODULE 1: config.js --- */
        const FrameConfigs = {
            'minimalis': { layout: '4-strip', name: 'Minimalis', desc: 'Putih Klasik', uiBg: '#ffffff', uiBoxes: '#e5e5e5', drawBg: '#ffffff', textColor: '#262626', subColor: '#737373' },
            'noir': { layout: '4-strip', name: 'Noir', desc: 'Hitam Elegan', uiBg: '#171717', uiBoxes: '#404040', drawBg: '#171717', textColor: '#ffffff', subColor: '#a3a3a3' },
            'oatmeal': { layout: '4-strip', name: 'Oatmeal', desc: 'Krem Hangat', uiBg: '#f5f0e6', uiBoxes: '#e5dfd3', drawBg: '#f5f0e6', textColor: '#5c5346', subColor: '#8a7f6f' },
            'matcha': { layout: '4-strip', name: 'Matcha', desc: 'Hijau Soft', uiBg: '#eef2eb', uiBoxes: '#d8e0d3', drawBg: '#eef2eb', textColor: '#3d4a35', subColor: '#6a7a60' },
            'denim': { layout: '4-strip', name: 'Denim', desc: 'Biru Pudar', uiBg: '#e8ecef', uiBoxes: '#cfd6db', drawBg: '#e8ecef', textColor: '#2a3b4a', subColor: '#5c7285' },
            'mocha': { layout: '4-strip', name: 'Mocha', desc: 'Coklat Kopi', uiBg: '#4a3f35', uiBoxes: '#6b5d50', drawBg: '#4a3f35', textColor: '#f5f0e6', subColor: '#a89d91' },
            'blush': { layout: '4-strip', name: 'Blush', desc: 'Gradasi Y2K', uiBg: 'linear-gradient(to bottom right, #ffe4e6, #fff7ed)', uiBoxes: 'rgba(255,255,255,0.6)', drawBg: 'gradient-blush', textColor: '#831843', subColor: '#be185d' },
            'checker': { layout: '4-strip', name: 'Checker', desc: 'Papan Catur', uiBg: '#f5f5f4', uiBoxes: 'rgba(255,255,255,0.9)', drawBg: 'pattern-checker', textColor: '#262626', subColor: '#737373' },
            'polkadot': { layout: '4-strip', name: 'Polkadot', desc: 'Titik Retro', uiBg: '#fafafa', uiBoxes: 'rgba(255,255,255,0.95)', drawBg: 'pattern-dots', textColor: '#262626', subColor: '#737373' },
            'polaroid': { layout: '1-shot', name: 'Polaroid', desc: '1 Foto Instan', uiBg: '#ffffff', uiBoxes: '#e5e5e5', drawBg: '#ffffff', textColor: '#171717', subColor: '#525252' }
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
            finalUrl: null
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

                    html += `
                        <label class="cursor-pointer group relative">
                            <input type="radio" name="frame-choice" value="${id}" ${isChecked} class="sr-only frame-radio">
                            <div class="w-full p-2 rounded-2xl border-2 border-transparent frame-card transition-all flex flex-col gap-1 relative overflow-hidden shadow-sm" style="aspect-ratio: 1/2.2; ${bgStyle} color: ${config.textColor};">
                                ${boxesHtml}
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

                container.addEventListener('change', (e) => {
                    if (e.target.name === 'frame-choice') {
                        AppState.selectedFrameId = e.target.value;
                    }
                });
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
            }
        };

        /* --- STREAMING_CHUNK: MODULE 3 - Pengendali Kamera --- */
        const Camera = {
            video: document.getElementById('camera-stream'),
            select: document.getElementById('camera-select'),
            filter: document.getElementById('filter-select'),

            async init() {
                try {
                    await navigator.mediaDevices.getUserMedia({ video: true });
                    const devices = await navigator.mediaDevices.enumerateDevices();
                    const vDevices = devices.filter(d => d.kind === 'videoinput');
                    
                    this.select.innerHTML = '';
                    if(vDevices.length === 0) {
                        this.select.innerHTML = '<option value="">Kamera tidak ditemukan</option>';
                        return;
                    }

                    vDevices.forEach((d, i) => {
                        const opt = document.createElement('option');
                        opt.value = d.deviceId; opt.text = d.label || `Kamera ${i + 1}`;
                        this.select.appendChild(opt);
                    });

                    if (vDevices.length > 0) this.startStream(vDevices[0].deviceId);
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
                    
                    if (AppState.isFrontCamera) this.video.classList.add('mirror');
                    else this.video.classList.remove('mirror');
                    
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
            async start() {
                if (!AppState.stream) {
                    UI.showToast("Kamera belum aktif.", "error");
                    return;
                }
                const config = FrameConfigs[AppState.selectedFrameId];
                const totalPhotos = config.layout === '1-shot' ? 1 : 4;

                document.getElementById('camera-controls').classList.add('opacity-40', 'pointer-events-none');
                
                const progContainer = document.getElementById('strip-progress');
                progContainer.classList.remove('opacity-0');
                for(let i=1; i<=4; i++) {
                    const dot = document.getElementById(`dot-${i}`);
                    dot.className = "w-3 h-3 rounded-full bg-white bg-opacity-40 progress-dot";
                    dot.style.display = (i <= totalPhotos) ? 'block' : 'none';
                }

                AppState.capturedPhotos = []; // Reset array foto murni

                for (let i = 1; i <= totalPhotos; i++) {
                    const dot = document.getElementById(`dot-${i}`);
                    dot.classList.add('active');
                    dot.classList.remove('bg-opacity-40');
                    
                    await this.countdown(i, totalPhotos);
                    
                    const isSquare = (config.layout === '1-shot');
                    // Snap foto original (tanpa filter CSS terbakar) agar filter bisa diganti belakangan
                    AppState.capturedPhotos.push(this.snap(isSquare));
                    
                    dot.classList.remove('active');
                    dot.classList.add('done');
                    if (i < totalPhotos) await new Promise(res => setTimeout(res, 1200));
                }

                UI.showToast("Menyusun foto estetik...", "info");
                document.getElementById('countdown-display').classList.remove('hidden');
                document.getElementById('countdown-text').innerText = "✨";
                document.getElementById('instruction-text').innerText = "Memproses...";
                
                await this.renderCanvas(config);
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
                if (AppState.isFrontCamera) { ctx.translate(tW, 0); ctx.scale(-1, 1); }

                ctx.drawImage(vid, sX, sY, sW, sH, 0, 0, tW, tH);
                return cvs.toDataURL('image/jpeg', 0.95);
            },

            drawBgPattern(ctx, style, w, h) {
                if(style === 'pattern-checker') {
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
                    
                    this.drawBgPattern(ctx, config.drawBg, cvs.width, cvs.height);
                    
                    const img = await this.loadImg(AppState.capturedPhotos[0]);
                    
                    ctx.fillStyle = '#111111';
                    ctx.fillRect(margin-2, margin-2, pW+4, pH+4);
                    
                    ctx.filter = canvasFilter; // Terapkan Filter di sini
                    ctx.drawImage(img, margin, margin, pW, pH);
                    ctx.filter = 'none';
                } else {
                    const pH = 1200;
                    cvs.width = pW + (margin * 2);
                    cvs.height = margin + (4 * pH) + (3 * margin) + bottomM;

                    this.drawBgPattern(ctx, config.drawBg, cvs.width, cvs.height);

                    if(config.drawBg.includes('pattern')) {
                        ctx.fillStyle = 'rgba(255,255,255,0.9)';
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

        /* --- STREAMING_CHUNK: MODULE 5 - Event Listeners / Interaksi Tombol --- */
        window.addEventListener('DOMContentLoaded', () => {
            UI.initFrames();

            document.getElementById('btn-open-camera').addEventListener('click', () => {
                const choices = document.getElementsByName('frame-choice');
                choices.forEach(r => { if(r.checked) AppState.selectedFrameId = r.value; });
                
                const isPolaroid = FrameConfigs[AppState.selectedFrameId].layout === '1-shot';
                document.getElementById('btn-start-text').innerText = isPolaroid ? "Jepret Polaroid (1x)" : "Mulai Memotret (4x)";
                
                UI.showView('camera');
                Camera.init();
            });

            document.getElementById('btn-back-home').addEventListener('click', () => {
                if (AppState.stream) AppState.stream.getTracks().forEach(t => t.stop());
                UI.showView('home');
            });

            document.getElementById('camera-select').addEventListener('change', e => e.target.value && Camera.startStream(e.target.value));
            
            const camFilter = document.getElementById('filter-select');
            const postFilter = document.getElementById('post-filter-select');
            
            // Sinkronisasi pilihan filter dari kamera ke menu hasil
            camFilter.addEventListener('change', e => {
                AppState.selectedFilter = e.target.value;
                postFilter.value = e.target.value; // Samakan nilai dropdown kedua
                Camera.applyFilter();
            });

            // Fitur Ganti Filter Instan di layar hasil (tanpa auto-download)
            postFilter.addEventListener('change', e => {
                AppState.selectedFilter = e.target.value;
                camFilter.value = e.target.value; // Sinkronkan balik
                UI.showToast("Menerapkan filter baru...", "info");
                Capture.renderCanvas(FrameConfigs[AppState.selectedFrameId], false); // false = jangan download ulang otomatis
            });
            
            document.getElementById('night-mode-toggle').addEventListener('change', e => {
                AppState.isNightMode = e.target.checked;
                Camera.applyFilter();
                UI.showToast(AppState.isNightMode ? "Mode Malam AKTIF" : "Mode Malam NONAKTIF");
            });

            document.getElementById('btn-start-capture').addEventListener('click', () => Capture.start());

            document.getElementById('btn-retake').addEventListener('click', () => {
                UI.showView('camera');
                document.getElementById('camera-controls').classList.remove('opacity-40', 'pointer-events-none');
                document.getElementById('strip-progress').classList.add('opacity-0');
            });

            document.getElementById('btn-download').addEventListener('click', () => Capture.autoDownload());

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
        });
