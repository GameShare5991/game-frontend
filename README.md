# Games micro frontend component
### Displays the games available 
localhost:3001?name=NAMEHERE
##### Docker run command
```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    {name of the container}
```
