FROM node:slim

RUN apt-get update
RUN mkdir -p /opt/yarn/

# Download and install yarn
RUN wget https://yarnpkg.com/latest.tar.gz && \
  tar -zxf latest.tar.gz -C /opt/yarn/ && \
  rm latest.tar.gz
ENV PATH "$PATH:/opt/yarn/dist/bin"

# Install git
RUN apt-get install -y git

ADD package.json yarn.lock /opt/server/
RUN cd /opt/server/ && yarn
WORKDIR /opt/server/

COPY . /opt/server

RUN yarn build
CMD ["yarn", "start"]
