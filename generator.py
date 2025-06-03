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
    filepath = os.path.join(OUTPUT_FOLDER, filename)

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
