#!/usr/bin/env python3
import json

# Read the JSON data
with open('design-tokens/organized-components.json', 'r') as f:
    data = json.load(f)

# Read the HTML
with open('index.html', 'r') as f:
    html = f.read()

# Find where to insert the data (before loadData())
insert_marker = '// Load component data inline to avoid CORS issues'
if insert_marker in html:
    # Create the inline script
    inline_script = f'''<script>
        window.organizedComponentsData = {json.dumps(data)};
    </script>
    <script>'''
    
    # Replace the marker
    html = html.replace('<script>\n        ' + insert_marker, inline_script + '\n        ' + insert_marker)
    
    # Write back
    with open('index.html', 'w') as f:
        f.write(html)
    
    print("✅ Data embedded successfully!")
else:
    print("❌ Marker not found in HTML")
