import os
import sys

def create_page(filename: str) -> None:
    titlename = filename.title().replace("-", " ")
    # create the requested folder
    os.makedirs(f"things/{filename}")

    html_template = open("tools/template.html")
    with open(f"things/{filename}/index.html", "x") as index:
        content = html_template.read()
        # replace variable references with the actual variables
        content = content.format(page_name = titlename, file_name = filename)
        index.write(content)
    
    js_template = open("tools/template.js")
    with open(f"things/{filename}/script.js", "x") as script:
        content = js_template.read()
        content = content.replace("{file_name}", filename)
        script.write(content)

    # with open("things/index.html", "r+") as main:
    #     content = main.read()
    #     list_end = content.index("</ul>") - 4
    #     main.seek(0)
    #     main.write(content)

# sys.argv gets the command line arguments that were passed
# element 0 is the name of the script, so we need element 1.
page_name = sys.argv[1]
create_page(page_name)
