class ComponentManager {
    constructor() {
        this.components = [];
        this.loadComponents();
    }

    async loadComponents() {
        try {
            const response = await fetch('components.json');
            const data = await response.json();
            this.components = data.components || [];
            this.renderComponents();
        } catch (error) {
            console.log('No components file found or error loading:', error);
            this.components = [];
        }
    }

    addComponent(componentData) {
        const component = {
            id: this.generateId(),
            ...componentData,
            createdAt: new Date().toISOString()
        };
        
        this.components.push(component);
        this.saveComponents();
        this.renderComponents();
        return component;
    }

    removeComponent(id) {
        this.components = this.components.filter(c => c.id !== id);
        this.saveComponents();
        this.renderComponents();
    }

    updateComponent(id, updates) {
        const index = this.components.findIndex(c => c.id === id);
        if (index !== -1) {
            this.components[index] = {
                ...this.components[index],
                ...updates,
                updatedAt: new Date().toISOString()
            };
            this.saveComponents();
            this.renderComponents();
        }
    }

    saveComponents() {
        const data = {
            components: this.components,
            lastUpdated: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'components.json';
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
        
        showToast('Components updated! Download the components.json file and commit it to your repository.');
    }

    renderComponents() {
        const categorizedComponents = this.categorizeComponents();
        
        Object.keys(categorizedComponents).forEach(category => {
            const sectionId = category;
            const section = document.getElementById(sectionId);
            
            if (!section) return;
            
            let dynamicContainer = section.querySelector('.dynamic-components-container');
            if (!dynamicContainer) {
                dynamicContainer = document.createElement('div');
                dynamicContainer.className = 'dynamic-components-container';
                section.appendChild(dynamicContainer);
            }
            
            dynamicContainer.innerHTML = '';
            
            const components = categorizedComponents[category];
            if (components.length > 0) {
                const subsection = document.createElement('div');
                subsection.className = 'subsection';
                subsection.innerHTML = `
                    <h3 class="subsection-title">Figma Components</h3>
                `;
                
                components.forEach(component => {
                    const componentElement = this.createComponentElement(component);
                    subsection.appendChild(componentElement);
                });
                
                dynamicContainer.appendChild(subsection);
            }
        });
    }

    createComponentElement(component) {
        const div = document.createElement('div');
        div.className = 'figma-component-item';
        div.innerHTML = `
            <div class="component-demo">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                    <div>
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">${component.name}</h4>
                        ${component.description ? `<p style="font-size: 13px; color: var(--color-gray-600); margin-bottom: 12px;">${component.description}</p>` : ''}
                    </div>
                    <button class="btn-delete" data-id="${component.id}" style="padding: 6px 12px; font-size: 12px; background: var(--color-error); color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
                </div>
                
                <div class="preview-container" style="background: var(--color-gray-50); padding: 24px; border-radius: 8px; margin-bottom: 16px; display: flex; align-items: center; justify-content: center;">
                    <img src="data:image/png;base64,${component.preview}" alt="${component.name}" style="max-width: 100%; height: auto; border-radius: 4px;">
                </div>
                
                <div class="code-tabs" style="margin-top: 16px;">
                    <div class="tab-buttons" style="display: flex; gap: 8px; margin-bottom: 8px; border-bottom: 1px solid var(--color-gray-200); padding-bottom: 8px;">
                        <button class="tab-btn active" data-tab="html-${component.id}" style="padding: 6px 12px; background: none; border: none; cursor: pointer; font-size: 13px; font-weight: 500; color: var(--color-gray-600); border-bottom: 2px solid transparent;">HTML</button>
                        <button class="tab-btn" data-tab="css-${component.id}" style="padding: 6px 12px; background: none; border: none; cursor: pointer; font-size: 13px; font-weight: 500; color: var(--color-gray-600); border-bottom: 2px solid transparent;">CSS</button>
                    </div>
                    
                    <div class="tab-content active" id="html-${component.id}">
                        <div class="code-block">
                            <button class="copy-button" data-copy-text="${this.escapeHtml(component.html)}">
                                <span class="material-icons-outlined">content_copy</span>
                                Copy
                            </button>
                            <pre><code class="language-html">${this.escapeHtml(component.html)}</code></pre>
                        </div>
                    </div>
                    
                    <div class="tab-content" id="css-${component.id}" style="display: none;">
                        <div class="code-block">
                            <button class="copy-button" data-copy-text="${this.escapeHtml(component.css)}">
                                <span class="material-icons-outlined">content_copy</span>
                                Copy
                            </button>
                            <pre><code class="language-css">${this.escapeHtml(component.css)}</code></pre>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 12px; padding: 12px; background: var(--color-gray-100); border-radius: 6px; font-size: 12px; color: var(--color-gray-600);">
                    <strong>Dimensions:</strong> ${Math.round(component.width)} × ${Math.round(component.height)}px
                    ${component.createdAt ? ` • <strong>Added:</strong> ${new Date(component.createdAt).toLocaleDateString()}` : ''}
                </div>
            </div>
        `;
        
        const deleteBtn = div.querySelector('.btn-delete');
        deleteBtn.addEventListener('click', () => {
            if (confirm(`Delete "${component.name}"?`)) {
                this.removeComponent(component.id);
            }
        });
        
        const tabButtons = div.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                const container = btn.closest('.code-tabs');
                
                container.querySelectorAll('.tab-btn').forEach(b => {
                    b.classList.remove('active');
                    b.style.color = 'var(--color-gray-600)';
                    b.style.borderBottom = '2px solid transparent';
                });
                
                container.querySelectorAll('.tab-content').forEach(c => {
                    c.style.display = 'none';
                    c.classList.remove('active');
                });
                
                btn.classList.add('active');
                btn.style.color = 'var(--color-primary)';
                btn.style.borderBottom = '2px solid var(--color-primary)';
                
                const content = document.getElementById(tabId);
                if (content) {
                    content.style.display = 'block';
                    content.classList.add('active');
                }
            });
        });
        
        const copyButtons = div.querySelectorAll('.copy-button');
        copyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const text = btn.getAttribute('data-copy-text');
                navigator.clipboard.writeText(text).then(() => {
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = '<span class="material-icons-outlined">check</span>Copied!';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.classList.remove('copied');
                    }, 2000);
                });
            });
        });
        
        return div;
    }

    categorizeComponents() {
        const categorized = {};
        
        this.components.forEach(component => {
            const category = component.category || 'components';
            if (!categorized[category]) {
                categorized[category] = [];
            }
            categorized[category].push(component);
        });
        
        return categorized;
    }

    generateId() {
        return 'comp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    importFromJSON(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.name && data.html && data.css) {
                this.addComponent(data);
                showToast(`Component "${data.name}" added successfully!`);
                return true;
            } else {
                showToast('Invalid component data format', 'error');
                return false;
            }
        } catch (error) {
            showToast('Error parsing JSON: ' + error.message, 'error');
            return false;
        }
    }
}

const componentManager = new ComponentManager();

function openImportModal() {
    const modal = document.getElementById('import-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeImportModal() {
    const modal = document.getElementById('import-modal');
    if (modal) {
        modal.style.display = 'none';
        document.getElementById('import-json').value = '';
    }
}

function importComponent() {
    const jsonInput = document.getElementById('import-json').value;
    if (componentManager.importFromJSON(jsonInput)) {
        closeImportModal();
    }
}
