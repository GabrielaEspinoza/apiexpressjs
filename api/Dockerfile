FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
ENV PORT 5000
EXPOSE 5000
ENTRYPOINT ["npm","start"]
