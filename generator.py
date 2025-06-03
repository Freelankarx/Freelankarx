import os
import re
from jinja2 import Environment, FileSystemLoader
from datetime import datetime

# Folder setup
KEYWORDS_FILE = 'keywords.txt'
TEMPLATE_FOLDER = 'templates'
OUTPUT_FOLDER = 'output'

# Setup Jinja2 environment
env = Environment(loader=FileSystemLoader(TEMPLATE_FOLDER))
template = env.get_template('page.html')

# Utility to slugify keywords into URL-friendly file names
def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

# Read all keywords
with open(KEYWORDS_FILE, 'r', encoding='utf-8') as f:
    keywords = [line.strip() for line in f if line.strip()]

# Ensure output folder exists
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Track all generated files for linking
page_links = []

# Generate SEO pages
for keyword in keywords:
    slug = slugify(keyword)
    filename = f"{slug}.html"
    filepath = os.path.join(OUTimport os
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

# Generate pages
for keyword in keywords:
    slug = slugify(keyword)
    filename = f"{slug}.html"
    filepath = os.path.join(OUTPUT_FOLDER, filename)
    url = f"https://freelankarx.github.io/{quote(filename)}"

    # Track for internal linking and sitemap
    page_links.append({
        'keyword': keyword,
        'filename': filename,
        'url': url
    })

# Now render pages with internal links
for page in page_links:
    keyword = page['keyword']
    filename = page['filename']
    filepath = os.path.join(OUTPUT_FOLDER, filename)

    # Country match
    country_match = next((c for c in countries if c.lower() in keyword.lower()), None)

    # Pick 5 internal links (not the same page)
    sampled_links = random.sample(
        [p for p in page_links if p['keyword'] != keyword],
        min(5, len(page_links) - 1)
    )
    internal_links = [{'name': p['keyword'].title(), 'url': p['filename']} for p in sampled_links]

    # Render page
    rendered = template.render(
        keyword=keyword,
        title=f"{keyword.title()} | Freelankarx",
        description=f"Freelankarx: Expert help for {keyword}",
        date=datetime.utcnow().strftime('%Y-%m-%d'),
        country=country_match,
        internal_links=internal_links
    )

    # Save HTML
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(rendered)

print(f"✅ Generated {len(page_links)} SEO pages.")

# Generate sitemap.xml
print("🗺 Generating sitemap...")
with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    for page in page_links:
        f.write(f"  <url>\n")
        f.write(f"    <loc>{page['url']}</loc>\n")
        f.write(f"    <lastmod>{datetime.utcnow().strftime('%Y-%m-%d')}</lastmod>\n")
        f.write(f"    <changefreq>monthly</changefreq>\n")
        f.write(f"    <priority>0.8</priority>\n")
        f.write(f"  </url>\n")
    f.write('</urlset>\n')

print(f"✅ Sitemap generated with {len(page_links)} URLs: {SITEMAP_FILE}")PUT_FOLDER, filename)

    # Store for internal link building
    page_links.append((keyword, filename))

    # Render page content (we’ll handle rendering in Part 2)
    rendered_html = template.render(
        keyword=keyword,
        title=keyword.title(),
        description=f"Hire a pro for: {keyword}",
        date=datetime.utcnow().strftime("%Y-%m-%d"),
        country=None,  # optional targeting logic in Part 2
        internal_links=[]  # will populate later
    )

    # Save page
    with open(filepath, 'w', encoding='utf-8') as out_file:
        out_file.write(rendered_html)

print(f"Generated {len(keywords)} SEO pages.")
# Enrich each page with internal links + country logic
for keyword, filename in page_links:
    slug = slugify(keyword)
    filepath = os.path.join(OUTPUT_FOLDER, filename)

    # Detect rich-country targeting (optional enhancement)
    countries = [
        "USA", "United States", "UK", "United Kingdom", "Canada", "Australia",
        "Germany", "Netherlands", "Switzerland", "UAE", "Dubai", "France",
        "Sweden", "Norway", "Singapore", "Denmark", "Ireland", "New Zealand"
    ]

    country_match = next((c for c in countries if c.lower() in keyword.lower()), None)

    # Pick 5 internal links randomly
    import random
    other_links = [(k, f) for k, f in page_links if k != keyword]
    sampled_links = random.sample(other_links, min(5, len(other_links)))

    internal_links = [
        {'name': k.title(), 'url': f}
        for k, f in sampled_links
    ]

    # Render full page with dynamic parts
    rendered_html = template.render(
        keyword=keyword,
        title=f"{keyword.title()} | Freelankarx",
        description=f"Expert help for: {keyword}",
        date=datetime.utcnow().strftime("%Y-%m-%d"),
        country=country_match,
        internal_links=internal_links
    )

    # Save updated page
    with open(filepath, 'w', encoding='utf-8') as out_file:
        out_file.write(rendered_html)

print("✅ All SEO pages rendered with internal links and country context.")
