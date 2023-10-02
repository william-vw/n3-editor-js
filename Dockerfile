# syntax=docker/dockerfile:1
FROM ubuntu:22.04


RUN apt-get -yq update && apt-get -yq install curl
# RUN source ~/.bashrc # cannot find command "source" (and cannot find package to install)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# deprecated warning + 60sec wait
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash

#  E: The repository 'https://deb.nodesource.com/node_.x nodistro Release' does not have a Release file.
# RUN apt-get update
# RUN apt-get install -y ca-certificates curl gnupg
# RUN mkdir -p /etc/apt/keyrings
# RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
# RUN NODE_MAJOR=18
# RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
# RUN apt-get update && apt-get install nodejs -y

# RUN apt-get -yq update && apt-get -yq install nodejs
# RUN apt-get -yq update && apt-get -yq install npm
#WORKDIR /usr/app
#COPY ./ ./
#RUN npm install

#RUN apt-get -yq update && apt-get -yq install software-properties-common && add-apt-repository ppa:swi-prolog/stable && apt-get -yq install swi-prolog

#RUN apt-get update && apt-get install -y python3 python3-pip
#RUN pip install -r requirements.txt

# CMD node app.js