# Dockerfile for kingpin

FROM fedora

# Resolve platform dependencies
RUN dnf update -y
RUN dnf install -y nodejs npm
RUN npm install -g gulp-cli http-server

# Prepare working directory
RUN mkdir ~/kingpin
WORKDIR ~/kingpin
ADD . .

# Install application dependencies
RUN cd ~/kingpin; npm install

# Build project from source
RUN cd ~/kingpin; npm run build

# Start the server
ENTRYPOINT npm run serve
