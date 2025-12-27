// Simple Lightbox for project images
class Lightbox {
    constructor() {
        this.createLightbox();
        this.attachEventListeners();
    }

    createLightbox() {
        const lightboxHTML = `
            <div class="lightbox" id="lightbox">
                <div class="lightbox-content">
                    <button class="lightbox-close" id="lightbox-close">&times;</button>
                    <img class="lightbox-image" id="lightbox-image" src="" alt="">
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    attachEventListeners() {
        // Click on images to open lightbox
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('project-image')) {
                this.openLightbox(e.target.src, e.target.alt);
            }
        });

        // Close lightbox
        const closeBtn = document.getElementById('lightbox-close');
        const lightbox = document.getElementById('lightbox');
        
        closeBtn.addEventListener('click', () => this.closeLightbox());
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                this.closeLightbox();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLightbox();
            }
        });
    }

    openLightbox(src, alt) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        
        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize lightbox when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Lightbox();
});
