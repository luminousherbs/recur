import os

def create_page(name: str) -> None:
    name = name.lower()
    # create the requested folder
    os.makedirs(f"pages/{name}")

    html_template = open("tools/template.html")
    with open(f"pages/{name}/index.html", "x") as index:
        content = html_template.read()
        # replace variable references with the actual variables
        content = content.format(page_name = name)
        index.write(content)
    
    js_template = open("tools/template.js")
    with open(f"pages/{name}/{name}.js", "x") as scripts:
        content = js_template.read()
        scripts.write(content)
        

create_page("tests")