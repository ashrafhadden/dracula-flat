#!/usr/bin/env bash

echo FOREGROUND
echo ——————————————————————————————————
echo $(tput setaf 0)Black
echo $(tput setaf 4)Blue / Purple
echo $(tput setaf 6)Cyan
echo $(tput setaf 2)Green
echo $(tput setaf 5)Pink / Magenta
echo $(tput setaf 1)Red
echo $(tput setaf 7)White
echo $(tput setaf 3)Yellow
echo
echo $(tput sgr0)BRIGHT
echo ——————————————————————————————————
echo $(tput bold)$(tput setaf 0)Black
echo $(tput bold)$(tput setaf 4)Blue / Purple
echo $(tput bold)$(tput setaf 6)Cyan
echo $(tput bold)$(tput setaf 2)Green
echo $(tput bold)$(tput setaf 5)Pink / Magenta
echo $(tput bold)$(tput setaf 1)Red
echo $(tput bold)$(tput setaf 7)White
echo $(tput bold)$(tput setaf 3)Yellow
echo
echo $(tput sgr0)BACKGROUND
echo ——————————————————————————————————
echo "$(tput setab 0)       $(tput sgr0) Black"
echo "$(tput setab 4)       $(tput sgr0) Blue / Purple"
echo "$(tput setab 6)       $(tput sgr0) Cyan"
echo "$(tput setab 2)       $(tput sgr0) Creen"
echo "$(tput setab 5)       $(tput sgr0) Pink / Magenta"
echo "$(tput setab 1)       $(tput sgr0) Red"
echo "$(tput setab 7)       $(tput sgr0) White"
