# syntax=docker/dockerfile:1
FROM ubuntu:22.04

RUN apt-get update && apt-get install software-properties-common && apt-get update && add-apt-repository ppa:swi-prolog/stable && apt-get update && apt-get install swi-prolog
RUN npm install
#RUN apt-get update && apt-get install -y python3 python3-pip
#RUN pip install -r requirements.txt

CMD node app.js