title = "freelancer"

with open("/home/daniiar/Desktop/accentuation_220/conf/nginx/sites.nginx", "r") as f:
    config = list(f.readlines())
    pointer = 0
    for i, line in enumerate(config):
        if title in line:
            pointer = i
            break


with open("/home/daniiar/Desktop/accentuation_220/conf/nginx/sites.nginx", "w") as out:
    for i in config[:pointer-2] + config[pointer+12:]:
        out.write(i)
