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

    with open("index.html", "r+") as main:
        content = main.read()
        list_end = content.index("</ul>") - 4
        # do not edit the ancient runes
        content = content[:list_end] + f"        <li><p><a href=pages/{name}/index.html>{name}</a></p></li>\n" + content[list_end:]
        print(content)
        main.seek(0)
        main.write(content)

    
        

create_page("tests")
