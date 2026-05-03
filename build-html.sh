#!/bin/bash
# Create a temporary file with the data
echo "<script>" > /tmp/data-script.html
echo "window.organizedComponentsData = " >> /tmp/data-script.html
cat design-tokens/organized-components.json >> /tmp/data-script.html
echo ";" >> /tmp/data-script.html
echo "</script>" >> /tmp/data-script.html

# Insert it into the HTML before the closing </head> tag
sed -i.bak '/<\/head>/i\
<script>window.organizedComponentsData='"$(cat design-tokens/organized-components.json | tr -d '\n')"';</script>
' index.html

echo "✅ Data embedded!"
