Comandos basicos kubernates

minikube start

kubectl port-forward deployment/nodeserver 9000:3000

kubectl get (pods / ingress / deployment)
kubectl get pods --watch

kubectl apply -f .\k8s\deploy_node.yaml

docker build -t brugom/nodewebserver:v3.1 .

kubectl exec -it nodeserver-59df4d8d8b-v9kdx ls
kubectl exec -it nodeserver-59df4d8d8b-dlpst ls pvc

kubectl delete pod nodeserver-59df4d8d8b-v9kdx 
kubectl delete deployment nodeserver

kubectl exec -it nodeserver-0 apk add bash

kubectl get statefulset
kubectl get pvc


