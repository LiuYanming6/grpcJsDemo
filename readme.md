
## 参考
https://github.com/grpc/grpc/tree/master/examples/node
https://github.com/grpc/grpc/blob/master/examples/node/package.json
js是异步的,所有操作都是基于回调
## 
proto 和 nettyStudy
## 
1. 动态生成, 不需要提前grpc proto文件生成代码

app/grpcServer.js
app/grpcClient.js

2 静态生成 写代码时有提示,可读性好
app/grpcServer2.js
app/grpcClient2.js

依赖protoc, grpc_tools_node_protoc
npm install -g grpc-tools #安装grpc_tools_node_protoc
`
mkdir static_codegen
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:static_codegen --grpc_out=static_codegen --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` proto/Student.proto



node_modules 项目依赖包
npm -g       全局