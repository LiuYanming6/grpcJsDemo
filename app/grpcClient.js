//dynamic codegen
var PROTO_FILE_PATH = '/home/liu/IdeaProjects/fron_end/grpc_demo/proto/Student.proto';
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.netty.proto;

var client = new grpcService.StudentService('localhost:8899', grpc.credentials.createInsecure());

client.GetRealnameByUsername({username:'李四'}, function (error, respData) {
   console.log(respData);
});