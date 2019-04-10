// static code gen
var service = require('../static_codegen/proto/Student_grpc_pb');
var messages = require('../static_codegen/proto/Student_pb');

var grpc = require('grpc');

var client = new service.StudentServiceClient('localhost:8899', grpc.credentials.createInsecure());

var request = new messages.MyRequest();
request.setUsername("wang wu");

client.getRealnameByUsername(request, function (error, respData) {
    console.log(respData.getRealname())
});