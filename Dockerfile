# You need to set the nameserver to leo in the docker opts
# https://stackoverflow.com/questions/24151129/network-calls-fail-during-image-build-on-corporate-network
#
FROM node

# set container working directory
WORKDIR /src

# install the cli
RUN npm -g config set user root
