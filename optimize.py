import re
import os

def minify_css(css):
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.DOTALL)
    css = re.sub(r'\s+', ' ', css)
    css = re.sub(r'\s*([\{\}:;,])\s*', r'\1', css)
    return css.strip()

def minify_js(js):
    # Simple JS minification (removes comments and extra spaces)
    js = re.sub(r'//.*', '', js)
    js = re.sub(r'/\*.*?\*/', '', js, flags=re.DOTALL)
    js = re.sub(r'\s+', ' ', js)
    return js.strip()

def process_files():
    # Minify styles.css
    if os.path.exists('styles.css'):
        with open('styles.css', 'r') as f:
            content = f.read()
        with open('styles.min.css', 'w') as f:
            f.write(minify_css(content))
        print("Minified styles.css -> styles.min.css")

    # Minify script.js
    if os.path.exists('script.js'):
        with open('script.js', 'r') as f:
            content = f.read()
        with open('script.min.js', 'w') as f:
            f.write(minify_js(content))
        print("Minified script.js -> script.min.js")

if __name__ == "__main__":
    process_files()
