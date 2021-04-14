#!/bin/bash

download_config()
{
    echo "Download Nginx Config"
    wget -q https://raw.githubusercontent.com/eliteSchwein/modded-mainsail/master/scripts/modded-mainsail.conf -O modded-mainsail.conf
}
install_config()
{
    echo "Install Downloaded Config"
    sudo cp -R ./modded-mainsail.conf /etc/nginx/sites-enabled/modded-mainsail.conf
    sudo systemctl reload nginx
}
download_latest_version()
{
    echo "Download Modded Mainsail"
    wget -q https://github.com/eliteSchwein/modded-mainsail/releases/latest/download/modded-mainsail.zip -O mainsail.zip
}
unzip_latest_version()
{
    echo "Extract Modded Mainsail"
    mkdir modded-mainsail
    unzip -o mainsail.zip -d ./modded-mainsail
}

download_config
download_latest_version
unzip_latest_version
install_config