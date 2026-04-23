// Interactive Alert Component - matches Figma design
class Alert {
    constructor(props) {
        this.props = {
            severity: props.severity || 'Error',
            variant: props.variant || 'Filled',
            title: props.title || null,
            titleText: props.titleText || 'Title',
            description: props.description || null,
            descriptionText: props.descriptionText || 'Description',
            action: props.action || false,
            actionInstance: props.actionInstance || 'Text',
            onClose: props.onClose || false
        };
    }

    getSeverityColors() {
        const colors = {
            'Error': {
                filled: { bg: '#D32F2F', text: '#FFFFFF', icon: '#FFFFFF' },
                outlined: { bg: '#FFFFFF', text: '#D32F2F', icon: '#D32F2F', border: '#D32F2F' },
                standard: { bg: '#FFEBEE', text: '#D32F2F', icon: '#D32F2F' }
            },
            'Warning': {
                filled: { bg: '#AF9577', text: '#FFFFFF', icon: '#FFFFFF' },
                outlined: { bg: '#FFFFFF', text: '#AF9577', icon: '#AF9577', border: '#AF9577' },
                standard: { bg: '#FFF9E6', text: '#AF9577', icon: '#AF9577' }
            },
            'Info': {
                filled: { bg: '#0288D1', text: '#FFFFFF', icon: '#FFFFFF' },
                outlined: { bg: '#FFFFFF', text: '#0288D1', icon: '#0288D1', border: '#0288D1' },
                standard: { bg: '#E3F2FD', text: '#0288D1', icon: '#0288D1' }
            },
            'Success': {
                filled: { bg: '#2E7D32', text: '#FFFFFF', icon: '#FFFFFF' },
                outlined: { bg: '#FFFFFF', text: '#2E7D32', icon: '#2E7D32', border: '#2E7D32' },
                standard: { bg: '#E8F5E9', text: '#2E7D32', icon: '#2E7D32' }
            }
        };
        
        const variant = this.props.variant.toLowerCase();
        return colors[this.props.severity][variant];
    }

    getSeverityIcon() {
        const icons = {
            'Error': '⚠',
            'Warning': '⚠',
            'Info': 'ℹ',
            'Success': '✓'
        };
        return icons[this.props.severity];
    }

    render() {
        const colors = this.getSeverityColors();
        const icon = this.getSeverityIcon();
        const variant = this.props.variant.toLowerCase();
        
        let styles = `
            display: flex;
            align-items: flex-start;
            padding: 12px 16px;
            border-radius: 8px;
            gap: 12px;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: ${colors.bg};
            color: ${colors.text};
            ${variant === 'outlined' ? `border: 1px solid ${colors.border};` : ''}
            min-height: 48px;
            position: relative;
        `;

        let html = `
            <div style="${styles}">
                <!-- Icon -->
                <div style="font-size: 24px; line-height: 1; color: ${colors.icon}; flex-shrink: 0; margin-top: 2px;">
                    ${icon}
                </div>
                
                <!-- Content -->
                <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;">
                    ${this.props.title ? `
                        <div style="font-size: 14px; font-weight: 600; line-height: 1.4; color: ${colors.text};">
                            ${this.props.titleText}
                        </div>
                    ` : ''}
                    
                    ${this.props.description ? `
                        <div style="font-size: 13px; font-weight: 400; line-height: 1.5; color: ${colors.text}; opacity: 0.9;">
                            ${this.props.descriptionText}
                        </div>
                    ` : ''}
                    
                    ${this.props.action ? `
                        <div style="margin-top: 8px;">
                            ${this.props.actionInstance === 'Text' ? `
                                <button style="
                                    background: transparent;
                                    border: none;
                                    color: ${colors.text};
                                    font-size: 13px;
                                    font-weight: 600;
                                    text-transform: uppercase;
                                    cursor: pointer;
                                    padding: 4px 8px;
                                    margin: -4px -8px;
                                    text-decoration: underline;
                                ">LABEL</button>
                            ` : `
                                <button style="
                                    background: transparent;
                                    border: none;
                                    color: ${colors.text};
                                    font-size: 20px;
                                    cursor: pointer;
                                    padding: 4px;
                                    margin: -4px;
                                    line-height: 1;
                                ">⊕</button>
                            `}
                        </div>
                    ` : ''}
                </div>
                
                <!-- Close Button -->
                ${this.props.onClose ? `
                    <button style="
                        background: transparent;
                        border: none;
                        color: ${colors.text};
                        font-size: 20px;
                        cursor: pointer;
                        padding: 0;
                        width: 24px;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        opacity: 0.7;
                        line-height: 1;
                    ">×</button>
                ` : ''}
            </div>
        `;

        return html;
    }
}

// Export for use in the design system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Alert;
}
