Active development is halted, i will only update when i have time sorry

# Mainsail

Mainsail a lightweight & responsive web interface for [Klipper](https://github.com/KevinOConnor/klipper), the 3D printer firmware. It communicates with [Moonraker (Klipper-API)](https://github.com/arksine/moonraker) from [Arksine](https://github.com/arksine).

[Getting Started](https://docs.mainsail.xyz/setup)

Mainsail is also available in remote mode on [http://mainsail.eliteschw31n.de](http://mainsail.eliteschw31n.de). Find out [more](https://docs.mainsail.xyz/setup#mymainsailxyz).

[Documentation](https://docs.mainsail.xyz)  
[Release Notes](https://github.com/meteyou/mainsail/releases)

## Screenshots

![screenshot-dashboard](docs/assets/img/screenshot.png)

## Moonraker Update Config

    [update_manager client modded-mainsail]
    type: web
    repo: eliteSchwein/modded-mainsail
    path: ~/modded-mainsail

## Installation

Firstly make sure you've installed the Vanilla Mainsail: Tutorial.

#### Run install script

    $ bash <(curl -s https://raw.githubusercontent.com/eliteSchwein/modded-mainsail/master/scripts/install.sh?$RANDOM)

    This will install modded mainsail on Port 800, to configure the correct ports please edit the nginx config via

    $ sudo nano /etc/nginx/sites-enabled/modded-mainsail.conf

## Features

- Optimized for desktops, tablets and mobile devices
- Supports multiple 3D printers (Printer Farm)
- File Manager (gcode and config files)
- Config Editor
- Temperature Presets (with custom gcode)
- Bed Mesh Leveling
- Webcam support
- Control power devices (relays, TPLink, Tasmota, ..)
- Customizable UI (logos, backgrounds & even custom css)

## Get support & assistance

Do you need help or just want to talk? Join us on [Discord](https://discord.gg/skWTwTD). We have a very active community.  
Have you found a bug? Then we would like you to create an [issue](https://github.com/meteyou/mainsail/issues).

## Support this project

The project is primarily developed and maintained by meteyou. To keep the project going he invests his free time, almost every day. To motivate him (☕🍺😜) there are several ways to support the project.

- [Patreon (recurring)](https://patreon.com/meteyou)
- [Ko-Fi (one-time)](https://ko-fi.com/mainsail)

## Credit, sources and inspiration

- [Kevin O'Connor](https://github.com/KevinOConnor) for the awesome 3D printer firmware [Klipper](https://github.com/KevinOConnor/klipper)
- [Eric Callahan (arksine)](https://github.com/Arksine) for [Moonraker (Klipper API)](https://github.com/Arksine/moonraker). Without Moonraker, Mainsail would not be possible.
- [lixxbox](https://github.com/lixxbox) for the Mainsail logo & Docs
- [Vue.js](https://vuejs.org/): The Progressive JavaScript Framework
- [Vuetify](https://vuetifyjs.com/): Material Design Component Framework for Vue.js
- [Flaticon](https://www.flaticon.com): for the Logo and Ressource Manager Icons
- [Meteyou](https://github.com/meteyou/mainsail): for the original Mainsail
- [dangire158](https://github.com/dangrie158/hx711-driver): for the hx711 Driver
- [eliteSCHW31N](https://github.com/eliteSchwein/hx711server): for the hx711 Server
- [WallpaperCraft](https://wallpaperscraft.com/): for the main Background

Massive thanks to the whole [Voron Design](http://vorondesign.com/) community. Without them such a project would not be possible.
