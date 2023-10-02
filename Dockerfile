# syntax=docker/dockerfile:1
FROM ubuntu:22.04

#RUN apt-get -yq update && apt-get -yq install software-properties-common && add-apt-repository ppa:swi-prolog/stable && apt-get -yq install swi-prolog
RUN apt-get -yq update && apt-get -yq install nodejs
#RUN apt-get -yq update && apt-get -yq install npm
# RUN npm install
#RUN apt-get update && apt-get install -y python3 python3-pip
#RUN pip install -r requirements.txt

#CMD node app.js