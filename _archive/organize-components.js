const fs = require('fs');
const path = require('path');

const componentsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'design-tokens/components.json'), 'utf8')
);

const organized = {
    byPage: {},
    byComponentSet: {},
    stats: {
        totalComponents: 0,
        totalPages: 0,
        totalComponentSets: 0
    }
};

componentsData.components.forEach(component => {
    const pageName = component.containingFrame?.pageName || 'Uncategorized';
    const componentSetName = component.containingFrame?.containingComponentSet?.name || 'Individual Components';
    
    if (!organized.byPage[pageName]) {
        organized.byPage[pageName] = {
            components: [],
            componentSets: {}
        };
    }
    
    if (!organized.byPage[pageName].componentSets[componentSetName]) {
        organized.byPage[pageName].componentSets[componentSetName] = [];
    }
    
    organized.byPage[pageName].componentSets[componentSetName].push(component);
    organized.byPage[pageName].components.push(component);
});

organized.stats.totalComponents = componentsData.components.length;
organized.stats.totalPages = Object.keys(organized.byPage).length;
organized.stats.totalComponentSets = Object.values(organized.byPage)
    .reduce((sum, page) => sum + Object.keys(page.componentSets).length, 0);

fs.writeFileSync(
    path.join(__dirname, 'design-tokens/organized-components.json'),
    JSON.stringify(organized, null, 2)
);

console.log('✅ Components organized!');
console.log(`   Pages: ${organized.stats.totalPages}`);
console.log(`   Component Sets: ${organized.stats.totalComponentSets}`);
console.log(`   Total Components: ${organized.stats.totalComponents}`);

Object.keys(organized.byPage).sort().forEach(pageName => {
    const page = organized.byPage[pageName];
    console.log(`\n📄 ${pageName}`);
    console.log(`   Component Sets: ${Object.keys(page.componentSets).length}`);
    console.log(`   Components: ${page.components.length}`);
});
