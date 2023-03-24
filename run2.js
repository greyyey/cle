#!/bin/sh
UUID=${UUID:-'cfc10722-b1aa-4ac0-b002-c641ac513587'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
