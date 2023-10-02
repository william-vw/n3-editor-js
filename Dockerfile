# syntax=docker/dockerfile:1
FROM ubuntu:22.04


# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash

# RUN apt-get -yq update && apt-get install -y ca-certificates curl gnupg
# RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
# RUN NODE_MAJOR=20
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

CMD node app.js