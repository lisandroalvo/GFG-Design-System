document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
    initNavigation();
    initCodeBlocks();
    initColorSwatches();
    initSearch();
    hljs.highlightAll();
});

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const content = document.getElementById('content');
    const topbar = document.getElementById('topbar');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('collapsed');
        topbar.classList.toggle('collapsed');
    });
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const topbarTitle = document.getElementById('topbarTitle');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const sectionId = this.getAttribute('data-section');
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                const sectionTitle = targetSection.querySelector('.section-title');
                if (sectionTitle) {
                    topbarTitle.textContent = sectionTitle.textContent;
                }
                
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initCodeBlocks() {
    const copyButtons = document.querySelectorAll('.copy-button');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-copy-target');
            const codeElement = document.getElementById(targetId);
            
            if (codeElement) {
                const textToCopy = codeElement.textContent;
                
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalHTML = this.innerHTML;
                    this.innerHTML = '<span class="material-icons-outlined">check</span>Copied!';
                    this.classList.add('copied');
                    
                    setTimeout(() => {
                        this.innerHTML = originalHTML;
                        this.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                });
            }
        });
    });
}

function initColorSwatches() {
    const colorSwatches = document.querySelectorAll('.color-swatch');
    
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            
            if (color) {
                navigator.clipboard.writeText(color).then(() => {
                    const originalBorder = this.style.border;
                    this.style.border = '2px solid #10B981';
                    this.style.transform = 'scale(1.05)';
                    
                    showToast(`Copied ${color} to clipboard!`);
                    
                    setTimeout(() => {
                        this.style.border = originalBorder;
                        this.style.transform = '';
                    }, 1000);
                }).catch(err => {
                    console.error('Failed to copy color:', err);
                });
            }
        });
    });
}

function initSearch() {
    const searchInput = document.getElementById('sidebarSearch');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            navLinks.forEach(link => {
                const label = link.querySelector('.nav-label');
                if (label) {
                    const text = label.textContent.toLowerCase();
                    const listItem = link.closest('li');
                    
                    if (text.includes(searchTerm)) {
                        listItem.style.display = '';
                    } else {
                        listItem.style.display = 'none';
                    }
                }
            });
        });
    }
}

function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background-color: #111827;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            toast.remove();
            style.remove();
        }, 300);
    }, 2500);
}

const iconItems = document.querySelectorAll('.icon-item');
iconItems.forEach(item => {
    item.addEventListener('click', function() {
        const iconName = this.querySelector('.icon-name').textContent;
        navigator.clipboard.writeText(iconName).then(() => {
            showToast(`Copied icon name: ${iconName}`);
        });
    });
});
