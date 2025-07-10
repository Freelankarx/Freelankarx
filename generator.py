import os
import re
import random
from datetime import datetime
from jinja2 import Environment, FileSystemLoader
from urllib.parse import quote

# Paths
KEYWORDS_FILE = 'keywords.txt'
TEMPLATE_FOLDER = 'templates'
OUTPUT_FOLDER = 'output'
SITEMAP_FILE = os.path.join(OUTPUT_FOLDER, 'sitemap.xml')

# Ensure output folder exists
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Load keywords
with open(KEYWORDS_FILE, 'r', encoding='utf-8') as f:
    keywords = [line.strip() for line in f if line.strip()]

# Setup Jinja2
env = Environment(loader=FileSystemLoader(TEMPLATE_FOLDER))
template = env.get_template('page.html')

# Utility to slugify for filenames and URLs
def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

# Country detection list
countries = [
    "USA", "United States", "UK", "United Kingdom", "Canada", "Australia",
    "Germany", "Netherlands", "Switzerland", "UAE", "Dubai", "France",
    "Sweden", "Norway", "Singapore", "Denmark", "Ireland", "New Zealand"
]

# Store for internal linking and sitemap
page_links = []

# First: prepare all page metadata
for keyword in keywords:
    slug = slugify(keyword)
    filename = f"{slug}.html"
    url = f"https://freelankarx.com/output/{quote(filename)}"

    page_links.append({
        'keyword': keyword,
        'filename': filename,
        'filepath': os.path.join(OUTPUT_FOLDER, filename),
        'url': url
    })

# Now generate pages with links and content
for page in page_links:
    keyword = page['keyword']
    filename = page['filename']
    filepath = page['filepath']

    # Detect country
    country_match = next((c for c in countries if c.lower() in keyword.lower()), None)

    # Sample internal links (avoid linking to self)
    sampled_links = random.sample(
        [p for p in page_links if p['keyword'] != keyword],
        min(5, len(page_links) - 1)
    )
    internal_links = [{'name': p['keyword'].title(), 'url': p['filename']} for p in sampled_links]

    # Render content
    rendered = template.render(
        keyword=keyword,
        title=f"{keyword.title()} | Freelankarx",
        description=f"Freelankarx: Expert help for {keyword}",
        date=datetime.utcnow().strftime('%Y-%m-%d'),
        country=country_match,
        internal_links=internal_links
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(rendered)

print(f"✅ Generated {len(page_links)} SEO pages.")

# Generate sitemap.xml
print("🗺 Generating sitemap...")
with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    for page in page_links:
        f.write("  <url>\n")
        f.write(f"    <loc>{page['url']}</loc>\n")
        f.write(f"    <lastmod>{datetime.utcnow().strftime('%Y-%m-%d')}</lastmod>\n")
        f.write("    <changefreq>monthly</changefreq>\n")
        f.write("    <priority>1.0</priority>\n")
        f.write("  </url>\n")
    f.write('</urlset>\n')

print(f"✅ Sitemap created with {len(page_links)} URLs: {SITEMAP_FILE}")
