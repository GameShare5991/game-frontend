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

# build docker
npm run build
docker build . -t jackjackzhou/game-frontend

# push image:
docker push jackjackzhou/game-frontend

# kubectl create&run
minikube start
kubectl create -f game-frontend-deployment.yaml
minikube tunnel
minikube dashboard

# clean up
kubectl delete -f game-frontend-deployment.yaml