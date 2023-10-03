# syntax=docker/dockerfile:1
FROM ubuntu:22.04

# RUN apt-get -yq update && apt-get -yq install software-properties-common && add-apt-repository ppa:swi-prolog/stable && apt-get -yq install swi-prolog

# same result on heroku, render
# RUN apt-get -yq update && apt-get -yq install curl
# # # command not found: nvm
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# RUN export NVM_DIR="$HOME/.nvm" && "$NVM_DIR/nvm.sh" -v && "$NVM_DIR/nvm.sh" install --lts

RUN apt-get -yq update && apt-get -yq install curl
RUN mkdir ~/.nvm
ENV NVM_DIR ~/.nvm
ENV NODE_VERSION 18.18.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default


# deprecated warning + 60sec wait
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash

# TODO post an issue about this
#  E: The repository 'https://deb.nodesource.com/node_.x nodistro Release' does not have a Release file. (on render & heroku)
# RUN rm /etc/apt/keyrings/nodesource.gpg # (does not exist)
# RUN rm /etc/apt/sources.list.d/nodesource.list # (does not exist)
# RUN apt-get update
# RUN apt-get install -y ca-certificates curl gnupg
# RUN mkdir -p /etc/apt/keyrings
# RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
# RUN NODE_MAJOR=18
# RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
# RUN apt-get update && apt-get install nodejs -y

# on render: v.12
# RUN apt-get -yq update && apt-get -yq install nodejs
# RUN apt-get -yq update && apt-get -yq install npm

# WORKDIR /usr/app
# COPY ./ ./
# RUN npm install

#RUN apt-get update && apt-get install -y python3 python3-pip
#RUN pip install -r requirements.txt

# CMD node app.js